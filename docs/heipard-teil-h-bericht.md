# Teil H: Nacharbeit zu Teil G, Videoclips im Feature-Block

Stand 22.11.2026, 17:55 Uhr (erste Fassung 16:45 Uhr). Auftrag `heipard-theme-auftrag-teil-h.md` (Stand 22.11., 16:00 Uhr).

## Kurzfassung

- **0.1 Kleinschreibung EN-Lieferumfang:** 64 englische Werte an Produkt und Variante angeglichen (16:10 bis 16:11 Uhr), Deutsch
  unverändert. Die übrigen 54 Felder waren schon klein, die neun Produkte aus 0.3 kamen dort mit.
- **0.2 Britische Formen:** „multicoloured“ und „multi-colour“ an den vier Stellen auf „multicolor“ (16:11 Uhr).
- **0.3 Lieferumfang nach Tabelle:** neun Produkte DE und EN nach der geprüften Tabelle (16:12 Uhr). Zwei
  Blocktexte hängen an der offenen Zahl bei hp-ol-30, sonst kein Widerspruch.
- **Nebenbefund behoben:** „Batteries not included“ stand auf `/en/` mit Häkchen (Commit `796837c`).
- **Abschnitt 1 gebaut und live, ohne sichtbare Wirkung:** zwei neue Blockfelder, Wiedergabe im Theme, Theme-Schalter
  „Videoclips“ (Standard: nur die Testseite hp-isl-360-eu). Ohne gesetzte Felder ändert sich keine Seite.
- **Abschnitt 2, Testseite hp-isl-360-eu:**
  - Clips an `isl-b1` seit 17:10 Uhr, nur dort sichtbar.
  - Alle zehn Punkte live geprüft, Übergänge ohne Sprung.
  - Beim Laden der Seite keine Änderung.
  - Gedrosselt ist 720p zu schwer, Liquid liefert keine kleinere Fassung: Start erst nach Puffern (`99883fc`).
  - Der Anfang „an, dunkel, an“ ist deine Entscheidung.
- **Abschnitt 3, Hero:**
  - Vorschau-Theme #199733903693 mit drei Fassungen über `?hero_fassung=1|2|3`.
  - Lesbarkeit gemessen (35 % Zusatzverlauf im Tag-Modus).
  - Befund: Der Hero-Verlauf wird auch live nie gezeichnet (Dawn `div:empty`).
- **0.4 Nachtrag:**
  - Neue Bilder an allen fünf Produkten in der richtigen Lichtfarbe.
  - hp-dnm-208 Multicolor zeigt das warmweiße `GAL_06`, die neue Position 1 steht dort an zweiter Stelle.

## 0.1 Englische Schreibweise im Lieferumfang

- **Regel:** klein nach dem Malzeichen, außer Abkürzungen und Namen. Groß geblieben: LED, LEDs, RGB, USB, AA,
  Typbezeichnungen mit Ziffer (G40, S11, ST38, A60, S17) sowie Christmas, Halloween, German.
- **Umfang:** alle 127 Felder `heipard.lieferumfang` gelesen (118 Produkte, 9 Variantenfelder). Geändert: 64
  englische Werte. 54 waren schon klein. Die neun Produkte aus 0.3 bekamen ihre Werte aus der Tabelle.
- **Geschrieben:** 22.11., 16:10 bis 16:11 Uhr in zwei Aufrufen zu je 32 Feldern, nur EN (`translationsRegister`), alle ohne Fehler. Deutsch
  unverändert. Vorher-Werte je Feld in `docs/data/teilh-vorher.json`.
- **Hebt Teil F und G auf:** „1 × Ground stake“ (zehn Felder) und „1 × Remote control“ an hp-dgm-002 sind jetzt klein.
- **Nicht betroffen:** Zeilen ohne Malzeichen bleiben, wie sie sind („Batteries not included“, „3 x AA batteries not
  included“).
- **hp-wbf-210, hp-rgb-200a, hp-rgb-300a:** Laut 0.3 bleiben sie unverändert, solange ihr Inhalt geprüft wird. Die
  Kleinschreibung aus 0.1 habe ich trotzdem angewandt, sie ändert nur Großbuchstaben. Soll das zurück, sind es drei
  Felder.

Vorher und nachher, zusammengefasst nach Wortlaut (157 geänderte Zeilen in 64 Feldern, 37 Wortlaute):

| vorher | nachher | Felder | an |
|---|---|---|---|
| 1 × User manual | 1 × user manual | 35 | CL, CSL, CTL-180M/-240M, DFM-600 (Produkt und HP-DFM-600M), DLM, DNM, DPM, NPT-210W, OL-S11-50, OL-ST38-50, OLS, RGB-200A/-300A, SBLB, SCWL, SOLM, TPM, U20, UCP |
| 1 × Remote control | 1 × remote control | 28 | CSL, CTL-180M/-240M, DFM-600, DGM-002, DLM, DNM, DPM, NPT, OL-S11-50, OL-ST38-50, OLS, TPM, U20, UCP |
| 1 × Solar panel | 1 × solar panel | 11 | OLS, SBLB |
| 1 × Ground stake | 1 × ground stake | 10 | OLS-A60, OLS-G40-16, OLS-S11-16 (Produkt und Variante), OLS-S17-16, SBLB, SCWL, SOLM |
| 1 × Remote Control | 1 × remote control | 9 | ISL-264 (Produkt, HP-ISL-108, HP-ISL-264), RCT, RFM, RIT, RNM, RSP, RTM |
| 1 × Battery-operated LED string lights | 1 × battery-operated LED string lights | 8 | BLM, BLT-050 (Produkt und Variante), BLT-100, BSL |
| 1 × User Manual | 1 × user manual | 8 | DGM-001, RFM, RIT, RNM, RSP, RTM, WBF-210, WWF |
| 1 × Wall mount | 1 × wall mount | 5 | OLS-S11-16 (Produkt und Variante), SCWL, SOLM |
| 1 × Battery box | 1 × battery box | 3 | BSL-100-2P, BSL-50-1P, BSL-50-2P |
| 1 × LED Icicle Light String | 1 × LED icicle light string | 3 | ISL-264 (HP-ISL-108, HP-ISL-264), ISL-360-EU |
| 1 × Artificial Christmas Tree | 1 × artificial Christmas tree | 2 | PEC-150G, PVC-150G |
| 1 × Camping lantern with rollable LED string lights | 1 × camping lantern with rollable LED string lights | 2 | CL-1, CL-2 |
| 1 × Ground stake connector | 1 × ground stake connector | 2 | SBLB-60L, SBLB-100L |
| 1 × LED Light Tree Birch | 1 × LED light tree birch | 2 | WBF-210, WWF-180 |
| 1 × Smart RGB string lights with app | 1 × smart RGB string lights with app | 2 | RGB-200A, RGB-300A |
| 1 × Solar string light with G40 / S11 / S17 bulbs | 1 × solar string light with … bulbs | 6 | OLS-G40-16/-35, OLS-S11-16 (Produkt und Variante), OLS-S17-16/-16-EU |
| 1 × Solar string light with copper wire, set of 2 | 1 × solar string light with copper wire, set of 2 | 2 | SCWL |
| 2 × Replacement bulbs | 2 × replacement bulbs | 2 | OLS-G40-25, -35 |
| 1 × LED Deer / Star Hanging Decoration, Set of 2 | 1 × LED deer / star hanging decoration, set of 2 | 2 | BSM, BSX |
| 1 × Remote control with battery | 1 × remote control with battery | 1 | DCT |
| 1 × User manual (German) | 1 × user manual (German) | 1 | DCT |
| 1 × Smart RGB Christmas Tree Light String with Ring | 1 × smart RGB Christmas tree light string with ring | 1 | RTM |
| 1 × Smart RGB Cluster String Lights with App | 1 × smart RGB cluster string lights with app | 1 | RFM |
| 1 × Smart RGB Icicle Light String with App | 1 × smart RGB icicle light string with app | 1 | RIT |
| 1 × Smart RGB Light Cone | 1 × smart RGB light cone | 1 | RSP |
| 1 × Smart RGB Light Curtain with App | 1 × smart RGB light curtain with app | 1 | RCT |
| 1 × Smart RGB Light Net with App | 1 × smart RGB light net with app | 1 | RNM |
| 1 × Smart RGB Light String with App on Cable Reel | 1 × smart RGB light string with app on cable reel | 1 | RPM |
| 1 × Solar string light with A60 / ST38 bulbs | 1 × solar string light with A60 / ST38 bulbs | 2 | OLS-A60, OLS-ST38-16 |
| 1 × Solar string lights (with G40 bulbs) | 1 × solar string lights (with G40 bulbs) | 2 | SOLM, OLS-G40-25 |
| 1 × Spare bulb | 1 × spare bulb | 1 | OLS-S11-16 Variante HP-OLS-S11-16 |
| 3 × Replacement bulbs | 3 × replacement bulbs | 1 | DFM-600 Variante HP-DFM-600M |

- **Live geprüft:** 16:13 bis 16:21 Uhr, die 31 `/en/`-Seiten aus Teil G, darunter alle 22 mit Platzhalter-Antwort.
  Der Hauptinhalt wurde Zeile für Zeile gegen Teil G (14:44 Uhr) verglichen. Geändert haben sich nur die
  Lieferumfang-Zeilen und die Antwort, bei DFM zusätzlich die Titel aus 0.2.
- **Antworten:** Auf allen 22 Seiten ist die Antwort genau der Lieferumfang-Block derselben Seite, z. B. hp-rct-400:
  „The box contains 1 × smart RGB light curtain with app and 1 × remote control.“

## 0.2 Britische Formen im Shop-Inhalt

Geschrieben 22.11. gegen 16:11:50 Uhr in einem Aufruf, nur EN, nur das eine Wort:

| Stelle | vorher | nachher |
|---|---|---|
| hp-dfm-600, Titel | „…, warm white or multicoloured, for indoor and outdoor use“ | „…, warm white or multicolor, for indoor and outdoor use“ |
| hp-dfm-600, SEO-Titel | „…, warm white or multicoloured“ | „…, warm white or multicolor“ |
| hp-dfm-750-eu, Titel | „…, warm white or multi-colour, for indoor and outdoor use“ | „…, warm white or multicolor, for indoor and outdoor use“ |
| hp-vit-864l-eu-1, Meta-Beschreibung | „…, warm white or multi-colour, switchable. …“ | „…, warm white or multicolor, switchable. …“ |

- **Live (16:13 bis 16:21 Uhr):** Auf den drei `/en/`-Seiten steht kein „multicoloured“ und kein „multi-colour“ mehr.
  Die Titel erscheinen auch in der Serienleiter von hp-dfm-400-eu-2 und hp-dfm-750-eu und als Alt der Galeriebilder
  ohne eigenen Alt. Dort sind sie ebenso geändert. Die Vorher-Aufnahme dieser drei Seiten entstand erst nach dem
  Schreiben, dort stützt sich das Vorher auf die Admin-Werte.
- **Unverändert, weil nicht freigegeben:** Uneinheitliche US-Formen in denselben Produkten bleiben,
  „multicolored“ (Meta-Beschreibung hp-dfm-600, SEO-Titel hp-dfm-750-eu), „multi-colored“ (Meta-Beschreibung
  hp-dfm-750-eu), „multi-color“ (Beschreibung hp-vit-864l-eu-1), dazu „multicolored“ im Lieferumfang von hp-vlm-100l.

## 0.3 Lieferumfang nach geprüfter Tabelle

- **Geschrieben:** 22.11., 16:12:18 Uhr Deutsch (`metafieldsSet`), danach Englisch mit den neuen Digests, alle ohne
  Fehler. Je Zeile ein Eintrag, genau die Werte der Tabelle. Keines der neun Produkte hat ein Variantenfeld, die
  Seiten zeigen also das Produktfeld.
- **Vorher und nachher:**

| Handle | DE vorher | EN vorher |
|---|---|---|
| hp-wbf-180 | 1 × LED-Lichterbaum Birke / 1 × Bedienungsanleitung | 1 × LED Light Tree Birch / 1 × User Manual |
| hp-ola-g40-15-eu | 1 × LED-Lichterkette mit G40-Glühbirnen und App / 1 × Fernbedienung | 1 × LED string light with G40 bulbs and app / 1 × remote control |
| hp-ola-g40-27-eu, -42-eu | wie -15-eu | wie -15-eu |
| hp-rgb-500a | 1 × Smarte RGB-Lichterkette mit App / 1 × Bedienungsanleitung | 1 × Smart RGB string lights with app / 1 × User manual |
| hp-uct-200-eu | 1 × LED-Lichtervorhang | 1 × LED light curtain |
| hp-fxf-001 | 1 × LED-Motivleuchte Rentier | 1 × LED Reindeer Novelty Light |
| hp-ol-30, hp-ol-50 | Lichterkette / Fernbedienung / Transformator / 3 Ersatzbirnen | String of lights / Remote control / Transformer / 3 replacement bulbs |

  Nachher steht überall genau der Wert aus der Tabelle des Auftrags.
- **Live geprüft:** 16:13 bis 16:21 Uhr, alle 18 Seiten DE und EN gegen die Aufnahme von 16:09 bis 16:12 Uhr. Geändert haben
  sich nur die Lieferumfang-Zeilen. hp-wbf-180 hat eine Antwort mit Platzhalter, sie folgt dem Feld:
  - DE: „Im Paket sind 1 × LED-Lichterbaum Birke, 1 × Kreuzfuß, 1 × Stange und 1 × Bedienungsanleitung.“
  - EN: „The box contains 1 × LED birch light tree, 1 × cross base, 1 × pole, and 1 × user manual.“
- **Unverändert:** `ol-g40-frage-4`, hp-wbf-210, hp-rgb-200a, hp-rgb-300a (Inhalt; zur Kleinschreibung siehe 0.1).

### Widersprüche in Blocktexten der neun Produkte (nur aufgelistet)

Durchsucht: Hauptinhalt DE und EN (Beschreibung, Feature-Blöcke, Pflege, Fragen, Technik), Stand vor dem Schreiben.

- **hp-ol-30 und hp-ol-50 nennen drei Ersatzbirnen:** Beschreibung „Drei Ersatzbirnen liegen für den Fall der Fälle
  bei.“ und `ol-g40-frage-4` „… und drei Ersatzbirnen liegen bei.“ Das passt zum Feld (3). Nennt Tyler für hp-ol-30
  zwei, müssen bei hp-ol-30 neben dem Feld auch diese beiden Texte geändert werden. `ol-g40-frage-4` teilen sich beide
  Produkte, dann braucht hp-ol-30 eine eigene Frage. Der Titel von hp-ol-50 nennt „50+3 G40“, der von hp-ol-30
  „30 G40“ ohne Zusatz.
- **Kein Widerspruch:**
  - hp-uct-200-eu und hp-rgb-500a nennen im Titel eine Fernbedienung, die jetzt auch im Lieferumfang steht.
  - hp-rgb-500a nennt die „Anleitung, die dem Produkt beiliegt“.
  - hp-fxf-001 beschreibt Rentier und Schlitten in den Bildtexten.
  - hp-ola-g40 nennt das Netzteil.
- **Zur Kenntnis:**
  - Der Pflegetext von OL-30/-50 spricht allgemein von „Netzteil oder Batteriefach“, die Kette läuft über einen Transformator.
  - hp-rgb-500a erwähnt einen „Controller“, der im Lieferumfang nicht eigens steht.
  - Der Titel von hp-fxf-001 nennt keinen Schlitten, Titel bleiben nach 0.5 unverändert.
- **Deutsch auf `/en/`** (schon bekannt, Punkt „Blocktexte ohne EN“):
  - Beschreibung und Fragen von hp-ol-30 und hp-ol-50.
  - Kicker „Fernbedienung“ bei OL-30/-50.
  - Antwort „Über ein Netzteil.“ bei OLA-G40.
- **Begriffe EN uneinheitlich:**
  - Seit 0.3 steht „spare bulb(s)“, bei OLS, OLH, OL-S11 und DFM-600M weiter „replacement bulb(s)“.
  - „LED birch light tree“ (WBF-180) neben „LED light tree birch“ (WBF-210, WWF-180).

## Nebenbefund: „not included“ mit Häkchen

- **Befund:** Auf `/en/` standen „Batteries not included“ (BSL, 4 Produkte) und „3 x AA batteries not included“
  (HP-BLT-050) mit Häkchen im Lieferumfang-Block. Erkannt wurden nur „nicht enthalten“ und „ohne“. In einer Antwort
  mit Platzhalter wäre die Zeile mitgezählt worden, keine der 17 Antworten hängt bisher an diesen Produkten.
- **Behoben:** Commit `796837c`, `heipard-fb-lieferumfang.liquid` und `heipard-fb-fragen.liquid`. Auch „not included“
  am Anfang oder Ende und „without“ am Anfang stehen jetzt ohne Häkchen und zählen nicht mit. Liquid-Test 20 Fälle,
  davon 3 neue für Englisch. Live seit 16:27 Uhr.
- **Gegenprobe 16:27 bis 16:30 Uhr:**
  - Auf `/en/` stehen die Zeilen bei hp-bsl-100-1p, -100-2p, -50-1p und hp-blt-050 jetzt ohne Häkchen.
  - Deutsch ist unverändert („Batterien nicht enthalten“ ohne Häkchen).
  - Auf zehn weiteren Seiten hat sich nichts geändert, auch nicht an den Antworten.

## 1. Video im Feature-Block

### Wo die Clips liegen

Zwei neue, freiwillige Felder am Metaobjekt `feature_block`, angelegt 22.11. gegen 16:25 Uhr:

- `video_einmal`: Clip „Licht an“, läuft einmal.
- `video_schleife`: Clip als Schleife.

Beide sind `file_reference` und nehmen nur Videos an.

- **Warum am Block:**
  - Beide Clips enden auf dem Bild, das schon im Block steht, und gehören damit zu diesem Bild.
  - Ein eigenes Metaobjekt wäre ein Umweg ohne Gewinn: ein Feld mehr am Block, ein Objekt mehr je Clip.
  - Ein Produkt-Metafeld scheidet aus. Die Bilder von B1 und Sticky liegen am Block, der von mehreren Produkten genutzt
    wird, und `feature_*` ist gesperrt.
- **Folge:** Ein Clip am Block erscheint auf allen Produkten, die den Block nutzen. `isl-b1` steckt im Set `isl` und
  damit an hp-isl-264, hp-isl-360-eu und hp-isl-486.
- **Begrenzung für den Test:** Ein Theme-Schalter „Videoclips“ unter den Theme-Einstellungen steuert das:
  - Aus.
  - Nur auf den Testseiten (Standard, Feld „Testseiten“ = `hp-isl-360-eu`).
  - Auf allen Seiten.

  Nach deiner Abnahme genügt „Auf allen Seiten“ oder ein weiterer Handle in „Testseiten“. „Aus“ ist zugleich der
  schnellste Rückweg, ohne Code.
- **Nur mit Bild am Block:** Kommt das Bild aus `feature_b1`/`feature_b2` (Produkt), bleibt der Clip aus, denn er würde
  nicht auf diesem Bild enden. Ein Block mit Medientyp „Video“ (B3) bleibt wie bisher.

### Umsetzung

Commit `c87d875`, live seit 16:27 Uhr. In der Gegenprobe (16:27 bis 16:30 Uhr) steht auf keiner Seite ein Clip, auch
nicht auf hp-isl-360-eu, weil noch kein Feld gesetzt ist:

- `heipard-feature-dispatch.liquid` reicht die Clips nur bei Bild am Block und nach dem Schalter weiter.
- `heipard-feature-block.liquid` legt ein `<video>` über das Bild, gleiche Klasse und damit gleiche Fläche und gleicher
  Ausschnitt. Die MP4-Fassungen, die Shopify aus dem Video erzeugt, stehen als Liste am Element.
- `heipard-feature.js` (`initClip`) übernimmt das Abspielen.
- `heipard-variant.js` übernimmt beim Variantenwechsel das laufende Element.
- `heipard-feature.css` blendet weich ein und aus.
- `settings_schema.json` enthält den Schalter.

### Prüfpunkte

Geprüft auf einem Prüfstand mit dem echten Theme-Code und zwei Roh-Clips aus dem Eingang der Asset-Instanz (nur lokal
kopiert, nichts hochgeladen), Edge, Desktop und mobil. Auf der Testseite folgt die Prüfung mit den echten Dateien
(Abschnitt 2).

| Punkt | Umsetzung | Prüfstand |
|---|---|---|
| 1 Bild bleibt | Bild unverändert im Markup (gleiche Größen, gleicher Alt), Video ohne Poster darüber, unsichtbar bis zum ersten Bild des Clips | ok |
| 2 Laden erst nahe am Sichtfeld | `preload="none"` ohne Quelle; Quelle erst 400 px vor dem Sichtfeld, Fassung nach dargestellter Größe | ok: weit weg keine Quelle, bei 30 % geladen, nicht gestartet |
| 3 „Einmal“ ab halber Sichtbarkeit, einmal je Aufruf | Start ab 50 % sichtbar, nach dem Ende Bild oder Schleife | ok: Start bei 60 %, nach 5 s Ende, Schleife übernimmt |
| 4 Schleife nur bei Sichtbarkeit | Pause, sobald der Block ganz aus dem Bild ist | ok |
| 5 Stumm, ohne Bedienelemente, kein Vollbild | `muted`, kein `controls`, `playsinline`, kein Bild-im-Bild, keine Klicks | ok |
| 6 Reduzierte Bewegung, Datensparmodus | Video wird gar nicht erst angelegt, auch nicht bei abgelehntem Autoplay (z. B. iOS-Stromsparmodus) | ok: kein Video |
| 7 Gleiche Fläche, nichts springt | Video mit gleicher Klasse, absolut über dem Bild; Banner 21:9 (mobil 4:3), Sticky 5:4, Zeilen 16:9 | ok: Fläche identisch (mobil 390 × 292,5), `object-fit: cover`, Mitte |
| 8 Variantenwechsel | gleicher Clip im neuen Markup: das laufende Element wird übernommen | ok: dasselbe Element, läuft weiter (1,5 s → 1,9 s); live siehe Abschnitt 2 |
| 9 Vorleseprogramme | `aria-hidden="true"`, `tabindex="-1"`, Bild behält seinen Alt | ok |
| 10 Höchstens ein Video | Der sichtbarste Clip spielt, alle anderen pausieren | ok: zweiter Clip übernimmt, erster pausiert |

- **Beim Bauen gefunden und behoben:** Kam ein zweiter Clip ins Bild, während der erste lief, übernahm er erst bei der
  nächsten Bewegung. Jetzt wird nach dem Laden neu entschieden.
- **Zum Ansehen:** Der Clip „Licht an“ beginnt mit ausgeschalteter Kette, das Bild darüber zeigt sie an. Abschnitt 2
  hat die Aufnahme dazu.
- **Nicht als „laut“ gezählt:** Die Clips zählen nicht gegen das Limit der lauten Blöcke, weil das Bild bleibt.
  Punkt 10 begrenzt sie auf einen zugleich.

## 2. Testseite hp-isl-360-eu

### Einbau

- **Übergabe:** Die Tabelle der Asset-Instanz (Auftrag 28) kam kurz nach 17 Uhr. Beide Clips sind bei Shopify als Video
  bereit (5,04 s, 2.200 × 940).
- **Geschrieben** am 22.11. um 17:10:05 Uhr an `isl-b1`, sonst nichts:
  - `video_einmal` = `ISL_B1_01_LICHTAN`
  - `video_schleife` = `ISL_B1_01_SCHLEIFE`
- **Testseite:** Der Schalter „Videoclips“ steht auf „Nur auf den Testseiten“ mit `hp-isl-360-eu`. hp-isl-264 und
  hp-isl-486 nutzen denselben Block und zeigen keinen Clip, live geprüft.
- **Fassungen:** Shopify erzeugt 480p und 720p (1.684 × 720). Liquid gibt aber nur die höchste MP4-Fassung aus. Die
  Seite lädt also immer 720p, auch mobil (siehe Messung).

### Prüfung live, 17:11 bis 17:22 Uhr

Edge, ohne Drosselung, mit echten Dateien:

| Fall | Ergebnis |
|---|---|
| DE und EN, Desktop und mobil | Clip lädt erst am Banner, startet ab halber Sichtbarkeit, „einmal“ endet nach 5 s, Schleife übernimmt; `aria-hidden`, keine Bedienelemente |
| Tag und Abendstimmung | gleiches Verhalten, der Banner hängt nicht am Modus |
| Reduzierte Bewegung | kein Video, keine MP4-Anfrage, Bild bleibt |
| Datei fehlt (MP4 gesperrt) | Clip beendet sich, Bild bleibt, nichts springt |
| Variantenwechsel | Dawn scrollt beim Wechsel zum Variantenbild der Galerie (gemessen: von 1.310 px auf 0). Der Clip pausiert, weil der Banner aus dem Bild ist. Er bleibt dasselbe Element und läuft beim Zurückscrollen an derselben Stelle weiter (2,1 s → 4,2 s), ohne Neustart. Bei sichtbarem Banner läuft er ohne Unterbrechung weiter (Prüfstand). |
| Gegenprobe | hp-isl-264 (DE, EN) und hp-isl-486: kein Clip |

### Übergang Clip und Standbild

Gemessen im Ausschnitt des Banners, Helligkeit 0 bis 255, mittlere Abweichung je Pixel:

| Stelle | Desktop | mobil |
|---|---|---|
| Letztes Bild „einmal“ gegen Standbild | 2,6; Helligkeit +0,3; 0,6 % der Pixel über 24 | 2,6; +0,8; 0,7 % |
| Erstes und letztes Bild der Schleife gegen Standbild | 2,4; +0,2; 0,5 % | 2,4; +0,6; 0,6 % |

- **Ende und Schleife:** kein sichtbarer Sprung in Zuschnitt oder Helligkeit. Die Reste sind Schärfe (720p gegen das
  Bild). Die Blende von 0,4 s glättet sie.
- **Anfang von „Licht an“, das solltest du dir ansehen:**
  - Das Standbild zeigt die Kette an, der Clip beginnt mit der Kette aus.
  - In der Aufnahme: 0,0 s Standbild an, 1,3 s Clip dunkel, ab 2 s wieder an.
  - Wer den Banner ansieht, erlebt also „an, dunkel, an“.
  - Alternative: Der Clip ersetzt das Bild schon, bevor der Banner halb sichtbar ist. Dann sähe man die dunkle Szene
    zuerst, und das Bild wäre nicht mehr Startbild. Das widerspräche Punkt 1, deshalb nicht gebaut.
- **Schleife:** Bei 4,1 s zieht eine große, unscharfe Schneeflocke durchs Bild. Sie kommt alle 5 s wieder (Hinweis
  der Asset-Instanz, in der Aufnahme zu sehen).

### Seitengewicht und Ladezeit

Mobil, gedrosselt wie Lighthouse „Slow 4G“ (150 ms, 1,6 Mbit/s, CPU vierfach), Edge, ohne Cache, Median aus drei
Läufen:

| Wert | vorher (16:25) | nachher, Stand `c87d875` (17:23) | nachher, Stand `99883fc` (17:27) |
|---|---|---|---|
| Übertragen beim Laden | 1.908 KB, 117 Anfragen | 1.911 KB, 119 | 1.919 KB, 120 |
| DOMContentLoaded / load | 5,5 s / 10,4 s | 5,1 s / 10,2 s | 5,6 s / 10,7 s |
| Größtes Element (LCP) | 10,4 s, erstes Galeriebild | 10,3 s, dasselbe | 10,7 s, dasselbe |
| Layoutverschiebung (CLS) | 0,157 | 0,157 | 0,157 bis 0,159 |
| Video, 20 s am Banner | – | Clip nach 12 s erst bei 2,9 s | Start nach 8 s, dann 5 s Clip in rund 9 s, 5,8 MB geladen |

- **Beim Laden ändert sich nichts.** Das Video lädt erst am Banner. Die Unterschiede bei Ladezeit und LCP liegen in der
  Schwankung zwischen den Läufen.
- **Am Banner ist 720p für langsames Mobilnetz zu schwer:**
  - Der Clip lädt langsamer, als er läuft.
  - Ohne Schutz stockt er, im ungünstigen Fall auf dem dunklen Bild „Kette aus“.
  - Seit `99883fc` startet er erst, wenn genug gepuffert ist. Nach 8 s versucht er es trotzdem, iOS puffert sonst nicht.
  - Bei 3G und schlechter gibt es keinen Clip.
  - Unter der Drosselung meldet der Testbrowser weiter „4g“. Deshalb sieht man hier den Weg über die Wartezeit.
- **Kleinere Fassung mobil:** Über das Theme allein geht es nicht, Liquid liefert nur 720p. Zwei Wege:
  - (a) HLS-Adresse (`m3u8`, liefert Liquid mit). Safari und Android-Chrome wählen die Qualität nach der Verbindung.
    Hier nicht testbar, das bräuchte eine Probe auf echten Geräten.
  - (b) Eigene Mobil-Fassungen (z. B. 1.122 × 480) als zweites Video je Clip von der Asset-Instanz, mit zwei weiteren
    Blockfeldern.

  Vorschlag: (a) zuerst auf einem iPhone und einem Android-Gerät probieren.
- **CLS 0,157 gab es schon vorher** (über 0,1). Die Ursache liegt oberhalb der Feature-Sektion, nicht bei den Clips.
  Notiert als offener Punkt, nicht untersucht.

### Aufnahmen für dich

- `docs/data/teilh-clip-desktop.webm` und `docs/data/teilh-clip-desktop.png` (Kontaktbogen): Desktop, Tag-Modus,
  15 s.
- `docs/data/teilh-clip-mobil.webm` und `docs/data/teilh-clip-mobil.png`: mobil, Abendstimmung, 14 s.

Beide zeigen den Banner von „Bild“ über „Licht an“ bis in die Schleife.

### Nach deiner Abnahme

Für die Breite schalte ich „Videoclips“ auf „Auf allen Seiten“ oder trage die Handles einzeln in „Testseiten“ ein und
setze die Felder an den Blöcken:

- `dpm-b1`, `ctl-b1`, `dct-b1`, `dct-sticky`, `olg-b1`
- B2 der DFM-Sets

**Achtung OLG:** `olg-b1` ist ein warmweißes Bild. Der warmweiße Clip erschiene auf allen Produkten, deren Set `olg-b1`
enthält, also auch auf den kaltweißen und bunten. Welche Seiten das sind, lese ich vor dem Einbau aus den Sets aus und
lege sie dir vor. Die vorn gekürzte Fassung des OLG-Clips liegt noch nicht in Files.

## 3. Hero der Startseite (Vorschau)

### Vorschau

- **Theme:** „zz-vorschau Teil H Hero (kann weg)“ (#199733903693), unveröffentlicht. Code auf dem Branch
  `vorschau/hero-tag-abend` (`72b61a7`, `8325326`, `d211cbb`), nicht auf `main`.
- **Links** (Shop-Passwort nötig):
  - Fassung 1: `https://heipard.myshopify.com/?preview_theme_id=199733903693&hero_fassung=1`
  - Fassung 2: dieselbe Adresse mit `hero_fassung=2`
  - Fassung 3: dieselbe Adresse mit `hero_fassung=3`
  - Die Wahl über die Adresse geht nur in unveröffentlichten Themes.
- **Bilder und Clips:**
  - Tag: `HOME_HERO_TAG.jpg`
  - Abend: `HOME-03_Bento_gross_Party_Terrasse`
  - Clips: `HOME_HERO_LICHTAN` und `HOME_HERO_LICHTAUS`
- **Einstellungen im Abschnitt:**
  - „Bild je Modus“: aus, Fassung 1, 2 oder 3. Standard „aus“ verhält sich wie heute.
  - Tagbild, die zwei Clips.
  - „Zusätzlicher Verlauf im Tag-Modus“.
  - „Bildausschnitt mobil“.

| Fassung | Verhalten | geprüft (17:31 bis 17:37 Uhr, Desktop und mobil) |
|---|---|---|
| 1 | Tagbild im Tag-Modus, Abendbild in der Abendstimmung, weiche Blende 0,8 s | ok, kein Video |
| 2 | wie 1; beim Umschalten läuft „Licht an“ bzw. „Licht aus“ (8 s). Das Bild wechselt erst unter dem laufenden Clip, am Ende gibt der Clip das Zielbild frei | ok in beide Richtungen |
| 3 | wie 2; beim ersten Aufruf je Sitzung in der Abendstimmung startet die Seite mit dem Tagbild und spielt nach dem Laden einmal „Licht an“ | ok; beim zweiten Aufruf gleich das Abendbild |

- **Laden:** Die Clips laden erst, wenn jemand zum Lichtschalter greift (Maus darüber, Fokus, Antippen). Fassung 3
  lädt nach dem Laden der Seite.
- **Wenn der Clip nicht bereit ist:** Läuft er nach 2,5 s nicht, wechselt nur das Bild.
- **Bewegung und Datensparmodus:** Bei reduzierter Bewegung und im Datensparmodus gibt es keinen Clip.
- **Umschalten mitten im Clip:** Der Gegenclip setzt an der gespiegelten Stelle ein. Das ist eingebaut, aber nicht
  eigens geprüft.
- **Gewicht:**
  - Liquid liefert für die Hero-Clips nur die 1080p-Fassung, rund 7 MB je 8-s-Clip.
  - Mobil ist das viel.
  - Vorschlag: Die Asset-Instanz lädt die Hero-Clips zusätzlich höchstens in 720p hoch (rund 4,5 MB), oder HLS wie in
    Abschnitt 2.
- **Ablauf der Clips:**
  - Die Lichter gehen in 0,2 bis 0,8 s an.
  - Abgedunkelt wird bis etwa 6 s, der Hintergrund wird zwischen 3 und 6 s unscharf.
  - Der Auftrag nannte einen Wechsel in den ersten rund 2,5 s. Ob die 8 s im Hero zu lang wirken, siehst du in den
    Aufnahmen.

### Lesbarkeit

Kontrast der weißen Schrift zum Hintergrund unter Überschrift und Subline (Text ausgeblendet), an den hellsten
10 % der Fläche, Tagbild:

| Verlauf | Desktop Überschrift / Subline | mobil Überschrift / Subline |
|---|---|---|
| ohne Verlauf (so wirkt der Hero heute, siehe Befund) | 4,6 / 4,6 | 2,6 / 2,7 |
| nur der Grundverlauf | 7,4 / 10,1 | 3,6 / 4,7 |
| Grundverlauf + 35 % im Tag-Modus | 10,0 / 13,5 | 4,4 / 6,5 |
| Grundverlauf + 55 % im Tag-Modus | 11,6 / 15,2 | 5,0 / 7,8 |

- **Ergebnis:**
  - Das helle Tagbild trägt die weiße Schrift mobil nur mit Verlauf.
  - Mit 35 % zusätzlich liegt die Subline mobil bei 6,5:1, die große Überschrift bei 4,4:1. Für große Schrift reichen 3:1.
  - In der Vorschau stehen 35 %. 55 % gibt mehr Abstand, dunkelt das Tagbild aber spürbar ab.
- **Befund, auch im Live-Hero:**
  - Dawn blendet jedes leere `div` aus (`base.css`: `div:empty { display: none }`).
  - Die Verlaufsebene des Hero ist ein leeres `div` und wurde deshalb nie gezeichnet.
  - Der Hero zeigt heute die Abendszene ohne den vorgesehenen Verlauf.
  - In der Vorschau ist das behoben (`d211cbb`).
  - Live würde der Hero dadurch unten und links etwas dunkler, so wie im Lovable-Vorbild. Das ändere ich nur mit deinem
    Ja.

### Doppeltes Motiv

Das Abendbild steht auch in der ersten Bento-Kachel „Party & Terrasse“ direkt darunter. Alle HOME-Bilder sind auf der
Startseite schon vergeben. Infrage kommen Szenenbilder aus Files, alle warmweiß bei Dämmerung, querformatig. Sie werden
schon auf Produktseiten genutzt:

1. `OLS11_R2_01`: S11-Kette an der Vorderkante einer Pergola über einem langen Gartentisch. Am nächsten an „Party &
   Terrasse“.
2. `OLAG40_R1_01`: G40-Kette in zwei Bögen über einem Gartentisch.
3. `OLG40_B1_01`: warm beleuchtete Gartenterrasse am Abend, 2.800 × 1.200 (21:9, für die große Kachel eher schmal).

Geändert habe ich an der Kachel nichts.

### Mobil

- **Ausschnitt:** Der Hero ist mobil 390 × 600 px groß. Aus dem 16:9-Bild bleibt die Mitte, rund 37 % der Breite.
- **Was zu sehen ist:** Die Lichterketten liegen oben im Bild und bleiben in beiden Bildern und im Clip gut sichtbar.
  Der gedeckte Tisch rückt an den rechten Rand.
- **Verschieben:** Mit „Bildausschnitt mobil“ lässt sich der Ausschnitt verschieben (gilt für Bilder und Clip). In der
  Vorschau steht die Mitte (50 %).

### Aufnahmen für dich

- `docs/data/teilh-hero-f1.webm`, `-f2.webm`, `-f3.webm`: Desktop, je mit Kontaktbogen (`.png`).
  - Fassung 1 und 2: Tag laden, umschalten, zurückschalten.
  - Fassung 3: Abend laden (Intro), dann umschalten.
- `docs/data/teilh-hero-f2-mobil.webm`: mobil, Fassung 2.

### Nebenbei gesehen

Die Saison-Kachel unter dem Hero zeigt live „[TBD: Saison-Überschrift]“.

## 0.4 Nachtrag: Nachladen nach den Uploads der Asset-Instanz

- **Uploads:** Die Asset-Instanz hat um 17:00 bis 17:01 Uhr geschrieben.
- **Nachgeladen** von 17:13 bis 17:23 Uhr, mit allen Varianten (`?variant=`):
  - hp-fsf-120, hp-fxf-001, hp-uct-200-eu, hp-dnm-208, hp-isl-486
  - DE und EN, Desktop und mobil, 56 Seiten
- **Desktop und mobil:** Auf allen 28 Seitenpaaren stimmen Reihenfolge, aktives Bild und Alt-Texte überein.
- **Medien:** An den Medien habe ich nichts geändert.

| Produkt | Position 1 / erstes Bild | Reihenfolge, neue Bilder | Alt neu (DE/EN) |
|---|---|---|---|
| hp-fsf-120 | unverändert `81QbG6_nqL` (ohne Alt, schon vorher) | `FSF-120_GAL_07` am Ende, 7 Bilder | ja / ja |
| hp-fxf-001 | neu `FXF-001_GAL_07`, das Lagerfoto ist weg | `GAL_01` bis `05`, dann `06`, `08`, `09`, 9 Bilder, alle mit Alt | ja / ja |
| hp-uct-200-eu | je Variante ihr Variantenbild | `UCC-200_GAL_02` nur an UCC-200 (warmweiß, Kupfer), `UCC-200W_GAL_01` nur an UCC-200W (kaltweiß, Kupfer) | ja / ja |
| hp-dnm-208 | **Variantenbild `71TIXKmc_8L` zuerst** (beide Varianten), die neue Position 1 `GAL_06` steht an zweiter Stelle | Warmweiß: `GAL_06`, `GAL_01` bis `05`; Multicolor: `GAL_06`, `208M_GAL_01` | ja / ja |
| hp-isl-486 | je Variante ihr Variantenbild | 486W und 648W (kaltweiß): `486W_GAL_01`, `_02`; 486M und 648M (bunt): `486M_GAL_01` | ja / ja |

**Lichtfarbe je Variante:**

- **Neue Bilder:** Alle neuen Bilder erscheinen nur in ihrer Lichtfarbe.
- **hp-dnm-208, Multicolor:**
  - Die bunte Variante zeigt als zweites Bild das warmweiße `GAL_06`.
  - Es steht auf Position 1 und in keiner Variantenliste, der Farbfilter lässt es deshalb bei allen Varianten stehen.
  - Abhilfe wäre, `GAL_06` in die Liste von HP-DNM-208 aufzunehmen. Das ist eine Medienänderung für die Asset-Instanz.
  - Dazu kommt der Hinweis der Asset-Instanz: Solange beide Varianten `71TIXKmc_8L` als Variantenbild tragen, ist die
    neue Position 1 nirgends das erste Bild.
- **hp-isl-486, kaltweiß und bunt:**
  - Die kaltweißen und bunten Varianten zeigen an zweiter Stelle das warmweiße Bild `81bxkT599wL` (Position 1).
  - Das war schon vor Auftrag 28 so, Position 1 bleibt beim Farbfilter immer sichtbar.
- **hp-uct-200-eu:** Die Amazon-Bilder ohne Alt kann ich über den Dateinamen keiner Lichtfarbe zuordnen. Ihre
  Verteilung hat sich nicht geändert.

**Zur Kenntnis:** `ISL-486W_GAL_02` und `ISL-486M_GAL_01` sind Collagen im Amazon-Stil, ein Partyfoto mit drei
eingesetzten kleinen Fotos, ohne Text.

## 0.5 Titel

Nichts geändert.

## Schreibvorgänge

| Zeit | Objekt | Änderung |
|---|---|---|
| 22.11., 16:10–16:11 | 64 Felder `heipard.lieferumfang`, EN | Kleinschreibung (0.1) |
| 22.11., gegen 16:11:50 | hp-dfm-600 (Titel, SEO-Titel), hp-dfm-750-eu (Titel), hp-vit-864l-eu-1 (Meta-Beschreibung), EN | „multicolor“ (0.2) |
| 22.11., 16:12:18 | neun Felder `heipard.lieferumfang`, DE | Werte der Tabelle (0.3) |
| 22.11., gegen 16:12:40 | dieselben neun, EN | Werte der Tabelle (0.3) |
| 22.11., gegen 16:25 | Definition `feature_block` | Felder `video_einmal`, `video_schleife` (leer) |
| 22.11., 16:27:13–15 | Live-Theme (über Git) | Commits `796837c`, `c87d875` |
| 22.11., 17:10:05 | Metaobjekt `isl-b1` | `video_einmal`, `video_schleife` gesetzt |
| 22.11., 17:26:24 | Live-Theme (über Git) | Commit `99883fc` |
| 22.11., gegen 17:30 | Theme #199733903693 (neu, unveröffentlicht) | Kopie des Live-Themes für die Hero-Vorschau |
| 22.11., 17:30 bis 17:46 | Theme #199733903693 | Hero-Abschnitt und Skript vom Branch, Startseiten-Vorlage (Bilder, Clips, Fassung, Verlauf; Vergleich 0/35/55 %, steht auf 35 %) |
| 22.11., 17:29 bis 17:42:26 | Live-Theme (über Git) | Commits `c5a01ce`, `71ce880` (Endstand geprüft) |

## Commits

`main` (live):

- `796837c` Lieferumfang: englische Zeilen „not included“ ohne Häkchen
- `c87d875` Feature-Blöcke: Clips „einmal“ und „Schleife“ über dem Bild
- `cb88297` Doku: Teil H, Bericht 0.1 bis 0.3 und Abschnitt 1, Vorher-Werte
- `99883fc` Clips: erst starten, wenn genug gepuffert ist; kein Clip bei 3G
- `c5a01ce` Clips: Fassung nach Pixeldichte höchstens 1,5. Die Nachricht verspricht mobil 480p, das gilt nicht, siehe
  `71ce880`.
- `71ce880` Clips: Kommentar zur Fassungswahl berichtigt (Liquid liefert nur die höchste)
- Doku-Commit dieses Nachtrags

Branch `vorschau/hero-tag-abend` (nicht live, nur im Vorschau-Theme):

- `72b61a7` Lichtschalter schaltet Tag- und Abendbild, Clips
- `8325326` Tag-Verlauf gegen die allgemeine Verlaufsregel durchsetzen
- `d211cbb` Verläufe sichtbar machen (Dawn `div:empty`)

`shopify theme check` vor jedem Commit: keine Befunde in den geänderten Dateien (die 15 übrigen in 12 anderen Dateien
gab es schon vorher).

## Rückweg

- 0.1 bis 0.3: Werte aus `docs/data/teilh-vorher.json` zurückschreiben. EN mit `translationsRegister` und dem
  aktuellen Digest, DE mit `metafieldsSet`, bei 0.3 erst DE, dann EN.
- Clips:
  - Theme-Schalter „Videoclips“ auf „Aus“, ohne Code.
  - Oder die Felder an `isl-b1` leeren.
  - Code: `git revert 71ce880 c5a01ce 99883fc c87d875`.
- Häkchen: `git revert 796837c`.
- Hero: nichts live. Das Vorschau-Theme kann gelöscht werden.

## Offen

1. **Abnahme Clips** auf hp-isl-360-eu, besonders der Anfang „an, dunkel, an“ (Abschnitt 2), danach die Breite. OLG-Seiten
   lege ich vor dem Einbau vor.
2. **Mobil kleinere Clip-Fassung:** HLS auf echten Geräten probieren oder Mobil-Fassungen von der Asset-Instanz
   (Abschnitt 2).
3. **Hero:** Fassung 1, 2 oder 3, Verlauf (35 % vorgeschlagen), Bild für die Bento-Kachel, kleinere Hero-Clips. Danach
   baue ich den Abschnitt auf `main` ein, Standard „aus“.
4. **Hero-Verlauf live** (Befund `div:empty`): beheben, ja oder nein.
5. **hp-dnm-208:** `GAL_06` in die Liste HP-DNM-208 und Variantenbilder umstellen. Beides gehört zur Asset-Instanz
   oder zu dir (0.4).
6. **Ersatzbirnen hp-ol-30** [prüfen], Frage an Tyler. Bei zwei auch Beschreibung und eine eigene Frage statt
   `ol-g40-frage-4` (siehe 0.3).
7. **hp-wbf-210, hp-rgb-200a, hp-rgb-300a:** Inhalt in Prüfung bei der Asset-Instanz, Kleinschreibung schon angewandt (0.1).
8. **Begriffe EN:** „spare bulb“ oder „replacement bulb“, „birch light tree“ oder „light tree birch“. Entscheidung bei dir.
9. **CLS 0,157** auf der Produktseite mobil, schon vor den Clips.
10. **Vorschau-Themes löschen,** sobald entschieden: #199733903693 (Teil H). #199725613389 (Teil G) löschst du laut
    Auftrag schon.
11. **„[TBD: Saison-Überschrift]“** auf der Startseite.
