# Teil K: Korrekturen nach Leons Antworten, Texte, englische Begriffe

Stand 23.11.2026, 02:20 Uhr. Auftrag `heipard-theme-auftrag-teil-k.md` (Stand 23.11., 01:45 Uhr). Leons Antworten: ES, FR,
IT wieder einschalten; Hero Intro für alle, danach live; Versand aus Deutschland stimmt; HLS-Probe: Schleife blieb nach
einer Runde stehen, es bleibt bei den eigenen Dateien; Vorschau-Themes löschen.

Nicht angefasst: Preise, Status, Bestand, Produktmedien, Files, Handles, `feature_*`, Showroom-Logik. Vor jedem
Schreibvorgang `get-shop-info` = HeiPard.

## Kurzfassung

- **1.1 Sprachen:** ES, FR, IT seit 01:08 Uhr wieder veröffentlicht. Liste für Daniel liegt bei (falsche Zusagen zuerst).
  **Translate & Adapt übersetzt fehlende Werte offenbar noch automatisch**, zuletzt Do 19.11. abends, auch ins Englische.
- **1.2 Hero:** Intro für alle seit 01:30:31 Uhr live, mit Sitzung, Ansage, Lesen-Erkennung und Hinweis ohne Intro. Am
  Desktop läuft der 1600er-Clip (schärfer als 720p, das Standbild bleibt schärfer). Alle Prüffälle live grün,
  Kontaktbogen und Aufnahmen liegen ab.
- **1.3 Trust-Leiste:** [TBD] weg, englisch „Fast delivery“.
- **1.4 HLS:** Testweg ausgebaut. Ursache: `loop` wird bei HLS nicht beachtet, `ended` beendete die Schleife. Robuster
  Neustart für diesen Fall eingebaut, MP4 unverändert.
- **1.5 Vorschau-Themes:** Löschen sperrt der Connector, bitte im Admin löschen (beide unveröffentlicht).
- **2.1 SEO-Paare:** 16 SEO-Titel neu, Deutsch und Englisch, kein doppelter mehr.
- **2.5/2.12 Titel:** 6 [prüfen]-Fälle nach der Faktenliste geschrieben, hp-fxf-001 mit 180 LEDs. Offen hp-ol-15-g,
  hp-dgm-048.
- **2.7 Rechtstexte:** Der Connector darf die Richtlinien nicht schreiben. Die zwei Link-Korrekturen musst du im Admin
  machen (genaue Stellen unten).
- **2.10 Metafelder EN:** 188 Werte korrigiert (OLG „Higher Regional Court“, BLM „Black Lives Matter“, Netz = „Plug-in“,
  „Indoor & Outdoor“). Englisch ist die Serienleiter bei OLG und DGM damit wieder da.
- **2.11 Lichtfarbe:** nicht geschrieben. Das Feld fasst nur einen Wert, Entscheidung nötig (Empfehlung: Listenfeld und
  Filter umstellen).
- **4 Englische Begriffe:** 167 Stellen angeglichen, davon 118 Produkttypen, außerdem Beschreibungen, Lieferumfang und
  Pflegetexte.
- **3.1 Texte:** die 15 freigegebenen Texte mit Meta-Description geschrieben, Deutsch und Englisch, `todo-text` entfernt.
- **3.2 / 3.3 Entwürfe:**
  - 29er-Entwurf mit der Faktenliste ergänzt, jetzt 16 ohne [TBD].
  - Zweite Runde 54 Produkte, davon 27 ohne [TBD].
  - Nichts davon geschrieben, beides wartet auf deine Freigabe.
- **Beim Nachladen gefunden und behoben:**
  - Englisch fehlte die Lichtfarbe bei Produkten mit Farbvarianten, weil das Theme nur die Option „Lichtfarbe“ suchte.
  - Das Kachel-Raster kannte „Battery“ nicht.

## 1.1 Sprachen ES, FR, IT

**Wieder veröffentlicht** um 01:08 Uhr (`shopLocaleUpdate`, `published: true`), geprüft 01:08 bis 01:09 Uhr:
- Sprachwahl: Deutsch, Englisch, Spanisch, Italienisch, Französisch.
- `hreflang`: `x-default`, `de`, `en`, `es`, `it`, `fr` auf Startseite und Sprachseiten.
- `/es/`, `/fr/`, `/it/`: 200 (mit Passwort), `lang` stimmt.
- Sitemap: wieder je Sprache Produkte, Seiten, Kollektionen, Blogs (21 Teil-Sitemaps).

**Liste für Daniel:** `docs/data/teilk-uebersetzungen-es-fr-it.md` (Stelle, Text heute, Problem; falsche Zusagen zuerst).

| | Spanisch | Französisch | Italienisch |
|---|---|---|---|
| veraltet | 168 | 167 | 170 |
| davon Produkttitel (Titelrunde) | 98 | 101 | 100 |
| fehlend | 2780 | 2779 | 2778 |
| falsch übersetzt, eindeutig | 144 | 34 | 26 |
| falsche Zusagen (Stellen) | 6 | 7 | 6 |

- **Falsche Zusagen:**
  - Trust-Leiste, alle drei Sprachen: 30 Tage Rückgaberecht (es „30 días de derecho de devolución“ und „Sin peros“).
    Deutsch steht dort „Lichterketten & Solarleuchten“.
  - Story: Niederrhein, geprüfte Ketten, Service in der Landessprache (es, it); fr „Bas-Rhin“ (Elsass), auch im Footer.
  - AGB es/it mit „[URL des Online-Shops]“ und „[Telefonnummer]“; AGB fr ein anderer, allgemeiner Text.
  - Impressum fr mit „[Telephone]“ und „Kamer van Koophandel (KVK)“.
  - Widerrufsbelehrung es/it ohne Telefonnummer.
  - Lieferumfang an 17 Produkten (Erdspieß, Netzteil, Ersatzbirnen fehlen).
- **Maschinenfehler:** es „Multicolor彩在线“ an 30 Stellen. Codes übersetzt, die das Theme vergleicht: `familie` (es „Tribunal Superior de Justicia“ für OLG), `dramaturgie` (es „estándar“, „héroe“, it „eroe“, fr „héros“). Damit
  greifen auf den Sprachseiten Serienleiter und Dramaturgie nicht.

**Übersetzungsweg (was die Daten zeigen):**
- Installierte Apps: Translate & Adapt (Shopify) ist die einzige Übersetzungs-App. Daneben Flow, Search & Discovery,
  Messaging, Order Printer Pro, EU Widerruf Button.
- **Die automatische Übersetzung läuft noch.** Läufe am 06.11. 00:35, 07.11. 21:22, Do 12.11. 21:19 bis 21:28 und Do 19.11.
  21:27 bis 21:34 Uhr (Zeitstempel; dazu Commits von `shopify[bot]` an `locales/es|fr|it.json` am 12.11. 21:28 und 19.11.
  21:34 Uhr).
- Sie übersetzt **fehlende** Werte (Produkt-Metafelder, Kollektionen, Theme-Texte) nach 1 bis 3 Tagen, **auch ins
  Englische**. Einmal (12.11.) hat sie eine veraltete Übersetzung ersetzt.
- Nicht angefasst hat sie Metaobjekte, Alt-Texte, die Startseiten-Vorlage und die Rechtstexte.
- Die Titel der Titelrunde (22.11., 21:09 Uhr) stehen es/fr/it auf „veraltet“ mit altem Wert; die 16 neuen Varianten haben
  in keiner Sprache Optionsübersetzungen. Seit dem 22.11., 21:23:48 Uhr hat sich ohne unser Zutun keine Übersetzung
  geändert.
- **Folge:** Fehlende englische Werte füllt der nächste Lauf (nach dem Muster etwa Do 26.11. abends) maschinell. Deshalb
  habe ich in Abschnitt 2.10 nichts gelöscht, sondern die englischen Werte gesetzt.
- Die Einstellungen von Translate & Adapt zeigt die API nicht. Daniel sollte dort nachsehen, ob „automatisch übersetzen“
  aktiv ist und für welche Sprachen. Geändert habe ich nichts.

**Projektstand:** Pflichtpunkt „Übersetzungen Spanisch, Französisch, Italienisch“ im neuen Abschnitt „Pflicht vor dem
Launch“.

## 1.2 Hero: Intro für alle

**Umgesetzt** (`2409277`, Code mit Standard „aus“):

| Regel | Umsetzung |
|---|---|
| 1 Tempo schnell | Einstellung `tempo: schnell` (4 s), kein Pausenknopf am Hero |
| 2 Sitzung | Nach dem Intro `sessionStorage heipard-theme-sitzung = dark`; `layout/theme.liquid` liest es vor dem ersten Bild. Dauerhaft speichert weiter nur ein Klick (`localStorage`). |
| 3 Ansage | `<p class="visually-hidden" aria-live="polite">` im Hero, Text „Abendstimmung eingeschaltet“ / „Evening mode on“ (`heipard.hero.ansage_abend`) |
| 4 Lesen | Bis zum Ende des Clips zählen Tippen/Klick (`pointerdown`), Taste (`keydown`) und Hero unter halb sichtbar (`IntersectionObserver`). Dann bleibt die Seite hell, der Hero auf dem Abendbild. Schaltet der Besucher danach selbst auf Abend, läuft kein zweiter Clip. |
| 5 Ohne Intro | Reduzierte Bewegung, Save-Data (auch 2G/3G und `prefers-reduced-data`), kein Clip, Clip startet nicht in 2,5 s: Hinweis „Licht an?“ am Schalter (einmal je Sitzung) |

**Desktop-Clip 1600 × 900** (Punkt 8, Asset-Auftrag 31):
- Die Dateien sind allgemeine Dateien, die Theme-Einstellung „Video“ nimmt sie nicht. Neu: `clip_on_schnell_datei` und
  `clip_off_schnell_datei` (Adresse aus Files), sie ersetzen ab 750 px die schnelle Video-Fassung (`90eb3f0`). Mobil
  bleibt 720p.
- **Schärfe** wie in Teil J (Browser, 1920 × 1080, letztes Clipbild gegen das Standbild HOME-03):

  | Ausschnitt | 720p (Teil J) | 1600 × 900 | Standbild |
  |---|---|---|---|
  | ganzes Bild | 3,37 | 3,63 | 4,88 |
  | Lichterkette | 5,3 | 5,26 | 6,03 |
  | Tisch | 6,3 | 7,65 | 13,31 |
  | Hauswand | 3,7 | 4,08 | 5,95 |

  Deutlich besser bei Tisch und Hauswand, an der Lichterkette gleich. Das Standbild bleibt schärfer, das liegt laut
  Asset-Instanz schon am Kling-Original. Vergleich: `docs/data/teilk-hero-1600-1920.jpg`.

**Live** seit 01:30:31 Uhr (`1b5ab56`: Tag-Modus „Intro auch am Tag“, 1600er-Dateien; Prüfung vorher im Vorschau-Theme
01:20 bis 01:29 Uhr, alle Fälle wie unten).

**Prüfung live** (01:30:43 bis 01:33:40 Uhr, Skript, Edge, Desktop 1440 × 900 und mobil 390 × 844):

| Fall | Ergebnis |
|---|---|
| Tag, erster Aufruf, Desktop | Intro mit 1600er-Clip, nach 4,4 s Abendstimmung, Ansage „Abendstimmung eingeschaltet“, „Licht aus“ am Schalter, `localStorage` leer |
| Tag, mobil | Intro mit 720p, nach 4,3 s Abendstimmung, Ansage |
| Englisch | Ansage „Evening mode on“, „Lights off“ |
| zweite Seite (Kollektion Weihnachten) und zurück zur Startseite | Abendstimmung schon beim Laden, kein zweites Intro, Hero Abendbild |
| Abend (gespeichert), Desktop/mobil | Intro wie bisher, keine Ansage |
| gescrollt (Hero unter halb sichtbar), Desktop/mobil | Seite bleibt hell, Hero Abendbild; Schalter danach: Abend ohne zweiten Clip, zurück: Clip „Licht aus“ |
| kleiner Scroll (120 px, Hero über halb sichtbar) | wechselt wie ohne Scroll |
| getippt (mobil), geklickt (Desktop), Taste Tab | Seite bleibt hell |
| Tastatur | Tab erreicht den Schalter, Fokusrahmen 2 px sichtbar, Enter schaltet (gespeichert) |
| Vorleseprogramm | Ansage im Barrierefreiheitsbaum (StaticText „Abendstimmung eingeschaltet“, Region `aria-live="polite"`) |
| reduzierte Bewegung | kein Intro, nach 2 s „Licht an?“ ohne Leuchten |
| Save-Data (mobil) | kein Intro, „Licht an?“ |
| Clip gesperrt | nach 2,5 s „Licht an?“, Hero Tagbild |
| reduzierte Bewegung, Abend | Abendbild, kein Clip |

- **Kontaktbogen:** `docs/data/teilk-hero.jpg`.
- **Aufnahmen** (OneDrive, `…\Theme-Aufnahmen\Teil K`): `teilk-live-intro-tag_desktop.webm`, `_mobil.webm`,
  `teilk-live-abend_desktop.webm`, `_mobil.webm`.

**Rückweg:** Theme-Editor, Hero, Tag-Modus auf „Hinweis am Schalter“, die beiden Datei-Felder leeren. Oder
`git revert 1b5ab56` (Vorlage), Code `git revert 90eb3f0 2409277`.

## 1.3 Trust-Leiste

- [TBD] bei „Versand aus Deutschland“ entfernt (`decf654`, live 01:38:38 Uhr).
- Englische Unterzeile „Fast delivery“ (vorher „I'll be right with you“), 01:38:50 Uhr (`translationsRegister`).
- Nachgeladen 01:38:56 Uhr, Deutsch und Englisch, 1440 und 390 px: kein [TBD], „Shipping from Germany / Fast delivery“.

## 1.4 HLS-Probe

- **Ausgebaut** (`2409277`): `?clip_hls=1`, die HLS-Adressen im Block (`data-clip-*-hls`) und der m3u8-Zweig in
  `heipard-clip-json`.
- **Ursache:** Die Schleife hängt am Attribut `loop`; die Runden zählt `timeupdate` (Sprung an den Anfang), das Ende
  `ended`. Spielt der Browser HLS nativ ab (Safari, Chrome auf Android), beachtet er `loop` bei HLS-Streams nicht
  zuverlässig: Am Ende der ersten Runde kommt `ended`, und `ended` beendete im Schleifenteil den Clip. Genau das hat Leon
  gesehen.
- **Normaler Weg (MP4):** `loop` wird bei MP4 auf iOS Safari und Chrome Android beachtet, dort tritt der Fehler nach
  allem Wissen nicht auf. Auf echten Geräten geprüft habe ich das nicht.
- **Korrektur trotzdem eingebaut:** Kommt im Schleifenteil `ended`, bevor drei Runden gelaufen sind, startet das Skript die
  Schleife selbst neu und zählt die Runde dort. Bei MP4 ändert sich nichts, ein Browser ohne `loop` läuft damit ebenfalls
  drei Runden.
- Leon, bitte einmal die normale Seite auf dem Handy ansehen (eine Produktseite mit Clip, z. B. hp-isl-360-eu, drei
  Runden, dann Standbild).

## 1.5 Vorschau-Themes

Beide sind unveröffentlicht (`UNPUBLISHED`): „zz-test Teil G Platzhalter (kann weg)“ (#199725613389) und „zz-vorschau
Teil H Hero (kann weg)“ (#199733903693). **Löschen ging nicht:** Der Connector sperrt `themeDelete` („could take down
the live storefront“). Bitte im Admin löschen (Onlineshop, Themes, „…“, Löschen). #199733903693 habe ich vorher noch für
die Hero-Prüfung genutzt.

## 2. Antworten auf die Fragen

### 2.1 Doppelte SEO-Titel

16 Produkte, Deutsch 01:42:50 und Englisch 01:43:30 Uhr. Beschreibung jeweils mitgeschickt (2 mit Text, 14 leer).
Liste vorher und nachher: `docs/data/teilk-seo-paare.csv`.

| Paar | SEO DE neu | SEO EN neu |
|---|---|---|
| hp-olg-100 / hp-olt-100 (ebenso 200, 400, 600, 800) | HeiPard Lichterkette 10 m mit 100 LEDs, grünes Kabel / transparentes Kabel | HeiPard String Lights 10 m with 100 LEDs, Green Cable / Transparent Cable |
| hp-olg-300-eu / hp-olt-300-eu | HeiPard Lichterkette 30 bis 100 m, grünes Kabel / transparentes Kabel | … 30 to 100 m, Green Cable / Transparent Cable |
| hp-blm-100-eu (hp-blt-100-eu-1 bleibt) | HeiPard Batterie-Lichterkette 10 m oder 15 m, mit Timer | HeiPard Battery-Powered Fairy Lights, with Timer |
| hp-ol-50 (hp-olh-g40-50 bleibt) | HeiPard Außenlichterkette G40, 30 m, mit Fernbedienung | HeiPard Outdoor String Lights G40, 30 m, with Remote Control |
| hp-dct-200 / hp-uct-200-eu | HeiPard LED-Lichtervorhang, in drei Lichtfarben / warmweiß oder kaltweiß | HeiPard LED Light Curtain, in Three Light Colors / Warm White or Cool White |

- **Regel für die Fälle, in denen Merkmal oder Lichtfarbe nicht in 60 Zeichen passen:** Die im Paar gleiche Angabe fällt
  weg, zuerst die Anzahl, dann das Maß. Betroffen: hp-ol-50 (ohne „mit 50 Birnen“), hp-blm-100-eu englisch (ohne Maß, sonst
  61 Zeichen), hp-dct-200 und hp-uct-200-eu (ohne Maß; dort ist die Lichtfarbe das Unterscheidende).
- Das Paar ohne Merkmal (hp-blt-100-eu-1, hp-olh-g40-50) behält seinen SEO-Titel, damit ist es eindeutig.
- **Gegenprobe:** Über alle Produkte kein doppelter SEO-Titel mehr, Deutsch und Englisch. pec-150g und pvc-150g sind
  englisch nicht gleich: Beide haben keinen eigenen SEO-Titel, es gilt der Titel.
- Keine Übersetzung steht danach auf „veraltet“.

### 2.3 Kabelfarbe, 2.4 Länge

- Kabelfarbe: Die Asset-Instanz hat alle 15 OLG/OLT-Titel an den Bildern bestätigt (OLG grün, OLT transparent). Nichts zu
  ändern.
- *Abgelöst durch Teil L 1.3 (2026-11-23): Der Titel nennt die beleuchtete Länge, siehe `projektstand.md`,
  Abschnitt „Titelmuster Produkte“.*
- Länge: Gesamtlänge im Titel gilt als Regel. hp-ols-a60-16-eu: 6,5 m Kette plus 2 m Verlängerung = 8,5 m, der Titel
  stimmt. hp-ol-30 (20 m) und hp-ol-50 (30 m) stimmen ebenfalls.

### 2.5 [prüfen]-Fälle nach der Faktenliste, 2.12 hp-fxf-001

Liste vorher gepusht (`dd2d3d5`, 01:46:51), geschrieben Deutsch 01:47:20, Englisch 01:47:50 Uhr:
`docs/data/teilk-titel.csv` (mit Quelle je Baustein).

| Produkt | Titel DE neu | Titel EN neu |
|---|---|---|
| hp-bsl-100-2p | HeiPard Batterie-Lichterkette 10 m mit 100 LEDs, 2er-Set, warmweiß, für innen | HeiPard Battery-Powered Fairy Lights 10 m with 100 LEDs, Set of 2, Warm White |
| hp-bsl-50-2p | HeiPard Batterie-Lichterkette 5 m mit 50 LEDs, 2er-Set, warmweiß, für innen | HeiPard Battery-Powered Fairy Lights 5 m with 50 LEDs, Set of 2, Warm White |
| hp-cl-1-eu | HeiPard Camping-Lichterkette, aufrollbar, 10 m, warmweiß, für innen und außen, 3-in-1 | HeiPard Retractable Camping String Lights 10 m, Warm White, 3-in-1 |
| hp-cl-2-eu | HeiPard Camping-Lichterkette, aufrollbar, 10 m, warmweiß, für innen und außen, 4-in-1 | HeiPard Retractable Camping String Lights 10 m, Warm White, 4-in-1 |
| hp-csl-300-c | HeiPard LED-Lichtervorhang 3 x 3 m mit 300 LEDs, kaltweiß, für innen | HeiPard LED Light Curtain 3 x 3 m with 300 LEDs, Cool White, for Indoor Use |
| hp-ola-g40-15-eu | HeiPard Außenlichterkette G40, 10 m mit 15 Birnen, warmweiß, mit App | HeiPard Outdoor String Lights G40, 10 m with 15 Bulbs, Warm White, with App |
| hp-fxf-001 | HeiPard LED-Rentier mit Schlitten und 180 LEDs | HeiPard LED Reindeer with Sleigh and 180 LEDs |

- Metafelder: hp-fxf-001 `led_anzahl` = 180, hp-csl-300-c `lichtfarbe` = Kaltweiß (war leer, sonst fehlte es im Filter).
- **Neue Begriffe:** „3-in-1“, „4-in-1“ (Merkmal aus der Faktenliste: 3-in-1 = Lichterkette, Campinglampe, Powerbank; 4-in-1
  = Campinglicht, Arbeitslicht, Taschenlampe, Lichterkette); „und 180 LEDs“ statt „mit 180 LEDs“, weil die Produktart
  schon „mit Schlitten“ enthält.
- SEO bei den Paaren nach 2.1: hp-cl-1/-2 mit Merkmal statt Lichtfarbe; hp-ola-g40-15-eu mit „mit App“ (sonst gleich
  hp-olh-g40-15); hp-bsl-*-2p englisch ohne LED-Zahl (sonst gleich hp-bsl-*-1p oder über 60 Zeichen).
- **Weiter offen:** hp-ol-15-g (gleiche ASIN und Daten wie hp-ol-15, „-G“ unbelegt, Dublette: Leon oder Shenzhen) und
  hp-dgm-048 (Leon).
- **Nicht geändert, liegt bei Leon** (Faktenliste, Abschnitt 6 im Asset-Bericht): Lieferumfang BSL-2P „1 ×“, beleuchtete
  Länge 20 m bei hp-ola-g40-15-eu, die zwei fremden Bilder bei hp-csl-300-c und die übrigen falschen Shop-Werte.

### 2.7 Rechtstexte

**Nicht geschrieben:** Der Connector hat keinen Zugriff `write_legal_policies`, `shopPolicyUpdate` wurde abgelehnt. Am
Text hat sich nichts geändert. Bitte im Admin (Einstellungen, Richtlinien):

| Richtlinie | heute | soll |
|---|---|---|
| Kontaktinformationen | `<a href="mailto:info@ozeanos.com">info@heipard.com</a><a href="mailto:info@lumo-nova.de"></a>` | `<a href="mailto:info@heipard.com">info@heipard.com</a>` (zweiter Link weg) |
| Widerrufsbelehrung | Link-Ziel `https://www.lumo-nova.de/pages/vertrag-widerrufen` | `https://www.heipard.com/pages/vertrag-widerrufen` |

- Die Seite `/pages/vertrag-widerrufen` gibt es im Shop (Vorlage `vertrag-widerrufen`, von der App „EU Widerruf Button“).
- heipard.com zeigt heute auf eine WordPress-Seite, die Hauptdomain des Shops ist noch `heipard.myshopify.com`. Der Link
  funktioniert erst nach dem Domainwechsel. Beides steht als Pflichtpunkt vor dem Launch im Projektstand.
- **Herkunft der Texte:** Feste Texte in den Shopify-Richtlinien, keine App für Rechtstexte installiert, also keine
  automatische Aktualisierung, die eine Korrektur überschreiben würde. Aufbau und Wortlaut (Datenschutz „Datenschutz auf
  einen Blick“, AGB „- im Folgenden: Anbieter -“) sehen nach einem Generator aus (eRecht24, Vermutung). Achtung: Die
  Übersetzungen der Richtlinien (es/fr/it) sind eigene Texte, siehe Liste für Daniel.

### 2.10 Familien-Codes, Stromquelle, Metafeld-Übersetzungen

188 englische Werte, 01:50:16 bis 01:51:01 Uhr. Liste vorher und nachher: `docs/data/teilk-metafelder-en.csv`.

| Metafeld | vorher EN | nachher EN | Anzahl |
|---|---|---|---|
| familie OLG | Higher Regional Court | OLG | 6 |
| familie DGM | Digital Geological Map | DGM | 3 |
| familie BLM | Black Lives Matter | BLM | 1 |
| familie BAUM-PVC | TREE-PVC | BAUM-PVC | 1 |
| stromquelle Netz | Network | Plug-in | 82 |
| einsatzbereich Innen & Außen / Außen / Innen | Interior & Exterior / Outside / Inside | Indoor & Outdoor / Outdoor / Indoor | 68 / 24 / 2 |
| subtitle hp-vit-586l-eu-1 | Warm white or color · 11 modes · dimmable | Warm white or multicolor · 11 modes · dimmable | 1 |

- **Abweichung von „entfernen“:** Die `familie`-Übersetzungen habe ich nicht gelöscht, sondern Englisch gleich dem Code
  gesetzt. Grund: Der Übersetzungsautomatismus (1.1) füllt fehlende Werte nach ein bis drei Tagen maschinell, dann stünde
  wieder „Higher Regional Court“ da. Ein gesetzter, nicht veralteter Wert bleibt stehen. Auf der Seite wirkt beides gleich.
- Batterie = „Battery“ und Solar = „Solar“ waren schon richtig; „USB“ kommt als Wert nicht vor.
- **Theme-Fehler dabei gefunden und behoben** (`a0aacf9`): Das Kachel-Raster zeigte englisch bei Batterieketten das
  Stecker-Symbol, weil es nur „batterie“ und „akku“ erkannte.
- **Zweifelsfälle, nicht geändert:** `subtitle` „linkable“ neben „connectable“ (beides für „koppelbar“); „100 beads / 60
  beads“ für „Kugeln“ (hp-sblb-*); `material` „Copper wire“, „Plastic“ und `lichtfarbe` „Warm white“ usw. sind richtig.
- `dramaturgie` ist englisch gleich dem Code (standard, hero, longtail), in es/fr/it aber übersetzt (Liste für Daniel).

### 2.11 Lichtfarbe im Metafeld: nicht geschrieben, Entscheidung nötig

Das Metafeld `heipard.lichtfarbe` ist ein einzeiliges Textfeld mit **einem** Wert. Der Kollektionsfilter „Lichtfarbe“
(Search & Discovery) und die Produktseite (Technische Details, Kachel-Raster) lesen genau diesen Wert. „Warmweiß und
Multicolor“ in ein Feld zu schreiben, ergäbe im Filter einen eigenen Eintrag „Warmweiß, Multicolor“, die Produkte fänden
sich weder unter Warmweiß noch unter Multicolor. Mehrfarbige Produkte mit Varianten (z. B. hp-dct-200, DFM, ISL, NPT, UCT,
SCWL, DPM) haben das Feld heute leer und erscheinen gar nicht im Filter.

Zur Wahl:
1. **Neues Listenfeld** `heipard.lichtfarben` (Liste einzeiliger Texte) für alle Produkte mit allen angebotenen Farben,
   Filter in Search & Discovery auf das neue Feld umstellen (Admin, Leon). Produktseite liest weiter `lichtfarbe`.
   Empfehlung.
2. **Variantenfilter:** In Search & Discovery die Variantenoption „Lichtfarbe“ als Filter nehmen; deckt nur Produkte mit
   Farbvarianten ab, nicht VIT, VLM und VAM (eine Kette, umschaltbar).
3. **Text im Feld** („Warmweiß und Multicolor“): schnell, aber Filter wie oben beschrieben unbrauchbar.

Die Fakten für die sechs Produkte stehen fest (VIT-586L, VIT-864L, VLM, VAM: Warmweiß und Multicolor, umschaltbar; DPT:
Warmweiß und Multicolor; UCP: Warmweiß, Kaltweiß, Multicolor).

### 2.13 Pflichtpunkte

Im Projektstand ergänzt: DPM/DPT-Blocktexte beim Pflichtpunkt Preise; UK-Varianten hp-dpt-300 (EU-Fassung oder heraus);
neuer Abschnitt „Pflicht vor dem Launch“ mit Sprachen und Rechtstext-Links.

## 4. Englische Begriffe

167 Änderungen, 01:59:00 bis 02:01:22 Uhr. Liste vorher und nachher: `docs/data/teilk-englisch-begriffe.csv`.

| Bereich | Anzahl | Beispiele |
|---|---|---|
| Produkttypen | 118 | „Ice Rain Light Chain“ → „LED Icicle Lights“, „String of lights (general)“ → „String Lights“ / „Outdoor String Lights“ / „Retractable Camping String Lights“, „Christmas tree string lights“ bei OLG/OLT → „String Lights“, „Picture light“ → das Motiv („LED Snowman“ usw.), „Tree of Lights“ → „LED Birch Light Tree“ / „LED Light Tower“ |
| Beschreibungen | 13 | „the chain“ → „the string lights“, „power supply (unit)“ → „power adapter“, „lead cable“ → „power cord“, „multi-color“ → „multicolor“ |
| Meta-Descriptions | 6 | „mains powered“ → „plug-in“, „without (a) socket“ → „no outlet needed“, „icicle light string“ → „icicle lights“, „multicolored“ → „multicolor“ |
| Lieferumfang | 18 | „light string“ → „string light“, „with mains plug“ → „plug-in …“ |
| Pflege-Texte (Metaobjekt) | 11 | „lead cable“ → „power cord“, „socket“ (Steckdose) → „outlet“ |
| Blocktext | 1 | „3 m lead cable“ → „3 m power cord“ |

- Satz für Satz angepasst (Mehrzahl „string lights … they“), keine blinde Ersetzung. Transformator bleibt „transformer“.
- **Produkttypen** englisch nach der Produktart im englischen Titel. Sonderfälle: hp-fxf-001 „LED Reindeer with Sleigh“,
  hp-dgm-048 „LED Motif Light“ (Titel noch offen), hp-ol-15-g „String Lights“; hp-bsm-002 hat keinen Produkttyp.
- **Ausgenommen:** Rechtstexte („chain letter“ in den AGB), Alt-Texte in Files (Files bleiben unangetastet; dort steht
  dreimal „icicle light string“), „sockets“ als Lampenfassung (richtig).
- **Zur Kenntnis, nicht geändert:**
  - Die **deutschen** Produkttypen passen teils nicht zu den Titeln: OLG/OLT, hp-olt-600/-800 und die übrigen OLT stehen
    unterschiedlich unter „Weihnachtsbaum-Lichterkette“ bzw. „Lichterkette (allgemein)“, hp-rsp-180 unter
    „Weihnachtsbaum“, hp-rtm-400 und hp-tpm-400-eu-1 unter „Lichterkette (allgemein)“. Soll ich sie an die Titel angleichen?
  - Startseite EN: Bento-Kachel „Fairy lights“ für „Lichterketten“ (nicht im Auftrag, Vorschlag „String Lights“).
  - hp-u20-200 Lieferumfang EN „1 × LED light strip“ (Schlauch = „rope light“). Korrigiert 02:11 Uhr: „1 × LED rope light“.

## 3.1 Die 15 freigegebenen Texte

Geschrieben Deutsch 02:05 Uhr (`descriptionHtml`, Meta-Description, SEO-Titel unverändert mitgeschickt, Tag `todo-text`
entfernt), Englisch 02:06:30 Uhr (`body_html`, `meta_description`, Digest aus dem Shop gegengeprüft).

- hp-isl-360-eu, hp-u20-200, hp-dlm-100h, hp-wwf-180, hp-ol-s11-50, hp-csl-200-c, hp-csl-200-w, hp-rfm-600, hp-vlm-100l,
  hp-olg-100, hp-olg-200m, hp-olg-200w, hp-olg-800, hp-rit-280, hp-rnm-200.
- Englisch korrigiert vor dem Schreiben: „runs on mains power“ (3 Stellen in diesen 15) → „plugs into a standard outlet“;
  „lead cable“ und „power cable“ → „power cord“. Die übrigen „mains power“-Stellen stehen in den 29 Entwürfen, dort
  ebenfalls angepasst (3.2).
- Meta-Descriptions Deutsch 133 bis 148 Zeichen, Englisch 139 bis 153 Zeichen; Wortlaut je Produkt in
  `docs/data/teilk-texte-geschrieben.md`.
- Faktenliste gegengeprüft: keine Widersprüche zu den 15.

**Nachladen** (02:07 bis 02:12 Uhr, Skript, Bot-Prüfung erkannt, keine Seite gesperrt):
- **43 Produktseiten am Desktop, Deutsch und Englisch (86 Aufrufe), dazu 10 mobil (20 Aufrufe).** Darin: die 15
  geschriebenen Texte, die 16 SEO-Paare, die 7 neuen Titel und Stichproben zu Metafeldern und Begriffen.
- Seitentitel = SEO-Titel, Überschrift = neuer Titel, Meta-Description wie geschrieben, Beschreibung sichtbar.
- Kein Gedankenstrich im Hauptinhalt, mobil kein Querscrollen.
- Englisch:
  - „Power source Plug-in“, „Use Indoor & Outdoor“, Lieferumfang z. B. „1 × LED icicle string light“.
  - Serienleiter bei hp-dgm-001, hp-dgm-002 und allen OLG-Seiten vorhanden (vorher fehlte sie).
- **Zwei Fehler gefunden und behoben:**
  - Englisch fehlte die Zeile „Light color“ bei Produkten mit Farbvarianten (hp-isl-360-eu, hp-dct-200, hp-dfm-600).
    Ursache: Drei Snippets suchten die Option nur unter „Lichtfarbe“, englisch heißt sie „Light color“. Behoben in
    `d61cfde` (live 02:11:36), nachgeladen 02:12 Uhr: Die Zeile ist da.
  - hp-csl-300-c zeigte englisch „Kaltweiß“ (neuer Wert ohne Übersetzung). Gesetzt auf „Cool white“ (02:11 Uhr).
- **Kollektionsfilter:** Deutsch „Kaltweiß (3)“, mit hp-csl-300-c. Englisch zeigt der Filter die übersetzten Werte
  („Plug-in“, „Indoor & Outdoor“, „Cool white“). hp-csl-300-c stand um 02:12 Uhr noch als „Kaltweiß (1)“ daneben, bis
  Search & Discovery neu indiziert.
- **Nebenbefund:** Sechs ältere englische Meta-Descriptions (Welle 2) sind 160 bis 175 Zeichen lang (hp-dct-200,
  hp-dgm-001, hp-blt-100-eu-1, hp-vit-586l-eu-1, hp-ctl-180m, hp-dfm-600). Nicht geändert.

## 3.2 Die 29 Entwürfe mit [TBD]

`docs/data/teilk-texte-entwurf-29.md` (Stand 02:06 Uhr). **Nichts geschrieben, wartet auf deine Prüfung.**
- **Jetzt ohne [TBD] (16):** hp-rsp-180, hp-isl-486, pvc-150g, hp-dpm-300 (30, 40, 60, 80 m), hp-rct-400, hp-fsf-120,
  hp-rtm-400, hp-bsl-50-1p, hp-dnm-208, pec-150g, hp-rgb-500a, hp-ols-s11-16, hp-ols-st38-16, hp-ucp-200, hp-dpt-300,
  hp-olt-300-eu.
- **Weiter offen (13):**
  - hp-bsx-002, hp-bsm-002: Größe, LED-Zahl, Einsatzbereich.
  - hp-wbf-210: LED-Zahl, Stromquelle, Einsatzbereich. hp-wbf-180: Stromquelle.
  - hp-ol-st38-50: Ersatzbirnen. hp-olg-600: koppelbar.
  - hp-dgm-048: Inhalt des Sets.
  - hp-ol-15-g: alle Daten (Dublette).
  - hp-rpm-200: 40-m-Kette, Netzteil.
  - hp-dgm-002: Fernbedienung, Batterietyp.
  - hp-fxf-001: nur noch die Zahl der Teile.
  - hp-uct-200-eu: Bauart der Ausführung „Lichterkette“.
  - hp-rmp-180: Netzteil, LED-Zahl, Steuerung.
- **Vor dem Schreiben im Shop zu korrigieren** (der Text folgt der Faktenliste, liegt bei dir):
  - hp-dnm-208: 2,5 x 1,8 m statt 2 m, auch Titel, hoehe_m, Block, Frage.
  - hp-dgm-002: Batterie statt Netz.
  - hp-ols-s11-16, hp-ols-st38-16: beleuchtete Länge.
  - hp-ucp-200: Zuleitung 5 m bei 3 x 3 m.
- **Korrigiert gegenüber Teil J:**
  - Einsatzbereich „innen und außen“ nach Faktenliste bei hp-rct-400, hp-bsl-50-1p, hp-dnm-208.
  - „16 Leuchtmodi“ bei hp-rgb-500a gestrichen (laut Faktenliste kopiert).
  - Kupferdraht bei hp-olg-600 und hp-rmp-180 gestrichen.
  - Englisch „mains power“ durch „plugs into a standard outlet“ ersetzt.
  - Jedes Produkt hat jetzt eine Meta-Description Deutsch und Englisch.

## 3.3 Zweite Runde: 54 Produkte ohne Beschreibung

`docs/data/teilk-texte-entwurf-2.md` (Stand 02:09 Uhr, zwei Pakete). **Nichts geschrieben.**
- **Ohne [TBD]: 27.** Darunter alle OL, OL-S11, OL-ST38, OLA-G40, CL, BSL-2P, CTL-180/-240/-300-eu, ISL-264, OLG-200/-400,
  OLT-100/-150/-200/-800.
- **Mit [TBD]: 27.** Die häufigsten offenen Punkte:
  - Schutzart bei 14 Produkten (alle OLH-G40, A60, OLS-G40, SCWL, SOLM, TPM, VAM; ein IP-Wert steht höchstens im alten
    Titel).
  - Stromquelle bei CSL-300 und CTL-360-eu.
  - Länge bei OLS-S17.
  - Musiksteuerung bei RGB-200A/300A.
  - Ersatzbirnen bei hp-ol-30.
- **Vor dem Schreiben im Shop zu korrigieren:**
  - Lieferumfang BSL-2P.
  - Beleuchtete Länge hp-ola-g40-15-eu.
  - hp-olt-150 `koppelbar_bis` 4 statt 3.
  - hp-vam-400l-eu-1 Lichtfarbe.
- **Nur in den Shopdaten widersprüchlich** (Hinweis je Produkt):
  - Birnenabstand zur Länge bei OL-S11-15/-30, OL-25.
  - Gesamtlänge bei OLT-150/-400/-800.
  - 2200 K an der bunten SCWL-15-Variante.
  - Erdspieß fehlt im Lieferumfang OLS-G40-25/-35.
- **Länge im Titel:** Nach der Regel Gesamtlänge nennen einige Titel noch die beleuchtete Länge, weil Metafeld und
  Optionswerte es so hatten:
  - hp-ol-s11-15 (Titel 10 m, gesamt 12,5 m), hp-ol-s11-30 (20 / 23 m).
  - hp-olt-100 (10 / 13 m), hp-olt-200 (20 / 23 m), hp-olt-600 (60 / 63 m).
  - hp-solm-12m-ww (12 / 14 m).
  - Wahrscheinlich alle OLG: Es gibt nur eine beleuchtete Länge.
  - Die OLT-Daten sind in sich uneinheitlich (OLT-150, -400, -800 ohne Zuleitung in der Gesamtlänge).
  - Nicht geändert. Soll die Asset-Instanz die Gesamtlängen je Produkt belegen, bevor ich die Titel angleiche?

## Schreibvorgänge

| Zeit | Was | Weg |
|---|---|---|
| 01:08 | ES, FR, IT veröffentlicht | `shopLocaleUpdate` |
| 01:19 | Vorschau-Theme #199733903693: Hero-Code | `themeFilesUpsert` (aus `2409277`) |
| 01:28 | Vorschau-Theme: Hero-Abschnitt, Startseite | `themeFilesUpsert` (aus `1b5ab56`) |
| 01:30:22 | Hero live (Code, 1600er, Intro für alle) | Push `2409277`, `90eb3f0`, `1b5ab56` |
| 01:38:38 | Trust-Leiste ohne [TBD] | Push `decf654` |
| 01:38:50 | Trust-Leiste EN „Fast delivery“ | `translationsRegister` |
| 01:42:50 | 16 SEO-Titel DE (Beschreibung mitgeschickt) | `productUpdate` |
| 01:43:30 | 16 SEO-Titel EN | `translationsRegister` |
| 01:46:51 | Titel-Liste | Push `dd2d3d5` |
| 01:47:20 | 7 Titel DE, SEO; led_anzahl hp-fxf-001; lichtfarbe hp-csl-300-c | `productUpdate`, `metafieldsSet` |
| 01:47:50 | 7 Titel EN, SEO EN | `translationsRegister` |
| 01:50:16 bis 01:51:01 | 188 Metafeld-Werte EN | `translationsRegister` |
| 01:51:30 | Kachel-Raster „Battery“ | Push `a0aacf9` |
| 01:59:00 bis 02:01:22 | 167 englische Begriffe | `translationsRegister` |
| 02:05 | 15 Texte DE, Meta-Description, Tag entfernt | `productUpdate`, `tagsRemove` |
| 02:06:30 | 15 Texte EN | `translationsRegister` |
| 02:11 | Lichtfarbe EN hp-csl-300-c „Cool white“, Lieferumfang EN hp-u20-200 „rope light“ | `translationsRegister` |
| 02:11:36 | Lichtfarbe englisch aus der Option | Push `d61cfde` |

Nicht geschrieben (abgelehnt): `themeDelete` (Vorschau-Themes), `shopPolicyUpdate` (Rechtstexte).

## Commits

`shopify theme check` vor jedem Commit: 1 Fehler, 14 Warnungen, alle schon vorher (wie in Teil J, `heipard-wordmark` ohne
Bildmaße).
- `2409277` Hero: Intro auch am Tag mit Sitzung, Ansage, Lesen und Hinweis; HLS-Test ausgebaut
- `90eb3f0` Hero: allgemeine Datei 1600 x 900 als schneller Clip am Desktop
- `1b5ab56` Startseite: Hero Intro für alle, Clip 1600 x 900 am Desktop
- `decf654` Startseite: Trust-Leiste ohne [TBD] bei Versand aus Deutschland
- `dd2d3d5` Doku: Titel [prüfen] nach Faktenliste und SEO-Paare (vor dem Schreiben)
- `a0aacf9` Kachel-Raster: Batterie-Symbol auch bei englischem Wert „Battery“
- `d61cfde` Lichtfarbe in Technik, Kachel und Kurzdaten auch englisch aus der Option
- Doku-Commit mit diesem Bericht, Projektstand, Listen (Titel, SEO, Metafelder, Begriffe), ES/FR/IT-Liste, Entwürfe und
  Kontaktbogen

## Rückweg

- **Sprachen:** `shopLocaleUpdate(locale, { published: false })` für es, fr, it.
- **Hero:** Tag-Modus „Hinweis am Schalter“, Datei-Felder leer; oder `git revert 1b5ab56`, Code `90eb3f0`, `2409277`.
- **Trust-Leiste:** `git revert decf654`; EN-Unterzeile alter Wert „I'll be right with you“.
- **SEO-Paare, Titel:** Vorher-Werte in `teilk-seo-paare.csv` und `teilk-titel.csv`, DE per `productUpdate` (Beschreibung
  mitschicken), EN per `translationsRegister`. Metafelder: led_anzahl hp-fxf-001 entfernen, lichtfarbe hp-csl-300-c leeren.
- **Metafeld-Übersetzungen, englische Begriffe:** Vorher-Werte in `teilk-metafelder-en.csv` und `teilk-englisch-begriffe.csv`.
- **Kachel-Raster:** `git revert a0aacf9`.
- **Lichtfarbe aus der Option:** `git revert d61cfde`.
- **15 Texte:** Beschreibung und Meta-Description leeren (Deutsch `productUpdate`, Englisch `translationsRemove`), Tag
  `todo-text` wieder setzen.

## Offen

**Bei dir:**
1. Vorschau-Themes #199725613389 und #199733903693 im Admin löschen (1.5).
2. Rechtstexte: zwei Links im Admin ändern (2.7).
3. Lichtfarbe: Listenfeld und Filter umstellen? (2.11, Empfehlung Variante 1)
4. Deutsche Produkttypen an die Titel angleichen? (4)
5. Länge im Titel: beleuchtete gegen Gesamtlänge bei OL-S11, OLT, OLG, SOLM (3.3).
6. HLS-Folge: normale Seite einmal auf dem Handy ansehen (1.4).
7. Textentwurf 29 (3.2) und 54 (3.3) prüfen und freigeben.
8. Aus der Faktenliste bei dir: falsche Shop-Werte, Dubletten hp-ol-15-g und hp-stt-050, hp-dgm-048.

**Bei Daniel:** Übersetzungsweg ES/FR/IT und Einstellung „automatisch übersetzen“ in Translate & Adapt.

**Bei Tyler:** Ersatzbirnen hp-ol-30; EU-Fassung DPT-200/-200M/-400M (D12).
