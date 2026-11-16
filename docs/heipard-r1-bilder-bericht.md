# R1-Bilder (Schritt B): Bericht

Stand 2026-11-16. Auftrag: `heipard-theme-auftrag-r1-bilder.md`, schließt an
`heipard-featuresektion-dichte-bericht.md` an. Zuordnung aus `reports/welle1_bildzuordnung.csv` der Asset-Instanz
(Spalten `R1`, `r1_id`, `r1_url`, Stand 15.11. 20:37) und der Tabelle in Abschnitt 1 des Auftrags. Vor jedem
Schreibzugriff `get-shop-info` = HeiPard. Nicht angefasst: Produktmedien, Position 1, `galerie_medien`, Files,
Produktstatus. Uhrzeiten deutsche Zeit.

## Kurzfassung

- **Live:** 39 Familien mit R1-Bild auf 87 Seiten. Gesetzt sind 38 Block-Bilder und
  87-mal das Produkt-Metafeld `feature_r1`, also an beiden Stellen wie bei B1/B2. DGM-002 hat
  das Bild nur im Metafeld, weil sein R1-Block auch auf hp-dgm-048 steht (Abschnitt 6).
- **Darstellung:** R1 zeigt eine Bild-Text-Zeile mit dem Text links und dem Bild rechts, also gegenüber von B2.
  Das konnte das Theme schon seit Schritt A. Neu ist nur der Alt-Text, der jetzt
  aus der Datei kommt (Commit `6d1dee2`).
- **Block-Limits:** unverändert. R1 mit Bild zählt wie vorher als ein Block, kein Block ist weggefallen.
- **Ohne R1-Bild:** Acht Familien haben eine R1-Datei in Files, aber keinen R1-Block im Set: BAUM-PEC, BAUM-PVC,
  BSX, DPT, FXF, TPM, VAM und WBF. In Welle 1 blieb R1 dort weg, weil Fakten für den Text fehlten. Einen R1-Text
  erfinde ich nicht, die Familien stehen in Abschnitt 2. Nachtrag: Seit dem Abend haben sie einen R1 mit
  Szenentext (Abschnitt 9). Ohne R1 bleiben außerdem die Familien, die der Auftrag
  ausnimmt, und die Welle-2-Hero-Familien ohne geliefertes Bild.
- **hp-wbf-210:** Lichtfarbe „Warmweiß“ gesetzt. Quelle ist der Faktensatz (eindeutig, Amazon-Titel). Die
  Kaufbox zeigt jetzt die Lichtfarbe.
- **Live geprüft:** alle 118 aktiven Seiten vorher und nachher, eine Seite alle 8 Sekunden, alle mit Status 200,
  ohne Liquid-Fehler und ohne „[TBD]“. Die 87 Zielseiten zeigen genau ihr R1-Bild bei sonst
  gleicher Blockfolge. Die 31 übrigen Seiten sind unverändert, darunter die Hero-Gegenprobe
  hp-dct-200.

## 1. Gesetzte R1-Bilder je Familie

| Familie | Dramaturgie | Produkte | Files-Datei | gesetzt als | Blockfolge live | R1-Bild | geprüft |
|---|---|---|---|---|---|---|---|
| OL-G40 (Welle 2) | Hero | hp-ol-30, hp-ol-50 | `OLAG40_R1_01` | Block `ol-g40-r1` + `feature_r1` (2) | B1 · B2 · R1+Bild · Steuerung · Kettenplan · Hotspot · Zeitband · Icon-Grid | rechts | 2/2 |
| BSL | Standard | hp-bsl-100-1p, hp-bsl-100-2p, hp-bsl-50-1p, hp-bsl-50-2p | `BSL_R1_01` | Block `bsl-r1` + `feature_r1` (4) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 4/4 |
| CL | Standard | hp-cl-1-eu, hp-cl-2-eu | `CL_R1_01` | Block `cl-r1` + `feature_r1` (2) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 2/2 |
| CSL | Standard | hp-csl-200-c, hp-csl-200-w, hp-csl-300-c, hp-csl-300-w | `CSL_R1_01` | Block `csl-r1` + `feature_r1` (4) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 4/4 |
| CTL | Standard | hp-ctl-180, hp-ctl-240, hp-ctl-300-eu, hp-ctl-360-eu | `CTL_R1_01` | Block `ctl-w1-r1` + `feature_r1` (4) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 4/4 |
| DGM | Standard | hp-dgm-002 | `DGM002_R1_01` | nur `feature_r1` (1) | B1 · B2 · R1+Bild · Zeitband · Icon-Grid | rechts | 1/1 |
| DLM | Standard | hp-dlm-100h | `DLM_R1_01` | Block `dlm-r1` + `feature_r1` (1) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 1/1 |
| DNM | Standard | hp-dnm-208 | `DNM_R1_01` | Block `dnm-r1` + `feature_r1` (1) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 1/1 |
| DPM | Standard | hp-dpm-300 | `DPM_R1_01` | Block `dpm-r1` + `feature_r1` (1) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 1/1 |
| ISL | Standard | hp-isl-264, hp-isl-360-eu, hp-isl-486 | `ISL_R1_01` | Block `isl-r1` + `feature_r1` (3) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 3/3 |
| OL-S11 | Standard | hp-ol-s11-15, hp-ol-s11-25, hp-ol-s11-30, hp-ol-s11-50 | `OLS11_R1_01` | Block `ol-s11-r1` + `feature_r1` (4) | B1 · R1+Bild · Kettenplan · Icon-Grid | rechts | 4/4 |
| OL-ST38 | Standard | hp-ol-st38-15, hp-ol-st38-25, hp-ol-st38-30, hp-ol-st38-50 | `OLST38_R1_01` | Block `ol-st38-r1` + `feature_r1` (4) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 4/4 |
| OL-Standard | Standard | hp-ol-100, hp-ol-15, hp-ol-15-g, hp-ol-25, hp-ol-75 | `OLAG40_R1_01` | Block `ol-r1` + `feature_r1` (5) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 5/5 |
| OLA-G40 | Standard | hp-ola-g40-15-eu, hp-ola-g40-27-eu, hp-ola-g40-42-eu | `OLAG40_R1_01` | Block `ola-g40-r1` + `feature_r1` (3) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 3/3 |
| OLG | Standard | hp-olg-100, hp-olg-200, hp-olg-200m, hp-olg-200w, hp-olg-300-eu, hp-olg-400, hp-olg-600, hp-olg-800 | `OLG_R1_01` | Block `olg-r1` + `feature_r1` (8) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 8/8 |
| OLH-G40 | Standard | hp-olh-g40-15, hp-olh-g40-20, hp-olh-g40-25, hp-olh-g40-35, hp-olh-g40-50 | `OLAG40_R1_01` | Block `olh-g40-r1` + `feature_r1` (5) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 5/5 |
| OLS-A60 | Standard | hp-ols-a60-16-eu | `OLSA60_R1_01` | Block `ols-a60-r1` + `feature_r1` (1) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 1/1 |
| OLS-G40 | Standard | hp-ols-g40-16, hp-ols-g40-25, hp-ols-g40-35 | `OLSG40_R1_01` | Block `ols-g40-r1` + `feature_r1` (3) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 3/3 |
| OLS-S11 | Standard | hp-ols-s11-16 | `OLSS11_R1_01` | Block `ols-s11-r1` + `feature_r1` (1) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 1/1 |
| OLS-S17 | Standard | hp-ols-s17-16, hp-ols-s17-16-eu | `OLSS17_R1_01` | Block `ols-s17-r1` + `feature_r1` (2) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 2/2 |
| OLS-ST38 | Standard | hp-ols-st38-16 | `OLSST38_R1_01` | Block `ols-st38-r1` + `feature_r1` (1) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 1/1 |
| OLT | Standard | hp-olt-100, hp-olt-150, hp-olt-200, hp-olt-300-eu, hp-olt-400, hp-olt-600, hp-olt-800 | `OLT_R1_01` | Block `olt-r1` + `feature_r1` (7) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 7/7 |
| RCT | Standard | hp-rct-400 | `RCT_R1_01` | Block `rct-r1` + `feature_r1` (1) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 1/1 |
| RFM | Standard | hp-rfm-600 | `RFM_R1_01` | Block `rfm-r1` + `feature_r1` (1) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 1/1 |
| RGB | Standard | hp-rgb-200a, hp-rgb-300a, hp-rgb-500a | `RGB_R1_01` | Block `rgb-r1` + `feature_r1` (3) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 3/3 |
| RIT | Standard | hp-rit-280 | `RIT_R1_01` | Block `rit-r1` + `feature_r1` (1) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 1/1 |
| RNM | Standard | hp-rnm-200 | `RNM_R1_01` | Block `rnm-r1` + `feature_r1` (1) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 1/1 |
| RPM | Standard | hp-rpm-200 | `RPM_R1_01` | Block `rpm-r1` + `feature_r1` (1) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 1/1 |
| RTM | Standard | hp-rtm-400 | `RTM_R1_01` | Block `rtm-r1` + `feature_r1` (1) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 1/1 |
| SCWL | Standard | hp-scwl-10m2p-mc, hp-scwl-15m2p-mc | `SCWL_R1_01` | Block `scwl-r1` + `feature_r1` (2) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 2/2 |
| U20 | Standard | hp-u20-200 | `U20_R1_01` | Block `u20-r1` + `feature_r1` (1) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 1/1 |
| UCP | Standard | hp-ucp-200 | `UCT_R1_01` | Block `ucp-r1` + `feature_r1` (1) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 1/1 |
| UCT | Standard | hp-uct-200-eu | `UCT_R1_01` | Block `uct-r1` + `feature_r1` (1) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 1/1 |
| VLM | Standard | hp-vlm-100l | `VLM_R1_01` | Block `vlm-r1` + `feature_r1` (1) | B1 · B2 · R1+Bild · Kettenplan · Icon-Grid | rechts | 1/1 |
| WWF | Standard | hp-wwf-180 | `WWF_R1_01` | Block `wwf-r1` + `feature_r1` (1) | B1 · B2 · R1+Bild · Icon-Grid · Kennzahl | rechts | 1/1 |
| BSM | Long-Tail | hp-bsm-002 | `BSM_R1_01` | Block `bsm-r1` + `feature_r1` (1) | B1 · R1+Bild | rechts | 1/1 |
| FSF | Long-Tail | hp-fsf-120 | `FSF_R1_01` | Block `fsf-r1` + `feature_r1` (1) | B1 · R1+Bild | rechts | 1/1 |
| RMP | Long-Tail | hp-rmp-180 | `RMP_R1_01` | Block `rmp-r1` + `feature_r1` (1) | B1 · R1+Bild · Kennzahl | rechts | 1/1 |
| RSP | Long-Tail | hp-rsp-180 | `RSP_R1_01` | Block `rsp-r1` + `feature_r1` (1) | B1 · B2 · R1+Bild · Kennzahl | rechts | 1/1 |

„gesetzt als“: Das Bild am Block im Set gilt für alle Seiten des Sets. `feature_r1` steht zusätzlich an jedem
Produkt der CSV-Zeile, so wie `feature_b1` und `feature_b2`. Das Theme nimmt zuerst das Block-Bild, sonst das
Metafeld. „geprüft“ zählt die Seiten, die live genau dieses Bild zeigen.

- **Geteilte Bilder** wie in Abschnitt 1 des Auftrags: `OLAG40_R1_01` an OL-G40 (hp-ol-30/50), OLA-G40, OLH-G40
  und OL-Standard. `UCT_R1_01` an UCT und UCP, `OLS11_R1_01` nur an OL-S11, `OLSS11_R1_01` an OLS-S11,
  `OLST38_R1_01` an OL-ST38 und `OLSST38_R1_01` an OLS-ST38. `CTL_R1_01` nur an die Welle-1-CTL (Set `ctl-w1`).
  Die Welle-2-CTL-Seiten (Sets `ctl`, `ctl-m`) sind unverändert. TPM, VAM und WBF haben keinen R1-Block
  (Abschnitt 2).
- **Mehrfarbige Familien** (RGB, RCT, RFM, RSP, RIT, RNM, RPM, RTM, DLM, DGM-002): Das R1-Bild zeigt den
  Mehrfarb-Modus. Es steht am Block wie das B1.
- **Warmweißes R1 bei kaltweißen oder bunten Varianten:** Bei hp-csl-200-c, hp-csl-300-c, hp-olg-200m und
  hp-olg-200w sowie bei SCWL, UCT/UCP und VLM gilt dieselbe Regel wie bei B1. Das Familienbild steht am Block und
  gilt für alle Seiten des Sets. Eine eigene Fassung gibt es dafür nicht.

## 2. Seiten ohne R1-Bild

| Grund | Familien (Seiten) |
|---|---|
| R1-Datei in Files, aber kein R1-Block im Set. In Welle 1 ohne R1, weil Fakten für den Text fehlten | BAUM-PEC (pec-150g), BAUM-PVC (pvc-150g), DPT (hp-dpt-300), FXF (hp-fxf-001), TPM (hp-tpm-400-eu-1), VAM (hp-vam-400l-eu-1), WBF (hp-wbf-180, hp-wbf-210) |
| wie oben. Dazu fehlt die Datei in der CSV: `BSX_R1_01` liegt laut Versionsstempel seit dem 16.11. um 15:23 in Files (66794801135949, READY, Alt gesetzt), die Bildzuordnung führt sie noch nicht | BSX (hp-bsx-002) |
| laut Auftrag ohne R1 | STT (hp-stt-050, Entwurf, nicht geprüft), SOLM (hp-solm-12m-ww), OLAS14 (3), VIT (2), hp-dgm-001, hp-dgm-048 |
| Welle-2-Hero ohne geliefertes R1-Bild, R1 bleibt Text | BLM (1), BLT (2), CTL Welle 2 (hp-ctl-180m, hp-ctl-240m, hp-ctl-210-eu-1, hp-ctl-400-eu-1), DCT (1), DFM (3), NPT (1), SBLB (2) |

Nachtrag 16.11.: Die acht Familien der ersten beiden Zeilen haben jetzt einen R1 mit Szenentext (Abschnitt 9).
Ursprünglicher Stand: Damit bei den acht Familien der ersten beiden Zeilen ein R1-Bild erscheint, braucht es einen R1-Text aus belegten
Fakten. Danach kommt ein Block `<code>-r1` mit diesem Text ins Set: hinter das B2, bei Long-Tail ohne B2 hinter
das B1. Das Bild liegt schon bereit (CSV bzw. Files), und `feature_r1` würde es ohne weiteren Theme-Code
übernehmen.

## 3. Darstellung und Block-Limits

- **Seitenwechsel:** B1 hat den Text links. B2 zeigt das Bild links und den Text rechts.
  R1 mit Bild zeigt den Text links und das Bild rechts, also gegenüber von B2. Ohne B2 (OL-S11, BSM, FSF, RMP)
  folgt R1 direkt auf B1, das Bild steht ebenfalls rechts. Auf der Hero-Seite OL-G40 folgt danach die Steuerung
  mit dem Bild links wie bisher. Live: alle 87 R1-Bilder rechts. Die Regel stammt aus Schritt A
  (`bfb0605`): Das Bild steht auf der Gegenseite der Bild-Text-Zeile davor. Am Seitenwechsel war keine
  Code-Änderung nötig.
- **Limits:** R1 zählt mit und ohne Bild als ein Block. Long-Tail zeigt höchstens vier Blöcke: RSP zeigt B1, B2,
  R1 und Kennzahl (vier). RMP zeigt B1, R1 und Kennzahl, BSM und FSF zeigen B1 und R1 (die Kennzahl hat dort
  keine Daten, wie vorher). Standard bleibt bei höchstens fünf, die Hero-Seiten OL-G40 bei acht von acht. Live
  ist die Blockfolge auf allen 87 Seiten bis auf „R1 mit Bild“ gleich geblieben. Kein Limit
  geändert.
- **Kleine Layoutfolge:** Bei Long-Tail standen der R1-Text und die Kennzahl bisher nebeneinander (RSP, RMP).
  Jetzt hat R1 eine eigene Zeile, und die Kennzahl steht allein darunter.

## 4. Alt-Texte

Die Bild-Text-Zeile nahm bisher als Alt-Text zuerst die Block-Überschrift. Für R1 kommt er jetzt aus der Datei in
Files und nur ersatzweise aus der Überschrift (`snippets/heipard-feature-block.liquid`, Commit `6d1dee2`, live
seit 15:29:02, lokal mit LiquidJS getestet, `shopify theme check` ohne neue Meldungen). B1 und B2 sind unverändert.
Live tragen alle 87 R1-Bilder den deutschen Alt-Text der Datei. Beispiel BSL: „Warmweiße HeiPard Mikro-LED-Lichterkette auf Kupferdraht, locker um den Rahmen eines runden Spiegels gewickelt.“
Die englische Fassung ist an der Datei als Übersetzung hinterlegt (Auftrag 18). Auf englischen Shop-Seiten
erscheint sie nicht, dort steht der deutsche Alt-Text (Abschnitt 9).

## 5. hp-wbf-210: Lichtfarbe

Das Metafeld `heipard.lichtfarbe` war leer. Der Faktensatz `reports/fakten/HP-WBF-210.md` führt die Lichtfarbe
„warmweiß“ mit Status eindeutig (Amazon-Titel „HeiPard Baum Warmweiß Birke Lichterbaum 210CM“). Um 15:50 ist
„Warmweiß“ gesetzt, in der Schreibweise der Auswahlliste und wie bei hp-wbf-180. Live zeigt die Kaufbox jetzt
„Lichtfarbe Warmweiß“. In der Nachfrageliste für Shenzhen (Bericht Feature-Sektion dichter, Liste 3) fehlen bei
hp-wbf-210 nur noch Stromquelle und Schutzart.

## 6. Hinweise und Abweichungen

1. **OL-Standard:** Die CSV führt dort kein R1, weil Auftrag 18 es offen ließ. Der Auftrag legt `OLAG40_R1_01`
   fest, deshalb ist es gesetzt. **hp-ol-15-g** hat es auch. Es hat denselben Titel wie hp-ol-15, dasselbe Set
   `ol` und dasselbe B1 und steht in der CSV-Zeile OL-Standard. Die Auftragstabelle nennt nur 15, 25, 75 und 100.
2. **OL-S11** steht im Auftrag als „Hero Welle 2“, im Shop ist es Standard (Set `ol-s11`, ohne B2). Die
   Dramaturgie habe ich nicht geändert.
3. **DGM-002:** Der Block `dgm-w1-r1` steckt auch im Set `dgm-w1-048` von hp-dgm-048. Ein Block-Bild käme dort mit
   an, deshalb steht `DGM002_R1_01` nur als `feature_r1` an hp-dgm-002. Der Block bleibt ohne Bild. Live zeigt
   hp-dgm-048 weiter R1 als Text.
4. **Acht Familien ohne R1-Block** (Abschnitt 2): Für das Bild fehlt der R1-Text. Ein Vorschlag wäre, die Fakten
   für einen kurzen R1-Text bei Shenzhen nachzufragen (WBF, TPM, VAM, DPT, FXF, BSX, BAUM-PEC, BAUM-PVC).
5. **FSF und BAUM-PVC:** Die Dublettenmeldung aus Auftrag 18 betrifft nur die Galeriebilder. Das R1 von FSF ist
   gesetzt, BAUM-PVC hat keinen R1-Block.

## 7. Live-Prüfung

- Vorher: alle 118 aktiven Seiten von 15:26 bis 15:43, eine Seite alle 8 Sekunden.
- Schreiben: Blöcke von 15:44 bis 15:47, Metafelder und Lichtfarbe von 15:47 bis 15:50. Nach dem ersten Paket kam
  eine Probe mit zwei Seiten. Um 15:44 kam noch die zwischengespeicherte Fassung, um 15:46 stimmte alles.
- Gegenlesung im Shop: 38 Block-Bilder gesetzt, die 15 übrigen R1-Blöcke leer. 87 Produkte haben `feature_r1`,
  alle anderen keins.
- Nachher: alle 118 Seiten von 15:51 bis 16:08, alle mit Status 200, ohne Liquid-Fehler und ohne „[TBD]“.
  87 von 87 Zielseiten haben genau ihr R1-Bild bei gleicher Blockfolge,
  31 von 31 übrigen Seiten sind unverändert. Die Kaufbox hat sich nur an
  hp-wbf-210 geändert.
- Aufnahmen von 16:09 bis 16:10 (Desktop RSP, OL-G40 Hero, OL-S11 ohne B2, CSL kaltweiß; Handy DGM-002): R1 als
  Bild-Text-Zeile mit dem Bild rechts, kein Bild doppelt.

Geprüfte Seiten (Auswahl nach Auftrag, je Dramaturgie zwei, dazu die genannten Familien und die Gegenproben):

| Dramaturgie | Familie | URL | Befund |
|---|---|---|---|
| Hero | OL-G40 | https://heipard.myshopify.com/products/hp-ol-50 | R1 mit `OLAG40_R1_01`, Bild rechts, Alt aus der Datei |
| Hero | OL-G40 | https://heipard.myshopify.com/products/hp-ol-30 | R1 mit `OLAG40_R1_01`, Bild rechts, Alt aus der Datei |
| Hero (Gegenprobe) | DCT | https://heipard.myshopify.com/products/hp-dct-200 | unverändert |
| Hero (Gegenprobe) | CTL Welle 2 | https://heipard.myshopify.com/products/hp-ctl-210-eu-1 | unverändert |
| Standard | RGB | https://heipard.myshopify.com/products/hp-rgb-300a | R1 mit `RGB_R1_01`, Bild rechts, Alt aus der Datei |
| Standard | CSL kaltweiß | https://heipard.myshopify.com/products/hp-csl-200-c | R1 mit `CSL_R1_01`, Bild rechts, Alt aus der Datei |
| Long-Tail | RSP | https://heipard.myshopify.com/products/hp-rsp-180 | R1 mit `RSP_R1_01`, Bild rechts, Alt aus der Datei |
| Long-Tail | BSM | https://heipard.myshopify.com/products/hp-bsm-002 | R1 mit `BSM_R1_01`, Bild rechts, Alt aus der Datei |
| Standard | OL-Standard | https://heipard.myshopify.com/products/hp-ol-15 | R1 mit `OLAG40_R1_01`, Bild rechts, Alt aus der Datei |
| Standard | OL-Standard | https://heipard.myshopify.com/products/hp-ol-15-g | R1 mit `OLAG40_R1_01`, Bild rechts, Alt aus der Datei |
| Standard | OLA-G40 | https://heipard.myshopify.com/products/hp-ola-g40-27-eu | R1 mit `OLAG40_R1_01`, Bild rechts, Alt aus der Datei |
| Standard | OL-S11 | https://heipard.myshopify.com/products/hp-ol-s11-30 | R1 mit `OLS11_R1_01`, Bild rechts, Alt aus der Datei |
| Standard | OLS-S11 | https://heipard.myshopify.com/products/hp-ols-s11-16 | R1 mit `OLSS11_R1_01`, Bild rechts, Alt aus der Datei |
| Standard | OL-ST38 | https://heipard.myshopify.com/products/hp-ol-st38-50 | R1 mit `OLST38_R1_01`, Bild rechts, Alt aus der Datei |
| Standard | OLS-ST38 | https://heipard.myshopify.com/products/hp-ols-st38-16 | R1 mit `OLSST38_R1_01`, Bild rechts, Alt aus der Datei |
| Standard | TPM | https://heipard.myshopify.com/products/hp-tpm-400-eu-1 | unverändert |
| Standard | VAM | https://heipard.myshopify.com/products/hp-vam-400l-eu-1 | unverändert |
| Standard | UCP | https://heipard.myshopify.com/products/hp-ucp-200 | R1 mit `UCT_R1_01`, Bild rechts, Alt aus der Datei |
| Long-Tail | WBF | https://heipard.myshopify.com/products/hp-wbf-180 | unverändert |
| Long-Tail | WBF | https://heipard.myshopify.com/products/hp-wbf-210 | unverändert; Kaufbox zeigt jetzt Lichtfarbe Warmweiß |
| Standard | DGM-002 | https://heipard.myshopify.com/products/hp-dgm-002 | R1 mit `DGM002_R1_01`, Bild rechts, Alt aus der Datei |
| Long-Tail | DGM-048 | https://heipard.myshopify.com/products/hp-dgm-048 | unverändert |
| Long-Tail | DGM-001 | https://heipard.myshopify.com/products/hp-dgm-001 | unverändert |

## 8. Rückweg

Vorher waren alle 38 Block-Bilder leer, `feature_r1` an allen 87 Produkten leer und `lichtfarbe` an hp-wbf-210
leer. Zurück ginge es so: Block-Bild per `metaobjectUpdate` leeren, `feature_r1` per `metafieldsDelete` löschen
und `6d1dee2` zurücknehmen. Die Dateien in Files bleiben davon unberührt.

## 9. Nachtrag 16.11.: R1 mit Szenentext für acht Familien

Auftrag `heipard-theme-auftrag-r1-szenentexte.md` (Freigabe Leon). Die acht Familien aus Abschnitt 2 ohne R1-Block
haben jetzt je einen R1-Block mit **Szenentext, kein Fakt**: Der Text beschreibt nur, was im Bild zu sehen ist, und
trägt keine Produkteigenschaft. Sobald Shenzhen Fakten liefert, wird nur der Text getauscht, das Bild bleibt.
Markiert ist das an drei Stellen: in der Blockbezeichnung (zum Beispiel „BSX · R1 Szenentext, kein Fakt“), in der
Set-Bezeichnung (zum Beispiel „WBF (Long-Tail) · R1 Szenentext, kein Fakt“) und hier im Bericht.

| Familie | Block (im Set) | Bild | Überschrift DE | Text DE (Szenentext, kein Fakt) | Überschrift EN | Blockfolge live (Limit) |
|---|---|---|---|---|---|---|
| BAUM-PEC | `baum-pec-r1`, hinter B1 | `BAUMPEC_R1_01` | Ungeschmückt im Esszimmer | So steht der Baum, bevor der Schmuck kommt: auf dem Holzkreuzständer neben dem langen Tisch, im Tageslicht vom Fenster. | Undecorated in the dining room | B1 · R1 · Kennzahl (3 von 4) |
| BAUM-PVC | `baum-pvc-r1`, hinter B1 | `BAUMPVC_R1_01` | Am Fuß der Treppe | Der Baum steht ungeschmückt im hellen Flur am Fuß der Holztreppe, dort, wo er beim Hereinkommen als Erstes ins Auge fällt. | At the foot of the stairs | B1 · R1 · Kennzahl (3 von 4) |
| BSX | `bsx-r1`, hinter B1 | `BSX_R1_01` | Im Bücherregal | Der Stern hängt an seinem Faden vom oberen Regalbrett in einer Leseecke, zwischen Büchern, Sessel und Stehlampe. | On the bookshelf | B1 · R1 (2 von 4) |
| DPT | `dpt-r1`, hinter B2 | `DPT_R1_01` | Auf der Dachterrasse | Die Lichterkette läuft auf ihrem transparenten Kabel am Geländer entlang und weiter über die Pergola der Dachterrasse. | On the rooftop terrace | B1 · B2 · R1 · Kettenplan · Icon-Grid (5 von 5) |
| FXF | `fxf-r1`, hinter B1 | `FXF_R1_01` | Am Rand der Terrasse | Rentier und Schlitten stehen aus Lichtschlauch geformt am Rand der verschneiten Terrasse vor einer dunklen Hecke. | At the edge of the terrace | B1 · R1 (2 von 4) |
| TPM | `tpm-r1`, hinter B2 | `CTL_R1_01` | Vom Garten aus gesehen | Durch das Wohnzimmerfenster leuchtet der Baum mit dem Lichtermantel in den verschneiten Garten hinaus. | Seen from the garden | B1 · B2 · R1 · Icon-Grid (4 von 5) |
| VAM | `vam-r1`, hinter B2 | `VLM_R1_01` | Um Stamm und Äste | Die Lichterkette ist um den Stamm und die unteren Äste eines kleinen Baums im verschneiten Vorgarten gewickelt. | Around trunk and branches | B1 · B2 · R1 · Kettenplan · Icon-Grid (5 von 5) |
| WBF | `wbf-r1`, hinter B2 | `WWF_R1_01` | Im Flur neben der Haustür | Der Birken-Lichterbaum steht im Flur neben der Haustür und einer Holzbank und leuchtet den Eingang aus. | In the hall by the front door | B1 · B2 · R1 · Kennzahl (4 von 4) |

- **Texte** wörtlich aus dem Auftrag. Gegengeprüft über die Prüfsummen im Shop: Die deutschen Texte stehen Zeichen
  für Zeichen so im Shop wie im Auftrag. Einen Kicker nennt der Auftrag nicht, die acht Blöcke haben deshalb
  keinen.
- **Englisch:** Blöcke sind übersetzbar, und Englisch ist im Shop veröffentlicht. Die EN-Texte stehen deshalb als
  Übersetzung am Block. Live auf `/en/` geprüft bei WBF und TPM, Überschrift und Text erscheinen auf Englisch.
- **Bild:** Der Auftrag nahm an, `feature_r1` sei an diesen Produkten schon gesetzt. Das war nicht so, ich hatte es
  ohne R1-Block bewusst weggelassen (Abschnitt 2). Gesetzt sind jetzt wie bei den anderen R1 das Block-Bild und
  `feature_r1` an allen neun Produkten (WBF mit zwei).
- **Darstellung** wie die anderen R1: Text links, Bild rechts. Bei DPT, TPM, VAM und WBF folgt R1 auf das B2, bei
  BAUM-PEC, BAUM-PVC, BSX und FXF auf das B1.
- **Limits:** Kein Limit greift, keins geändert. Long-Tail WBF liegt mit B1, B2, R1 und Kennzahl genau bei 4 von 4,
  DPT und VAM bei 5 von 5 (Standard).
- **Gegenproben** CTL, VLM und WWF: Blöcke, Texte, Bilder und Blockfolge unverändert. Bei CTL und VLM ist nur der
  Alt-Text des Bilds anders als um 16:08. `CTL_R1_01` und `VLM_R1_01` wurden um 16:52 in Files neu beschriftet,
  die EN-Übersetzung gleich mit. Das kam nicht von mir, vermutlich von der Asset-Instanz. Es betrifft auch TPM
  und VAM.
- **Alt-Text auf Englisch:** Auf den englischen Seiten steht beim R1-Bild der deutsche Alt-Text. Die englische
  Übersetzung ist an der Datei hinterlegt und aktuell (geprüft an `WWF_R1_01` und `CTL_R1_01`), kommt im Theme aber
  nicht an: Der Alt-Text eines Datei-Verweises erscheint auf englischen Seiten auf Deutsch. Das gilt für alle
  R1-Bilder. Eine Lösung braucht einen eigenen Auftrag.
- **BSX:** Gezeigt wird die Neufassung `BSX_R1_01` (in Files seit 16.11. um 15:23). In
  `welle1_bildzuordnung.csv` steht sie noch nicht, das trägt die Asset-Instanz nach.

Live geprüft von 17:00 bis 17:02, eine Seite alle 8 Sekunden. Alle Seiten laden mit Status 200, ohne
Liquid-Fehler und ohne „[TBD]“. Die Blockfolge ist gegenüber der Aufnahme von 16:08 nur um R1 ergänzt.
Bildschirmaufnahmen um 17:03 (Desktop hp-wbf-180, Handy hp-bsx-002): Szenentext links, Bild rechts, kein Bild
doppelt auf der Seite.

| Seite | URL | Befund |
|---|---|---|
| BAUM-PEC | https://heipard.myshopify.com/products/pec-150g | R1 mit `BAUMPEC_R1_01`, Szenentext DE, Bild rechts |
| BAUM-PVC | https://heipard.myshopify.com/products/pvc-150g | R1 mit `BAUMPVC_R1_01`, Szenentext DE, Bild rechts |
| BSX | https://heipard.myshopify.com/products/hp-bsx-002 | R1 mit `BSX_R1_01`, Szenentext DE, Bild rechts |
| DPT | https://heipard.myshopify.com/products/hp-dpt-300 | R1 mit `DPT_R1_01`, Szenentext DE, Bild rechts |
| FXF | https://heipard.myshopify.com/products/hp-fxf-001 | R1 mit `FXF_R1_01`, Szenentext DE, Bild rechts |
| TPM | https://heipard.myshopify.com/products/hp-tpm-400-eu-1 | R1 mit `CTL_R1_01`, Szenentext DE, Bild rechts |
| VAM | https://heipard.myshopify.com/products/hp-vam-400l-eu-1 | R1 mit `VLM_R1_01`, Szenentext DE, Bild rechts |
| WBF | https://heipard.myshopify.com/products/hp-wbf-180 | R1 mit `WWF_R1_01`, Szenentext DE, Bild rechts |
| WBF | https://heipard.myshopify.com/products/hp-wbf-210 | R1 mit `WWF_R1_01`, Szenentext DE, Bild rechts |
| CTL (Gegenprobe) | https://heipard.myshopify.com/products/hp-ctl-180 | unverändert (Block, Text, Bild, Blockfolge); Alt-Text der Datei um 16:52 in Files geändert |
| VLM (Gegenprobe) | https://heipard.myshopify.com/products/hp-vlm-100l | unverändert (Block, Text, Bild, Blockfolge); Alt-Text der Datei um 16:52 in Files geändert |
| WWF (Gegenprobe) | https://heipard.myshopify.com/products/hp-wwf-180 | unverändert (Block, Text, Bild, Blockfolge) |
| WBF englisch | https://heipard.myshopify.com/en/products/hp-wbf-180 | Szenentext EN, Alt-Text deutsch |
| TPM englisch | https://heipard.myshopify.com/en/products/hp-tpm-400-eu-1 | Szenentext EN, Alt-Text deutsch |

Rückweg: In den acht Sets die vorherige Blockliste und Bezeichnung wieder eintragen (Stand vorher gesichert), die
Blöcke `<code>-r1` löschen und `feature_r1` an den neun Produkten löschen.
