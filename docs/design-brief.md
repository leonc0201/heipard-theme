# Heipard Design Brief — v2 (FINAL)

**Stand:** 11.06.2026 · **Status:** finalisiert nach Prototyp-Phase (Stitch + Lovable)
**Projekt:** Refresh heipard.com → Shopify D2C-Shop
**Nutzung:** Diese Datei wird 1:1 Basis für PRODUCT.md (Impeccable) und CLAUDE.md (Claude Code). Screenshots des finalen Lovable-Mockups als visuelle Referenz beilegen.

---

## 1. Projektrahmen

- Migration von WooCommerce zu Shopify (Dawn-Basis, stark angepasst)
- 80% D2C-Shop, 20% Händler-Verweis (eigene B2B-/Händler-Sektion)
- 100+ SKUs, Referenzportfolio: Ollny (nur Produkte, NICHT Design)
- Sprachen: Deutsch + Englisch (Shopify Markets, `/en/`-Struktur)
- Ansprache: durchgängig "du"

## 2. Marke & Positionierung

- **Markenkern:** "Lasse deine Welt erleuchten" — Deko- und Funktionslicht, verkauft wird Stimmung, nicht Elektronik
- **Preis-Anmutung:** hochwertig, aber zugänglich · cleane Preise, KEINE Streichpreis-Optik (compare_at_price nur für Sonderaktionen vorbereitet)
- **Zielgruppen gleichwertig:** Camping/Outdoor UND Home & Deko
- **Abgrenzung LUMOnova:** LUMOnova = ruhig, editorial-dunkel, Smart-Tech. Heipard = heller, natürlicher, atmosphärischer, emotionaler. Nie verwechselbar.
- **Herkunft NUR über faktische Trust-Signale, NIEMALS als Claim:**
  1. PDP-Trust-Elemente: "Versand aus Deutschland" · Garantie-Badge · "30 Tage Rückgaberecht"
  2. Footer: "Service & Support aus Deutschland" + Telefon + Zeiten
  3. Über-uns: "Heimat am Niederrhein" als Story (zuhause/beheimatet = faktisch, KEIN "gemacht/entwickelt/Ingenieurskunst")
  4. Impressum: deutsche GmbH
- **VERBOTEN (abmahn-riskant + Brief-Verstoß):** "Made in …", "Designed in …", "Gemacht am/in …", "deutsche Ingenieurskunst", erfundene Gründungsjahre, Manufaktur-Bildwelt

## 3. Sortiment & Struktur

**Hauptkategorien** (unter Vorbehalt): Lichterketten · Eiszapfen- & Vorhanglichter · Party & Terrasse · Solar & Gartendeko · Camping & Outdoor · Smart Lighting (nicht im Fokus)

**Navigation:** Kategorien DIREKT im Header (validiert im Prototyp — kein generisches "Produkte"-Menü)

**Anlass-Kollektionen** (Smart Collections via Tags): Weihnachten · Garten & Balkon · Camping · Hochzeit & Party

**Saisonalität:** Hero saisonal umschaltbar (Sommer: Garten/Camping · ab Sept: Weihnachten)

**Filter-Metafelder:** Stromquelle (Netz/Solar/Batterie/Akku) · Länge (Bereiche: bis 5 m / 5–10 m / 10–20 m / über 20 m) · LED-Anzahl · Lichtfarbe (Warmweiß/Kaltweiß/Multicolor/RGB) · IP-Schutzart · Einsatzbereich (Innen/Außen) · Leuchtmodi · Connectable · Smart · Garantie (Jahre)

## 4. Design-System (validiert im Prototyp)

### Farbwelt — FINAL
**Light Mode "Tag" (Default):**
- Hintergrund: Warmweiß/Creme `#FAF6F0`
- Text: Warm-Charcoal `#2B2926`
- Primärakzent: Terracotta `#C96F4A`
- Sekundär: Tannengrün `#2D4A3E`
- Logo: Orange `#E87A2E` (exakten Markenwert prüfen)

**Dark Mode "Abendstimmung":**
- Basis: warmes Nachtblau `#1B2433` (validiert — Produktbilder glühen, kein Tech-Look)
- Akzente: Terracotta/Orange leicht aufgehellt

**VERBOTEN:** Teal/Türkis (schlich sich bei Stitch ein) · Lila/Blau-Gradients · Glassmorphism · Graustufen-Behandlungen auf Bildern

### Der Lichtschalter (Signature-Feature — validiert)
- Toggle "Tag / Abendstimmung" im Header, als physischer Schalter gestaltet
- Sanfte Transition (~0.5s), Glow am Schalter im Dark Mode
- Technisch: ALLE Farben als CSS-Design-Tokens, Toggle via Datenattribut auf `<html>`, Präferenz in localStorage, `prefers-color-scheme` als Initialwert
- Disziplin-Regel: KEINE hartcodierten Farben im Theme (Impeccable-Detector als Wächter)

### Typografie — Richtung validiert
- **Headlines:** charaktervolle Serif (editorial-warm, wie im Lovable-Render) — finale Font-Wahl beim Theme-Build mit Impeccable `/typeset` (Richtung: Fraunces, Source Serif o.ä.)
- **UI/Body:** moderne, freundliche Sans (Richtung: Plus Jakarta Sans, Inter)
- Großzügige Headline-Größen, kleine Kicker-Labels in Terracotta-Uppercase über Sektions-Headlines (validiertes Muster: "KOLLEKTIONEN", "BESTSELLER", "ANLÄSSE")

### Motion
- Dezente Glow-Effekte auf Produktkarten und CTAs (im Dark Mode stärker)
- Sanfte Scroll-Reveals, Hover = Glow + leichtes Lift
- Lichtschalter-Transition als Höhepunkt · kein Jahrmarkt

### Bildwelt-Regeln (aus Prototyp-Vergleich destilliert)
- Fotorealistisch, IMMER warme Lichtquellen im Bild, Abend-/Dämmerungsstimmung
- Beide Welten bedienen: Outdoor (Garten, Camping, Terrasse) UND Indoor (Wohnraum, Fenster)
- KEINE Illustrationen zwischen Fotos, KEINE Graustufen, KEINE klinisch-kaltweißen Produktszenen
- KEINE Manufaktur-/Werkstatt-Motive (suggeriert Handfertigung)
- Produktbilder auf Karten: warmer, einheitlicher Hintergrund-Ton (validiert: Amber-Töne im Lovable-Render)

## 5. Seiten-Patterns (validiert)

### Startseite
1. Hero: Vollbild-Abendszene, WEISSE Headline + Akzentwort in Orange, dezenter (!) Gradient, Saison-Badge, zwei CTAs ("Jetzt entdecken" primär, "Bestseller ansehen" sekundär)
2. Trust-Bar: 4 Signale mit Sublines ("Versand aus Deutschland / Schnell bei dir" · "Bis zu 5 Jahre Garantie / Auf ausgewählte Modelle" · "30 Tage Rückgaberecht / Ohne Wenn und Aber" · "Service aus Deutschland / Mo–Fr 9–16 Uhr")
3. Kategorie-Bento-Grid (asymmetrisch, von Stitch übernommen) mit Kicker-Zeilen je Kachel
4. Bestseller ("Was unsere Kunden lieben") — Karten mit Name, Kurzspec, Preis
5. Anlass-Kollektionen (4 Kacheln, IMMER farbig)
6. Brand-Story: "Heimat am Niederrhein. Licht für deine schönsten Stunden."
7. Händler-Teaser (dezent): "Du bist Händler? Werde Partner"
8. Footer: Kategorien · Service mit Telefon+Zeiten · Rechtliches · Newsletter · "© 2026 HeiPard — eine Marke der C&L Handels GmbH"

### Kollektionsseite
- Filter-Sidebar: Stromquelle, Länge, Lichtfarbe, Einsatzbereich, IP-Schutzart
- Produktkarten: Bild (warm), Stromquellen-Badge (neutraler Pill), Name, Kurzspec-Zeile, Preis
- Sortierung, Breadcrumbs, Produktanzahl

### Produktseite (Anti-Ollny — das Differenzierungs-Feature)
- Galerie: Produkt- UND Stimmungsbilder, Thumbnails inkl. Technik-Detail (Stecker/Verarbeitung)
- Spec-Kacheln: Länge, Stromquelle, Lichtfarbe, Schutzart + Garantie-Zeile (produktspezifisch via Metafield)
- Preis clean, "Inkl. MwSt." + Versandinfo-Zeile
- Mengenwähler, Warenkorb-CTA, Wunschliste
- Beschreibung als eleganter Text, dann: Technische Details (Tabelle), Installation & Pflege (Accordion), Versand & Rückgabe (Accordion)
- "Passt dazu"-Cross-Selling
- ABSOLUT VERBOTEN: Amazon-A+-Infografik-Bilder als Content, Rabatt-Badges

## 6. Referenzen & Anti-Referenzen

| Referenz | Rolle |
|---|---|
| Finales Lovable-Mockup | Primäre visuelle Referenz (Screenshots beiliegend) |
| Twinkly | Premium-Deko-Benchmark, Saisonalität |
| Nanoleaf | Light-Mode-Klarheit |
| Govee | Nur Dark-Mode-Professionalität — Tech-Kälte NICHT übernehmen |

**Anti:** Ollny-Website (billig, A+-Dumps) · leblose Statik · Tech-Spec-Kälte · generische AI-Patterns

## 7. Prototyp-Learnings (für PRODUCT.md / CLAUDE.md übernehmen)

- AI-Tools erfinden zuverlässig Herkunfts-Claims, Gründungsjahre, Garantie-Extras und Versandkonditionen → strikte Verbots- und Faktenliste nötig (siehe 2. und 8.)
- Hero-Text: nie dunkel auf dunklem Bild, Gradients minimal halten
- Bildstil-Brüche (Illustration, Graustufen, Kaltweiß) zerstören die Markenwelt sofort

## 8. Fakten-Checkliste — VOR Theme-Build intern verifizieren

- [ ] Versandkosten: "ab 4,90 € / kostenlos ab 50 €" (Prototyp-Erfindung — echte Konditionen einsetzen)
- [ ] Garantie-Staffel je Produktkategorie (2–5 Jahre, Metafield-Werte)
- [ ] "Versand aus Deutschland" faktisch korrekt?
- [ ] Service-Telefonnummer + echte Erreichbarkeitszeiten
- [ ] Standort-Wording ("Heimat am Niederrhein" ok? Jüchen vs. Willich)
- [ ] Exakter Logo-Orange-Farbwert
- [ ] "Kunden" vs. "Kund:innen" (Markenstimme-Entscheidung, aktuell: "Kunden")
- [ ] Rücksendekosten-Regelung (wer trägt sie? → AGB/Widerruf)
