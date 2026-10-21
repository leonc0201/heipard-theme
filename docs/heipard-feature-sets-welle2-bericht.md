# Feature-Sets Welle 2: Bericht (Durchlauf 1 und 2)

Stand 2026-10-21, abends. Auftrag: `heipard-theme-auftrag-feature-sets-welle2.md` (von Leon). Quellen im
Asset-Ordner: `reports/metafelder/welle2_metafelder.csv`, `reports/metafelder/fragen_<FAMILIE>.md`,
`reports/auftrag_13.md` (Dateien und Hotspot-JSONs). Shop vor jedem Schreiben geprüft: `get-shop-info` =
HeiPard, heipard.myshopify.com. Theme-Code unverändert; geändert sind nur die Startseiten-Vorlage
(Bild der Markenstory) und Dokumentation.

## Vorlauf: familie, dramaturgie, Familien-Kollektionen

- `heipard.familie` an 15 Produkten und `heipard.dramaturgie` an allen 20 gesetzt, nach dem Blatt (Status
  „Vorgabe Leon"). Die fünf bestehenden `familie`-Werte (hp-npt-210, hp-ctl-180m, hp-ctl-240m, hp-blt-050,
  hp-dgm-001) sind unverändert.
- Zehn Smart Collections angelegt wie `familie-ol-g40`: `familie-dct`, `-vit`, `-olas14`, `-blm`, `-dfm`, `-sblb`,
  dazu `-ctl`, `-blt`, `-npt`, `-dgm`, die ebenfalls fehlten. Titel „Serie <CODE>", Regel Metafeld *Familie (Code)*
  gleich Code, im Onlineshop veröffentlicht, `seo.hidden` = 1.

## 1. Metafelder

Alle 207 Zeilen des Blatts haben einen gültigen Status. 148 standen schon richtig im Shop, 59 sind neu
geschrieben (35 `familie`/`dramaturgie`, 24 Fachwerte). Typen nach der Baukasten-Tabelle, Variantenzeilen an
der Variante. Abweichungen zum Shop gab es keine.

`dimmstufen` an HP-NPT-210M ist eine Variantenzeile. Dafür gibt es seit Durchlauf 2 die Varianten-Definition
`heipard.dimmstufen` (Liste Ganzzahl, „Dimmstufen (%)", Storefront-Zugriff wie die übrigen
Varianten-Definitionen). Der Wert an HP-NPT-210M hängt jetzt an dieser Definition.

## 2. Fragen

38 Einträge *HeiPard Produktfrage* (`<familie>-frage-<n>`, z. B. `dct-frage-1`), am Metafeld `fragen` der
20 Produkte verknüpft (73 Verknüpfungen). Fragen mit eingeschränktem Geltungsbereich hängen nur dort:
`blt-frage-1` (Timer) nur an hp-blt-050, `ctl-frage-4` nur an hp-ctl-180m und -240m, `vit-frage-3` nur an
hp-vit-586l-eu-1, `vit-frage-4` nur an hp-vit-864l-eu-1. Die DGM-Fragen betreffen den Stern und hängen nur an
hp-dgm-001.

„Auto · Fragen" steht nach Leons Entscheidung in allen Sets in der Daten-Zone, auch in Standard und Long-Tail,
und ebenso in den Vorlagen `vorlage-standard` und `vorlage-longtail`. Das Block-Vokabular führt D7 jetzt bei
allen drei Dramaturgien.

## 3. Sets und Blöcke

Kicker stehen in normaler Schreibung, das Theme setzt sie in Großbuchstaben (wie bei OL-G40). Blöcke mit
„Auto · …" sind die geteilten Einträge der Vorlagen.

| Set (Handle) | Produkte | Blöcke in Reihenfolge | Daten-Zone | Bild offen |
|---|---|---|---|---|
| DCT (Hero) `dct` | hp-dct-200 | B1 Pergola im Regen · B2 Wohnzimmerfenster · R1 Modi und Timer · I1 Schieber (an/aus) · Auto Kettenplan · P1 Fernbedienung · Auto Zeitband · Auto Icon-Grid | Serienleiter, Nachweise, Lieferumfang, Fragen | keins |
| NPT (Hero) `npt` | hp-npt-210 | B1 Busch im Vorgarten · B2 Wohnzimmerfenster · R1 Modi und Timer · I1 Schieber (an/aus) · Auto Kettenplan · P1 Fernbedienung · Auto Zeitband · Auto Icon-Grid | wie DCT | keins |
| VIT 864L (Hero) `vit-864l` | hp-vit-864l-eu-1 | B1 Gartenparty · B2 Dachkante im Schnee · R1 Netzteil und IP44 · I1 Schieber 864L (`VIT_I1_01_an`, Aus per CSS) · Auto Kettenplan · P1 Fernbedienung · Auto Zeitband · Auto Icon-Grid | wie DCT | keins |
| VIT 586L (Hero) `vit-586l` | hp-vit-586l-eu-1 | wie 864L, Schieber 586L (`VIT_I1_02_an`, Aus per CSS) | wie DCT | keins |
| OLAS14 (Hero) `olas14` | hp-ola-s14-15-eu, -30-eu, -50-eu | B1 Terrasse und Pool · B2 Warmes Licht · R1 Fernbedienung und App · Steuerung (Dauer, Atem, Blinken; Basisbild `OLAS14_B2_01`) · Auto Kettenplan · P1 Fernbedienung (1:1) · Auto Zeitband · Auto Icon-Grid | wie DCT | keins |
| CTL (Standard) `ctl` | hp-ctl-180m, -240m, -210-eu-1, -400-eu-1 | B1 Tanne im Wohnzimmer (`KAT-CTL_B1_01`) · B2 Weihnachtsbaum · R1 Modi und Helligkeit · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Serienleiter, Nachweise, Lieferumfang, Fragen | keins |
| BLT (Standard) `blt` | hp-blt-050, hp-blt-100-eu-1 | B1 Gartentisch (`KAT-LED_B1_01`) · B2 Gartenparty · R1 Modi und IP44 · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | wie CTL | keins |
| BLM (Standard) `blm` | hp-blm-100-eu | B1 Gartentisch (`KAT-LED_B1_01`) · B2 Kinder · R1 Timer und IP44 · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | wie CTL | keins |
| DFM (Standard) `dfm` | hp-dfm-400-eu-2, hp-dfm-600, hp-dfm-750-eu | B1 Gartenbaum (`KAT-CLUSTER_B1_01`) · B2 Lichtfarben · R1 Modi und Helligkeit · Auto Kettenplan sonst Zeitband · D6 Kennzahl LED-Anzahl | wie CTL | `DFM_B2_01` (kommt aus Hermes) |
| SBLB (Standard) `sblb` | hp-sblb-60l-ww-new, hp-sblb-100l-ww-new | B1 Gartenzaun (`KAT-SOLAR_B1_01`) · B2 Terrasse · R1 Modi und Zuleitung · Auto Zeitband (Solar) · D6 Kennzahl Leuchtdauer | wie CTL | keins |
| DGM (Long-Tail) `dgm` | hp-dgm-001 | B1 Vorgarten im Schnee (`KAT-MOTIF_B1_01`) · R1 Außenbereich · Auto Kennzahl | Serienleiter, Nachweise, Fragen | keins |

Bezeichnungen (intern) nach Schema „DCT · B1 Pergola im Regen". Die Blöcke B1, B2, R1 und P1 teilen sich die
beiden VIT-Sets. Das Steuerungs-Basisbild von OLAS14 ist dasselbe wie das B2-Bild (Vorgabe).

**Entscheidungen im Aufbau:**
- DFM und SBLB haben fünf Plätze. D6 (LED-Anzahl bzw. Leuchtdauer) steht auf dem letzten Platz, das Icon-Grid
  entfällt dort. Bei SBLB nimmt das Solar-Zeitband den Platz von D1/D3 ein.
- OLAS14 „Linie mit Koppelplan": Der Koppelplan braucht die beleuchtete Länge, die fehlt im Blatt. Der
  Kettenplan zeigt deshalb die reduzierte Linie mit Gesamtlänge und 3 m Zuleitung.
- Texte nur aus Blatt, Faktenliste und Fragen. Wo Fakten fehlen, beschreibt der Text die Szene des Bildes.
  Die App bei OLAS14 ist im Listing-Text und in zwei Bildern belegt und nur erwähnt.
- Die B1-Texte von CTL, DFM, SBLB und DGM sind in Durchlauf 2 an die Szenen der Kategoriebilder angepasst
  (Tanne neben dem Sessel, umwickelter Gartenbaum, Holzzaun über Lavendel, Sterne im verschneiten Vorgarten),
  bei BLT und BLM an den Gartentisch in der Abenddämmerung.

## 4. Zweiter Durchlauf (2026-10-21)

- **Schieber:** DCT und NPT mit An- und Aus-Bild. VIT 864L und 586L nur mit An-Bild, das Theme leitet die
  Aus-Seite per CSS ab (abgedunkelt). `DCT_I1_01_aus` ist die Fassung aus Auftrag 12 mit Vermerk
  „Deko-Kette Feigenbaum mit aus".
- **Hotspots:** Bilder `DCT_P1_04`, `NPT_P1_06`, `VIT_P1_01`, `OLAS14_P1_01` (jetzt 1:1). Die Punkte stehen wie in
  Abschnitt 3 von Auftrag 13; sie waren mit dem Stand aus Durchlauf 1 identisch und sind neu gesetzt.
- **Kategoriebilder:** `KAT-CTL_B1_01`, `KAT-CLUSTER_B1_01`, `KAT-SOLAR_B1_01`, `KAT-MOTIF_B1_01` als B1;
  `SBLB_B2_01` als B2.
- **KAT-LED:** `KAT-LED_B1_01` lag ab 17:03 Uhr in Files und ist als B1 bei BLT und BLM eingetragen.
  `KAT-CURTAIN_B1_01` und `_B2_01` liegen ebenfalls in Files, sind aber keinem Welle-2-Block zugeordnet.
- **Offen:** `DFM_B2_01` kommt aus Hermes, der Block ist vorbereitet, das Bild leer.
- **Startseite:** `HOME-11_Markenstory_01.webp` als Bild der Markenstory (`templates/index.json`, Commit
  `365c4e5`, gepusht 17:03 Uhr). Live seit 17:12 Uhr (Prüfsumme gleich main); die Theme-Abfrage hatte den
  neuen Stand zunächst verzögert gemeldet.

## Live-Stand nach Durchlauf 2

Geprüft auf allen 20 Produktseiten (erste Variante) mit Storefront-Passwort, ohne JS-Fehler. Hotspot-Labels
ab Tablet nur bei Hover oder Fokus (geprüft an den berechneten Stilen).

| Produkt | Sichtbar (Hauptbereich) | Daten-Zone |
|---|---|---|
| hp-dct-200 | B1, B2, R1, Schieber, Kettenplan (Fläche), Hotspot, Zeitband, Icon-Grid | Serienleiter, Nachweise, Fragen |
| hp-npt-210 | B1, B2, R1, Schieber, Kettenplan (Fläche), Hotspot, Zeitband, Icon-Grid | Nachweise, Fragen |
| hp-vit-864l-eu-1, hp-vit-586l-eu-1 | B1, B2, R1, Schieber, Hotspot, Icon-Grid | Serienleiter, Nachweise, Fragen |
| hp-ola-s14-15/-30/-50-eu | B1, B2, R1, Steuerung, Kettenplan (Linie), Hotspot, Icon-Grid | Serienleiter, Nachweise, Fragen |
| hp-ctl-180m, -240m | B1, B2, R1, Icon-Grid | Serienleiter, Nachweise, Fragen |
| hp-ctl-210-eu-1, -400-eu-1 | B1, B2, R1, Icon-Grid | Serienleiter, Fragen |
| hp-blt-050, hp-blt-100-eu-1, hp-blm-100-eu | B1, B2, R1, Kettenplan, Icon-Grid | Serienleiter, Nachweise, Fragen |
| hp-dfm-400-eu-2 | B1, B2*, R1, Kettenplan | Serienleiter, Nachweise, Fragen |
| hp-dfm-600 | B1, B2*, R1, Kennzahl | Serienleiter, Nachweise, Fragen |
| hp-dfm-750-eu | B1, B2*, R1, Kettenplan, Kennzahl | Serienleiter, Nachweise, Fragen |
| hp-sblb-60l-ww-new, -100l-ww-new | B1, B2, R1, Zeitband (Solar), Kennzahl | Serienleiter, Fragen |
| hp-dgm-001 | B1, R1, Kennzahl | Serienleiter, Nachweise, Fragen |

\* ohne Bild, Text auf dem Ersatzverlauf des Themes.

**Hinweise, die der Theme-Editor zeigt (fehlende Metafelder oder Bilder):**
- DFM: B2 ohne Bild (`DFM_B2_01`).
- VIT: Kettenplan ohne Breite, Höhe oder Länge, Zeitband ohne `timer_dauer_h`.
- OLAS14: Zeitband ohne `timer_dauer_h` (im Blatt mehrdeutig). Die Spec-Kachel „Stromquelle" zeigt dort
  „[TBD]", weil `stromquelle` fehlt (im Blatt mehrdeutig).
- CTL: weder Länge noch Timer, „Kettenplan sonst Zeitband" bleibt leer. Nachweise bei 210/400 leer.
- DFM: Variante HP-DFM-600 (9 m Warmweiß) ohne Gesamtlänge, dort kein Kettenplan. Variante HP-DFM-400 (6 m
  Warmweiß) ohne LED-Anzahl, dort keine Kennzahl.
- SBLB: Nachweise leer (Schutzart im Blatt mehrdeutig).
- NPT: Serienleiter leer (Familie mit einem Produkt, Varianten unterscheiden sich in der Farbe).
- Lieferumfang: bei allen 20 leer, steht in keiner Faktenliste.

**Notiert, nichts geändert (Leons Entscheidung):**
- Serienleiter im Variantenmodus: Jede Variante ist eine Stufe. Bei Farbe und Größe wiederholen sich die
  Größen (hp-dct-200 sechs Karten, DFM ebenso; bei hp-dfm-600 steht die 9-m-Variante ohne Gesamtlänge am
  Ende, Reihenfolge 9, 18, 18, 9 m). Gruppierung nach Größe wäre eine Code-Änderung.
- `familie-dgm` enthält Stern (hp-dgm-001), Spirale (hp-dgm-002) und Geschenkboxen (hp-dgm-048); die
  Serienleiter zeigt sie als eine Serie.

## Produkt-URLs zum Durchsehen

Shop passwortgeschützt, Passwort bei Leon. Startseite: https://heipard.myshopify.com/

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
