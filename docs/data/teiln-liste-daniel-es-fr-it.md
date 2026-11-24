# Fortführung der Liste für Daniel: Stellen nur auf Deutsch und Englisch (Teil N)

**Stand:** 24.11.2026, abends (deutsche Zeit). Schließt an `docs/data/teilm-liste-daniel-es-fr-it.md` (Teil L und M) an.

**Für:** Daniel, zur Übersetzung nach Spanisch, Französisch und Italienisch (Pflicht vor dem Launch).

**Was hier steht:** Alles, was in Teil N im Shop neu geschrieben oder geändert wurde. Diese Stellen gibt es nur auf
Deutsch und Englisch. Die es/fr/it-Übersetzungen sind dort entweder alt (Shopify markiert sie als veraltet und zeigt
weiter den alten Text) oder fehlen (Shopify zeigt dann den deutschen Text, bei Theme-Sprachtexten den englischen). Die
genauen Werte DE und EN stehen in den genannten Listen im Repo.

## Teil N (24.11.2026)

| Bereich | Stelle in Translate & Adapt | Umfang | Liste |
|---|---|---|---|
| Produkttext hp-isl-486 mit Gesamtlänge | Produkt, Beschreibung | 1 Produkt | `teiln-texte-isl486.csv` |
| Lichtfarben-Liste hp-npt-210 (neu „Kaltweiß“) | Produkt-Metafeld `lichtfarben` | 1 Produkt | `teiln-werte-3.csv` |
| Serienleiter „33 m gesamt“, „5 bis 20 m gesamt“ | Theme-Sprachtexte `heipard.blocks.serienleiter.length_total` (DE „{{ value }} m gesamt“, EN „{{ value }} m total“) und `range_total` (DE „{{ min }} bis {{ max }} m gesamt“, EN „{{ min }} to {{ max }} m total“) | 2 Schlüssel | Theme, `locales/de.json` |
| DPT-Texte ohne Lichtfarbe | Metaobjekt `feature_block` dpt-b1 (Kicker, Text), Metaobjekt `feature_set` dpt (Überschrift) | 3 Felder DE geändert, EN neu | `teiln-5-dpt-scwl-texte.csv` |
| EN neu an DPT und SCWL | dpt-b1 Titel, dpt-b2 Kicker/Titel/Text, scwl-b1 Kicker/Titel/Text, Sets dpt und scwl Kicker und Überschrift | 11 Felder | `teiln-5-dpt-scwl-texte.csv` |
| EN für Feature-Blöcke und Set-Überschriften (Abschnitt 4) | Metaobjekte `feature_block` (Kicker, Überschrift, Text) und `feature_set` (Kicker, Überschrift) | 522 Felder an 203 Metaobjekten | `teiln-en-bloecke.csv` |
| WBF-Blöcke (Abschnitt 6) | Metaobjekte `feature_block` wbf-b1 und wbf-b2 (Alt), wbf-r1 (Überschrift, Text, Alt), neu wbf-r2 und wbf-r3 (Überschrift, Text, Alt) | 11 Felder DE neu oder geändert, EN neu | `teiln-6-wbf.csv` |

## Hinweise

- **Theme-Sprachtexte:** Fehlen `length_total` und `range_total` in es/fr/it, steht auf /es/, /fr/ und /it/ „33 m total“
  (Englisch aus der Standarddatei). Die Zahl stimmt, nur das Wort ist englisch.
- **Blöcke und Sets:** Für die Felder aus `teiln-en-bloecke.csv` gab es bisher gar keine gespeicherte Übersetzung, auch
  kein EN. Wahrscheinlich fehlen dort es/fr/it ebenso. Sechs Texte sind bewusst nicht übersetzt, weil der deutsche Text
  falsch oder nicht belegt ist (Spalte `hinweis`): Sie bitte erst übersetzen, wenn das Deutsche korrigiert ist.
- **Fragen (product_question):** 169 verwendete Fragen haben nur Deutsch (rund 2.200 Wörter). Leon entscheidet noch, ob
  sie EN bekommen. Liste: `teiln-en-zaehlung.csv`, Typ `frage`.
- **Dezimalzeichen:** DE mit Komma (15,15 m), EN mit Punkt (15.15 m). Für es, fr und it gilt das Komma.
