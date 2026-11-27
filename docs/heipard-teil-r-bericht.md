# HeiPard Theme: Bericht Teil R

**Stand:** 27.11.2026, deutsche Zeit. Auftrag: `heipard-theme-auftrag-teil-r.md`. Vor jedem Schreibzugriff
`get-shop-info` = HeiPard. Nicht angefasst: Preise, Status, Bestand, Handles, Showroom-Logik, Rechtstexte, Sprachdateien
ES/FR/IT, Produktmedien, `galerie_medien`, Optionswerte, Files, Bildfelder `feature_*`, Lieferumfang, technische
Metafelder. Nichts an Shenzhen oder Tyler.

## Kurzfassung

- **2 Serienleiste:** live seit 16:35:05 (`8fe385b` A, `d6ca02d` C).
  - **A:** hp-ctl-400-eu-1 zeigt jetzt die CTL-Familie. Sonst ändert A kein Produkt.
  - **B:** Definition `heipard.ausfuehrung` angelegt, die Asset-Instanz hat sie um 16:00 gefüllt.
  - **C:** BSL-1er-Sets führen nur noch zu 1er-Sets, 2er-Sets nur zu 2er-Sets.
  - **CTL:** Alle acht sind belegt „mit Ring“, das Feld trennt sie deshalb nicht (Frage 1).
  - **Prüfung:** Vorschau 108 Startzustände und 432 Klicks, alle richtig. Live gleicht der Vorschau auf allen 116
    Seiten.
- **3 kat-curtain:** „Die Zuleitung führst du seitlich weg.“ (EN „Run the power cord off to the side.“), an allen
  8 Vorhängen DE und EN mobil geprüft.
- **4 CLAUDE.md:** Die Textregeln gelten für jeden sichtbaren Text, und jede Suche läuft zusätzlich über die fertigen
  Seiten in DE und EN.
- **5 Werte aus Auftrag 38:** Zuleitung UCT 3 x 2 m und Stromquelle UCT, CSL-300-C/-W, DCT an der Storefront richtig.
  Kein Text widerspricht. Nebenwirkung: Die CSL-Leiste ist seit 15:57 weg, weil CSL-200 „Netz“ und CSL-300 „USB“ trägt
  (Frage 2).
- **6 Liste für Daniel:** `docs/data/teilr-liste-daniel-es-fr-it.md`.
- **Vorschau-Theme:** #200044478797 „zz-vorschau Teil R Serienleiste (kann weg)“, angelegt 16:00. Kann gelöscht werden.
- **Offen bei dir:** 3 Fragen am Ende.

## Zeitleiste

| Zeit | Was |
|---|---|
| 15:54:21 | `git pull`, main = `a5a08d2` (nichts Neues aus dem Shop) |
| 15:55 | Abschnitt 2 B: Definition `heipard.ausfuehrung` angelegt, Bescheid an die Asset-Instanz |
| 15:55:41 | `2323b53` Liste `teilr-texte.csv` (vor dem Schreiben) |
| 15:55:52 | Abschnitt 3: kat-curtain DE, danach EN |
| 15:56 bis 15:57 | Storefront kat-curtain, 8 Vorhänge DE und EN mobil |
| 15:57:25 | Asset-Instanz: Zuleitung UCT 3 x 2 m, Stromquelle UCT, CSL-300-C/-W, DCT (Auftrag 38, 2 und 3) |
| 15:58:01 | `3f7e5b8` Abschnitt 4: Regel in `CLAUDE.md`, Kontaktbogen kat-curtain |
| 15:59 | Schritt A im Snippet, Theme Check. Live-Crawl 116 Seiten als Vergleichsstand |
| 16:00:06 | Vorschau-Theme #200044478797 angelegt |
| 16:00:08 | Asset-Instanz: `ausfuehrung` an 4 BSL und 8 CTL (Auftrag 38, 4) |
| 16:01 | Abschnitt 5: Storefront UCT, CSL-300, DCT, CSL-200, DE und EN |
| 16:04 | `8fe385b` Schritt A, `d6ca02d` Schritt C (Branch `teilr/serie`) |
| 16:05 bis 16:34 | Vorschau mit A und C: Crawl 116 Seiten, Klicktest, Vorher-Aufnahmen live |
| 16:15 | `5ccb215` Liste `teilr-serienleiste.csv` (vor dem Livegang) |
| 16:34:38 | main gepusht, 16:35:05 live |
| 16:35 bis 16:49 | Live-Crawl 116 Seiten (gleich Vorschau), Klicktest live (432 Klicks richtig) |

## 1 Entscheidungen

Umgesetzt wie in deinem Abschnitt 1. Den U20-Satz habe ich nicht angefasst, er bleibt neutral. Den Lichtfarben-Filter
habe ich nicht angefasst.

## 2 Serienleiste: CTL-400 und Feld Ausführung

**Schritt B, Definition (15:55):**
- Produkt-Metafeld `heipard.ausfuehrung` (ID 702053155149), einzeiliger Text mit Auswahl „1er-Set“, „2er-Set“, „mit
  Ring“, „ohne Ring“.
- Name im Admin „Ausführung (Serienleiste)“. Beschreibung: „Unterscheidet Modelle einer Familie, die sich nicht nur in
  der Lichtfarbe unterscheiden (BSL 1er- oder 2er-Set, CTL mit oder ohne Ring). Die Serienleiste zeigt nur Produkte mit
  derselben Ausführung. Wird auf der Seite nicht angezeigt.“
- Zugriff wie die übrigen heipard-Felder. Keine Übersetzung.
- Bescheid an die Asset-Instanz um 15:55. Ihre Werte seit 16:00:08 (Belege in ihrem `reports/ausfuehrung_2026-11-27.csv`):

| Produkte | Wert |
|---|---|
| hp-bsl-50-1p, hp-bsl-100-1p | 1er-Set |
| hp-bsl-50-2p, hp-bsl-100-2p | 2er-Set |
| alle acht CTL (180, 180m, 210, 240, 240m, 300, 360, 400) | mit Ring |

**Schritt A, Variantenmodus (`8fe385b`):** Der Variantenmodus gilt nur noch, wenn sich die Maße der Varianten
unterscheiden (eigener Wert, sonst Grundwert am Produkt). Die Liste vorher bestätigt deine Annahme. Der Vergleich der
Vorschau nur mit A gegen live über alle 116 Seiten ergab genau eine Änderung: hp-ctl-400-eu-1.

**Schritt C, Leiste (`d6ca02d`):** Im Familienmodus bilden Familie und Ausführung einen Schlüssel. Hat das aktuelle
Produkt keinen Wert, fällt die Ausführung aus dem Schlüssel, und es gilt die Regel aus Teil Q. Danach greift wie bisher
„nur Lichtfarbe zusammenfassen“.

**Theme Check vor jedem Commit:** 1 Fehler, 14 Warnungen (Ausgangsstand), keine in geänderten Dateien. Schritt A
brauchte eine Rechnung statt eines zusätzlichen `and`, sonst lag die LiquidComplexity bei 121.

**Liste** `docs/data/teilr-serienleiste.csv` (`5ccb215`): 116 Produkte, Modus und Karten vorher (live 15:59) und nachher
(Vorschau A+C), Ziel jedes Klicks. Geändert: 5.

| Produkt | vorher | nachher | Grund |
|---|---|---|---|
| hp-ctl-400-eu-1 | keine Leiste | 1,5 / 1,5 / 1,5 / 2 / 2 / 2,5 * / 2,5 / 3 m (8 Karten) | A |
| hp-bsl-50-1p | 5 m * / 5 m / 10 m / 10 m | 5 m * / 10 m (→ 100-1p) | C, 1er-Set |
| hp-bsl-100-1p | 5 m / 5 m / 10 m / 10 m * | 5 m (→ 50-1p) / 10 m * | C, 1er-Set |
| hp-bsl-50-2p | 5 m / 5 m * / 10 m / 10 m | 5 m * / 10 m (→ 100-2p) | C, 2er-Set |
| hp-bsl-100-2p | 5 m / 5 m / 10 m * / 10 m | 5 m (→ 50-2p) / 10 m * | C, 2er-Set |

**Vorschau #200044478797:**
- Crawl der 116 Seiten: genau die 5 Änderungen der Liste.
- Klicktest an allen 4 BSL, allen 8 CTL, dazu hp-uct-200-eu, hp-dct-200 und hp-csl-200-c: DE und EN, Desktop und
  mobil, jede Variante als Start, jeder Klick verfolgt.
- Ergebnis: 108 Startzustände, 432 Klicks, alle Ziele und Landungen richtig, Kartenzahl richtig, Ausblendung wie
  erwartet.
- Die 16 Landungen auf hp-ctl-400-eu-1 ohne Leiste aus Teil Q gibt es nicht mehr.
- EN zeigt dieselben Karten wie DE. `ausfuehrung` hat keine Übersetzung, /en/ vergleicht also dieselben Werte.

**Live (16:35:05):**
- Crawl 116 Seiten: gleich der Vorschau, 0 Abweichungen.
- Klicktest live, gleiche 15 Produkte, DE und EN, Desktop und mobil: 108 Startzustände, 432 Klicks, alle richtig.
  Theme-ID 192437387597 auf allen Seiten.

**Kontaktbögen:** `docs/data/teilr-serienleiste-desktop.jpg` und `-mobil.jpg` (vorher live bis 16:34 gegen nachher live,
DE und EN).

**Rückweg:** `git revert d6ca02d` (C) bzw. `git revert 8fe385b` (A), dann push auf main. Die Definition bleibt.

## 3 Pflege-Text kat-curtain

| | DE | EN |
|---|---|---|
| vorher | Die Zuleitung führst du seitlich zur Steckdose. | Run the power cord sideways to the outlet. |
| nachher | Die Zuleitung führst du seitlich weg. | Run the power cord off to the side. |

- Der Rest des Texts ist gleich. Er hängt an 8 Vorhängen: hp-csl-200-c/-w (Netz), hp-csl-300-c/-w (seit 15:57 USB),
  hp-dct-200 (seit 15:57 Netz), hp-rct-400 (ohne Stromquelle), hp-ucp-200 (USB laut Beschreibung, Feld leer),
  hp-uct-200-eu (seit 15:57 USB). Der neue Satz stimmt für alle.
- Liste `docs/data/teilr-texte.csv`, Commit `2323b53` vor dem Schreiben. DE 15:55:52 per `metaobjectUpdate`, EN per
  `translationsRegister`. Shopify hat den vorab berechneten Digest angenommen, also steht DE wie geplant.
- Storefront an allen 8 Vorhängen, DE und EN mobil: Der neue Satz steht da, 0 Ladefehler. Kontaktbogen
  `docs/data/teilr-texte-mobil.jpg`.
- Rückweg: Spalten „vorher“ in `teilr-texte.csv`.

## 4 Regel für alle sichtbaren Texte

In `CLAUDE.md` steht jetzt ein eigener Abschnitt „Textregeln gelten für jeden sichtbaren Text“ (`3f7e5b8`):
- **Geltungsbereich:** Beschreibung, SEO, Feature-Blöcke, Fragen, Pflege-Texte, Lieferumfang-Block, strukturierte Daten
  und Meta-Tags.
- **Regeln:** Längen (Verweis auf das Titelmuster in `docs/projektstand.md`), Werte nur mit Beleg, Netzteil nur mit
  Lieferumfang, Steckdose nur mit Stromquelle Netz, keine Gedankenstriche.
- **Gemeinsame Texte:** Sie werden gegen jedes Produkt geprüft, an dem sie hängen.
- **Suche:** immer zweifach, über die Daten und über die fertigen Seiten in DE und EN.

## 5 Werte aus Auftrag 38

Meldung der Asset-Instanz um 15:57:25:
- Zuleitung 3,0 an den vier UCT-Varianten 3 x 2 m (Lichterkette und Kupferdraht).
- Stromquelle USB an hp-uct-200-eu, hp-csl-300-c, hp-csl-300-w.
- Stromquelle Netz an hp-dct-200.
- hp-rct-400 bleibt ohne Stromquelle (Tyler-Nachtrag).

**Storefront (16:01, live, DE und EN):**
- **hp-uct-200-eu:** Zuleitung 3 m bei beiden 3-x-2-m-Ausführungen, bei 3 x 3 m keine Zeile. Spec-Kachel und Tabelle
  „Stromquelle USB“ (EN „Power source USB“).
- **hp-csl-300-c/-w:** „Stromquelle USB“.
- **hp-dct-200:** „Stromquelle Netz“ (EN „Plug-in“).
- **Texte:** Beschreibungen, Blöcke, Fragen und Pflege-Texte dieser Produkte durchsucht, an der fertigen Seite nach
  Steckdose, Netz, Strom, USB, Zuleitung, Stecker (EN outlet, plug, power, cord). Kein Text widerspricht den neuen
  Werten.
  - DCT: „Die Zuleitung ist 3 m lang, die Steckdose darf also ein Stück entfernt sein.“ Das passt zu Netz.
  - UCT und CSL-300 nennen keine Steckdose.

Zu schreiben war nichts. Befunde ohne Änderung:
- **CSL-200:** Die Beschreibung sagt „den Strom bekommt er aus der Steckdose“, passend zum Feld „Netz“. Die
  Asset-Instanz sieht auf Tafel 4 von hp-csl-200-c aber „USB-Anschluss“ (Frage 2).
- **Zuleitung fehlt:** hp-csl-300-w hat keine Zuleitung (CSL-300-C hat 3 m), hp-uct-200-eu 3 x 3 m auch nicht.
- **Serienleiste CSL:** Seit 15:57 ist sie live an allen vier CSL-Seiten weg, durch die Daten, nicht durch das Theme.
  Die Leiste nimmt nur Nachbarn derselben Stromquelle (Regel vom 10.11.), und CSL-200 „Netz“ und CSL-300 „USB“ gelten
  jetzt als verschiedene Bauarten. Vorher zeigten alle vier „3 x 2 m | 3 x 3 m“.

## 6 Liste für Daniel

`docs/data/teilr-liste-daniel-es-fr-it.md`: kat-curtain. Neue Theme-Sprachtexte gibt es keine. `ausfuehrung` wird nicht
übersetzt.

## Commits

| Commit | Inhalt | Theme Check |
|---|---|---|
| `2323b53` | Liste kat-curtain (vor dem Schreiben) | nur Doku |
| `3f7e5b8` | CLAUDE.md Textregeln, Kontaktbogen kat-curtain | nur Doku |
| `8fe385b` | Serienleiste Schritt A | 1 Fehler, 14 Warnungen (Ausgangsstand), keine in geänderten Dateien |
| `d6ca02d` | Serienleiste Schritt C | 1 Fehler, 14 Warnungen (Ausgangsstand), keine in geänderten Dateien |
| `5ccb215` | Liste Serienleiste (vor dem Livegang) | nur Doku |
| (dieser) | Bericht, Daniel-Liste, Doku D4, Kontaktbögen | nur Doku |

## Offen bei dir

1. **CTL und `ausfuehrung`:** Die Asset-Instanz belegt alle acht CTL mit „mit Ring“. Auch die Baummäntel 180, 240, 300
   und 360 haben laut Tafel einen Ring. Der Unterschied zu 210 und 400 sind 14 bzw. 16 Stränge gegen 12. Die CTL-Leiste
   zeigt deshalb weiter eine Karte je Produkt mit gleich aussehenden Karten. Willst du 210 und 400 von den Baummänteln
   trennen? Dann bräuchte das Feld einen weiteren Wert, etwa „Baummantel“, und die Asset-Instanz müsste ihn belegen.
   Sonst bleibt es so.
2. **CSL-Serienleiste:** Sie ist live weg, seit CSL-300 „USB“ trägt und CSL-200 „Netz“. Die Asset-Instanz legt dir drei
   Wege vor und empfiehlt a):
   - a) CSL-200 prüfen und bei Beleg auf USB setzen. Die Leiste kommt zurück, und ich fasse die CSL-200-Beschreibung
     („den Strom bekommt er aus der Steckdose“) neu.
   - b) USB an CSL-300 zurücknehmen.
   - c) So lassen bis zu Tylers Antwort.
3. **Übersetzung von `ausfuehrung`:** Das Feld hat keine EN-Werte, so vergleicht /en/ dieselben Werte. Falls Translate &
   Adapt sie später maschinell füllt, müssen gleiche Werte gleich übersetzt sein. Sonst trennt die Leiste auf EN falsch.
   Soll ich in einer späteren Runde EN-Werte gleich dem deutschen Wert setzen, damit das sicher bleibt?
