# HeiPard PDP Feature-Baukasten — Anleitung für die Content-Produktion

Die PDP-Sektion **„Warum du sie lieben wirst"** ist ein kuratierbarer Baukasten:
variable Anzahl Blöcke (2–6), pro Block Bild **oder** Video, als alternierende
Bild/Text-Zeile **oder** als Full-Width-Anker. **Ganze Produktfamilien teilen sich
EIN Block-Set** — einmal pflegen, überall wirksam, kein Duplizieren pro SKU.

## Architektur (3 Bausteine)

| Baustein | Was | Wo im Admin |
|---|---|---|
| **Feature-Block** (Metaobjekt) | ein einzelner Block | Inhalte → Metaobjekte → *HeiPard Feature-Block* |
| **Feature-Set** (Metaobjekt) | benannte, geordnete Liste von Blöcken | Inhalte → Metaobjekte → *HeiPard Feature-Set* |
| **Produkt-Metafeld `heipard.feature_set`** | zeigt vom Produkt auf **ein** Set | Produkt → Metafelder → *PDP Feature-Set* |

**Präzedenz in der Section:** Hat ein Produkt ein `feature_set` → dessen Blöcke werden gerendert.
Fehlt es → die alten Section-Blöcke (Theme-Editor) dienen als **Fallback** (bestehende Produkte brechen nicht).
Das **3er-Icon-Grid** am Ende bleibt unverändert und kommt weiter aus den Section-`mini`-Blöcken im Theme-Editor.

## Ein Block-Set für eine Produktfamilie anlegen

1. **Medien hochladen:** Inhalte → **Dateien** → Bilder und/oder Videos (MP4/WebM) hochladen.
2. **Blöcke anlegen:** Inhalte → Metaobjekte → **HeiPard Feature-Block** → *Eintrag hinzufügen*, pro Block:
   - **Layout:** `media_text` (alternierende Bild/Text-Zeile) **oder** `fullwidth` (Bild/Video über volle Breite, optionaler Overlay-Text).
   - **Medientyp:** `image` oder `video`.
   - **Bild:** das Bild wählen (bei Video zugleich das Poster/Standbild).
   - **Video:** die MP4/WebM-Datei wählen (nur wenn Medientyp `video`).
   - **Medien-Seite** (nur `media_text`): `auto` (abwechselnd links/rechts — Standard), oder fest `left`/`right`.
   - **Overlay-Textfarbe** (nur `fullwidth`): `light` (heller Text auf dunklem Bild — Standard) oder `dark` (dunkler Text auf hellem Bild).
   - **Kicker / Titel / Text:** die Copy.
3. **Set anlegen:** Inhalte → Metaobjekte → **HeiPard Feature-Set** → *Eintrag hinzufügen*:
   - **Bezeichnung (intern):** z. B. „G40 Outdoor-Familie" (nur zur Wiedererkennung).
   - **Blöcke:** die gewünschten Feature-Blöcke **in der Reihenfolge** hinzufügen (2–6 empfohlen).
4. **Set den Produkten zuweisen:** bei **jedem** Produkt der Familie → Metafelder → **PDP Feature-Set** → dasselbe Set wählen.
   - Ergebnis: Alle teilen sich die Blöcke. Änderst du später einen Block oder die Reihenfolge im Set, wirkt das sofort bei allen.

## Video-Blöcke

- Format **MP4** (H.264) oder **WebM**; kompakt halten (Loop-Animation, keine langen Clips).
- Spielt automatisch, in Schleife, **stumm**, ohne Bedienelemente (autoplay/loop/muted/playsinline).
- Immer auch ein **Bild** als Poster setzen (Standbild bis das Video lädt / für reduzierte Bewegung).

## Design / Verhalten

- HeiPard-Stil, **Tag + Abendstimmung** automatisch (Farben über Tokens), großzügige Abstände.
- `media_text`-Zeilen alternieren bei `auto` automatisch (1. Bild links, 2. rechts …).
- `fullwidth` = voller Content-Breiten-Anker mit weichem Scrim hinter dem Overlay-Text.
- CSS liegt global in `assets/heipard-feature.css` (nach `base.css`) — **nicht** im Section-`{% stylesheet %}`.

## Demo & technische Referenz

- **Beispiel liegt live** am Produkt `hp-olh-g40-25` (Set „Beispiel-Set (Demo)", 2 text-only Blöcke).
  Zum Ansehen im Theme-Preview, danach löschen oder durch echten Content ersetzen.
- Definitionen: Metaobjekt `feature_block` (`…/35900358989`), `feature_set` (`…/35900391757`),
  Produkt-Metafeld `heipard.feature_set` (`…/404543242573`).
- Theme: `sections/heipard-feature.liquid`, `snippets/heipard-feature-block.liquid`, `assets/heipard-feature.css`.
