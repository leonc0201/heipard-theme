# HeiPard Theme: Bericht Teil O

**Stand:** 25.11.2026, deutsche Zeit. Auftrag: `heipard-theme-auftrag-teil-o.md`. Vor jedem Schreibzugriff
`get-shop-info` = HeiPard. Nicht angefasst: Preise, Status, Bestand, Handles, Showroom-Logik, Rechtstexte, Produktmedien,
`galerie_medien`, Optionswerte, Files, Bildfelder `feature_*`. Nichts an Shenzhen oder Tyler.

## Kurzfassung

- **2 Deutsche Texte:**
  - Die zehn Stellen sind nach der Längenregel bzw. ohne IP68 neu gefasst und übersetzt. Neun Blöcke und die Antwort von
    olh-g40-frage-1. Wo ein Wert fehlt, nennt der Text Birnen statt Meter.
  - dpm-frage-1 bleibt (30 und 60 m sind beleuchtet).
  - Geprüft an 20 Produkten, DE und EN mobil.
- **3 Fragen EN:** 152 Fragen (304 Felder) übersetzt, zurückgelesen und an allen 116 EN-Seiten geprüft. Deutsch steht nur
  noch in den 16 gemeldeten Fragen: Gesamtlängen, Unbelegtes, „Gartenstecker“ an den Geschenkboxen. Für sie stehen
  Vorschläge im Bericht.
- **4 Serienleiste:** live seit 16:10.
  - Die Überschrift richtet sich nach dem Maß der Stufen: 80× Länge, 5× Höhe (WBF, WWF, RSP, PEC), 5× Größe (CSL, DCT).
  - Bei gleichen Werten entfällt die Leiste (NPT-210, CTL-400, CL-1, CL-2).
  - Geprüft in der Vorschau und live, 0 Abweichungen.
- **6 Blockbilder:** nichts geändert.
  - 356 Fundstellen. In 3 Fällen (olas14-b2, vit-b2, npt-b2) verdeckt das Bild am Block eine andere Feld-Datei. Die
    steht aber weiter unten auf der Seite, es fehlt kein Bild wie bei WBF.
  - Das eigentliche Risiko sind 129 Blöcke, deren Bild heute gleich dem Feld ist.
- **5 DPTM_R1:** DPTM_R1_02 an der Storefront bestätigt, 32 Zustände ohne Fehler.
- **7 Filter:** wartet auf deinen Bescheid.
- **Offen bei dir:** 8 Fragen am Ende.

## Zeitleiste

| Zeit | Was |
|---|---|
| 15:22 | `bd57891` Liste `teilo-texte.csv` (vor dem Schreiben) |
| 15:23 | Abschnitt 2: zehn deutsche Felder geschrieben |
| 15:24 | Abschnitt 2: EN geschrieben, zurückgelesen (DE und EN gleich der Liste, nichts veraltet) |
| 15:26 bis 15:31 | Abschnitt 2: Storefront, 20 Produkte DE und EN mobil, Kontaktbogen |
| 15:30 bis 15:42 | Abschnitt 3: Faktenprüfung der 168 Fragen (Hilfsagent, nur gelesen) |
| 15:38 | `a783751` Serienleiste nach Maß auf Branch `teilo/serie-mass`, ins Vorschau-Theme #199733903693 |
| 15:42 | `099158f` Liste `teilo-en-fragen.csv` (vor dem Schreiben) |
| 15:43 | Asset-Instanz setzt DPTM_R1_02 an HP-DPT-200M/-400M (Lauf C7) |
| 15:44 bis 15:51 | Abschnitt 3: 304 EN-Felder geschrieben (8 Pakete), zurückgelesen |
| 15:44 bis 15:55 | Abschnitt 6: Bestandsaufnahme Blockbilder (Hilfsagent, nur gelesen) |
| 15:52 bis 15:55 | Abschnitt 5: hp-dpt-300 geprüft (32 Zustände), Bescheid an die Asset-Instanz |
| 15:56 bis 15:58 | Abschnitt 3: Storefront, alle 116 EN-Seiten, Fragen-Sektion |
| 15:59 | `ab4297e` Serienleiste: Fläche ergibt Größe, ins Vorschau-Theme |
| 16:00 bis 16:08 | Abschnitt 4: Vorschau gegen live (116 Produkte), Prüfauswahl DE/EN, Desktop/mobil, Kontaktbogen |
| 16:02 | Abschnitt 6: Stichprobe an der Storefront (OLAS14, VIT, NPT) |
| 16:10:00 | Abschnitt 4: `main` vorgespult (`1d0dc03`, `970f2ed`), live seit spätestens 16:10:37 |
| 16:11 bis 16:15 | Abschnitt 4: Gegenprobe live, 116 Produkte und Prüfauswahl, Kontaktbogen |

## 2 Deutsche Texte korrigiert, dann übersetzt

Liste: `docs/data/teilo-texte.csv` (Commit `bd57891`, vor dem Schreiben), mit DE vorher, DE nachher, EN vorher, EN nachher
und Quelle der Zahl. Werte frisch aus den Metafeldern gelesen (15:20).

| Stelle | an | DE vorher | DE nachher | Quelle |
|---|---|---|---|---|
| ol-b2 Text | hp-ol-15, -25, -75, -100 | … Es gibt sie mit 10, 15, 45 und 60 m. | … Es gibt sie mit 15, 25, 75 und 100 Birnen. | led_anzahl; beleuchtete Länge nur an -25 (12 m), Regel 2 |
| olh-g40-b2 Text | hp-olh-g40-15 bis -50 | … von 10 m mit 15 Birnen bis 30 m mit 50 Birnen. | … mit 15 bis 50 Birnen. | led_anzahl; beleuchtet an -15 und -25 leer, Regel 2 |
| olh-g40-frage-1 Antwort | hp-olh-g40-15 bis -50 | 10 m mit 15 LEDs, 13 m mit 20 LEDs, … 30 m mit 50 LEDs. | Fünf Längen, mit 15, 20, 25, 35 oder 50 Birnen. | wie olh-g40-b2; „LEDs“ wird „Birnen“ wie im Titel |
| olas14-sticky Text, Zeile 2 | hp-ola-s14-15/-30/-50-eu | Koppelbar \| Bei der 20-m-Kette verbindest du bis zu vier Ketten. | Koppelbar \| Bei der 16,8-m-Kette verbindest du bis zu vier Ketten. | beleuchtete_laenge_m 16,8 und koppelbar_bis 4 an hp-ola-s14-30-eu |
| dgm-w1-r1 Text | hp-dgm-002 | … Je nach Produkt leuchten 48 oder 70 LEDs. | … Dafür sorgen 70 LEDs. | led_anzahl 70 |
| dgm-w1-048-r1 Text | hp-dgm-048 | … Je nach Produkt leuchten 48 oder 70 LEDs. | … Dafür sorgen 48 LEDs. | led_anzahl 48 |
| ctl-m-b1 Text | hp-ctl-180m, hp-ctl-240m | … 180 bis 400 LEDs … | … 180 oder 240 LEDs … | led_anzahl 180 und 240 |
| ucp-r1 Text | hp-ucp-200 | … Der Vorhang misst 3 x 2 m mit 200 LEDs. | … Den Vorhang gibt es in 3 x 2 m und 3 x 3 m. | Optionswerte der sechs Varianten; LED-Zahl entfällt (Befund unten) |
| u20-b2 Text | hp-u20-200 | … Nach IP68 ist der Schlauch gegen dauerhaftes Untertauchen geschützt. | … Deshalb sitzen die LEDs in einem festen Schlauch. | ip_schutzart leer, Regel 5; „fester Schlauch“ aus Kicker und Überschrift |
| sblb-r1 Text | hp-sblb-60l/-100l | … Zuleitung … geben dir Spielraum … | … Zuleitung … gibt dir Spielraum … | Regel 6; EN hatte schon „gives“ |

- **dpm-frage-1 bleibt:** „30 m mit 300 LEDs und 60 m mit 600 LEDs.“ 30 und 60 m sind beleuchtete Längen (HP-DPM-300/-600,
  gesamt 33/63 m). Die Frage fällt nur unter die Längenregel, nicht unter das Problem der Gesamtlängen. Übersetzt in
  Abschnitt 3 so, wie sie ist.
- **EN:** Bei ol-b2, olh-g40-b2, olas14-sticky, dgm-w1-r1, u20-b2 und olh-g40-frage-1 neu, bei dgm-w1-048-r1, ctl-m-b1,
  ucp-r1 und sblb-r1 erneuert (die alte EN-Fassung war mit dem neuen DE veraltet). Glossar aus Teil L. Wortlaut in der
  Liste, z. B. ol-b2 „A small balcony needs shorter string lights than a large terrace. They come with 15, 25, 75 and
  100 bulbs.“
- **Geschrieben** 15:23 (DE, `metaobjectUpdate`, 10 Felder) und 15:24 (EN, `translationsRegister`), keine userErrors.
  Zurückgelesen: DE und EN gleich der Liste, keine EN-Übersetzung veraltet.
- **Storefront** (15:26 bis 15:31): alle 20 Produkte mit diesen Sets, DE und EN, mobil. An allen 40 Seiten steht der
  neue Text, der alte Wortlaut dieser Blöcke nirgends mehr. Kontaktbogen: `docs/data/teilo-texte-mobil.jpg` (je Stelle
  ein Produkt, links DE, rechts EN).
- **Liste für Daniel:** `docs/data/teilo-liste-daniel-es-fr-it.md`.
- **Rückweg:** Spalte „de_vorher“ (und „en_vorher“, wo vorhanden) in `teilo-texte.csv` zurückschreiben.

### Befunde aus Abschnitt 2 (nicht geändert)

- **hp-u20-200, Produktbeschreibung:** Dort steht der IP68-Satz weiter, DE „Nach IP68 ist der Schlauch gegen dauerhaftes
  Untertauchen geschützt …“ und EN „With an IP68 rating, the rope light is protected against continuous immersion …“
  (auch in den strukturierten Daten der Seite). Der Auftrag nennt nur den Block. Frage unter „Offen bei dir“.
- **uct-r1** (hp-uct-200-eu) hat denselben Satz wie früher ucp-r1: „Der Vorhang misst 3 x 2 m mit 200 LEDs.“ (EN vorhanden).
  hp-uct-200-eu gibt es auch in 3 x 3 m. Nicht in deiner Liste, deshalb nicht geändert. Frage unter „Offen bei dir“.
- **hp-ucp-200, Varianten 3 x 3 m:** HP-UCP-300, -300W und -300M haben kein eigenes `led_anzahl` und kein eigenes
  `hoehe_m`. Damit gelten für sie die Produktwerte 200 LEDs und 2 m. Die Produktbeschreibung nennt für 3 x 3 m 300 LEDs.
  Das ist eine Datenlücke, die Werte brauchen eine Quelle (Tafel), deshalb nicht gesetzt.
- **dgm-w1-frage-1** („Je nach Produkt 48 oder 70 LEDs.“) hängt an hp-dgm-002 und hp-dgm-048. Die Zahlen stimmen für
  genau diese zwei Produkte. Wegen „Gartenstecker“ ist sie trotzdem in Abschnitt 3 gemeldet.

## 3 Fragen EN

Liste: `docs/data/teilo-en-fragen.csv` (Commit `099158f`, vor dem Schreiben). Spalten: handle, id, feld,
verwendet_an, de, en, hinweis.

- **Umfang:** 168 verwendete Fragen ohne EN (die 169. ist olh-g40-frage-1, korrigiert und übersetzt in Abschnitt 2),
  336 Felder. Die 3 unverwendeten und die 18 vorhandenen EN-Fragen sind nicht angefasst.
- **Entwurf:** von mir nach dem Glossar aus Teil L (string lights, power adapter, power cord, plug-in, icicle,
  multicolor, cool white), dazu die Schreibweisen aus den Blöcken von Teil N („With an IP44 rating, they are protected
  against splashing water“, „lighting modes“, „light curtain“, „net light“). Gleiche deutsche Sätze haben gleiches EN,
  das Pronomen passt zum Produkt (Lichterkette „they“, Vorhang, Netz, Baum, Laterne „it“). Danach ganz durchgelesen, fünf
  Stellen geglättet (z. B. „Batteries.“, „net light“ statt „net“).
- **Maschinell geprüft:** keine Gedankenstriche, keine Superlative, keine britische Schreibweise, in jeder Zeile dieselben
  Zahlen wie im DE (Dezimalpunkt, 1,008 / 1,000), kein deutsches Wort. 0 Befunde.
- **Faktenprüfung** (Hilfsagent, nur gelesen, 15:30 bis 15:42): jede Zahl und Angabe jeder Frage gegen die Metafelder,
  Titel und Beschreibungen der Produkte, an denen sie hängt. Ergebnis je Frage: `docs/data/teilo-fragen-pruefung.csv`.
  Die entscheidenden Werte habe ich in den Rohdaten selbst nachgesehen.
- **Geschrieben** 15:44 bis 15:51 (Hilfsagent, 8 Pakete zu 19 Fragen, `translationsRegister`, vor jedem Paket
  `get-shop-info` = HeiPard): 304 Felder an 152 Fragen, 0 userErrors. Digest = SHA-256 des deutschen Werts (an
  olh-g40-frage-1 gegen den Shop geprüft). Zurückgelesen: 304 gleich, 0 abweichend, 0 veraltet.
- **Storefront** (alle 116 EN-Produktseiten, Fragen-Sektion, ca. 15:56 bis 15:58): 112 Seiten mit Fragen, 384
  Frage-Antwort-Paare. Deutsch steht nur noch in den 16 gemeldeten Fragen (67 Stellen), sonst nirgends. Alle neuen
  Texte stehen wörtlich wie in der Liste. Keine Gedankenstriche. 4 Seiten haben keine Fragen (pvc-150g, hp-bsm-002,
  hp-bsx-002, hp-fxf-001).
- **Rückweg:** `translationsRemove` (locale en) mit den Schlüsseln `frage` und `antwort` der 152 Fragen mit EN in der
  Liste. Achtung, Translate & Adapt füllt fehlende EN danach wieder maschinell.

### Fragen, die ich nicht übersetzt habe (16)

Das Deutsche ist falsch oder nicht belegt. Frage und Antwort bleiben deutsch, bis das Deutsche korrigiert ist.

| Frage | Antwort (DE) | Befund | Vorschlag DE (nicht geschrieben) |
|---|---|---|---|
| ol-frage-1 | 10 m mit 15 LEDs, 15 m mit 25 LEDs, 45 m mit 75 LEDs und 60 m mit 100 LEDs. | Gesamtlängen; beleuchtet nur hp-ol-25 (12 m) | wie ol-b2: „Vier Längen, mit 15, 25, 75 oder 100 Birnen.“ |
| ol-s11-frage-1 | 10 m mit 15 LEDs, 15 m mit 25 LEDs, 20 m mit 30 LEDs und 30 m mit 50 LEDs. | 10 und 20 m gesamt (beleuchtet 7 und 16,8 m), 15 m nicht belegt, 30 m nirgends belegt | „Vier Längen, mit 15, 25, 30 oder 50 Birnen.“ |
| ols-g40-frage-1 | 10 m mit 16 LEDs, 15 m mit 25 LEDs und 20 m mit 35 LEDs. | gesamt; beleuchtet nur -16 (7,5 m) | „Drei Längen, mit 16, 25 oder 35 Birnen.“ |
| ols-s11-frage-1 | 10 m mit 16 LEDs und 15 m mit 25 LEDs. | gesamt; beleuchtet 7,5 und 12,5 m | „7,5 m mit 16 Birnen und 12,5 m mit 25 Birnen.“ |
| sblb-frage-2 | 11 m mit 60 LEDs und 17 m mit 100 LEDs. | gesamt; beleuchtet 9 und 15 m | „9 m mit 60 LEDs und 15 m mit 100 LEDs.“ |
| scwl-frage-1 | 10 m mit 100 LEDs und 15 m mit 150 LEDs. | beleuchtete Länge an beiden leer, nur gesamt | „Mit 100 oder 150 LEDs.“ |
| vam-frage-1 | Sie ist 40 m lang. | beleuchtet leer, nur gesamt 40 | offen, Wert fehlt (Frage ganz neu fassen oder entfernen) |
| cl-frage-1 | Sie ist 10 m lang. | hp-cl-1-eu beleuchtet 10 m, hp-cl-2-eu beleuchtet leer | Wert für hp-cl-2-eu fehlt |
| blt-frage-2 | Warmweiß, bei der 5-m-Kette mit 2700 Kelvin. | „5-m-Kette“ ist nur gesamtlaenge_m 5 (wie die „20-m-Kette“ bei olas14) | „Warmweiß, bei der Kette mit 50 LEDs mit 2700 Kelvin.“ |
| ucp-frage-1 | Er misst 3 x 2 m mit 200 LEDs. | es gibt auch 3 x 3 m | wie ucp-r1: „Es gibt ihn in 3 x 2 m und 3 x 3 m.“ |
| uct-frage-1 | Er misst 3 x 2 m mit 200 LEDs. | es gibt auch 3 x 3 m | „Es gibt ihn in 3 x 2 m und 3 x 3 m.“ |
| dgm-w1-frage-1 | Je nach Produkt 48 oder 70 LEDs. | Frage nennt „Gartenstecker“, hängt auch an hp-dgm-048 (Geschenkboxen, innen) | Frage „Wie viele LEDs hat die Deko?“ |
| dgm-w1-frage-2 | Ja: 6 Stunden an, dann 18 Stunden aus. | „Gartenstecker“; „18 Stunden aus“ nicht belegt (nur timer_dauer_h 6) | „Ja, mit einem Timer von 6 Stunden.“ |
| dgm-w1-frage-3 | Mit Batterien. | hängt nur an hp-dgm-048 (Geschenkboxen), Frage nennt „Gartenstecker“ | Frage „Wie werden die Geschenkboxen mit Strom versorgt?“ |
| ol-g40-frage-2 | Ja, bis zu vier Ketten lassen sich hintereinander schalten und gemeinsam über eine Fernbedienung steuern. | vier Ketten belegt (koppelbar_bis 4), „gemeinsam über eine Fernbedienung“ nirgends | „Ja, bis zu vier Ketten lassen sich hintereinander schalten.“ |
| olh-g40-frage-2 | Über ein Netzteil. | an keinem OLH-G40-Produkt belegt (nur stromquelle Netz) | offen, Quelle fehlt |

**Übersetzt, mit Hinweis** (Spalte `hinweis`):
- rpm-frage-1 bis -3 sagen „Die 20-m-Kette …“. Das stimmt für die 20-m-Variante. Die 40-m-Variante hat keine LED-Zahl,
  Leuchtmodi oder Schutzart.
- tpm-frage-2 gilt für die Variante mit 400 LEDs. Die Variante mit 300 LEDs hat gar keine Metafelder.
- olg-frage-3 („für innen und außen, IP44“) ist an 7 von 8 OLG-Produkten belegt. hp-olg-600 fehlt nur `einsatzbereich`.

**Weitere Lücken in den Shopdaten** (Fragen stimmen trotzdem):
- hp-rgb-300a hat keine beleuchtete Länge, nur gesamt 33 m. Die Frage nennt 30 m wie der Titel.
- hp-csl-200-c fehlt `led_anzahl`.
- hp-ctl-210-eu-1 und hp-ctl-400-eu-1: Die Multicolor-Variante hat keine Dimmstufen, die Beschreibung sagt vier Stufen.
- hp-npt-210 fehlt `connectable`.
- Bei einigen Netzteil-Antworten steht das Netzteil nur in den Beschreibungen der übrigen Produkte derselben Frage.

**Nebenbefund:** Die schon vorhandene EN-Frage dnm-frage-1 sagt „light net“, die neuen Texte und die Blöcke sagen „net
light“. Laut Auftrag nicht angefasst.

## 4 Serienleiste: Überschrift nach Maß

**Vorher:** Überall stand der feste Text „Dieselbe Lichterkette in anderer Länge“ (EN „The same string lights in
another length“), auch über Lichterbäumen, Vorhängen und dem Lichternetz.

**Regel** (`snippets/heipard-fb-serienleiter.liquid`). Das Maß kommt aus der Quelle, aus der die Leiste ihre Werte holt,
also aus den Metafeldern jeder Stufe:

| Wert der Stufen | Maß | DE | EN |
|---|---|---|---|
| `beleuchtete_laenge_m` oder `gesamtlaenge_m` | Länge | Dieselbe Lichterkette in anderer Länge | The same string lights in a different length |
| `hoehe_m` ohne `breite_m` | Höhe | Dasselbe Modell in anderer Höhe | The same model in a different height |
| `hoehe_m` mit `breite_m` (Fläche, Vorhang) oder Länge und Höhe gemischt | Größe | Dasselbe Modell in anderer Größe | The same model in a different size |

- Kein Produkttyp und kein Titel fließt ein. Eine eigene Überschrift im Block ginge weiter vor; der einzige
  Serienleiter-Block `auto-serienleiter` hat keine.
- **Familienmodus liest jetzt auch die Höhe.** Der Variantenmodus las schon `hoehe_m`, der Familienmodus nur Längen.
  Deshalb zeigte WBF (zwei Produkte, nur `hoehe_m` 1,8 und 2,1 m) die langen Produkttitel, und ein Maß war nicht
  bestimmbar.
  - Jetzt nimmt der Familienmodus die Höhe, wenn weder Produkt noch Varianten eine Länge haben. Produkte mit Längen
    verhalten sich wie bisher.
  - Bei Flächen (CSL-Vorhänge) bleibt der Produkttitel die Beschriftung. Sonst stünde „2 m, 2 m, 3 m, 3 m“ da, und
    Kaltweiß und Warmweiß wären nicht zu unterscheiden. Die Höhe sortiert dort nur.
- **Gleiche Werte:** Haben alle Stufen einen Wert und ist er überall gleich, entfällt die Leiste. Im Theme-Editor steht
  dann ein Hinweis.
- **Sprachtexte:** neu `title_hoehe` und `title_groesse` in DE und EN. EN `title` heißt jetzt „The same string lights in a
  different length“ (vorher „another length“). ES, FR und IT: Liste für Daniel.

**Produkte, bei denen die Leiste entfällt** (alle Stufen gleich; ermittelt im Vorschau-Theme, bevor es live ging):

| Produkt | Stufen vorher | Wert |
|---|---|---|
| hp-npt-210 | Warmweiß, Weiß, Multicolor (Varianten) | `hoehe_m` 2,0 an allen drei |
| hp-ctl-400-eu-1 | Warmweiß, Multicolor (Varianten) | beleuchtet 2,5 m an beiden |
| hp-cl-1-eu | „10 m“, „10 m gesamt“ (Familie CL) | 10 m (cl-1 beleuchtet, cl-2 nur gesamt) |
| hp-cl-2-eu | wie hp-cl-1-eu | 10 m |

Die Lichtfarbe wählt man dort im Variantenwähler. Bei CL unterscheiden sich die zwei Modelle nicht in der Länge.

**Ergebnis über alle 116 aktiven Produkte** (Vorschau-Theme gegen live, DE, 15:39 bis 16:05; einige Seiten wegen
Drosselung neu geladen):

| Überschrift | Produkte |
|---|---|
| Länge | 80 |
| Größe | 5: hp-csl-200-c, -200-w, -300-c, -300-w (Familie), hp-dct-200 (Varianten) |
| Höhe | 5: hp-wbf-180, hp-wbf-210 (Familie), hp-wwf-180, hp-rsp-180, pec-150g (Varianten) |
| ohne Maß, Überschrift wie bisher (Länge) | 2: hp-dgm-002, hp-dgm-048 |
| Leiste entfällt (gleiche Werte) | 4, Tabelle oben |
| keine Leiste, wie bisher | 20 |

- **Stufen geändert** nur bei WBF und CSL, sonst in allen 92 Leisten wortgleich:
  - WBF zeigt „1,8 m“ und „2,1 m“ statt der Titel.
  - CSL behält die Titel und steht jetzt nach Höhe sortiert (3 x 2 m vor 3 x 3 m).
- **hp-dgm-002 und hp-dgm-048:** Die Familie DGM hat weder Länge noch Höhe. Ein Maß ist nicht bestimmbar, deshalb bleibt
  die alte Überschrift. Die Leiste stellt dort zwei verschiedene Produkte nebeneinander (Gartenstecker Spirale und
  Geschenkboxen), keine Serie. Frage unter „Offen bei dir“.
- **Geprüft im Vorschau-Theme**, DE und EN, Desktop und mobil, je vorher und nachher, kein Überlauf:
  - hp-wbf-180 und -210, hp-wwf-180 (Höhe),
  - hp-rgb-300a und hp-ol-25 (Länge),
  - hp-csl-200-c und hp-dct-200 (Größe),
  - hp-npt-210, hp-cl-1-eu und hp-ctl-400-eu-1 (entfällt).
- **Kontaktbogen:** `docs/data/teilo-serienleiste-vorschau.jpg`.
- **Commits:** `1d0dc03`, `970f2ed` (Theme Check vor jedem Commit: 1 Fehler, 14 Warnungen wie die Grundlinie). Auf dem
  Branch `teilo/serie-mass` standen sie vor dem Rebase als `a783751` und `ab4297e`.
- **Live:** `main` vorgespult und gepusht um 16:10:00, live seit spätestens 16:10:37.
- **Gegenprobe an der echten Storefront** (16:11 bis 16:15): alle 116 Produkte DE, dazu die Prüfauswahl DE und EN,
  Desktop und mobil. Das Ergebnis gleicht der Vorschau in allen 116 Produkten (Überschrift, Maß, Stufen, ausgeblendet),
  0 Abweichungen, kein Überlauf. Kontaktbogen vorher gegen live nachher: `docs/data/teilo-serienleiste-live.jpg`.
- **Rückweg:** `git revert 970f2ed 1d0dc03` auf `main`.
- **Nebenbefund:** hp-wbf-210 hat kein `led_anzahl`. Die Leiste zeigt bei 2,1 m deshalb keine Lichtpunkte, das war
  vorher auch so.

## 6 Blockbilder: Bestandsaufnahme (nur gelesen)

Nichts geändert. Liste: `docs/data/teilo-blockbilder.csv`. Spalten: Block, Slot, Bild am Block, Produkt oder Variante,
Feld, Datei im Feld, was die Storefront zeigt, Bewertung.

**Gelesen:**
- Daten (Hilfsagent, ca. 15:44 bis 15:55): alle 116 aktiven Produkte, 201 Varianten, 71 Sets und 348 Blöcke.
- Bewertet nach den Regeln aus `sections/heipard-feature.liquid` und `snippets/heipard-feature-dispatch.liquid`:
  - B1: der erste fullwidth-Block mit Bild, Video oder Überschrift.
  - B2: der erste media_text ohne sticky.
  - R1: jeder text-Block.
  - Vorrang bei B1, B2 und R1: Variantenfeld, dann Bild am Block, dann Produktfeld.
  - Szene r2/r3: nur das Produktfeld.
- Eine Zeile je Block mit Bild am Block und je Produkt oder Variante mit feature-Feld, 356 Zeilen an 106 Produkten.

| Bewertung | Zeilen | Blöcke | Bedeutung |
|---|---|---|---|
| gleich | 253 | 129 (46 B1, 38 B2, 45 R1) an 89 Produkten | Bild am Block = Datei im Feld |
| feld_gewinnt | 54 | 9: dpt-b1/-b2/-r1, isl-b1/-b2/-r1, scwl-b1/-b2/-r1 | Variantenfeld geht vor (bunte bzw. kaltweiße Varianten) |
| kein_feld | 43 | 26 (Hotspot, Schieber, Steuerung, Farbwechsel, Sticky, Zusatzzeile) | Block liest kein feature-Feld |
| block_verdeckt_feld | 6 | 3 | Feld gesetzt, anderes Bild, Bild am Block geht vor |

**Die drei verdeckten Fälle** (alle B2, alle Dramaturgie hero):

| Block | Bild am Block (Storefront) | Produkt | Feld | Datei im Feld | Wo die Feld-Datei trotzdem steht |
|---|---|---|---|---|---|
| olas14-b2 | OLAS14_B2_04 | hp-ola-s14-15-eu, -30-eu, -50-eu | feature_b2 | OLAS14_B2_02 | olas14-sticky |
| vit-b2 | VIT_B2_08 | hp-vit-586l-eu-1, hp-vit-864l-eu-1 | feature_b2 | VIT_B2_06 | vit-sticky |
| npt-b2 | NPT_B2_01 | hp-npt-210 | feature_b2 | NPT_B2_08 | npt-b2-zusatz |

- An der Storefront nachgeprüft (hp-ola-s14-30-eu, hp-vit-586l-eu-1, hp-npt-210, ca. 16:02): Der B2-Block zeigt das
  Bild am Block, die Datei aus `feature_b2` steht weiter unten im Sticky-Block bzw. in der Zusatzzeile.
- Anders als bei WBF fehlt also kein Bild. Würde man das Bild am B2-Block leeren, stünde dieselbe Datei zweimal auf der
  Seite. olas14-b2 und vit-b2 wurden am 23.11. um 18:43 geändert, das sieht nach Absicht aus.
- Sauber wäre: `feature_b2` zeigt auf das Bild, das man sieht (OLAS14_B2_04, VIT_B2_08, NPT_B2_01). Das setzt die
  Asset-Instanz, Frage unter „Offen bei dir“.

**Das eigentliche Risiko steckt in „gleich“.** 129 Blöcke an 89 Produkten tragen dieselbe Datei wie das Feld. Heute sieht
man keinen Unterschied. Ändert aber jemand nur das Feld, bleibt das neue Bild unsichtbar, genau wie bei WBF. Die
Asset-Instanz hat sich die Reihenfolge Variantenfeld, Bild am Block, Produktfeld als Regel notiert (Antwort auf meinen
Bescheid zu Abschnitt 5).
Würden die Blockbilder bei „gleich“ geleert, zeigte die Seite dasselbe, und das Feld wäre die einzige Quelle. Das ist eine
Entscheidung, Frage unter „Offen bei dir“.

**Weitere Funde:**
- Clips hängen am Bild am Block: isl-b1, olg-b1, dpm-b1, dct-sticky. Ein Clip spielt nur, solange das Bild am Block
  gezeigt wird. Bei den ISL-Varianten mit eigenem B1 gibt es deshalb keinen Clip (so gewollt seit Teil M). Wer bei diesen
  Blöcken das Bild leert, nimmt auch den Clip weg.
- ol-g40-schieber und ols-s11-b1 tragen ein Bild, stehen aber in keinem Set eines aktiven Produkts.
- Kein wbf-Block trägt noch ein Bild. Keine Szene r2/r3 trägt ein Bild am Block.

## 5 DPTM_R1 nachher

- **Bild:** Die Asset-Instanz meldet: `feature_r1` an HP-DPT-200M und HP-DPT-400M zeigt seit 15:43:22 auf
  DPTM_R1_02.webp (MediaImage 66968749965645, 2048 × 1152).
  - Quelle ist die Fassung `DPTM_R1_01_4.jpg` aus Lauf C7. `_01_3` aus deinem Auftrag hat sie verworfen.
  - Die alte DPTM_R1_01.webp bleibt in Files und steht auf ihrer Löschliste.
  - `feature_r1_alt` ist unverändert.
  - Am Theme und an den Blöcken habe ich nichts geändert.
- **Geprüft** an der echten Storefront, 15:52 bis 15:55, hp-dpt-300, DE und EN, Desktop und mobil:
  - Bunt 20 m und 40 m direkt aufgerufen.
  - Klickfolge Warmweiß 30 m → 20 m → Bunt → 40 m → 20 m → Warmweiß.
  - Zusammen 32 Zustände, **0 Fehler**.
  - Bunt: B1, B2 und R1 zeigen DPTM_B1_01, DPTM_B2_01 und **DPTM_R1_02**. Der R1-Alt ist unverändert, DE „Bunte HeiPard
    LED-Lichterkette auf transparentem Kabel entlang Geländer und Pergola einer Dachterrasse“, EN „Multicolor HeiPard
    LED string light on a clear cable along the railing and pergola of a rooftop terrace“. Kein R2/R3, kein Bild doppelt.
  - Warmweiß: die Familienbilder DPT_B1 bis DPT_R3.
  - Die alte DPTM_R1_01 erscheint nirgends.
- Das Bild am Block dpt-r1 (DPT_R1_01, warmweiß) stört nicht. Das Variantenfeld geht ihm vor, siehe Abschnitt 6.
- **Nebenbefund:** Warmweiß gibt es in 20, 30, 60 und 80 m, nicht in 40 m.
  - Mein erster Lauf klickte bei 40 m Bunt auf Warmweiß. Der Wähler zeigte dann „40 m / Warmweiß“, die Seite blieb aber
    auf den bunten Bildern von 40 m stehen.
  - Das ist das Verhalten bei einer Kombination, die es nicht gibt, kein Fehler der Bilder.
  - Die Prüfung habe ich mit der gültigen Folge wiederholt.
- **Kontaktbogen:** `docs/data/teilo-dptm-r1.jpg`.
- Bescheid an die Asset-Instanz kurz nach 15:55. Sie hat Lauf C7 damit abgeschlossen (`reports/auftrag_35.md`, 2.5).

## 7 Lichtfarben-Filter

Unverändert: wartet auf deinen Bescheid, dass der Filter umgestellt ist.

## Theme Check und Commits

Vor jedem Theme-Commit `shopify theme check`: jedes Mal 1 Fehler (heipard-wordmark, ImgWidthAndHeight) und 14 Warnungen,
wie die Grundlinie, nichts in den geänderten Dateien.

| Commit | Zeit | Was |
|---|---|---|
| `bd57891` | 15:22 | Doku: deutsche Texte vorher und nachher (vor dem Schreiben) |
| `099158f` | 15:42 | Doku: EN-Fragen und Faktenprüfung (vor dem Schreiben), Kontaktbogen Abschnitt 2 |
| `1d0dc03` | 16:09 (Branch 15:37 `a783751`) | Serienleiste: Überschrift nach Maß, gleiche Werte blenden aus, Sprachtexte |
| `970f2ed` | 16:09 (Branch 15:58 `ab4297e`) | Serienleiste: Fläche ergibt Größe, Titel bleibt Beschriftung |
| dieser Bericht | | Bericht, Liste für Daniel, Bestandsaufnahme Blockbilder, Kontaktbögen 4 und 5 |

**Liste für Daniel** (ES, FR, IT): `docs/data/teilo-liste-daniel-es-fr-it.md`. Sie enthält die Abschnitte 2, 3 und 4
(neue Theme-Schlüssel `title_hoehe` und `title_groesse`).

Das Vorschau-Theme #199733903693 („zz-vorschau Teil H Hero (kann weg)“) habe ich für Abschnitt 4 noch einmal benutzt.
Es besteht weiter und kann gelöscht werden.

## Rückweg im Überblick

- **Abschnitt 2:** In `teilo-texte.csv` die Spalte `de_vorher` zurückschreiben. Wo vorhanden, auch `en_vorher`.
- **Abschnitt 3:** `translationsRemove` (locale en) für `frage` und `antwort` der 152 Fragen mit EN in
  `teilo-en-fragen.csv`. Translate & Adapt füllt danach maschinell nach.
- **Abschnitt 4:** `git revert 970f2ed 1d0dc03` auf `main`.
- **Abschnitt 5:** Das Bild setzt die Asset-Instanz, der Rückweg liegt bei ihr (alte DPTM_R1_01 liegt noch in Files).
- **Abschnitt 6:** nichts geändert.

## Offen bei dir

1. **16 nicht übersetzte Fragen (3):** Die deutschen Vorschläge stehen in der Tabelle in Abschnitt 3. Soll ich sie so
   schreiben und danach übersetzen? Bei vam-frage-1, cl-frage-1 (hp-cl-2-eu) und olh-g40-frage-2 fehlt ein Wert bzw. eine
   Quelle, dort brauche ich deine Vorgabe.
2. **hp-u20-200, Produktbeschreibung (2):** Der IP68-Satz steht dort noch, DE und EN. Soll er wie im Block u20-b2
   entfallen?
3. **uct-r1 (2):** „Der Vorhang misst 3 x 2 m mit 200 LEDs.“ hp-uct-200-eu gibt es auch in 3 x 3 m. Soll ich ihn wie
   ucp-r1 fassen („Den Vorhang gibt es in 3 x 2 m und 3 x 3 m.“)?
4. **Datenlücken (2, 3):** Wer ergänzt die fehlenden Werte, und gehören sie in Tylers Mail? Die Mail schicke ich nicht.
   - HP-UCP-300/-300W/-300M ohne `led_anzahl` und `hoehe_m`. Damit gelten 200 LEDs und 2 m auch für 3 x 3 m.
   - RPM-200 40 m ohne LED-Zahl, Leuchtmodi und Schutzart.
   - TPM-400 Variante 300 LEDs ganz ohne Metafelder.
   - hp-olg-600 ohne `einsatzbereich`.
   - hp-csl-200-c ohne `led_anzahl`.
   - CTL-210/-400 Multicolor ohne Dimmstufen.
   - hp-npt-210 ohne `connectable`.
   - hp-wbf-210 ohne `led_anzahl`.
5. **Serienleiste DGM (4):** hp-dgm-002 und hp-dgm-048 stehen als „Serie“ nebeneinander (Spiral-Gartenstecker und
   Geschenkboxen), ohne Länge oder Höhe. Die Überschrift ist dort die alte (Länge). Soll die Leiste entfallen, wenn
   keine Stufe einen Wert hat?
6. **feature_b2 bei OLAS14, VIT, NPT (6):** Das Bild am B2-Block verdeckt hier eine andere Datei im Feld. Die
   Feld-Datei steht aber weiter unten auf der Seite, es fehlt also nichts. Soll die Asset-Instanz `feature_b2` auf das
   sichtbare Bild setzen (OLAS14_B2_04, VIT_B2_08, NPT_B2_01)?
7. **Blockbilder „gleich“ (6):** 129 Blöcke an 89 Produkten tragen dieselbe Datei wie das Feld. Sollen die Blockbilder
   geleert werden, damit das Feld die einzige Quelle ist? Ausnahme wären isl-b1, olg-b1 und dpm-b1: Ihr Clip hängt am
   Bild am Block.
8. **Lichtfarben-Filter (7):** wartet auf deinen Bescheid.
