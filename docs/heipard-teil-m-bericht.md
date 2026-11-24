# HeiPard Theme: Bericht Teil M

Auftrag: `heipard-theme-auftrag-teil-m.md` (Stand 24.11.2026, mittags). Schließt an `docs/heipard-teil-l-bericht.md` an.
Alle Zeiten deutsche Zeit. Vor jedem Schreibzugriff `get-shop-info` = HeiPard. Nichts ging an Shenzhen oder Tyler.

## Kurzfassung

- **Abschnitt 3:** Alt am Block csl-300-c-b1 wieder auf der Notion-Fassung („dahinter ein graues Sofa“), DE und EN (13:03).
- **1.1 Längen:** Nach deinen Regeln sind 55 Werte gesetzt und 8 geleert (13:07). Dazu kommen 4 Birnenabstände nach
  Tafel (13:13).
  - Gerechnet sind die fünf Auslegungsfälle.
  - Nach Tafel gesetzt: Zuleitungen ST38, OL-S11-15, BSL-100, ISL-486, OLT-150/800 beleuchtet und RGB-500A 50 m.
  - Als Summe gesetzt: BSL-100 10,2 m, CTL, TPM-400, OLT, OLG-200, VIT-864L.
  - Abgeleitet sind DPM-300/600.
  - Geleert: hp-ol-s11-50 (beleuchtet, gesamt) und die Gesamtlängen von hp-isl-486.
- **Titel und Texte:** 26 Produkte, 110 Felder DE und EN (DE 13:17, EN 13:22).
  - Die 13 liegenden Texte sind geschrieben, `todo-text` ist entfernt.
  - Neue Titel: ST38-15/25/30 7,35 / 12 / 16,8 m, S14-30/50 16,8 / 27 m, OL-S11-15 7 m, VIT-586L 15 m, OL-S11-50 ohne
    Länge, sblb-* EN „Crystal Globes“.
- **Offene Längen:** Die Tabelle mit 75 Zeilen ist bei der Asset-Instanz. Sie steht als Teil G (G10 bis G45) in ihrer
  Tyler-Mail.
- **1.12 Familienleiste:** Modelle mit Längen nur an den Varianten zeigen die Spanne „30 bis 100 m“ und stehen nach der
  kürzesten Länge. Live seit 13:29 (`5e1b693`).
- **Abschnitt 2 ISL:**
  - Datenmodell steht, Code im Vorschau-Theme (`a27bbfb`), Technik mit Testwerten geprüft.
  - Es fehlen die Bilder aus Lauf C5. Die Asset-Instanz hatte sie bis 13:33 nicht.
  - Das fehlende EN der ISL-Blöcke B1, B2 und R1 ist ergänzt.
- **1.10:** Liste für Daniel fortgeführt (`docs/data/teilm-liste-daniel-es-fr-it.md`).
- **Abschnitt 4:** wartet auf deine Umstellung des Filters.

## Zeitleiste

| Zeit | Was |
|---|---|
| 13:03 | Abschnitt 3: Alt csl-300-c-b1 DE und EN |
| 13:06 | `3557fb6` Längenliste vorher und nachher, offene Längen (vor dem Schreiben) |
| 13:07 | 55 Längenwerte gesetzt, 8 geleert |
| 13:10 | Tabelle der offenen Längen an die Asset-Instanz |
| 13:12 / 13:13 | `7a2148f` Birnenabstände (vor dem Schreiben), dann 4 Werte gesetzt |
| 13:16 | `44c02ca` Titel und Texte vorher und nachher (vor dem Schreiben) |
| 13:17 / 13:22 | Titel, SEO, Metas, Texte DE / EN |
| 13:26 / 13:29 | `5e1b693` Familienleiste, im Vorschau-Theme geprüft, dann `main` (live) |
| ca. 13:30 | Sechs Varianten-Metafelder für den ISL-Test angelegt, Datenmodell an die Asset-Instanz |
| 13:32 | `a27bbfb` ISL-Code auf Branch `teilm/isl-varianten`, nur im Vorschau-Theme |
| ca. 13:33 bis 13:35 | Technik-Test an HP-ISL-360W mit Testwerten, danach gelöscht |
| 13:36 | `99f7a53`, dann EN der ISL-Blöcke B1, B2, R1 |

## 3 Alt-Text CSL300C-G1 (Block B1)

- Blockfeld `alt` an csl-300-c-b1 (Metaobjekt 505230655821), DE und EN in der Fassung aus dem Auftrag.
- Die EN-Fassung hat 125 Zeichen, nicht 122. Das liegt noch in der Grenze. Die Asset-Instanz hat die Datei-Alts in Files
  gleich gesetzt (12:57).
- Liste: `docs/data/teilm-alt-csl300c.csv`.

## 1.1 Die Längenwerte

### Was ich nach welcher Regel geschrieben habe

Liste vorher und nachher mit Regel und Sicherheit je Wert: `docs/data/teilm-laengen-metafelder.csv`.

| Regel | Werte |
|---|---|
| 1 Auslegung (gerechnet) | hp-ol-st38-15 7,35 m, -25 12 m, -30 16,8 m, hp-ola-s14-30-eu 16,8 m, hp-ola-s14-50-eu 27 m |
| 3 Tafel schlägt Shop | Zuleitung hp-ol-st38-15 2,5 m, -25 und -30 3 m (vorher 2,5). hp-ol-s11-15 7 m beleuchtet, 3 m Zuleitung, 10 m gesamt (vorher 10 / 2,5 / 12,5). hp-bsl-100-1p und -2p 10 m beleuchtet. hp-isl-486 beleuchtet 12,15 m (486, 486W) und 16,2 m (648W), Zuleitung 3 m warmweiß und 5 m kaltweiß und bunt. hp-olt-150 15 m, hp-olt-800 80 m beleuchtet. hp-rgb-500a 50 m. hp-vit-586l-eu-1 15 m |
| 2 Summe | hp-bsl-100-1p und -2p 10,2 m. hp-olt-150 18 m, -400 43 m, -800 83 m. hp-olg-200 23 m. hp-vit-864l-eu-1 26,6 m. hp-tpm-400 7 m. CTL 4,5 / 5 / 5,5 / 6 m (Stranglänge plus 3 m Zuleitung) |
| 4 Abgeleitet | hp-dpm-300: HP-DPM-300, -300M 30 m, HP-DPM-600, -600M 60 m, je 3 m Zuleitung, gesamt 33 und 63 m |
| 5 Geleert | hp-isl-486 Gesamtlänge an allen 6 Varianten (vorher gleich der beleuchteten Länge) |
| 1.2 | hp-ol-s11-50 beleuchtete und Gesamtlänge geleert, Zuleitung 3 m bleibt |

**Birnenabstand nach Regel 3** (13:13): Dieselbe Prüfung ergab vier Abstände, bei denen die Tafel dem Shop widerspricht.
Ich habe sie mitgezogen, damit Länge, Birnenzahl und Abstand zusammenpassen:
- hp-ol-25: 50 cm statt 55 cm
- hp-ol-30: 58 cm statt 55 cm
- hp-ol-s11-15: 50 cm statt 52,5 cm
- hp-ol-st38-15: 52,5 cm statt 50 cm

### Wo ich anders entschieden habe, als eine Regel allein ergäbe

1. **hp-isl-486 Gesamtlänge leer statt Summe.** Nach Regel 3 sind die Zuleitungen gesetzt, nach Regel 2 wären die
   Gesamtlängen damit belegt: 15,15 / 17,15 / 19,2 / 21,2 m. Du hast hp-isl-486 bei Regel 5 aber ausdrücklich als Fall
   zum Leeren genannt. Ich bin deinem Beispiel gefolgt, die Zuleitungen und die Summe stehen in der Tyler-Tabelle (Frage 1).
2. **Birnenabstände.** Regel 3 spricht von Längenwerten. Die vier Abstände habe ich dazugenommen (siehe oben).
3. **Nicht geschrieben, weil die Empfehlung nicht auf einer Tafel dieses Produkts beruht:**
   - hp-dfm-600 9 / 18 m: nur Amazon-Text.
   - hp-rgb-300a 30 m: nur Amazon-Text, Tafel nur bei 200A und 500A, die sind andere Produkte.
   - hp-ols-g40-25 12,5 m: nur Amazon-Text.
   - hp-scwl-* 10 / 15 m: Die Tafel sagt nur „10M 100 LEDs“. Das „folgen“ der Liste entscheidet 10 gegen 15 m, nicht
     beleuchtet gegen gesamt.
   - hp-tpm-400 HP-TPM-300 1,5 m: nur Excel. Und der TPM-400-Abstand 8 cm: Excel gegen Tafel 10 cm.

   Sichtbare Folge: In der RGB-Familie zeigt der Serienwähler 20, 33 und 50 m. 33 m ist die Gesamtlänge der 300A, weil
   ihre beleuchtete Länge offen ist. Bei DFM-600 nennt die Familienleiste ebenso die Gesamtlängen. Beides löst sich mit
   Tylers Antwort oder mit deinem Ja (Frage 2).
4. **CTL nach Regel 2:** Die Gesamtlänge ist die Strecke vom Stecker bis zum Strangende (Strang plus 3 m Zuleitung). Die
   Liste nannte dazu die offene Tyler-Frage A07/T5 („laut Verpackung“). Mit Regel 2 sind die Werte jetzt geschrieben. In
   die Texte habe ich sie nicht genommen: Ein Baummantel hat Stränge, keine Kettenlänge.

### Offene Längen für Tyler (1.1 Punkt 8)

- `docs/data/teilm-laengen-offen.csv`, 75 Zeilen: Produkt, SKU, Feld, Kandidat, bisherige Quelle, Shopwert nach Teil M,
  Sicherheit und Hinweis aus der Längenliste.
- Darin auch die Fälle ohne Quelle:
  - hp-ol-15, -75, -100: Ist die Titellänge die Gesamtlänge?
  - hp-ol-st38-50: 30 m beleuchtet im Shop ohne Beleg.
  - hp-rpm-200/400, hp-scwl-*, hp-vam-400l-eu-1, Zuleitung hp-cl-1-eu und hp-ols-s17-16-eu.
  - hp-rtm-400: steht nicht in der Längenliste. 400 LEDs mit 10 cm passen nicht auf 2 m, das ist wohl die Stranglänge.
- Die Asset-Instanz hat die Tabelle als G10 bis G45 in ihre Tyler-Mail genommen (`reports/tyler_mail_2026-11-24.md`, 139
  Fragen).

### Titel, SEO-Titel und Texte

Liste vorher und nachher je Feld: `docs/data/teilm-titel-texte.csv` (26 Produkte, 110 Felder).

- **Titel mit neuer beleuchteter Länge**, DE und EN, SEO-Titel wo gesetzt:
  - hp-ol-st38-15/25/30: 7,35 / 12 / 16,8 m
  - hp-ola-s14-30-eu 16,8 m, hp-ola-s14-50-eu 27 m
  - hp-ol-s11-15 7 m
  - hp-vit-586l-eu-1 15 m: Der Titel hatte keine Länge, die Schwester 864L trägt ihre.
- **Titel mit offener Länge bleiben** (Regel 6), zum Beispiel hp-ol-15 10 m, hp-ol-s11-25 15 m, hp-ols-g40-25 15 m,
  hp-rtm-400 2 m.
- **Die 13 liegenden Texte** (Regel 7):
  - Belegte Längen mit Zuleitung und Gesamtlänge: ST38-15/25/30, OL-S11-15, OLT-150, OLT-800, ISL-486.
  - Ohne Länge, mit Birnen- oder LED-Zahl: OL-15, -75, -100, OL-S11-25, RTM-400.
  - CL-2: Der Text nennt die belegte Schnurlänge („misst 10 m“).
  - Bei ST38-30 heißt es jetzt „Ersatzbirnen liegen bei“, ohne Zahl. Die Zahl ist eine Frage an Tyler.
- **Gesamtlänge ergänzt**, wo sie jetzt belegt ist (Muster aus Teil L): hp-olt-100 13 m, hp-olt-200 23 m, hp-u20-200 13 /
  23 m, hp-olg-200 23 m, hp-bsl-100-2p 10,2 m, hp-dpm-300 33 / 43 / 63 / 83 m, hp-vit-864l-eu-1 26,6 m.
- Meta-Descriptions höchstens 155 Zeichen, SEO-Titel höchstens 60. Kein Gedankenstrich.
- **1.4 „Crystal Globes“:** EN-Titel und SEO-Titel von hp-sblb-100l-ww-new und -60l. Die EN-Meta-Descriptions und ein
  Satz im EN-Text von -60l sagten auch „crystal balls“, die habe ich mitgezogen.

## 1.2 hp-ol-s11-50

- `beleuchtete_laenge_m` und `gesamtlaenge_m` geleert, `zuleitung_m` 3 bleibt (laut Liste belegt).
- Titel jetzt „HeiPard Außenlichterkette S11 mit 50 Birnen, warmweiß“, EN „HeiPard Outdoor String Lights S11 with 50 Bulbs,
  Warm White“. Einen eigenen SEO-Titel hatte das Produkt nicht, es gilt der Titel.
- Text und Meta-Description DE und EN ohne Länge („An der Kette hängen 50 Birnen.“).
- `birnenabstand_cm` 50 steht noch im Shop. Er ist unsicher (Aufzählungspunkt wohl von S11-25) und steht als Frage in der
  Tyler-Tabelle.
- Die Asset-Instanz hat keine Tafel gefunden (G06, G28 in der Tyler-Mail). Der Kettenplan entfällt auf der Seite, solange
  die beleuchtete Länge fehlt. In der S11-Reihe steht die Karte ohne Länge am Ende.

## 1.3 bis 1.11

- **1.3 hp-rgb-500a:** 50 m gesetzt.
- **1.4:** siehe oben.
- **1.5:** Abschnitt 2.
- **1.6 Lichtfarben-Lücken:**
  - hp-dlm-100h und hp-fxf-001 bleiben leer.
  - hp-npt-210: Die Asset-Instanz hat am Bild geprüft. „Weiß“ ist die Lichtfarbe: Tafel 2.jpg „weißes Licht“, transparentes
    Kabel bei allen drei Varianten, das Variantenbild zeigt kaltweiße LEDs.
  - Ob das als „Kaltweiß“ ins Listenfeld darf, belegt keine Kelvin-Angabe (Frage 3).
  - Nebenbefund der Asset-Instanz: `led_anzahl` der W-Variante 200, die W-Tafel sagt 210. Nicht geändert.
- **1.7, 1.8, 1.11:** nichts geändert.
- **1.9:** Vorschau-Theme #199733903693 für Familienleiste und ISL genutzt. Es steht auf dem Live-Stand plus Teil M:
  - 12 Dateien aus `main`, `templates/product.json` aus dem Live-Theme.
  - Abgleich per Prüfsumme: Vorher wichen 13 Dateien ab, jetzt keine außer den Teil-M-Dateien.
- **1.10:** `docs/data/teilm-liste-daniel-es-fr-it.md`, alle Stellen aus Teil L und M, die nur DE und EN haben.

## 1.12 Familienleiste

- `snippets/heipard-fb-serienleiter.liquid` und `-eintrag.liquid`, neuer Sprachtext `heipard.blocks.serienleiter.range`
  (DE „30 bis 100 m“, EN „30 to 100 m“).
- **Regel:** Hat ein Nachbarmodell im Familienmodus keine Länge am Produkt, aber Längen an den Varianten, zeigt die Karte
  die Spanne von kürzester bis längster Länge (beleuchtet, sonst gesamt) und steht nach der kürzesten in der Reihe. Der
  Balken zeigt die längste.
- **Geprüft im Vorschau-Theme**, DE und EN, Desktop und mobil, auf hp-olg-200m und hp-olt-100: Reihe 10, 20, 20, 20, „30
  bis 100 m“, 40, 60, 80 m. Kein Überlauf, kein Gedankenstrich.
- Danach `main` per Fast-Forward auf `5e1b693` (13:29, live über die GitHub-Verbindung).
- **Betrifft:** die OLG- und OLT-Familie. Ein Produkt mit eigenen Längen-Varianten zeigt auf seiner eigenen Seite weiter
  seine Varianten.
- Kontaktbogen: `docs/data/teilm-familienleiste.jpg`.

## 2 ISL-Test: Blöcke wechseln mit der Lichtfarbe

### Datenmodell (an die Asset-Instanz um ca. 13:30)

- Varianten-Metafelder `heipard.feature_b1`, `feature_b2`, `feature_r1` (Datei, nur Bilder): 699131101517, -134285,
  -167053.
- `heipard.feature_b1_alt`, `feature_b2_alt`, `feature_r1_alt` (einzeiliger Text, DE, EN als Übersetzung am Metafeld):
  699131199821, -232589, -265357.
- Werte an den 14 kaltweißen und bunten ISL-Varianten, warmweiße bleiben leer.

### Bau (`a27bbfb`, `snippets/heipard-feature-dispatch.liquid`, nur im Vorschau-Theme)

- Trägt die gewählte Variante ein Bild in `feature_b1/_b2/_r1`, zeigen B1, B2 und R1 dieses Bild statt des Familienbilds,
  auch vor dem Bild am Block.
- Der Alt kommt aus dem Variantenfeld, sonst aus der Datei.
- B1 spielt dann keinen Clip.
- Hat die Variante mindestens eines der drei Bilder, fallen R2 und R3 weg.
- Sind die Felder leer, bleibt alles wie bisher. Im Vorschau-Theme gegengeprüft: warmweiß gleich live.
- **Wechsel ohne Neuladen:** `heipard-variant.js` holt die Feature-Sektion schon heute bei jedem Variantenwechsel mit
  `?variant=` neu. Der Tausch läuft deshalb serverseitig. Beim ersten Aufruf mit `?variant=` und ohne JavaScript kommt
  das richtige Bild direkt vom Server. Neues JavaScript war nicht nötig.

### Technik-Test (ca. 13:33 bis 13:35, Vorschau-Theme)

An HP-ISL-360W habe ich vorübergehend vorhandene Bilder und Test-Alts gesetzt, danach alles gelöscht. Die Asset-Instanz
war informiert.

- **`?variant=` direkt:** B1, B2 und R1 zeigen die Variantenbilder mit Varianten-Alt, B1 ohne Clip. R2 und R3 fehlen.
- **EN:** Der Alt kommt aus der Übersetzung am Metafeld.
- **Wechsel Warmweiß zu Kaltweiß und zurück**, mobil und Desktop: Bilder, Alt, Clip, R2 und R3 wechseln ohne Neuladen.
  Die Blockhöhen bleiben gleich.
- Kein Bild steht doppelt auf der Seite: Die Feature-Bilder sind gegen Galerie und übrige Seite geprüft.

### Blocktexte (2.5)

- B1 und B2 nennen keine Lichtfarbe.
- R1 („Drei Lichtfarben, Warm, kühl oder bunt …“) zählt alle drei als Auswahl auf und passt damit zu jedem Bild. Ich habe
  ihn so gelassen.
- **Befund:** An isl-b1, isl-b2 und isl-r1 fehlte EN für Kicker, Überschrift und Text. Die englische Seite zeigte dort
  Deutsch. Ergänzt um 13:36, Liste `docs/data/teilm-isl-blocktexte-en.csv`.

### Was noch fehlt

Die Bilder aus Lauf C5. Sobald die Asset-Instanz die Werte und das EN gesetzt hat, folgen:
- Prüfung im Vorschau-Theme: hp-isl-264, hp-isl-360-eu und hp-isl-486, je Lichtfarbe, DE und EN, Desktop und mobil,
  Wechsel hin und zurück.
- Der Kontaktbogen.
- Danach dein Blick, erst dann geht es live (Merge von `teilm/isl-varianten` auf `main`).

**Rückweg:** Variantenfelder leeren, dann gilt wieder das Familienbild. Code: `git revert a27bbfb` (ist noch nicht auf
`main`).

## 4 Lichtfarben-Filter

Wartet auf deine Umstellung in Search & Discovery (Klickanleitung im Bericht Teil L, 1.1). Danach setze ich „Light color“
und prüfe die Kollektionsfilter DE und EN.

## Befund: fehlendes Englisch an Blöcken und Fragen

- Beim ISL-Test fiel auf, dass Blöcke ohne EN-Text auf der englischen Seite deutsch erscheinen.
- Eine Stichprobe der ersten 100 Metaobjekte zeigt dasselbe an weiteren Blöcken:
  - B1, B2 und R1 bei OL-G40
  - R1 bei DCT, BLT, BLM, DFM, CTL und OLAS14
  - B2 bei NPT, VIT, CTL und OLAS14
  - Überschriften von Schieber, Hotspot und Steuerung
  - alle Fragen-Einträge dieser Seite
- Ob alle diese Blöcke noch in einem Set stehen, habe ich nicht geprüft.
- An vielen dieser Blöcke ist nur der Alt übersetzt.
- Ich habe außer ISL nichts geändert (Frage 4).

## Nachgeladen

82 Seiten (41 Produkte, DE und EN, Desktop) nach allen Längen- und Textänderungen, live, 13:37 bis 13:40 Uhr. Ergebnis:
`docs/data/teilm-nachladen.csv`.

- Alle neuen Titel stehen als Überschrift auf der Seite, alle neuen Texte in der Beschreibung (DE und EN).
- Kettenplan überall ohne „ca.“, zum Beispiel:
  - hp-ol-st38-15: 2,5 m Zuleitung, 7,35 m Kette, 10 m gesamt
  - hp-dpm-300: 3 m, 30 m, 33 m
  - hp-ctl-180: 3 m, 1,5 m, 4,5 m
  - hp-isl-486: Zuleitung und Kette, keine Gesamtlänge
- Kein Gedankenstrich, kein seitlicher Überlauf.
- **Serienwähler:**
  - ST38-Reihe 7,35 / 12 / 16,8 / 30 m. Die 30 m von hp-ol-st38-50 sind der alte, unbelegte Shopwert (Tyler-Tabelle).
  - S11-Reihe 7 / 15 / 16,8 m. Die 15 m von hp-ol-s11-25 sind die Gesamtlänge, weil die beleuchtete offen ist. Dazu die
    Karte von hp-ol-s11-50 ohne Länge.
  - RGB 20 / 33 / 50 m (Frage 2).
- **Nebenbefund hp-dpm-300:** Die Varianten 40 und 80 m haben keine `led_anzahl`, ihre Karten im Serienwähler zeigen
  deshalb keine LED-Zahl. Laut Längenliste sind 400 und 800 LEDs belegt. Nicht geändert, außerhalb von Teil M.

## Commits und Theme Check

`shopify theme check` vor jedem Commit, Ergebnis jedes Mal wie der Ausgangsstand: 1 Fehler (`heipard-wordmark`, bekannt),
14 Warnungen.

| Commit | Zeit | Inhalt |
|---|---|---|
| `3557fb6` | 13:06 | Doku: Längenliste, offene Längen, Alt CSL300C (vor dem Schreiben) |
| `7a2148f` | 13:12 | Doku: Birnenabstände (vor dem Schreiben) |
| `44c02ca` | 13:16 | Doku: Titel und Texte (vor dem Schreiben) |
| `5e1b693` | 13:26 | Familienleiste (1.12), live seit 13:29 |
| `a27bbfb` | 13:32 | ISL-Test, Branch `teilm/isl-varianten`, nur Vorschau-Theme |
| `99f7a53` | 13:36 | Doku: EN der ISL-Blöcke (vor dem Schreiben) |
| dieser Bericht | | Bericht, Liste für Daniel, Kontaktbogen |

## Rückweg

- **Längen, Abstände, Titel, Texte:** Die Listen `docs/data/teilm-*.csv` enthalten je Wert den Vorher-Stand. Zurück mit
  denselben Aufrufen: `metafieldsSet` bzw. `metafieldsDelete`, `productUpdate` mit Beschreibung und SEO-Titel zusammen,
  `translationsRegister` mit dem Digest des wiederhergestellten deutschen Werts. `todo-text` mit `tagsAdd` an den 13
  Produkten.
- **Alt csl-300-c-b1, EN der ISL-Blöcke:** alte Werte aus den Listen setzen bzw. `translationsRemove`.
- **Familienleiste:** `git revert 5e1b693` auf `main`.
- **ISL:** siehe Abschnitt 2. Definitionen löschen mit `metafieldDefinitionDelete` (IDs oben), wenn der Test verworfen
  wird.

## Offen bei dir

1. **hp-isl-486 Gesamtlänge:** Geleert nach deinem Beispiel in Regel 5. Mit den nach Tafel gesetzten Zuleitungen wären es
   nach Regel 2 15,15 m (486), 17,15 m (486W/M), 19,2 m (648) und 21,2 m (648W/M). Soll ich die Summen setzen oder auf
   Tyler warten?
2. **Amazon-Werte mit Empfehlung „folgen“:**
   - hp-rgb-300a 30 m, hp-dfm-600 9 / 18 m, hp-ols-g40-25 12,5 m. Die Liste empfiehlt sie, die Quelle ist nur der
     Amazon-Text. Nach Regel 5 nicht geschrieben.
   - Folge: Die RGB-Reihe zeigt 20 / 33 / 50 m, die DFM-Reihe Gesamtlängen.
   - Willst du für diese drei eine Ausnahme oder auf Tyler warten?
3. **hp-npt-210 „Weiß“:** Als Lichtfarbe bestätigt, Kelvin unbekannt.
   - Soll die Variante im Listenfeld „Kaltweiß“ bekommen, wie die Galerie-Alts sagen?
   - Und `led_anzahl` der W-Variante von 200 auf 210, wie die Tafel?
4. **EN an Blöcken und Fragen:** Soll ich eine Vollzählung machen und die fehlenden EN-Texte ergänzen? Dann als eigener
   Auftrag, mit Liste vorher.
5. **ISL-Test:** Ansehen, sobald die C5-Bilder gesetzt sind und der Kontaktbogen da ist (ich melde mich).
