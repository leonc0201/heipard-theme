# Fortführung der Liste für Daniel: Stellen nur auf Deutsch und Englisch (Teil S)

**Stand:** 27.11.2026, abends (deutsche Zeit). Schließt an `docs/data/teilr-liste-daniel-es-fr-it.md` (Teil R) an.

**Für:** Daniel, zur Übersetzung nach Spanisch, Französisch und Italienisch (Pflicht vor dem Launch).

**Was hier steht:** Alles, was in Teil S im Shop neu geschrieben oder geändert wurde, dazu Funde auf ES, FR und IT zur
Durchsicht. Die genauen Werte DE und EN stehen in der genannten Liste im Repo.

## Teil S (27.11.2026)

| Bereich | Stelle in Translate & Adapt | Umfang | Liste |
|---|---|---|---|
| CSL-200 über USB (Abschnitt 5) | Produkte hp-csl-200-c und hp-csl-200-w: Beschreibung, zweiter Absatz, letzter Satzteil | 2 Felder DE geändert, EN erneuert | `teils-texte.csv` |
| Feld `heipard.ausfuehrung` (Abschnitt 3) | Metafelder der 4 BSL und 8 CTL | EN, ES, FR, IT absichtlich **gleich dem deutschen Wert** gesetzt (z. B. „12 Stränge“). Bitte **nicht übersetzen und nicht ändern** | `teils-ausfuehrung-uebersetzung.csv` |
| Filter „Lichtfarbe“ (Abschnitt 4) | Search & Discovery, Filterbezeichnung | nur zur Durchsicht, siehe unten | |
| Lichtfarbe in Kachel, Technik und Icon-Grid (Abschnitt 4) | keine neuen Texte | Die Anzeige liest jetzt die Variantenoption oder das Listenfeld `heipard.lichtfarben` (dessen ES/FR/IT-Werte gibt es schon) | `teils-lichtfarbe-esfrit.csv` |

## Zur Durchsicht

1. **Filterbezeichnung „Lichtfarbe“** (so an der Storefront am 27.11. abends):
   - DE „Lichtfarbe“, EN „Light color“, ES „Color de luz“, FR „Couleur de la lumière“, IT „Colore della luce“.
   - Dieselbe Angabe heißt an anderen Stellen anders: Der Optionsname in der Variantenauswahl ist ES „Color de la luz“,
     FR „Température de couleur“, IT „Colore della luce“. Die Zeile in den Technischen Details heißt FR ebenfalls
     „Température de couleur“ (Sprachdatei des Themes). „Température de couleur“ heißt Farbtemperatur und passt nicht
     zu Multicolor. Bitte je Sprache einen Begriff festlegen. Ändert sich ein Optionsname, gib mir Bescheid: Die
     Serienleiste und die Lichtfarbe-Anzeige erkennen die Option an ihrem Namen in allen fünf Sprachen.
2. **Filterwerte auf ES, FR, IT:** Der Filter zeigt dort keine deutschen Werte. ES „Blanco cálido“, „Blanco frío“,
   „Multicolor“; FR „Blanc chaud“, „Blanc froid“, „Multicolore“; IT „Bianco caldo“, „Bianco freddo“, „Multicolore“.
   Nur zur Durchsicht.
3. **Fehler im ES-Optionswert „Multicolor“:** Auf Spanisch steht in der Variantenauswahl „Multicolor彩在线“ (mit
   chinesischen Zeichen), gesehen an hp-isl-360-eu, hp-ctl-210-eu-1, hp-npt-210 und hp-dpt-300, vermutlich an allen
   Produkten mit der Option Lichtfarbe und dem Wert Multicolor. Seit Teil S steht derselbe Wert auch in der Kachel
   „Color de la luz“ und in den Technischen Details. Bitte in Translate & Adapt bei den Optionswerten korrigieren
   (richtig wäre „Multicolor“). FR und IT sind sauber.
4. **Stromquelle (Werte aus Auftrag 39), behoben, nur zur Durchsicht:** Die Asset-Instanz hatte am 27.11. 18:46 nur DE
   und EN gesetzt. Auf ES/FR/IT standen deshalb deutsche Werte, an hp-csl-200-c/-w sogar noch die veraltete
   Übersetzung für Netz. Weil die Serienleiste die Stromquelle in der Sprache der Seite vergleicht, fehlte dort die
   CSL-Leiste. Die Asset-Instanz hat um 19:17 ES/FR/IT nachgetragen (Netz = Red / Réseau / Rete, USB = USB, Akku =
   „Batería recargable“ / „Batterie rechargeable“ / „Batteria ricaricabile“), seit 19:21 sind alle Leisten in allen
   Sprachen gleich. Bitte die drei Akku-Begriffe durchsehen. **Wichtig für später:** Wird ein übersetzter Wert der
   Stromquelle geändert, müssen ES/FR/IT im selben Zug mit, sonst fehlen dort Leisten.
5. **Option „Weiß“ an hp-npt-210:** ES „Blanco“, FR „Blanc“, IT „Bianco“. Der Filter führt das Produkt unter
   Kaltweiß. Das ist nur ein Hinweis, der Optionswert gehört zur Asset-Instanz.

## Hinweise

- **CSL-200:** Nur ein Satzteil ist geändert: „den Strom bekommt er aus der Steckdose“ heißt jetzt „den Strom bekommt
  er über USB“ (EN „it is powered via USB“). Der Rest des Texts ist gleich.
- **Stromquellen aus Auftrag 39** (CSL, OLA-S14, CTL-360, UCP-200, CL mit dem neuen Wert „Akku“): Die Werte hat die
  Asset-Instanz in DE und EN gesetzt, sie stehen in ihrem Bericht.
- **Dezimalzeichen:** DE mit Komma (7,5 m), EN mit Punkt (7.5 m). Für es, fr und it gilt das Komma.
