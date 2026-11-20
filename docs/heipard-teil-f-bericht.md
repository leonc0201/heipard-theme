# Theme-Auftrag Teil F: Nacharbeit zu Teil E

Stand 20.11.2026. Auftrag vom 20.11.2026, 19:30. Bezug: Bericht Teil E. Vorher-Stand aller geschriebenen Objekte:
`docs/data/teilf-vorher.json`. Zeiten in deutscher Zeit.

## Kurzfassung

- **Abschnitt 1 (Fragen SCWL und SOLM):**
  - Beide Antworten sind an das Feld angeglichen, DE um 19:47 Uhr, EN um 19:47 Uhr mit Frage und Antwort.
  - Inventar: 17 Antworten zählen den Packungsinhalt auf, eine weitere nennt einen Teil davon. Inhaltlich wichen nur
    SCWL und SOLM ab. Elf Antworten nennen dieselben Teile in anderer Reihenfolge.
  - Einschätzung: Ein Platzhalter in der Antwort, der das Feld einliest, kostet rund 15 Zeilen in einem Snippet.
- **Abschnitt 2 („Ground stake“):**
  - Die acht Felder aus dem Auftrag sind auf Englisch umgestellt.
  - Die Suche über alle englischen Texte fand zwei weitere Stellen. Beide meinen den Erdspieß und sind mit umgestellt:
    - das Lieferumfang-Feld an der Variante HP-OLS-S11-16, das die Seite vor dem Produktfeld zeigt
    - der Pflegetext für Leuchtfiguren (`kat-motif`, zehn Produkte)
  - Auf `/en/` steht kein „spike“ mehr.
- **Abschnitt 3 (`dfm-b2`):**
  - `ip_schutzart` ist an beiden Produkten IP44.
  - Der neue Block `dfm-b2-zwei` ist angelegt, DE und EN. `dfm-b2` hat jetzt Englisch.
  - hp-dfm-600 zeigt den neuen Block.
  - **hp-dfm-750-eu noch nicht:** Es teilt sein Set mit hp-dfm-400-eu-2, das den alten Block behalten soll. Für die
    Trennung müsste ich das Metafeld `feature_set` am Produkt umsetzen. Das gehört zu den gesperrten Metafeldern
    `feature_*`, deshalb warte ich auf Leons Wort (Abschnitt 3.3).
- **Abschnitt 5:** Vorher-Stand der drei Seiten aufgenommen. An hp-rit-280 und hp-rnm-200 schreibt die Asset-Instanz
  nichts, weil die Lieferung kein sauberes Produktfoto enthält. Der Nachtrag folgt, sobald hp-ucp-200 gemeldet ist.

## 1. Fragen zum Lieferumfang bei SCWL und SOLM

### 1.1 Vorher und nachher

Metaobjekte vom Typ `product_question`, eingebunden über das Produkt-Metafeld `heipard.fragen`.

| Frage | genutzt von | vorher | nachher DE (19:47:21) | nachher EN (19:47:35) |
|---|---|---|---|---|
| `scwl-frage-4` | hp-scwl-10m2p-mc, hp-scwl-15m2p-mc | „Was ist im Lieferumfang?“ / „Im Paket sind 1 × Solar-Lichterkette mit Kupferdraht, 2er-Set, 1 × Bedienungsanleitung und 1 × Wandhalterung.“, ohne EN | „Im Paket sind 1 × Solar-Lichterkette mit Kupferdraht, 2er-Set, 1 × Erdspieß, 1 × Wandhalterung und 1 × Bedienungsanleitung.“ | „What's in the box?“ / „The box contains 1 × Solar string light with copper wire, set of 2, 1 × Ground stake, 1 × Wall mount, and 1 × User manual.“ |
| `solm-frage-4` | hp-solm-12m-ww | „Was ist im Lieferumfang?“ / „Im Paket sind 1 × Solar-Lichterkette, 1 × Bedienungsanleitung und 1 × Wandhalterung.“, ohne EN | „Im Paket sind 1 × Solar-Lichterkette, 1 × Erdspieß, 1 × Wandhalterung und 1 × Bedienungsanleitung.“ | „What's in the box?“ / „The box contains 1 × Solar string lights, 1 × Ground stake, 1 × Wall mount, and 1 × User manual.“ |

- **DE:** wörtlich aus dem Auftrag, die Frage bleibt.
- **Woher das Englisch kommt:**
  - Frage: Der Lieferumfang-Block heißt auf `/en/` „In the box“ (`locales/en.default.json`, `heipard.blocks.lieferumfang.kicker`). Daraus ist „What's in the box?“
    gebildet.
  - Antwort: Die Teile stehen wörtlich wie die englischen Zeilen des Felds, mit Großbuchstaben und „Ground stake“.
    Eigener Wortlaut sind nur „The box contains“ und das Komma vor „and“, wie in Leons „Warm, cool, or colorful“
    (Abschnitt 3).
- **Folge auf `/en/`:** Diese beiden sind die ersten Fragen mit englischer Übersetzung. Die übrigen Fragen auf den drei
  Seiten stehen auf `/en/` weiter deutsch, wie auf allen anderen Seiten auch.
- **Live (19:48 bis 19:53 Uhr, Vergleich der Feature-Sektion mit vorher):**
  - DE: Auf den drei Seiten hat sich nur die Antwort geändert.
  - EN: Frage und Antwort sind jetzt englisch, dazu die Zeile „Ground stake“ im Lieferumfang (Abschnitt 2).
  - Sonst hat sich nichts geändert.
- **Rückweg:** `metaobjectUpdate` mit der Antwort aus `teilf-vorher.json`, danach die beiden EN-Übersetzungen mit
  `translationsRemove` entfernen (vorher gab es keine).
- **Stückzahl SCWL:** Die Stückzahl bleibt wie im Feld „1 ×“ und ist weiter [prüfen]. Ändert sie sich, sind Feld und
  Antwort zusammen zu ändern, je DE und EN.

### 1.2 Inventar: Antworten mit Packungsinhalt gegen `heipard.lieferumfang`

Gelesen am 20.11. gegen 19:20 Uhr: alle 191 Fragen (Typ `product_question`) und je Antwort mit Packungsinhalt die Produkte, die sie über
`heipard.fragen` nutzen, mit `heipard.lieferumfang` am Produkt und an jeder Variante. Keines dieser Produkte hat ein
Lieferumfang-Feld an der Variante. 17 Antworten zählen den Packungsinhalt auf, eine weitere nennt einen Teil davon.

| Frage | genutzt von | Befund |
|---|---|---|
| `scwl-frage-4` | hp-scwl-10m2p-mc, hp-scwl-15m2p-mc | **Erdspieß fehlte**, in Abschnitt 1.1 angeglichen |
| `solm-frage-4` | hp-solm-12m-ww | **Erdspieß fehlte**, in Abschnitt 1.1 angeglichen |
| `wbf-frage-1` | hp-wbf-180, hp-wbf-210 | gleich, auch in der Reihenfolge |
| `wwf-frage-4` | hp-wwf-180 | gleich |
| `fsf-frage-1` | hp-fsf-120 | gleich |
| `rct-frage-4` | hp-rct-400 | gleich |
| `ctl-w1-frage-4` | hp-ctl-180, hp-ctl-240, hp-ctl-300-eu, hp-ctl-360-eu | gleiche Teile, andere Reihenfolge |
| `cl-frage-3` | hp-cl-1-eu, hp-cl-2-eu | gleiche Teile, andere Reihenfolge |
| `ols-st38-frage-4` | hp-ols-st38-16 | gleiche Teile, andere Reihenfolge; das Feld ist laut Teil E [TBD] |
| `rfm-frage-4` | hp-rfm-600 | gleiche Teile, andere Reihenfolge |
| `rnm-frage-4` | hp-rnm-200 | gleiche Teile, andere Reihenfolge |
| `rsp-frage-4` | hp-rsp-180 | gleiche Teile, andere Reihenfolge |
| `rtm-frage-4` | hp-rtm-400 | gleiche Teile, andere Reihenfolge |
| `stt-frage-3` | hp-stt-050 (Entwurf, nicht sichtbar) | gleiche Teile, andere Reihenfolge |
| `tpm-frage-1` | hp-tpm-400-eu-1 | gleiche Teile, andere Reihenfolge |
| `u20-frage-3` | hp-u20-200 | gleiche Teile, andere Reihenfolge |
| `vam-frage-2` | hp-vam-400l-eu-1 | gleiche Teile, andere Reihenfolge |
| `ol-g40-frage-4` | hp-ol-30, hp-ol-50 | Antwort „drei Ersatzbirnen liegen bei“, Feld „3 Ersatzbirnen“: stimmt |

- **Abweichungen im Inhalt:** nur SCWL und SOLM, beide jetzt angeglichen.
- **Reihenfolge:** Bei elf Antworten stehen dieselben Teile in anderer Reihenfolge. Die Antworten ordnen das Zubehör
  alphabetisch („1 × Bedienungsanleitung und 1 × Fernbedienung“), das Feld setzt die Bedienungsanleitung ans Ende.
  Falsch ist dadurch nichts. Ich habe es nicht geändert.
- **Englisch:** Keine der 18 Antworten hatte eine englische Übersetzung. Auf `/en/` steht im Fragen-Block der deutsche
  Satz, im Lieferumfang-Block die englische Liste.
- **Nebenbefund:** Bei hp-ol-30 und hp-ol-50 steht das Feld ohne Stückzahlen („Lichterkette / Fernbedienung /
  Transformator / 3 Ersatzbirnen“), anders als bei allen anderen Produkten.

### 1.3 Einschätzung: Antwort liest das Feld direkt

Ja, das geht mit wenig Aufwand: In `snippets/heipard-fb-fragen.liquid` würde ein Platzhalter in der Antwort (etwa „Im
Paket sind {lieferumfang}.“, auf Englisch „The box contains {lieferumfang}.“) durch die Zeilen von
`heipard.lieferumfang` ersetzt, gelesen wie im Lieferumfang-Block erst an der Variante, dann am Produkt, verbunden mit
Komma und einem übersetzten „und“ bzw. „and“. Das sind rund 15 Zeilen in einem Snippet, ein Sprachschlüssel und
einmalig die 17 Antworten auf den Platzhalter umstellen; Englisch stimmt dann von selbst, weil das Feld schon übersetzt
ist, und Antworten ohne Platzhalter bleiben, wie sie sind.

## 2. Englisches Wort für Erdspieß: „Ground stake“

### 2.1 Die acht Felder aus dem Auftrag

Nur die EN-Übersetzung des Produkt-Metafelds `heipard.lieferumfang`, der deutsche Wert ist unverändert. Geschrieben am
20.11. um 19:47:08 Uhr, danach gelesen: alle aktuell, nicht veraltet.

| Produkt | vorher (EN) | nachher (EN) |
|---|---|---|
| hp-scwl-10m2p-mc | 1 × Ground spike | 1 × Ground stake |
| hp-scwl-15m2p-mc | 1 × Ground spike | 1 × Ground stake |
| hp-solm-12m-ww | 1 × Ground spike | 1 × Ground stake |
| hp-ols-a60-16-eu | 1 × Ground spike | 1 × Ground stake |
| hp-ols-g40-16 | 1 × Ground spike | 1 × Ground stake |
| hp-ols-s17-16 | 1 × Ground spike | 1 × Ground stake |
| hp-sblb-60l-ww-new | 1 × Ground spike / **1 × Ground spike connector** | 1 × Ground stake / **1 × Ground stake connector** |
| hp-ols-s11-16 (Produktfeld) | 1 × Ground spike | 1 × Ground stake |

Die übrigen Zeilen sind gleich geblieben. Die vollständigen Werte vorher stehen in `teilf-vorher.json`.
„Ground stake connector“ steht so bereits bei hp-sblb-100l-ww-new.

### 2.2 Suche nach „spike“ in allen englischen Texten

- **Auf zwei Wegen gesucht:**
  - Shop-Abfrage aller englischen Übersetzungen:
    - Metaobjekte: Blöcke, Sets, Fragen, Pflegetexte
    - Metafelder an allen 119 Produkten und allen Varianten
    - Produkte, Kollektionen, Seiten, Menüs, Links, Richtlinien, Blog, Filter und Versandarten
    - E-Mail-Vorlagen und die Alt-Texte aller Dateien
  - Alle 118 Produktseiten auf `/en/`, abgerufen von 19:26 bis 19:43 Uhr.
  - Dazu die Theme-Dateien im Repo: kein Treffer.
- **Fundstellen:**

| Stelle | gezeigt auf | vorher (EN) | nachher (EN) |
|---|---|---|---|
| die acht Felder aus 2.1 | die acht Produkte | „Ground spike“ | „Ground stake“ |
| Variantenmetafeld `heipard.lieferumfang` an HP-OLS-S11-16 (10 m) | hp-ols-s11-16, Variante 10 m (Standard beim Laden) | „1 × Ground spike“ | „1 × Ground stake“ |
| Pflegetext `kat-motif` (Typ `heipard_pflege`, Feld `text`) | hp-bsx-002, hp-dgm-001, hp-dgm-002, hp-dgm-048, hp-fsf-120, hp-fxf-001, hp-rmp-180, hp-wbf-180, hp-wbf-210, hp-wwf-180 | „Push light figures with a ground spike into loose soil or lawn; … so the spike doesn't break.“ | „Push light figures with a ground stake into loose soil or lawn; … so the stake doesn't break.“ |

- **Variantenfeld HP-OLS-S11-16:**
  - Es hat Vorrang vor dem Produktfeld. Die Seite zeigt es bei 10 m, bei 15 m das Produktfeld.
  - Ohne diese Änderung hätte `/en/` beim Laden weiter „Ground spike“ gezeigt.
  - Deutsch steht dort „1 × Erdspieß“. Das Feld hat eine Zeile mehr als das Produktfeld: „1 × Ersatzbirne“ bzw. „1 × Spare bulb“.
- **Pflegetext:** Deutsch steht „Lichtfiguren mit Erdspieß drückst du in lockere Erde … damit der Spieß nicht bricht“.
  Beide Stellen meinen den Erdspieß. Umgestellt habe ich nur die zwei Wörter, der übrige Text ist unverändert.
- **Geschrieben** am 20.11. um 19:47:08 Uhr. Danach gelesen: aktuell.
- **Nur zur Kenntnis, nicht geändert:**
  - Die englischen Beschreibungen von hp-sblb-60l-ww-new und hp-sblb-100l-ww-new sagen „An earth stake with connector is
    included.“ Das ist kein „spike“, aber ein drittes Wort neben „ground stake“.
  - Bei hp-dgm-002 steht im Feld „1 × LED garden stake / 1 × remote control“ (klein geschrieben, anders als
    überall sonst).
  - „stake“ kommt sonst in Alt-Texten und Texten der Gartenstecker vor („garden stake light“, „on ground stakes“), dort
    passend.
- **Rückweg:** `translationsRegister` mit den Werten aus `teilf-vorher.json` und dem dann gültigen Digest.

### 2.3 Live geprüft

- **Nachgeladen** von 19:48 bis 19:53 Uhr:
  - die acht Produkte, DE und EN
  - hp-ols-s11-16 auf `/en/` auch mit der Variante 15 m
  - die zehn Seiten mit dem Pflegetext auf `/en/`
- **Verglichen** mit dem Stand vor dem Schreiben: Feature-Sektion, sichtbare Zeilen und Bilder mit Alt.
- **EN:**
  - Auf den acht Produktseiten hat sich nur die Zeile „1 × Ground spike“ zu „1 × Ground stake“ geändert, bei
    hp-sblb-60l-ww-new dazu der Connector.
  - hp-ols-s11-16 zeigt „Ground stake“ bei 10 m (Variantenfeld) und bei 15 m (Produktfeld).
  - Auf den zehn Seiten mit Leuchtfiguren hat sich nur der Pflegetext geändert.
- **DE:** unverändert.
- „spike“ steht auf keiner der 33 nachgeladenen Seiten mehr.

## 3. `dfm-b2`: Fassung mit zwei Lichtfarben

### 3.1 Vorher geprüft

- `heipard.ip_schutzart`: hp-dfm-600 IP44, hp-dfm-750-eu IP44 (hp-dfm-400-eu-2 ebenfalls IP44). Kein Grund zu warten.
- Lichtfarben laut Varianten:
  - hp-dfm-600 und hp-dfm-750-eu: Warmweiß und Multicolor
  - hp-dfm-400-eu-2: Warmweiß, Kaltweiß und Multicolor
- Kaltweiß zeigt die Variantenauswahl auf `/en/` als „Cool white“ (Übersetzung des Optionswerts an
  hp-dfm-400-eu-2).
- **`dfm-b2` vorher:**
  - Typ `media_text`, kein Bild am Block. Das Bild kommt aus `feature_b2` (`DFM_B2_01`).
  - Eigenes Alt, DE und EN.
  - Kicker, Überschrift und Text ohne EN.
- **Sets:**
  - `dfm` nutzen hp-dfm-400-eu-2 und hp-dfm-750-eu.
  - `dfm-600` nutzt nur hp-dfm-600. Es hat dieselben Blöcke, dazu `dfm-hotspot` (Fernbedienung).

### 3.2 Geschrieben

| Zeit | Objekt | Änderung |
|---|---|---|
| 19:47:48 | neuer Block `dfm-b2-zwei` (`gid://shopify/Metaobject/502922477901`) | Typ `media_text`, Bild `image`, Seite `auto`, kein Bild am Block. Kicker „Zwei Lichtfarben“, Überschrift „Warm oder bunt, je nach Anlass“, Text „Zu Weihnachten passt warmes Licht, zur Party darf es bunt sein. Die Kette gibt es in Warmweiß und Multicolor, nach IP44 auch für draußen.“ Alt wie `dfm-b2`. Label „DFM · B2 Lichtfarben (zwei)“ |
| 19:48:06 | `dfm-b2-zwei`, EN | „Two light colors“ / „Warm or colorful, to suit the occasion“ / „Warm light suits Christmas, and a party can be colorful. The string light comes in warm white and multicolor and is rated IP44 for outdoor use.“ Alt EN wie `dfm-b2`: „Warm white HeiPard LED cluster string light as a garland above a mantelpiece with a burning fire.“ |
| 19:48:06 | `dfm-b2`, EN (DE unverändert) | „Three light colors“ / „Warm, cool, or colorful, to suit the occasion“ / „Warm light suits Christmas, and a party can be colorful. The string light comes in warm white, cool white, and multicolor and is rated IP44 for outdoor use.“ |
| 19:48:20 | Set `dfm-600` | in `blocks` an Position 2 `dfm-b2` durch `dfm-b2-zwei` ersetzt, sonst gleich |

- **Text EN für `dfm-b2`:** Das ist Leons Satz mit drei Lichtfarben. „cool white“ ist klein geschrieben wie „warm white“ in Leons Satz,
  das Komma vor „and“ folgt Leons Überschrift „Warm, cool, or colorful“.
- **Bild:** Der neue Block steht an derselben Stelle und hat denselben Typ wie `dfm-b2`. Die Sektion gibt ihm deshalb
  denselben Platz für B2 (erster `media_text`-Block, nicht sticky). Das Bild kommt also weiter aus `feature_b2`.

### 3.3 Wie die Produkte an den neuen Block kommen

- **hp-dfm-600 (erledigt):** Das Set `dfm-600` gehört nur diesem Produkt. Den Block im Set zu tauschen ist der
  kleinste Eingriff. Kein Metafeld am Produkt geändert.
- **hp-dfm-750-eu (offen, wartet auf Leon):**
  - **Das Problem:**
    - Das Produkt teilt das Set `dfm` mit hp-dfm-400-eu-2, und das soll `dfm-b2` behalten.
    - Das Theme kennt keine Bedingung, die einen Block nur für einzelne Produkte zeigt (`sections/heipard-feature.liquid` zeigt alle Blöcke des Sets).
    - Zwei Produkte im selben Set lassen sich deshalb nur trennen, wenn eines ein anderes Set bekommt, also über das
      Metafeld `heipard.feature_set` am Produkt. Das gehört zu den Metafeldern `feature_*`, die laut Auftrag nicht
      angefasst werden. Deshalb habe ich hier nichts geschrieben.
  - **Kleinster Eingriff, sobald Leon zustimmt:**
    1. ein neues Set `dfm-750` als Kopie von `dfm`, mit `dfm-b2-zwei` an Position 2
    2. `heipard.feature_set` an hp-dfm-750-eu auf `dfm-750`
    - Ein Metaobjekt und ein Metafeld. Rückweg: `feature_set` zurück auf `dfm`.
  - **Was nicht geht:** Das Set `dfm-600` für hp-dfm-750-eu mitzunutzen würde auch `feature_set` ändern und brächte den Block
    `dfm-hotspot` (Fernbedienung der DFM-600) auf eine Seite, für die das nicht geprüft ist.
  - **Bis dahin:** hp-dfm-750-eu zeigt weiter `dfm-b2`, also „Drei Lichtfarben“ mit Kaltweiß, auf `/en/` jetzt englisch.

### 3.4 Live geprüft

Die drei DFM-Seiten, DE und EN, von 19:48 bis 19:53 Uhr nachgeladen und mit vorher verglichen:

- **hp-dfm-600:**
  - DE: „Zwei Lichtfarben / Warm oder bunt, je nach Anlass / … in Warmweiß und Multicolor …“
  - EN: „Two light colors / Warm or colorful, to suit the occasion / …“
  - Bild `DFM_B2_01` und Alt (DE und EN) stehen unverändert an derselben Stelle.
- **hp-dfm-400-eu-2 und hp-dfm-750-eu:** Auf DE hat sich nichts geändert. Auf EN steht jetzt der englische `dfm-b2`.
- Sonst hat sich auf keiner der sechs Seiten eine Zeile der Feature-Sektion geändert.
- Die Variantenauswahl auf `/en/` zeigt „Cool white“.

## 5. Parallelbetrieb mit der Asset-Instanz

Vorher-Stand aufgenommen am 20.11.: Shop-Abfrage gegen 19:33 Uhr, Seiten DE und EN von 19:46 bis 19:48 Uhr, Desktop
1400 × 900 und mobil 390 × 844.

| Produkt | Medien vorher | Galerie |
|---|---|---|
| hp-ucp-200 | keine | keine Galerie, die Seite beginnt mit dem Titel |
| hp-rit-280 | 5: `RIT_POS1_01` auf Position 1, dann `HP-RIT-280_GAL_01` bis `_04` | Desktop und mobil gleiche Reihenfolge, Zähler „1 / von 5“ |
| hp-rnm-200 | 5: `RNM_POS1_01` auf Position 1, dann `HP-RNM-200_GAL_01` bis `_04` | wie hp-rit-280 |

- **Variantenwechsel:** Alle drei Produkte haben nur eine Variante, ohne Auswahl. Einen Variantenwechsel gibt es auf
  diesen Seiten nicht. Das Metafeld `galerie_medien` an der Variante listet bei rit und rnm GAL_01 bis GAL_04, ohne
  POS1.
- **Vorabmeldung der Asset-Instanz (20.11., nach 19:55 Uhr):**
  - Für hp-rit-280 und hp-rnm-200 enthält die Lieferung kein sauberes Produktfoto. Alle Hauptbilder zeigen einen
    App-Screenshot oder Text. Deshalb wird dort nichts geschrieben, Position 1 bleibt `RIT_POS1_01` bzw.
    `RNM_POS1_01`.
  - Für hp-ucp-200 gibt es einen Kandidaten. Sie meldet sich, wenn sie geschrieben hat.
- Die Prüfung der drei Seiten folgt als Nachtrag, sobald hp-ucp-200 gemeldet ist.

## Schreibvorgänge

| Zeit (20.11.) | Objekt | Änderung |
|---|---|---|
| 19:47:08 | 9 Metafelder `heipard.lieferumfang` (8 Produkte, 1 Variante), Übersetzung `en` | „Ground spike“ zu „Ground stake“ (2.1, 2.2) |
| 19:47:08 | Pflegetext `kat-motif`, Übersetzung `en` | „spike“ zu „stake“, zwei Stellen (2.2) |
| 19:47:21 | `scwl-frage-4`, `solm-frage-4`, Feld `antwort` | DE wie im Auftrag (1.1) |
| 19:47:35 | dieselben, Übersetzung `en` | Frage und Antwort neu (1.1) |
| 19:47:48 | neuer Block `dfm-b2-zwei` | angelegt (3.2) |
| 19:48:06 | `dfm-b2-zwei` und `dfm-b2`, Übersetzung `en` | 3.2 |
| 19:48:20 | Set `dfm-600` | Block getauscht (3.2) |

- **Nicht angefasst:** Preise, Status, Bestand, Produktmedien, Files, alle Metafelder `feature_*` und die Showroom-Logik.
- **Vor jedem Schreiben:** `get-shop-info` gab HeiPard zurück.
- Theme-Code unverändert.

## Commits

- `98b221e` Doku: Teil F, Fragen Lieferumfang, Ground stake, dfm-b2-zwei (Bericht, `docs/data/teilf-vorher.json`,
  offene Punkte)
- `3f67d07` Doku: Teil F, Commit-Liste
- dazu ein Commit „Doku: Teil F, Vorabmeldung Abschnitt 5“ (Meldung der Asset-Instanz zu rit, rnm und ucp)

Theme-Code unverändert, kein Theme-Commit in Teil F.

## Offen

1. **Für Leon:** hp-dfm-750-eu an den neuen Block bringen. Dafür müsste ich `feature_set` an diesem Produkt ändern
   (Abschnitt 3.3). Darf ich?
2. **Für Leon, nur Hinweis:**
   - Die SCWL-Stückzahl beim Erdspieß bleibt [prüfen] (Tyler-Bündel).
   - Wird sie geklärt, ändern sich Feld und Antwort `scwl-frage-4` zusammen, je DE und EN.
3. **Für Leon, nur Hinweis:**
   - Elf Antworten nennen den Packungsinhalt in anderer Reihenfolge als das Feld.
   - Alle übrigen Fragen sind auf `/en/` deutsch: vor Teil F 390 Fragen auf den 118 Seiten, keine englisch.
   - Mit dem Platzhalter aus 1.3 wäre beides auf einmal gelöst.
4. **Für Leon, nur Hinweis:** „earth stake“ in zwei englischen Beschreibungen (SBLB), Kleinschreibung im Feld von hp-dgm-002.
5. **Asset-Instanz:** Sie hat bestätigt, dass ihre Liste (`reports/_work/a26_lieferumfang_en.json`, zehn Felder mit
   dem Variantenfeld HP-OLS-S11-16) mit dem Shop übereinstimmt. Ihr Skript schreibt nicht in den Shop, sondern übergibt
   nur. Den Pflegetext `kat-motif` und „earth stake“ führt sie in ihrem Bericht.
6. **Abschnitt 5:** Nachtrag nach der Meldung der Asset-Instanz zu hp-ucp-200. An rit und rnm schreibt sie nichts.
