# HeiPard Theme: Bericht Teil N

Auftrag: `heipard-theme-auftrag-teil-n.md` (Stand 24.11.2026, abends). Schließt an `docs/heipard-teil-m-bericht.md` an
(bis `84953a6`). Alle Zeiten deutsche Zeit. Vor jedem Schreibzugriff `get-shop-info` = HeiPard. Nichts ging an Shenzhen
oder Tyler.

## Kurzfassung

- **1 ISL live:** Seit 18:05 (`acccea5`). An der echten Storefront geprüft, 40 Prüfungen ohne Fehler, Kontaktbogen
  `docs/data/teiln-isl-live.jpg`.
- **3 Längen und Werte:**
  - hp-isl-486 hat Gesamtlängen 15,15 / 17,15 / 19,2 / 21,2 m und einen Satz dazu im Text, DE und EN.
  - hp-npt-210 hat Kaltweiß im Listenfeld und 210 LEDs an der weißen Variante.
  - hp-dpm-300 hat 400 bzw. 800 LEDs an den 40-m- und 80-m-Varianten.
  - Serienwähler und Familienleiste schreiben „gesamt“/„total“ hinter Gesamtlängen. Spannen entstehen nur aus Werten
    derselben Art. Live seit 18:30.
- **2 B1 mobil:**
  - Gemessen an 55 B1-Bildern auf 122 Seiten: Ein Verlauf in Token-Farbe hätte bis 76 % Deckkraft gebraucht.
  - Deshalb steht der Text auf dem Handy jetzt bei allen B1 unter dem Bild wie bei B2 (live seit 18:49). Desktop ist
    pixelgleich.
  - Kontaktbögen vorher und nachher mit 12 Blöcken liegen bei.
- **4 Englisch:**
  - Vollzählung liegt im Repo.
  - 522 EN-Felder an Blöcken und Set-Überschriften sind geschrieben und auf allen 116 EN-Seiten geprüft.
  - Sechs deutsche Texte sind falsch oder nicht belegt und deshalb nicht übersetzt.
  - Fragen: 169 ohne EN, rund 2.200 Wörter, deine Entscheidung.
- **5 DPT und SCWL:** „vorher“ ist erledigt (dpt-b1 und Set dpt neutral, EN ergänzt), die Asset-Instanz hat Bescheid.
  „Nachher“ wartet auf die C6-Bilder.
- **6 WBF:** wartet auf die C6-Bilder (laut Asset-Instanz noch nicht abgelegt und nicht freigegeben).
- **7 Filter:** wartet auf deinen Bescheid.

## Zeitleiste

| Zeit | Was |
|---|---|
| 18:04 / 18:05 | `acccea5` Merge `teilm/isl-varianten` auf `main`, live seit 18:05:07 (Prüfsumme gleich dem Commit) |
| ca. 18:06 bis 18:12 | ISL-Gegenprobe an der echten Storefront, 40 Prüfungen, Kontaktbogen |
| ca. 18:13 | Antwort an die Asset-Instanz (Wortlaut 3.1, LED-Zahlen DPM) |
| 18:14 | `5ceb002` Werte 3.1, 3.3, 3.4 und Text hp-isl-486 vorher und nachher (vor dem Schreiben) |
| ca. 18:15 bis 18:17 | 12 Metafelder gesetzt, Text hp-isl-486 DE und EN, Lichtfarben-Liste hp-npt-210 EN |
| 18:19 bis 18:29 | `1a119dc`, `25fe5cf`, `ac5970e` Serienleiter „gesamt“ auf Branch `teiln/gesamt`, im Vorschau-Theme geprüft |
| 18:30 | `main` vorgespult, live seit 18:30:20 |
| 18:31 | `c90f461` DPT- und SCWL-Texte vorher und nachher (vor dem Schreiben) |
| ca. 18:31 bis 18:32 | dpt-b1, Set dpt neutral, EN ergänzt, Bescheid an die Asset-Instanz |
| ca. 18:33 | Gegenprobe 3.1 und 3.2 an der echten Storefront |
| ca. 18:35 bis 18:46 | Messung B1 mobil, 122 Seiten |
| 18:37 | `cb59920` B1 mobil auf Branch `teiln/b1-mobil`, ins Vorschau-Theme |
| ca. 18:46 bis 18:48 | Kontaktbögen vorher und nachher, Desktop-Vergleich, Clip-Block |
| 18:49 | `main` vorgespult, live seit 18:49:38, Gegenprobe an der Storefront |
| 19:03 | `3c4f2ef` Vollzählung EN und Liste der 522 EN-Felder (vor dem Schreiben) |
| 19:08 bis 19:19 | 522 EN-Übersetzungen geschrieben, bis 19:23 zurückgelesen (alle gleich) |
| ca. 19:23 bis 19:26 | Storefront-Gegenprobe, 116 EN-Seiten |

## 1 ISL live

- **Vorher:** Der Code für Bilder je Variante lag nur im Vorschau-Theme (`a27bbfb` auf `teilm/isl-varianten`). Die
  Storefront zeigte bei Kaltweiß und Bunt die warmweißen Bilder, R2 und R3 und den Clip.
- **Nachher:** Merge-Commit `acccea5` auf `main`, Theme Check vorher wie Grundlinie (1 Fehler heipard-wordmark,
  14 Warnungen). Live seit 18:05:07; die Prüfsumme von `snippets/heipard-feature-dispatch.liquid` im Live-Theme ist
  gleich dem Commit.
- **Gegenprobe an der echten Storefront** (ohne Vorschau-Theme): hp-isl-264, hp-isl-360-eu und hp-isl-486, je Kaltweiß
  und Bunt, DE und EN, mobil und Desktop (24 Seiten), dazu Warmweiß an hp-isl-360-eu (4 Seiten) und drei Wechselläufe
  Warmweiß → Kaltweiß → Bunt → Warmweiß (zwei DE mobil, einer EN Desktop). 40 Prüfungen, alle bestanden:
  - B1, B2 und R1 zeigen das Bild der Lichtfarbe (ISLW_*, ISLM_*), der Alt nennt die Lichtfarbe, auf EN englisch.
  - Clip, R2 und R3 nur bei Warmweiß. Kein Bild doppelt, kein Überlauf, kein Gedankenstrich.
  - Blockhöhen gleich in allen Lichtfarben: Desktop 557 / 354 / 354 px, mobil 270 / 427 / 402 px (B1 / B2 / R1).
- Kontaktbogen: `docs/data/teiln-isl-live.jpg` (mobil DE und Desktop EN je Produkt und Lichtfarbe).
- **Rückweg:** `git revert -m 1 acccea5` auf `main` (der Git-Sync bringt das Theme zurück). Die Varianten-Metafelder
  dürfen stehen bleiben, ohne den Code liest sie niemand.

## 3 Längen und Werte

Liste vorher und nachher: `docs/data/teiln-werte-3.csv`, Texte: `docs/data/teiln-texte-isl486.csv`.

### 3.1 hp-isl-486 Gesamtlänge

| Variante | Zuleitung im Shop | beleuchtet | gesamtlaenge_m vorher | nachher |
|---|---|---|---|---|
| HP-ISL-486 (Warmweiß) | 3 m | 12,15 m | leer | 15,15 |
| HP-ISL-486W (Kaltweiß) | 5 m | 12,15 m | leer | 17,15 |
| HP-ISL-486M (Multicolor) | 5 m | 12,15 m | leer | 17,15 |
| HP-ISL-648 (Warmweiß) | 3 m | 16,2 m | leer | 19,2 |
| HP-ISL-648W | 5 m | 16,2 m | leer | 21,2 |
| HP-ISL-648M | 5 m | 16,2 m | leer | 21,2 |

- Gesetzt ca. 18:15. Die Summen rechnen mit den Zuleitungen, die heute im Shop stehen.
- Text nach dem Muster aus Teil L, DE und EN (ca. 18:16 / 18:17). Der erste Satz nennt jetzt „486 LEDs auf 12,15 m oder
  648 LEDs auf 16,2 m beleuchteter Länge“. Neu im zweiten Absatz:
  - DE: „In Warmweiß ist die Zuleitung 3 m lang, damit misst die Kette 15,15 m bzw. 19,2 m. In Kaltweiß und Multicolor ist
    sie 5 m lang, damit misst die Kette 17,15 m bzw. 21,2 m.“
  - EN: „In warm white, the power cord is 3 m long, so the icicle lights measure 15.15 m or 19.2 m overall. In cool white
    and multicolor, it is 5 m long, so they measure 17.15 m or 21.2 m overall.“
- Titel, SEO und Meta-Description nennen keine Gesamtlänge und bleiben.
- An der Storefront geprüft (18:33): Der Text steht DE und EN so auf der Seite.
- Die Asset-Instanz hat gefragt, ob damit auch die Zuleitung der warmweißen Fassung (3 m Shop-Tafel 2025 gegen 5 m
  Lieferanten-Tafel 2026) entschieden ist. Meine Antwort: Der Auftrag nennt nur „die Frage“ zur Gesamtlänge; 15,15 m
  setzt 3 m voraus. Ob die Zuleitungsfrage (G18, G21) in der Mail bleibt, entscheidet sie bzw. du. Sagt Tyler 5 m,
  ändern sich Zuleitung und Gesamtlänge der warmweißen Varianten (17,15 und 21,2 m) und der Satz im Text.

### 3.2 Gesamtlängen im Serienwähler und in der Familienleiste

- **Vorher:** Die Serienleiter nahm die beleuchtete Länge und, wo sie fehlte, still die Gesamtlänge. So standen in einer
  Reihe beide Arten ohne Kennzeichen nebeneinander, etwa RGB „20 m, 33 m, 50 m“ (33 m ist die Gesamtlänge der 300A).
  Spannen mischten ebenfalls beide Arten.
- **Nachher** (`1a119dc`, `25fe5cf`, `ac5970e`, live seit 18:30:20):
  - Ist die angezeigte Zahl eine Gesamtlänge, steht „gesamt“ bzw. „total“ dahinter: „33 m gesamt“ / „33 m total“.
  - Spannen entstehen nur aus Werten derselben Art. Haben die Varianten eines Nachbarmodells beleuchtete Längen, zählen
    nur diese; sonst die Gesamtlängen, dann mit Zusatz („5 bis 20 m gesamt“ wäre so ein Fall).
  - Im Variantenmodus bekommt der Optionswert den Zusatz, wenn die Variante nur eine Gesamtlänge hat und der Optionswert
    genau diese Zahl nennt (hp-rpm-200 „40 m gesamt“, hp-blt-050 „5 m gesamt“, „20 m gesamt“).
  - Die Sortierung bleibt.
  - Neue Sprachtexte: `heipard.blocks.serienleiter.length_total` und `range_total` (DE „gesamt“, EN „total“).
- **Mitgezogen:** Auf EN zeigte der Variantenmodus bisher den ganzen Variantentitel („Warm white / 11.25 m“), weil die
  Leiter nur die deutschen Optionsnamen Länge, Höhe, Größe erkannte. Jetzt erkennt sie auch Length, Height, Size, und EN
  zeigt wie DE nur die Länge. Auf ES, FR und IT kann der ganze Titel noch erscheinen, wenn die Optionsnamen dort anders
  übersetzt sind.
- **Wo „gesamt“ jetzt steht** (alle Familien geprüft): OLH-G40 (-15, -25), OL-S11 (-25), OL (-15, -75, -100), CL (-2),
  RGB (-300A), OLS-G40 (-25, -35), SCWL (beide), dazu im Variantenmodus RPM-400 und beide BLT-050-Varianten.
  DFM: Alle DFM-Modelle haben Längen an den Varianten, die Leiter läuft dort im Variantenmodus und zeigt die
  Optionswerte (dfm-600: 9 m, 18 m). Diese nennen die beleuchtete Länge, deshalb kein Zusatz.
- **Geprüft** im Vorschau-Theme: 17 Produkte, DE und EN, mobil und Desktop (68 Seiten), kein Überlauf, auch nicht in den
  Karten. Danach an der echten Storefront: RGB, S11, DFM, ISL-486, DPM-300, NPT-210, DE und EN mobil.
- Kontaktbogen: `docs/data/teiln-serienleiter-gesamt.jpg` (RGB, S11, DFM, OL, BLT-050, RPM, DE und EN mobil).
- **Rückweg:** `git revert ac5970e 25fe5cf 1a119dc` auf `main`.
- **Nebenbefund (vorher schon so):** hp-npt-210 zeigt in der Serienleiter die drei Lichtfarben als Stufen. Die Varianten
  tragen alle `hoehe_m` 2,0, die Option heißt aber Lichtfarbe, also steht der Variantentitel da. Nicht geändert.

## 2 B1 mobil

### Messung

- **Vorgehen:** Alle 116 aktiven Produktseiten und die sechs kaltweißen und bunten ISL-Varianten mobil geladen (390 px,
  doppelte Pixeldichte, wie ein Handy). Je Seite: B1 ohne Text, Verlauf und Clip aufgenommen (Rohbild), dazu die Rahmen
  von Kicker und Überschrift und ihre Farben in beiden Lichtschalter-Stellungen. 122 Seiten, 55 verschiedene B1-Bilder.
- **Rechnung:** Für jeden Bildpunkt hinter Kicker und Überschrift die Mischung mit dem Verlauf wie im Browser (sRGB),
  dann der Kontrast der Textfarbe gegen den hellsten gemischten Bildpunkt. Gesucht war die kleinste Deckkraft eines
  gleichmäßigen Verlaufs hinter dem Text, die für Kicker und Überschrift 4,5:1 schafft. Farbe des Verlaufs: das Token
  `--heipard-rgb-bg-night` (Nachtblau 27, 36, 51), das dunkelste Token, das in beiden Modi gleich bleibt.
- **Heute** liegen Kicker und Überschrift auf dem Handy im schwachen Teil des Verlaufs (18 % bei 42 % Höhe, 0 % ab 72 %).
  Gegen den hellsten Punkt erreicht der Kicker bei den hellen Bildern 1,5:1, die Überschrift 1,0 bis 1,2:1.
- **Ergebnis:** Die hellsten Punkte sind die Lichter selbst (relative Luminanz bis 1,0). Der Kicker (helles Gelb
  `--heipard-accent-bright`) braucht bei 47 von 55 Bildern mehr als 70 %, höchstens 76 %. Die Überschrift braucht 64 %.

| Rang | Bild | Seite | hellster Punkt | Kontrast heute Kicker / Überschrift | nötige Deckkraft Kicker / Überschrift |
|---|---|---|---|---|---|
| 1 | BAUMPVC_B1_01 | pvc-150g | 1,000 | 1,53 / 1,11 | 76 % / 64 % |
| 2 | OLST38_B1_01 | hp-ol-st38-50 | 1,000 | 1,53 / 1,10 | 76 % / 64 % |
| 3 | ISLW_B1_01 | hp-isl-264 (Kaltweiß) | 1,000 | 1,53 / 1,04 | 76 % / 64 % |
| 4 | RNM_B1_01 | hp-rnm-200 | 1,000 | 1,52 / 1,10 | 76 % / 64 % |
| 5 | RIT_B1_01 | hp-rit-280 | 1,000 | 1,52 / 1,10 | 75 % / 64 % |
| 6 | OLG40_B1_01 | hp-olh-g40-50 | 1,000 | 1,53 / 1,20 | 76 % / 62 % |
| 7 | OLS11_B1_01 | hp-ol-s11-50 | 1,000 | 2,78 / 1,07 | 38 % / 64 % |
| 8 | OLG200M_B1_01 | hp-olg-200m | 1,000 | 1,28 / 1,06 | 73 % / 64 % |
| 9 | OLG200W_B1_01 | hp-olg-200w | 1,000 | 1,35 / 1,06 | 63 % / 64 % |
| 10 | DGM048_B1_01 | hp-dgm-048 | 0,999 | 1,52 / 1,02 | 75 % / 64 % |
| 11 | OLSS17_B1_01 | hp-ols-s17-16-eu | 0,999 | 1,14 / 1,06 | 66 % / 64 % |
| 55 | NPT_B1_03 (dunkelstes) | hp-npt-210 | 0,220 | 2,99 / 3,67 | 33 % / 16 % |

  Gleichstand beim hellsten Punkt ist nach dem 99-%-Wert geordnet. Alle 55 Bilder: `docs/data/teiln-b1-messung.csv`.

### Entscheidung: Text unter dem Bild

- Ein Verlauf in Token-Farbe schafft 4,5:1 erst mit 76 % Deckkraft. Das liegt über der Grenze von 70 %. Deshalb steht
  der Text von B1 auf dem Handy jetzt unter dem Bild wie bei B2, für alle B1-Blöcke. Desktop bleibt, wie er war.
- Zum Vergleich: Mit reinem Schwarz (der heutige Verlauf nutzt `rgba(0, 0, 0, …)`) hätten 65 % gereicht. Schwarz ist aber
  kein Token. Dein Auftrag sagt „Farbe nur über die vorhandenen Tokens“, deshalb habe ich diesen Weg nicht genommen. Willst
  du ihn doch, ist der Umbau klein (Frage 2 unten).
- **Umsetzung** (`cb59920`, nur `assets/heipard-feature.css`, live seit 18:49:38):
  - Unter 750 px: Verlauf aus, Text statisch unter dem Bild, Abstand wie bei B2. Rundung und Schatten liegen auf dem Bild
    wie bei den Medien der Bild-Text-Zeilen. Das Bildformat bleibt 4:3, der Ausschnitt ändert sich nicht.
  - Die Overlay-Farben (helles Gelb, helles Weiß) gelten nur noch ab 750 px. Auf dem Handy hat der Text die Farben von
    B2 aus den Tokens, in beiden Lichtschalter-Stellungen.
  - Der Pausenknopf der Clips bleibt unten rechts auf dem Bild. Die mobile Regel, die im Text Platz für ihn ließ, entfällt.
- **Geprüft:**
  - Kontaktbogen vorher (live) und nachher (Vorschau-Theme) mit 12 B1-Blöcken: die zehn hellsten, ISLW_B1 und das dunkle
    NPT-Bild, mobil, Lichtschalter Abend und Tag: `docs/data/teiln-b1-mobil-1.jpg` (Blöcke 1 bis 6) und
    `teiln-b1-mobil-2.jpg` (7 bis 12).
  - Kein Überlauf, kein Gedankenstrich. Blockhöhe mobil vorher 270 px, nachher 442 bis 497 px (Bild 270 px plus Text).
  - Desktop live gegen Vorschau-Theme pixelgleich (hp-ol-st38-50, hp-npt-210, hp-isl-264 Kaltweiß, beide Stellungen).
  - Clip-Block (hp-isl-360-eu) mobil: Knopf auf dem Bild, Text darunter.
  - Nach dem Livegang an der Storefront: gleiche Höhen wie im Vorschau-Theme.
- **Rückweg:** `git revert cb59920` auf `main`.

### 3.3 hp-npt-210

- Listenfeld `lichtfarben`: vorher `["Warmweiß","Multicolor"]`, nachher `["Warmweiß","Kaltweiß","Multicolor"]`, EN
  `["Warm white","Cool white","Multicolor"]` (ca. 18:15 / 18:17).
- Einen Variantenwert zur Lichtfarbe gibt es nicht: Unter den Varianten-Metafeldern (Namespace heipard) steht keine
  Lichtfarbe. Der Optionswert „Weiß“ bleibt.
- `led_anzahl` an HP-NPT-210W: vorher 200, nachher 210 (Tafel, Regel 3).
- Kein Text geändert, keine Kelvin-Zahl. Die Meta-Description nennt weiter „warm white, white or multicolor“ (EN) bzw.
  „Weiß“ (DE), passend zum Optionswert.

### 3.4 hp-dpm-300, 40 und 80 m

Die Längenliste der Asset-Instanz (`reports/laengen_2026-11-24.csv`) nennt für die LED-Zahl:

| Variante | Quelle in der Längenliste | led_anzahl vorher | nachher |
|---|---|---|---|
| HP-DPM-400 | Tafel PT01-400.jpg „HeiPard 400 LED 131 FT“, Excel Z43 | leer | 400 |
| HP-DPM-800 | Tafel PT01-800.jpg „HeiPard 800 LED 262 FT“, Excel Z47 | leer | 800 |
| HP-DPM-400M | Bild der Lieferung A+2_01-400.jpg „40 m (131 ft) • 400 LEDs“, Excel Z44 | leer | 400 |
| HP-DPM-800M | Bild der Lieferung A+2_01-800.jpg „80 m (262 ft) • 800 LEDs“, Excel Z48 | leer | 800 |

- Gesetzt ca. 18:15. Bei den M-Varianten ist die Quelle keine Maßtafel, sondern ein Bild aus der Lieferung (01_source) mit
  der Zahl im Bild, dazu die Excel. Ich habe es wie eine Tafel behandelt, so wie in Teil M den Bildtext. Weder Amazon
  noch nur Text, deshalb nichts in die Tyler-Tabelle. Rückweg: die vier Werte löschen.
- Die Serienleiter von hp-dpm-300 zeigt jetzt bei allen acht Stufen die Lichtpunkte (vorher fehlten sie bei 40 und 80 m).

## 5 DPT und SCWL: vorher

Liste: `docs/data/teiln-5-dpt-scwl-texte.csv` (Commit `c90f461`, vor dem Schreiben). Geschrieben ca. 18:31 bis 18:32.

| Stelle | vorher | nachher DE | nachher EN |
|---|---|---|---|
| dpt-b1 Kicker | Warmweißes Licht | Im Garten | In the garden |
| dpt-b1 Text | Im verschneiten Garten wird es früh dunkel. Die Kette leuchtet warmweiß. | Im verschneiten Garten wird es früh dunkel. Dann bringt die Kette Licht in den Abend. | In the snowy garden, it gets dark early. Then the string lights brighten the evening. |
| dpt-b1 Titel | Ein ruhiger Schein im Winter | bleibt | A calm glow in winter (EN fehlte) |
| Set dpt Überschrift | Warmweißes Licht in zwei Längen | Viel Licht in zwei Längen | Plenty of light in two lengths |
| Set dpt Kicker | LED-Lichterkette auf Kabelrolle | bleibt | LED string lights on a cable reel (EN fehlte) |

- Längenregel: „in zwei Längen“ und dpt-b2 „30 m oder 60 m“ bleiben, DPT-Texte nennen nur 30 und 60 m.
- **SCWL** geprüft: scwl-b1, -b2, -r1 und die Set-Überschrift „Feine Lichtpunkte am Kupferdraht“ nennen keine Lichtfarbe,
  DE unverändert.
- **EN ergänzt, wo es fehlte:** dpt-b2 (Kicker, Titel, Text), scwl-b1 (Kicker, Titel, Text), Kicker und Überschrift der
  Sets dpt und scwl. dpt-r1, scwl-b2 und scwl-r1 hatten EN schon.
- **Alts:** dpt-b1, dpt-b2, scwl-b2 und scwl-r1 nennen im Block-Alt Warmweiß. Sie beschreiben das warmweiße Bild, das die
  Warmweiß-Varianten weiter zeigen, und bleiben. Für die bunten Varianten greifen die Variantenfelder
  `feature_b1_alt`, `feature_b2_alt`, `feature_r1_alt` (die Asset-Instanz setzt sie DE und EN wie bei ISL).
- Bescheid an die Asset-Instanz ca. 18:32, angekommen 18:32. Sie meldet: Die C6-Bilder liegen noch nicht
  vor (`00_inbox/hermes/c6/` fehlt, Notion-Einträge nicht freigegeben). Sie setzt DPT, SCWL und WBF in einem Durchgang,
  sobald du die Bilder ablegst und freigibst.
- **Rückweg:** Kicker und Text von dpt-b1 und die Set-Überschrift zurück auf die Werte der Spalte „vorher“ (DE), die
  neuen EN-Übersetzungen dürfen stehen bleiben oder werden gelöscht.

## 4 Englisch an Blöcken und Fragen

### 4.1 Vollzählung (nur gelesen)

Liste: `docs/data/teiln-en-zaehlung.csv` (1.908 Zeilen, je Objekt und Feld: DE gefüllt, EN ja/nein, Texte). Stand vor dem
Schreiben, gelesen ca. 18:45 bis 19:10 (Hilfsagent). Eine veraltete EN-Übersetzung (outdated) gab es nirgends: Fehlt
EN, fehlt sie ganz.

- **Verwendet** heißt: steht in einem Set, das an einem aktiven Produkt hängt (`heipard.feature_set`), oder hängt direkt
  an einem aktiven Produkt. Fragen hängen über `heipard.fragen` (Liste von `product_question`, Felder `frage` und
  `antwort`). Alle 116 aktiven Produkte haben ein eigenes Set; das Metafeld `heipard.feature_blocks` ist überall leer.
- **Bestand:** 346 Blöcke (335 verwendet), 71 Sets (67), 191 Fragen (187).
- **Nicht verwendet** (getrennt geführt, nicht übersetzt): Blöcke auto-kelvin, auto-steuerung, ctl-sticky,
  ol-g40-schieber, ols-s11-b1, stt-b1/-b2/-r1, vorlage-b1/-b2/-r1; Sets stt, vorlage-hero, vorlage-standard,
  vorlage-longtail; Fragen stt-frage-1 bis -4.

| Typ | Feld | ohne EN (verwendet) | ohne EN (nicht verwendet) |
|---|---|---|---|
| Block | Kicker | 140 von 201 | 5 |
| Block | Überschrift | 138 von 321 | 5 |
| Block | Text | 130 von 313 | 5 |
| Block | Alt | 0 von 301 | 0 |
| Set | Kicker | 60 von 66 | 1 |
| Set | Überschrift | 60 von 66 | 1 |
| Frage | Frage | 169 von 187 | 3 |
| Frage | Antwort | 169 von 187 | 3 |

Gezählt ist, was als Übersetzung gespeichert ist. Was Translate & Adapt auf der Storefront maschinell zeigt, ist darin
nicht enthalten.

### 4.2 Blöcke ergänzt

- **Umfang:** Kicker, Überschrift und Text aller verwendeten Blöcke ohne EN, dazu Kicker und Überschrift der Sets. Die
  Set-Überschriften stehen über den Blöcken in derselben Sektion; ohne sie hätte die EN-Seite englische Blöcke unter einer
  deutschen oder maschinellen Überschrift. Willst du die Sets nicht dabei haben, lösche ich deren 120 Übersetzungen.
- **Liste mit DE und EN vor dem Schreiben:** `docs/data/teiln-en-bloecke.csv` (Commit `3c4f2ef`), 528 Zeilen, 522 mit
  EN. Entwurf vom Hilfsagenten nach dem Glossar aus Teil L, von mir ganz durchgelesen, 18 Stellen nachgebessert (Spalte
  `hinweis`, z. B. „Set it up instead of buying a fir“ → „… a fir tree“, „To IP67, it is …“ → „With an IP67 rating, it is
  …“, „neatly reeled“ → „neatly rolled up“). Maschinell geprüft: keine Gedankenstriche, keine Superlative, keine
  britische Schreibweise, in jeder Zeile dieselben Zahlen wie im DE (Dezimalpunkt, 1,500), kein deutsches Wort.
- **Geschrieben** 19:08 bis 19:19 (Hilfsagent, 11 Pakete `translationsRegister`, vor jedem Paket `get-shop-info`):
  522 Übersetzungen an 203 Metaobjekten, keine userErrors. Digest jeweils sha256 des deutschen Werts. Danach alle 522
  Werte aus dem Shop zurückgelesen: 522 gleich, 0 Abweichungen (19:23). Die vorhandenen EN-Alts sind nicht berührt.
- **Storefront-Gegenprobe** (ca. 19:23 bis 19:26): alle 116 EN-Produktseiten, 3.215 Texte der Feature-Sektion (Kicker,
  Überschriften, Texte). Deutsch steht nur noch in den sechs bewusst nicht übersetzten Texten (Tabelle unten).
- **Rückweg:** Die 522 Übersetzungen mit `translationsRemove` (locale en, Schlüssel aus `teiln-en-bloecke.csv`) löschen.
  Achtung, Translate & Adapt füllt fehlende EN danach wieder maschinell.

### Deutsche Texte, die ich nicht übersetzt habe (falsch, veraltet oder nicht belegt)

| Block | Befund |
|---|---|
| ol-b2 Text | „10, 15, 45 und 60 m“ sind Gesamtlängen. Die Regel (projektstand.md) verlangt die beleuchtete Länge, z. B. hp-ol-25 hat 12 m beleuchtet. |
| olh-g40-b2 Text | „von 10 m mit 15 Birnen bis 30 m mit 50 Birnen“ sind Gesamtlängen, hp-olh-g40-50 hat 27 m beleuchtet. |
| olas14-sticky Text | „20-m-Kette“ ist die Gesamtlänge von hp-ola-s14-30-eu (16,8 m beleuchtet). |
| dpm-b2 Text | nennt nur 30 m mit 300 und 60 m mit 600 LEDs, hp-dpm-300 hat auch 40 und 80 m. |
| dgm-w1-r1 Text | „48 oder 70 LEDs“ ist veraltet, das Set hängt nur noch an hp-dgm-002 (70 LEDs). |
| u20-b2 Text | „Nach IP68 …“: IP68 ist im Produkt nicht belegt (`ip_schutzart` leer, die Auswahlliste kennt kein IP68). |

**Weitere Befunde, EN war schon da oder ist übersetzt** (nicht geändert):
- dgm-w1-048-r1 sagt „48 oder 70 LEDs“, das Produkt hp-dgm-048 hat 48.
- ctl-m-b1 sagt „180 bis 400 LEDs“, die Produkte mit diesem Set haben 180 und 240.
- ucp-r1 nennt nur 3 x 2 m, hp-ucp-200 gibt es auch mit 3 x 3 m.
- Die Fragen dpm-frage-1 und olh-g40-frage-1 haben dasselbe Längenproblem wie dpm-b2 und olh-g40-b2.
- sblb-r1 Text: „Die 2 m Zuleitung … geben dir Spielraum“ (Verb im Plural), übersetzt, das Deutsche sollte „gibt“ heißen.
- npt-b2 Text nennt die Varianten „Warmweiß, Weiß und Multicolor“, das Listenfeld sagt seit 3.3 Kaltweiß. Passt zum
  Optionswert „Weiß“, deshalb so übersetzt („white“).
- dpt-b2 und Set dpt nennen zwei Längen, das Produkt hat sechs Varianten von 20 bis 80 m. Das ist deine Längenregel
  (bis zu den Preisen nur 30 und 60 m), deshalb kein Fehler.

### 4.3 Fragen: nur die Zahl

- 169 verwendete Fragen haben kein EN, je Frage und Antwort, also 338 Felder. Zusammen rund 2.200 Wörter Deutsch. Die
  18 Fragen mit EN sind fast alle „What's in the box?“.
- Dazu 3 unverwendete Fragen ohne EN (25 Wörter), die bleiben außen vor.
- Geschätzter Umfang: gut halb so viel wie die Blöcke aus 4.2 (dort 4.100 Wörter in 522 Feldern), gleicher Ablauf
  (Entwurf, Durchsicht, Liste im Repo, Schreiben). Zwei Fragen haben das Längenproblem oben und brauchen erst ein
  korrigiertes Deutsch.

### 4.4 Liste für Daniel

Fortgeführt: `docs/data/teiln-liste-daniel-es-fr-it.md` (alle Stellen aus Teil N, die es nur DE und EN gibt).

## 5 DPT und SCWL: nachher

Wartet auf die C6-Bilder. Sobald die Asset-Instanz die Werte an HP-DPT-200M, HP-DPT-400M, HP-SCWL-10M2P-MC und
HP-SCWL-15M2P-MC meldet, prüfe ich wie bei ISL (hp-dpt-300 und beide SCWL-Produkte, je Lichtfarbe, DE und EN, Desktop und
mobil, Wechsel hin und zurück, bei DPT ein Längenwechsel in Bunt) und ergänze diesen Abschnitt mit Kontaktbogen.

## 6 WBF

Wartet auf die C6-Bilder. Danach in einem Zug: Alts wbf-b1 und wbf-b2 aus Notion, wbf-r1 neu getextet, neue Blöcke wbf-r2
und wbf-r3 (Aufbau wie wwf-r2/-r3), im Set wbf wwf-r2/-r3 durch wbf-r2/-r3 ersetzt, Prüfung an hp-wbf-180 und -210.

## 7 Lichtfarben-Filter

Unverändert: wartet auf deinen Bescheid, dass der Filter in Search & Discovery umgestellt ist.

## Theme Check und Commits

Vor jedem Theme-Commit `shopify theme check`: jedes Mal 1 Fehler (heipard-wordmark, ImgWidthAndHeight) und 14 Warnungen,
wie die Grundlinie.

| Commit | Zeit | Was |
|---|---|---|
| `acccea5` | 18:04 | Merge `teilm/isl-varianten` (ISL live) |
| `5ceb002` | 18:14 | Doku 3.1, 3.3, 3.4, Text isl-486, Kontaktbogen ISL |
| `1a119dc` | 18:19 | Serienleiter „gesamt“/„total“ |
| `25fe5cf` | 18:23 | Serienleiter: Vergleich ohne geschützte Leerzeichen |
| `ac5970e` | 18:25 | Serienleiter: englische Optionsnamen |
| `a12b4b8` | 18:30 | Doku Kontaktbogen Serienleiter |
| `c90f461` | 18:31 | Doku DPT/SCWL-Texte (vor dem Schreiben) |
| `cb59920` | 18:37 | B1 mobil: Text unter dem Bild |
| `570eba2` | 18:49 | Doku Messung B1, Kontaktbögen |
| `3c4f2ef` | 19:03 | Doku EN-Zählung und EN-Liste (vor dem Schreiben) |
| `5fe0a74` | 19:26 | Bericht Zwischenstand, Liste für Daniel |

## Rückweg im Überblick

- ISL: `git revert -m 1 acccea5`.
- Serienleiter: `git revert ac5970e 25fe5cf 1a119dc`.
- B1 mobil: `git revert cb59920`.
- Werte 3.1, 3.3, 3.4: Spalte „vorher“ in `docs/data/teiln-werte-3.csv`; Text hp-isl-486: `teiln-texte-isl486.csv`.
- DPT-Texte: Spalte „vorher“ in `teiln-5-dpt-scwl-texte.csv`.
- EN an Blöcken und Sets: die 522 Übersetzungen aus `teiln-en-bloecke.csv` mit `translationsRemove` löschen.

## Offen bei dir

1. **Fragen EN (4.3):** 169 Fragen, 338 Felder, rund 2.200 Wörter. Soll ich sie wie die Blöcke übersetzen (Entwurf,
   Durchsicht, Liste im Repo, dann schreiben)? Zwei davon (dpm-frage-1, olh-g40-frage-1) brauchen erst ein korrigiertes
   Deutsch.
2. **B1 mobil (2):** Der Text steht jetzt unter dem Bild. Die Alternative wäre ein Verlauf in reinem Schwarz mit 65 %
   hinter dem Text. Das hält die 70-%-Grenze ein, aber Schwarz ist kein Token. Nur wenn du das lieber willst.
3. **Sechs deutsche Texte** (Tabelle in 4.2: ol-b2, olh-g40-b2, olas14-sticky, dpm-b2, dgm-w1-r1, u20-b2): Sollen
   sie nach der Längenregel bzw. ohne IP68 neu gefasst werden? Dann übersetze ich sie danach.
4. **Weitere Befunde** aus 4.2 (dgm-w1-048-r1, ctl-m-b1, ucp-r1, sblb-r1): nur zur Kenntnis oder anpassen?
5. **Set-Überschriften EN:** 120 Übersetzungen mitgeschrieben (Begründung in 4.2). Bleiben sie?
6. **hp-isl-486, Zuleitung Warmweiß:** Die Gesamtlängen rechnen mit 3 m. Bleibt die Frage nach 3 oder 5 m in Tylers Mail
   (Asset-Instanz)?
7. **C6-Bilder:** Für 5 „nachher“ und 6 brauche ich die freigegebenen C6-Bilder in `00_inbox/hermes/c6/`.
