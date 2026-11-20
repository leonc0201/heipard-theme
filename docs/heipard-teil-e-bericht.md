# Theme-Auftrag Teil E: Lieferumfang schreiben, Lichtfarbe vorbereiten

Stand 20.11.2026. Auftrag vom 19.11.2026, 15:45. Bezug: Bericht Teil D. Vorher-Stand aller geschriebenen
Felder: `docs/data/teile-vorher.json`. Zeiten in deutscher Zeit.

## Kurzfassung

- **Abschnitt 1 (Lieferumfang Solar):**
  - Tabelle der Asset-Instanz (Auftrag 25) wörtlich geschrieben, DE und EN, um 02:11 Uhr.
  - Sechs Produkte haben jetzt die Zeile „1 × Erdspieß“ bzw. „1 × Ground spike“; zwölf Seiten DE und EN nachgeladen.
  - Kein Blocktext widerspricht. Zwei Antworten im Fragen-Block (`scwl-frage-4`, `solm-frage-4`) zählen den
    Paketinhalt fest auf und nennen den Erdspieß nicht (Abschnitt 1.4, nicht geändert).
- **Abschnitt 2 (hp-dgm-048):** Wert „1 × LED-Gartenstecker“ am 20.11. um 02:07 Uhr entfernt. Der Block
  Lieferumfang fällt auf DE und EN ganz weg, keine leere Zeile, keine leere Überschrift.
- **Abschnitt 3 (Lichtfarbe, nur gelesen):** Die vier Testprodukte teilen ihr Set mit warmweißen Geschwistern, und
  B1, B2 und R1 tragen dort ein eigenes Bild am Block. Kleinster Eingriff: je Lichtfarbe ein eigenes Set mit drei
  neuen Blöcken (3.1). 32 Blöcke nennen im Alt eine Lichtfarbe, die für 41 Varianten nicht stimmt, dazu ein Blocktext
  mit falschem Lichtfarben-Angebot auf zwei Seiten (3.2). Die Feature-Sektion lädt bei Variantenwechsel schon neu,
  liest aber keine Variantenbilder (3.3).

## 1. `heipard.lieferumfang` korrigieren

### 1.1 Quelle

- **Was geschrieben wurde:** nur die Übergabe der Asset-Instanz, Auftrag 25 (Bericht `Heipard Assets/reports/auftrag_25.md`, Abschnitt
  3, Datei `reports/_work/a25_uebergabe.json`). Die Nachricht stimmt wortgleich mit der Datei überein.
- **Warum auch EN:** Alle sechs Felder hatten eine aktuelle EN-Übersetzung (05.11.). Ohne neuen EN-Wert hätte `/en/`
  weiter die alte Liste gezeigt. Deshalb habe ich um 02:05 Uhr um den EN-Wert gebeten.
- **Herkunft von „1 × Ground spike“:** So steht die Zeile schon bei hp-ols-s11-16 und hp-sblb-60l-ww-new; vor dem
  Schreiben im Shop gelesen.
- **Position und Belege:** Die neue Zeile steht direkt nach der Produktzeile. Belege laut Übergabe: Amazon-Komponente
  „Erdungsstecker“ bei allen sechs, Listing-Bilder, bei SOLM zusätzlich der Text „Das Set inkludiert Erdspieße und
  Wandhalterungen …“.

### 1.2 Vorher (gelesen 20.11., ca. 02:00 Uhr)

Nur Produkt-Metafelder, an keiner Variante gibt es ein eigenes `lieferumfang`.

| Handle | Wert DE | Wert EN |
|---|---|---|
| hp-scwl-10m2p-mc | 1 × Solar-Lichterkette mit Kupferdraht, 2er-Set / 1 × Wandhalterung / 1 × Bedienungsanleitung | 1 × Solar string light with copper wire, set of 2 / 1 × Wall mount / 1 × User manual |
| hp-scwl-15m2p-mc | wie hp-scwl-10m2p-mc | wie hp-scwl-10m2p-mc |
| hp-solm-12m-ww | 1 × Solar-Lichterkette / 1 × Wandhalterung / 1 × Bedienungsanleitung | 1 × Solar string lights / 1 × Wall mount / 1 × User manual |
| hp-ols-a60-16-eu | 1 × Solar-Lichterkette mit A60-Glühbirnen / 1 × Fernbedienung / 1 × Solarpanel / 1 × Bedienungsanleitung | 1 × Solar string light with A60 bulbs / 1 × Remote control / 1 × Solar panel / 1 × User manual |
| hp-ols-g40-16 | wie A60, mit G40-Glühbirnen | wie A60, with G40 bulbs |
| hp-ols-s17-16 | wie A60, mit S17-Glühbirnen | wie A60, with S17 bulbs |

Unverändert bleiben OLS-G40-25, OLS-G40-35, OLS-S17-16-EU und OLS-ST38 (Lieferumfang [TBD]). Bei OLS-G40-25, -35 und
OLS-S17-16-EU habe ich um 02:11 Uhr nachgelesen: Stand weiter vom 03.11. OLS-ST38 wurde nicht angefasst.

### 1.3 Nachher

| Handle | Wert DE neu | Wert EN neu | Live DE / EN (02:12 bis 02:14 Uhr) |
|---|---|---|---|
| hp-scwl-10m2p-mc | 1 × Solar-Lichterkette mit Kupferdraht, 2er-Set / **1 × Erdspieß** / 1 × Wandhalterung / 1 × Bedienungsanleitung | 1 × Solar string light with copper wire, set of 2 / **1 × Ground spike** / 1 × Wall mount / 1 × User manual | ok / ok |
| hp-scwl-15m2p-mc | wie hp-scwl-10m2p-mc | wie hp-scwl-10m2p-mc | ok / ok |
| hp-solm-12m-ww | 1 × Solar-Lichterkette / **1 × Erdspieß** / 1 × Wandhalterung / 1 × Bedienungsanleitung | 1 × Solar string lights / **1 × Ground spike** / 1 × Wall mount / 1 × User manual | ok / ok |
| hp-ols-a60-16-eu | 1 × Solar-Lichterkette mit A60-Glühbirnen / **1 × Erdspieß** / 1 × Fernbedienung / 1 × Solarpanel / 1 × Bedienungsanleitung | 1 × Solar string light with A60 bulbs / **1 × Ground spike** / 1 × Remote control / 1 × Solar panel / 1 × User manual | ok / ok |
| hp-ols-g40-16 | wie A60, mit G40-Glühbirnen | wie A60, with G40 bulbs | ok / ok |
| hp-ols-s17-16 | wie A60, mit S17-Glühbirnen | wie A60, with S17 bulbs | ok / ok |

- **Gelesen nach dem Schreiben:**
  - DE: `metafieldsSet` meldet 02:11:17 Uhr, die Metafeld-IDs sind unverändert.
  - EN: `translationsRegister` mit dem neuen Digest, 02:11:37 Uhr. Alle sechs Übersetzungen sind danach `outdated`
    false.
- **Gegenprobe:** Vergleich der Feature-Sektion vorher und nachher. Auf allen zwölf Seiten kommt genau eine Zeile
  dazu, sonst ist nichts verändert.
- **Rückweg:** `metafieldsSet` mit den Werten aus `teile-vorher.json`, danach EN mit dem dann gültigen Digest
  registrieren.

### 1.4 Blocktexte gegen die neue Angabe (nur gelesen)

Geprüft: alle Blöcke der Sets `scwl`, `solm`, `ols-a60`, `ols-g40`, `ols-s17` (Kicker, Überschrift, Text, Alt) und
die Live-Seiten DE und EN vom 20.11., 01:57 bis 02:04 Uhr. Auch die Antworten im Fragen-Block habe ich geprüft.

- **Kein Widerspruch in den Feature-Blöcken.** Kein Text sagt „nur Wand“ oder schließt einen Erdspieß aus. `scwl-b1`
  nennt sogar „Im Beet oder am Zaun“.
- **`solm-r1` unvollständig, kein Widerspruch:** Kicker „Zum Befestigen“, Text „Damit das Panel richtig steht, braucht
  es einen festen Platz. Eine Wandhalterung liegt bei.“ (EN „For mounting“, „… A wall bracket is included.“). Der
  Satz bleibt richtig, nennt den Erdspieß aber nicht.
- **Fragen-Block, passt seit dem Schreiben nicht mehr zum Lieferumfang:** Zwei Antworten zählen den Paketinhalt fest
  auf. Sie hängen nicht am Feld `lieferumfang` und ändern sich deshalb nicht mit. Live um 02:13 Uhr unverändert.
  - `scwl-frage-4` (hp-scwl-10m2p-mc und hp-scwl-15m2p-mc): „Was ist im Lieferumfang?“, Antwort „Im Paket sind 1 ×
    Solar-Lichterkette mit Kupferdraht, 2er-Set, 1 × Bedienungsanleitung und 1 × Wandhalterung.“
  - `solm-frage-4` (hp-solm-12m-ww): „Im Paket sind 1 × Solar-Lichterkette, 1 × Bedienungsanleitung und 1 ×
    Wandhalterung.“
  - Beide ohne EN-Übersetzung, auf `/en/` steht der deutsche Satz.
  - Die Fragen von OLS-A60, OLS-G40 und OLS-S17 nennen keinen Lieferumfang.
- **Nicht Blocktext, nur zur Kenntnis:** Der Pflegetext auf `/en/` sagt bei allen sechs „place or stake it where it
  gets direct light“. Das passt zum Erdspieß.

## 2. hp-dgm-048: falsche Angabe entfernt

**Vorher geprüft (Theme):** `snippets/heipard-fb-lieferumfang.liquid` zeigt den Block nur, wenn mindestens eine
Zeile Text hat (`shown > 0`). Ohne Wert entsteht im Shop kein Markup, nur im Theme-Editor ein Hinweis. Die Daten-Zone
setzt sich aus den übrigen Blöcken zusammen, eine Überschrift für den Lieferumfang bleibt nicht stehen. Gelesen wird
zuerst das Variantenmetafeld, dann das Produkt-Metafeld; hp-dgm-048 hat nur das Produkt-Metafeld.

| | vorher | nachher |
|---|---|---|
| Produkt-Metafeld `heipard.lieferumfang` | „1 × LED-Gartenstecker“ (EN „1 × LED garden stake“) | gelöscht (`metafieldsDelete`, 02:07 Uhr), gelesen danach: leer |
| Variantenmetafeld | keins | keins |
| Live DE (02:08 Uhr) | Block „Lieferumfang / Das ist im Karton / 1 × LED-Gartenstecker“ | Block fehlt, davor „Einsatzbereich Innen“, danach „Installation & Pflege“ |
| Live EN (02:08 Uhr) | Block „In the box / What you get / 1 × LED garden stake“ | Block fehlt, davor „Use Inside“, danach „Installation & care“ |

Sonst hat sich in der Feature-Sektion nichts verändert (Textvergleich vorher/nachher, DE und EN). Die Fragen an
hp-dgm-048 nennen keinen Lieferumfang. Das Feld bleibt leer, bis Leon den echten Lieferumfang nennt. Die Liste der
Asset-Instanz (Zeile 832, `PRODUKTTYP["DGM"]`) enthält den alten Wert weiter. Ein neuer Lauf ihres Skripts würde ihn
zurückschreiben.

Rückweg: `metafieldsSet` mit `ownerId` des Produkts, `heipard`/`lieferumfang`, Typ `multi_line_text_field`, Wert aus
`teile-vorher.json`, danach die EN-Übersetzung neu registrieren.

## 3. Lichtfarbe: Bestandsaufnahme (nur gelesen)

Grundlage: Shop-Lesung der Sets und Blöcke mit EN-Übersetzungen (20.11., ca. 01:40 bis 02:05 Uhr) und die Live-Seiten
DE und EN der 20 Produkte (01:57 bis 02:04 Uhr). Das sind die 19 aus der Liste der Asset-Instanz (Auftrag 24,
Abschnitt 3.2), dazu hp-csl-300-c als eines der vier Testprodukte.

### 3.1 Die vier Produkte

| Produkt | Lichtfarbe laut Daten | Set | teilt das Set mit | B1, B2, R1 mit eigenem Bild am Block | R2, R3 |
|---|---|---|---|---|---|
| hp-csl-200-c | kaltweiß | `csl` | hp-csl-200-w, hp-csl-300-w (warmweiß), hp-csl-300-c | ja, alle drei (`csl-b1`, `csl-b2`, `csl-r1`) | aus `feature_r2`, `feature_r3` |
| hp-csl-300-c | keine Angabe, Titel „Weiß“ (Abschnitt 4, offen) | `csl` | wie oben | ja, alle drei | aus den Metafeldern |
| hp-olg-200m | mehrfarbig | `olg` | hp-olg-100, -200, -300-eu, -400, -600, -800 (warmweiß), hp-olg-200w | ja, alle drei (`olg-b1`, `olg-b2`, `olg-r1`) | aus den Metafeldern |
| hp-olg-200w | kaltweiß | `olg` | wie oben, dazu hp-olg-200m | ja, alle drei | aus den Metafeldern |

- **Folge:** Ein anderes Bild in `feature_b1`, `feature_b2` oder `feature_r1` dieser vier Produkte würde nicht
  erscheinen, weil das Bild am Block Vorrang hat. Nur `feature_r2` und `feature_r3` würden sofort greifen.
- **Alt-Texte:** Alle sechs Blöcke (`csl-b1/b2/r1`, `olg-b1/b2/r1`) haben ein eigenes Alt mit „warmweiß“, DE und EN,
  und gelten für alle Geschwister.
- **R2 und R3:** Die Blöcke von R2 und R3 haben ein Alt ohne Lichtfarbe. Zeigt die neue Szene dasselbe Motiv in
  anderer Lichtfarbe, passt es weiter.

**Kleinster Eingriff, damit die vier Seiten andere Bilder und Alts zeigen als die warmweißen Geschwister:**

1. **Neue Sets:** je Lichtfarbe ein eigenes Set als Kopie des bisherigen, also `csl` kaltweiß (hp-csl-200-c, dazu
   hp-csl-300-c, wenn Leon kaltweiß bestätigt), `olg` kaltweiß (hp-olg-200w) und `olg` mehrfarbig (hp-olg-200m). Drei
   Sets, weil bunt und kaltweiß verschiedene Alts brauchen.
2. **Neue Blöcke:** In jedem neuen Set werden nur B1, B2 und R1 durch drei neue Blöcke ersetzt. Die Texte werden
   übernommen (DE und EN), das neue Alt kommt in DE und EN dazu. Am besten **ohne** Bild am Block, dann kommt das Bild
   aus `feature_b1`, `feature_b2` und `feature_r1`, und ein späterer Tausch ist nur noch ein Metafeld. R2, R3 und
   alle anderen Blöcke bleiben gemeinsam. Zusammen sind das 3 Sets und 9 Blöcke.
3. **Pro Produkt:** `feature_set` auf das neue Set setzen und `feature_b1` bis `feature_r3` auf die neuen Dateien.
   Das sind Metafelder `feature_*`, also erst mit eigenem Auftrag.

Die warmweißen Geschwister bleiben dabei unberührt, und das Theme ändert sich nicht. Einen Weg nur über Metafelder
gibt es nicht. Das Bild am geteilten Block überdeckt das Metafeld, und das Alt am Block wirkt bei allen Produkten des
Sets. Ein Alt nur aus der Datei würde auf `/en/` deutsch bleiben.

### 3.2 Texte mit Lichtfarbe, alle 20 Seiten

Alle Fundstellen sind Alt-Texte, mit einer Ausnahme (`dfm-b2`, Ende der Liste). Kicker, Überschriften und Blocktexte
nennen sonst keine Lichtfarbe als Tatsache des Bildes. Wo ein Text die angebotenen Lichtfarben aufzählt, ist das am
Schluss geprüft. R2 und R3 nennen in keinem Alt und keinem Text eine Lichtfarbe, DE und EN. Jede Fundstelle steht auf
den DE-Seiten und, als EN-Übersetzung, auf den `/en/`-Seiten derselben Produkte. Die Bilder zeigen warmweißes Licht,
das Alt beschreibt also das Bild richtig. Es ist falsch für jede Variante mit anderer Lichtfarbe und muss mit einem
neuen Bild mit.

| Block (Bild) | Alt DE | Alt EN | Seiten | falsch für Varianten |
|---|---|---|---|---|
| `csl-b1` (Bild am Block `CSL_B1_01`) | LED-Lichtervorhang von HeiPard mit warmweißen senkrechten Strängen hinter einer Gardine vor einem Wohnzimmerfenster am Abend. | HeiPard LED curtain light with warm white vertical strands behind a sheer curtain in a living room window at night. | hp-csl-200-c, hp-csl-300-c (und die warmweißen hp-csl-200-w, -300-w) | HP-CSL-200-C; HP-CSL-300-C, falls kaltweiß |
| `csl-b2` (`CSL_B2_01`, Block) | Nahaufnahme der warmweißen senkrechten Stränge des HeiPard LED-Lichtervorhangs vor einer dunklen Wand. | Close-up of the warm white vertical strands of the HeiPard LED curtain light against a dark wall. | wie `csl-b1` | wie `csl-b1` |
| `csl-r1` (`CSL_R1_01`, Block) | Warmweißer LED-Lichtervorhang von HeiPard, der als leuchtende Wand hinter einem Bett in einem Schlafzimmer am Abend hängt. | Warm white HeiPard LED curtain light hanging as a glowing wall behind a bed in a bedroom at night. | wie `csl-b1` | wie `csl-b1` |
| `ctl-b1` (`CTL_B1_01`, Metafeld) | Weihnachtsbaum im Wohnzimmer am Abend mit dem warmweißen HeiPard LED-Baummantel, dessen Stränge von der Spitze herabfallen. | Christmas tree in a living room at night lit by the warm white HeiPard LED tree curtain with strands falling from the top. | hp-ctl-210-eu-1, hp-ctl-400-eu-1 | HP-CTL-210M-EU-1, HP-CTL-400M-EU-1 |
| `ctl-b2` (`CTL_B2_02`, Metafeld) | LED-Baummantel mit Ring von HeiPard, an einer kleinen Tanne vor einer Holzwand, warmweißes Licht | Warm white HeiPard LED tree curtain with ring on a small fir tree in front of a wooden wall. | wie `ctl-b1` | wie `ctl-b1` |
| `ctl-r1` (`CTL_R1_01`, Metafeld) | Weihnachtsbaum mit warmweißem HeiPard LED-Baummantel, durch ein Wohnzimmerfenster aus dem verschneiten Garten gesehen. | Christmas tree with warm white HeiPard LED tree curtain seen through a living room window from a snowy garden at night. | wie `ctl-b1` | wie `ctl-b1` |
| `dct-b1` (`DCT_B1_02`, Metafeld) | HeiPard LED-Lichtervorhang als Lichtwand an einer Pergola über einer Gartenterrasse bei Dämmerung, warmweiß. | HeiPard LED curtain light as a wall of light on a pergola above a garden terrace at dusk, warm white. | hp-dct-200 | HP-DCT-200W, HP-DCT-300W, HP-DCT-200M, HP-DCT-300M |
| `dct-sticky` (`DCT_B2_08`, Block) | LED-Lichtervorhang von HeiPard, Pergola im Regen mit Laternen und Bäumchen, warmweißes Licht | Warm white HeiPard LED curtain light on a pergola in the rain with lanterns and small trees. | hp-dct-200 | wie `dct-b1` |
| `dfm-b1` (`DFM_B1_01`, Metafeld) | LED-Cluster-Lichterkette von HeiPard, um einen Weihnachtsbaum im Wohnzimmer gewickelt, warmweißes Licht | Warm white HeiPard LED cluster string light wrapped around a Christmas tree in a living room. | hp-dfm-400-eu-2, hp-dfm-600, hp-dfm-750-eu | HP-DFM-400W, -010W, -400M, -010M; HP-DFM-600M, -012M; HP-DFM-750M, -015M |
| `dfm-b2` (`DFM_B2_01`, Metafeld) | LED-Cluster-Lichterkette von HeiPard, als Girlande über dem Kaminsims mit brennendem Feuer, warmweißes Licht | Warm white HeiPard LED cluster string light as a garland above a mantelpiece with a burning fire. | wie `dfm-b1` | wie `dfm-b1` |
| `dfm-r1` (`DFM_R1_01`, Metafeld) | Warmweiße HeiPard Cluster-Lichterkette, dicht um das Geländer einer Außentreppe zur Haustür gewickelt, bei Dämmerung. | Warm white HeiPard cluster string light wound densely around the railing of an outdoor staircase to the front door at dusk. | wie `dfm-b1` | wie `dfm-b1` |
| `dnm-b1` (`DNM_B1_01`, Block) | HeiPard LED-Lichternetz mit warmweißen Lichtpunkten über einer Gartenhecke bei Dämmerung. | HeiPard LED net light with warm white light points over a garden hedge at dusk. | hp-dnm-208 | HP-DNM-208M |
| `dnm-b2` (`DNM_B2_01`, Block) | Nahaufnahme des warmweißen Rautenmaschen-LED-Lichternetzes von HeiPard auf einem Buchsbaum. | Close-up of the warm white diamond mesh of the HeiPard LED net light on a boxwood shrub. | hp-dnm-208 | HP-DNM-208M |
| `dnm-r1` (`DNM_R1_01`, Block) | Warmweißes HeiPard LED-Lichternetz hängt als Lichtwand an einem dunklen Holzzaun hinter einer Sitzecke bei Dämmerung. | Warm white HeiPard LED net light hanging as a wall of light on a dark wooden fence behind a seating corner at dusk. | hp-dnm-208 | HP-DNM-208M |
| `dpm-b1` (`DPM_B1_01`, Block) | Lange warmweiße LED-Lichterkette entlang Dachkante, Fensterrahmen und Garagenbogen eines Hauses im Schnee bei Dämmerung. | A long warm white LED string light runs along the roof edge, window frames and garage arch of a house in the snow at dusk. | hp-dpm-300 | HP-DPM-300M, HP-DPM-600M |
| `dpm-b2` (`DPM_B2_01`, Block) | Nahaufnahme einer warmweißen LED-Lichterkette auf einer transparenten Kabelspule am Fensterrahmen. | Close-up of a warm white LED string light on a transparent cable reel at a window frame. | hp-dpm-300 | wie `dpm-b1` |
| `dpm-r1` (`DPM_R1_01`, Block) | Eine lange warmweiße LED-Lichterkette ist dicht um den Stamm und die Äste eines kahlen Gartenbaums gewickelt. | A long warm white LED string light is wrapped densely around the trunk and branches of a bare garden tree. | hp-dpm-300 | wie `dpm-b1` |
| `isl-b1` (`ISL_B1_01`, Block) | Warmweiße HeiPard Eisregen-Lichterkette an Dachkante und Hauseingang eines schneebedeckten Hauses bei Dämmerung. | HeiPard icicle string light in warm white along the eaves and porch of a snow-covered house at dusk. | hp-isl-264, hp-isl-360-eu, hp-isl-486 | HP-ISL-108W, -264W, -108M, -264M; HP-ISL-360W, -586W, -008W, -360M, -586M, -008M; HP-ISL-486W, -648W, -486M, -648M |
| `isl-b2` (`ISL_B2_01`, Block) | Nahaufnahme der warmweißen Hängestränge der HeiPard Eisregen-Lichterkette an einem Balkongeländer. | Close-up of the warm white hanging strands of the HeiPard icicle light on a balcony railing. | wie `isl-b1` | wie `isl-b1` |
| `isl-r1` (`ISL_R1_01`, Block) | Warmweiße HeiPard Eisregen-Lichterkette an der Dachkante einer kleinen Gartenhütte im Schnee bei Dämmerung. | Warm white HeiPard icicle string light along the roof edge of a small wooden garden cabin in the snow at dusk. | wie `isl-b1` | wie `isl-b1` |
| `npt-r1` (`NPT_R1_01`, Metafeld) | HeiPard LED-Lichternetz über einer niedrigen Gartenmauer neben einem Gartentor bei Dämmerung, warmweiß. | HeiPard LED net light draped over a low garden wall beside a garden gate at dusk, warm white. | hp-npt-210 | HP-NPT-210W (Weiß), HP-NPT-210M |
| `npt-sticky` (`NPT_B2_06`, Block) | LED-Lichternetz von HeiPard, über einem Busch im Garten, warmweißes Licht | Warm white HeiPard LED net light over a bush in the garden. | hp-npt-210 | wie `npt-r1` |
| `olg-b1` (`OLG_B1_01`, Block) | LED-Lichterkette von HeiPard mit warmweißen Lichtpunkten in Bögen über einem verschneiten Gartenzaun bei Dämmerung. | HeiPard LED string light with warm white light points in swags along a snowy garden fence at dusk. | hp-olg-200m, hp-olg-200w (und sechs warmweiße OLG) | HP-OLG-200M, HP-OLG-200W |
| `olg-b2` (`OLG_B2_01`, Block) | Nahaufnahme einer warmweißen HeiPard-LED-Lichterkette, die sich spiralförmig um ein hölzernes Geländer bei Dämmerung windet. | Close-up of a warm white HeiPard LED string light wrapped in a spiral around a wooden railing at dusk. | wie `olg-b1` | wie `olg-b1` |
| `olg-r1` (`OLG_R1_01`, Block) | Warmweiße LED-Lichterkette in Bögen am Geländer eines Stadtbalkons bei Dämmerung mit Skyline im Hintergrund. | Warm white LED string light in swags along the railing of a city balcony at dusk with the skyline behind. | wie `olg-b1` | wie `olg-b1` |
| `scwl-b2` (`SCWL_B2_01`, Block) | Nahaufnahme einer warmweißen HeiPard Solar-Lichterkette auf Kupferdraht um einen Terrassenpfosten, Solarpanel unscharf. | Close-up of a warm white HeiPard solar string light on copper wire around a terrace post, solar panel blurred behind. | hp-scwl-10m2p-mc, hp-scwl-15m2p-mc | HP-SCWL-10M2P-MC, HP-SCWL-15M2P-MC |
| `scwl-r1` (`SCWL_R1_01`, Block) | Warmweiße HeiPard Solar-Lichterkette auf Kupferdraht um ein Olivenbäumchen im Topf auf dem Balkon, Solarpanel im Topf. | Warm white HeiPard solar string light on copper wire around a small potted olive tree on a balcony, solar panel in the pot. | wie `scwl-b2` | wie `scwl-b2` |
| `uct-b1` (`UCT_B1_01`, Block) | HeiPard LED-Lichtervorhang mit warmweißen senkrechten Strängen an der Wand eines überdachten Balkons bei Dämmerung. | HeiPard LED curtain light with warm white vertical strands on the wall of a covered balcony at dusk. | hp-uct-200-eu | HP-UCC-200W, HP-UCT-200W |
| `uct-b2` (`UCT_B2_01`, Block) | Nahaufnahme der warmweißen senkrechten Stränge des HeiPard LED-Lichtervorhangs vor einer Holzwand. | Close-up of the warm white vertical strands of the HeiPard LED curtain light in front of a wooden wall. | hp-uct-200-eu | wie `uct-b1` |
| `uct-r1` (`UCT_R1_01`, Block) | Warmweißer LED-Lichtervorhang von HeiPard, der in einer Pergola hinter einem gedeckten Gartentisch bei Dämmerung hängt. | Warm white HeiPard LED curtain light hanging in a pergola behind a set garden table at dusk. | hp-uct-200-eu | wie `uct-b1` |
| `vit-b1` (`VIT_B1_02`, Metafeld) | HeiPard Eisregen-Lichterkette entlang der ganzen Dachkante eines Einfamilienhauses bei Dämmerung, warmweiß. | HeiPard icicle string light along the whole roof edge of a family house at dusk, warm white. | hp-vit-864l-eu-1 | offen (Abschnitt 4: Multicolor laut Metafeld, „umschaltbar“ laut Titel) |
| `vit-sticky` (`VIT_B2_06`, Block) | Nahaufnahme einer warmweißen Eiszapfen-Lichterkette von HeiPard an einer verschneiten Dachkante bei Dämmerung. | Close-up of the warm white HeiPard icicle string light on a snowy roof edge at dusk. | hp-vit-864l-eu-1 | offen, wie `vit-b1` |

Zusammen 32 Blöcke mit „warmweiß“ im Alt, je DE und EN. Die 41 Varianten aus der Liste der Asset-Instanz sind alle
abgedeckt, dazu HP-CSL-300-C.

**Blocktext mit falscher Lichtfarben-Angabe (unabhängig vom Bild):**

- `dfm-b2`, steht auf hp-dfm-400-eu-2, hp-dfm-600 und hp-dfm-750-eu:
  - Kicker „Drei Lichtfarben“
  - Überschrift „Warm, klar oder bunt, je nach Anlass“
  - Text „Zu Weihnachten passt warmes Licht, zur Party darf es bunt sein. Die Kette gibt es in Warmweiß, Kaltweiß und
    Multicolor, nach IP44 auch für draußen.“
- Ohne EN-Übersetzung, auf `/en/` steht der deutsche Text.
- Falsch auf **hp-dfm-600** und **hp-dfm-750-eu**: Beide gibt es nur in Warmweiß und Multicolor, kein Kaltweiß.
- Richtig auf hp-dfm-400-eu-2.

**Weitere Lichtfarben-Texte, geprüft und richtig:**

- **`ctl-farbwechsel`:** „… in Warmweiß und in Multicolor. Beide Lichtfarben gibt es für die Kette mit 210 und mit 400
  LEDs.“
- **`isl-r1`:** „Drei Lichtfarben“, „Warm, kühl oder bunt“, „… zwischen Warmweiß, Kaltweiß und Multicolor …“. Das
  stimmt für alle drei ISL.
- **`npt-b2`:**
  - Text: „Drei Lichtfarben“, „Warm für gemütlich, bunt für die Feier“, „… in Warmweiß, Weiß und Multicolor.“
  - Bild am Block `NPT_B2_01`, Alt „… mehrfarbiges Licht“, EN „Multicolor HeiPard LED net light …“.
  - Das Bild zeigt bewusst die bunte Fassung, der Text sagt das.
- **`uct-b2`:** „Zwei Lichtfarben“, „Warmes oder kühles Licht nach Geschmack“, „… warmweiß mit 2700 Kelvin oder kaltweiß
  mit 5000 Kelvin.“
- **`vit-b2`:** Bild am Block `VIT_B2_01`, Alt „… warmweißes und mehrfarbiges Licht“.
- **hp-dct-200:** Auf der Seite steht außerdem die Zeile „Warmweiß, Kaltweiß oder Multicolor, jeweils in beiden Größen.“

**Hinweis für die Ableitungen der Asset-Instanz:**

- **Welches Bild greift:**
  - Bei CSL, OLG, UCT, SCWL, DNM, ISL und DPM zeigen B1, B2 und R1 das Bild am Block, nicht das Metafeld.
  - Bei NPT und VIT gilt das für B2.
  - `NPT_B2_08` erscheint auf der Seite in der Zusatzzeile `npt-b2-zusatz`, ebenfalls als Bild am Block.
  - `VIT_B2_06` erscheint im Block `vit-sticky`.
- **Wo ein neues Metafeld sofort greift:**
  - CTL, DCT, DFM: B1, B2 und R1
  - NPT, VIT: B1 und R1
  - alle 20: R2 und R3
- **Nicht in der Liste der Asset-Instanz:** `DCT_B2_08` und `NPT_B2_06` hängen an Sticky-Blöcken und zeigen
  ebenfalls warmweiß. Sie fehlen dort, weil die Liste nur `feature_*` erfasst.

### 3.3 Technik für später

Nein. Bei jedem Variantenwechsel wird die Feature-Sektion schon neu geladen, mit `?variant=` über die Section Rendering
API (`assets/heipard-variant.js`, derselbe Weg, auf dem der Lieferumfang je Variante wechselt). Bilder liest sie aber
nur aus den Produkt-Metafeldern `feature_b1` bis `feature_r3` und aus den Blöcken, Alt-Texte nur aus dem Blockfeld
`alt`. Dafür wären drei Dinge nötig:

- Variantenmetafelder für die fünf Bilder (Dateireferenz, heute gibt es an der Variante nur `galerie_medien`,
  `lieferumfang` und Spezwerte) mit einem übersetzbaren Alt je Variante.
- In `snippets/heipard-feature-dispatch.liquid` die Reihenfolge „Variante vor Produkt vor Block“.
- Die Blöcke mit eigenem Bild (Liste in 3.2) geben ihr Bild an die Metafelder ab.

## Schreibvorgänge

| Zeit | Objekt | Änderung |
|---|---|---|
| 20.11., 02:07 | hp-dgm-048, Produkt-Metafeld `heipard.lieferumfang` | gelöscht (vorher „1 × LED-Gartenstecker“, EN „1 × LED garden stake“) |
| 20.11., 02:11:17 | sechs Produkt-Metafelder `heipard.lieferumfang` (Abschnitt 1.3) | DE neu nach Auftrag 25 |
| 20.11., 02:11:37 | dieselben sechs Metafelder, Übersetzung `en` | EN neu nach Auftrag 25 |

Sonst nichts geschrieben. Preise, Status, Bestand, Produktmedien, Files, `feature_*` und die Showroom-Logik habe ich
nicht angefasst. Vor jedem Schreiben gab `get-shop-info` HeiPard zurück. Die Uhrzeiten sind an die Asset-Instanz
gemeldet.

## Commits

- (folgt beim Commit)

## Offen

1. Für Leon, nur Hinweis zu Auftrag 25: Bei den SCWL-2er-Sets steht „1 × Erdspieß“, die Menge ist [prüfen], die
   Quelle nennt keine Zahl.
2. Für Leon:
   - Die Fragen `scwl-frage-4` und `solm-frage-4` zählen den Paketinhalt ohne Erdspieß auf.
   - `dfm-b2` nennt auf hp-dfm-600 und hp-dfm-750-eu Kaltweiß.
   - Beides habe ich nicht geändert.
3. hp-dgm-048: Das Feld bleibt leer, bis Leon den Lieferumfang nennt. In der Übergabe der Asset-Instanz steht es als
   [TBD] mit leerem Wert.
4. Befund der Asset-Instanz, nur zur Info: hp-sblb-100l-ww-new übersetzt „1 × Erdspieß“ mit „1 × Ground stake“, SBLB-60
   und OLS-S11 mit „Ground spike“. Ob das einheitlich werden soll, entscheidet Leon.
