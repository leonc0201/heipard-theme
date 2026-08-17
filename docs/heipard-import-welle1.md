# HeiPard Produkt-Import — Welle 1 (Grundgerüst)

**Ausgeführt am 2026-08-17.** Quelle: `HeiPard_Shopify_Import.json` (90 aktive Amazon-SKUs).
Alle Produkte als **Entwurf (draft)** angelegt — **nichts aktiv**. Zuordnung zu den
Smart Collections läuft automatisch über die `kat-`Tags (siehe `heipard-taxonomie.md`).

## Ergebnis

- **85 Produkte** angelegt (alle **draft**), aus **89 SKUs**:
  - 81 Einzelprodukte + **4 Varianten-Gruppen** (Option „Lichtfarbe", je Warmweiß + Multicolor):
    `HP-CTL-210(-M)`, `HP-CTL-400(-M)`, `HP-SCWL-10M2P (WW/MC)`, `HP-SCWL-15M2P (WW/MC)`.
  - **1 SKU übersprungen:** `HP-U20-200-EU-VINE` (Lichterschlauch, kein Produkttyp — laut Spec weglassen).
- **Bilder** serverseitig von Amazon-CDN nach Shopify re-hosted (via `productSet` → `files.originalSource`),
  in 2000px. 9 Produkte ohne Bild → Tag `todo-bild`.
- **Smart-Collection-Zuordnung verifiziert** (Stichprobe): `led-string-lights`, `curtain`,
  `solar-garten`, `icicle` gefüllt; Solar-Ketten landen korrekt in **Lichterketten UND Solar & Garten**
  (Doppelweg über `kat-stringlights` + `kat-solar`).
- **0 Fehler** (keine `userErrors` in allen 9 Batches + Pilot).

## Was pro Produkt gesetzt wurde

- **Titel:** bereinigter Amazon-Titel (`titel_ohne_farbe`, sonst `titel_amazon`) — **provisorisch**, wird in Welle 2 markengerecht überschrieben.
- **SKU bereinigt:** `VINE-`Präfix entfernt; `-EU-VINE` komplett entfernt (→ z. B. `HP-RSP-180`), `-VINE`/`-VIEN` entfernt (`-EU` bleibt erhalten, z. B. `HP-DCT-200-EU`).
- **Preis:** `preis_eur`. **Vendor:** HeiPard. **Status:** draft.
- **Produkttyp (Shopify `product_type`):** = deutscher `produkttyp` (z. B. „Solar-Lichterkette"). Wird in der PDP-Kicker-Zeile angezeigt.
- **Barcode:** nur echte numerische EAN gesetzt. Wo `ean` eine **ASIN** war (`B0…`), Barcode **leer** gelassen (lieber leer als falsch) → in Welle 2 echte EAN ergänzen.
- **Tags:** `kat-stringlights` + Unterkategorie-`kat`-Tag; Solar zusätzlich `kat-solar`; `serie-<code>`; Lichtfarbe; ggf. `todo-bild`/`todo-text`.
  - Ausnahme `HP-RSP-180` (Christmas Cone Tree): nur `kat-weihnachtsbaum` (kein `kat-stringlights`), `product_type` „Weihnachtsbaum".
- **Metafelder (Welle 1, nur sauber ableitbar):**
  - `heipard.stromquelle` — Solar-Lichterkette → Solar, Batterie-Lichterkette → Batterie, sonst leer.
  - `heipard.lichtfarbe` — Warmweiß direkt; „Bunt/RGB" → **RGB** (bei Smart/App/„RGB" im Titel) bzw. **Multicolor** (sonst); bei Varianten-Gruppen leer (Farbe = Variantenachse).
  - Alle übrigen Metafelder (Länge, LED-Anzahl, IP, Timer …) **leer** → kommen in Welle 2.

## Bewusste Abweichung von der Spec

- **Amazon-Beschreibungen in Welle 1 NICHT importiert.** Grund: Sie werden in Welle 2 ohnehin
  komplett markengerecht neu geschrieben, sind unbearbeitete Amazon-SEO-Texte mit teils
  regelwidrigen Behauptungen (z. B. „entwickelt", „deutsches Support-Team", erfundene Angaben),
  und blähen die Importe stark auf. **Die Original-Texte bleiben vollständig erhalten**
  (`records.json` im Import-Arbeitsverzeichnis) und dienen Welle 2 als Referenz.

## Offene Nacharbeiten (Welle 2 + Cleanup)

- [ ] **`todo-bild` (9):** Bilder nachfordern (Kollegen Shenzhen) + ergänzen:
  `HP-OL-100`, `HP-OL-15`, `HP-OL-15-G`, `HP-OL-75`, `HP-SBLB-100L-WW`, `HP-SBLB-60L-WW`,
  `HP-SOLM-12M-WW`, `HP-UCP-200`, `HP-VIT-864L-EU-1`.
- [ ] **`todo-text` (19):** komplett neue Beschreibung (kein Amazon-Text vorhanden):
  `HP-BLT-100-EU-1`, `HP-DCT-200`, `HP-DFM-400-EU-2`, `HP-DFM-600`, `HP-DFM-750-EU`,
  `HP-DLM-100H`, `HP-DNM-208`, `HP-ISL-360-EU`, `HP-OL-15-G`, `HP-OLT-300-EU`, `HP-RCT-400`,
  `HP-RFM-600`, `HP-RIT-280`, `HP-RNM-200`, `HP-RSP-180`, `HP-RTM-400`, `HP-UCP-200`,
  `HP-UCT-200-EU`, `HP-VLM-100L`.
- [ ] **Welle 2 für ALLE 85:** Titel + Beschreibung markengerecht, restliche Metafelder aus Titel/Text
  extrahieren (Länge, LED-Anzahl, IP, Timer, Fernbedienung, Farbtemperatur …). **IP45** zur
  `ip_schutzart`-Auswahlliste ergänzen (taucht in vielen Titeln/Texten auf).
- [ ] **Mögliche Dubletten prüfen:** `HP-SBLB-100L-WW` (kein Bild) vs. `HP-SBLB-100L-WW-NEW` und
  `HP-SBLB-60L-WW` vs. `…-NEW` — jeweils dasselbe Produkt alt/neu (unterschiedliche SKU/EAN).
  Entscheiden: zusammenführen oder eine Variante verwerfen.
- [ ] **Barcodes:** ASIN-„EANs" durch echte GTIN ersetzen (viele `-EU`/`-VINE`-Produkte).
- [ ] **Aktivierung:** Erst nach Welle 2 + Leons Freigabe von draft → active + Veröffentlichung im Onlineshop.
