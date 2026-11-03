# Welle 1 Grundausbau: Bericht

Stand 2026-11-03, 11:50 Uhr. Auftrag: `heipard-theme-auftrag-welle1-grundausbau.md` (von Leon). Quellen im
Asset-Ordner: `reports/metafelder/welle1_metafelder.csv` (1194 Zeilen), `reports/metafelder/fragen_<FAMILIE>.md`
und für CTL und DGM `fragen_<FAMILIE>_welle1.md` (151 Fragen), `reports/auftrag_15.md` Teil B, für die Blocktexte
zusätzlich `reports/hermes/welle1_faktensatz.md`. Grundlage im Repo: `docs/heipard-welle1-feature-stand.md`.
Shop vor jedem Schreiben geprüft: `get-shop-info` = HeiPard, heipard.myshopify.com. Theme-Code unverändert,
geändert ist nur Dokumentation.

## Kurzfassung

- **97 Produkte in 48 Familien** haben ein eigenes Feature-Set: 38 Standard-Sets, 10 Long-Tail-Sets,
  125 neue Blöcke.
- **Metafelder:** 350 geschrieben, 663 standen schon richtig, 6 Gesamtlängen nicht überschrieben (Shop-Wert gilt).
- **Fragen:** 149 angelegt, 313 Verknüpfungen an 93 Produkten.
- **Familien-Kollektionen:** 46 neu, jetzt hat jede der 48 Familien eine.
- **Hauptbilder:** RSP und RFM korrigiert, STT auf Entwurf, RIT, RNM und RTM unverändert.
- **Live geprüft:** 96 Seiten ohne Fehler, Texte, Bilder, Lieferumfang und Fragen wie geplant. hp-stt-050 ist
  Entwurf und liefert 404.
- **Offen:** 37 B2-Bilder aus Hermes (`<FAMILIE>_B2_01`), Datenlücken laut Theme-Editor-Hinweisen.

## 1. Hauptbild-Korrekturen

| Produkt | Ergebnis |
|---|---|
| hp-rsp-180 | `HP-RSP-180_GAL_02` (Szene an der Haustür) steht auf Position 1 und ist Variantenbild von HP-RSP-180. Das Fremdmarken-Bild (Govee) ist vom Produkt gelöst, die Datei bleibt in Files. 12 Medien. |
| hp-rfm-600 | `HP-RFM-600_GAL_02` (lokales RFM-B2-Szenenbild) steht auf Position 1. Das Sammelbild ist nur von RFM gelöst, die Datei und die übrigen Verwendungen bleiben. 3 Medien. |
| hp-rit-280, hp-rnm-200, hp-rtm-400 | Bild bleibt, nur gelistet. |
| hp-stt-050 | auf **Entwurf** gesetzt (Dublette von hp-ol-st38-50). |

Weder RSP noch RFM hatten `heipard.galerie_medien`, der Farbfilter der Galerie ist nicht betroffen. Live ist
`og:image` bei beiden das neue Bild.

## 2. Metafelder

Geschrieben wurden die Zeilen mit Status *eindeutig*, *bestätigt*, *Titel maßgeblich* und *Vorgabe Leon*
(`familie`, `dramaturgie`); *Aufdruck* kommt im Blatt nicht vor. Variantenzeilen hängen an der Variante,
Familienzeilen am Produkt. Ohne die 6 Abweichungen bleiben 1188 Zeilen. Die 278 Lieferumfang-Zeilen sind je
Produkt bzw. Variante zu einem Feld zusammengefasst (103), so werden daraus 1013 Metafelder. Davon standen 663 schon richtig im Shop, **350 sind neu
geschrieben** (26 davon an Varianten), ohne Fehler:

| Feld | geschrieben |
|---|---|
| `lieferumfang` | 103 |
| `dramaturgie` | 97 |
| `familie` | 66 (31 standen schon richtig, jetzt haben alle 97 einen Wert) |
| Fachwerte | 84: `led_anzahl` 17, `anzahl_leuchtmodi` 10, `gesamtlaenge_m` 10, `farbtemperatur_kelvin` 9, `ip_schutzart` 6, `zuleitung_m` 5, `spannung_v` 5, `dimmstufen_anzahl` 5, `timer_dauer_h` 4, `akkulaufzeit_h` 4, `breite_m` 2, `hoehe_m` 2, je 1 `dimmstufen`, `birnenabstand_cm`, `koppelbar_bis`, `beleuchtete_laenge_m`, `fernbedienung` |

- **dramaturgie:** 85 Produkte `standard`, 12 `longtail` (Motivleuchten, Lichterbäume, Weihnachtsbäume, erkannt
  am Tag `kat-motif` bzw. `kat-weihnachtsbaum`): hp-bsx-002, hp-dgm-002, hp-dgm-048, hp-fsf-120, hp-fxf-001,
  hp-rmp-180, hp-rsp-180, hp-wbf-180, hp-wbf-210, hp-wwf-180, pec-150g, pvc-150g. hp-ol-30 und hp-ol-50 (OL-G40)
  sind nicht Teil der 97 und bleiben `hero`.
- **lieferumfang:** aus dem Blatt, Reihenfolge Produkt zuerst, dann Zubehör, Anleitung zuletzt. Eine Variante mit
  eigenen Zeilen bekommt die Produktzeilen plus ihre eigenen.
- **Titel maßgeblich:** 41 Zeilen. 3 davon gehören zu den Abweichungen unten. Die übrigen 38 sind vor dem Schreiben
  gegen den Shop-Titel (32) bzw. den Amazon-Titel der SKU (6) geprüft, alle Werte stehen dort. 6 neu geschrieben,
  32 standen schon richtig.
- **Abweichungen Gesamtlänge (Shop-Wert gilt, nicht geschrieben):**

| Produkt | Variante | Shop | Blatt |
|---|---|---|---|
| hp-isl-264 | HP-ISL-264 | 11,25 m | 8,25 m |
| hp-isl-264 | HP-ISL-108M | 6,38 m | 3,38 m |
| hp-isl-264 | HP-ISL-264W | 11,25 m | 8,25 m |
| hp-dlm-100h | HP-DLM-100H | 13 m | 10 m |
| hp-dlm-100h | HP-DLM-200H | 23 m | 20 m |
| hp-u20-200 | HP-U20-400 | 23 m | 20 m |

  Der Unterschied ist jeweils die Zuleitung von 3 m: Der Shop führt die Gesamtlänge, das Blatt die Kettenlänge.
  Die Blocktexte nennen die Kettenlänge (ISL „von 3,38 m mit 108 LEDs“, DLM „100 LEDs auf 10 m“, U20 „auf 10 m
  … dazu 3 m Zuleitung“), passend zum Kettenplan, der Zuleitung und Kette getrennt zeigt.

**Familien-Kollektionen:** 46 Smart Collections neu, wie in Welle 2: Handle `familie-<code>`, Titel
„Serie <CODE>“, Regel Metafeld *Familie (Code)* gleich Code, im Onlineshop veröffentlicht, `seo.hidden` = 1.
`familie-ctl` und `familie-dgm` gab es schon aus Welle 2, sie enthalten jetzt auch die Welle-1-Produkte.

## 3. Fragen

149 Einträge *HeiPard Produktfrage* (`<familie>-frage-<n>`, für CTL und DGM `ctl-w1-frage-<n>` und
`dgm-w1-frage-<n>`, weil `ctl-frage-…` und `dgm-frage-…` aus Welle 2 belegt sind), am Metafeld `fragen` verknüpft:
**313 Verknüpfungen an 93 Produkten**. Fragen mit „Gilt für“ hängen nur an den genannten Produkten.

- **Angepasst (4)**, weil die Antwort nur für eine Variante gilt und das Produkt mehrere hat:
  - RPM „Wie lang ist die Lichterkette, und wie viele LEDs hat sie?“ → „Die 20-m-Kette hat 200 LEDs.“
  - RPM „Wie viele Leuchtmodi gibt es?“ → „Die 20-m-Kette hat 9 Leuchtmodi.“
  - RPM „Kann ich die Lichterkette auch draußen nutzen?“ → „Die 20-m-Kette ist nach IP67 staubdicht und gegen
    zeitweiliges Untertauchen geschützt.“
  - TPM „Wie viele Leuchtmodi gibt es?“ → „In der Variante mit 400 LEDs sind es 8 Leuchtmodi.“
- **Ausgelassen (2):** TPM „Wie viele LEDs hat der Baum?“ (400 LEDs, nur HP-TPM-400) und BAUM-PVC „Wie hoch ist
  der Baum?“ (1,5 m, nur PVC-150G). Die Antwort wäre an den übrigen Varianten falsch.
- **Weniger als 3 Fragen:** WBF, TPM, VAM je 2; BAUM-PEC, DPT, FSF, RMP je 1.
- **Ohne Fragen:** BSM, BSX, FXF, BAUM-PVC (in den Quellen keine bzw. nach dem Auslassen keine).

## 4. Sets und Blöcke

**Aufbau Standard:** B1 Kategoriebild nach kat-Tag → B2 (Bild leer, Text steht) → R1 → Auto Kettenplan sonst
Zeitband → Auto Icon-Grid. **Aufbau Long-Tail:** B1 → R1 → Auto Kennzahl (D6). Daten-Zone in beiden: Auto
Serienleiter, Nachweise, Lieferumfang, Fragen. Jedes Set hat eine Sektionsüberschrift (Kicker und Headline).

- **Handles:** Blöcke `<code>-b1`, `-b2`, `-r1`, Sets `<code>` (CTL und DGM: `ctl-w1`, `dgm-w1`, weil `ctl` und
  `dgm` aus Welle 2 belegt sind). **Bezeichnungen** nach Schema „OLT · B1 Drinnen und draußen“, Sets
  „OLT (Standard)“ bzw. „BSX (Long-Tail)“.
- **Texte:** nach Textregel 21.10 (Kicker Thema, Headline Nutzen, zwei Sätze Situation plus Fakt), nur aus Blatt
  und Faktensatz. Geprüft: Kicker 2 bis 3 Wörter, genau zwei Sätze, keine Gedankenstriche, keine Reizwörter
  (Garantie, Herkunft, Superlative), kein Wort ab fünf Buchstaben doppelt in Headline und Text. Alle 125 bestehen.
- **Ohne Zahl im Text (15),** der Fakt ist dort eine Eigenschaft: OLT R1, OL R1, CL R1, BSM B1, DPT B2, SOLM R1,
  STT R1, TPM B1, VAM B2, FSF B1, FSF R1, FXF B1, RMP B1, WBF B1, BAUM-PVC B1.
- **R1 entfällt mangels weiterer Fakten (9):** BSM, DPT, TPM, VAM (Standard) sowie BSX, FXF, WBF, BAUM-PEC,
  BAUM-PVC (Long-Tail).
- **Bewusst ausgelassen:** RSP-Höhe und BAUM-PEC-Größen (im Blatt zurückgestellt). Die Texte nennen dort LED-Zahl
  bzw. „3 Größen“.

Spalte „Live“: was auf den Seiten sichtbar ist, Hauptbereich / Daten-Zone; (4/5) heißt „bei 4 von 5 Produkten“.
Leere Blöcke blendet das Theme aus.

| Set | Produkte | Blöcke in Reihenfolge | Live | Fragen | Bild offen |
|---|---|---|---|---|---|
| OLG (Standard) `olg` | hp-olg-100, hp-olg-200, hp-olg-200m, hp-olg-200w, hp-olg-300-eu, hp-olg-400, hp-olg-600, hp-olg-800 | B1 Baum und Zaun (`KAT-CTL_B1_01`) · B2 LED-Anzahl · R1 Leuchtmodi · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid / Serienleiter, Nachweise, Lieferumfang, Fragen | 3 | `OLG_B2_01` (Hermes) |
| OLT (Standard) `olt` | hp-olt-100, hp-olt-150, hp-olt-200, hp-olt-300-eu, hp-olt-400, hp-olt-600, hp-olt-800 | B1 Drinnen und draußen (`KAT-CTL_B1_01`) · B2 Längen · R1 Warmweiß · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid / Serienleiter, Nachweise, Lieferumfang, Fragen | 3 | `OLT_B2_01` (Hermes) |
| OL (Standard) `ol` | hp-ol-100, hp-ol-15, hp-ol-15-g, hp-ol-25, hp-ol-75 | B1 Fest im Freien (`KAT-LED_B1_01`) · B2 Längen · R1 Netzteil · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid (4/5) / Serienleiter, Nachweise (4/5), Lieferumfang (4/5), Fragen | 3 | `OL_B2_01` (Hermes) |
| OLH-G40 (Standard) `olh-g40` | hp-olh-g40-15, hp-olh-g40-20, hp-olh-g40-25, hp-olh-g40-35, hp-olh-g40-50 | B1 Wintergarten und Terrasse (`KAT-LED_B1_01`) · B2 Längen · R1 2200 Kelvin · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid (4/5) / Serienleiter, Lieferumfang, Fragen | 3 | `OLH-G40_B2_01` (Hermes) |
| BSL (Standard) `bsl` | hp-bsl-100-1p, hp-bsl-100-2p, hp-bsl-50-1p, hp-bsl-50-2p | B1 Regal und Fenster (`KAT-LED_B1_01`) · B2 LED-Anzahl · R1 Leuchtmodi · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid / Serienleiter, Nachweise, Lieferumfang, Fragen | 4 | `BSL_B2_01` (Hermes) |
| CSL (Standard) `csl` | hp-csl-200-c, hp-csl-200-w, hp-csl-300-c, hp-csl-300-w | B1 Fenster (`KAT-CURTAIN_B1_01`) · B2 Timer · R1 Modi und Helligkeit · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid / Serienleiter, Nachweise, Lieferumfang, Fragen | 4 | `CSL_B2_01` (Hermes) |
| CTL (Welle 1, Standard) `ctl-w1` | hp-ctl-180, hp-ctl-240, hp-ctl-300-eu, hp-ctl-360-eu | B1 Tanne im Wohnzimmer (`KAT-CTL_B1_01`) · B2 Innen und außen · R1 Dimmstufen · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid / Serienleiter, Nachweise, Lieferumfang, Fragen | 4 | `CTL_B2_01` (Hermes) |
| OL-S11 (Standard) `ol-s11` | hp-ol-s11-15, hp-ol-s11-25, hp-ol-s11-30, hp-ol-s11-50 | B1 Terrasse im Regen (`KAT-LED_B1_01`) · B2 Längen · R1 Modi und Helligkeit · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid / Serienleiter, Nachweise, Lieferumfang, Fragen | 4 | `OL-S11_B2_01` (Hermes) |
| OL-ST38 (Standard) `ol-st38` | hp-ol-st38-15, hp-ol-st38-25, hp-ol-st38-30, hp-ol-st38-50 | B1 Terrasse im Regen (`KAT-LED_B1_01`) · B2 Leuchtmodi · R1 Kelvin · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid / Serienleiter, Nachweise, Lieferumfang, Fragen | 3 | `OL-ST38_B2_01` (Hermes) |
| ISL (Standard) `isl` | hp-isl-264, hp-isl-360-eu, hp-isl-486 | B1 Dachkante (`KAT-ICICLE_B1_01`) · B2 Längen · R1 Lichtfarben · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid / Serienleiter, Nachweise, Lieferumfang, Fragen | 3 | `ISL_B2_01` (Hermes) |
| OLA-G40 (Standard) `ola-g40` | hp-ola-g40-15-eu, hp-ola-g40-27-eu, hp-ola-g40-42-eu | B1 Terrasse (`KAT-LED_B1_01`) · B2 Längen · R1 Modi und Helligkeit · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid / Serienleiter, Nachweise, Lieferumfang, Fragen | 4 | `OLA-G40_B2_01` (Hermes) |
| OLS-G40 (Standard) `ols-g40` | hp-ols-g40-16, hp-ols-g40-25, hp-ols-g40-35 | B1 Solarpanel (`KAT-SOLAR_B1_01`) · B2 Birnenzahl · R1 Modi und Helligkeit · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid / Serienleiter, Lieferumfang, Fragen | 4 | `OLS-G40_B2_01` (Hermes) |
| RGB (Standard) `rgb` | hp-rgb-200a, hp-rgb-300a, hp-rgb-500a | B1 Fenster und Garten (`KAT-LED_B1_01`) · B2 LED-Anzahl · R1 Leuchtmodi · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid / Serienleiter, Nachweise, Lieferumfang, Fragen | 4 | `RGB_B2_01` (Hermes) |
| CL (Standard) `cl` | hp-cl-1-eu, hp-cl-2-eu | B1 Camping (`KAT-LED_B1_01`) · B2 3000 Kelvin · R1 USB-Ladekabel · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid / Serienleiter, Nachweise, Lieferumfang, Fragen | 4 | `CL_B2_01` (Hermes) |
| OLS-S17 (Standard) `ols-s17` | hp-ols-s17-16, hp-ols-s17-16-eu | B1 Solarpanel (`KAT-SOLAR_B1_01`) · B2 Timer · R1 Leuchtmodi · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid / Serienleiter, Lieferumfang, Fragen | 4 | `OLS-S17_B2_01` (Hermes) |
| SCWL (Standard) `scwl` | hp-scwl-10m2p-mc, hp-scwl-15m2p-mc | B1 Solarstrom (`KAT-SOLAR_B1_01`) · B2 2er-Set · R1 LED-Abstand · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan / Serienleiter, Lieferumfang, Fragen | 4 | `SCWL_B2_01` (Hermes) |
| BSM (Standard) `bsm` | hp-bsm-002 | B1 Fenster und Wand (`KAT-MOTIF_B1_01`) · B2 2er-Set · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | nichts / Lieferumfang | 0 | `BSM_B2_01` (Hermes) |
| DLM (Standard) `dlm` | hp-dlm-100h | B1 Hauseingang (`KAT-LED_B1_01`) · B2 Längen · R1 Modi und Helligkeit · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid / Serienleiter, Nachweise, Lieferumfang, Fragen | 4 | `DLM_B2_01` (Hermes) |
| DNM (Standard) `dnm` | hp-dnm-208 | B1 Vorgarten (`KAT-NET_B1_01`) · B2 IP67 · R1 Modi und Helligkeit · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid / Nachweise, Lieferumfang, Fragen | 4 | `DNM_B2_01` (Hermes) |
| DPM (Standard) `dpm` | hp-dpm-300 | B1 Kabelspule (`KAT-LED_B1_01`) · B2 Innen und außen · R1 Modi und Helligkeit · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid / Serienleiter, Nachweise, Lieferumfang, Fragen | 4 | `DPM_B2_01` (Hermes) |
| DPT (Standard) `dpt` | hp-dpt-300 | B1 Kabelrolle (`KAT-LED_B1_01`) · B2 Warmweiß · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan / Serienleiter, Lieferumfang, Fragen | 1 | `DPT_B2_01` (Hermes) |
| OLS-A60 (Standard) `ols-a60` | hp-ols-a60-16-eu | B1 Solarpanel (`KAT-SOLAR_B1_01`) · B2 Timer · R1 Leuchtmodi · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid / Lieferumfang, Fragen | 4 | `OLS-A60_B2_01` (Hermes) |
| OLS-S11 (Standard) `ols-s11` | hp-ols-s11-16 | B1 Solarpanel (`KAT-SOLAR_B1_01`) · B2 Fernbedienung · R1 Modi und Helligkeit · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid / Serienleiter, Lieferumfang, Fragen | 4 | `OLS-S11_B2_01` (Hermes) |
| OLS-ST38 (Standard) `ols-st38` | hp-ols-st38-16 | B1 Solarpanel (`KAT-SOLAR_B1_01`) · B2 Birnenzahl · R1 Modi und Helligkeit · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid / Serienleiter, Lieferumfang, Fragen | 4 | `OLS-ST38_B2_01` (Hermes) |
| RCT (Standard) `rct` | hp-rct-400 | B1 Fenster (`KAT-CURTAIN_B1_01`) · B2 Leuchtmodi · R1 IP44 · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid / Nachweise, Lieferumfang, Fragen | 4 | `RCT_B2_01` (Hermes) |
| RFM (Standard) `rfm` | hp-rfm-600 | B1 Lichtband (`KAT-LED_B1_01`) · B2 Hausfassade (`HP-RFM-600_GAL_02`) · R1 IP44 · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid / Nachweise, Lieferumfang, Fragen | 4 | keins |
| RIT (Standard) `rit` | hp-rit-280 | B1 Dachkante (`KAT-ICICLE_B1_01`) · B2 IP44 · R1 Timer · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid / Nachweise, Lieferumfang, Fragen | 4 | `RIT_B2_01` (Hermes) |
| RNM (Standard) `rnm` | hp-rnm-200 | B1 Vorgarten (`KAT-NET_B1_01`) · B2 IP44 · R1 LED-Abstand · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid / Nachweise, Lieferumfang, Fragen | 4 | `RNM_B2_01` (Hermes) |
| RPM (Standard) `rpm` | hp-rpm-200 | B1 Kabelrolle (`KAT-LED_B1_01`) · B2 IP67 · R1 Leuchtmodi · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid / Serienleiter, Nachweise, Lieferumfang, Fragen | 3 | `RPM_B2_01` (Hermes) |
| RTM (Standard) `rtm` | hp-rtm-400 | B1 Ring am Wipfel (`KAT-LED_B1_01`) · B2 Innen und außen · R1 LED-Abstand · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid / Nachweise, Lieferumfang, Fragen | 4 | `RTM_B2_01` (Hermes) |
| SOLM (Standard) `solm` | hp-solm-12m-ww | B1 Solarstrom (`KAT-SOLAR_B1_01`) · B2 Länge · R1 Wandhalterung · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan / Lieferumfang, Fragen | 4 | `SOLM_B2_01` (Hermes) |
| STT (Standard) `stt` | hp-stt-050 | B1 Fest im Freien (`KAT-LED_B1_01`) · B2 2700 Kelvin · R1 Fernbedienung · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Entwurf, nicht live geprüft | 4 | `STT_B2_01` (Hermes) |
| TPM (Standard) `tpm` | hp-tpm-400-eu-1 | B1 Ring am Wipfel (`KAT-LED_B1_01`) · B2 Modi und Helligkeit · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Icon-Grid / Nachweise, Lieferumfang, Fragen | 2 | `TPM_B2_01` (Hermes) |
| U20 (Standard) `u20` | hp-u20-200 | B1 Gartenweg (`KAT-LED_B1_01`) · B2 Längen · R1 Dimmstufen · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid / Serienleiter, Nachweise, Lieferumfang, Fragen | 4 | `U20_B2_01` (Hermes) |
| UCP (Standard) `ucp` | hp-ucp-200 | B1 Fenster (`KAT-CURTAIN_B1_01`) · B2 Modi und Helligkeit · R1 IP44 · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid / Nachweise, Lieferumfang, Fragen | 4 | `UCP_B2_01` (Hermes) |
| UCT (Standard) `uct` | hp-uct-200-eu | B1 Fenster (`KAT-CURTAIN_B1_01`) · B2 Lichtfarben · R1 IP44 · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid / Nachweise, Lieferumfang, Fragen | 3 | `UCT_B2_01` (Hermes) |
| VAM (Standard) `vam` | hp-vam-400l-eu-1 | B1 Hausfront (`KAT-LED_B1_01`) · B2 Lichtfarben · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan / Lieferumfang, Fragen | 2 | `VAM_B2_01` (Hermes) |
| VLM (Standard) `vlm` | hp-vlm-100l | B1 Innen und außen (`KAT-LED_B1_01`) · B2 Längen · R1 Leuchtmodi · Auto Kettenplan sonst Zeitband · Auto Icon-Grid | Kettenplan, Icon-Grid / Serienleiter, Nachweise, Lieferumfang, Fragen | 4 | `VLM_B2_01` (Hermes) |
| BSX (Long-Tail) `bsx` | hp-bsx-002 | B1 Adventszeit (`KAT-MOTIF_B1_01`) · Auto Kennzahl | nichts / Lieferumfang | 0 | keins |
| DGM (Welle 1, Long-Tail) `dgm-w1` | hp-dgm-002, hp-dgm-048 | B1 Timer (`KAT-MOTIF_B1_01`) · R1 LED-Anzahl · Auto Kennzahl | Kennzahl / Serienleiter, Nachweise (1/2), Lieferumfang, Fragen | 3 | keins |
| FSF (Long-Tail) `fsf` | hp-fsf-120 | B1 Vorgarten (`KAT-MOTIF_B1_01`) · R1 Fernbedienung · Auto Kennzahl | nichts / Lieferumfang, Fragen | 1 | keins |
| FXF (Long-Tail) `fxf` | hp-fxf-001 | B1 Advent (`KAT-MOTIF_B1_01`) · Auto Kennzahl | nichts / Lieferumfang | 0 | keins |
| RMP (Long-Tail) `rmp` | hp-rmp-180 | B1 Hof und Garten (`KAT-MOTIF_B1_01`) · R1 2700 Kelvin · Auto Kennzahl | Kennzahl / Lieferumfang, Fragen | 1 | keins |
| RSP (Long-Tail) `rsp` | hp-rsp-180 | B1 Lichterkegel (`KAT-BAUM_B1_01`) · R1 Leuchtmodi · Auto Kennzahl | Kennzahl / Serienleiter, Lieferumfang, Fragen | 4 | keins |
| WBF (Long-Tail) `wbf` | hp-wbf-180, hp-wbf-210 | B1 Warmweiß (`KAT-MOTIF_B1_01`) · Auto Kennzahl | Kennzahl / Serienleiter, Lieferumfang, Fragen | 2 | keins |
| WWF (Long-Tail) `wwf` | hp-wwf-180 | B1 Kamin und Hauseingang (`KAT-MOTIF_B1_01`) · R1 LED-Anzahl · Auto Kennzahl | Kennzahl / Serienleiter, Nachweise, Lieferumfang, Fragen | 4 | keins |
| BAUM-PEC (Long-Tail) `baum-pec` | pec-150g | B1 Adventszeit (`KAT-BAUM_B1_01`) · Auto Kennzahl | Kennzahl / Serienleiter, Lieferumfang, Fragen | 1 | keins |
| BAUM-PVC (Long-Tail) `baum-pvc` | pvc-150g | B1 Eingang (`KAT-BAUM_B1_01`) · Auto Kennzahl | Kennzahl / Lieferumfang | 0 | keins |

**Bilder:** In 37 Standard-Sets ist B2 ohne Bild, die Seiten zeigen dort die ruhige Bildfläche. Die Bilder kommen
später aus Hermes als `<FAMILIE>_B2_01` und werden am Block `<code>-b2` eingetragen. Nur RFM hat schon ein B2
(`HP-RFM-600_GAL_02`, dasselbe Bild wie das neue Hauptbild). RSP und WWF haben lokale Szenenbilder, sind aber
Long-Tail ohne B2: Das RSP-Bild ist jetzt Hauptbild, das WWF-Bild ist nicht verbaut. Long-Tail-Sets haben kein
offenes Bild.

## 5. Live-Prüfung (2026-11-03, 11:37 Uhr)

Alle 97 Seiten mit Shop-Passwort geladen und gegen den Plan geprüft:

- 96 Seiten 200, hp-stt-050 404 (Entwurf). Keine Liquid- oder Übersetzungsfehler.
- Bei allen 96 stimmen Sektionsüberschrift, Kicker, Headline und Text jedes Blocks, das B1-Kategoriebild und bei RFM
  das B2-Bild.
- Lieferumfang wie geschrieben, Fragen in der geplanten Reihenfolge mit Antwort.
- Bei allen Standard-Produkten außer BSM und TPM zeigt der Kettenplan, ein Ausweich auf das Zeitband war nirgends
  nötig.

## Theme-Editor-Hinweise

Diese Hinweise zeigt der Theme-Editor über der Sektion, Kunden sehen sie nicht. Sie entstehen aus fehlenden
Metafeldern, die Quellen geben die Werte nicht her.

- **Kettenplan sonst Zeitband** nicht angezeigt (weder Länge noch Timer): hp-bsm-002, hp-tpm-400-eu-1.
- **Icon-Grid** nicht angezeigt (kein `timer_dauer_h`, `dimmstufen`, `koppelbar_bis`): hp-ol-15-g, hp-olh-g40-15,
  hp-scwl-10m2p-mc, hp-scwl-15m2p-mc, hp-bsm-002, hp-dpt-300, hp-solm-12m-ww, hp-vam-400l-eu-1.
- **Kennzahl** nicht angezeigt (kein `akkulaufzeit_h`, `hoehe_m`, `beleuchtete_laenge_m`, `led_anzahl`,
  `farbtemperatur_kelvin`): hp-bsx-002, hp-fsf-120, hp-fxf-001.
- **Nachweise** nicht angezeigt (kein `ip_schutzart`, `spannung_v`, `ce_kennzeichnung`): hp-ol-15-g, hp-olh-g40-15,
  -20, -25, -35, -50, hp-ols-g40-16, -25, -35, hp-ols-s17-16, -16-eu, hp-scwl-10m2p-mc, -15m2p-mc, hp-bsm-002,
  hp-dpt-300, hp-ols-a60-16-eu, hp-ols-s11-16, hp-ols-st38-16, hp-solm-12m-ww, hp-vam-400l-eu-1, hp-bsx-002,
  hp-dgm-048, hp-fsf-120, hp-fxf-001, hp-rmp-180, hp-rsp-180, hp-wbf-180, hp-wbf-210, pec-150g, pvc-150g.
- **Lieferumfang** nicht angezeigt: hp-ol-15-g (keine Zeile im Blatt).
- **Fragen** nicht angezeigt: hp-bsm-002, hp-bsx-002, hp-fxf-001, pvc-150g.
- Kein Hinweis „Vorlage“ mehr: alle 97 Produkte haben ein eigenes Set.

Die Serienleiter fehlt bei 18 Einzelprodukten ohne zweite Stufe (hp-dnm-208, hp-ols-a60-16-eu, hp-rct-400,
hp-rfm-600, hp-rit-280, hp-rnm-200, hp-rtm-400, hp-solm-12m-ww, hp-tpm-400-eu-1, hp-ucp-200, hp-uct-200-eu,
hp-vam-400l-eu-1, hp-rmp-180, hp-fsf-120, hp-fxf-001, hp-bsx-002, hp-bsm-002, pvc-150g). Das ist so gewollt,
`familie` ist überall gesetzt, der Editor zeigt dafür keinen Hinweis.

## Weitere Auffälligkeiten (nichts geändert)

- **KAT-Bild folgt dem Tag:** RGB trägt `kat-smart`, dafür gibt es kein Kategoriebild, B1 nutzt `KAT-LED_B1_01`.
  RTM und TPM (Baum-Lichterketten mit Ring) und RFM (Cluster) tragen `kat-led` und bekommen `KAT-LED_B1_01`;
  `KAT-CTL_B1_01` bzw. `KAT-CLUSTER_B1_01` würden besser passen, wenn die Tags angepasst werden.
- **BSM ohne kat-Tag:** hp-bsm-002 (Hängedeko Hirsch) hat keinen `kat-`Tag, fehlt deshalb in den
  Kategorie-Kollektionen und steht auf `standard`, während das Gegenstück BSX (Stern) als Motiv-Deko `longtail`
  ist. B1 nutzt `KAT-MOTIF_B1_01`. Auf `longtail` umstellen, wenn Leon das so sieht.
- **Installation & Pflege** kommt aus dem Metaobjekt je kat-Tag. OLG und OLT tragen `kat-christmas-tree-lights`
  und zeigen den Baum-Text (Ring an der Baumspitze).
- **BSL Batterien:** Das Blatt vermerkt „Batterien nicht enthalten“ (Amazon-Attribut und Text) nur im Hinweis,
  nicht als Lieferumfang-Zeile. Der Block zeigt Kette und Batteriekasten (hp-bsl-100-1p nur die Kette, dort fehlt
  die Batteriekasten-Zeile im Blatt). Eine Zeile „Batterien nicht enthalten“ würde das Theme ohne Häkchen zeigen,
  braucht aber Leons Freigabe.
- **ISL-264 Lieferumfang:** Am Produkt steht nur „1 × Fernbedienung“ (die einzige Familienzeile), die vollständigen
  Listen hängen an den sechs Varianten (Kette, Fernbedienung, bei 108M, 108W, 264M, 264W zusätzlich die
  Bedienungsanleitung). Die Seite zeigt die Liste der gewählten Variante.
- **Serienleiter CTL:** `familie` CTL umfasst Welle 2 und Welle 1, die Leiste zeigt 8 Produkte (180M, 240M,
  210, 400 und 180, 240, 300, 360). Bei DGM ebenso Stern, Spirale und Geschenkboxen (schon notiert).
- **Serienleiter bei Varianten:** hp-rsp-180 zeigt sich zweimal, pec-150g dreimal (eine Stufe je Variante, offener
  Punkt aus Welle 2).
- **STT:** Das Set `stt` ist angelegt und verknüpft, das Produkt bleibt Entwurf.

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
