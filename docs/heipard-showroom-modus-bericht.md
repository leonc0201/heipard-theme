# Showroom-Modus: Bericht

Stand 2026-11-16. Auftrag: `heipard-theme-auftrag-showroom-modus.md` (Entscheidung Leon: HeiPard geht zuerst als
reine Präsentationsseite online, ohne Preise und ohne Kauffunktion). Nur Theme-Code geändert. Nicht angefasst:
Produktdaten, Preise, Medien, Metafelder, Produktstatus, Files. Uhrzeiten deutsche Zeit.

## Kurzfassung

- **Schalter:** Im Theme-Editor unter Theme-Einstellungen → **Showroom** steht der Schalter „Showroom-Modus: Preise
  und Kauf ausblenden“. Standard ist an. Alles hängt nur an diesem Schalter. Ausschalten macht den Shop ohne
  Code-Änderung wieder verkaufsfähig; das ist live geprüft (Abschnitt 5).
- **Weg, solange er an ist:** Preise überall (Produktseite, Karten, Suche, „Die Serie“, „Passt dazu“, Vorschau-Suche),
  Vergleichs- und Stückpreise, Versandhinweis und Ratenzahlung unter dem Preis, Mengenwähler, „In den Warenkorb“,
  Express-Buttons, Verfügbarkeit, Badges „Ausverkauft“ und „Angebot“, Schnellkauf, Warenkorb-Symbol,
  Cart-Benachrichtigung und Cart-Drawer, Preisfilter und Preissortierung, `offers` im JSON-LD und `og:price`.
- **Neu:** In der Kaufbox bleibt die Variantenauswahl. Darunter steht ein Hinweis „Bald im Shop erhältlich“ mit dem
  Button „Bei Fragen schreiben“ zur Kontaktseite. `/cart` zeigt „Der Shop öffnet bald“ mit zwei Buttons statt des
  Warenkorbs.
- **Live geprüft:** Startseite, Kollektion, drei Produktseiten (Hero, Standard, Long-Tail), Suche, `/cart` und eine
  englische Produktseite, je vorher, mit Schalter an und mit Schalter aus. Mit Schalter an gibt es nirgends einen
  Preis- oder Kauf-Baustein, mit Schalter aus ist jede Seite wieder wie vorher.
- **Wichtig für Leon:** Die Produkte haben im Backend echte Preise (zum Beispiel 139,99 € und 169,99 € bei RSP-180). Das
  Theme zeigt sie nicht mehr an, aber Shopify liefert sie weiter im Seitenquelltext (Analytics-Daten) und über die
  öffentliche Produkt-Schnittstelle `/products/<handle>.js` aus. Abschnitt 6 und 7.

## 1. Schalter und Einstellungen

Neue Gruppe **Showroom** in `config/settings_schema.json` (Theme-Editor → Theme-Einstellungen):

| Einstellung | Typ | Standard | Wirkung |
|---|---|---|---|
| `showroom_mode` „Showroom-Modus: Preise und Kauf ausblenden“ | Schalter | an | alles in Abschnitt 3 |
| `showroom_text` „Hinweis in der Kaufbox“ | Text | leer | leer = „Bald im Shop erhältlich“, englisch „Coming soon to our shop“ |
| `showroom_button_label` „Beschriftung des Kontakt-Buttons“ | Text | leer | leer = „Bei Fragen schreiben“, englisch „Questions? Write to us“ |
| `showroom_button_url` „Ziel des Kontakt-Buttons“ | Link | leer | leer = Kontaktseite (`/pages/contact`, englisch `/en/pages/contact`) |

Die Texte sind bewusst leer vorbelegt: Dann kommen sie aus den Sprachdateien und stimmen auf Deutsch und Englisch.
Trägt Leon im Editor einen eigenen Text ein, gilt er für alle Sprachen. `settings_data.json` enthält den Schalter
nicht, es gilt der Standardwert an. Sobald Leon ihn im Editor umstellt, schreibt Shopify den Wert dort hinein.

## 2. Geänderte Dateien

Commits `058c578` (Hauptänderung), `37fa17a` (Versand-Akkordeon, Sortierung der Kollektion), `64ac89a`
(Variantenauswahl). Vor jedem Push `shopify theme check` gegen den Ausgangsstand: keine neuen Meldungen.

| Datei | Änderung |
|---|---|
| `config/settings_schema.json` | Gruppe Showroom (Abschnitt 1) |
| `locales/de.json`, `locales/en.default.json` | `heipard.showroom`: Hinweis, Button, Titel und Button der Hinweisseite |
| `assets/heipard-product.css` | Stil der Showroom-Box und der Hinweisseite |
| `snippets/heipard-showroom-box.liquid` (neu) | Hinweis und Kontakt-Button in der Kaufbox |
| `snippets/heipard-showroom-cart.liquid` (neu) | Hinweisseite unter `/cart` |
| `snippets/heipard-showroom-jsonld.liquid` (neu) | Product-JSON-LD ohne `offers` |
| `snippets/price.liquid` | gibt im Showroom-Modus nichts aus (zentrale Stelle für Produktseite, Dawn-Karten, Suche, Vorschau-Suche, Featured Product) |
| `sections/main-product.liquid` | Preisblock (mit Versandhinweis und Ratenzahlung), Verfügbarkeit, Menge aus; Kaufbuttons → Showroom-Box; JSON-LD ohne `offers`; Akkordeon „Versand & Rückgabe“ aus |
| `sections/featured-product.liquid` | wie Produktseite (Preis mit Steuer-/Versandhinweis und Ratenzahlung, Menge, Kaufbuttons, JSON-LD) |
| `snippets/card-product.liquid` | Badges „Ausverkauft“/„Angebot“ und Schnellkauf aus |
| `snippets/heipard-product-card.liquid` | Preiszeile aus |
| `snippets/heipard-fb-serienleiter-eintrag.liquid` | Preis in „Die Serie“ aus |
| `sections/heipard-bestseller.liquid`, `heipard-related.liquid`, `heipard-season.liquid` | Preis-Platzhalter (leere Sektion) aus |
| `sections/header.liquid` | Warenkorb-Symbol, Cart-Benachrichtigung samt CSS/JS aus |
| `layout/theme.liquid` | Cart-Drawer (Render, CSS, JS) nur ohne Showroom-Modus |
| `sections/main-cart-items.liquid`, `main-cart-footer.liquid` | Hinweisseite statt Warenkorb, Summe und Kasse aus |
| `sections/predictive-search.liquid` | Vorschau ohne Preis, Layout wie ohne Preis |
| `sections/main-collection-product-grid.liquid`, `snippets/facets.liquid` | Preisfilter und Sortierung nach Preis aus |
| `snippets/meta-tags.liquid` | `og:price:amount` und `og:price:currency` aus |
| `snippets/product-variant-options.liquid` | keine Variante als ausverkauft markiert, nur nicht existierende Kombinationen bleiben gesperrt |

## 3. Alle Stellen, an denen Preis oder Kauf hing

| Stelle | im Code | im Showroom-Modus |
|---|---|---|
| Preis der Produktseite mit Vergleichspreis, Stückpreis, Badge | `main-product` Block price → `price.liquid` | weg |
| Versandhinweis unter dem Preis | `heipard-shipping-note` im Block price | weg |
| Ratenzahlung (Shop Pay, `payment_terms`) | Block price | weg |
| Mengenpreise und Mengenwähler | Blöcke price, quantity_selector | weg |
| „In den Warenkorb“, „Jetzt kaufen“, Express-Buttons, Abholung | `buy-buttons` | ersetzt durch Showroom-Box |
| Verfügbarkeit („Nur noch x“, „Ausverkauft“) | Block inventory, Text des Kaufbuttons | weg |
| Ausverkauft-Markierung in der Variantenauswahl | `product-variant-options` | keine |
| Akkordeon „Versand & Rückgabe“ mit Versandkosten | `main-product` collapsible_tab (shipping_returns) | weg |
| JSON-LD `offers` | `{{ product \| structured_data }}` | ersetzt durch JSON-LD ohne `offers` |
| `og:price` | `meta-tags` | weg |
| Preis je Zeile in „Die Serie“ | `heipard-fb-serienleiter-eintrag` | weg |
| HeiPard-Karten (Kollektion, Bestseller, Saison, „Passt dazu“) | `heipard-product-card` | ohne Preiszeile, Abstand unverändert |
| Platzhalter-Preisbalken | Bestseller, Passt dazu, Saison | weg |
| Dawn-Karten (Suche, Empfehlungen, Featured Collection) | `card-product` + `price` | ohne Preis, Badges, Schnellkauf und Schnellansicht |
| Vorschau-Suche | `predictive-search` | ohne Preis |
| Preisfilter, Sortierung nach Preis | `facets`, `main-collection-product-grid` | weg |
| Warenkorb-Symbol mit Zähler, Cart-Benachrichtigung | `header` | weg |
| Cart-Drawer | `theme.liquid` | weg (greift, falls der Warenkorb auf Drawer umgestellt wird) |
| Warenkorbseite `/cart` | `main-cart-items`, `main-cart-footer` | Hinweisseite |
| Featured Product (heute nirgends eingesetzt) | `featured-product` | wie Produktseite |

Nicht angefasst, weil nicht im Einsatz: Kundenkonto und Bestellübersicht (`main-account`, `main-order`),
B2B-Schnellbestellliste (`quick-order-list`), Geschenkkarte. Kein Newsletter- oder Benachrichtigungs-Popup eingebaut.

## 4. Was an die Stelle tritt

- **Kaufbox:** Variantenauswahl (Länge, Lichtfarbe) und die Spec-Kacheln bleiben. Darunter eine ruhige Box mit Rahmen:
  „Bald im Shop erhältlich“ und der sekundäre Button „Bei Fragen schreiben“ zur Kontaktseite. Der Variantenwechsel
  funktioniert weiter (live geprüft an hp-rsp-180: URL mit `?variant=`, Box bleibt, kein Preis, keine JS-Fehler).
- **Produktkarten:** gleiche Karte ohne Preiszeile, kein leerer Platz.
- **`/cart`:** Überschrift „Der Shop öffnet bald“, Buttons „Zu den Produkten“ und „Bei Fragen schreiben“. Darunter
  folgt wie bisher die Sektion „Featured collection“ der Warenkorb-Vorlage (Karten ohne Preis). Ihr Titel steht seit
  jeher englisch in `templates/cart.json`; nicht geändert.

## 5. Live-Prüfung

Eine Seite alle 8 Sekunden, ausgewertet per Skript (Preis-, Kauf- und Warenkorb-Bausteine, JSON-LD, `og:price`,
sichtbare Euro-Beträge).

- vorher: 18:49 bis 18:58, Stand vor der Änderung
- Showroom an: 19:09 bis 19:18 (nach `37fa17a`), Kaufbox und Variante nach `64ac89a` um 19:21
- Schalter aus: Test-Commit `521900f` (live 19:22:09), geprüft 19:22 bis 19:30, zurückgenommen mit `3c323b4`
  (live 19:31:27), Endstand 19:31 bestätigt

| Seite | vorher | Showroom an | Schalter aus |
|---|---|---|---|
| https://heipard.myshopify.com/ | Warenkorb-Symbol, Cart-Benachrichtigung | nichts davon | wie vorher |
| https://heipard.myshopify.com/collections/all | 12 Kartenpreise, 12 Euro-Beträge, Preissortierung | nichts davon | wie vorher |
| https://heipard.myshopify.com/products/hp-ol-50 (Hero) | Preis, 4 Kartenpreise, 2 Serienpreise, Kaufbutton, Menge, Ratenzahlung, Versandhinweis, `og:price`, JSON-LD mit `offers`, 11 Euro-Beträge | Showroom-Box, sonst nichts | wie vorher |
| https://heipard.myshopify.com/products/hp-rgb-300a (Standard) | wie Hero, 3 Serienpreise, 12 Euro-Beträge | Showroom-Box | wie vorher |
| https://heipard.myshopify.com/products/hp-rsp-180 (Long-Tail) | Preis, 2 Serienpreise, Kaufbutton, Menge, Ratenzahlung, Versandhinweis, `og:price`, `offers`, 7 Euro-Beträge | Showroom-Box, Variantenauswahl | wie vorher |
| https://heipard.myshopify.com/search?q=lichterkette | 24 Preise, 48 Euro-Beträge, Preissortierung | nichts davon | wie vorher |
| https://heipard.myshopify.com/cart | Warenkorb, Express-Button | Hinweisseite | wie vorher |
| https://heipard.myshopify.com/en/products/hp-rsp-180 | – | Showroom-Box auf Englisch, Link `/en/pages/contact` | – |

„wie vorher“ heißt: Alle gezählten Bausteine stimmen mit der Aufnahme vor der Änderung überein. Mit Schalter an gibt es
auf keiner Seite Liquid-Fehler oder ungültiges JSON-LD.

Beim ersten Durchgang mit Schalter an fielen drei Reste auf, alle sofort behoben:
- **Versandkosten:** 5,99 € und 13,99 € im Akkordeon „Versand & Rückgabe“ standen noch da. Das Akkordeon entfällt
  jetzt (`37fa17a`).
- **Kollektion:** Sie hat eine eigene Sortierauswahl, die noch nach Preis sortieren ließ (`37fa17a`).
- **Variantenauswahl:** Die 2,5-m-Variante von RSP-180 war durchgestrichen (`64ac89a`).

Aufnahmen: Kaufbox Desktop und Handy (hp-rsp-180), „Die Serie“ (hp-ol-50), Kollektion, Header, `/cart`. Header ohne
Warenkorb-Symbol, Suche und Konto bleiben an ihrem Platz.

## 6. Was im Quelltext bleibt

Geprüft an hp-rsp-180. Das neue JSON-LD enthält nur `name`, `url`, `image`, `description` (falls vorhanden), `sku`
und `brand`, kein `offers`. `og:price` fehlt. Das Wort „price“ steht noch an drei Stellen:

| Stelle | Herkunft | im Theme änderbar |
|---|---|---|
| Analytics- und Web-Pixel-Daten mit Variantenpreis | Shopify (`content_for_header`) | nein |
| Varianten-JSON der Variantenauswahl (`"price": 13999`) | Dawn, braucht der Variantenwechsel | möglich, bringt aber nichts (nächste Zeile) |
| CSS-Dateinamen wie `component-price.css` | Theme | ohne Bedeutung |

Dazu kommen die öffentlichen Shopify-Endpunkte `/products/<handle>.js` und `.json`. Sie liefern jedem den Preis, das
Theme hat darauf keinen Einfluss. Geprüft um 19:34: `/products/hp-rsp-180.js` liefert 13999 und 16999 (Cent).

## 7. Hinweise für Leon (Shopify-Einstellungen, keine Theme-Aufgaben)

- **Preis im Backend:** Shopify verlangt für jedes Produkt einen Preis. 0,00 € ist zulässig und wird im
  Showroom-Modus nirgends angezeigt. Heute stehen echte Preise drin. Die zeigt das Theme nicht, sie sind aber über
  Quelltext und Produkt-Endpunkt auffindbar (Abschnitt 6). Soll vor dem Verkaufsstart kein Preis auffindbar sein, hilft
  nur ein Preis von 0,00 € im Backend.
- **Produkte erreichbar halten:** Status „Aktiv“ und dem Vertriebskanal Online Store zugeordnet lassen, sonst sind
  die Seiten nicht erreichbar.
- **Passwortschutz** wird in den Shopify-Einstellungen aufgehoben (Onlineshop → Einstellungen), nicht im Theme.
- **Bestellungen über direkte URLs:** `/checkout` und `/cart/add` lassen sich im Theme nicht hart sperren. Wer die URL
  kennt, kann theoretisch bestellen, mit den echten Preisen sogar zum echten Preis. Dagegen hilft nur Lagerbestand 0
  mit „Weiterverkauf bei Nullbestand“ aus oder kein aktiver Zahlungsanbieter. Das sind Shopify-Einstellungen. Bei
  Bestand 0 zeigt das Theme im Showroom-Modus nichts als ausverkauft an.
- **Weitere Sprachen:** Spanisch, Französisch und Italienisch sind veröffentlicht. Die neuen Texte haben dort noch
  keine Übersetzung, Shopify zeigt bis dahin den englischen Text. Bisher hat Shopify neue HeiPard-Texte in diesen
  Sprachen selbst nachgetragen (zuletzt am 12.11.).
- **Suchmaschinen:** Ohne `offers` kann Google für die Produktseiten keine Preis-Snippets zeigen und meldet in der
  Search Console eventuell „Feld offers fehlt“. Das ist gewollt und verschwindet mit dem Schalter aus.

## 8. Rückweg

Verkaufsfähig machen: Theme-Editor → Theme-Einstellungen → Showroom → Schalter aus, speichern. Das ist live geprüft,
alle Seiten sind dann wie vor der Änderung. Den Code ganz entfernen: `64ac89a`, `37fa17a` und `058c578`
zurücknehmen.
