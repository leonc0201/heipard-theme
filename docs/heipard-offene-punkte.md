# HeiPard — Offene Punkte / [TBD]

Laufende Sammlung während des Theme-Builds. **Am Ende gebündelt klären.**
Nichts davon wird erfunden — bis zur Klärung steht im Theme ein `[TBD]`-Platzhalter
oder ein neutraler, faktisch sicherer Text.

## Offen

- [ ] **Versandkonditionen** — echte Werte für „Versandkosten ab … / kostenlos ab …"
  (Prototyp-Erfindung „ab 4,90 € / kostenlos ab 50 €" NICHT übernehmen). Für PDP + Footer.
- [ ] **Versandzeit** — „Versand innerhalb von 1–2 Werktagen"? verifizieren.
- [ ] **Standort-Wording** — „Heimat am Niederrhein" ok? Genauer Ort (Jüchen vs. Willich).
  „Krefeld" aus dem Prototyp ist eine Halluzination und bleibt draußen.
- [ ] **Service-Telefonnummer** — echte Nummer für Footer/Kontakt (Zeiten Mo–Fr 9–16 Uhr ✅ bestätigt).
- [ ] **Exakter Logo-Orange-Hexwert** — aktuell Arbeitswert `#E87A2E` / Token `--brand`; finalen Markenwert bestätigen.
- [ ] **Garantie-Staffel je Produktkategorie** — konkrete Jahre pro Kategorie (via Metafield `heipard.garantie_jahre`).
- [ ] **Rücksendekosten** — wer trägt sie? (AGB/Widerruf) → Wording „30 Tage Rückgaberecht".
- [ ] **„Kunden" vs. „Kund:innen"** — Markenstimme-Entscheidung (aktuell „Kunden").
- [x] **DSGVO Schriften** — Fraunces/Inter selbst gehostet (assets/heipard-*-var.woff2, Lizenzen in docs/fonts/).
- [ ] **Hero-Bild** — aktuell KI-generiertes Platzhalterbild (`assets/heipard-hero.jpg`);
  final durch echtes Foto ersetzen? Lizenz/Endgültigkeit klären.
- [ ] **Header — „kleine Fixes"** (von Leon erwähnt, im letzten Schritt sammeln/umsetzen).
- [ ] **Bento-Taxonomie an neue Kategorien angleichen:** Nav/Collections wurden am
  2026-08-17 neu aufgebaut (5 Hauptkategorien + 6 Lichterketten-Unterkategorien,
  siehe `heipard-taxonomie.md`). Das Bento-Grid auf der Startseite zeigt aber noch
  die alte Prototyp-Taxonomie (Party & Terrasse · Eiszapfen & Vorhang · Camping &
  Outdoor · Smart Lighting). Kacheltitel + Links auf die neue Taxonomie umstellen
  (z. B. Lichterketten, Solar & Garten, ggf. Unterkategorien).
- [ ] **Bento-Kachelbilder** — 6 Bilder fehlen (aktuell Token-Verlauf-Platzhalter).
- [ ] **Bestseller-Kollektion** — Sektion auf eine Kollektion zeigen lassen (z. B. „Bestseller"
  via Tag/Smart Collection) + Produkte. Aktuell Skeleton-Platzhalter, bis Produkte da sind.
- [ ] **Produkt-Subtitle** — Karten lesen `metafield heipard.subtitle`; Metafield-Definition
  + Werte stehen noch aus (Produkt-Import-Phase).
- [ ] **Anlass-Collections** — Weihnachten · Garten & Balkon · Camping · Hochzeit & Party
  (Smart Collections via Tags laut Brief). Kachel-Links aktuell leer → nachziehen.
- [ ] **Anlass-Kachelbilder** — 4 Stimmungsbilder fehlen (aktuell warmer Farbverlauf,
  „immer farbig" erfüllt).
- [ ] **Brand-Story-Wording (RECHTLICH)** — Prototyp: „Wir **entwickeln** Lichter".
  Verstößt gegen Content-Regel (kein „entwickelt"/Herkunfts-Andeutung). Aktuell
  geändert auf „Wir **bringen dir** Lichter". **Finale Formulierung bestätigen.**
- [ ] **„Mehr über HeiPard"-Link** — Über-uns-Seite existiert noch nicht (Link leer).
- [ ] **Brand-Story-Bild** — fehlt (aktuell warmer Verlauf-Platzhalter).
- [ ] **„Partner werden"-Link** — Haendler-/B2B-Seite existiert noch nicht (Link leer).
- [ ] **Footer-Telefonnummer** — bewusst NICHT angezeigt (kein „[TBD]" public); nur „Mo–Fr 9–16 Uhr".
  Echte Nummer ergaenzen, sobald vorhanden.
- [ ] **Rechtstexte/Policies** — Footer zeigt Policy-Links automatisch (`show_policy`), sobald
  Impressum/Datenschutz/AGB/Widerruf in Shopify (Einstellungen → Richtlinien/Seiten) gepflegt sind.
- [ ] **Footer-Kategorien-Menue** — nutzt aktuell `main-menu`; ggf. eigenes Footer-Menue anlegen.
- [ ] **Primaere Sprache** — im Store ist aktuell **EN** als primaere Sprache gesetzt (DE veroeffentlicht,
  aber sekundaer). Fuer einen DE-first-Shop in Shopify (Einstellungen → Sprachen) auf **Deutsch** umstellen.
- [ ] **Laender/Waehrung-Switcher** — aus Header entfernt, jetzt dezent im Footer. Bei
  internationalem Verkauf ggf. wieder prominenter / Markets konfigurieren.

- [ ] **Trust-Signale verifizieren (RECHTLICH)** — auf Leons Wunsch jetzt **sichtbar [TBD]**
  in der Trust-Bar (gelber Marker), bis formal bestätigt: „Versand aus Deutschland",
  „Bis zu 5 Jahre Garantie", „30 Tage Rückgaberecht". Pro Signal per Checkbox
  „Unverifiziert" im Customizer abschaltbar. „Service / Mo–Fr 9–16 Uhr" gilt als bestätigt.
- [ ] **Announcement-Bar** — Dawn-Default „Welcome to our store" wurde entfernt
  (aus header-group.json). Bei echtem Inhalt im Customizer wieder hinzufügen.

### PDP (Produktseite)

- [x] **Metafeld-Definitionen** (Namespace `heipard`) angelegt — alle 22 laut
  `heipard-metafelder.md` (Auswahllisten mit exakten Werten, Zahlen, Ja/Nein). ✅
- [x] **Spec-Kacheln-Keys** an finale Metafeld-Namen angepasst (`beleuchtete_laenge_m`,
  mit Einheit „m"). ✅
- [x] **TESTPRODUKTE gelöscht** (2026-08-17) — alle 6 `[TEST]`-Produkte im Zuge des
  Taxonomie-Umbaus entfernt (standen in der alten manuellen `lichterketten`). ✅
- [ ] **IP-Schutzart-Auswahlliste:** echte Produkte haben teils **IP45** (nicht in der
  definierten Liste IP20/IP44/IP54/IP65/IP67). Für die Testprodukte auf IP44 gemappt.
  Entscheiden: IP45 (ggf. weitere) zur `ip_schutzart`-Auswahlliste hinzufügen.
- [ ] **Accordion-Inhalte** — Technische Details / Installation & Pflege / Versand & Rückgabe
  stehen als `[TBD]`. Versand & Rückgabe NICHT mit „Krefeld"/erfundenen Versandkosten füllen.
- [ ] **Feature-Sektion-Bilder** (3) — Stimmung/Wetter/Setup; aktuell warmer Verlauf-Platzhalter.
- [ ] **„Passt dazu"** nutzt aktuell Dawns Standard-Produktkarten (nicht die HeiPard-Karte) —
  optische Angleichung als spätere Politur.
- [ ] **PDP-Live-Check** — Galerie (Seiten-Thumbnails), Varianten & Warenkorb erst mit einem
  echten Produkt final verifizierbar (Produkt-Import-Phase).

### Kollektionsseite

- [ ] **Filter-Facetten in Search & Discovery aktivieren** — die Sidebar rendert `collection.filters`;
  diese kommen aus der **Search-&-Discovery-App** (Admin). Dort die Metafeld-Filter freischalten:
  `heipard.stromquelle`, `heipard.lichtfarbe`, `heipard.einsatzbereich`, `heipard.ip_schutzart`,
  `heipard.material` (+ Länge als Bereiche via `beleuchtete_laenge_m`). Bis dahin zeigt die
  Sidebar nur Standard-Facetten (Verfügbarkeit/Preis).
- [ ] **Längen-Filter als Bereiche** (bis 5 m / 5–10 m / 10–20 m / über 20 m) in Search & Discovery
  konfigurieren (nicht exakte Werte).
- [ ] **Breadcrumb auf Kollektion/PDP** — im Lovable-Original vorhanden, in Dawn nicht default;
  bei Bedarf ergänzen.

### Taxonomie / Kategorien (Umbau 2026-08-17)

Vollständige Referenz: **`heipard-taxonomie.md`**.

- [x] **11 Smart Collections angelegt + veröffentlicht** (regelbasiert über `kat-`Tags). ✅
- [x] **Mega-/Dropdown-Menü** (Lichterketten → 6 Unterkategorien, Solar & Garten). ✅
- [x] **Welle-1-Import ausgeführt** (2026-08-17) — 85 Produkte als Draft, `kat-`Tags gesetzt,
  Bilder rehosted, Smart Collections gefüllt. Details + Nacharbeiten: **`heipard-import-welle1.md`**.
- [ ] **Welle 2** — Titel/Beschreibungen markengerecht, restliche Metafelder, `todo-bild`/`todo-text`
  abarbeiten, dann Aktivierung (siehe `heipard-import-welle1.md`).
- [ ] **Leere Kategorien ins Menü aufnehmen, sobald bestückt** — Smart (`kat-smart`),
  Motif Lights (`kat-motif`), Weihnachtsbäume (`kat-weihnachtsbaum`) sind angelegt,
  aber bewusst noch nicht verlinkt.
- [ ] **Alte manuelle Kollektionen `outdoor` + `camping`** stehen noch — nach
  verifiziertem Import löschen bzw. Einsatzbereich als Filter statt Kategorie klären.

## Geklärt

- [x] **Service-Zeiten** Mo–Fr 9–16 Uhr — korrekt. ✅

## Feature-Baukasten (Block-Vokabular, Stand 2026-10-01)

Offen:

- [ ] **OL-G40 Hotspot-Bild** — `OLG40_P1_01` (freigestelltes Listing-Bild) bleibt als Platzhalter. Das echte
  Foto der Fernbedienung kommt als `OLG40_P1_02`. Dann Bild tauschen und die vier Punkte neu setzen.
- [ ] **Rückfragen an Shenzhen (Leon)** — Timer-Tasten „4H" und „…0 Min" auf der Fernbedienung, Birnenabstand
  58 cm im Maßbild gegen 55 cm im Text, „Fuash" statt „Flash". Bis zur Antwort gelten die Werte aus dem
  Listing-Text (Timer 6 und 8 Stunden, 55 cm).
- [ ] **Serienleiter** — wird erst sichtbar, wenn die Produkte der Familie aktiv sind.
- [ ] **CE-Kennzeichnung** — neues Metafeld `ce_kennzeichnung`. Bewusst nirgends gesetzt, bis je Produkt bestätigt.
- [ ] **Begriff Spannung** — Vokabular und Listing sagen „24 V Niederspannung". Fachlich ist das Kleinspannung
  (bis 50 V). Der Block Nachweise schreibt „Betriebsspannung 24 V" und erklärt Kleinspannung. Wording bestätigen.
- [ ] **RGB-Regler (I4, Variante rgb)** — die Farbskala des Reglers nutzt zwangsläufig das volle Farbspektrum
  (auch Blau und Violett) als feste Farbwerte. Das ist die einzige Stelle im Theme ohne Farb-Token.
- [ ] **Kelvin-Skala** — der Verlauf endet in einem kühlen Weiß (Token `--heipard-kelvin-cool`). Bitte ansehen,
  ob das zur Regel „keine Blau-Verläufe" passt, sonst neutraler setzen.

Erledigt am 2026-10-05:

- [x] **Variantenabhängige Werte** — 18 Varianten-Metafelder angelegt (alle Keys aus `varianten_werte.csv`
  außer Lichtfarbe; Definitionen 433616912717 bis 433617076557 und 433719705933 bis 433720066381). Theme liest
  jedes `heipard`-Feld zuerst an der Variante, dann am Produkt, `heipard-variant.js` tauscht Spec-Kacheln und Feature-Sektion beim Wechsel aus,
  Serienleiter zeigt Varianten als Stufen. Werte schreibt die Asset-Instanz. Am 2026-10-06 auf der echten
  Seite von `hp-dlm-100h` geprüft (Edge headless): Spec-Kacheln, Kettenplan, Icon-Grid und Serienleiter wechseln
  mit, die Steuerung wird neu aufgebaut. Dabei gefunden und behoben: `variant_picker` fehlte im Produkt-Template,
  `heipard-variant.js` prüfte `window.PUB_SUB_EVENTS` statt der Konstante.

Erledigt am 2026-10-02:

- [x] **Kettenplan reduziert** — fehlt die beleuchtete Länge, ist aber `gesamtlaenge_m` gepflegt, zeigt der
  Kettenplan nur eine Linie mit „x m gesamt". Zuleitung und Lichtpunkte stehen, falls gepflegt, darunter.
- [x] **`heipard.dimmstufen_anzahl`** (Ganzzahl, ab 2) — ist `dimmstufen` leer, zeigt die Steuerung so viele
  Chips „Stufe 1" bis „Stufe n" ohne Prozentwerte. Das Icon-Grid nennt dieselbe Anzahl.

Erledigt am 2026-10-01 (Leons Entscheidungen):

- [x] **OL-G40 Länge** — 20 m (OL-50: 30 m) ist die Gesamtlänge. Gepflegt: Zuleitung 3 m, beleuchtet 17 m
  bzw. 27 m, Gesamtlänge 20 m bzw. 30 m. Der Kettenplan zeigt „ca. 17 m Lichterkette" und „20 m gesamt".
- [x] **OL-G40 Dimmstufen** — 25, 50, 75, 100 Prozent bestätigt.
- [x] **HP-OL-25** — bleibt in OL-Standard, kommt nicht in die Serienleiter von OL-G40.
- [x] **OL-G40 Bilder, Texte, Fragen** — die sieben Pipeline-Exporte liegen in den Shopify-Dateien (Alt-Texte
  aus dem Manifest), R1-Absätze und vier Produktfragen sind eingetragen. Frage 1 nennt jetzt Strahlwasser.
- [x] **Serienleiter** zeigt die Gesamtlänge, von Leon bestätigt.
- [x] **OL-G40 lauter Block** (2026-10-02) — die Steuerung. Der Schieber ist aus dem Set genommen, das
  Icon-Grid erscheint wieder. Der Schieber bleibt als Block-Typ für Familien ohne Dimmen und Modi.
- [x] **Alt-Text Aus-Bild** (2026-10-02) — von Leon in Shopify gesetzt.
- [x] **Familien-Kollektionen** — technischer Name bleibt, ausgeblendet aus Kollektionsliste, Sitemap und
  Suche, noindex.
- [x] **Fallback-Blöcke** — leere Dramaturgie gilt als Long-Tail, die generischen Blöcke im Produkt-Template
  sind entfernt.
- [x] **Altes Beispiel-Set** — gelöscht, das Metafeld an `hp-olh-g40-25` entfernt.
- [x] **IP45** in der Auswahlliste `ip_schutzart` ergänzt, an HP-OL-30 und HP-OL-50 gesetzt.

Import-Regel seit 2026-10-05: „RGB“ als Lichtfarbe wird auf den Auswahllistenwert „Multicolor“ abgebildet
(`welle1b_aufbereitung.py`). Bestehende Produkte mit Tag `RGB` sind nicht umgestellt.

## Fragen an Shenzhen

Sammelblatt für Rückfragen an Tyler. Die Rückfragen zu OL-G40 stehen oben unter „Feature-Baukasten".

Aus dem Produkt-Import Welle 1b (2026-10-02):

- [ ] **`HP-GH-01`** (ASIN B0FJ21MTDT) — im Seller-Central-Bericht steht unter der Marke HeiPard ein
  Gaming-Headset mit Amazon-Produkttyp HEADPHONES („HeiPard Gaming-Headset mit Kabel, Schwarz HP-GH-01").
  Nicht importiert. Gehört das Listing zu HeiPard oder ist es ein Fehler?
- [ ] **Tylers Liste, Zeile `HP-WBF-210-EU`** (ASIN B0H33SZ28R) — bei dieser MSKU steht die SKU `HP-DPM-300`
  mit der Bezeichnung „300皮线M暖". Laut Amazon ist die ASIN ein Lichterbaum (Birke, 210 cm). Die Zeile
  ist vermutlich verrutscht, bitte korrigieren.
- [ ] **Beleuchtete Birken (HP-WWF, HP-WBF)** — Amazon führt sie als ARTIFICIAL_TREE. Im Shop stehen sie als
  Motivleuchten (`kat-motif`, Produkttyp „Lichterbaum"), nicht als Weihnachtsbäume. Sieht Tyler das auch so?
- [ ] **HP-OLS-S17-16 (ASIN B0FGJB4DFY) und HP-OLS-S17-16-EU (ASIN B0HCBFN39R)** — sind das zwei Fassungen
  desselben Produkts (Titel 7,5 m/16 Birnen gegen 8,5 m/16+1 Birnen)? Wenn ja, welche gilt?
- [ ] **OL-Familien** — Gegenüberstellung OL gegen OLA, OLH, OLS im Plan `docs/heipard-import-welle1b-plan.md`,
  Abschnitt 7. Die betroffenen Produkte tragen `pruefen-mapping-ol`.

- [ ] **Bestandsführung vor Launch klären** (Daniel) — Quelle der Bestände, Pflege, Verhalten beim Verkauf bei
  Bestand 0. Stand 2026-10-06 stehen die Welle-1b-Varianten auf Bestand 0 und zeigen „Ausverkauft".
- [x] **Ausverkauft-Zustand des Kaufbuttons** (2026-10-06) — Dawn schreibt den Sold-out-Text in das erste `span`
  des Buttons, das war unser Icon. Text-Span steht jetzt zuerst, Icon per CSS davor, bei disabled ausgeblendet.
- [x] **Serienleiter-Beschriftung** (2026-10-06) — Variantenstufen zeigen den Optionswert (10 m, 20 m), die
  Familienansicht weiter die Länge aus dem Metafeld bzw. den Produktnamen.

## Produkt-Import Welle 1b (Stand 2026-10-02)

Import abgeschlossen, Bericht: `docs/heipard-import-welle1b-bericht.md`. Offen (Leon):

- [ ] **HP-OLS-S17-16 gegen HP-OLS-S17-16-EU** — beide bleiben Draft, `hp-ols-s17-16-eu` trägt `pruefen-dublette`.
  Frage an Tyler (siehe „Fragen an Shenzhen").
- [ ] **SKU-Schreibweise** — bei den 16 Zusammenführungen ohne `-EU`. Die übrigen Welle-1-SKUs tragen die
  Suffixe noch, Angleichung als eigener Schritt mit Bericht.
- [ ] **`hp-bsm-002`** — einziges Produkt mit `todo-kategorie` (Titel unklar, fehlt in Tylers Liste).
- [ ] **Neun Produkte mit `pruefen-varianten`** — bleiben bis zum OL-Mapping von Tyler.
- [ ] **Preise** — die sieben abweichenden Preise der Zusammenführungen sind angeglichen (Bericht, Abschnitt 8).
  Offen: Preisabgleich der übrigen Welle-1-Produkte und die nach Platzhalter aussehenden Berichts-Preise.
- [x] **Kategorien und Smart-Doppelweg** — sechs Produkte eingeordnet, `hp-rgb-200a` und `hp-rgb-300a` auf `kat-smart`.
- [x] **SBLB-Dubletten** — `hp-sblb-100l-ww` und `hp-sblb-60l-ww` gelöscht, die -NEW-Fassungen bleiben.
