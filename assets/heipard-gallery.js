/* HeiPard: Ergänzungen der Produktgalerie im Hauptprodukt.

   Dawn steuert weiterhin Hauptbild, Lightbox und Variantenwechsel (media-gallery.js,
   product-info.js, product-modal.js). Dieses Skript ergänzt:

   1. Vertikale Vorschauspalte (Desktop ab 990 px, media-gallery.heipard-rail)
      - Pfeile oben und unten: vorheriges bzw. nächstes Bild (klickt die Nachbarkachel,
        damit Dawns eigener Ablauf greift). Sichtbar nur, wenn die Spalte mehr Kacheln
        hat, als hineinpassen; am Anfang bzw. Ende der Reihe ausgeblendet.
      - Die aktive Kachel wird bei jedem Wechsel des Hauptbilds weich in den sichtbaren
        Bereich gescrollt (Klick, Pfeil, Variantenwahl). Auslöser ist aria-current, das
        Dawn bei jedem Wechsel an der aktiven Kachel setzt.
      Mausrad und Touch scrollen die Spalte nativ (overflow-y). Layout: heipard-product.css.

   2. Farbfilter (alle Breiten), Daten aus dem Varianten-Metafeld heipard.galerie_medien,
      von product-media-gallery.liquid als JSON gerendert (script[data-heipard-galerie]).
      Sichtbar sind die Medien der gewählten Variante, ihr Variantenbild und alle Medien,
      die in keiner Liste stehen. Ohne Liste für die gewählte Variante: keine Filterung.
      Beim Laden setzt Liquid die Klassen schon, beim Variantenwechsel (Dawns variant-change)
      rechnet dieses Skript neu, ohne zusätzlichen Serverabruf. Gefiltert werden Hauptbilder,
      Vorschaubilder und Lightbox; Spalte, Pfeile und Dawns Slider zählen danach neu. */
(function () {
  if (window.HeipardGallery) return;

  var desktop = window.matchMedia('(min-width: 990px)');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var FILTERED = 'heipard-media--filtered';

  // ---------------------------------------------------------------- Vorschauspalte

  // Kacheln, die tatsächlich angezeigt werden (ausgeblendet sind Bilder anderer Varianten
  // durch Dawn und Medien anderer Lichtfarben durch den Farbfilter).
  function shownItems(list) {
    return Array.prototype.filter.call(list.querySelectorAll('.thumbnail-list__item'), function (item) {
      return item.offsetParent !== null;
    });
  }

  function activeIndex(items) {
    for (var i = 0; i < items.length; i++) {
      if (items[i].querySelector('.thumbnail[aria-current="true"]')) return i;
    }
    return -1;
  }

  // Nur die Spalte scrollen, nie die Seite (deshalb kein scrollIntoView).
  function reveal(list, item, instant) {
    if (!item) return;
    var top = item.offsetTop;
    var bottom = top + item.offsetHeight;
    var view = list.scrollTop;
    var target = null;
    if (top < view) target = top;
    else if (bottom > view + list.clientHeight) target = bottom - list.clientHeight;
    if (target === null) return;
    list.scrollTo({ top: target, behavior: instant || reduceMotion.matches ? 'auto' : 'smooth' });
  }

  function setupRail(gallery) {
    if (gallery.dataset.heipardRail) return;
    var rail = gallery.querySelector('.thumbnail-slider');
    var list = rail && rail.querySelector('.thumbnail-list');
    var prev = rail && rail.querySelector('[data-heipard-thumbs="prev"]');
    var next = rail && rail.querySelector('[data-heipard-thumbs="next"]');
    if (!list || !prev || !next) return;
    gallery.dataset.heipardRail = 'true';

    var frame = 0;

    function setHidden(button, other, hide) {
      if (hide && document.activeElement === button && !other.hidden) other.focus();
      button.hidden = hide;
    }

    // follow: aktive Kachel in den sichtbaren Bereich holen; instant: ohne Animation
    // (nach Größenänderung der Spalte, damit nichts nachrutscht).
    function update(follow, instant) {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(function () {
        if (!desktop.matches) {
          prev.hidden = true;
          next.hidden = true;
          return;
        }
        var items = shownItems(list);
        var index = activeIndex(items);
        var overflow = list.scrollHeight > list.clientHeight + 1;
        setHidden(prev, next, !overflow || index <= 0);
        setHidden(next, prev, !overflow || index < 0 || index >= items.length - 1);
        if (follow) reveal(list, items[index], instant);
      });
    }

    function step(direction) {
      var items = shownItems(list);
      var target = items[activeIndex(items) + direction];
      var button = target && target.querySelector('.thumbnail');
      if (button) button.click();
    }

    prev.addEventListener('click', function () {
      step(-1);
    });
    next.addEventListener('click', function () {
      step(1);
    });

    new MutationObserver(function () {
      update(true);
    }).observe(list, { subtree: true, childList: true, attributes: true, attributeFilter: ['aria-current'] });

    if ('ResizeObserver' in window) {
      new ResizeObserver(function () {
        update(true, true);
      }).observe(list);
    }
    if (desktop.addEventListener) {
      desktop.addEventListener('change', function () {
        update(true);
      });
    }
    gallery.heipardRailUpdate = update;
    update(true);
  }

  // ---------------------------------------------------------------- Farbfilter

  // "template--…__main-123" (Galerie) oder "123" (Lightbox) -> "123"
  function mediaId(value) {
    value = String(value || '');
    return value.slice(value.lastIndexOf('-') + 1);
  }

  function readFilter(gallery) {
    var script = gallery.querySelector('script[data-heipard-galerie]');
    if (!script) return null;
    var data;
    try {
      data = JSON.parse(script.textContent);
    } catch (error) {
      return null;
    }
    var lists = data.listen || {};
    var inAnyList = {};
    Object.keys(lists).forEach(function (variant) {
      lists[variant].forEach(function (id) {
        inAnyList[id] = true;
      });
    });
    var images = data.bilder || {};
    var variantImages = {};
    Object.keys(images).forEach(function (variant) {
      if (images[variant]) variantImages[images[variant]] = true;
    });
    return { lists: lists, images: images, inAnyList: inAnyList, first: data.erstes, variantImages: variantImages };
  }

  // Medien-IDs, die für diese Variante ausgeblendet werden; leeres Objekt = keine Filterung.
  function hiddenFor(filter, variantId) {
    var own = filter.lists[variantId] || [];
    var hidden = {};
    if (!own.length) return hidden;
    var keep = {};
    own.forEach(function (id) {
      keep[id] = true;
    });
    if (filter.images[variantId]) keep[filter.images[variantId]] = true;
    Object.keys(filter.inAnyList).forEach(function (id) {
      if (!keep[id]) hidden[id] = true;
    });
    return hidden;
  }

  function applyFilter(gallery, variantId) {
    var filter = gallery.heipardFilter;
    if (!filter || !variantId) return;
    var hidden = hiddenFor(filter, String(variantId));
    function mark(element, id) {
      element.classList.toggle(FILTERED, hidden[mediaId(id)] === true);
    }

    gallery.querySelectorAll('li[data-media-id]').forEach(function (item) {
      mark(item, item.dataset.mediaId);
    });
    gallery.querySelectorAll('li[data-target]').forEach(function (item) {
      mark(item, item.dataset.target);
    });
    var modal = document.getElementById('ProductModal-' + gallery.id.replace(/^MediaGallery-/, ''));
    if (modal) {
      modal.querySelectorAll('.product-media-modal__content [data-media-id]').forEach(function (element) {
        mark(element, element.dataset.mediaId);
      });
    }

    // Position 1 bleibt bei aktiver Liste sichtbar, auch wenn sie das Bild einer anderen Variante
    // ist. Hauptbilder und Lightbox übernimmt Dawn beim Variantenwechsel aus dem neu gerenderten
    // Markup (dort rechnet Liquid das schon), die Vorschaubilder rendert Dawn nicht neu.
    if (filter.first && filter.variantImages[filter.first]) {
      var keepFirst = (filter.lists[String(variantId)] || []).length > 0;
      gallery.querySelectorAll('li[data-target]').forEach(function (item) {
        if (mediaId(item.dataset.target) === String(filter.first)) {
          item.classList.toggle('thumbnail-list_item--variant', !keepFirst);
        }
      });
    }

    // Ist das aktive Hauptbild jetzt ausgeblendet (Variante ohne eigenes Bild), das erste
    // sichtbare zeigen.
    var active = gallery.querySelector('li[data-media-id].is-active');
    if (active && active.classList.contains(FILTERED) && gallery.setActiveMedia) {
      var first = Array.prototype.find.call(gallery.querySelectorAll('li[data-media-id]'), function (item) {
        return !item.classList.contains(FILTERED);
      });
      if (first) gallery.setActiveMedia(first.dataset.mediaId, false);
    }

    // Dawns Slider (Handy: Wischgalerie und Vorschaubildstreifen) und die Spalte neu zählen.
    var viewer = gallery.querySelector('[id^="GalleryViewer"]');
    var thumbnails = gallery.querySelector('[id^="GalleryThumbnails"]');
    if (viewer && viewer.resetPages) viewer.resetPages();
    if (thumbnails && thumbnails.resetPages) thumbnails.resetPages();
    if (gallery.heipardRailUpdate) gallery.heipardRailUpdate(true);
  }

  function setupFilter(gallery) {
    if (gallery.heipardFilter !== undefined) return;
    gallery.heipardFilter = readFilter(gallery);
    if (!gallery.heipardFilter) return;
    var section = gallery.id.replace(/^MediaGallery-/, '');
    var input = document.querySelector('#product-form-' + section + ' input[name="id"]');
    applyFilter(gallery, input && input.value);
  }

  function onVariantChange(event) {
    var data = event && event.data;
    if (!data || !data.variant) return;
    var gallery = document.getElementById('MediaGallery-' + data.sectionId);
    if (gallery && gallery.heipardFilter) applyFilter(gallery, data.variant.id);
  }

  function subscribeVariants() {
    // PUB_SUB_EVENTS ist in constants.js als const deklariert und damit keine window-Eigenschaft.
    if (typeof subscribe !== 'function' || typeof PUB_SUB_EVENTS === 'undefined') return false;
    subscribe(PUB_SUB_EVENTS.variantChange, onVariantChange);
    return true;
  }

  // ---------------------------------------------------------------- Start

  function init(scope) {
    var root = scope || document;
    root.querySelectorAll('media-gallery.heipard-rail').forEach(setupRail);
    root.querySelectorAll('media-gallery').forEach(setupFilter);
  }

  window.HeipardGallery = { init: init };

  function start() {
    subscribeVariants();
    init();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }

  document.addEventListener('shopify:section:load', function (event) {
    init(event.target);
  });
})();
