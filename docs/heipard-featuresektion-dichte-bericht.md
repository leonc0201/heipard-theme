# Feature-Sektion dichter (Schritt A, ohne neue Bilder): Bericht

Stand 2026-11-10. Auftrag: `heipard-theme-auftrag-featuresektion-dichte.md` (Freigabe Leon, darf Theme-Code ändern).
Reihenfolge wie vorgegeben 4, 5, 3, 1, 2, nach jedem Punkt ein Commit auf main und eine langsame Live-Prüfung (eine
Seite alle 8 Sekunden). Shop vor jedem Schreiben geprüft: `get-shop-info` = HeiPard. Nicht angefasst:
Produktmedien, Position 1, `galerie_medien`, Produktstatus, Files. Vor dem Push jeder Änderung lokal mit LiquidJS
getestet und `shopify theme check` gegen den Ausgangsstand verglichen (keine neuen Meldungen).

## Kurzfassung

- **Kaufbox ohne Platzhalter:** 70 Kacheln mit „[TBD]“ auf 52 Seiten sind weg. Im Shop stand an keinem
  Produkt- oder Variantenfeld ein gespeichertes „[TBD]“, das Theme hat leere Felder so angezeigt. Zu leeren gab es
  deshalb nichts; die leeren Felder je Produkt stehen unten als Nachfrageliste (Liste 3).
- **Serie nur gleiche Bauart:** gleiche `familie` und keine abweichende Stromquelle. hp-dgm-048 steht nicht mehr bei
  DGM-001 und DGM-002 und zeigt selbst keine Serie. Der Stern (hp-dgm-001) bleibt bei DGM-002, siehe Abschnitt 3.
- **Icon-Grid bis vier Kacheln** (Reihenfolge am Abend umgestellt, Abschnitt 8): 92 von 118 Seiten zeigen jetzt vier Kacheln (vorher
  höchstens drei). Sieben Standard-Seiten, die bisher gar kein Icon-Grid hatten, zeigen jetzt eins. Unter drei
  Kacheln bleiben fünf Produkte (Liste 2).
- **Long-Tail mit B2:** RSP und WBF (180, 210) zeigen ihr B2, Limit Long-Tail jetzt 4. Ohne `feature_b2` bleibt
  alles wie vorher.
- **R1 mit Bild:** im Theme fertig (Block-Bild, sonst Metafeld `feature_r1`, neu angelegt). Im Shop hat keine
  Familie ein passendes Galeriebild: Alle Galeriebilder der Asset-Instanz sind aus B1/B2 geschnitten, das einzige
  andere (OL-A S14) zeigt dieselbe Szene wie das B2 der Familie. Eingesetzt, live gesehen, zurückgenommen. Alle 48
  Familien mit R1 stehen in Liste 1 für Schritt B.
- **Live:** alle 118 aktiven Seiten vorher und nachher geladen, alle 200, keine Liquid-Fehler, kein sichtbares
  „[TBD]“ mehr, Hero-Seiten in der Blockfolge unverändert (Gegenprobe hp-dct-200 und alle anderen Hero-Seiten).

## 1. Änderungen je Punkt

| Punkt | Commit | live ab | Was |
|---|---|---|---|
| 4 Kaufbox | `a7d0a9f` | 18:29 | `snippets/heipard-product-specs.liquid`: Kachel nur mit Wert, nicht bei Wert ab „[TBD“; ohne Kachel bleibt die Liste mit `hidden` im Markup (Variantenwechsel tauscht sie weiter). `assets/heipard-product.css`: bei ungerader Zahl nimmt die letzte Kachel die volle Breite. |
| 5 Serie | `79892b2` | 18:33 | `snippets/heipard-fb-serienleiter.liquid`: Familien-Modus nimmt ein Nachbarmodell nur bei gleicher `familie` und gleicher Stromquelle (fehlt sie an einer Seite, entscheidet die Familie). Varianten-Modus unverändert. |
| 3 Icon-Grid | `621f3ad` | 18:36 | `snippets/heipard-fb-icon-grid.liquid`: Reihenfolge Lichtfarbe, Lichtpunkte, Timer, Schutzart, Stromquelle, Fernbedienung, Leuchtmodi, Dimmbar, Koppelbar; die ersten vier mit Wert. Neue Kacheln Lichtfarbe (Variantenoption vor Metafeld), Lichtpunkte (`led_anzahl`), Stromquelle (Icon Stecker, Sonne oder Batterie). Vier Kacheln: Handy 2 x 2, ab Tablet eine Reihe. Beschriftungen DE und EN. |
| 1 Long-Tail | `d0ff77f` | 18:41, Sets 18:42 | `sections/heipard-feature.liquid`: Limit Long-Tail 4; ein B2 erscheint bei Long-Tail nur mit gesetztem `feature_b2`, sonst Hinweis im Editor. Im Shop `rsp-b2` und `wbf-b2` in die Sets `rsp` und `wbf`, direkt nach dem B1. |
| 2 R1 mit Bild | `bfb0605` | 18:44 | Sektion, `heipard-feature-dispatch.liquid`, `heipard-feature-block.liquid`: R1 mit Bild wird Bild-Text-Zeile wie B2 (Klasse `heipard-feature__row--r1`), Bild auf der Gegenseite der Zeile davor; ohne Bild schmaler Text wie bisher. Metafeld-Definition `heipard.feature_r1` (Datei, nur Bilder) angelegt. Bild an `olas14-r1` um 18:45 gesetzt, um 19:06 zurückgenommen (Abschnitt 4). |

Die Regeln stehen auch in `docs/heipard-block-vokabular.md` (B4, R1, D4, Long-Tail).

## 2. Je Familie

Blöcke ohne die Daten-Zone. „mit Bild / ohne“ zählt die Blöcke mit eigenem Bild (B1, B2, Sticky, Schieber, Hotspot,
Farbwechsel) gegen Text- und Datenblöcke; ein B1 mit Ersatzfläche zählt ohne Bild. Kacheln: Spanne über die Produkte
der Familie. Serie: Modus (Familie oder Varianten), „korrigiert“ bei geänderter Serie, „–“ ohne Serie.

| Familie | Dramaturgie | Produkte | Blöcke nachher | mit Bild / ohne | Kacheln vorher → nachher | R1 | Serie |
|---|---|---|---|---|---|---|---|
| BLM | Hero | 1 | B1 · B2 · R1 · Schieber · Kettenplan · Hotspot · Zeitband · Icon-Grid | 4 / 4 | 3 → 4 | Text | varianten |
| BLT | Hero | 2 | B1 · B2 · R1 · Schieber · Kettenplan · Hotspot · Zeitband · Icon-Grid / B1 · B2 · R1 · Schieber · Kettenplan · Hotspot · Icon-Grid | 4 / 3, 4 / 4 | 2–3 → 4 | Text | varianten |
| CTL | Hero | 4 | B1 · B2 · R1 · Steuerung · Kettenplan · Hotspot · Icon-Grid / B1 · B2 · R1 · Farbwechsel · Kettenplan · Icon-Grid / B1 · B2 · R1 · Farbwechsel · Icon-Grid | 3 / 2, 3 / 3, 3 / 4 | 2–3 → 4 | Text | familie |
| DCT | Hero | 1 | B1 · B2 · R1 · Schieber · Kettenplan · Sticky · Hotspot · Zeitband | 5 / 3 | kein Icon-Grid | Text | varianten |
| DFM | Hero | 3 | B1 · B2 · R1 · Kettenplan · Icon-Grid / B1 · B2 · R1 · Kennzahl · Kettenplan · Hotspot · Icon-Grid / B1 · B2 · R1 · Kennzahl · Kettenplan · Icon-Grid | 2 / 3, 2 / 4, 3 / 4 | 3 → 4 | Text | varianten |
| NPT | Hero | 1 | B1 · B2 · R1 · Schieber · Kettenplan · Sticky · Hotspot · Zeitband | 5 / 3 | kein Icon-Grid | Text | varianten |
| OL-G40 | Hero | 2 | B1 · B2 · R1 · Steuerung · Kettenplan · Hotspot · Zeitband · Icon-Grid | 3 / 5 | 3 → 4 | Text | familie |
| OLAS14 | Hero | 3 | B1 · B2 · R1 · Steuerung · Kettenplan · Sticky · Hotspot · Icon-Grid | 4 / 4 | 3 → 4 | Text | familie |
| SBLB | Hero | 2 | B1 · B2 · R1 · Kennzahl · Schieber · Kettenplan · Hotspot · Zeitband | 4 / 4 | kein Icon-Grid | Text | familie |
| VIT | Hero | 2 | B1 · B2 · R1 · Schieber · Sticky · Hotspot · Icon-Grid / B1 · B2 · R1 · Schieber · Kettenplan · Sticky · Hotspot · Icon-Grid | 5 / 2, 5 / 3 | 3 → 4 | Text | familie |
| BSL | Standard | 4 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 2 → 4 | Text | familie |
| CL | Standard | 2 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 1 → 2 | Text | familie |
| CSL | Standard | 4 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 3 → 4 | Text | familie |
| CTL | Standard | 4 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 2–3 → 4 | Text | familie |
| DGM | Standard | 1 | B1 · B2 · R1 · Zeitband · Icon-Grid | 2 / 3 | 2 → 4 | Text | korrigiert |
| DLM | Standard | 1 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 3 → 4 | Text | varianten |
| DNM | Standard | 1 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 3 → 4 | Text | – |
| DPM | Standard | 1 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 3 → 4 | Text | varianten |
| DPT | Standard | 1 | B1 · B2 · Kettenplan · Icon-Grid | 2 / 2 | 0 → 2 | kein R1 | varianten |
| ISL | Standard | 3 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 2–3 → 4 | Text | varianten |
| OL | Standard | 5 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 0–3 → 2–4 | Text | familie |
| OL-S11 | Standard | 4 | B1 · R1 · Kettenplan · Icon-Grid | 1 / 3 | 3 → 4 | Text | familie |
| OL-ST38 | Standard | 4 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 3 → 4 | Text | familie |
| OLA-G40 | Standard | 3 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 3 → 4 | Text | familie |
| OLG | Standard | 8 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 2–3 → 4 | Text | familie/varianten |
| OLH-G40 | Standard | 5 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 0–1 → 3–4 | Text | familie |
| OLS-A60 | Standard | 1 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 2 → 4 | Text | – |
| OLS-G40 | Standard | 3 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 2 → 4 | Text | familie |
| OLS-S11 | Standard | 1 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 3 → 4 | Text | varianten |
| OLS-S17 | Standard | 2 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 2 → 4 | Text | familie |
| OLS-ST38 | Standard | 1 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 2 → 4 | Text | varianten |
| OLT | Standard | 7 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 2–3 → 4 | Text | familie/varianten |
| RCT | Standard | 1 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 2 → 3 | Text | – |
| RFM | Standard | 1 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 1 → 4 | Text | – |
| RGB | Standard | 3 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 2 → 4 | Text | familie |
| RIT | Standard | 1 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 2 → 4 | Text | – |
| RNM | Standard | 1 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 1 → 4 | Text | – |
| RPM | Standard | 1 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 2 → 4 | Text | varianten |
| RTM | Standard | 1 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 1 → 4 | Text | – |
| SCWL | Standard | 2 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 0 → 3 | Text | familie |
| SOLM | Standard | 1 | B1 · R1 · Kettenplan · Icon-Grid | 0 / 4 | 0 → 3 | Text | – |
| TPM | Standard | 1 | B1 · B2 · Icon-Grid | 2 / 1 | 2 → 4 | kein R1 | – |
| U20 | Standard | 1 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 1 → 4 | Text | varianten |
| UCP | Standard | 1 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 3 → 4 | Text | – |
| UCT | Standard | 1 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 2 → 4 | Text | – |
| VAM | Standard | 1 | B1 · B2 · Kettenplan · Icon-Grid | 2 / 2 | 0 → 2 | kein R1 | – |
| VLM | Standard | 1 | B1 · B2 · R1 · Kettenplan · Icon-Grid | 2 / 3 | 3 → 4 | Text | varianten |
| WWF | Standard | 1 | B1 · B2 · R1 · Icon-Grid · Kennzahl | 2 / 3 | 1 → 4 | Text | varianten |
| BAUM-PEC | Long-Tail | 1 | B1 · Kennzahl | 1 / 1 | kein Icon-Grid | kein R1 | varianten |
| BAUM-PVC | Long-Tail | 1 | B1 · Kennzahl | 1 / 1 | kein Icon-Grid | kein R1 | – |
| BSM | Long-Tail | 1 | B1 · R1 | 1 / 1 | kein Icon-Grid | Text | – |
| BSX | Long-Tail | 1 | B1 | 1 / 0 | kein Icon-Grid | kein R1 | – |
| DGM | Long-Tail | 2 | B1 · R1 · Kennzahl | 0 / 3, 1 / 2 | kein Icon-Grid | Text | korrigiert |
| FSF | Long-Tail | 1 | B1 · R1 | 1 / 1 | kein Icon-Grid | Text | – |
| FXF | Long-Tail | 1 | B1 | 1 / 0 | kein Icon-Grid | kein R1 | – |
| RMP | Long-Tail | 1 | B1 · R1 · Kennzahl | 1 / 2 | kein Icon-Grid | Text | – |
| RSP | Long-Tail | 1 | B1 · B2 · R1 · Kennzahl | 2 / 2 | kein Icon-Grid | Text | varianten |
| WBF | Long-Tail | 2 | B1 · B2 · Kennzahl | 2 / 1 | kein Icon-Grid | kein R1 | familie |

CTL steht zweimal, weil die Welle-2-Modelle Hero und die Welle-1-Modelle Standard sind; DGM ebenso (DGM-002 Standard,
DGM-001 und hp-dgm-048 Long-Tail).

## 3. Serie-Korrekturen

| Seite | vorher | nachher |
|---|---|---|
| hp-dgm-002 | hp-dgm-002, hp-dgm-001, hp-dgm-048 | hp-dgm-002, hp-dgm-001 |
| hp-dgm-001 | hp-dgm-001, hp-dgm-002, hp-dgm-048 | hp-dgm-001, hp-dgm-002 |
| hp-dgm-048 | hp-dgm-048, hp-dgm-001, hp-dgm-002 | keine Serie |

Alle drei DGM-Produkte tragen `familie` DGM (Leons Vorgabe aus Auftrag 15) und denselben Produkttyp „Motivleuchte“.
Die Regel „gleiche Familie“ allein trennt sie deshalb nicht. Getrennt hat die Stromquelle: hp-dgm-048 läuft mit
Batterie, DGM-001 und DGM-002 am Netz. Der Produkttyp taugt nicht als Bauart-Merkmal: OLT 600 und 800 tragen
„Lichterkette (allgemein)“, die übrigen OLT „Weihnachtsbaum-Lichterkette“, und würden sonst aus ihrer Serie fallen.

**Weiter zusammen, aus den Quellen nicht zu trennen (nichts geändert):**

- **DGM-002 und DGM-001:** Spirale und Stern stehen weiter in einer Serie (gleiche Familie, beide Netz, gleicher
  Produkttyp). Der Befund vom 10.11. nennt die Sterne als fremd. Trennen ginge in einem Schritt über ein eigenes
  `familie` für eines der beiden, das ist Leons Entscheidung.
- **CTL:** acht Produkte in einer Serie, Welle 2 (210 und 400 mit Ring und zwei Lichtfarben, 180M und 240M bunt) und
  Welle 1 (180, 240, 300, 360 warmweiß). Gleicher Produkttyp, gleiche Stromquelle (bei 360 leer).
- **OL:** hp-ol-15-g steht bei OL 15, 25, 75, 100; laut Shop gleiche Familie, Lichtfarbe und Schutzart fehlen.
- **OLS-S17:** hp-ols-s17-16 und hp-ols-s17-16-eu stehen nebeneinander, das zweite trägt `pruefen-dublette`.

Alle anderen Serien im Familien-Modus zeigen nur ihre Längen- oder Farbstufen: BSL, CL, CSL, OL-G40, OL-S11,
OL-ST38, OLA-G40, OLAS14, OLG (mit 200M bunt und 200W kaltweiß), OLH-G40, OLS-G40, OLT, RGB, SBLB, SCWL, VIT, WBF.

## 4. R1 mit Bild: Auswahl und Rücknahme

Quelle wie vorgegeben: Galeriebilder der Familie, nur wenn nicht aus B1 oder B2 derselben Familie geschnitten.
Herkunft aus dem Register der Asset-Instanz `reports/_work/galerie_feature.csv` (Spalte `quelle`): 154 neue
Galeriebilder, 152 davon aus einem B1 oder B2 der Familie. Die zwei übrigen sind `HP-OLA-S14-30_GAL_01` und
`HP-OLA-S14-50_GAL_01` aus dem Produktfoto „Lichterkette Außen-PT01_clean“ (dazu `HP-OLA-S14-15_GAL_01`, dasselbe
Motiv, am 10.11. nachgetragen).

`HP-OLA-S14-30_GAL_01` (66066042978637) kam um 18:45 an den Block `olas14-r1` und als `feature_r1` an die drei
OL-A-S14-Produkte. Live stand R1 korrekt als Bild-Text-Zeile, Bild rechts, das B2 davor links. Auf der Aufnahme war
dann zu sehen: `OLAS14_B2_01`, das B2 der Familie und zugleich das Bild der Steuerung, ist dieselbe Szene (Haus, Pool,
Liege, dieselben Birnenreihen), nur anders beschnitten. Die Seite hätte das Motiv dreimal hintereinander gezeigt. Um
19:06 zurückgenommen (Block-Bild leer, die drei `feature_r1` gelöscht), live geprüft: R1 wieder Text auf allen drei
Seiten. Die Definition `feature_r1` und der Theme-Code bleiben für Schritt B.

Nicht verwendet: die Listing-Fotos in `galerie_medien` der Welle-2-Familien CTL, DFM, ISL, UCT, DPM und NPT. Sie sind
nicht aus B1/B2 geschnitten, aber keine 1:1-Galeriebilder der Asset-Instanz; die Prüfliste vom 19.10. führt darunter
Collagen, Installations- und Lieferumfang-Grafiken und Einblendungen, die Markenregel verlangt textfreie Bilder. Wenn
sie in Frage kommen, müssten sie einzeln gesichtet werden (Schritt B).

## 5. Theme-Editor-Hinweise

- **Long-Tail-B2 ohne Metafeld:** neuer Hinweis „Long-Tail zeigt ein B2 nur, wenn das Metafeld heipard.feature_b2
  gesetzt ist“. Tritt heute nirgends auf: Nur RSP und WBF haben ein B2 im Long-Tail-Set, beide mit `feature_b2`.
- **Icon-Grid fehlte, jetzt da:** hp-ol-15-g, hp-olh-g40-15, hp-scwl-10m2p-mc, hp-scwl-15m2p-mc, hp-dpt-300,
  hp-solm-12m-ww, hp-vam-400l-eu-1 zeigen jetzt Kacheln aus Lichtfarbe, Lichtpunkten, Schutzart oder Stromquelle;
  der Hinweis „Icon-Grid nicht angezeigt“ aus dem Welle-1-Bericht entfällt dort. Der Hinweistext nennt jetzt die
  neuen Felder.
- **Kein Icon-Grid im Set:** DCT, NPT und SBLB (Hero) haben keinen Icon-Grid-Block, kein Hinweis.
- **Am Block-Limit:** Hero mit 8 Blöcken: BLM, BLT 050, OL-G40, OLAS14, VIT 864L, DCT, NPT, SBLB. Standard mit 5:
  alle Standard-Familien mit B2, R1, Kettenplan und Icon-Grid (z. B. OL-ST38). Long-Tail mit 4: RSP.
- **R1 mit Bild:** kein eigener Hinweis; ohne Bild rendert R1 wie bisher.

## 6. Live-Prüfung

- **Vollständig vorher** (18:11 bis 18:28) **und nachher** (18:45 bis 19:02): alle 118 aktiven Produktseiten,
  Status 200, keine Liquid- oder Übersetzungsfehler. hp-stt-050 ist Entwurf und nicht geprüft.
- **Nach jedem Punkt** zwölf Kernseiten, je Dramaturgie zwei plus die Pflichtseiten: Hero hp-ola-s14-15-eu,
  hp-vit-864l-eu-1, Gegenprobe hp-dct-200; Standard hp-rit-280, hp-ol-s11-15; Long-Tail hp-bsm-002, hp-dgm-048; dazu
  hp-rsp-180, hp-wbf-180 (ab Punkt 1 auch hp-wbf-210), hp-dgm-002, hp-dgm-001, hp-ol-st38-50.
- **Theme-Sync:** nach jedem Push die Prüfsummen der geänderten Dateien im Live-Theme gegen `git show HEAD`
  verglichen, jeweils nach rund einer Minute gleich.
- **Blockfolge geändert** nur, wo vorgesehen: RSP (B2 neu), WBF 180 und 210 (B2 neu), sieben Standard-Seiten mit
  neuem Icon-Grid (siehe Abschnitt 5). Alle Hero-Seiten unverändert.
- **Sichtprüfung** (Screenshots, Edge headless): Kaufbox DGM-002 mit drei Kacheln (Schutzart über die volle Breite),
  hp-dgm-048 mit einer Kachel; Icon-Grid OL-S11 mit vier Kacheln in einer Reihe, auf dem Handy 2 x 2; R1 mit Bild bei
  OL-A S14 (vor der Rücknahme) Desktop und Handy; RSP mit B1, B2, R1 und Kennzahl.

**URLs** (Shop mit Passwort)

| Seite | URL |
|---|---|
| RSP (Long-Tail, B2 neu) | https://heipard.myshopify.com/products/hp-rsp-180 |
| WBF 180 (Long-Tail, B2 neu) | https://heipard.myshopify.com/products/hp-wbf-180 |
| WBF 210 | https://heipard.myshopify.com/products/hp-wbf-210 |
| DGM-002 (Serie, Kaufbox, Icon-Grid) | https://heipard.myshopify.com/products/hp-dgm-002 |
| DGM-001 | https://heipard.myshopify.com/products/hp-dgm-001 |
| hp-dgm-048 (ohne Serie) | https://heipard.myshopify.com/products/hp-dgm-048 |
| OL-ST38 50 m | https://heipard.myshopify.com/products/hp-ol-st38-50 |
| OL-S11 15 m | https://heipard.myshopify.com/products/hp-ol-s11-15 |
| RIT | https://heipard.myshopify.com/products/hp-rit-280 |
| BSM (Long-Tail) | https://heipard.myshopify.com/products/hp-bsm-002 |
| OL-A S14 15 m (Hero) | https://heipard.myshopify.com/products/hp-ola-s14-15-eu |
| VIT 864L (Hero) | https://heipard.myshopify.com/products/hp-vit-864l-eu-1 |
| DCT (Hero, Gegenprobe) | https://heipard.myshopify.com/products/hp-dct-200 |

## 7. Hinweise für Leon

- **Icon-Grid wiederholt die Kaufbox** (am Abend nach Leon umgestellt, Abschnitt 8): Mit der neuen Reihenfolge stehen auf den meisten Seiten Lichtfarbe,
  Lichtpunkte, Schutzart und Stromquelle vorn; drei davon zeigt die Kaufbox schon. Dimmbar, Koppelbar und Leuchtmodi
  fallen dadurch oft heraus, bei OL-ST38 auch die Fernbedienung vom 09.11. (OL-S11 15 m vorher Dimmbar, Koppelbar,
  Leuchtmodi; jetzt Lichtfarbe, Lichtpunkte, Schutzart, Stromquelle). Umgesetzt wie vorgegeben. Wenn die
  Unterscheidungsmerkmale nach vorn sollen, ist es eine Zeile im Snippet (Reihenfolge) oder je Block das JSON-Feld
  `kacheln`.
- **Lichtpunkte** steht als bloße Zahl unter dem Label (wie in den Technischen Details), die Kachel Fernbedienung ohne
  Kurzwert.
- **Serie DGM:** Stern und Spirale bleiben zusammen (Abschnitt 3).
- **R1-Bilder:** Schritt A bringt kein einziges R1-Bild, alle 48 Familien mit R1 brauchen eins aus Schritt B. Die
  Galeriebilder taugen nicht, weil sie fast alle aus B1/B2 geschnitten sind.
- **Long-Tail und B2:** Für eine weitere Long-Tail-Familie braucht es drei Dinge: B2-Block mit Text, Block ins Set
  nach dem B1, Metafeld `feature_b2` an jedem Produkt. Ohne Metafeld bleibt das B2 aus.

## 8. Nachtrag 10.11. abends: Icon-Grid-Reihenfolge

Freigabe Leon: Unterscheidungsmerkmale zuerst. Neue feste Reihenfolge Timer, Dimmbar, Koppelbar, Leuchtmodi,
Fernbedienung, Lichtpunkte, Schutzart, Lichtfarbe, Stromquelle; weiter die ersten vier Kacheln mit Wert. Commit
`dbe55bd`, live ab 22:26:59 (Prüfsumme Live-Theme gleich main). Vorher lokal mit LiquidJS getestet (fünf Fälle),
`shopify theme check` ohne neue Meldungen. Die Zahl der Kacheln je Seite ändert sich dadurch nicht, nur Auswahl und
Abfolge; Liste 2 gilt unverändert.

Live geprüft 22:27 bis 22:28 (eine Seite alle 8 Sekunden), dazu zwei Aufnahmen des Icon-Grids 22:28 bis 22:29
(Desktop hp-ol-st38-50, Handy hp-ol-50). Vorher: Aufnahme nach Schritt 2 (18:45 bis 19:02).

| Seite | vorher | nachher |
|---|---|---|
| [hp-ol-st38-50](https://heipard.myshopify.com/products/hp-ol-st38-50) (OL-ST38, Standard) | Lichtfarbe, Lichtpunkte, Schutzart, Stromquelle | Leuchtmodi (3 Modi), Fernbedienung, Lichtpunkte (50), Schutzart (IP45) |
| [hp-dgm-002](https://heipard.myshopify.com/products/hp-dgm-002) (DGM, Standard) | Lichtfarbe, Lichtpunkte, Timer, Schutzart | Timer (6 Stunden), Lichtpunkte (70), Schutzart (IP44), Lichtfarbe (Multicolor) |
| [hp-rit-280](https://heipard.myshopify.com/products/hp-rit-280) (RIT, Standard) | Lichtfarbe, Lichtpunkte, Timer, Schutzart | Timer (8 Stunden), Lichtpunkte (280), Schutzart (IP44), Lichtfarbe (Multicolor) |
| [hp-ol-50](https://heipard.myshopify.com/products/hp-ol-50) (OL-G40, Hero, Gegenprobe) | Lichtfarbe, Lichtpunkte, Timer, Schutzart | Timer (6 / 8 Stunden), Dimmbar (4 Stufen), Koppelbar (bis zu 4 Ketten), Leuchtmodi (3 Modi) |

Alle vier Seiten 200, keine Liquid-Fehler, kein sichtbares „[TBD]“. Blockfolge, Kaufbox und Serie unverändert
gegenüber der Aufnahme nach Schritt 2. Desktop eine Reihe mit vier Kacheln, Handy 2 x 2. Die Fernbedienung vom
09.11. ist bei OL-ST38 wieder zu sehen. Bei DGM-002 und RIT-280 fehlen Dimmbar, Koppelbar, Leuchtmodi und
Fernbedienung in den Daten; dort füllen Lichtpunkte, Schutzart und Lichtfarbe auf, Schutzart und Lichtfarbe stehen
also weiter auch in der Kaufbox.

## Liste 1: R1 ohne eigenes Bild (für Schritt B)

| Familie | Dramaturgie | Grund |
|---|---|---|
| BLM | Hero | alle Galeriebilder aus B1/B2 geschnitten |
| BLT | Hero | alle Galeriebilder aus B1/B2 geschnitten |
| CTL | Hero | alle Galeriebilder aus B1/B2 geschnitten; dazu Listing-Fotos in `galerie_medien` (Abschnitt 4) |
| DCT | Hero | kein Galeriebild der Asset-Instanz |
| DFM | Hero | alle Galeriebilder aus B1/B2 geschnitten; dazu Listing-Fotos in `galerie_medien` (Abschnitt 4) |
| NPT | Hero | nur Listing-Fotos in galerie_medien |
| OL-G40 | Hero | kein Galeriebild der Asset-Instanz |
| OLAS14 | Hero | einziges Galeriebild ohne B1/B2-Herkunft (GAL_01) zeigt dieselbe Szene wie B2 (OLAS14_B2_01), eingesetzt und zurückgenommen |
| SBLB | Hero | alle Galeriebilder aus B1/B2 geschnitten |
| VIT | Hero | alle Galeriebilder aus B1/B2 geschnitten |
| BSL | Standard | alle Galeriebilder aus B1/B2 geschnitten |
| CL | Standard | alle Galeriebilder aus B1/B2 geschnitten |
| CSL | Standard | alle Galeriebilder aus B1/B2 geschnitten |
| CTL | Standard | alle Galeriebilder aus B1/B2 geschnitten; dazu Listing-Fotos in `galerie_medien` (Abschnitt 4) |
| DGM | Standard | alle Galeriebilder aus B1/B2 geschnitten |
| DLM | Standard | alle Galeriebilder aus B1/B2 geschnitten |
| DNM | Standard | alle Galeriebilder aus B1/B2 geschnitten |
| DPM | Standard | alle Galeriebilder aus B1/B2 geschnitten; dazu Listing-Fotos in `galerie_medien` (Abschnitt 4) |
| ISL | Standard | alle Galeriebilder aus B1/B2 geschnitten; dazu Listing-Fotos in `galerie_medien` (Abschnitt 4) |
| OL | Standard | kein Galeriebild der Asset-Instanz |
| OL-S11 | Standard | alle Galeriebilder aus B1/B2 geschnitten |
| OL-ST38 | Standard | alle Galeriebilder aus B1/B2 geschnitten |
| OLA-G40 | Standard | alle Galeriebilder aus B1/B2 geschnitten |
| OLG | Standard | alle Galeriebilder aus B1/B2 geschnitten |
| OLH-G40 | Standard | alle Galeriebilder aus B1/B2 geschnitten |
| OLS-A60 | Standard | alle Galeriebilder aus B1/B2 geschnitten |
| OLS-G40 | Standard | alle Galeriebilder aus B1/B2 geschnitten |
| OLS-S11 | Standard | alle Galeriebilder aus B1/B2 geschnitten |
| OLS-S17 | Standard | alle Galeriebilder aus B1/B2 geschnitten |
| OLS-ST38 | Standard | alle Galeriebilder aus B1/B2 geschnitten |
| OLT | Standard | alle Galeriebilder aus B1/B2 geschnitten |
| RCT | Standard | alle Galeriebilder aus B1/B2 geschnitten |
| RFM | Standard | alle Galeriebilder aus B1/B2 geschnitten |
| RGB | Standard | alle Galeriebilder aus B1/B2 geschnitten |
| RIT | Standard | alle Galeriebilder aus B1/B2 geschnitten |
| RNM | Standard | alle Galeriebilder aus B1/B2 geschnitten |
| RPM | Standard | alle Galeriebilder aus B1/B2 geschnitten |
| RTM | Standard | alle Galeriebilder aus B1/B2 geschnitten |
| SCWL | Standard | alle Galeriebilder aus B1/B2 geschnitten |
| SOLM | Standard | kein Galeriebild der Asset-Instanz |
| U20 | Standard | alle Galeriebilder aus B1/B2 geschnitten |
| UCP | Standard | kein Galeriebild der Asset-Instanz |
| UCT | Standard | alle Galeriebilder aus B1/B2 geschnitten; dazu Listing-Fotos in `galerie_medien` (Abschnitt 4) |
| VLM | Standard | alle Galeriebilder aus B1/B2 geschnitten |
| WWF | Standard | kein Galeriebild der Asset-Instanz |
| BSM | Long-Tail | kein Galeriebild der Asset-Instanz |
| DGM | Long-Tail | alle Galeriebilder aus B1/B2 geschnitten |
| FSF | Long-Tail | kein Galeriebild der Asset-Instanz |
| RMP | Long-Tail | alle Galeriebilder aus B1/B2 geschnitten |
| RSP | Long-Tail | alle Galeriebilder aus B1/B2 geschnitten |

50 Einträge, 48 Familien (CTL und DGM stehen je in zwei Dramaturgien).

Ohne R1 auf der Seite (dort gibt es nichts zu bebildern): BAUM-PEC, BAUM-PVC, BSX, DPT, FXF, TPM, VAM, WBF.

## Liste 2: Icon-Grid unter drei Kacheln

| Familie | Dramaturgie | Produkt | Kacheln | Grund |
|---|---|---|---|---|
| DCT | Hero | hp-dct-200 | – | kein Icon-Grid im Set |
| NPT | Hero | hp-npt-210 | – | kein Icon-Grid im Set |
| SBLB | Hero | hp-sblb-100l-ww-new | – | kein Icon-Grid im Set |
| SBLB | Hero | hp-sblb-60l-ww-new | – | kein Icon-Grid im Set |
| CL | Standard | hp-cl-1-eu | Lichtfarbe, Schutzart | nur diese zwei der neun Felder gesetzt |
| CL | Standard | hp-cl-2-eu | Lichtfarbe, Schutzart | nur diese zwei der neun Felder gesetzt |
| DPT | Standard | hp-dpt-300 | Lichtfarbe, Stromquelle | nur diese zwei der neun Felder gesetzt |
| OL | Standard | hp-ol-15-g | Lichtpunkte, Stromquelle | nur diese zwei der neun Felder gesetzt |
| VAM | Standard | hp-vam-400l-eu-1 | Lichtfarbe, Stromquelle | nur diese zwei der neun Felder gesetzt |

Mit Icon-Grid unter drei Kacheln: CL (beide), DPT, hp-ol-15-g, VAM. Long-Tail hat kein Icon-Grid.

## Liste 3: [TBD] entfernt (Nachfrageliste Shenzhen)

Im Shop war kein „[TBD]“ gespeichert, es gab nichts zu leeren. Die Kaufbox zeigte „[TBD]“ für leere Felder; diese
Kacheln sind jetzt ausgeblendet. Je Produkt das fehlende Feld (Länge: `beleuchtete_laenge_m`, `gesamtlaenge_m` oder
`hoehe_m`; Stromquelle: `stromquelle`; Lichtfarbe: Variantenoption oder `lichtfarbe`; Schutzart: `ip_schutzart`):

| Produkt | fehlt in der Kaufbox |
|---|---|
| hp-bsm-002 | Länge, Schutzart |
| hp-bsx-002 | Länge, Schutzart |
| hp-cl-1-eu | Stromquelle |
| hp-cl-2-eu | Stromquelle |
| hp-csl-300-c | Stromquelle, Lichtfarbe |
| hp-csl-300-w | Stromquelle |
| hp-ctl-210-eu-1 | Schutzart |
| hp-ctl-360-eu | Stromquelle |
| hp-ctl-400-eu-1 | Länge, Schutzart |
| hp-dct-200 | Stromquelle |
| hp-dgm-001 | Länge |
| hp-dgm-002 | Länge |
| hp-dgm-048 | Länge, Lichtfarbe, Schutzart |
| hp-dlm-100h | Lichtfarbe |
| hp-dpt-300 | Schutzart |
| hp-fsf-120 | Länge, Schutzart |
| hp-fxf-001 | Länge, Lichtfarbe, Schutzart |
| hp-ol-15-g | Lichtfarbe, Schutzart |
| hp-ola-s14-15-eu | Stromquelle |
| hp-ola-s14-30-eu | Stromquelle |
| hp-ola-s14-50-eu | Stromquelle |
| hp-olh-g40-15 | Schutzart |
| hp-olh-g40-20 | Schutzart |
| hp-olh-g40-25 | Schutzart |
| hp-olh-g40-35 | Schutzart |
| hp-olh-g40-50 | Schutzart |
| hp-ols-a60-16-eu | Schutzart |
| hp-ols-g40-16 | Schutzart |
| hp-ols-g40-25 | Schutzart |
| hp-ols-g40-35 | Schutzart |
| hp-ols-s11-16 | Schutzart |
| hp-ols-s17-16 | Schutzart |
| hp-ols-s17-16-eu | Schutzart |
| hp-ols-st38-16 | Schutzart |
| hp-rct-400 | Stromquelle |
| hp-rmp-180 | Schutzart |
| hp-rsp-180 | Schutzart |
| hp-sblb-100l-ww-new | Schutzart |
| hp-sblb-60l-ww-new | Schutzart |
| hp-scwl-10m2p-mc | Schutzart |
| hp-scwl-15m2p-mc | Schutzart |
| hp-solm-12m-ww | Schutzart |
| hp-tpm-400-eu-1 | Länge, Schutzart |
| hp-u20-200 | Schutzart |
| hp-ucp-200 | Stromquelle |
| hp-uct-200-eu | Stromquelle |
| hp-vam-400l-eu-1 | Schutzart |
| hp-vit-586l-eu-1 | Länge |
| hp-wbf-180 | Stromquelle, Schutzart |
| hp-wbf-210 | Stromquelle, Lichtfarbe, Schutzart |
| pec-150g | Stromquelle, Lichtfarbe, Schutzart |
| pvc-150g | Stromquelle, Lichtfarbe, Schutzart |

52 Produkte, 70 Kacheln: Schutzart 36, Stromquelle 16, Länge 10, Lichtfarbe 8.
