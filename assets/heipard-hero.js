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
*/
(function () {
  var hero = document.querySelector('[data-heipard-hero]');
  if (!hero || hero.dataset.heipardReady) return;
  hero.dataset.heipardReady = 'true';

  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var mode = hero.dataset.mode;
  var video = hero.querySelector('.heipard-hero__clip');
  var INTRO_KEY = 'heipard-hero-intro';

  function blocked() {
    var c = navigator.connection;
    return reduce.matches || !!(c && c.saveData) || !video;
  }
  var useClips = (mode === 'clip' || mode === 'clip_intro') && !!video;

  function parse(json) {
    try {
      return JSON.parse(json || '[]').filter(function (s) { return s && s.u && s.h; }).sort(function (a, b) { return a.h - b.h; });
    } catch (e) {
      return [];
    }
  }
  var lists = { on: parse(video && video.dataset.clipOn), off: parse(video && video.dataset.clipOff) };

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

  function bildFuer(theme) { return theme === 'dark' ? 'abend' : 'tag'; }
  function setBild(b) { hero.setAttribute('data-bild', b); }

  var token = 0;
  var running = null; // { dir }

  function play(dir, target) {
    var my = ++token;
    var list = lists[dir];
    if (!useClips || blocked() || !list.length) {
      if (video) { video.pause(); video.classList.remove('is-on'); }
      running = null;
      setBild(target);
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
      video.pause();
      video.classList.remove('is-on');
      running = null;
      setBild(target);
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
        running = null;
        setBild(target);
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
    var next = root.getAttribute('data-theme') === 'dark' ? lists.off : lists.on;
    var src = pick(next);
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

  var last = root.getAttribute('data-theme');
  new MutationObserver(function () {
    var t = root.getAttribute('data-theme');
    if (t === last) return;
    last = t;
    play(t === 'dark' ? 'on' : 'off', bildFuer(t));
  }).observe(root, { attributes: true, attributeFilter: ['data-theme'] });

  // Fassung 3: Das Inline-Skript hat bei erstem Abendaufruf das Tagbild gesetzt (data-intro).
  if (hero.dataset.intro === 'true') {
    var startIntro = function () {
      try { sessionStorage.setItem(INTRO_KEY, '1'); } catch (e) {}
      if (root.getAttribute('data-theme') !== 'dark') return;
      play('on', 'abend');
    };
    if (document.readyState === 'complete') startIntro();
    else window.addEventListener('load', startIntro, { once: true });
  } else if (hero.getAttribute('data-bild') !== bildFuer(last)) {
    // Schon vor dem Skript umgeschaltet: Bild nachziehen.
    setBild(bildFuer(last));
  }
})();
