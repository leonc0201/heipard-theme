# HeiPard — Projektstand & Einstieg (START HIER)

Kurzer Einstieg für eine frische Session (egal welcher Rechner). Verbindliche Regeln: **`../CLAUDE.md`**.
Vor jeder Session: **`git pull --ff-only`** (Daniel arbeitet parallel).

## Aktueller Stand (Stand 2026-10-19)

- **Theme:** komplett — Startseite, Header/Footer (Lichtschalter, DE/EN), PDP, Kollektionsseite, Saison-Block.
- **Taxonomie:** neu aufgebaut — **11 Smart Collections** (regelbasiert über `kat-`Tags) + **Mega-/Dropdown-Menü**.
  Solar-Doppelweg (`kat-stringlights` + `kat-solar`). Details: `heipard-taxonomie.md`.
- **Produkt-Import Welle 1:** **85 Produkte als Draft** angelegt (89 SKUs, 4 Varianten-Gruppen). Bilder rehosted,
  Metafelder `stromquelle`/`lichtfarbe` gesetzt. Details + todo-Listen: `heipard-import-welle1.md`.
- **Produkt-Import Welle 1b** (2026-10-02): 36 neue Produkte und 42 Varianten an bestehenden Produkten,
  Bericht `heipard-import-welle1b-bericht.md`. **Seit 2026-10-05 sind alle 119 Produkte aktiv** im Onlineshop
  (Shop weiter passwortgeschützt, nicht auf der Shop-App).
- **Produkt-Import Welle 2:** vorbereitet, **wartet auf Go** — batchweise mit Leons Kontrolle. Plan +
  Extraktions-Methodik + Batch-Gruppierung: `heipard-welle2-plan.md`.
- **PDP Feature-Baukasten:** Blöcke über Metaobjekte (`feature_set` → `feature_block`), Familien teilen ein Set.
  Seit 2026-10-01 Ausbau nach `heipard-block-vokabular.md` in drei Stufen. **Stufe 1 fertig:** Kettenplan,
  Zeitband, Serienleiter, Text schmal, Steuerung (Dimmregler + Modi), Icon-Grid aus Metafeldern, drei
  Dramaturgie-Vorlagen (`heipard.dramaturgie`), Referenz-Set OL-G40 an `hp-ol-30`/`hp-ol-50`.
  **Stufe 2 fertig:** Hotspot, Lieferumfang, Schieber Aus/An, Kelvin-Skala, Nachweise, Kennzahl, Fragen
  (Metaobjekt `product_question`, Metafelder `fragen`, `ce_kennzeichnung`, IP45 in der Auswahlliste).
  **Stufe 3 fertig:** Sequenz, Farbwechsel (Überblendung und RGB-Regler), Zäsur, B2 mit Variante sticky.
  Damit sind alle 20 Block-Typen umgesetzt. Offen sind Inhalte (Bilder, Texte, Fragen) je Familie.
  **Seit 2026-10-01 gilt:** leere Dramaturgie = `longtail`, die generischen Fallback-Blöcke im
  Produkt-Template sind geleert, Familien-Kollektionen (`familie-…`) sind ausgeblendet (Liste, noindex,
  Sitemap über `seo.hidden`), OL-G40 ist mit Bildern, Texten und Fragen befüllt.
  Anleitung: `heipard-feature-baukasten.md`.
- **Feature-Sets Welle 2** (2026-10-21): 11 Sets für die zehn Welle-2-Familien, 40 Blöcke, 38 Fragen,
  Familien-Kollektionen für alle zehn Codes; zweiter Durchlauf mit Schieber-, Hotspot- und Kategoriebildern
  erledigt, offen DFM_B2_01 und die Übertragung von HOME-11 aufs Live-Theme (Sync). Bericht `heipard-feature-sets-welle2-bericht.md`.
- **PDP-Galerie** (2026-10-19): Vorschaubilder als Spalte links, Farbfilter über `heipard.galerie_medien`,
  live geprüft. Details im Abschnitt „PDP-Galerie" unten.

## Nächste Schritte / offen

1. **Welle 2** starten (auf Leons Go), Vorschlag Batch 1 = OLA/OLH G40-Ketten. Danach restliche Serien.
2. ~~Dubletten `HP-SBLB-100L-WW` / `HP-SBLB-60L-WW`~~ in Welle 1b gelöscht (2026-10-02), die -NEW-Fassungen bleiben.
3. **Fehlende Bilder** (Shenzhen) für 9 `todo-bild`-Produkte nachhängen.
4. ~~IP45 zur `ip_schutzart`-Auswahlliste ergänzen~~ erledigt am 2026-10-01.
5. **Leere Kategorien** (Smart/Motif/Weihnachtsbäume) ins Menü, sobald bestückt; `outdoor`/`camping` (leer) aufräumen.
6. ~~Aktivierung~~ auf Leons Freigabe am 2026-10-05 erledigt (alle 119 aktiv, Shop passwortgeschützt).
7. **Bento-Grid** auf Startseite an neue Taxonomie angleichen.
8. Restliche gebündelte `[TBD]` (Versand/Telefon/Rechtstexte/DSGVO-Fonts/Search-&-Discovery-Facetten): `heipard-offene-punkte.md`.

## Doku-Landkarte (`docs/`)

| Datei | Inhalt |
|---|---|
| `projektstand.md` | **dieser** Einstieg/Status |
| `heipard-taxonomie.md` | Collections, Handles, kat-Tag-Regeln, Navi |
| `heipard-import-welle1.md` | Welle-1-Import: Ergebnis, Felder, todo-Listen |
| `heipard-welle2-plan.md` | Welle-2-Plan, Metafeld-Extraktion, Batches |
| `heipard-feature-baukasten.md` | PDP-Feature-Baukasten für die Content-Produktion |
| `heipard-block-vokabular.md` | Block-Vokabular (20 Typen), Dramaturgien, Bildspezifikation, Vorgabe fürs Theme |
| `heipard-import-welle1b*.md` | Welle 1b: Spezifikation, Trockenlauf-Plan, Abschlussbericht |
| `heipard-offene-punkte.md` | laufende [TBD]-Liste |
| `design-brief.md`, `lovable-reference/`, `../PRODUCT.md` | Design-Grundlage (vor UI-Arbeit lesen) |

## PDP-Galerie (Stand 2026-10-19)

- **Vorschaubilder als Spalte links** (Desktop ab 990 px): sechs Kacheln neben dem quadratischen Hauptbild,
  Spalte plus Hauptbild so breit wie die Medienhälfte. Ist das Hauptbild durch Dawns „constrain to viewport"
  begrenzt, richtet sich die Kachelgröße nach dieser Höhe. Rest per Mausrad, Touch und zwei Pfeilen
  (vorheriges/nächstes Bild); die aktive Kachel gleitet bei Klick, Pfeil und Variantenwahl in den sichtbaren
  Bereich. Tablet und Handy unverändert (Streifen unter dem Bild). Dateien: `snippets/product-media-gallery.liquid`
  (Parameter `heipard_rail`), CSS in `assets/heipard-product.css`, Logik in `assets/heipard-gallery.js`.
- **Farbfilter über `heipard.galerie_medien`** (Varianten-Metafeld, `list.file_reference`, gepflegt von der
  Asset-Instanz): Sichtbar sind die Liste der gewählten Variante, ihr Variantenbild und alle Medien, die in keiner
  Liste stehen. Ohne Liste für die gewählte Variante wird nicht gefiltert. Beim Laden filtert Liquid (Klasse
  `heipard-media--filtered`), beim Variantenwechsel `heipard-gallery.js` aus dem JSON `script[data-heipard-galerie]`,
  ohne zusätzlichen Serverabruf. Gefiltert werden Hauptbilder, Vorschaubilder und Lightbox. Kein
  Storefront-API-Aufruf; das Feld hat Storefront-Zugriff NONE, Liquid liest es trotzdem.
- **Ausnahme von Dawns `hide_variants`:** Hat die gewählte Variante eine Liste, gelten Position 1 und alle Medien
  der eigenen Liste nicht als Bilder anderer Varianten (`hp_keep_media` in `sections/main-product.liquid`, an
  Galerie und Lightbox übergeben). Reihenfolge bleibt Dawn-Standard: Variantenbild vorn und aktiv, Position 1 an
  zweiter Stelle.
- **Drei Korrekturen aus dem Live-Test (2026-10-19):**
  1. Die Ausnahme gilt für die ganze eigene Liste, nicht nur für Position 1 (hp-dct-200: das Variantenbild von
     3 x 2 m Kaltweiß steht in der Liste von 3 x 3 m Kaltweiß und wurde ausgeblendet).
  2. Die Vorschaubilder folgen nach dem Wechsel der Reihenfolge der Hauptbilder. Dawn sortiert nur die
     Hauptbilder neu und stellt bei den Vorschaubildern lediglich das neue Variantenbild nach vorn.
  3. Die Spalte hat weder Scroll-Verankerung noch Einrasten (`overflow-anchor: none`, `scroll-snap-type: none`),
     sonst springt sie beim Variantenwechsel erst um eine Kachelhöhe.
- **Akzeptierte Eigenheit:** Schrumpft die Spalte beim Variantenwechsel stark (z. B. 13 auf 7 Kacheln), kürzt der
  Browser die Scrollposition im Moment des Wechsels; danach gleitet sie nach oben.
- **Geprüft** live an hp-npt-210, hp-dct-200, hp-ola-s14-15-eu, hp-isl-264 und hp-dfm-400-eu-2, Desktop und Handy,
  mit echter Variantenwahl: sichtbare Medien je Variante gegen eine aus den Admin-Daten berechnete Erwartung,
  Lightbox- und Handy-Zähler, Laufruhe der Spalte. Offene Punkte: `heipard-offene-punkte.md`, Abschnitt Produktgalerie.

## Auf einem anderen Rechner weiterarbeiten (z. B. Home-PC)

1. **Repo holen:** `git clone https://github.com/leonc0201/heipard-theme` → dann immer `git pull` vor der Arbeit.
   Damit sind CLAUDE.md + alle `docs/` sofort da (das Projekt-„Gehirn" reist im Git mit).
2. **Shopify-Zugriff (Store-Daten):** in Claude den **Shopify-MCP-Connector** (claude.ai → Connectors) mit dem
   heipard-Store verbinden. Vor Schreibzugriffen `get-shop-info` prüfen (Connector war anfangs mal auf LUMOnova).
3. **Shopify CLI** (für `theme dev`/`push`): mit dem **Konto einloggen, das heipard-Zugriff hat** — ein Konto
   ohne Zugriff bricht mit „you don't have access to this dev store" ab (`shopify auth logout` + neu einloggen).
4. **gh CLI** (GitHub) einmal authentifizieren.
5. **Maschinen-spezifisch:** Node-/CLI-Pfade unterscheiden sich pro Rechner. Die konkreten Pfade in `CLAUDE.md`
   (z. B. `shopify.cmd`-Ort) gelten für den Firmen-PC — auf dem Home-PC ggf. anpassen.
6. **Claudes lokales Gedächtnis** (Präferenzen wie „Deutsch", Marken-Content-Regeln) liegt pro Rechner lokal und
   reist NICHT im Repo. Die entscheidenden Regeln stehen aber in `CLAUDE.md` — daher genügt das Repo fürs Projekt.

## Theme-Änderungen prüfen (Stand 2026-10-01)

- **Sync-Kontrolle:** Die GitHub-Integration überträgt nur Dateien, die sich in einem Commit ändern. Scheitert
  ein Sync, fehlt die Datei im Theme dauerhaft, bis sie erneut geändert wird (so geschehen bei
  `layout/theme.liquid` und `snippets/heipard-feature-block.liquid`). Kontrolle per Admin-API:
  `theme(id).files { filename checksumMd5 }` gegen `git show HEAD:<datei> | md5sum` vergleichen.
- **Rendering abrufen trotz Shop-Passwort:** `product.onlineStorePreviewUrl` (Admin-API) liefert einen Link mit
  `preview_key` und `_bt` (Passwort-Bypass, eine Stunde gültig). Erst
  `https://heipard.myshopify.com/?_bt=<token>&preview_theme_id=<theme>` mit Cookie-Jar aufrufen, danach
  `https://heipard.myshopify.com/products_preview?preview_key=<key>&preview_theme_id=<theme>`. So lassen sich auch
  Entwurfs-Produkte auf dem Preview-Theme `zz-feature-preview` (#194736095565) als HTML prüfen.
- **Live-Seiten mit Storefront-Passwort:** Seit alle Produkte aktiv sind, liefert `onlineStorePreviewUrl` keinen
  `_bt` mehr (den gibt es nur für Entwürfe). Stattdessen `/password` aufrufen, das Storefront-Passwort eintragen
  (bei Leon, gehört nicht ins Repo) und das Cookie weiterverwenden (curl `-c`/`-b` oder Puppeteer). Für Aufnahmen
  den Cookie-Banner per CSS ausblenden, nicht zustimmen.
- **Preview-Theme ohne CLI befüllen:** Branch zu GitHub pushen, dann `themeFilesUpsert` mit `body.type: URL` und
  der Raw-URL der Datei (geht nur, solange das Repo öffentlich ist; Stand 2026-10-19 öffentlich, Umstellung auf
  privat geplant, dann Inhalt direkt als `body.type: TEXT` senden). Das Live-Theme lässt sich so nicht beschreiben, dafür gibt es den Sync.
- **Lokaler Vorab-Test:** LiquidJS (`npm i liquidjs`) verhält sich wie Shopify-Liquid. python-liquid nicht
  (`3 >= 3` ist dort falsch, `nil == blank` ebenfalls).

## Nicht im Git (bei Bedarf mitnehmen)

- **Import-Quelldaten** für Welle 2: `HeiPard_Shopify_Import.json` (aktuell im Downloads-Ordner des Firmen-PCs)
  + das aufbereitete `records.json` (Amazon-Original-Texte als Referenz). Für Welle 2 auf einem anderen Rechner
  entweder mitnehmen oder das Aufbereitungs-Skript erneut laufen lassen. (Bei Bedarf ins Repo unter `docs/data/` legen.)
