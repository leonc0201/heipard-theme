# CLAUDE.md — Heipard Shopify Theme

## Projekt

Shopify-Theme für heipard.com (D2C-Shop für Deko- und Funktionslicht: Lichterketten, Solar, Camping, Smart). Basis: Dawn, stark angepasst. Sprachen: DE (primär) + EN via Shopify Markets. Marke der C&L Handels GmbH.

**Vollständiger Design-Kontext:** `docs/design-brief.md` + Mockup-Screenshots in `docs/mockups/` (Light + Dark Mode). `PRODUCT.md` enthält den Impeccable-Kontext. Bei Designentscheidungen IMMER zuerst dort nachsehen.

**WICHTIG — `docs/lovable-reference/`:** Das freigegebene Design existiert bereits als funktionierender Prototyp (React/Tailwind). `docs/lovable-reference/README.md` destilliert daraus die exakten Design-Tokens (OKLCH), Glow-/Transition-Effekte, Seiten-Strukturen und alle finalen Texte — VOR dem Bauen lesen und so nah wie möglich übernehmen. Optik 1:1, aber Daten-/Logik-Schicht (Produkte, Filter, Warenkorb, Navigation) neu in Liquid bauen — der Prototyp nutzt hartcodierte Demo-Daten. Abschnitt 6 dieser Referenz listet Halluzinationen (Standort "Krefeld", erfundene Versandkonditionen), die NICHT ungeprüft übernommen werden dürfen.

## Stack & Befehle

- Shopify Liquid (Dawn-Basis), CSS Custom Properties, Vanilla JS — kein Build-Framework hinzufügen
- Lokale Entwicklung: `shopify theme dev` (Live-Preview mit Hot Reload)
- Theme-Check: `shopify theme check` vor jedem Commit
- Deployment: GitHub-Integration synct den Branch automatisch mit dem (unveröffentlichten) Theme

## Design-Tokens — NICHT VERHANDELBAR

Alle Farben ausschließlich als CSS Custom Properties. KEINE hartcodierten Farbwerte in Sections, Snippets oder CSS. Zwei Modi über `data-theme` auf `<html>`:

**Light "Tag" (Default):** Hintergrund `#FAF6F0` · Text `#2B2926` · Primär/Terracotta `#C96F4A` · Tannengrün `#2D4A3E` · Logo-Orange `#E87A2E`
**Dark "Abendstimmung":** Hintergrund `#1B2433` (warmes Nachtblau, NIE reines Schwarz) · Akzente leicht aufgehellt

VERBOTEN: Teal/Türkis, Lila/Blau-Gradients, Glassmorphism, Gradient-Text.

## Der Lichtschalter (Signature-Feature)

Toggle "Tag / Abendstimmung" im Header als physischer Schalter. Sanfte Transition (~0.5s), Glow im Dark Mode. Präferenz in localStorage, Initialwert via `prefers-color-scheme`. FOUC vermeiden (Inline-Script im `<head>` vor dem Render).

## Typografie

Headlines: charaktervolle Serif (Auswahl via Impeccable `/typeset`, Richtung Fraunces/Source Serif). UI/Body: moderne Sans (Richtung Plus Jakarta Sans/Inter). Kicker-Labels: Terracotta, Uppercase, letterspaced, über Sektions-Headlines.

## Content-Regeln — RECHTLICH RELEVANT

- Ansprache durchgängig "du"
- VERBOTEN: "Made in …", "Designed in …", "Gemacht am/in …", "deutsche Ingenieurskunst", erfundene Gründungsjahre, erfundene Garantie-/Versandkonditionen. NIEMALS Fakten erfinden — fehlende Fakten als `[TBD: …]` markieren und nachfragen.
- Herkunft NUR über faktische Trust-Signale: "Versand aus Deutschland", "Service & Support aus Deutschland", "Heimat am Niederrhein" (Über-uns-Story)
- Garantie produktspezifisch via Metafield (2–5 Jahre), NIE pauschal sitewide
- Preise clean, KEINE Streichpreis-/Rabatt-Optik (compare_at_price-Logik vorbereiten, aber Default ohne Badges)
- Copyright: "© 2026 HeiPard — eine Marke der C&L Handels GmbH"

## Komponenten-Patterns (validiert im Mockup)

- Header: Kategorien direkt in der Navigation (kein generisches "Produkte"-Dropdown), Lichtschalter, Suche, Account, Warenkorb
- Startseite: Hero (weiße Headline + Akzentwort Orange, dezenter Gradient, Saison-Badge, 2 CTAs) → Trust-Bar (4 Signale mit Sublines) → Kategorie-Bento-Grid (asymmetrisch; untere Reihe: hohe Kacheln, keine flachen Banner) → Bestseller → Anlass-Kollektionen (immer farbig) → Brand-Story → Händler-Teaser → Footer
- PDP: Galerie (Produkt + Stimmung + Technik-Detail) → Spec-Kacheln aus Metafields → Garantie-Zeile → Beschreibung → Feature-Sektion (3 alternierende Bild/Text-Blöcke contained, danach 3er-Icon-Grid; befüllt via Metafields/Section-Blocks) → Accordions (Technische Details, Installation & Pflege, Versand & Rückgabe) → "Passt dazu"
- Kollektion: Filter-Sidebar (Stromquelle, Länge, Lichtfarbe, Einsatzbereich, IP) via Search & Discovery, Karten mit Stromquellen-Pill
- ABSOLUT VERBOTEN auf PDPs: Amazon-A+-Infografik-Bilder als Content, Text in Bildern

## Metafields (Namespace `heipard`)

stromquelle · laenge_m · led_anzahl · lichtfarbe · ip_schutzart · einsatzbereich · leuchtmodi · connectable · smart · garantie_jahre · feature_blocks (für PDP-Feature-Sektion)

## Workflow-Regeln

- Kleine, fokussierte Commits mit deutschen Messages
- Vor UI-Arbeit: relevanten Mockup-Screenshot in `docs/mockups/` ansehen
- Nach größeren Änderungen: Impeccable Slop-Detector laufen lassen
- Mobile-first prüfen — Großteil des Deko-Licht-Traffics ist mobil
- Offene Fakten stehen in `docs/design-brief.md` Abschnitt 8 — bei Berührungspunkten nachfragen statt raten
