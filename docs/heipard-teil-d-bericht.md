# Teil D: Nacharbeit zu Teil C, Bericht

Stand 19.11.2026, 13:45 Uhr. Auftrag `heipard-theme-auftrag-teil-d.md`, Bezug Bericht Teil C, Abschnitt 10.
Geschrieben habe ich nur Metaobjekte (Blöcke, Set `dct`) und ihre EN-Übersetzungen. Nicht berührt: Preise, Status,
Bestand, Produktmedien, Files, Produkt-Metafelder, Showroom-Logik, Theme. Vor jedem Schreiben `get-shop-info` = HeiPard.

## Kurzfassung

- **Abschnitt 1, hp-dct-200:** Im Block `dct-b2` ist das Bild entfernt, B2 zeigt jetzt `DCT_B2_17` aus dem Metafeld.
  Der Text folgt Vorschau (b), die Größen bleiben, DE und EN. Die Zusatzzeile ist aus dem Set entfernt, der Block
  `dct-b2-zusatz` ist gelöscht. Live seit 13:28 Uhr. Auf der Seite steht kein Bild mehr doppelt.
- **Abschnitt 2:** Die neun älteren R1-Blöcke haben das Feld `alt` jetzt, DE und EN aus dem Register. Auf allen 17
  Seiten unter `/en/` steht der englische Alt. Deutsch hat sich auf keiner dieser Seiten etwas geändert.
- **Abschnitt 3:** Die Asset-Instanz hat die EN-Alts um 13:27 Uhr in Files eingetragen (Auftrag 24, Teil A).
  `ctl-b2` und `dfm-b1` waren schon wortgleich mit Files, dort war nichts zu tun. Bei `sblb-b1` habe ich das Blockfeld nachgezogen.
- **Abschnitt 5:** Auf 15 von 18 Bildern ist ein Panel zu sehen. 13 davon stehen auf einem Erdspieß im Boden, im
  Kübel oder auf dem Deck. Eins hängt am Geländer, der Erdspieß baumelt sichtbar darunter. Eins sitzt mit Halterung am
  Geländerpfosten. Die Amazon-Quelle nennt bei fünf der sechs Familien zusätzlich ein Teil „Erdungsstecker“. Das
  Skript hat es nicht erkannt, deshalb fehlt es im Metafeld (Abschnitt 5.2).
- **Abschnitt 6:** `lieferumfang` stammt aus dem Amazon-Kategorie-Angebotsbericht vom 10.02.2026. Die Asset-Instanz
  hat es mit Auftrag 15 (`scripts/lieferumfang.py --welle1`) zum Blatt aufbereitet, diese Theme-Sitzung hat es am
  03.11.2026 um 12:03 Uhr in den Shop geschrieben. Seitdem ist es unverändert. Bei hp-dgm-048 kommt „LED-Gartenstecker“
  aus der Familienzuordnung DGM, nicht aus dem Produkt.
- **Gegenprobe:** 17 Seiten DE und EN neu geladen (13:30 bis 13:34 Uhr), 0 Fehler. Alle Unterschiede sind die
  beabsichtigten (Abschnitt 4).

## 1. hp-dct-200: B2 ersetzt (Regel 1 und 3)

| Feld | vorher | nachher |
|---|---|---|
| Bild am Block | `DCT_B2_01` (Wohnzimmerfenster, bildgleich mit Schieber `DCT_I1_01_an`) | leer, B2 zeigt `DCT_B2_17` aus `feature_b2` |
| Kicker | Zwei Größen | Zwei Größen (unverändert) |
| Überschrift | Deckt ein ganzes Fenster ab | Senkrechte Stränge, dicht an dicht |
| Text | Vor dem Wohnzimmerfenster fallen die Lichtstränge bis hinunter zur Fensterbank. Den Vorhang gibt es 3 m breit und 2 m hoch mit 200 LEDs oder 3 m hoch mit 300 LEDs. | Die Lichtstränge fallen senkrecht an der Holzwand herab. Den Vorhang gibt es 3 m breit und 2 m hoch mit 200 LEDs oder 3 m hoch mit 300 LEDs. |
| Alt | LED-Lichtervorhang von HeiPard, Wohnzimmerfenster mit Pflanzen und Beistelltisch, warmweißes Licht | Files-Alt von `DCT_B2_17`: „Nahaufnahme der senkrechten Stränge des HeiPard LED-Lichtervorhangs auf transparentem Kabel vor einer dunklen Holzwand.“ |
| Bezeichnung | DCT · B2 Wohnzimmerfenster | DCT · B2 Stränge an der Holzwand |
| EN | nur Alt (Wohnzimmerfenster) | Kicker „Two sizes“, Überschrift „Vertical strands, close together“, Text „The light strands fall straight down the wooden wall. The curtain comes 3 m wide and 2 m high with 200 LEDs, or 3 m high with 300 LEDs.“, Alt aus dem Register |

- **Fakten:** `breite_m` 3,0; je Variante `hoehe_m` 2,0 bzw. 3,0 und `led_anzahl` 200 bzw. 300. Neue Fakten
  gibt es nicht.
- **Bild:** `DCT_B2_17` in 1200 px angesehen. Die Stränge hängen senkrecht und dicht an einer Holzwand mit waagrechten
  Brettern.
- **Zusatzzeile:** `dct-b2-zusatz` ist aus dem Set `dct` entfernt (jetzt 14 Blöcke wie vor Teil C). Den Block habe ich
  gelöscht, nachdem keine Referenz mehr bestand. Sein Stand mit EN liegt in `docs/data/teild-vorher.json`. Das
  Wohnzimmerfenster bleibt über den Schieber auf der Seite.
- **Live:** Die Reihenfolge auf hp-dct-200 ist jetzt B1 `DCT_B1_02` (Full-Width), B2 `DCT_B2_17` (Bild links), R1
  `DCT_R1_01` (rechts), R2, R3, Schieber, Kettenplan, Sticky, Hotspot, Zeitband. Die Bildseiten wechseln, alle
  Bild-Text-Zeilen sind 16:9.
- **Aufnahmen:**
  - `docs/screenshots/2026-11-19-teil-d/d1_hp-dct-200_nachher_desktop.jpg`
  - `docs/screenshots/2026-11-19-teil-d/d1_hp-dct-200_nachher_en_desktop.jpg`
  - Vorher-Stand: `a7_hp-dct-200_nachher_desktop.jpg` aus Teil C.

## 2. Alt-Feld der neun älteren R1-Blöcke

Vorher war `alt` bei allen neun leer, eine EN-Übersetzung gab es nicht. R1 zeigte den Alt der Datei, unter `/en/`
deshalb deutsch. Keiner der neun Blöcke hat ein eigenes Bild, das Bild kommt aus `feature_r1` des Produkts. Vor dem
Schreiben habe ich geprüft, dass alle Produkte eines Sets dieselbe R1-Datei haben. Das stimmt bei allen neun, das Feld
passt also auf jeder Seite. Wortlaut DE = Alt der Datei in Files = Register, EN = Register `alt_en.csv`.

| Block | Seiten | Datei | Alt DE | Alt EN |
|---|---|---|---|---|
| `blt-r1` | hp-blt-050, hp-blt-100-eu-1 | `BLT_R1_01` | Warmweiße HeiPard Batterie-Lichterkette, um einen runden Spiegel über einem Sideboard im Flur gelegt, am Abend. | Warm white HeiPard battery string light draped around a round mirror above a hallway sideboard in the evening. |
| `blm-r1` | hp-blm-100-eu | `BLT_R1_01` | wie `blt-r1` | wie `blt-r1` |
| `ctl-r1` | hp-ctl-210-eu-1, hp-ctl-400-eu-1 | `CTL_R1_01` | Weihnachtsbaum mit warmweißem HeiPard LED-Baummantel, durch ein Wohnzimmerfenster aus dem verschneiten Garten gesehen. | Christmas tree with warm white HeiPard LED tree curtain seen through a living room window from a snowy garden at night. |
| `ctl-m-r1` | hp-ctl-180m, hp-ctl-240m | `CTLM_R1_01` | Weihnachtsbaum mit bunter HeiPard Baum-Lichterkette im Erkerfenster, vom Vorgarten aus gesehen, bei Dämmerung. | Christmas tree with the multicolor HeiPard tree string light in a bay window, seen from the front garden at dusk. |
| `dct-r1` | hp-dct-200 | `DCT_R1_01` | HeiPard LED-Lichtervorhang an der offenen Seite eines überdachten Balkons, von innen gesehen, bei Dämmerung. | HeiPard LED curtain light across the open side of a covered balcony, seen from inside, at dusk. |
| `dfm-r1` | hp-dfm-400-eu-2, hp-dfm-600, hp-dfm-750-eu | `DFM_R1_01` | Warmweiße HeiPard Cluster-Lichterkette, dicht um das Geländer einer Außentreppe zur Haustür gewickelt, bei Dämmerung. | Warm white HeiPard cluster string light wound densely around the railing of an outdoor staircase to the front door at dusk. |
| `dgm-r1` | hp-dgm-001 | `DGM_R1_01` | Drei warmweiße HeiPard LED-Sterne auf Erdspießen zwischen Sträuchern neben einer Eingangstreppe bei Dämmerung. | Three warm white HeiPard LED stars on ground stakes between shrubs beside entrance steps at dusk. |
| `olas14-r1` | hp-ola-s14-15/-30/-50-eu | `OLAS14_R1_01` | HeiPard S14-Lichterkette entlang der Vorderkante einer Pergola über einer Kies-Sitzecke bei Dämmerung. | HeiPard S14 string light along the front edge of a pergola above a gravel seating area at dusk. |
| `sblb-r1` | hp-sblb-60l-ww-new, hp-sblb-100l-ww-new | `SBLB_R1_01` | HeiPard Solar-Lichterkette mit Kristallkugeln in einem Olivenbaum im Terrakotta-Kübel auf einer Terrasse bei Dämmerung. | HeiPard solar string light with crystal globes in an olive tree in a terracotta planter on a terrace at dusk. |

Live (13:30 bis 13:34 Uhr):
- **EN:** Alle 17 Seiten zeigen bei R1 den EN-Alt. Der Hinweis „EN-Seite mit deutschem Alt“ kommt nicht mehr vor.
- **DE:** Die 16 Seiten außer hp-dct-200 sind gegenüber der Aufnahme nach Teil C unverändert.
- **Gilt nur, solange die R1-Datei gleich bleibt:** Bekommt ein Produkt eines dieser Sets später eine andere
  R1-Datei, muss das Feld `alt` mitwandern. Das Feld überschreibt dann den Alt der Datei.

## 3. EN-Alt für `CTL_B2_02`, `DFM_B1_01`, `SBLB_B1_01`

Die Asset-Instanz hat die EN-Alts mit Auftrag 24, Teil A um 13:27:01 Uhr in Files eingetragen (Gegenlesung 13:27:06 Uhr). Ihr Register
`reports/alt_en.csv` hat drei Zeilen mehr.

| Block | Datei | EN-Alt am Block vorher | nachher |
|---|---|---|---|
| `ctl-b2` | `CTL_B2_02` | Warm white HeiPard LED tree curtain with ring on a small fir tree in front of a wooden wall. | unverändert, schon wortgleich mit Files |
| `dfm-b1` | `DFM_B1_01` | Warm white HeiPard LED cluster string light wrapped around a Christmas tree in a living room. | unverändert, schon wortgleich mit Files |
| `sblb-b1` | `SBLB_B1_01` | … above a gravel path in the garden with a solar panel. | … above a gravel path in the garden, with solar panel. (wortgleich mit Files) |

Live geprüft auf hp-ctl-210-eu-1, hp-ctl-400-eu-1, den drei DFM-Seiten und den zwei SBLB-Seiten unter `/en/`: Der
Alt stimmt jeweils mit dem Register überein.

## 4. Gegenprobe

Neu geladen: die 17 Seiten aus Abschnitt 2, DE und EN, alle mit Status 200. Verglichen habe ich mit den Aufnahmen nach
Teil C (DE 10:59 bis 11:17 Uhr, EN im selben Lauf). Prüfskript wie in Teil C: Liquid-Fehler, Zeile ohne Bild, Bild
ohne Text, Alt gegen Files-Register, Zusatzzeilen, Bildseitenwechsel, Bild doppelt.

- **Fehler:** DE 0, EN 0. Alle 17 Seiten zeigen B1, B2 und R1.
- **Unterschiede DE:** nur hp-dct-200: B2 neu, Zusatzzeile weg (10 statt vorher 11 Zeilen).
- **Unterschiede EN:** alle 17 Seiten, nur R1-Alt (DE→EN), dazu B2 auf hp-dct-200 und B1-Alt auf den zwei SBLB-Seiten.
- **Bild doppelt:** Auf hp-dct-200 nicht mehr. Es bleibt `OLAS14_B2_01` auf den drei OLAS14-Seiten (Abschnitt 4 des
  Auftrags, bleibt vorerst). VIT war nicht Teil dieses Abrufs und ist unverändert.

## 5. Solarpanel im Bild (nur gelesen)

### 5.1 B1, B2 und R1 der sechs Familien

Alle Bilder in 1200 px angesehen, unklare Stellen im Original als Ausschnitt. Es sind die Bilder, die heute auf den
Seiten stehen (Aufnahme nach Teil C). „Fuß verdeckt“ heißt: Der Stab führt nach unten aus dem Bild oder in Pflanzen,
die Spitze selbst ist nicht zu sehen.

| Familie | Bild | Zeile | Panel | Befestigung |
|---|---|---|---|---|
| SOLM | `SOLM_B1_01` | B1 | ja | Erdspieß im Beet neben der Hecke (Fuß verdeckt) |
| SOLM | `SOLM_B2_01` | B2 | ja | Erdspieß im Rasen vor dem Holzzaun, steckt sichtbar im Boden |
| SOLM | `SOLM_R1_01` | R1 | ja | Erdspieß in der Erde vor dem Hochbeet |
| SCWL | `SCWL_B1_01` | B1 | ja, zwei | je ein Erdspieß im Beet vor den Buchskugeln |
| SCWL | `SCWL_B2_01` | B2 | ja | Erdspieß im Blumenbeet neben dem Holzpfosten (Fuß verdeckt) |
| SCWL | `SCWL_R1_01` | R1 | ja | Erdspieß in der Erde des Kübels mit dem Olivenbaum |
| OLS-A60 | `OLSA60_B1_01` | B1 | ja | Erdspieß im Pflanzkasten auf der Dachterrasse |
| OLS-A60 | `OLSA60_B2_01` | B2 | nein | |
| OLS-A60 | `OLSA60_R1_01` | R1 | ja | Erdspieß im Rasen links neben der Pergola (Fuß verdeckt) |
| OLS-G40 | `OLSG40_B1_01` | B1 | ja, oben angeschnitten | am Geländer befestigt, darunter hängt ein Erdspieß frei in der Luft (Ausschnitt geprüft) |
| OLS-G40 | `OLSG40_B2_01` | B2 | ja | Erdspieß im Blumenbeet (Fuß verdeckt) |
| OLS-G40 | `OLSG40_R1_01` | R1 | ja | Erdspieß im Gemüsebeet vor dem Zaun |
| OLS-S17 | `OLSS17_B1_01` | B1 | ja | Erdspieß im Blumenbeet rechts (Fuß verdeckt) |
| OLS-S17 | `OLSS17_B2_01` | B2 | nein | |
| OLS-S17 | `OLSS17_R1_01` | R1 | ja | Halterung seitlich am Geländerpfosten, kein Erdspieß zu sehen (Ausschnitt geprüft) |
| OLS-ST38 | `OLST38_B1_01` | B1 | nein | (B1-Bild der Netz-Familie OL-ST38, hier mitbenutzt) |
| OLS-ST38 | `OLSST38_B2_01` | B2 | ja | Erdspieß mit Kragen, steht auf dem Holzdeck (unscharf, Ausschnitt geprüft) |
| OLS-ST38 | `OLSST38_R1_01` | R1 | ja | Erdspieß im Terrakotta-Topf |

### 5.2 Wortlaut `heipard.lieferumfang` und Quelle

| Familie | Produkte | `lieferumfang` (Zeilen mit „ / “ getrennt) | In der Quelle genannt, nicht übernommen |
|---|---|---|---|
| SOLM | hp-solm-12m-ww | 1 × Solar-Lichterkette / 1 × Wandhalterung / 1 × Bedienungsanleitung | „Ein Satz Lampen (vertikaler Griff)“, „Zubehör (Erdungsstecker“, „zwei Schraubbefestigungen pro Lampensatz)“ |
| SCWL | hp-scwl-10m2p-mc, hp-scwl-15m2p-mc | 1 × Solar-Lichterkette mit Kupferdraht, 2er-Set / 1 × Wandhalterung / 1 × Bedienungsanleitung | wie SOLM |
| OLS-A60 | hp-ols-a60-16-eu | 1 × Solar-Lichterkette mit A60-Glühbirnen / 1 × Fernbedienung / 1 × Solarpanel / 1 × Bedienungsanleitung | „Erdungsstecker“ |
| OLS-G40 | hp-ols-g40-16 | 1 × Solar-Lichterkette mit G40-Glühbirnen / 1 × Fernbedienung / 1 × Solarpanel / 1 × Bedienungsanleitung | „Erdungsstecker“ |
| OLS-G40 | hp-ols-g40-25, hp-ols-g40-35 | 1 × Solar-Lichterkette mit G40-Glühbirnen / 2 × Ersatzbirnen / 1 × Fernbedienung / 1 × Solarpanel / 1 × USB-Ladekabel / 1 × Bedienungsanleitung | „1* Zubehörset“ (Inhalt unbestimmt) |
| OLS-S17 | hp-ols-s17-16, hp-ols-s17-16-eu | 1 × Solar-Lichterkette mit S17-Glühbirnen / 1 × Fernbedienung / 1 × Solarpanel / 1 × Bedienungsanleitung | „Erdungsstecker“ |
| OLS-ST38 | hp-ols-st38-16 | 1 × Solar-Lichterkette mit ST38-Glühbirnen / 1 × Fernbedienung / 1 × Solarpanel / 1 × Bedienungsanleitung | nichts |

Die rechte Spalte stammt aus dem Register der Asset-Instanz (`reports/_work/lieferumfang_welle1.csv`, Status
*mehrdeutig*, „Teil nicht erkannt“). Quelle ist das Amazon-Attribut „Enthaltene Komponenten“. Bei SOLM und SCWL lautet
es zusammengesetzt: „Ein Satz Lampen (vertikaler Griff); Zubehör (Erdungsstecker, drehbare Wandhalterung, zwei
Schraubbefestigungen pro Lampensatz)“. Das Skript hat am Komma getrennt und nur die „drehbare Wandhalterung“ erkannt.
Ob „Erdungsstecker“ (und der „vertikale Griff“) den Erdspieß meint, kann ich aus den Daten nicht entscheiden. Das
klärt ihr. Ich habe nichts geändert. Zum Vergleich: SBLB („1 × Erdspieß“, „1 × Verbindungsstück für den Erdspieß“) und
OLS-S11 („1 × Erdspieß“, „1 × Wandhalterung“) nennen den Erdspieß ausdrücklich. Bei `OLSS17_R1_01` zeigt das Bild eine
Halterung am Pfosten. Eine Wandhalterung steht im Lieferumfang von OLS-S17 ebenfalls nicht.

## 6. Herkunft des Felds `lieferumfang`

- **Quelle der Werte:** Amazon-Kategorie-Angebotsbericht vom 10.02.2026. Verwendet wurden die Spalte „Enthaltene
  Komponenten“ (`included_components#1..5`) und ausdrückliche Lieferaussagen in Aufzählungspunkten und Beschreibung
  („Lieferumfang: …“, „Sie erhalten …“). Der Produkttitel zählt nur als Beleg für das Produkt selbst.
- **Aufbereitet von der Asset-Instanz:**
  - Welle 1 mit Auftrag 15: `scripts/lieferumfang.py --welle1` (Lauf vom 29.10.2026, Log
    `reports/_work/welle1_medien/lieferumfang_lauf.log`).
  - Register `reports/_work/lieferumfang_welle1.csv`, daraus `scripts/welle1_metafelder.py` → Blatt
    `reports/metafelder/welle1_metafelder.csv`.
  - Die Bezeichnung des Produkts selbst kommt je Familie aus `PRODUKTTYP` in `scripts/welle1_metafelder.py`.
  - Welle 2 (z. B. DCT, SBLB) lief mit demselben Skript (Vorgabe Leon 21.10.).
- **In den Shop geschrieben hat es diese Theme-Sitzung:** am 03.11.2026 im Welle-1-Grundausbau (Bericht
  `docs/heipard-welle1-grundausbau-bericht.md`, Abschnitt 1: „350 wurden geschrieben: `lieferumfang` 103 …“). Shopify
  zeigt für alle hier genannten Felder `createdAt` = `updatedAt` = 03.11.2026, 12:03 Uhr. Seither hat niemand sie
  geändert. Die Welle-2-Felder (z. B. SBLB) stammen vom 21.10.2026.
- **hp-dgm-048:**
  - Blattzeile 832: `hp-dgm-048;;lieferumfang;1 × LED-Gartenstecker;eindeutig;Kategorie-Angebotsbericht_10-02-2026: Text`.
    Der einzige Beleg ist der Titel („… 2 Set Geschenke Leucht Boxen“).
  - Die Bezeichnung „LED-Gartenstecker“ kommt aus `PRODUKTTYP["DGM"]`. Die passt für Stern und Spirale, nicht für die
    Geschenkboxen.
  - Im Register steht für dieses Produkt keine Komponentenliste von Amazon, nur der Titel.
- **Wo die Korrektur hingehört:**
  - Im Shop am Produkt-Metafeld `heipard.lieferumfang` von hp-dgm-048 (für mich in Teil D gesperrt).
  - Zusätzlich im Blatt der Asset-Instanz (Zeile 832, am besten auch eine eigene Bezeichnung für hp-dgm-048 statt
    `PRODUKTTYP["DGM"]`). Sonst kommt der alte Wert bei einem neuen Lauf zurück.

## 7. Offen

1. **Solar, Abschnitt 5:** „Erdungsstecker“ in der Amazon-Quelle (SOLM, SCWL, OLS-A60, OLS-G40-16, OLS-S17) und
   „Zubehörset“ (OLS-G40-25/-35). Klärt ihr, das ist keine Entscheidung für mich. Wird der Lieferumfang um den
   Erdspieß ergänzt, passen die Bilder. Bleibt er, zeigen 14 der 18 Bilder hier (und die R2/R3-Bilder) einen Erdspieß,
   den der Lieferumfang nicht nennt. Dazu kommt `OLSS17_R1_01` mit einer Halterung, die bei OLS-S17 ebenfalls fehlt.
2. **hp-dgm-048 Lieferumfang:** Leon klärt, Korrektur an den zwei Stellen aus Abschnitt 6.
3. **OLAS14 und VIT, Bild doppelt:** Das bleibt bis zum eigenen Auftrag mit dem dritten Motiv (Auftrag Teil D,
   Abschnitt 4).
4. **Blocktexte ohne EN** (geparkt, wie in Teil C): Kicker, Überschrift und Text der neun R1-Blöcke bleiben auf
   `/en/` deutsch. Teil D hat nur das Feld `alt` übersetzt.

## Schreibvorgänge

| Zeit | Was | Ergebnis |
|---|---|---|
| 13:28:10 | `dct-b2`: Bild entfernt, Überschrift, Text, Alt, Bezeichnung (`metaobjectUpdate`) | 0 Fehler |
| 13:28 | `dct-b2`: 4 EN-Felder (`translationsRegister`, Prüfsumme des DE-Texts) | 0 Fehler |
| 13:28:27 | Set `dct` ohne `dct-b2-zusatz` | 0 Fehler |
| 13:28 | `dct-b2-zusatz` gelöscht (`metaobjectDelete`, vorher keine Referenz mehr) | 0 Fehler |
| 13:28:45 bis 13:28:46 | Feld `alt` DE an neun R1-Blöcken | 0 Fehler |
| 13:29 | EN-Alt an neun R1-Blöcken und `sblb-b1` (10 × `translationsRegister`) | 0 Fehler, Gegenlesung `outdated` false |
| 13:30 bis 13:34 | Abruf 17 Seiten DE und EN, Gegenprobe | 0 Fehler |
| 13:35 | Aufnahmen hp-dct-200 Desktop DE und EN | |

## Rückweg

Vorher-Stand in `docs/data/teild-vorher.json`.

- **Abschnitt 1:**
  - `dct-b2`: Bild (`gid://shopify/MediaImage/65986411954509`), Überschrift, Text, Alt und Bezeichnung aus `vorher`
    zurückschreiben. EN-Kicker, -Überschrift und -Text entfernen, EN-Alt mit dem alten Wortlaut neu registrieren.
  - `dct-b2-zusatz` aus `vorher` neu anlegen (neue ID, mit EN) und im Set `dct` hinter `dct-b2` einsetzen.
- **Abschnitt 2:** Feld `alt` der neun Blöcke leeren (`""`) und die EN-Übersetzung `alt` entfernen.
- **Abschnitt 3:** EN-Alt von `sblb-b1` mit dem alten Wortlaut neu registrieren.
