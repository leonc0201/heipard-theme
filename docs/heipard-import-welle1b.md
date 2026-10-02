# HeiPard Produkt-Import Welle 1b (Spezifikation für die Theme-Instanz)

Stand: 02.10.2026. Ergänzt die Spezifikation von Welle 1 (`heipard-import-spezifikation.md`). Was dort steht, gilt weiter, hier stehen nur die Unterschiede und die neue Quelle.

**Quelle:** `Kategorie-Angebotsbericht_10-02-2026.xlsm` (Seller Central, alle Marken des Accounts). Bitte nach `docs/data/` legen, zusammen mit `sku_familie.csv`. Blatt "Vorlage": Zeile 4 Anzeigenamen, Zeile 5 Attributschlüssel, Zeile 6 Beispielzeile von Amazon, Daten ab Zeile 7. Rund 1.300 Spalten, davon sind etwa 30 relevant.

**Ziel:** Die rund 100 HeiPard-Produkte, die noch nicht im Shop sind, als Entwurf anlegen, mit der Variantenstruktur aus Amazon, den richtigen Kategorie-Tags und Bildern. Die 83 bestehenden Produkte bleiben unangetastet, mit einer definierten Ausnahme (Abschnitt 5).

git pull vorab. Alles bleibt Draft. Nichts aktivieren.

## 1. Zeilen auswählen

Nur Zeilen mit Markenname "HeiPard" (275). Davon importierbar: Status "Aktiv", Abstammungsgrad "Kind" oder leer (kein Elternteil), Hauptbild vorhanden. Das sind 188 Zeilen. Elternteile liefern keine eigenen Produkte, sondern die Variantenstruktur (Abschnitt 3). Inaktive und entfernte Zeilen werden nicht importiert, aber im Bericht gezählt.

SKU-Bereinigung wie in Welle 1: Präfix `VINE-` und Suffixe `-EU-VINE`, `-VINE`, `-EU`, `-EU-1` entfernen. Danach gegen die 83 Shop-Produkte abgleichen. Zeilen, deren bereinigte SKU im Shop existiert, werden nicht neu angelegt (Abschnitt 5 regelt, ob sie etwas am bestehenden Produkt ändern).

Zur Kenntnis: HP-UCP-300M-UK (aus Tylers Excel) steht nicht im Bericht, UK-Variante, nicht importieren. Eine HeiPard-Zeile trägt den Amazon-Produkttyp HEADPHONES, das ist ein Listing-Fehler: nicht importieren, SKU ins Sammelblatt `docs/heipard-offene-punkte.md` unter "Fragen an Shenzhen".

## 2. Felder je Produkt

| Shopify | Quelle im Bericht |
|---|---|
| Titel | Artikelname (Amazon-Titel, vorläufig; Welle 2 ersetzt ihn) |
| SKU je Variante | bereinigte SKU |
| Barcode | Produkt-ID, nur wenn Art der Produkt-ID EAN oder GTIN ist; bei ASIN leer |
| Preis | Verkaufspreis inkl. Steuer (`purchasable_offer ... value_with_tax`) |
| Vendor | HeiPard |
| Produkttyp (product_type) | deutscher Produkttyp nach Abschnitt 4 |
| Status | draft |
| Bilder | Hauptbild plus Andere Bild-URL 1 bis 8, bei Shopify re-hosten. Bilder, die bei mehreren Kindern eines Elternteils gleich sind, einmal am Produkt; abweichende Bilder der Variante zuordnen |
| Metafeld heipard.stromquelle | Energiequelle (`power_source_type`), auf die Auswahlliste abbilden; im Zweifel leer |
| Metafeld heipard.lichtfarbe | Lichtfarbe (`light_color`), auf die Auswahlliste abbilden; im Zweifel leer |
| Metafeld Familie (Serienleiter) | aus `sku_familie.csv`; fehlt die SKU dort, Familiencode nach der Regel: HP-OL[A-Z]-FORM-n wird OLx-FORM, sonst das Kürzel nach HP- |
| Beschreibung | nicht importieren (Amazon-Text ist regelwidrig). Beschreibung und Bullet Points als Referenz in `docs/data/welle1b-quelle.json` sichern |

Alle übrigen Metafelder bleiben leer, die Asset-Instanz befüllt sie aus den Faktenlisten (Auftrag 7).

## 3. Varianten aus der Eltern-Kind-Struktur

Der Bericht enthält Abstammungsgrad, Übergeordnete SKU und Variationsthema. Jedes Elternteil, dessen Kinder alle neu sind, wird ein Shopify-Produkt mit Varianten.

Variationsthema und Shopify-Optionen:

| Thema (Amazon) | Shopify-Optionen | Werte aus |
|---|---|---|
| GRÖSSE | Länge | Größenattribut der Kinder (Spalten zu size, sonst aus Artikellänge mit Einheit) |
| SIZE/LIGHT_COLOR | Länge, Lichtfarbe | Größe und `light_color` |
| FARBE/GRÖSSE | Farbe, Länge | `color` und Größe |
| SIZE/SET_NAME, COLOR/SET_NAME, LIGHT_COLOR/SET_NAME | erste Option plus Set | Set-Attribut der Kinder |
| SIZE/NUMBER_OF_LIGHT_SOURCES | Länge, LED-Anzahl | Größe und Anzahl Lichtquellen |
| SIZE/PLUG_TYPE | Länge, Stecker | Größe und Steckertyp |
| STIL, FARBE | Stil bzw. Farbe | entsprechendes Attribut |

Optionswerte deutsch und einheitlich schreiben (Längen als "10 m", nicht "10M" oder "10 Meter"; Lichtfarbe als "Warmweiß", "Multicolor", "Kaltweiß"). Fehlt ein Optionswert bei einem Kind, dieses Kind als eigenes Produkt anlegen und im Bericht melden, statt zu raten.

Der Produkttitel eines Variantenprodukts ist der Titel des Elternteils, wenn vorhanden, sonst der Titel des ersten Kinds ohne Größen- und Farbangabe. Das Produktbild ist das Hauptbild des ersten Kinds.

Elternteile, bei denen Kinder sowohl neu als auch schon im Shop sind, siehe Abschnitt 5.

## 4. Kategorie-Tags

Jedes Produkt braucht die kat-Tags aus `docs/heipard-taxonomie.md`, sonst erscheint es in keiner Kollektion. Die Quelle sind Tylers Excel (chinesische Produktbezeichnung je SKU, in `HeiPard SKU+ASIN 2026.xlsx`), der Amazon-Produkttyp und der Titel, in dieser Reihenfolge.

| Hinweis in Excel oder Titel | kat-Tags | deutscher Produkttyp |
|---|---|---|
| 窗帘灯, Lichtervorhang, Vorhang | kat-stringlights, kat-curtain | Lichtervorhang |
| 冰条灯, Eisregen, Eiszapfen, Icicle | kat-stringlights, kat-icicle | Eisregen-Lichterkette |
| 网灯, Lichternetz, Netz | kat-stringlights, kat-net | Lichternetz |
| 鞭炮灯, Cluster, Büschel | kat-stringlights, kat-cluster | Cluster-Lichterkette |
| 圣诞树灯, Weihnachtsbaum-Lichterkette, Christbaum | kat-stringlights, kat-christmas-tree-lights | Weihnachtsbaum-Lichterkette |
| 太阳能, Solar | kat-stringlights, kat-solar (bei Ketten); nur kat-solar bei Leuchten ohne Kette | Solar-Lichterkette bzw. Solarleuchte |
| 造型灯, 星星地插, Motiv, Figur, Erdspieß, Stern | kat-motif | Motivleuchte |
| Amazon-Produkttyp ARTIFICIAL_TREE, PEC/PVC/TPE in der SKU | kat-weihnachtsbaum | Weihnachtsbaum |
| App, Smart, RGB per App, WLAN, Bluetooth | kat-smart | Smart-Lichterkette |
| Batterie, batteriebetrieben | kat-stringlights, kat-led | Batterie-Lichterkette |
| sonstige Lichterkette ohne Treffer oben | kat-stringlights, kat-led | Lichterkette |

Regeln: Jedes String-Light-Produkt trägt `kat-stringlights` plus genau einen Unterkategorie-Tag. Solar-Ketten tragen zusätzlich `kat-solar` (Doppelweg wie bisher). Reine RGB-Multicolor-Ketten ohne App sind nicht Smart. Wenn Excel und Titel sich widersprechen oder kein Hinweis greift: keinen kat-Tag setzen, stattdessen `todo-kategorie`, und im Bericht listen. Nicht raten.

Weitere Tags: `todo-text` an allen neuen Produkten (Texte kommen in Welle 2), Serien-Kürzel als Tag wie in Welle 1.

## 5. Bestehende Produkte

Grundsatz: Die 83 bestehenden Produkte werden nicht verändert. HP-OL-30 und HP-OL-50 (fertiges OL-G40-Set) werden unter keinen Umständen angefasst.

Eine Ausnahme: Hat ein Elternteil Kinder, von denen eines schon im Shop ist (als Einzelprodukt ohne Varianten) und andere neu sind, dann werden die neuen Kinder als Varianten an das bestehende Produkt gehängt, mit den Optionen nach Abschnitt 3. Das bestehende Kind wird dabei zur ersten Variante, seine SKU, sein Preis und seine Bilder bleiben. Beispiele, bei denen das greift: U20 (U20-200 im Shop, U20-400 neu), RSP (RSP-180 im Shop, RSP-250 neu), WWF (WWF-180 neu, WWF-210 neu, kein Konflikt). Jede solche Zusammenführung im Bericht einzeln listen.

Hat das bestehende Produkt bereits Varianten (die vier Bündel aus Welle 1: CTL-210, CTL-400, SCWL-10M2P, SCWL-15M2P), nichts automatisch ändern, sondern melden.

## 6. Dubletten OL und OLA, OLH, OLS

Die OL-Familien aus Welle 1 (OL-G40, OL-S11, OL-ST38, OL-Standard) stehen nicht in Tylers Excel, dort gibt es stattdessen OLA, OLH, OLS mit Birnenformen. Ob das dieselben Produkte sind, ist offen. Deshalb: OLA, OLH und OLS als eigene Familien importieren (Familiencode OLA-G40, OLH-G40, OLS-G40, OLA-S14, OLS-A60, OLS-S17), zusätzlich Tag `pruefen-mapping-ol`. Nichts löschen, nichts zusammenführen. Im Bericht eine Gegenüberstellung: je OL-Produkt die OLA-, OLH- oder OLS-Produkte mit gleicher Birnenform und ähnlicher Länge, damit Tyler die Zuordnung mit einem Blick bestätigen kann.

## 7. Ablauf

1. Bericht einlesen, HeiPard filtern, SKUs bereinigen, gegen den Shop abgleichen. Zwischenstand als `docs/data/welle1b-quelle.json` im Format von Welle 1 (plus Felder `eltern_sku`, `variationsthema`, `optionswerte`, `kat_tags`, `familie`).
2. Trockenlauf-Bericht `docs/heipard-import-welle1b-plan.md`: Anzahl neue Produkte, davon Variantenprodukte mit Kinderzahl, Einzelprodukte, Zusammenführungen an bestehende Produkte (Abschnitt 5), Produkte mit `todo-kategorie`, OL-Gegenüberstellung (Abschnitt 6), ausgeschlossene Zeilen mit Grund. **Leon gibt den Plan frei, bevor etwas angelegt wird.**
3. Import ausführen: Produkte und Varianten anlegen, Bilder re-hosten, Tags und Metafelder setzen, alles Draft.
4. Prüfung: Stichprobe von zehn Produkten (mindestens drei Variantenprodukte, eine Zusammenführung, ein Weihnachtsbaum), Smart Collections zählen (vorher und nachher je Kollektion).
5. Abschlussbericht `docs/heipard-import-welle1b.md` nach dem Muster von Welle 1, inklusive Sammelblatt-Einträgen und der Liste der Produkte je Familie für die Dramaturgie-Zuweisung.

## 8. Danach (nicht Teil dieses Auftrags)

- Asset-Instanz: Faktenlisten für die neuen SKUs, Metafelder (Auftrag 7 läuft parallel und wird für die neuen Produkte wiederholt).
- Alle Produkte aktivieren (Shop bleibt passwortgeschützt), damit Serienleiter, Mega-Menü-Zahlen und Kollektionen echt laufen. Das macht Leon über den Shopify-Connector im Planungs-Chat.
- Tyler: OL-Mapping bestätigen, dann Dubletten bereinigen.
