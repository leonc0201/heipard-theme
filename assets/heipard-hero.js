/*
  HeiPard Hero: Der Lichtschalter schaltet auch das Bild (Auftrag Teil H, Abschnitt 3, Vorschau).
  Markup und Einstellungen: sections/heipard-hero.liquid (data-mode, data-bild, video.heipard-hero__clip).

  Ablauf beim Umschalten (data-theme auf <html> ändert sich, heipard-theme-toggle.js):
    bilder      data-bild wechselt, CSS blendet weich über (0,8 s).
    clip        Der passende Clip (an: Tag zu Abend, aus: Abend zu Tag) startet. Erst wenn sein erstes
                Bild läuft, wechselt data-bild unter dem Clip; am Ende blendet der Clip aus und gibt das
                Zielbild frei (letztes Bild des Clips = Zielbild). Läuft er nach 2,5 s nicht, wechselt
                nur das Bild. Umschalten mitten im Clip: der Gegenclip setzt an der gespiegelten Stelle ein.
    clip_intro  Wie clip, dazu beim ersten Aufruf je Sitzung in der Abendstimmung einmal „Licht an“ von
                selbst (nach dem Laden der Seite, damit das größte Bild nicht warten muss).
  Clips werden erst beim Zeigen auf den Schalter (Maus, Fokus, Antippen) geladen. Kein Clip bei
  reduzierter Bewegung oder Datensparmodus.

  Teil I, Abschnitte 7.2 und 7.3 (22.11.2026, Vorschau):
    Fassungen   Unter 750 px Breite nur die Mobil-Fassungen (ohne Mobil-Fassung kein Clip, nur der
                Bildwechsel). Tempo normal oder schnell (data-tempo); fehlt die schnelle Fassung, gilt normal.
    Langsam     Hängt ein laufender Clip länger als 1 s, blendet er aus (Zielbild steht darunter). Bei 2G/3G
                (soweit gemeldet) wie im Datensparmodus kein Clip und kein Intro.
    Tag-Modus   data-tag
      aus       wie bisher
      hinweis   im Tag-Modus leuchtet der Schalter einmal je Sitzung nach etwa 2 s, darunter „Licht an?“;
                beides verschwindet beim ersten Umschalten. Bei reduzierter Bewegung nur das Etikett.
      intro     auch im Tag-Modus läuft „Licht an“ einmal je Sitzung (data-intro="tag"); danach blendet die
                ganze Seite in die Abendstimmung, ohne die Wahl zu speichern. Am Schalter steht dann
                „Licht aus“. Läuft der Clip nach 2,5 s nicht, bleibt die Seite im Tag-Modus.
*/
(function () {
  var hero = document.querySelector('[data-heipard-hero]');
  if (!hero || hero.dataset.heipardReady) return;
  hero.dataset.heipardReady = 'true';

  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var narrow = window.matchMedia('(max-width: 749px)');
  var mode = hero.dataset.mode;
  var tempo = hero.dataset.tempo === 'schnell' ? 'schnell' : 'normal';
  var tagModus = hero.dataset.tag || 'aus';
  var video = hero.querySelector('.heipard-hero__clip');
  var INTRO_KEY = 'heipard-hero-intro';
  var HINT_KEY = 'heipard-hero-hinweis';

  // Datensparmodus oder langsame Verbindung (2G/3G, soweit der Browser sie meldet): kein Clip.
  function saveData() {
    var c = navigator.connection;
    return !!(c && (c.saveData || /(^|-)(2g|3g)$/.test(c.effectiveType || '')));
  }
  function blocked() {
    return reduce.matches || saveData() || !video;
  }
  var useClips = (mode === 'clip' || mode === 'clip_intro') && !!video;

  function parse(json) {
    try {
      return JSON.parse(json || '[]').filter(function (s) { return s && s.u && s.h; }).sort(function (a, b) { return a.h - b.h; });
    } catch (e) {
      return [];
    }
  }
  // Fassungsliste für eine Richtung (on | off): Tempo und Bildschirmbreite.
  function listFor(dir) {
    if (!video) return [];
    var base = 'clip' + (dir === 'on' ? 'On' : 'Off');
    var m = narrow.matches ? 'M' : '';
    var list = tempo === 'schnell' ? parse(video.dataset[base + 'Schnell' + m]) : [];
    if (!list.length) list = parse(video.dataset[base + m]);
    return list;
  }

  // Kleinste Fassung, die den Hero (object-fit: cover) ausreichend füllt; Pixeldichte höchstens 1,5.
  function pick(list) {
    if (!list.length) return '';
    var r = hero.getBoundingClientRect();
    var top = list[list.length - 1];
    var ratio = top.w && top.h ? top.w / top.h : 16 / 9;
    var need = Math.max(r.width / ratio, r.height) * Math.min(window.devicePixelRatio || 1, 1.5);
    for (var i = 0; i < list.length; i++) if (list[i].h >= need * 0.75) return list[i].u;
    return top.u;
  }

  // Quelle freigeben: bricht den Download ab, nachdem ein Clip nicht lief oder hing.
  function release() {
    if (!video || !video.getAttribute('src')) return;
    try {
      video.removeAttribute('src');
      video.load();
    } catch (e) {}
  }

  function bildFuer(theme) { return theme === 'dark' ? 'abend' : 'tag'; }
  function setBild(b) { hero.setAttribute('data-bild', b); }

  var token = 0;
  var running = null; // { dir }

  // opts.onEnd: nach dem Ende des Clips; opts.onFail: statt des Bildwechsels, wenn der Clip nicht läuft.
  function play(dir, target, opts) {
    opts = opts || {};
    var my = ++token;
    var list = listFor(dir);
    var fail = function () {
      if (video) { video.pause(); video.classList.remove('is-on'); release(); }
      running = null;
      if (opts.onFail) opts.onFail();
      else setBild(target);
    };
    if (!useClips || blocked() || !list.length) {
      fail();
      return;
    }
    var src = pick(list);
    var startAt = 0;
    if (running && running.dir !== dir && !video.paused && isFinite(video.duration)) {
      startAt = Math.max(0, video.duration - video.currentTime);
    }
    var started = false;
    var timer = setTimeout(function () {
      if (my !== token || started) return;
      fail();
    }, 2500);
    var onPlaying = function () {
      if (my !== token) return;
      started = true;
      clearTimeout(timer);
      video.classList.add('is-on');
      setBild(target);
    };
    video.onended = function () {
      if (my !== token) return;
      video.classList.remove('is-on');
      running = null;
      if (opts.onEnd) opts.onEnd();
    };
    // Hängt der laufende Clip länger als 1 s (langsame Verbindung), blendet er aus. Das Zielbild steht schon
    // darunter, es gilt wie das Ende des Clips (Teil I, Messung unter Slow 4G).
    var stallTimer = null;
    video.onwaiting = function () {
      if (my !== token || !started) return;
      var t = video.currentTime;
      clearTimeout(stallTimer);
      stallTimer = setTimeout(function () {
        if (my !== token || video.paused || video.ended || video.currentTime - t > 0.1) return;
        video.pause();
        video.classList.remove('is-on');
        // Nach der Blende (0,4 s) die Quelle freigeben, damit der Browser nicht weiterlädt.
        setTimeout(function () { if (my === token) release(); }, 450);
        running = null;
        if (opts.onEnd) opts.onEnd();
      }, 1000);
    };
    running = { dir: dir };
    var go = function () {
      if (my !== token) return;
      try { video.currentTime = startAt; } catch (e) {}
      video.addEventListener('playing', onPlaying, { once: true });
      var p = video.play();
      if (p && p.catch) p.catch(function (err) {
        if (my !== token || started || (err && err.name === 'AbortError')) return;
        clearTimeout(timer);
        fail();
      });
    };
    if (video.getAttribute('src') !== src) {
      video.preload = 'auto';
      video.src = src;
      video.addEventListener('loadedmetadata', go, { once: true });
      video.load();
    } else if (video.readyState >= 1) {
      go();
    } else {
      video.addEventListener('loadedmetadata', go, { once: true });
    }
  }

  // Vorladen des nächsten Clips, sobald jemand zum Schalter greift.
  function preload() {
    if (!useClips || blocked() || running) return;
    var src = pick(listFor(root.getAttribute('data-theme') === 'dark' ? 'off' : 'on'));
    if (!src || video.getAttribute('src') === src) return;
    video.preload = 'auto';
    video.src = src;
    video.load();
  }
  ['pointerover', 'focusin', 'pointerdown', 'touchstart'].forEach(function (type) {
    document.addEventListener(type, function (e) {
      if (e.target && e.target.closest && e.target.closest('[data-heipard-theme-toggle]')) preload();
    }, { passive: true });
  });

  // --- Hinweis am Schalter (7.3) -------------------------------------------------------------
  var hint = null;
  function visibleToggle() {
    var all = document.querySelectorAll('[data-heipard-theme-toggle]');
    for (var i = 0; i < all.length; i++) if (all[i].offsetParent !== null) return all[i];
    return null;
  }
  function showHint(text, glow) {
    hideHint();
    var btn = visibleToggle();
    if (!btn || !text) return;
    var label = document.createElement('span');
    label.className = 'heipard-switch__hinweis';
    label.setAttribute('aria-hidden', 'true');
    label.textContent = text;
    btn.appendChild(label);
    btn.classList.add('heipard-switch--hinweis');
    if (!glow) btn.classList.add('heipard-switch--ohne-leuchten');
    requestAnimationFrame(function () { label.classList.add('is-on'); });
    hint = { btn: btn, label: label };
  }
  function hideHint() {
    if (!hint) return;
    hint.btn.classList.remove('heipard-switch--hinweis', 'heipard-switch--ohne-leuchten');
    if (hint.label.parentNode) hint.label.parentNode.removeChild(hint.label);
    hint = null;
  }

  // --- Intro auch am Tag (7.3 b): Seite ohne Speichern in die Abendstimmung ---------------------
  var selfSwitch = false;
  var introTag = false;
  function pageToDark() {
    selfSwitch = true;
    root.classList.add('theme-transitioning');
    setTimeout(function () {
      root.setAttribute('data-theme', 'dark');
      var all = document.querySelectorAll('[data-heipard-theme-toggle]');
      for (var i = 0; i < all.length; i++) all[i].setAttribute('aria-pressed', 'true');
      showHint(hero.dataset.textAus, false);
    }, 120);
    setTimeout(function () { root.classList.remove('theme-transitioning'); }, 750);
  }

  var last = root.getAttribute('data-theme');
  new MutationObserver(function () {
    var t = root.getAttribute('data-theme');
    if (t === last) return;
    last = t;
    if (selfSwitch) {
      // Vom Intro selbst gesetzt: der Hero zeigt schon das Abendbild.
      selfSwitch = false;
      return;
    }
    hideHint();
    if (introTag && t === 'dark' && running && running.dir === 'on') {
      // Während des Intros selbst eingeschaltet: Clip läuft weiter, kein Seitenwechsel am Ende.
      introTag = false;
      return;
    }
    introTag = false;
    play(t === 'dark' ? 'on' : 'off', bildFuer(t));
  }).observe(root, { attributes: true, attributeFilter: ['data-theme'] });

  function onLoad(fn) {
    if (document.readyState === 'complete') fn();
    else window.addEventListener('load', fn, { once: true });
  }

  var intro = hero.dataset.intro;
  if (intro === 'abend') {
    // Fassung 3: Das Inline-Skript hat bei erstem Abendaufruf das Tagbild gesetzt.
    onLoad(function () {
      try { sessionStorage.setItem(INTRO_KEY, '1'); } catch (e) {}
      if (root.getAttribute('data-theme') !== 'dark') return;
      play('on', 'abend');
    });
  } else if (intro === 'tag') {
    onLoad(function () {
      try { sessionStorage.setItem(INTRO_KEY, '1'); } catch (e) {}
      if (root.getAttribute('data-theme') === 'dark') return;
      introTag = true;
      play('on', 'abend', {
        onEnd: function () {
          if (!introTag) return;
          introTag = false;
          if (root.getAttribute('data-theme') !== 'dark') pageToDark();
        },
        onFail: function () {
          introTag = false;
          setBild('tag');
        }
      });
    });
  } else if (hero.getAttribute('data-bild') !== bildFuer(last)) {
    // Schon vor dem Skript umgeschaltet: Bild nachziehen.
    setBild(bildFuer(last));
  }

  if (tagModus === 'hinweis' && root.getAttribute('data-theme') !== 'dark') {
    var seenHint = null;
    try { seenHint = sessionStorage.getItem(HINT_KEY); } catch (e) {}
    if (!seenHint) {
      onLoad(function () {
        setTimeout(function () {
          if (root.getAttribute('data-theme') === 'dark') return;
          try { sessionStorage.setItem(HINT_KEY, '1'); } catch (e) {}
          showHint(hero.dataset.textAn, !reduce.matches);
        }, 2000);
      });
    }
  }
})();
