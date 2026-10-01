# HeiPard PDP, Block-Vokabular und Dramaturgie (v1)

Stand: 01.10.2026. Grundlage für die Erweiterung des Feature-Baukastens im Theme, für die Export-Parameter der Asset-Pipeline und für die Welle-2-Texte je Produktfamilie. Abgeleitet aus dem LC-Power-Block-Vokabular (v2) und den LUMOnova-Prinzipien für interaktive Blöcke, angepasst auf Dekolicht.

## 1. Prinzip

Jede Produktseite wird aus Blöcken gebaut. Es gibt ein festes Vokabular von 20 Typen. Jede Produktfamilie bekommt eine von drei Dramaturgien (Hero, Standard, Long-Tail), die Kategorie bestimmt die Auswahl innerhalb der Dramaturgie. Längenvarianten teilen sich die Blöcke, nur Titel, Subtitle und Metafelder sind je SKU.

Aufbau der Produktseite, von oben: Galerie mit Kaufbox, Spec-Kacheln aus Metafeldern, Feature-Sektion (die Dramaturgie), Daten-Zone (Serienleiter, Nachweise, Lieferumfang, Fragen), Aufklapper, Passt dazu.

Rhythmus-Regeln, gelten immer:
- Nie zwei gleiche Typen hintereinander.
- Breit und schmal wechseln sich ab.
- Pro Seite höchstens ein lauter Block (Video, Schieber, Modus-Umschalter, Farbwechsel). Standard und Long-Tail haben keinen.
- Erster Block ist immer das Full-Width-Bild. Letzter Block der Feature-Sektion ist das Icon-Grid oder reiner Text.
- Long-Tail: drei Blöcke, fertig.

Drei Grundregeln aus dem Markenbrief bleiben unberührt: Bilder sind textfrei, Overlays rendert das Theme. Keine erfundenen Fakten. Position 1 der Galerie ist ein echtes Produktfoto.

Aufwandsklassen:
- CSS: entsteht allein aus Metafeldern, kein Bild nötig. Skaliert über alle 230 SKUs.
- Basis: braucht das Basisbild der Familie (Higgsfield). Alle Zustände werden daraus abgeleitet (Abschnitt 5).
- Material: braucht Shenzhen-Renderings oder Fotos (Lieferumfang, Hotspot, Sequenz).
- Video: Higgsfield oder Seedance, nur Hero-Familien.

Legende: ● Kernblock, ○ optional, – passt nicht.

## 2. Vokabular

### Basis (im Baukasten vorhanden)
| ID | Block | Kurzbeschreibung | Aufwand | Laut |
|---|---|---|---|---|
| B1 | Full-Width-Bild | Bild über volle Breite, Overlay mit Kicker und Headline, Freiraum unten links | Basis | |
| B2 | Split | Bild und Text nebeneinander, Seiten wechseln sich ab. Option sticky: Bild bleibt stehen, 3 bis 4 Textpunkte ziehen vorbei | Basis | |
| B3 | Video | 16:9-Loop, autoplay, stumm, ohne Bedienelemente, mit Poster-Fallback | Video | laut |
| B4 | Icon-Grid | Drei Kacheln mit Icon, Label und Kurzwert | CSS | |

### Redaktionell
| ID | Block | Kurzbeschreibung | Aufwand | Laut |
|---|---|---|---|---|
| R1 | Text schmal | Nur Text im 6-Spalten-Maß, Kicker und zwei kurze Absätze | CSS | |
| R2 | Zäsur | Ein Satz in großer Fraunces über volle Breite, Kapitelbruch | CSS | |

### Produkt (aus Material)
| ID | Block | Kurzbeschreibung | Aufwand | Laut |
|---|---|---|---|---|
| P1 | Hotspot-Detail | Produktbild mit nummerierten Punkten, Label bei Tap oder Hover. Labels kommen aus einem Metafeld, bleiben übersetzbar | Material | |
| P2 | Sequenz | 3 bis 4 Frames als Schrittfolge: aufhängen, Batterie einlegen, Solarpanel ausrichten, am Baum verteilen | Material | |
| P3 | Lieferumfang visuell | Kartoninhalt als Bildraster oder Flatlay mit Beschriftung aus Metafeld | Material | |

### Daten (aus Metafeldern)
| ID | Block | Kurzbeschreibung | Aufwand | Laut |
|---|---|---|---|---|
| D1 | Kettenplan | Zuleitung, Kettenlänge und Birnenabstand als proportionale Linie mit Maßen. Variante Flächenplan für Vorhang, Eiszapfen und Netz (Breite mal Höhe). Variante Koppelplan: bis zu vier Ketten als Gesamtlänge | CSS | |
| D2 | Kelvin-Skala | Lichtfarbe auf einer Skala von Kerze (1800 K) bis Tageslicht (6500 K), Produktwert markiert | CSS | |
| D3 | Zeitband | 24-Stunden-Band. Variante Timer: 6 Stunden an, 18 aus. Variante Solar: tagsüber laden, abends leuchten | CSS | |
| D4 | Serienleiter | Längenvarianten als Nachbarmodelle mit Link, aktuelles Modell markiert | CSS | |
| D5 | Nachweise | IP-Schutzart erklärt, Niederspannung, CE. Aufklappbar | CSS | |
| D6 | Große Kennzahl | Eine Zahl in Terracotta mit Erklärung: 30 m, 2200 K, 50 Birnen, 8 Stunden Leuchtzeit | CSS | |
| D7 | Fragen zum Produkt | 3 bis 4 produktspezifische Fragen, Antworten aus Faktenliste | CSS | |

### Interaktiv (aus dem Basisbild abgeleitet)
| ID | Block | Kurzbeschreibung | Aufwand | Laut |
|---|---|---|---|---|
| I1 | Schieber Aus und An | Ziehbarer Regler, dieselbe Szene mit Licht aus und an. Aus-Zustand wird aus dem Basisbild abgeleitet, nie separat generiert | Basis | laut |
| I2 | Dimmregler | Regler von 25 bis 100 Prozent, Helligkeit per CSS auf dem Basisbild, Stufen-Chips entsprechend der Fernbedienung | Basis | |
| I3 | Modus-Umschalter | Buttons Dauerlicht, Atemlicht, Blinken. Animation per CSS auf dem Basisbild. Startet im Dauerlicht, Animation nur nach Klick | Basis | laut |
| I4 | Farbwechsel | Warmweiß und Multicolor per Überblendung zweier deckungsgleicher Bilder. Smart-Kategorie: RGB-Regler per Farbdrehung auf monochromer Basis (LUMOnova-Mechanik) | Basis | laut |

## 3. Zuordnungsmatrix

| ID | Block | LED String Lights | Christmas Tree Lights | Curtain, Icicle, Net | Cluster | Solar und Garten | Smart (RGB) | Motif Lights | Weihnachtsbäume |
|---|---|---|---|---|---|---|---|---|---|
| B1 | Full-Width | ● | ● | ● | ● | ● | ● | ● | ● |
| B2 | Split | ● | ● | ● | ● | ● | ● | ● | ● |
| B3 | Video | ○ | ○ | ○ | – | ○ Dämmerung | ● Farbdurchlauf | – | ○ |
| B4 | Icon-Grid | ● | ● | ● | ● | ● | ● | ○ | ● |
| R1 | Text schmal | ● | ● | ● | ● | ● | ● | ● | ● |
| R2 | Zäsur | ○ Hero | ○ Hero | ○ | – | ○ | ○ | – | ○ |
| P1 | Hotspot | ● Fernbedienung, Birne, Stecker | ● Fernbedienung, Baumspitze | ○ Aufhängung | ○ Batteriebox | ● Solarpanel, Schalter, Erdspieß | ● Controller | ○ Standfuß | ● Steckverbindung, Fuß |
| P2 | Sequenz | ○ Aufhängen | ● Am Baum in 3 Schritten | ● Am Fenster | ○ | ● Aufstellen und Ausrichten | ○ | ○ | ● Aufbau |
| P3 | Lieferumfang | ● | ● | ● | ● | ● | ● | ● | ● |
| D1 | Kettenplan | ● Linie | ● Linie mit Baumhöhe | ● Flächenplan | ● Linie | ● Linie oder Flächenplan | ● Linie | – | ● Höhe und Durchmesser |
| D2 | Kelvin-Skala | ● | ● | ● | ● | ● | – | ○ | ● |
| D3 | Zeitband | ● Timer | ● Timer | ● Timer | ● Timer | ● Solar | ● Timer | ○ | ● Timer |
| D4 | Serienleiter | ● | ● | ● | ● | ● | ○ | ○ | ● |
| D5 | Nachweise | ● | ○ | ● | ○ | ● | ● | ● | ○ |
| D6 | Kennzahl | ○ | ○ | ○ | ○ | ● Leuchtzeit | ○ | ● Höhe | ● Höhe |
| D7 | Fragen | ● | ● | ● | ● | ● | ● | ● | ● |
| I1 | Schieber Aus/An | ● Hero | ● Hero | ● Hero | ○ | ● Hero | ○ | ○ | ● Hero |
| I2 | Dimmregler | ● wo dimmbar | ● wo dimmbar | ○ | ○ | – | ● | – | ○ |
| I3 | Modus-Umschalter | ● wo Modi | ● wo Modi | ● wo Modi | ○ | ○ | ○ | – | ○ |
| I4 | Farbwechsel | ○ nur bei Multicolor-Variante | ● bei WW/Multicolor | ○ | ○ | – | ● RGB-Regler | – | ○ |

## 4. Die drei Dramaturgien

Die Dramaturgie wird je Familie festgelegt (Metafeld oder Template-Feld am Produkt). Alle SKUs einer Familie teilen sie.

**Hero (8 Blöcke, ein lauter Block)**
Für G40, S11, ST38, die Bestseller und jede Familie, die im Menü, im Bento oder in Momenten prominent verlinkt ist.

B1 Full-Width → B2 Split (Lichtstimmung) → R1 Text → lauter Block (I1, I2 mit I3, I4 oder B3, einer davon) → D1 Kettenplan → P1 Hotspot → D3 Zeitband → B4 Icon-Grid

Daten-Zone danach: D4 Serienleiter, D5 Nachweise, P3 Lieferumfang, D7 Fragen. Optional R2 Zäsur als Kapitelbruch zwischen Block 3 und 4.

**Standard (5 Blöcke, kein lauter Block)**
Für Familien mit mehreren SKUs, die nicht prominent beworben werden.

B1 Full-Width → B2 Split → R1 Text → D1 Kettenplan oder D3 Zeitband → B4 Icon-Grid

Daten-Zone danach: D4 Serienleiter, D5 Nachweise, P3 Lieferumfang.

**Long-Tail (3 Blöcke)**
Für Einzel-SKUs, Auslaufmodelle und alles, wofür kein Basisbild generiert wird.

B1 Full-Width (Familien- oder Kategoriebild) → R1 Text → D6 Kennzahl oder P3 Lieferumfang

Daten-Zone danach: D4 Serienleiter, D5 Nachweise.

**Kategorie-Besonderheiten innerhalb der Dramaturgien**
| Kategorie | Was sich ändert | Lauter Block (nur Hero) |
|---|---|---|
| LED String Lights | Standard-Hero wie oben | I2 Dimmregler mit I3 Modus-Umschalter, falls beides vorhanden; sonst I1 Schieber |
| Christmas Tree Lights | P2 Sequenz "Am Baum in drei Schritten" statt P1 Hotspot, D1 Kettenplan mit Baumhöhen-Empfehlung | I4 Farbwechsel bei WW/Multicolor-Varianten, sonst I1 |
| Curtain, Icicle, Net | D1 als Flächenplan früh (Block 4), P2 Sequenz "Am Fenster" | I1 Schieber (Fenster bei Tag und Nacht) |
| Cluster | Standard-Dramaturgie, Fokus Dichte der Lichtpunkte, D6 Kennzahl LED-Anzahl | keiner, meist Standard |
| Solar und Garten | D3 als Solar-Zyklus statt Timer, P2 "Aufstellen und Ausrichten", D6 Leuchtzeit, D5 mit IP früh | I1 Schieber (Dämmerung) oder B3 Video Dämmerung |
| Smart (RGB) | P1 Hotspot auf Controller statt Fernbedienung, keine App-Screens, D2 entfällt | I4 RGB-Regler, LUMOnova-Mechanik |
| Motif Lights | Meist Long-Tail oder Standard, D6 Höhe, B1 und B2 als Stimmung | keiner |
| Weihnachtsbäume | D1 als Höhe und Durchmesser, P2 Aufbau, P1 Steckverbindung und Fuß | I1 Schieber oder I2 Dimmregler |

## 5. Ableitungsregeln (LUMOnova-Prinzip)

Das Basisbild einer Familie zeigt den Zustand an, 100 Prozent, Dauerlicht, Warmweiß. Jeder andere Zustand wird daraus abgeleitet, nie separat generiert, weil zwei Generierungen nie dieselbe Perspektive liefern.

| Zustand | Ableitung | Block |
|---|---|---|
| Gedimmt 25 bis 75 Prozent | CSS-Helligkeit und leichte Abdunkelung per Overlay, in Echtzeit | I2 |
| Atemlicht | CSS-Animation, Helligkeit pulsiert weich über 3 Sekunden | I3 |
| Blinken | CSS-Animation in Stufen, nur nach Klick, respektiert die Systemeinstellung für reduzierte Bewegung | I3 |
| Licht aus | Abgeleitetes Bild: Lichtquellen und Lichtschein abgedunkelt, Umgebung in Dämmerung. Wird als zweite Datei gespeichert, pixelidentisch zur Basis | I1 |
| Multicolor | Zweites Bild, deckungsgleich, per Überblendung. Entsteht aus der Basis per Farbbearbeitung der Lichtpunkte oder als Generierung mit der Basis als strenger Referenz, dann Deckungsprüfung | I4 |
| RGB-Regler (Smart) | Basis wird in einer einzigen Farbe generiert, Regler dreht die Farbe per CSS (LUMOnova-Mechanik) | I4 |

Testvorschlag für den Aus-Zustand, bevor er Standard wird: Für G40 das Basisbild G40-05 (Pergola) nehmen und den Aus-Zustand auf zwei Wegen erzeugen, einmal per Bildbearbeitung (Maske auf die Lichtpunkte, abdunkeln, Lichtschein reduzieren), einmal per Higgsfield mit der Basis als Referenz und dem Prompt "same scene, same camera, string lights switched off, dusk". Beide Ergebnisse im Schieber-Block ansehen. Der Weg mit der besseren Deckung wird Regel.

## 6. Bildspezifikation je Blocktyp

Für die Asset-Pipeline und für Higgsfield. Alle Bilder: textfrei, sRGB, Ausgabe als WebP (Qualität 82), Original zusätzlich als PNG archiviert. Zuschnitt-Anker: Produkt- oder Lichtquellen-Bereich mittig, bei Full-Width mit Freiraum unten links.

| Block | Format | Mindestgröße | Besonderheit |
|---|---|---|---|
| B1 Full-Width | 21:9 | 2800 × 1200 | Freiraum unten links für Overlay, Hauptmotiv rechts |
| B2 Split | 16:9 | 2048 × 1152 | Standardformat für Feature-Bilder und zugleich Basisbild der Familie |
| B3 Video | 16:9 | 1920 × 1080 | MP4 (H.264) und WebM, 4 bis 6 Sekunden, nahtloser Loop, statische Kamera, unter 3 MB, Poster als WebP |
| P1 Hotspot | 4:3 oder 1:1 | 2000 px lange Kante | Produkt frei stehend, Ränder frei, Hotspot-Koordinaten als Prozentwerte im Metafeld |
| P2 Sequenz | 4:3 | 1600 × 1200 | 3 bis 4 Bilder, gleiche Perspektive, gleiche Lichtstimmung |
| P3 Lieferumfang | 16:9 oder Raster 1:1 | 2048 lange Kante | Flatlay auf Creme oder Freisteller je Teil |
| I1 Schieber | 16:9 | 2048 × 1152 | Zwei Dateien, pixelidentisch: `_an` und `_aus` |
| I2, I3 | nutzt B2-Basis | | kein eigenes Asset |
| I4 Farbwechsel | 16:9 | 2048 × 1152 | Zwei Dateien pixelidentisch (`_ww`, `_mc`) oder eine monochrome Basis für Smart |
| Galerie | 1:1 | 2048 × 2048 | Position 1 echtes Produktfoto. Stimmungsbilder als 1:1-Beschnitt aus 16:9 |

Namensschema: `<FAMILIE>_<BLOCK>_<nn>[_zustand].webp`, zum Beispiel `OLG40_B1_01.webp`, `OLG40_I1_01_an.webp`, `OLG40_I1_01_aus.webp`. SKU-spezifische Bilder (Galerie, Verpackung) tragen die SKU statt der Familie.

## 7. Für den Theme-Claude-Code

- Den Feature-Baukasten von vier auf die zwanzig Typen aus Abschnitt 2 erweitern. Jeder Typ ein Block-Typ im Feature-Set-Metaobjekt mit eigenem Schema (Inhalt, Bildreferenzen, strukturierte Daten als JSON).
- Daten-Blöcke D1 bis D7 lesen ausschließlich Metafelder, keine Freitexte, damit Kettenplan, Skala, Zeitband und Serienleiter automatisch entstehen. Benötigte Felder: Länge, Zuleitung, Birnenabstand, Breite und Höhe (Flächenplan), Farbtemperatur, Timer-Dauer, Stromquelle, IP-Schutzart, koppelbar bis, Lieferumfang als Liste, Hotspots als JSON mit Position in Prozent und Label-Key. Fehlende Felder in der Metafeld-Definition ergänzen.
- D4 Serienleiter liest die Familie (Metafeld) und listet alle aktiven Produkte derselben Familie, sortiert nach Länge.
- Interaktive Blöcke I1 bis I4 arbeiten mit Touch und Maus, respektieren `prefers-reduced-motion` (dann statisches Bild im Zustand an), laden das zweite Bild erst bei Interaktion. I3 startet immer im Dauerlicht, Blinken nur nach Klick, kein Autoplay-Blinken.
- Rhythmus-Regeln als Block-Limits im Editor: höchstens ein lauter Block (B3, I1, I3, I4) je Feature-Set, B1 als erster Block erzwungen.
- Drei Dramaturgien als vorbelegte Feature-Set-Vorlagen (hero, standard, longtail), Auswahl über ein Metafeld am Produkt.
- Alle sichtbaren Labels (Hotspot-Texte, Chip-Beschriftungen, Modus-Namen, Skalen-Beschriftung) über Locales oder Metafelder, nichts hartcodiert, damit Translate und Adapt sie erfasst.
- CSS wie gehabt in globale Assets nach base.css. Mobile zuerst prüfen: Schieber per Touch, Kettenplan bricht auf schmalen Screens in zwei Zeilen, Hotspots werden auf Mobile zu einer Liste unter dem Bild.
- Reihenfolge der Umsetzung: zuerst D1, D3, D4, I2, I3 (Daten und abgeleitete Zustände, kein neues Material nötig), dann P1, P3, I1, zuletzt P2, I4, R2.

## 8. Für die Asset-Instanz

- Export-Profile nach Abschnitt 6 im Batch-Skript ergänzen. Je Bild wird anhand von `eignung` und `bildtyp` ein Profil zugewiesen, daraus entstehen die Formate. Bilder ohne passendes Profil bleiben bei Vollauflösung plus WebP 2048.
- Position-1-Kandidaten als Galerie 1:1 exportieren. Hotspot-Kandidaten als P1-Profil. Sequenzen und Lieferumfang nach P2 und P3.
- Namensschema aus Abschnitt 6, Familiencode aus einer Mapping-Tabelle SKU zu Familie, die Leon pflegt (bis dahin SKU verwenden).
- Faktenlisten je SKU bleiben die Quelle für D-Blöcke und Welle-2-Texte, deshalb Kennwerte dort möglichst als Schlüssel-Wert-Paare ausgeben (Länge, Birnen, Kelvin, IP, Timer, Reichweite Fernbedienung, Modi, Dimmstufen, koppelbar).

## 9. Beispiel: Familie OL-G40 in der Hero-Dramaturgie

| Nr. | Block | Inhalt | Asset |
|---|---|---|---|
| 1 | B1 Full-Width | GARTENPARTY-KLASSIKER, Abende, die niemand beenden will | G40-01 |
| 2 | B2 Split | WARMES LICHT, 2200 Kelvin | G40-02 |
| 3 | R1 Text | GEBAUT FÜR DRAUSSEN, IP45 und bruchfeste Birnen, zwei Absätze | kein Bild |
| 4 | I2 Dimmregler mit I3 Modus (laut) | VOLLE KONTROLLE, Regler 25 bis 100, Buttons Dauer, Atem, Blinken | Basis G40-05 |
| 5 | D1 Kettenplan | 3 m Zuleitung, 20 m Kette, 30 Birnen, 55 cm Abstand (OL-50: 30 m, 50 Birnen) | Metafelder |
| 6 | P1 Hotspot | Fernbedienung: Modus, Dimmen, Timer, Ein und Aus | Shenzhen-Rendering, falls vorhanden, sonst Higgsfield mit Referenz |
| 7 | D3 Zeitband Timer | 6 oder 8 Stunden an, Rest aus, Speicherfunktion | Metafelder |
| 8 | B4 Icon-Grid | Timer, Dimmbar, Koppelbar bis 4 | CSS |

Daten-Zone: D4 Serienleiter (OL-30, OL-50), D5 Nachweise (IP45, 24 V), P3 Lieferumfang (Kette, Fernbedienung, Transformator, 3 Ersatzbirnen), D7 Fragen.

Gegenüber dem bisherigen G40-Paket entfällt das Dimm-Video G40-04 zugunsten des abgeleiteten Dimmreglers, das Regenbild G40-03 wird zum Text-Block, weil die Seite sonst zwei laute oder zwei Split-Blöcke hintereinander hätte. Das Regenbild bleibt als Galeriebild erhalten.
