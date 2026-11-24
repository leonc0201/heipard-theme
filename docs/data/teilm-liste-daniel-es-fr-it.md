# Fortführung der Liste für Daniel: Stellen nur auf Deutsch und Englisch (Teil L und Teil M)

**Stand:** 24.11.2026, nachmittags (deutsche Zeit). Schließt an `docs/data/teilk-uebersetzungen-es-fr-it.md` (Teil K) an.

**Für:** Daniel, zur Übersetzung nach Spanisch, Französisch und Italienisch (Pflicht vor dem Launch).

**Was hier steht:** Alles, was in Teil L (23.11.) und Teil M (24.11.) im Shop neu geschrieben oder geändert wurde. Diese
Stellen gibt es nur auf Deutsch und Englisch. Die es/fr/it-Übersetzungen sind dort entweder alt (Shopify markiert sie als
veraltet und zeigt weiter den alten Text) oder fehlen (Shopify zeigt dann den deutschen Text, bei Theme-Sprachtexten den
englischen). Die genauen Werte DE und EN stehen in den genannten Listen im Repo.

## Teil L (23.11.2026)

| Bereich | Stelle in Translate & Adapt | Umfang | Liste |
|---|---|---|---|
| Produkttypen | Produkt, Feld „Produkttyp“ | 92 Produkte | `teill-produkttypen.csv` |
| Lichtfarben-Liste | Produkt-Metafeld `lichtfarben` (Werte Warmweiß, Kaltweiß, Multicolor) | 112 Produkte | `teill-lichtfarben.csv` |
| Titel und SEO-Titel nach beleuchteter Länge | Produkt, Titel und SEO-Titel | 18 Produkte | `teill-laengen-titel.csv` |
| Produkttexte und Meta-Descriptions (Entwürfe 1.5) | Produkt, Beschreibung und Meta-Description | 30 Produkte | `teill-texte-1-5.csv` |
| Sätze mit Gesamtlänge | Produkt, Beschreibung | 15 Produkte | `teill-texte-gesamtlaenge.csv` |
| Shopdaten nach Faktenliste | Produkt-Metafelder (u. a. `lieferumfang`, `einsatzbereich`, `stromquelle`), Titel einzelner Produkte, Blöcke ola-g40-b2, dnm-b1, Fragen ola-g40-frage-1, dnm-frage-1 | 34 Zeilen | `teill-shopdaten-1-4.csv` |
| Kleinigkeiten | Startseite (Bento-Kachel, Hero-Unterzeile), `subtitle` hp-ola-s14-30-eu, Meta-Description hp-npt-210 | 6 Zeilen | `teill-kleinigkeiten-1-6.csv` |
| Optionen | Option „Lichtfarbe“, „Größe“, „Höhe“ und ihre Werte (hp-dpt-300, hp-ucp-200, hp-uct-200-eu, hp-dpm-300, hp-rmp-180) | 23 Zeilen | `teill-optionen-en.csv` |
| Feature-Blöcke CSL und OLG (Bilder aus Lauf C3) | Metaobjekt `feature_block`, Felder Kicker, Überschrift, Text, Alt | B1, B2 und R1 der Sets für hp-csl-200-c, hp-csl-300-c, hp-olg-200w, hp-olg-200m | Bericht Teil L, Abschnitt 3 |
| B2-Tausch | Metaobjekt `feature_block` olas14-b2, vit-b2, Feld Alt | 2 Blöcke | Bericht Teil L, Abschnitt 3 |

## Teil M (24.11.2026)

| Bereich | Stelle in Translate & Adapt | Umfang | Liste |
|---|---|---|---|
| Alt CSL300C-B1 | Metaobjekt `feature_block` csl-300-c-b1, Feld Alt | 1 Feld | `teilm-alt-csl300c.csv` |
| Titel, SEO-Titel, Meta-Descriptions, Produkttexte nach den neuen Längen | Produkt, Titel, SEO-Titel, Meta-Description, Beschreibung | 26 Produkte, 110 Felder | `teilm-titel-texte.csv` |
| „Crystal Globes“ (nur EN geändert, DE gleich) | Produkt hp-sblb-100l-ww-new, hp-sblb-60l-ww-new | 2 Produkte | `teilm-titel-texte.csv` |
| ISL-Blöcke B1, B2, R1 (EN neu, DE unverändert) | Metaobjekt `feature_block` isl-b1, isl-b2, isl-r1, Felder Kicker, Überschrift, Text | 9 Felder | `teilm-isl-blocktexte-en.csv` |
| Familienleiste: Spanne „30 bis 100 m“ | Theme-Sprachtext `heipard.blocks.serienleiter.range` (DE „{{ min }} bis {{ max }} m“, EN „{{ min }} to {{ max }} m“) | 1 Schlüssel | Theme, `locales/de.json` |
| ISL-Test: Alt-Texte je Variante | Varianten-Metafelder `feature_b1_alt`, `feature_b2_alt`, `feature_r1_alt` an den kaltweißen und bunten ISL-Varianten | 14 Varianten × 3 Felder | folgt mit den Bildern aus Lauf C5 (Asset-Instanz, Auftrag 33) |

## Hinweise

- **Theme-Sprachtext:** Fehlt `heipard.blocks.serienleiter.range` in es/fr/it, steht auf /es/, /fr/ und /it/ „30 to 100 m“
  (Englisch aus der Standarddatei). Die Zahl stimmt, nur das Wort „to“ ist englisch.
- **Längen in Texten:** Die Längenwerte selbst sind sprachunabhängig. In den Texten stehen sie aber als Wörter und Zahlen
  im Satz („Auf 16,8 m hängen 30 Birnen …“), deshalb müssen die Texte neu übersetzt werden, nicht nur die Zahlen.
- **Dezimalzeichen:** DE mit Komma (16,8 m), EN mit Punkt (16.8 m). Für es, fr und it gilt das Komma.
