# Welle 1 Grundausbau: Bericht

Stand 2026-11-07, Nachtrag 2026-11-08 (Abschnitt 7: RSP, WBF und DGM-002 auf Standard, Auftrag
`heipard-theme-auftrag-longtail-standard.md`), Nachtrag 2026-11-09 (Abschnitt 8: Nachzügler-Bilder, B1-Texte,
RSP-Fernbedienung). Auftrag: `heipard-theme-auftrag-welle1-grundausbau.md`, Fassung vom 07.11. (ersetzt die
Fassungen vom 03.11. und 06.11.). Quellen im Asset-Ordner: `reports/welle1_bildzuordnung.csv` (einzige Quelle für
Bilder), `reports/auftrag_16.md`, `reports/metafelder/welle1_metafelder.csv` (1194 Zeilen),
`reports/metafelder/fragen_<FAMILIE>.md` bzw. `fragen_<FAMILIE>_welle1.md` (151 Fragen), `reports/auftrag_15.md`
Teil B, für die Blocktexte `reports/hermes/welle1_faktensatz.md`. Shop vor jedem Schreiben geprüft:
`get-shop-info` = HeiPard, heipard.myshopify.com. Nicht angefasst: Produktmedien, Position 1, `galerie_medien`,
Produktstatus, Theme-Code. Neu im Store sind zwei Metafeld-Definitionen (`feature_b1`, `feature_b2`).

Der erste Durchlauf (03.11.) hat Metafelder, Fragen, Kollektionen und Sets mit Platzhalterbildern angelegt, Leons
Entscheidungen vom selben Tag sind eingearbeitet (WWF Standard, BSM Long-Tail, BSL „Batterien nicht enthalten“).
Dieser Bericht beschreibt den Stand nach dem Durchlauf vom 07.11. mit den echten Bildern.

## Kurzfassung

- **97 Produkte, 49 Sets:** seit 08.11. 39 Standard, 10 Long-Tail (neu: eigenes Set für hp-dgm-048), 130 eigene
  Blöcke (127 am 07.11., dazu drei B2 am 08.11., davon zwei vorbereitet und in keinem Set).
- **Bilder in den Sets:** seit 09.11. zeigen 46 Sets ein echtes B1 (dazu OL-S11 und OLS-S11 mit `OLS11_B1_01`),
  kein Set zeigt mehr einen KAT-Platzhalter. STT, SOLM und hp-dgm-048 zeigen die Ersatzfläche. 36 Standard-Sets
  zeigen ein B2 (34 am 07.11., DGM-002 am 08.11., OL-ST38 am 09.11.).
- **Nachtrag 09.11.:** Nachzügler-Bilder eingesetzt (`OLS11_B1_01`, `OLST38_B2_04`, dazu aus Welle 2 `DGM_B1_01`,
  `VIT_B2_06`, `OLAS14_B2_02` in den Sticky-Blöcken), B1-Texte von DGM, DGM-002 und OL-S11 an die Motive angepasst,
  `fernbedienung` an RSP. Einzelheiten in Abschnitt 8.
- **Nachtrag 08.11.:** DGM-002 läuft jetzt als Standard mit B2 und Zeitband. RSP und WBF sind nach dem Test zurück
  auf Long-Tail, weil ihnen der Timer für das Zeitband fehlt. Bei WBF bleiben dazu Icon-Grid und R1 leer.
  Einzelheiten in Abschnitt 7.
- **Texte:** 36 Blocktexte an die echten Motive angepasst, nur aus Blatt und Faktensatz. Alle 127 bestehen die
  Textregel.
- **Metafelder:** heute 169 geschrieben (168 Bild-Metafelder an 90 Produkten, 1 Lichtfarbe). Die Blattwerte stehen
  seit dem 03.11. (350 geschrieben, 663 waren schon richtig), das Blatt ist seitdem unverändert.
- **Fragen:** 149, verknüpft an 93 Produkten (313 Verknüpfungen), unverändert seit dem 03.11.
- **Kollektionen:** alle 48 Familien haben eine, 44 jetzt mit Kollektionsbild.
- **Live geprüft:** siehe Abschnitt 6.
- **Ausstehend:** Identität hp-dgm-048; Kollektionsbilder „Serie OL-S11“ und „Serie OLS-S11“ (Abschnitt 8). Die
  Bilder vom 08.11. sind seit dem 09.11. alle eingesetzt.

## 1. Metafelder

**Blatt:** geschrieben am 03.11. alle Zeilen mit Status *eindeutig*, *bestätigt*, *Titel maßgeblich* und *Vorgabe
Leon* (*Aufdruck* kommt nicht vor), Variantenzeilen an der Variante. 1194 Zeilen ergeben 1013 Metafelder (die 278
Lieferumfang-Zeilen sind je Produkt bzw. Variante zu einem Feld zusammengefasst); 663 standen schon richtig, 350
wurden geschrieben: `lieferumfang` 103, `dramaturgie` 97, `familie` 66 (alle 97 haben einen Wert), 84 Fachwerte.
hp-stt-050 hat seine Metafelder wie alle anderen und bleibt Entwurf. Heute geprüft: `familie`, `dramaturgie`,
`feature_set` und `fragen` an allen 97 Produkten wie geplant.

**Heute geschrieben:** `lichtfarbe` = Warmweiß an hp-ols-s17-16-eu (Faktensatz: OLS-S17 „Lichtfarbe warmweiß“,
bestätigt; Wert wie am Schwesterprodukt hp-ols-s17-16). Damit kann die Asset-Instanz die Galerie dort nachholen
(Auftrag 16, offener Punkt 6).

**Zeilen des Blatts, die nicht so geschrieben sind:**

| Zeilen | Grund |
|---|---|
| 11 × `dramaturgie` = standard bei hp-bsm-002, hp-bsx-002, hp-dgm-048, hp-fsf-120, hp-fxf-001, hp-rmp-180, hp-rsp-180, hp-wbf-180, hp-wbf-210, pec-150g, pvc-150g | Auftrag: Motivleuchten, Lichterbäume und Weihnachtsbäume bekommen `longtail`. hp-wwf-180 steht nach Leons Entscheidung vom 03.11. auf `standard` (wie im Blatt), hp-bsm-002 auf `longtail`. hp-dgm-002 steht seit 08.11. auf `standard` wie im Blatt, RSP und WBF sind nach dem Test zurück auf `longtail` (Abschnitt 7). hp-ol-30/-50 (OL-G40) sind nicht im Blatt und bleiben `hero`. |
| 6 × `gesamtlaenge_m`: hp-isl-264 (HP-ISL-264 8,25 statt 11,25; HP-ISL-108M 3,38 statt 6,38; HP-ISL-264W 8,25 statt 11,25), hp-dlm-100h (HP-DLM-100H 10 statt 13; HP-DLM-200H 20 statt 23), hp-u20-200 (HP-U20-400 20 statt 23) | Auftrag: bei den Gesamtlängen-Abweichungen gilt der Shop-Wert. Der Unterschied ist jeweils die Zuleitung von 3 m. |
| `lieferumfang` der vier BSL-Produkte | Geschrieben wie im Blatt, dazu die Zeile „Batterien nicht enthalten“ (Leon 03.11., wie bei BLT). |

**Titel maßgeblich:** 41 Zeilen; 3 gehören zu den Abweichungen oben, die übrigen 38 sind gegen den Shop-Titel (32)
bzw. den Amazon-Titel der SKU (6) geprüft, alle Werte stehen dort.

## 2. Bild-Metafelder

Neu angelegt: Produkt-Metafelder `heipard.feature_b1` „Feature-Bild B1“ und `heipard.feature_b2` „Feature-Bild B2“
(Dateireferenz, nur Bilder, im Storefront lesbar). Das Theme liest sie noch nicht; sichtbar werden die Bilder über die
Blöcke der Sets (Abschnitt 5).

- **168 Werte an 90 Produkten:** 89 × B1, 79 × B2, je Produkt aus der Spalte `produkte` der Bildzuordnung.
- **Ohne Bild-Metafeld (7):** hp-ol-s11-15, -25, -30, -50 (OL-S11 nicht in Auftrag 16), hp-solm-12m-ww, hp-stt-050
  (keine Bilder), hp-dgm-048 (Identität offen).
- **Nur B2:** hp-ols-s11-16 (`OLS11_B1_01` noch nicht gesichtet). **Nur B1:** OL-ST38 und die Long-Tail-Familien
  BAUM-PEC, BAUM-PVC, BSM, BSX, FSF, FXF, RMP.
- **Kontrolle gegen die Regeln im Auftrag:** alles wie beschrieben, mit einer Ausnahme. Der Auftrag nennt
  „OLS-ST38: B1 `OLST38_B1_01`, B2 leer“, die Bildzuordnung hat das B2 bei OLS-ST38 (`OLSST38_B2_01`) und keins bei
  OL-ST38. Nach der Bildzuordnung umgesetzt, sie ist die einzige Quelle; die Liste der ausstehenden Bilder im Auftrag
  („B2 für OL-ST38“) passt dazu. Leon hat das am 08.11. bestätigt: Die Bildzuordnung war richtig, im Auftrag waren die
  beiden Familien vertauscht.
- **Annahmen der Asset-Instanz** (Auftrag 16, unbestätigt): UCP nutzt die UCT-Bilder, WBF die WWF-Bilder.

## 3. Fragen

Unverändert seit dem 03.11.: 149 Einträge *HeiPard Produktfrage* (`<familie>-frage-<n>`, für CTL und DGM
`ctl-w1-frage-<n>` und `dgm-w1-frage-<n>`), 313 Verknüpfungen an 93 Produkten, Fragen mit „Gilt für“ nur an den
genannten Produkten. Vier Antworten sind auf die genannte Variante zugeschnitten (RPM dreimal „Die 20-m-Kette …“, TPM
„In der Variante mit 400 LEDs …“), zwei Fragen ausgelassen (TPM „Wie viele LEDs hat der Baum?“ und BAUM-PVC „Wie hoch
ist der Baum?“, die Antwort gilt nur für eine Variante). Weniger als drei Fragen: WBF, TPM, VAM je 2; BAUM-PEC, DPT,
FSF, RMP je 1. Ohne Fragen: BSM, BSX, FXF, BAUM-PVC.

## 4. Familien-Kollektionen

Alle 48 Familien haben ihre Kollektion `familie-<code>` (46 am 03.11. angelegt wie in Welle 2: Titel „Serie
<CODE>“, Regel Metafeld *Familie (Code)*, Onlineshop, `seo.hidden` = 1; `familie-ctl` und `familie-dgm` aus Welle 2).

- **Kollektionsbild an 44:** das B1 der Familie aus der Bildzuordnung, Alt-Text wie in Files. Geteilte Bilder:
  OL, OLA-G40, OLH-G40 `OLG40_B1_01`; TPM `CTL_B1_01`; UCP `UCT_B1_01`; VAM `VLM_B1_01`; WBF `WWF_B1_01`.
- **Ohne Bild:** OL-S11, OLS-S11 (`OLS11_B1_01` ausstehend), STT, SOLM.
- **Geteilte Kollektionen:** `familie-ctl` enthält auch die vier Welle-2-CTL und zeigt jetzt `CTL_B1_01`;
  `familie-dgm` enthält Stern, Spiralen und Geschenkboxen und zeigt die Spiralen (`DGM002_B1_01`).
- Shopify legt das Kollektionsbild als eigene Kopie an, nicht als Verweis auf die Datei in Files. Ein späterer
  Bildtausch braucht deshalb einen neuen `collectionUpdate`.

## 5. Sets und Blöcke

**Aufbau Standard:** B1 (21:9) → B2 (16:9) → R1 → Auto Kettenplan sonst Zeitband → Auto Icon-Grid.
**Aufbau Long-Tail:** B1 → R1 → Auto Kennzahl. Daten-Zone in beiden: Serienleiter, Nachweise, Lieferumfang,
Fragen. Jedes Set hat eine Sektionsüberschrift; Bezeichnungen nach Schema „OLT · B1 Gartenbaum“.

- **Bilder:** B1 und B2 aus der Bildzuordnung. Kein B2 in der Zuordnung: B2-Block aus dem Set genommen (OL-ST38,
  OL-S11, STT, SOLM; die Blöcke bleiben für später bestehen). Kein B1: OLS-S11 mit `KAT-LED_B1_01`; OL-S11, STT und
  SOLM ohne Bild (der Block zeigt die ruhige Ersatzfläche mit Text), keine weiteren KAT-Platzhalter.
- **hp-dgm-048:** teilte das Set mit den Spiralen; mit dem Spiralen-Bild hätte die Seite der Geschenkboxen ein
  fremdes Produkt gezeigt. Neues Set `dgm-w1-048` mit Block `dgm-w1-048-b1` (gleicher Text, ohne Bild), R1 und Daten-Zone
  wie `dgm-w1`.
- **Long-Tail mit B2 in der Zuordnung:** RSP (`RSP_B2_04`), WBF (`WWF_B2_04`) und DGM-002 (`DGM002_B2_01`). Long-Tail hat
  kein B2, die Bilder standen am 07.11. nur im Metafeld `feature_b2`. Leon hat am 08.11. Standard für alle drei
  entschieden. Nach dem Test ist DGM-002 Standard, RSP und WBF sind zurück auf Long-Tail (Abschnitt 7).
- **WWF** (Standard seit 03.11.) hat zusätzlich die Kennzahl im Set, weil Kettenplan und Zeitband ohne Länge und
  Timer leer bleiben. Sichtbar sind B1, B2, R1, Icon-Grid (Schutzart IP44) und Kennzahl, genau die fünf erlaubten.
- **Textregel** (21.10.): Kicker 2 bis 3 Wörter, genau zwei Sätze, keine Gedankenstriche, keine Reizwörter, kein
  Wort ab fünf Buchstaben doppelt in Headline und Text. Alle 127 Blöcke bestehen. Ohne Zahl im Text (15, der Fakt ist
  eine Eigenschaft): OLT R1, OL R1, CL R1, BSM B1, DPT B1, SOLM R1, STT R1, TPM B2, VAM B2, FSF B1, FSF R1, FXF B1,
  RMP B1, WBF B1, BAUM-PVC B1. Kein R1 mangels weiterer Fakten: DPT, TPM, VAM, BSX, FXF, WBF, BAUM-PEC, BAUM-PVC.

| Set | Produkte | Blöcke in Reihenfolge | Fehlt |
|---|---|---|---|
| OLG (Standard) `olg` | hp-olg-100, hp-olg-200, hp-olg-200m, hp-olg-200w, hp-olg-300-eu, hp-olg-400, hp-olg-600, hp-olg-800 | B1 Baum und Zaun (`OLG_B1_01`) · B2 LED-Anzahl (`OLG_B2_01`) · R1 Leuchtmodi · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| OLT (Standard) `olt` | hp-olt-100, hp-olt-150, hp-olt-200, hp-olt-300-eu, hp-olt-400, hp-olt-600, hp-olt-800 | B1 Gartenbaum (`OLT_B1_01`) · B2 Längen (`OLT_B2_01`) · R1 Warmweiß · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| OL (Standard) `ol` | hp-ol-100, hp-ol-15, hp-ol-15-g, hp-ol-25, hp-ol-75 | B1 Fest im Freien (`OLG40_B1_01`) · B2 Längen (`OLG40_B2_01`) · R1 Netzteil · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| OLH-G40 (Standard) `olh-g40` | hp-olh-g40-15, hp-olh-g40-20, hp-olh-g40-25, hp-olh-g40-35, hp-olh-g40-50 | B1 Wintergarten und Terrasse (`OLG40_B1_01`) · B2 Längen (`OLHG40_B2_01`) · R1 2200 Kelvin · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| BSL (Standard) `bsl` | hp-bsl-100-1p, hp-bsl-100-2p, hp-bsl-50-1p, hp-bsl-50-2p | B1 Regal und Fenster (`BSL_B1_01`) · B2 LED-Anzahl (`BSL_B2_01`) · R1 Leuchtmodi · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| CSL (Standard) `csl` | hp-csl-200-c, hp-csl-200-w, hp-csl-300-c, hp-csl-300-w | B1 Fenster (`CSL_B1_01`) · B2 Timer (`CSL_B2_01`) · R1 Modi und Helligkeit · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| CTL (Welle 1, Standard) `ctl-w1` | hp-ctl-180, hp-ctl-240, hp-ctl-300-eu, hp-ctl-360-eu | B1 Tanne im Wohnzimmer (`CTL_B1_01`) · B2 2700 Kelvin (`CTL_B2_03`) · R1 Dimmstufen · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| OL-S11 (Standard) `ol-s11` | hp-ol-s11-15, hp-ol-s11-25, hp-ol-s11-30, hp-ol-s11-50 | B1 Terrasse im Regen (ohne Bild) · R1 Modi und Helligkeit · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | B1-Bild (Ersatzfläche); B2 (Block entfällt); `OLS11_B1_01` ausstehend |
| OL-ST38 (Standard) `ol-st38` | hp-ol-st38-15, hp-ol-st38-25, hp-ol-st38-30, hp-ol-st38-50 | B1 Terrasse im Regen (`OLST38_B1_01`) · R1 Kelvin · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | B2 (Block entfällt); B2 `OLST38_B2_01` nicht freigegeben |
| ISL (Standard) `isl` | hp-isl-264, hp-isl-360-eu, hp-isl-486 | B1 Dachkante (`ISL_B1_01`) · B2 Längen (`ISL_B2_01`) · R1 Lichtfarben · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| OLA-G40 (Standard) `ola-g40` | hp-ola-g40-15-eu, hp-ola-g40-27-eu, hp-ola-g40-42-eu | B1 Terrasse (`OLG40_B1_01`) · B2 Längen (`OLAG40_B2_01`) · R1 Modi und Helligkeit · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| OLS-G40 (Standard) `ols-g40` | hp-ols-g40-16, hp-ols-g40-25, hp-ols-g40-35 | B1 Balkon (`OLSG40_B1_01`) · B2 Birnenzahl (`OLSG40_B2_01`) · R1 Modi und Helligkeit · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| RGB (Standard) `rgb` | hp-rgb-200a, hp-rgb-300a, hp-rgb-500a | B1 Balkon (`RGB_B1_01`) · B2 LED-Anzahl (`RGB_B2_01`) · R1 Leuchtmodi · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| CL (Standard) `cl` | hp-cl-1-eu, hp-cl-2-eu | B1 Camping (`CL_B1_01`) · B2 3000 Kelvin (`CL_B2_01`) · R1 USB-Ladekabel · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| OLS-S17 (Standard) `ols-s17` | hp-ols-s17-16, hp-ols-s17-16-eu | B1 Gartenlaube (`OLSS17_B1_01`) · B2 Timer (`OLSS17_B2_01`) · R1 Leuchtmodi · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| SCWL (Standard) `scwl` | hp-scwl-10m2p-mc, hp-scwl-15m2p-mc | B1 Solarstrom (`SCWL_B1_01`) · B2 2er-Set (`SCWL_B2_01`) · R1 LED-Abstand · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| BSM (Long-Tail) `bsm` | hp-bsm-002 | B1 Fenster und Wand (`BSM_B1_01`) · R1 2er-Set · Auto Kennzahl | nichts |
| DLM (Standard) `dlm` | hp-dlm-100h | B1 Hauseingang (`DLM_B1_01`) · B2 Längen (`DLM_B2_01`) · R1 Modi und Helligkeit · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| DNM (Standard) `dnm` | hp-dnm-208 | B1 Vorgarten (`DNM_B1_01`) · B2 IP67 (`DNM_B2_01`) · R1 Modi und Helligkeit · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| DPM (Standard) `dpm` | hp-dpm-300 | B1 Hausfront (`DPM_B1_01`) · B2 Kabelspule (`DPM_B2_01`) · R1 Modi und Helligkeit · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| DPT (Standard) `dpt` | hp-dpt-300 | B1 Garten im Schnee (`DPT_B1_01`) · B2 Kabelrolle (`DPT_B2_01`) · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| OLS-A60 (Standard) `ols-a60` | hp-ols-a60-16-eu | B1 Dachterrasse (`OLSA60_B1_01`) · B2 Timer (`OLSA60_B2_01`) · R1 Leuchtmodi · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| OLS-S11 (Standard) `ols-s11` | hp-ols-s11-16 | B1 Fernbedienung (`KAT-LED_B1_01`) · B2 Solarpanel (`OLSS11_B2_01`) · R1 Modi und Helligkeit · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | B1 `OLS11_B1_01` ausstehend, bis dahin KAT-LED |
| OLS-ST38 (Standard) `ols-st38` | hp-ols-st38-16 | B1 Birnenzahl (`OLST38_B1_01`) · B2 Solarpanel (`OLSST38_B2_01`) · R1 Modi und Helligkeit · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| RCT (Standard) `rct` | hp-rct-400 | B1 Fenster (`RCT_B1_01`) · B2 Leuchtmodi (`RCT_B2_01`) · R1 IP44 · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| RFM (Standard) `rfm` | hp-rfm-600 | B1 Kaminsims (`RFM_B1_01`) · B2 Kamin und Baum (`RFM_B2_03`) · R1 IP44 · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| RIT (Standard) `rit` | hp-rit-280 | B1 Dachkante (`RIT_B1_01`) · B2 IP44 (`RIT_B2_01`) · R1 Timer · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| RNM (Standard) `rnm` | hp-rnm-200 | B1 Vorgarten (`RNM_B1_01`) · B2 IP44 (`RNM_B2_01`) · R1 LED-Abstand · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| RPM (Standard) `rpm` | hp-rpm-200 | B1 Terrasse (`RPM_B1_01`) · B2 Kabelrolle (`RPM_B2_01`) · R1 Leuchtmodi · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| RTM (Standard) `rtm` | hp-rtm-400 | B1 Baum im Wohnzimmer (`RTM_B1_01`) · B2 Ring am Wipfel (`RTM_B2_01`) · R1 LED-Abstand · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| SOLM (Standard) `solm` | hp-solm-12m-ww | B1 Solarstrom (ohne Bild) · R1 Wandhalterung · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | B1-Bild (Ersatzfläche); B2 (Block entfällt) |
| STT (Standard) `stt` | hp-stt-050 | B1 Fest im Freien (ohne Bild) · R1 Fernbedienung · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | B1-Bild (Ersatzfläche); B2 (Block entfällt) |
| TPM (Standard) `tpm` | hp-tpm-400-eu-1 | B1 Modi und Helligkeit (`CTL_B1_01`) · B2 Ring am Wipfel (`CTL_B2_03`) · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| U20 (Standard) `u20` | hp-u20-200 | B1 Treppe und Terrasse (`U20_B1_01`) · B2 IP68 (`U20_B2_01`) · R1 Dimmstufen · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| UCP (Standard) `ucp` | hp-ucp-200 | B1 Balkon (`UCT_B1_01`) · B2 Modi und Helligkeit (`UCT_B2_01`) · R1 Fenster · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| UCT (Standard) `uct` | hp-uct-200-eu | B1 Balkon (`UCT_B1_01`) · B2 Lichtfarben (`UCT_B2_01`) · R1 Fenster · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| VAM (Standard) `vam` | hp-vam-400l-eu-1 | B1 Hecke und Tor (`VLM_B1_01`) · B2 Lichtfarben (`VLM_B2_01`) · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| VLM (Standard) `vlm` | hp-vlm-100l | B1 Hecke und Tor (`VLM_B1_01`) · B2 Längen (`VLM_B2_01`) · R1 Leuchtmodi · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts |
| BSX (Long-Tail) `bsx` | hp-bsx-002 | B1 Adventszeit (`BSX_B1_01`) · Auto Kennzahl | nichts |
| DGM (Welle 1, hp-dgm-002, Standard) `dgm-w1`, seit 08.11. | hp-dgm-002 (Set `dgm-w1`), hp-dgm-048 (Set `dgm-w1-048`, Long-Tail, B1 ohne Bild, R1 und Kennzahl wie bisher) | B1 Timer (`DGM002_B1_01`) · B2 Beet (`DGM002_B2_01`) · R1 LED-Anzahl · Auto Zeitband · Auto Icon-Grid | nichts |
| FSF (Long-Tail) `fsf` | hp-fsf-120 | B1 Vorgarten (`FSF_B1_01`) · R1 Fernbedienung · Auto Kennzahl | nichts |
| FXF (Long-Tail) `fxf` | hp-fxf-001 | B1 Advent (`FXF_B1_01`) · Auto Kennzahl | nichts |
| RMP (Long-Tail) `rmp` | hp-rmp-180 | B1 Hof und Garten (`RMP_B1_01`) · R1 2700 Kelvin · Auto Kennzahl | nichts |
| RSP (Long-Tail) `rsp` | hp-rsp-180 | B1 Lichterkegel (`RSP_B1_01`) · R1 Leuchtmodi · Auto Kennzahl | B2 `RSP_B2_04` nur im Metafeld; Block `rsp-b2` vorbereitet, Standard-Test 08.11. ohne Zeitband (Abschnitt 7) |
| WBF (Long-Tail) `wbf` | hp-wbf-180, hp-wbf-210 | B1 Warmweiß (`WWF_B1_01`) · Auto Kennzahl | B2 `WWF_B2_04` nur im Metafeld; Block `wbf-b2` vorbereitet, Standard-Test 08.11. ohne R1, Zeitband und Icon-Grid (Abschnitt 7) |
| WWF (Standard) `wwf` | hp-wwf-180 | B1 Kamin und Hauseingang (`WWF_B1_01`) · B2 Warmweiß (`WWF_B2_04`) · R1 LED-Anzahl · Auto Kettenplan sonst Zeitband · Auto Icon-Grid · Auto Kennzahl | nichts |
| BAUM-PEC (Long-Tail) `baum-pec` | pec-150g | B1 Adventszeit (`BAUMPEC_B1_01`) · Auto Kennzahl | nichts |
| BAUM-PVC (Long-Tail) `baum-pvc` | pvc-150g | B1 Wohnzimmer (`BAUMPVC_B1_01`) · Auto Kennzahl | nichts |

### Angepasste Texte (36)

Die Texte vom 03.11. entstanden ohne Bilder. Wo die Situation im Text dem echten Motiv widersprach, steht jetzt ein
passender Text; die Fakten sind dieselben (Blatt und Faktensatz). Bei Tausch wandert der bisherige Text an den Block,
dessen Bild er beschreibt.

| Block | Kicker / Headline | Text | Grund |
|---|---|---|---|
| OLG B2 | Viele Größen / Kurz für das Geländer, lang für den Baum | Nicht jeder Platz braucht gleich viele Lichtpunkte. Die Serie reicht von 100 bis 1000 LEDs. | B2 zeigt ein Geländer, der Text sprach nur vom Baum |
| OLT B1 | Für jeden Platz / Am Baum, am Fenster oder im Garten | Um Stamm und Äste gewickelt, leuchtet die Kette draußen genauso wie drinnen. Nach IP44 ist sie gegen Spritzwasser geschützt. | B1 zeigt einen umwickelten Gartenbaum, B2 einen Pergolabalken |
| OLT B2 | Neun Längen / Für den Balken wie für den ganzen Baum | Um einen Pergolabalken reicht eine kurze Kette, ein großer Baum braucht mehr. Es gibt sie von 10 m mit 100 LEDs bis 100 m mit 1000 LEDs. | wie oben |
| BSL B2 | Zwei Größen / Die passende Menge Licht | Auf dem Nachttisch reichen wenige Lichter, am Fenster dürfen es mehr sein. Die Kette gibt es mit 50 oder 100 LEDs. | B2 zeigt einen Nachttisch statt Vitrine und Fenster |
| CTL B2 | Warmweißes Licht / Ein ruhiger Schein für den Baum | Am Heiligabend soll der Baum festlich wirken, ohne zu blenden. Die LEDs leuchten warmweiß mit 2700 Kelvin. | B2 zeigt die Baumspitze im Wohnzimmer, der Text sprach von der Tanne im Vorgarten |
| OLS-G40 B1 | Mit Solarpanel / Tagsüber laden, abends leuchten | Das Solarpanel steht in der Sonne, während die Kette am Balkongeländer hängt. Nach einem sonnigen Tag leuchtet sie bis zu 10 Stunden. | B1 zeigt ein Balkongeländer |
| RGB B1 | Drinnen und draußen / Bunt an Geländer und Tür | Zur Feier soll das Licht auffallen, ob auf dem Balkon oder im Wohnzimmer. Nach IP44 ist die Kette gegen Spritzwasser geschützt. | B1 zeigt Balkongeländer und Balkontür |
| OLS-S17 B1 | Mit Solarpanel / Das Licht holt sich die Energie selbst | Das Panel steht tagsüber in der Sonne, während die Birnen an der Gartenlaube hängen. Nach einem sonnigen Tag leuchten sie bis zu 10 Stunden. | B1 zeigt eine Gartenlaube statt Terrasse |
| SCWL B2 | Im Doppelpack / Zwei Plätze auf einmal schmücken | Am Terrassenpfosten und am Strauch soll es gleichzeitig leuchten. Die Kette kommt als 2er-Set. | B2 zeigt einen Terrassenpfosten |
| DPM B1 | Für draußen / Leuchtet an Dach und Garage | Im Winter bekommt die Hausfront Schnee und Nässe ab. Nach IP44 ist die Kette gegen Spritzwasser geschützt. | Bilder getauscht gegenüber den Texten: B1 zeigt das Haus, B2 die Spule |
| DPM B2 | Auf der Spule / Ohne Knoten wieder verstaut | Nach den Feiertagen wickelst du die Kette einfach zurück auf die Spule. Es gibt sie mit 300 LEDs auf 30 m oder 600 LEDs auf 60 m. | wie oben |
| DPT B1 | Warmweißes Licht / Ein ruhiger Schein im Winter | Im verschneiten Garten wird es früh dunkel. Die Kette leuchtet warmweiß. | Bilder getauscht gegenüber den Texten: B1 zeigt den Garten, B2 die Rolle |
| DPT B2 | Auf der Rolle / Ordentlich verstaut bis zum nächsten Fest | Nach der Saison rollst du die Kette wieder auf. Es gibt sie mit 30 m oder 60 m. | wie oben |
| OLS-A60 B1 | Mit Solarpanel / Die Sonne liefert die Energie | Tagsüber steht das Panel im Licht, abends leuchten die Birnen über der Dachterrasse. Nach einem sonnigen Tag reicht die Ladung für bis zu 10 Stunden. | B1 zeigt eine Dachterrasse |
| OLS-S11 B1 | Mit Fernbedienung / Bedienen, ohne aufzustehen | Vom Gartenstuhl aus änderst du Helligkeit und Modus. Die Fernbedienung reicht bis 25 m. | B1 ist der KAT-LED-Platzhalter (Gartentisch), B2 zeigt das Solarpanel; Texte getauscht |
| OLS-S11 B2 | Mit Solarpanel / Die Energie kommt von oben | Tagsüber lädt das Panel in der Sonne, abends geht das Licht über dem Weg an. Nach einem sonnigen Tag leuchtet die Kette bis zu 10 Stunden. | wie oben |
| OLS-ST38 B1 | Zwei Längen / Die passende Größe für deinen Tisch | Ein Bistrotisch kommt mit weniger aus als eine lange Tafel. Es gibt sie mit 16 oder 25 Birnen. | B1 zeigt einen gedeckten Tisch ohne Panel, B2 das Panel; Texte getauscht |
| OLS-ST38 B2 | Mit Solarpanel / Abends leuchtet, was tagsüber geladen hat | Das Panel steht in der Sonne, die Birnen hängen über der Terrasse. Nach einem sonnigen Tag reicht die Ladung für bis zu 10 Stunden. | wie oben |
| RFM B1 | Dicht gesetzt / Ein Lichtband statt einzelner Punkte | Über dem Kaminsims wirkt die Kette wie ein durchgehender Streifen. Die LEDs sitzen im Abstand von nur 1,5 cm. | Bilder zeigen Kamin und Weihnachtsbaum, der Text sprach von Geländer und Hausfassade |
| RFM B2 | Lange Kette / Genug Farbe für das ganze Zimmer | Zu Weihnachten soll es am Kamin und am Baum bunt leuchten. Auf 9 m verteilen sich 600 LEDs. | wie oben |
| RPM B1 | Für draußen / Hält auch Regen aus | Über der Terrasse hängt die Kette auch, wenn ein Schauer kommt. Die 20-m-Kette ist nach IP67 staubdicht und gegen zeitweiliges Untertauchen geschützt. | Bilder getauscht gegenüber den Texten: B1 zeigt die Terrasse, B2 die Rolle |
| RPM B2 | Auf der Rolle / Nach dem Fest schnell wieder verstaut | Wenn die Saison vorbei ist, rollst du die Kette auf. Die 20-m-Kette hat 200 LEDs. | wie oben |
| RTM B1 | Für den Weihnachtsbaum / Von der Spitze bis zum Boden | Im Wohnzimmer fallen die bunten Stränge gleichmäßig über die Äste. Auf ihnen sitzen 400 LEDs. | B2 zeigt den Ring an der Spitze, der Text sprach von der Tanne vor dem Haus |
| RTM B2 | Mit Ring / Aufsetzen statt lange wickeln | Beim Schmücken soll es schnell gehen. Der Ring kommt auf den Wipfel, die Kette ist 2 m lang. | wie oben |
| TPM B1 | Helligkeit und Modi / Am Heiligabend hell, später gedämpft | Nicht jeder Abend braucht volles Licht am Baum. In der Variante mit 400 LEDs dimmst du in vier Stufen und wählst zwischen 8 Leuchtmodi. | B2 (CTL-Bild) zeigt den Ring; Texte von B1 und B2 getauscht |
| TPM B2 | Mit Ring / Gleichmäßig verteilt, ohne langes Wickeln | Beim Schmücken legst du den Ring auf die Baumspitze und lässt die Stränge über die Äste fallen. Das Licht ist warmweiß. | wie oben |
| U20 B1 | Zwei Längen / Für Treppe und Terrasse | Ein paar Stufen brauchen weniger Schlauch als eine lange Kante. Es gibt ihn mit 200 LEDs auf 10 m oder 400 LEDs auf 20 m, dazu 3 m Zuleitung. | B1 zeigt Treppe und Terrassenkante, B2 den Schlauch auf nassem Stein; Texte getauscht |
| U20 B2 | Im Schlauch / Sicher verpackt in einer festen Hülle | Direkt am Boden bekommt das Licht Regen und Schmutz ab. Nach IP68 ist der Schlauch gegen dauerhaftes Untertauchen geschützt. | wie oben |
| UCP B1 | Gegen Spritzwasser / Auch draußen gut aufgehoben | Auf dem überdachten Balkon bekommt der Vorhang auch mal Feuchtigkeit ab. Nach IP44 ist er gegen Spritzwasser geschützt. | B1 (UCT-Bild) zeigt einen überdachten Balkon; Texte von B1 und R1 neu verteilt |
| UCP R1 | Am Fenster / Abends ein Blickfang im Wohnzimmer | Vor dem Fenster fallen die Lichtstränge senkrecht nach unten. Der Vorhang misst 3 x 2 m mit 200 LEDs. | wie oben |
| UCT B1 | Drinnen und draußen / Er darf auch vor die Tür | Unter dem Vordach bekommt der Vorhang Regen von der Seite ab. Nach IP44 ist er gegen Spritzwasser geschützt. | B1 zeigt einen überdachten Balkon; Texte von B1 und R1 getauscht |
| UCT R1 | Am Fenster / Eine leere Scheibe wird zum Blickfang | Abends fallen die Lichtstränge vor dem Fenster senkrecht nach unten. Der Vorhang misst 3 x 2 m mit 200 LEDs. | wie oben |
| VAM B1 | Für draußen / Lang genug für Hecke und Tor | Rund um den Garten braucht es viele Meter. Die Kette ist 40 m lang. | B1 (VLM-Bild) zeigt Hecke und Gartentor statt Hausfront |
| VLM B1 | Drinnen und draußen / Vom Gartentor bis zum Weihnachtsbaum | Die Kette hängt an der Hecke genauso wie am Baum im Wohnzimmer. Nach IP44 ist sie gegen Spritzwasser geschützt. | B1 zeigt Hecke und Gartentor |
| WWF B2 | Warmweißes Licht / Sanftes Licht für dunkle Abende | Vor der Gardine soll die Krone schimmern und nicht blenden. Die Birke leuchtet warmweiß, den Strom liefert ein Netzteil mit 3 m Zuleitung. | B2 ist jetzt die Krone vor der Gardine (WWF_B2_04), ohne Weihnachtsbaum |
| BAUM-PVC B1 | Für draußen / Auch vor der Haustür ein Blickfang | Der Baum steht im Wohnzimmer genauso gut wie vor dem Eingang. Er ist für den Außenbereich gedacht. | B1 zeigt den Baum drinnen neben einem Steinofen |

## 6. Live-Prüfung

Am 2026-11-07 gegen 4 Uhr alle 97 Seiten mit Shop-Passwort geladen und gegen den Plan geprüft (Skript im
Scratchpad, `live/check3.py`). curl bekam nach der ersten Seite eine Cloudflare-Abfrage (429, „challenge“); die
Seiten sind deshalb über Edge (puppeteer-core) geladen.

- 96 Seiten 200, hp-stt-050 404 (Entwurf). Keine Liquid- oder Übersetzungsfehler.
- Bei allen 96 stimmen Sektionsüberschrift, Kicker, Headline und Text jedes Blocks.
- B1: das Bild aus der Bildzuordnung bzw. bei OLS-S11 `KAT-LED_B1_01`; OL-S11 (4 Seiten), SOLM und hp-dgm-048 zeigen
  die Ersatzfläche.
- B2: das Bild aus der Bildzuordnung; bei OL-ST38, OL-S11 und SOLM kein B2-Block, die Long-Tail-Seiten ohne B2.
- Fragen in der geplanten Reihenfolge, Daten-Zone wie unter „Theme-Editor-Hinweise“ beschrieben.
- Kollektionen: alle 44 Bilder in voller Größe (2800 x 1200) angelegt; die Kollektionen sind ausgeblendet und hier
  nicht im Storefront geprüft.


## 7. Nachtrag 08.11.: RSP, WBF und DGM-002 auf Standard

Auftrag `heipard-theme-auftrag-longtail-standard.md` (Stand 07.11., Freigabe Leon): Die drei Familien mit
freigegebenem B2 wechseln auf Standard. Set B1, B2, R1, D3 Zeitband (nicht Kettenplan), B4 Icon-Grid, dazu die
Daten-Zone. Rückweg als Test: Bleibt ein Block ohne Fakten, geht die Familie zurück auf `longtail`. Am 08.11.
zwischen 2:50 und 3:05 Uhr umgesetzt. Vor jedem Schreiben `get-shop-info` = HeiPard. Nicht angefasst: Produktmedien,
Position 1, `galerie_medien`, Produktstatus, Theme-Code. hp-dgm-048 bleibt Long-Tail ohne Bild.

**Ablauf**

1. Drei B2-Blöcke angelegt (Texte unten).
2. Sets `rsp`, `wbf` und `dgm-w1` auf den Standard-Aufbau gestellt. `dramaturgie` = standard an hp-rsp-180,
   hp-wbf-180, hp-wbf-210 und hp-dgm-002. Als D3 dient der vorhandene Block `auto-zeitband` (nur Zeitband, Variante
   auto, bei Netzbetrieb Timer), nicht `auto-kettenplan-sonst-zeitband`.
3. Live-Prüfung über Edge, eine Seite alle 8 Sekunden, dazu hp-wwf-180 zum Vergleich.
4. RSP und WBF zurückgestellt: `dramaturgie` = longtail, Bezeichnung und Blockliste der Sets wie vor dem Test. Die drei
   Seiten danach noch einmal geladen, sie zeigen dieselben Blöcke wie am 07.11.
5. Zwei Texte nach dem Abgleich mit dem Faktensatz korrigiert (siehe unten), DGM-002 danach noch einmal live geprüft.

**Ergebnis je Familie**

| Familie | Set | Blöcke im Test | Live mit Standard | Leer geblieben | Ergebnis |
|---|---|---|---|---|---|
| DGM-002 | `dgm-w1` „DGM (Welle 1, hp-dgm-002, Standard)“ | B1 Timer (`DGM002_B1_01`) · B2 Beet (`DGM002_B2_01`) · R1 LED-Anzahl · Auto Zeitband · Auto Icon-Grid | B1, B2, R1, Zeitband (6 h an), Icon-Grid mit Timer 6 h und Schutzart IP44; Daten-Zone mit Lieferumfang, Nachweisen, Fragen, Serienleiter | nichts | bleibt Standard |
| RSP | `rsp` „RSP (Long-Tail)“ | B1 Lichterkegel (`RSP_B1_01`) · B2 Veranda (`RSP_B2_04`) · R1 Leuchtmodi · Auto Zeitband · Auto Icon-Grid | B1, B2, R1, Icon-Grid mit nur einer Kachel (82 Leuchtmodi); Daten-Zone mit Lieferumfang, Fragen, Serienleiter | D3 Zeitband (kein `timer_dauer_h`, auch nicht an den Varianten) | zurück auf Long-Tail |
| WBF | `wbf` „WBF (Long-Tail)“ | B1 Warmweiß (`WWF_B1_01`) · B2 Wohnzimmer (`WWF_B2_04`) · Auto Zeitband · Auto Icon-Grid | B1, B2; Daten-Zone mit Lieferumfang, Fragen, Serienleiter | R1 (kein Fakt für beide Größen, 128 LEDs gelten nur für 1,8 m), D3 Zeitband (kein Timer), B4 Icon-Grid (weder Timer noch Dimmstufen, Koppeln, Modi, Fernbedienung oder Schutzart) | zurück auf Long-Tail |

Nach dem Rückweg zeigen RSP und WBF wieder B1, R1 (nur RSP) und Kennzahl wie am 07.11. Das B2 steht dort weiter nur
im Metafeld `feature_b2`. Die Nachweise fehlen bei RSP und WBF wie schon am 07.11. (kein `ip_schutzart`,
`spannung_v`, `ce_kennzeichnung`).

**Neue B2-Blöcke** (Textregel vom 21.10. geprüft)

| Block | Kicker / Headline | Text | Fakt |
|---|---|---|---|
| `dgm-w1-b2` „DGM · B2 Beet“, im Set | Für das Beet / Spiralen zwischen den Pflanzen | Mit dem Stecker kommt die Deko direkt in die Erde, neben Sträucher und Steine. Nach IP44 ist sie gegen Spritzwasser geschützt. | Blatt: Lieferumfang „LED-Gartenstecker“, IP44 |
| `rsp-b2` „RSP · B2 Veranda“, vorbereitet | Lange Zuleitung / Frei vor der Veranda | Der Kegel muss nicht direkt an der Hauswand stehen, um Strom zu bekommen. Die Zuleitung ist 5 m lang. | Blatt: Zuleitung 5 m; Faktensatz: Netzteil |
| `wbf-b2` „WBF · B2 Wohnzimmer“, vorbereitet | Im Wohnzimmer / Ein ruhiger Schein vor der Gardine | Am Abend soll die Krone den Raum sanft erhellen und nicht blenden. Die LEDs leuchten warmweiß. | Faktensatz: Lichtfarbe warmweiß (der einzige Fakt für beide Größen, steht auch im B1) |

Die Motive: `DGM002_B2_01` zeigt Spiralen im Beet bei Dämmerung, eine davon scharf im Vordergrund. `RSP_B2_04`
zeigt den Kegel vor der verschneiten Veranda mit Kranz und Geländer, `WWF_B2_04` die Krone der Birke vor der Gardine
(wie bei WWF).

**Korrektur nach dem Test:** Zwei Testtexte stützten sich auf Shop-Werte, die weder im Blatt noch im Faktensatz
stehen. Bei WBF waren das die Höhen 1,8 und 2,1 m, die nur aus den Produkttiteln kommen; der Faktensatz markiert
die Größe sogar als auffällig, weil das Bild kleine Bäume auf einem Kaminsims zeigt. Bei DGM-002 stand „Bunte“ in der
Headline, die Lichtfarbe ist dort aber nicht belegt. Beide Texte sind korrigiert. Sichtbar war der alte WBF-Text nur
während des Tests (wenige Minuten, Shop mit Passwort).

**Hinweise**

- `rsp-b2` und `wbf-b2` bleiben angelegt, gehören aber zu keinem Set. Kommt ein Timer-Wert für RSP oder WBF (mit der
  Antwort von Tyler), reicht ein neuer Durchlauf: B2 ins Set, `auto-zeitband` und `auto-icon-grid` anhängen,
  `dramaturgie` auf standard. WBF braucht zusätzlich einen Fakt für ein R1, der für beide Größen gilt.
- RSP: Für den Einsatzort gibt es weder im Blatt noch im Faktensatz eine Angabe. Der B2-Text beschreibt nur den
  Platz im Bild und nennt keine Schutzart. Die Fernbedienung steht im Lieferumfang, das Metafeld `fernbedienung` ist
  nicht gesetzt (keine Zeile im Blatt). Mit diesem Feld hätte das Icon-Grid eine zweite Kachel.
- DGM-002: Der B1-Text spricht vom Timer, jetzt zeigen ihn auch das Zeitband und eine Icon-Grid-Kachel. B1 ist
  unverändert, weil der Auftrag nur den B2-Text nennt. Wenn die Wiederholung stört, könnte B1 das Motiv aufnehmen
  (drei Stecker am verschneiten Weg). Der Faktensatz merkt an, dass die Bilder eine Batteriebox zeigen, der Shop aber
  Netz führt. Das Zeitband ist davon nicht betroffen, es zeigt den Timer in beiden Fällen.
- hp-dgm-048 unverändert: eigenes Set `dgm-w1-048`, Long-Tail, B1 ohne Bild. Das R1 `dgm-w1-r1` gehört weiter zu beiden
  Sets.

**Produkt-URLs** (Shop mit Passwort)

| Familie | URL | Stand |
|---|---|---|
| DGM | https://heipard.myshopify.com/products/hp-dgm-002 | Standard |
| RSP | https://heipard.myshopify.com/products/hp-rsp-180 | Long-Tail, Variante 1,8 m (live geprüft) |
| RSP | https://heipard.myshopify.com/products/hp-rsp-180?variant=54933464580429 | Long-Tail, Variante 2,5 m (gleiches Set, ohne Timer-Wert, im Admin gelesen) |
| WBF | https://heipard.myshopify.com/products/hp-wbf-180 | Long-Tail |
| WBF | https://heipard.myshopify.com/products/hp-wbf-210 | Long-Tail |

## 8. Nachtrag 09.11.: Nachzügler-Bilder, B1-Texte, RSP-Fernbedienung

Leons Nachricht vom 09.11.: DGM-002 bleibt Standard, RSP und WBF bleiben Long-Tail, bis Tyler Timer-Werte liefert.
Dazu Nachträge nur an Blöcken und Bild-Metafeldern. Bilder aus `reports/welle1_bildzuordnung.csv` (Stand Auftrag 17)
bzw. aus dem nächsten Asset-Bericht. Fakten nur aus Blatt und Faktensatz, bei den Welle-2-Produkten aus den
Welle-2-Fakten (Titel und subtitle vom 22.10.). Vor jedem Schreiben `get-shop-info` = HeiPard. Nicht angefasst:
Produktmedien, Position 1, `galerie_medien`, Produktstatus, Theme-Code. Live geprüft über Edge, eine Seite alle
8 Sekunden, vorher und nachher, dazu Element-Screenshots der neuen Bilder.

**Geschrieben am 09.11. zwischen 20:35 und 20:45 Uhr**

| Was | Vorher | Nachher |
|---|---|---|
| Block `dgm-b1` (Set `dgm`, hp-dgm-001, Welle 2) | Kategoriebild `KAT-MOTIF_B1_01`, Text „verschneiter Vorgarten“ | Bild `DGM_B1_01`, Text zum Kiesweg in der Dämmerung |
| Block `dgm-w1-b1` (Set `dgm-w1`, hp-dgm-002) | Text zum Timer | Text zum Motiv, Weg im Schnee, ohne Timer; Bild `DGM002_B1_01` unverändert |
| Block `ol-s11-b1` (Set `ol-s11`) | ohne Bild, Text „Terrasse im Regen“ | Bild `OLS11_B1_01`, Text zum Bistro-Balkon am Abend |
| Set `ols-s11` (hp-ols-s11-16) | B1 `ols-s11-b1` mit Platzhalter `KAT-LED_B1_01` | B1 `ol-s11-b1`, derselbe Block wie bei OL-S11; `ols-s11-b1` bleibt angelegt, steht in keinem Set |
| Block `vit-sticky` | ohne Bild, in keinem Set | Bild `VIT_B2_06`, Bezeichnung „VIT · B2 Sticky Dachkante“, Text unverändert |
| Sets `vit-586l`, `vit-864l` | ohne Sticky | Sticky nach dem Kettenplan, vor dem Hotspot (wie bei DCT und NPT) |
| `feature_b1` an hp-ol-s11-15, -25, -30, -50 und hp-ols-s11-16 | leer | `OLS11_B1_01` |
| `feature_b1` an hp-dgm-001 | leer | `DGM_B1_01` (Zeile „DGM-001 (Welle 2)“ der Bildzuordnung) |
| `fernbedienung` an hp-rsp-180 | leer | true (Blatt: Lieferumfang „1 × Fernbedienung“) |

**Neue Texte** (Textregel vom 21.10. per Skript geprüft)

| Block | Kicker / Headline | Text | Fakt |
|---|---|---|---|
| `dgm-b1` „DGM · B1 Kiesweg in der Dämmerung“ | Am Kiesweg / Wenn es dämmert, zeigen Sterne den Weg | Zwischen Kies und Beet stecken die Figuren in einer Reihe bis zum Haus. Der Gartenstecker hat 120 LEDs und leuchtet warmweiß. | Welle-2-Fakten hp-dgm-001: 120 LEDs, warmweiß. Keine Stückzahl und keine Stromquelle (Leon 22.10.) |
| `dgm-w1-b1` „DGM · B1 Weg im Schnee“ | Im Winter / Ein heller Weg durch den Schnee | Am Abend stehen die Stecker links und rechts vom Weg und führen bis zur Haustür. Sie sind für den Einsatz im Freien gedacht. | Faktensatz: Einsatz Außen (HP-DGM-002). Kein Timer, keine Stückzahl, keine Lichtfarbe |
| `ol-s11-b1` „OL-S11 · B1 Bistro-Balkon (auch OLS-S11)“ | Auf dem Balkon / Ein Abend am kleinen Bistrotisch | Von der Ziegelwand aus spannt sich die Kette quer über Tisch und Stühle. Du steuerst sie mit der Fernbedienung, ohne aufzustehen. | Blatt: Fernbedienung im Lieferumfang aller vier OL-S11 und von OLS-S11. Ohne Reichweite und Kelvin, beides ist bei den zwei Familien verschieden |

Der B1-Text von OL-S11 gilt jetzt für beide Familien. Er nennt deshalb nichts, was nur eine hat (IP45, Netzteil,
Solar, 2200 oder 2700 K, 25 oder 30 m Reichweite).

**Live nachher** (20:41 Uhr, keine Liquid-Fehler, alle neuen Texte wörtlich gefunden)

| Seite | Blöcke | Neue Bilder |
|---|---|---|
| hp-dgm-001 | B1, R1, Kennzahl (Long-Tail) | `DGM_B1_01` statt `KAT-MOTIF_B1_01` |
| hp-dgm-002 | B1, B2, R1, Zeitband, Icon-Grid (Timer, Schutzart) | B1-Text neu, Bild unverändert |
| hp-ol-s11-15 | B1, R1, Kettenplan, Icon-Grid (Dimmbar, Koppelbar, Leuchtmodi) | `OLS11_B1_01` (vorher Ersatzfläche) |
| hp-ols-s11-16 | B1, B2, R1, Kettenplan, Icon-Grid (Dimmbar, Leuchtmodi, Fernbedienung) | `OLS11_B1_01` statt `KAT-LED_B1_01` |
| hp-vit-586l-eu-1 | B1, B2, R1, Schieber, **Sticky**, Hotspot, Icon-Grid (7 von 8) | `VIT_B2_06` |
| hp-vit-864l-eu-1 | B1, B2, R1, Schieber, Kettenplan, **Sticky**, Hotspot, Icon-Grid (8 von 8) | `VIT_B2_06` |
| hp-rsp-180 | B1, R1, Kennzahl (Long-Tail) | Technische Details zeigen jetzt „Fernbedienung Ja“ |

Auf den Screenshots ist der Text über den drei B1-Bildern gut lesbar, das Sticky-Bild steht bei VIT rechts neben
den drei Punkten.

**Nach dem Asset-Bericht: OL-ST38 B2 und OL-A S14 Sticky** (geschrieben 20:52 Uhr)

Leon hatte für OL-ST38 die Files-ID aus der CSV nach dem nächsten Asset-Bericht vorgegeben. Die Asset-Instanz hat
um 20:48 Uhr die Bildzuordnung und um 20:51 Uhr ihren Bericht fortgeschrieben (`reports/auftrag_17.md`, Abschnitt
10). `OLST38_B2_04` ist dort die zweite Fassung (ein Filament, Fassung mit Hakenclip wie am Produkt), ersetzt unter
derselben ID 66521425019213. `OLAS14_B2_02` ist die zweite Fassung mit geradem Filament, neu in Files
(66599586824525), laut Asset-Bericht auf Leons Wort verarbeitet.

| Was | Vorher | Nachher |
|---|---|---|
| Block `ol-st38-b2` | ohne Bild, in keinem Set | Bild `OLST38_B2_04`; erster Satz ans Motiv angepasst (siehe unten), Fakt unverändert |
| Set `ol-st38` | B1, R1, Auto Kettenplan sonst Zeitband, Auto Icon-Grid | B2 nach dem B1 wieder im Set |
| `feature_b2` an hp-ol-st38-15, -25, -30, -50 | leer | `OLST38_B2_04` |
| Block `olas14-sticky` | ohne Bild, in keinem Set | Bild `OLAS14_B2_02`, Bezeichnung „OLAS14 · B2 Sticky Pergola“, Text unverändert |
| Set `olas14` | ohne Sticky | Sticky nach dem Kettenplan, vor dem Hotspot |

Text `ol-st38-b2` (Drei Leuchtmodi / Für jede Stimmung des Abends): vorher „Beim Essen soll das Licht still stehen,
zur Party darf es lebendig sein. Du wählst zwischen 3 Leuchtmodi.“, jetzt „In der Dämmerung bestimmst du selbst, wie
die Birnen im Garten leuchten. Du wählst zwischen 3 Leuchtmodi.“ Das Bild zeigt zwei Birnen vor einer Hecke in der
Dämmerung, kein Essen und keine Party. Fakt: Faktensatz, 3 Leuchtmodi für alle vier. Textregel geprüft.

| Seite | Blöcke live (20:52 Uhr) | Neue Bilder |
|---|---|---|
| hp-ol-st38-15 | B1, **B2**, R1, Kettenplan, Icon-Grid (Dimmbar, Koppelbar, Leuchtmodi), 5 von 5 | `OLST38_B2_04` |
| hp-ol-st38-50 | B1, **B2**, R1, Kettenplan, Icon-Grid (Leuchtmodi, Schutzart), 5 von 5 | `OLST38_B2_04` |
| hp-ola-s14-15-eu, -30-eu | B1, B2, R1, Steuerung, Kettenplan, **Sticky**, Hotspot, Icon-Grid, 8 von 8 | `OLAS14_B2_02` |
| hp-ola-s14-50-eu | wie oben, Icon-Grid mit Dimmbar, Leuchtmodi, Fernbedienung | `OLAS14_B2_02` |

Keine Liquid-Fehler, Texte wörtlich gefunden, Screenshots von B2 und Sticky in Ordnung.

**Hinweise**

- **OLAS14_B2_02 weicht weiter vom Produkt ab** (Asset-Bericht 17, Abschnitt 10.3): Die Fassungen hängen an kurzen
  Schnüren unter einem Clip, die Birnen haben unten eine Spitze. Das Produkt hat die Fassung mit Hakenclip direkt am
  Kabel und runde S14-Tropfen. Eingesetzt, weil Leon die Sticky-Blöcke so vorgegeben hat und das Bild freigegeben
  ist. Zurücknehmen geht in einem Schritt: `olas14-sticky` aus dem Set `olas14` nehmen.
- **OLAS14, doppelte Aussage:** Der Sticky-Punkt „Fernbedienung | Sie reicht bis 25 m, alternativ steuerst du per
  App.“ sagt fast wörtlich dasselbe wie das R1 „Du schaltest vom Liegestuhl aus“. Beide Texte stammen aus Welle 2,
  nicht geändert.
- **Am Block-Limit:** OL-ST38 (5 von 5, Standard), OL-A S14 und VIT 864L (8 von 8, Hero). Ein weiterer Block würde
  dort das Icon-Grid verdrängen.

- **DGM-002, Timer:** Im B1 steht der Timer nicht mehr. In der Feature-Sektion steht er aber weiter dreimal: in der
  Set-Überschrift „Licht mit eingebautem Timer“ (Set `dgm-w1`, Feld `heading`), im Zeitband und in der Icon-Kachel.
  Die Überschrift gehört zum Set, nicht zu einem Block, deshalb unverändert. Ein Vorschlag zum Motiv wäre
  „Lichtspiralen für Weg und Beet“.
- **DGM-002, Lichtfarbe:** Die Technischen Details zeigen „Multicolor“ aus dem Shop-Metafeld. Blatt und Faktensatz
  bestätigen keine Lichtfarbe, die Blocktexte nennen keine.
- **DGM_B1_01:** Im Bild sind sechs Sterne, der Alt-Text sagt „Fünf“ (Asset-Bericht 17, offener Punkt 3). Der
  Blocktext nennt keine Zahl.
- **RSP:** Das Icon-Grid gehört nicht zum Long-Tail-Set. Die zweite Kachel (Fernbedienung neben 82 Leuchtmodi)
  erscheint erst, wenn RSP auf Standard geht. Live sichtbar ist das Feld jetzt in den Technischen Details.
- **Gleiche Lücke wie bei RSP, nicht geändert:** Die Fernbedienung steht im Blatt im Lieferumfang, das Metafeld
  `fernbedienung` ist leer bei hp-ol-st38-25, -30, -50, hp-ol-s11-50 und hp-dgm-002. Bei hp-dgm-002 zeigen die Bilder
  laut Faktensatz eine Batteriebox mit Schalter, die Fernbedienung ist dort also fraglich.
- **Kollektionsbilder:** „Serie OL-S11“ und „Serie OLS-S11“ haben noch kein Bild. Nach der Regel aus diesem Bericht
  bekäme jede ein B1 (`OLS11_B1_01`). Nicht gesetzt, weil der Nachtrag nur Blöcke und Bild-Metafelder umfasst.
- **VIT:** `feature_b2` bleibt leer. `VIT_B2_06` ist das Bild des zweiten B2 (Sticky), nicht des Blocks `vit-b2`
  (`VIT_B2_01`). Die Welle-2-Produkte tragen sonst keine Bild-Metafelder; hp-dgm-001 hat jetzt `feature_b1`, weil die
  Bildzuordnung es so führt. Ebenso ohne `feature_b2` bleibt OL-A S14 (`OLAS14_B2_02` ist dort das Sticky-Bild). Der
  Punkt „Spritzwasser“ im VIT-Sticky und die Kachel „Schutzart“ nennen beide IP44.
- **OLS-S11:** Die Fernbedienung steht jetzt im B1 und als Icon-Kachel, wie schon vorher mit dem alten B1.

**Produkt-URLs** (Shop mit Passwort, alle am 09.11. live geprüft)

| Familie | URL |
|---|---|
| DGM (Welle 2) | https://heipard.myshopify.com/products/hp-dgm-001 |
| DGM-002 | https://heipard.myshopify.com/products/hp-dgm-002 |
| OL-S11 | https://heipard.myshopify.com/products/hp-ol-s11-15 |
| OLS-S11 | https://heipard.myshopify.com/products/hp-ols-s11-16 |
| OL-ST38 | https://heipard.myshopify.com/products/hp-ol-st38-15 |
| OL-ST38 | https://heipard.myshopify.com/products/hp-ol-st38-50 |
| VIT 586L | https://heipard.myshopify.com/products/hp-vit-586l-eu-1 |
| VIT 864L | https://heipard.myshopify.com/products/hp-vit-864l-eu-1 |
| OL-A S14 | https://heipard.myshopify.com/products/hp-ola-s14-15-eu |
| RSP | https://heipard.myshopify.com/products/hp-rsp-180 |

## Theme-Editor-Hinweise

Diese Hinweise zeigt der Theme-Editor über der Sektion, Kunden sehen sie nicht. Sie entstehen aus fehlenden
Metafeldern, die Quellen geben die Werte nicht her.

- **Kettenplan sonst Zeitband** nicht angezeigt (weder Länge noch Timer): hp-tpm-400-eu-1, hp-wwf-180.
- **Icon-Grid** nicht angezeigt (kein `timer_dauer_h`, `dimmstufen`, `koppelbar_bis`): hp-ol-15-g, hp-olh-g40-15,
  hp-scwl-10m2p-mc, hp-scwl-15m2p-mc, hp-dpt-300, hp-solm-12m-ww, hp-vam-400l-eu-1.
- **Kennzahl** nicht angezeigt (kein `akkulaufzeit_h`, `hoehe_m`, `beleuchtete_laenge_m`, `led_anzahl`,
  `farbtemperatur_kelvin`): hp-bsm-002, hp-bsx-002, hp-fsf-120, hp-fxf-001.
- **Nachweise** nicht angezeigt (kein `ip_schutzart`, `spannung_v`, `ce_kennzeichnung`): hp-ol-15-g, hp-olh-g40-15,
  -20, -25, -35, -50, hp-ols-g40-16, -25, -35, hp-ols-s17-16, -16-eu, hp-scwl-10m2p-mc, -15m2p-mc, hp-bsm-002,
  hp-dpt-300, hp-ols-a60-16-eu, hp-ols-s11-16, hp-ols-st38-16, hp-solm-12m-ww, hp-vam-400l-eu-1, hp-bsx-002,
  hp-dgm-048, hp-fsf-120, hp-fxf-001, hp-rmp-180, hp-rsp-180, hp-wbf-180, hp-wbf-210, pec-150g, pvc-150g.
- **Lieferumfang** nicht angezeigt: hp-ol-15-g (keine Zeile im Blatt).
- **Fragen** nicht angezeigt: hp-bsm-002, hp-bsx-002, hp-fxf-001, pvc-150g.
- B1 ohne Bild (STT, SOLM, hp-dgm-048; OL-S11 bis zum 09.11.) erzeugt keinen Hinweis, der Block hat Text.

Die Serienleiter fehlt bei Einzelprodukten ohne zweite Stufe, `familie` ist überall gesetzt, der Editor zeigt dafür
keinen Hinweis. Leere Blöcke bleiben leer, die Werte kommen mit der Antwort von Tyler (Leon 03.11.).

## Weitere Auffälligkeiten (nichts geändert)

- **Hauptbilder:** RFM, RIT, RNM und RTM haben in Auftrag 16 neue Position-1-Bilder bekommen, RSP schon am 03.11.,
  hp-stt-050 ist Entwurf. Hier nicht angefasst.
- **BSL:** Das Bild zeigt Mikro-LEDs auf Kupferdraht, der Faktensatz nennt als Material Kunststoff. Kein Text nennt
  das Material.
- **OL-S11** heißt in der Bildzuordnung „Hero-Familie“; nach dem Auftrag steht sie auf `standard`.
- **Warmweiße Familienbilder** bei kaltweißen und bunten Varianten (CSL-c, OLG-200m/-200w, VLM/VAM bunt, SCWL- und
  DPM-Multicolor, ISL und UCT kaltweiß): I4-Ableitungen folgen laut Auftrag 16.
- **Installation & Pflege** kommt aus dem Metaobjekt je kat-Tag; OLG und OLT tragen `kat-christmas-tree-lights` und
  zeigen den Baum-Text.
- **Serienleiter:** `familie` CTL zeigt Welle 1 und Welle 2 zusammen (8 Produkte), DGM Stern, Spiralen und
  Geschenkboxen; Produkte mit Varianten zeigen eine Stufe je Variante (offener Punkt aus Welle 2).
- **hp-ols-s17-16-eu** trägt weiter `pruefen-dublette` (Welle 1b).

## Wenn die ausstehenden Bilder kommen

Je Bild drei Stellen: Block-Bild im Set (`<code>-b1` bzw. `<code>-b2`), Produkt-Metafeld `feature_b1`/`feature_b2`
und bei B1 das Kollektionsbild. Stand 09.11.: OL-S11, OLS-S11 und OL-ST38 sind erledigt bis auf die zwei
Kollektionsbilder. OL-S11 hat weiter kein B2 (`ol-s11-b2` bleibt ohne Bild außerhalb des Sets). Bei hp-dgm-048
nach der Klärung entscheiden, ob es zurück ins Set `dgm-w1` gehört.

## Produkt-URLs zum Durchsehen

Der Shop ist passwortgeschützt.

| Familie | URL | |
|---|---|---|
| OLG | https://heipard.myshopify.com/products/hp-olg-100 | |
| OLG | https://heipard.myshopify.com/products/hp-olg-200 | |
| OLG | https://heipard.myshopify.com/products/hp-olg-200m | |
| OLG | https://heipard.myshopify.com/products/hp-olg-200w | |
| OLG | https://heipard.myshopify.com/products/hp-olg-300-eu | |
| OLG | https://heipard.myshopify.com/products/hp-olg-400 | |
| OLG | https://heipard.myshopify.com/products/hp-olg-600 | |
| OLG | https://heipard.myshopify.com/products/hp-olg-800 | |
| OLT | https://heipard.myshopify.com/products/hp-olt-100 | |
| OLT | https://heipard.myshopify.com/products/hp-olt-150 | |
| OLT | https://heipard.myshopify.com/products/hp-olt-200 | |
| OLT | https://heipard.myshopify.com/products/hp-olt-300-eu | |
| OLT | https://heipard.myshopify.com/products/hp-olt-400 | |
| OLT | https://heipard.myshopify.com/products/hp-olt-600 | |
| OLT | https://heipard.myshopify.com/products/hp-olt-800 | |
| OL | https://heipard.myshopify.com/products/hp-ol-100 | |
| OL | https://heipard.myshopify.com/products/hp-ol-15 | |
| OL | https://heipard.myshopify.com/products/hp-ol-15-g | |
| OL | https://heipard.myshopify.com/products/hp-ol-25 | |
| OL | https://heipard.myshopify.com/products/hp-ol-75 | |
| OLH-G40 | https://heipard.myshopify.com/products/hp-olh-g40-15 | |
| OLH-G40 | https://heipard.myshopify.com/products/hp-olh-g40-20 | |
| OLH-G40 | https://heipard.myshopify.com/products/hp-olh-g40-25 | |
| OLH-G40 | https://heipard.myshopify.com/products/hp-olh-g40-35 | |
| OLH-G40 | https://heipard.myshopify.com/products/hp-olh-g40-50 | |
| BSL | https://heipard.myshopify.com/products/hp-bsl-100-1p | |
| BSL | https://heipard.myshopify.com/products/hp-bsl-100-2p | |
| BSL | https://heipard.myshopify.com/products/hp-bsl-50-1p | |
| BSL | https://heipard.myshopify.com/products/hp-bsl-50-2p | |
| CSL | https://heipard.myshopify.com/products/hp-csl-200-c | |
| CSL | https://heipard.myshopify.com/products/hp-csl-200-w | |
| CSL | https://heipard.myshopify.com/products/hp-csl-300-c | |
| CSL | https://heipard.myshopify.com/products/hp-csl-300-w | |
| CTL | https://heipard.myshopify.com/products/hp-ctl-180 | |
| CTL | https://heipard.myshopify.com/products/hp-ctl-240 | |
| CTL | https://heipard.myshopify.com/products/hp-ctl-300-eu | |
| CTL | https://heipard.myshopify.com/products/hp-ctl-360-eu | |
| OL-S11 | https://heipard.myshopify.com/products/hp-ol-s11-15 | |
| OL-S11 | https://heipard.myshopify.com/products/hp-ol-s11-25 | |
| OL-S11 | https://heipard.myshopify.com/products/hp-ol-s11-30 | |
| OL-S11 | https://heipard.myshopify.com/products/hp-ol-s11-50 | |
| OL-ST38 | https://heipard.myshopify.com/products/hp-ol-st38-15 | |
| OL-ST38 | https://heipard.myshopify.com/products/hp-ol-st38-25 | |
| OL-ST38 | https://heipard.myshopify.com/products/hp-ol-st38-30 | |
| OL-ST38 | https://heipard.myshopify.com/products/hp-ol-st38-50 | |
| ISL | https://heipard.myshopify.com/products/hp-isl-264 | |
| ISL | https://heipard.myshopify.com/products/hp-isl-360-eu | |
| ISL | https://heipard.myshopify.com/products/hp-isl-486 | |
| OLA-G40 | https://heipard.myshopify.com/products/hp-ola-g40-15-eu | |
| OLA-G40 | https://heipard.myshopify.com/products/hp-ola-g40-27-eu | |
| OLA-G40 | https://heipard.myshopify.com/products/hp-ola-g40-42-eu | |
| OLS-G40 | https://heipard.myshopify.com/products/hp-ols-g40-16 | |
| OLS-G40 | https://heipard.myshopify.com/products/hp-ols-g40-25 | |
| OLS-G40 | https://heipard.myshopify.com/products/hp-ols-g40-35 | |
| RGB | https://heipard.myshopify.com/products/hp-rgb-200a | |
| RGB | https://heipard.myshopify.com/products/hp-rgb-300a | |
| RGB | https://heipard.myshopify.com/products/hp-rgb-500a | |
| CL | https://heipard.myshopify.com/products/hp-cl-1-eu | |
| CL | https://heipard.myshopify.com/products/hp-cl-2-eu | |
| OLS-S17 | https://heipard.myshopify.com/products/hp-ols-s17-16 | |
| OLS-S17 | https://heipard.myshopify.com/products/hp-ols-s17-16-eu | |
| SCWL | https://heipard.myshopify.com/products/hp-scwl-10m2p-mc | |
| SCWL | https://heipard.myshopify.com/products/hp-scwl-15m2p-mc | |
| BSM | https://heipard.myshopify.com/products/hp-bsm-002 | |
| DLM | https://heipard.myshopify.com/products/hp-dlm-100h | |
| DNM | https://heipard.myshopify.com/products/hp-dnm-208 | |
| DPM | https://heipard.myshopify.com/products/hp-dpm-300 | |
| DPT | https://heipard.myshopify.com/products/hp-dpt-300 | |
| OLS-A60 | https://heipard.myshopify.com/products/hp-ols-a60-16-eu | |
| OLS-S11 | https://heipard.myshopify.com/products/hp-ols-s11-16 | |
| OLS-ST38 | https://heipard.myshopify.com/products/hp-ols-st38-16 | |
| RCT | https://heipard.myshopify.com/products/hp-rct-400 | |
| RFM | https://heipard.myshopify.com/products/hp-rfm-600 | |
| RIT | https://heipard.myshopify.com/products/hp-rit-280 | |
| RNM | https://heipard.myshopify.com/products/hp-rnm-200 | |
| RPM | https://heipard.myshopify.com/products/hp-rpm-200 | |
| RTM | https://heipard.myshopify.com/products/hp-rtm-400 | |
| SOLM | https://heipard.myshopify.com/products/hp-solm-12m-ww | |
| STT | https://heipard.myshopify.com/products/hp-stt-050 | Entwurf |
| TPM | https://heipard.myshopify.com/products/hp-tpm-400-eu-1 | |
| U20 | https://heipard.myshopify.com/products/hp-u20-200 | |
| UCP | https://heipard.myshopify.com/products/hp-ucp-200 | |
| UCT | https://heipard.myshopify.com/products/hp-uct-200-eu | |
| VAM | https://heipard.myshopify.com/products/hp-vam-400l-eu-1 | |
| VLM | https://heipard.myshopify.com/products/hp-vlm-100l | |
| BSX | https://heipard.myshopify.com/products/hp-bsx-002 | |
| DGM | https://heipard.myshopify.com/products/hp-dgm-002 | |
| DGM | https://heipard.myshopify.com/products/hp-dgm-048 | |
| FSF | https://heipard.myshopify.com/products/hp-fsf-120 | |
| FXF | https://heipard.myshopify.com/products/hp-fxf-001 | |
| RMP | https://heipard.myshopify.com/products/hp-rmp-180 | |
| RSP | https://heipard.myshopify.com/products/hp-rsp-180 | |
| WBF | https://heipard.myshopify.com/products/hp-wbf-180 | |
| WBF | https://heipard.myshopify.com/products/hp-wbf-210 | |
| WWF | https://heipard.myshopify.com/products/hp-wwf-180 | |
| BAUM-PEC | https://heipard.myshopify.com/products/pec-150g | |
| BAUM-PVC | https://heipard.myshopify.com/products/pvc-150g | |
