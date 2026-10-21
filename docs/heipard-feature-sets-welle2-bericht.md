# Feature-Sets Welle 2: Bericht (Durchlauf 1)

Stand 2026-10-21. Auftrag: `heipard-theme-auftrag-feature-sets-welle2.md` (von Leon). Quellen im Asset-Ordner:
`reports/metafelder/welle2_metafelder.csv`, `reports/metafelder/fragen_<FAMILIE>.md`, `reports/hotspots/*.json`.
Shop vor jedem Schreiben geprüft: `get-shop-info` = HeiPard, heipard.myshopify.com. Keine Theme-Code-Änderung.

## Vorlauf: familie, dramaturgie, Familien-Kollektionen

- `heipard.familie` an 15 Produkten und `heipard.dramaturgie` an allen 20 gesetzt, nach dem Blatt (Status
  „Vorgabe Leon"). Die fünf bestehenden `familie`-Werte (hp-npt-210, hp-ctl-180m, hp-ctl-240m, hp-blt-050,
  hp-dgm-001) sind unverändert.
- Zehn Smart Collections angelegt wie `familie-ol-g40`: `familie-dct`, `-vit`, `-olas14`, `-blm`, `-dfm`, `-sblb`,
  dazu `-ctl`, `-blt`, `-npt`, `-dgm`, die ebenfalls fehlten. Titel „Serie <CODE>", Regel Metafeld *Familie (Code)*
  gleich Code, im Onlineshop veröffentlicht, `seo.hidden` = 1.
- `familie-dgm` enthält drei Produkte: hp-dgm-001 (Stern), dazu hp-dgm-002 und hp-dgm-048 aus Welle 1b, die
  ebenfalls den Code DGM tragen (Spirale, Geschenkboxen). Die Serienleiter zeigt sie als Nachbarmodelle.

## 1. Metafelder

Alle 207 Zeilen des Blatts haben einen gültigen Status. 148 standen schon richtig im Shop, 59 sind neu
geschrieben (35 `familie`/`dramaturgie`, 24 Fachwerte). Typen nach der Baukasten-Tabelle, Variantenzeilen an
der Variante. Abweichungen zum Shop gab es keine.

Sonderfall: `dimmstufen` für HP-NPT-210M steht im Blatt als Variantenzeile, eine Varianten-Definition für
`dimmstufen` gibt es aber nicht. Der Wert steht deshalb als Varianten-Metafeld ohne Definition
(`list.number_integer`). Das Theme liest ihn trotzdem (zuerst Variante, dann Produkt). Wer ihn im Admin
pflegen will, braucht eine Varianten-Definition `heipard.dimmstufen`.

## 2. Fragen

38 Einträge *HeiPard Produktfrage* (`<familie>-frage-<n>`, z. B. `dct-frage-1`), am Metafeld `fragen` der
20 Produkte verknüpft (73 Verknüpfungen). Fragen mit eingeschränktem Geltungsbereich hängen nur dort:
`blt-frage-1` (Timer) nur an hp-blt-050, `ctl-frage-4` nur an hp-ctl-180m und -240m, `vit-frage-3` nur an
hp-vit-586l-eu-1, `vit-frage-4` nur an hp-vit-864l-eu-1. Die DGM-Fragen betreffen den Stern und hängen nur an
hp-dgm-001.

In den Standard- und Long-Tail-Sets steht laut Vokabular kein Fragen-Block in der Daten-Zone. Die Fragen
sind dort gepflegt, aber nicht sichtbar. Sollen sie erscheinen, genügt „Auto · Fragen" am Set-Ende.

## 3. Sets und Blöcke

Kicker stehen in normaler Schreibung, das Theme setzt sie in Großbuchstaben (wie bei OL-G40). Blöcke mit
„Auto · …" sind die geteilten Einträge der Vorlagen. *fehlt* heißt: Bild noch nicht in Shopify Files.

| Set (Handle) | Produkte | Blöcke in Reihenfolge | Daten-Zone | Bilder fehlen |
|---|---|---|---|---|
| DCT (Hero) `dct` | hp-dct-200 | B1 Pergola im Regen · B2 Wohnzimmerfenster · R1 Modi und Timer · I1 Schieber · Auto Kettenplan · P1 Fernbedienung · Auto Zeitband · Auto Icon-Grid | Serienleiter, Nachweise, Lieferumfang, Fragen | `DCT_I1_01_an`/`_aus`, `DCT_P1_04` |
| NPT (Hero) `npt` | hp-npt-210 | B1 Busch im Vorgarten · B2 Wohnzimmerfenster · R1 Modi und Timer · I1 Schieber · Auto Kettenplan · P1 Fernbedienung · Auto Zeitband · Auto Icon-Grid | wie DCT | `NPT_I1_01_an`/`_aus`, `NPT_P1_06` |
| VIT 864L (Hero) `vit-864l` | hp-vit-864l-eu-1 | B1 Gartenparty · B2 Dachkante im Schnee · R1 Netzteil und IP44 · I1 Schieber 864L · Auto Kettenplan · P1 Fernbedienung · Auto Zeitband · Auto Icon-Grid | wie DCT | `VIT_I1_01_an`/`_aus`, `VIT_P1_01` |
| VIT 586L (Hero) `vit-586l` | hp-vit-586l-eu-1 | wie 864L, Schieber 586L | wie DCT | `VIT_I1_02_an`/`_aus`, `VIT_P1_01` |
| OLAS14 (Hero) `olas14` | hp-ola-s14-15-eu, -30-eu, -50-eu | B1 Terrasse und Pool · B2 Warmes Licht · R1 Fernbedienung und App · Steuerung (Dauer, Atem, Blinken; Basisbild `OLAS14_B2_01`) · Auto Kettenplan · P1 Fernbedienung · Auto Zeitband · Auto Icon-Grid | wie DCT | `OLAS14_P1_01` |
| CTL (Standard) `ctl` | hp-ctl-180m, -240m, -210-eu-1, -400-eu-1 | B1 Kategoriebild · B2 Weihnachtsbaum · R1 Modi und Helligkeit · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Serienleiter, Nachweise, Lieferumfang | `KAT-CTL_B1_01` |
| BLT (Standard) `blt` | hp-blt-050, hp-blt-100-eu-1 | B1 Kategoriebild · B2 Gartenparty · R1 Modi und IP44 · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | wie CTL | `KAT-LED_B1_01` |
| BLM (Standard) `blm` | hp-blm-100-eu | B1 Kategoriebild · B2 Kinder · R1 Timer und IP44 · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | wie CTL | `KAT-LED_B1_01` |
| DFM (Standard) `dfm` | hp-dfm-400-eu-2, hp-dfm-600, hp-dfm-750-eu | B1 Kategoriebild · B2 Lichtfarben · R1 Modi und Helligkeit · Auto Kettenplan sonst Zeitband · D6 Kennzahl LED-Anzahl | wie CTL | `KAT-CLUSTER_B1_01`, `DFM_B2_01` (Ersatz `KAT-CLUSTER_B2_01` fehlt ebenfalls) |
| SBLB (Standard) `sblb` | hp-sblb-60l-ww-new, hp-sblb-100l-ww-new | B1 Kategoriebild · B2 Terrasse · R1 Modi und Zuleitung · Auto Zeitband (Solar) · D6 Kennzahl Leuchtdauer | wie CTL | `KAT-SOLAR_B1_01`, `SBLB_B2_01` |
| DGM (Long-Tail) `dgm` | hp-dgm-001 | B1 Kategoriebild · R1 Außenbereich · Auto Kennzahl | Serienleiter, Nachweise | `KAT-MOTIF_B1_01` |

Bezeichnungen (intern) nach Schema „DCT · B1 Pergola im Regen". Die Blöcke B1, B2, R1 und P1 teilen sich die
beiden VIT-Sets. Das Steuerungs-Basisbild von OLAS14 ist dasselbe wie das B2-Bild (Vorgabe).

**Entscheidungen im Aufbau:**
- DFM und SBLB haben fünf Plätze. D6 (LED-Anzahl bzw. Leuchtdauer) steht auf dem letzten Platz, das Icon-Grid
  entfällt dort. Bei SBLB nimmt das Solar-Zeitband den Platz von D1/D3 ein.
- OLAS14 „Linie mit Koppelplan": Der Koppelplan braucht die beleuchtete Länge, die fehlt im Blatt. Der
  Kettenplan zeigt deshalb die reduzierte Linie mit Gesamtlänge und 3 m Zuleitung.
- Texte nur aus Blatt, Faktenliste und Fragen. Wo Fakten fehlen, beschreibt der Text die Szene des Bildes.
  Die App bei OLAS14 ist im Listing-Text und in zwei Bildern belegt und nur erwähnt.

## Live-Stand (Durchlauf 1)

Geprüft auf allen 20 Produktseiten (erste Variante) mit Storefront-Passwort, ohne JS-Fehler. B1- und B2-Blöcke
ohne Bild zeigen ihren Text auf dem Ersatzverlauf des Themes. Schieber und Hotspot ohne Bild entfallen.

| Produkt | Sichtbar (Hauptbereich) | Daten-Zone |
|---|---|---|
| hp-dct-200 | B1, B2, R1, Kettenplan (Fläche), Zeitband, Icon-Grid | Serienleiter, Nachweise, Fragen |
| hp-npt-210 | B1, B2, R1, Kettenplan (Fläche), Zeitband, Icon-Grid | Nachweise, Fragen |
| hp-vit-864l-eu-1, hp-vit-586l-eu-1 | B1, B2, R1, Icon-Grid | Serienleiter, Nachweise, Fragen |
| hp-ola-s14-15/-30/-50-eu | B1, B2, R1, Steuerung, Kettenplan (Linie), Icon-Grid | Serienleiter, Nachweise, Fragen |
| hp-ctl-180m, -240m | B1*, B2, R1, Icon-Grid | Serienleiter, Nachweise |
| hp-ctl-210-eu-1, -400-eu-1 | B1*, B2, R1, Icon-Grid | Serienleiter |
| hp-blt-050, hp-blt-100-eu-1, hp-blm-100-eu | B1*, B2, R1, Kettenplan, Icon-Grid | Serienleiter, Nachweise |
| hp-dfm-400-eu-2 | B1*, B2*, R1, Kettenplan | Serienleiter, Nachweise |
| hp-dfm-600 | B1*, B2*, R1, Kennzahl | Serienleiter, Nachweise |
| hp-dfm-750-eu | B1*, B2*, R1, Kettenplan, Kennzahl | Serienleiter, Nachweise |
| hp-sblb-60l-ww-new, -100l-ww-new | B1*, B2*, R1, Zeitband (Solar), Kennzahl | Serienleiter |
| hp-dgm-001 | B1*, R1, Kennzahl | Serienleiter, Nachweise |

\* ohne Bild, Ersatzverlauf.

**Hinweise, die der Theme-Editor zeigen wird (fehlende Metafelder oder Bilder):**
- Schieber und Hotspot bei DCT, NPT, VIT; Hotspot bei OLAS14: Bild fehlt.
- VIT: Kettenplan ohne Breite, Höhe oder Länge, Zeitband ohne `timer_dauer_h`.
- OLAS14: Zeitband ohne `timer_dauer_h` (im Blatt mehrdeutig).
- CTL: weder Länge noch Timer, „Kettenplan sonst Zeitband" bleibt leer. Nachweise bei 210/400 leer.
- DFM: Variante HP-DFM-600 (9 m Warmweiß) ohne Gesamtlänge, dort kein Kettenplan. Variante HP-DFM-400 (6 m
  Warmweiß) ohne LED-Anzahl, dort keine Kennzahl.
- SBLB: Nachweise leer (Schutzart im Blatt mehrdeutig).
- NPT: Serienleiter leer (Familie mit einem Produkt, Varianten unterscheiden sich in der Farbe).
- Lieferumfang: bei allen 20 leer, steht in keiner Faktenliste.

**Beobachtung im Theme (Code, nur gemeldet):** Die Serienleiter im Variantenmodus zeigt jede Variante als
eigene Stufe. Bei Produkten mit Farbe und Größe (hp-dct-200: sechs Karten 3 x 2 m und 3 x 3 m je Farbe,
ebenso DFM) wiederholen sich die Größen. Bei hp-dfm-600 steht zusätzlich die Variante 9 m Warmweiß ohne
Gesamtlänge am Ende (Reihenfolge 9, 18, 18, 9 m). Eine Gruppierung nach der Größe bräuchte eine Code-Änderung.

## 4. Zweiter Durchlauf (offen)

Wartet auf `reports/auftrag_13.md` der Asset-Instanz. Stand 2026-10-21: Bericht noch nicht da, keines der
fehlenden Bilder in Files. Dann: Bilder in die vorbereiteten Blöcke (Tabelle oben), Hotspot-JSONs neu
übernehmen (die OLAS14-Datei hat sich seit dem 20.10. geändert), danach HOME-11
(`HOME-11_Markenstory_01.webp` als Bild der Markenstory auf der Startseite).

## Produkt-URLs zum Durchsehen

Shop passwortgeschützt, Passwort bei Leon.

- https://heipard.myshopify.com/products/hp-dct-200
- https://heipard.myshopify.com/products/hp-npt-210
- https://heipard.myshopify.com/products/hp-vit-864l-eu-1
- https://heipard.myshopify.com/products/hp-vit-586l-eu-1
- https://heipard.myshopify.com/products/hp-ola-s14-15-eu
- https://heipard.myshopify.com/products/hp-ola-s14-30-eu
- https://heipard.myshopify.com/products/hp-ola-s14-50-eu
- https://heipard.myshopify.com/products/hp-ctl-180m
- https://heipard.myshopify.com/products/hp-ctl-240m
- https://heipard.myshopify.com/products/hp-ctl-210-eu-1
- https://heipard.myshopify.com/products/hp-ctl-400-eu-1
- https://heipard.myshopify.com/products/hp-blt-050
- https://heipard.myshopify.com/products/hp-blt-100-eu-1
- https://heipard.myshopify.com/products/hp-blm-100-eu
- https://heipard.myshopify.com/products/hp-dfm-400-eu-2
- https://heipard.myshopify.com/products/hp-dfm-600
- https://heipard.myshopify.com/products/hp-dfm-750-eu
- https://heipard.myshopify.com/products/hp-sblb-60l-ww-new
- https://heipard.myshopify.com/products/hp-sblb-100l-ww-new
- https://heipard.myshopify.com/products/hp-dgm-001
