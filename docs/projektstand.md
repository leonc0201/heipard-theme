# HeiPard — Projektstand & Einstieg (START HIER)

Kurzer Einstieg für eine frische Session (egal welcher Rechner). Verbindliche Regeln: **`../CLAUDE.md`**.
Vor jeder Session: **`git pull --ff-only`** (Daniel arbeitet parallel).

## Aktueller Stand (Stand 2026-08-17)

- **Theme:** komplett — Startseite, Header/Footer (Lichtschalter, DE/EN), PDP, Kollektionsseite, Saison-Block.
- **Taxonomie:** neu aufgebaut — **11 Smart Collections** (regelbasiert über `kat-`Tags) + **Mega-/Dropdown-Menü**.
  Solar-Doppelweg (`kat-stringlights` + `kat-solar`). Details: `heipard-taxonomie.md`.
- **Produkt-Import Welle 1:** **85 Produkte als Draft** angelegt (89 SKUs, 4 Varianten-Gruppen). Bilder rehosted,
  Metafelder `stromquelle`/`lichtfarbe` gesetzt. Details + todo-Listen: `heipard-import-welle1.md`.
- **Produkt-Import Welle 2:** vorbereitet, **wartet auf Go** — batchweise mit Leons Kontrolle. Plan +
  Extraktions-Methodik + Batch-Gruppierung: `heipard-welle2-plan.md`.
- **PDP Feature-Baukasten:** neu — kuratierbare Blöcke (2–6, Bild/Video, alternierend/Full-Width) über
  Metaobjekte (`feature_set` → `feature_block`), Familien teilen ein Set. Anleitung: `heipard-feature-baukasten.md`.

## Nächste Schritte / offen

1. **Welle 2** starten (auf Leons Go), Vorschlag Batch 1 = OLA/OLH G40-Ketten. Danach restliche Serien.
2. **Dubletten** (Tyler klärt): `HP-SBLB-100L-WW` vs. `…-WW-NEW`, `HP-SBLB-60L-WW` vs. `…-NEW`.
3. **Fehlende Bilder** (Shenzhen) für 9 `todo-bild`-Produkte nachhängen.
4. **IP45** zur `ip_schutzart`-Auswahlliste ergänzen (Welle-2-Vorbedingung).
5. **Leere Kategorien** (Smart/Motif/Weihnachtsbäume) ins Menü, sobald bestückt; `outdoor`/`camping` (leer) aufräumen.
6. **Aktivierung** aller Produkte (draft→active) erst nach Welle 2 + Leons Freigabe.
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
| `heipard-offene-punkte.md` | laufende [TBD]-Liste |
| `design-brief.md`, `lovable-reference/`, `../PRODUCT.md` | Design-Grundlage (vor UI-Arbeit lesen) |

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

## Nicht im Git (bei Bedarf mitnehmen)

- **Import-Quelldaten** für Welle 2: `HeiPard_Shopify_Import.json` (aktuell im Downloads-Ordner des Firmen-PCs)
  + das aufbereitete `records.json` (Amazon-Original-Texte als Referenz). Für Welle 2 auf einem anderen Rechner
  entweder mitnehmen oder das Aufbereitungs-Skript erneut laufen lassen. (Bei Bedarf ins Repo unter `docs/data/` legen.)
