# Teil J: Hero live, Pausenknopf, Gedankenstriche, Titelrunde, Textentwurf

Stand 22.11.2026, 21:35 Uhr. Auftrag `heipard-theme-auftrag-teil-j.md` (Stand 22.11., 20:45 Uhr). Leons Antworten: Hero
Tempo „schnell“ mit Hinweis, nach Prüfung live; ES, FR, IT abschalten.

## Kurzfassung

- **1.1 Hero:** live seit 20:27:32 Uhr.
  - Fassung 3, Tempo schnell, Hinweis „Licht an?“, 720p-Clips auch am Desktop.
  - Alle Prüffälle live grün, auch unter Slow 4G am Desktop.
  - Am Desktop (1920 px) ist der 720p-Clip sichtbar weicher als das Standbild: Vergleich in 1.1, die 1600 × 900-Fassung
    kannst du bestellen.
  - Das Vorschau-Theme „zz-vorschau Teil H Hero (kann weg)“ darfst du löschen.
- **1.2 Pausenknopf:** live seit 20:38:09 Uhr auf allen Clip-Blöcken. Die Schleife endet nach drei Runden. Tastatur,
  Vorleseprogramm, Tag und Abend, Desktop und mobil geprüft. Kontaktbogen im Repo.
- **1.3 Weihnachten:** hp-dgm-002 bleibt, drei seiner Bilder zeigen es im Schnee vor Weihnachtsdeko.
- **1.4 Sprachen:** ES, FR, IT unveröffentlicht (Übersetzungen bleiben). Sprachwahl, `hreflang` und Sitemap zeigen nur
  Deutsch und Englisch, `/es/` usw. liefern 404.
- **1.5 Saison-Text EN:** ersetzt durch deinen Wortlaut.
- **1.6 „string light“:** 45 englische Lieferumfang-Felder nach „1 ×“ in der Einzahl, Antworten nachgeladen.
- **1.7 Trust-Leiste:** [TBD] bleibt, die Aussage ist nicht bestätigt.
- **1.9.1 Position 1:** nach Auftrag 30 nachgeladen, je Variante nur Bilder ihrer Lichtfarbe (220 Aufrufe).
- **1.9.2 Neue Varianten:**
  - 0,00 € ist im Showroom nirgends sichtbar.
  - Der Lieferumfang gilt fürs Produkt, also auch für die neuen Varianten.
  - Pflichtpunkt im Projektstand.
  - Bei hp-ucp-200 (4 Varianten) und hp-dpt-300 (2) zeigen neue Varianten noch warmweiße Bilder. Das liegt bei der
    Asset-Instanz.
- **3 Gedankenstriche:**
  - Im Theme an 43 Stellen ersetzt (live 20:39 Uhr), EN-Einstellungen nachgezogen.
  - Im Shop-Inhalt DE und EN (272 Seiten) zwei englische Funde, beide behoben: ein Gedankenstrich bei hp-blt-100-eu-1,
    „cold white“ bei hp-dct-200.
  - Rechtstexte nur gelistet.
- **2 Titelrunde:** 111 Produkte DE und EN neu, 8 [prüfen] nicht geschrieben.
  - **Nebenwirkung, behoben:** Der SEO-Aufruf hatte bei den 20 Welle-2-Produkten die deutsche Meta-Description geleert.
    Um 21:22 Uhr war sie wiederhergestellt, 4 davon bitte gegenlesen.
  - Gegenprobe auf 60 Produktseiten, in Kollektion, Suche und Serienleiter: überall die neuen Titel.
  - Zur Entscheidung: doppelte SEO-Titel (9 Paare DE, 10 EN), Kabelfarbe, Länge.
- **4 Textentwurf:** 44 Produkte DE und EN, 15 ohne [TBD], nicht geschrieben, wartet auf deine Freigabe.
- **Neu gefunden:** Familien-Codes sind englisch maschinell übersetzt („OLG“ wurde „Higher Regional Court“). Deshalb
  fehlt englisch die Serienleiter bei OLG und DGM. Vorschlag in „Offen“.

## 1.1 Hero

**Desktop mit 720p:**
- Die Startseiten-Clips „schnell“ (1276 × 720, als Mobil-Fassung geliefert) laufen jetzt auch am Desktop. Liquid liefert
  davon die 720p-Fassung, 730 KB je Richtung (vorher 1080p mit 2,6 MB).
- **Schärfe bei 1920 × 1080:** Letztes Bild des Clips gegen das Standbild an derselben Stelle, Text ausgeblendet.
  - Schärfemaß (mittlerer Laplace-Betrag) im ganzen Bild: Clip 3,37, Standbild 4,88.
  - Ausschnitte: Lichterkette 5,3 gegen 6,0, Tisch 6,3 gegen 13,3, Hauswand 3,7 gegen 6,0.
  - **Ergebnis: sichtbar weicher**, besonders Holzmaserung, Flaschenetikett und Ziegel.
  - Vergleich: `docs/data/teilj-hero-720p-1920.jpg`.
  - Das Standbild selbst hat nur 1920 × 1072 Pixel, eine 1600 × 900-Fassung des Clips würde den Abstand deutlich
    verkleinern.

**Einbau** (Standard „aus“):
- `7850a0d`, live 20:26:08: Code aus dem Vorschau-Zweig, ohne Startseiten-Vorlage. Der Live-Hero blieb unverändert.
- Neu dabei: Clips gelten, sobald für ein Tempo beide Richtungen da sind.

**Live geschaltet:** `d9caf23`, live 20:27:32 (auf dein Wort „live schalten“, nach der Prüfung in der Vorschau).
- Bild je Modus „Clip beim ersten Aufruf am Abend“, Tempo schnell, Tag-Modus Hinweis, 35 % Tag-Verlauf.
- Abendbild HOME-03, vorher das Theme-Bild `heipard-hero.jpg`.
- Tagbild HOME_HERO_TAG.
- Bento-Kachel „Party & Terrasse“ mit `OLS11_R2_01`, weil HOME-03 jetzt das Hero-Bild ist.

**Prüfung live** (20:29 bis 20:34 Uhr):

| Fall | Ergebnis |
|---|---|
| Abend, erster Aufruf, Desktop/mobil | Intro „Licht an“ in 4 s, 730 KB |
| Slow 4G Desktop | startet nach 1,0 bis 1,3 s, läuft durch (4 s Clip in 4,2 bis 5,6 s) |
| Slow 4G mobil | startet nach 1,1 s, glatt |
| Tag, Desktop/mobil | Hinweis „Licht an?“ nach 2,1 s, verschwindet beim Umschalten |
| reduzierte Bewegung | nur das Etikett, kein Leuchten, kein Clip |
| Save-Data | kein Clip, sofort das Abendbild |
| Clip gesperrt | nach 2,56 s weich ins Abendbild |
| Umschalten mitten im Clip | Gegenclip setzt an der gespiegelten Stelle ein (beide Richtungen) |
| größtes Element beim Laden | mit und ohne Intro dasselbe Bild, Zeit gleich |

Mit Tempo „schnell“ (4 s) braucht der Hero keinen Pausenknopf.

**Vorschau-Theme:** „zz-vorschau Teil H Hero (kann weg)“ (#199733903693) darfst du jetzt löschen. Den Zweig
`vorschau/hero-tag-abend` lasse ich stehen, er ist auf `main` aufgegangen.

**Rückweg:** Theme-Editor, Startseite, Hero: „Bild je Modus“ auf „Aus“. Oder `git revert d9caf23`, Code: `git revert 7850a0d`.

## 1.2 Pausenknopf

`07f77b0`, live 20:38:09 Uhr (vorher im Vorschau-Theme geprüft).

**Der Knopf:**
- Je Block mit Clip ein runder Knopf unten rechts auf dem Bild, 40 × 40 px.
- Er ist sichtbar, solange der Clip läuft oder laufen kann. Nach dem Ende der Schleife verschwindet er.
- Farben aus den Tokens (`--card`, `--border`, Schrift `--color-foreground`, Fokus `--ring`). Am Tag hell, abends
  dunkelblau, beide lesbar.
- Beschriftung für Vorleseprogramme: „Animation anhalten“ bzw. „Animation fortsetzen“, EN „Pause animation“ bzw.
  „Play animation“.
- Das Symbol wechselt zwischen Pause und Abspielen.
- Angehalten bleibt der Block für den Rest des Seitenaufrufs stehen, auch beim Scrollen und beim Variantenwechsel.
- Wird vor dem Start angehalten, bleibt das Bild stehen statt des dunklen ersten Clip-Bildes.

**Ende:** Die Schleife bleibt nach drei Runden auf dem Standbild stehen. Das letzte Bild ist das Bild, ohne Sprung.

**Hero:** Mit Tempo „schnell“ ohne Knopf (unter 5 s).

**Geprüft** (Vorschau und live):

| Prüfung | Ergebnis |
|---|---|
| Barrierefreiheitsbaum | Schaltfläche „Animation anhalten“ |
| Tastatur | per Tab erreichbar, Fokusrahmen 2 px `--ring` sichtbar, Enter hält an, Leertaste setzt fort |
| Anhalten | Clip steht, Beschriftung „Animation fortsetzen“, nach Scrollen und 3 s unverändert |
| hp-dct-200 | Banner angehalten, die Sticky-Schleife läuft weiter, der Banner bleibt angehalten |
| Schleife DFM | Runde 1, 2, 3, danach Standbild, Knopf weg |
| EN | „Pause animation“ / „Play animation“ |
| mobil Tag/Abend | Antippen hält an, der Knopf überdeckt den Banner-Text nicht (Text endet 12 px links davon) |
| Variantenwechsel | laufendes Element übernommen, neuer Knopf verbunden, Zustand bleibt |
| reduzierte Bewegung | kein Knopf (es läuft auch kein Clip) |

Kontaktbogen: `docs/data/teilj-pausenknopf.jpg` (Desktop Tag läuft, Fokus, angehalten; Abend; mobil Tag, Abend, angehalten).

**Rückweg:** `git revert 07f77b0`.

## 1.3 Kollektion Weihnachten

- hp-dgm-002 bleibt in der Kollektion: `HP-DGM-002_GAL_01`, `_02` und `_05` zeigen die Spiralstecker im Schnee vor einer
  Haustür mit Weihnachtsbaum und Kranz.
- hp-olt-100 bleibt (Titelrunde).
- Keine Änderung an der Kollektion.

## 1.4 Sprachen ES, FR, IT

Gegen 20:31 Uhr unveröffentlicht (`shopLocaleUpdate`, `published: false`). Die Übersetzungen bleiben erhalten.
- `hreflang`: nur `x-default`, `de`, `en`.
- Sprachwahl: Deutsch und Englisch.
- `/es/`, `/fr/`, `/it/`: 404.
- Sitemap: nur deutsche und englische Teil-Sitemaps.

Rückweg: `shopLocaleUpdate(locale, { published: true })`.

## 1.5 Englischer Saison-Text

Geschrieben 20:30:36 Uhr (`translationsRegister`, Startseiten-Vorlage). Vorher: „Icicle light strings for the roofline, string lights for the Christmas tree, and a light curtain for the window.
Pick the spot that should glow first.“
Nachher: dein Wortlaut, „Icicle lights for the roofline, string lights for your Christmas tree, and a light curtain for the
window. Pick the spot you want to light up first.“

## 1.6 „string light“ im englischen Lieferumfang

45 Felder (44 Produkte, eine Variante), geschrieben 20:33 Uhr. Vorher und nachher je Feld:
`docs/data/teilj-lieferumfang-string-light.json`.

| Beispiel | vorher | nachher |
|---|---|---|
| hp-ola-s14-15-eu | 1 × 10 m LED string lights | 1 × 10 m LED string light |
| hp-olg-…, hp-olt-…, hp-stt-050 (16) | 1 × LED string lights | 1 × LED string light |
| hp-olh-g40-15/-20/-35 | 1 × LED string lights with G40 bulbs | 1 × LED string light with G40 bulbs |
| hp-bsl-…, hp-blt-…, hp-blm-100-eu | 1 × battery-operated LED string lights | 1 × battery-operated LED string light |
| hp-ctl-180/-240/-300-eu/-360-eu | 1 × LED string lights for the Christmas tree (tree sleeve) | 1 × LED string light for the Christmas tree (tree sleeve) |
| hp-vam-400l-eu-1, hp-vlm-100l | 1 × LED string lights, warm white and multicolor | 1 × LED string light, warm white and multicolor |

Weitere: hp-ctl-180m/-240m, hp-dfm-600, hp-ols-g40-25, hp-dlm-100h, hp-dpm-300, hp-dpt-300, hp-rfm-600, hp-solm-12m-ww.

- **Nicht geändert:** hp-cl-1-eu und hp-cl-2-eu („1 × camping lantern with rollable LED string lights“). Die Stückzahl
  gehört zur Laterne, die Kette ist dort Beschreibung.
- **Nebenbei gesehen, nicht geändert:** „LED icicle light string“ (ISL, VIT), „LED Christmas tree light string with ring“
  (CTL-210/-400, RTM, TPM), „LED light string with ST38 bulbs“ (hp-ol-st38-30, die Geschwister sagen „string light“),
  „smart RGB light string“ (RPM). Soll ich „light string“ ebenfalls auf „string light“ bringen?

**Nachgeladen:** EN-Seiten von hp-ola-s14-15-eu, hp-olg-200, hp-bsl-100-2p, hp-ctl-180, hp-vlm-100l, hp-solm-12m-ww,
hp-dpm-300, hp-olh-g40-20, hp-blt-050. Lieferumfang und Antworten mit Platzhalter in der Einzahl, z. B. „The box contains
1 × solar string light, 1 × ground stake, 1 × wall mount, and 1 × user manual.“

## 1.7 Trust-Leiste

„Versand aus Deutschland“ behält das [TBD], weil deine Nachricht die Aussage nicht bestätigt.

Nebenbefund EN: Die Unterzeile „Schnell bei dir“ ist als „I'll be right with you“ übersetzt. Vorschlag „Fast delivery“.
Nicht geändert, weil die ganze Zeile am [TBD] hängt.

## 1.9 Nach Meldungen der Asset-Instanz (Auftrag 30)

**1.9.1 Position 1 in den warmweißen Listen** (gemeldet 20:41 Uhr):
- Nachgeladen alle Varianten von hp-dct-200, hp-dfm-400-eu-2, hp-dfm-600, hp-dfm-750-eu, hp-isl-264, hp-isl-360-eu,
  hp-isl-486, hp-dpm-300, hp-npt-210, hp-uct-200-eu, DE und EN, Desktop (104 Aufrufe) und mobil (116).
- Je Variante die sichtbaren Galeriebilder, Lichtfarbe über den Alt-Text zugeordnet: **kein Bild einer fremden
  Lichtfarbe**.

**1.9.2 Neue Varianten** (16 Varianten an hp-ucp-200, hp-uct-200-eu, hp-dpm-300, hp-dpt-300, hp-rmp-180, 0,00 €,
Bestand 0):
- **Lieferumfang:** Er hängt am Produkt, nicht an der Variante, und nennt keine Länge oder Lichtfarbe. Die neuen Varianten
  zeigen damit denselben Lieferumfang wie ihre Geschwister. Es war nichts zu schreiben.
  - Nebenbefund DE: hp-dpm-300 sagt „Kabelspule“, hp-dpt-300 „Kabelrolle“, EN in beiden Fällen „cable reel“. Nicht
    geändert.
- **0,00 € im Showroom:** an keiner sichtbaren Stelle.
  - Geprüft: Karte, Suche, Variantenwahl, Kollektion, Produktseite DE und EN.
  - Kein `og:price`, im JSON-LD keine `offers`.
  - Warenkorb: Hinzufügen wird abgelehnt (422, „ausverkauft“).
  - Den Wert 0,00 tragen nur die Shopify-Skripte (`ShopifyAnalytics`) und die Varianten-Daten des Themes
    (`application/json`). Beides ist nicht sichtbar, die Showroom-Logik ist unverändert.
- **Pflichtpunkt:** in `docs/projektstand.md` unter „Pflicht vor dem Ende des Showroom-Modus“, mit allen 16 Varianten
  (SKU und Optionen).
- **Titel der 5 Produkte:** in der Titelrunde nach den neuen Varianten gebildet (Abschnitt 2), z. B. hp-dpm-300
  „30 bis 80 m auf Kabelspule“, hp-rmp-180 „1,8 m oder 2,5 m“.
- **Galerie je Variante (mobil, 21:33 Uhr):** alle 28 Varianten der 5 Produkte, DE und EN (56 Aufrufe).
  - hp-uct-200-eu, hp-dpm-300, hp-rmp-180: nur Bilder der eigenen Lichtfarbe.
  - **hp-ucp-200:** Die vier kaltweißen und bunten Varianten (200W, 200M, 300W, 300M, alle neu) zeigen 2 Bilder, eines
    davon warmweiß (`HP-UCP-200_GAL_01`).
  - **hp-dpt-300:** DPT-200M und DPT-400M (neu, Multicolor) zeigen `HP-DPT-300_GAL_01` bis `_03`, alle warmweiß. Es gibt
    keine eigene Liste für sie.
  - Nicht geändert: Die Galerie-Listen pflegt die Asset-Instanz, Bilder für diese Varianten fehlen.

## 3. Gedankenstriche

**Theme** (`89b98da`, live 20:39 Uhr, 43 Ersetzungen in 13 Dateien):

| Stelle | vorher | nachher |
|---|---|---|
| Copyright (Footer, Site-Footer) | © 2026 HeiPard — eine Marke der C&L Handels GmbH | © 2026 HeiPard, eine Marke der C&L Handels GmbH |
| Seitentitel (`theme.liquid`, 3 Stellen) | Produkt – HeiPard | Produkt \| HeiPard |
| Servicezeiten (Trust-Leiste, Startseite) | Mo–Fr 9–16 Uhr | Mo. bis Fr., 9 bis 16 Uhr |
| Servicezeiten Footer (Bindestriche als Strich) | Mo - Fr \| 09:00 - 16:00 Uhr | Mo. bis Fr., 9 bis 16 Uhr |
| Lieferzeiten (product.json, Standards, Rückfall) | 1–3 / 3–10 / 5–15 Werktage | 1 bis 3 / 3 bis 10 / 5 bis 15 Werktage |
| de.json, Variante nicht verfügbar | {{ option_value }} – nicht verfügbar | {{ option_value }} (nicht verfügbar) |
| de.json, Preisspanne | {{ minimum }}–{{ maximum }} | {{ minimum }} bis {{ maximum }} |
| de.json / en.default.json, QR-Code | QR-Code – Scannen … / QR code — scan … | QR-Code: Scannen … / QR code: scan … |
| Schema-Beschriftungen (Header, Hero, Site-Footer, main-product) | „Button 1 — Text“, „Spalte 2 – Menü“ … | „Button 1: Text“, „Spalte 2: Menü“ … |
| Hero-Badge-Standard | Saison 2026 — frisch eingetroffen | Saison 2026, frisch eingetroffen |

- **Englische Theme-Einstellungen** (20:39:45 und 20:40:16 Uhr):
  - Servicezeiten (Startseite, Footer): „Mon to Fri, 9 a.m. to 4 p.m.“, vorher „Mon–Fri 9am–4pm“ bzw. „Mon - Fri | 9:00 am -
    4:00 pm“.
  - Lieferzeiten: „1 to 3 business days“, „3 to 10 …“, „5 to 15 …“, vorher mit Halbgeviertstrich.
- **Kommentare im Code** bleiben.
- **`CLAUDE.md`:** Copyright-Vorgabe auf die neue Form, dazu die Regel ohne Gedankenstriche.

**Shop-Inhalt:**
- Durchsucht: alle Produkt-, Kollektions-, Seiten- und Blogadressen aus den Sitemaps, Deutsch und Englisch (272 Seiten).
- Erfasst: sichtbarer Text samt eingeklappter Fragen, Lieferumfang und Blocktexte, Alt-Texte, Seitentitel,
  Meta-Beschreibung und JSON-LD.
- Der letzte Durchlauf (fertig 21:09 Uhr) erkennt die Bot-Prüfung von Shopify und lädt dann neu: 272 Seiten echt
  gelesen, keine gesperrt. Ein früherer Durchlauf hatte gesperrte Seiten als leer gezählt und deshalb nichts gefunden.
- **Zwei Funde, beide englisch, behoben um 21:23:48 Uhr** (`translationsRegister`):

  | Produkt | vorher | nachher |
  |---|---|---|
  | hp-blt-100-eu-1, Beschreibung EN | „… doesn’t need a power outlet—it runs on batteries.“ | „… doesn’t need a power outlet, as it runs on batteries.“ |
  | hp-dct-200, Beschreibung EN | „… each in warm white, cold white or multicolor.“ | „… each in warm white, cool white or multicolor.“ |

- Sonst stehen Gedankenstriche nur in den Rechtstexten (unten), die Funde bei Servicezeiten und Copyright lagen im Theme
  und sind oben ersetzt.
- Nicht erfasst: Feature-Blöcke, die an keinem Produkt hängen (nicht sichtbar).
- Die Titel-Gegenprobe (Abschnitt 2) fand auf 60 Produktseiten ebenfalls keinen Gedankenstrich und kein „cold white“.

**Rechtstexte, nur gelistet** (nicht geändert):
- Datenschutz:
  - „dürfen diese Daten – von ihrer Speicherung abgesehen – nur …“
  - zweimal „Zwingende gesetzliche Bestimmungen – insbesondere (gesetzliche) Aufbewahrungsfristen – bleiben unberührt“
  - „Stephanstraße 14 – 16“ (giropay)
- AGB:
  - „Die Zahlung ist – sofern nicht anders angegeben – sofort …“ (4.9)
  - „Ansprüchen Dritter – einschließlich der Kosten für die Rechtsverteidigung in ihrer gesetzlichen Höhe – frei“ (8.4)
  - Bindestriche als Strich: „- im Folgenden: Anbieter -“
- Kontakt und Versand: Bindestriche in Zeitspannen („08:00 - 16:30“, „1-3 Werktage“).

**Nebenbefund Rechtstexte** (wichtig, nicht geändert):
- Kontaktseite: Der Mail-Link zeigt „info@heipard.com“, führt aber zu `mailto:info@ozeanos.com`. Dazu ein leerer Link auf
  `info@lumo-nova.de`.
- Widerrufsbelehrung: Der Link zum Online-Widerruf zeigt „https://www.heipard.com/pages/vertrag-widerrufen“, führt aber zu
  `https://www.lumo-nova.de/pages/vertrag-widerrufen`.

## 2. Titelrunde

**Grundlage:**
- Vorher-Stand aller 119 Produkte (Titel und SEO-Titel, DE und EN): `docs/data/teilj-titel-vorher.csv`.
- Neue Titel mit Quelle je Baustein: `docs/data/teilj-titel.csv`, vor dem Schreiben gepusht (`34f0cf1`, 21:08:50).
- **Andere Verkaufskanäle:** Neben dem Onlineshop gibt es nur den Kanal „Shop“. Dort ist kein Produkt veröffentlicht, die
  neuen Titel erscheinen also nirgends sonst.

**Geschrieben:**

| | Anzahl | Weg | Zeit |
|---|---|---|---|
| Titel und SEO-Titel DE | 111 Produkte, davon 101 mit neuem Titel; bei 10 passte der Titel schon | `productUpdate` | 21:09 bis 21:12 |
| Titel und SEO-Titel EN | 111 Produkte, alle mit neuem Titel | `translationsRegister` (`title`, `meta_title`) | 21:12 bis 21:17 |

- Alle Aufrufe ohne Fehlermeldung.
- Titel höchstens 90 Zeichen, SEO-Titel höchstens 60.
- Kein Titel doppelt.
- Wo der SEO-Titel gleich dem Titel ist (DE 28, EN 10), speichert Shopify keinen eigenen Wert. Englisch steht dann nur der
  Titel.
- **Nicht geschrieben:** die 8 [prüfen]-Fälle (unten) und hp-stt-050 (Entwurf).

**Nebenwirkung, behoben:**
- `productUpdate` mit `seo: {title}` hat bei den 20 Welle-2-Produkten die deutsche Meta-Description geleert. Shopify
  ersetzt das ganze SEO-Feld, die nicht mitgeschickte Beschreibung fiel weg. Die englischen Fassungen standen danach auf
  „veraltet“.
- Gefunden beim Abgleich der Übersetzungen. Wiederhergestellt um 21:22:27 bis 21:22:58 Uhr, die SEO-Titel blieben
  dabei unverändert.
  - 16 Texte wörtlich aus `docs/heipard-welle2-texte-entwurf.md`.
  - 4 aus der englischen Fassung zurückgeführt, weil du sie im Oktober nach dem Entwurf geändert hast: hp-vit-586l-eu-1,
    hp-vit-864l-eu-1, hp-ctl-180m, hp-ctl-240m. Bei hp-vit-864l-eu-1 stimmt die Länge mit den 148 Zeichen aus dem
    Welle-2-Bericht überein. Bitte die vier kurz gegenlesen.
  - Um 21:23:48 die englischen Meta-Descriptions mit neuem Digest bestätigt (Wortlaut unverändert). Über alle 119
    Produkte steht keine Übersetzung mehr auf „veraltet“.
  - Liste mit allen 20 Texten: `docs/data/teilj-meta-wiederherstellung.csv`.
- Bei hp-ola-s14-50-eu blieb der alte englische SEO-Titel stehen, weil der deutsche jetzt gleich dem Titel ist. Entfernt
  (`translationsRemove`), Englisch gilt nun der Titel.

**[prüfen], nicht geschrieben (8):**

| Produkt | Grund |
|---|---|
| hp-bsl-100-2p, hp-bsl-50-2p | Handle und alter Titel „2 Stück“, Lieferumfang nur 1 × Kette und 1 × Batteriekasten |
| hp-cl-1-eu, hp-cl-2-eu | Daten gleich, „3-in-1“ und „4-in-1“ stehen nur im alten Titel |
| hp-csl-300-c | Lichtfarbe fehlt (alter Titel „Weiß“, Geschwister kaltweiß) |
| hp-dgm-048 | Inhalt des Sets offen, Lieferumfang leer |
| hp-ol-15-g | Daten wie hp-ol-15, kein unterscheidendes Merkmal |
| hp-ola-g40-15-eu | Länge widersprüchlich (beleuchtet 20 m, gesamt 10 m, alter Titel 10 m) |

**Zur Entscheidung:**
1. **Doppelte SEO-Titel:** 9 Paare DE, 10 Paare EN. Die Regel „hinten ganze Bausteine weg“ nimmt bei OLG und OLT erst
   Kabelfarbe und Einsatzbereich, dann ist das Paar gleich.
   - OLG/OLT 100, 200, 300, 400, 600, 800 (DE und EN).
   - hp-blm-100-eu / hp-blt-100-eu-1, hp-dct-200 / hp-uct-200-eu, hp-ol-50 / hp-olh-g40-50 (DE und EN).
   - pec-150g / pvc-150g (EN).
   - Vorschlag: Bei den Paaren das Merkmal behalten und dafür die Lichtfarbe streichen, z. B. „HeiPard Lichterkette 20 m mit
     200 LEDs, grünes Kabel“. Auf dein Wort schreibe ich das.
2. **90 Zeichen:** Bei 30 englischen und 3 deutschen Titeln (beide hp-scwl, hp-uct-200-eu) fiel der Einsatzbereich weg.
   Das trifft auch zwei deiner Beispiele aus 2.1: hp-ctl-210-eu-1 hätte englisch 97 Zeichen, hp-dct-200 95.
3. **Kabelfarbe OLG/OLT:** belegt nur in den alten Titeln von hp-olg-200 („Grünes Kabel“) und hp-olt-400 („Transparente
   Kabel“). Für die übrigen über die Familie übernommen, sonst wären fünf Paare gleich. Bitte bestätigen.
4. **Länge:** Ein Metafeld für die Länge im Titel gibt es nicht. Genommen: Optionswerte, sonst die Gesamtlänge wie in deinem
   Beispiel hp-ola-s14-15-eu („10 m“ samt Zuleitung). Damit bleiben hp-ol-30 bei 20 m, hp-ol-50 bei 30 m,
   hp-ols-a60-16-eu bei 8,5 m. Beleuchtet wären es 17, 27 und 6,5 m. Dadurch ist hp-ol-50 im SEO-Titel gleich
   hp-olh-g40-50 (Punkt 1).

**Merkmale:**
- Weggelassen: „koppelbar“ bei hp-npt-210 (hp-dnm-208 ist auch koppelbar), „mit Timer“ bei hp-blt-050 (laut Block nur
  bei der 5-m-Kette).
- Neu: „mit App“ bei hp-ola-g40-27-eu und -42-eu, „mit Fernbedienung“ bei hp-ol-30 und hp-ol-50.
- Kein „mit App“ bei hp-rtm-400 und hp-rsp-180, weil weder Lieferumfang noch Blocktext eine App nennen.

**Neue Begriffe** (DE / EN, EN selbst übersetzt, wo kein Shop-Wert da war):
- Halloween-Lichterkette / Halloween String Lights; orange und lila / Orange and Purple
- warmweiß und bunt / Warm White and Multicolor; warmweiß oder kaltweiß / Warm White or Cool White
- LED-Lichterturm / LED Light Tower; Smarter RGB-Lichterkegel / Smart RGB Light Cone
- LED-Hängedeko Hirsch bzw. Stern / LED Deer bzw. Star Hanging Decoration
- LED-Gartenstecker Stern bzw. Spirale / LED Garden Stake Star bzw. Spiral
- Kristallkugeln / Crystal Balls; auf Kabelspule und auf Kabelrolle / on Cable Reel
- grünes Kabel / Green Cable; transparentes Kabel / Transparent Cable
- Smarte RGB-Cluster-, -Eisregen-, -Baum-Lichterkette, Smartes RGB-Lichternetz, Smarter RGB-Lichtervorhang
- Spannen englisch mit „to“: „10 to 30 m“

**Zur Kenntnis (Daten):**
- Lichtfarbe im Metafeld unvollständig: hp-vit-586l nur Warmweiß, hp-vit-864l nur Multicolor (beide umschaltbar);
  hp-vlm-100l und hp-vam-400l-eu-1 nur Warmweiß (Lieferumfang „warmweiß und bunt“); hp-dpt-300 und hp-ucp-200 nur
  Warmweiß.
- Blocktexte von hp-dpm-300 und hp-dpt-300 nennen nur 30 und 60 m, also den Stand vor den neuen Varianten.
- Mögliche Dubletten: hp-stt-050 (Entwurf) und hp-ol-st38-50; hp-ols-s17-16-eu trägt den Tag `pruefen-dublette`.

**Gegenprobe** (2.6.4, 21:25 bis 21:29 Uhr, per Skript, Bot-Prüfung erkannt, keine Seite gesperrt):
- **15 Produktseiten**, mindestens eine je Produktart, je DE und EN, Desktop (1440 px) und mobil (390 px), also 60 Aufrufe:
  - Ausgewählt: hp-blt-050, hp-dfm-600, hp-vit-864l-eu-1, hp-wwf-180, hp-olg-200, hp-ola-s14-50-eu, hp-npt-210,
    hp-dct-200, hp-dgm-001, hp-rgb-200a, hp-ols-g40-16, pec-150g, hp-ctl-180m, hp-ucp-200, hp-olh-g40-20.
  - Überschrift, Seitentitel (= SEO-Titel), `og:title` und Name im JSON-LD: überall der neue Wert, nirgends der alte Titel.
  - Bild-Alt ohne eigenen Alt: zeigt den neuen Titel (je Seite 0 bis 9 Bilder, z. B. 9 bei hp-olg-200), kein Bild mit
    altem Titel.
  - Mobil: keine Überschrift läuft über, kein Querscrollen.
  - Meta-Description: bei den 20 Welle-2-Produkten wie wiederhergestellt. Leer ist sie nur bei Produkten ohne
    Beschreibung (hier 8 der 15). Das war schon vor Teil J so und fällt mit dem Textentwurf (Abschnitt 4) weg.
- **Kollektionen und Suche**, DE und EN: „Alle Produkte“, „Weihnachten“, Suche „Lichterkette“ bzw. „string lights“.
  84 Karten, alle mit dem neuen Titel.
- **Serienleiter:** Die Einträge zeigen die neuen Titel (z. B. bei hp-olg-200 „HeiPard Lichterkette 10 m mit 100 LEDs,
  warmweiß, für innen und außen, grünes Kabel“).
  - Ausnahme, unabhängig von der Titelrunde: Englisch fehlt die Leiter bei den Familien OLG und DGM. Ursache in „Offen“.
- **Warenkorb:** Im Showroom zeigt er „Der Shop öffnet bald“ bzw. „The shop opens soon“, ohne Produkte. Hinzufügen ist
  gesperrt (1.9.2), Titel erscheinen dort also nicht.

## 4. Textentwurf

`docs/data/teilj-texte-entwurf.md`, **nichts im Shop geschrieben.**
- 44 Produkte mit `todo-text`, je DE und EN, zwei Absätze im Stil von hp-ctl-210-eu-1 und hp-dct-200.
- Je Produkt stehen die Quellen dabei (Option, Metafeld, Lieferumfang, Blocktext, Frage). Fehlt etwas oder widersprechen
  sich Quellen, steht [TBD].
- **Ohne offene Angaben: 15**, mit [TBD]: 29. Die Liste steht oben in der Datei.
- Bei den 5 Produkten mit neuen Varianten beschreibt der Entwurf nur die Varianten mit Preis, die neuen stehen als
  [TBD].
- Überschriften mit den neuen Titeln aus Abschnitt 2. Kein Gedankenstrich, kein „cold white“ (geprüft).
- **Nach deiner Freigabe** schreibe ich DE (`descriptionHtml`) und EN (`body_html`), erst DE, dann EN mit dem neuen Digest.
- **Zur Kenntnis:** Ohne Beschreibung sind nicht nur die 44.
  - Von 118 aktiven Produkten haben nur die 20 aus Welle 2 eine Beschreibung.
  - Von den übrigen 98 tragen 44 `todo-text`. Die anderen 54 haben kein Etikett, z. B. OL, OLT, OLH, OLS, OLA-G40, BSL,
    CTL warmweiß, ISL-264, SCWL, RGB-200A/300A.
  - Bei allen 98 fehlt damit auch die Meta-Description.
  - Soll ich die 54 in einer zweiten Runde entwerfen?

## Schreibvorgänge

Vor jedem Schreiben `get-shop-info` = HeiPard. Nicht angefasst: Preise, Status, Bestand, Produktmedien, Files, Handles,
`feature_*`, Showroom-Logik.

| Zeit | Was | Weg |
|---|---|---|
| 20:26:08 | Hero-Code (Standard aus) | Push `7850a0d` |
| 20:27:32 | Hero live, Bento-Kachel | Push `d9caf23` |
| 20:30:36 | Saison-Text EN | `translationsRegister` (Startseite) |
| gegen 20:31 | ES, FR, IT unveröffentlicht | `shopLocaleUpdate` |
| 20:33 | 45 Lieferumfang-Felder EN | `translationsRegister` |
| 20:38:09 | Pausenknopf | Push `07f77b0` |
| 20:39:40 | Gedankenstriche im Theme | Push `89b98da` |
| 20:39:45 bis 20:40:16 | Servicezeiten und Lieferzeiten EN | `translationsRegister` (Startseite, Produkt, Footer) |
| 21:08:50 | Titel-Listen | Push `34f0cf1` |
| 21:09 bis 21:12 | 111 Titel und SEO-Titel DE | `productUpdate` |
| 21:12:35 bis 21:17:50 | 111 Titel und SEO-Titel EN | `translationsRegister` |
| 21:22:27 bis 21:22:58 | 20 Meta-Descriptions DE wiederhergestellt | `productUpdate` (SEO-Titel und Beschreibung) |
| 21:23:48 | 20 Meta-Descriptions EN bestätigt, 2 Beschreibungen EN (Strich, „cold white“), alter SEO-Titel EN hp-ola-s14-50-eu entfernt | `translationsRegister`, `translationsRemove` |

## Commits

Jeder einzeln. `shopify theme check` lief vor den Code-Commits (20:20 und 20:39 Uhr) und vor dem Doku-Commit
(21:34 Uhr): 1 Fehler und 14 Warnungen, alle schon vorher da und keiner aus Teil J. Der Fehler ist `heipard-wordmark`
ohne Bildmaße (Stand Juni), die Warnungen betreffen verwaiste Snippets, Variablennamen und Dawn-Reste.
- `7850a0d` Hero: Tempo schnell, Tag-Modus Hinweis, 720p am Desktop (Standard aus)
- `d9caf23` Startseite: Hero live, Bento-Kachel OLS11_R2_01
- `07f77b0` Clip-Blöcke: Pausenknopf, Schleife endet nach drei Runden
- `89b98da` Theme ohne Gedankenstriche (43 Stellen), CLAUDE.md
- `34f0cf1` Doku: Titel-Listen Teil J (vorher und neu)
- Doku-Commit mit diesem Bericht, Projektstand, Textentwurf, Kontaktbogen und Datenlisten

## Rückweg

- **Hero:** Theme-Editor „Bild je Modus“ auf „Aus“, oder `git revert d9caf23` (Code: `git revert 7850a0d`).
- **Pausenknopf:** `git revert 07f77b0`.
- **Gedankenstriche Theme:** `git revert 89b98da`. Die EN-Einstellungen mit den alten Werten aus Abschnitt 3 neu
  registrieren.
- **Sprachen:** `shopLocaleUpdate(locale, { published: true })` für es, fr, it.
- **Saison-Text, Beschreibungen EN:** alte Werte stehen in 1.5 und 3.
- **Lieferumfang EN:** Vorher-Werte in `docs/data/teilj-lieferumfang-string-light.json`.
- **Titel:** `docs/data/teilj-titel-vorher.csv`, DE per `productUpdate`, EN per `translationsRegister`.
  - **Wichtig:** Beim SEO-Titel immer die Beschreibung mitschicken (`docs/data/teilj-meta-wiederherstellung.csv`), sonst
    wird sie wieder geleert.
- **SEO-Titel EN hp-ola-s14-50-eu:** alter Wert „HeiPard Outdoor string lights S14, 30 m, warm white, dimmable“.

## Offen

**Bei dir:**
1. Doppelte SEO-Titel (9 Paare DE, 10 EN): Merkmal statt Lichtfarbe behalten? (Abschnitt 2)
2. Kabelfarbe OLG/OLT über die Familie, und die Gesamtlänge als Titel-Länge: bestätigen?
3. Die 4 zurückgeführten Meta-Descriptions gegenlesen (hp-vit-586l-eu-1, hp-vit-864l-eu-1, hp-ctl-180m, hp-ctl-240m).
4. Die 8 [prüfen]-Fälle klären (Abschnitt 2).
5. Textentwurf (44 Produkte) freigeben. Und die übrigen 54 Produkte ohne Beschreibung in einer zweiten Runde entwerfen?
6. „light string“ auf „string light“ bringen? (1.6)
7. Trust-Leiste EN: „Fast delivery“ statt „I'll be right with you“, sobald die Zeile ohne [TBD] ist (1.7).
8. Rechtstexte: Mail-Link auf ozeanos.com und Widerrufs-Link auf lumo-nova.de (Abschnitt 3).
9. Hero 1600 × 900 bestellen (1.1).
10. Vorschau-Themes löschen: #199733903693 (Teil H/J) und #199725613389 (Teil G).
11. **Familien-Codes englisch maschinell übersetzt** (seit 27.10.):
    - `familie` „OLG“ heißt englisch „Higher Regional Court“, „DGM“ „Digital Geological Map“. Englisch findet die
      Serienleiter dadurch die Familie nicht, bei OLG und DGM fehlt sie.
    - Ebenso `stromquelle` „Netz“ → „Network“, das erscheint englisch in den technischen Details.
    - Vorschlag: die EN-Übersetzungen von `familie` entfernen (Codes bleiben gleich) und `stromquelle` EN richtig setzen
      („Mains power“, Batterie und Solar prüfen). Vorher alle Metafeld-Übersetzungen auf solche Fälle durchsehen. Auf
      dein Wort.

**Galerie der neuen Varianten** (1.9.2, laut Asset-Instanz bekannt, nichts ändern bis zu deiner Entscheidung):
- hp-ucp-200 (200W, 200M, 300W, 300M): Das warmweiße Bild auf Position 1 hängt an deiner Frage 3 aus Asset-Auftrag 30
  (Ausnahme Position 1). Bei Ja schreibt die Asset-Instanz die Listen.
- hp-dpt-300 (200M, 400M): Es gibt kein buntes DPT-Bild. Das löst erst ein Bild aus Lauf C3 oder einer EU-Lieferung
  (Tyler, D12).
- Nachtrag in `reports/auftrag_30.md`, Abschnitt 9 (Asset-Repo).

**Bei Tyler:** Anzahl der Ersatzbirnen hp-ol-30.

**Nebenbefunde:** hp-dpm-300 „Kabelspule“, hp-dpt-300 „Kabelrolle“ (EN beide „cable reel“). Lichtfarbe-Metafelder
unvollständig (Abschnitt 2).
