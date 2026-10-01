# HeiPard PDP Feature-Baukasten: Anleitung für die Content-Produktion

Die PDP-Sektion **„Warum du sie lieben wirst"** wird aus Blöcken gebaut. Welche Blöcke es gibt
und in welcher Reihenfolge sie stehen, legt `heipard-block-vokabular.md` fest. Dieses Dokument
erklärt, wie du die Blöcke im Shopify-Admin pflegst.

**Umsetzungsstand:** Stufe 1 ist fertig (B1, B2, B3, B4, R1, D1, D3, D4, I2 mit I3).
Stufe 2 (P1, P3, I1, D2, D5, D6, D7) und Stufe 3 (P2, I4, R2, B2 sticky) folgen.

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
2. Hat es keines, aber eine **Dramaturgie**, greift die Vorlage `vorlage-hero`, `vorlage-standard`
   oder `vorlage-longtail`. Die Vorlagen enthalten nur Daten-Blöcke, die sich aus den Metafeldern
   füllen. Bild- und Textblöcke sind dort leer und werden übersprungen.
3. Hat es beides nicht, erscheinen die alten Blöcke aus dem Theme-Editor (Fallback).

Alle SKUs einer Familie bekommen dasselbe Set und dieselbe Dramaturgie. Die Daten-Blöcke zeigen
trotzdem je SKU die richtigen Werte, weil sie die Metafelder des jeweiligen Produkts lesen.

## Block-Typen (Stufe 1)

| Block-Typ | Vokabular | Was du pflegst | Woher die Daten kommen |
|---|---|---|---|
| `fullwidth` | B1 | Bild, Kicker, Titel, optional Text, Overlay-Textfarbe | Block |
| `media_text` | B2 | Bild, Kicker, Titel, Text, Medien-Seite | Block |
| `fullwidth` oder `media_text` mit Medientyp `video` | B3 (laut) | Video plus Bild als Poster | Block |
| `text` | R1 | Kicker, Titel, Text. Jede Zeile im Textfeld wird ein Absatz | Block |
| `kettenplan` | D1 | nur Variante, Kicker und Titel sind optional | Metafelder |
| `zeitband` | D3 | nur Variante, optional ein Satz im Textfeld | Metafelder |
| `serienleiter` | D4 | nichts | Metafeld Familie |
| `steuerung` | I2 mit I3 (mit Modi laut) | Basisbild, Kicker, optional Titel, Modi im JSON-Feld | Metafeld Dimmstufen, JSON |
| `icon_grid` | B4 | nichts, optional Auswahl im JSON-Feld | Metafelder |

Kicker und Titel der Daten-Blöcke haben einen Standardtext aus den Sprachdateien. Trägst du im
Block etwas ein, gilt dein Text.

### D1 Kettenplan

| Variante | Zeigt | Pflicht-Metafelder | Optional |
|---|---|---|---|
| `linie` | Zuleitung und Lichterkette als proportionale Linie | Beleuchtete Länge | Zuleitung, Anzahl Leuchtmittel, Abstand der Lichtpunkte |
| `flaeche` | Rechteck im echten Seitenverhältnis (Vorhang, Eiszapfen, Netz) | Breite, Höhe | Anzahl Leuchtmittel, Zuleitung |
| `koppel` | mehrere Ketten nebeneinander mit Gesamtlänge | Beleuchtete Länge, Koppelbar bis (mindestens 2) | |
| `auto` | Fläche, wenn Breite und Höhe gepflegt sind, sonst Linie | | |

Die Gesamtlänge im Koppelplan ist gerechnet: Koppelbar bis mal beleuchtete Länge.
Auf dem Handy bricht die Linie in zwei Zeilen (Zuleitung, darunter Kette).

### D3 Zeitband

| Variante | Zeigt | Pflicht-Metafeld |
|---|---|---|
| `timer` | 24-Stunden-Band mit An-Phase. Bei mehreren Werten (z. B. 6 und 8) wählt der Kunde per Chip | Timer-Dauer (h), Liste |
| `solar` | Tag laden, nachts leuchten, schematisch | Leuchtdauer / Akkulaufzeit (h) |
| `auto` | Solar, wenn Stromquelle „Solar" ist, sonst Timer | |

### D4 Serienleiter

Zeigt alle aktiven Produkte derselben Familie als Karten, sortiert nach beleuchteter Länge, das
aktuelle Modell ist markiert. Der Block steht immer am Ende in der Daten-Zone, egal wo er im Set liegt.

Damit das funktioniert, braucht jede Familie **einmalig** eine Smart Collection:

- Handle: `familie-<code>` in Kleinbuchstaben, z. B. `familie-ol-g40`
- Bedingung: Metafeld *Familie (Code)* ist gleich `OL-G40`
- im Onlineshop-Kanal veröffentlicht

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

### Ausweich-Typ

Steht im JSON-Feld eines Daten-Blocks `{"sonst": "zeitband"}`, zeigt das Theme diesen Typ, falls
dem eigentlichen Block die Metafelder fehlen. Die Standard-Vorlage nutzt das für „Kettenplan
oder Zeitband".

## Regeln, die das Theme durchsetzt

- **B1 zuerst:** Der erste Full-Width-Block eines Sets steht immer oben, auch wenn er im Set weiter hinten liegt.
- **Ein lauter Block:** Laut sind Video und die Steuerung mit Leuchtmodi. Pro Set wird einer laut
  gezeigt, in `standard` und `longtail` keiner. Jeder weitere erscheint leise: das Video als
  Standbild, die Steuerung ohne Modus-Buttons.
- **Block-Limit:** `hero` 8, `standard` 5, `longtail` 3 Blöcke. Die Serienleiter zählt nicht mit.
  Ohne Dramaturgie gibt es kein Limit.
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
   „Auto · Icon-Grid" und „Auto · Serienleiter" wiederverwenden.
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
| Anzahl Leuchtmodi, Fernbedienung, IP-Schutzart | `anzahl_leuchtmodi`, `fernbedienung`, `ip_schutzart` | | Icon-Grid |

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
nach `heipard-block-vokabular.md` Abschnitt 9:

1. B1 „Gartenparty-Klassiker" (Bild G40-01 fehlt noch)
2. B2 „Warmes Licht, 2200 Kelvin" (Bild G40-02 fehlt noch)
3. R1 „Gebaut für draußen" (Absätze noch `[TBD]`)
4. Steuerung „Volle Kontrolle" mit Dauer, Atem, Blinken (Basisbild G40-05 fehlt noch)
5. Auto · Kettenplan
6. Zeitband Timer mit Satz zur Speicherfunktion
7. Auto · Icon-Grid
8. Auto · Serienleiter (Kollektion `familie-ol-g40`)

P1 Hotspot (Block 6 im Vokabular) kommt mit Stufe 2.

## Technische Referenz

- Definitionen: Metaobjekt `feature_block` (`…/35900358989`), `feature_set` (`…/35900391757`),
  Produkt-Metafeld `heipard.feature_set` (`…/404543242573`).
- Theme: `sections/heipard-feature.liquid` (Regeln), `snippets/heipard-feature-dispatch.liquid`
  (Typ-Weiche), `snippets/heipard-feature-block.liquid` (B1, B2), `snippets/heipard-fb-*.liquid`
  (je Block), `assets/heipard-feature.css`, `assets/heipard-feature.js`.
- Ein neuer Block-Typ braucht: Auswahlwert im Feld „Block-Typ" der Definition, ein Snippet
  `heipard-fb-<typ>`, einen Zweig in der Typ-Weiche, Locale-Keys unter `heipard.blocks.<typ>`.
- Das alte Beispiel-Set „Beispiel-Set (Demo)" hängt noch an `hp-olh-g40-25`.
