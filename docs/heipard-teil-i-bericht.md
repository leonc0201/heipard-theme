# Teil I: Clips in die Breite, Mobil-Fassungen, Hero-Vorschau, Weihnachten

Stand 22.11.2026, 19:55 Uhr. Auftrag `heipard-theme-auftrag-teil-i.md` (Stand 22.11., 19:00 Uhr).

## Kurzfassung

- **1 Begriffe und Lieferumfang:** live seit 18:29 Uhr.
  - „replacement bulb“ an sechs Stellen, „LED birch light tree“ an zwei.
  - „multicolor“ an vier Stellen, rgb-200a/300a nach Tabelle (DE und EN).
  - Kein USB in den Blocktexten. Rest: SEO-Titel vit-864 sagt noch „multicolored“ (stand nicht in der Liste).
- **2 Aufnahmen:** raus aus dem Repo (`3015004`), `docs/data/*.webm` in `.gitignore`.
  - Ablage: `OneDrive\Dokumente\C&L\Heipard\Webseite\Theme-Aufnahmen\Teil H` bzw. `…\Teil I`.
- **3 Clipstart „dunkel, an“:** live seit 18:54 Uhr (Endstand `1f1d1ae`). Alle sieben Prüffälle grün, das größte Element
  beim Laden bleibt ein Bild.
- **4 Mobil-Fassungen:** Weg „allgemeine Datei“ gewählt (bytegleich, kleiner, gleich schnell). Desktop gegen mobil
  gemessen. HLS-Probe für dich: Link und drei Fragen in Abschnitt 4.
- **5 Schleifen V2:** an allen drei Schleifen eingesetzt. Naht und Bewegung messbar ruhiger, Vergleich als Kontaktbogen.
- **6 Clips in der Breite:** „Auf allen Seiten“ seit 19:21 Uhr.
  - 16 Produktseiten mit Clip.
  - Je Block eine Seite geprüft, DE und EN, Desktop und mobil.
  - hp-olg-200m und hp-olg-200w ohne Clip.
  - hp-dct-200: zwei Clips, nie mehr als einer läuft.
- **7.1 Hero-Verlauf live:** behoben (`a6bec9a`), Kontrast der Überschrift am hellsten Zehntel 12,9 → 16,1 (Desktop).
- **7.2/7.3 Hero-Vorschau:** Fassung 3 fertig, Tempo und beide Tag-Modus-Optionen wählbar, gemessen und aufgenommen.
  Nichts davon auf `main`, deine Entscheidung steht aus.
- **8 Weihnachten:** Saison-Block, Kollektion `weihnachten` (54 Produkte), Anlass-Kachel und Badge live seit 18:43 Uhr.
- **9 hp-dnm-208:** nach den Änderungen der Asset-Instanz neu geladen: Position 1 `GAL_06`, Varianten mit eigenem Bild,
  Kollektionskarte in `net` und `weihnachten` (Seite 4) zeigt `GAL_06` mit Alt, DE und EN.
- **10 CLS 0,157:** Shopifys Cookie-Banner, etwa 8,2 s nach dem Laden (mobil, Slow 4G). Kein Fix.

## 1. Begriffe und Lieferumfang

Geschrieben 18:29:02 bis 18:29:15 Uhr. Vorher-Werte: `docs/data/teili-vorher.json`. Danach jede Seite neu geladen
und die Platzhalter-Antworten auf `/en/` geprüft (wbf-210, wwf-180 zeigen „LED birch light tree“).

| Stelle | vorher (EN) | nachher (EN) |
|---|---|---|
| hp-ola-g40-15-eu, Lieferumfang | 1 × spare bulb | 1 × replacement bulb |
| hp-ola-g40-27-eu, -42-eu | 2 × spare bulbs | 2 × replacement bulbs |
| hp-ol-30, hp-ol-50 | 3 × spare bulbs | 3 × replacement bulbs |
| Variante HP-OLS-S11-16 | 1 × spare bulb | 1 × replacement bulb |
| hp-wbf-210, hp-wwf-180 | 1 × LED light tree birch | 1 × LED birch light tree |
| hp-vlm-100l, Lieferumfang | …warm white and multicolored | …warm white and multicolor |
| hp-dfm-600, Meta-Beschreibung | …warm white or multicolored… | …warm white or multicolor… |
| hp-dfm-750-eu, SEO-Titel | …warm white or multicolored | …warm white or multicolor |
| hp-dfm-750-eu, Meta-Beschreibung | …warm white or multi-colored… | …warm white or multicolor… |
| hp-vit-864l-eu-1, Beschreibung | …between warm white and multi-color… | …between warm white and multicolor… |

hp-rgb-200a und hp-rgb-300a nach der Tabelle:

| | vorher | nachher |
|---|---|---|
| DE | 1 × Smarte RGB-Lichterkette mit App · 1 × USB-Ladekabel · 1 × Bedienungsanleitung | 1 × Smarte RGB-Lichterkette mit App · 1 × Fernbedienung · 1 × Netzteil · 1 × Bedienungsanleitung |
| EN | 1 × smart RGB string lights with app · 1 × USB charging cable · 1 × user manual | 1 × smart RGB string light with app · 1 × remote control · 1 × power adapter · 1 × user manual |

Die Kleinschreibung an wbf-210, rgb-200a und rgb-300a bleibt, wie besprochen.

**USB in Blocktexten:** In den Feature-Blöcken von rgb-200a/300a steht kein USB. DE und EN nennen Fernbedienung und
Netzteil, passend zum neuen Lieferumfang.

**Rest, nicht geändert:**
- hp-vit-864l-eu-1, SEO-Titel EN: „…warm white or multicolored, switchable“. Stand nicht in der Liste. Soll ich ihn
  angleichen?
- hp-wwf-180, Produkttitel EN: „…Light Tree Birch…“. Titel fasse ich nicht an.
- hp-ol-30, Zahl der Ersatzbirnen: bleibt offen (Frage an Tyler).

## 2. Aufnahmen aus dem Repo

- Commit `3015004`: die sechs Teil-H-Videos aus `docs/data/` entfernt (neuer Commit, Verlauf unverändert),
  `docs/data/*.webm` in `.gitignore`. Der Teil-H-Bericht nennt jetzt die OneDrive-Pfade.
- Ablage: `C:\Users\Bo Zhong\OneDrive\Dokumente\C&L\Heipard\Webseite\Theme-Aufnahmen\Teil H\` (sechs WebM) und
  `…\Teil I\` (Aufnahmen dieses Auftrags, Liste unten).
- Kontaktbögen bleiben im Repo. Neue als JPG unter 500 KB: `teili-clipstart-kontaktbogen.jpg` (461 KB),
  `teili-schleifen-alt-v2.jpg` (465 KB), `teili-hero-tag-hinweis.jpg` (227 KB), `teili-hero-tag-intro.jpg` (218 KB).

## 3. Clipstart „dunkel, an“

Live seit 18:54:08 Uhr (`2178b86`, `4e294fb`, `3a6e7fa`, `15a37a3`; Sync von 15a37a3 mit `1f1d1ae` nachgeholt).

Ablauf:
- Liegt das erste Bild von „einmal“ bereit, solange der Block weniger als halb sichtbar ist, deckt der angehaltene Clip
  das Bild ab: ohne Blende, wenn er außer Sicht ist, sonst weich.
- Ab 50 % sichtbar läuft er an.
- Ist das erste Bild erst bei 50 % oder mehr bereit, entfällt „einmal“, die Schleife übernimmt.
- Geladen wird ab 1000 px vor dem Sichtfeld, damit das erste Bild auch bei schnellem Scrollen rechtzeitig da ist.
- Bleibt das erste Bild aus (z. B. HLS ohne Bildmeldung), entscheidet das Skript nach 1,5 s neu (`15a37a3`).

Prüfung auf hp-isl-360-eu, 18:56 bis 18:59 Uhr (Verlauf alle 0,5 s, wie ein Besucher gescrollt):

| Fall | größtes Element beim Laden | Ablauf |
|---|---|---|
| Desktop schnell | Produktbild, 648 ms | dunkel (angehalten) → läuft ab 57 % → Schleife |
| mobil schnell | Produktbild, 392 ms | dunkel → läuft → Schleife |
| Desktop, Block beim Laden im Bild | Banner-Bild ISL_B1_01, 872 ms | „einmal“ entfällt, Schleife |
| mobil, Block beim Laden im Bild | Produktbild, 292 ms | „einmal“ entfällt, Schleife |
| Desktop `?clip_hls=1` | Produktbild, 448 ms | dunkel → läuft ab 57 % → Schleife |
| Desktop Slow 4G | Produktbild, 10,96 s | erstes Bild erst bei 57 % → Schleife |
| mobil Slow 4G | Produktbild, 10,60 s | erstes Bild erst bei 100 % → Schleife |

Das größte Element ist in allen Fällen ein Bild, nie der Clip. Steht der Banner beim Laden im Bild, ist es am Desktop
das Banner-Bild unter dem Clip. Einen Vorher-Wert für genau diesen Fall habe ich nicht gemessen. Da der Clip ohne Poster
und mit `preload="none"` startet, kann er das Bild nicht verdrängen.

Aufnahme (Desktop): `docs/data/teili-clipstart-kontaktbogen.jpg`. Bei 0,0 s dunkel, ab 1,2 s gehen die Lichter an,
ab 3,6 s brennen sie voll, danach die Schleife. Videos auf OneDrive, `Teil I`: `teili-clipstart-desktop.webm`,
`teili-clipstart-mobil.webm`, `teili-clipstart-mobil-kontaktbogen.jpg`.

## 4. Mobil-Fassungen

Felder `video_einmal_mobil` und `video_schleife_mobil` am Feature-Block (ohne Typvorgabe, nehmen Video und Datei).
Unter 750 px läuft ein Clip nur mit Mobil-Fassung. Die Ausnahme für die Testseite (`clip_mobil_ersatz`) ist seit
`62f8af8` leer, weil die ISL-Fassungen da sind.

**Weg gewählt: allgemeine Datei (`_DATEI`).** Gemessen auf hp-isl-360-eu, mobil:

| | Video-Weg (Shopify 480p, 0,9 Mbit/s) | Datei-Weg (bytegleich) |
|---|---|---|
| übertragen, schnell | 664 bis 801 KB | 573 bis 760 KB |
| davon Schleife | 172 bis 214 KB | 118 bis 153 KB |
| Start nach Halt | sofort | sofort |
| Slow 4G | „einmal“ entfällt, Schleife nach 0,2 s | „einmal“ entfällt, Schleife nach 1,3 bis 2,0 s |
| Byte-Bereiche, Cache | 206, ja | 206, max-age ein Jahr, CORS * |

Die übertragenen Mengen liegen über den Dateigrößen, weil der Browser Bereiche doppelt holt. Die Datei ist bei
gleicher Wirkung kleiner und unverändert gegenüber der Vorlage der Asset-Instanz. Die acht ungenutzten Mobil-Fassungen
als Video (fünf Banner, drei Schleifen) und die lange OLG-Fassung legt dir die Asset-Instanz zum Entfernen vor.

**Desktop gegen mobil unter Slow 4G** (hp-isl-360-eu, 1,6 Mbit/s, 150 ms, CPU 4×):

| | Desktop | mobil |
|---|---|---|
| Fassung | 1684 × 720 (Shopify 720p) | 1122 × 480 (Datei) |
| Video übertragen | 1,5 MB | 0,68 bis 0,80 MB |
| „einmal“ | entfällt (erstes Bild zu spät) | entfällt (erstes Bild zu spät) |
| Schleife läuft | ja | ja, 0,2 bis 2,0 s nach Halt |

Bei Slow 4G und zügigem Scrollen kommt „einmal“ in keinem Fall rechtzeitig, die Schleife übernimmt. Das ist das
vereinbarte Verhalten.

**HLS-Probe für dich** (Store-Passwort nötig):

`https://heipard.myshopify.com/products/hp-isl-360-eu?clip_hls=1`

Bitte langsam zum Banner „Die Dachkante bekommt Eiszapfen aus Licht“ scrollen und dort stehen bleiben.

1. Startet der Clip innerhalb von etwa zwei Sekunden?
2. Läuft „Licht an“ ohne Stocken?
3. Läuft die Schleife ohne Hänger an der Nahtstelle?

Mit `?clip_hls=1` nimmt das Skript den HLS-Strom der großen Fassung, sofern das Gerät HLS abspielt (iPhone und
aktuelle Chromium-Browser). Ohne den Parameter gilt die Mobil-Datei.

## 5. Schleifen V2

Eingesetzt 19:05 Uhr (isl-b1) und 19:16 Uhr (dct-sticky, dfm-b2, dfm-b2-zwei). Gemessen an den Dateien selbst
(Bildänderung je Bild über die Laufzeit, Naht = Änderung vom letzten zum ersten Bild, Werte von 255):

| Schleife | Dauer alt → V2 | Naht alt → V2 | größte Änderung je Bild alt → V2 | Viertel (Bewegung) alt | V2 |
|---|---|---|---|---|---|
| ISL | 5,04 → 2,96 s | 0,95 → 0,67 | 0,47 → 0,25 (Flocke weg) | 0,12 · 0,13 · 0,12 · 0,10 | 0,13 · 0,13 · 0,13 · 0,10 |
| DFM | 5,04 → 3,21 s | 0,74 → 0,35 | 0,22 → 0,15 | 0,10 · 0,05 · 0,05 · 0,04 | 0,05 · 0,05 · 0,04 · 0,03 |
| DCT | 5,04 → 3,46 s | 1,15 → 0,93 | 0,40 → 0,27 | 0,21 · 0,14 · 0,13 · 0,09 | 0,12 · 0,11 · 0,09 · 0,08 |

Kontaktbogen: `docs/data/teili-schleifen-alt-v2.jpg` (letztes und erstes Bild je Fassung, darunter der
Bewegungsverlauf). Werte: `docs/data/teili-schleifen-werte.json`. Die alten Schleifen sind ungenutzt, bleiben aber
in Files.

## 6. Clips in der Breite

Stufe 1 (`62f8af8`, 19:17 Uhr): je Block eine Testseite. Stufe 2 (`ef79b4a`, live 19:21:30 Uhr): „Auf allen Seiten“.

Neu im Theme: Blöcke ohne eigenes Bild (Bild aus `feature_b1`/`_b2`) zeigen den Clip nur, wenn das Produkt genau das
Standbild des Clips zeigt. Die Paare stehen in der Einstellung „Clips auf Produktbildern“
(`ctl-b1:CTL_B1_01, dct-b1:DCT_B1_02, dfm-b2:DFM_B2_01, dfm-b2-zwei:DFM_B2_01`). Bekommt ein Produkt später ein anderes
Bild, bleibt es beim Bild. Die Metafelder `feature_*` habe ich nicht angefasst.

| Block | Clip (Desktop · mobil) | Seiten |
|---|---|---|
| isl-b1 | ISL_B1_01_LICHTAN + ISL_B1_01_SCHLEIFE_V2 · ISL_B1_01_LICHTAN_MOBIL_DATEI + ISL_B1_01_SCHLEIFE_MOBIL_DATEI | hp-isl-264, hp-isl-360-eu, hp-isl-486 |
| dpm-b1 | DPM_B1_01_LICHTAN · DPM_B1_01_LICHTAN_MOBIL_DATEI | hp-dpm-300 |
| ctl-b1 | CTL_B1_01_LICHTAN · CTL_B1_01_LICHTAN_MOBIL_DATEI | hp-ctl-210-eu-1, hp-ctl-400-eu-1 |
| dct-b1 | DCT_B1_02_LICHTAN · DCT_B1_02_LICHTAN_MOBIL_DATEI | hp-dct-200 |
| dct-sticky | DCT_B2_08_SCHLEIFE_V2 · DCT_B2_08_SCHLEIFE_MOBIL_DATEI | hp-dct-200 |
| olg-b1 | OLG_B1_01_LICHTAN_KURZ · OLG_B1_01_LICHTAN_KURZ_MOBIL_DATEI | hp-olg-100, hp-olg-200, hp-olg-300-eu, hp-olg-400, hp-olg-600, hp-olg-800 |
| dfm-b2 | DFM_B2_01_SCHLEIFE_V2 · DFM_B2_01_SCHLEIFE_MOBIL_DATEI | hp-dfm-400-eu-2 |
| dfm-b2-zwei | wie dfm-b2 | hp-dfm-600, hp-dfm-750-eu |

**Ohne Clip** (Einstellung „Ohne Clips“): hp-olg-200m (nur Multicolor), hp-olg-200w (nur Kaltweiß). Alle anderen
Produkte der Sätze haben eine warmweiße Variante. Wie bisher zeigen deren Kaltweiß- und Multicolor-Varianten die
warmweiße Szene (das gilt schon für die Bilder, offener Punkt Lichtfarbe).

**Prüfung** (19:17 bis 19:27 Uhr, Desktop 1400 px und mobil 390 px, wie ein Besucher gescrollt):
- DE: hp-dpm-300, hp-ctl-210-eu-1, hp-dct-200, hp-olg-100, hp-dfm-400-eu-2, hp-dfm-600, hp-isl-360-eu, dazu
  hp-isl-264, hp-ctl-400-eu-1, hp-dfm-750-eu, hp-olg-800.
- EN: die sieben ersten.
- Überall startet der Clip beim Halt, „einmal“ endet auf dem Bild, Schleifen laufen weiter, mobil immer die Datei.
- hp-olg-200m und hp-olg-200w: kein Video im Markup. hp-olt-200 (ohne Clip-Block): unverändert.

**hp-dct-200, zwei Clips** (Banner und Sticky): gleichzeitig laufend höchstens einer, auf DE und EN, Desktop und
mobil. Gewicht beim Ansehen beider Blöcke:

| | Banner (einmal) | Sticky (Schleife) | zusammen |
|---|---|---|---|
| Desktop | 3,1 bis 3,4 MB (720p) | 2,2 MB (1080p) | 5,3 bis 5,6 MB |
| mobil | 0,48 bis 0,57 MB | 0,18 MB | 0,66 bis 0,75 MB |

Hinweis: Liquid liefert je Video nur die höchste Fassung. Die Sticky-Schleife lädt am Desktop deshalb 1080p, obwohl
sie nur etwa die halbe Breite füllt. Eine 720p-Datei von der Asset-Instanz würde etwa die Hälfte sparen.

## 7. Hero

### 7.1 Verlauf live (erledigt)

Commit `a6bec9a`, live 18:42 Uhr: Die Verlaufsebene bekommt `display: block` gegen Dawns `div:empty`. Kontrast am
hellsten Zehntel unter der Schrift:

| | vorher (Verlauf unsichtbar) | nachher |
|---|---|---|
| Desktop, Überschrift | 12,9 | 16,1 |
| Desktop, Subline | 7,5 | 12,9 |
| mobil, Überschrift | 15,0 | 15,4 |
| mobil, Subline | 10,1 | 14,5 |

Tag- und Abendmodus sehen gleich aus (der Live-Hero hat noch kein Tagbild). Rückweg: `git revert a6bec9a`.

### 7.2 Fassung 3 in der Vorschau

**Vorschau:** `https://heipard.myshopify.com/?preview_theme_id=199733903693` (Store-Passwort). Fassung 3 ist
eingestellt, Tempo normal, Tag-Modus aus. Zum Vergleichen an die Adresse hängen:
- `&hero_tempo=schnell` für das schnelle Tempo (etwa 4 s)
- `&hero_tag=hinweis` oder `&hero_tag=intro` für die Optionen aus 7.3

Das Intro kommt einmal je Sitzung. Zum erneuten Ansehen einen neuen Tab öffnen.

Gebaut (Branch `vorschau/hero-tag-abend`, nur im Vorschau-Theme):
- **Intro:** einmal je Sitzung, in der Abendstimmung (gespeicherte Wahl oder System dunkel).
- **2,5-s-Regel:** Läuft der Clip 2,5 s nach dem Laden nicht, blendet der Hero weich ins Abendbild, das Intro entfällt.
  Probe mit gesperrtem Video: Wechsel nach 2,57 s.
- **Langsame Verbindung:** Hängt der laufende Clip länger als 1 s, blendet er aus, das Abendbild steht darunter, der
  Download wird abgebrochen (`9049068`, `22782d5`).
- **Kein Intro** bei reduzierter Bewegung, Save-Data oder gemeldeter 2G/3G-Verbindung. Geprüft: Abendbild sofort,
  0 KB Video.
- **Fassungen:** Unter 750 px die Mobil-Fassungen (1276 × 720, Shopify liefert 720p), darüber 1080p.
- **Tempo:** normal 8 s, schnell 4 s, über Einstellung oder `&hero_tempo=`.
- **Umschalten mitten im Clip:** geht in beide Richtungen, Desktop und mobil. Der Gegenclip setzt an der gespiegelten
  Stelle ein, z. B. „an“ bei 2,2 s → „aus“ ab 5,7 s, „aus“ bei 6,0 s → „an“ ab 2,1 s.
- **Nur in der Vorschau:** 35 % Tag-Verlauf und die Bento-Kachel „Party & Terrasse“ mit `OLS11_R2_01`.
- **Startseiten-Vorlage der Vorschau:** Live-Stand (Weihnachten), dazu die Hero-Einstellungen.

**Messung unter Slow 4G** (1,6 Mbit/s, 150 ms, CPU 4×), Startseite der Vorschau:

| Fall | größtes Element beim Laden | Zeitpunkt | Video übertragen | Verlauf |
|---|---|---|---|---|
| Desktop ohne Intro (Tag) | Abendbild HOME-03 | 8,51 s | 0 | Tagbild |
| Desktop mit Intro, normal | Abendbild HOME-03 | 8,53 s | 0,74 MB | Start 2,1 s, hängt sofort, Abendbild ab 3,1 s |
| Desktop mit Intro, schnell | Abendbild HOME-03 | 8,54 s | 4,0 MB | Start 2,1 s, ruckelt, bei 2,8 von 4 s abgebrochen |
| mobil ohne Intro (Tag) | Tagbild | 13,38 s | 0 | Tagbild |
| mobil mit Intro, normal | Tagbild | 13,08 s | 2,9 MB | Start 1,3 s, 8 s Clip in 10,4 s (kurze Hänger) |
| mobil mit Intro, schnell | Tagbild | 13,07 s | 0,91 MB | Start 1,0 s, 4 s Clip in 4,1 s, glatt |

Das Intro verschiebt das größte Element beim Laden nicht, die Zeiten liegen innerhalb der Streuung. Bilder: Desktop
1,2 bis 1,5 MB, mobil 2,2 bis 2,7 MB, mit und ohne Intro gleich (beide Hero-Bilder laden immer).

Ohne Drosselung überträgt das Intro am Desktop 6,5 MB (normal, 1080p mit 7,2 Mbit/s) bzw. 2,6 MB (schnell), mobil
1,9 bis 2,4 MB bzw. 0,9 MB.

**Einschätzung Tempo:** Ich empfehle „schnell“.
- Mobil läuft es auch unter Slow 4G glatt.
- Es ist kürzer als 5 s. Für automatisch startende Bewegung über 5 s verlangt WCAG 2.2.2 (Stufe A) eine Möglichkeit
  zum Anhalten, die das Intro nicht hat.
- Am Desktop sind beide Tempi für langsame Leitungen zu schwer. Liquid liefert nur die 1080p-Fassung, 720p-Dateien von
  der Asset-Instanz würden das etwa halbieren.

### 7.3 Tag-Modus: zwei Optionen

**(a) Hinweis am Schalter** (`&hero_tag=hinweis`):
- **Ablauf:** im Tag-Modus einmal je Sitzung, etwa 2 s nach dem Laden. Der Schalter leuchtet zweimal auf (je 1,2 s),
  darunter steht „Licht an?“ (EN „Lights on?“).
- **Ende:** Beides verschwindet beim ersten Umschalten. In der Abendstimmung gibt es keinen Hinweis.
- **Reduzierte Bewegung:** nur das Etikett, ohne Leuchten (geprüft: keine Animation).
- **Geprüft:** Desktop und mobil. Etikett ab 2,06 s, weg nach dem Klick, danach läuft „Licht an“.

**(b) Intro auch am Tag** (`&hero_tag=intro`):
- **Ablauf:** Die Seite startet im Tag-Modus mit dem Tagbild, „Licht an“ läuft einmal je Sitzung. Am Ende blendet die
  ganze Seite in die Abendstimmung (wie beim Schalter), ohne die Wahl zu speichern. Am Schalter steht dann „Licht aus“
  (EN „Lights off“).
- **Zurück:** Der erste Klick führt mit dem Clip „aus“ in den Tag und speichert dann „hell“.
- **Ausnahmen:** Läuft der Clip nicht innerhalb von 2,5 s, bleibt die Seite im Tag-Modus. Kein Intro bei reduzierter
  Bewegung und Save-Data.
- **Geprüft:** Desktop und mobil, normal und schnell. Wechsel nach 8,4 s (normal) bzw. 4,4 s (schnell), gespeicherte
  Wahl bleibt leer, Klick zurück speichert „light“.

**Aufnahmen** (OneDrive, `Teil I`):
- Videos: `teili-hero-f3-intro-normal`, `-f3-intro-schnell`, `-tag-hinweis` und `-tag-intro`, je `_desktop` und
  `_mobil` als WebM, dazu je ein Kontaktbogen (JPG).
- Im Repo: `docs/data/teili-hero-tag-hinweis.jpg` und `teili-hero-tag-intro.jpg` (Desktop).
  - Hinweis: Etikett ab etwa 2 s, Klick bei 5,5 s, danach läuft „Licht an“.
  - Intro am Tag: Tagbild → Lichter an → bei 9,2 s ganze Seite dunkel mit „Licht aus“ → Klick bei 12 s → zurück in den
    Tag.

**Einschätzung:**
- **(a)** ist zurückhaltend:
  - Keine Bewegung im Inhalt, die Wahl der Besucher bleibt unberührt, keine zusätzliche Last (der Clip lädt erst beim
    Zeigen auf den Schalter).
  - Das Etikett ist für Screenreader ausgeblendet, der Schalter behält seinen Namen „Zwischen Tag und Abendstimmung
    wechseln“.
  - Mobil liegt das Etikett kurz über dem oberen Rand des Hero-Bildes.
- **(b)** sehe ich bei der Barrierefreiheit kritisch:
  1. Die Seite wechselt ohne Zutun das Farbschema, auch wenn das System „hell“ eingestellt ist. Das ist die
     Einstellung, die der Shop sonst respektiert, und manche brauchen sie wegen Blendempfindlichkeit oder zum Lesen.
  2. Der Wechsel kommt nach 4 bis 8 s, also wenn viele schon lesen oder scrollen.
  3. Screenreader bekommen den Wechsel nicht angesagt. Nur der Schalter meldet „gedrückt“.
  4. Weil nichts gespeichert wird, ist die nächste Seite wieder hell. Das wirkt wie ein Fehler.
  5. Mit Tempo normal greift wieder die 5-s-Grenze aus WCAG 2.2.2.

**Empfehlung:** (a) mit Tempo „schnell“.

## 8. Weihnachten

### 8.1 Saison-Block (live seit 18:43 Uhr, `327b212`; EN um 18:45 Uhr)

| Feld | DE | EN |
|---|---|---|
| Kicker | Advent & Weihnachten | Advent & Christmas |
| Überschrift | Dein Zuhause im Weihnachtslicht | Your home in Christmas lights |
| Text | Eisregen für die Dachkante, eine Baum-Lichterkette für den Weihnachtsbaum und ein Lichtervorhang fürs Fenster. Such dir aus, wo es bei dir zuerst leuchten soll. | Icicle light strings for the roofline, string lights for the Christmas tree, and a light curtain for the window. Pick the spot that should glow first. |
| Button | Weihnachtslicht entdecken | Discover Christmas lights |
| Bild | ISL_B1_01 | |
| Link | /collections/weihnachten | /en/collections/weihnachten |

Der englische Text ist an die Shop-Begriffe angeglichen und von mir formuliert. Bitte gegenlesen.

- Alt-Text des Bildes = Überschrift (DE und EN).
- Lesbarkeit: Die Überschrift war im Tag-Modus dunkel auf dunklem Bild. Seit `efeca70` ist sie in beiden Modi hell.
  - Kontrast am hellsten Zehntel: Desktop 11 bis 15.
  - Mobil: Überschrift 3,4 bis 3,9 (große Schrift, ausreichend), Text 4,7 bis 4,8.
- `[TBD`-Suche Startseite DE/EN: nur die Trust-Leiste „Versand aus Deutschland“ (`span.heipard-trust__tbd`). Die frühere
  „[TBD: Saison-Überschrift]“ ist mit der neuen Überschrift weg.

### 8.2 Kollektion Weihnachten

Angelegt 18:38:57 Uhr, veröffentlicht 18:39:00, EN-Titel „Christmas“ 18:39:14:
- Smart: Tag ist einer von kat-christmas-tree-lights, kat-icicle, kat-curtain, kat-net, kat-cluster, kat-motif,
  kat-weihnachtsbaum.
- Nicht im Menü.
- Die Anlass-Kachel „Weihnachten“ verlinkt darauf.
- `docs/heipard-taxonomie.md` ergänzt.

54 Produkte. Nicht eindeutig weihnachtlich:

| Produkt | Grund |
|---|---|
| hp-dgm-002 „Spiralpfahl Lichtern“ | Gartenstecker, nichts Weihnachtliches im Titel. Passt nicht, soweit ich es sehe |
| hp-olt-100 | Titel nennt „Sommergartenbeleuchtung“ (auch Weihnachtsbaum) |

Ganzjährig, passen aber auch zu Weihnachten (nur zur Kenntnis):
- hp-olt-200: Titel nennt Hochzeit & Party.
- Birken-Lichterbäume: hp-wbf-210, hp-wbf-180, hp-wwf-180.
- Cluster: hp-dfm-400-eu-2, hp-dfm-600, hp-dfm-750-eu.
- Netze: hp-npt-210, hp-dnm-208.
- Vorhänge: hp-csl-…, hp-uct-200-eu, hp-ucp-200, hp-rct-400, hp-dct-200.

Ausschließen ginge über einen eigenen Tag (z. B. `nicht-weihnachten`) als Bedingung. Das ändere ich nur auf dein Wort.

### 8.3 Hero-Badge

„Weihnachten 2026“, EN „Christmas 2026“ (live 18:43/18:45 Uhr).

## 9. hp-dnm-208

Neu geladen nach den Änderungen der Asset-Instanz (18:27 Uhr), geprüft 19:47 Uhr:

| | Stand |
|---|---|
| Position 1 (Karte, Galerie) | `HP-DNM-208_GAL_06.webp`, warmweiß, Alt DE und EN vorhanden |
| Variante Warmweiß | `HP-DNM-208_GAL_06.webp` |
| Variante Multicolor | `HP-DNM-208M_GAL_01.webp` |
| Karte in `/collections/net` (DE, EN) | `GAL_06` mit Alt |
| Karte in `/collections/weihnachten` (DE, EN) | Seite 4 (12 Produkte je Seite), `GAL_06` mit Alt |

Der Befund aus Teil H (Multicolor zeigt das warmweiße Bild, beide Varianten `71TIXKmc_8L`) ist damit erledigt.
`71TIXKmc_8L` steht noch an Position 2 der Galerie, ohne Alt-Text. Das ist Medien-Sache der Asset-Instanz.

## 10. CLS 0,157

Gemessen auf hp-isl-360-eu, mobil, Slow 4G, CPU 4×: ein Sprung von 0,157 bei etwa 8150 ms nach Seitenbeginn.

- Auslöser ist Shopifys Cookie-Banner `section#shopify-pc__banner` (Lage y 381 → 361, Höhe 463 → 483 px).
- Im selben Sprung meldet der Browser die Varianten-Auswahl im Kaufbereich (`fieldset.product-form__input--pill`,
  834/10 → 0/0), also die Fläche, die das Banner überdeckt.
- Desktop: 0,000.

Kein Fix, wie beauftragt. Das Banner ist Shopifys eigenes Element. Ohne Passwortschutz und mit gesetzter Einwilligung
erscheint es nicht erneut.

## Nebenbefunde

- **ES/FR/IT-Übersetzungen der Startseite** sind veraltet und teils falsch (Theme-Inhalte, nicht von mir angelegt):
  - Die spanische Trust-Leiste verspricht „30 días de devolución, sin peros“.
  - Die Story nennt „Bajo Rin“.
  - Anlass-Namen sind vertauscht.
  - Badge und Kicker stehen dort noch auf dem alten Stand.

  Nicht geändert. Sollen die drei Sprachen aus dem Onlineshop, oder übersetze ich die Startseite neu?
- **[TBD] in der Trust-Leiste** (Versand aus Deutschland), siehe 8.1.

## Schreibvorgänge

| Zeit | Objekt | Änderung |
|---|---|---|
| 22.11., 18:29:02–18:29:15 | Lieferumfang und Produkttexte (Abschnitt 1), EN und DE rgb-200a/300a | Werte wie in Abschnitt 1 |
| 22.11., 18:31:32 | Definition `feature_block` | Felder `video_einmal_mobil`, `video_schleife_mobil` (leer) |
| 22.11., 18:38:57–18:39:14 | Kollektion `weihnachten` | angelegt, veröffentlicht, EN-Titel |
| 22.11., 18:30–18:54 | Live-Theme (über Git) | Commits `3015004` bis `1f1d1ae` |
| 22.11., 18:45:00 | Startseiten-Vorlage, EN | Badge, Saison-Block (fünf Texte) |
| 22.11., 19:05:02 | Metaobjekt `isl-b1` | Schleife V2, Mobil-Fassungen (Video-Weg, Messung) |
| 22.11., 19:11:25 | Metaobjekt `isl-b1` | Mobil-Fassungen auf Datei-Weg |
| 22.11., 19:16:03 | Metaobjekte dpm-b1, ctl-b1, dct-b1, dct-sticky, olg-b1, dfm-b2, dfm-b2-zwei | Clip-Felder (Tabelle Abschnitt 6) |
| 22.11., 19:17:08 | Live-Theme (über Git) | `62f8af8` Stufe 1 |
| 22.11., 19:21:30 | Live-Theme (über Git) | `ef79b4a` Stufe 2 |
| 22.11., 19:24:55–19:25:35 | Vorschau-Theme #199733903693 | Hero-Abschnitt, Skript, Clip-Snippet, Abschnitts-CSS, Sprachdateien, Startseiten-Vorlage |
| 22.11., 19:35:37 und 19:39:19 | Vorschau-Theme #199733903693 | Hero-Abschnitt und Skript (`9049068`, `22782d5`) |

## Commits

`main` (live), Theme-Check vor jedem Commit ohne neue Befunde (15 alte in 12 anderen Dateien):

- `3015004` Doku: Videoaufnahmen aus dem Repo, liegen auf OneDrive
- `2178b86` Clips: Start „dunkel, an“, Mobil-Fassungen, Ausschlussliste, HLS-Gerätetest
- `4e294fb` Clips: „einmal“ erst nach 1 s Stillstand abbrechen
- `a6bec9a` Hero: Verlaufsebene sichtbar (Dawn div:empty)
- `327b212` Startseite: Saison-Block Weihnachten, Badge Weihnachten 2026, Anlass-Link
- `3a6e7fa` Clips: Laden ab 1000 px vor dem Sichtfeld
- `efeca70` Saison-Block: Überschrift hell auch im Tag-Modus
- `f520a0d` Clips: Kommentar ergänzt, Sync von 3a6e7fa nachholen
- `15a37a3` Clips: nach ausbleibendem ersten Bild neu entscheiden
- `1f1d1ae` Clips: Kommentar, Sync von 15a37a3 nachholen
- `62f8af8` Clips: Standbild auf Produktbildern, Testseiten je Block
- `ef79b4a` Clips auf allen Seiten
- Doku-Commit dieses Berichts

Shopify hat zweimal einen Push nicht übernommen (`3a6e7fa`, `15a37a3`). Ein Folge-Commit an derselben Datei hat den
Sync jeweils nachgeholt. Den Endstand habe ich per Prüfsumme gegen das Live-Theme geprüft.

Branch `vorschau/hero-tag-abend` (nicht live, nur im Vorschau-Theme):

- `0b05be8` Stand von `main` übernommen (Merge, Konflikt nur im Kommentar zur Verlaufsebene)
- `105ef8d` Mobil-Fassungen, Tempo, Tag-Modus Hinweis und Intro
- `9049068` hängender Clip blendet aus, kein Intro bei 2G/3G
- `22782d5` abgebrochenen Clip nicht weiterladen

Für den Einbau auf `main` (nach deiner Entscheidung) setze ich die Standards auf „aus“: Bild je Modus „aus“, Tempo und
Tag-Modus nach deiner Wahl, wirksam erst mit deinem Go.

## Rückweg

- Abschnitt 1: Werte aus `docs/data/teili-vorher.json`. EN mit `translationsRegister` und aktuellem Digest, DE mit
  `metafieldsSet`.
- Clips:
  - In der Breite: Theme-Einstellung „Clips abspielen“ auf „Nur auf den Testseiten“ oder „Aus“.
  - Code: `git revert ef79b4a 62f8af8`.
  - Je Block: Felder `video_*` leeren.
- Schleifen V2: an isl-b1, dct-sticky, dfm-b2 und dfm-b2-zwei wieder die alten Schleifen eintragen (IDs im Bericht
  der Asset-Instanz zu Auftrag 28).
- Weihnachten: `git revert 327b212 efeca70`, Kollektion `weihnachten` auf „nicht veröffentlicht“.
- Hero-Verlauf: `git revert a6bec9a`.
- Hero-Vorschau: nichts live. Das Vorschau-Theme kann nach deiner Entscheidung weg.

## Offen

1. **Hero: Tempo und Tag-Modus** (7.2, 7.3). Meine Empfehlung: Tempo „schnell“, Tag-Modus „Hinweis“. Danach Einbau auf
   `main` mit Standard „aus“, live nur mit deinem Go.
2. **HLS-Probe** auf deinen Geräten, Link und drei Fragen in Abschnitt 4.
3. **Hero-Clips am Desktop:** 720p-Fassungen von der Asset-Instanz (normal und schnell, an und aus)? 1080p ist für
   langsame Leitungen zu schwer. Ebenso eine 720p-Datei für die Sticky-Schleife DCT.
4. **Endlos-Schleifen ohne Pause** (ISL, DFM, DCT):
   - WCAG 2.2.2 (Stufe A) verlangt für automatisch startende Bewegung über 5 s eine Möglichkeit zum Anhalten.
   - Vorschlag: nach drei Runden auf dem Standbild stehen bleiben (ohne Knopf), oder ein kleiner Pause-Knopf.
   - Bis zu deiner Entscheidung laufen sie wie besprochen weiter.
5. **Kollektion Weihnachten:** hp-dgm-002 und hp-olt-100 herausnehmen (über einen Ausschluss-Tag)?
6. **SEO-Titel EN hp-vit-864l-eu-1** „multicolored“ → „multicolor“?
7. **ES/FR/IT-Startseite:** veraltete und falsche Übersetzungen. Sprachen abschalten oder neu übersetzen?
8. **EN-Texte von mir:**
   - Saison-Block (Text) und „Lights on?“/„Lights off“ in der Vorschau, bitte gegenlesen.
   - Hinweis der Asset-Instanz: In englischen Produktnamen wechseln „string light“ und „string lights“ (z. B. OLA-S14,
     OLH-G40-15/20/35, OLS-G40-25). Entscheidung bei dir.
9. **Ungenutzte Videos in Files:** acht Mobil-Fassungen als Video und die lange OLG-Fassung. Die Asset-Instanz legt sie
   dir vor.
10. **Ersatzbirnen hp-ol-30** [prüfen], Frage an Tyler (bleibt offen).
11. **[TBD] in der Trust-Leiste** „Versand aus Deutschland“.
12. **Vorschau-Themes löschen,** sobald entschieden: #199733903693 (Hero). #199725613389 (Teil G) steht noch.
