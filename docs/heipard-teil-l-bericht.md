# HeiPard Theme: Bericht Teil L

Stand 23.11.2026, 21 Uhr. Auftrag `heipard-theme-auftrag-teil-l.md`, schließt an Teil K an (`3e25a0b`).
Alle Schreibzugriffe nach `get-shop-info` auf HeiPard. Nichts ging an Shenzhen oder Tyler.
Nicht angefasst: Preise, Status, Bestand, Handles, Showroom-Logik, Rechtstexte. Produktmedien, `galerie_medien`, Optionswerte
und Files hat die Asset-Instanz gesetzt (Auftrag 32).

## Kurzfassung

- **1.4 Shopdaten** nach der Faktenliste korrigiert (34 Werte), Vorher-Liste vorab gepusht.
- **1.1 Lichtfarben:** neues Listenfeld `heipard.lichtfarben` an 112 Produkten, DE und EN. Das alte Feld bleibt. Den Filter
  stellst du in Search & Discovery um (Klickanleitung unten), danach prüfe ich die Kollektionsfilter.
- **1.2 Produkttypen DE** an 92 Produkten an die Produktart im Titel angeglichen. Keine Kollektion, kein Filter und kein
  Feed nutzt den Produkttyp.
- **1.6** Bento „String Lights“, Hero-Unterzeile, „connectable“, „globes“.
- **1.5 Texte:** 30 der 43 Entwürfe geschrieben (12 ohne Längenfall, 18 nach der Längenliste), DE und EN, Tag `todo-text`
  entfernt. 13 bleiben liegen, weil ihre Längen unsicher sind.
- **2 Hero:** Start- und Endbild sind jetzt das erste und letzte Clipbild, live seit 20:15. Der Schärfesprung am Desktop
  fällt von +1,15 bis +4,87 auf +0,07 bis +0,24. Das LCP bleibt gleich.
- **3 Bilder C3:** hp-csl-200-c, hp-csl-300-c, hp-olg-200w und hp-olg-200m haben eigene Sets ohne warmweiße Szenen.
  ISL, DPT und SCWL zeigen je Lichtfarbe die richtige Galerie.
- **1.3 Länge im Titel = beleuchtete Länge:** 187 Längenwerte und 18 Titel (DE, EN) geschrieben. 44 Werte bleiben als
  [prüfen]. Serienwähler und Kettenplan lesen jetzt zuerst die beleuchtete Länge (`c249933`). Die Regel steht in
  `docs/projektstand.md`, Abschnitt „Titelmuster Produkte“.
- **Beide Zahlen im Text:** 33 Texte nennen jetzt beleuchtete Länge und Gesamtlänge, wo beide belegt sind.
- **Nachgeladen:** 86 Produktseiten DE und EN nach allen Längenänderungen, dazu 180 Aufrufe für Abschnitt 3.
- **Fragen an dich:** am Ende, Abschnitt „Offen bei dir“.

## Zeitleiste (alle Zeiten deutsche Zeit)

| Zeit | Was | Weg |
|---|---|---|
| 19:09 | Vorher-Liste 1.4 gepusht (`af01fcd`) | Git |
| ca. 19:10 bis 19:15 | 1.4 Shopdaten, Blöcke und Fragen DE und EN | `metafieldsSet`, `productUpdate`, `metaobjectUpdate`, `translationsRegister` |
| 19:17 | Definition `heipard.lichtfarben` (`list.single_line_text_field`, ID 698314064205) | `metafieldDefinitionCreate` |
| 19:18 | 112 Werte DE | `metafieldsSet` |
| ca. 19:21 | 112 Werte EN | `translationsRegister` |
| ca. 19:24 | 92 Produkttypen DE, EN neu registriert | `productUpdate`, `translationsRegister` |
| 19:27 | Doku 1.1, 1.2, 1.4 (`f5ae601`) | Git |
| ca. 19:31 | 1.6 Kleinigkeiten | `translationsRegister`, `metafieldsSet` |
| 19:35 bis 19:42 | 1.5: 12 Texte DE und EN, 6 EN-Metas gekürzt, `todo-text` an 10 Produkten entfernt | `productUpdate`, `translationsRegister`, `tagsRemove` |
| 19:43 | Doku 1.5 und 1.6 (`eccf78d`) | Git |
| 19:43:58 | B2-Tausch OLAS14 und VIT, Alt DE, EN 19:44:06 | `metaobjectUpdate`, `translationsRegister` |
| 19:44:32 | hp-ols-s17-16-eu: Erdspieß im Lieferumfang DE und EN, Tag `pruefen-dublette` entfernt | `metafieldsSet`, `tagsRemove` |
| 19:48, 19:54 | Hero-Rahmen (`9717ce5`, `867f4be`), Test auf Vorschau-Theme #199733903693 | Git, `themeFilesUpsert` (nur Vorschau) |
| 20:15 | Hero-Rahmen live | Git-Sync |
| ca. 20:18 | Abschnitt 3: eigene Sets, Felder `feature_b1/b2/r1`, Blocktexte DE und EN | `metaobjectCreate`, `metafieldsSet`, `translationsRegister` |
| ca. 20:20 | 1.3: 182 Längenwerte, danach 5 aufgelöste Widersprüche | `metafieldsSet` |
| 20:26 bis 20:28 | 1.3: 18 Titel und SEO-Titel DE und EN | `productUpdate`, `translationsRegister` |
| 20:31 | Serienwähler und Kettenplan (`c249933`) | Git-Sync |
| 20:33:54 | 1.5: 18 Längentexte DE, `todo-text` an 4 weiteren Produkten entfernt | `productUpdate`, `tagsRemove` |
| 20:37:49 | 18 Längentexte EN | `translationsRegister` |
| 20:42:28 | 15 Texte um die Gesamtlänge ergänzt DE, EN 20:43:16 | `productUpdate`, `translationsRegister` |
| ca. 20:49 | 23 fehlende EN-Übersetzungen an Optionen | `translationsRegister` |
| 20:44 bis 20:48 | Nachladen 86 Seiten | Edge headless |

Alle Aufrufe ohne `userErrors`. Bei jeder Übersetzung habe ich den Digest gegen den gespeicherten deutschen Wert geprüft,
Shopify hat alle angenommen.

## 1.4 Shopdaten nach der Faktenliste

Liste vorher und nachher: `docs/data/teill-shopdaten-1-4.csv` (34 Zeilen, vor dem Schreiben gepusht).

- hp-ola-g40-15-eu: `beleuchtete_laenge_m` 20 gelöscht (der richtige Wert 7 m kam mit 1.3). Block ola-g40-b2 und Frage
  ola-g40-frage-1 umgeschrieben, sie stimmen jetzt für 15, 27 und 42 Birnen („Drei Längen“, die Länge steht in den
  Technischen Details).
- hp-ols-s11-16, hp-ols-st38-16: `beleuchtete_laenge_m` 7,5 und 12,5 an den Varianten, `zuleitung_m` 2,5.
- hp-dgm-002: `stromquelle` Batterie (EN Battery). Kachel und Symbol auf der Seite geprüft.
- hp-dnm-208: `hoehe_m` 1,8, Titel und SEO-Titel DE und EN, Block dnm-b1, Frage dnm-frage-1, Einsatzbereich
  innen und außen auch an HP-DNM-208M.
- hp-ucp-200: `zuleitung_m` 5 an HP-UCP-300, -300W und -300M.
- hp-olt-150: `koppelbar_bis` 3.
- hp-bsl-100-2p, hp-bsl-50-2p: Lieferumfang 2 × Lichterkette, 2 × Batteriekasten.
- hp-rct-400, hp-bsl-50-1p: Titel „für innen und außen“, `einsatzbereich` gesetzt.
- hp-scwl-15m2p-mc: Kelvin an der bunten Variante gelöscht.
- Lieferumfang ergänzt: pvc-150g, pec-150g, hp-olt-300-eu, hp-rsp-180, hp-fsf-120. hp-fsf-120 `material` Metall.
- Nachtrag: hp-ols-s17-16-eu Erdspieß im Lieferumfang (19:44).

## 1.1 Listenfeld Lichtfarben

- **Neu:** `heipard.lichtfarben` (Liste aus Einzeltext), ID 698314064205. Werte in der bisherigen Schreibweise
  (Warmweiß, Kaltweiß, Multicolor), gespeichert ohne Leerzeichen (`["Warmweiß","Multicolor"]`).
- **112 Produkte** befüllt, EN gleichzeitig (Warm white, Cool white, Multicolor).
- **Das alte Feld `heipard.lichtfarbe` bleibt** unverändert, der heutige Filter läuft weiter darüber.
- **Leer gelassen:**
  - pec-150g, pvc-150g: Bäume ohne Licht.
  - hp-dgm-048: liegt bei dir.
  - hp-dlm-100h: orange und lila, kein Wert aus der Liste [prüfen].
- **[prüfen] hp-npt-210:** Die Variante „Weiß“ habe ich nicht übernommen. Ob das Kaltweiß ist, belegt keine Quelle.
- hp-fxf-001: Warmweiß nach der Faktenliste. Das alte Feld ist dort leer, das habe ich so gelassen.
- Vorher und nachher: `docs/data/teill-lichtfarben.csv`.

### Klickanleitung Search & Discovery

1. Shopify-Admin, Apps, **Search & Discovery**, **Filter**.
2. **Filter hinzufügen**, Quelle **Produkt-Metafeld**, Feld **Lichtfarben** (`heipard.lichtfarben`) wählen. Die Quelle
   des bestehenden Filters lässt sich nicht umstellen, deshalb ein neuer Filter.
3. **Beschriftung:** „Lichtfarbe“.
4. **Reihenfolge der Werte:** Bietet die App eine eigene Sortierung an, Warmweiß, Kaltweiß, Multicolor. Sonst sortiert sie
   alphabetisch (Kaltweiß, Multicolor, Warmweiß).
5. Speichern. Den neuen Filter an die Stelle des alten ziehen und den alten Filter „Lichtfarbe“ (`heipard.lichtfarbe`)
   entfernen.
6. Erscheint „Lichtfarben“ in Schritt 2 nicht in der Auswahl, sag mir Bescheid. Dann fehlt am Feld eine Freigabe, die ich
   setze.
7. Gib mir kurz Bescheid. Ich setze die englische Beschriftung „Light color“ am neuen Filter, bevor Translate & Adapt
   sie maschinell füllt. Danach prüfe ich die Kollektionsfilter DE und EN (Werte, Anzahl, Treffer je Lichtfarbe).

Rückweg: `metafieldDefinitionDelete` (ID 698314064205, mit allen zugehörigen Werten). Der alte Filter funktioniert davon
unabhängig.

## 1.2 Produkttypen DE

- 92 Produkttypen an die Produktart im deutschen Titel angeglichen, EN danach neu registriert (die englischen Typen
  folgten schon der Regel).
- Sichtbar ist das als Kicker über dem Titel auf der Produktseite. DE und EN geprüft.
- **Geprüft, dass nichts am Produkttyp hängt:**
  - Kollektionen: alle Smart Collections hängen an `kat-`Tags.
  - Filter: Stromquelle, Lichtfarbe, Einsatzbereich, IP-Wasserschutz und Material, kein Produkttyp.
  - Feeds: Neben dem Onlineshop gibt es nur den Kanal „Shop“, dort ist kein Produkt veröffentlicht. Keine Feed-App.
- Vorher und nachher: `docs/data/teill-produkttypen.csv`.

## 1.6 Kleinigkeiten

Liste: `docs/data/teill-kleinigkeiten-1-6.csv`.

- Startseite EN: Bento-Kachel „Fairy lights“ heißt jetzt „String Lights“, dazu die Hero-Unterzeile („String lights, solar
  lanterns, …“).
- `subtitle` hp-ola-s14-30-eu: „linkable“ heißt jetzt „connectable“. Die Meta-Description von hp-npt-210 hatte dasselbe Wort und
  ist ebenfalls angepasst.
- **hp-sblb-* „beads“ wird „globes“.** Begründung: Das Bild zeigt klare, runde Kugeln auf einer Kappe, wie Glühbirnen.
  „Globe string lights“ ist im amerikanischen Englisch der übliche Name für Ketten mit runden Leuchtkörpern. „Balls“
  klingt nach Spielzeug oder Christbaumkugel. Die Titel sagen weiter „Crystal Balls“ (Frage unten).
- hp-dgm-048 bleibt bei dir.

## 1.5 Textentwürfe

Liste vorher und nachher: `docs/data/teill-texte-1-5.csv` (Beschreibung und Meta-Description, DE und EN).

- **12 ohne Längenfall** (19:35 bis 19:42): hp-rsp-180, pvc-150g, pec-150g, hp-dpm-300, hp-rct-400, hp-fsf-120,
  hp-bsl-50-1p, hp-dnm-208, hp-rgb-500a, hp-ucp-200, hp-bsl-100-2p, hp-bsl-50-2p.
- **18 nach der Längenliste** (DE 20:33:54, EN 20:37:49): hp-isl-264, hp-ols-s11-16, hp-ols-st38-16, hp-dpt-300,
  hp-olt-300-eu, hp-cl-1-eu, hp-ctl-180, hp-ctl-240, hp-ctl-300-eu, hp-ol-50, hp-ol-s11-30, hp-ola-g40-15-eu, -27-eu,
  -42-eu, hp-olg-200, hp-olg-400, hp-olt-100, hp-olt-200.
- Meta-Descriptions höchstens 155 Zeichen, DE und EN. Die sechs älteren EN-Metas (hp-dct-200, hp-dgm-001,
  hp-blt-100-eu-1, hp-vit-586l-eu-1, hp-ctl-180m, hp-dfm-600) sind gekürzt.
- SEO-Titel jeweils unverändert mitgeschickt (sonst leert Shopify die Meta-Description).
- Tag `todo-text` entfernt, wo er stand (10 und 4 Produkte).
- **13 bleiben liegen**, weil ihre Längen in der Liste unsicher sind: hp-isl-486, hp-rtm-400, hp-cl-2-eu, hp-ol-100,
  hp-ol-15, hp-ol-75, hp-ol-s11-15, hp-ol-s11-25, hp-ol-st38-15, -25, -30, hp-olt-150, hp-olt-800. Sie folgen, sobald die
  Werte geklärt sind (Frage 1).
- Die 40 Entwürfe mit [TBD] bleiben liegen, wie im Auftrag.

## 2 Hero ohne Schärfesprung

- **Umsetzung** (`9717ce5`, `867f4be`): Neuer Baustein `snippets/heipard-hero-rahmen.liquid`. Er setzt vor das bisherige
  Standbild ein `<source>` mit dem ersten (Tag) bzw. letzten Clipbild (Abend), Desktop 1600 × 900, mobil 1276 × 720.
  Die Adressen stehen in vier Einstellungen des Hero (`rahmen_*`), die Bilder hat die Asset-Instanz aus den Clips gezogen
  (Files `HOME_HERO_LICHTAN_SCHNELL_{1600|720}_{ERSTES|LETZTES}.jpg`).
- Das `<source>` gilt nur mit Bewegung und JavaScript (`prefers-reduced-motion: no-preference` und `scripting: enabled`).
  Ohne Bewegung oder ohne JavaScript lädt der Browser wie bisher das scharfe Standbild. Es wird immer nur ein Bild
  geladen.
- Die Rahmen laden über den Shop-Host (`/cdn/shop/files/…`) wie die übrigen Bilder, also ohne zweite Verbindung vor
  dem größten Bild.
- **Schärfemaß** wie in Teil K. Der Sprung ist die Differenz zwischen Standbild und dem Clipbild daneben:
  - Desktop: vorher +1,15 bis +4,87, jetzt +0,07 bis +0,24. PSNR zwischen Rahmen und Clipbild 34 bis 40 dB.
  - Mobil: jetzt −0,40 bis +0,11, PSNR 27 bis 31 dB.
- **LCP:** gleich innerhalb der Messstreuung, gemessen unter gleichen Bedingungen auf demselben Vorschau-Theme. Die
  Rahmen sind kleiner als die bisherigen Standbilder.
- **Geprüft:** Start, Ende, Schalter hin und zurück, Desktop und mobil; ohne Bewegung und ohne JavaScript lädt das alte
  Standbild.
- **Kontaktbögen:** `docs/data/teill-hero-uebergaenge-desktop.jpg`, `docs/data/teill-hero-uebergaenge-mobil.jpg`.
- Rückweg: die vier Einstellungen `rahmen_*` im Hero leeren (dann gilt das alte Standbild), oder `git revert 867f4be
  9717ce5`.

## 3 Bilder aus Lauf C3

- **Aufteilung** an die Asset-Instanz gegeben, bevor sie die Galerien gesetzt hat. Position 1 der Galerie in der
  richtigen Lichtfarbe, dann B1 und B2, dann R1, Rest in die Galerie. Jedes Bild steht nur einmal auf der Seite.
- **hp-csl-200-c, hp-csl-300-c, hp-olg-200w, hp-olg-200m:** je ein eigenes Set. B1, B2 und R1 kommen aus den
  Produktfeldern `feature_b1`, `feature_b2`, `feature_r1`. R2 und R3 sind leer, damit keine warmweiße Familienszene
  erscheint. Die Bilder für hp-csl-300-c kamen schon mit Auftrag 32, ich habe die Seite deshalb gleich mit umgestellt.
- **Blocktexte** an die neuen Motive angepasst, DE und EN (Vorhang am Fenster, Timer, Helligkeit; OLG am Baum, gewickelt,
  Modi). Alt DE und EN am Blockfeld `alt`. Die EN-Alt von CSL300C-B1 hatte 129 Zeichen, gekürzt auf unter 125.
- **B2-Tausch OLAS14 und VIT** (19:44): Block olas14-b2 zeigt OLAS14_B2_04, Block vit-b2 VIT_B2_08, Alt DE und EN.
  Damit steht kein B2-Bild mehr doppelt auf der Seite. OLAS14_B2_01 wird von einem anderen OLAS14-Block noch genutzt und
  darf nicht gelöscht werden. Ob VIT_B2_01 gelöscht wird, entscheidest du.
- **ISL, DPT, SCWL:** je Lichtfarbe die richtige Galerie, keine Collagen mehr, kein Bild doppelt. hp-scwl-15m2p-mc öffnet
  bunt. VIT_I1_02_an erscheint zweimal im Quelltext, das sind die beiden Ebenen des Schiebers, auf der Seite einmal.
- **Nachgeladen:** DE und EN, Desktop und mobil, 180 Aufrufe.
- **Kontaktbögen:** `docs/data/teill-c3-seiten-desktop.jpg`, `docs/data/teill-c3-seiten-mobil.jpg`.
- Befund (Frage 5): Die Familienblöcke von ISL, DPT und SCWL zeigen auch an kaltweißen und bunten Varianten warmweiße
  Szenen. Das betrifft nur die Blöcke, nicht die Galerie.

## 1.3 Länge im Titel: die beleuchtete Länge

- **Quelle:** Längenliste der Asset-Instanz `reports/laengen_2026-11-24.csv` (Auftrag 32, Abschnitt 3).
- **Metafelder:** 187 Werte geschrieben (`beleuchtete_laenge_m`, `zuleitung_m`, `gesamtlaenge_m`, Produkt und Varianten),
  davon 5 Widersprüche, die mit dem Titelvorschlag der Liste aufgelöst sind (hp-ola-g40-15/27/42-eu 7 / 16,9 / 27 m,
  hp-ol-s11-30 16,8 m beleuchtet, 20 m gesamt).
- **44 Werte unverändert [prüfen]:** 39 unsicher oder Widerspruch, 5 Auslegungsfälle (Frage 1).
- **18 Titel und SEO-Titel, DE und EN:**
  - hp-ctl-400-eu-1 2,5 m (Stranglänge)
  - hp-ol-25 12 m, hp-ol-30 16,8 m, hp-ol-50 27 m
  - hp-ol-s11-30 16,8 m
  - hp-ola-g40-15/27/42-eu 7 / 16,9 / 27 m, hp-ola-s14-15-eu 7 m
  - hp-olh-g40-20/35/50 9,9 / 17 / 27 m
  - hp-ols-a60-16-eu 6,5 m, hp-ols-g40-16 7,5 m
  - hp-ols-s11-16 und hp-ols-st38-16 „7,5 m oder 12,5 m“
  - hp-sblb-100l-ww-new 15 m, hp-sblb-60l-ww-new 9 m
- **Theme** (`c249933`): Serienwähler und Kettenplan lesen zuerst `beleuchtete_laenge_m`, sonst `gesamtlaenge_m`. Vorher
  zeigte der Serienwähler nach den neuen Werten die Gesamtlängen (Befund der Asset-Instanz). Der Kettenplan schreibt
  „ca.“ nur noch, wenn beleuchtete Länge und Zuleitung zusammen mehr als 0,25 m von der Gesamtlänge abweichen.
- **Regel ersetzt:** `docs/projektstand.md`, neuer Abschnitt „Titelmuster Produkte“. Verweise in
  `docs/heipard-teil-k-bericht.md` (2.4) und `docs/heipard-welle2-plan.md`.
- Listen: `docs/data/teill-laengen-metafelder.csv` (vorher, nachher, Sicherheit), `docs/data/teill-laengen-titel.csv`.

### Texte mit beiden Zahlen (1.3, Punkt 4)

- Wo eine Kettenlänge steht und die Gesamtlänge belegt ist, nennt der Text jetzt beide Zahlen, etwa „Auf 27 m hängen
  50 Birnen, mit der 3 m langen Zuleitung misst die Kette 30 m“. EN: „… with the 3 m power cord the string lights
  measure 30 m overall“.
- **In den 18 Längentexten** aus 1.5: hp-isl-264, hp-ols-s11-16, hp-ols-st38-16, hp-ol-50, hp-ol-s11-30,
  hp-ola-g40-15/27/42-eu. Weitere drei habe ich beim Gegenlesen ergänzt (hp-olg-400, hp-olt-300-eu, hp-dpt-300).
- **In den 15 Texten aus Teil K:** Keiner nannte die Gesamtlänge als Länge der Kette. Neun nannten beleuchtete Länge und
  Zuleitung, aber nicht die Gesamtlänge. Diese sind ergänzt: hp-isl-360-eu, hp-dlm-100h, hp-rfm-600, hp-vlm-100l,
  hp-olg-100, hp-olg-200m, hp-olg-200w, hp-olg-800, hp-rit-280.
- **Aus den 12 Texten ohne Längenfall** ebenso ergänzt: hp-bsl-50-1p, hp-bsl-50-2p (5,2 m), hp-rgb-500a (53 m).
- Zusammen 15 Texte ergänzt (DE 20:42, EN 20:43). Liste der geänderten Satzteile: `docs/data/teill-texte-gesamtlaenge.csv`.
- **Ohne Gesamtlänge geblieben**, weil sie nicht belegt ist: hp-olg-200, hp-olt-100, hp-olt-200 (Widerspruch 20 oder
  23 m), hp-u20-200 (20-m-Fassung unsicher), hp-bsl-100-2p, hp-dpm-300 (30 und 60 m unsicher), hp-ctl-* (Stranglänge,
  Gesamtlänge unsicher), hp-cl-1-eu (keine Zuleitung belegt), hp-ol-s11-50 (Frage 2).

### Nachgeladen

86 Seiten (43 Produkte, DE und EN) nach allen Längenänderungen, Ergebnis `docs/data/teill-nachladen-laengen.csv`.

- Alle 18 neuen Titel stehen auf DE und EN als Überschrift auf der Seite.
- Alle 46 neuen Sätze mit Gesamtlänge stehen in der Beschreibung (23 Produkte, DE und EN).
- Kettenplan: überall beleuchtete Länge, Zuleitung und Gesamtlänge. „ca.“ nur noch bei hp-ol-s11-50 (Frage 2).
- Serienwähler: Stufen nach beleuchteter Länge. Wo die beleuchtete Länge noch [prüfen] ist, steht die Gesamtlänge
  (z. B. RGB-Familie 20 / 33 / 53 m, Frage 3).
- Kein Gedankenstrich, kein seitlicher Überlauf.

### Nebenbefund: fehlende EN-Übersetzungen an Optionen

- **Gefunden:** Der englische Serienwähler von hp-dpt-300 zeigte „Warmweiß“.
- **Ursache:** Die Optionen und Werte aus Auftrag 30/31 hatten keine englische Übersetzung:
  - hp-dpt-300: Lichtfarbe, 20, 40 und 80 m.
  - hp-ucp-200: Lichtfarbe, Größe.
  - hp-uct-200-eu: Größe.
  - hp-dpm-300: 40 und 80 m.
  - hp-rmp-180: Höhe.
- **Gesetzt** (ca. 20:49), in der Schreibweise der übrigen Produkte (Light color, Warm white, Size, Height, 1.8 m), damit
  Translate & Adapt sie nicht maschinell füllt.
- **Dazu an hp-uct-200-eu zwei alte Maschinenübersetzungen korrigiert:**
  - „Ausführung“ ist jetzt „Version“ statt „Execution“.
  - „Lichterkette“ ist jetzt „String lights“ statt „Fairy lights“.
- Liste: `docs/data/teill-optionen-en.csv`. Die Optionswerte selbst sind unverändert.

## Commits und Theme Check

`shopify theme check` vor jedem Commit, Ergebnis jedes Mal wie der Ausgangsstand: 1 Fehler (`heipard-wordmark`, bekannt),
14 Warnungen.

| Commit | Zeit | Inhalt |
|---|---|---|
| `af01fcd` | 19:09 | Doku: Shopdaten nach Faktenliste, vorher und nachher (vor dem Schreiben) |
| `f5ae601` | 19:27 | Doku: Lichtfarben-Listenfeld, Produkttypen DE und Metaobjekte 1.4 |
| `eccf78d` | 19:43 | Doku: Texte 1.5 (12 ohne Längenfall) und Kleinigkeiten 1.6 |
| `9717ce5` | 19:48 | Hero: Standbilder aus dem ersten und letzten Clipbild (Abschnitt 2) |
| `867f4be` | 19:54 | Hero-Rahmen über den Shop-Host laden |
| `c249933` | 20:31 | Serienwähler und Kettenplan: beleuchtete Länge vor Gesamtlänge (1.3) |
| dieser Bericht | | Bericht, Längenlisten, Kontaktbögen, Titelmuster in `projektstand.md` |

## Rückweg

- **Shopdaten, Texte, Titel, Produkttypen, Längen:** Die Listen in `docs/data/teill-*.csv` enthalten je Wert den
  Vorher-Stand. Zurück mit denselben Aufrufen (`productUpdate` mit Beschreibung und SEO-Titel zusammen, `metafieldsSet`,
  `translationsRegister` mit dem Digest des wiederhergestellten deutschen Werts). `todo-text` mit `tagsAdd`.
- **Lichtfarben:** `metafieldDefinitionDelete` (ID 698314064205) mit den zugehörigen Werten. Das alte Feld bleibt.
- **Hero:** die Einstellungen `rahmen_*` leeren oder `git revert 867f4be 9717ce5`.
- **Serienwähler und Kettenplan:** `git revert c249933`.
- **Abschnitt 3:** `feature_set` der vier Produkte zurück auf das Familien-Set (csl bzw. olg), die Produktfelder
  `feature_b1/b2/r1` löschen. Blocktexte der Familien sind unverändert.
- **Optionsübersetzungen:** `translationsRemove` (Schlüssel `name`, `en`) an den Ressourcen aus
  `docs/data/teill-optionen-en.csv`. An hp-uct-200-eu die alten Werte „Execution“ und „Fairy lights“ wieder setzen.

## Offen bei dir

1. **44 Längenwerte [prüfen]** (Liste `teill-laengen-metafelder.csv`, Spalte Sicherheit).
   - Bei vielen Widersprüchen empfiehlt die Liste einen Wert („folgen“).
   - Fünf sind Auslegungsfälle, bei denen die Liste die beleuchtete Länge aus Birnenzahl und Abstand rechnet:
     hp-ol-st38-15 7,35 m, -25 12 m, -30 16,8 m, hp-ola-s14-30-eu 16,8 m, hp-ola-s14-50-eu 27 m.
   - Darf ich den Empfehlungen und den Auslegungen folgen? Dann schreibe ich Werte, Titel und die 13 liegenden Texte.
2. **hp-ol-s11-50:** Im Shop stehen 30 m beleuchtet, 3 m Zuleitung, 30 m gesamt. Das geht nicht auf, der Kettenplan
   schreibt deshalb „ca. 30 m“. Laut Liste gibt es für die beleuchtete Länge keine Quelle, die 30 m gesamt sind unsicher.
   Titel und Text nennen 30 m. Welcher Wert gilt?
3. **hp-rgb-500a:** Die beleuchtete Länge 50 m ist ein Widerspruch mit Empfehlung „folgen“ und noch nicht gesetzt. Der
   Serienwähler der RGB-Familie zeigt deshalb gemischt 20, 33 und 53 m. Mit deinem Ja zu Punkt 1 wird daraus 20, 30
   und 50 m.
4. **„Crystal Balls“** in den EN-Titeln von hp-sblb-*: Der Untertitel sagt jetzt „globes“. Sollen die Titel auch
   „Crystal Globes“ heißen?
5. **Familienblöcke ISL, DPT, SCWL:** warmweiße Szenen auch an kaltweißen und bunten Varianten. Lösung wie bei CSL und
   OLG (eigene Bilder je Lichtfarbe) oder so lassen?
6. **Lichtfarben-Lücken:** hp-npt-210 „Weiß“ (Kaltweiß?), hp-dlm-100h (orange und lila: eigener Wert oder leer?),
   hp-fxf-001 (altes Feld leer lassen?).
7. **VIT_B2_01:** löschen oder behalten? Die Asset-Instanz löscht nur auf dein Wort.
8. **hp-olt-300-eu:** Der Timer heißt in der Quelle „6639H“, so steht er auch im Text. Ist das derselbe Ablauf wie bei
   hp-dpt-300 (6 an, 6 aus, 3 an, 9 aus)? Dann schreibe ich ihn aus.
9. **Vorschau-Theme #199733903693** (zz-vorschau Teil H Hero) besteht noch, ich habe es für die Hero-Tests genutzt.
   Löschen geht nur im Admin.
10. **ES, FR, IT:** Alles aus Teil L ist DE und EN. Die drei Sprachen sind an diesen Stellen veraltet oder leer. Das gehört
    zur Liste für Daniel (Pflicht vor dem Launch).
11. hp-dgm-048 liegt weiter bei dir (Lichtfarbe, Lieferumfang).
