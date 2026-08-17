# HeiPard Produkt-Import — Welle 2 (Texte & Metafelder veredeln)

**Status: vorbereitet, wartet auf Leons Go + Infos (Dubletten, fehlende Bilder Shenzhen).**
Grundlage: die 85 Draft-Produkte aus Welle 1 (`heipard-import-welle1.md`). Serienweise in
Batches à ~10–15 Produkte, **mit Leons Kontrolle pro Batch**. Nichts wird ohne Freigabe aktiviert.

## Pro Produkt/Serie in Welle 2

1. **Titel** — markengerecht umschreiben (natürlich, „du"-Umfeld), aber **SEO-tauglich**: Produkttyp,
   Länge, Lichtfarbe, „außen/innen" im Titel behalten. Kein Amazon-Keyword-Stuffing.
2. **Beschreibung** — neu, markengerecht, strukturiert, echte Merkmale. **Keine erfundenen Fakten**
   (keine Herkunft, keine erfundene Garantie/Zertifikate). Unklares weglassen. Original-Amazon-Text
   als Referenz in `records.json` (Import-Arbeitsverzeichnis).
3. **Restliche Metafelder** aus Titel/Text extrahieren — mit Augenmaß, im Zweifel leer.
4. `heipard.subtitle` setzen (Karten-Kurztext, z. B. „16 LED · Solar · Warmweiß").

## Vorbedingung (vor dem ersten Batch)

- **IP45 zur `ip_schutzart`-Auswahlliste hinzufügen** — taucht in vielen Serien auf (OL/OLA/OLS/…),
  fehlt aber in `[IP20,IP44,IP54,IP65,IP67]`. Sonst Validierungsfehler. (Einmaliger
  `metafieldDefinitionUpdate`, on-go.)

## Metafeld-Extraktion — Methodik & bekannte Fallen

Ein Skript (`extract_welle2.py`) zieht **Kandidatenwerte** aus Titel+Amazon-Text und legt sie als
Review-Sheet ab (`welle2_candidates.csv`). Die Werte sind **Vorschläge, nicht final** — pro Batch prüfen.
Bekannte Heuristik-Fallen (bewusst nicht auto-übernehmen):

- **`led_anzahl`** fängt teils den Leuchtmittel-Code statt der Zahl: `S11`→„11", `ST38`→„38",
  `G40`→(ok, kein LED-Match). → echte LED/Birnen-Zahl aus dem Titel bestätigen.
- **`smart`** wird durch Marketing-Floskel „**Smart & praktisch**" fälschlich `true` (OL-Serie ist
  NICHT app-fähig). Nur OLA (App-Steuerung), RGB/RFM/RIT/RNM/RTM (Smart/App) sind echt smart.
- **`beleuchtete_laenge_m`** nimmt die Titel-Länge; echte *beleuchtete* Länge kann abweichen
  (z. B. OLA G40: Titel „10M" vs. Text „beleuchtete Länge 20m"). `gesamtlaenge_m` separat.
- **`farbtemperatur_kelvin`**: OL/OLA-Familie durchgängig 2200K (Bernstein), andere 2700–3000K.
- **`spannung_v`**: 24V (Netz-Outdoor), 5V (USB-Vorhang), 2,4V (Solar) — plausibilisieren.

## Vorgeschlagene Batch-Gruppierung (nach Kategorie, für konsistente Copy)

33 Serien / 85 Produkte. Reihenfolge/Zuschnitt anpassbar:

| # | Batch | Serien | Produkte |
|---|---|---|---|
| 1 | Outdoor G40/S14-Ketten (App) | OLA (6), OLH G40 (5) | 11 |
| 2 | Outdoor S11/ST38/G40 (Netz) | OL (13) | 13 |
| 3 | Weihnachtsbaum-Ketten (Ring) | CTL (6), OLG (3) | 9 |
| 4 | Cluster-/Fairy-Ketten | OLT (7), DFM (3) | 10 |
| 5 | Solar | OLS (6), SBLB (4), SCWL (2), SOLM (1) | 13 |
| 6 | Vorhang & Netz & Eisregen | CSL (2), DCT, RCT, UCP, UCT, DNM, RNM, ISL (2), VIT (2), RIT | 14 |
| 7 | Batterie & Camping & klein | BLM, BLT, BSL (3), CL (2) | 7 |
| 8 | Smart/RGB & Rest | RGB (2), RFM, RTM, DLM, TPM, VAM, VLM, RSP | 8 |

## Mechanik (on-go, pro Batch)

- **Titel + Beschreibung:** `productUpdate(input: {id, title, descriptionHtml})`.
- **Metafelder:** `metafieldsSet` (bis 25/Call; Zahlen als String, Booleans „true"/„false").
- Reihenfolge je Batch: Kandidaten zeigen → Leon prüft/korrigiert → anwenden → kurz melden.
- **Dubletten** (`HP-SBLB-*-WW` vs. `…-NEW`): erst nach Tylers Klärung, welches Listing aktuell ist.
- **Aktivierung** (draft→active) erst nach Abschluss aller Batches + Freigabe.
