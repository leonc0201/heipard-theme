# Bericht: Feature-Blöcke R2 und R3 (Schritt C, Teil A)

Auftrag `heipard-theme-auftrag-r2r3-und-sets.md`, Teil A (Entscheidung Leon 18.11.2026).
Stand 18.11.2026, abends. **Teil A ist live**: Theme seit 18:46, Sets seit 18:49 Uhr. Offen ist nur die Abnahme am
ersten Produkt mit R2/R3-Bild, das die Asset-Instanz nach Auftrag 21 nennt (Abschnitt 8).

## Kurzfassung

- **Theme** (Commit `f06ed96`, live seit 18:46:23, Prüfsummen gleich git): neuer Block-Typ `szene` mit Variante `r2` oder `r3`. Er zeigt das Bild aus
  `heipard.feature_r2` bzw. `heipard.feature_r3` als Bild-Text-Zeile wie R1, Bild 16:9, Seite im Wechsel, mobil
  untereinander. Ist das Metafeld leer, gibt der Block nichts aus. Die Seite ist dann Zeichen für Zeichen dieselbe
  wie ohne den Block, das ist lokal für fünf Set-Muster getestet.
- **Metafeld-Definitionen** angelegt: `heipard.feature_r2` (694011625805) und `heipard.feature_r3` (694011658573),
  Typ wie `feature_r1` (Datei-Verweis, nur Bilder, im Storefront lesbar).
- **104 Blöcke** angelegt, je Familie `<code>-r2` und `<code>-r3` für die 52 Familien mit Zeilen `<FAM>-R2/-R3` in
  Notion. Überschrift und Szenentext auf Deutsch, Englisch als Übersetzung am Block.
- **Sets:** 61 Sets haben R2 und R3, direkt hinter R1 (18:47 bis 18:49 Uhr).
- **Gegenprobe live:** alle 118 Seiten nach der Umstellung neu geladen. Keine Seite zeigt R2 oder R3 (kein Produkt
  hat bisher ein R2/R3-Bild), keine Liquid-Fehler. Die Feature-Sektion ist auf 102 Seiten Zeichen für Zeichen
  gleich. Auf 16 Seiten zeigt R1 jetzt ein Bild, weil die Asset-Instanz um 18:08 Uhr (Auftrag 20) `feature_r1` gesetzt
  hat; sonst ist dort alles gleich (Abschnitt 5).
- **Vorschau** mit den echten Hermes-Bildern, Desktop und Mobil (Abschnitt 6). Die Live-Aufnahme am echten
  Testprodukt folgt, sobald die Asset-Instanz nach Auftrag 21 das erste Produkt nennt.

## 1. Metafelder

Das Theme liest die Metafelder auch ohne Definition, Liquid braucht sie nicht. Angelegt habe ich sie trotzdem, so
wie `feature_r1`: Mit Definition nimmt Shopify nur einen Datei-Verweis auf ein Bild an, die Asset-Instanz kann
keinen falschen Typ schreiben, und die Felder erscheinen im Admin am Produkt.

| Key | Name | Typ | Definition |
|---|---|---|---|
| `heipard.feature_r2` | Feature-Bild R2 | `file_reference`, nur Bilder, Storefront lesbar | `gid://shopify/MetafieldDefinition/694011625805` |
| `heipard.feature_r3` | Feature-Bild R3 | `file_reference`, nur Bilder, Storefront lesbar | `gid://shopify/MetafieldDefinition/694011658573` |

## 2. Theme

Geändert: `snippets/heipard-feature-dispatch.liquid`, `snippets/heipard-feature-block.liquid`,
`sections/heipard-feature.liquid`, `assets/heipard-feature.css`.

- **Block-Typ `szene`.** Im Block-Vokabular heißt R2 schon „Zäsur“ (ein Satz als Kapitelbruch). Damit die beiden
  nicht verwechselt werden, heißt der neue Typ `szene`; R2 und R3 sind die Varianten, passend zu den Asset-Codes
  `<FAM>_R2_01` und `<FAM>_R3_01`. In der Metaobjekt-Definition „HeiPard Feature-Block“ sind die Auswahllisten um
  `szene` (Block-Typ) und `r2`, `r3` (Variante) ergänzt.
- **Bild nur aus dem Metafeld.** Ein Block-Bild wie bei R1 gibt es hier nicht: Die Familie teilt sich ein Set, die
  Metafelder kommen aber Produkt für Produkt. So erscheint R2 genau an den Produkten, an denen die Asset-Instanz das
  Bild einspielt.
- **Darstellung:** Bild-Text-Zeile wie R1, Überschrift und Text neben dem Bild, kein Kicker (wie bei den acht
  R1-Szenentexten). Das Bild steht in 16:9 und wird nicht beschnitten (Klasse `heipard-feature__row--szene`).
- **Bildseite:** wechselt automatisch gegen die Bild-Text-Zeile davor. Hat R1 das Bild rechts, steht es bei R2 links
  und bei R3 wieder rechts. Mobil steht das Bild über dem Text.
- **Leerverhalten:** Ohne Metafeld gibt der Block kein Markup aus, auch keinen Abstand. Er zählt dann für nichts
  mit: nicht für das Limit, nicht für den Seitenwechsel, nicht für die internen IDs der übrigen Blöcke.
- **Limit:** R2 und R3 zählen nicht zum Block-Limit, wie die Zäsur. Sonst würden in Standard-Sets (Limit 5) der
  Kettenplan und das Icon-Grid wegfallen, sobald R2 und R3 erscheinen.
- **Alt-Text:** wie R1. Zuerst das Blockfeld `alt`, sonst der Alt der Datei, sonst die Überschrift. Das Blockfeld
  ist bei den 104 Blöcken noch leer, weil die Dateien noch nicht in Files liegen (Abschnitt 8).
- **Prüfung:** LiquidJS-Test `t15_szene` (Reihenfolge, Seiten, Limit, Leerverhalten, Alt), dazu die bestehenden
  Tests der Feature-Sektion, alle grün. Theme Check: 15 Meldungen wie vorher, keine neue.

## 3. Texte

**Wo sie liegen:** wie bei R1 im Metaobjekt `feature_block`, Felder `title` und `body`, Handle `<code>-r2` bzw.
`<code>-r3`. Die Bezeichnung trägt den Hinweis, zum Beispiel „OLT · R2 Szene (Szenentext, kein Fakt)“. Englisch
steht als Übersetzung am Block (`translationsRegister`, US-Englisch). Shopify hat alle 208 Übersetzungen angenommen.
Dabei prüft es die Prüfsumme des deutschen Texts, die deutschen Texte stehen also Zeichen für Zeichen so im Shop wie
in der Tabelle unten. Alle Daten mit IDs: `docs/data/r2r3-bloecke.json`.

**Quelle:** Spalte „Bildbeschreibung“ der Notion-Tabelle „Assets & Prompts (Hermes)“ (Abfrage 18.11.), abgeglichen
mit den 104 Bildern im Hermes-Eingang (`Heipard Assets/00_inbox/hermes/c2`). Wo das Bild anders aussieht als die
Beschreibung, folgt der Text dem Bild:

| Zeile | Beschreibung in Notion | Im Bild | Text |
|---|---|---|---|
| BAUMPVC-R2 | helle Küche | heller Essbereich mit Tisch | „Im hellen Essbereich …“ |
| BSX-R2 | Fenster eines Treppenabsatzes | Fenster zur verschneiten Straße, Treppe nicht erkennbar | „Im Fenster zur Straße“ |
| DFM-R2 | Rosenbogen | Holzbogen ohne Rosen | „Am Gartenbogen“ |
| OLSST38-R2 | Rosenbogen über einer Bank | Holzlaube über einer Bank | „… an der Holzlaube …“ |
| U20-R3 | Holzsteg | kleine Holzbrücke | „… bis zur kleinen Holzbrücke …“ |

**Regeln:** Szenentext, kein Fakt. Keine Zahlen, auch keine Stückzahlen aus den Beschreibungen („vier Sterne“,
„zwei Hirsche“). Keine Lichtfarbe, weil Familien wie CSL warm- und kaltweiße Varianten haben. Keine Stromquelle,
keine Funktion (Timer, Fernbedienung, Dimmen), keine Gedankenstriche, keine Garantie-, Herkunfts- oder
Superlativwörter. Per Skript geprüft, 0 Treffer. Länge 99 bis 143 Zeichen, auf dem Desktop zwei bis drei Zeilen.

**Bilder noch nicht freigegeben:** DCT-R3 (Notion „In Arbeit“, im Eingang die Fassung `DCT_R3_01_2`) und SBLB-R2/-R3
(„Generiert“). Die Texte passen zu den Fassungen im Eingang. Ändert sich das Bild, ziehe ich den Text nach.

| Familie | Block | Sets | Überschrift DE | Text DE | Überschrift EN |
|---|---|---|---|---|---|
| BAUMPEC | `baum-pec-r2` | baum-pec | Im hellen Schlafzimmer | Der Baum steht noch ungeschmückt in der Zimmerecke neben dem Bett mit weißer Leinenwäsche, im weichen Licht des Tages vom Fenster. | In a bright bedroom |
|  | `baum-pec-r3` |  | Neben der Haustür | Auf seinem Holzkreuzfuß steht der Baum auf der überdachten Veranda gleich neben der Haustür, ein paar Päckchen liegen schon bereit. | By the front door |
| BAUMPVC | `baum-pvc-r2` | baum-pvc | Neben dem Esstisch | Im hellen Essbereich steht der Baum ungeschmückt gleich neben dem Tisch, dort, wo morgens alle zusammenkommen. | Next to the dining table |
|  | `baum-pvc-r3` |  | Im Erkerfenster | Im Erker des Wohnzimmers steht der Baum noch ohne Schmuck, draußen liegt Schnee auf den Zweigen, drinnen fällt weiches Wintertageslicht. | In the bay window |
| BLT | `blt-r2` | blm, blt | Über dem Bett | Die Lichterkette liegt auf dem Regal am Kopfende, über weißer Leinenwäsche, und taucht das Schlafzimmer am Abend in ruhiges Licht. | Above the bed |
|  | `blt-r3` |  | In der Glaslaterne | Aufgewickelt in einer großen Glaslaterne leuchtet die Lichterkette an einem Sommerabend mitten auf dem Gartentisch. | Inside a glass lantern |
| BSL | `bsl-r2` | bsl | In der Glasvase | Die Lichterkette liegt in einer hohen Glasvase auf dem gedeckten Tisch und setzt am Abend feine Lichtpunkte zwischen Teller und Servietten. | In a glass vase |
|  | `bsl-r3` |  | In der Tannengirlande | Eingeflochten in eine Tannengirlande liegt die Lichterkette auf der Fensterbank und leuchtet am Abend zwischen den Zweigen. | In a fir garland |
| BSM | `bsm-r2` | bsm | Im Kinderzimmerfenster | Der Hirsch schwebt am Abend im Fenster des Kinderzimmers, draußen fällt Schnee, auf der Fensterbank liegen Bücher und ein Holzpferd. | In the kids’ room window |
|  | `bsm-r3` |  | An Zweigen in der Vase | An dekorativen Zweigen in einer Vase hängen die leuchtenden Hirsche und schmücken das Sideboard im abendlichen Wohnzimmer. | On branches in a vase |
| BSX | `bsx-r2` | bsx | Im Fenster zur Straße | Am Abend hängen leuchtende Sterne im Fenster, draußen liegt die verschneite Straße mit ihren Häusern weich im Unscharfen. | In the window to the street |
|  | `bsx-r3` |  | Am Dekobaum auf dem Esstisch | Der Stern hängt an einem Ast des kleinen Dekobaums mitten auf dem gedeckten Esstisch, zwischen Kerzen und Tellern. | On a tabletop tree |
| CL | `cl-r2` | cl | Im Zelt | Die Laterne hängt an der Firststange im Zelt, die Lichterkette läuft an der Naht entlang bis zum Eingang. Draußen wird es dunkel. | Inside the tent |
|  | `cl-r3` |  | Auf dem Stadtbalkon | Die Laterne steht auf dem Holzgeländer eines Stadtbalkons, daneben läuft die Lichterkette am Geländer entlang. Über den Dächern dämmert es. | On a city balcony |
| CSL | `csl-r2` | csl | Vor der Terrassentür | Der Lichtervorhang hängt vor der großen Terrassentür, davor steht der gedeckte Esstisch. So beginnt ein Abend mit Freunden. | In front of the patio door |
|  | `csl-r3` |  | Im Flur hinter dem Spiegel | An der Flurwand hängt der Lichtervorhang hinter Konsole und rundem Spiegel und empfängt dich am Abend schon an der Tür. | In the hallway behind the mirror |
| CTL | `ctl-r2` | ctl, ctl-w1, tpm | Im skandinavischen Wohnzimmer | Die Lichterkette hängt in Strängen über die Äste des Baums in der Zimmerecke. Daneben wartet das Sofa mit der Wolldecke auf den Abend. | In a Scandinavian living room |
|  | `ctl-r3` |  | Im verschneiten Vorgarten | Von der Spitze bis zum Boden hängt die Lichterkette an der Tanne im Vorgarten und leuchtet in der Dämmerung über den Schnee. | In a snowy front yard |
| CTLM | `ctl-m-r2` | ctl-m | Neben dem Kamin | Der geschmückte Weihnachtsbaum mit der Lichterkette steht neben dem Kamin, und im Wohnzimmer beginnt ein ruhiger Abend am Feuer. | Next to the fireplace |
|  | `ctl-m-r3` |  | Auf der Veranda | Die Tanne steht mit der Lichterkette auf der verschneiten Veranda neben der Haustür und begrüßt in der Dämmerung jeden Gast. | On the porch |
| DCT | `dct-r2` | dct | Auf der Gartenhaus-Veranda | Der Lichtervorhang hängt an der Rückwand der Veranda hinter einem kleinen Tisch. In der Dämmerung wird daraus ein Platz für den Abend. | On the garden house porch |
|  | `dct-r3` |  | Vor dem Treppenhausfenster | Am Abend hängt der Lichtervorhang vor dem hohen Fenster im Treppenhaus, gleich neben der Holztreppe, die nach oben führt. | In front of the stairwell window |
| DFM | `dfm-r2` | dfm, dfm-600 | Am Gartenbogen | Dicht um Pfosten und Balken gewickelt, zeichnet die Lichterkette den Bogen im Garten nach und leuchtet in die Dämmerung. | On the garden arch |
|  | `dfm-r3` |  | Am Wohnzimmerfenster | Als dichte Girlande umrahmt die Lichterkette das Wohnzimmerfenster am Abend, draußen liegt der verschneite Garten. | Around the living room window |
| DGM | `dgm-r2` | dgm | Im Terrakotta-Kübel | Die Sterne stecken auf ihren Erdspießen in einem großen Terrakotta-Kübel und leuchten in der Dämmerung auf der Terrasse. | In a terracotta planter |
|  | `dgm-r3` |  | Am Rasenrand | Entlang des verschneiten Rasenrands am Gartenzaun stecken die Sterne im Boden und leuchten in die Dämmerung. | Along the lawn edge |
| DGM002 | `dgm-w1-r2` | dgm-w1 | An der Eingangstreppe | Die Lichtspiralen stehen in einer Reihe im verschneiten Beet neben der Eingangstreppe und zeigen in der Dämmerung den Weg zur Tür. | By the front steps |
|  | `dgm-w1-r3` |  | Im Pflanzkasten auf dem Balkon | Im hölzernen Pflanzkasten leuchten die Spiralen auf dem Balkon, dahinter verschwimmt die Stadt in der Dämmerung. | In a balcony planter |
| DGM048 | `dgm-w1-048-r2` | dgm-w1-048 | Auf der Fensterbank | Gestapelt stehen die leuchtenden Geschenkboxen auf der Fensterbank im Abendlicht, draußen liegt der verschneite Garten. | On the windowsill |
|  | `dgm-w1-048-r3` |  | Auf dem Sideboard | Neben ein paar Tannenzweigen in der Vase stehen die Geschenkboxen gestapelt auf dem Sideboard und leuchten in den Abend. | On the sideboard |
| DLM | `dlm-r2` | dlm | Auf dem Kaminsims | Zwischen Kürbissen und trockenem Laub liegt die Lichterkette auf dem Kaminsims und bringt Halloween ins Wohnzimmer. | On the mantel |
|  | `dlm-r3` |  | Im Baum vor dem Haus | Um die kahlen Äste des kleinen Baums im Vorgarten gewickelt, leuchtet die Lichterkette in der Halloween-Nacht über dem Laub. | In the tree out front |
| DNM | `dnm-r2` | dnm | Über der Konifere | Das Lichternetz liegt über der runden Konifere im Kübel neben der Haustür und leuchtet in der Dämmerung am Eingang. | Over the conifer |
|  | `dnm-r3` |  | Am Balkongeländer | Über das Geländer drapiert, leuchtet das Lichternetz in der Dämmerung bis hinunter auf die Straße vor dem Haus. | On the balcony railing |
| DPM | `dpm-r2` | dpm | Am Gartenzaun | Die Lichterkette läuft am Holzzaun entlang und um das Gartentor herum. In der Dämmerung zeigt sie den Weg hinein. | Along the garden fence |
|  | `dpm-r3` |  | Um die Pergola | In dichten Spiralen windet sich die Lichterkette um Pfosten und Balken der Holzpergola und leuchtet in die Dämmerung. | Around the pergola |
| DPT | `dpt-r2` | dpt | Im großen Gartenbaum | Um Stamm und Äste des kahlen Gartenbaums gewickelt, zeichnet die Lichterkette in der Dämmerung seine Form nach. | In a large garden tree |
|  | `dpt-r3` |  | An der Balkonfront | In Bögen läuft die Lichterkette an der Balkonfront eines Stadthauses entlang, gut zu sehen von der Straße in der Dämmerung. | Across the balcony front |
| FSF | `fsf-r2` | fsf | Neben dem Weihnachtsbaum | Der Schneemann leuchtet von innen und steht am Abend neben dem Weihnachtsbaum in der Wohnzimmerecke, gleich beim Sofa. | Next to the Christmas tree |
|  | `fsf-r3` |  | Im verschneiten Garten | Mit Zylinder und Schal steht der Schneemann in der Dämmerung im Schnee, hinten lehnt ein Schlitten am Gartenhaus. | In the snowy garden |
| FXF | `fxf-r2` | fxf | Am Weg zur Haustür | Rentier und Schlitten stehen auf dem verschneiten Rasen neben dem Weg zur Haustür und leuchten in der Dämmerung. | Along the path to the door |
|  | `fxf-r3` |  | Vor den großen Fenstern | Auf der Holzterrasse vor den großen Fenstern eines modernen Hauses leuchten Rentier und Schlitten in die Dämmerung. | In front of the big windows |
| ISL | `isl-r2` | isl | An der Pergola | Die Lichterkette hängt an der Vorderkante des Pergola-Dachs und lässt ihr Licht in der Dämmerung über den Tisch auf der Terrasse fallen. | On the pergola |
|  | `isl-r3` |  | Über dem Garagentor | Entlang der Oberkante des Garagentors hängt die Lichterkette, während in der Dämmerung leichter Schnee auf die Einfahrt fällt. | Above the garage door |
| NPT | `npt-r2` | npt | Über der Hecke | Das Lichternetz liegt über der breiten Hecke neben dem Weg zur Haustür und begleitet dich in der Dämmerung bis zum Eingang. | Over the hedge |
|  | `npt-r3` |  | An der Ziegelwand | Flach an der Ziegelwand hinter der Terrassenbank angebracht, wird das Lichternetz in der Dämmerung zur leuchtenden Rückwand. | On the brick wall |
| OLAG40 | `ola-g40-r2` | ol, ol-g40, ola-g40 | Am Gartenhaus | Aus der Ferne gesehen läuft die Lichterkette an der Dachkante des Gartenhauses entlang und rahmt in der Dämmerung die kleine Terrasse darunter. | On the garden house |
|  | `ola-g40-r3` |  | Über dem Kieshof | Im Zickzack ist die Lichterkette über den schmalen Kieshof gespannt, unter ihr stehen eine Bank und Pflanzkübel in der Dämmerung. | Over the gravel courtyard |
| OLAS14 | `olas14-r2` | olas14 | Über dem Bistrotisch | Hoch über dem Bistrotisch im schmalen gepflasterten Hof ist die Lichterkette im Zickzack gespannt und leuchtet in die Dämmerung. | Above the bistro table |
|  | `olas14-r3` |  | Zur blauen Stunde | Über die Wiese hinweg sieht man die Lichterkette an der Dachkante des Gartenhauses, darunter eine Bank auf der kleinen Terrasse. | At blue hour |
| OLG | `olg-r2` | olg | Um die Tanne im Vorgarten | In lockeren Spiralen windet sich die Lichterkette um Stamm und untere Äste der Tanne im Vorgarten und leuchtet in die Dämmerung. | Around the fir out front |
|  | `olg-r3` |  | An der Steinmauer | Die Lichterkette liegt auf der niedrigen Steinmauer und schlingt sich um den Torpfosten. So findet jeder in der Dämmerung den Eingang. | Along the stone wall |
| OLHG40 | `olh-g40-r2` | olh-g40 | Über der Hängematte | In weiten Bögen ist die Lichterkette über den kleinen Garten gespannt, darunter hängt die Hängematte für den Abend. | Above the hammock |
|  | `olh-g40-r3` |  | Am Carport | In der Dämmerung läuft die Lichterkette am First des offenen Holzcarports entlang und leuchtet über die Kieseinfahrt. | Along the carport |
| OLS11 | `ol-s11-r2` | ol-s11 | An der Pergola über der Tafel | Die Lichterkette hängt in gerader Linie an der Vorderkante der Holzpergola, darunter steht die lange Gartentafel in der Dämmerung. | Along the pergola above the table |
|  | `ol-s11-r3` |  | Über der Kies-Sitzecke | In Bögen hängt die Lichterkette über der Sitzecke aus Kies, darunter laden Liegestühle in der Dämmerung zum Sitzenbleiben ein. | Above the gravel seating area |
| OLSA60 | `ols-a60-r2` | ols-a60 | Am Holzdeck | Aus der Ferne werden die Birnen zu kleinen Lichtpunkten: Die Lichterkette läuft in der Dämmerung rund um das Holzdeck auf der Wiese. | Around the wooden deck |
|  | `ols-a60-r3` |  | Zwischen den Obstbäumen | Zwischen den Obstbäumen hängt die Lichterkette über dem Picknicktisch im Garten und leuchtet in die Dämmerung. | Between the fruit trees |
| OLSG40 | `ols-g40-r2` | ols-g40 | Am Gartenschuppen | In einem sanften Bogen hängt die Lichterkette an der Vorderseite des Gartenschuppens und leuchtet in der Dämmerung über die Beete. | On the garden shed |
|  | `ols-g40-r3` |  | Über der Feuerstelle | In Bögen spannt sich die Lichterkette über die Feuerstelle mit den Holzbänken. Hier beginnt der Abend draußen. | Above the fire pit |
| OLSS11 | `ols-s11-r2` | ols-s11 | Am Balkon des Holzhauses | Die Lichterkette läuft am Balkongeländer des Holzhauses entlang und setzt in der Dämmerung Lichtpunkte über die Sitzecke darunter. | On the wooden house balcony |
|  | `ols-s11-r3` |  | Über den Hochbeeten | In einem langen Bogen hängt die Lichterkette über den Hochbeeten im Gemüsegarten und leuchtet in die Dämmerung. | Above the raised beds |
| OLSS17 | `ols-s17-r2` | ols-s17 | Am Gartenpavillon | Die Lichterkette hängt am Dach des Gartenpavillons, aus der Ferne werden die Birnen in der Dämmerung zu kleinen Lichtpunkten. | On the garden pavilion |
|  | `ols-s17-r3` |  | Über dem Bootssteg | In Bögen hängt die Lichterkette über dem Bootssteg und spiegelt sich in der Dämmerung im stillen Wasser des Sees. | Above the boat dock |
| OLSST38 | `ols-st38-r2` | ols-st38 | Über der Bank am Gartenweg | Die Lichterkette hängt an der Holzlaube über der Bank am Ende des Gartenwegs und leuchtet in der Dämmerung zwischen den Blumen. | Above the bench by the garden path |
|  | `ols-st38-r3` |  | An der Berghütte | Von der Berghütte aus läuft die Lichterkette über die Wiese, während die Berge dahinter in der Dämmerung verschwinden. | At the mountain hut |
| OLST38 | `ol-st38-r2` | ol-st38 | Auf der Veranda mit Schaukel | In Bögen hängt die Lichterkette an der überdachten Veranda, darunter wartet die Hollywoodschaukel auf den Abend. | On the porch with the swing |
|  | `ol-st38-r3` |  | Im Stadtgarten | Am Ende des schmalen Stadtgartens hängt die Lichterkette über Hochbeeten und einem kleinen Tisch und leuchtet in die Dämmerung. | In a city garden |
| OLT | `olt-r2` | olt | Am weißen Balkongeländer | In Bögen läuft die Lichterkette am weißen Balkongeländer entlang, dahinter gehen in der Dämmerung die Lichter der Stadt an. | On the white balcony railing |
|  | `olt-r3` |  | Im Lorbeerbäumchen | In die Äste des Lorbeerbäumchens neben der Haustür gewunden, begrüßt die Lichterkette in der Dämmerung jeden, der nach Hause kommt. | In the potted bay tree |
| RCT | `rct-r2` | rct | Hinter dem Partytisch | Der Lichtervorhang wird zum leuchtenden Hintergrund für den Partytisch mit Gläsern und Gebäck. Die Nacht kann kommen. | Behind the party table |
|  | `rct-r3` |  | Im Jugendzimmer | Nachts hängt der Lichtervorhang im Fenster des Jugendzimmers hinter dem Schreibtisch und füllt das Zimmer mit Licht. | In a teen’s room |
| RFM | `rfm-r2` | rfm | Im Weihnachtsbaum | Dicht in die Äste gelegt, leuchtet die Lichterkette im Weihnachtsbaum, während das Wohnzimmer um sie herum schon dunkel ist. | In the Christmas tree |
|  | `rfm-r3` |  | Am Gartentor | Als dicke Girlande läuft die Lichterkette am Gartenzaun entlang und um das Tor herum und leuchtet in die Nacht. | At the garden gate |
| RGB | `rgb-r2` | rgb | Im kleinen Vorgartenbaum | Um Stamm und Äste des kleinen Baums im Vorgarten gewickelt, leuchtet die Lichterkette in der Nacht, das Haus liegt unscharf dahinter. | In the small front yard tree |
|  | `rgb-r3` |  | Am Pergola-Balken | Die Lichterkette läuft am Holzbalken der Pergola entlang und leuchtet in der Nacht über dem gedeckten Terrassentisch. | Along the pergola beam |
| RIT | `rit-r2` | rit | Über der Haustür | An der Dachkante über der Haustür hängt die Lichterkette und leuchtet in der Nacht, während leichter Schnee fällt. | Above the front door |
|  | `rit-r3` |  | Am Pergola-Dach | Die Stränge hängen von der Vorderkante des Pergola-Dachs und leuchten in die Nacht über dem Garten. | On the pergola roof |
| RMP | `rmp-r2` | rmp | Am Ende des verschneiten Wegs | Der Lichterturm mit dem Stern steht neben dem Gartentor am Ende des verschneiten Wegs und leuchtet zur blauen Stunde. | At the end of the snowy path |
|  | `rmp-r3` |  | Im hellen Flur | In der Ecke des Flurs neben der Treppe steht der Lichterturm und empfängt dich am Abend schon beim Hereinkommen. | In a bright hallway |
| RNM | `rnm-r2` | rnm | Am Gartenhaus | Flach an der dunklen Holzwand des Gartenhauses neben der Tür angebracht, leuchtet das Lichternetz in die Nacht. | On the garden house |
|  | `rnm-r3` |  | Über der Konifere | Das Lichternetz liegt über der runden Konifere im Kübel auf der Terrasse und leuchtet in der Nacht über die Steinplatten. | Over the conifer |
| RPM | `rpm-r2` | rpm | Im kahlen Baum | Um Stamm und Äste des kahlen Baums gewickelt, leuchtet die Lichterkette in der Nacht und zeichnet jeden Ast nach. | In a bare tree |
|  | `rpm-r3` |  | Am Gartenzaun | Die Lichterkette läuft nachts am Gartenzaun entlang und um das Tor herum, dahinter liegt der dunkle Garten. | Along the garden fence |
| RSP | `rsp-r2` | rsp | Auf der verschneiten Veranda | Neben der Haustür steht der Lichterbaum mit seiner Sternspitze auf der verschneiten Veranda und leuchtet in die Nacht. | On the snowy porch |
|  | `rsp-r3` |  | Neben der Treppe | Im hellen Flur steht der Lichterbaum neben der Holztreppe und bringt am Abend Licht in den Eingang. | Next to the stairs |
| RTM | `rtm-r2` | rtm | In der Wohnzimmerecke | Der Weihnachtsbaum mit dem Lichtermantel steht in der Ecke des Wohnzimmers neben dem Sofa und dem Kamin. | In the living room corner |
|  | `rtm-r3` |  | Im Vorgarten bei Nacht | Über die Äste der Tanne im verschneiten Vorgarten hängen die Stränge des Lichtermantels und leuchten in die Nacht. | In the front yard at night |
| SBLB | `sblb-r2` | sblb | Auf dem Balkon | Die Lichterkette mit den Kristallkugeln liegt auf dem Holzgeländer des Balkons und leuchtet in der Dämmerung über den Dächern. | On the balcony |
|  | `sblb-r3` |  | In der Hecke am Gartenweg | In die Hecke entlang des Gartenwegs gelegt, setzen die Kristallkugeln in der Dämmerung Lichtpunkte ins Grün. | In the hedge by the path |
| SCWL | `scwl-r2` | scwl | Am Zaun beim Lavendel | Die feine Lichterkette ist am niedrigen Gartenzaun befestigt und leuchtet in der Dämmerung über dem Lavendel. | On the fence by the lavender |
|  | `scwl-r3` |  | Über den Kräutertöpfen | Über die Terrakotta-Töpfe mit Kräutern drapiert, leuchtet die Lichterkette in der Dämmerung auf dem Balkon. | Over the herb pots |
| SOLM | `solm-r2` | solm | Im Obstbaum | Die Lichterkette ist in die Äste eines kleinen Obstbaums gewickelt und setzt in der Dämmerung feine Lichtpunkte in den Garten. | In the fruit tree |
|  | `solm-r3` |  | Am Balkon mit Blumenkästen | Am Holzgeländer mit den Blumenkästen entlang drapiert, leuchtet die Lichterkette in der Dämmerung auf dem Balkon. | On the balcony with flower boxes |
| U20 | `u20-r2` | u20 | Entlang von Balken und Pfosten | Der Lichtschlauch zieht in der Dämmerung eine durchgehende Lichtlinie an Balken und Pfosten der Pergola entlang. | Along beam and post |
|  | `u20-r3` |  | Am Gartenteich | Der Lichtschlauch folgt dem Ufer des Gartenteichs bis zur kleinen Holzbrücke, im Wasser spiegelt sich die Linie in der Dämmerung. | By the garden pond |
| UCT | `uct-r2` | uct | Hinter der Gardine | Am Abend leuchtet der Lichtervorhang vor dem Schlafzimmerfenster durch die weiße Gardine, davor steht das Bett mit heller Bettwäsche. | Behind the sheer curtain |
|  | `uct-r3` |  | Als Lichtwand im Pavillon | Am Gartenpavillon wird der Lichtervorhang zur Lichtwand hinter den Liegestühlen und leuchtet in die Dämmerung. | A wall of light at the pavilion |
| VIT | `vit-r2` | vit-586l, vit-864l | Über dem Terrassentisch | Die Lichterkette hängt an der Vorderkante des hölzernen Pergola-Dachs und leuchtet in der Dämmerung über dem gedeckten Tisch. | Above the terrace table |
|  | `vit-r3` |  | Am Gartenzaun im Schnee | Entlang der Oberkante des Holzzauns hängt die Lichterkette neben dem verschneiten Weg und leuchtet in die Dämmerung. | On the fence in the snow |
| VLM | `vlm-r2` | vam, vlm | Am Verandageländer | In Bögen läuft die Lichterkette am hölzernen Verandageländer entlang und leuchtet in der Dämmerung über den Garten. | On the porch railing |
|  | `vlm-r3` |  | Auf der Gartenmauer | In eine Tannengirlande gewunden, liegt die Lichterkette auf der Steinmauer neben den frostigen Stufen und leuchtet in die Dämmerung. | On the garden wall |
| WWF | `wwf-r2` | wbf, wwf | Im Esszimmer | Der Birken-Lichterbaum steht am Abend neben dem gedeckten Holztisch im Esszimmer und sorgt für ruhiges Licht beim Essen. | In the dining room |
|  | `wwf-r3` |  | Auf der überdachten Terrasse | Auf der überdachten Holzterrasse steht der Lichterbaum neben Glastür und Liegestuhl und leuchtet in die Dämmerung. | On the covered terrace |

## 4. Sets

Erweitert am 18.11. von 18:47 bis 18:49 Uhr (`metaobjectUpdate`, 61 Aufrufe ohne Fehler), danach per API gelesen:
In allen 61 Sets stehen die beiden Blöcke an der geplanten Stelle, alle übrigen Blöcke in der alten Reihenfolge.

- **61 Sets** bekommen R2 und R3, und zwar **direkt hinter R1**. Ausnahme DFM, DFM 600 und SBLB: Dort steht die
  Kennzahl auf Leons Wunsch direkt hinter R1, R2 und R3 folgen dahinter.
- Damit ergibt sich zum Beispiel in Standard-Sets: B1, B2, R1, R2, R3, Kettenplan oder Zeitband, Icon-Grid; in
  Long-Tail-Sets: B1, (B2), R1, R2, R3, Kennzahl. Ohne Bild im Metafeld fallen R2 und R3 still weg.
- **Sets mit den Blöcken einer anderen Familie**, weil ihre Produkte dieselben Bilder zeigen oder bekommen sollen:
  `blm` (BLT, laut Teil B „BLT inkl. BLM“), `ctl` (CTL, laut Teil B nutzt CTL-EU das CTL-Set), `ol` und `ol-g40`
  (OLAG40, R1 dort ist schon `OLAG40_R1_01`), `tpm` (CTL, R1 dort ist `CTL_R1_01`), `vam` (VLM, R1 `VLM_R1_01`),
  `wbf` (WWF, R1 `WWF_R1_01`), `dfm-600` (DFM), `vit-586l` (VIT). Ob diese Produkte das Bild bekommen, entscheidet
  allein das Metafeld. Der Text beschreibt das Bild, er passt also, sobald das Bild da ist.
- **Ohne R2/R3:** `stt`, `ucp` und die drei Vorlagen, dafür gibt es keine Notion-Zeilen.
- **Reihenfolge der Arbeit:** erst das Theme live, dann die Sets. Mit dem alten Theme blieben die neuen Blöcke zwar
  ebenfalls unsichtbar, die internen IDs der Blöcke dahinter würden sich aber verschieben.
- Stand vorher gesichert: `docs/data/r2r3-sets-vorher.json` (61 Sets, Blocklisten).

## 5. Gegenprobe: Produkte ohne R2/R3 zeigen wie vorher

Abnahme für „ein Produkt ohne R2/R3 zeigt exakt wie heute“. Alle 118 aktiven Produktseiten live geladen, einmal vor
der Umstellung (17:56 bis 18:13 Uhr, altes Theme, alte Sets) und einmal danach (18:49 bis 19:06 Uhr, neues Theme,
Sets mit R2/R3), alle mit Status 200. Verglichen wurde die Feature-Sektion, nur die Versionsnummern der Bilddateien
(`?v=`) sind ausgeblendet.

- **Kein Produkt hat `feature_r2` oder `feature_r3`**, keine Seite zeigt eine Szene-Zeile, keine Seite einen
  Liquid-Fehler.
- **94 Seiten**, die in dieser Zeit niemand geändert hat: Zeichen für Zeichen gleich.
- **24 Seiten** hat die Asset-Instanz um 18:08 Uhr geändert (Auftrag 20: `feature_r1`, `feature_b1`, `feature_b2`
  an BLT, BLM, CTL Welle 2, CTL (M), DCT, DFM, OL-30/-50, OLAS14, SBLB, SOLM, VIT, NPT, DGM-001, DGM-048). Davon sind
  8 gleich, weil sie vor 18:08 schon geladen waren bzw. das neue Bild schon zeigten. Bei 16 zeigt R1 jetzt das neue
  Bild statt nur Text (bei DFM und SBLB löst sich dadurch das Paar aus R1 und Kennzahl). Nimmt man die R1-Zeile heraus,
  ist auch dort alles gleich.

Das R1-Bild dieser 16 Seiten kommt aus Auftrag 20 und ist nicht Teil dieses Auftrags. Es zeigt aber, dass die
Bild-Text-Zeile mit Daten aus einem Metafeld live funktioniert.

## 6. Vorschau Desktop und Mobil (offline)

Weil noch kein Produkt ein R2- oder R3-Bild hat, ist das eine Vorschau, keine Live-Aufnahme: die gespeicherte Live-Seite von `hp-olt-100`,
dazu R2 und R3 mit dem neuen Theme-Code gerendert, Bilder `OLT_R2_01` und `OLT_R3_01` aus dem Hermes-Eingang. Die
Live-Aufnahme am Testprodukt der Asset-Instanz folgt.

Blockfolge in der Vorschau: B1, B2 (Bild links), R1 (Bild rechts), R2 (Bild links), R3 (Bild rechts), Kettenplan,
Icon-Grid. Seitenverhältnis der Szenenbilder gemessen 1,778 (16:9).

- Desktop 1400 px: `docs/screenshots/2026-11-18-r2r3-vorschau/hp-olt-100_desktop.jpg`
- Mobil 390 px: `docs/screenshots/2026-11-18-r2r3-vorschau/hp-olt-100_mobil.jpg`

**Beobachtung:** R1 zeigt sein 16:9-Bild seit Schritt B im Rahmen 5:4, also seitlich beschnitten. R2 und R3 stehen
wie beauftragt in 16:9 und sind deshalb niedriger als die R1-Zeile darüber. Soll R1 ebenfalls 16:9 zeigen, ist das
eine Zeile CSS. Das ändert aber das Aussehen aller 87 Seiten mit R1-Bild und geht nur auf Leons Wort.

## 7. Push

Seit 17.11. arbeitet Git auf dem Arbeits-PC mit dem Konto `hermes-lc`. Dieses Konto hatte am Repo
`leonc0201/heipard-theme` nur Leserechte, der erste Push um 18:13 Uhr kam mit 403 zurück. Leon hat `hermes-lc` danach
eingeladen, Schreibrecht besteht seitdem. Push `7fe5884..ec1d6ae` um 18:46:17 Uhr, der GitHub-Sync hat die vier
Theme-Dateien um 18:46:22 und 18:46:23 übertragen, Prüfsummen gleich git.

## 8. Offen

- [x] Push, Prüfsummen, Sets erweitern, die 118 Seiten gegen die Ist-Aufnahme prüfen (18.11. abends).
- [ ] Abnahme am ersten Testprodukt der Asset-Instanz (nach Auftrag 21), Aufnahmen Desktop und Mobil live.
- [ ] Alt-Texte: Sobald die R2/R3-Dateien mit DE- und EN-Alt in Files liegen, das Blockfeld `alt` der 104 Blöcke
  füllen (DE aus Files, EN per Übersetzung). Ohne das zeigt `/en/` den deutschen Alt (Befund 16.11.).
- [ ] DCT-R3 und SBLB-R2/-R3: Text nach Freigabe des Bilds gegenprüfen.
- [ ] Frage an Leon: R1 auch in 16:9 (Abschnitt 6)?
- [ ] Für Teil B: DFM, DFM 600 und SBLB haben seit Auftrag 20 ein R1-Bild. Die Kennzahl steht damit nicht mehr als
  Paar neben R1, sondern allein zwischen R1 und R2. Ob R2 und R3 dort direkt hinter R1 rücken, klärt Teil B.

## Rückweg

- Theme: Commit `f06ed96` zurücknehmen.
- Sets (nach der Erweiterung): Blocklisten aus `docs/data/r2r3-sets-vorher.json` zurückschreiben.
- Blöcke: die 104 Metaobjekte aus `docs/data/r2r3-bloecke.json` löschen.
- Definitionen: `feature_r2` und `feature_r3` löschen (nur solange leer), in der Feature-Block-Definition `szene`,
  `r2` und `r3` aus den Auswahllisten nehmen.
