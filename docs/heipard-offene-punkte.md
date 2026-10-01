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
- [ ] **DSGVO Schriften** — vor Launch Fraunces/Inter selbst hosten statt Google Fonts.
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

- [ ] **OL-G40 Längenangabe** — Vokabular Abschnitt 9 nennt „3 m Zuleitung, 20 m Kette, 30 Birnen, 55 cm Abstand".
  30 × 55 cm ergibt 16,5 m. Das Amazon-Listing nennt die Länge „inkl. 3 m Verlängerungskabel". Vermutlich sind
  20 m die Gesamtlänge und rund 17 m beleuchtet (OL-50: 30 m gesamt, rund 27 m). Im Demo steht vorerst
  `beleuchtete_laenge_m` = 20 bzw. 30 wie im Vokabular. Bitte bestätigen oder korrigieren.
- [ ] **OL-G40 Dimmstufen** — Listing: „4 Helligkeitsstufen (25–100 %)". Im Demo als 25, 50, 75, 100 gepflegt,
  die Zwischenwerte sind abgeleitet. Bitte gegen die Fernbedienung prüfen.
- [ ] **OL-G40 Bilder** — G40-01 (B1), G40-02 (B2), G40-05 (Basisbild Steuerung) liegen noch nicht in den
  Shopify-Dateien. Bis dahin Verlauf-Platzhalter und schematische Kette.
- [ ] **OL-G40 Texte** — R1 „Gebaut für draußen" hat noch `[TBD]`-Absätze, B2 keinen Fließtext.
- [ ] **HP-OL-25** — gleiche Bauart (15 m, 25 Leuchtmittel, dimmbar). Gehört es zur Familie OL-G40?
  Abschnitt 9 nennt nur OL-30 und OL-50.
- [ ] **Familien-Kollektionen** (`familie-<code>`) sind technische Kollektionen für die Serienleiter. Sie
  erscheinen in der Kollektionsliste und Sitemap. Titel aktuell „Serie OL-G40". Entscheiden: so lassen,
  kundentauglich benennen oder aus Liste und Suche ausschließen.
- [ ] **Fallback-Blöcke im Template** — Produkte ohne Set und ohne Dramaturgie zeigen weiter die generischen
  Blöcke aus `templates/product.json` (mit Aussagen wie „8 Leuchtmodi", „koppelbar"). Vorschlag: bei allen
  Produkten eine Dramaturgie setzen und die Fallback-Blöcke danach leeren.
- [ ] **Altes Beispiel-Set** „Beispiel-Set (Demo)" hängt noch an `hp-olh-g40-25`. Entfernen, sobald nicht mehr gebraucht.
- [x] **IP45** in der Auswahlliste `ip_schutzart` ergänzt (2026-10-01), an HP-OL-30 und HP-OL-50 gesetzt.
- [ ] **OL-G40 Hotspot** — Bild der Fernbedienung fehlt. Die vier Punkte (Modus, Dimmen, Timer, Ein und Aus)
  haben Platzhalter-Positionen und müssen am echten Bild gesetzt werden.
- [ ] **OL-G40 Fragen** — für D7 sind noch keine Produktfragen gepflegt (Metaobjekt „HeiPard Produktfrage").
- [ ] **CE-Kennzeichnung** — neues Metafeld `ce_kennzeichnung`. Bewusst nirgends gesetzt, bis je Produkt bestätigt.
- [ ] **Begriff Spannung** — Vokabular und Listing sagen „24 V Niederspannung". Fachlich ist das Kleinspannung
  (bis 50 V). Der Block Nachweise schreibt „Betriebsspannung 24 V" und erklärt Kleinspannung. Wording bestätigen.
- [ ] **RGB-Regler (I4, Variante rgb)** — die Farbskala des Reglers nutzt zwangsläufig das volle Farbspektrum
  (auch Blau und Violett) als feste Farbwerte. Das ist die einzige Stelle im Theme ohne Farb-Token.
- [ ] **Kelvin-Skala** — der Verlauf endet in einem kühlen Weiß (Token `--heipard-kelvin-cool`). Bitte ansehen,
  ob das zur Regel „keine Blau-Verläufe" passt, sonst neutraler setzen.
