# Fortführung der Liste für Daniel: Stellen nur auf Deutsch und Englisch (Teil Q)

**Stand:** 27.11.2026 (deutsche Zeit). Schließt an `docs/data/teilp-liste-daniel-es-fr-it.md` (Teil P) an.

**Für:** Daniel, zur Übersetzung nach Spanisch, Französisch und Italienisch (Pflicht vor dem Launch).

**Was hier steht:** Alles, was in Teil Q im Shop neu geschrieben oder geändert wurde. Diese Stellen gibt es nur auf
Deutsch und Englisch. Die es/fr/it-Übersetzungen sind dort entweder alt (Shopify markiert sie als veraltet und zeigt
weiter den alten Text) oder fehlen (Shopify zeigt dann den deutschen Text). Die genauen Werte DE und EN stehen in den
genannten Listen im Repo.

## Teil Q (27.11.2026)

| Bereich | Stelle in Translate & Adapt | Umfang | Liste |
|---|---|---|---|
| Netzteil nur mit Beleg (Abschnitt 3) | Produkte: Beschreibung von 42 Produkten (hp-ctl-180m, hp-ctl-210-eu-1, hp-ctl-240m, hp-ctl-400-eu-1, hp-dfm-400-eu-2, hp-dfm-600, hp-dfm-750-eu, hp-dlm-100h, hp-dnm-208, hp-dpm-300, hp-dpt-300, hp-npt-210, hp-ol-15, hp-ol-75, hp-ol-100, hp-ol-s11-15, hp-ol-s11-25, hp-ol-s11-30, hp-ol-s11-50, hp-ol-st38-15, hp-ol-st38-25, hp-ol-st38-30, hp-olg-100, hp-olg-200, hp-olg-200m, hp-olg-200w, hp-olg-400, hp-olg-800, hp-olt-100, hp-olt-150, hp-olt-200, hp-olt-800, hp-rct-400, hp-rfm-600, hp-rit-280, hp-rnm-200, hp-rsp-180, hp-rtm-400, hp-vit-586l-eu-1, hp-vit-864l-eu-1, hp-vlm-100l, hp-wwf-180), SEO-Beschreibung von hp-ctl-210-eu-1 und hp-ctl-400-eu-1 | 44 Felder DE geändert, EN erneuert | `teilq-netzteil.csv` |
| Netzteil nur mit Beleg (Abschnitt 3, Nachtrag) | Metaobjekte `heipard_pflege` (*HeiPard Installation & Pflege*), Feld Text: kat-led, kat-christmas-tree-lights, kat-cluster, kat-net, kat-icicle, kat-weihnachtsbaum | 6 Felder DE geändert, EN erneuert. Diese Texte erscheinen auf vielen Seiten (kat-led an 46 Produkten) | `teilq-netzteil.csv` (Zeilen „Pflege-Block“) |
| Netzteil nur mit Beleg (Abschnitt 3) | Metaobjekte `feature_block` ol-r1 (Kicker und Text), olt-r1, vit-b2, vit-sticky, wwf-b2 (Text) | 6 Felder DE geändert, EN erneuert | `teilq-netzteil.csv` |
| Netzteil nur mit Beleg (Abschnitt 3) | Metaobjekte `product_question`, nur Antwort: ctl-frage-3, dfm-frage-4, dlm-frage-3, dnm-frage-3, dpm-frage-3, ol-frage-2, ol-s11-frage-3, ol-st38-frage-2, olg-frage-2, olt-frage-2, rfm-frage-2, rit-frage-3, rnm-frage-2, rsp-frage-3, rtm-frage-2, u20-frage-1, vit-frage-2, vlm-frage-3, wwf-frage-2 | 19 Felder DE geändert, EN erneuert | `teilq-netzteil.csv` |
| hp-u20-200 mit IP68 (Abschnitt 2) | Produkt hp-u20-200: Beschreibung (zweiter Absatz) und SEO-Beschreibung; Metaobjekt `feature_block` u20-b2 (Text) | 3 Felder DE geändert, EN erneuert | `teilq-texte.csv` |
| cl-frage-1 (Abschnitt 4) | Metaobjekt `product_question` cl-frage-1 (Frage und Antwort) | 2 Felder DE geändert, EN neu für Frage und Antwort | `teilq-texte.csv` |
| Zuleitung UCP (Abschnitt 6) | Produkt hp-ucp-200: Beschreibung (zweiter Absatz) | 1 Feld DE geändert, EN erneuert | `teilq-texte.csv` |
| Serienleiste (Abschnitt 5) | keine neuen Theme-Sprachtexte | | |

## Hinweise

- **Netzteil:** Meist ist nur ein Satz geändert: Wo vorher ein Netzteil (Adapter, Trafo) genannt war, steht jetzt „wird
  an eine Steckdose angeschlossen“ (EN „plugs into an outlet“). Bei hp-rct-400 steht nur noch „Die Zuleitung ist 3 m
  lang.“, bei hp-rsp-180 ist zusätzlich die Angabe zu IP67 und „drinnen wie draußen“ weggefallen. Der Rest der Texte
  ist gleich. Die vorhandenen es/fr/it-Fassungen lassen sich also meist an einer Stelle anpassen.
- **Pflege-Texte:** Nur der Satz zur Zuleitung ist geändert. Statt „zum Netzteil“ steht „zur Steckdose“ (kat-cluster,
  kat-net, kat-icicle), bei kat-led fehlt in der Aufzählung das Netzteil („bis zur Steckdose oder zum Batteriefach“,
  „ob Stecker oder Batteriefach“), bei kat-christmas-tree-lights und kat-weihnachtsbaum ist der Satzteil zum Netzteil
  weggefallen. kat-smart ist unverändert.
- **hp-ctl-210-eu-1, SEO-Beschreibung:** Hier ist zusätzlich nur EN geändert („plug-in“ entfernt), DE wie oben.
- **hp-u20-200:** Der Satz „Nach IP68 ist der Schlauch gegen dauerhaftes Untertauchen geschützt.“ ist zurück, wie vor
  Teil P. Der Satz zum Strom heißt jetzt „Er wird an eine Steckdose angeschlossen und misst mit der 3 m langen Zuleitung
  13 m bzw. 23 m.“ In der SEO-Beschreibung steht wieder „und IP68-Schutz“.
- **cl-frage-1:** vorher „Wie lang ist die Campinglaterne?“ / „Sie ist 10 m lang.“, jetzt „Wie lang ist die
  Lichterkette?“ / „Sie misst 10 m.“ Bisher gab es keine EN-Fassung.
- **vam-frage-1** bleibt deutsch, bis Tyler antwortet (`nach-tyler.md`). Sie bitte noch nicht übersetzen.
- **Dezimalzeichen:** DE mit Komma (7,5 m), EN mit Punkt (7.5 m). Für es, fr und it gilt das Komma.
