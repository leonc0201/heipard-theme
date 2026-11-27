# HeiPard Theme: Bericht Teil S

**Stand:** 27.11.2026, abends, deutsche Zeit. Auftrag: `heipard-theme-auftrag-teil-s.md`. Vor jedem Schreibzugriff
`get-shop-info` = HeiPard. Nicht angefasst: Preise, Status, Bestand, Handles, Showroom-Logik, Rechtstexte, Sprachdateien
ES/FR/IT, Einstellungen in Search & Discovery, Produktmedien, `galerie_medien`, Optionswerte, Files, Bildfelder
`feature_*`, Lieferumfang, technische Metafelder. ES/FR/IT habe ich nur an `heipard.ausfuehrung` geschrieben (Abschnitt 3,
so beauftragt). Nichts an Shenzhen oder Tyler.

## Kurzfassung

- **2 CTL nach Strängen:** Auswahl um „12 Stränge“ und „14 bis 16 Stränge“ ergänzt, „ohne Ring“ entfernt.
  - Die Asset-Instanz hat **nach den Tafeln umgekehrt zu deiner Liste** gesetzt: CTL-210 und -400 „14 bis 16
    Stränge“ (Tafeln: 14 und 16 Stränge), die Baummäntel 180, 240, 300 und 360 „12 Stränge“. Die Gruppen sind dieselben
    wie gewünscht, nur die Beschriftung folgt der Tafel.
  - 180m und 240m bleiben „mit Ring“, weil keine Tafel ihre Strangzahl belegt. Die Baummantel-Leiste teilt sich
    deshalb in 180/240/300/360 und 180m/240m (Frage 1).
  - Prüfung: Vorschau und live, Desktop und mobil, DE und EN, 144 Startzustände und 352 Klicks, alle richtig.
- **3 Übersetzung `ausfuehrung`:** 72 Übersetzungen (EN, ES, FR, IT gleich DE). Die Leiste ist in allen fünf Sprachen
  gleich (56 von 56 Vergleichen).
- **4 Lichtfarben-Filter:**
  - Kein Link mit dem alten Filter, weder in den Daten noch auf den Seiten.
  - Spec-Kacheln, Technik-Tabelle und Icon-Grid lesen jetzt die Option oder `heipard.lichtfarben`. Live seit
    19:24:47. Geändert an 5 Produkten: VIT-586, VIT-864, VLM-100L, VAM-400L zeigen beide Lichtfarben, FXF-001 zeigt
    erstmals eine.
  - Auf ES/FR/IT zeigen Produkte mit Option jetzt die richtige Lichtfarbe je Variante (vorher leer oder immer
    warmweiß).
  - Filterwerte auf ES/FR/IT sind übersetzt. Fund für Daniel: der ES-Optionswert „Multicolor彩在线“.
- **5 CSL-200:** Stromquelle seit 18:46 USB. Der Satzteil „den Strom bekommt er aus der Steckdose“ heißt jetzt „den
  Strom bekommt er über USB“ (EN „it is powered via USB“). Die CSL-Leiste ist an allen vier Seiten zurück.
- **6 Werte aus Auftrag 39:** Anzeige der neuen Stromquellen DE/EN richtig (auch „Akku“). Zwei Pflege-Texte passen nicht
  zu den Produkten, an denen sie hängen (Fragen 2 und 3). Zwischenfund behoben: ohne ES/FR/IT-Stromquelle fehlten dort
  Leisten, die Asset-Instanz hat um 19:17 nachgetragen.
- **7 Liste für Daniel:** `docs/data/teils-liste-daniel-es-fr-it.md`.
- **Vorschau-Theme:** #200052900173 „zz-vorschau Teil S Lichtfarbe (kann weg)“, angelegt 18:42:45. Kann gelöscht
  werden. Die Vorschau-Themes von Teil Q und R habe ich nicht angefasst.
- **Offen bei dir:** 4 Fragen am Ende.

## Zeitleiste

| Zeit | Was |
|---|---|
| gegen 18:30 | `git pull`, main = `f3dfc1e` (nichts Neues aus dem Shop) |
| gegen 18:30 | Abschnitt 2, Schritt 1: Auswahl von `heipard.ausfuehrung` um zwei Werte ergänzt. Schritt 2: Bescheid an die Asset-Instanz |
| 18:32:16 | `24cb004` Liste `teils-ausfuehrung-uebersetzung.csv` (vor dem Schreiben) |
| 18:32 | Abschnitt 3: 48 Übersetzungen an 12 Metafeldern |
| 18:33 | Leiste in 5 Sprachen geprüft: 18 von 18 gleich |
| 18:35 bis 18:45 | Abschnitt 4: Suche nach Filter-Links (Daten und Seiten), Erfassung der Lichtfarbe live (157 URLs, DE und EN), Umbau lokal |
| 18:42:45 | Vorschau-Theme #200052900173 angelegt |
| 18:46:23 | Asset-Instanz: Stromquelle an CSL-200-C/-W (USB) und 12 weiteren Produkten, DE und EN |
| 18:48:58 | Asset-Instanz: `ausfuehrung` an sechs CTL nach Tafel |
| 18:50:57 | Storefront: Auf /en/ wirken die veralteten Übersetzungen weiter (EN zeigt noch alle 8 CTL) |
| 18:51:14 | `01b2fbb` Liste Runde 2 (vor dem Schreiben) |
| 18:52 | 24 Übersetzungen an den sechs CTL erneuert |
| 18:53 | „ohne Ring“ aus der Auswahl |
| 18:55 bis 19:20 | Klickprüfung Vorschau und live, Desktop und mobil |
| 18:57:40 | `8b0e383` Liste `teils-texte.csv` (vor dem Schreiben), danach CSL-200 DE und EN |
| 19:09:09 | `cb6f400` Listen und Kontaktbogen Lichtfarbe (vor dem Livegang) |
| 19:09:17 | `66b19d2` Lichtfarbe-Umbau, gepusht 19:09:20. Im Live-Theme kam nur das neue Snippet an (siehe 4.2) |
| 19:15 | Befund Stromquelle ES/FR/IT an die Asset-Instanz |
| 19:15 bis 19:25 | Bild 1 an 20 Produkten für die Asset-Instanz geprüft |
| 19:17:42 | Asset-Instanz: Stromquelle ES/FR/IT nachgetragen |
| 19:21 | Leisten in 5 Sprachen: 56 von 56 gleich |
| 19:24:39 | `4517446` kleiner Commit an den drei Snippets, Sync um 19:24:47, Storefront 19:25:04 |
| ab 19:25 | Lichtfarbe live geprüft (157 URLs DE/EN, Stichprobe ES/FR/IT, Variantenwechsel per Klick) |

## 1 Entscheidungen

Umgesetzt wie entschieden: CTL nach Strängen (2), CSL Weg a (5), Übersetzung von `ausfuehrung` gleich DE (3), Folgearbeiten
zum Filter (4). Die Vorschau-Themes von Teil Q und R stehen weiter.

## 2 CTL nach Strängen

**Schritt 1, Auswahl (gegen 18:30):**

| | Auswahl | Beschreibung |
|---|---|---|
| vorher | 1er-Set, 2er-Set, mit Ring, ohne Ring | „… (BSL 1er- oder 2er-Set, CTL mit oder ohne Ring) …“ |
| nach Schritt 1 | + 12 Stränge, 14 bis 16 Stränge | „… (BSL 1er- oder 2er-Set, CTL nach der Zahl der Stränge) …“ |
| nach Schritt 4 (18:53) | 1er-Set, 2er-Set, mit Ring, 12 Stränge, 14 bis 16 Stränge | unverändert |

**Schritt 2, Werte (Asset-Instanz, 18:48:58):**

| Produkt | vorher | nachher | Beleg laut Asset-Instanz |
|---|---|---|---|
| hp-ctl-210-eu-1 | mit Ring | 14 bis 16 Stränge | Tafel „Insgesamt 14 Stränge“, Excel „14线“ |
| hp-ctl-400-eu-1 | mit Ring | 14 bis 16 Stränge | Tafel „Insgesamt 16 Stränge“, Excel „16线“ |
| hp-ctl-180, -240, -300-eu, -360-eu | mit Ring | 12 Stränge | Tafeln „Insgesamt 12 Stränge“ |
| hp-ctl-180m, -240m | mit Ring | mit Ring | keine Tafel mit Strangzahl, nur der Amazon-Titel nennt 12 |

**Schritt 3, Leiste (nach der Meldung):**

| Gruppe | Karten (Maß) |
|---|---|
| 12 Stränge: 180, 240, 300, 360 | 1,5 m, 2 m, 2,5 m, 3 m |
| mit Ring: 180m, 240m | 1,5 m, 2 m |
| 14 bis 16 Stränge: 210, 400 | 1,5 m, 2,5 m (210 und 400 zeigen sich gegenseitig, nicht nur sich selbst) |

Vorher (Teil R) zeigte jede CTL-Seite alle acht Karten. Ein Baummantel zeigt jetzt nur Baummäntel, aber wegen
180m/240m nicht alle (Frage 1).

**Schritt 4:** „ohne Ring“ nutzt kein Produkt mehr und ist raus. „mit Ring“ bleibt wegen 180m und 240m.

**Schritt 5, Prüfung:**
- Klickprüfung an 4 BSL, 8 CTL und 4 CSL: jeder Startzustand (Produkt bzw. jede Variante), jede Karte angeklickt,
  Landung geprüft. Ergebnis:

  | Lauf | Startzustände | Klicks | falsch |
  |---|---|---|---|
  | Vorschau #200052900173, Desktop, DE/EN | 36 | 88 | 0 |
  | Vorschau, mobil, DE/EN | 36 | 88 | 0 |
  | live, Desktop, DE/EN | 36 | 88 | 0 |
  | live, mobil, DE/EN | 36 | 88 | 0 |

- Die Leiste hängt hier nur an Daten, das Theme ist dafür unverändert. Vorschau und live zeigen deshalb dasselbe.
- **Alle 116 Seiten gegen die Vorschau (DE und EN, 19:13 bis 19:32):** 232 von 232 gleich (Überschrift, Maß, Werte,
  Karten mit Ziel, aktuelle Karte), kein Liquid-Fehler. Je Sprache haben 92 Seiten eine Leiste und 24 keine. Nach Teil
  R waren es 88; die vier CSL sind dazugekommen.
- **Kontaktbögen:** `docs/data/teils-serienleiste-desktop.jpg` und `-mobil.jpg`. Je Produkt DE/EN vorher (Stand Teil
  R, live ab 16:35) gegen nachher (live ab 18:52).
- **Theme Check:** vor jedem Commit 1 Fehler, 14 Warnungen (Ausgangsstand). In geänderten Dateien nur die bekannte
  Warnung `OrphanedSnippet` an `heipard-product-specs` (das Snippet wird aus dem Produkt-Template gerendert).
- **Rückweg:** Werte setzt die Asset-Instanz zurück. Auswahl per `metafieldDefinitionUpdate` (alte Liste oben).

## 3 Übersetzung von `ausfuehrung`

- **Liste** `docs/data/teils-ausfuehrung-uebersetzung.csv`. Metafeld-ID, DE-Wert und Digest je Produkt, Runde 1 und
  Runde 2.
- **Runde 1 (18:32), heutige Werte:** 12 Metafelder (4 BSL, 8 CTL) × EN, ES, FR, IT = 48 Übersetzungen, alle
  angenommen. Vorher gab es keine.
- **Runde 2 (18:52), neue Werte:** 6 CTL × 4 Sprachen = 24 Übersetzungen. Zwischen 18:48:58 und 18:52 zeigte /en/
  noch die alte Gruppe (alle 8 CTL). Shopify zeigt veraltete Übersetzungen weiter an, das ist um 18:50:57 an der
  Storefront nachgewiesen.
- **Prüfung:**
  - 18:33: EN an allen 12, dazu ES/FR/IT an hp-bsl-100-1p und hp-ctl-180, 18 von 18 gleich DE.
  - 19:21, nach Runde 2 und dem Stromquellen-Nachtrag: 14 Produkte (4 CSL, 8 CTL, 2 BSL) in EN, ES, FR, IT gegen DE,
    56 von 56 gleich, keine Seite ohne Leiste.
  - Dazu die Klickprüfung in DE und EN (Abschnitt 2).
- **Rückweg:** `translationsRemove(resourceId: <Metafeld-ID>, translationKeys: ["value"], locales: ["en","es","fr","it"])`
  je Zeile der Liste.

## 4 Lichtfarben-Filter: Folgearbeiten

**4.1 Links mit dem alten Filter (`filter.p.m.heipard.lichtfarbe=`): kein Fund, nichts umzustellen.**
- **Daten:**
  - Theme-Code (alle Dateien, auch Templates und `settings_data.json`; die Live-Dateien von Header und Produkt-Template
    zusätzlich abgerufen).
  - Menüs (3), Seiten (2), Blogbeiträge (0), Weiterleitungen (0).
  - Beschreibungen aller 73 Kollektionen (alle leer) und aller 116 aktiven Produkte.
  - Metaobjekte: `feature_block` 348, `feature_set` 71, `product_question` 191, `heipard_pflege` 11, Knowledge-Base 7.
- **Seiten:** Startseite, Suche, Kontakt und alle 73 Kollektionen in DE und EN (152 Seiten), jeder Link mit
  `filter.p.` oder `lichtfarbe`. Kein Treffer.
- Der Filter steht auf 134 Kollektionsseiten und nutzt `filter.p.m.heipard.lichtfarben`.

**4.2 Theme liest das alte Feld.** Je Stelle:

| Stelle | vorher | nachher |
|---|---|---|
| Spec-Kacheln `heipard-product-specs` | Option „Lichtfarbe“ (nur DE/EN-Name erkannt), sonst `lichtfarbe` an Variante, sonst Produkt | Snippet `heipard-lichtfarbe` |
| Technik-Tabelle `heipard-fb-technik` | Option (DE/EN-Name), sonst `lichtfarbe` am Produkt | Snippet `heipard-lichtfarbe` |
| Icon-Grid `heipard-fb-icon-grid` | wie Spec-Kacheln; Hinweistext im Editor nannte `heipard.lichtfarbe` | Snippet `heipard-lichtfarbe`, Hinweis nennt `heipard.lichtfarben` |
| `heipard-fb-icon` | liest kein Feld, „lichtfarbe“ ist nur der Icon-Name | unverändert |
| Serienleiste | liest schon `heipard.lichtfarben` | unverändert |

- **Neues Snippet `heipard-lichtfarbe`:**
  - Zuerst der Wert der Option „Lichtfarbe“ der gewählten Variante. Der Name wird in allen fünf Sprachen erkannt,
    dieselbe Liste wie in der Serienleiste.
  - Sonst die Liste `heipard.lichtfarben`, mit Komma verbunden.
  - Das alte Feld liest das Theme nicht mehr. Kein Produkt hat nur das alte Feld, keines hat Varianten-Metafelder.
- **Liste** `docs/data/teils-lichtfarbe.csv`: alle 116 Produkte plus 41 Variantenaufrufe (erste Variante je
  Lichtfarbe), je URL Kachel, Technik und Icon-Grid in DE und EN, heute gegen neu.
- **Ergebnis (DE und EN):** 152 URLs gleich, 5 geändert:

  | Produkt | heute | neu | Beleg |
  |---|---|---|---|
  | hp-vit-586l-eu-1 | Warmweiß | Warmweiß, Multicolor | Beschreibung „schaltest zwischen Warmweiß und Bunt um“ |
  | hp-vit-864l-eu-1 | Multicolor | Warmweiß, Multicolor | Beschreibung wie oben |
  | hp-vlm-100l | Warmweiß | Warmweiß, Multicolor | Beschreibung „leuchtet warmweiß oder bunt“ |
  | hp-vam-400l-eu-1 | Warmweiß | Warmweiß, Multicolor | Feld `lichtfarben` (keine Beschreibung) |
  | hp-fxf-001 | leer | Warmweiß | Feld `lichtfarben` |

- **Spalte „hinweis“ der Liste:** An OLA-S14, CTL-360, CL-1/-2 und UCP-200 kam zwischen den Läufen die Kachel
  „Stromquelle“ dazu. Das ist die Datenänderung der Asset-Instanz um 18:46, kein Effekt des Umbaus.
- **Ohne Lichtfarbe bleiben** (beide Felder leer): hp-dlm-100h, pec-150g, pvc-150g, hp-dgm-048. PEC und PVC sind laut
  Asset-Instanz Bäume ohne Licht.
- **ES/FR/IT** (Stichprobe 8 Produkte, 21 URLs, `docs/data/teils-lichtfarbe-esfrit.csv`, 48 von 63 Zeilen geändert):
  - Heute erkannte das Theme den übersetzten Optionsnamen nicht. ISL, NPT, CTL-210 zeigten keine Lichtfarbe, UCP-200 und
    DPT-300 bei jeder Variante „Blanco cálido / Blanc chaud / Bianco caldo“, auch bei Kaltweiß und Multicolor.
  - Jetzt zeigt jede Variante ihre Farbe.
- **Vorschau, dann live:**
  - Vorschau #200052900173: 314 Aufrufe (157 URLs × DE/EN), kein Liquid-Fehler.
  - Live: Der Push 66b19d2 um 19:09:20 hat im Live-Theme nur das neue Snippet angelegt (19:09:26), die drei
    geänderten Snippets blieben 15 Minuten alt. Vermutlich, weil ich zwei Commits 8 Sekunden nacheinander gepusht
    habe. Ein Schreiben ins Live-Theme über die API sperrt der Connector, `theme_commit` ist nicht erlaubt.
  - Lösung: kleiner echter Commit `4517446` an genau diesen Dateien (Datum im Kommentar). Sync um 19:24:47, MD5 aller
    vier Dateien gleich main, Storefront 19:25:04.
  - **Live gegen Vorschau (19:26 bis 19:36):**
    - 157 von 157 URLs in DE und EN mit gleicher Lichtfarbe in Kachel, Technik und Icon-Grid, kein Liquid-Fehler.
    - Stichprobe ES/FR/IT 63 von 63 gleich.
    - Unterschiede gibt es nur in der Kachelfolge an OLA-S14, CTL-360 und CL (Stromquelle neu). Der DE-Teil des
      Vorschau-Laufs lag vor 18:46.
  - **Variantenwechsel per Klick** (ISL-360, UCP-200, NPT-210, DPT-300; DE, EN, ES, dazu ISL-360 in FR und IT): Kachel
    und Technik-Zeile folgen jeder gewählten Lichtfarbe nach 0,2 bis 0,6 s.
  - Ausnahmen:
    - DPT-300 „Multicolor“ bei 30 m: Die Kombination gibt es nicht, Dawn wählt keine Variante, die Kachel bleibt.
      Das war schon vorher so.
    - Dreimal fehlte bei einem einzelnen Klick die Technik-Zeile bis zu 10 s (ES und FR, während parallel drei
      Crawls liefen). Wiederholt lief es sauber.
    - Die Technik-Tabelle lädt `heipard-variant.js` je Wechsel neu, ohne ältere Anfragen abzubrechen und mit
      stillem Fehlerfang. Das ist unverändert und nicht Teil des Umbaus (Hinweis 2).
- **Kontaktbogen** `docs/data/teils-lichtfarbe-mobil.jpg`: Spec-Kacheln mobil heute (live) gegen neu (Vorschau) für
  die 5 Produkte in DE/EN und UCP-200 Kaltweiß in ES/FR.
- **Theme Check:** 1 Fehler, 14 Warnungen wie Ausgangsstand.
- **Rückweg:** `git revert 4517446 66b19d2`, push auf main, danach MD5 der vier Dateien gegen main prüfen. Das Snippet
  `heipard-lichtfarbe` wird dabei gelöscht, das alte Feld ist unverändert da.

**4.3 Werte im Filter auf ES, FR, IT:**
- Übersetzt, keine deutschen Werte (Kollektion lichterketten und familie-isl):
  - ES „Blanco cálido“, „Blanco frío“, „Multicolor“
  - FR „Blanc chaud“, „Blanc froid“, „Multicolore“
  - IT „Bianco caldo“, „Bianco freddo“, „Multicolore“
- Bezeichnungen: ES „Color de luz“, FR „Couleur de la lumière“, IT „Colore della luce“.
- Für Daniel zur Durchsicht:
  - Die Bezeichnung weicht vom Optionsnamen ab (ES „Color de la luz“, FR „Température de couleur“).
  - Der ES-Optionswert „Multicolor彩在线“ steht schon heute in der Variantenauswahl, seit Teil S auch in Kachel und
    Technik.

**4.4** Das alte Feld `heipard.lichtfarbe` und seine Definition sind unverändert.

## 5 CSL-200 nach Auftrag 39

- **Daten:** Die Asset-Instanz setzte um 18:46:23 `stromquelle` an hp-csl-200-c und -w von Netz auf USB (Tafel 6
  „USB-Anschluss“, bei -w dazu die Maßtafel mit USB-Stecker).
- **Suche** nach Steckdose/Netz/Netzteil (DE) und outlet/mains/plug (EN), Daten und Seiten inklusive Meta und JSON-LD,
  an allen vier CSL:
  - Einzige Fundstelle war die Beschreibung von CSL-200-C und -W, das JSON-LD übernimmt sie.
  - Blöcke, Fragen, Lieferumfang und SEO sind ohne Fund.
  - Der Pflege-Text kat-curtain ist seit Teil R neutral.
- **Liste** `docs/data/teils-texte.csv` (`8b0e383`, vor dem Schreiben):

  | | vorher | nachher |
  |---|---|---|
  | DE | … die Zuleitung ist 3 m lang, den Strom bekommt er aus der Steckdose. | … die Zuleitung ist 3 m lang, den Strom bekommt er über USB. |
  | EN | … the power cord is 3 m long, and it plugs into a standard outlet. | … the power cord is 3 m long, and it is powered via USB. |

  Der Wortlaut folgt hp-ucp-200. Ein Netzteil nennt der Text nicht, weil der Lieferumfang keines nennt (Regel aus
  Teil Q). DE per `productUpdate` (nur `descriptionHtml`, SEO unverändert). EN per `translationsRegister` mit dem
  Digest des neuen DE-Werts, beide angenommen.
- **Nachher an der Storefront:** DE und EN an allen vier CSL kein Steckdose/outlet mehr, auch nicht in Meta und JSON-LD.
- **Leiste:** an allen vier CSL zurück, 3 x 2 m und 3 x 3 m je Lichtfarbe. Klickprüfung siehe Abschnitt 2, in ES/FR/IT
  seit 19:21.
- **Kontaktbogen** `docs/data/teils-texte-mobil.jpg` (nachher live mobil, der alte Satz steht darüber).
- **Rückweg:** alte Sätze aus der Liste per `productUpdate` und `translationsRegister` zurück.

## 6 Werte aus Auftrag 39

Die Asset-Instanz setzte die Stromquelle um 18:46:23 (EN 18:47, ES/FR/IT 19:17:42):

| Produkte | Wert (EN) | Texte |
|---|---|---|
| hp-csl-200-c, -w | USB | siehe Abschnitt 5 |
| hp-ola-s14-15/-30/-50-eu | Netz (Plug-in) | passend. Der Block „… zur Steckdose laufen“ ist bei Netz richtig. Pflege-Text kat-led passt bei Netz |
| hp-ctl-360-eu | Netz (Plug-in) | kein Text zur Stromversorgung |
| hp-ucp-200 | USB | passend (Beschreibung „über USB … ein Netzteil liegt nicht bei“) |
| hp-cl-1-eu, hp-cl-2-eu | Akku (Rechargeable battery) | Beschreibung, Fragen, Lieferumfang passend. **Pflege-Text kat-led passt nicht** (Frage 2) |

- **Anzeige** an der Storefront DE und EN: Kachel, Technik-Zeile und Kartenplakette zeigen den Wert. Das Icon-Grid
  zeigt bei Akku das Batterie-Icon, bei Netz und USB den Stecker.
- **Zusätzlich geprüft,** weil laut Asset-Instanz ohne Stromquelle: hp-wbf-180, hp-wbf-210 und hp-rct-400 ohne Satz zur
  Steckdose. Bei pec-150g und pvc-150g passt der Pflege-Text kat-weihnachtsbaum nicht (Frage 3).
- **Zwischenfund, behoben:**
  - Die Werte hatten zunächst nur DE und EN. Auf ES/FR/IT stand deshalb der deutsche Wert, an CSL-200 sogar noch
    die veraltete Übersetzung für Netz.
  - Weil die Serienleiste die Stromquelle in der Sprache der Seite vergleicht, fehlte dort die CSL-Leiste, und CTL-360
    fiel aus der Baummantel-Leiste.
  - Gemeldet um 19:15, die Asset-Instanz hat um 19:17:42 ES/FR/IT nachgetragen. 19:21 alle Leisten in allen Sprachen
    gleich.
- **Zusatz auf Bitte der Asset-Instanz (Auftrag 39, 5):** Bild 1 an 20 Produkten an der Storefront geprüft.
  - Kachel in Familienkollektion und Suche, erstes Galeriebild, `og:image`, Variantenwechsel bei OLS-S11-16, RPM-200 und
    VLM-100L.
  - DE und EN Desktop, DE mobil, alles richtig.
  - Showroom-Modus unverändert (kein Preis auf den Kacheln).

## 7 Liste für Daniel

`docs/data/teils-liste-daniel-es-fr-it.md`:
- CSL-200 (2 Beschreibungen).
- `ausfuehrung` (nicht übersetzen).
- Die vier Bezeichnungen des Filters zur Durchsicht, mit abweichenden Optionsnamen.
- Filterwerte ES/FR/IT (übersetzt).
- Der ES-Fehler „Multicolor彩在线“.
- Die Stromquellen-Begriffe für Akku.
- Hinweis zu NPT „Weiß“.

## Commits

| Commit | Was |
|---|---|
| `24cb004` | Liste Übersetzung Ausführung (vor dem Schreiben) |
| `01b2fbb` | Liste Übersetzung, Runde 2 (vor dem Schreiben) |
| `8b0e383` | Liste Texte CSL-200 (vor dem Schreiben) |
| `cb6f400` | Listen und Kontaktbogen Lichtfarbe (vor dem Livegang) |
| `66b19d2` | Lichtfarbe aus `heipard.lichtfarben` (neues Snippet, drei Snippets umgestellt) |
| `4517446` | Datum im Kommentar, stößt den Sync der drei Snippets an |
| (dieser) | Bericht, Liste für Daniel, Kontaktbögen, D4 in `docs/heipard-feature-baukasten.md` |

## Hinweise

1. **Veraltete Übersetzungen wirken weiter.** Ändert sich ein übersetzter Wert, zeigt Shopify in den anderen Sprachen
   den alten Text, bis die Übersetzung erneuert ist. Bei `ausfuehrung` und `stromquelle` trennt das die Leisten je
   Sprache. Steht jetzt in D4 der Baukasten-Doku.
2. **Nachladen der Feature-Sektion:**
   - `heipard-variant.js` holt die Feature-Sektion bei jedem Variantenwechsel neu. Ältere Anfragen werden nicht
     abgebrochen, Fehler werden verschluckt.
   - Bei sehr schnellen Wechseln oder einer gedrosselten Anfrage kann die Technik-Tabelle kurz fehlen oder einen
     älteren Stand zeigen.
   - Ich habe das nur unter Last gesehen und nicht geändert. Auf Wunsch baue ich eine Abbruch-Logik ein.
3. **hp-npt-210:** Die Option heißt „Weiß“, der Filter führt das Produkt unter Kaltweiß. Die Kachel zeigt die Option
   „Weiß“. Optionswerte liegen bei der Asset-Instanz.

## Offen bei dir

1. **180m und 240m:** Strangzahl ohne Tafel, deshalb „mit Ring“ und eine eigene Leiste neben den übrigen Baummänteln.
   - Möglichkeiten: (a) Du lässt den Amazon-Titel („12 Stränge“) als Beleg gelten, dann setzt die Asset-Instanz
     „12 Stränge“ und alle sechs Baummäntel stehen in einer Leiste. (b) So lassen.
   - Dazu: Gilt die Beschriftung nach Tafel (210/400 „14 bis 16“, Baummäntel „12“)? Sie erscheint nicht auf der Seite.
2. **Pflege-Text kat-led an CL-1 und CL-2 (Akku):**
   - Der Text hängt an 46 Produkten und spricht von „Steckdose oder Batteriefach“, „bei Batteriebetrieb … zum
     Wechseln“ und „Batterien für die Lagerung herausnehmen“. Für die Laterne mit eingebautem Akku (Laden über USB)
     stimmt das nicht.
   - Vorschlag (a): ein eigener Pflege-Eintrag für CL. Dafür bräuchten CL-1/-2 einen eigenen kat-Tag, zum Beispiel
     `kat-camping`, und ich schreibe den Text nur aus Belegen der Beschreibung (Kette in die Laterne rollen, Akku über
     das USB-Ladekabel laden).
   - Vorschlag (b): kat-led neutral fassen. Das ändert den Text an 46 Produkten.
   - Ich empfehle (a).
3. **Pflege-Text kat-weihnachtsbaum an pec-150g und pvc-150g:**
   - Der Text sagt „Die Lichter verbindest du an den Steckverbindungen … einmal einschalten … die Lichter bleiben am
     Baum“. Laut Lieferumfang und Asset-Instanz haben beide Bäume kein Licht.
   - Der Text hängt auch an hp-rsp-180 (Lichterkegel).
   - Vorschlag: die drei Satzteile zu den Lichtern streichen, der Rest bleibt („Stecke die Teile des Baums von unten
     nach oben zusammen …“, „… alle Zweige ausbreiten“, Lagerung).
   - Ob der verbleibende Text zum Lichterkegel passt, bitte mitentscheiden.
4. **Vorschau-Theme #200052900173** („zz-vorschau Teil S Lichtfarbe (kann weg)“) kann weg, löschen geht nur im
   Admin. Die Themes von Teil Q (#200027767117) und R (#200044478797) stehen weiter.
