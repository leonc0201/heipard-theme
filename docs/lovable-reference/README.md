# Lovable-Referenz für den Theme-Build

Diese Datei destilliert den freigegebenen Lovable-Prototyp (React/TanStack/Tailwind v4) in das, was für den Shopify-Liquid-Build zählt. Der vollständige Original-Export liegt daneben als `_lovable-full-export.zip` (zum Nachschlagen, NICHT zum Kopieren — es ist React, läuft nicht in Shopify).

**Goldene Regel:** Optik (CSS, Werte, Texte, Struktur) so nah wie möglich übernehmen. Logik (Produkte, Filter, Warenkorb, Navigation) komplett neu in Liquid — der Prototyp nutzt hartcodierte Demo-Daten.

---

## 1. Design-Tokens (exakt übernehmen)

Der Prototyp nutzt OKLCH-Farben über CSS Custom Properties, umgeschaltet per `.dark`-Klasse auf `<html>`. Diese Werte 1:1 in Dawns Token-System übernehmen.

**Light "Tag" (`:root`):**
```
--background: oklch(0.965 0.018 75);   /* warmes Creme */
--foreground: oklch(0.24 0.018 60);    /* Warm-Charcoal */
--card: oklch(0.985 0.012 80);
--primary: oklch(0.62 0.135 42);       /* Terracotta */
--primary-foreground: oklch(0.98 0.01 80);
--secondary: oklch(0.38 0.045 158);    /* Tannengrün */
--muted: oklch(0.93 0.018 75);
--muted-foreground: oklch(0.45 0.025 60);
--accent: oklch(0.92 0.04 70);
--border: oklch(0.88 0.02 70);
--ring: oklch(0.62 0.135 42);
--brand: oklch(0.7 0.16 50);           /* Logo-Orange */
--glow: oklch(0.78 0.17 65);           /* Glow-Farbe für Schatten */
--radius: 0.5rem;
```

**Dark "Abendstimmung" (`.dark`):**
```
--background: oklch(0.235 0.04 245);   /* warmes Nachtblau, KEIN Schwarz */
--foreground: oklch(0.95 0.015 75);
--card: oklch(0.28 0.038 245);
--primary: oklch(0.72 0.14 45);
--secondary: oklch(0.55 0.06 158);
--muted: oklch(0.31 0.035 245);
--muted-foreground: oklch(0.72 0.025 75);
--accent: oklch(0.34 0.045 245);
--border: oklch(0.38 0.03 245);
--brand: oklch(0.78 0.16 55);
--glow: oklch(0.82 0.18 65);
```

**Schriften:** Display = "Fraunces" (Serif, weight 500, letter-spacing -0.02em für h1–h4) · Body/UI = "Inter". Beide via Google Fonts oder lokal einbinden.

## 2. Signature-Effekte (CSS — direkt portierbar)

**Theme-Transition ("Licht-Puls" beim Umschalten):** beim Toggle Klasse `theme-transitioning` auf `<html>` setzen, nach 750ms entfernen. Erzeugt einen radialen Glow-Overlay-Puls:
```css
.theme-transitioning::after {
  content: ""; position: fixed; inset: 0; pointer-events: none; z-index: 9999;
  background: radial-gradient(ellipse at center,
    color-mix(in oklch, var(--glow) 35%, transparent) 0%, transparent 70%);
  animation: light-pulse 700ms ease-out;
}
@keyframes light-pulse { 0%{opacity:0} 35%{opacity:1} 100%{opacity:0} }
```
Body-Transition zusätzlich: `background-color`/`color` über 700ms `cubic-bezier(0.22,1,0.36,1)`.

**Glow-Utilities** (für Karten-Hover, CTAs):
```css
glow-soft:   box-shadow: 0 1px 2px color-mix(in oklch,var(--foreground) 8%,transparent),
                         0 8px 24px -8px color-mix(in oklch,var(--glow) 25%,transparent);
glow-strong: box-shadow: 0 2px 4px color-mix(in oklch,var(--foreground) 10%,transparent),
                         0 16px 48px -12px color-mix(in oklch,var(--glow) 55%,transparent);
text-glow:   text-shadow: 0 0 24px color-mix(in oklch,var(--glow) 60%,transparent);
```

**Reveal-on-Scroll:** Elemente starten mit `opacity:0; translateY(20px)`, bekommen bei Sichtbarkeit `reveal-in` (→ `opacity:1; translateY(0)`, 800ms ease-out). Im Prototyp via IntersectionObserver (threshold 0.12, rootMargin `0px 0px -60px 0px`). In Liquid: kleines Vanilla-JS-Snippet, identische Logik, Selektor `[data-reveal]`.

**Logo-Flicker:** der kleine Punkt neben "HeiPard" flackert dezent: `@keyframes flicker { 0%,100%{opacity:1} 45%{opacity:0.92} 47%{opacity:1} }` über 6s infinite.

## 3. Lichtschalter (Pattern)

Header-Toggle, gestaltet als physischer Kippschalter (Breite 60px, Höhe 36px, runder Knopf 28px der von links nach rechts wandert). Im Dark-Zustand: Knopf in Orange-Verlauf mit Glow-Boxshadow + kleiner "Filament"-Punkt. Labels "Tag"/"Abend".
- Logik: `localStorage`-Key `heipard-theme` (`"light"`/`"dark"`), Initialwert aus `prefers-color-scheme`
- WICHTIG für Shopify/Liquid: Inline-Script im `<head>` VOR dem Render, das die gespeicherte Präferenz sofort als `.dark` setzt → verhindert FOUC (Theme-Flash). Im React-Prototyp ist das nicht nötig, in serverseitig gerendertem Liquid schon.
- Toggle-Ablauf: `theme-transitioning` setzen → nach 120ms `.dark` umschalten + speichern → nach 750ms `theme-transitioning` entfernen.

## 4. Seiten-Struktur & exakte Texte

### Header
Logo "HeiPard" (Fraunces, Farbe `--brand`) + flackernder Punkt · Nav: Lichterketten · Outdoor · Solar & Garten · Camping · Smart · rechts: Lichtschalter, Suche, Konto, Warenkorb. Sticky, `bg-background/85 backdrop-blur-md`, untere Border.

### Startseite (Reihenfolge)
1. **Hero:** Höhe ~78vh (min 600px). Vollbild, zwei dunkle Gradients (von unten `from-black/65`, von links `from-black/40`). Badge "Saison 2026 — frisch eingetroffen". H1 (Fraunces, weiß): „Lasse deine Welt / *erleuchten.*" — "erleuchten" in `oklch(0.88 0.13 70)`. Subline: „Lichterketten, Solarlaternen und Camping-Lichter für Momente, an die du dich noch lange erinnerst." Zwei CTAs: "Jetzt entdecken" (primary, glow-strong), "Bestseller ansehen" (outline auf Glas).
2. **Kategorie-Bento:** Kicker "Kollektionen", H2 "Finde dein Licht". Grid `grid-cols-2 md:grid-cols-6`, `auto-rows-[200px]`. Belegung: Party & Terrasse `col-span-4 row-span-2` · Eiszapfen & Vorhang `col-span-2 row-span-3` · Lichterketten `col-span-2 row-span-2` · Solar & Gartendeko `col-span-2 row-span-2` · Camping & Outdoor `col-span-3 row-span-1` · Smart Lighting `col-span-3 row-span-1`. Kicker-Texte je Kachel: siehe `categories`-Array unten.
3. **Trust-Bar:** 4 Spalten mit Icon + Titel + Subline (exakt): „Versand aus Deutschland / Schnell bei dir" · „Bis zu 5 Jahre Garantie / Auf ausgewählte Modelle" · „30 Tage Rückgaberecht / Ohne Wenn und Aber" · „Service aus Deutschland / Mo–Fr 9–16 Uhr".
4. **Bestseller:** Kicker "Bestseller", H2 "Was unsere Kunden lieben", 4 Produktkarten.
5. **Anlässe:** Kicker "Anlässe", H2 "Für jeden Moment das passende Licht", 4 Kacheln (aspect 3/4): Weihnachten · Garten & Balkon · Camping · Hochzeit & Party.
6. **Brand-Story:** Kicker "Über HeiPard", H2 „Heimat am Niederrhein. / *Licht für deine schönsten Stunden.*" Text: „HeiPard ist zuhause am Niederrhein. Wir entwickeln Lichter, die Räume verwandeln und Abende verlängern. Jede Lichterkette wird geprüft, bevor sie zu dir reist — und unser Service spricht deine Sprache."
7. **Händler-Teaser:** „Du bist Händler? / Werde HeiPard-Partner und biete unsere Kollektion in deinem Geschäft an." + Button "Partner werden".

### Produktkarte (Pattern)
Quadratisches Bild in `rounded-xl bg-muted`, Hover → `glow-strong` + Bild scale 1.04 (1200ms) + radialer Glow-Overlay. Darunter: Name (medium) links, Preis rechts (`x,xx €`, Komma), Subtitle in muted.

### Produktseite
Breadcrumb · Layout `lg:grid-cols-[1.15fr_1fr]`. Galerie: Thumbnail-Spalte (80px) links + großes Bild rechts, aktives Thumbnail mit `border-primary`. Info-Spalte: Kicker (Kategorie) · H1 · Subtitle · Preis groß · Spec-Badges 2×2 (Länge/Stromquelle/Lichtfarbe/Schutzart, je Icon+Label+Wert) · Garantie-Zeile mit Schild-Icon · Mengenwähler + "In den Warenkorb" (glow) + Merken-Herz · Beschreibungstext · 3 Accordions (Technische Details [Standard offen], Installation & Pflege, Versand & Rückgabe).
**Feature-Sektion "Warum du sie lieben wirst"** (H2 „Kleine Details, *große Wirkung.*"): 3 alternierende Bild/Text-Blöcke (aspect 5/4, glow-soft, jeder zweite gespiegelt via order), Texte siehe unten. Danach 3er-Mini-Grid mit Icon+Label+Text (Timer-Funktion, 8 Leuchtmodi, Koppelbar). Abschluss: "Passt dazu" mit 4 Related-Produkten.

**Feature-Block-Texte (exakt):**
- *Warmes Licht* — „Licht, das den Abend verlängert." — „Das warmweiße Leuchten verwandelt deine Terrasse oder dein Wohnzimmer in einen Ort, an dem du gerne länger bleibst. Kein kaltes LED-Flackern, sondern echte Stimmung — so, wie du sie willst."
- *Gebaut für draussen* — „Regen? Kein Thema." — „Vergossene Fassungen, robuste Kabel und IP-geprüfte Verbindungen halten Wetter aus, wenn dein Abend draußen länger wird. Lass sie hängen — auch wenn der Sommerregen kommt."
- *In Minuten aufgebaut* — „Auspacken, aufhängen, anknipsen." — „Beiliegende Clips und ein durchdachtes Kabelmanagement machen das Aufhängen einfach. Innerhalb weniger Minuten leuchtet dein Abend — ohne Fummelei, ohne Werkzeugkiste."

### Kollektionsseite
Breadcrumb · H1 + Beschreibung · Produktzähler + Sortier-Select (Empfohlen/Preis auf/Preis ab/Neuheiten). Layout `lg:grid-cols-[260px_1fr]`. Filter-Sidebar (sticky), Gruppen: Stromquelle (Netz/Solar/Batterie/Akku) · Länge (bis 5 m / 5–10 m / 10–20 m / über 20 m) · Lichtfarbe (Warmweiß/Kaltweiß/Multicolor/RGB) · Einsatzbereich (Innen/Außen) · IP-Schutzart (IP20/IP44/IP54/IP65). Produkt-Grid `sm:grid-cols-2 xl:grid-cols-3`.
→ In Shopify: Filter über Search & Discovery + Metafields, NICHT hartcodiert.

## 5. Demo-Produktdaten

Die 6 Demo-Produkte in `_lovable-full-export.zip` → `src/lib/products.ts` zeigen das gewünschte Feldschema (slug, name, subtitle, price, length, power, color, ip, warranty, category). Das ist die Vorlage fürs **Metafield-Schema** (siehe CLAUDE.md). Inhalte sind Platzhalter — echte Produkte kommen über den Shopify-Import.

## 6. ⚠️ ACHTUNG — diese Halluzinationen NICHT übernehmen

Der Prototyp enthält noch erfundene Fakten. Beim Liquid-Build durch echte Werte ersetzen oder als `[TBD]` offen lassen (siehe `docs/design-brief.md` Abschnitt 8):

- **"aus Krefeld" / "aus Krefeld versandt"** (Produktseite, Accordion "Versand & Rückgabe") — Standort intern verifizieren (Jüchen vs. Willich vs. Krefeld). NICHT ungeprüft übernehmen.
- **"Versandkosten ab 4,90 € · Kostenlos ab 50 €"** (Produktseite) — echte Versandkonditionen einsetzen.
- **"Versand innerhalb von 1–2 Werktagen"** — verifizieren.
- **Garantiewerte (2/3/5 Jahre) pro Demo-Produkt** — sind Platzhalter, echte Staffel je Produkt via Metafield.
- **"Bis zu 5 Jahre Garantie"** in der Trust-Bar — nur korrekt, wenn es tatsächlich ein 5-Jahre-Produkt gibt.
- Generell: KEINE Herkunfts-Claims ("Made in", "deutsche Ingenieurskunst" etc.) — die sind hier zwar schon entfernt, aber beim Texten nicht neu einführen.
