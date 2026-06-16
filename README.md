# heipard-theme

Shopify-Theme für **heipard.com** — Basis: Dawn (Original-Doku: `DAWN-README.md`).

## Wichtige Dateien

- `CLAUDE.md` — Arbeitsanweisung für Claude Code (Design-Tokens, Regeln, Patterns)
- `PRODUCT.md` — Markenkontext für das Impeccable-Plugin
- `docs/design-brief.md` — vollständiges Design-Brief (v2, final)
- `docs/lovable-reference/` — der freigegebene Prototyp, aufbereitet als Build-Vorlage:
  - `README.md` — destillierte Tokens, Effekte, Strukturen, exakte Texte + Halluzinations-Warnungen
  - `original-styles.css`, `original-light-switch.tsx`, `original-theme-provider.tsx`, `original-products.ts` — Kern-Originaldateien als direkte Referenz
  - `_lovable-full-export.zip` — kompletter Original-Export zum Nachschlagen (React, läuft NICHT in Shopify)
- `docs/mockups/` — Referenz-Screenshots
  - ⚠️ TODO (Leon): vollständigen finalen Screenshot-Satz ergänzen (Startseite, Kollektion, PDP — jeweils Light + Dark)

## Setup: GitHub ↔ Shopify (Daniel)

1. Im Shopify-Admin des Heipard-(Dev-)Stores: **Onlineshop → Themes → Theme hinzufügen → Über GitHub verbinden**
2. Shopify-GitHub-App autorisieren, dieses Repo + Branch `main` wählen
3. Das Theme bleibt **unveröffentlicht** bis zum Launch — jeder Push auf `main` synct automatisch ins Theme

⚠️ **Two-Way-Sync beachten:** Änderungen im Shopify Theme-Editor werden als Commits zurück ins Repo geschrieben (v.a. `config/settings_data.json` und Template-JSONs). Während der Bauphase: keine Customizer-Änderungen ohne Absprache.

## Lokale Entwicklung (Claude Code)

```bash
npm install -g @shopify/cli@latest
shopify theme dev --store <store-handle>   # Live-Preview mit Hot Reload
shopify theme check                         # vor jedem Commit
```

Voraussetzung: Store-Zugang (Collaborator-Account) für die CLI-Anmeldung.

## Workflow

- Claude Code arbeitet lokal, committet klein und fokussiert (deutsche Commit-Messages)
- Erste Session: Design-Tokens (aus lovable-reference) → Lichtschalter → Header → Startseiten-Sections
- Nach größeren Änderungen: Impeccable Slop-Detector laufen lassen
