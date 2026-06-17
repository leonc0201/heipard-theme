/*
  HeiPard Lichtschalter — Logik
  Schaltet das globale data-theme auf <html> zwischen "light" und "dark".
  Ablauf (aus docs/lovable-reference original-theme-provider.tsx):
    1. .theme-transitioning auf <html> setzen (löst den Licht-Puls aus)
    2. nach 120ms: data-theme umschalten + in localStorage speichern
    3. nach 750ms: .theme-transitioning wieder entfernen
  Die Initial-Setzung (kein FOUC) passiert im Inline-Script im <head>.
*/
(function () {
  var STORAGE_KEY = 'heipard-theme';
  var root = document.documentElement;

  function currentTheme() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function syncToggles(theme) {
    var buttons = document.querySelectorAll('[data-heipard-theme-toggle]');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    }
  }

  function applyTheme(next) {
    root.classList.add('theme-transitioning');
    window.setTimeout(function () {
      root.setAttribute('data-theme', next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        /* localStorage nicht verfügbar — Theme gilt dann nur für die Sitzung */
      }
      syncToggles(next);
    }, 120);
    window.setTimeout(function () {
      root.classList.remove('theme-transitioning');
    }, 750);
  }

  function onToggle() {
    applyTheme(currentTheme() === 'light' ? 'dark' : 'light');
  }

  function bind() {
    var buttons = document.querySelectorAll('[data-heipard-theme-toggle]');
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].dataset.heipardBound) continue;
      buttons[i].dataset.heipardBound = '1';
      buttons[i].addEventListener('click', onToggle);
    }
    syncToggles(currentTheme());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }

  // Im Shopify-Theme-Editor neu binden, wenn Sections neu gerendert werden
  document.addEventListener('shopify:section:load', bind);
})();
