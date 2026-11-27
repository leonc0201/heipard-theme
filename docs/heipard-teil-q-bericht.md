# HeiPard Theme: Bericht Teil Q

**Stand:** 27.11.2026, deutsche Zeit. Auftrag: `heipard-theme-auftrag-teil-q.md`. Vor jedem Schreibzugriff
`get-shop-info` = HeiPard. Nicht angefasst: Preise, Status, Bestand, Handles, Showroom-Logik, Rechtstexte, Sprachdateien
ES/FR/IT, Produktmedien, `galerie_medien`, Optionswerte, Files, Bildfelder `feature_*`, technische Metafelder. Nichts an
Shenzhen oder Tyler.

## Kurzfassung

- **2 hp-u20-200 mit IP68:** Die Definition `ip_schutzart` erlaubt IP68 seit 10:44. Die Asset-Instanz hat IP68 um 10:51
  gesetzt („Die Tafel zeigt eindeutig U20“). Der IP68-Satz steht seit 11:36 wieder in Beschreibung, SEO-Beschreibung und
  u20-b2, DE und EN. Storefront für beide Längen geprüft: Spec-Kachel, Technik-Tabelle, Nachweise, Text, Meta-Tags,
  JSON-LD.
- **3 Netzteil nur mit Beleg:** 88 Fundstellen in der Liste. 76 sind neutral gefasst, 12 bleiben (Lieferumfang nennt
  Netzteil oder Trafo, dazu UCP mit „ein Netzteil liegt nicht bei“). Nachtrag: Die Pflege-Texte (*Installation &
  Pflege*) waren in meiner ersten Suche nicht drin, ein Scan aller Seiten hat sie gefunden, 6 Einträge sind neutral
  gefasst. Der Abschluss-Scan über 116 Seiten DE und EN zeigt Netzteil, Adapter oder Trafo nur noch dort, wo der
  Lieferumfang es belegt.
- **4 cl-frage-1:** „Sie misst 10 m.“, EN „They measure 10 m.“ Auf EN steht Deutsch nur noch in vam-frage-1.
- **5 Serienleiste nach Ausführung:** live seit 11:35:55.
  - Zusammengefasst wird nur noch nach Lichtfarbe.
  - BSL und CTL zeigen wieder eine Karte je Produkt, weil kein Feld Set oder Ring trägt (Regel 4).
  - hp-uct-200-eu filtert nach der Option Ausführung.
  - Klicktest: 84 Startzustände mit 248 Klicks in der Vorschau, dasselbe live. Live gleicht der Vorschau auf allen 116
    Seiten.
- **6 Werte aus Auftrag 37:** UCP-Beschreibung nennt jetzt 3 m Zuleitung für beide Größen. Technik-Tabelle UCP und
  LED-Zahlen DFM/DPT an der Storefront geprüft.
- **7 Liste für Daniel:** `docs/data/teilq-liste-daniel-es-fr-it.md`. Dazu `docs/data/nach-tyler.md` (RPM, TPM,
  vam-frage-1).
- **Vorschau-Theme:** #200027767117 „zz-vorschau Teil Q Serienleiste (kann weg)“, angelegt 11:00. Kann gelöscht werden.
- **Offen bei dir:** 5 Fragen am Ende.

## Zeitleiste

| Zeit | Was |
|---|---|
| 10:44:16 | `git pull` auf `a1e443e` (ES/FR/IT aus dem Shop) |
| 10:44:48 | Abschnitt 2.1: `ip_schutzart` lässt IP68 zu (Produkt und Variante) |
| 10:45:01 | Bescheid an die Asset-Instanz |
| 10:47:06 | Asset-Instanz: `led_anzahl` an DFM-400 (Warmweiß 6 m) und sechs DPT-Varianten |
| 10:50:25 | Asset-Instanz: `zuleitung_m` 3,0 an den drei UCP-3-x-3-Varianten (vorher 5,0) |
| 10:51:36 | Asset-Instanz: `ip_schutzart` IP68 an hp-u20-200 (Produktebene), EN 10:51:40 |
| 10:53:49 | `64d4d5a` Listen `teilq-netzteil.csv` und `teilq-texte.csv` (vor dem Schreiben) |
| 10:54:44 | Abschnitt 4: cl-frage-1 DE, danach EN |
| 10:56:03 bis 11:01:39 | Abschnitt 3: 69 Felder in 8 Paketen DE und EN, 0 Fehler |
| 11:00:57 | Vorschau-Theme #200027767117 angelegt |
| 11:05 | Rücklesung der 66 Ressourcen: DE wie Plan, keine EN veraltet |
| 11:07:46 | Vorschau: feste Reihenfolge bei gleichem Maß |
| 11:09:21 | hp-ctl-210-eu-1 SEO-Beschreibung EN: „plug-in“ entfernt (EN folgt DE) |
| 11:10 bis 11:22 | Storefront 17 Produkte DE/EN mobil, Scan aller 116 Seiten DE/EN (Pflege-Texte gefunden) |
| 11:20 bis 11:34 | Klicktest Vorschau, Desktop und mobil; danach Vorher-Aufnahmen live |
| 11:23:00 | `7090e3e` Nachtrag Pflege-Texte in der Liste (vor dem Schreiben) |
| 11:23:39 | Pflege-Texte DE, 11:24 EN, zurückgelesen |
| 11:34 | `fe2658f` Liste `teilq-serienleiste.csv`, `ab89407` Theme (Theme Check vorher) |
| 11:35:31 | main gepusht, 11:35:55 live |
| 11:36:35 | Abschnitt 2.3: U20 Beschreibung, SEO, u20-b2 DE; 11:37 EN |
| 11:37:06 | Abschnitt 6: UCP-Beschreibung DE und EN |
| 11:38 bis 11:39 | Storefront U20 und UCP, Bescheid an die Asset-Instanz |
| 11:36 bis 11:47 | Live-Crawl 116 Seiten (gleich Vorschau), Klicktest live, Abschluss-Scan 232 Seiten |

## 1 Entscheidungen

Umgesetzt wie in deinem Abschnitt 1. vam-frage-1 bleibt deutsch und steht mit RPM und TPM in `docs/data/nach-tyler.md`,
jeweils mit heutigem Wortlaut, Vorschlag und Quelle. Den Lichtfarben-Filter habe ich nicht angefasst.

## 2 hp-u20-200 mit IP68

**Schritt 1 (10:44:48):** `metafieldDefinitionUpdate` an Produkt und Variante, Auswahl jetzt IP20, IP44, IP45, IP54,
IP65, IP67, IP68. Die Ziffernerklärung im Nachweise-Block gab es schon für 8 („Geschützt gegen dauerndes Untertauchen“,
EN „Protected against continuous immersion“, ES/FR/IT vorhanden). Am Theme war deshalb nichts zu ändern.

**Schritt 2:** Bescheid um 10:45:01. Meldung der Asset-Instanz um 10:51: IP68 auf Produktebene, Beleg Shenzhen-PSD
管子灯PSD/10.psb und 11.psb („IP68 wasserdicht“, „10M 200LED“, „20M 400LED“), U20-200 und U20-400 sind laut Excel die
einzigen Schlauchlichter.

**Schritt 3 (11:36:35, EN 11:37):** Texte aus `teilp-texte.csv` und `teilo-texte.csv`, der Netzteil-Satz nach Abschnitt 3
(Liste `teilq-texte.csv`):

| Stelle | vorher (DE) | nachher (DE) |
|---|---|---|
| Beschreibung, 2. Absatz | Du dimmst in vier Stufen, eine Fernbedienung liegt bei. Den Strom liefert ein Netzteil, und mit der 3 m langen Zuleitung misst der Schlauch 13 m bzw. 23 m. | Du dimmst in vier Stufen, eine Fernbedienung liegt bei. Nach IP68 ist der Schlauch gegen dauerhaftes Untertauchen geschützt. Er wird an eine Steckdose angeschlossen und misst mit der 3 m langen Zuleitung 13 m bzw. 23 m. |
| SEO-Beschreibung | … Dimmbar in vier Stufen, mit Fernbedienung. | … Dimmbar in vier Stufen, mit Fernbedienung und IP68-Schutz. |
| u20-b2 | Direkt am Boden bekommt das Licht Regen und Schmutz ab. | Direkt am Boden bekommt das Licht Regen und Schmutz ab. Nach IP68 ist der Schlauch gegen dauerhaftes Untertauchen geschützt. |

`productUpdate` mit SEO-Titel und SEO-Beschreibung. EN wie vor Teil P, der Netzteil-Satz als „It plugs into an outlet
and, with the 3 m power cord, measures 13 m or 23 m overall.“ Zurückgelesen: DE-Digests wie Plan, keine EN veraltet.

**Schritt 4, Storefront (11:38, live):** beide Längen, DE und EN, Desktop und mobil.
- Spec-Kachel „Schutzart IP68“ (EN „Protection rating IP68“).
- Technik-Tabelle „Schutzart: IP68“.
- Nachweise: „Schutzart IP68“ mit „6 Staubdicht“ und „8 Geschützt gegen dauerndes Untertauchen“.
- Beschreibung und u20-b2 mit dem IP68-Satz.
- Meta-Description, `og:description` und `twitter:description` gleich, mit „IP68-Schutz“.
- JSON-LD `description` mit dem IP68-Satz.
- u20-frage-1 sagt „Er wird an eine Steckdose angeschlossen.“ (Abschnitt 3).

**Rückweg:** Spalten „vorher“ in `teilq-texte.csv`. Die Definition zurück geht nur, wenn kein Wert IP68 mehr existiert
(erst das Metafeld 67003404648781 löschen, das macht die Asset-Instanz).

## 3 Netzteil nur mit Beleg

**Suche:** Beschreibungen, SEO-Beschreibungen, Blöcke (`feature_block`) und Fragen aller aktiven Produkte, DE nach
Netzteil, Adapter, Trafo, Transformator, EN nach power adapter, adapter, transformer. Für jedes Produkt, an dem der Text
hängt, Lieferumfang (Produkt und Varianten) und `stromquelle` gelesen. Liste `docs/data/teilq-netzteil.csv`, Commit vor
dem Schreiben.

| Ergebnis | Anzahl | Stellen |
|---|---|---|
| neutral gefasst | 70 | 43 Beschreibungen (davon U20 mit Abschnitt 2), 2 SEO-Beschreibungen, 6 Blockfelder, 19 Fragen |
| darf stehen | 10 | Lieferumfang nennt Netzteil oder Trafo bei jedem Produkt (OLA-G40, OL-30/50, OLT-300, RGB-A) |
| bleibt | 1 | hp-ucp-200: USB, „ein Netzteil liegt nicht bei“ |
| Nachtrag Pflege, neutral | 6 | `heipard_pflege` kat-led, kat-christmas-tree-lights, kat-cluster, kat-net, kat-icicle, kat-weihnachtsbaum |
| Nachtrag Pflege, darf stehen | 1 | kat-smart (alle drei RGB-A mit Netzteil im Lieferumfang) |

**So gefasst:**
- Meist ersetzt „wird an eine Steckdose angeschlossen“ (EN „plugs into an outlet“) den Netzteil-Satz. Der Rest
  bleibt gleich.
- **hp-rct-400:** Es ist keine `stromquelle` gepflegt. Deshalb ohne Steckdose, nur „Die Zuleitung ist 3 m lang.“
  (die 31 V waren ebenfalls nicht belegt).
- **hp-rsp-180:** IP67 und „drinnen wie draußen“ waren nicht belegt und sind mit entfallen.
- **hp-ctl-210-eu-1, SEO-Beschreibung:** EN hatte „plug-in“ ohne Gegenstück in DE. EN folgt jetzt DE (11:09).
- **Pflege-Texte:** Sie hängen über den kat-Tag an vielen Produkten, kat-led etwa an 46.
  - kat-led: Die Aufzählung nennt kein Netzteil mehr („bis zur Steckdose oder zum Batteriefach“, „ob Stecker oder
    Batteriefach“), weil auch Batterie-Produkte dazugehören.
  - kat-christmas-tree-lights (wegen hp-ctl-360-eu) und kat-weihnachtsbaum (wegen pec-150g und pvc-150g): Dort sind
    Produkte ohne Stromquelle dabei. Der Satzteil fällt deshalb weg, statt „Steckdose“ zu behaupten.

**Schreiben:** 69 Felder 10:56 bis 11:01 (132 Aliasse, 0 Fehler), Pflege 11:23 bis 11:24 (12 Aliasse, 0 Fehler).
**Zurückgelesen:** alle DE-Digests wie Plan, EN wortgleich, keine EN veraltet.

**SEO-Titel:** Bei 10 Produkten hat das Paket nur die SEO-Beschreibung geschickt (hp-ol-15, die drei OL-S11, die drei
OL-ST38, hp-rsp-180, hp-npt-210, hp-ol-s11-50). Ihr SEO-Titel war schon vorher leer: Die Rücklesung zeigt bei ihnen kein
Feld `meta_title`. Es ist also nichts verloren, die Seiten nutzen wie vorher den Produkttitel.

**Storefront:**
- 15 Produkte DE und EN mobil (CTL-210, CTL-400, DFM-600, OL-100, OL-S11-25, OL-ST38-30, OLG-200, OLT-150, RCT-400,
  RSP-180, RTM-400, VIT-586L, WWF-180, DPM-300, DLM-100H): Alle erwarteten Texte sind da, 0 Ladefehler, kein Überlauf.
- Scan aller 116 Seiten DE und EN, live, nach Netzteil/Adapter/Trafo außerhalb der Technik-Tabelle:
  - vorher (11:15): 7 Pflege-Texte auf 85 Seiten, sonst nur belegte Stellen.
  - nachher: siehe Abschnitt „Abschluss-Scan“.
- Kontaktbogen `docs/data/teilq-texte-mobil.jpg`.

**Rückweg:** Spalten „vorher“ in `teilq-netzteil.csv` (DE und EN je Feld).

## 4 cl-frage-1

| | Frage | Antwort |
|---|---|---|
| DE vorher | Wie lang ist die Campinglaterne? | Sie ist 10 m lang. |
| DE nachher | Wie lang ist die Lichterkette? | Sie misst 10 m. |
| EN nachher | How long are the string lights? | They measure 10 m. |

Storefront hp-cl-1-eu und hp-cl-2-eu, DE und EN mobil: richtig. In der Fragen-Sektion steht auf EN kein Deutsch mehr außer
in vam-frage-1 (hp-vam-400l-eu-1). Rückweg: `teilq-texte.csv`.

## 5 Serienleiste nach Ausführung

**Liste** `docs/data/teilq-serienleiste.csv` (`fe2658f`): 116 Produkte mit Modus, Merkmal, Quelle, Karten vorher und
nachher je Startvariante, Ziel jedes Klicks. 12 ändern sich.

| Familie | Merkmal | Quelle | vorher (Teil P) | nachher |
|---|---|---|---|---|
| BSL (4 Produkte) | 1er- oder 2er-Set | kein Feld (Regel 4) | 5 m, 10 m | 5 m, 5 m, 10 m, 10 m (eine Karte je Produkt) |
| CTL (7 mit Leiste) | mit oder ohne Ring | kein Feld (Regel 4) | 1,5 / 2 / 2,5 / 3 m | 8 Karten, eine je Produkt |
| hp-uct-200-eu | Lichterkette oder Kupferdraht | Option Ausführung | 3 x 2 m, 3 x 3 m | Lichterkette: keine Leiste (nur 3 x 2 m). Kupferdraht: 3 x 2 m, 3 x 3 m |
| CL-1/CL-2 | Kette oder Set | kein Feld | keine Leiste | keine Leiste (alle 10 m) |
| DCT, UCP, ISL, DFM, DPM, DPT, CSL, OLG | nur Lichtfarbe | Option Lichtfarbe bzw. `lichtfarben` | eine Karte je Maß | unverändert |

**Theme (`ab89407`):**
- **Variantenmodus:** Merkmal sind die Werte aller Optionen außer Maß und Lichtfarbe (neues Snippet
  `heipard-fb-serienleiter-merkmal`). Gezeigt werden nur Varianten mit dem Merkmal der gewählten.
- **Familienmodus:** Gleich große Produkte werden nur zusammengefasst, wenn beide `lichtfarben` haben, die Listen sich
  nicht überschneiden und `led_anzahl` gleich ist (neues Snippet `heipard-fb-serienleiter-farbgleich`). Sonst gilt für die
  ganze Familie eine Karte je Produkt. Haben dabei alle denselben Wert, entfällt die Leiste.
- **Reihenfolge bei gleichem Maß:** In der Vorschau rutschte die aktuelle Karte bei gleichem Maß nach vorn, weil nach dem
  HTML der Karte sortiert wurde. Jetzt gilt die Position in Familie bzw. Variantenliste, auf jeder Seite gleich. Bei BSL
  stehen die 10-m-Karten in der Reihenfolge der Kollektion (2er vor 1er).
- **Optionsnamen ES/FR/IT:** für Maß und Lichtfarbe ergänzt.
- **Doku:** D4 im Feature-Baukasten nachgezogen.
- **Theme Check vor dem Commit:** 1 Fehler, 14 Warnungen, wie bisher (heipard-wordmark), keine in geänderten Dateien.
  LiquidComplexity der Leiste unter 120.

**Vorschau #200027767117:**
- Crawl der 116 Seiten gleich Simulation.
- Klicktest an hp-bsl-50-1p, hp-bsl-100-2p, hp-ctl-180, hp-ctl-210-eu-1, hp-ctl-300-eu, hp-ctl-400-eu-1, hp-dct-200,
  hp-csl-200-c und hp-uct-200-eu: DE und EN, Desktop und mobil, jede Variante bzw. Lichtfarbe als Start, jeder Klick
  verfolgt.
- Ergebnis: 84 Startzustände, 248 Klicks. Alle Ziele richtig, Kartenzahl je Maß richtig, Ausblendung wie erwartet.
- 16 Klicks landen auf hp-ctl-400-eu-1, das keine Leiste hat (Frage 1).

**Live (11:35:55):**
- Crawl 116 Seiten: gleich der Vorschau, 0 Abweichungen.
- Gegen den Live-Stand am Ende von Teil P unterscheiden sich 14 Seiten: die 12 aus der Liste, dazu DFM-400 und DPT-300.
  Deren Karten zeigen jetzt Lichtpunkte, weil die Asset-Instanz um 10:47 `led_anzahl` gesetzt hat. Das ist kein
  Theme-Effekt.
- Klicktest live, Desktop und mobil, DE und EN: 84 Startzustände und 248 Klicks wie in der Vorschau. 232 sind richtig,
  die 16 übrigen sind wieder die Landungen auf hp-ctl-400-eu-1. Theme-ID 192437387597 auf allen Seiten.
- **Achtung beim Ansehen:** Bei BSL und CTL sehen Karten mit gleichem Maß gleich aus. Bei BSL steht zweimal „5 m,
  50 Lichtpunkte“, bei CTL auf 1,5 m zweimal „180 Lichtpunkte“. Welche Karte zum 1er- oder 2er-Set bzw. zum Modell mit
  oder ohne Ring führt, sieht man erst am Ziel. Das löst erst ein Feld für die Ausführung (Frage 2).

**Kontaktbögen:** `docs/data/teilq-serienleiste-desktop.jpg` und `-mobil.jpg` (vorher Teil P gegen nachher live, DE und
EN).

**Rückweg:** `git revert ab89407`, dann push auf main.

**Feld für BSL und CTL (Regel 4):** Kein vorhandenes Feld trägt Set oder Ring.
- `lieferumfang` ist Freitext („2 × …“). Das Theme müsste ihn zerlegen, das wäre unsicher.
- `subtitle` ist Anzeigetext für die Karte.
- `stromquelle_detail` meint die Stromversorgung.

Mein Vorschlag ist deshalb ein neues Produkt-Metafeld `heipard.ausfuehrung` (Text mit Auswahl, etwa „1er-Set“, „2er-Set“,
„mit Ring“, „ohne Ring“), das die Asset-Instanz füllt. Das Theme liest es wie die Option Ausführung, der Rückfall entfällt
dann für BSL und CTL. Frage 2.

## 6 Werte aus Auftrag 37

Meldung 10:50:25: `zuleitung_m` 3,0 an den drei UCP-3-x-3-Varianten (Tafel PT05 „Extend to 3M“). UCT hat keinen Wert, an
Produkt und Varianten nicht.

| Stelle | vorher | nachher |
|---|---|---|
| hp-ucp-200 Beschreibung DE | Die Zuleitung ist bei 3 x 2 m 3 m lang, bei 3 x 3 m 5 m. | Die Zuleitung ist 3 m lang. |
| EN | The power cord is 3 m long on the 3 x 2 m version and 5 m long on the 3 x 3 m version. | The power cord is 3 m long. |

Blöcke und Fragen von UCP und UCT nennen keine Zuleitung, keine Gesamtlänge. `productUpdate` 11:37:06 mit SEO-Titel und
SEO-Beschreibung (unverändert), EN registriert, zurückgelesen.

**Storefront live, DE und EN:**
- UCP: alle sechs Varianten Zuleitung 3 m; 3 x 3 m mit 300 Lichtpunkten, 3 x 2 m mit 200.
- Prüfbitte der Asset-Instanz: HP-DFM-400 (Warmweiß 6 m) 400. HP-DPT-200/-300/-600/-800 zeigen 200/300/600/800,
  HP-DPT-200M/-400M zeigen 200/400. Technik-Tabelle und Icon-Grid stimmen überein.

Rückweg: `teilq-texte.csv`.

## 7 Liste für Daniel

`docs/data/teilq-liste-daniel-es-fr-it.md`: alle geänderten DE-Texte aus Abschnitt 2, 3 (mit Pflege), 4 und 6. Neue
Theme-Sprachtexte gibt es in Teil Q keine.

## Abschluss-Scan

Live nach allen Schreibvorgängen. Es waren 232 Seiten (116 Produkte, DE und EN), alle geladen. Gesucht wurde nach Netzteil,
Adapter und Trafo (EN power adapter, adapter, transformer) in allen Textknoten außer der Technik-Tabelle, dazu in
Meta-Description und JSON-LD.

| Wo | Produkte | Warum es stehen darf |
|---|---|---|
| Beschreibung, JSON-LD, Fragen, Lieferumfang-Block | hp-ola-g40-15/-27/-42-eu, hp-olt-300-eu, hp-rgb-200a/-300a/-500a, hp-ol-30, hp-ol-50 | Lieferumfang nennt Netzteil bzw. Trafo |
| Pflege kat-smart | hp-rgb-200a/-300a/-500a | Lieferumfang nennt Netzteil |
| Beschreibung, JSON-LD | hp-ucp-200 | „ein Netzteil liegt nicht bei“ (USB) |

Vorher (11:15) standen zusätzlich die sechs Pflege-Texte auf 82 Seiten und der alte U20-Satz da. Beides ist weg.

## Commits

| Commit | Inhalt | Theme Check |
|---|---|---|
| `64d4d5a` | Listen Netzteil und Texte (vor dem Schreiben) | nur Doku |
| `7090e3e` | Nachtrag Pflege-Texte in der Liste (vor dem Schreiben) | nur Doku |
| `fe2658f` | Liste Serienleiste (vor dem Livegang) | nur Doku |
| `ab89407` | Serienleiste nach Ausführung, Doku D4 | 1 Fehler, 14 Warnungen (Ausgangsstand), keine in geänderten Dateien |
| (dieser) | Bericht, Daniel-Liste, nach-tyler, Kontaktbögen | nur Doku |

## Offen bei dir

1. **hp-ctl-400-eu-1 ohne Leiste:** Beide Varianten (Warmweiß, Multicolor) haben eine eigene Länge. Deshalb greift der
   Variantenmodus, es bleibt eine Karte und die Leiste entfällt. Das war schon vor Teil P so. Wer auf einer anderen
   CTL-Seite die Karte 2,5 m (CTL-400) klickt, landet auf einer Seite ohne Leiste. Mein Vorschlag: Variantenmodus nur,
   wenn sich die Varianten im Maß unterscheiden, sonst Familienmodus. Betroffen wäre nur hp-ctl-400-eu-1. Soll ich das
   umsetzen?
2. **Feld für Set und Ring:** Soll die Asset-Instanz ein Feld `heipard.ausfuehrung` anlegen und füllen (BSL 1er-/2er-Set,
   CTL mit/ohne Ring)? Dann filtert die Leiste danach, und ein 1er-Set zeigt nur 1er-Sets. Bis dahin stehen gleich
   aussehende Karten nebeneinander (zweimal „5 m, 50 Lichtpunkte“). Wenn dich das mehr stört als die Leiste vor Teil Q,
   kann ich BSL und CTL bis zum Feld auch ganz ohne Leiste zeigen.
3. **U20 und Netzteil:** Die Shenzhen-Tafel nennt „Leistung des Netzteils: 4.5V, 6 W“. Laut Asset-Instanz zeigt sie damit
   nur die Leistung, nicht, was im Karton liegt. Der Lieferumfang nennt kein Netzteil. Deshalb steht jetzt „wird an eine
   Steckdose angeschlossen“. Liegt ein Netzteil bei, müsste es erst in den Lieferumfang (Asset-Instanz), danach darf der
   Satz es nennen.
4. **Pflege-Text kat-curtain:** „Die Zuleitung führst du seitlich zur Steckdose.“ Der Text hängt auch an hp-ucp-200, das
   über USB läuft. Außerdem haben hp-csl-300-c/-w, hp-dct-200, hp-rct-400 und hp-uct-200-eu keine Stromquelle gepflegt.
   Das ist kein Netzteil-Fall, ich habe nichts geändert. Soll der Satz neutral werden (etwa „Die Zuleitung führst du
   seitlich weg.“)?
5. **Pflege-Texte allgemein:** Ich habe sie nach der Regel aus Abschnitt 3 behandelt, obwohl dein Abschnitt 3 nur
   „Blöcke“ nennt. Sie erscheinen als eigener Block „Installation & Pflege“ auf der Produktseite. Passt das so? Der
   Rückweg steht in der Liste.
