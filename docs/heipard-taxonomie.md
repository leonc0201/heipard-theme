# HeiPard — Kategorie-Taxonomie (Collections + Navigation)

**Umgesetzt am 2026-08-17** (Tyler/Leon-Freigabe). Dies ist die maßgebliche
Referenz für den **Produkt-Import**: die Kollektionen sind als **Smart
Collections** (regelbasiert) angelegt und ordnen Produkte automatisch zu,
sobald diese die passenden **Tags** tragen. Der Import muss die Tags exakt
so setzen.

## Modell in Kürze

- **Haupt-Kollektion „Lichterketten"** matcht den Sammel-Tag `kat-stringlights`,
  den **alle** Lichterketten tragen (inkl. Vorhang, Netz, **und Solar-Ketten**).
- **6 Unterkategorien** matchen je einen spezifischen `kat-`Tag.
- **Solar-Lichterketten** tragen **zwei** Tags: `kat-stringlights` (→ landen in
  Lichterketten) **und** `kat-solar` (→ landen in Solar & Garten). So sind sie
  über **beide** Wege auffindbar; unter Lichterketten grenzt der
  Stromquellen-Filter (`heipard.stromquelle`) sie zusätzlich ein.
- Reine **Solar-Gartendeko** (keine Lichterkette, z. B. Laternen) trägt nur
  `kat-solar` → nur Solar & Garten.

> Warum Sammel-Tag statt Produkttyp-Match? Solar-Ketten heißen im Typ
> „Solar-Lichterkette" (enthält „Lichterkette"), aber **Vorhang** und **Netz**
> enthalten „Lichterkette" **nicht**. Ein reiner Produkttyp-Textmatch hätte
> Vorhänge/Netze aus der Haupt-Kollektion ausgeschlossen. Der Tag
> `kat-stringlights` erfasst alle sauber.

## Kollektionen (alle Smart / regelbasiert, im Onlineshop veröffentlicht)

| Kollektion (Titel)     | Handle                  | Regel: `TAG EQUALS …`        | Menü |
|------------------------|-------------------------|------------------------------|------|
| **Lichterketten**      | `lichterketten`         | `kat-stringlights`           | ✅ Hauptpunkt (mit Dropdown) |
| ├ LED String Lights    | `led-string-lights`     | `kat-led`                    | ✅ Unterpunkt |
| ├ Christmas Tree Lights| `christmas-tree-lights` | `kat-christmas-tree-lights`  | ✅ Unterpunkt |
| ├ Curtain              | `curtain`               | `kat-curtain`                | ✅ Unterpunkt |
| ├ Icicle               | `icicle`                | `kat-icicle`                 | ✅ Unterpunkt |
| ├ Cluster              | `cluster`               | `kat-cluster`                | ✅ Unterpunkt |
| └ Net                  | `net`                   | `kat-net`                    | ✅ Unterpunkt |
| **Solar & Garten**     | `solar-garten`          | `kat-solar`                  | ✅ Hauptpunkt |
| **Smart**              | `smart`                 | `kat-smart`                  | ⛔ (leer → noch nicht im Menü) |
| **Motif Lights**       | `motif-lights`          | `kat-motif`                  | ⛔ (leer → noch nicht im Menü) |
| **Weihnachtsbäume**    | `weihnachtsbaeume`      | `kat-weihnachtsbaum`         | ⛔ (leer → noch nicht im Menü) |

## Tag-Vergabe beim Import — Regeln

Jedes Lichterketten-Produkt bekommt **`kat-stringlights` + genau einen**
Unterkategorie-Tag:

- **LED String Lights** = `kat-stringlights` + `kat-led`
  → umfasst „Lichterkette (allgemein)" **und** „Batterie-Lichterkette"
    (Batterie ist eine *Stromquelle*, kein eigener Typ → über den
    `heipard.stromquelle`-Filter unterscheidbar).
- **Christmas Tree Lights** = `kat-stringlights` + `kat-christmas-tree-lights`
- **Curtain** (Lichtervorhang) = `kat-stringlights` + `kat-curtain`
- **Icicle** (Eiszapfen) = `kat-stringlights` + `kat-icicle`
- **Cluster** (Büschel) = `kat-stringlights` + `kat-cluster`
- **Net** (Lichternetz) = `kat-stringlights` + `kat-net`
- **Solar-Lichterkette** = `kat-stringlights` + `kat-solar`
  (landet in Lichterketten **und** Solar & Garten)
- **Solar-Gartendeko ohne Kette** = nur `kat-solar`

Für die (noch leeren) Hauptkategorien beim Bestücken:
`kat-smart` · `kat-motif` · `kat-weihnachtsbaum`.

## Navigation (Mega-/Dropdown-Menü)

Menü `main-menu`, gerendert über Dawns natives Dropdown
(`snippets/header-dropdown-menu.liquid`, `menu_type_desktop: dropdown`),
im HeiPard-Look gestylt (`assets/heipard-header.css` — weiche Rundung,
Marken-Schatten, Terracotta-Hover, Tag + Abend über Tokens).

```
Lichterketten ▾          Solar & Garten
 ├ LED String Lights
 ├ Christmas Tree Lights
 ├ Curtain
 ├ Icicle
 ├ Cluster
 └ Net
```

Reihenfolge nach Produktanzahl. Die leeren Hauptkategorien (Smart, Motif
Lights, Weihnachtsbäume) sind **bewusst noch nicht verlinkt** (keine toten
Leerseiten / dünnes SEO). Sobald bestückt: als Top-Level-Punkte ins
`main-menu` aufnehmen (Admin → Inhalte → Menüs, oder per API).

## Offen / Cleanup

- **Import muss die `kat-`Tags setzen** (siehe oben) — sonst bleiben die
  Smart Collections leer.
- **Alte manuelle Kollektionen `outdoor` + `camping`** stehen noch (bewusst).
  Nach verifiziertem Import löschen bzw. entscheiden, ob „Camping/Outdoor"
  als Kategorie/Filter erhalten bleibt.
- **Bento-Grid auf der Startseite** zeigt noch die alte Prototyp-Taxonomie
  (Party & Terrasse, Eiszapfen & Vorhang, Camping & Outdoor …). Kacheltitel
  + Links an die neue Taxonomie angleichen (separater Punkt, siehe
  `heipard-offene-punkte.md`).
