# HeiPard Produkt-Import Welle 1b: Trockenlauf-Plan

Stand: 02.10.2026. Erzeugt von `docs/data/welle1b_aufbereitung.py` aus `Kategorie-Angebotsbericht_10-02-2026.xlsm`, Tylers Liste, `sku_familie.csv` und dem Shop-Bestand vom selben Tag (`docs/data/welle1b-shop-stand.json`). Die aufbereiteten Daten je SKU stehen in `docs/data/welle1b-quelle.json`.

**Von Leon am 02.10.2026 freigegeben und umgesetzt.** Ergebnis und Leons Antworten zu A bis J: `docs/heipard-import-welle1b-bericht.md`. Die Listen ab Abschnitt 3 enthalten die Antworten F (Smart-Doppelweg) und G (Birken als Lichterbaum) bereits, Abschnitt 2 zeigt die Fragen im Stand vor der Freigabe. Der Shop-Abgleich beruht auf dem Bestand vor dem Import.

## 1. Zahlen

| Posten | Anzahl |
|---|---|
| HeiPard-Zeilen im Bericht | 275 |
| davon Elternteile (keine eigenen Produkte) | 45 |
| importierbar nach Abschnitt 1 (Aktiv, Kind oder ohne Elternteil, Hauptbild) | 188 |
| … davon bereits im Shop | 78 |
| … davon Doppel-Listing einer SKU (VINE) | 9 |
| … davon bewusst ausgeschlossen (Headset, UK-Variante) | 2 |
| **… davon neue SKUs** | **99** |
| nicht importierbar (inaktiv, entfernt, ohne Status, ohne Hauptbild) | 42 |

Aus den 99 neuen SKUs werden:

| Was | Produkte | SKUs |
|---|---|---|
| neue Variantenprodukte (Abschnitt 3) | 12 | 33 |
| neue Einzelprodukte | 24 | 24 |
| Zusammenführungen an bestehende Produkte (Abschnitt 5) | 16 | 42 |
| **Summe** | **36 neue Produkte, 16 geänderte** | **99** |

Im Shop stehen heute 85 Produkte (89 SKUs), nicht 83. Nach dem Import wären es 121 Produkte. Kein Barcode wird gesetzt: Alle neuen Zeilen tragen als Produkt-ID eine ASIN oder eine GTIN-Freistellung. Jede neue SKU hat einen Preis.

## 2. Was ich von dir brauche

Der Plan folgt der Spezifikation. An den folgenden Stellen lässt sie etwas offen oder passt nicht zu den Daten. Dort steht jeweils, wie der Plan es jetzt löst. Ohne Einwand setze ich es so um.

**A. Mehrere Kinder eines Elternteils sind schon einzeln im Shop** (4 Elternteile, 9 neue SKUs). Abschnitt 5 regelt nur den Fall mit genau einem bestehenden Kind. Plan: Die neuen Kinder werden Einzelprodukte mit dem Tag `pruefen-varianten`, bestehende Produkte bleiben unberührt. Alternative: alles je Elternteil zu einem Variantenprodukt zusammenführen, dafür müsste ich bestehende Produkte umbauen.

| Elternteil | schon im Shop | neu, als Einzelprodukt |
|---|---|---|
| HP-BSL-DE-001 | hp-bsl-100-1p, hp-bsl-100-2p, hp-bsl-50-2p | HP-BSL-50-1P |
| HP-CTL-DE-001 | hp-ctl-180, hp-ctl-240, hp-ctl-300-eu, hp-ctl-360-eu | HP-CTL-180M, HP-CTL-240M |
| HP-OLG-DE-001 | hp-olg-200, hp-olg-400 | HP-OLG-100, HP-OLG-200M, HP-OLG-200W, HP-OLG-600, HP-OLG-800 |
| HP-RGB | hp-rgb-200a, hp-rgb-300a | HP-RGB-500A |

**B. Optionsnamen und Achsen.** Drei Abweichungen von der Tabelle in Abschnitt 3:

- Sind die Werte der Amazon-Farbe in Wahrheit Lichtfarben (Warmweiß, Bunt, Kaltweiß), heißt die Option „Lichtfarbe" wie bei den vier Bündeln aus Welle 1, nicht „Farbe". Eine echte Produktfarbe als Achse kommt in dieser Welle nicht vor.
- Die Größenachse heißt nach dem, was sich unterscheidet: „Länge" (10 m), „Größe" bei Flächen (3 x 2 m), „Höhe" bei Bäumen, „LED-Anzahl" (HP-TPM), „Ausführung" (Kupferdraht oder Lichterkette bei HP-UCC und HP-UCT).
- Eine Achse entfällt, wenn alle Varianten denselben Wert haben oder wenn sie vollständig an einer anderen hängt (LED-Anzahl an der Länge). Sonst zeigt die Produktseite Auswahlfelder ohne Auswahl oder Kombinationen, die es nicht gibt.

**C. HP-U20.** Die Spezifikation nennt HP-U20-200 als Beispiel für ein bestehendes Produkt. Es ist nicht im Shop (in Welle 1 ausgelassen). Plan: HP-U20-200 und HP-U20-400 werden ein neues Variantenprodukt, eingeordnet als sonstige Lichterkette (Lichterschlauch).

**D. `hp-vlm-100l` ist ACTIVE.** Alle anderen 84 Produkte sind Draft. Ich habe es nicht aktiviert, die letzte Änderung war am 02.10.2026 um 10:41 UTC. Laut Plan bekommt es zwei neue Varianten, die dann an einem aktiven Produkt hängen. Soll es so bleiben oder zurück auf Draft?

**E. SKU-Schreibweise.** Neue SKUs werden nach Abschnitt 1 bereinigt, also ohne `-EU` und `-EU-1` (auch `-EU-2` und `-EU-3` habe ich so behandelt). Die Shop-SKUs aus Welle 1 tragen diese Suffixe teilweise noch. Bei Zusammenführungen stehen deshalb beide Schreibweisen in einem Produkt, zum Beispiel `HP-ISL-360-EU` neben `HP-ISL-360M`.

**F. Smart.** Nach der Tabelle in Abschnitt 4 bekommt eine Smart-Kette nur `kat-smart`, nicht `kat-stringlights`. Sie erscheint dann nicht unter Lichterketten. Betroffen ist neu nur HP-RGB-500A. Soll Smart wie Solar einen Doppelweg bekommen?

**G. Lichterbäume.** HP-WWF (Birke weiß) und HP-WBF (Birke schwarz) tragen den Amazon-Produkttyp ARTIFICIAL_TREE und landen nach der Regel bei `kat-weihnachtsbaum` mit Produkttyp „Weihnachtsbaum". Passt das für beleuchtete Birken?

**H. OLA, OLH, OLS (Abschnitt 6).** Diese Familien sind seit Welle 1 schon im Shop. Neu sind nur HP-OLS-S11 und HP-OLS-ST38, sie bekommen `pruefen-mapping-ol`. Tag und Familiencode an den bestehenden 17 OLA-, OLH- und OLS-Produkten zu setzen, wäre eine Änderung an bestehenden Produkten: nur mit deinem OK.

**I. UK-Variante.** `HP-OLS-ST38-35-UK` ist aktiv und hat ein Bild, ich habe sie wie `HP-UCP-300M-UK` nicht eingeplant. Die Familie HP-OLS-ST38 hat dadurch zwei statt drei Längen.

**J. Dateiname des Abschlussberichts.** Schritt 5 nennt `docs/heipard-import-welle1b.md`, dort liegt jetzt die Spezifikation. Vorschlag: Abschlussbericht als `docs/heipard-import-welle1b-bericht.md`.

## 3. Neue Variantenprodukte (12 Produkte, 33 Varianten)

Titel sind vorläufig (Welle 2 ersetzt sie). Der Handle wird die erste SKU in Kleinbuchstaben.

**`hp-blt-050`** · Batterie-Lichterkette · Familie BLT

- Titel: HeiPard Lichterkette Batterie Außen
- Elternteil: `HP-BLT-DE`, Thema SIZE/LIGHT_COLOR
- Tags: `kat-stringlights`, `kat-led`, `todo-text`, `serie-blt`, `Warmweiß`
- Optionen: Länge (5 m, 20 m)
- Varianten: `HP-BLT-050` 5 m, 7,99 €; `HP-BLT-200` 20 m, 17,99 €
- Bilder: 8

**`hp-dpm-300`** · Lichterkette · Familie DPM

- Titel: HeiPard LED Lichterkette Außen auf Spule Fernbedienung
- Elternteil: `HP-DPM-DE`, Thema FARBE/GRÖSSE
- Tags: `kat-stringlights`, `kat-led`, `todo-text`, `serie-dpm`, `Warmweiß`, `Multicolor`
- Optionen: Lichtfarbe (Warmweiß, Multicolor); Länge (30 m, 60 m)
- Varianten: `HP-DPM-300` Warmweiß / 30 m, 22,99 €; `HP-DPM-300M` Multicolor / 30 m, 19,99 €; `HP-DPM-600` Warmweiß / 60 m, 29,99 €; `HP-DPM-600M` Multicolor / 60 m, 29,99 €
- Bilder: 20
- Hinweis: Eltern-Titel „HeiPard Lichternetz Außen“ nennt eine andere Kategorie, Titel deshalb aus dem ersten Kind abgeleitet

**`hp-dpt-300`** · Lichterkette · Familie DPT

- Titel: HeiPard warmweiße Weihnachts-Lichterkette 30 60 80
- Elternteil: `HP-DPT-300 600 800`, Thema FARBE/GRÖSSE
- Tags: `kat-stringlights`, `kat-led`, `todo-text`, `serie-dpt`, `Warmweiß`
- Optionen: Länge (30 m, 60 m)
- Varianten: `HP-DPT-300` 30 m, 22,99 €; `HP-DPT-600` 60 m, 25,99 €
- Bilder: 10

**`hp-isl-486`** · Eisregen-Lichterkette · Familie ISL

- Titel: HeiPard Eisregen Lichterkette Außen Warmweiß LED 8 Modi Timer
- Elternteil: `HP-ISL-0910`, Thema SIZE/LIGHT_COLOR
- Tags: `kat-stringlights`, `kat-icicle`, `todo-text`, `serie-isl`, `Warmweiß`, `Multicolor`, `Kaltweiß`
- Optionen: Länge (12,15 m, 16,2 m); Lichtfarbe (Warmweiß, Kaltweiß, Multicolor)
- Varianten: `HP-ISL-486` 12,15 m / Warmweiß, 32,99 €; `HP-ISL-486M` 12,15 m / Multicolor, 32,99 €; `HP-ISL-486W` 12,15 m / Kaltweiß, 32,99 €; `HP-ISL-648` 16,2 m / Warmweiß, 37,99 €; `HP-ISL-648M` 16,2 m / Multicolor, 37,99 €; `HP-ISL-648W` 16,2 m / Kaltweiß, 37,99 €
- Bilder: 14

**`hp-npt-210`** · Lichternetz · Familie NPT

- Titel: HeiPard Lichternetz Außen 3x2 m
- Elternteil: `HP-NPT-210-EU-01`, Thema FARBE/GRÖSSE
- Tags: `kat-stringlights`, `kat-net`, `todo-text`, `serie-npt`, `Warmweiß`, `Multicolor`, `Weiß`
- Optionen: Lichtfarbe (Warmweiß, Weiß, Multicolor)
- Varianten: `HP-NPT-210` Warmweiß, 26,99 €; `HP-NPT-210M` Multicolor, 26,99 €; `HP-NPT-210W` Weiß, 29,99 €
- Bilder: 10

**`hp-ols-s11-16`** · Solar-Lichterkette · Familie OLS-S11

- Titel: HeiPard Solar Garden String Lights LED IP65 Waterproof Outdoor Patio
- Elternteil: `HP-OLS-S11-0828`, Thema GRÖSSE
- Tags: `kat-stringlights`, `kat-solar`, `todo-text`, `serie-ols`, `Warmweiß`, `pruefen-mapping-ol`
- Optionen: Länge (10 m, 15 m)
- Varianten: `HP-OLS-S11-16` 10 m, 29,99 €; `HP-OLS-S11-25` 15 m, 35,99 €
- Bilder: 1

**`hp-ols-st38-16`** · Solar-Lichterkette · Familie OLS-ST38

- Titel: HeiPard Solar Lichterkette Aussen ST38
- Elternteil: `HP-OLS-ST38-ALL`, Thema SIZE/NUMBER_OF_LIGHT_SOURCES
- Tags: `kat-stringlights`, `kat-solar`, `todo-text`, `serie-ols`, `Warmweiß`, `pruefen-mapping-ol`
- Optionen: Länge (10 m, 15 m)
- Varianten: `HP-OLS-ST38-16` 10 m, 24,99 €; `HP-OLS-ST38-25` 15 m, 29,99 €
- Bilder: 1

**`hp-rpm-200`** · Produkttyp offen · Familie RPM

- Titel: HeiPard Smart LED Lichterkette RGB App Fernbedienung Kabelrolle
- Elternteil: `HP-RPM-DE`, Thema SIZE/LIGHT_COLOR
- Tags: `todo-kategorie`, `todo-text`, `serie-rpm`, `Multicolor`
- Optionen: Länge (20 m, 40 m)
- Varianten: `HP-RPM-200` 20 m, 35,99 €; `HP-RPM-400` 40 m, 35,99 €
- Bilder: 2
- Hinweis: Eltern-Titel „HeiPard RGB Lichternetz Außen Lichterketten“ nennt eine andere Kategorie, Titel deshalb aus dem ersten Kind abgeleitet
- Hinweis: Kinder fallen in verschiedene Kategorien (Lichterkette, Smart-Lichterkette), deshalb todo-kategorie

**`hp-u20-200`** · Lichterkette · Familie U20

- Titel: HeiPard 200+400 LED Lichterschlauch Außen
- Elternteil: `HP-U20-EU`, Thema LIGHT_COLOR/SET_NAME
- Tags: `kat-stringlights`, `kat-led`, `todo-text`, `serie-u20`, `Warmweiß`
- Optionen: Länge (10 m, 20 m)
- Varianten: `HP-U20-200` 10 m, 16,99 €; `HP-U20-400` 20 m, 24,99 €
- Bilder: 1

**`hp-wwf-180`** · Lichterbaum · Familie WWF

- Titel: HeiPard LED Lichterbaum Birkenbaum Innen Außen warmweiß
- Elternteil: `HP-WWF-0918`, Thema SIZE/LIGHT_COLOR
- Tags: `kat-motif`, `todo-text`, `serie-wwf`, `Warmweiß`
- Optionen: Höhe (1,8 m, 2,1 m)
- Varianten: `HP-WWF-180` 1,8 m, 69,99 €; `HP-WWF-210` 2,1 m, 79,99 €
- Bilder: 1

**`pec-150g`** · Weihnachtsbaum · Familie BAUM-PEC

- Titel: HeiPard Premium Weihnachtsbaum künstlich - Naturgetreu, dichte Zweige Künstlicher Weihnachtsbaum aus naturgetreuem PVC + PE mit Holzständer Tannenbaum Christbaum Nordmanntanne
- Elternteil: `PEC-TREE-DE-01`, Thema SIZE/SET_NAME
- Tags: `kat-weihnachtsbaum`, `todo-text`, `serie-pec`
- Optionen: Höhe (1,5 m, 1,8 m, 2,1 m)
- Varianten: `PEC-150G` 1,5 m, 159,99 €; `PEC-180G` 1,8 m, 199,99 €; `PEC-210G` 2,1 m, 289,99 €
- Bilder: 9
- Hinweis: Elternteil PEC-TREE-DE-01 steht nicht im Bericht, Titel aus dem ersten Kind abgeleitet

**`pvc-150g`** · Weihnachtsbaum · Familie BAUM-PVC

- Titel: HeiPard Künstlicher Weihnachtsbaum Premium Künstlich Tannenbaum
- Elternteil: `PVC-TREE-DE-01`, Thema SIZE/SET_NAME
- Tags: `kat-weihnachtsbaum`, `todo-text`, `serie-pvc`
- Optionen: Höhe (1,5 m, 1,8 m, 2,1 m)
- Varianten: `PVC-150G` 1,5 m, 129,99 €; `PVC-180G` 1,8 m, 169,99 €; `PVC-210G` 2,1 m, 199,99 €
- Bilder: 7
- Hinweis: Elternteil PVC-TREE-DE-01 steht nicht im Bericht, Titel aus dem ersten Kind abgeleitet

## 4. Neue Einzelprodukte (24)

| SKU | Titel (vorläufig) | Produkttyp | kat-Tags | Familie | Preis | Bilder | Hinweis |
|---|---|---|---|---|---|---|---|
| `HP-BSL-50-1P` | HeiPard Lichterkette Batterie 5m 50 LED, klein Lichterkette… | Batterie-Lichterkette | kat-stringlights, kat-led | BSL | 5,99 € | 7 | Eltern HP-BSL-DE-001, siehe 2 A |
| `HP-CTL-180M` | HeiPard Lichterkette Weihnachtsbaum 1.5m 180LED 12 Stränge,… | Weihnachtsbaum-Lichterkette | kat-stringlights, kat-christmas-tree-lights | CTL | 26,99 € | 1 | Eltern HP-CTL-DE-001, siehe 2 A |
| `HP-CTL-240M` | HeiPard Lichterkette Weihnachtsbaum 2m 240 LED 12 Stränge,… | Weihnachtsbaum-Lichterkette | kat-stringlights, kat-christmas-tree-lights | CTL | 32,99 € | 1 | Eltern HP-CTL-DE-001, siehe 2 A |
| `HP-OLG-100` | HeiPard Lichterkette außen 10M 100 LED Weihnachtsbaum Licht… | Weihnachtsbaum-Lichterkette | kat-stringlights, kat-christmas-tree-lights | OLG | 26,99 € | 6 | Eltern HP-OLG-DE-001, siehe 2 A |
| `HP-OLG-200M` | HeiPard Lichterkette außen 20M 200 LED Weihnachtsbaum Licht… | Weihnachtsbaum-Lichterkette | kat-stringlights, kat-christmas-tree-lights | OLG | 23,99 € | 6 | Eltern HP-OLG-DE-001, siehe 2 A |
| `HP-OLG-200W` | HeiPard Lichterkette außen 20M 200 LED Weihnachtsbaum Licht… | Weihnachtsbaum-Lichterkette | kat-stringlights, kat-christmas-tree-lights | OLG | 23,99 € | 6 | Eltern HP-OLG-DE-001, siehe 2 A |
| `HP-OLG-600` | HeiPard Lichterkette außen 60M 600 LED Weihnachtsbaum Licht… | Weihnachtsbaum-Lichterkette | kat-stringlights, kat-christmas-tree-lights | OLG | 36,99 € | 6 | Eltern HP-OLG-DE-001, siehe 2 A |
| `HP-OLG-800` | HeiPard Lichterkette außen 80M 800 LED Weihnachtsbaum Licht… | Weihnachtsbaum-Lichterkette | kat-stringlights, kat-christmas-tree-lights | OLG | 59,99 € | 6 | Eltern HP-OLG-DE-001, siehe 2 A |
| `HP-RGB-500A` | HeiPard Smart RGB LED Lichterkette 50 m, 500 LED Farbwechse… | Smart-Lichterkette | kat-stringlights, kat-smart | RGB | 69,99 € | 1 | Eltern HP-RGB, siehe 2 A |
| `HP-RMP-180` | Warmweiß Weihnachtsbaum-Lichtturm 1,8 m | offen | todo-kategorie | RMP | 59,99 € | 6 | einziges aktives Kind von HP-RMP-180 250 |
| `HP-WBF-180` | HeiPard Baum Warmweiß Schwarz Birke Lichterbaum 180CM | Lichterbaum | kat-motif | WBF | 99,00 € | 1 |  |
| `HP-WBF-210` | HeiPard Baum Warmweiß Birke Lichterbaum 210CM | Lichterbaum | kat-motif | WBF | 99,00 € | 1 |  |
| `HP-DGM-048` | HeiPard LED Weihnachtsdeko innen mit Fernbedienung, 2 Set G… | offen | todo-kategorie | DGM | 69,00 € | 1 |  |
| `HP-BSM-002` | HeiPard Hirsch Stil Weihnachtsleuchte String 2 Verkauf | offen | todo-kategorie | BSM | 15,99 € | 1 |  |
| `HP-BSX-002` | HeiPard 3d leuchtstern lichterkette 2pack | Motivleuchte | kat-motif | BSX | 15,99 € | 1 |  |
| `HP-CSL-200-C` | HeiPard LED Lichtervorhang Innen 3x2m, 200 LEDs Kaltweiss,… | Lichtervorhang | kat-stringlights, kat-curtain | CSL | 11,99 € | 9 |  |
| `HP-CSL-200-W` | HeiPard LED Lichtervorhang Innen 3x2m, 200 LEDs Warmweiß, V… | Lichtervorhang | kat-stringlights, kat-curtain | CSL | 11,99 € | 9 |  |
| `HP-DGM-001` | HeiPard LED Gartenstecker Stern Deko Beleuchtung für Außen… | Motivleuchte | kat-motif | DGM | 59,00 € | 6 |  |
| `HP-DGM-002` | HeiPard Spiralpfahl Lichtern | offen | todo-kategorie | DGM | 38,99 € | 6 |  |
| `HP-FSF-120` | HeiPard LED Schneemann | offen | todo-kategorie | FSF | 125,99 € | 1 |  |
| `HP-FXF-001` | HeiPard teilige LED Rentier | offen | todo-kategorie | FXF | 159,99 € | 1 |  |
| `HP-OL-S11-50` | HeiPard LED Lichterkette Außen Outdoor Strom 30M - 50 S11 G… | Lichterkette | kat-stringlights, kat-led | OL-S11 | 45,99 € | 1 |  |
| `HP-OL-ST38-50` | HeiPard LED Lichterkette Außen Strom 30M mit Fernbedienung,… | Lichterkette | kat-stringlights, kat-led | OL-ST38 | 99,00 € | 1 |  |
| `HP-STT-050` | HeiPard LED Lichterkette Außen Strom 30M mit Fernbedienung | Lichterkette | kat-stringlights, kat-led | STT | 69,00 € | 1 |  |

Alle neuen Produkte tragen zusätzlich `todo-text`, den Serien-Tag (`serie-…`) und die Lichtfarbe als Tag, wie in Welle 1.

## 5. Zusammenführungen an bestehende Produkte (16 Produkte, 42 neue Varianten)

Das bestehende Produkt bekommt die Optionen, sein bisheriger Artikel wird die erste Variante. SKU, Preis, Titel, Tags und Bilder des bestehenden Artikels bleiben. HP-OL-30 und HP-OL-50 sind nicht betroffen.

**`hp-isl-264`** (Elternteil `HP-108/264`, Thema SIZE/LIGHT_COLOR)

- Optionen: Länge (3,38 m, 8,25 m); Lichtfarbe (Warmweiß, Kaltweiß, Multicolor)
- bleibt: `HP-ISL-264` als 8,25 m / Warmweiß
- neu: `HP-ISL-108` 3,38 m / Warmweiß, 26,99 €; `HP-ISL-108M` 3,38 m / Multicolor, 26,99 €; `HP-ISL-108W` 3,38 m / Kaltweiß, 26,99 €; `HP-ISL-264M` 8,25 m / Multicolor, 32,99 €; `HP-ISL-264W` 8,25 m / Kaltweiß, 36,99 €
- neue Bilder: 22

**`hp-uct-200-eu`** (Elternteil `HP-200-CLD-BT`, Thema FARBE/GRÖSSE)

- Optionen: Lichtfarbe (Warmweiß, Kaltweiß); Ausführung (Kupferdraht, Lichterkette)
- bleibt: `HP-UCT-200-EU` als Warmweiß / Lichterkette
- neu: `HP-UCC-200` Warmweiß / Kupferdraht, 12,99 €; `HP-UCC-200W` Kaltweiß / Kupferdraht, 12,99 €; `HP-UCT-200W` Kaltweiß / Lichterkette, 16,99 €
- neue Bilder: 21
- Hinweis: Elternteil mischt Familien: UCC, UCT

**`hp-isl-360-eu`** (Elternteil `HP-360-586-1008-BT`, Thema FARBE/GRÖSSE)

- Optionen: Lichtfarbe (Warmweiß, Kaltweiß, Multicolor); Länge (9 m, 15 m, 25 m)
- bleibt: `HP-ISL-360-EU` als Warmweiß / 9 m
- neu: `HP-ISL-008` Warmweiß / 25 m, 46,99 €; `HP-ISL-008M` Multicolor / 25 m, 46,99 €; `HP-ISL-008W` Kaltweiß / 25 m, 46,99 €; `HP-ISL-360M` Multicolor / 9 m, 24,99 €; `HP-ISL-360W` Kaltweiß / 9 m, 24,99 €; `HP-ISL-586` Warmweiß / 15 m, 32,99 €; `HP-ISL-586M` Multicolor / 15 m, 32,99 €; `HP-ISL-586W` Kaltweiß / 15 m, 32,99 €
- neue Bilder: 19

**`hp-blm-100-eu`** (Elternteil `HP-BLM-100-150-BT`, Thema FARBE/GRÖSSE)

- Optionen: Länge (10 m, 15 m)
- bleibt: `HP-BLM-100-EU` als 10 m
- neu: `HP-BLM-150` 15 m, 14,99 €
- neue Bilder: 1

**`hp-blt-100-eu-1`** (Elternteil `HP-BLT-100-150-BT`, Thema FARBE/GRÖSSE)

- Optionen: Länge (10 m, 15 m)
- bleibt: `HP-BLT-100-EU-1` als 10 m
- neu: `HP-BLT-150` 15 m, 14,99 €
- neue Bilder: 1

**`hp-dct-200`** (Elternteil `HP-DCT-0904`, Thema SIZE/LIGHT_COLOR)

- Optionen: Größe (3 x 2 m, 3 x 3 m); Lichtfarbe (Warmweiß, Kaltweiß, Multicolor)
- bleibt: `HP-DCT-200` als 3 x 2 m / Warmweiß
- neu: `HP-DCT-200M` 3 x 2 m / Multicolor, 19,99 €; `HP-DCT-200W` 3 x 2 m / Kaltweiß, 19,99 €; `HP-DCT-300` 3 x 3 m / Warmweiß, 22,99 €
- neue Bilder: 0

**`hp-dfm-400-eu-2`** (Elternteil `HP-DFM-400-1000-BT`, Thema FARBE/GRÖSSE)

- Optionen: Lichtfarbe (Warmweiß, Kaltweiß, Multicolor); Länge (6 m, 15 m)
- bleibt: `HP-DFM-400-EU-2` als Warmweiß / 6 m
- neu: `HP-DFM-010` Warmweiß / 15 m, 39,99 €; `HP-DFM-010M` Multicolor / 15 m, 39,99 €; `HP-DFM-010W` Kaltweiß / 15 m, 39,99 €; `HP-DFM-400M` Multicolor / 6 m, 24,99 €; `HP-DFM-400W` Kaltweiß / 6 m, 24,99 €
- neue Bilder: 19

**`hp-dfm-750-eu`** (Elternteil `HP-DFM-750-1500-BT`, Thema FARBE/GRÖSSE)

- Optionen: Lichtfarbe (Warmweiß, Multicolor); Länge (11,25 m, 22,5 m)
- bleibt: `HP-DFM-750-EU` als Warmweiß / 11,25 m
- neu: `HP-DFM-015` Warmweiß / 22,5 m, 49,99 €; `HP-DFM-015M` Multicolor / 22,5 m, 49,99 €; `HP-DFM-750M` Multicolor / 11,25 m, 29,99 €
- neue Bilder: 15

**`hp-dfm-600`** (Elternteil `HP-DFM-EU-01`, Thema SIZE/LIGHT_COLOR)

- Optionen: Länge (9 m, 18 m); Lichtfarbe (Warmweiß, Multicolor)
- bleibt: `HP-DFM-600` als 9 m / Warmweiß
- neu: `HP-DFM-012` 18 m / Warmweiß, 45,99 €; `HP-DFM-012M` 18 m / Multicolor, 45,99 €; `HP-DFM-600M` 9 m / Multicolor, 29,99 €
- neue Bilder: 8

**`hp-dlm-100h`** (Elternteil `HP-DLM-EU-01`, Thema SIZE/LIGHT_COLOR)

- Optionen: Länge (10 m, 20 m)
- bleibt: `HP-DLM-100H` als 10 m
- neu: `HP-DLM-200H` 20 m, 19,99 €
- neue Bilder: 2

**`hp-dnm-208`** (Elternteil `HP-DNM-EU-208S`, Thema LIGHT_COLOR/SET_NAME)

- Optionen: Lichtfarbe (Warmweiß, Multicolor)
- bleibt: `HP-DNM-208` als Warmweiß
- neu: `HP-DNM-208M` Multicolor, 22,99 €
- neue Bilder: 0

**`hp-olg-300-eu`** (Elternteil `HP-OLG-300-500-010-BT`, Thema FARBE/GRÖSSE)

- Optionen: Länge (30 m, 50 m, 100 m)
- bleibt: `HP-OLG-300-EU` als 30 m
- neu: `HP-OLG-010` 100 m, 45,99 €; `HP-OLG-500` 50 m, 27,99 €
- neue Bilder: 5

**`hp-olt-300-eu`** (Elternteil `HP-OLT-300-500-010-BT`, Thema FARBE/GRÖSSE)

- Optionen: Länge (30 m, 50 m, 100 m)
- bleibt: `HP-OLT-300-EU` als 30 m
- neu: `HP-OLT-010` 100 m, 45,99 €; `HP-OLT-500` 50 m, 27,99 €
- neue Bilder: 5

**`hp-rsp-180`** (Elternteil `HP-RSP-DE-01`, Thema SIZE/LIGHT_COLOR)

- Optionen: Höhe (1,8 m, 2,5 m)
- bleibt: `HP-RSP-180` als 1,8 m
- neu: `HP-RSP-250` 2,5 m, 169,99 €
- neue Bilder: 3

**`hp-tpm-400-eu-1`** (Elternteil `HP-TPM-DE`, Thema SIZE/LIGHT_COLOR)

- Optionen: LED-Anzahl (300 LEDs, 400 LEDs)
- bleibt: `HP-TPM-400-EU-1` als 400 LEDs
- neu: `HP-TPM-300` 300 LEDs, 26,99 €
- neue Bilder: 1

**`hp-vlm-100l`** (Elternteil `HP-VLM-DE-01`, Thema SIZE/LIGHT_COLOR)

- Optionen: Länge (10 m, 20 m, 30 m)
- bleibt: `HP-VLM-100L` als 10 m
- neu: `HP-VLM-200L` 20 m, 39,99 €; `HP-VLM-300L` 30 m, 49,99 €
- neue Bilder: 1
- Hinweis: bestehendes Produkt ist ACTIVE

Die vier Bündel aus Welle 1 (CTL-210, CTL-400, SCWL-10M2P, SCWL-15M2P) sind nicht betroffen: Alle Kinder ihrer Elternteile sind schon im Shop.

## 6. Produkte mit `todo-kategorie` (7)

Kein Hinweis aus Tylers Liste, Amazon-Produkttyp oder Titel greift, oder die Kinder widersprechen sich. Diese Produkte bekommen keinen kat-Tag und erscheinen in keiner Kollektion, bis du die Kategorie bestätigst. Die letzte Spalte ist nur mein Vorschlag.

| SKU | Titel | Tylers Bezeichnung | Vorschlag |
|---|---|---|---|
| `HP-RMP-180` | Warmweiß Weihnachtsbaum-Lichtturm 1,8 m | RGB锥形铁艺皮线灯1.8m 暖 | Weihnachtsbaum (kat-weihnachtsbaum), wie der Kegelbaum HP-RSP-180 |
| `HP-RPM-200, HP-RPM-400` | HeiPard Smart LED Lichterkette RGB App Fernbedienung K… | 200RGB皮线灯M; 400RGB皮线灯M | Smart-Lichterkette (kat-smart): HP-RPM-200 nennt App und Smart im Titel, HP-RPM-400 nicht |
| `HP-DGM-048` | HeiPard LED Weihnachtsdeko innen mit Fernbedienung, 2… | 48圣诞礼盒暖 | Motivleuchte (kat-motif): leuchtende Geschenkboxen |
| `HP-BSM-002` | HeiPard Hirsch Stil Weihnachtsleuchte String 2 Verkauf | nicht in der Liste | Motivleuchte (kat-motif): Hirsch |
| `HP-DGM-002` | HeiPard Spiralpfahl Lichtern | 螺旋圣诞过道灯彩 35cm | Motivleuchte (kat-motif): Spiralpfahl |
| `HP-FSF-120` | HeiPard LED Schneemann | 圣诞雪人120cm | Motivleuchte (kat-motif): Schneemann |
| `HP-FXF-001` | HeiPard teilige LED Rentier | 驯鹿拉车灯 | Motivleuchte (kat-motif): Rentier |

## 7. Gegenüberstellung OL gegen OLA, OLH, OLS (Abschnitt 6)

Für Tyler: Je OL-Produkt die OLA-, OLH- und OLS-Produkte mit gleicher Birnenform und einer Länge im Abstand von höchstens 5 m. Die Birnenzahl stammt aus der SKU, die Länge aus dem Amazon-Größenfeld oder dem Titel. Bei der Familie OL-Standard nennt der Bericht keine Birnenform, dort stehen alle Kandidaten gleicher Länge.

| OL-Produkt | Familie | Form | Länge | Birnen | Status | Kandidaten OLA, OLH, OLS |
|---|---|---|---|---|---|---|
| `HP-OL-30` | OL-G40 | G40 | 20 m | 30 | im Shop | HP-OLA-G40-27 (20 m, 27 Birnen, App); HP-OLH-G40-25 (15 m, 25 Birnen, Netz); HP-OLH-G40-35 (20 m, 35 Birnen, Netz); HP-OLS-G40-25 (15 m, 25 Birnen, Solar); HP-OLS-G40-35 (20 m, 35 Birnen, Solar) |
| `HP-OL-50` | OL-G40 | G40 | 30 m | 50 | im Shop | HP-OLA-G40-42 (30 m, 42 Birnen, App); HP-OLH-G40-50 (30 m, 50 Birnen, Netz) |
| `HP-OL-S11-15` | OL-S11 | S11 | 10 m | 15 | im Shop | HP-OLS-S11-16 (10 m, 16 Birnen, Solar, neu in 1b); HP-OLS-S11-25 (15 m, 25 Birnen, Solar, neu in 1b) |
| `HP-OL-S11-25` | OL-S11 | S11 | 15 m | 25 | im Shop | HP-OLS-S11-16 (10 m, 16 Birnen, Solar, neu in 1b); HP-OLS-S11-25 (15 m, 25 Birnen, Solar, neu in 1b); HP-OLS-S11-35 (20 m, 35 Birnen, Solar, nicht importierbar: kein Hauptbild) |
| `HP-OL-S11-30` | OL-S11 | S11 | 20 m | 30 | im Shop | HP-OLS-S11-25 (15 m, 25 Birnen, Solar, neu in 1b); HP-OLS-S11-35 (20 m, 35 Birnen, Solar, nicht importierbar: kein Hauptbild) |
| `HP-OL-S11-50` | OL-S11 | S11 | 30 m | 50 | neu in 1b | kein Kandidat |
| `HP-OL-ST38-15` | OL-ST38 | ST38 | 10 m | 15 | im Shop | HP-OLS-ST38-16 (10 m, 16 Birnen, Solar, neu in 1b); HP-OLS-ST38-25 (15 m, 25 Birnen, Solar, neu in 1b) |
| `HP-OL-ST38-25` | OL-ST38 | ST38 | 15 m | 25 | im Shop | HP-OLS-ST38-16 (10 m, 16 Birnen, Solar, neu in 1b); HP-OLS-ST38-25 (15 m, 25 Birnen, Solar, neu in 1b); HP-OLS-ST38-35-UK (20 m, 35 Birnen, Solar, UK-Variante, nicht importiert) |
| `HP-OL-ST38-30` | OL-ST38 | ST38 | 20 m | 30 | im Shop | HP-OLS-ST38-25 (15 m, 25 Birnen, Solar, neu in 1b); HP-OLS-ST38-35-UK (20 m, 35 Birnen, Solar, UK-Variante, nicht importiert) |
| `HP-OL-ST38-50` | OL-ST38 | ST38 | 30 m | 50 | neu in 1b | kein Kandidat |
| `HP-OL-15` | OL-Standard | nicht angegeben | 10 m | 15 | im Shop | HP-OLA-G40-15 (10 m, 15 Birnen, App); HP-OLA-S14-15 (10 m, 15 Birnen, App); HP-OLH-G40-15 (10 m, 15 Birnen, Netz); HP-OLS-G40-16 (10 m, 16 Birnen, Solar); HP-OLS-S11-16 (10 m, 16 Birnen, Solar, neu in 1b); HP-OLS-ST38-16 (10 m, 16 Birnen, Solar, neu in 1b) |
| `HP-OL-25` | OL-Standard | nicht angegeben | 15 m | 25 | im Shop | HP-OLH-G40-25 (15 m, 25 Birnen, Netz); HP-OLS-G40-25 (15 m, 25 Birnen, Solar); HP-OLS-S11-25 (15 m, 25 Birnen, Solar, neu in 1b); HP-OLS-ST38-25 (15 m, 25 Birnen, Solar, neu in 1b) |
| `HP-OL-75` | OL-Standard | nicht angegeben | 45 m | 75 | im Shop | kein Kandidat |
| `HP-OL-100` | OL-Standard | nicht angegeben | 60 m | 100 | im Shop | kein Kandidat |

`HP-OL-15-G` ist im Shop, steht aber nicht im Bericht. `HP-STT-050` (30 m, 50 Birnen, Form im Bericht nicht genannt) und `HP-SII-050` (ohne Hauptbild, nicht importierbar) gehören vermutlich auch in diesen Vergleich.

## 8. Ausgeschlossene Zeilen

| Grund | Anzahl | Amazon-SKUs |
|---|---|---|
| kein Hauptbild | 29 | `HP-BSD-002- EU`, `HP-DCT-300M-EU`, `HP-DCT-300W-EU`, `HP-DPM-400-EU-2`, `HP-DPM-400M-EU-2`, `HP-DPM-800-EU-2`, `HP-DPM-800M-EU-2`, `HP-DPT-800-EU-1`, `HP-OL-100`, `HP-OL-15`, `HP-OL-25`, `HP-OL-30`, `HP-OL-50`, `HP-OL-75`, `HP-OL-S11-25`, `HP-OLS-S11-35`, `HP-RFM-600-EU-2`, `HP-RIT-280-EU-1`, `HP-SBLB-100L-WW`, `HP-SBLB-60L-WW`, `HP-SII-050`, `HP-SOLM-12M-WW`, `HP-UCP-200-EU`, `HP-UCP-200M-EU`, `HP-UCP-200W-EU`, `HP-UCP-300-EU`, `HP-UCP-300M-EU`, `HP-UCP-300W-EU`, `HP-VIT-864L-EU-1` |
| Doppel-Listing derselben SKU (meist VINE), die führende Zeile wird importiert | 9 | `HP-BLT-050-EU-VINE`, `HP-DFM-600-EU-VINE`, `HP-DLM-100H-EU-VINE`, `HP-DPM-300-EU-VINE`, `HP-NPT-210-EU-VINE`, `HP-RPM-200-EU-VINE`, `HP-RSP-180-EU-VINE`, `HP-U20-200-EU-VINE`, `HP-VLM-100L-EU-VINE` |
| Status „Entfernt“ | 8 | `HP-DGM-002-EU`, `HP-RMP-180-EU-4`, `HP-RMP-180-EU-6`, `HP-RMP-250-EU-2`, `TPE-180G-EU`, `VMP_HP-CSL-300-C_2_PK`, `VMP_HP-CSL-300-W_2_PK`, `VMP_HP-OLT-200_2_PK` |
| Status „Inaktiv“ | 4 | `HP-CTL-300`, `HP-CTL-360`, `HP-SBLB-100L-WW-DE-01`, `HP-SBLB-60L-WW-DE-01` |
| Amazon-Produkttyp HEADPHONES (Listing-Fehler, Frage an Shenzhen) | 1 | `HP-GH-01` |
| Status „leer“ | 1 | `HP-CTL-360-EU HP-BSL-100-1P` |
| UK-Variante (bleibt draußen) | 1 | `HP-OLS-ST38-35-UK` |

Dazu kommen 45 Elternteile (davon 24 inaktiv) und 78 Zeilen, die schon im Shop sind. `HP-UCP-300M-UK` steht wie erwartet nicht im Bericht.

## 9. Weitere Auffälligkeiten

- **Fragen an Shenzhen (für das Sammelblatt):** `HP-GH-01` ist ein Gaming-Headset unter der Marke HeiPard mit Amazon-Produkttyp HEADPHONES, nicht importiert. In Tylers Liste steht bei der MSKU `HP-WBF-210-EU` die SKU `HP-DPM-300` mit der Bezeichnung „300皮线M暖", das ist offenbar eine verrutschte Zeile.
- **Lichtfarbe „Weiß":** Bei `HP-NPT-210W` nennt Amazon nur „Weiß", der Titel sagt nicht Kaltweiß. Der Optionswert bleibt deshalb „Weiß". Tylers Liste führt diese SKUs als 白, was bei anderen SKUs Kaltweiß bedeutet.
- **Stromquelle leer gelassen:** `HP-UCC-200`, `HP-UCC-200W`, `HP-UCT-200W`. Amazon sagt „Kabelgebunden", Titel oder Tylers Liste nennen USB. Betrifft nur Varianten, die an ein bestehendes Produkt gehen, dort setze ich ohnehin keine Produkt-Metafelder.
- **Familiencode nach Regel statt aus `sku_familie.csv`** (21 SKUs): HP-BSL-50-1P → BSL, HP-BSM-002 → BSM, HP-BSX-002 → BSX, HP-CSL-200-C → CSL, HP-CSL-200-W → CSL, HP-ISL-108 → ISL, HP-ISL-108W → ISL, HP-ISL-264M → ISL, HP-ISL-486 → ISL, HP-ISL-648 → ISL, HP-OL-S11-50 → OL-S11, HP-OL-ST38-50 → OL-ST38, HP-OLG-600 → OLG, HP-OLS-S11-16 → OLS-S11, HP-OLS-S11-25 → OLS-S11, HP-OLS-ST38-16 → OLS-ST38, HP-OLS-ST38-25 → OLS-ST38, HP-STT-050 → STT, HP-WBF-210 → WBF, PVC-180G → BAUM-PVC, PVC-210G → BAUM-PVC.
- **Elternteile, die im Bericht fehlen:** `HP-DE-0002`, `HP-DPM-0729`, `HP-OL-S11`, `HP-SBLB-DE-NEW-2`, `HP-SCWL`, `PEC-TREE-DE-01`, `PVC-TREE-DE-01`. Die Kinder verweisen darauf, die Elternzeile gibt es nicht. Das Thema stammt dann aus den Kindern.
- **Ohne Hauptbild, deshalb nicht importiert, und noch nicht im Shop** (15): `HP-BSD-002`, `HP-DCT-300M`, `HP-DCT-300W`, `HP-DPM-400`, `HP-DPM-400M`, `HP-DPM-800`, `HP-DPM-800M`, `HP-DPT-800`, `HP-OLS-S11-35`, `HP-SII-050`, `HP-UCP-200M`, `HP-UCP-200W`, `HP-UCP-300`, `HP-UCP-300M`, `HP-UCP-300W`.
- **Schon im Shop, im Bericht ohne Hauptbild** (14): `HP-OL-100`, `HP-OL-15`, `HP-OL-25`, `HP-OL-30`, `HP-OL-50`, `HP-OL-75`, `HP-OL-S11-25`, `HP-RFM-600`, `HP-RIT-280`, `HP-SBLB-100L-WW`, `HP-SBLB-60L-WW`, `HP-SOLM-12M-WW`, `HP-UCP-200`, `HP-VIT-864L`. Für diese Produkte liefert der Bericht also auch keine Bilder nach.
- **Im Shop, aber nicht im Bericht:** `HP-OL-15-G`.
- **Produkttyp:** Neue allgemeine Ketten bekommen nach Abschnitt 4 den Typ „Lichterkette". Die Produkte aus Welle 1 heißen „Lichterkette (allgemein)".
- **Familie über mehrere Produkte:** Amazon verteilt manche Familien auf mehrere Elternteile. ISL steht nach dem Import in drei Produkten (`hp-isl-264`, `hp-isl-360-eu`, `hp-isl-486`), DFM in drei, BLT in zwei, OLG und OLT in mehreren. Die Serienleiter zeigt je Familie Produkte, nicht Varianten.
- **Variantenbilder:** Shopify erlaubt ein Bild je Variante. Das Hauptbild des Kinds wird das Variantenbild, weitere abweichende Bilder liegen in der Galerie des Produkts. Bilder, die mehrere Kinder teilen, liegen einmal am Produkt.

## 10. Nach der Freigabe

1. Kollektionen zählen (vorher).
2. Neue Produkte anlegen (Draft), Bilder re-hosten, Tags und Metafelder `heipard.familie`, `heipard.stromquelle`, `heipard.lichtfarbe` setzen.
3. Zusammenführungen: Optionen am bestehenden Produkt anlegen, neue Varianten und Bilder ergänzen.
4. Stichprobe von zehn Produkten, Kollektionen zählen (nachher), Abschlussbericht.

Nichts wird aktiviert.
