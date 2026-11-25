# Fortführung der Liste für Daniel: Stellen nur auf Deutsch und Englisch (Teil O)

**Stand:** 25.11.2026 (deutsche Zeit). Schließt an `docs/data/teiln-liste-daniel-es-fr-it.md` (Teil N) an.

**Für:** Daniel, zur Übersetzung nach Spanisch, Französisch und Italienisch (Pflicht vor dem Launch).

**Was hier steht:** Alles, was in Teil O im Shop neu geschrieben oder geändert wurde. Diese Stellen gibt es nur auf
Deutsch und Englisch. Die es/fr/it-Übersetzungen sind dort entweder alt (Shopify markiert sie als veraltet und zeigt
weiter den alten Text) oder fehlen (Shopify zeigt dann den deutschen Text, bei Theme-Sprachtexten den englischen). Die
genauen Werte DE und EN stehen in den genannten Listen im Repo.

## Teil O (25.11.2026)

| Bereich | Stelle in Translate & Adapt | Umfang | Liste |
|---|---|---|---|
| Deutsche Texte korrigiert (Abschnitt 2) | Metaobjekte `feature_block` ol-b2, olh-g40-b2, olas14-sticky, dgm-w1-r1, dgm-w1-048-r1, ctl-m-b1, ucp-r1, u20-b2, sblb-r1 (je Text); Metaobjekt `product_question` olh-g40-frage-1 (Antwort) | 10 Felder DE geändert, EN neu oder erneuert | `teilo-texte.csv` |
| Fragen EN (Abschnitt 3) | Metaobjekte `product_question` (Frage, Antwort) | 304 Felder an 152 Fragen, dazu olh-g40-frage-1 (Frage) | `teilo-en-fragen.csv` |
| Serienleiste: Überschrift nach Maß (Abschnitt 4) | Theme-Sprachtexte `heipard.blocks.serienleiter.title_hoehe` (DE „Dasselbe Modell in anderer Höhe“, EN „The same model in a different height“) und `title_groesse` (DE „Dasselbe Modell in anderer Größe“, EN „The same model in a different size“) | 2 Schlüssel neu | Theme, `locales/de.json` |

## Hinweise

- **Abschnitt 2:** Bei olas14-sticky ist nur die zweite Zeile geändert („Bei der 16,8-m-Kette …“), die übrigen drei Zeilen
  sind gleich geblieben. Shopify markiert trotzdem den ganzen Text als veraltet. Bei sblb-r1 ist nur das Verb
  korrigiert („gibt“ statt „geben“).
- **Fragen:** Für die Fragen gab es bisher gar keine gespeicherte Übersetzung, auch kein EN. Wahrscheinlich fehlen
  es/fr/it ebenso. 16 Fragen sind bewusst nicht übersetzt, weil der deutsche Text falsch oder nicht belegt ist (Spalte
  `hinweis` in `teilo-en-fragen.csv`). Sie bitte erst übersetzen, wenn das Deutsche korrigiert ist.
- **Theme-Sprachtexte:** Fehlen `title_hoehe` und `title_groesse` in es/fr/it, steht auf /es/, /fr/ und /it/ der
  englische Text aus der Standarddatei. Der Schlüssel `title` (Länge) ist auf es/fr/it schon übersetzt und bleibt gültig;
  nur der englische Text heißt jetzt „The same string lights in a different length“.
- **Dezimalzeichen:** DE mit Komma (16,8 m), EN mit Punkt (16.8 m). Für es, fr und it gilt das Komma.
