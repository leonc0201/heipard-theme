# Bericht: Teil C, Entscheidungen zu Teil B

Auftrag `heipard-theme-auftrag-teil-c.md` (Stand 19.11.2026). Stand dieses Berichts 19.11.2026, 11:20 Uhr. Vor jedem
Schreibzugriff `get-shop-info` = HeiPard. Nicht angefasst: Preise, Status, Bestand, Produktmedien, Files, Metafelder der
Produkte, Showroom-Logik.

## Kurzfassung

- **Abschnitt 1, `rmp-r1`:** Der G40-Satz ist weg (10:27 Uhr, DE und EN). Die Lichtfarbe steht in den Metafeldern von
  hp-rmp-180 (`lichtfarbe` Warmweiß, `farbtemperatur_kelvin` 2700), deshalb jetzt: „Der Lichterturm leuchtet warmweiß
  mit 2700 Kelvin.“
- **Abschnitt 2 bis 5:** 11 Widersprüche und alle 8 Hinweise aus Abschnitt 3 umgeschrieben (19 Blöcke), `ol-s11-b2` mit
  Längen-Fakt, eigener R1-Block für hp-dgm-048. Alles DE und EN (US), live seit 10:31 Uhr. Die übrigen zwei der 13
  Widersprüche: `rmp-r1` in Abschnitt 1, `blm-b2` („Teppich“) in Abschnitt 6, weil dort das Bild wechselt.
- **Abschnitt 6:** 14 Welle-2-Blöcke nach deinen Regeln entschieden, 3 Blöcke neu, 4 unverändert. Zwei zusätzliche
  Zeilen (DCT, NPT), sonst ersetzt. Dafür eine kleine Theme-Änderung (Commit `8c8f647`, live seit 10:35:14 Uhr). Shop
  live seit 10:39 Uhr.
- **Abschnitt 7:** Vorher alle 474 Bild-Text-Zeilen der 118 Seiten geprüft: alle 211 Bilder sind 16:9-Dateien, nichts wird beschnitten. Umgestellt mit einer CSS-Zeile (Commit `e867f9e`, live seit 10:58:50 Uhr), Sticky bleibt 5:4.
- **Gegenprobe:** alle 118 Seiten DE und EN zeigen B1, B2 und R1, 0 Fehler; geändert haben sich genau die Seiten aus Abschnitt 1 bis 6 (DE 57, EN 58), kein Block ist weggefallen.
- **Neu aufgefallen:** Auf hp-dct-200 ist das B2-Bild `DCT_B2_01` bildgleich mit dem Schieber-Bild `DCT_I1_01_an`, steht
  also zweimal auf der Seite. Ich habe deine ausdrückliche DCT-Entscheidung umgesetzt, nach Regel 1 und 3 wäre Ersetzen
  richtig. Entscheidung bei dir (Abschnitt 10).
- **Älterer Punkt, jetzt sichtbar:** Auf 17 EN-Seiten zeigt R1 den deutschen Alt der Datei (neun Welle-2-R1-Blöcke ohne
  Feld `alt`). Vorschlag in Abschnitt 10, Punkt 6.

## 1. Faktenfehler `rmp-r1` (hp-rmp-180)

| | vorher | nachher |
|---|---|---|
| Text DE | „Im Dunkeln soll das Licht einladen und nicht blenden. Die G40-Birnen leuchten warmweiß mit 2700 Kelvin.“ | „Im Dunkeln soll das Licht einladen und nicht blenden. Der Lichterturm leuchtet warmweiß mit 2700 Kelvin.“ |
| EN | keine (Text blieb deutsch) | „Warm light / Cozy, not harsh / In the dark, the light should feel inviting, not glaring. The light tower glows warm white at 2700 Kelvin.“ |

Quelle der Lichtfarbe: Produkt-Metafelder `heipard.lichtfarbe` = Warmweiß und `heipard.farbtemperatur_kelvin` = 2700.
Der Produkttext ist leer. Kicker „Warmes Licht“, Überschrift „Gemütlich statt grell“ und Bezeichnung „RMP · R1 2700
Kelvin“ passen weiter. Live geprüft DE und EN um 10:34 Uhr.

## 2. bis 5. Texte (DE und EN)

Je Block nur die geänderten Felder. Jeder geänderte Block hat jetzt Kicker, Überschrift und Text auch auf Englisch.
Bei drei R1-Blöcken ohne eigenes Alt-Feld (`npt-r1`, `vit-r1`, `solm-r1`) habe ich das Feld `alt` aus dem Alt der Datei
in Files gefüllt (DE und EN), damit `/en/` nicht den deutschen Datei-Alt zeigt.

| Abschnitt | Block (Bild) | Seiten | vorher | nachher | Begründung |
|---|---|---|---|---|---|
| 2 | `uct-r1` (`UCT_R1_01`) | hp-uct-200-eu | Kicker: „Am Fenster“<br>Überschrift: „Eine leere Scheibe wird zum Blickfang“<br>Text: „Abends fallen die Lichtstränge vor dem Fenster senkrecht nach unten. Der Vorhang misst 3 x 2 m mit 200 LEDs.“ | Kicker: „In der Pergola“<br>Überschrift: „Abends ein Blickfang im Garten“<br>Text: „In der offenen Seite der Pergola fallen die Lichtstränge senkrecht nach unten. Der Vorhang misst 3 x 2 m mit 200 LEDs.“ | Bild zeigt die Lichtwand in einer Pergola hinter dem Gartentisch, kein Fenster; Text wie ucp-r1 (gleiches Bild). |
| 2 | `bsm-r1` (`BSM_R1_01`) | hp-bsm-002 | Text: „Ein Hirsch hängt im Fenster, der andere an der Tür. Die Deko kommt als 2er-Set.“ | Text: „Ein Hirsch hängt im Flur über dem Sideboard, der zweite findet einen eigenen Platz. Die Deko kommt als 2er-Set.“ | Bild: ein Hirsch an der Flurwand über dem Sideboard. „der zweite“ laut Lieferumfang hp-bsm-002 „1 × LED-Hängedeko Hirsch, 2er-Set“. |
| 2 | `npt-r1` (`NPT_R1_01`) | hp-npt-210 | Überschrift: „Mal gedämpft zum Film, mal hell für Besuch“<br>Text: „Abends vor dem Fernseher reicht oft ein schwaches Glimmen an der Wand. Du dimmst das Netz in vier Stufen und wählst zwischen 8 Leuchtmodi.“ | Überschrift: „Mal gedämpft, mal hell für Besuch“<br>Text: „Spät am Abend reicht an der Gartenmauer oft ein schwaches Glimmen. Du dimmst das Netz in vier Stufen und wählst zwischen 8 Leuchtmodi.“ | Bild: Netz über einer Natursteinmauer im Garten, kein Fernseher. |
| 2 | `dpm-r1` (`DPM_R1_01`) | hp-dpm-300 | Text: „Zur Feier darf es strahlen, beim Fernsehen reicht ein Glimmen. Du dimmst in vier Stufen und wählst zwischen 8 Leuchtmodi.“ | Text: „Zur Feier darf es strahlen, spät am Abend reicht ein Glimmen im Vorgarten. Du dimmst in vier Stufen und wählst zwischen 8 Leuchtmodi.“ | Bild: Baum im Vorgarten vor dem Haus, kein Fernsehen. |
| 2 | `rct-r1` (`RCT_R1_01`) | hp-rct-400 | Überschrift: „Auch am Balkonfenster gut aufgehoben“<br>Text: „An einer feuchten Scheibe bekommt der Vorhang auch mal Wasser ab. Nach IP44 ist er gegen Spritzwasser geschützt.“ | Überschrift: „Hinter dem Sofa wie am Balkonfenster“<br>Text: „Hinter dem Sofa wird der Vorhang zur bunten Lichtwand. Am Balkonfenster bekommt er auch mal Wasser ab, nach IP44 ist er gegen Spritzwasser geschützt.“ | Bild: bunter Vorhang an der Wohnzimmerwand hinter dem Sofa; Balkonfenster bleibt als genannte Möglichkeit, IP44 bleibt. |
| 2 | `rfm-r1` (`RFM_R1_01`) | hp-rfm-600 | Überschrift: „Bleibt hängen, wenn es nieselt“<br>Text: „Am Balkon bekommt die Kette auch mal Regen ab. Nach IP44 ist sie gegen Spritzwasser geschützt.“ | Überschrift: „Drinnen am Geländer, draußen am Balkon“<br>Text: „Im Treppenhaus schmückt die Kette das Geländer. Am Balkon bekommt sie auch mal Regen ab, nach IP44 ist sie gegen Spritzwasser geschützt.“ | Bild: Kette am Geländer einer Innentreppe; Balkon bleibt als Möglichkeit (Einsatzbereich Innen & Außen), IP44 bleibt. |
| 2 | `vit-r1` (`VIT_R1_01`) | hp-vit-586l-eu-1, hp-vit-864l-eu-1 | Text: „Wenn die Kette an der Dachkante hängt, kommst du schlecht an sie heran. Leuchtmodus und Helligkeit stellst du deshalb mit der mitgelieferten Fernbedienung ein.“ | Text: „Hängt die Kette am Balkongeländer oder an der Dachkante, kommst du schlecht an sie heran. Leuchtmodus und Helligkeit stellst du deshalb mit der mitgelieferten Fernbedienung ein.“ | Bild: Eisregen am Balkongeländer; Dachkante bleibt als Möglichkeit. |
| 2 | `solm-r1` (`SOLM_R1_01`) | hp-solm-12m-ww | Überschrift: „Fest montiert an Wand oder Zaun“ | Überschrift: „Ein fester Platz für das Panel“ | Bild: Panel auf einem Erdspieß am Hochbeet, keine Wand, kein Zaun. Text (Wandhalterung) bleibt. |
| 2 | `ol-st38-r1` (`OLST38_R1_01`) | hp-ol-st38-15, hp-ol-st38-25, hp-ol-st38-30, hp-ol-st38-50 | Text: „Am Tisch soll das Licht einladen statt zu stören. Je nach Modell leuchten die Birnen mit 2200 oder 2700 Kelvin.“ | Text: „Im Hof soll das Licht einladen statt zu stören. Je nach Modell leuchten die Birnen mit 2200 oder 2700 Kelvin.“ | Bild: gepflasterter Innenhof mit Fahrrad, kein Tisch. |
| 2 | `olt-r1` (`OLT_R1_01`) | hp-olt-100, hp-olt-150, hp-olt-200, hp-olt-300-eu, hp-olt-400, hp-olt-600, hp-olt-800 | Text: „Im Winter beginnt der Abend früh und soll gemütlich sein. Jede Länge leuchtet warmweiß, den Strom liefert ein Netzteil.“ | Text: „An der Gartentreppe soll es abends gemütlich sein. Jede Länge leuchtet warmweiß, den Strom liefert ein Netzteil.“ | Bild: Gartentreppe im Sommer mit blühenden Stauden, kein Winter. |
| 2 | `rgb-b2` (`RGB_B2_01`) | hp-rgb-200a, hp-rgb-300a, hp-rgb-500a | Überschrift: „Lichtpunkte dicht an dicht“<br>Text: „Damit die Farben wie ein Band wirken, sitzen die LEDs eng beieinander. Der Abstand beträgt 10 cm, je nach Länge leuchten 200, 300 oder 500 LEDs.“ | Überschrift: „Bunte Punkte am Handlauf“<br>Text: „Um den Handlauf gewickelt, setzen die LEDs bunte Punkte im Abstand von 10 cm. Je nach Länge leuchten 200, 300 oder 500 LEDs.“ | Bild: um den Handlauf gewickelte Kette, LEDs deutlich einzeln, kein Band. |
| 3 | `ola-g40-r1` (`OLAG40_R1_01`) | hp-ola-g40-15-eu, hp-ola-g40-27-eu, hp-ola-g40-42-eu | Überschrift: „Hell beim Essen, sanft am Feuer“ | Überschrift: „Hell beim Essen, sanft danach“ | Kein Feuer im Bild (Gartentisch mit zwei Stühlen). |
| 3 | `scwl-b2` (`SCWL_B2_01`) | hp-scwl-10m2p-mc, hp-scwl-15m2p-mc | Text: „Am Terrassenpfosten und am Strauch soll es gleichzeitig leuchten. Die Kette kommt als 2er-Set.“ | Text: „Am Terrassenpfosten und an einem zweiten Platz soll es gleichzeitig leuchten. Die Kette kommt als 2er-Set.“ | Im Bild nur der Pfosten, kein Strauch. |
| 3 | `scwl-r1` (`SCWL_R1_01`) | hp-scwl-10m2p-mc, hp-scwl-15m2p-mc | Text: „Am Strauch verteilt sich das Licht auf zahlreiche kleine Punkte. Die LEDs sitzen im Abstand von 10 cm.“ | Text: „In den Zweigen verteilt sich das Licht auf zahlreiche kleine Punkte. Die LEDs sitzen im Abstand von 10 cm.“ | Im Bild ein Olivenbäumchen im Kübel, kein Strauch. |
| 3 | `uct-b1` (`UCT_B1_01`) | hp-uct-200-eu | Text: „Unter dem Vordach bekommt der Vorhang Regen von der Seite ab. Nach IP44 ist er gegen Spritzwasser geschützt.“ | Text: „Auf dem überdachten Balkon leuchtet der Vorhang an der Wand, auch wenn mal Regen hereinweht. Nach IP44 ist er gegen Spritzwasser geschützt.“ | Bild: überdachter Balkon ohne Regen, kein Vordach. |
| 3 | `wwf-b1` (`WWF_B1_01`) | hp-wwf-180 | Text: „Neben dem Kamin oder am Hauseingang bringt die Birke abends Licht. Nach IP44 ist sie gegen Spritzwasser geschützt.“ | Text: „Neben dem Sofa bringt die Birke abends Licht, und auch am Hauseingang darf sie stehen. Nach IP44 ist sie gegen Spritzwasser geschützt.“ | Bild: Sofa und Regal, kein Kamin; Hauseingang bleibt als ausdrücklich genannte Möglichkeit (Einsatzbereich Innen & Außen). |
| 3 | `dgm-w1-b1` (`DGM002_B1_01`) | hp-dgm-002 | Text: „Am Abend stehen die Stecker links und rechts vom Weg und führen bis zur Haustür. Sie sind für den Einsatz im Freien gedacht.“ | Text: „Am Abend stehen die Stecker im Schnee am Weg zur Haustür. Sie sind für den Einsatz im Freien gedacht.“ | Im Bild drei Stecker nebeneinander auf einer Seite des Wegs. |
| 3 | `ol-b1` (`OLG40_B1_01`) | hp-ol-100, hp-ol-15, hp-ol-15-g, hp-ol-25, hp-ol-75 | Überschrift: „Licht über dem Tisch, wenn es dunkel wird“<br>Text: „Wenn Freunde bis in die Nacht bleiben, hängt die Kette über Tafel und Bänken. Je nach Länge trägt sie 15 bis 100 Birnen.“ | Überschrift: „Licht im Garten, wenn es dunkel wird“<br>Text: „Wenn Freunde bis in die Nacht bleiben, leuchtet die Kette über dem Garten hinter Tisch und Bank. Je nach Länge trägt sie 15 bis 100 Birnen.“ | Die Kette hängt im Bild hinter dem Tisch über dem Garten, nicht über Tafel und Bänken. |
| 3 | `ola-g40-b1` (`OLG40_B1_01`) | hp-ola-g40-15-eu, hp-ola-g40-27-eu, hp-ola-g40-42-eu | Text: „Über der Terrasse hängen die runden Birnen auch, wenn es nieselt. Nach IP44 ist die Kette gegen Spritzwasser geschützt.“ | Text: „Über dem Garten hängen die runden Birnen auch, wenn es nieselt. Nach IP44 ist die Kette gegen Spritzwasser geschützt.“ | Die Kette hängt im Bild über dem Garten hinter der Terrasse. |
| 5 | `ol-s11-b2` (`OLS11_B2_02`) | hp-ol-s11-15, hp-ol-s11-25, hp-ol-s11-30, hp-ol-s11-50 | Kicker: (leer)<br>Text: „Aus der Nähe leuchtet die bernsteinfarbene Birne am schwarzen Kabel, dahinter schimmern die nächsten Birnen vor der Pergola in der Dämmerung.“ | Kicker: „Vier Längen“<br>Text: „Aus der Nähe leuchtet die bernsteinfarbene Birne am schwarzen Kabel, dahinter schimmern die nächsten Birnen vor der Pergola in der Dämmerung. Die Kette gibt es von 10 m mit 15 Birnen bis 30 m mit 50 Birnen.“ | Produktdaten: hp-ol-s11-15 beleuchtet 10 m/15 Birnen, -25 15 m/25, -30 beleuchtet 20 m/30, -50 30 m/50. „Die Kette gibt es …“ statt „Es gibt sie …“, weil „sie“ direkt hinter „Birnen“ auf die Birnen zeigen würde. |

**Fakten und [prüfen]:**

- `bsm-r1`: „der zweite“ steht nur, weil der Lieferumfang von hp-bsm-002 „1 × LED-Hängedeko Hirsch, 2er-Set“ lautet
  (Titel „… String 2 Verkauf“). Kein [prüfen] nötig.
- `ol-s11-b2`: Längen gegen die vier Produkte gelesen: hp-ol-s11-15 beleuchtet 10 m mit 15 Birnen, -25 15 m mit 25,
  -30 beleuchtet 20 m mit 30, -50 30 m mit 50. „Vier Längen“ und „von 10 m mit 15 Birnen bis 30 m mit 50 Birnen“
  stimmen. Ich habe „Die Kette gibt es …“ statt „Es gibt sie …“ geschrieben, weil „sie“ direkt hinter „Birnen“ auf die
  Birnen zeigen würde.
- **[prüfen] `ols-a60-r1`** (hp-ols-a60-16-eu): Text bleibt, „an der 6,5 m langen Kette hängen 16 Birnen“ stimmt mit den
  Produktdaten. Das Bild `OLSA60_R1_01` zeigt deutlich mehr Birnen als eine Kette hat.
- **[prüfen] `solm-r1`** (hp-solm-12m-ww): Das Bild zeigt das Panel auf einem Erdspieß am Hochbeet. Laut Lieferumfang
  liegen nur „1 × Solar-Lichterkette, 1 × Wandhalterung, 1 × Bedienungsanleitung“ bei, kein Erdspieß. Der Text nennt
  nur die Wandhalterung und stimmt. Ob das Bild bleiben soll, entscheidest du.
- `baum-pvc-b1` bleibt (nennt den Hauseingang ausdrücklich als Möglichkeit).

**Abschnitt 4, hp-dgm-048:** neuer Block `dgm-w1-048-r1` (ID 500998570317) im Set `dgm-w1-048` an Stelle von
`dgm-w1-r1`. Text wie `dgm-w1-r1`, Kicker „Viele Lichtpunkte“ → „Leuchtet von innen“ (die Boxen leuchten flächig durch
die Hülle), Alt von `DGM048_R1_01` (DE und EN). `dgm-w1-r1` bleibt unverändert im Set von hp-dgm-002. Nebenbefund ohne
Änderung: Der Lieferumfang von hp-dgm-048 lautet „1 × LED-Gartenstecker“, das Produkt sind laut Titel zwei Geschenkboxen.

## 6. Welle-2-Blöcke (Liste aus Teil B, Abschnitt 4)

### 6.1 Theme: Zusatzzeile

Commit `8c8f647`, live seit 10:35:14 Uhr (Prüfsummen der drei Dateien gleich git):

- Block-Typ `szene` ohne Variante r2/r3 ist eine **Zusatzzeile**: Bild am Block, eigene Überschrift und Text, gerendert
  als Bild-Text-Zeile (Klasse `heipard-feature__row--zusatz`, Format wie B2, Alt wie R1). Ohne Bild kein Markup.
- Zählt wie R2/R3 nicht zum Block-Limit und verdrängt nichts. Höchstens zwei je Seite, weitere fallen mit Hinweis im
  Editor weg. Die Seite wechselt weiter ab.
- Die Auswahlliste des Felds `variant` habe ich nicht erweitert (Metaobjekt-Definition bleibt), deshalb „ohne Variante“.
- Lokal mit liquidjs getestet (Szene r2 mit Metafeld, r3 ohne Metafeld, Zusatz mit und ohne Bild), Theme-Check ohne
  Befund in den drei Dateien.

### 6.2 Je Block

Alle ersetzten Bilder: Bild am Block entfernt, dann greift das Metafeld (`feature_b1` bzw. `feature_b2`, Rückfall aus
Teil B). Feld `alt` aus dem Alt der Datei in Files (DE und EN). Bei `CTL_B2_02`, `DFM_B1_01` und `SBLB_B1_01` fehlt der
EN-Alt in Files, dort steht vorerst meine Übersetzung (Abschnitt 10).

| Block | Seiten | Regel | Entscheidung | Begründung | Bild vorher → nachher | Text vorher | Text nachher |
|---|---|---|---|---|---|---|---|
| `dct-b1` | hp-dct-200 | 6 (DCT-Muster) | ersetzt | Altes und neues Bild zeigen beide den Vorhang an der Pergola; Text aus Vorschau (b). Der Regen bleibt über den Sticky-Block (DCT_B2_08). | `DCT_B1_01` → `DCT_B1_02` | Text: „Unter der Pergola leuchtet der Vorhang weiter, auch wenn der Regen von der Seite hereinweht. Nach IP44 ist er gegen Spritzwasser aus allen Richtungen geschützt.“ | Text: „Unter der Pergola leuchtet der Vorhang über der Terrasse. Nach IP44 ist er gegen Spritzwasser aus allen Richtungen geschützt.“ |
| `npt-b1` | hp-npt-210 | 6 (B1) | ersetzt, keine Zusatzzeile | Zeigen Verschiedenes (Busch gegen gekoppelte Netze an der Gartenhauswand). Das neue Bild ist besser und wird Banner; der Busch bleibt über den Sticky-Block (NPT_B2_06, gleiche Szene), deshalb keine Zusatzzeile. | `NPT_B1_01` → `NPT_B1_03` | Kicker: „Busch und Hecke“<br>Überschrift: „Kein Wickeln um jeden Zweig“<br>Text: „Im Vorgarten legst du das Netz einfach über den Busch und ziehst es zurecht. Auf 3 x 2 m verteilen sich rund 200 Lichtpunkte.“ | Kicker: „Koppelbar“<br>Überschrift: „Eine ganze Wand voller Licht“<br>Text: „An der Wand des Gartenhauses hängen zwei gekoppelte Netze nebeneinander und ergeben ein durchgehendes Lichtraster. Jedes misst 3 x 2 m mit rund 200 Lichtpunkten.“ |
| `olas14-b1` | hp-ola-s14-15-eu, hp-ola-s14-30-eu, hp-ola-s14-50-eu | 6 (B1) | ersetzt, keine Zusatzzeile | Zeigen Verschiedenes (Garten zwischen zwei Häusern gegen Tafel auf der Terrasse). Das neue Bild ist besser und wird Banner; die alte Szene bleibt über B2 und Steuerung (OLAS14_B2_01, derselbe Garten). | `OLAS14_B1_01` → `OLAS14_B1_02` | Überschrift: „Lang genug, um den ganzen Garten zu überspannen“<br>Text: „Zwischen zwei Häusern gespannt, hängen die Birnen über Terrasse, Rasen und Pool. Die Kette gibt es mit 10, 20 oder 30 m Gesamtlänge.“ | Überschrift: „Lang genug für die ganze Tafel“<br>Text: „Zwischen Hauswand und Pfosten gespannt, hängen die Birnen in Bögen über dem langen Holztisch. Die Kette gibt es mit 10, 20 oder 30 m Gesamtlänge.“ |
| `vit-b1` | hp-vit-586l-eu-1, hp-vit-864l-eu-1 | 6 (B1) | ersetzt, keine Zusatzzeile | Zeigen Verschiedenes (Gartenparty an der Pergola gegen Dachkante). Das neue Bild zeigt das Produkt deutlich und wird Banner; die Pergola über dem gedeckten Tisch zeigt schon R2 (VIT_R2_01). | `VIT_B1_01` → `VIT_B1_02` | Kicker: „Draußen feiern“<br>Text: „Bei der Gartenparty hängen die Stränge von der Pergola über den Hortensien. Nach IP44 ist die Kette gegen Spritzwasser aus allen Richtungen geschützt.“ | Kicker: „Für draußen“<br>Text: „Entlang der Dachkante zieht sich das Licht über die ganze Hausfront. Nach IP44 ist die Kette gegen Spritzwasser aus allen Richtungen geschützt.“ |
| `blt-b1` | hp-blt-050, hp-blt-100-eu-1 | 2 (Kategoriebild) | ersetzt | Das Kategoriebild KAT-LED_B1_01 zeigt nicht dieses Produkt. | `KAT-LED_B1_01` → `BLT_B1_01` | Text: „Über dem Gartentisch ist selten eine Steckdose in Reichweite. Die Kette läuft mit Batterien bei 4,5 V und hängt deshalb, wo es dir gefällt.“ | Text: „Am Balkongeländer ist selten eine Steckdose in Reichweite. Die Kette läuft mit Batterien bei 4,5 V und hängt deshalb, wo es dir gefällt.“ |
| `blm-b1` | hp-blm-100-eu | 2 (Kategoriebild) | ersetzt | Das Kategoriebild KAT-LED_B1_01 zeigt nicht dieses Produkt (Kugelbirnen-Kette). | `KAT-LED_B1_01` → `BLT_B1_01` | Text: „Über dem Gartentisch ist die nächste Steckdose meist zu weit weg. Die Kette läuft mit Batterien und ist nach IP44 auch draußen gegen Spritzwasser geschützt.“ | Text: „Am Balkongeländer ist die nächste Steckdose meist zu weit weg. Die Kette läuft mit Batterien und ist nach IP44 auch draußen gegen Spritzwasser geschützt.“ |
| `blt-b2` | hp-blt-050, hp-blt-100-eu-1 | 3 (Bild steht im Schieber) | ersetzt | BLT_B2_01 bleibt im Schieber (blt-schieber) auf der Seite, die Seite gewinnt ein Motiv. | `BLT_B2_01` → `BLT_B2_03` | Text: „Für den Tisch reichen 5 m, für die Pergola über der Gartenparty eher 20 m. Die Kette gibt es in 5, 10, 15 und 20 m mit 50 bis 200 LEDs.“ | Text: „Für die Vase auf dem Regal reichen 5 m, für die Pergola über der Gartenparty eher 20 m. Die Kette gibt es in 5, 10, 15 und 20 m mit 50 bis 200 LEDs.“ |
| `blm-b2` | hp-blm-100-eu | 3 (Bild steht im Schieber) | ersetzt | BLM_B2_01 (Kinder) bleibt im Schieber (blm-schieber) auf der Seite. Damit ist auch der Widerspruch „Teppich“ aus Abschnitt 2 erledigt. | `BLM_B2_01` → `BLT_B2_03` | Text: „Die Kinder legen die Kette auf dem Teppich aus, bevor sie ihren Platz findet. Es gibt sie mit 100 LEDs auf 10 m oder mit 150 LEDs auf 15 m.“ | Text: „In der Glasvase auf dem Regal wird die Kette zum kleinen Lichtobjekt. Es gibt sie mit 100 LEDs auf 10 m oder mit 150 LEDs auf 15 m.“ |
| `ctl-b1` | hp-ctl-210-eu-1, hp-ctl-400-eu-1 | 2 (Kategoriebild) | ersetzt; ctl-m bekommt eigenen Block ctl-m-b1 | Das Kategoriebild KAT-CTL_B1_01 zeigt eine gewickelte Kette, keinen Baummantel. Der Text passt zu CTL_B1_01 und CTLM_B1_01, der Alt nicht: deshalb für CTLM ein eigener Block mit gleichem Text. | `KAT-CTL_B1_01` → `CTL_B1_01` | Text: „Im dunklen Wohnzimmer neben dem Sessel ist die Tanne abends der Blickfang. Je nach Modell sitzen 180 bis 400 LEDs auf den Strängen.“ | Text: „Am Abend fallen die Stränge von der Spitze über die ganze Tanne und machen sie zum Blickfang. Je nach Modell sitzen 180 bis 400 LEDs auf den Strängen.“ |
| `ctl-b2` | hp-ctl-210-eu-1, hp-ctl-400-eu-1 | 5 (CTL-EU) | ersetzt, Text bleibt | Ring und Stränge sind im alten Bild nicht zu erkennen; im neuen Bild sitzt der Ring sichtbar auf der Spitze, der Text passt unverändert. | `CTL_B2_01` → `CTL_B2_02` | Text unverändert | Text unverändert |
| `ctl-m-b2` | hp-ctl-180m, hp-ctl-240m | 3 (Bild steht in der Steuerung) | ersetzt | CTL_I4_01_mc bleibt in der Steuerung (ctl-m-steuerung) auf der Seite, die Seite gewinnt ein Motiv. | `CTL_I4_01_mc` → `CTLM_B2_01` | Überschrift: „Leuchtet am Sessel und vor der Haustür“<br>Text: „Steht die Tanne draußen, bekommt sie Regen und Schnee ab. Nach IP44 ist die Kette gegen Spritzwasser geschützt, und dank 3 m Zuleitung darf die Steckdose ein Stück entfernt sein.“ | Überschrift: „Ring auf die Spitze, Stränge über die Zweige“<br>Text: „Der Ring sitzt auf der Baumspitze, von dort fallen die bunten Stränge über die Zweige. Steht die Tanne draußen, ist die Kette nach IP44 gegen Spritzwasser geschützt, und dank 3 m Zuleitung darf die Steckdose ein Stück entfernt sein.“ |
| `dfm-b1` | hp-dfm-400-eu-2, hp-dfm-600, hp-dfm-750-eu | 2 (Kategoriebild) | ersetzt | Das Kategoriebild KAT-CLUSTER_B1_01 zeigt nicht dieses Produkt. | `KAT-CLUSTER_B1_01` → `DFM_B1_01` | Text: „Um Stamm und Äste gewickelt, zeichnet die Kette jede Form des Gartenbaums nach. Je nach Länge sitzen 400 bis 1500 LEDs dicht an dicht.“ | Text: „Um den Weihnachtsbaum im Wohnzimmer gewickelt, leuchtet die Kette zwischen den Zweigen. Je nach Länge sitzen 400 bis 1500 LEDs dicht an dicht.“ |
| `sblb-b1` | hp-sblb-60l-ww-new, hp-sblb-100l-ww-new | 2 (Kategoriebild) | ersetzt, Text bleibt | Das Kategoriebild KAT-SOLAR_B1_01 zeigt nicht dieses Produkt. Im neuen Bild steht das Panel im Beet, der Text passt unverändert. | `KAT-SOLAR_B1_01` → `SBLB_B1_01` | Text unverändert | Text unverändert |
| `sblb-b2` | hp-sblb-60l-ww-new, hp-sblb-100l-ww-new | 1 und 3 (Bild steht im Schieber) | ersetzt, keine Zusatzzeile | SBLB_B2_01 ist bildgleich mit dem Schieber-Bild SBLB_I1_01_an (Pixelvergleich 0,0): Das Bild stand schon zweimal auf der Seite und bleibt über den Schieber erhalten. Deshalb Regel 3 statt einer Zusatzzeile. | `SBLB_B2_01` → `SBLB_B2_03` | Kicker: „Für den Sitzplatz“<br>Überschrift: „Elf Meter reichen über die ganze Terrasse“<br>Text: „60 Kristallkugeln auf 11 m oder 100 auf 17 m, die Kugeln streuen das Licht weich über Tisch und Stühle.“ | Kicker: „Kristallkugeln“<br>Überschrift: „Weiches Licht aus jeder Kugel“<br>Text: „Aus der Nähe streut jede Kristallkugel ihr Licht weich über die Hecke. Es gibt 60 Kugeln auf 11 m oder 100 auf 17 m.“ |
| `dct-b2` | | 6 (DCT-Muster) | bleibt, DCT_B2_17 als Zusatzzeile dahinter | Das alte Bild zeigt das ganze Wohnzimmerfenster mit den Größenangaben, das neue die Stränge aus der Nähe (deine Entscheidung). Hinweis: DCT_B2_01 ist bildgleich mit dem Schieber-Bild DCT_I1_01_an. | unverändert | | |
| `npt-b2` | | 6 | bleibt, NPT_B2_08 als Zusatzzeile dahinter | Das alte Bild zeigt das bunte Netz am Wohnzimmerfenster, das neue die Masche über einem Strauch aus der Nähe (drinnen gegen draußen, Übersicht gegen Detail). | unverändert | | |
| `olas14-b2` | | 4 | nichts | OLAS14_B2_02 steht schon im Sticky-Block. | unverändert | | |
| `vit-b2` | | 4 | nichts | VIT_B2_06 steht schon im Sticky-Block. Hinweis: VIT_B2_01 ist bildgleich mit dem Schieber-Bild VIT_I1_02_an. | unverändert | | |

**Neue Blöcke:**

| Block | Seiten | Typ | Bild | Kicker | Text | Fakt |
|---|---|---|---|---|---|---|
| `dct-b2-zusatz` (neu) | hp-dct-200 | szene | `DCT_B2_17` | ohne | Überschrift: „Stränge aus der Nähe“<br>Text: „Aus der Nähe hängen die Lichtstränge auf ihrem transparenten Kabel vor der dunklen Holzwand und leuchten in den Abend. Dank 3 m Zuleitung darf die Steckdose ein Stück entfernt sein.“ | hp-dct-200: heipard.zuleitung_m = 3.0 |
| `npt-b2-zusatz` (neu) | hp-npt-210 | szene | `NPT_B2_08` | ohne | Überschrift: „Kein Wickeln um jeden Zweig“<br>Text: „Aus der Nähe liegt das Netz locker über dem immergrünen Strauch, die Lichtpunkte sitzen an den Knoten der Maschen. Du legst es einfach über Hecke oder Busch und ziehst es zurecht.“ | kein neuer Fakt; Überschrift und letzter Satz aus dem alten Text von npt-b1 (Busch), der mit dem neuen Banner wegfällt |
| `ctl-m-b1` (neu) | hp-ctl-180m, hp-ctl-240m | fullwidth | `CTLM_B1_01` | Für den Weihnachtsbaum | Überschrift: „Der Baum leuchtet von oben bis unten“<br>Text: „Am Abend fallen die Stränge von der Spitze über die ganze Tanne und machen sie zum Blickfang. Je nach Modell sitzen 180 bis 400 LEDs auf den Strängen.“ | Text wie ctl-b1, Bild aus feature_b1 (CTLM_B1_01) |

**Zur Wahl des Banners bei B1 (NPT, OLAS14, VIT):** In allen drei Fällen zeigt das neue Bild etwas anderes als das alte.
Banner ist das neue Bild: Es zeigt das Produkt klarer, und das alte Motiv steht schon an anderer Stelle der Seite (NPT:
Sticky `NPT_B2_06` zeigt denselben Busch; OLAS14: B2 und Steuerung `OLAS14_B2_01` zeigen denselben Garten; VIT: R2 zeigt
die Pergola über dem gedeckten Tisch). Eine Zusatzzeile mit dem alten Bild hätte also nur aufgefüllt. Dazu kommt das
Format: Die alten B1-Dateien sind 21:9 und würden in einer Bild-Text-Zeile stark beschnitten.

**SBLB B2 (Regel 1 und 3 statt 6):** `SBLB_B2_01` ist bildgleich mit dem Schieber-Bild `SBLB_I1_01_an` (Pixelvergleich,
mittlere Abweichung 0,0). Das Bild stand also schon zweimal auf der Seite, und es bleibt über den Schieber erhalten.
Deshalb habe ich `sblb-b2` ersetzt statt eine Zusatzzeile anzuhängen. Damit gewinnt die Seite ein Motiv und verliert keins.

**DCT B2 (deine Entscheidung, mit Hinweis):** Dieselbe Lage wie bei SBLB: `DCT_B2_01` ist bildgleich mit
`DCT_I1_01_an` (mittlere Abweichung 0,1). Umgesetzt habe ich deine DCT-Vorgabe (altes Bild bleibt, `DCT_B2_17` als
Zusatzzeile). Damit steht das Wohnzimmerfenster zweimal auf der Seite, einmal in B2 und einmal im Schieber. Nach Regel 1
und 3 wäre Ersetzen richtig. Vorschlag und Rückweg in Abschnitt 10.

**Geteilter Block `ctl-b1`:** Der neue Text passt zu beiden Bildern (`CTL_B1_01` Wohnzimmer, `CTLM_B1_01` verschneiter
Vorgarten, beide abends mit Strängen von der Spitze). Das Feld `alt` kann aber nur ein Bild beschreiben. Deshalb hat
`ctl-m` jetzt einen eigenen Block `ctl-m-b1` mit gleichem Text und dem Alt von `CTLM_B1_01`, Set `ctl-m` an erster
Stelle.

**Schieber und Steuerung** behalten ihre Bilder (`blt-schieber`, `blm-schieber`, `ctl-m-steuerung`, `olas14-steuerung`).

**Alt-Abgleich (Asset-Instanz, Auftrag 23):** EN-Alt im Blockfeld von `dfm-b2` und `dgm-b2` jetzt wortgleich mit dem
neuen EN-Alt in Files.

### 6.3 Aufnahmen je Familie

Desktop 1400 px, von B1 bis R3, aufgenommen um 10:40 bis 10:46 Uhr, also vor der Formatumstellung
(`docs/screenshots/2026-11-19-teil-c/`): `a6_dct_desktop.jpg`, `a6_npt_desktop.jpg`, `a6_olas14_desktop.jpg`,
`a6_vit_desktop.jpg`, `a6_blt_desktop.jpg`, `a6_blm_desktop.jpg`, `a6_ctl-eu_desktop.jpg`, `a6_ctlm_desktop.jpg`,
`a6_dfm_desktop.jpg`, `a6_sblb_desktop.jpg`.

## 7. Format der Bild-Text-Zeilen: Fassung 2 (16:9)

### 7.1 Prüfung vor der Umstellung

- Grundlage: Aufnahme aller 118 Seiten DE von 10:39 bis 10:57 Uhr, also nach Abschnitt 6 (ersetzte Bilder und beide
  Zusatzzeilen schon enthalten).
- Betroffen sind alle Bild-Text-Zeilen außer Sticky: **474 Zeilen** (118 B2, 118 R1, 236 Szene R2/R3, 2 Zusatzzeilen)
  mit **211 verschiedenen Bildern** (54 in B2, 51 in R1, 104 in R2/R3, 2 in Zusatzzeilen).
- Seitenverhältnis je Bild aus den Maßen, die der Shop in den Bild-Tag schreibt (Datei auf 1400 px skaliert): **alle 211
  Bilder 1400 x 788, also 16:9.** Stichprobe der Originale in Files, auch der älteren Welle-2-Bilder (`DCT_B2_01`,
  `NPT_B2_01`, `OLAS14_B2_01`, `VIT_B2_01`, `CTL_B2_03`, `RGB_B2_01`, `OLT_R1_01`, `DCT_B2_17`): je 2048 x 1152.
- **Bilder, die keine 16:9-Dateien sind: keine.** Im 16:9-Rahmen fällt deshalb nichts weg, kein Produktteil und kein im
  Text genanntes Motiv. Im bisherigen 5:4-Rahmen fehlten links und rechts zusammen knapp 30 % jedes Bilds.
- Liste je Seite, Zeile und Bild: `docs/data/teilc-format.json`.

### 7.2 Umstellung

Commit `e867f9e`, live seit 10:58:50 Uhr (Prüfsumme gleich git). Eine CSS-Regel in `assets/heipard-feature.css`
ersetzt die bisherige Szene-Regel:

```css
.heipard-feature__row:not(.heipard-feature__row--sticky) .heipard-feature__media { aspect-ratio: 16 / 9; }
```

Sticky bleibt 5:4, B1 bleibt 21:9 (mobil 4:3). Keine Ausnahmen nötig.

### 7.3 Aufnahmen (nach der Umstellung)

Im Browser gemessen: B2, Zusatzzeile, R1, R2 und R3 je 1,778, Sticky 1,250, auf Desktop und Mobil.

| Seite | Strecke B1 bis R3 Desktop | Mobil |
|---|---|---|
| hp-olt-100 | 2522 → 2223 px | 2151 → 1980 px |
| hp-dct-200 | 3080 → 2632 px | 2753 → 2496 px |

`docs/screenshots/2026-11-19-teil-c/`: nebeneinander vorher und nachher `a7_olt_vergleich_desktop.jpg`,
`a7_olt_vergleich_mobil.jpg`, `a7_dct_vergleich_desktop.jpg`, `a7_dct_vergleich_mobil.jpg`; einzeln
`a7_hp-olt-100_nachher_desktop.jpg`, `a7_hp-olt-100_nachher_mobil.jpg`, `a7_hp-dct-200_nachher_desktop.jpg`,
`a7_hp-dct-200_nachher_mobil.jpg`.

## 8. Gegenprobe über alle 118 aktiven Produkte

Neu geladen nach der Umstellung: alle 118 Seiten DE und EN (10:59 bis 11:17 Uhr), alle mit Status 200. Vergleich DE mit der Aufnahme vor der Umstellung (10:39 bis 10:57 Uhr) und mit der Ist-Aufnahme nach Teil B (19.11., 00:41 bis 01:17 Uhr), EN mit der EN-Aufnahme nach Teil B (00:58 bis 01:17 Uhr).

- **B1, B2 und R1:** DE 118 von 118, EN 118 von 118.
- **Fehler** (Liquid-Fehler, Zeile ohne Bild, Bild ohne Text, Alt weicht vom Files-Alt ab, mehr als zwei Zusatzzeilen, Bildseite wiederholt sich): DE keine, EN keine.
- **Bildformat nach der Umstellung:** 474 Bild-Text-Zeilen ohne Sticky, alle Bilder 16:9 (211 verschiedene); im Browser gemessen 1,778 (hp-olt-100, hp-dct-200, Abschnitt 7.3).
- **DE vor und nach der Umstellung:** Markup aller 118 Seiten gleich (kein Text, kein Bild, keine Zeile anders), nur das CSS hat sich geändert.
- **Unterschiede zur Ist-Aufnahme nach Teil B:** DE 57 Seiten, EN 58 Seiten, alle beabsichtigt: genau die Seiten der Blöcke aus Abschnitt 1 bis 6 (EN dazu die vier Seiten mit EN-Alt-Abgleich: hp-dfm-400-eu-2, hp-dfm-600, hp-dfm-750-eu, hp-dgm-001). Keine andere Seite hat sich geändert, kein Block ist weggefallen.
- **Zusatzzeilen:** nur hp-dct-200 (`DCT_B2_17`) und hp-npt-210 (`NPT_B2_08`), je eine, direkt hinter B2, Bild rechts; R1, R2, R3 wechseln danach weiter ab. Hero-Limit 8 auf beiden Seiten voll, Schieber, Kettenplan, Sticky, Hotspot und Zeitband stehen wie vorher.
- **EN-Texte:** 39 geänderte oder neue Blöcke auf allen ihren Seiten: 516 Felder DE und EN gefunden, kein alter deutscher Text mehr.
- **Bild zweimal auf einer Seite:** Bild 2x: OLAS14_B2_01 (hp-ola-s14-15-eu, hp-ola-s14-30-eu, hp-ola-s14-50-eu); bildgleich auf der Seite: DCT_I1_01_an = DCT_B2_01 (hp-dct-200); bildgleich auf der Seite: VIT_I1_02_an = VIT_B2_01 (hp-vit-586l-eu-1)
  Alles bestehende Fälle, die Regel 4 bzw. deine DCT-Vorgabe unverändert lässt (Abschnitt 10). Bildgleich heißt: andere Datei, gleiches Bild (Pixelvergleich).
- **EN, deutscher Alt:** auf 17 Seiten zeigt R1 unter `/en/` den deutschen Alt der Datei (neun ältere R1-Blöcke ohne Feld `alt`, nicht von Teil C berührt). Vorschlag in Abschnitt 10, Punkt 6.
- **Text gegen Bild:** Jedes neue oder umgeschriebene Bild-Text-Paar habe ich beim Schreiben am Bild in 1200 px geprüft (Abschnitte 2 bis 6). Die übrigen Paare sind seit der Gegenprobe Teil B unverändert.

## 9. Abschnitte 8 bis 10 des Auftrags

- **SCWL:** bleibt, wie es ist. Das warmweiße Familienbild gilt für beide Varianten, nichts geändert (nur die beiden
  Texte aus Abschnitt 3: „an einem zweiten Platz“, „In den Zweigen“).
- **Fernbedienungsbilder:** „6639 H“ auf `CTL_P1_05`, `DCT_P1_04`, `NPT_P1_06` und `DFM_P1_01` ist richtig und kein
  Befund mehr. „Fuash“ auf `OLG40_P1_01` prüft die Asset-Instanz.
- **Parallelbetrieb:** Die Asset-Instanz hat mit Auftrag 23 den EN-Alt in Files für `DFM_B2_01`, `DGM_B2_01` und
  `BLT_B1_01` gesetzt; die Blockfelder sind angeglichen (Abschnitt 6). Ihre Galerie-Arbeit (hp-ol-30/50, R2/R3 als
  Galeriebilder) betrifft die Feature-Sektion nicht; meine Prüfungen lesen nur die Feature-Sektion.

## 10. Offen, Entscheidung bei Leon

1. **hp-dct-200, B2 doppelt:** `DCT_B2_01` (B2) ist bildgleich mit dem Schieber-Bild `DCT_I1_01_an`. Vorschlag nach
   Regel 1 und 3: im Block `dct-b2` das Bild entfernen (dann zeigt B2 `DCT_B2_17` aus dem Metafeld), Text mit den
   Größen behalten und die Szene anpassen; die Zusatzzeile `dct-b2-zusatz` fällt dann weg. Das Wohnzimmerfenster bleibt
   über den Schieber auf der Seite. Ohne dein Wort bleibt es wie jetzt (deine DCT-Vorgabe).
2. **VIT und OLAS14, Bild doppelt, Regel 4 „nichts tun“:** Auf hp-vit-586l-eu-1 ist `VIT_B2_01` (B2) bildgleich mit
   dem Schieber-Bild `VIT_I1_02_an` (hp-vit-864l-eu-1 hat ein anderes Schieber-Bild); auf hp-ola-s14-15/-30/-50-eu steht `OLAS14_B2_01` in B2 und in der
   Steuerung. Das neue B2-Bild steht dort jeweils schon im Sticky-Block, ein drittes Motiv für B2 gibt es nicht. Bleibt
   so, bis du es anders willst oder die Asset-Instanz ein weiteres Bild liefert.
3. **[prüfen]** `SOLM_R1_01` zeigt einen Erdspieß, laut Lieferumfang liegt nur die Wandhalterung bei; `OLSA60_R1_01`
   zeigt mehr Birnen als die 16 einer Kette; der Lieferumfang von hp-dgm-048 lautet „1 × LED-Gartenstecker“, das
   Produkt sind zwei Geschenkboxen. Texte stimmen jeweils mit den Produktdaten, geändert habe ich nichts.
4. **EN-Alt in Files** fehlt bei `CTL_B2_02`, `DFM_B1_01` und `SBLB_B1_01` (jetzt sichtbar). Die Asset-Instanz setzt
   ihn nur mit deiner Freigabe (Auftrag 23 nannte nur drei andere Dateien). Ihr Wortlaut aus den Galeriebildern gleicher
   Quelle ist bei zwei Dateien gleich mit meinem Blockfeld, bei `SBLB_B1_01` leicht anders; nach dem Setzen ziehe ich
   das Blockfeld wortgleich nach.
5. **Blocktexte ohne EN** (geparkt): Teil C hat 39 Blöcke angefasst, jeder geänderte oder neue Text steht DE und EN.
   Bei `ctl-b2` und `sblb-b1` blieb der Text gleich, dort kam nur der EN-Alt dazu. Ältere, unveränderte Blocktexte
   bleiben auf `/en/` deutsch.
6. **Deutscher Alt auf `/en/` bei neun R1-Blöcken** (besteht seit den R1-Bildern vom 16.11., von Teil C nicht berührt):
   `blt-r1`, `blm-r1`, `ctl-r1`, `ctl-m-r1`, `dct-r1`, `dfm-r1`, `dgm-r1`, `olas14-r1`, `sblb-r1` haben kein Feld `alt`,
   deshalb zeigt R1 den Alt der Datei, und der kommt in Liquid nur deutsch an. Betroffen 17 Seiten (hp-blt-050,
   hp-blt-100-eu-1, hp-blm-100-eu, hp-ctl-210-eu-1, hp-ctl-400-eu-1, hp-ctl-180m, hp-ctl-240m, hp-dct-200,
   hp-dfm-400-eu-2, hp-dfm-600, hp-dfm-750-eu, hp-dgm-001, hp-ola-s14-15/-30/-50-eu, hp-sblb-60l-ww-new,
   hp-sblb-100l-ww-new). Vorschlag: Feld `alt` dieser neun Blöcke aus dem Alt der Datei füllen (DE und EN aus dem
   Register der Asset-Instanz), sichtbar ändert sich nichts. Ein Schreibgang, auf dein Wort.

## Schreibvorgänge

| Zeit | Was | Ergebnis |
|---|---|---|
| 10:27 | `rmp-r1`: Text DE, Kicker, Überschrift und Text EN | 0 Fehler |
| ~10:29 | 20 Blöcke DE (Abschnitte 2, 3, 5; `metaobjectUpdate`) | 0 Fehler |
| ~10:30 | 63 EN-Felder an 20 Blöcken (`translationsRegister`, Prüfsumme des DE-Texts) | 0 Fehler |
| ~10:31 | `dgm-w1-048-r1` angelegt, 4 EN-Felder, Set `dgm-w1-048` | 0 Fehler |
| 10:32 bis 10:34 | Stichprobe live: hp-rmp-180, hp-dgm-048, hp-ol-s11-15, DE und EN | alles wie geschrieben |
| 10:35:14 | Theme `8c8f647` live (Zusatzzeile) | Prüfsummen gleich git |
| ~10:36 | 3 Blöcke angelegt (`dct-b2-zusatz`, `npt-b2-zusatz`, `ctl-m-b1`) | 0 Fehler |
| ~10:37 | 14 Blöcke DE (Bild am Block entfernt, Text, Alt, Bezeichnung) | 0 Fehler |
| ~10:38 | 60 EN-Felder an 17 Blöcken, dazu EN-Alt-Abgleich `dfm-b2` und `dgm-b2` | 0 Fehler |
| ~10:39 | Sets `dct`, `npt` (Zusatzzeile hinter B2) und `ctl-m` (`ctl-m-b1` statt `ctl-b1`) | 0 Fehler |
| 10:39 bis 10:57 | Aufnahme 118 Seiten DE, Gegenprobe Abschnitt 6 und Formatprüfung | 0 Befunde, alle Bilder 16:9 |
| 10:58:50 | CSS `e867f9e` live (16:9) | Prüfsumme gleich git |
| 10:59 bis 11:17 | Gegenprobe 118 Seiten DE und EN | 0 Fehler, alle 118 Seiten DE und EN mit B1, B2 und R1 |

Vor dem Schreiben bemerkt und korrigiert: In meinem Plan-Skript teilten sich `ctl-b1` und `ctl-m-b1` dieselbe
EN-Liste, `ctl-b1` hätte dadurch den EN-Alt des CTLM-Bilds bekommen. Geschrieben wurde die korrigierte Fassung.

## Rückweg

Alter Stand in `docs/data/teilc-bloecke.json` (Blöcke, mit Bild-IDs) und `docs/data/teilc-sets.json` (Sets).

- Format (Abschnitt 7): Commit `e867f9e` zurücknehmen (dann wieder 5:4 für B2, R1 und Zusatzzeile, 16:9 für R2/R3).
- Abschnitt 6: Sets `dct`, `npt`, `ctl-m` auf `vorher` zurückschreiben, dann die neuen Blöcke `dct-b2-zusatz`,
  `npt-b2-zusatz`, `ctl-m-b1` löschen. Bei den 14 geänderten Blöcken Bild (`bild_vorher_gid`), Text, Label und Alt aus
  `vorher` zurückschreiben und die EN-Übersetzungen der Felder entfernen. Theme-Commit `8c8f647` kann bleiben (ohne
  Zusatzblock im Set ändert er nichts) oder zurückgenommen werden.
- Abschnitt 4: Set `dgm-w1-048` auf `vorher` (mit `dgm-w1-r1`), Block `dgm-w1-048-r1` löschen.
- Abschnitt 1 bis 5: Felder aus `vorher` zurückschreiben, EN-Übersetzungen der Blöcke entfernen (vorher hatten die
  Blöcke nur EN-Alt).
