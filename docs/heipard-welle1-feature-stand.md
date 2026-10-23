# Welle 1: Feature-Stand

**Stand 2026-10-23, nur gelesen** (Bulk-Abfrage über die Admin-API, keine Änderungen im Shop). Grundlage für den
nächsten Block. Welle 1 heißt hier: alle Produkte außer den 20 aus Welle 2, also 99 Produkte.

## Kurzfassung

- **Feature-Set:** In Welle 1 hat nur OL-G40 ein Set (hp-ol-30 und hp-ol-50, Set `ol-g40`, hero). Keine weitere
  Welle-1-Familie hat heute ein Set.
- **Longtail ohne Set:** 97 Produkte. `dramaturgie` ist bei allen leer, damit gelten sie als longtail (Theme-
  Default). Sie zeigen die Long-Tail-Vorlage, deren Bild- und Textblöcke leer sind. Sichtbar sind nur die
  automatischen Teile: Kennzahl, Technische Details, Nachweise, Installation & Pflege, Serienleiter bei Varianten
  oder gesetzter Familie (live geprüft an hp-isl-264, hp-csl-300-c, hp-olt-200).
- **familie:** bei 31 der 97 gesetzt, bei 66 leer. Ohne `familie` gehört das Produkt zu keiner
  Kollektion `familie-…`, die Serienleiter zeigt dann höchstens die eigenen Varianten.
- **Kettenplan:** vollständig bei 17, nur Gesamtlänge (reduzierte Linie) bei 40, je Variante
  unterschiedlich bei 4, gar keine Werte bei 36.
- **Timer / Zeitband:** `timer_dauer_h` bei 5 der 86 Netz- und Batterieprodukte gepflegt; Solar-Leuchtdauer
  (`akkulaufzeit_h`) bei 7 der 11 Solarprodukte. Ob ein Produkt überhaupt einen Timer hat, sagt die
  Spalte „Fakten: Timer" (Faktenliste der Asset-Pipeline).
- **Lieferumfang:** bei 0 der 97 gepflegt. Die Faktenlisten enthalten keinen Lieferumfang, er muss
  wie bei Welle 2 aus einem eigenen Blatt kommen.
- **Faktenlisten:** für 119 der 143 Welle-1-SKUs ohne Set vorhanden (`Heipard Assets/reports/fakten`).
- **Welle-1-Produkte in Welle-2-Familien:** hp-ctl-180, hp-ctl-240, hp-ctl-300-eu, hp-ctl-360-eu (Serie CTL,
  ohne `familie`, ohne Set) und hp-dgm-002, hp-dgm-048 (Familie DGM, ohne Set; das DGM-Set ist auf den Stern
  geschrieben).

## Familien

Eine Zeile je Serie (`serie-…`-Tag). Zahlen „x/n" = Produkte mit Wert / Produkte der Serie.

| Serie | Kategorie | Produkte | Set | familie gesetzt | Kettenplan voll / nur G / teils / fehlt | Timer bzw. Solar-Leuchtdauer | Lieferumfang | Faktenlisten (SKUs) | Hinweise |
|---|---|---|---|---|---|---|---|---|---|
| BSL | led | 4 | – | 1/4 (BSL) | 0 / 3 / 0 / 1 | 0/4 | 0/4 | 3/4 | pruefen-varianten ×1; todo-text ×1 |
| BSM | stringlights | 1 | – | 1/1 (BSM) | 0 / 0 / 0 / 1 | 0/1 | 0/1 | 0/1 | todo-kategorie ×1; todo-text ×1 |
| BSX | motif | 1 | – | 1/1 (BSX) | 0 / 0 / 0 / 1 | 0/1 | 0/1 | 0/1 | todo-text ×1 |
| CL | led | 2 | – | 0/2 | 0 / 2 / 0 / 0 | 0/2 | 0/2 | 2/2 | – |
| CSL | curtain | 4 | – | 2/4 (CSL) | 2 / 0 / 0 / 2 | 2/4 | 0/4 | 2/4 | todo-text ×2 |
| CTL | christmas-tree-lights | 4 | – | 0/4 | 0 / 0 / 0 / 4 | 0/4 | 0/4 | 4/4 | Welle-2-Familie CTL (Sets `ctl`, `ctl-m`) |
| DGM | motif | 2 | – | 2/2 (DGM) | 0 / 0 / 0 / 2 | 2/2 | 0/2 | 2/2 | Welle-2-Familie DGM (Set `dgm`, auf den Stern geschrieben); todo-text ×2 |
| DLM | led | 1 | – | 0/1 | 1 / 0 / 0 / 0 | 0/1 | 0/1 | 2/2 | todo-text ×1 |
| DNM | net | 1 | – | 0/1 | 1 / 0 / 0 / 0 | 0/1 | 0/1 | 2/2 | todo-text ×1 |
| DPM | led | 1 | – | 1/1 (DPM) | 0 / 1 / 0 / 0 | 0/1 | 0/1 | 4/4 | todo-text ×1 |
| DPT | led | 1 | – | 1/1 (DPT) | 0 / 1 / 0 / 0 | 0/1 | 0/1 | 2/2 | todo-text ×1 |
| FSF | motif | 1 | – | 1/1 (FSF) | 0 / 0 / 0 / 1 | 0/1 | 0/1 | 1/1 | todo-text ×1 |
| FXF | motif | 1 | – | 1/1 (FXF) | 0 / 0 / 0 / 1 | 0/1 | 0/1 | 1/1 | todo-text ×1 |
| ISL | icicle | 3 | – | 1/3 (ISL) | 0 / 1 / 2 / 0 | 0/3 | 0/3 | 16/21 | todo-text ×2 |
| OL | led | 15 | `ol-g40` | 4/15 (OL-G40, OL-S11, OL-ST38) | 4 / 9 / 0 / 2 | 2/15 | 2/15 | 13/15 | Set nur bei hp-ol-30, hp-ol-50; todo-bild ×4; todo-text ×3 |
| OLA | led | 3 | – | 0/3 | 2 / 1 / 0 / 0 | 0/3 | 0/3 | 3/3 | pruefen-mapping-ol ×3 |
| OLG | christmas-tree-lights | 8 | – | 5/8 (OLG) | 0 / 1 / 0 / 7 | 0/8 | 0/8 | 9/10 | pruefen-varianten ×5; todo-text ×5 |
| OLH | led | 5 | – | 0/5 | 0 / 5 / 0 / 0 | 0/5 | 0/5 | 5/5 | pruefen-mapping-ol ×5 |
| OLS | solar | 8 | – | 2/8 (OLS-S11, OLS-ST38) | 1 / 3 / 0 / 4 | 4/8 | 0/8 | 6/10 | pruefen-dublette ×1; pruefen-mapping-ol ×8; todo-text ×2 |
| OLT | christmas-tree-lights | 7 | – | 0/7 | 3 / 4 / 0 / 0 | 0/7 | 0/7 | 9/9 | todo-text ×1 |
| PEC | weihnachtsbaum | 1 | – | 1/1 (BAUM-PEC) | 0 / 0 / 0 / 1 | 0/1 | 0/1 | 3/3 | todo-text ×1 |
| PVC | weihnachtsbaum | 1 | – | 1/1 (BAUM-PVC) | 0 / 0 / 0 / 1 | 0/1 | 0/1 | 1/3 | todo-text ×1 |
| RCT | curtain | 1 | – | 0/1 | 1 / 0 / 0 / 0 | 0/1 | 0/1 | 1/1 | todo-text ×1 |
| RFM | led | 1 | – | 0/1 | 0 / 1 / 0 / 0 | 0/1 | 0/1 | 1/1 | todo-text ×1 |
| RGB | smart | 3 | – | 1/3 (RGB) | 0 / 3 / 0 / 0 | 0/3 | 0/3 | 3/3 | pruefen-varianten ×1; todo-text ×1 |
| RIT | icicle | 1 | – | 0/1 | 0 / 1 / 0 / 0 | 1/1 | 0/1 | 1/1 | todo-text ×1 |
| RMP | motif | 1 | – | 1/1 (RMP) | 0 / 0 / 0 / 1 | 0/1 | 0/1 | 1/1 | todo-text ×1 |
| RNM | net | 1 | – | 0/1 | 1 / 0 / 0 / 0 | 0/1 | 0/1 | 1/1 | todo-text ×1 |
| RPM | led | 1 | – | 1/1 (RPM) | 0 / 0 / 1 / 0 | 0/1 | 0/1 | 2/2 | todo-text ×1 |
| RSP | weihnachtsbaum | 1 | – | 0/1 | 0 / 0 / 0 / 1 | 0/1 | 0/1 | 1/2 | todo-text ×1 |
| RTM | led | 1 | – | 0/1 | 0 / 0 / 0 / 1 | 0/1 | 0/1 | 1/1 | todo-text ×1 |
| SCWL | solar | 2 | – | 0/2 | 0 / 2 / 0 / 0 | 2/2 | 0/2 | 4/4 | – |
| SOLM | solar | 1 | – | 0/1 | 1 / 0 / 0 / 0 | 1/1 | 0/1 | 1/1 | todo-bild ×1 |
| STT | led | 1 | – | 1/1 (STT) | 0 / 0 / 0 / 1 | 0/1 | 0/1 | 0/1 | todo-text ×1 |
| TPM | led | 1 | – | 0/1 | 0 / 0 / 0 / 1 | 0/1 | 0/1 | 2/2 | – |
| U20 | led | 1 | – | 1/1 (U20) | 0 / 0 / 1 / 0 | 0/1 | 0/1 | 1/2 | todo-text ×1 |
| UCP | curtain | 1 | – | 0/1 | 1 / 0 / 0 / 0 | 0/1 | 0/1 | 1/1 | todo-bild ×1; todo-text ×1 |
| UCT | curtain | 1 | – | 0/1 | 1 / 0 / 0 / 0 | 0/1 | 0/1 | 4/4 | todo-text ×1 |
| VAM | led | 1 | – | 0/1 | 0 / 1 / 0 / 0 | 0/1 | 0/1 | 1/1 | – |
| VLM | led | 1 | – | 0/1 | 0 / 1 / 0 / 0 | 0/1 | 0/1 | 3/3 | todo-text ×1 |
| WBF | motif | 2 | – | 2/2 (WBF) | 0 / 0 / 0 / 2 | 0/2 | 0/2 | 1/2 | todo-text ×2 |
| WWF | motif | 1 | – | 1/1 (WWF) | 0 / 0 / 0 / 1 | 0/1 | 0/1 | 1/2 | todo-text ×1 |

## Produkte ohne Set (97, alle longtail)

Kettenplan-Werte je Produkt, bei Varianten alle vorkommenden Werte: G Gesamtlänge (m), L beleuchtete Länge (m),
B × H Breite und Höhe (m), Z Zuleitung (m), LED Anzahl, A Birnenabstand (cm), K koppelbar bis. Der Kettenplan
braucht L oder B und H; mit nur G zeigt er eine reduzierte Linie „x m gesamt". „Fakten: Timer" ist der Wert aus
der Faktenliste mit Status (bei Solar die Leuchtdauer).

| Produkt | Serie | Var. | familie | Kettenplan | Werte | Timer bzw. Solar | Lieferumfang | Fakten: Timer | Fehlt |
|---|---|---|---|---|---|---|---|---|---|
| hp-bsl-100-1p | BSL | 1 | – | reduziert | G 10 · LED 100 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-bsl-100-2p | BSL | 1 | – | reduziert | G 10 · LED 100 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-bsl-50-1p | BSL | 1 | BSL | fehlt | – | fehlt | fehlt | keine Liste | dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-bsl-50-2p | BSL | 1 | – | reduziert | G 5 · LED 50 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-bsm-002 | BSM | 1 | BSM | fehlt | – | fehlt | fehlt | keine Liste | dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-bsx-002 | BSX | 1 | BSX | fehlt | – | fehlt | fehlt | keine Liste | dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-cl-1-eu | CL | 1 | – | reduziert | G 10 | fehlt | fehlt | 6 h an (mehrdeutig) | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-cl-2-eu | CL | 1 | – | reduziert | G 10 | fehlt | fehlt | 6 h an (mehrdeutig) | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-csl-200-c | CSL | 1 | CSL | fehlt | – | fehlt | fehlt | keine Liste | dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-csl-200-w | CSL | 1 | CSL | fehlt | – | fehlt | fehlt | keine Liste | dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-csl-300-c | CSL | 1 | – | voll | B 3 · H 3 · Z 3 · LED 300 | 6 h | fehlt | 6 h an (eindeutig) | familie, dramaturgie, Lieferumfang |
| hp-csl-300-w | CSL | 1 | – | voll | B 3 · H 3 · LED 300 | 6 h | fehlt | 6 h an (eindeutig) | familie, dramaturgie, Lieferumfang |
| hp-ctl-180 | CTL | 1 | – | fehlt | Z 3 · LED 180 · A 10 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-ctl-240 | CTL | 1 | – | fehlt | Z 3 · LED 240 · A 10 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-ctl-300-eu | CTL | 1 | – | fehlt | Z 3 · LED 300 · A 10 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-ctl-360-eu | CTL | 1 | – | fehlt | Z 3 · LED 360 · A 10 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-dgm-002 | DGM | 1 | DGM | fehlt | LED 70 | 6 h | fehlt | 6 h an, 18 h aus (eindeutig) | dramaturgie, Kettenplan, Lieferumfang |
| hp-dgm-048 | DGM | 1 | DGM | fehlt | LED 48 | 6 h | fehlt | 6 h an, 18 h aus (eindeutig) | dramaturgie, Kettenplan, Lieferumfang |
| hp-dlm-100h | DLM | 2 | – | voll | G 13/23 · L 10/20 · Z 3 · LED 100/200 · K 2/3 | fehlt | fehlt | fehlt | familie, dramaturgie, Timer, Lieferumfang |
| hp-dnm-208 | DNM | 2 | – | voll | B 2,5 · H 2 · Z 3 · LED 208 · K 3 | fehlt | fehlt | fehlt | familie, dramaturgie, Timer, Lieferumfang |
| hp-dpm-300 | DPM | 4 | DPM | reduziert | G 30/60 · LED 300/600 | fehlt | fehlt | fehlt | dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-dpt-300 | DPT | 2 | DPT | reduziert | G 30/60 | fehlt | fehlt | fehlt | dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-fsf-120 | FSF | 1 | FSF | fehlt | – | fehlt | fehlt | fehlt | dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-fxf-001 | FXF | 1 | FXF | fehlt | – | fehlt | fehlt | fehlt | dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-isl-264 | ISL | 6 | – | teils (3 voll, 3 fehlt) | G 6,38/11,25 · L 3,38/8,25 · Z 3 · LED 108/264 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-isl-360-eu | ISL | 9 | – | reduziert | G 9/15/25 · LED 360/586/1008 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-isl-486 | ISL | 6 | ISL | teils (4 reduziert, 2 fehlt) | G 12,15/16,2 · LED 486/648 | fehlt | fehlt | fehlt | dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-ol-100 | OL | 1 | – | reduziert | G 60 · Z 3 · LED 100 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-ol-15 | OL | 1 | – | reduziert | G 10 · Z 3 · LED 15 · K 5 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-ol-15-g | OL | 1 | – | reduziert | G 10 · LED 15 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-ol-25 | OL | 1 | – | reduziert | G 15 · Z 3 · LED 25 · A 55 · K 4 | fehlt | fehlt | 6 h an, 18 h aus (mehrdeutig) | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-ol-75 | OL | 1 | – | reduziert | G 45 · Z 3 · LED 75 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-ol-s11-15 | OL | 1 | – | voll | G 12,5 · L 10 · Z 2,5 · LED 15 · A 52,5 · K 5 | fehlt | fehlt | 6 h an (mehrdeutig) | familie, dramaturgie, Timer, Lieferumfang |
| hp-ol-s11-25 | OL | 1 | – | reduziert | G 15 · LED 25 · A 50 · K 5 | fehlt | fehlt | 6 h an (mehrdeutig) | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-ol-s11-30 | OL | 1 | – | voll | G 23 · L 20 · Z 3 · LED 30 · A 58 · K 3 | fehlt | fehlt | 6 h an (mehrdeutig) | familie, dramaturgie, Timer, Lieferumfang |
| hp-ol-s11-50 | OL | 1 | OL-S11 | fehlt | – | fehlt | fehlt | keine Liste | dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-ol-st38-15 | OL | 1 | – | reduziert | G 10 · LED 15 · A 50 · K 4 | fehlt | fehlt | 6 h an, 18 h aus (mehrdeutig) | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-ol-st38-25 | OL | 1 | – | reduziert | G 15 · Z 2,5 · LED 25 · K 5 | fehlt | fehlt | 6 h an (mehrdeutig) | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-ol-st38-30 | OL | 1 | – | reduziert | G 20 · Z 2,5 · LED 30 · K 5 | fehlt | fehlt | 6 h an (mehrdeutig) | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-ol-st38-50 | OL | 1 | OL-ST38 | fehlt | – | fehlt | fehlt | keine Liste | dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-ola-g40-15-eu | OLA | 1 | – | reduziert | G 10 · Z 3 · LED 15 · A 50 · K 5 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-ola-g40-27-eu | OLA | 1 | – | voll | G 20 · L 20 · Z 3 · LED 27 · A 65 · K 4 | fehlt | fehlt | fehlt | familie, dramaturgie, Timer, Lieferumfang |
| hp-ola-g40-42-eu | OLA | 1 | – | voll | G 30 · L 30 · Z 3 · LED 42 · A 66 · K 3 | fehlt | fehlt | fehlt | familie, dramaturgie, Timer, Lieferumfang |
| hp-olg-100 | OLG | 1 | OLG | fehlt | Z 3 · LED 100 · K 4 | fehlt | fehlt | 3 h an (mehrdeutig) | dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-olg-200 | OLG | 1 | – | fehlt | LED 200 · K 2 | fehlt | fehlt | 3 h an (mehrdeutig) | familie, dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-olg-200m | OLG | 1 | OLG | fehlt | Z 3 · LED 200 · K 2 | fehlt | fehlt | 3 h an (mehrdeutig) | dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-olg-200w | OLG | 1 | OLG | fehlt | Z 3 · LED 200 · K 2 | fehlt | fehlt | 3 h an (mehrdeutig) | dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-olg-300-eu | OLG | 3 | – | reduziert | G 30/50/100 · LED 300/500/1000 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-olg-400 | OLG | 1 | – | fehlt | Z 3 · LED 400 | fehlt | fehlt | 3 h an (mehrdeutig) | familie, dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-olg-600 | OLG | 1 | OLG | fehlt | – | fehlt | fehlt | keine Liste | dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-olg-800 | OLG | 1 | OLG | fehlt | Z 3 · LED 800 · K 2 | fehlt | fehlt | 3 h an (mehrdeutig) | dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-olh-g40-15 | OLH | 1 | – | reduziert | G 10 · Z 2,5 · LED 15 · A 53 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-olh-g40-20 | OLH | 1 | – | reduziert | G 13 · Z 3 · LED 20 · A 52 · K 25 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-olh-g40-25 | OLH | 1 | – | reduziert | G 15 · Z 3 · LED 25 · A 50 · K 20 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-olh-g40-35 | OLH | 1 | – | reduziert | G 20 · Z 3 · LED 35 · A 50 · K 14 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-olh-g40-50 | OLH | 1 | – | reduziert | G 30 · Z 3 · LED 50 · A 55 · K 10 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-ols-a60-16-eu | OLS | 1 | – | voll | G 8,5 · L 6,5 · Z 2 · LED 16 | Solar 10 h | fehlt | 10 h (eindeutig) | familie, dramaturgie, Lieferumfang |
| hp-ols-g40-16 | OLS | 1 | – | reduziert | G 10 · LED 16 | Solar 10 h | fehlt | 10 h (eindeutig) | familie, dramaturgie, Kettenplan (nur G), Lieferumfang |
| hp-ols-g40-25 | OLS | 1 | – | reduziert | G 15 · LED 25 | Solar 10 h | fehlt | 10 h (eindeutig) | familie, dramaturgie, Kettenplan (nur G), Lieferumfang |
| hp-ols-g40-35 | OLS | 1 | – | reduziert | G 20 · LED 35 | Solar 10 h | fehlt | 10 h (eindeutig) | familie, dramaturgie, Kettenplan (nur G), Lieferumfang |
| hp-ols-s11-16 | OLS | 2 | OLS-S11 | fehlt | – | fehlt (Solar-Leuchtdauer) | fehlt | keine Liste | dramaturgie, Kettenplan, Akku, Lieferumfang |
| hp-ols-s17-16 | OLS | 1 | – | fehlt | – | fehlt (Solar-Leuchtdauer) | fehlt | 10 h (eindeutig) | familie, dramaturgie, Kettenplan, Akku, Lieferumfang |
| hp-ols-s17-16-eu | OLS | 1 | – | fehlt | – | fehlt (Solar-Leuchtdauer) | fehlt | 10 h (eindeutig) | familie, dramaturgie, Kettenplan, Akku, Lieferumfang |
| hp-ols-st38-16 | OLS | 2 | OLS-ST38 | fehlt | – | fehlt (Solar-Leuchtdauer) | fehlt | keine Liste | dramaturgie, Kettenplan, Akku, Lieferumfang |
| hp-olt-100 | OLT | 1 | – | voll | G 13 · L 10 · Z 3 · LED 100 · A 10 · K 4 | fehlt | fehlt | 3 h an (mehrdeutig) | familie, dramaturgie, Timer, Lieferumfang |
| hp-olt-150 | OLT | 1 | – | reduziert | G 15 · Z 3 · LED 150 · A 10 · K 4 | fehlt | fehlt | 3 h an (mehrdeutig) | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-olt-200 | OLT | 1 | – | voll | G 23 · L 20 · Z 3 · LED 200 · A 10 · K 2 | fehlt | fehlt | fehlt | familie, dramaturgie, Timer, Lieferumfang |
| hp-olt-300-eu | OLT | 3 | – | reduziert | G 30/50/100 · LED 300/500/1000 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-olt-400 | OLT | 1 | – | reduziert | G 40 · Z 3 · LED 400 · A 10 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-olt-600 | OLT | 1 | – | voll | G 63 · L 60 · Z 3 · LED 600 · A 10 | fehlt | fehlt | 3 h an (mehrdeutig) | familie, dramaturgie, Timer, Lieferumfang |
| hp-olt-800 | OLT | 1 | – | reduziert | G 80 · Z 3 · LED 800 · A 10 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-rct-400 | RCT | 1 | – | voll | B 2 · H 2 · Z 3 | fehlt | fehlt | fehlt | familie, dramaturgie, Timer, Lieferumfang |
| hp-rfm-600 | RFM | 1 | – | reduziert | G 9 · Z 3 · LED 600 · A 1,5 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-rgb-200a | RGB | 1 | – | reduziert | G 20 · LED 200 · A 10 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-rgb-300a | RGB | 1 | – | reduziert | G 30 · LED 300 · A 10 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-rgb-500a | RGB | 1 | RGB | reduziert | G 50 · LED 500 · A 10 | fehlt | fehlt | fehlt | dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-rit-280 | RIT | 1 | – | reduziert | G 8,25 · Z 5 · LED 280 · A 50 | 8 h | fehlt | 8 h an (eindeutig) | familie, dramaturgie, Kettenplan (nur G), Lieferumfang |
| hp-rmp-180 | RMP | 1 | RMP | fehlt | – | fehlt | fehlt | fehlt | dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-rnm-200 | RNM | 1 | – | voll | B 3 · H 2 · Z 3 · LED 200 · A 8 | fehlt | fehlt | fehlt | familie, dramaturgie, Timer, Lieferumfang |
| hp-rpm-200 | RPM | 2 | RPM | teils (1 reduziert, 1 fehlt) | G 20 · LED 200 · A 10 | fehlt | fehlt | fehlt | dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-rsp-180 | RSP | 2 | – | fehlt | Z 5 · LED 170/270 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-rtm-400 | RTM | 1 | – | fehlt | Z 5 · LED 400 · A 10 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-scwl-10m2p-mc | SCWL | 2 | – | reduziert | G 10 · LED 100 · A 10 | Solar 10 h | fehlt | 10 h (eindeutig) | familie, dramaturgie, Kettenplan (nur G), Lieferumfang |
| hp-scwl-15m2p-mc | SCWL | 2 | – | reduziert | G 15 · LED 150 · A 10 | Solar 10 h | fehlt | 10 h (eindeutig) | familie, dramaturgie, Kettenplan (nur G), Lieferumfang |
| hp-solm-12m-ww | SOLM | 1 | – | voll | G 14 · L 12 · Z 2 · LED 120 | Solar 10 h | fehlt | 10 h (eindeutig) | familie, dramaturgie, Lieferumfang |
| hp-stt-050 | STT | 1 | STT | fehlt | – | fehlt | fehlt | keine Liste | dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-tpm-400-eu-1 | TPM | 2 | – | fehlt | Z 5 · LED 400 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-u20-200 | U20 | 2 | U20 | teils (1 voll, 1 fehlt) | G 23 · L 20 · Z 3 · LED 200/400 | fehlt | fehlt | 8 h an, 16 h aus (mehrdeutig) | dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-ucp-200 | UCP | 1 | – | voll | B 3 · H 2 · Z 3 · LED 200 | fehlt | fehlt | fehlt | familie, dramaturgie, Timer, Lieferumfang |
| hp-uct-200-eu | UCT | 4 | – | voll | B 3 · H 2 · LED 200 | fehlt | fehlt | fehlt | familie, dramaturgie, Timer, Lieferumfang |
| hp-vam-400l-eu-1 | VAM | 1 | – | reduziert | G 40 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-vlm-100l | VLM | 3 | – | reduziert | G 10/20/30 · Z 3 · LED 100/200/300 · A 10 · K 2/4 | fehlt | fehlt | fehlt | familie, dramaturgie, Kettenplan (nur G), Timer, Lieferumfang |
| hp-wbf-180 | WBF | 1 | WBF | fehlt | LED 128 | fehlt | fehlt | fehlt | dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-wbf-210 | WBF | 1 | WBF | fehlt | – | fehlt | fehlt | keine Liste | dramaturgie, Kettenplan, Timer, Lieferumfang |
| hp-wwf-180 | WWF | 2 | WWF | fehlt | Z 3 · LED 144/176 | fehlt | fehlt | fehlt | dramaturgie, Kettenplan, Timer, Lieferumfang |
| pec-150g | PEC | 3 | BAUM-PEC | fehlt | H 1,5/1,8/2,1 | fehlt | fehlt | fehlt | dramaturgie, Kettenplan, Timer, Lieferumfang |
| pvc-150g | PVC | 3 | BAUM-PVC | fehlt | H 1,5 | fehlt | fehlt | fehlt | dramaturgie, Kettenplan, Timer, Lieferumfang |

## Auffälligkeiten für den nächsten Block

- **`familie` innerhalb einer Serie uneinheitlich:** BSL nur bei hp-bsl-50-1p (BSL); CSL nur bei hp-csl-200-c, hp-csl-200-w (CSL); ISL nur bei hp-isl-486 (ISL); OLG nur bei hp-olg-100, hp-olg-200m, hp-olg-200w, hp-olg-600, hp-olg-800 (OLG); OLS nur bei hp-ols-s11-16, hp-ols-st38-16 (OLS-S11, OLS-ST38); RGB nur bei hp-rgb-500a (RGB).
  Bei OL tragen nur hp-ol-30 (OL-G40), hp-ol-50 (OL-G40), hp-ol-s11-50 (OL-S11), hp-ol-st38-50 (OL-ST38) eine Familie; die übrigen S11-, ST38- und
  sonstigen OL-Produkte sind ohne.
- **Timer bzw. Leuchtdauer aus der Faktenliste übernehmbar** (Metafeld leer, Faktenwert eindeutig oder bestätigt): 2 Produkte: hp-ols-s17-16, hp-ols-s17-16-eu. Nur „mehrdeutig“ in der Faktenliste: 19 Produkte.
- **Kettenplan:** beleuchtete Länge steht ausdrücklich in der Faktenliste bei 1 der Produkte ohne vollständigen Kettenplan: hp-ola-g40-15-eu.
- **Motivleuchten, Lichterbäume und künstliche Weihnachtsbäume** (12 Produkte): Kettenplan und Zeitband sind
  für Ketten gebaut; ob sie dort gebraucht werden, ist offen. Sie stehen in der Tabelle trotzdem als „fehlt“.
- **Lieferumfang:** fehlt bei allen 97; Quelle wäre wie bei Welle 2 ein eigenes Blatt.

## Welle 1 mit Set

| Produkt | Set | dramaturgie | familie | Kettenplan | Werte | Timer | Lieferumfang |
|---|---|---|---|---|---|---|---|
| hp-ol-30 | `ol-g40` | hero | OL-G40 | voll | G 20 · L 17 · Z 3 · LED 30 · A 55 · K 4 | 6/8 h | ja |
| hp-ol-50 | `ol-g40` | hero | OL-G40 | voll | G 30 · L 27 · Z 3 · LED 50 · A 55 · K 4 | 6/8 h | ja |

