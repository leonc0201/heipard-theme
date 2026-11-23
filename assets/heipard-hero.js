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
                Bildwechsel). Tempo normal oder schnell (data-tempo); fehlt eine, gilt die andere.
    Langsam     Hängt ein laufender Clip länger als 1 s, blendet er aus (Zielbild steht darunter). Bei 2G/3G
                (soweit gemeldet) wie im Datensparmodus kein Clip und kein Intro.
    Tag-Modus   data-tag
      aus       wie bisher
      hinweis   im Tag-Modus leuchtet der Schalter einmal je Sitzung nach etwa 2 s, darunter „Licht an?“;
                beides verschwindet beim ersten Umschalten. Bei reduzierter Bewegung nur das Etikett.
      intro     auch im Tag-Modus läuft „Licht an“ einmal je Sitzung (data-intro="tag"); danach blendet die
                ganze Seite in die Abendstimmung, ohne die Wahl zu speichern. Am Schalter steht dann
                „Licht aus“. Läuft der Clip nach 2,5 s nicht, bleibt die Seite im Tag-Modus.

  Teil K, Abschnitt 1.2 (23.11.2026), Tag-Modus intro:
    Sitzung     Nach dem Intro gilt die Abendstimmung für die Sitzung (sessionStorage heipard-theme-sitzung,
                layout/theme.liquid liest es vor dem ersten Bild). Dauerhaft speichert nur ein Klick.
    Ansage      Nach dem Wechsel meldet [data-hero-ansage] (aria-live polite) „Abendstimmung eingeschaltet“.
    Lesen       Wird vor dem Ende des Clips gescrollt (Hero weniger als halb sichtbar), getippt oder eine Taste
                gedrückt, wechselt die Seite nicht: Der Hero bleibt auf dem Abendbild, die Seite im Tag-Modus.
    Ohne Intro  Reduzierte Bewegung, Datensparmodus, kein Clip oder Clip startet nicht in 2,5 s: im Tag-Modus
                der Hinweis „Licht an?“ (einmal je Sitzung).
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
  var SESSION_KEY = 'heipard-theme-sitzung';
  // Lief das Intro schon in dieser Sitzung (vor diesem Aufruf)?
  var introGesehen = false;
  try { introGesehen = !!sessionStorage.getItem(INTRO_KEY); } catch (e) {}

  // Datensparmodus oder langsame Verbindung (2G/3G, soweit der Browser sie meldet): kein Clip.
  function saveData() {
    var c = navigator.connection;
    return !!(c && (c.saveData || /(^|-)(2g|3g)$/.test(c.effectiveType || ''))) ||
      window.matchMedia('(prefers-reduced-data: reduce)').matches;
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
    var schnell = parse(video.dataset[base + 'Schnell' + m]);
    var normal = parse(video.dataset[base + m]);
    if (tempo === 'schnell') return schnell.length ? schnell : normal;
    return normal.length ? normal : schnell;
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

  // Hinweis „Licht an?“ einmal je Sitzung, nur im Tag-Modus.
  function hinweisZeigen(delay) {
    if (root.getAttribute('data-theme') === 'dark') return;
    var seen = null;
    try { seen = sessionStorage.getItem(HINT_KEY); } catch (e) {}
    if (seen) return;
    onLoad(function () {
      setTimeout(function () {
        if (root.getAttribute('data-theme') === 'dark') return;
        try { sessionStorage.setItem(HINT_KEY, '1'); } catch (e) {}
        showHint(hero.dataset.textAn, !reduce.matches);
      }, delay);
    });
  }

  // Unsichtbare Ansage (Teil K 1.2): erst leeren, dann setzen, damit Vorleseprogramme sie sicher melden.
  function ansagen(text) {
    var box = hero.querySelector('[data-hero-ansage]');
    if (!box || !text) return;
    box.textContent = '';
    setTimeout(function () { box.textContent = text; }, 100);
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
      // Gilt für die Sitzung, nicht dauerhaft (Teil K 1.2).
      try { sessionStorage.setItem(SESSION_KEY, 'dark'); } catch (e) {}
      showHint(hero.dataset.textAus, false);
      ansagen(hero.dataset.textAnsage);
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
    // Hero zeigt schon das Abendbild (Intro beim Lesen, Teil K 1.2): kein Clip „Licht an“ von hell aus.
    if (t === 'dark' && !running && hero.getAttribute('data-bild') === 'abend') return;
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
    // Lesen erkennen bis zum Ende des Clips (Teil K 1.2): Hero weniger als halb sichtbar, Tippen, Taste.
    var gelesen = false;
    var lesen = function () { gelesen = true; };
    var io = null;
    document.addEventListener('pointerdown', lesen, true);
    document.addEventListener('keydown', lesen, true);
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(function (entries) {
        for (var i = 0; i < entries.length; i++) if (entries[i].intersectionRatio < 0.5) lesen();
      }, { threshold: [0, 0.25, 0.5, 0.75, 1] });
      io.observe(hero);
    }
    var aufraeumen = function () {
      document.removeEventListener('pointerdown', lesen, true);
      document.removeEventListener('keydown', lesen, true);
      if (io) io.disconnect();
    };
    onLoad(function () {
      try { sessionStorage.setItem(INTRO_KEY, '1'); } catch (e) {}
      if (root.getAttribute('data-theme') === 'dark') {
        aufraeumen();
        return;
      }
      introTag = true;
      play('on', 'abend', {
        onEnd: function () {
          aufraeumen();
          if (!introTag) return;
          introTag = false;
          // Beim Lesen bleibt die Seite hell, der Hero auf dem Abendbild.
          if (gelesen) return;
          if (root.getAttribute('data-theme') !== 'dark') pageToDark();
        },
        onFail: function () {
          aufraeumen();
          introTag = false;
          setBild('tag');
          // Clip startet nicht in 2,5 s: kein Intro, dafür der Hinweis.
          hinweisZeigen(0);
        }
      });
    });
  } else if (hero.getAttribute('data-bild') !== bildFuer(last)) {
    // Schon vor dem Skript umgeschaltet: Bild nachziehen.
    setBild(bildFuer(last));
  }

  if (tagModus === 'hinweis') {
    hinweisZeigen(2000);
  } else if (tagModus === 'intro' && !intro && !introGesehen) {
    // Kein Intro, obwohl es noch nicht lief (reduzierte Bewegung, Datensparmodus, kein Clip): Hinweis.
    hinweisZeigen(2000);
  }
})();
