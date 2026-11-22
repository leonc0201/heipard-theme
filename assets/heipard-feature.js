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

  // Clips über dem Bild (Auftrag Teil H, 22.11.2026). Je Video zwei Phasen: "einmal" (data-clip-once,
  // läuft je Seitenaufruf ein Mal) und "schleife" (data-clip-loop, läuft nur bei Sichtbarkeit).
  // Das Bild darunter bleibt Startbild und Ersatz: der Clip blendet erst mit seinem ersten Bild ein
  // und nach "einmal" wieder aus. Höchstens ein Clip spielt zugleich, der sichtbarste gewinnt.
  // Kein Clip bei reduzierter Bewegung, Datensparmodus oder fehlgeschlagenem Autoplay.
  var clips = [];
  var reduceData = window.matchMedia('(prefers-reduced-data: reduce)');
  var nearObserver = null;
  var seenObserver = null;
  var START = 0.5;

  function clipsBlocked() {
    var c = navigator.connection;
    var slow = !!(c && /(^|-)(2g|3g)$/.test(c.effectiveType || ''));
    return reduceMotion.matches || reduceData.matches || !!(c && c.saveData) || slow;
  }

  function parseSources(json) {
    try {
      var list = JSON.parse(json || '[]');
      return list.filter(function (s) { return s && s.u && s.h; }).sort(function (a, b) { return a.h - b.h; });
    } catch (e) {
      return [];
    }
  }

  // Kleinste Fassung, die die dargestellte Fläche (Ausschnitt wie object-fit: cover) scharf füllt.
  function pickSource(list, el) {
    if (!list.length) return '';
    var rect = el.getBoundingClientRect();
    var top = list[list.length - 1];
    var ratio = top.w && top.h ? top.w / top.h : 16 / 9;
    var need = Math.max(rect.width / ratio, rect.height) * Math.min(window.devicePixelRatio || 1, 2);
    for (var i = 0; i < list.length; i++) {
      if (list[i].h >= need * 0.9) return list[i].u;
    }
    return top.u;
  }

  function Clip(video) {
    this.video = video;
    this.once = parseSources(video.dataset.clipOnce);
    this.loop = parseSources(video.dataset.clipLoop);
    this.phase = this.once.length ? 'once' : (this.loop.length ? 'loop' : 'done');
    this.armed = false;
    this.seen = 0;
    this.wantsPlay = false;
    video._heipardClip = this;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.disablePictureInPicture = true;
    var self = this;
    video.addEventListener('playing', function () { video.classList.add('is-on'); });
    video.addEventListener('ended', function () { self.ended(); });
    video.addEventListener('error', function () { self.stop(); });
  }

  Clip.prototype.arm = function () {
    if (this.armed || this.phase === 'done') return;
    this.armed = true;
    this.load(this.phase === 'once' ? this.once : this.loop);
  };

  Clip.prototype.load = function (list) {
    var video = this.video;
    this.waiting = false;
    this.patience = false;
    video.loop = this.phase === 'loop';
    video.preload = 'auto';
    video.src = pickSource(list, video);
    video.load();
  };

  Clip.prototype.play = function () {
    if (this.phase === 'done' || !this.armed) return;
    if (!this.video.paused) return;
    var self = this;
    // Erst starten, wenn der Browser genug gepuffert hat (sonst stockt der Clip, z. B. auf dem Bild
    // „Kette aus“). Bis dahin bleibt das Bild stehen. Nach 8 s trotzdem versuchen: iOS puffert
    // ohne play() oft nicht bis zum Ende.
    if (this.video.readyState < 4 && !this.patience) {
      if (!this.waiting) {
        this.waiting = true;
        var ready = function () {
          if (!self.waiting) return;
          self.waiting = false;
          schedule();
        };
        this.video.addEventListener('canplaythrough', ready, { once: true });
        setTimeout(function () { self.patience = true; ready(); }, 8000);
      }
      return;
    }
    var p = this.video.play();
    if (p && p.catch) p.catch(function (err) {
      // Pause durch die Steuerung ist kein Fehler; abgelehntes Autoplay (z. B. Stromsparmodus) beendet den Clip.
      if (err && err.name === 'NotAllowedError') self.stop();
    });
  };

  Clip.prototype.pause = function () {
    if (!this.video.paused) this.video.pause();
  };

  Clip.prototype.ended = function () {
    var video = this.video;
    if (this.phase === 'once' && this.loop.length) {
      // Letztes Bild von "einmal" = Bild = erstes Bild der Schleife: ausblenden, Schleife laden.
      this.phase = 'loop';
      video.classList.remove('is-on');
      this.load(this.loop);
      schedule();
      return;
    }
    this.stop();
  };

  Clip.prototype.stop = function () {
    var video = this.video;
    this.phase = 'done';
    this.pause();
    video.classList.remove('is-on');
    if (seenObserver) seenObserver.unobserve(video);
    if (nearObserver) nearObserver.unobserve(video);
    // Nach der Blende den Puffer freigeben.
    setTimeout(function () {
      video.removeAttribute('src');
      video.load();
    }, 600);
  };

  function schedule() {
    clips = clips.filter(function (c) { return c.phase !== 'done' && c.video.isConnected; });
    var best = null;
    clips.forEach(function (c) {
      if (c.phase === 'done' || !c.armed || document.hidden || clipsBlocked()) return;
      var playing = !c.video.paused;
      var ok = playing ? c.seen > 0 : c.seen >= START;
      if (!ok) return;
      // Kleiner Vorsprung für den laufenden Clip, damit zwei Clips nicht hin und her wechseln.
      var score = c.seen + (playing ? 0.15 : 0);
      if (!best || score > best.score) best = { clip: c, score: score };
    });
    clips.forEach(function (c) {
      if (!best || c !== best.clip) c.pause();
    });
    if (best) best.clip.play();
  }

  function visibleShare(entry) {
    if (!entry.isIntersecting) return 0;
    var h = Math.min(entry.boundingClientRect.height, window.innerHeight || entry.boundingClientRect.height);
    return h > 0 ? Math.min(1, entry.intersectionRect.height / h) : 0;
  }

  function observers() {
    if (seenObserver || !('IntersectionObserver' in window)) return !!seenObserver;
    nearObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && entry.target._heipardClip) entry.target._heipardClip.arm();
      });
      // Die Sichtbarkeit kann im selben Bild schon gemeldet sein: danach neu entscheiden.
      schedule();
    }, { rootMargin: '400px 0px' });
    var steps = [];
    for (var i = 0; i <= 20; i++) steps.push(i / 20);
    seenObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var c = entry.target._heipardClip;
        if (c) c.seen = visibleShare(entry);
      });
      schedule();
    }, { threshold: steps });
    document.addEventListener('visibilitychange', schedule);
    var onBlock = function () {
      if (!clipsBlocked()) return;
      clips.forEach(function (c) { c.stop(); });
    };
    if (reduceMotion.addEventListener) reduceMotion.addEventListener('change', onBlock);
    if (reduceData.addEventListener) reduceData.addEventListener('change', onBlock);
    return true;
  }

  function initClip(video) {
    if (video._heipardClip) {
      // Beim Variantenwechsel übernommenes Element: Zustand bleibt, nur weiterspielen lassen.
      schedule();
      return;
    }
    if (clipsBlocked() || !observers()) {
      video.remove();
      return;
    }
    var c = new Clip(video);
    if (c.phase === 'done') {
      video.remove();
      return;
    }
    clips.push(c);
    nearObserver.observe(video);
    seenObserver.observe(video);
  }

  function init(scope) {
    var base = scope || document;
    base.querySelectorAll('[data-heipard-ctrl]').forEach(initControl);
    base.querySelectorAll('[data-heipard-slider]').forEach(initSlider);
    base.querySelectorAll('[data-heipard-color]').forEach(initColor);
    base.querySelectorAll('video[data-heipard-clip]').forEach(initClip);
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
