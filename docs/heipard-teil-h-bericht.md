# Teil H: Nacharbeit zu Teil G, Videoclips im Feature-Block

Stand 22.11.2026, 16:45 Uhr. Auftrag `heipard-theme-auftrag-teil-h.md` (Stand 22.11., 16:00 Uhr).

## Kurzfassung

- **0.1 Kleinschreibung EN-Lieferumfang:** 64 englische Werte an Produkt und Variante angeglichen (16:10 bis 16:11 Uhr), Deutsch
  unverändert. Die übrigen 54 Felder waren schon klein, die neun Produkte aus 0.3 kamen dort mit.
- **0.2 Britische Formen:** „multicoloured“ und „multi-colour“ an den vier Stellen auf „multicolor“ (16:11 Uhr).
- **0.3 Lieferumfang nach Tabelle:** neun Produkte DE und EN nach der geprüften Tabelle (16:12 Uhr). Zwei
  Blocktexte hängen an der offenen Zahl bei hp-ol-30, sonst kein Widerspruch.
- **Nebenbefund behoben:** „Batteries not included“ stand auf `/en/` mit Häkchen (Commit `796837c`).
- **Abschnitt 1 gebaut und live, ohne sichtbare Wirkung:** zwei neue Blockfelder, Wiedergabe im Theme, Theme-Schalter
  „Videoclips“ (Standard: nur die Testseite hp-isl-360-eu). Ohne gesetzte Felder ändert sich keine Seite.
- **Wartet auf die Asset-Instanz:** 0.4 (Nachladen nach ihren Uploads), Abschnitt 2 und 3 (Clips aus Auftrag 28).

## 0.1 Englische Schreibweise im Lieferumfang

- **Regel:** klein nach dem Malzeichen, außer Abkürzungen und Namen. Groß geblieben: LED, LEDs, RGB, USB, AA,
  Typbezeichnungen mit Ziffer (G40, S11, ST38, A60, S17) sowie Christmas, Halloween, German.
- **Umfang:** alle 127 Felder `heipard.lieferumfang` gelesen (118 Produkte, 9 Variantenfelder). Geändert: 64
  englische Werte. 54 waren schon klein. Die neun Produkte aus 0.3 bekamen ihre Werte aus der Tabelle.
- **Geschrieben:** 22.11., 16:10 bis 16:11 Uhr in zwei Aufrufen zu je 32 Feldern, nur EN (`translationsRegister`), alle ohne Fehler. Deutsch
  unverändert. Vorher-Werte je Feld in `docs/data/teilh-vorher.json`.
- **Hebt Teil F und G auf:** „1 × Ground stake“ (zehn Felder) und „1 × Remote control“ an hp-dgm-002 sind jetzt klein.
- **Nicht betroffen:** Zeilen ohne Malzeichen bleiben, wie sie sind („Batteries not included“, „3 x AA batteries not
  included“).
- **hp-wbf-210, hp-rgb-200a, hp-rgb-300a:** Laut 0.3 bleiben sie unverändert, solange ihr Inhalt geprüft wird. Die
  Kleinschreibung aus 0.1 habe ich trotzdem angewandt, sie ändert nur Großbuchstaben. Soll das zurück, sind es drei
  Felder.

Vorher und nachher, zusammengefasst nach Wortlaut (157 geänderte Zeilen in 64 Feldern, 37 Wortlaute):

| vorher | nachher | Felder | an |
|---|---|---|---|
| 1 × User manual | 1 × user manual | 35 | CL, CSL, CTL-180M/-240M, DFM-600 (Produkt und HP-DFM-600M), DLM, DNM, DPM, NPT-210W, OL-S11-50, OL-ST38-50, OLS, RGB-200A/-300A, SBLB, SCWL, SOLM, TPM, U20, UCP |
| 1 × Remote control | 1 × remote control | 28 | CSL, CTL-180M/-240M, DFM-600, DGM-002, DLM, DNM, DPM, NPT, OL-S11-50, OL-ST38-50, OLS, TPM, U20, UCP |
| 1 × Solar panel | 1 × solar panel | 11 | OLS, SBLB |
| 1 × Ground stake | 1 × ground stake | 10 | OLS-A60, OLS-G40-16, OLS-S11-16 (Produkt und Variante), OLS-S17-16, SBLB, SCWL, SOLM |
| 1 × Remote Control | 1 × remote control | 9 | ISL-264 (Produkt, HP-ISL-108, HP-ISL-264), RCT, RFM, RIT, RNM, RSP, RTM |
| 1 × Battery-operated LED string lights | 1 × battery-operated LED string lights | 8 | BLM, BLT-050 (Produkt und Variante), BLT-100, BSL |
| 1 × User Manual | 1 × user manual | 8 | DGM-001, RFM, RIT, RNM, RSP, RTM, WBF-210, WWF |
| 1 × Wall mount | 1 × wall mount | 5 | OLS-S11-16 (Produkt und Variante), SCWL, SOLM |
| 1 × Battery box | 1 × battery box | 3 | BSL-100-2P, BSL-50-1P, BSL-50-2P |
| 1 × LED Icicle Light String | 1 × LED icicle light string | 3 | ISL-264 (HP-ISL-108, HP-ISL-264), ISL-360-EU |
| 1 × Artificial Christmas Tree | 1 × artificial Christmas tree | 2 | PEC-150G, PVC-150G |
| 1 × Camping lantern with rollable LED string lights | 1 × camping lantern with rollable LED string lights | 2 | CL-1, CL-2 |
| 1 × Ground stake connector | 1 × ground stake connector | 2 | SBLB-60L, SBLB-100L |
| 1 × LED Light Tree Birch | 1 × LED light tree birch | 2 | WBF-210, WWF-180 |
| 1 × Smart RGB string lights with app | 1 × smart RGB string lights with app | 2 | RGB-200A, RGB-300A |
| 1 × Solar string light with G40 / S11 / S17 bulbs | 1 × solar string light with … bulbs | 6 | OLS-G40-16/-35, OLS-S11-16 (Produkt und Variante), OLS-S17-16/-16-EU |
| 1 × Solar string light with copper wire, set of 2 | 1 × solar string light with copper wire, set of 2 | 2 | SCWL |
| 2 × Replacement bulbs | 2 × replacement bulbs | 2 | OLS-G40-25, -35 |
| 1 × LED Deer / Star Hanging Decoration, Set of 2 | 1 × LED deer / star hanging decoration, set of 2 | 2 | BSM, BSX |
| 1 × Remote control with battery | 1 × remote control with battery | 1 | DCT |
| 1 × User manual (German) | 1 × user manual (German) | 1 | DCT |
| 1 × Smart RGB Christmas Tree Light String with Ring | 1 × smart RGB Christmas tree light string with ring | 1 | RTM |
| 1 × Smart RGB Cluster String Lights with App | 1 × smart RGB cluster string lights with app | 1 | RFM |
| 1 × Smart RGB Icicle Light String with App | 1 × smart RGB icicle light string with app | 1 | RIT |
| 1 × Smart RGB Light Cone | 1 × smart RGB light cone | 1 | RSP |
| 1 × Smart RGB Light Curtain with App | 1 × smart RGB light curtain with app | 1 | RCT |
| 1 × Smart RGB Light Net with App | 1 × smart RGB light net with app | 1 | RNM |
| 1 × Smart RGB Light String with App on Cable Reel | 1 × smart RGB light string with app on cable reel | 1 | RPM |
| 1 × Solar string light with A60 / ST38 bulbs | 1 × solar string light with A60 / ST38 bulbs | 2 | OLS-A60, OLS-ST38-16 |
| 1 × Solar string lights (with G40 bulbs) | 1 × solar string lights (with G40 bulbs) | 2 | SOLM, OLS-G40-25 |
| 1 × Spare bulb | 1 × spare bulb | 1 | OLS-S11-16 Variante HP-OLS-S11-16 |
| 3 × Replacement bulbs | 3 × replacement bulbs | 1 | DFM-600 Variante HP-DFM-600M |

- **Live geprüft:** 16:13 bis 16:21 Uhr, die 31 `/en/`-Seiten aus Teil G, darunter alle 22 mit Platzhalter-Antwort.
  Der Hauptinhalt wurde Zeile für Zeile gegen Teil G (14:44 Uhr) verglichen. Geändert haben sich nur die
  Lieferumfang-Zeilen und die Antwort, bei DFM zusätzlich die Titel aus 0.2.
- **Antworten:** Auf allen 22 Seiten ist die Antwort genau der Lieferumfang-Block derselben Seite, z. B. hp-rct-400:
  „The box contains 1 × smart RGB light curtain with app and 1 × remote control.“

## 0.2 Britische Formen im Shop-Inhalt

Geschrieben 22.11. gegen 16:11:50 Uhr in einem Aufruf, nur EN, nur das eine Wort:

| Stelle | vorher | nachher |
|---|---|---|
| hp-dfm-600, Titel | „…, warm white or multicoloured, for indoor and outdoor use“ | „…, warm white or multicolor, for indoor and outdoor use“ |
| hp-dfm-600, SEO-Titel | „…, warm white or multicoloured“ | „…, warm white or multicolor“ |
| hp-dfm-750-eu, Titel | „…, warm white or multi-colour, for indoor and outdoor use“ | „…, warm white or multicolor, for indoor and outdoor use“ |
| hp-vit-864l-eu-1, Meta-Beschreibung | „…, warm white or multi-colour, switchable. …“ | „…, warm white or multicolor, switchable. …“ |

- **Live (16:13 bis 16:21 Uhr):** Auf den drei `/en/`-Seiten steht kein „multicoloured“ und kein „multi-colour“ mehr.
  Die Titel erscheinen auch in der Serienleiter von hp-dfm-400-eu-2 und hp-dfm-750-eu und als Alt der Galeriebilder
  ohne eigenen Alt. Dort sind sie ebenso geändert. Die Vorher-Aufnahme dieser drei Seiten entstand erst nach dem
  Schreiben, dort stützt sich das Vorher auf die Admin-Werte.
- **Unverändert, weil nicht freigegeben:** Uneinheitliche US-Formen in denselben Produkten bleiben,
  „multicolored“ (Meta-Beschreibung hp-dfm-600, SEO-Titel hp-dfm-750-eu), „multi-colored“ (Meta-Beschreibung
  hp-dfm-750-eu), „multi-color“ (Beschreibung hp-vit-864l-eu-1), dazu „multicolored“ im Lieferumfang von hp-vlm-100l.

## 0.3 Lieferumfang nach geprüfter Tabelle

- **Geschrieben:** 22.11., 16:12:18 Uhr Deutsch (`metafieldsSet`), danach Englisch mit den neuen Digests, alle ohne
  Fehler. Je Zeile ein Eintrag, genau die Werte der Tabelle. Keines der neun Produkte hat ein Variantenfeld, die
  Seiten zeigen also das Produktfeld.
- **Vorher und nachher:**

| Handle | DE vorher | EN vorher |
|---|---|---|
| hp-wbf-180 | 1 × LED-Lichterbaum Birke / 1 × Bedienungsanleitung | 1 × LED Light Tree Birch / 1 × User Manual |
| hp-ola-g40-15-eu | 1 × LED-Lichterkette mit G40-Glühbirnen und App / 1 × Fernbedienung | 1 × LED string light with G40 bulbs and app / 1 × remote control |
| hp-ola-g40-27-eu, -42-eu | wie -15-eu | wie -15-eu |
| hp-rgb-500a | 1 × Smarte RGB-Lichterkette mit App / 1 × Bedienungsanleitung | 1 × Smart RGB string lights with app / 1 × User manual |
| hp-uct-200-eu | 1 × LED-Lichtervorhang | 1 × LED light curtain |
| hp-fxf-001 | 1 × LED-Motivleuchte Rentier | 1 × LED Reindeer Novelty Light |
| hp-ol-30, hp-ol-50 | Lichterkette / Fernbedienung / Transformator / 3 Ersatzbirnen | String of lights / Remote control / Transformer / 3 replacement bulbs |

  Nachher steht überall genau der Wert aus der Tabelle des Auftrags.
- **Live geprüft:** 16:13 bis 16:21 Uhr, alle 18 Seiten DE und EN gegen die Aufnahme von 16:09 bis 16:12 Uhr. Geändert haben
  sich nur die Lieferumfang-Zeilen. hp-wbf-180 hat eine Antwort mit Platzhalter, sie folgt dem Feld:
  - DE: „Im Paket sind 1 × LED-Lichterbaum Birke, 1 × Kreuzfuß, 1 × Stange und 1 × Bedienungsanleitung.“
  - EN: „The box contains 1 × LED birch light tree, 1 × cross base, 1 × pole, and 1 × user manual.“
- **Unverändert:** `ol-g40-frage-4`, hp-wbf-210, hp-rgb-200a, hp-rgb-300a (Inhalt; zur Kleinschreibung siehe 0.1).

### Widersprüche in Blocktexten der neun Produkte (nur aufgelistet)

Durchsucht: Hauptinhalt DE und EN (Beschreibung, Feature-Blöcke, Pflege, Fragen, Technik), Stand vor dem Schreiben.

- **hp-ol-30 und hp-ol-50 nennen drei Ersatzbirnen:** Beschreibung „Drei Ersatzbirnen liegen für den Fall der Fälle
  bei.“ und `ol-g40-frage-4` „… und drei Ersatzbirnen liegen bei.“ Das passt zum Feld (3). Nennt Tyler für hp-ol-30
  zwei, müssen bei hp-ol-30 neben dem Feld auch diese beiden Texte geändert werden. `ol-g40-frage-4` teilen sich beide
  Produkte, dann braucht hp-ol-30 eine eigene Frage. Der Titel von hp-ol-50 nennt „50+3 G40“, der von hp-ol-30
  „30 G40“ ohne Zusatz.
- **Kein Widerspruch:**
  - hp-uct-200-eu und hp-rgb-500a nennen im Titel eine Fernbedienung, die jetzt auch im Lieferumfang steht.
  - hp-rgb-500a nennt die „Anleitung, die dem Produkt beiliegt“.
  - hp-fxf-001 beschreibt Rentier und Schlitten in den Bildtexten.
  - hp-ola-g40 nennt das Netzteil.
- **Zur Kenntnis:**
  - Der Pflegetext von OL-30/-50 spricht allgemein von „Netzteil oder Batteriefach“, die Kette läuft über einen Transformator.
  - hp-rgb-500a erwähnt einen „Controller“, der im Lieferumfang nicht eigens steht.
  - Der Titel von hp-fxf-001 nennt keinen Schlitten, Titel bleiben nach 0.5 unverändert.
- **Deutsch auf `/en/`** (schon bekannt, Punkt „Blocktexte ohne EN“):
  - Beschreibung und Fragen von hp-ol-30 und hp-ol-50.
  - Kicker „Fernbedienung“ bei OL-30/-50.
  - Antwort „Über ein Netzteil.“ bei OLA-G40.
- **Begriffe EN uneinheitlich:**
  - Seit 0.3 steht „spare bulb(s)“, bei OLS, OLH, OL-S11 und DFM-600M weiter „replacement bulb(s)“.
  - „LED birch light tree“ (WBF-180) neben „LED light tree birch“ (WBF-210, WWF-180).

## Nebenbefund: „not included“ mit Häkchen

- **Befund:** Auf `/en/` standen „Batteries not included“ (BSL, 4 Produkte) und „3 x AA batteries not included“
  (HP-BLT-050) mit Häkchen im Lieferumfang-Block. Erkannt wurden nur „nicht enthalten“ und „ohne“. In einer Antwort
  mit Platzhalter wäre die Zeile mitgezählt worden, keine der 17 Antworten hängt bisher an diesen Produkten.
- **Behoben:** Commit `796837c`, `heipard-fb-lieferumfang.liquid` und `heipard-fb-fragen.liquid`. Auch „not included“
  am Anfang oder Ende und „without“ am Anfang stehen jetzt ohne Häkchen und zählen nicht mit. Liquid-Test 20 Fälle,
  davon 3 neue für Englisch. Live seit 16:27 Uhr.
- **Gegenprobe 16:27 bis 16:30 Uhr:**
  - Auf `/en/` stehen die Zeilen bei hp-bsl-100-1p, -100-2p, -50-1p und hp-blt-050 jetzt ohne Häkchen.
  - Deutsch ist unverändert („Batterien nicht enthalten“ ohne Häkchen).
  - Auf zehn weiteren Seiten hat sich nichts geändert, auch nicht an den Antworten.

## 1. Video im Feature-Block

### Wo die Clips liegen

Zwei neue, freiwillige Felder am Metaobjekt `feature_block`, angelegt 22.11. gegen 16:25 Uhr:

- `video_einmal`: Clip „Licht an“, läuft einmal.
- `video_schleife`: Clip als Schleife.

Beide sind `file_reference` und nehmen nur Videos an.

- **Warum am Block:**
  - Beide Clips enden auf dem Bild, das schon im Block steht, und gehören damit zu diesem Bild.
  - Ein eigenes Metaobjekt wäre ein Umweg ohne Gewinn: ein Feld mehr am Block, ein Objekt mehr je Clip.
  - Ein Produkt-Metafeld scheidet aus. Die Bilder von B1 und Sticky liegen am Block, der von mehreren Produkten genutzt
    wird, und `feature_*` ist gesperrt.
- **Folge:** Ein Clip am Block erscheint auf allen Produkten, die den Block nutzen. `isl-b1` steckt im Set `isl` und
  damit an hp-isl-264, hp-isl-360-eu und hp-isl-486.
- **Begrenzung für den Test:** Ein Theme-Schalter „Videoclips“ unter den Theme-Einstellungen steuert das:
  - Aus.
  - Nur auf den Testseiten (Standard, Feld „Testseiten“ = `hp-isl-360-eu`).
  - Auf allen Seiten.

  Nach deiner Abnahme genügt „Auf allen Seiten“ oder ein weiterer Handle in „Testseiten“. „Aus“ ist zugleich der
  schnellste Rückweg, ohne Code.
- **Nur mit Bild am Block:** Kommt das Bild aus `feature_b1`/`feature_b2` (Produkt), bleibt der Clip aus, denn er würde
  nicht auf diesem Bild enden. Ein Block mit Medientyp „Video“ (B3) bleibt wie bisher.

### Umsetzung

Commit `c87d875`, live seit 16:27 Uhr. In der Gegenprobe (16:27 bis 16:30 Uhr) steht auf keiner Seite ein Clip, auch
nicht auf hp-isl-360-eu, weil noch kein Feld gesetzt ist:

- `heipard-feature-dispatch.liquid` reicht die Clips nur bei Bild am Block und nach dem Schalter weiter.
- `heipard-feature-block.liquid` legt ein `<video>` über das Bild, gleiche Klasse und damit gleiche Fläche und gleicher
  Ausschnitt. Die MP4-Fassungen, die Shopify aus dem Video erzeugt, stehen als Liste am Element.
- `heipard-feature.js` (`initClip`) übernimmt das Abspielen.
- `heipard-variant.js` übernimmt beim Variantenwechsel das laufende Element.
- `heipard-feature.css` blendet weich ein und aus.
- `settings_schema.json` enthält den Schalter.

### Prüfpunkte

Geprüft auf einem Prüfstand mit dem echten Theme-Code und zwei Roh-Clips aus dem Eingang der Asset-Instanz (nur lokal
kopiert, nichts hochgeladen), Edge, Desktop und mobil. Auf der Testseite folgt die Prüfung mit den echten Dateien
(Abschnitt 2).

| Punkt | Umsetzung | Prüfstand |
|---|---|---|
| 1 Bild bleibt | Bild unverändert im Markup (gleiche Größen, gleicher Alt), Video ohne Poster darüber, unsichtbar bis zum ersten Bild des Clips | ok |
| 2 Laden erst nahe am Sichtfeld | `preload="none"` ohne Quelle; Quelle erst 400 px vor dem Sichtfeld, Fassung nach dargestellter Größe | ok: weit weg keine Quelle, bei 30 % geladen, nicht gestartet |
| 3 „Einmal“ ab halber Sichtbarkeit, einmal je Aufruf | Start ab 50 % sichtbar, nach dem Ende Bild oder Schleife | ok: Start bei 60 %, nach 5 s Ende, Schleife übernimmt |
| 4 Schleife nur bei Sichtbarkeit | Pause, sobald der Block ganz aus dem Bild ist | ok |
| 5 Stumm, ohne Bedienelemente, kein Vollbild | `muted`, kein `controls`, `playsinline`, kein Bild-im-Bild, keine Klicks | ok |
| 6 Reduzierte Bewegung, Datensparmodus | Video wird gar nicht erst angelegt, auch nicht bei abgelehntem Autoplay (z. B. iOS-Stromsparmodus) | ok: kein Video |
| 7 Gleiche Fläche, nichts springt | Video mit gleicher Klasse, absolut über dem Bild; Banner 21:9 (mobil 4:3), Sticky 5:4, Zeilen 16:9 | ok: Fläche identisch (mobil 390 × 292,5), `object-fit: cover`, Mitte |
| 8 Variantenwechsel | gleicher Clip im neuen Markup: das laufende Element wird übernommen | ok: dasselbe Element, läuft weiter (1,5 s → 1,9 s) |
| 9 Vorleseprogramme | `aria-hidden="true"`, `tabindex="-1"`, Bild behält seinen Alt | ok |
| 10 Höchstens ein Video | Der sichtbarste Clip spielt, alle anderen pausieren | ok: zweiter Clip übernimmt, erster pausiert |

- **Beim Bauen gefunden und behoben:** Kam ein zweiter Clip ins Bild, während der erste lief, übernahm er erst bei der
  nächsten Bewegung. Jetzt wird nach dem Laden neu entschieden.
- **Zum Ansehen beim Test:** Der Clip „Licht an“ beginnt mit ausgeschalteter Kette, das Bild darüber zeigt sie an. Beim
  Start blendet die Szene also kurz auf dunkel und geht dann an. Ob das wirkt oder ob der Clip das Bild schon früher
  ablösen soll, siehst du in der Aufnahme aus Abschnitt 2.
- **Nicht als „laut“ gezählt:** Die Clips zählen nicht gegen das Limit der lauten Blöcke, weil das Bild bleibt.
  Punkt 10 begrenzt sie auf einen zugleich.

## 2. Testseite hp-isl-360-eu

Wartet auf die Übergabetabelle der Asset-Instanz (Auftrag 28). Messwerte vorher, mobil, gedrosselt wie Lighthouse
„Slow 4G“ (150 ms, 1,6 Mbit/s, CPU vierfach), Edge, ohne Cache, Median aus drei Läufen, 22.11., 16:25 Uhr:

| Wert | vorher |
|---|---|
| Übertragen beim Laden | 1.908 KB, 117 Anfragen |
| DOMContentLoaded / load | 5,5 s / 10,4 s |
| Größtes Element (LCP) | 10,4 s, erstes Galeriebild |
| Layoutverschiebung (CLS) | 0,157 |
| Übertragen nach Scrollen bis zum Banner, 12 s gewartet | 2.441 KB |

- **CLS 0,157 gab es schon vorher** (über 0,1). Die Ursache liegt oberhalb der Feature-Sektion, nicht bei den Clips.
  Notiert als offener Punkt, nicht untersucht.

## 3. Hero der Startseite

Wartet auf `HOME_HERO_TAG.jpg` und die beiden Clips in Files. `HOME-03_Bento_gross_Party_Terrasse` liegt schon dort. Der
Hero zeigt heute das Bild aus dem Theme (`assets/heipard-hero.jpg`), im Abschnitt ist kein Bild gesetzt.

## 0.4 Nachladen nach den Uploads der Asset-Instanz

Folgt als Nachtrag nach ihrer Meldung.

## 0.5 Titel

Nichts geändert.

## Schreibvorgänge

| Zeit | Objekt | Änderung |
|---|---|---|
| 22.11., 16:10–16:11 | 64 Felder `heipard.lieferumfang`, EN | Kleinschreibung (0.1) |
| 22.11., gegen 16:11:50 | hp-dfm-600 (Titel, SEO-Titel), hp-dfm-750-eu (Titel), hp-vit-864l-eu-1 (Meta-Beschreibung), EN | „multicolor“ (0.2) |
| 22.11., 16:12:18 | neun Felder `heipard.lieferumfang`, DE | Werte der Tabelle (0.3) |
| 22.11., gegen 16:12:40 | dieselben neun, EN | Werte der Tabelle (0.3) |
| 22.11., gegen 16:25 | Definition `feature_block` | Felder `video_einmal`, `video_schleife` (leer) |
| 22.11., 16:27:13–15 | Live-Theme (über Git) | Commits `796837c`, `c87d875` |

## Commits

- `796837c` Lieferumfang: englische Zeilen „not included“ ohne Häkchen
- `c87d875` Feature-Blöcke: Clips „einmal“ und „Schleife“ über dem Bild
- Doku-Commit dieses Berichts

`shopify theme check` vor jedem Commit: keine Befunde in den geänderten Dateien (die 15 übrigen in 12 anderen Dateien
gab es schon vorher).

## Rückweg

- 0.1 bis 0.3: Werte aus `docs/data/teilh-vorher.json` zurückschreiben. EN mit `translationsRegister` und dem
  aktuellen Digest, DE mit `metafieldsSet`, bei 0.3 erst DE, dann EN.
- Clips: Theme-Schalter „Videoclips“ auf „Aus“, sonst `git revert c87d875`. Die leeren Felder stören nicht.
- Häkchen: `git revert 796837c`.

## Offen

1. **Ersatzbirnen hp-ol-30** [prüfen], Frage an Tyler. Bei zwei auch Beschreibung und eine eigene Frage statt
   `ol-g40-frage-4` (siehe 0.3).
2. **hp-wbf-210, hp-rgb-200a, hp-rgb-300a:** Inhalt in Prüfung bei der Asset-Instanz, Kleinschreibung schon angewandt (0.1).
3. **Begriffe EN:** „spare bulb“ oder „replacement bulb“, „birch light tree“ oder „light tree birch“. Entscheidung bei dir.
4. **Abschnitt 2 und 3, Nachtrag 0.4:** nach der Übergabe der Asset-Instanz.
5. **CLS 0,157** auf der Produktseite mobil, schon vor den Clips.
