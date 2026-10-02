# HeiPard PDP Feature-Baukasten: Anleitung für die Content-Produktion

Die PDP-Sektion **„Warum du sie lieben wirst"** wird aus Blöcken gebaut. Welche Blöcke es gibt
und in welcher Reihenfolge sie stehen, legt `heipard-block-vokabular.md` fest. Dieses Dokument
erklärt, wie du die Blöcke im Shopify-Admin pflegst.

**Umsetzungsstand:** Alle 20 Block-Typen des Vokabulars sind umgesetzt (Stufen 1 bis 3, Stand 2026-10-01).

## So hängt alles zusammen

| Baustein | Was | Wo im Admin |
|---|---|---|
| **Feature-Block** (Metaobjekt) | ein einzelner Block, der Typ steht im Feld „Block-Typ" | Inhalte → Metaobjekte → *HeiPard Feature-Block* |
| **Feature-Set** (Metaobjekt) | geordnete Liste von Blöcken für eine Produktfamilie | Inhalte → Metaobjekte → *HeiPard Feature-Set* |
| **Metafeld `heipard.feature_set`** | zeigt vom Produkt auf sein Set | Produkt → Metafelder → *PDP Feature-Set* |
| **Metafeld `heipard.dramaturgie`** | `hero`, `standard` oder `longtail` | Produkt → Metafelder → *PDP-Dramaturgie* |
| **Metafeld `heipard.familie`** | Familien-Code, z. B. `OL-G40` | Produkt → Metafelder → *Familie (Code)* |

Was die Sektion anzeigt, in dieser Reihenfolge:

1. Hat das Produkt ein **Feature-Set**, werden dessen Blöcke gezeigt.
2. Hat es keines, greift die Vorlage zur **Dramaturgie**: `vorlage-hero`, `vorlage-standard` oder
   `vorlage-longtail`. **Ist das Metafeld leer, gilt `longtail`.** Die Vorlagen enthalten nur
   Daten-Blöcke, die sich aus den Metafeldern füllen. Bild- und Textblöcke sind dort leer und
   werden übersprungen. Hat ein Produkt keine passenden Metafelder, bleibt die Sektion unsichtbar.

Generische Blöcke ohne Produktbezug gibt es nicht mehr: Die früheren Fallback-Blöcke im
Produkt-Template sind geleert (Stand 2026-10-01).

Alle SKUs einer Familie bekommen dasselbe Set und dieselbe Dramaturgie. Die Daten-Blöcke zeigen
trotzdem je SKU die richtigen Werte, weil sie die Metafelder des jeweiligen Produkts lesen.

## Block-Typen

| Block-Typ | Vokabular | Was du pflegst | Woher die Daten kommen |
|---|---|---|---|
| `fullwidth` | B1 | Bild, Kicker, Titel, optional Text, Overlay-Textfarbe | Block |
| `media_text` | B2 | Bild, Kicker, Titel, Text, Medien-Seite. Variante `sticky`: Textpunkte zeilenweise | Block |
| `fullwidth` oder `media_text` mit Medientyp `video` | B3 (laut) | Video plus Bild als Poster | Block |
| `text` | R1 | Kicker, Titel, Text. Jede Zeile im Textfeld wird ein Absatz | Block |
| `kettenplan` | D1 | nur Variante, Kicker und Titel sind optional | Metafelder |
| `zeitband` | D3 | nur Variante, optional ein Satz im Textfeld | Metafelder |
| `serienleiter` | D4 | nichts | Metafeld Familie |
| `steuerung` | I2 mit I3 (mit Modi laut) | Basisbild, Kicker, optional Titel, Modi im JSON-Feld | Metafeld Dimmstufen, JSON |
| `icon_grid` | B4 | nichts, optional Auswahl im JSON-Feld | Metafelder |
| `hotspot` | P1 | Bild, Punkte im JSON-Feld, Labels im Textfeld | Block |
| `lieferumfang` | P3 | optional Flatlay-Bild | Metafeld Lieferumfang |
| `schieber` | I1 (laut) | Bild (an), Zweites Bild (aus) | Block |
| `kelvin` | D2 | nichts | Metafeld Farbtemperatur |
| `nachweise` | D5 | nichts | Metafelder Schutzart, Spannung, CE |
| `kennzahl` | D6 | Feld im JSON, optional Kicker, Titel, Text | Metafeld nach Wahl |
| `fragen` | D7 | nichts | Metafeld Fragen zum Produkt |
| `sequenz` | P2 | Bildfolge (3 bis 4 Bilder), Unterschriften zeilenweise im Textfeld | Block |
| `farbwechsel` | I4 (laut) | Bild, Zweites Bild, Variante | Block |
| `zaesur` | R2 | ein Satz im Titel | Block |

Kicker und Titel der Daten-Blöcke haben einen Standardtext aus den Sprachdateien. Trägst du im
Block etwas ein, gilt dein Text.

### D1 Kettenplan

| Variante | Zeigt | Pflicht-Metafelder | Optional |
|---|---|---|---|
| `linie` | Zuleitung und Lichterkette als proportionale Linie | Beleuchtete Länge | Zuleitung, Anzahl Leuchtmittel, Abstand der Lichtpunkte, Gesamtlänge |
| `flaeche` | Rechteck im echten Seitenverhältnis (Vorhang, Eiszapfen, Netz) | Breite, Höhe | Anzahl Leuchtmittel, Zuleitung |
| `koppel` | mehrere Ketten nebeneinander mit Gesamtlänge | Beleuchtete Länge, Koppelbar bis (mindestens 2) | |
| `auto` | Fläche, wenn Breite und Höhe gepflegt sind, sonst Linie | | |

Ist bei der Linie die *Gesamtlänge inkl. Zuleitung* gepflegt, gilt sie als Nennmaß: Unter der
Zeichnung steht eine Maßlinie „20 m gesamt", und die beleuchtete Länge bekommt ein „ca." davor
(Beispiel OL-30: 3 m Zuleitung, ca. 17 m Lichterkette, 20 m gesamt).

Die Gesamtlänge im Koppelplan ist gerechnet: Koppelbar bis mal beleuchtete Länge.
Auf dem Handy bricht die Linie in zwei Zeilen (Zuleitung, darunter Kette).

### D3 Zeitband

| Variante | Zeigt | Pflicht-Metafeld |
|---|---|---|
| `timer` | 24-Stunden-Band mit An-Phase. Bei mehreren Werten (z. B. 6 und 8) wählt der Kunde per Chip | Timer-Dauer (h), Liste |
| `solar` | Tag laden, nachts leuchten, schematisch | Leuchtdauer / Akkulaufzeit (h) |
| `auto` | Solar, wenn Stromquelle „Solar" ist, sonst Timer | |

### D4 Serienleiter

Zeigt alle aktiven Produkte derselben Familie als Karten, das aktuelle Modell ist markiert.
Sortiert und beschriftet wird nach der Nennlänge: *Gesamtlänge inkl. Zuleitung*, falls gepflegt,
sonst *Beleuchtete Länge*. Bitte je Familie einheitlich pflegen. Der Block steht immer am Ende in
der Daten-Zone, egal wo er im Set liegt.

Damit das funktioniert, braucht jede Familie **einmalig** eine Smart Collection:

- Handle: `familie-<code>` in Kleinbuchstaben, z. B. `familie-ol-g40`
- Bedingung: Metafeld *Familie (Code)* ist gleich `OL-G40`
- im Onlineshop-Kanal veröffentlicht (sonst kann das Theme sie nicht lesen)
- Kollektions-Metafeld `seo.hidden` = `1` (Ganzzahl). Das nimmt sie aus der Sitemap und der
  Shop-Suche und setzt noindex.

Familien-Kollektionen sind rein technisch. Das Theme blendet alles mit dem Handle-Anfang
`familie-` aus der Kollektionsliste aus und setzt zusätzlich selbst noindex.

Entwürfe erscheinen dort nicht. Die Serienleiter wird also erst sichtbar, wenn mindestens ein
weiteres Produkt der Familie aktiv ist.

### Steuerung (I2 Dimmregler mit I3 Modus-Umschalter)

- **Basisbild:** das Familien-Basisbild im Zustand an, 100 Prozent, Dauerlicht. Alle anderen
  Zustände leitet das Theme per CSS daraus ab. Ohne Bild erscheint eine schematische Kette.
- **Dimmregler:** kommt aus dem Produkt-Metafeld *Dimmstufen (%)*, z. B. `25, 50, 75, 100`.
  Regler und Chips rasten auf genau diese Stufen ein.
- **Leuchtmodi:** im JSON-Feld des Blocks: `{"modi": ["dauer", "atem", "blinken"]}`.
  Erlaubt sind `dauer`, `atem`, `blinken`.
- Der Block startet immer bei 100 Prozent im Dauerlicht, animiert wird erst nach einem Klick.
  Wer im System „Bewegung reduzieren" eingestellt hat, sieht statt der Modus-Buttons einen Hinweis.

### B4 Icon-Grid

Ohne Vorgabe zeigt der Block die ersten drei Kacheln, für die das Produkt Daten hat, in dieser
Reihenfolge: Timer, Dimmbar, Koppelbar, Leuchtmodi, Fernbedienung, Schutzart.
Feste Auswahl über das JSON-Feld: `{"kacheln": ["timer", "dimmbar", "koppelbar"]}`.
Mögliche Werte: `timer`, `dimmbar`, `koppelbar`, `modi`, `fernbedienung`, `schutzart`.

### B2 Split mit Variante `sticky`

Ab Desktop bleibt das Bild stehen, während 3 bis 4 Textpunkte vorbeiziehen. Auf Handy und Tablet
stehen die Punkte einfach untereinander.

- Block-Typ `media_text`, Variante `sticky`.
- Jede Zeile im Textfeld ist ein Punkt. Mit Titel davor: `Timer | Sechs Stunden an, dann aus.`
- Kicker und Titel des Blocks stehen über den Punkten.

### R2 Zäsur

Ein Satz in großer Schrift als Kapitelbruch. Der Satz steht im Titel des Blocks, der Kicker ist
optional. Die Zäsur zählt nicht zum Block-Limit.

### P2 Sequenz

- **Bildfolge:** 3 bis 4 Bilder im Feld *Bildfolge*, die Reihenfolge ist die Schrittfolge. Gleiche
  Perspektive, gleiche Lichtstimmung, 4:3.
- **Unterschriften:** je Schritt eine Zeile im Textfeld (Zeile 1 gehört zu Schritt 1).
- Mindestens 2 Bilder, sonst erscheint der Block nicht. Auf dem Handy lassen sich die Schritte
  seitlich durchwischen, ab Tablet stehen sie nebeneinander.

### I4 Farbwechsel

| Variante | Was du pflegst | Verhalten |
|---|---|---|
| `ueberblendung` (auch `auto`) | Bild = Warmweiß, Zweites Bild = Multicolor, pixelgleich | zwei Buttons, weiche Überblendung. Das zweite Bild lädt erst bei Interaktion |
| `rgb` | ein Basisbild in EINER Lichtfarbe | Regler dreht den Farbton per CSS |

- Für `rgb` kann im JSON-Feld der Farbton der Basis in Grad stehen, damit die Farbskala des
  Reglers passt: `{"basis_farbton": 30}` (0 Rot, 30 Orange, 120 Grün, 240 Blau).
- Die Buttons heißen „Warmweiß" und „Multicolor" (Sprachdateien). Andere Paare über das JSON-Feld:
  `{"labels": ["Warmweiß", "Kaltweiß"]}`. Diese Namen sind dann nicht übersetzbar.
- Start immer im ersten Zustand. Bei „Bewegung reduzieren" wird ohne Überblendung umgeschaltet.

### P1 Hotspot-Detail

- **Bild:** Produkt frei stehend, 4:3 oder 1:1.
- **Punkte** im JSON-Feld, Position in Prozent von links (`x`) und von oben (`y`):
  `{"punkte": [{"x": 32, "y": 48, "key": "modus"}, {"x": 60, "y": 20}]}`
- **Labels**, je Punkt in dieser Reihenfolge:
  1. Zeile im Textfeld des Blocks. Zeile 1 gehört zu Punkt 1, Zeile 2 zu Punkt 2. In Translate & Adapt übersetzbar.
  2. `"label"` im JSON.
  3. `"key"` im JSON, der Text kommt dann aus den Sprachdateien. Vorhandene Keys: `fernbedienung`,
     `modus`, `dimmen`, `timer`, `ein_aus`, `birne`, `stecker`, `solarpanel`, `schalter`, `erdspiess`,
     `controller`, `batteriebox`.
- Punkte ohne Label fallen weg, höchstens 8 Punkte.
- Hochformate werden in der Höhe begrenzt und mittig gesetzt, die Punkte bleiben an ihrer Stelle.
- Ab Tablet erscheint das Label am Punkt bei Hover, Fokus oder Tap. Auf dem Handy stehen die
  Labels als nummerierte Liste unter dem Bild.

### P3 Lieferumfang

Liest das Produkt-Metafeld *Lieferumfang* (ein Teil je Zeile). Optional ein Flatlay-Bild im Block.
Steht immer in der Daten-Zone.

### I1 Schieber Aus und An

- **Bild:** Zustand an (Basisbild). **Zweites Bild:** Zustand aus, pixelgleich.
- Links vom Regler liegt „Aus", rechts „An". Bedienung per Maus, Touch und Tastatur.
- Das Aus-Bild lädt erst bei der ersten Interaktion. Bis dahin, und wenn kein zweites Bild gepflegt
  ist, zeigt die Aus-Seite eine per CSS abgedunkelte Ableitung des Basisbilds.
- Bei „Bewegung reduzieren" startet der Block im Zustand an, der Regler bleibt bedienbar.

### D2 Kelvin-Skala

Skala von Kerze (1800 K) bis Tageslicht (6500 K), der Wert aus *Farbtemperatur (K)* ist markiert.

### D5 Nachweise

Aufklappbare Zeilen, jede nur wenn der Wert gepflegt ist. Steht in der Daten-Zone.

- **Schutzart:** aus *IP-Schutzart*. Die Erklärung beider Ziffern kommt aus den Sprachdateien.
- **Betriebsspannung:** aus *Spannung (V)*, nur bei Kleinspannung bis 50 V.
- **CE:** nur wenn *CE-Kennzeichnung* auf wahr steht.

### D6 Große Kennzahl

Im JSON-Feld steht, welches Metafeld groß gezeigt wird: `{"feld": "beleuchtete_laenge_m"}`.
Möglich: `beleuchtete_laenge_m`, `gesamtlaenge_m`, `led_anzahl`, `farbtemperatur_kelvin`,
`akkulaufzeit_h`, `hoehe_m`, `breite_m`, `koppelbar_bis`, `garantie_jahre`.
Ohne Vorgabe nimmt der Block das erste gepflegte Feld aus: Leuchtzeit, Höhe, Länge, Lichtpunkte, Kelvin.
Kicker, Titel und Text des Blocks erscheinen rechts neben der Zahl.

### D7 Fragen zum Produkt

Fragen sind eigene Einträge: Inhalte → Metaobjekte → *HeiPard Produktfrage* (Frage, Antwort).
Am Produkt im Metafeld *Fragen zum Produkt* 3 bis 4 Einträge wählen. Familien können dieselben
Einträge teilen. Der Block steht in der Daten-Zone.

### Ausweich-Typ

Steht im JSON-Feld eines Daten-Blocks `{"sonst": "zeitband"}`, zeigt das Theme diesen Typ, falls
dem eigentlichen Block die Metafelder fehlen. Die Standard-Vorlage nutzt das für „Kettenplan
oder Zeitband".

## Regeln, die das Theme durchsetzt

- **B1 zuerst:** Der erste Full-Width-Block eines Sets steht immer oben, auch wenn er im Set weiter hinten liegt.
- **Ein lauter Block:** Laut sind Video, Schieber, Farbwechsel und die Steuerung mit Leuchtmodi.
  Pro Set wird einer laut gezeigt, in `standard` und `longtail` keiner. Jeder weitere erscheint
  leise: das Video als Standbild, Schieber und Farbwechsel als Bild, die Steuerung ohne Modus-Buttons.
- **Block-Limit:** `hero` 8, `standard` 5, `longtail` 3 Blöcke. Die Zäsur zählt nicht mit.
  Ohne Dramaturgie gibt es kein Limit.
- **Zwei gleiche Typen hintereinander** werden gezeigt, der Theme-Editor weist aber darauf hin.
- **Daten-Zone:** Serienleiter, Nachweise, Lieferumfang und Fragen stehen immer am Ende unter einer
  Trennlinie und zählen nicht zum Limit.
- **Leere Blöcke fallen weg:** Ein Daten-Block ohne Metafelder oder ein Bildblock ohne Inhalt wird nicht gezeigt und zählt nicht.

Greift eine Regel oder fehlt ein Metafeld, zeigt der **Theme-Editor** über der Sektion einen
Hinweis mit dem Namen des Blocks. Kunden sehen diese Hinweise nie.

## Eine Familie anlegen

1. **Metafelder pflegen** an jedem Produkt der Familie: Familie, Dramaturgie und die Werte für die
   Daten-Blöcke (Tabelle unten).
2. **Familien-Kollektion anlegen** (siehe Serienleiter).
3. **Eigene Blöcke anlegen** für alles mit Bild und Text: B1, B2, R1, bei Hero die Steuerung.
   Feld *Bezeichnung (intern)* immer ausfüllen, z. B. „OL-G40 · B1 Gartenparty".
4. **Set anlegen:** Bezeichnung z. B. „OL-G40 (Hero)", Blöcke in der Reihenfolge der Dramaturgie.
   Für die Daten-Blöcke die fertigen Einträge „Auto · Kettenplan", „Auto · Zeitband",
   „Auto · Icon-Grid", „Auto · Serienleiter", „Auto · Nachweise", „Auto · Lieferumfang",
   „Auto · Fragen", „Auto · Kennzahl" und „Auto · Kelvin-Skala" wiederverwenden.
5. **Set zuweisen:** bei jedem Produkt der Familie im Metafeld *PDP Feature-Set* wählen.

Die Einträge „Vorlage · …" und „Auto · …" gehören zu den drei Vorlagen und werden von vielen
Produkten geteilt. Bitte nicht mit Inhalten füllen und nicht löschen.

## Metafelder für die Daten-Blöcke (Namespace `heipard`)

| Metafeld | Schlüssel | Typ | Für |
|---|---|---|---|
| Familie (Code) | `familie` | Text | Serienleiter |
| PDP-Dramaturgie | `dramaturgie` | Auswahl | Vorlage und Limits |
| Beleuchtete Länge (m) | `beleuchtete_laenge_m` | Dezimalzahl | Kettenplan, Serienleiter |
| Zuleitung (m) | `zuleitung_m` | Dezimalzahl | Kettenplan |
| Anzahl LEDs / Leuchtmittel | `led_anzahl` | Ganzzahl | Kettenplan, Serienleiter |
| Abstand der Lichtpunkte (cm) | `birnenabstand_cm` | Dezimalzahl | Kettenplan |
| Breite (m), Höhe (m) | `breite_m`, `hoehe_m` | Dezimalzahl | Flächenplan |
| Koppelbar bis (Anzahl Ketten) | `koppelbar_bis` | Ganzzahl | Koppelplan, Icon-Grid |
| Timer-Dauer (h) | `timer_dauer_h` | Liste Ganzzahl | Zeitband Timer, Icon-Grid |
| Leuchtdauer / Akkulaufzeit (h) | `akkulaufzeit_h` | Dezimalzahl | Zeitband Solar |
| Stromquelle | `stromquelle` | Auswahl | Zeitband (Automatik) |
| Dimmstufen (%) | `dimmstufen` | Liste Ganzzahl | Steuerung, Icon-Grid |
| Anzahl Leuchtmodi, Fernbedienung | `anzahl_leuchtmodi`, `fernbedienung` | | Icon-Grid |
| IP-Schutzart | `ip_schutzart` | Auswahl | Nachweise, Icon-Grid |
| Spannung (V) | `spannung_v` | Dezimalzahl | Nachweise |
| CE-Kennzeichnung | `ce_kennzeichnung` | Wahr/Falsch | Nachweise |
| Farbtemperatur (K) | `farbtemperatur_kelvin` | Ganzzahl | Kelvin-Skala, Kennzahl |
| Lieferumfang | `lieferumfang` | mehrzeiliger Text | Lieferumfang |
| Fragen zum Produkt | `fragen` | Liste Produktfrage | Fragen |

## Bilder und Video

- Formate und Mindestgrößen je Block: `heipard-block-vokabular.md`, Abschnitt 6.
- Bilder sind textfrei, Overlays rendert das Theme.
- Video: MP4 (H.264) oder WebM, kurzer Loop. Spielt automatisch, stumm, ohne Bedienelemente.
  Immer ein Bild als Poster setzen.

## Übersetzung

Alle festen Beschriftungen (Chips, Modus-Namen, Maße, Legenden) stehen in `locales/de.json` und
`locales/en.default.json` unter `heipard.blocks`. Kicker, Titel und Texte der Blöcke sind
Metaobjekt-Felder und in Translate & Adapt übersetzbar.

## Referenz: Familie OL-G40

Set **„OL-G40 (Hero, Referenzfamilie)"** (`ol-g40`), zugewiesen an `hp-ol-30` und `hp-ol-50`,
nach `heipard-block-vokabular.md` Abschnitt 9. HP-OL-25 gehört nicht dazu (bleibt OL-Standard).

1. B1 „Gartenparty-Klassiker", Bild `OLG40_B1_01.webp`
2. B2 „Warmes Licht, 2200 Kelvin", Bild `OLG40_B2_01.webp`
3. R1 „Gebaut für draußen", zwei Absätze von Leon
4. Steuerung „Volle Kontrolle" mit Dauer, Atem, Blinken, Basisbild `OLG40_B2_03.webp`. **Lauter Block
   der Familie** (Leons Entscheidung vom 2026-10-02)
5. Auto · Kettenplan (3 m Zuleitung, ca. 17 m Lichterkette, 20 m gesamt; OL-50: ca. 27 m, 30 m gesamt)
6. P1 Hotspot „Fernbedienung", Bild `OLG40_P1_01.webp`. Platzhalter aus dem Listing-Bild. Das echte
   Foto der Fernbedienung kommt als `OLG40_P1_02`, dann Bild tauschen und die vier Punkte neu setzen
   (Modus, Dimmen, Timer, Ein und Aus)
7. Zeitband Timer mit Satz zur Speicherfunktion
8. Auto · Icon-Grid

Daten-Zone: Auto · Serienleiter (Kollektion `familie-ol-g40`, sichtbar ab Aktivierung),
Auto · Nachweise (IP45, 24 V), Auto · Lieferumfang, Auto · Fragen (vier Fragen von Leon,
Einträge `ol-g40-frage-1` bis `-4`).

Der Schieber (I1) war bis 2026-10-02 zum Vergleich im Set und ist wieder draußen. Der Eintrag
„OL-G40 · I1 Schieber Aus und An" mit dem Bildpaar `OLG40_I1_01_an` und `_aus` existiert weiter,
ist aber keinem Set zugewiesen. Als Block-Typ ist der Schieber für Familien ohne Dimmen und Modi gedacht.

Die Bilder kommen aus der Asset-Pipeline (`P:\Claude Code\Heipard Assets\02_export\web\OLG40`),
die Alt-Texte aus `manifest.csv` dort. In der Galerie beider Produkte stehen `OLG40_GAL_01.webp`
auf Position 2 und `OLG40_B2_02.webp` auf Position 3, Position 1 bleibt das Produktfoto.

## Technische Referenz

- Definitionen: Metaobjekt `feature_block` (`…/35900358989`), `feature_set` (`…/35900391757`),
  `product_question` (`…/38166430029`), Produkt-Metafeld `heipard.feature_set` (`…/404543242573`).
- Theme: `sections/heipard-feature.liquid` (Regeln), `snippets/heipard-feature-dispatch.liquid`
  (Typ-Weiche), `snippets/heipard-feature-block.liquid` (B1, B2), `snippets/heipard-fb-*.liquid`
  (je Block), `assets/heipard-feature.css`, `assets/heipard-feature.js`.
- Felder des Metaobjekts `feature_block`: Block-Typ (`layout`), Variante, Bild, Zweites Bild
  (`image_2`), Bildfolge (`images`), Video, Medientyp, Medien-Seite, Overlay-Textfarbe, Kicker, Titel,
  Text, JSON (`data`), Bezeichnung.
- Ein neuer Block-Typ braucht: Auswahlwert im Feld „Block-Typ" der Definition, ein Snippet
  `heipard-fb-<typ>`, einen Zweig in der Typ-Weiche, Locale-Keys unter `heipard.blocks.<typ>`.
- Das alte Beispiel-Set „Beispiel-Set (Demo)" ist seit 2026-10-01 gelöscht.
