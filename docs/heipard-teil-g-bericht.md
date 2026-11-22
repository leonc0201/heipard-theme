# Theme-Auftrag Teil G: dfm-750, Platzhalter Lieferumfang, kleine Sprachkorrekturen

Stand 22.11.2026. Auftrag vom 20.11.2026, 23:15. Bezug: Bericht Teil F. Vorher-Stand aller geschriebenen Objekte:
`docs/data/teilg-vorher.json`. Titelliste: `docs/data/teilg-titel.csv`. Zeiten in deutscher Zeit.

Begonnen am 20.11. um 23:15 Uhr, nach einem Abbruch am 22.11. um 14:32 Uhr fortgesetzt. Vor dem ersten Schreiben am
22.11. habe ich geprüft, ob sich seit Freitag etwas geändert hat: An Produkten und Fragen nichts. Die 62 Seiten habe
ich neu gesichert; sie gleichen denen vom Freitag.

## Kurzfassung

- **Abschnitt 1:** hp-dfm-750-eu zeigt seit 14:37 Uhr „Zwei Lichtfarben“ aus dem neuen Set `dfm-750`. Auf den Seiten
  DE und EN hat sich nur dieser Block geändert, die Kennzahl steht an ihrer Stelle.
- **Abschnitt 2:**
  - Der Platzhalter `{lieferumfang}` ist seit 14:41 Uhr live.
  - Die 17 Antworten lesen seit 14:44 Uhr das Feld, DE und EN.
  - Auf allen 44 Seiten gibt die Antwort genau den Lieferumfang-Block derselben Seite wieder, am Desktop und mobil.
  - Leeres Feld und Variantenwechsel sind in einer Vorschau-Kopie geprüft: Die Frage entfällt bzw. wechselt mit der
    Variante.
- **Abschnitt 3:**
  - „ground stake“ in den beiden SBLB-Beschreibungen, „1 × Remote control“ bei hp-dgm-002.
  - Zwölf britische Schreibweisen in der Sprachdatei auf US umgestellt, darunter die fünf „Light colour“.
  - Im Shop-Inhalt stehen noch vier britische Schreibweisen, nur aufgelistet (3.4).
- **Abschnitt 4:** Liste der 118 Titel. 20 folgen dem neuen Muster, 82 sind im Amazon-Stil, 3 englisch, 13 Rest.
- **Abschnitt 5:** wartet auf die Meldung der Asset-Instanz (Nachtrag folgt).

## 1. hp-dfm-750-eu: eigenes Set

| Schritt | Zeit | Objekt |
|---|---|---|
| Set `dfm-750` angelegt („DFM (750)“), Kopie von `dfm` mit `dfm-b2-zwei` an Position 2 statt `dfm-b2`, Sektionsüberschrift wie `dfm` | 20.11., 23:19:50 | `gid://shopify/Metaobject/503017636173` |
| `heipard.feature_set` an hp-dfm-750-eu von `dfm` auf `dfm-750` | 22.11., 14:37:10 | Metafeld `64299518427469` |

- **Geprüft** um 14:37 Uhr und noch einmal von 14:44 bis 14:53 Uhr: DE und EN, ohne Variante und mit HP-DFM-750M,
  Hauptinhalt der Seite, Zeile für Zeile gegen vorher, Bilder mit Alt.
- **Ergebnis:** Auf allen vier Seiten haben sich genau drei Zeilen geändert, alle im Lichtfarben-Block an seiner
  bisherigen Stelle:

| | vorher | nachher |
|---|---|---|
| DE | „Drei Lichtfarben“ / „Warm, klar oder bunt, je nach Anlass“ / „… in Warmweiß, Kaltweiß und Multicolor …“ | „Zwei Lichtfarben“ / „Warm oder bunt, je nach Anlass“ / „… in Warmweiß und Multicolor …“ |
| EN | „Three light colors“ / „Warm, cool, or colorful, to suit the occasion“ / „… warm white, cool white, and multicolor …“ | „Two light colors“ / „Warm or colorful, to suit the occasion“ / „… warm white and multicolor …“ |

- **Unverändert:** Bild und Alt des Blocks, die Kennzahl und alle anderen Zeilen.
- **Gegenprobe:** hp-dfm-400-eu-2 (behält `dfm`) ist DE und EN unverändert.
- **Rückweg:** `feature_set` wieder auf `gid://shopify/Metaobject/439974854989` (`dfm`); danach kann das Set
  `dfm-750` gelöscht werden.

## 2. Antworten lesen den Lieferumfang aus dem Feld

### 2.1 Code

Commit `0ccb2c4`, in `snippets/heipard-fb-fragen.liquid` und zwei neue Sprachschlüssel in `de.json` und
`en.default.json`:

- Die Teile kommen aus `heipard.lieferumfang`, erst an der gewählten Variante, dann am Produkt, wie im
  Lieferumfang-Block.
- **Verbunden** mit Komma und „und“ bzw. „and“, über die Schlüssel `heipard.blocks.fragen.liste_zwei_html` und
  `liste_mehr_html`:
  - DE: „A und B“ bzw. „A, B und C“.
  - EN: „A and B“ bzw. „A, B, and C“, mit Komma vor „and“ wie in Teil F und in deinem Text zu `dfm-b2`.
- **Zeilen ohne Häkchen** zählen nicht mit („nicht enthalten“, „ohne …“, z. B. „3 x AA-Batterien nicht enthalten“ an
  HP-BLT-050), sonst stünde im Satz „Im Paket sind … und 3 x AA-Batterien nicht enthalten“.
- **Leeres Feld:** Die Frage entfällt. Bleibt keine Frage übrig, entfällt der ganze Block.
- **Antworten ohne Platzhalter** bleiben unverändert.
- **Lokal getestet** mit LiquidJS: 17 Fälle, alle in Ordnung (ein bis vier Teile, leeres Feld, nur Leerzeilen,
  Zeilen ohne Häkchen, Sonderzeichen, Vorrang der Variante, EN).
- **`shopify theme check`:** keine Meldung in den geänderten Dateien. Die bekannten Meldungen in anderen Dateien
  bleiben: ein Fehler in `heipard-wordmark.liquid`, 14 Warnungen.
- **Live** seit 14:41:56 Uhr, Prüfsummen der drei Dateien gleich Git.
- **Gegenprobe vor dem Umstellen der Antworten:** Mit den alten Texten hat sich auf den deutschen Seiten nichts
  geändert, geprüft um 14:43 Uhr.

### 2.2 Antworten umgestellt

- **DE:** Die 17 Antworten lauten „Im Paket sind {lieferumfang}.“, geschrieben um 14:44:03 bis 14:44:05 Uhr. Die Frage
  „Was ist im Lieferumfang?“ bleibt.
- **EN:** Frage „What's in the box?“, Antwort „The box contains {lieferumfang}.“, geschrieben um 14:44:23 bis
  14:44:24 Uhr.
  - Neu an 15 Fragen.
  - Bei `scwl-frage-4` und `solm-frage-4` hat die Antwort die von Hand geschriebene aus Teil F ersetzt. Der angezeigte
    Text ist Zeichen für Zeichen derselbe.
- **`ol-g40-frage-4`** bleibt als Text, wie beauftragt.

### 2.3 Vorher und nachher je Antwort

Vorher hatte keine dieser Antworten außer SCWL und SOLM eine englische Fassung, `/en/` zeigte die deutsche. Nachher
steht der Text, den die Seite jetzt zeigt (Desktop 14:44 bis 14:53 Uhr, mobil 14:53 bis 14:59 Uhr).

| Frage | Produkte | vorher DE | nachher DE | nachher EN |
|---|---|---|---|---|
| `ctl-w1-frage-4` | hp-ctl-180, -240, -300-eu, -360-eu | „Im Paket sind 1 × LED-Lichterkette für den Weihnachtsbaum (Baummantel), 1 × Bedienungsanleitung und 1 × Fernbedienung.“ | „… (Baummantel), 1 × Fernbedienung und 1 × Bedienungsanleitung.“ | „The box contains 1 × LED string lights for the Christmas tree (tree sleeve), 1 × remote control, and 1 × user manual.“ |
| `cl-frage-3` | hp-cl-1-eu, hp-cl-2-eu | „… 1 × Bedienungsanleitung und 1 × USB-Ladekabel.“ | „Im Paket sind 1 × Campinglaterne mit aufrollbarer LED-Lichterkette, 1 × USB-Ladekabel und 1 × Bedienungsanleitung.“ | „The box contains 1 × Camping lantern with rollable LED string lights, 1 × USB charging cable, and 1 × User manual.“ |
| `scwl-frage-4` | hp-scwl-10m2p-mc, -15m2p-mc | wie nachher | „Im Paket sind 1 × Solar-Lichterkette mit Kupferdraht, 2er-Set, 1 × Erdspieß, 1 × Wandhalterung und 1 × Bedienungsanleitung.“ (gleich) | „The box contains 1 × Solar string light with copper wire, set of 2, 1 × Ground stake, 1 × Wall mount, and 1 × User manual.“ (gleich) |
| `wbf-frage-1` | hp-wbf-180, hp-wbf-210 | wie nachher | „Im Paket sind 1 × LED-Lichterbaum Birke und 1 × Bedienungsanleitung.“ (gleich) | „The box contains 1 × LED Light Tree Birch and 1 × User Manual.“ |
| `wwf-frage-4` | hp-wwf-180 | wie nachher | wie `wbf-frage-1` (gleich) | wie `wbf-frage-1` |
| `fsf-frage-1` | hp-fsf-120 | wie nachher | „Im Paket sind 1 × LED-Motivleuchte Schneemann und 1 × Fernbedienung.“ (gleich) | „The box contains 1 × LED snowman picture lamp and 1 × remote control.“ |
| `ols-st38-frage-4` | hp-ols-st38-16 | „… 1 × Bedienungsanleitung, 1 × Fernbedienung und 1 × Solarpanel.“ | „Im Paket sind 1 × Solar-Lichterkette mit ST38-Glühbirnen, 1 × Fernbedienung, 1 × Solarpanel und 1 × Bedienungsanleitung.“ | „The box contains 1 × Solar string light with ST38 bulbs, 1 × Remote control, 1 × Solar panel, and 1 × User manual.“ |
| `rct-frage-4` | hp-rct-400 | wie nachher | „Im Paket sind 1 × Smarter RGB-Lichtervorhang mit App und 1 × Fernbedienung.“ (gleich) | „The box contains 1 × Smart RGB Light Curtain with App and 1 × Remote Control.“ |
| `rfm-frage-4` | hp-rfm-600 | „… mit App, 1 × Bedienungsanleitung und 1 × Fernbedienung.“ | „Im Paket sind 1 × Smarte RGB-Cluster-Lichterkette mit App, 1 × Fernbedienung und 1 × Bedienungsanleitung.“ | „The box contains 1 × Smart RGB Cluster String Lights with App, 1 × Remote Control, and 1 × User Manual.“ |
| `rnm-frage-4` | hp-rnm-200 | „… mit App, 1 × Bedienungsanleitung und 1 × Fernbedienung.“ | „Im Paket sind 1 × Smartes RGB-Lichternetz mit App, 1 × Fernbedienung und 1 × Bedienungsanleitung.“ | „The box contains 1 × Smart RGB Light Net with App, 1 × Remote Control, and 1 × User Manual.“ |
| `rsp-frage-4` | hp-rsp-180 | „… Lichterkegel, 1 × Bedienungsanleitung und 1 × Fernbedienung.“ | „Im Paket sind 1 × Smarter RGB-Lichterkegel, 1 × Fernbedienung und 1 × Bedienungsanleitung.“ | „The box contains 1 × Smart RGB Light Cone, 1 × Remote Control, and 1 × User Manual.“ |
| `rtm-frage-4` | hp-rtm-400 | „… mit Ring, 1 × Bedienungsanleitung und 1 × Fernbedienung.“ | „Im Paket sind 1 × Smarte RGB-Lichterkette für den Weihnachtsbaum mit Ring, 1 × Fernbedienung und 1 × Bedienungsanleitung.“ | „The box contains 1 × Smart RGB Christmas Tree Light String with Ring, 1 × Remote Control, and 1 × User Manual.“ |
| `solm-frage-4` | hp-solm-12m-ww | wie nachher | „Im Paket sind 1 × Solar-Lichterkette, 1 × Erdspieß, 1 × Wandhalterung und 1 × Bedienungsanleitung.“ (gleich) | „The box contains 1 × Solar string lights, 1 × Ground stake, 1 × Wall mount, and 1 × User manual.“ (gleich) |
| `tpm-frage-1` | hp-tpm-400-eu-1 | „… mit Ring, 1 × Bedienungsanleitung und 1 × Fernbedienung.“ | „Im Paket sind 1 × LED-Lichterkette für den Weihnachtsbaum mit Ring, 1 × Fernbedienung und 1 × Bedienungsanleitung.“ | „The box contains 1 × LED Christmas tree string light with ring, 1 × Remote control, and 1 × User manual.“ |
| `u20-frage-3` | hp-u20-200 | „… Lichterschlauch, 1 × Bedienungsanleitung und 1 × Fernbedienung.“ | „Im Paket sind 1 × LED-Lichterschlauch, 1 × Fernbedienung und 1 × Bedienungsanleitung.“ | „The box contains 1 × LED light strip, 1 × Remote control, and 1 × User manual.“ |
| `vam-frage-2` | hp-vam-400l-eu-1 | „… warmweiß und bunt, 1 × Bedienungsanleitung und 1 × Fernbedienung.“ | „Im Paket sind 1 × LED-Lichterkette warmweiß und bunt, 1 × Fernbedienung und 1 × Bedienungsanleitung.“ | „The box contains 1 × LED string lights, warm white and multicolor, 1 × remote control, and 1 × user manual.“ |
| `stt-frage-3` | hp-stt-050 (Entwurf, nicht sichtbar) | „… 1 × Bedienungsanleitung und 1 × Fernbedienung.“ | aus dem Feld: „Im Paket sind 1 × LED-Lichterkette, 1 × Fernbedienung und 1 × Bedienungsanleitung.“ | aus dem Feld: „The box contains 1 × LED string lights, 1 × remote control, and 1 × user manual.“ |

- **Inhalt:** Bei elf Antworten hat sich nur die Reihenfolge geändert. Sie folgt jetzt dem Feld, die
  Bedienungsanleitung steht am Ende. Bei sechs Antworten ist der deutsche Text gleich geblieben.
- **Englisch:** Die Teile stehen in der Schreibweise des Felds. Dadurch zeigen die Sätze drei Schreibweisen
  nebeneinander (Abschnitt 3.2).
- **Lesbarkeit:** Bei SCWL („…, set of 2, …“) und VAM („LED string lights, warm white and multicolor, …“) enthält ein
  Teil selbst ein Komma. Das stand schon vorher so in den Antworten; ändern ließe es sich nur im Feld.

### 2.4 Vorschau: leeres Feld und Variantenwechsel

- **Kein passendes Produkt im Shop:** Keins der Produkte mit diesen 17 Antworten hat ein leeres Feld oder ein Feld
  an der Variante.
  - Ein leeres Feld haben nur hp-ol-15-g und hp-dgm-048.
  - Ein Feld an der Variante haben hp-dfm-600, hp-isl-264, hp-blt-050, hp-npt-210 und hp-ols-s11-16.
  - Keines davon nutzt eine dieser Fragen.
- **Testkopie:** Deshalb habe ich beide Fälle in einer Kopie des Live-Themes nachgestellt, ohne Shopdaten zu
  ändern. Die Kopie heißt „zz-test Teil G Platzhalter (kann weg)“, #199725613389, angelegt um 14:44 Uhr.
  - Sie weicht nur an einer Stelle vom Live-Code ab: hp-ol-15-g und hp-isl-264 bekommen dort die Fragen von
    hp-scwl-10m2p-mc, darunter `scwl-frage-4` mit dem Platzhalter.
  - Alles andere (Feld, Varianten, Umschalten) ist echter Shop.
- **Geprüft** von 14:47 bis 14:52 Uhr, DE und EN, Desktop und mobil, mit echtem Klick auf die Variante:

| Fall | Ergebnis |
|---|---|
| hp-ol-15-g, Feld leer | Die drei anderen SCWL-Fragen stehen da, die Frage „Was ist im Lieferumfang?“ bzw. „What's in the box?“ fehlt. Kein halber Satz. |
| hp-isl-264, 8,25 m Warmweiß (Variantenfeld mit 2 Teilen) | „Im Paket sind 1 × LED-Eisregen-Lichterkette und 1 × Fernbedienung.“ / „The box contains 1 × LED Icicle Light String and 1 × Remote Control.“ |
| Klick auf Kaltweiß (HP-ISL-264W, 3 Teile) | Ohne neues Laden: „Im Paket sind 1 × LED-Eisregen-Lichterkette, 1 × Fernbedienung und 1 × Bedienungsanleitung.“ / „The box contains 1 × LED icicle light string, 1 × remote control, and 1 × user manual.“ Der Lieferumfang-Block wechselt gleich mit. |
| Gegenprobe hp-scwl-10m2p-mc in der Kopie | wie live |

### 2.5 Live geprüft

- **Umfang:** alle 22 sichtbaren Produkte mit diesen Antworten, DE und EN, also 44 Seiten.
  - Desktop von 14:44 bis 14:53 Uhr: Hauptinhalt Zeile für Zeile gegen vorher.
  - Mobil von 14:53 bis 14:59 Uhr: der Fragen-Block.
- **Ergebnis:**
  - Geändert haben sich nur die Antwort, auf `/en/` dazu die Frage, sowie die Zeilen aus Abschnitt 3.
  - Auf allen 44 Seiten ist die Antwort genau der Lieferumfang-Block derselben Seite, mit „und“ bzw. „, and“.
  - Mobil steht derselbe Text wie am Desktop.
- **Rückweg:**
  - Daten: die Antworten mit `metaobjectUpdate` aus `teilg-vorher.json` zurückschreiben.
  - EN: bei 15 Fragen `translationsRemove` (vorher gab es keine), bei SCWL und SOLM `translationsRegister` mit dem
    Teil-F-Text.
  - Code erst danach mit `git revert 0ccb2c4`. Umgekehrt stünde sonst „{lieferumfang}“ wörtlich auf der Seite.

## 3. Kleine Sprachkorrekturen auf Englisch

### 3.1 „earth stake“ und hp-dgm-002

Geschrieben um 14:40:18 bis 14:40:19 Uhr, nur EN, Deutsch unverändert:

| Stelle | vorher | nachher |
|---|---|---|
| hp-sblb-60l-ww-new, Beschreibung | „An earth stake with connector is included.“ | „A ground stake with connector is included.“ |
| hp-sblb-100l-ww-new, Beschreibung | „An earth stake with connector is included.“ | „A ground stake with connector is included.“ |
| hp-dgm-002, `heipard.lieferumfang` | „1 × LED garden stake / 1 × remote control“ | „1 × LED garden stake / 1 × Remote control“ |

- **Artikel:** Den Artikel musste ich mit ändern („An“ zu „A“), sonst nichts am Satz.
- **Live (14:44 bis 14:53 Uhr):** Auf den drei Seiten hat sich nur diese Zeile geändert, dazu „Light color“
  (Abschnitt 3.3).

### 3.2 Groß- und Kleinschreibung im englischen Lieferumfang

„1 × remote control“ klein steht nicht nur bei hp-dgm-002. In den Feldern der 22 Produkte aus Abschnitt 2 und an
hp-isl-264 gibt es drei Schreibweisen:

| Schreibweise | Produkte |
|---|---|
| klein: „1 × remote control“, „1 × user manual“ | hp-ctl-180, -240, -300-eu, -360-eu, hp-fsf-120, hp-vam-400l-eu-1, hp-stt-050 (Entwurf), hp-isl-264 an den Varianten mit Bedienungsanleitung |
| Satzanfang groß: „1 × Remote control“, „1 × User manual“ | hp-cl-1-eu, -2-eu, hp-scwl-10m2p-mc, -15m2p-mc, hp-solm-12m-ww, hp-ols-st38-16, hp-tpm-400-eu-1, hp-u20-200, jetzt auch hp-dgm-002 |
| jedes Wort groß: „1 × Remote Control“, „1 × User Manual“, „1 × LED Light Tree Birch“ | hp-wbf-180, -210, hp-wwf-180, hp-rct-400, hp-rfm-600, hp-rnm-200, hp-rsp-180, hp-rtm-400, hp-isl-264 an den Varianten ohne Bedienungsanleitung |

- **Nicht geändert,** nur hp-dgm-002 war freigegeben.
- **Seit Abschnitt 2 sichtbar:** Die Schreibweisen stehen jetzt auch mitten im Satz („The box contains 1 × Smart RGB
  Light Curtain with App and 1 × Remote Control.“).
- **Vorschlag:** Wenn du eine Form festlegst, wäre im Satz die kleine am natürlichsten. Im Listenblock passt jede.
- **Nicht geprüft:** die übrigen rund 90 Felder.

### 3.3 Sprachdatei

Commit `51b18e2`, `locales/en.default.json`, zwölf Werte, keine Schlüssel. Live seit 14:41:56 Uhr.

| vorher | nachher | Stellen | wo zu sehen |
|---|---|---|---|
| Light colour | Light color | 5 | Datenkachel, Icon-Grid, Technik-Tabelle, Kicker im Kelvin- und im Farbwechsel-Block |
| Colour temperature / colour temperature | Color temperature / color temperature | 2 | Technik-Tabelle, Feld der Kennzahl |
| Switch the colour | Switch the color | 1 | Farbwechsel-Block |
| Choose the light colour | Choose the light color | 1 | Beschriftung der Farbwahl (aria-label) |
| Multicolour | Multicolor | 1 | Farbchip im Farbwechsel-Block |
| colour switch | color switch | 1 | Hinweis nur im Theme-Editor |
| Order Cancelled on | Order Canceled on | 1 | Bestellseite im Kundenkonto |

- **Keine weiteren Funde:** Die Sprachdatei enthält sonst keine britischen Formen (gesucht nach -our, -re, -ise,
  -yse, doppeltem l, grey und ähnlichen). `en.default.schema.json` (nur Editor) ist ohne Fund.
- **Keine Überdeckung:** Im Shop gibt es keine eigene Übersetzung dieser Schlüssel, die die Datei überdecken würde.
  Die EN-Seiten zeigen seit 14:41 Uhr die neuen Formen.

### 3.4 Britische Schreibweisen im Shop-Inhalt (nur aufgelistet, nicht geändert)

- **Durchsucht** am 22.11. von 14:20 bis 14:52 Uhr, alle englischen Übersetzungen:
  - Produkte und Optionen
  - Metaobjekte und Metafelder an Produkten und Varianten
  - Kollektionen, Seiten, Blog, Menüs und Links
  - Richtlinien, Filter, Versandarten und E-Mail-Vorlagen
  - Alt-Texte aller 1.786 Medien
  - Theme-Inhalte
  - dazu die 118 gespeicherten `/en/`-Seiten
- **Reine Schreibvarianten, im Shop gepflegt:**

| Fundstelle | Wortlaut | US-Form |
|---|---|---|
| hp-dfm-600, Titel | „…, warm white or **multicoloured**, …“ | multicolored |
| hp-dfm-600, SEO-Titel | „…, warm white or **multicoloured**“ | multicolored |
| hp-dfm-750-eu, Titel | „…, warm white or **multi-colour**, …“ | multicolor |
| hp-vit-864l-eu-1, Meta-Beschreibung | „…, warm white or **multi-colour**, switchable.“ | multicolor |

- **Multicolor allgemein:** In denselben Produkten stehen sonst schon US-Formen, aber uneinheitlich: „multicolor“,
  „multicolored“, „multi-colored“.
- **Shopify-Standardtexte** für Checkout und Benachrichtigungen, nicht vom Shop gepflegt, änderbar nur über
  „Standard-Theme-Inhalte bearbeiten“:
  - „honoured“ (`custom_discount_not_honoured`)
  - dreimal „cancelled“
  - „fulfilment“
- **Wortwahl, keine Rechtschreibung,** nur zur Kenntnis:
  - „fairy lights“: Kollektion, Menü, einige Titel und Produkttypen
  - „mains“ für Netzstecker
  - „baubles“, „parcels“, „Parcel shipping“
  - „front garden“ in Alt-Texten, anderswo schon „front yard“
  - „socket“ neben „outlet“, etwa in der Beschreibung von hp-sblb-60l-ww-new
- **Nebenbei gesehen:**
  - Auf `/en/` noch deutsch: der Link „Suche“, zwei Versandarten „Versand“, „Strom“ in den Titeln von hp-ol-s11-25
    und -30.
  - „Storm“ statt „Strom“ bei hp-ol-st38-15, DE und EN.

## 4. Titel: Inventar

- **Datei:** `docs/data/teilg-titel.csv`, Semikolon getrennt, UTF-8, öffnet direkt in Excel.
  - Spalten: Handle, Titel DE, Titel EN, Einstufung, Anmerkung.
  - Alle 118 aktiven Produkte, nach Einstufung sortiert.
  - Nichts geändert.
- **Quelle:** die `/en/`-Seiten vom 20.11., 19:26 bis 19:43 Uhr. Der englische Titel ist die Überschrift, der deutsche
  steht im selben Seitenquelltext. Nur bei hp-bsm-002 stammt der deutsche Titel aus dem Admin (20.11., 23:20 Uhr).
  Titel habe ich seitdem nicht geschrieben; an Produkten hat sich bis 22.11., 14:35 Uhr nichts geändert.
- **Einstufung:**

| Einstufung | Anzahl | Merkmal | Beispiel |
|---|---|---|---|
| neues Muster | 20 | „HeiPard <Produktart> <Maße mit Leerzeichen>, <Lichtfarbe>, für innen/außen …“, durch Kommas gegliedert | „HeiPard Batterie-Lichterkette 10 m oder 15 m, warmweiß, für innen und außen“ |
| Amazon-Stil | 82 | Stichwortreihe ohne Gliederung, Einheiten wie „10M“, „100LED“, Listen von Anlässen („für Garten, Balkon, Hochzeit, Party“), Reste wie „(, 1 Stück)“ oder „-“ am Ende; auch kurze Stichworttitel | „HeiPard Lichterkette Außen 10M & Bunt“ |
| englisch | 3 | deutscher Titel ganz oder teils englisch | hp-rsp-180, hp-ols-s11-16, hp-ucp-200 |
| Rest | 13 | zu knapp, wörtlich übertragen, Längen ohne Einheit, Zwischenform ohne „HeiPard“ | „HeiPard Lichterkette“ (hp-tpm-400-eu-1) |

- **Rest im Einzelnen:**
  - Nur die Produktart: hp-rfm-600, hp-tpm-400-eu-1, hp-rtm-400, hp-fsf-120.
  - Unvollständig: hp-dgm-002, hp-fxf-001.
  - Wörtlich aus dem Englischen: hp-bsm-002 („String 2 Verkauf“ = „String 2 for Sale“).
  - Klein geschrieben, „2pack“: hp-bsx-002.
  - Längen ohne Einheit: hp-dpt-300.
  - Zwischenform ohne „HeiPard“: hp-uct-200-eu, hp-olg-300-eu, hp-olt-300-eu, hp-rmp-180.
- **Auffällig:**
  - Gleicher Titel: hp-ol-15 und hp-ol-15-g, ebenso hp-olg-300-eu und hp-olt-300-eu.
  - Ohne „HeiPard“ am Anfang: sieben Titel.
  - Englisch gleich deutsch: hp-rsp-180, hp-ols-s11-16.
  - Britische Formen im EN-Titel: hp-dfm-600, hp-dfm-750-eu (Abschnitt 3.4).
- **Bei einer Titelrunde zu beachten:** Alle 20 Produkte im neuen Muster haben auch einen englischen Titel in
  diesem Muster. Bei den übrigen folgt der englische Titel meist dem alten deutschen, einige sind etwas geglättet
  (etwa hp-olh-g40-20 „HeiPard Outdoor String Lights, 13 m, 20+2 G40 LED Bulbs“). Eine Titelrunde braucht also
  jeweils DE und EN.

## 5. Parallelbetrieb mit der Asset-Instanz

Noch keine Meldung zu Auftrag 27 (Stand 15:00 Uhr). Die Prüfung von hp-fsf-120, hp-fxf-001, hp-uct-200-eu und den
ISL-Produkten folgt als Nachtrag. An den Medien ändere ich nichts.

## Schreibvorgänge

| Zeit | Objekt | Änderung |
|---|---|---|
| 20.11., 23:19:50 | Metaobjekt `dfm-750` (neu) | Set angelegt |
| 22.11., 14:37:10 | hp-dfm-750-eu, `heipard.feature_set` | `dfm` → `dfm-750` |
| 22.11., 14:40:18–19 | hp-sblb-60l-ww-new, hp-sblb-100l-ww-new, Beschreibung EN | „earth stake“ → „ground stake“ |
| 22.11., 14:40:19 | hp-dgm-002, `heipard.lieferumfang` EN | „remote control“ → „Remote control“ |
| 22.11., 14:41:56 | Live-Theme (über Git) | `heipard-fb-fragen.liquid`, `de.json`, `en.default.json` |
| 22.11., 14:44:03–05 | 17 Fragen (`product_question`), Antwort DE | „Im Paket sind {lieferumfang}.“ |
| 22.11., 14:44:23–24 | dieselben 17, Frage und Antwort EN | „What's in the box?“ / „The box contains {lieferumfang}.“ |
| 22.11., 14:44:47 | Theme „zz-test Teil G Platzhalter (kann weg)“ (neu, unveröffentlicht) | Kopie des Live-Themes, danach eine Testzeile im Fragen-Snippet |

## Commits

- `0ccb2c4` Fragen: Platzhalter {lieferumfang} liest das Lieferumfang-Feld
- `51b18e2` Sprachdatei EN: US-Schreibweise statt britisch
- Doku-Commit dieses Berichts (Hash in der Commit-Liste von `main`)

## Offen

1. **Vorschau-Theme #199725613389** kann gelöscht werden. `themeDelete` ist für mich gesperrt.
2. **Einheitliche Schreibweise im EN-Lieferumfang** (3.2): Entscheidung bei dir.
3. **Vier britische Formen im Shop-Inhalt** (3.4): Freigabe zum Ändern bei dir.
4. **Titelrunde** (4): Entscheidung bei dir.
5. **Die übrigen Fragen sind auf `/en/` weiter deutsch.** Teil G hat nur die 17 Lieferumfang-Fragen übersetzt.
6. **Nachtrag Abschnitt 5** nach der Meldung der Asset-Instanz.
