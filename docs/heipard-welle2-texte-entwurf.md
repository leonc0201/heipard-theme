# Welle 2: Textentwurf für die 20 Produkte

**Status: Entwurf, nichts im Shop geschrieben.** Leon sieht die Tabelle vor dem Schreiben. Stand 2026-10-22.

**Quellen:** Metafeld-Blatt `reports/metafelder/welle2_metafelder.csv` (nur Status eindeutig, bestätigt, Titel
maßgeblich, Vorgabe Leon), Faktenlisten `reports/fakten/<SKU>.json`, Lieferumfang aus dem Blatt, Fragen
`reports/metafelder/fragen_<FAMILIE>.md`. Der bisherige Shop-Titel steht zum Vergleich in der Tabelle.

**Regeln:** `heipard-welle2-plan.md` (Titel markengerecht und SEO-tauglich mit Produkttyp, Länge, Lichtfarbe,
innen oder außen, kein Keyword-Stapel; Beschreibung mit echten Merkmalen, nichts erfunden; subtitle als
Karten-Kurztext mit „·“). Textregel aus dem Feature-Set-Auftrag: „du“, erst die Situation, dann der Fakt mit
Zahl, keine Gedankenstriche, kein Garantie-, Herkunfts- oder Superlativ-Vokabular. Meta-Description 140 bis
155 Zeichen mit Produkttyp, Länge, Lichtfarbe, innen oder außen. Geprüft per Skript (Länge, Gedankenstriche,
Reizwörter). Die Beschreibung ergänzt die Technik-Tabelle auf der Seite und zählt nicht jeden Wert auf.

## Offen, bitte vor dem Schreiben festlegen

- **Eisregen, Lichtfarbe:** bei beiden nicht bestätigt. 864L: Shop „Multicolor“, Schieberbild „warmweiß und
  bunt“. 586L: Shop „Warmweiß“, bisheriger Titel „586 & Bunt“. Der Entwurf nimmt die Shop-Werte. Der
  Schieber-Text auf der Produktseite der 586L nennt sie „warmweiß“, das wäre dann ebenfalls zu prüfen.
- **Eisregen 586L, Länge:** fehlt in Blatt und Faktenliste, Titel und Meta deshalb ohne Länge.
- **Innen oder außen nicht bestätigt:** Lichternetz NPT (Shop teils „Innen & Außen“, teils „Außen“) und
  Baum-Lichterketten CTL 180M/240M (nur IP44). Dort fehlt innen/außen in Titel und Meta.
- **CTL 400:** Länge nicht bestätigt (bisher „2,5 m“). **OLAS14 50:** Birnenzahl nicht bestätigt.
- **CTL 210/400:** Der bisherige Titel nennt einen Timer, die Fakten nicht; der Entwurf lässt ihn weg.
- **BLT 5 m:** laut Amazon „3 × AA nicht enthalten“; soll das in die Beschreibung?
- **DGM Stern:** Anzahl Sterne und Stromquelle offen bis Tylers Antwort, deshalb nicht genannt.

## Lichtervorhang

| Feld | `hp-dct-200` |
|---|---|
| bisher | HeiPard LED-Lichtervorhang, 8 Modi, dimmbar |
| **Titel** | HeiPard LED-Lichtervorhang 3 x 2 m oder 3 x 3 m, für innen und außen, in drei Lichtfarben |
| **subtitle** | 200 oder 300 LEDs · 8 Modi · Timer |
| **Meta-Description** | LED-Lichtervorhang von HeiPard, 3 x 2 m oder 3 x 3 m, in Warmweiß, Kaltweiß oder Multicolor. Für innen und außen, mit Timer, Fernbedienung und 8 Modi. (150 Zeichen) |
| **Beschreibung** | Vor dem Fenster, an der Pergola oder hinter dem Sofa hängt der Vorhang in senkrechten Lichtsträngen und macht aus einer leeren Fläche einen Blickfang. Du bekommst ihn 3 m breit und 2 m hoch mit 200 LEDs oder 3 m hoch mit 300 LEDs, jeweils in Warmweiß, Kaltweiß oder Multicolor.<br><br>Mit der mitgelieferten Fernbedienung wählst du zwischen 8 Leuchtmodi und vier Helligkeitsstufen, der Timer schaltet nach 6 oder 8 Stunden ab. Nach IP44 ist der Vorhang gegen Spritzwasser geschützt, die Zuleitung ist 3 m lang. |
| Hinweis |  |

## Lichternetz

| Feld | `hp-npt-210` |
|---|---|
| bisher | HeiPard Lichternetz Außen 3x2 m |
| **Titel** | HeiPard LED-Lichternetz 3 x 2 m, warmweiß, weiß oder bunt, koppelbar |
| **subtitle** | 3 x 2 m · rund 200 LEDs · koppelbar |
| **Meta-Description** | LED-Lichternetz von HeiPard, 3 x 2 m, in Warmweiß, Weiß oder Multicolor. Koppelbar für größere Flächen, dimmbar in vier Stufen, mit Timer und 8 Leuchtmodi. (155 Zeichen) |
| **Beschreibung** | Über Hecke oder Busch gelegt oder an der Wand befestigt, verteilt das Netz seine Lichtpunkte über die ganze Fläche, ohne dass du eine Kette Zweig für Zweig verlegen musst. Es misst 3 x 2 m und leuchtet in Warmweiß, Weiß oder Multicolor.<br><br>Du wählst zwischen 8 Leuchtmodi, dimmst in vier Stufen und lässt den Timer nach 6 oder 8 Stunden abschalten. Für größere Flächen schließt du weitere Netze an, den Strom liefert ein Netzteil. |
| Hinweis | Innen oder außen ist nicht bestätigt (Shop: Varianten „Innen & Außen“ bzw. „Außen“, im Blatt kein Wert; IP44 nur bei Multicolor). Titel und Meta deshalb ohne innen/außen, bitte festlegen. |

## Eisregen

| Feld | `hp-vit-864l-eu-1` | `hp-vit-586l-eu-1` |
|---|---|---|
| bisher | HeiPard 864 Eisregen Lichterkette Außen | HeiPard Eisregen Lichterkette außen 586 & Bunt |
| **Titel** | HeiPard LED-Eisregen-Lichterkette 21,6 m für außen, bunt | HeiPard LED-Eisregen-Lichterkette für außen, warmweiß, 11 Leuchtmodi |
| **subtitle** | 21,6 m · 8 Modi · dimmbar | 11 Modi · dimmbar · IP44 |
| **Meta-Description** | LED-Eisregen-Lichterkette von HeiPard für außen, bunt, 21,6 m lang mit 15 cm Abstand der Lichtpunkte. 8 Leuchtmodi, dimmbar, mit Fernbedienung und IP44. (152 Zeichen) | LED-Eisregen-Lichterkette von HeiPard für außen, warmweiß, mit 11 Leuchtmodi, vier Dimmstufen und Fernbedienung. Nach IP44 gegen Spritzwasser geschützt. (152 Zeichen) |
| **Beschreibung** | An der Dachkante, am Balkon oder an der Pergola hängen die Stränge senkrecht nach unten und wirken wie Eiszapfen aus Licht. Die Kette ist 21,6 m lang, die Lichtpunkte sitzen im Abstand von 15 cm.<br><br>Mit der mitgelieferten Fernbedienung wählst du zwischen 8 Leuchtmodi und dimmst in vier Stufen von 25 bis 100 Prozent. Nach IP44 ist sie gegen Spritzwasser geschützt, den Strom liefert ein Netzteil. | Entlang von Dachkante, Regenrinne oder Balkongeländer hängen die Stränge frei nach unten wie Eiszapfen aus Licht. Mit 11 Leuchtmodi stellst du die Stimmung passend zum Abend ein.<br><br>Die Helligkeit regelst du in vier Stufen, Modus und Helligkeit bedienst du mit der mitgelieferten Fernbedienung. Nach IP44 ist die Kette gegen Spritzwasser geschützt, den Strom liefert ein Netzteil. |
| Hinweis | Lichtfarbe nicht bestätigt: Shop „Multicolor“, das Schieberbild zeigt „warmweiß und bunt“. Bitte festlegen, danach Titel und Meta anpassen. | Länge fehlt in Blatt und Faktenliste, deshalb ohne Länge. Lichtfarbe nicht bestätigt: Shop „Warmweiß“, bisheriger Titel „586 & Bunt“. Bitte beides festlegen; der Schieber-Text auf der Seite nennt die 586L „warmweiß“. |

## Außenlichterkette S14

| Feld | `hp-ola-s14-15-eu` | `hp-ola-s14-30-eu` | `hp-ola-s14-50-eu` |
|---|---|---|---|
| bisher | HeiPard LED Lichterkette Außen Outdoor Strom, 10m Aussen Beleuchtung | HeiPard LED Lichterkette Außen, 20m S14 Glühbirnen mit App & Fernbedienung | HeiPard LED Lichterkette Außen Outdoor Strom, 30m Aussen Beleuchtung |
| **Titel** | HeiPard Außenlichterkette S14, 10 m mit 15 Birnen, warmweiß, dimmbar | HeiPard Außenlichterkette S14, 20 m mit 30 Birnen, warmweiß, dimmbar | HeiPard Außenlichterkette S14, 30 m, warmweiß, dimmbar, mit Fernbedienung |
| **subtitle** | 10 m · 15 Birnen · 2700 K | 20 m · 30 Birnen · koppelbar | 30 m · 2700 K · dimmbar |
| **Meta-Description** | Außenlichterkette von HeiPard mit 15 S14-Birnen, 10 m, warmweiß mit 2700 K. Für draußen, dimmbar in vier Stufen, mit Fernbedienung, App und IP44. (145 Zeichen) | Außenlichterkette von HeiPard mit 30 S14-Birnen, 20 m, warmweiß mit 2700 K. Für draußen, bis zu vier Ketten koppelbar, dimmbar, mit Fernbedienung und App. (154 Zeichen) | Außenlichterkette von HeiPard mit S14-Birnen, 30 m, warmweiß mit 2700 K. Für draußen, dimmbar in vier Stufen, drei Leuchtmodi, mit Fernbedienung und App. (153 Zeichen) |
| **Beschreibung** | Über Terrasse, Pergola oder Gartenweg gespannt, tauchen die S14-Birnen den Platz in warmes Licht mit 2700 Kelvin. Die Kette misst 10 m mit Zuleitung, 15 Birnen hängen daran, eine Ersatzbirne liegt bei.<br><br>Mit der Fernbedienung schaltest du aus bis zu 25 m Entfernung, dimmst in vier Stufen von 25 bis 100 Prozent und wählst zwischen drei Leuchtmodi, alternativ steuerst du sie per App. Die Kette läuft mit 24 V und ist nach IP44 gegen Spritzwasser geschützt. | Über Terrasse, Pergola oder Gartenweg gespannt, tauchen die S14-Birnen den Platz in warmes Licht mit 2700 Kelvin. Die Kette misst 20 m mit Zuleitung, 30 Birnen hängen daran, zwei Ersatzbirnen liegen bei.<br><br>Mit der Fernbedienung schaltest du aus bis zu 25 m Entfernung, dimmst in vier Stufen und wählst zwischen drei Leuchtmodi, alternativ per App. Bis zu vier Ketten lassen sich verbinden, sie laufen mit 24 V und sind nach IP44 gegen Spritzwasser geschützt. | Über eine große Terrasse oder quer durch den Garten gespannt, tauchen die S14-Birnen alles in warmes Licht mit 2700 Kelvin. Die Kette misst 30 m mit Zuleitung, zwei Ersatzbirnen liegen bei.<br><br>Mit der Fernbedienung schaltest du aus bis zu 25 m Entfernung, dimmst in vier Stufen von 25 bis 100 Prozent und wählst zwischen drei Leuchtmodi, alternativ per App. Die Kette läuft mit 24 V und ist nach IP44 gegen Spritzwasser geschützt. |
| Hinweis | Außen beim 15er nur aus dem Titel, bei 30 und 50 bestätigt. |  | Birnenzahl fehlt in Blatt und Faktenliste, deshalb ohne Zahl. |

## Baum-Lichterkette

| Feld | `hp-ctl-180m` | `hp-ctl-240m` | `hp-ctl-210-eu-1` | `hp-ctl-400-eu-1` |
|---|---|---|---|---|
| bisher | HeiPard Lichterkette Weihnachtsbaum 1.5m 180LED 12 Stränge, Bunt | HeiPard Lichterkette Weihnachtsbaum 2m 240 LED 12 Stränge, Bunt | HeiPard Lichterkette Weihnachtsbaum 1,5 m 210 LEDs mit Ring und Timer | HeiPard Lichterkette Weihnachtsbaum 2,5 m 400 LEDs mit Ring und Timer |
| **Titel** | HeiPard Baum-Lichterkette 1,5 m mit 180 LEDs, bunt, mit Fernbedienung | HeiPard Baum-Lichterkette 2 m mit 240 LEDs, bunt, mit Fernbedienung | HeiPard Baum-Lichterkette 1,5 m mit 210 LEDs und Ring, warmweiß oder bunt, für innen | HeiPard Baum-Lichterkette mit 400 LEDs und Ring, warmweiß oder bunt, für innen |
| **subtitle** | 180 LEDs · 1,5 m · Multicolor | 240 LEDs · 2 m · Multicolor | 210 LEDs · mit Ring · 2 Lichtfarben | 400 LEDs · mit Ring · 2 Lichtfarben |
| **Meta-Description** | Baum-Lichterkette von HeiPard, 1,5 m mit 180 bunten LEDs für deinen Weihnachtsbaum. 8 Leuchtmodi, vier Dimmstufen, Fernbedienung und IP44-Schutz. (145 Zeichen) | Baum-Lichterkette von HeiPard, 2 m mit 240 bunten LEDs für große Weihnachtsbäume. 8 Leuchtmodi, vier Dimmstufen, Fernbedienung und IP44-Schutz. (143 Zeichen) | Baum-Lichterkette von HeiPard mit Ring, 1,5 m mit 210 LEDs in Warmweiß oder Multicolor. Für innen, mit 8 Leuchtmodi und vier Dimmstufen, per Netzteil. (150 Zeichen) | Baum-Lichterkette von HeiPard mit Ring und 400 LEDs in Warmweiß oder Multicolor, für innen. Mit 8 Leuchtmodi und vier Dimmstufen, Strom per Netzteil. (149 Zeichen) |
| **Beschreibung** | Von der Spitze aus über den Baum gelegt, fallen die Lichtstränge gleichmäßig über die Äste, ohne dass du die Kette Runde für Runde wickeln musst. 180 bunte LEDs sitzen im Abstand von 10 cm auf 1,5 m Länge.<br><br>Mit der mitgelieferten Fernbedienung wählst du zwischen 8 Leuchtmodi und dimmst in vier Stufen. Den Strom liefert ein Netzteil mit 3 m Zuleitung, nach IP44 ist die Kette gegen Spritzwasser geschützt. | Von der Spitze aus über den Baum gelegt, fallen die Lichtstränge gleichmäßig über die Äste, ohne dass du die Kette Runde für Runde wickeln musst. 240 bunte LEDs sitzen im Abstand von 10 cm auf 2 m Länge.<br><br>Mit der mitgelieferten Fernbedienung wählst du zwischen 8 Leuchtmodi und dimmst in vier Stufen. Den Strom liefert ein Netzteil mit 3 m Zuleitung, nach IP44 ist die Kette gegen Spritzwasser geschützt. | Der Ring kommt an die Baumspitze, von dort fallen die Lichtstränge gleichmäßig über die Äste nach unten. 210 LEDs verteilen sich auf 1,5 m, wahlweise in Warmweiß oder Multicolor.<br><br>Du wählst zwischen 8 Leuchtmodi und dimmst in vier Stufen, den Strom liefert ein Netzteil. Die Kette ist für den Einsatz in Innenräumen gedacht. | Der Ring kommt an die Baumspitze, von dort fallen die Lichtstränge gleichmäßig über die Äste nach unten. 400 LEDs sorgen auch an einem großen Baum für dichtes Licht, wahlweise in Warmweiß oder Multicolor.<br><br>Du wählst zwischen 8 Leuchtmodi und dimmst in vier Stufen, den Strom liefert ein Netzteil. Die Kette ist für den Einsatz in Innenräumen gedacht. |
| Hinweis | Innen oder außen ist nicht bestätigt (nur IP44). Meta und Titel deshalb ohne innen/außen, bitte festlegen. | Innen oder außen ist nicht bestätigt (nur IP44), bitte festlegen. „für große Weihnachtsbäume“ ist eine Einordnung gegenüber dem 1,5-m-Modell, keine Herstellerangabe. |  | Länge nicht bestätigt (bisheriger Titel „2,5 m“), deshalb ohne Länge. „an einem großen Baum“ ist eine Einordnung über die LED-Zahl. |

## Batterie-Lichterkette

| Feld | `hp-blt-050` | `hp-blt-100-eu-1` | `hp-blm-100-eu` |
|---|---|---|---|
| bisher | HeiPard Lichterkette Batterie Außen | Lichterkette Batterie Außen 10m 100 LEDs, Timer, Memoryfunktion | Lichterkette Batterie Außen 10m 100 LEDs mit Timer, Memoryfunktion |
| **Titel** | HeiPard Batterie-Lichterkette 5 m oder 20 m, warmweiß, für innen und außen, mit Timer | HeiPard Batterie-Lichterkette 10 m oder 15 m, warmweiß, für innen und außen | HeiPard Batterie-Lichterkette 10 m oder 15 m, warmweiß, für innen und außen, mit Timer |
| **subtitle** | 50 oder 200 LEDs · Batterie · Timer | 100 oder 150 LEDs · Batterie · IP44 | 100 oder 150 LEDs · Batterie · Timer |
| **Meta-Description** | Batterie-Lichterkette von HeiPard, 5 m oder 20 m, warmweiß, für innen und außen. Mit Timer für 6 Stunden, 8 Leuchtmodi und IP44, ganz ohne Steckdose. (149 Zeichen) | Batterie-Lichterkette von HeiPard, 10 m mit 100 LEDs oder 15 m mit 150 LEDs, warmweiß, für innen und außen. 8 Leuchtmodi und IP44, ohne Steckdose. (146 Zeichen) | Batterie-Lichterkette von HeiPard, 10 m oder 15 m, warmweiß, für innen und außen. Mit Timer, 8 Leuchtmodi und IP44, ganz ohne Steckdose zu betreiben. (149 Zeichen) |
| **Beschreibung** | Über dem Gartentisch, am Balkon oder im Regal braucht diese Kette keine Steckdose, sie läuft mit Batterien. Du bekommst sie mit 50 LEDs auf 5 m oder mit 200 LEDs auf 20 m, in Warmweiß mit 2700 Kelvin bei der 5-m-Kette.<br><br>Der Timer hält die Kette 6 Stunden an und schaltet sie dann für 18 Stunden ab, so leuchtet sie jeden Abend zur gleichen Zeit. Du wählst zwischen 8 Leuchtmodi, nach IP44 ist sie gegen Spritzwasser geschützt. | Über dem Gartentisch, am Balkon oder im Regal braucht diese Kette keine Steckdose, sie läuft mit Batterien. Du bekommst sie mit 100 LEDs auf 10 m oder mit 150 LEDs auf 15 m, in Warmweiß.<br><br>Du wählst zwischen 8 Leuchtmodi, die Kette läuft mit 4,5 V und ist nach IP44 gegen Spritzwasser geschützt. So kann sie drinnen wie draußen hängen. | Auf dem Balkon, am Fenster oder im Kinderzimmer hängt die Kette dort, wo keine Steckdose ist, sie läuft mit Batterien. Du bekommst sie mit 100 LEDs auf 10 m oder mit 150 LEDs auf 15 m, in Warmweiß.<br><br>Der Timer hält die Kette 6 Stunden an und schaltet sie dann für 18 Stunden ab. Du wählst zwischen 8 Leuchtmodi, nach IP44 ist sie gegen Spritzwasser geschützt. |
| Hinweis | Batterien sind laut Amazon nicht enthalten (Hinweis „3 × AA nicht enthalten“ bei 5 m); im Text nicht erwähnt, bitte entscheiden. | Kein Timer in den Fakten dieser Längen (nur 5 m und 20 m). |  |

## Cluster-Lichterkette

| Feld | `hp-dfm-400-eu-2` | `hp-dfm-600` | `hp-dfm-750-eu` |
|---|---|---|---|
| bisher | Cluster Lichterkette Outdoor 400 LEDs 6 m, Lichterkette Außen | HeiPard Lichterkette Cluster 6m | Cluster Lichterkette Outdoor 750 LEDs 11,25 m, Lichterkette Außen |
| **Titel** | HeiPard Cluster-Lichterkette 6 m oder 15 m, für innen und außen, in drei Lichtfarben | HeiPard Cluster-Lichterkette 9 m oder 18 m, warmweiß oder bunt, für innen und außen | HeiPard Cluster-Lichterkette 11,25 m oder 22,5 m, warmweiß oder bunt, für innen und außen |
| **subtitle** | 400 oder 1000 LEDs · dimmbar · IP44 | 600 oder 1200 LEDs · dimmbar · IP44 | 750 oder 1500 LEDs · dimmbar · IP44 |
| **Meta-Description** | Cluster-Lichterkette von HeiPard, 6 m mit 400 oder 15 m mit 1000 LEDs, in Warmweiß, Kaltweiß oder Multicolor. Für innen und außen, dimmbar, 8 Modi. (147 Zeichen) | Cluster-Lichterkette von HeiPard, 9 m mit 600 oder 18 m mit 1200 LEDs, warmweiß oder bunt, für innen und außen. Dimmbar, 8 Modi, mit Fernbedienung. (147 Zeichen) | Cluster-Lichterkette von HeiPard, 11,25 m mit 750 oder 22,5 m mit 1500 LEDs, warmweiß oder bunt, für innen und außen. Dimmbar in vier Stufen. (141 Zeichen) |
| **Beschreibung** | Um Baum, Geländer oder Girlande gewickelt, sitzen die LEDs so dicht, dass die Kette wie ein durchgehendes Lichtband wirkt. Du bekommst sie mit 400 LEDs auf 6 m oder mit 1000 LEDs auf 15 m, in Warmweiß, Kaltweiß oder Multicolor.<br><br>Du dimmst in vier Stufen von 25 bis 100 Prozent und wählst zwischen 8 Leuchtmodi. Den Strom liefert ein Netzteil, nach IP44 ist die Kette gegen Spritzwasser geschützt. | Um Baum, Geländer oder Girlande gewickelt, sitzen die LEDs im Abstand von nur 1,5 cm und wirken wie ein durchgehendes Lichtband. Du bekommst die Kette mit 600 LEDs auf 9 m oder mit 1200 LEDs auf 18 m, in Warmweiß oder Multicolor.<br><br>Mit der Fernbedienung dimmst du in vier Stufen und wählst zwischen 8 Leuchtmodi. Den Strom liefert ein Netzteil mit 3 m Zuleitung, nach IP44 ist die Kette gegen Spritzwasser geschützt. | Um Baum, Geländer oder Girlande gewickelt, sitzen die LEDs so dicht, dass die Kette wie ein durchgehendes Lichtband wirkt. Du bekommst sie mit 750 LEDs auf 11,25 m oder mit 1500 LEDs auf 22,5 m, in Warmweiß oder Multicolor.<br><br>Du dimmst in vier Stufen von 25 bis 100 Prozent und wählst zwischen 8 Leuchtmodi. Den Strom liefert ein Netzteil, nach IP44 ist die Kette gegen Spritzwasser geschützt. |
| Hinweis |  |  |  |

## Solar-Kugellichterkette

| Feld | `hp-sblb-60l-ww-new` | `hp-sblb-100l-ww-new` |
|---|---|---|
| bisher | HeiPard Solar Lichterkette Außen Wetterfest 11M 60 LED | HeiPard Solar Lichterkette Außen Wetterfest 17M 100 LED |
| **Titel** | HeiPard Solar-Lichterkette mit Kristallkugeln, 11 m, warmweiß, für außen | HeiPard Solar-Lichterkette mit Kristallkugeln, 17 m, warmweiß, für außen |
| **subtitle** | 60 Kugeln · Solar · bis 12 h | 100 Kugeln · Solar · bis 12 h |
| **Meta-Description** | Solar-Lichterkette von HeiPard mit 60 Kristallkugeln auf 11 m, warmweiß, für außen. Leuchtet bis zu 12 Stunden, 8 Leuchtmodi, ganz ohne Steckdose. (146 Zeichen) | Solar-Lichterkette von HeiPard mit 100 Kristallkugeln auf 17 m, warmweiß, für außen. Leuchtet bis zu 12 Stunden, 8 Leuchtmodi, ganz ohne Steckdose. (147 Zeichen) |
| **Beschreibung** | Das Solarpanel lädt tagsüber im Beet, bei Dämmerung schaltet die Kette ein und leuchtet bis zu 12 Stunden, ganz ohne Steckdose. 60 Kristallkugeln auf 11 m streuen das Licht weich über Terrasse und Sitzplatz.<br><br>Du wählst zwischen 8 Leuchtmodi, und die 2 m lange Zuleitung zwischen Panel und Kette lässt dich das Panel dorthin stellen, wo die Sonne hinkommt. Ein Erdspieß mit Verbindungsstück liegt bei. | Das Solarpanel lädt tagsüber im Beet, bei Dämmerung schaltet die Kette ein und leuchtet bis zu 12 Stunden, ganz ohne Steckdose. 100 Kristallkugeln auf 17 m reichen auch über eine größere Terrasse.<br><br>Du wählst zwischen 8 Leuchtmodi, und die 2 m lange Zuleitung zwischen Panel und Kette lässt dich das Panel dorthin stellen, wo die Sonne hinkommt. Ein Erdspieß mit Verbindungsstück liegt bei. |
| Hinweis | Stromquelle in den Fakten mehrdeutig (Netzteil oder Solar); Leons Blocktexte und der Shop sagen Solar. | Stromquelle wie beim 60er. |

## Gartenstecker

| Feld | `hp-dgm-001` |
|---|---|
| bisher | HeiPard LED Gartenstecker Stern Deko Beleuchtung für Außen Garten Leuchte |
| **Titel** | HeiPard LED-Gartenstecker Stern, warmweiß, für außen |
| **subtitle** | 120 LEDs · warmweiß · IP44 |
| **Meta-Description** | LED-Gartenstecker in Sternform von HeiPard, warmweiß mit 120 LEDs, für außen. Steckt direkt im Beet oder am Weg, nach IP44 gegen Spritzwasser geschützt. (152 Zeichen) |
| **Beschreibung** | Im Beet, am Weg oder vor der Haustür gesteckt, setzt der Gartenstecker abends warme Lichtpunkte in den Garten. Er hat 120 LEDs in Sternform und steckt direkt in der Erde.<br><br>Er ist für den Außenbereich gedacht und nach IP44 gegen Spritzwasser geschützt. |
| Hinweis | Keine Länge (Gartenstecker). Anzahl Sterne und Stromquelle offen bis Tylers Antwort, deshalb nicht genannt. |
