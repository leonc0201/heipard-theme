# HeiPard Theme: Bericht Teil P

**Stand:** 26.11.2026, deutsche Zeit. Auftrag: `heipard-theme-auftrag-teil-p.md`. Vor jedem Schreibzugriff
`get-shop-info` = HeiPard. Nicht angefasst: Preise, Status, Bestand, Handles, Showroom-Logik, Rechtstexte, Produktmedien,
`galerie_medien`, Optionswerte, Files, Bildfelder `feature_*`, technische Metafelder. Nichts an Shenzhen oder Tyler.

## Kurzfassung

- **2 Fragen:** 14 von 16 Fragen geschrieben und übersetzt, jede Zahl vorher frisch gegen die Metafelder geprüft. Auf EN
  steht in der Fragen-Sektion nur noch bei vam-frage-1 und cl-frage-1 Deutsch: Ihre Gesamtlänge stammt nicht aus Teil L
  oder M (Regel 2).
- **3 hp-u20-200:** IP68 ist aus Beschreibung und SEO-Beschreibung entfernt, DE und EN. Auf der Seite steht es
  nirgends mehr, auch nicht in Meta-Tags und strukturierten Daten. Die Asset-Instanz meldet IP68 inzwischen als
  belegt, das entscheidest du (Frage 1).
- **4 uct-r1:** nennt jetzt beide Größen. Sonst hängt kein Text mit nur einer Größe an einem Produkt mit mehreren.
- **5 Serienleiste:** live seit 02:33:56.
  - Eine Karte je Maß, der Klick führt in die geltende Lichtfarbe. 33 Produkte haben weniger Karten (DCT, UCP, UCT,
    CSL, ISL, DFM, DPM, DPT, OLG, CTL, BSL). DGM-002 und DGM-048 haben keine Leiste mehr.
  - Vorschau: 92 Startzustände, 180 Klicks, alle richtig.
  - Live gleich Vorschau an allen 116 Produkten.
- **6 Blockbilder:** 129 Blöcke geleert, B1, B2 und R1 kommen jetzt nur noch aus den Feldern. Vorher gegen nachher
  0 Abweichungen (DE Desktop und mobil je 113 Seiten, EN 20 Seiten, zweiter Durchgang ebenso). 29 Blöcke behalten ihr
  Bild (Clips und Blöcke ohne Feld).
- **7 Werte aus Auftrag 36:** an der Storefront richtig, kein Text ist dadurch falsch geworden. Vier Texte wären
  genauer möglich (RPM, TPM), nicht geschrieben.
- **8 Liste für Daniel:** `docs/data/teilp-liste-daniel-es-fr-it.md`.
- **Offen bei dir:** 5 Fragen am Ende.

## Zeitleiste

| Zeit | Was |
|---|---|
| 01:50 bis 01:53 | Abschnitt 2: Fragen, Produkte und Varianten frisch gelesen, Zahlen geprüft |
| 01:55 | Asset-Instanz: `feature_b2` an OLAS14, VIT, NPT auf das Bild am B2-Block (Auftrag 36, 2) |
| 01:56 | `cfec62a` Liste `teilp-fragen.csv` (vor dem Schreiben); 14 Fragen DE geschrieben |
| 01:57 | 28 EN-Felder geschrieben, zurückgelesen |
| 01:59 bis 02:01 | Storefront Fragen, 32 Produkte DE und EN mobil; u20 vorher gelesen |
| 02:05 | `8c02336` Liste `teilp-texte.csv`; hp-u20-200 und uct-r1 DE geschrieben |
| 02:05:35 | Asset-Instanz: 21 Werte aus Auftrag 36, 3 gesetzt (IP68 an U20 von der Definition abgelehnt) |
| 02:06 | EN für u20 und uct-r1 geschrieben, zurückgelesen |
| 02:07 | Storefront u20 (IP68 nirgends) und uct-r1 DE/EN |
| 02:08 bis 02:12 | Serienleiste: Live-Stand aller 116 Produkte aufgenommen (vorher) |
| 02:16 | Vorschau-Theme #199950827853 angelegt (Branch `teilp/serie-karten`) |
| 02:16 bis 02:20 | Vorschau: 116 Produkte gegen die Simulation |
| 02:21 bis 02:31 | Klickprüfung in der Vorschau, 8 Produkte, DE/EN, Desktop und mobil; Wechsel im Wähler |
| 02:24 bis 02:31 | Blockbilder vorher: 113 Seiten DE Desktop und mobil, EN-Stichprobe |
| 02:25 bis 02:28 | Abschnitt 7: Storefront der Produkte mit neuen Werten, DE und EN |
| 02:27 | `e19de2b` Listen `teilp-serienleiste.csv` und `teilp-blockbilder.csv` (vor dem Schreiben) |
| 02:33:44 | `1048214` nach `main` (vorgespult), live ab 02:33:56 |
| 02:34 bis 02:37 | Serienleiste live gegen Vorschau, 116 Produkte; Aufnahmen nachher |
| 02:37 | Abgleich vor dem Schreiben: Felder und Blöcke unverändert |
| 02:37 bis 02:40 | Abschnitt 6, Paket 1 (126 Blöcke in 7 Teilen), Zwischenprüfung nach Teil 1 |
| 02:40 | Abschnitt 6, Paket 2 (3 Blöcke) |
| 02:41 bis 02:45 | Blockbilder nachher: DE Desktop, DE mobil, EN-Stichprobe |
| 02:45 bis 02:48 | Zweiter Durchgang Blockbilder (gegen zwischengespeicherte Seiten) |

## 2 Die 16 Fragen

Liste: `docs/data/teilp-fragen.csv` (Commit `cfec62a`, vor dem Schreiben). Je Frage zwei Zeilen (Frage, Antwort): DE
vorher und nachher, EN nachher, Quelle der Zahl, Status.

**Zahlen geprüft** (Regel 1) gegen die Metafelder aller Produkte, an denen die Frage hängt, frisch gelesen um 01:52
(Produkte und Varianten, dazu `referencedBy` je Frage):

| Frage | Beleg |
|---|---|
| ol-frage-1 | led_anzahl hp-ol-15 15, -25 25, -75 75, -100 100 (dazu der Entwurf hp-ol-15-g mit 15) |
| ol-s11-frage-1 | led_anzahl hp-ol-s11-15 15, -25 25, -30 30, -50 50 |
| ols-g40-frage-1 | led_anzahl hp-ols-g40-16 16, -25 25, -35 35 |
| ols-s11-frage-1 | Varianten 7,5 m (beleuchtet 7,5, 16 LEDs) und 12,5 m (beleuchtet 12,5, 25 LEDs) |
| sblb-frage-2 | beleuchtet 9 und 15 m, 60 und 100 LEDs |
| scwl-frage-1 | led_anzahl 100 und 150 |
| blt-frage-2 | Variante HP-BLT-050 (5 m): 50 LEDs, 2700 Kelvin |
| ucp-frage-1, uct-frage-1 | Optionswerte Größe 3 x 2 m und 3 x 3 m |
| dgm-w1-frage-1 bis -3 | led_anzahl 70 (dgm-002) und 48 (dgm-048), timer_dauer_h [6] an beiden, stromquelle Batterie an dgm-048 |
| ol-g40-frage-2 | koppelbar_bis 4 an hp-ol-30 und hp-ol-50 |
| olh-g40-frage-2 | stromquelle Netz an allen fünf OLH-G40 |

**Nicht geschrieben (Regel 2), bleiben deutsch:**
- **vam-frage-1** („Sie ist insgesamt 40 m lang.“): `gesamtlaenge_m` 40 an hp-vam-400l-eu-1 stammt nicht aus Teil L oder M.
  In `teilm-laengen-metafelder.csv` steht „unverändert, offen (Tyler-Tabelle), keine Quelle“, der Kandidat in
  `teilm-laengen-offen.csv` ist nur der Amazon-Titel und das Amazon-Attribut.
- **cl-frage-1** („Wie lang ist die Lichterkette?“ / „Sie ist insgesamt 10 m lang.“): `gesamtlaenge_m` 10 an hp-cl-1-eu
  und hp-cl-2-eu stammt ebenfalls nicht aus Teil L oder M; beide Listen haben für CL keine Zeile `gesamtlaenge_m` (Teil L
  setzte nur `beleuchtete_laenge_m` 10 an hp-cl-1-eu). Der Teil-M-Bericht nennt die 10 m bei CL-2 die „belegte
  Schnurlänge“, aber nicht als Wert für `gesamtlaenge_m`.

**Geschrieben** (Wortlaut aus dem Auftrag, EN nach dem Glossar aus Teil L und den Schreibweisen aus Teil O):
- DE 01:56, 14 Fragen, 0 userErrors. Digests danach gegen die lokal berechneten geprüft: 14 von 14 gleich.
- EN 01:57, 28 Felder, 0 userErrors. Zurückgelesen: DE und EN gleich der Liste, nichts veraltet.
- Maschinell geprüft vor dem Schreiben: keine Gedankenstriche, keine britische Schreibweise, kein deutsches Wort im EN,
  in jeder Zeile dieselben Zahlen wie im DE. 0 Befunde.
- EN-Wortlaut zum Beispiel „What versions are available?“ / „They come with 15, 25, 75 or 100 bulbs.“, „Can several
  strings be connected?“ / „Yes, up to four strings can be connected in a row.“, „They plug into an outlet.“.

**Storefront** (01:59 bis 02:01, alle 32 Produkte mit diesen Fragen, DE und EN mobil, 64 Seiten):
- 224 Frage-Antwort-Paare gelesen. Alle 70 erwarteten Paare stehen wörtlich wie in der Liste.
- Deutsch auf EN steht nur noch in vam-frage-1 (hp-vam-400l-eu-1) und cl-frage-1 (hp-cl-1-eu, hp-cl-2-eu), die nach
  Regel 2 deutsch bleiben. Sonst steht in der Fragen-Sektion auf EN kein Deutsch mehr.
- Keine Gedankenstriche, kein Überlauf.
- Kontaktbogen: `docs/data/teilp-texte-mobil.jpg` (je Frage DE und EN, dazu Abschnitt 3 und 4).

**Hinweis:** blt-frage-2 hängt auch an hp-blt-100-eu-1. Dort gibt es keine Kette mit 50 LEDs, die Antwort meint die
Schwester hp-blt-050 („Die Kette mit 50 LEDs …“). Die Zahl stimmt, deshalb geschrieben.

**Rückweg:** Spalten `de_vorher` in der Liste per `metaobjectUpdate` zurückschreiben, für EN `translationsRemove` (locale
en, Schlüssel `frage` und `antwort` der 14 Fragen). Achtung, Translate & Adapt füllt fehlende EN danach maschinell.

## 3 hp-u20-200: IP68 aus der Beschreibung

Liste: `docs/data/teilp-texte.csv` (Commit `8c02336`, vor dem Schreiben).

- **Vorher an der Seite** (DE und EN, gelesen 01:59): IP68 stand an fünf Stellen, alle aus zwei Feldern:
  - der Beschreibung (sichtbarer Text und die strukturierten Daten; im Showroom-Modus übernimmt
    `heipard-showroom-jsonld` die Beschreibung),
  - der SEO-Beschreibung (meta description, og:description, twitter:description).
  - Spec-Kacheln, Fragen und Blöcke nannten IP68 nicht.
- **Geschrieben** 02:05 (`productUpdate` mit Beschreibung, SEO-Titel und SEO-Beschreibung zusammen, 0 userErrors):
  - Beschreibung DE, zweiter Absatz: „Du dimmst in vier Stufen, eine Fernbedienung liegt bei. Den Strom liefert ein
    Netzteil, und mit der 3 m langen Zuleitung misst der Schlauch 13 m bzw. 23 m.“ Die feste Hülle nennt schon Absatz 1.
  - SEO-Beschreibung DE: „… Dimmbar in vier Stufen, mit Fernbedienung.“ (ohne „und IP68-Schutz“). SEO-Titel unverändert
    mitgeschickt.
  - EN 02:06 (`translationsRegister`): Beschreibung „… Power is supplied by a power adapter, and with the 3 m power cord
    the rope light measures 13 m or 23 m overall.“, SEO-Beschreibung „… Dimmable in four levels, with remote control.“
  - Zurückgelesen: nichts veraltet.
- **Nachher an der Seite** (02:07, DE und EN): IP68, „Untertauchen“ und „immersion“ stehen nirgends mehr im Quelltext,
  auch nicht in Meta-Tags und strukturierten Daten.
- **Befund, entscheidest du:** Die Asset-Instanz meldet um 02:05, dass IP68 für U20 belegt ist (Shenzhen-PSD
  `管子灯PSD/5.psd` „IP68 wasserdicht“, dazu 10.psb und 11.psb). Sie konnte `ip_schutzart` nicht setzen, weil die
  Definition nur IP20, IP44, IP45, IP54, IP65 und IP67 zulässt. Ich habe nach deinem Auftrag geschrieben und die Definition
  nicht angefasst (Frage 1 unten).
- **Nebenbefund:** Der Absatz nennt „ein Netzteil“. Im Lieferumfang von hp-u20-200 steht kein Netzteil, belegt ist nur
  `stromquelle` Netz (wie bei olh-g40-frage-2). Nicht geändert, der Auftrag betraf nur IP68.
- **Rückweg:** alter Text DE und EN in `teilp-texte.csv` (Spalten `de_vorher`, `en_vorher`), per `productUpdate`
  (Beschreibung und SEO zusammen) und `translationsRegister`.

## 4 uct-r1 und weitere feste Größen

- **uct-r1** an hp-uct-200-eu, geschrieben 02:05, EN 02:06: „Den Vorhang gibt es in 3 x 2 m und 3 x 3 m.“ / „The curtain
  comes in 3 x 2 m and 3 x 3 m.“ (wie ucp-r1). Zurückgelesen, nichts veraltet.
- **Suche** nach jeder Angabe „a x b m“ in allen verwendeten Blöcken (348 gelesen, 337 in Sets aktiver Produkte) und
  allen Fragen. 14 Fundstellen außer uct-r1, alle in `teilp-texte.csv` mit Entscheidung:
  - beide Größen genannt: ucp-r1, ucp-frage-1, uct-frage-1, csl-frage-1, dct-frage-1;
  - eine Größe an einem Produkt mit nur dieser Größe: csl-200-c-b1, csl-300-c-b1, npt-b1/-schieber/-sticky/-frage-1
    (NPT nur 3 x 2 m in drei Lichtfarben), rnm-b1/-frage-1, rct-b1/-frage-1 (2 x 2 m), dnm-b1 (2,5 x 1,8 m).
  - Kein weiterer Text war zu ändern.
- **Storefront** (02:07, DE und EN): hp-uct-200-eu zeigt den neuen Text in beiden Sprachen. Aufnahme im Kontaktbogen.
- **Rückweg:** `de_vorher`/`en_vorher` in `teilp-texte.csv`.

## 5 Serienleiste: eine Karte je Maß

Liste: `docs/data/teilp-serienleiste.csv` (Commit `e19de2b`): alle 116 Produkte mit Modus, Maß und Karten vorher (live
26.11.) und nachher, Lichtpunkte, Zusammenfassung und Ziel jedes Klicks je Startvariante (Variantenmodus) bzw. aus dem
Produkt mit seiner Lichtfarbe (Familienmodus). 35 Produkte ändern sich.

**Umsetzung** (`snippets/heipard-fb-serienleiter.liquid`, Commit `1048214`):
- Gleiche Maße ergeben eine Karte. Im Variantenmodus zählt der Optionswert von Länge, Höhe oder Größe, ohne solche
  Option der Wert. Im Familienmodus zählt der Wert bzw. die Fläche Breite x Höhe. Beschriftet wird nach dem Maß, bei
  Flächen „3 x 2 m“ (neuer Sprachschlüssel `heipard.blocks.serienleiter.size`, DE und EN).
- Klickziel im Variantenmodus: die Variante dieses Maßes, die in den übrigen Optionen am meisten mit der gewählten
  übereinstimmt. Die Lichtfarbe zählt dabei vor allen anderen Optionen. Ohne Übereinstimmung die erste verfügbare,
  sonst die erste. Beispiel UCT: Von Warmweiß/Lichterkette/3 x 2 m führt 3 x 3 m zu Warmweiß/Kupferdraht, weil es
  3 x 3 m nur mit Kupferdraht gibt.
- Klickziel im Familienmodus: das aktuelle Produkt, sonst das mit denselben `heipard.lichtfarben`, sonst eines mit der
  ersten Lichtfarbe des aktuellen, sonst das erste verfügbare, sonst das erste in der Kollektion.
- Lichtpunkte und Preis kommen vom Klickziel. „Dieses Modell“ steht an der Karte, deren Maß die gewählte Variante bzw.
  das aktuelle Produkt hat.
- Bleibt nur eine Karte oder hat keine Stufe ein Maß, entfällt die Leiste. Damit fallen DGM-002 und DGM-048 weg, die
  bisher die beiden Produkttitel nebeneinander zeigten.
- Im Variantenmodus nimmt eine Variante ohne eigene Länge oder Höhe den Wert am Produkt, wie die Technik-Tabelle. Ob
  der Variantenmodus gilt, entscheiden weiter nur eigene Werte.
- Beim Variantenwechsel lädt `heipard-variant.js` die Sektion mit `?variant=` neu, die Ziele passen sich also ohne
  Neuladen der Seite an.

**Befund vorher, durch die neuen Werte aus Auftrag 36:** Seit 02:05 haben die 3-x-3-m-Varianten von UCP und UCT eine
eigene Höhe. Damit bekamen beide Produkte live eine Leiste mit sechs Karten, und „3 x 3 m“ stand vor „3 x 2 m“, weil
die 3-x-2-m-Varianten keinen eigenen Wert hatten. Die neue Fassung behebt das mit dem Grundwert am Produkt.

**Vorschau** (Theme #199950827853 „zz-vorschau Teil P Serienleiste (kann weg)“, neu angelegt um 02:16, das alte
#199733903693 habe ich nicht benutzt):
- 116 Produkte gegen die Simulation: 0 Abweichungen bis auf die Reihenfolge bei BSL (siehe unten). Kein Liquid-Fehler.
- Klickprüfung an hp-dct-200, hp-ucp-200, hp-uct-200-eu, hp-csl-200-c, hp-csl-300-w, hp-dgm-002, hp-rgb-300a und
  hp-wbf-180, DE und EN, Desktop und mobil:
  - Varianten in jeder Startvariante, also in jeder Lichtfarbe und Ausführung.
  - 92 Startzustände, 180 Klicks. Jedes Ziel stimmt.
  - Jede Landung zeigt die erwartete Variante und „Dieses Modell“ an der angeklickten Karte.
- Wechsel im Variantenwähler ohne Neuladen (DCT Kaltweiß, DCT 3 x 3 m, UCP Multicolor, UCT Kaltweiß): Die Leiste
  zeigt danach die richtigen Ziele, 4 von 4.

**Live:** `main` um 02:33:44 auf `1048214` vorgespult (ohne Force), live seit spätestens 02:33:56. Gegenprobe 02:34 bis
02:37: alle 116 Produkte live gegen die Vorschau, Haupttheme, 0 Abweichungen, kein Liquid-Fehler.

**Nachher, Überblick:**
- Karten zusammengefasst an 33 Produkten:
  - Lichtfarben im Variantenmodus: DCT, UCP, UCT (6 auf 2 Karten), ISL-264/-486 (6 auf 2), ISL-360 (9 auf 3),
    DFM-400 (6 auf 2), DFM-600 und DFM-750 (4 auf 2), DPM (8 auf 4), DPT (6 auf 5).
  - Lichtfarben im Familienmodus: CSL (4 Titel auf „3 x 2 m“ und „3 x 3 m“), OLG (20 m dreifach auf einmal),
    CTL (8 auf 4).
  - BSL (4 auf 2).
- Ohne Leiste: hp-dgm-002, hp-dgm-048. Alle übrigen 81 Produkte unverändert, auch die Lichtpunkte.
- Kontaktbögen vorher (live bis 02:33) gegen nachher (live ab 02:34), je Prüfprodukt DE und EN:
  `docs/data/teilp-serienleiste-desktop.jpg`, `docs/data/teilp-serienleiste-mobil.jpg`.

**Zur Kenntnis (Frage 3):** Nach der Regel „eine Karte je Maßwert“ teilen sich auch Modelle eine Karte, die sich nicht
nur in der Lichtfarbe unterscheiden:
- BSL: 1er- und 2er-Set gleicher Länge. Bei gleicher Lichtfarbe entscheidet die Reihenfolge der Kollektion. Von
  hp-bsl-50-1p führt 10 m deshalb zu hp-bsl-100-2p.
- CTL: hp-ctl-210-eu-1 und hp-ctl-400-eu-1 (mit Ring) teilen sich 1,5 m bzw. 2,5 m mit hp-ctl-180 und hp-ctl-300-eu.

**Nebenbefunde ohne Änderung:** Keine Lichtpunkte an der Karte bei DFM-400 Warmweiß 6 m, an allen DPT-Karten, an
hp-ola-s14-50-eu und an hp-wbf-210, weil dort `led_anzahl` fehlt. Das war vorher genauso.

**Theme Check** vor jedem Commit: 1 Fehler (heipard-wordmark, ImgWidthAndHeight) und 14 Warnungen wie bisher, keine in
den geänderten Dateien. Der erste Entwurf überschritt die Liquid-Komplexität (121 statt 120). Ich habe zwei Abfragen
zusammengelegt, und der Eintrag (`heipard-fb-serienleiter-eintrag.liquid`) liest das Flag „gesamt“ jetzt auch als
Text. Danach war der Stand wieder wie vorher.

**Rückweg:** `git revert 1048214` und pushen (nimmt Leiste, Eintrag, Sprachschlüssel und Doku zurück).

## 6 Blockbilder geleert

Liste: `docs/data/teilp-blockbilder.csv` (Commit `e19de2b`, vor dem Schreiben), 485 Zeilen. Je Block, Produkt und
Variante stehen dort Slot, Bild-ID und Datei am Block, Rolle am Produkt, Datei nach dem Leeren, gleich ja/nein,
Entscheidung und Grund.

**Bedingung**, gerechnet nach der Logik der Sektion:
- B1 ist der erste Fullwidth-Block mit Bild, Video oder Titel.
- B2 ist der erste Media-Text ohne Sticky. Long-Tail ohne `feature_b2` zeigt keinen B2.
- R1 ist jeder Textblock.
- Jedes Produkt und jede Variante, dessen Set den Block enthält, muss nach dem Leeren dieselbe Datei bekommen. Ich habe
  das streng gerechnet, auch dort, wo das Block-Limit den Block gar nicht zeigt.
- Ein B1 ohne Titel und Video hätte beim Leeren den B1-Platz verloren. Das kam nicht vor.

**Ergebnis:** 158 Blöcke mit Bild in Sets aktiver Produkte:
- **Paket 1:** 126 Blöcke, alle B1, B2 und R1 der Familien.
- **Paket 2:** npt-b2, olas14-b2, vit-b2. Die Asset-Instanz hat um 01:55 `feature_b2` auf OLAS14_B2_04, VIT_B2_08 und
  NPT_B2_01 gesetzt. Mein Abgleich um 02:37 hat das bestätigt.
- **Bleiben:** 29 Blöcke.
  - Clip: isl-b1, olg-b1, dpm-b1, dct-sticky.
  - Kein Feld: 10 Hotspots, 7 Schieber, 3 Steuerungen, ctl-farbwechsel, npt-sticky, olas14-sticky, vit-sticky,
    npt-b2-zusatz.
  - Dazu laut Auftrag ol-g40-schieber und ols-s11-b1, die in keinem aktiven Set stehen.

**Vor dem Schreiben:**
- An den 129 Blöcken gibt es keine übersetzten Bildfelder (EN, ES, FR, IT geprüft). Das Leeren gilt also in allen
  Sprachen.
- Abgleich um 02:37: Die Bildfelder aller 116 Produkte und Varianten waren unverändert. An den Blöcken hatte sich seit
  dem Abruf nur der Text von uct-r1 geändert.

**Geschrieben** (`metaobjectUpdate`, Bild leer, vor jedem Teil `get-shop-info` = HeiPard):
- Paket 1 in 7 Teilen (6 × 20, 1 × 6) von 02:37 bis 02:40, 0 userErrors. Nach Teil 1 habe ich die 16 betroffenen Seiten
  sofort geprüft: 16 von 16 gleich.
- Paket 2 um 02:40, 0 userErrors.
- Zurückgelesen: genau 129 Blöcke seit 02:36 geändert, alle mit leerem Bildfeld.

**Storefront**, je Seite jedes Bild der Feature-Sektion mit Zeilenart, Überschrift, Datei aus `src` ohne Parameter und
Alt. Geprüft wurden 113 Seiten: 95 Produkte und 18 Variantenseiten mit eigenem Feld (DPT-M, ISL kalt/bunt, SCWL-M).
- Vorher (02:24 bis 02:31): DE Desktop und DE mobil je 113 Seiten, EN Desktop und mobil an 10 Produkten. Darunter
  sind die sechs Seiten, um die die Asset-Instanz gebeten hat (OLAS14 ×3, VIT ×2, NPT).
- Nachher (02:41 bis 02:45): DE Desktop 113 von 113 gleich, DE mobil 113 von 113 gleich, EN 20 von 20 gleich. 0
  Abweichungen, kein Liquid-Fehler. Kein Block musste zurückgeschrieben werden.
- Zweiter Durchgang gegen zwischengespeicherte Seiten (02:45 bis 02:48): DE Desktop 113 von 113, EN mobil 10 von 10
  gleich.
- Kontaktbogen: `docs/data/teilp-blockbilder.jpg`. Acht Seiten, oberer Teil der Sektion, Desktop und mobil, vorher
  gegen nachher. Leere Bildflächen in der mobilen Aufnahme sind noch nicht nachgeladene Bilder (Lazy Loading). Sie
  sind vorher wie nachher gleich, die Dateinamen kommen aus `src`.

**Neue Lage festgehalten:**
- `CLAUDE.md`, neuer Abschnitt „Bilder der Feature-Sektion“.
- `docs/heipard-feature-baukasten.md` unter „Bilder und Video“.
- Die Asset-Instanz hat die Liste der 29 Blöcke mit Bild bekommen (02:49) und nimmt sie in ihre `CLAUDE.md` auf.

**Rückweg:** Bild-IDs aus der Spalte `bild_id_am_block` per `metaobjectUpdate` zurückschreiben. Die fertigen Mutationen
je Teil liegen bereit (`bb_pakete/*_rueckweg.graphql` im Arbeitsordner).

## 7 Werte aus Auftrag 36

Meldung der Asset-Instanz um 02:05:35: 21 Felder in vorher leere Felder gesetzt:
- UCP und UCT 3 x 3 m: LED-Zahl 300 und Höhe 3 m.
- HP-RPM-400: 400 LEDs.
- HP-TPM-300: 300 LEDs, 8 Modi, 4 Dimmstufen, Innen & Außen.
- hp-olg-600: Einsatzbereich.
- hp-csl-200-c: 200 LEDs.
- hp-npt-210: connectable.
- CL-1 und CL-2: 100 LEDs.
- VAM: 400 LEDs.

IP68 an hp-u20-200 hat Shopify abgelehnt, siehe Frage 1.

- **Texte gelesen:** Blöcke, Fragen und Beschreibungen der zehn Produkte. Durch die neuen Werte ist **nichts falsch**
  geworden, ich habe nichts geschrieben.
- **Nur genauer möglich**, nicht geschrieben (Frage 4):
  - rpm-b2 und rpm-frage-1 („Die 20-m-Kette hat 200 LEDs.“): Die 40-m-Kette hat jetzt 400 LEDs. Leuchtmodi und
    Schutzart der 40-m-Kette fehlen weiter (Tyler G50, G51). rpm-b1, rpm-r1, rpm-frage-2 und -3 bleiben deshalb ohnehin
    bei „20-m-Kette“.
  - tpm-b1 und tpm-frage-2 („In der Variante mit 400 LEDs …“): 8 Leuchtmodi und 4 Dimmstufen gelten jetzt für beide
    Varianten.
- **Jetzt belegt**, Text stimmt schon: olg-frage-3 an hp-olg-600 (innen und außen), npt-frage-4 (koppelbar), die
  200 LEDs in der Beschreibung von hp-csl-200-c.
- **Storefront** (02:25 bis 02:28, 22 Seiten mit allen Varianten von UCP, UCT, RPM, TPM, DE und EN, 0 Ladefehler):
  - Technik-Tabelle und Icon-Grid zeigen die neuen Werte, auch beim Variantenwechsel. 3 x 3 m: 300 Lichtpunkte und
    Höhe 3 m. RPM 40 m: 400. TPM 300: 8 Modi, 4 Stufen, Innen & Außen, EN „Indoor & Outdoor“.
  - NPT hat kein Icon-Grid im Set, die Technik-Tabelle zeigt nur `koppelbar_bis`. `connectable` ist an der Seite
    nicht sichtbar.
- Ergebnis an die Asset-Instanz gegen 02:35.

## 8 Liste für Daniel

`docs/data/teilp-liste-daniel-es-fr-it.md`:
- 14 Fragen (19 Felder DE geändert).
- Beschreibung und SEO-Beschreibung von hp-u20-200.
- uct-r1.
- Neuer Sprachschlüssel `size`.

## Commits

| Commit | Was | Theme Check |
|---|---|---|
| `cfec62a` | Liste `teilp-fragen.csv` | 1 Fehler, 14 Warnungen wie bisher |
| `8c02336` | Liste `teilp-texte.csv` | wie bisher |
| `e19de2b` | Listen `teilp-serienleiste.csv`, `teilp-blockbilder.csv` | wie bisher |
| `1048214` | Serienleiste (live) | wie bisher, keine Befunde in den geänderten Dateien |
| (dieser) | Bericht, Liste für Daniel, Kontaktbögen, `CLAUDE.md`, Doku Bilder | wie bisher |

## Rückweg im Überblick

- 2: `de_vorher` in `teilp-fragen.csv` zurückschreiben, EN `translationsRemove` (Translate & Adapt füllt danach
  maschinell).
- 3 und 4: `de_vorher`/`en_vorher` in `teilp-texte.csv`. Bei u20 Beschreibung und SEO zusammen schicken.
- 5: `git revert 1048214`.
- 6: Bild-IDs aus `teilp-blockbilder.csv` zurückschreiben.

## Offen bei dir

1. **hp-u20-200 und IP68:** Die Asset-Instanz hat IP68 in der Shenzhen-PSD belegt (`管子灯PSD/5.psd`, 10.psb, 11.psb).
   Ich habe nach deinem Auftrag IP68 überall entfernt. Soll es so bleiben? Oder nehme ich IP68 in die Definition
   `ip_schutzart` auf (dazu die Ziffernerklärung im Nachweise-Block), die Asset-Instanz setzt den Wert, und Satz und
   SEO-Beschreibung kommen aus der Liste zurück?
2. **vam-frage-1 und cl-frage-1:** Die Gesamtlänge stammt nicht aus Teil L oder M, deshalb bleiben beide deutsch. Soll
   die Asset-Instanz die Längen gegen Tafeln prüfen, oder sollen sie in Tylers Mail (VAM 40 m, CL 10 m)? Der Teil-M-Bericht
   nennt die 10 m bei CL-2 die belegte Schnurlänge. Wenn dir das reicht, schreibe ich cl-frage-1 nach deinem Wortlaut.
3. **Serienleiste:** Auch BSL (1er/2er-Set) und CTL (mit/ohne Ring) teilen sich jetzt die Karte ihres Maßes, und bei
   gleicher Lichtfarbe entscheidet die Reihenfolge der Kollektion. Passt das? Wenn nicht, fasse ich nur Stufen
   zusammen, die sich allein in der Lichtfarbe unterscheiden. Dann stehen bei BSL und CTL wieder doppelte Längen.
4. **RPM und TPM:** Soll ich rpm-b2/rpm-frage-1 („20 m mit 200 LEDs und 40 m mit 400 LEDs“) und tpm-b1/tpm-frage-2
   (ohne „In der Variante mit 400 LEDs“) genauer fassen?
5. **Vorschau-Themes:** #199950827853 (Teil P) und #199733903693 (Teil H, nicht mehr benutzt) können gelöscht werden.

Nebenbefund ohne Frage: Die Beschreibung von hp-u20-200 nennt „ein Netzteil“. Im Lieferumfang steht keins, belegt ist nur
`stromquelle` Netz (wie bei olh-g40-frage-2). Der Lichtfarben-Filter wartet weiter auf deinen Bescheid.
