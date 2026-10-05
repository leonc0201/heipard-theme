/* HeiPard: variantenabhängige Werte ohne Neuladen.
   Dawn meldet jeden Variantenwechsel über publish('variant-change', { data: { sectionId, html, variant } }).
   html ist die Hauptprodukt-Sektion, bereits für die gewählte Variante gerendert.
   1. Alles mit data-heipard-vswap in dieser Sektion (Spec-Kacheln) wird daraus ersetzt.
   2. Jede HeiPard-Feature-Sektion wird über die Section Rendering API mit ?variant=ID neu geholt
      und als Ganzes ersetzt, danach werden die interaktiven Blöcke neu initialisiert. */
(function () {
  if (window.HeipardVariant) return;

  var FEATURE = '[data-heipard-feature-section]';

  function swapMarked(root, source) {
    if (!root || !source) return;
    root.querySelectorAll('[data-heipard-vswap]').forEach(function (el) {
      var key = el.getAttribute('data-heipard-vswap');
      var next = source.querySelector('[data-heipard-vswap="' + key + '"]');
      if (next && next.outerHTML !== el.outerHTML) el.replaceWith(next);
    });
  }

  function loadFeatureScript() {
    if (window.HeipardFeature || document.querySelector('script[src*="heipard-feature.js"]')) return;
    var src = document.querySelector(FEATURE)?.dataset.heipardFeatureScript;
    if (!src) return;
    var s = document.createElement('script');
    s.src = src;
    s.defer = true;
    document.head.appendChild(s);
  }

  function refreshFeature(section, variantId) {
    var id = section.id.replace(/^shopify-section-/, '');
    var url = window.location.pathname + '?variant=' + encodeURIComponent(variantId) + '&section_id=' + encodeURIComponent(id);
    return fetch(url)
      .then(function (r) { return r.text(); })
      .then(function (text) {
        var doc = new DOMParser().parseFromString(text, 'text/html');
        var next = doc.getElementById(section.id) || doc.body;
        section.innerHTML = next.innerHTML;
        if (section.innerHTML.indexOf('data-heipard-') !== -1) {
          if (window.HeipardFeature) window.HeipardFeature.init(section);
          else loadFeatureScript();
        }
      })
      .catch(function () {});
  }

  function onVariantChange(event) {
    var data = event && event.data;
    if (!data || !data.variant || !data.variant.id) return;
    var main = document.getElementById('shopify-section-' + data.sectionId) || document;
    swapMarked(main, data.html);
    document.querySelectorAll(FEATURE).forEach(function (section) {
      refreshFeature(section.closest('.shopify-section') || section, data.variant.id);
    });
  }

  function start() {
    if (typeof subscribe !== 'function' || !window.PUB_SUB_EVENTS) return false;
    subscribe(PUB_SUB_EVENTS.variantChange, onVariantChange);
    return true;
  }

  window.HeipardVariant = { refresh: onVariantChange };

  if (!start()) {
    document.addEventListener('DOMContentLoaded', start);
  }
})();
