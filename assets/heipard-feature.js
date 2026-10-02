/*
  HeiPard PDP Feature-Baukasten: interaktive Blöcke.
  Steuerung (I2 Dimmregler + I3 Modus-Umschalter), I1 Schieber Aus und An,
  I4 Farbwechsel.

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
    var levelMax = Number(root.dataset.levelMax) || 100;

    function setLevel(value) {
      var level = Number(value);
      if (!isFinite(level)) return;
      stage.style.setProperty('--fb-level', String(level / levelMax));
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

  // I1 Schieber Aus und An. --pos ist die Reglerposition in Prozent: links davon
  // liegt der Zustand aus, rechts der Zustand an. Das echte Aus-Bild lädt erst
  // bei der ersten Interaktion, bis dahin zeigt CSS eine abgedunkelte Ableitung.
  function initSlider(root) {
    if (root.dataset.heipardReady) return;
    root.dataset.heipardReady = 'true';

    var stage = root.querySelector('.heipard-slide');
    var range = root.querySelector('.heipard-slide__range');
    var off = root.querySelector('.heipard-slide__off');
    if (!stage || !range || !off) return;

    var requested = false;
    function loadOffImage() {
      if (requested) return;
      requested = true;
      var src = off.dataset.offSrc;
      if (!src) return;
      var img = new Image();
      img.className = 'heipard-slide__img heipard-slide__img--real';
      img.alt = '';
      img.decoding = 'async';
      img.addEventListener('load', function () {
        off.appendChild(img);
        off.classList.add('has-real');
      });
      img.src = src;
    }

    function setPosition(value) {
      stage.style.setProperty('--pos', value + '%');
    }

    range.addEventListener('input', function () {
      loadOffImage();
      setPosition(range.value);
    });
    ['pointerenter', 'pointerdown', 'touchstart', 'focus'].forEach(function (type) {
      range.addEventListener(type, loadOffImage, { once: true, passive: true });
    });

    // Reduzierte Bewegung: Start im Zustand an, der Regler bleibt bedienbar.
    if (reduceMotion.matches) range.value = '0';
    setPosition(range.value);
    root.classList.add('is-ready');
  }

  // I4 Farbwechsel. data-heipard-color="fade": zwei deckungsgleiche Bilder, das
  // zweite lädt erst bei Interaktion und wird übergeblendet. "rgb": der Regler
  // dreht den Farbton des Basisbilds (--hue).
  function initColor(root) {
    if (root.dataset.heipardReady) return;
    root.dataset.heipardReady = 'true';

    var stage = root.querySelector('.heipard-color__stage');
    var panel = root.querySelector('.heipard-color__panel');
    if (!stage || !panel) return;

    if (root.dataset.heipardColor === 'rgb') {
      var range = root.querySelector('.heipard-color__range');
      if (!range) return;
      range.addEventListener('input', function () {
        stage.style.setProperty('--hue', range.value + 'deg');
      });
      panel.hidden = false;
      return;
    }

    var buttons = root.querySelectorAll('[data-state]:not(.heipard-color__stage)');
    var altImage = null;
    var pendingState = null;

    function showState(state) {
      stage.dataset.state = state;
      buttons.forEach(function (button) {
        button.setAttribute('aria-pressed', String(button.dataset.state === state));
      });
    }

    function loadAltImage() {
      if (altImage) return;
      altImage = new Image();
      altImage.className = 'heipard-color__img heipard-color__img--alt';
      altImage.alt = '';
      altImage.decoding = 'async';
      altImage.addEventListener('load', function () {
        stage.appendChild(altImage);
        // Layout einmal erzwingen, damit die Überblendung bei Deckkraft 0 beginnt.
        void altImage.offsetWidth;
        if (pendingState) showState(pendingState);
        pendingState = null;
      });
      altImage.src = stage.dataset.altSrc;
    }

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var state = button.dataset.state;
        if (state === 'b' && (!altImage || !altImage.complete || !altImage.parentNode)) {
          pendingState = 'b';
          buttons.forEach(function (other) {
            other.setAttribute('aria-pressed', String(other === button));
          });
          loadAltImage();
          return;
        }
        pendingState = null;
        showState(state);
      });
      ['pointerenter', 'focus'].forEach(function (type) {
        button.addEventListener(type, loadAltImage, { once: true, passive: true });
      });
    });

    panel.hidden = false;
  }

  function init(scope) {
    var base = scope || document;
    base.querySelectorAll('[data-heipard-ctrl]').forEach(initControl);
    base.querySelectorAll('[data-heipard-slider]').forEach(initSlider);
    base.querySelectorAll('[data-heipard-color]').forEach(initColor);
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
