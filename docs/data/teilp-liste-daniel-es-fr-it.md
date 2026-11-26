# Fortführung der Liste für Daniel: Stellen nur auf Deutsch und Englisch (Teil P)

**Stand:** 26.11.2026 (deutsche Zeit). Schließt an `docs/data/teilo-liste-daniel-es-fr-it.md` (Teil O) an.

**Für:** Daniel, zur Übersetzung nach Spanisch, Französisch und Italienisch (Pflicht vor dem Launch).

**Was hier steht:** Alles, was in Teil P im Shop neu geschrieben oder geändert wurde. Diese Stellen gibt es nur auf
Deutsch und Englisch. Die es/fr/it-Übersetzungen sind dort entweder alt (Shopify markiert sie als veraltet und zeigt
weiter den alten Text) oder fehlen (Shopify zeigt dann den deutschen Text, bei Theme-Sprachtexten den englischen). Die
genauen Werte DE und EN stehen in den genannten Listen im Repo.

## Teil P (26.11.2026)

| Bereich | Stelle in Translate & Adapt | Umfang | Liste |
|---|---|---|---|
| Fragen (Abschnitt 2) | Metaobjekte `product_question` ol-frage-1, ol-s11-frage-1, ols-g40-frage-1, scwl-frage-1, dgm-w1-frage-2 (Frage und Antwort); dgm-w1-frage-1, dgm-w1-frage-3 (nur Frage); ols-s11-frage-1, sblb-frage-2, blt-frage-2, ucp-frage-1, uct-frage-1, ol-g40-frage-2, olh-g40-frage-2 (nur Antwort) | 14 Fragen, 19 Felder DE geändert, 28 Felder EN neu (auch die unveränderten Felder dieser Fragen hatten noch keine Übersetzung) | `teilp-fragen.csv` |
| hp-u20-200 ohne IP68 (Abschnitt 3) | Produkt hp-u20-200: Beschreibung (zweiter Absatz) und SEO-Beschreibung | 2 Felder DE geändert, EN erneuert | `teilp-texte.csv` |
| uct-r1 (Abschnitt 4) | Metaobjekt `feature_block` uct-r1 (Text) | 1 Feld DE geändert, EN erneuert | `teilp-texte.csv` |
| Serienleiste: Fläche als Maß (Abschnitt 5) | Theme-Sprachtext `heipard.blocks.serienleiter.size` (DE und EN „{{ width }} x {{ height }} m“) | 1 Schlüssel neu | Theme, `locales/de.json` |

## Hinweise

- **Fragen:** vam-frage-1 und cl-frage-1 sind nicht geändert und bleiben vorerst deutsch (Bericht Teil P, Abschnitt 2).
  Sie bitte noch nicht übersetzen.
- **hp-u20-200:** Nur der Satz mit IP68 ist weggefallen („Nach IP68 ist der Schlauch gegen dauerhaftes Untertauchen
  geschützt“), der übrige Absatz ist gleich. In der SEO-Beschreibung ist „und IP68-Schutz“ weggefallen. Achtung, die
  Asset-Instanz meldet IP68 als belegt (Shenzhen-PSD); ob der Satz zurückkommt, entscheidet Leon. Bitte vorher fragen.
- **uct-r1:** gleicher Wortlaut wie ucp-r1 aus Teil O („Den Vorhang gibt es in 3 x 2 m und 3 x 3 m.“), dort kann die
  Übersetzung übernommen werden.
- **Theme-Sprachtext `size`:** Der Text enthält nur Zahlen und „x … m“. Fehlt er in es/fr/it, steht dort der englische
  Text aus der Standarddatei, und der ist gleich. Eine Übersetzung ist nur nötig, wenn eine Sprache die Fläche anders
  schreibt (zum Beispiel mit „×“).
- **Dezimalzeichen:** DE mit Komma (7,5 m), EN mit Punkt (7.5 m). Für es, fr und it gilt das Komma.
