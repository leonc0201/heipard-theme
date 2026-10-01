/*
  HeiPard PDP Feature-Baukasten: interaktive Blöcke.
  Stufe 1: Steuerung (I2 Dimmregler + I3 Modus-Umschalter).

  Die Zustände entstehen per CSS aus einem Basisbild (assets/heipard-feature.css):
    --fb-level   Helligkeit 0..1, vom Regler oder den Stufen-Chips gesetzt
    data-mode    dauer | atem | blinken, nur nach Klick auf einen Modus-Button

  Start immer bei voller Helligkeit im Dauerlicht. Bei prefers-reduced-motion
  wird kein Modus animiert. Verlässt der Block den sichtbaren Bereich, fällt er
  ins Dauerlicht zurück, damit nichts unbeobachtet weiterblinkt.
*/
(function () {
  if (window.HeipardFeature) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function initControl(root) {
    if (root.dataset.heipardReady) return;
    root.dataset.heipardReady = 'true';

    var stage = root.querySelector('.heipard-ctrl__stage');
    var panel = root.querySelector('.heipard-ctrl__panel');
    if (!stage || !panel) return;

    var range = root.querySelector('.heipard-ctrl__range');
    var output = root.querySelector('.heipard-ctrl__value');
    var levelButtons = root.querySelectorAll('[data-level]');
    var modeButtons = root.querySelectorAll('[data-mode]:not(.heipard-ctrl__stage)');
    var percentTemplate = root.dataset.percent || '__V__ %';

    function setLevel(value) {
      var level = Number(value);
      if (!isFinite(level)) return;
      stage.style.setProperty('--fb-level', String(level / 100));
      if (range && Number(range.value) !== level) range.value = String(level);
      if (output) output.textContent = percentTemplate.replace('__V__', String(level));
      levelButtons.forEach(function (button) {
        button.setAttribute('aria-pressed', String(Number(button.dataset.level) === level));
      });
    }

    function setMode(mode) {
      if (reduceMotion.matches) mode = 'dauer';
      stage.dataset.mode = mode;
      modeButtons.forEach(function (button) {
        button.setAttribute('aria-pressed', String(button.dataset.mode === mode));
      });
    }

    if (range) {
      range.addEventListener('input', function () {
        setLevel(range.value);
      });
    }
    levelButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        setLevel(button.dataset.level);
      });
    });
    modeButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        setMode(button.dataset.mode);
      });
    });

    if (modeButtons.length && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting && stage.dataset.mode !== 'dauer') setMode('dauer');
        });
      }).observe(stage);
    }

    var onMotionChange = function () {
      if (reduceMotion.matches) setMode('dauer');
    };
    if (reduceMotion.addEventListener) reduceMotion.addEventListener('change', onMotionChange);

    panel.hidden = false;
  }

  function init(scope) {
    (scope || document).querySelectorAll('[data-heipard-ctrl]').forEach(initControl);
  }

  window.HeipardFeature = { init: init };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      init();
    });
  } else {
    init();
  }

  // Theme-Editor: Sektion wurde neu gerendert
  document.addEventListener('shopify:section:load', function (event) {
    init(event.target);
  });
})();
