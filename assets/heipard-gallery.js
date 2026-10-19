/* HeiPard: vertikale Vorschauspalte der Produktgalerie (Desktop ab 990 px).

   Dawn steuert weiterhin Hauptbild, Lightbox und Variantenwechsel (media-gallery.js,
   product-info.js, product-modal.js). Dieses Skript ergänzt nur zwei Dinge:
   - Pfeile oben und unten: vorheriges bzw. nächstes Bild (klickt die Nachbarkachel,
     damit Dawns eigener Ablauf greift). Sichtbar nur, wenn die Spalte mehr Kacheln
     hat, als hineinpassen; am Anfang bzw. Ende der Reihe ausgeblendet.
   - Die aktive Kachel wird bei jedem Wechsel des Hauptbilds weich in den sichtbaren
     Bereich gescrollt (Klick, Pfeil, Variantenwahl). Auslöser ist aria-current, das
     Dawn bei jedem Wechsel an der aktiven Kachel setzt.
   Mausrad und Touch scrollen die Spalte nativ (overflow-y). Markup: product-media-gallery
   (Klasse heipard-rail, Buttons data-heipard-thumbs), Layout: heipard-product.css. */
(function () {
  if (window.HeipardGallery) return;

  var desktop = window.matchMedia('(min-width: 990px)');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Kacheln, die tatsächlich angezeigt werden (Dawn blendet Bilder anderer Varianten per CSS aus).
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

  function setup(gallery) {
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
    update(true);
  }

  function init(scope) {
    (scope || document).querySelectorAll('media-gallery.heipard-rail').forEach(setup);
  }

  window.HeipardGallery = { init: init };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      init();
    });
  } else {
    init();
  }

  document.addEventListener('shopify:section:load', function (event) {
    init(event.target);
  });
})();
