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
- [ ] **Bento-Taxonomie vs. Nav:** Das Bento-Grid zeigt 6 Kategorien aus dem Prototyp
  (Party & Terrasse · Eiszapfen & Vorhang · Lichterketten · Solar & Gartendeko ·
  Camping & Outdoor · Smart Lighting). Die Nav/Collections sind aber 5
  (Lichterketten · Outdoor · Solar & Garten · Camping · Smart). 4 Kacheln sind
  verlinkt; **„Party & Terrasse" und „Eiszapfen & Vorhang" haben noch keine
  Collection** (Link leer). Entscheiden: Collections anlegen oder Bento-Kacheln
  an die 5 Nav-Kategorien angleichen?
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
- [ ] **TESTPRODUKT löschen vor Launch:** „[TEST] Solar-Lichterkette HP-OLS-G40-16"
  (Handle `test-solar-lichterkette-hp-ols-g40-16`) inkl. 3 Platzhalter-Bildern —
  nur zum Bauen/Testen der PDP & Kollektionsseite.
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

## Geklärt

- [x] **Service-Zeiten** Mo–Fr 9–16 Uhr — korrekt. ✅
