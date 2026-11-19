# Bericht: Teil B, B1/B2/R1 aus den Metafeldern

Auftrag `heipard-theme-auftrag-teil-b-start.md` (Stand 19.11.2026, 00:30), Abschnitte 2 und 3. Stand dieses Berichts
19.11.2026, 01:25 Uhr. Vor jedem Schreibzugriff `get-shop-info` = HeiPard. Nicht angefasst: Preise, Status, Bestand,
Produktmedien, Files, Metafelder der Produkte, Showroom-Logik. Die drei Textkorrekturen aus Abschnitt 1 stehen im
R2/R3-Bericht, Abschnitt 10.

## Kurzfassung

- **Ursache:** Das Theme zeigte bei B1 und B2 nur das Bild am Block. Die Bilder aus Auftrag 20 liegen aber in den
  Produkt-Metafeldern `feature_b1` und `feature_b2`. Nur R1 fiel schon auf sein Metafeld zurück. Deshalb hatte sich
  nach Auftrag 20 auf den Seiten nur die R1-Zeile geändert.
- **Theme** (Commit `58bf601`, live seit 00:40:24 Uhr, Prüfsummen gleich git): B1 und B2 ohne Bild am Block zeigen
  jetzt das Bild aus `feature_b1` bzw. `feature_b2`. Ein Bild am Block hat weiter Vorrang, deshalb ändert sich an
  keiner Seite mit Blockbild etwas.
- **Slot leer, Bild jetzt aus dem Metafeld (5 Seiten):** DFM B2 an hp-dfm-400-eu-2, hp-dfm-600 und hp-dfm-750-eu,
  DGM048 B1 an hp-dgm-048, SOLM B1 an hp-solm-12m-ww. Vorher stand dort die Ersatzfläche mit Text.
- **OL-S11:** seit Auftrag 22 mit `feature_b2`, `ol-s11-b2` mit angepasstem Text im Set (Abschnitt 8).
- **Slot fehlte im Set, B2 ergänzt (10 Sets, 10 Seiten):** neun neue Blöcke mit Szenentext DE und EN (BAUM-PEC,
  BAUM-PVC, BSM, BSX, FSF, FXF, RMP, DGM-001, DGM048) und bei SOLM der vorhandene Welle-1-Block `solm-b2`, dessen
  Text zum Zaunbild passt.
- **UCP:** Texte von `ucp-b2` und `ucp-r1` an die UCT-Bilder angepasst, `ucp-b1` passt schon.
- **Slot zeigt schon ein anderes Bild (10 Familien, 18 Blöcke):** nichts ersetzt, Liste in Abschnitt 4, DCT-Vorschau
  (a) und (b) in Abschnitt 5. Bei (a) greift auf hp-dct-200 das Block-Limit, Hotspot und Zeitband fielen weg.
- **R1-Format:** Vergleichsvorschau hp-olt-100 in Abschnitt 6, nichts live geändert.
- **hp-dfm-600:** Aufnahme mit der Reihenfolge R1, Kennzahl, R2, R3 in Abschnitt 7.
- **Gegenprobe:** alle 118 Seiten DE und EN zeigen B1, B2 und R1, keine Zeile ohne Bild oder ohne Text, keine Liquid-Fehler, kein Block weggefallen; 23 Seiten anders als in der Ist-Aufnahme, alle beabsichtigt. Text gegen Bild (202 Paare ohne R2/R3): 13 Widersprüche, 13 Hinweise, darunter ein Faktenfehler (`rmp-r1`). Nichts davon umgeschrieben, Vorschläge in Abschnitt 9, Entscheidungen in Abschnitt 10.

## 1. Ursache

Die Feature-Sektion holt B1 (erster Full-Width-Block) und B2 (Bild-Text-Zeile) bisher nur aus dem Feld `image` des
Blocks. Die Asset-Instanz hat mit Auftrag 20 und Nachtrag die Bilder als Produkt-Metafelder gesetzt, die Blöcke selbst
blieben ohne Bild oder mit dem alten Bild. R1 hatte schon den Rückfall auf `feature_r1` (Schritt B, 16.11.), daher
zeigte sich dort sofort das neue Bild.

Lesung 19.11. vor dem Schreiben (31 Produkte, 23 Sets): Auf 5 der 118 Seiten stand eine Zeile ohne Bild (Ersatzfläche),
alle übrigen B1- und B2-Zeilen hatten ein Bild am Block.

## 2. Theme

Commit `58bf601`, Dateien `sections/heipard-feature.liquid` und `snippets/heipard-feature-dispatch.liquid`:

- Die Sektion gibt jedem Block einen Slot mit: `b1` für den Block an `b1_index` (erster Full-Width-Block mit Inhalt),
  `b2` für den ersten Block vom Typ `media_text` ohne Variante `sticky`.
- Die Block-Weiche nimmt bei `fullwidth` mit Slot `b1` und bei `media_text` mit Slot `b2` das Bild aus
  `feature_b1` bzw. `feature_b2`, aber nur wenn der Block weder Bild noch Video hat.
- Alt: wie bisher zuerst das Blockfeld `alt`. Deshalb habe ich bei jedem betroffenen Block das Feld `alt` aus dem
  Alt der Datei in Files gefüllt (DE und EN, Abschnitt 3).
- Lokal mit liquidjs an sieben Fällen getestet (Block ohne Bild mit Slot, Block mit Bild, falscher Typ, kein Slot),
  alle wie erwartet. Live geprüft an hp-dfm-600 und hp-solm-12m-ww vor dem Ändern der Sets.

## 3. Geändert im Shop

### 3.1 Slot leer: Bild aus dem Metafeld, Blockfeld `alt` ergänzt

| Block | Seiten | Bild (Metafeld) | Text |
|---|---|---|---|
| `dfm-b2` | hp-dfm-400-eu-2, hp-dfm-600, hp-dfm-750-eu | `DFM_B2_01` (Girlande über dem Kaminsims) | unverändert, passt zum Bild („Zu Weihnachten passt warmes Licht …“) |
| `dgm-w1-048-b1` | hp-dgm-048 | `DGM048_B1_01` (zwei Geschenkboxen am Weihnachtsbaum) | unverändert (Timer), widerspricht dem Bild nicht |
| `solm-b1` | hp-solm-12m-ww | `SOLM_B1_01` (Kette in einer Hecke am Kiesweg) | eine Wendung angepasst, siehe unten |

**`solm-b1`:** Der Text sagte „abends hängt die Kette am Zaun“, das Bild zeigt eine Hecke am Kiesweg. Mit Bild hätte
die Seite also einen Widerspruch gezeigt. Geändert habe ich nur diese Wendung, die Angaben zum Panel und zu den
10 Stunden bleiben:

- vorher: „Das Panel sammelt untertags Sonnenlicht, abends hängt die Kette am Zaun. Sie leuchtet bis zu 10 Stunden.“
- nachher: „Das Panel sammelt untertags Sonnenlicht, abends schmückt die Kette die Hecke. Sie leuchtet bis zu 10 Stunden.“
- EN (neu, der Block hatte kein EN): „Solar powered“ / „Soak up the sun, enjoy the light“ / „The panel collects sunlight
  during the day, and in the evening the string light decorates the hedge. It glows for up to 10 hours.“

Das ist eine Ausnahme von „Bestehendes nicht umschreiben“, weil der Text sonst dem Bild widersprochen hätte. Rückweg
in `docs/data/teilb-bloecke.json` (`body_vorher`).

Alt-Felder (vorher leer), DE aus Files, EN aus dem Register `alt_en.csv` der Asset-Instanz. Für `DFM_B2_01` und
`DGM_B2_01` gibt es in Files keinen englischen Alt, dort habe ich das Blockfeld EN selbst übersetzt (US-Englisch).
Die Asset-Instanz könnte den EN-Alt dieser beiden Dateien in Files nachtragen.

### 3.2 Slot fehlte im Set: B2 ergänzt

Je Set direkt hinter B1 eingefügt, sonst nichts an der Reihenfolge geändert. Long-Tail zählt danach B1, B2, R1,
Kennzahl = 4 (Limit 4), SOLM (Standard) B1, B2, R1, Kettenplan/Zeitband, Icon-Grid = 5 (Limit 5). Kein Block fällt weg,
das zeigt die Gegenprobe (Abschnitt 9).

| Set | Seite | Block | Bild (feature_b2) | Überschrift DE | Text DE |
|---|---|---|---|---|---|
| `baum-pec` | pec-150g | `baum-pec-b2` (neu) | `BAUMPEC_B2_02` | Ganz nah an den Zweigen | Aus der Nähe zeigt der ungeschmückte Baum seine dichten Zweige mit den hellgrünen Spitzen, dahinter liegt das Wohnzimmer im hellen Tageslicht. |
| `baum-pvc` | pvc-150g | `baum-pvc-b2` (neu) | `BAUMPVC_B2_02` | Auf dem Holzkreuz | Am Fuß des Baums sieht man die unteren Zweige und den Ständer aus hellem Holz, dahinter liegt das Wohnzimmer im warmen Tageslicht. |
| `bsm` | hp-bsm-002 | `bsm-b2` (neu) | `BSM_B2_02` | Der Hirsch im Fenster | Vor der Fensterscheibe hängt der leuchtende Hirsch, draußen liegt der verschneite Garten im blauen Licht der Dämmerung. |
| `bsx` | hp-bsx-002 | `bsx-b2` (neu) | `BSX_B2_02` | Doppelte Kontur | Vor dem dunklen Fenster hängt der Stern mit seiner doppelten Lichtkontur, draußen schimmern unscharf die Lichter der Stadt. |
| `fsf` | hp-fsf-120 | `fsf-b2` (neu) | `FSF_B2_02` | Im Schneegestöber | Mit Zylinder und rot-weiß gestreiftem Schal leuchtet der Schneemann von innen, während um ihn herum in der Dämmerung der Schnee fällt. |
| `fxf` | hp-fxf-001 | `fxf-b2` (neu) | `FXF_B2_02` | Kopf und Geweih | Aus der Nähe zeichnet der Lichtschlauch Kopf und Geweih des Rentiers nach, hinter ihm leuchtet der Schlitten im Schnee. |
| `rmp` | hp-rmp-180 | `rmp-b2` (neu) | `RMP_B2_02` | Der Stern an der Spitze | Oben auf dem Lichterturm leuchtet der Stern vor dem blauen Abendhimmel, darunter fächern sich die Lichtstränge nach unten auf. |
| `dgm` | hp-dgm-001 | `dgm-b2` (neu) | `DGM_B2_01` | Ein Stern im Beet | Auf seinem Erdspieß steht der Stern zwischen den Pflanzen im Beet, dahinter leuchten in der Dämmerung weitere Sterne. |
| `dgm-w1-048` | hp-dgm-048 | `dgm-w1-048-b2` (neu) | `DGM048_B2_01` | Mit karierter Schleife | Aus der Nähe sieht man die rot-weiß karierte Schleife der kleineren Geschenkbox, darunter schimmert das Licht warm durch die helle Hülle. |
| `solm` | hp-solm-12m-ww | `solm-b2` (Welle 1) | `SOLM_B2_01` | Reicht über den ganzen Zaun | unverändert: „Am Gartenzaun oder Geländer soll das Licht weit kommen. Auf 12 m verteilen sich 120 LEDs, dazu kommen 2 m Zuleitung.“ |

- **Texte:** Szenentext, kein Fakt, Quelle Notion „Bildbeschreibung“ der Zeilen `<FAM>-B2`, jedes Bild in 1200 px
  gesichtet, der Text folgt dem Bild. Keine Gedankenstriche, keine Garantie-, Herkunfts- oder Superlativwörter.
  Englisch (US) als Übersetzung am Block, Liste in `docs/data/teilb-bloecke.json`.
- **SOLM:** Der Grundausbau (03.11.) hatte `solm-b2` mangels Bild aus dem Set genommen und für später aufgehoben. Sein
  Text spricht vom Gartenzaun, genau das zeigt `SOLM_B2_01`, deshalb kein neuer Block. Die Zahlen darin sind die
  Welle-1-Fakten, am Text ist nichts geändert. Allgemeiner als dort geht es bei SOLM kaum, die neuen Bilder zeigen das
  Produkt bewusst klein.
- **Blöcke ohne Kicker** wie R2/R3. Bezeichnung im Editor `<FAM> · B2 Szene (Szenentext, kein Fakt)`.

### 3.3 UCP

Die Bilder an hp-ucp-200 sind die von UCT, der Text folgt dem Bild (Auftrag Abschnitt 2).

| Block | Bild | vorher | nachher |
|---|---|---|---|
| `ucp-b1` | `UCT_B1_01` (Vorhang an der Wand eines überdachten Balkons) | „Auch draußen gut aufgehoben“, überdachter Balkon | unverändert, passt |
| `ucp-b2` | `UCT_B2_01` (Stränge vor einer dunklen Holzwand) | „Nicht jeder Abend braucht volles Licht am Fenster. …“ | „Nicht jeder Abend braucht volles Licht. …“ (Rest gleich) |
| `ucp-r1` | `UCT_R1_01` (Lichtwand in einer Holzpergola hinter einem gedeckten Gartentisch) | Am Fenster / Abends ein Blickfang im Wohnzimmer / „Vor dem Fenster fallen die Lichtstränge senkrecht nach unten. Der Vorhang misst 3 x 2 m mit 200 LEDs.“ | In der Pergola / Abends ein Blickfang im Garten / „In der offenen Seite der Pergola fallen die Lichtstränge senkrecht nach unten. Der Vorhang misst 3 x 2 m mit 200 LEDs.“ |

Beide Blöcke haben jetzt Kicker, Überschrift und Text auch auf Englisch („Brightness and modes / Dimmed for movie
night, festive for guests“, „In the pergola / An evening eye-catcher in the garden“). Die Bezeichnung im Editor von
`ucp-r1` heißt jetzt „UCP · R1 Pergola“.

### 3.4 Schreibvorgänge

| Zeit | Was | Ergebnis |
|---|---|---|
| vor 00:40 | 9 Blöcke angelegt (`metaobjectCreate`) | 0 Fehler |
| vor 00:40 | 4 Blöcke ergänzt (alt, `solm-b1` Text), 2 UCP-Blöcke | 0 Fehler |
| vor 00:40 | 40 EN-Felder an 15 Blöcken (`translationsRegister`, Prüfsumme des DE-Texts) | 0 Fehler |
| 00:40:24 | Theme live (`58bf601`) | Prüfsummen gleich git |
| ~00:41 | 10 Sets: B2 hinter B1 eingefügt | 0 Fehler |

## 4. Liste: Slot zeigt heute schon ein anderes Bild

Nichts ersetzt, nichts entfernt. Das neue Bild liegt im Metafeld bereit und erscheint, sobald der alte Block kein Bild
mehr hat oder ein Block dazukommt (Entscheidung Leon, Abschnitt 5).

| Familie | Seiten | Block | heutiges Bild | neues Bild (Metafeld) | Bemerkung |
|---|---|---|---|---|---|
| BLT | hp-blt-050, hp-blt-100-eu-1 | `blt-b1` | `KAT-LED_B1_01` (Kategoriebild) | `BLT_B1_01` | |
| BLT | hp-blt-050, hp-blt-100-eu-1 | `blt-b2` | `BLT_B2_01` (Shenzhen) | `BLT_B2_03` | `blt-schieber` nutzt `BLT_B2_01` als Bildpaar, bleibt in jedem Fall |
| BLT (BLM) | hp-blm-100-eu | `blm-b1` | `KAT-LED_B1_01` (Kategoriebild) | `BLT_B1_01` | |
| BLT (BLM) | hp-blm-100-eu | `blm-b2` | `BLM_B2_01` | `BLT_B2_03` | `blm-schieber` nutzt `BLM_B2_01` |
| CTL-EU | hp-ctl-210-eu-1, hp-ctl-400-eu-1 | `ctl-b1` | `KAT-CTL_B1_01` (Kategoriebild) | `CTL_B1_01` | `ctl-b1` steht auch im Set `ctl-m` |
| CTL-EU | hp-ctl-210-eu-1, hp-ctl-400-eu-1 | `ctl-b2` | `CTL_B2_01` (Shenzhen) | `CTL_B2_02` | |
| CTLM | hp-ctl-180m, hp-ctl-240m | `ctl-b1` | `KAT-CTL_B1_01` (Kategoriebild) | `CTLM_B1_01` | geteilter Block, siehe CTL-EU |
| CTLM | hp-ctl-180m, hp-ctl-240m | `ctl-m-b2` | `CTL_I4_01_mc` | `CTLM_B2_01` | `ctl-m-steuerung` nutzt `CTL_I4_01_mc` |
| DCT | hp-dct-200 | `dct-b1` | `DCT_B1_01` (Shenzhen) | `DCT_B1_02` | Vorschau Abschnitt 5 |
| DCT | hp-dct-200 | `dct-b2` | `DCT_B2_01` (Shenzhen) | `DCT_B2_17` | Vorschau Abschnitt 5 |
| DFM | hp-dfm-400-eu-2, hp-dfm-600, hp-dfm-750-eu | `dfm-b1` | `KAT-CLUSTER_B1_01` (Kategoriebild) | `DFM_B1_01` | B2 zeigt seit heute `DFM_B2_01` (Abschnitt 3.1) |
| NPT | hp-npt-210 | `npt-b1` | `NPT_B1_01` (Shenzhen) | `NPT_B1_03` | |
| NPT | hp-npt-210 | `npt-b2` | `NPT_B2_01` (Shenzhen) | `NPT_B2_08` | |
| OLAS14 | hp-ola-s14-15/-30/-50-eu | `olas14-b1` | `OLAS14_B1_01` (Shenzhen) | `OLAS14_B1_02` | |
| OLAS14 | hp-ola-s14-15/-30/-50-eu | `olas14-b2` | `OLAS14_B2_01` | `OLAS14_B2_02` | `OLAS14_B2_02` steht schon im Block `olas14-sticky` auf der Seite; `olas14-steuerung` nutzt `OLAS14_B2_01` |
| SBLB | hp-sblb-60l-ww-new, hp-sblb-100l-ww-new | `sblb-b1` | `KAT-SOLAR_B1_01` (Kategoriebild) | `SBLB_B1_01` | |
| SBLB | hp-sblb-60l-ww-new, hp-sblb-100l-ww-new | `sblb-b2` | `SBLB_B2_01` (Shenzhen) | `SBLB_B2_03` | |
| VIT | hp-vit-586l-eu-1, hp-vit-864l-eu-1 | `vit-b1` | `VIT_B1_01` (Shenzhen) | `VIT_B1_02` | |
| VIT | hp-vit-586l-eu-1, hp-vit-864l-eu-1 | `vit-b2` | `VIT_B2_01` | `VIT_B2_06` | `VIT_B2_06` steht schon im Block `vit-sticky` auf der Seite |

Gleich und deshalb nicht auf der Liste: OL-G40 (`ol-g40-b1`/`-b2` zeigen schon `OLG40_B1_01`/`OLG40_B2_01`), DGM-001 B1
(`dgm-b1` zeigt schon `DGM_B1_01`). Die Texte dieser Welle-2-Blöcke sind Fakt-Texte zum alten Bild. Wird ein Bild
ersetzt, muss der Text mitwandern (Beispiel DCT, Abschnitt 5).

## 5. Vergleichsvorschau DCT (offline)

Live-Seite hp-dct-200 im eigenen Browser, B1 und B2 nur im Browser verändert. Im Shop ist nichts geändert. Rote
Marken kennzeichnen die geänderten Zeilen.

- **(a) Der alte Block bleibt, das neue Bild kommt als weiterer Block dazu:** neue Zeilen direkt hinter dem alten B1
  (Full-Width) und dem alten B2, mit Szenentext (Vorschlag). Die Bildseiten der folgenden Zeilen wechseln dadurch.
  **Block-Limit:** hp-dct-200 (Hero, Limit 8) zählt heute genau 8 Blöcke (B1, B2, R1, Schieber, Kettenplan, Sticky,
  Hotspot, Zeitband). Mit zwei Blöcken mehr fallen Hotspot und Zeitband weg. Das gilt sinngemäß für jede Familie auf
  der Liste, die heute am Limit steht. Ohne deine Freigabe schreibe ich das nicht.
- **(b) Das neue Bild ersetzt den Shenzhen-Ausschnitt:** gleiche Blöcke, gleiche Reihenfolge, nichts fällt weg. Die
  alten Texte passen dann nicht mehr („Regen von der Seite“, „Vor dem Wohnzimmerfenster“). Vorschlag in der Vorschau:
  Szene aus dem Text nehmen, die Fakten (IP44, Größen und LED-Zahl) behalten.

| | B1 | B2 |
|---|---|---|
| heute | `DCT_B1_01`, Pergola im Regen, kaltweiß; „Er darf auch draußen hängen“ | `DCT_B2_01`, Wohnzimmerfenster; „Deckt ein ganzes Fenster ab“ |
| (a) neuer Block | `DCT_B1_02`: „Lichtwand an der Pergola“ / „An der Holzpergola wird der Lichtervorhang zur leuchtenden Wand, darunter stehen Tisch und Stühle in der Dämmerung.“ | `DCT_B2_17`: „Stränge aus der Nähe“ / „Aus der Nähe hängen die Lichtstränge auf ihrem transparenten Kabel vor der dunklen Holzwand und leuchten in den Abend.“ |
| (b) im alten Block | `DCT_B1_02`: „Er darf auch draußen hängen“ / „Unter der Pergola leuchtet der Vorhang über der Terrasse. Nach IP44 ist er gegen Spritzwasser aus allen Richtungen geschützt.“ | `DCT_B2_17`: „Senkrechte Stränge, dicht an dicht“ / „Die Lichtstränge fallen senkrecht an der Holzwand herab. Den Vorhang gibt es 3 m breit und 2 m hoch mit 200 LEDs oder 3 m hoch mit 300 LEDs.“ |

Aufnahmen (`docs/screenshots/2026-11-19-teil-b/`):

- nebeneinander bis Ende R1: `dct_vergleich_desktop.jpg`, `dct_vergleich_mobil.jpg`
- ganze Feature-Sektion Desktop: `hp-dct-200_heute_desktop.jpg`, `hp-dct-200_a_desktop.jpg`, `hp-dct-200_b_desktop.jpg`

Meine Empfehlung: (b). Die Seite bleibt gleich lang, kein Block fällt weg, und der Shenzhen-Ausschnitt mit Regen und
Kaltweiß weicht dem freigegebenen Hermes-Bild. Technisch heißt (b): Bild am Block entfernen (dann greift das
Metafeld) und Text anpassen, DE und EN.

## 6. Vergleichsvorschau R1-Format (offline)

hp-olt-100, Desktop 1400 px und Mobil 390 px, beide Fassungen im selben Lauf aus der Live-Seite. Fassung 2 setzt nur im
eigenen Browser für alle Bild-Text-Zeilen außer Sticky das Format 16:9. Im Theme ist nichts geändert.

- Fassung 1 (live): B2 und R1 in 5:4 (gemessen 1,250), R2 und R3 in 16:9 (1,778).
- Fassung 2: B2, R1, R2 und R3 in 16:9 (alle 1,778). Die Strecke von B1 bis R3 wird auf Desktop 299 px kürzer
  (2522 statt 2223 px), mobil 171 px (2151 statt 1980 px).
- **Bildformat der Dateien:** Alle B2- und R1-Dateien der 31 geprüften Produkte sind 2048 x 1152, also 16:9. In 5:4
  schneidet das Theme links und rechts zusammen knapp ein Drittel der Breite ab (sichtbar sind 70 %), in 16:9 ist das
  ganze Bild zu sehen.

Aufnahmen: `r1_vergleich_desktop.jpg`, `r1_vergleich_mobil.jpg` (nebeneinander), einzeln
`hp-olt-100_fassung1_desktop.jpg`, `hp-olt-100_fassung2_desktop.jpg`, `hp-olt-100_fassung1_mobil.jpg`,
`hp-olt-100_fassung2_mobil.jpg`.

Umstellung, falls gewünscht: eine CSS-Zeile in `assets/heipard-feature.css`, gilt dann für alle Seiten.

## 7. hp-dfm-600: Reihenfolge mit Kennzahl

Aufnahme live, Desktop und Mobil, vom B1 bis Ende R3: `hp-dfm-600_desktop.jpg`, `hp-dfm-600_mobil.jpg`.

B1 (`KAT-CLUSTER_B1_01`, Liste Abschnitt 4), B2 (`DFM_B2_01`, seit heute), R1 (`DFM_R1_01`, Bild rechts), Kennzahl
„600 Lichtpunkte“, R2 (links), R3 (rechts), danach Kettenplan und Hotspot. Bleibt so (Auftrag Abschnitt 2).

## 8. OL-S11

Die Asset-Instanz hat mit Auftrag 22, Teil C (deine Fassung 2) um 00:31 Uhr `feature_b2` = `OLS11_B2_02` an
hp-ol-s11-15, -25, -30 und -50 gesetzt. Laut Auftrag Punkt 5 habe ich danach (19.11., ~01:00 Uhr):

- `ol-s11-b2` direkt hinter B1 ins Set `ol-s11` aufgenommen. Das Set zählt damit 5 Blöcke (Standard, Limit 5), kein
  Block fällt weg. Das Bild kommt aus dem Metafeld (Theme-Rückfall, Abschnitt 2).
- den Text an das Bild angepasst. Das Bild zeigt eine Nahaufnahme einer bernsteinfarbenen S11-Birne am schwarzen Kabel
  vor einer Pergola. Der Welle-1-Text „Vier Längen / Vom Balkon bis zum Festplatz / Am Geländer reicht eine kurze Kette,
  über eine Wiese spannst du eine lange. Es gibt sie von 10 m mit 15 Birnen bis 30 m mit 50 Birnen.“ beschrieb keine
  Szene im Bild. Neu, Szenentext ohne Kicker: „Ganz nah an der Birne“ / „Aus der Nähe leuchtet die bernsteinfarbene
  Birne am schwarzen Kabel, dahinter schimmern die nächsten Birnen vor der Pergola in der Dämmerung.“ EN: „Up close to
  the bulb“ / „Up close, the amber bulb glows on its black cable, while the next bulbs shimmer behind it against the
  pergola at dusk.“
- das Blockfeld `alt` mit dem Alt der Asset-Instanz gefüllt (DE und EN).

Alter Stand für den Rückweg: `docs/data/teilb-bloecke.json` (`ol_s11`).

## 9. Gegenprobe über alle 118 aktiven Produkte

Ist-Stand laut Auftrag: meine Aufnahme vom 18.11., 20:25 bis 20:42 Uhr. Neu geladen: alle 118 Seiten DE (00:41 bis
00:58 Uhr) und EN (00:58 bis 01:15 Uhr), dazu die vier OL-S11-Seiten um 01:17 Uhr noch einmal DE und EN. Alle mit Status 200,
keine Liquid-Fehler.

**Ergebnis der Seitenprüfung (automatisch, `pruef_b.py`):**

- **B1, B2 und R1 auf allen 118 Seiten.** In der ersten Aufnahme fehlte B2 nur an den vier OL-S11-Seiten. Seit
  01:00 Uhr steht dort `ol-s11-b2` (Abschnitt 8), die Nachladung zeigt B2 mit `OLS11_B2_02` auf allen vier.
- **Block mit Text ohne Bild (Ersatzfläche):** 0 Seiten (vorher 5).
- **Block mit Bild ohne Text:** 0.
- **Unterschiede zur Ist-Aufnahme:** 23 Seiten, alle beabsichtigt. Es ist keine Zeile weggefallen, Kennzahl,
  Kettenplan, Icon-Grid und Daten-Zone stehen überall wie vorher. Auf den Seiten mit neuem B2 ist die Bildseite
  B2 links, R1 rechts, R2 links, R3 rechts, also für R1 bis R3 wie vorher.

| Seiten | Unterschied |
|---|---|
| hp-blt-050, hp-blt-100-eu-1, hp-blm-100-eu | BLT-R3 „Im Vorratsglas“ (Abschnitt 1 des Auftrags) |
| hp-uct-200-eu | UCT-R2 „Vor der Gardine“ |
| hp-ols-st38-16 | OLSST38-R2 Text „am Gartenweg“ |
| hp-ucp-200 | UCT-R2 wie oben, UCP-B2 und UCP-R1 neue Texte |
| hp-dfm-400-eu-2, hp-dfm-600, hp-dfm-750-eu | B2 jetzt mit Bild `DFM_B2_01` |
| hp-solm-12m-ww | B1 mit Bild `SOLM_B1_01` (Text „schmückt die Hecke“), B2 `solm-b2` neu |
| hp-dgm-048 | B1 mit Bild `DGM048_B1_01`, B2 neu |
| hp-dgm-001, hp-rmp-180, pec-150g, pvc-150g, hp-bsm-002, hp-bsx-002, hp-fsf-120, hp-fxf-001 | B2 neu |
| hp-ol-s11-15, -25, -30, -50 | B2 neu (nach 01:00 Uhr) |

- **Alt gegen Files (Register `alt_en.csv`):** eine Abweichung, hp-dgm-048 R1. Der Block `dgm-w1-r1` steht auch im
  Set von hp-dgm-002 und trägt im Feld `alt` den Text der Spiralen („Drei mehrfarbige HeiPard LED-Spiralstecker …“).
  Auf hp-dgm-048 zeigt R1 aber seit Auftrag 20 `DGM048_R1_01` (Geschenkboxen im Flur). Sichtbar ist das nicht, nur der
  Alt-Text ist falsch. Vorschlag in Abschnitt 10.
- **EN:** Alle 118 Seiten auf `/en/` zeigen B1, B2 und R1, keine Ersatzfläche, kein Bild ohne Text, bis auf denselben falschen Alt von R1 an hp-dgm-048 wie auf Deutsch. Die 16 neuen oder geänderten Blöcke (9 neue B2, `dfm-b2`, `dgm-w1-048-b1`, `solm-b1`, `solm-b2`, `ucp-b2`, `ucp-r1`, `ol-s11-b2`) zeigen auf ihren Seiten Überschrift, Text und Alt englisch: 54 von 54 Feldern gefunden. Ältere Texte von B1, B2 und R1 bleiben auf `/en/` deutsch (geparkter Punkt „Blocktexte ohne EN“).

**Text gegen Bild (202 Paare):** Jede Kombination aus Bild und Text auf den 118 Seiten außer R2/R3 (dazu `ol-s11-b2`, den
ich beim Schreiben selbst am Bild geprüft habe). R2/R3 hast du am
18.11. in voller Auflösung gesichtet, die drei Korrekturen sind seit 00:20 Uhr live. Jedes Bild in 1200 px. Vier
Prüfer haben je ein Viertel gelesen, ohne meine Einschätzung. Jeden ihrer 28 Befunde habe ich danach selbst am Bild
nachgeprüft.

*Widerspruch (13), Text sagt etwas über die Szene, das im Bild anders ist:*

| Block (Bild) | Seiten | Text | Bild | Vorschlag |
|---|---|---|---|---|
| R1 (`RMP_R1_01`) | hp-rmp-180 | „Die G40-Birnen leuchten warmweiß mit 2700 Kelvin.“ | Lichterturm aus Mikro-LED-Strängen, keine G40-Birnen | **Faktenfehler**, der Satz gehört zu einer G40-Kette. Streichen; die Lichtfarbe des Lichterturms erst nach Faktenlage nennen |
| R1 (`UCT_R1_01`) | hp-uct-200-eu | Am Fenster / „Eine leere Scheibe wird zum Blickfang“ / „vor dem Fenster“ | Lichtwand in einer Holzpergola hinter einem gedeckten Gartentisch | wie `ucp-r1`: In der Pergola / Abends ein Blickfang im Garten / „In der offenen Seite der Pergola fallen …“ |
| R1 (`BSM_R1_01`) | hp-bsm-002 | „Ein Hirsch hängt im Fenster, der andere an der Tür.“ | ein Hirsch an einer Flurwand über einem Sideboard | „Ein Hirsch hängt im Flur über dem Sideboard, der zweite findet einen eigenen Platz.“ |
| R1 (`NPT_R1_01`) | hp-npt-210 | „Mal gedämpft zum Film …“ / „Abends vor dem Fernseher …“ | Netz über einer Natursteinmauer im Garten | „Mal gedämpft, mal hell für Besuch“ / „Spät am Abend reicht an der Gartenmauer oft ein schwaches Glimmen.“ |
| R1 (`DPM_R1_01`) | hp-dpm-300 | „… beim Fernsehen reicht ein Glimmen.“ | Baum im Vorgarten vor einem Haus | „… spät am Abend reicht ein Glimmen im Vorgarten.“ |
| R1 (`RCT_R1_01`) | hp-rct-400 | „Auch am Balkonfenster gut aufgehoben“ / „An einer feuchten Scheibe …“ | bunter Vorhang an der Wohnzimmerwand hinter einem Sofa | „Hinter dem Sofa wie am Balkonfenster“ / „Hinter dem Sofa leuchtet der Vorhang als bunte Lichtwand. Nach IP44 ist er gegen Spritzwasser geschützt, auch am Balkonfenster.“ |
| R1 (`RFM_R1_01`) | hp-rfm-600 | „Bleibt hängen, wenn es nieselt“ / „Am Balkon bekommt die Kette auch mal Regen ab.“ | bunte Kette am Geländer einer Innentreppe | „Drinnen am Geländer, draußen am Balkon“ / „Im Treppenhaus schmückt die Kette das Geländer, und am Balkon macht ihr Regen nichts aus. Nach IP44 …“ |
| R1 (`VIT_R1_01`) | hp-vit-586l-eu-1, hp-vit-864l-eu-1 | „Du musst nicht aufs Dach …“ / „Wenn die Kette an der Dachkante hängt …“ | Eisregen am Balkongeländer, von der Straße aus | „Hängt die Kette am Balkongeländer oder an der Dachkante, stellst du Leuchtmodus und Helligkeit mit der mitgelieferten Fernbedienung ein.“ |
| R1 (`SOLM_R1_01`) | hp-solm-12m-ww | „Fest montiert an Wand oder Zaun“ | Panel auf einem Erdspieß am Hochbeet | Überschrift „Das Panel braucht einen festen Platz“, Text bleibt |
| R1 (`OLST38_R1_01`) | hp-ol-st38-15, hp-ol-st38-25, hp-ol-st38-30, hp-ol-st38-50 | „Am Tisch soll das Licht einladen …“ | gepflasterter Innenhof mit Fahrrad, kein Tisch | „Im Hof soll das Licht einladen …“ |
| R1 (`OLT_R1_01`) | hp-olt-100, hp-olt-150, hp-olt-200, hp-olt-300-eu, hp-olt-400, hp-olt-600, hp-olt-800 | „Im Winter beginnt der Abend früh …“ | Gartentreppe im Sommer, Stauden in Blüte | „Lange Abende sollen gemütlich sein.“ |
| B2 (`RGB_B2_01`) | hp-rgb-200a, hp-rgb-300a, hp-rgb-500a | „Lichtpunkte dicht an dicht“ / „… sitzen die LEDs eng beieinander“ | um einen Handlauf gewickelte Kette, LEDs deutlich einzeln | „Bunte Punkte am Handlauf“ / „Um den Handlauf gewickelt, setzen die LEDs bunte Punkte im Abstand von 10 cm. …“ |
| B2 (`BLM_B2_01`) | hp-blm-100-eu | „Die Kinder legen die Kette auf dem Teppich aus“ | Holzdielenboden, kein Teppich | „auf dem Holzboden“ |

Bis auf die zwei B2-Texte (RGB, BLM) sind das R1-Texte. Sie stammen aus der Zeit, als R1 noch ohne Bild war, die Bilder kamen
mit Schritt B (16.11.) und Auftrag 20. Nichts davon ist geändert, weil der Auftrag nur die UCP-Texte zum Umschreiben
freigibt. Die Vorschläge halten die Fakten und nehmen nur die falsche Szene heraus (DE, EN dazu beim Schreiben).

*Hinweis (13), Text passt nur teilweise oder nennt Orte, die nicht im Bild sind:*

| Block (Bild) | Seiten | Befund |
|---|---|---|
| B1 (`KAT-LED_B1_01`) | hp-blm-100-eu | Kategoriebild zeigt eine Kugelbirnen-Kette, der Text meint die Batterie-Kette. Steht auf der Liste in Abschnitt 4 |
| B1 (`KAT-CTL_B1_01`) | hp-ctl-180m, hp-ctl-210-eu-1, hp-ctl-240m, hp-ctl-400-eu-1 | um den Baum gewickelte Kette, kein Baummantel mit Strängen. Liste Abschnitt 4 |
| B2 (`CTL_B2_01`) | hp-ctl-210-eu-1, hp-ctl-400-eu-1 | Ring und Stränge nicht zu erkennen. Liste Abschnitt 4 |
| B1 (`BAUMPVC_B1_01`) | pvc-150g | „Für draußen / Auch vor der Haustür ein Blickfang“, Bild nur Wohnzimmer (Text nennt beides) |
| B1 (`DGM002_B1_01`) | hp-dgm-002 | „links und rechts vom Weg … bis zur Haustür“, im Bild drei Stecker nebeneinander |
| R1 (`DGM048_R1_01`) | hp-dgm-048 | Kicker „Viele Lichtpunkte“, die Boxen leuchten flächig. Dazu der falsche Alt (oben) |
| R1 (`OLAG40_R1_01`) | hp-ola-g40-15-eu, hp-ola-g40-27-eu, hp-ola-g40-42-eu | „sanft am Feuer“, kein Feuer im Bild |
| B1 (`OLG40_B1_01`) | hp-ol-100, hp-ol-15, hp-ol-15-g, hp-ol-25, hp-ol-75, hp-ola-g40-15-eu, hp-ola-g40-27-eu, hp-ola-g40-42-eu | „über der Terrasse“ bzw. „über Tafel und Bänken“, die Kette hängt im Bild hinter dem Tisch über dem Garten |
| B2 (`SCWL_B2_01`) | hp-scwl-10m2p-mc, hp-scwl-15m2p-mc | „am Terrassenpfosten und am Strauch“, im Bild nur der Pfosten |
| R1 (`SCWL_R1_01`) | hp-scwl-10m2p-mc, hp-scwl-15m2p-mc | „am Strauch“, im Bild ein Olivenbäumchen im Kübel |
| B1 (`UCT_B1_01`) | hp-uct-200-eu | „unter dem Vordach … Regen von der Seite“, im Bild überdachter Balkon ohne Regen |
| B1 (`WWF_B1_01`) | hp-wwf-180 | „neben dem Kamin oder am Hauseingang“, im Bild Sofa und Regal |
| R1 (`OLSA60_R1_01`) | hp-ols-a60-16-eu | „an der 6,5 m langen Kette hängen 16 Birnen“, im Bild deutlich mehr Birnen (mehrere Ketten) |

**Bildbefunde für die Asset-Instanz** (kein Text-Widerspruch): Auf den Fernbedienungsbildern `CTL_P1_05`,
`DCT_P1_04`, `NPT_P1_06` und `DFM_P1_01` steht an einer Taste „6639 H“, auf `OLG40_P1_01` (Platzhalter) „Fuash“.
`SCWL_B2_01` zeigt die warmweiße Kette. hp-scwl-10m2p-mc und -15m2p-mc haben laut Asset-Instanz je eine bunte und
eine warmweiße Variante; die Feature-Bilder hängen am Produkt, nicht an der Variante, also sieht auch die bunte
Variante das warmweiße B2. Ob das so bleiben soll, entscheidest du. In Files fehlt außerdem der EN-Alt von
`BLT_B1_01` (meldet die Asset-Instanz, betrifft BLT/BLM erst nach Punkt 1 in Abschnitt 10).

## 10. Offen, Entscheidung bei Leon

1. **DCT und die übrigen Familien der Liste (Abschnitt 4):** Variante (a) oder (b)? Meine Empfehlung ist (b), weil
   nichts wegfällt. Bei (a) greift auf hp-dct-200 das Block-Limit. Nach deiner Wahl setze ich DCT um und lege für die
   anderen neun Familien Texte vor. Bis dahin bleibt alles, wie es ist.
2. **R1-Format (Abschnitt 6):** Fassung 1 (heute) oder Fassung 2 (B2 und R1 in 16:9)?
3. **13 Widersprüche (Abschnitt 9):** Soll ich die Vorschläge schreiben (DE und EN)? `rmp-r1` ist ein Faktenfehler
   (G40-Satz am Lichterturm) und sollte zuerst weg. Für die Lichtfarbe des Lichterturms bräuchte ich eine Angabe aus
   den Produktdaten, sonst bleibt der Satz einfach gestrichen.
4. **hp-dgm-048, Alt von R1:** Vorschlag: eigener Block `dgm-w1-048-r1` mit dem Text von `dgm-w1-r1` (DE und EN gleich)
   und dem Alt von `DGM048_R1_01`, im Set `dgm-w1-048` an Stelle von `dgm-w1-r1`. Das ändert ein bestehendes Set,
   deshalb nicht ohne dein Wort. Sichtbar ändert sich nichts.
5. **Hinweise (13, Abschnitt 9):** keine Eile. Drei davon (Kategoriebilder BLT/BLM und CTL, `CTL_B2_01`) erledigen
   sich mit Punkt 1.
6. **An die Asset-Instanz** (gemeldet): EN-Alt in Files für `DFM_B2_01` und `DGM_B2_01` fehlt. Die Fernbedienungsbilder
   tragen Schriftfehler („6639 H“, „Fuash“).

## Rückweg

- Theme: Commit `58bf601` zurücknehmen. Dann zeigen die fünf Seiten aus 3.1 wieder die Ersatzfläche, die neuen
  B2-Blöcke in den zehn Sets zeigen dann ebenfalls die Ersatzfläche, deshalb vorher die Sets zurückschreiben.
- Sets: Blocklisten aus `docs/data/teilb-sets.json` (`vorher`) zurückschreiben.
- Blöcke: die neun neuen Blöcke (`docs/data/teilb-bloecke.json`, `neu`) löschen, `solm-b2` und `ol-s11-b2` bleiben wie
  vorher außerhalb (Text von `ol-s11-b2` aus `ol_s11.vorher`).
- `solm-b1` Text: `body_vorher` aus `docs/data/teilb-bloecke.json`; Alt-Felder der vier Blöcke wieder leeren.
- UCP: `vorher` aus `docs/data/teilb-bloecke.json`, EN-Übersetzungen der beiden Blöcke entfernen.
