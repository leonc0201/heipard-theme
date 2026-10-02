# HeiPard Produkt-Import Welle 1b: Abschlussbericht

Stand: 02.10.2026. Spezifikation: `docs/heipard-import-welle1b.md`. Plan: `docs/heipard-import-welle1b-plan.md` (von Leon am 02.10.2026 freigegeben, Antworten A bis J unten). Daten je SKU: `docs/data/welle1b-quelle.json`.

## 1. Ergebnis

| Posten | Anzahl |
|---|---|
| neue Produkte angelegt | 36 (12 mit Varianten, 24 Einzelprodukte) |
| bestehende Produkte um Varianten erweitert | 16 (42 neue Varianten) |
| neue SKUs im Shop | 99 |
| gelöschte Dubletten | 2 (`hp-sblb-100l-ww`, `hp-sblb-60l-ww`) |
| Produkte im Shop vorher / nachher | 85 / 119 |
| davon aktiv | 0 |
| Bilder mit Fehler oder noch in Verarbeitung | 0 |

Alle 52 Schreibvorgänge liefen ohne Fehler. Alle 119 Produkte sind Draft. `HP-OL-30` und `HP-OL-50` wurden nicht angefasst. Beschreibungen wurden nicht importiert, Barcodes nicht gesetzt (der Bericht liefert nur ASINs und GTIN-Freistellungen).

## 2. Leons Entscheidungen zum Plan

- **A.** Die 9 SKUs, deren Geschwister schon einzeln im Shop stehen, sind Einzelprodukte mit `pruefen-varianten`. Bestehende Produkte wurden nicht umgebaut.
- **B.** Optionsnamen wie vorgeschlagen (Lichtfarbe, Länge, Größe, Höhe, LED-Anzahl, Ausführung).
- **C.** `HP-U20-200` und `HP-U20-400` sind ein neues Variantenprodukt (`hp-u20-200`).
- **D.** `hp-vlm-100l` steht wieder auf Draft und hat die zwei neuen Varianten.
- **E.** Bei den Zusammenführungen trägt die bestehende Variante jetzt die SKU ohne `-EU` (9 SKUs, Tabelle in Abschnitt 4). Die Handles bleiben unverändert. Die übrigen Welle-1-SKUs sind unverändert, die Angleichung über alle Produkte ist ein eigener Schritt.
- **F.** Smart bekommt den Doppelweg: `kat-stringlights` plus `kat-smart`. Neu betroffen ist nur `hp-rgb-500a`.
- **G.** Die beleuchteten Birken (`hp-wwf-180`, `hp-wbf-180`, `hp-wbf-210`) tragen `kat-motif` und den Produkttyp „Lichterbaum“. `kat-weihnachtsbaum` haben nur `pec-150g` und `pvc-150g`. Die Frage an Tyler steht in `docs/heipard-offene-punkte.md`.
- **H.** `pruefen-mapping-ol` sitzt an den 17 bestehenden OLA-, OLH- und OLS-Produkten und an den zwei neuen (`hp-ols-s11-16`, `hp-ols-st38-16`).
- **I.** UK-Varianten sind nicht importiert.
- **J.** Dieser Bericht liegt unter `docs/heipard-import-welle1b-bericht.md`.

## 3. Neue Produkte (36)

| Handle | Produkttyp | Tags | Familie | Varianten |
|---|---|---|---|---|
| `hp-blt-050` | Batterie-Lichterkette | kat-stringlights, kat-led, todo-text, serie-blt, Warmweiß | BLT | `HP-BLT-050` 5 m, 7,99 €; `HP-BLT-200` 20 m, 17,99 € |
| `hp-bsl-50-1p` | Batterie-Lichterkette | kat-stringlights, kat-led, todo-text, serie-bsl, Warmweiß, pruefen-varianten | BSL | `HP-BSL-50-1P`, 5,99 € |
| `hp-ctl-180m` | Weihnachtsbaum-Lichterkette | kat-stringlights, kat-christmas-tree-lights, todo-text, serie-ctl, Multicolor, pruefen-varianten | CTL | `HP-CTL-180M`, 26,99 € |
| `hp-ctl-240m` | Weihnachtsbaum-Lichterkette | kat-stringlights, kat-christmas-tree-lights, todo-text, serie-ctl, Multicolor, pruefen-varianten | CTL | `HP-CTL-240M`, 32,99 € |
| `hp-dpm-300` | Lichterkette | kat-stringlights, kat-led, todo-text, serie-dpm, Warmweiß, Multicolor | DPM | `HP-DPM-300` Warmweiß / 30 m, 22,99 €; `HP-DPM-300M` Multicolor / 30 m, 19,99 €; `HP-DPM-600` Warmweiß / 60 m, 29,99 €; `HP-DPM-600M` Multicolor / 60 m, 29,99 € |
| `hp-dpt-300` | Lichterkette | kat-stringlights, kat-led, todo-text, serie-dpt, Warmweiß | DPT | `HP-DPT-300` 30 m, 22,99 €; `HP-DPT-600` 60 m, 25,99 € |
| `hp-isl-486` | Eisregen-Lichterkette | kat-stringlights, kat-icicle, todo-text, serie-isl, Warmweiß, Multicolor, Kaltweiß | ISL | `HP-ISL-486` 12,15 m / Warmweiß, 32,99 €; `HP-ISL-486M` 12,15 m / Multicolor, 32,99 €; `HP-ISL-486W` 12,15 m / Kaltweiß, 32,99 €; `HP-ISL-648` 16,2 m / Warmweiß, 37,99 €; `HP-ISL-648M` 16,2 m / Multicolor, 37,99 €; `HP-ISL-648W` 16,2 m / Kaltweiß, 37,99 € |
| `hp-npt-210` | Lichternetz | kat-stringlights, kat-net, todo-text, serie-npt, Warmweiß, Multicolor, Weiß | NPT | `HP-NPT-210` Warmweiß, 26,99 €; `HP-NPT-210M` Multicolor, 26,99 €; `HP-NPT-210W` Weiß, 29,99 € |
| `hp-olg-100` | Weihnachtsbaum-Lichterkette | kat-stringlights, kat-christmas-tree-lights, todo-text, serie-olg, Warmweiß, pruefen-varianten | OLG | `HP-OLG-100`, 26,99 € |
| `hp-olg-200m` | Weihnachtsbaum-Lichterkette | kat-stringlights, kat-christmas-tree-lights, todo-text, serie-olg, Multicolor, pruefen-varianten | OLG | `HP-OLG-200M`, 23,99 € |
| `hp-olg-200w` | Weihnachtsbaum-Lichterkette | kat-stringlights, kat-christmas-tree-lights, todo-text, serie-olg, Kaltweiß, pruefen-varianten | OLG | `HP-OLG-200W`, 23,99 € |
| `hp-olg-600` | Weihnachtsbaum-Lichterkette | kat-stringlights, kat-christmas-tree-lights, todo-text, serie-olg, Warmweiß, pruefen-varianten | OLG | `HP-OLG-600`, 36,99 € |
| `hp-olg-800` | Weihnachtsbaum-Lichterkette | kat-stringlights, kat-christmas-tree-lights, todo-text, serie-olg, Warmweiß, pruefen-varianten | OLG | `HP-OLG-800`, 59,99 € |
| `hp-ols-s11-16` | Solar-Lichterkette | kat-stringlights, kat-solar, todo-text, serie-ols, Warmweiß, pruefen-mapping-ol | OLS-S11 | `HP-OLS-S11-16` 10 m, 29,99 €; `HP-OLS-S11-25` 15 m, 35,99 € |
| `hp-ols-st38-16` | Solar-Lichterkette | kat-stringlights, kat-solar, todo-text, serie-ols, Warmweiß, pruefen-mapping-ol | OLS-ST38 | `HP-OLS-ST38-16` 10 m, 24,99 €; `HP-OLS-ST38-25` 15 m, 29,99 € |
| `hp-rgb-500a` | Smart-Lichterkette | kat-stringlights, kat-smart, todo-text, serie-rgb, Multicolor, pruefen-varianten | RGB | `HP-RGB-500A`, 69,99 € |
| `hp-rmp-180` | (leer) | todo-kategorie, todo-text, serie-rmp, Warmweiß | RMP | `HP-RMP-180`, 59,99 € |
| `hp-rpm-200` | (leer) | todo-kategorie, todo-text, serie-rpm, Multicolor | RPM | `HP-RPM-200` 20 m, 35,99 €; `HP-RPM-400` 40 m, 35,99 € |
| `hp-u20-200` | Lichterkette | kat-stringlights, kat-led, todo-text, serie-u20, Warmweiß | U20 | `HP-U20-200` 10 m, 16,99 €; `HP-U20-400` 20 m, 24,99 € |
| `hp-wwf-180` | Lichterbaum | kat-motif, todo-text, serie-wwf, Warmweiß | WWF | `HP-WWF-180` 1,8 m, 69,99 €; `HP-WWF-210` 2,1 m, 79,99 € |
| `pec-150g` | Weihnachtsbaum | kat-weihnachtsbaum, todo-text, serie-pec | BAUM-PEC | `PEC-150G` 1,5 m, 159,99 €; `PEC-180G` 1,8 m, 199,99 €; `PEC-210G` 2,1 m, 289,99 € |
| `pvc-150g` | Weihnachtsbaum | kat-weihnachtsbaum, todo-text, serie-pvc | BAUM-PVC | `PVC-150G` 1,5 m, 129,99 €; `PVC-180G` 1,8 m, 169,99 €; `PVC-210G` 2,1 m, 199,99 € |
| `hp-wbf-180` | Lichterbaum | kat-motif, todo-text, serie-wbf | WBF | `HP-WBF-180`, 99,00 € |
| `hp-wbf-210` | Lichterbaum | kat-motif, todo-text, serie-wbf | WBF | `HP-WBF-210`, 99,00 € |
| `hp-dgm-048` | (leer) | todo-kategorie, todo-text, serie-dgm | DGM | `HP-DGM-048`, 69,00 € |
| `hp-bsm-002` | (leer) | todo-kategorie, todo-text, serie-bsm, Warmweiß | BSM | `HP-BSM-002`, 15,99 € |
| `hp-bsx-002` | Motivleuchte | kat-motif, todo-text, serie-bsx, Warmweiß | BSX | `HP-BSX-002`, 15,99 € |
| `hp-csl-200-c` | Lichtervorhang | kat-stringlights, kat-curtain, todo-text, serie-csl, Kaltweiß | CSL | `HP-CSL-200-C`, 11,99 € |
| `hp-csl-200-w` | Lichtervorhang | kat-stringlights, kat-curtain, todo-text, serie-csl, Warmweiß | CSL | `HP-CSL-200-W`, 11,99 € |
| `hp-dgm-001` | Motivleuchte | kat-motif, todo-text, serie-dgm, Warmweiß | DGM | `HP-DGM-001`, 59,00 € |
| `hp-dgm-002` | (leer) | todo-kategorie, todo-text, serie-dgm, Multicolor | DGM | `HP-DGM-002`, 38,99 € |
| `hp-fsf-120` | (leer) | todo-kategorie, todo-text, serie-fsf, Warmweiß | FSF | `HP-FSF-120`, 125,99 € |
| `hp-fxf-001` | (leer) | todo-kategorie, todo-text, serie-fxf | FXF | `HP-FXF-001`, 159,99 € |
| `hp-ol-s11-50` | Lichterkette | kat-stringlights, kat-led, todo-text, serie-ol, Warmweiß | OL-S11 | `HP-OL-S11-50`, 45,99 € |
| `hp-ol-st38-50` | Lichterkette | kat-stringlights, kat-led, todo-text, serie-ol, Warmweiß | OL-ST38 | `HP-OL-ST38-50`, 99,00 € |
| `hp-stt-050` | Lichterkette | kat-stringlights, kat-led, todo-text, serie-stt, Warmweiß | STT | `HP-STT-050`, 69,00 € |

## 4. Zusammenführungen (16 Produkte, 42 neue Varianten)

Die bestehende Variante steht jeweils an erster Stelle und behält Preis, Barcode und Bilder. Wo „Lichtfarbe“ zur Option wurde, ist das Produkt-Metafeld `heipard.lichtfarbe` entfernt (8 Produkte) und die Farb-Tags sind ergänzt, so wie bei den vier Bündeln aus Welle 1.

| Handle | Optionen | bestehende Variante | neue Varianten | neue Bilder |
|---|---|---|---|---|
| `hp-isl-264` | Länge / Lichtfarbe | `HP-ISL-264` 8,25 m / Warmweiß, 32,99 € | `HP-ISL-108` 3,38 m / Warmweiß, 26,99 €; `HP-ISL-108W` 3,38 m / Kaltweiß, 26,99 €; `HP-ISL-108M` 3,38 m / Multicolor, 26,99 €; `HP-ISL-264W` 8,25 m / Kaltweiß, 36,99 €; `HP-ISL-264M` 8,25 m / Multicolor, 32,99 € | 22 |
| `hp-uct-200-eu` | Lichtfarbe / Ausführung | `HP-UCT-200` Warmweiß / Lichterkette, 10,99 € | `HP-UCC-200` Warmweiß / Kupferdraht, 12,99 €; `HP-UCC-200W` Kaltweiß / Kupferdraht, 12,99 €; `HP-UCT-200W` Kaltweiß / Lichterkette, 16,99 € | 21 |
| `hp-isl-360-eu` | Lichtfarbe / Länge | `HP-ISL-360` Warmweiß / 9 m, 24,99 € | `HP-ISL-586` Warmweiß / 15 m, 32,99 €; `HP-ISL-008` Warmweiß / 25 m, 46,99 €; `HP-ISL-360W` Kaltweiß / 9 m, 24,99 €; `HP-ISL-586W` Kaltweiß / 15 m, 32,99 €; `HP-ISL-008W` Kaltweiß / 25 m, 46,99 €; `HP-ISL-360M` Multicolor / 9 m, 24,99 €; `HP-ISL-586M` Multicolor / 15 m, 32,99 €; `HP-ISL-008M` Multicolor / 25 m, 46,99 € | 19 |
| `hp-blm-100-eu` | Länge | `HP-BLM-100` 10 m, 10,99 € | `HP-BLM-150` 15 m, 14,99 € | 8 |
| `hp-blt-100-eu-1` | Länge | `HP-BLT-100` 10 m, 10,99 € | `HP-BLT-150` 15 m, 14,99 € | 1 |
| `hp-dct-200` | Größe / Lichtfarbe | `HP-DCT-200` 3 x 2 m / Warmweiß, 19,99 € | `HP-DCT-200W` 3 x 2 m / Kaltweiß, 19,99 €; `HP-DCT-200M` 3 x 2 m / Multicolor, 19,99 €; `HP-DCT-300` 3 x 3 m / Warmweiß, 22,99 € | 0 |
| `hp-dfm-400-eu-2` | Lichtfarbe / Länge | `HP-DFM-400` Warmweiß / 6 m, 29,99 € | `HP-DFM-010` Warmweiß / 15 m, 39,99 €; `HP-DFM-400W` Kaltweiß / 6 m, 24,99 €; `HP-DFM-010W` Kaltweiß / 15 m, 39,99 €; `HP-DFM-400M` Multicolor / 6 m, 24,99 €; `HP-DFM-010M` Multicolor / 15 m, 39,99 € | 19 |
| `hp-dfm-750-eu` | Lichtfarbe / Länge | `HP-DFM-750` Warmweiß / 11,25 m, 29,99 € | `HP-DFM-015` Warmweiß / 22,5 m, 49,99 €; `HP-DFM-750M` Multicolor / 11,25 m, 29,99 €; `HP-DFM-015M` Multicolor / 22,5 m, 49,99 € | 11 |
| `hp-dfm-600` | Länge / Lichtfarbe | `HP-DFM-600` 9 m / Warmweiß, 29,99 € | `HP-DFM-600M` 9 m / Multicolor, 29,99 €; `HP-DFM-012` 18 m / Warmweiß, 45,99 €; `HP-DFM-012M` 18 m / Multicolor, 45,99 € | 11 |
| `hp-dlm-100h` | Länge | `HP-DLM-100H` 10 m, 29,99 € | `HP-DLM-200H` 20 m, 19,99 € | 4 |
| `hp-dnm-208` | Lichtfarbe | `HP-DNM-208` Warmweiß, 69,00 € | `HP-DNM-208M` Multicolor, 22,99 € | 0 |
| `hp-olg-300-eu` | Länge | `HP-OLG-300` 30 m, 24,99 € | `HP-OLG-500` 50 m, 27,99 €; `HP-OLG-010` 100 m, 45,99 € | 5 |
| `hp-olt-300-eu` | Länge | `HP-OLT-300` 30 m, 24,99 € | `HP-OLT-500` 50 m, 27,99 €; `HP-OLT-010` 100 m, 45,99 € | 4 |
| `hp-rsp-180` | Höhe | `HP-RSP-180` 1,8 m, 159,99 € | `HP-RSP-250` 2,5 m, 169,99 € | 7 |
| `hp-tpm-400-eu-1` | LED-Anzahl | `HP-TPM-400` 400 LEDs, 29,99 € | `HP-TPM-300` 300 LEDs, 26,99 € | 7 |
| `hp-vlm-100l` | Länge | `HP-VLM-100L` 10 m, 29,99 € | `HP-VLM-200L` 20 m, 39,99 €; `HP-VLM-300L` 30 m, 49,99 € | 5 |

Angeglichene SKUs der bestehenden Varianten:

| Handle | vorher | jetzt |
|---|---|---|
| `hp-uct-200-eu` | `HP-UCT-200-EU` | `HP-UCT-200` |
| `hp-isl-360-eu` | `HP-ISL-360-EU` | `HP-ISL-360` |
| `hp-blm-100-eu` | `HP-BLM-100-EU` | `HP-BLM-100` |
| `hp-blt-100-eu-1` | `HP-BLT-100-EU-1` | `HP-BLT-100` |
| `hp-dfm-400-eu-2` | `HP-DFM-400-EU-2` | `HP-DFM-400` |
| `hp-dfm-750-eu` | `HP-DFM-750-EU` | `HP-DFM-750` |
| `hp-olg-300-eu` | `HP-OLG-300-EU` | `HP-OLG-300` |
| `hp-olt-300-eu` | `HP-OLT-300-EU` | `HP-OLT-300` |
| `hp-tpm-400-eu-1` | `HP-TPM-400-EU-1` | `HP-TPM-400` |

## 5. Weitere Änderungen an bestehenden Produkten

- **Tag `pruefen-mapping-ol`** an 17 Produkten: `hp-ola-g40-15-eu`, `hp-ola-g40-27-eu`, `hp-ola-g40-42-eu`, `hp-ola-s14-15-eu`, `hp-ola-s14-30-eu`, `hp-ola-s14-50-eu`, `hp-olh-g40-15`, `hp-olh-g40-20`, `hp-olh-g40-25`, `hp-olh-g40-35`, `hp-olh-g40-50`, `hp-ols-a60-16-eu`, `hp-ols-g40-16`, `hp-ols-g40-25`, `hp-ols-g40-35`, `hp-ols-s17-16`, `hp-ols-s17-16-eu`.
- **Gelöscht:** `hp-sblb-100l-ww` und `hp-sblb-60l-ww` (ohne Bilder, Tag `todo-bild`). Die Fassungen `hp-sblb-100l-ww-new` und `hp-sblb-60l-ww-new` bleiben. Die gelöschten Produkte trugen die Barcodes 792742177118 (100L) und 792742177101 (60L), die -NEW-Fassungen haben keinen Barcode.
- **`hp-vlm-100l`:** von ACTIVE auf DRAFT.

## 6. Zu prüfen

**HP-OLS-S17-16 und HP-OLS-S17-16-EU.** Nicht gelöscht, Leon entscheidet.

| | `hp-ols-s17-16` | `hp-ols-s17-16-eu` |
|---|---|---|
| ASIN | B0FGJB4DFY | B0HCBFN39R |
| Amazon-Titel | … 7.5M/16 S17 LED-Glühbirnen, 8 Modi USB … IP45 | … 8.5M 16+1 S17 LED Vintage IP45 8 Modi |
| Status bei Amazon | Aktiv, Kind von HP-OLS-A60S17-3 | Aktiv, ohne Elternteil |
| Preis Shop / Amazon | 26,99 € / 24,99 € | 24,99 € / 24,99 € |
| Barcode im Shop | 792742176913 | keiner |
| Bilder im Shop | 7 | 1 (dasselbe Motiv wie Bild 6 des anderen) |

Einschätzung: sehr wahrscheinlich dasselbe Produkt in zwei Listings (gleiche Birnenform, 16 Birnen, 8 Modi, IP45, gleicher Amazon-Preis, das -EU-Listing ist das jüngere). Die Längenangabe weicht ab (7,5 m gegen 8,5 m, „16“ gegen „16+1“), das kann eine andere Zählweise oder eine neue Version sein. Sicher ist es aus den Daten nicht. In Tylers Liste steht keine der beiden SKUs.

**Preise, die nicht zusammenpassen** (bestehende Variante behält laut Spezifikation ihren Preis):

- `hp-dnm-208`: `HP-DNM-208` Warmweiß 69,00 €, `HP-DNM-208M` Multicolor 22,99 €.
- `hp-dlm-100h`: `HP-DLM-100H` 10 m 29,99 €, `HP-DLM-200H` 20 m 19,99 €.
- `hp-dfm-400-eu-2`: Warmweiß 6 m 29,99 €, Kaltweiß und Multicolor 6 m 24,99 €.
- `hp-rpm-200`: 20 m und 40 m beide 35,99 €.
- `hp-wbf-180` und `hp-wbf-210`: beide 99,00 €. Auch 69,00 € und 99,00 € bei `hp-dgm-048`, `hp-stt-050`, `hp-ol-st38-50` sehen nach Platzhalterpreisen aus.

**`todo-kategorie` (7 Produkte):** `hp-rmp-180`, `hp-rpm-200`, `hp-dgm-048`, `hp-bsm-002`, `hp-dgm-002`, `hp-fsf-120`, `hp-fxf-001`. Sie haben keinen `kat-`Tag und keinen Produkttyp und erscheinen in keiner Kollektion. Vorschläge stehen im Plan, Abschnitt 6.

**`pruefen-varianten` (9 Produkte):** `hp-bsl-50-1p`, `hp-ctl-180m`, `hp-ctl-240m`, `hp-olg-100`, `hp-olg-200m`, `hp-olg-200w`, `hp-olg-600`, `hp-olg-800`, `hp-rgb-500a`.

**Bilder.** 17 neue Produkte haben nur ein Bild, weil der Bericht nicht mehr liefert. Bei Varianten mit demselben Hauptbild teilen sich die Varianten ein Bild. Nach den Zusammenführungen haben einige Produkte viele Bilder (`hp-isl-264` 31, `hp-uct-200-eu` 28, `hp-dfm-400-eu-2` 27, `hp-isl-360-eu` 26). Es sind Amazon-Bilder mit Text und Infografiken, die laut Markenregel auf der Produktseite nicht bleiben sollen: Auswahl und Ersatz in Welle 2 beziehungsweise über die Asset-Pipeline.

**Titel.** Alle neuen Produkte tragen den Amazon-Titel und `todo-text`. Bei den Variantenprodukten ist es der Titel des Elternteils oder der um Größe und Farbe gekürzte Titel des ersten Kinds, teils holprig („HeiPard warmweiße Weihnachts-Lichterkette 30 60 80“, „HeiPard 200+400 LED Lichterschlauch Außen“). Die zusammengeführten Produkte behalten ihren alten Titel, der teils noch eine Größe nennt (`hp-uct-200-eu`: „… 3 x 2 m, 200 LEDs …“).

**Smart-Doppelweg.** `hp-rgb-200a` und `hp-rgb-300a` aus Welle 1 tragen weiter `kat-led` und kein `kat-smart`. Nur das neue `hp-rgb-500a` folgt der neuen Regel. Angleichen wäre eine Änderung an bestehenden Produkten.

## 7. Nächste Schritte

- SKU-Schreibweise über alle Welle-1-Produkte angleichen (eigener Schritt mit Bericht).
- Entscheidungen zu Abschnitt 6: S17-Dublette, Preise, sieben offene Kategorien, neun `pruefen-varianten`-Produkte.
- Tyler: OL-Gegenüberstellung (Plan, Abschnitt 7), Birken als Motivleuchten, Fragen an Shenzhen.
- Welle 2: Titel, Texte, übrige Metafelder, Bildauswahl. Danach Aktivierung durch Leon.
