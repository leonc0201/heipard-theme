# Teil K: Übersetzungen Spanisch, Französisch, Italienisch

**Stand:** 23.11.2026, 01:42 Uhr (deutsche Zeit, lokal `date`). Nur gelesen, im Shop nichts geschrieben.

**Für:** Daniel, zur Klärung des Übersetzungswegs.

## Quelle

- Admin API 2026-10 über den Shopify-Connector, Shop „HeiPard“ (`get-shop-info`). Lesungen am 23.11. von 01:10 bis 01:40 Uhr.
- Je Ressource der deutsche Ausgangstext (`translatableContent`) und die Übersetzungen (`translations`) für es, fr, it und zum Vergleich en, mit `outdated` und `updatedAt`.
- Ressourcentypen:
  - `ONLINE_STORE_THEME`: nur das Live-Theme „heipard-theme/main“ (#192437387597). Es enthält `ONLINE_STORE_THEME_LOCALE_CONTENT` (4917 Sprachtexte), `ONLINE_STORE_THEME_JSON_TEMPLATE` (8 Vorlagen) und `ONLINE_STORE_THEME_SECTION_GROUP` (Footer, Header). Die beiden Teiltypen habe ich einzeln gegengeprüft: dieselben Schlüssel.
  - `ONLINE_STORE_THEME_SETTINGS_DATA_SECTIONS`: abfragbar, aber ohne Inhalt. `ONLINE_STORE_THEME_SETTINGS_CATEGORY`, `ONLINE_STORE_THEME_APP_EMBED`, `ARTICLE`, `ARTICLE_IMAGE`: keine Einträge.
  - `PRODUCT` (119), dazu `PRODUCT_OPTION` (131) und die Produkt-Metafelder (1404) über `nestedTranslatableResources`.
  - Text-Metafelder der Varianten (31) über `translatableResourcesByIds`.
  - `PRODUCT_OPTION_VALUE` (195), `COLLECTION` (73), `COLLECTION_IMAGE` (52), `PAGE` (2), `METAOBJECT` (610), `MENU` (5), `LINK` (16), `SHOP`, `SHOP_POLICY` (6), `FILTER` (5), `MEDIA_IMAGE` (1838), `BLOG` (1), `DELIVERY_METHOD_DEFINITION` (4).
  - `METAFIELD` steht in 2026-10 nicht in der Aufzählung `TranslatableResourceType`. Deshalb der Weg über die Produkte. Nicht abgefragt: Metafelder an Kollektionen sowie Zahl-, Datei- und Verweis-Metafelder der Varianten.
- Gezählt sind Felder mit deutschem Text, den Kunden sehen können. Nicht gezählt: Handles, Links, Bild- und Dateiverweise, reine Zahlen und Maße, „Default Title“, reine Mailadressen, die Steuerfelder der Feature-Blöcke (`layout`, `media_type`, `media_side`, `overlay_theme`, `variant`), die Etiketten `label` (auch englisch nie übersetzt) und die Kategorie-Schlüssel der Pflege-Einträge.
- Rohdaten und Auswerteskripte: `C:\Users\BOZHON~1\AppData\Local\Temp\claude\ee5ecad1592f5ac4\37ca283f-0f39-48c9-a3c1-62e4efbf577a\scratchpad\fd\teilk\esfrit\` (Ordner `raw`, Auswertung `analysis.json`).

**Lesehilfen:**
- Zeiten in deutscher Zeit, bis 24.10. Sommerzeit.
- `updatedAt` einer veralteten Übersetzung zeigt den Zeitpunkt, zu dem sich der deutsche Text änderte. Der Wert bleibt der alte. Beispiel: Die es/fr/it-Produkttitel tragen 22.11., 21:09 bis 21:13 Uhr, also die Zeit der Titelrunde aus Teil J, enthalten aber die alten Titel.
- In Zitaten steht {Strich} für einen Halbgeviert- oder Geviertstrich im Shoptext. Zeilenumbrüche in Listen stehen als „ / “. „…“ in einem Zitat heißt: gekürzt.
- Fehlt eine Übersetzung, zeigt Shopify bei Shop-Inhalten den deutschen Text. Bei Theme-Sprachtexten (`heipard.*`) greift die Standard-Sprachdatei `locales/en.default.json`, also Englisch (Showroom-Bericht 16.11., Abschnitt 7; im Repo z. B. „Pause animation“).
- „Stelle“ nennt den Bereich in Translate & Adapt: Theme (Vorlage, Abschnitt, Feld oder Sprachschlüssel), Produkt (Handle, Feld), Metafeld (Produkt-Handle, Schlüssel), Metaobjekt (Typ, Feld), Richtlinie.

**Vorab:** Spanisch, Französisch und Italienisch sind wieder veröffentlicht.
- `shopLocales` meldet für es, fr und it `published: true`.
- Die Startseite nennt `hreflang` „es“, „fr“ und „it“.
- `/es/`, `/fr/` und `/it/` leiten auf die Passwortseite der Sprache (302), nicht auf 404.
- Laut Teil J waren die drei Sprachen am 22.11. gegen 20:31 Uhr unveröffentlicht. Wann und durch wen sie wieder eingeschaltet wurden, zeigt die API nicht.

## Kurzfassung

| | Spanisch | Französisch | Italienisch |
|---|---|---|---|
| Geprüfte Textfelder | 9143 | 9143 | 9143 |
| davon Theme-Sprachtexte (meist Shopify- und Dawn-Standard) | 4864 | 4864 | 4864 |
| aktuell (nicht veraltet) | 6195 | 6197 | 6195 |
| veraltet | 168 | 167 | 170 |
| fehlend | 2780 | 2779 | 2778 |
| Falsche Zusagen (Startseite, Footer, Rechtstexte) | 6 Stellen | 7 Stellen | 6 Stellen |
| Lieferumfang falsch (veraltet) | 17 Produkte | 17 Produkte | 17 Produkte |
| Falsch übersetzt, eindeutig | 144 Felder in 5 Gruppen | 34 Felder in 8 Gruppen | 26 Felder in 3 Gruppen |
| Zu prüfen: Stromquelle „Netz“ | 82 Produkte | 82 Produkte | 82 Produkte |

Das Wichtigste:
- **Rückgabe:** Die Trust-Leiste verspricht in allen drei Sprachen 30 Tage Rückgaberecht, es und it „ohne Wenn und Aber“, fr „ohne jedes Zögern“. Deutsch steht dort „Lichterketten & Solarleuchten“ und „Für drinnen und draußen“.
- **Herkunft und Service:** Die Story nennt den Niederrhein als Heimat, verspricht geprüfte Ketten und (es, it) Service in der Landessprache. Französisch steht im Footer und in der Story „Bas-Rhin“, ein Département im Elsass.
- **Rechtstexte:** AGB es und it mit deutschen Platzhaltern „[URL des Online-Shops]“ und „[Telefonnummer]“. AGB fr ist ein anderer, allgemeiner Text. Impressum fr mit „[Telephone]“ und „Kamer van Koophandel (KVK)“. Widerrufsbelehrung es und it ohne Telefonnummer.
- **Lieferumfang:** An 17 Produkten fehlen Teile (Erdspieß, Netzteil, Ersatzbirnen, Fernbedienung). RGB-Ketten nennen ein USB-Ladekabel statt Netzteil und Fernbedienung.
- **Maschinenfehler:** Spanisch „Multicolor彩在线“ an 30 Stellen. Familien- und Dramaturgie-Codes übersetzt (es „Tribunal Superior de Justicia“, „estándar“, „héroe“; fr „RVB“, „Tr/min“, „héros“; it „eroe“). Das Theme vergleicht diese Werte.
- **Veraltet:** vor allem die Produkttitel (es 98, fr 101, it 100), alle seit der Titelrunde am 22.11.
- **Fehlend:** alle Produktfragen, Feature-Blöcke und Sets (1612 Felder), alle Bild-Alt-Texte (1012), die Saison-Sektion der Startseite, die Kollektion „Weihnachten“, die 16 Optionswerte und 5 Optionen vom 22.11.
- **Übersetzungsweg:** Ein wiederkehrender Automatismus übersetzt fehlende Produkt-Metafelder, Kollektionen und Theme-Sprachtexte, zuletzt am Donnerstag, 19.11., 21:27 bis 21:34 Uhr. Seit 22.11., 21:24 Uhr hat sich keine Übersetzung geändert. Details unten.

## Spanisch (es)

### Falsche Zusagen

| Stelle | Text heute | Problem |
|---|---|---|
| Theme, Vorlage Startseite (`index.json`), Abschnitt Trust-Leiste `heipard_trust_bar`, Block s3, Feld `title` | „30 días de derecho de devolución“ | DE „Lichterketten & Solarleuchten“. Verspricht 30 Tage Rückgaberecht, das steht im deutschen Text nicht. Veraltet seit 11.09., 12:49 Uhr. |
| dieselbe Stelle, Block s3, Feld `subline` | „Sin peros“ | DE „Für drinnen und draußen“. „Ohne Wenn und Aber“ als Zusatz zur Rückgabe. Veraltet seit 11.09. |
| Theme, Startseite, Abschnitt Story `heipard_story`, Feld `heading` | „Nuestra tierra, el Bajo Rin.“ | DE „Licht, das Abende länger macht.“ Veraltet seit 04.09., 12:12 Uhr. |
| Theme, Startseite, Story, Feld `body` | „HeiPard tiene su hogar en el Bajo Rin. Te traemos luces que transforman los espacios y alargan las veladas. Cada guirnalda de luces se revisa antes de viajar hasta ti {Strich} y nuestra atención al cliente habla tu idioma.“ | DE: „HeiPard ist eine Marke aus Deutschland. In unserem Shop bekommst du unser Licht direkt von uns, und wenn du Fragen hast, hilft dir unser Service persönlich weiter.“ Die Zusagen „jede Kette wird vor dem Versand geprüft“ und „der Service spricht deine Sprache“ stehen dort nicht. Veraltet seit 04.09. |
| Richtlinie AGB (Terms of service), Kopf | „para la tienda en línea en la URL [URL des Online-Shops] … Correo electrónico: info@heipard.com [Telefonnummer]“ | DE: „heipard.com“ und „02154 953 65 30“. Deutsche Platzhalter statt Adresse und Telefonnummer. Veraltet seit 16.10., 14:25 Uhr. |
| Richtlinie Widerrufsbelehrung (Refund policy), Absatz zur Ausübung des Widerrufs | „(C & L Handels GmbH, HeiPard, Formerweg 12, 47877 Willich, correo electrónico: info@heipard.com)“ | DE: „(C & L Handels GmbH, Formerweg 12, 47877 Willich, Telefon: +49-(0)2154-95365-30, E-Mail: info@heipard.com)“. Telefonnummer fehlt. Veraltet seit 10.09., 12:42 Uhr. |
| Metafeld `heipard.lieferumfang` an hp-ols-a60-16-eu, hp-ols-g40-16, hp-ols-s17-16, hp-scwl-10m2p-mc, hp-scwl-15m2p-mc, hp-solm-12m-ww | z. B. hp-ols-g40-16: „1 × Guirnalda de luces solares con bombillas G40 / 1 × Mando a distancia / 1 × Panel solar / 1 × Manual de instrucciones“ | DE seit 20.11., 02:11 Uhr mit „1 × Erdspieß“. Der Erdspieß fehlt an allen sechs. |
| Metafeld `heipard.lieferumfang` an hp-ola-g40-15-eu, hp-ola-g40-27-eu, hp-ola-g40-42-eu | „1 × Guirnalda de luces LED con bombillas G40 y aplicación / 1 × Control remoto“ | DE seit 22.11., 16:12 Uhr zusätzlich „1 × Netzteil“ und „1 × Ersatzbirne“ (15-eu) bzw. „2 × Ersatzbirnen“. |
| Metafeld `heipard.lieferumfang` an hp-rgb-200a, hp-rgb-300a, hp-rgb-500a | 200a, 300a: „1 × Guirnalda de luces RGB inteligente con App / 1 × Cable de carga USB / 1 × Manual de instrucciones“; 500a: „1 × Guirnalda de luces RGB inteligente con app / 1 × Manual de instrucciones“ | DE: „1 × Smarte RGB-Lichterkette mit App / 1 × Fernbedienung / 1 × Netzteil / 1 × Bedienungsanleitung“. Ladekabel statt Netzteil, Fernbedienung fehlt. Veraltet seit 22.11., 18:29 Uhr (200a, 300a) bzw. 16:12 Uhr (500a). |
| Metafeld `heipard.lieferumfang` an hp-ol-30, hp-ol-50 | „Guirnalda de luces / Mando a distancia / Transformador / 3 bombillas de repuesto“ | DE: „1 × LED-Lichterkette mit G40-Glühbirnen / 1 × Fernbedienung / 1 × Transformator / 3 × Ersatzbirnen / 1 × Bedienungsanleitung“. Bedienungsanleitung fehlt. Veraltet seit 22.11., 16:12 Uhr. |
| Metafeld `heipard.lieferumfang` an hp-uct-200-eu, hp-wbf-180, hp-fxf-001 | „1 × Cortina de luces LED“; „1 × Árbol de luces LED abedul / 1 × Manual de instrucciones“; „1 × Lámpara LED decorativa de reno“ | DE: „1 × LED-Lichtervorhang / 1 × Fernbedienung“; „1 × LED-Lichterbaum Birke / 1 × Kreuzfuß / 1 × Stange / 1 × Bedienungsanleitung“; „1 × LED-Motivleuchte Rentier mit Schlitten“. Es fehlen Fernbedienung, Kreuzfuß und Stange, Schlitten. Veraltet seit 22.11., 16:12 Uhr. |

### Falsch übersetzt

| Stelle | Text heute | Problem |
|---|---|---|
| Optionswert „Multicolor“ (Variantenwahl) an hp-ctl-210-eu-1, hp-ctl-400-eu-1, hp-dct-200, hp-dfm-400-eu-2, hp-dfm-600, hp-dfm-750-eu, hp-dnm-208, hp-dpm-300, hp-isl-264, hp-isl-360-eu, hp-isl-486, hp-npt-210, hp-scwl-10m2p-mc, hp-scwl-15m2p-mc (14) | „Multicolor彩在线“ | DE „Multicolor“. Chinesische Zeichen angehängt, maschinell am 27.10. |
| Metafeld `heipard.lichtfarbe` an hp-ctl-180m, hp-ctl-240m, hp-dgm-002, hp-olg-200m, hp-rct-400, hp-rfm-600, hp-rgb-200a, hp-rgb-300a, hp-rgb-500a, hp-rit-280, hp-rnm-200, hp-rpm-200, hp-rsp-180, hp-rtm-400, hp-vit-864l-eu-1 (15) | „Multicolor彩在线“ | wie oben. |
| Theme-Sprachtext `heipard.blocks.farbwechsel.multi` | „Multicolor彩在线“ | wie oben, Block Farbwechsel. |
| Metafeld `heipard.familie` an hp-olg-200m, hp-olg-200w, hp-olg-800 | „Tribunal Superior de Justicia“ | DE „OLG“ (Familien-Code), wie englisch „Higher Regional Court“. Die Serienleiter vergleicht den Wert (`snippets/heipard-fb-serienleiter.liquid`, Zeile 61). Die übrigen fünf OLG-Produkte stehen spanisch auf „OLG“. |
| Metafeld `heipard.dramaturgie` an 86 Produkten mit „standard“ und an 21 mit „hero“ (hp-blm-100-eu, hp-blt-050, hp-blt-100-eu-1, hp-ctl-180m, hp-ctl-210-eu-1, hp-ctl-240m, hp-ctl-400-eu-1, hp-dct-200, hp-dfm-400-eu-2, hp-dfm-600, hp-dfm-750-eu, hp-npt-210, hp-ol-30, hp-ol-50, hp-ola-s14-15-eu, hp-ola-s14-30-eu, hp-ola-s14-50-eu, hp-sblb-100l-ww-new, hp-sblb-60l-ww-new, hp-vit-586l-eu-1, hp-vit-864l-eu-1) | „estándar“, „héroe“ | DE „standard“, „hero“ (Steuerwerte). Das Theme liest den Wert (`sections/heipard-feature.liquid`, Zeilen 61 bis 85). Vermutung: Spanisch gelten dann Blockgrenze und Vorlage wie bei „longtail“. |
| Theme-Sprachtexte Zeitband `heipard.blocks.zeitband.on.other`, `off.one`, `off.other` | „{{ count }} horas en“, „{{ count }} horas restantes“, „{{ count }} horas restantes“ | DE „{{ count }} Stunden an“, „{{ count }} Stunde aus“, „{{ count }} Stunden aus“. Der erste Text bricht ab, die beiden anderen heißen „verbleibende Stunden“. |
| Theme, Vorlage Produkt (`product.json`), Abschnitt `related`, Feld `kicker` | „Combina con“ | DE „Passt dazu“. Unvollständig („passt zu …“). |

Zu prüfen: Metafeld `heipard.stromquelle` an 82 Produkten „Red“ (DE „Netz“). Mehrdeutig wie englisch „Network“, gemeint ist Netzstrom.

### Veraltet (zusammengefasst)

| Stelle | Anzahl | Beispiele und Grund |
|---|---|---|
| Produkt, Feld `title` | 98 | Grund: Titelrunde am 22.11., 21:09 bis 21:12 Uhr (Teil J). Beispiele: hp-u20-200 „Tubo luminoso exterior HeiPard 200+400 LED“ (DE „HeiPard LED-Lichterschlauch 10 m oder 20 m, warmweiß, für außen“); hp-ucp-200 „Cortina de luces USB HeiPard 200 blanco cálido“ (DE „HeiPard USB-LED-Lichtervorhang 3 x 2 m oder 3 x 3 m, in drei Lichtfarben“). Auffällig: hp-bsm-002 „Venta de guirnalda de luces navideñas HeiPard estilo ciervo, 2 unidades“ („Verkauf von …“), hp-wbf-210 „Árbol luminoso HeiPard Baum blanco cálido abedul 210 cm“ (deutsches „Baum“). |
| Produkt, Feld `meta_title` | 14 | Titelrunde 22.11. Weitere 69 fehlen (unten). |
| Produkt, Feld `meta_description` | 20 | Welle-2-Produkte. Deutsch am 22.11. um 21:10 Uhr geleert und um 21:22 Uhr wiederhergestellt (Teil J), die Übersetzungen sind vom 27.10. Bei hp-vit-586l-eu-1, hp-vit-864l-eu-1, hp-ctl-180m, hp-ctl-240m Wortlaut prüfen (dort deutsch aus dem Englischen zurückgeführt). Beispiel hp-dgm-001. |
| Metafeld `heipard.lieferumfang` | 17 | siehe Falsche Zusagen. |
| Theme, Startseite | 12 | Hero `badge_text` „Temporada 2026 {Strich} recién llegado“ (DE „Weihnachten 2026“, seit 22.11., 18:44 Uhr). Saison `kicker` „Temporada“ (DE „Advent & Weihnachten“). Anlässe `heipard_occasions` vertauscht, seit 24.08., 13:47 Uhr: o1 „Navidad“ (DE „Gartenparty“), o2 „Jardín y balcón“ (DE „Weihnachten“), o3 „Camping“ (DE „Gemütlicher Abend“), o4 „Boda y fiesta“ (DE „Camping & Unterwegs“). Story `link_label` „Más sobre HeiPard“ (DE „Unsere Lichterketten entdecken“). Trust-Leiste s4 `subline` „Lu{Strich}Vi 9{Strich}16 h“ (DE „Mo. bis Fr., 9 bis 16 Uhr“, gleicher Inhalt, nur Striche). Dazu die vier Stellen aus den Falschen Zusagen. |
| Theme, Vorlage Produkt, `main`, Felder `delivery_domestic`, `delivery_eu`, `delivery_world` | 3 | „1{Strich}3 días laborables“, „3{Strich}10 días laborables“, „5{Strich}15 días laborables“. Gleiche Zahlen wie DE „1 bis 3 Werktage“ usw., nur die Striche (DE seit 22.11., 20:39 Uhr). |
| Theme, Footer (`footer-group`) | 2 | `service_heading` „Atención al cliente“ (DE „Kontakt“); `service_hours` „Lu{Strich}Vi 9{Strich}16 h“ (DE „Mo. bis Fr., 9 bis 16 Uhr“). |
| Richtlinien | 2 | AGB und Widerrufsbelehrung, siehe Falsche Zusagen. |

### Fehlend (Zählung)

| Bereich | Felder | Beispiele |
|---|---|---|
| Metaobjekt Produktfrage (`product_question`), Frage und Antwort | 382 (191 Einträge) | „Was ist im Lieferumfang?“, „Im Paket sind {lieferumfang}.“ Englisch 17 Einträge übersetzt. |
| Metaobjekt Feature-Block (`feature_block`), Felder title, body, kicker, alt | 1104 | alle 334 Blöcke. Englisch 163 Titel. |
| Metaobjekt Feature-Set (`feature_set`), heading und heading_kicker | 126 | auch englisch nicht übersetzt. |
| Bild-Alt-Texte (`MEDIA_IMAGE`) | 1012 | Englisch 966 vorhanden. |
| Kollektionsbilder, Alt-Text | 52 | auch englisch fehlend. |
| Produkt, `meta_title` | 69 | in der Titelrunde am 22.11. gesetzt. |
| Produkt, `title` | 3 | hp-ctl-180, hp-ctl-240, hp-ol-30 zeigen Deutsch. |
| Optionswerte der neuen Varianten vom 22.11. | 16 | hp-ucp-200 „Warmweiß“, „Kaltweiß“, „Multicolor“, „3 x 2 m“, „3 x 3 m“; hp-uct-200-eu „3 x 2 m“, „3 x 3 m“; hp-dpm-300 „40 m“, „80 m“; hp-dpt-300 „Warmweiß“, „Multicolor“, „20 m“, „40 m“, „80 m“; hp-rmp-180 „1,8 m“, „2,5 m“. Auch englisch fehlend. |
| Optionsnamen derselben Produkte | 5 | hp-ucp-200 „Lichtfarbe“, „Größe“; hp-uct-200-eu „Größe“; hp-dpt-300 „Lichtfarbe“; hp-rmp-180 „Höhe“. Auch englisch fehlend. |
| Theme, Startseite, Saison-Sektion `heipard_season` | 3 | `heading` „Dein Zuhause im Weihnachtslicht“, `description`, `button_label` „Weihnachtslicht entdecken“. Englisch vorhanden. |
| Kollektion | 1 | „Weihnachten“ (angelegt 22.11.). Englisch vorhanden. |
| Theme-Sprachtexte `heipard.*` | 6 | `heipard.hero.hinweis_an` „Licht an?“, `hinweis_aus` „Licht aus“, `heipard.clip.anhalten` „Animation anhalten“, `fortsetzen` „Animation fortsetzen“, `heipard.blocks.fragen.liste_zwei_html` und `liste_mehr_html` „{{ anfang }} und {{ ende }}“. Rückfall auf Englisch, z. B. „Pause animation“, „and“. |
| Richtlinie Versand (Shipping policy) | 1 | in keiner Sprache übersetzt; zeigt Deutsch mit „Versandkosten: 5,99 €“ und „13,99 €“. |

Ohne Zählung: `heipard.format.decimal_separator` fehlt ebenfalls. `snippets/heipard-num.liquid` setzt damit das Dezimalzeichen; der Rückfall aus `en.default.json` ist „.“ (Vermutung: „1.5“ statt „1,5“ in Zahlen des Themes).

## Französisch (fr)

### Falsche Zusagen

| Stelle | Text heute | Problem |
|---|---|---|
| Theme, Startseite (`index.json`), Trust-Leiste `heipard_trust_bar`, Block s3, Feld `title` | „Droit de retour de 30 jours“ | DE „Lichterketten & Solarleuchten“. 30 Tage Rückgaberecht, steht im deutschen Text nicht. Veraltet seit 11.09., 12:49 Uhr. |
| dieselbe Stelle, Feld `subline` | „Sans aucune hésitation“ | DE „Für drinnen und draußen“. Veraltet seit 11.09. |
| Theme, Startseite, Story `heipard_story`, Feld `heading` | „La patrie au bord du Rhin inférieur.“ | DE „Licht, das Abende länger macht.“ Veraltet seit 04.09. |
| Theme, Startseite, Story, Feld `body` | „HeiPard est originaire du Bas-Rhin, en Allemagne. Nous vous proposons des guirlandes lumineuses qui transforment les pièces et prolongent les soirées. Chaque guirlande est vérifiée avant de vous être expédiée, et notre service est à votre écoute.“ | DE siehe Spanisch. Der Bas-Rhin liegt im Elsass (Frankreich), nicht in Deutschland. Dazu die Zusage „jede Kette wird vor dem Versand geprüft“. Veraltet seit 04.09. |
| Theme, Footer (`footer-group`), Feld `brand_description` | „Éclairage d'ambiance du Bas-Rhin. Pour l'intérieur, l'extérieur et les déplacements.“ | DE „Stimmungsvolle Beleuchtung vom Niederrhein.“ Herkunft falsch, Elsass statt Niederrhein (Spanisch „Bajo Rin“ und Italienisch „Basso Reno“ sind richtig). Nicht als veraltet markiert, Stand 24.07. |
| Richtlinie Impressum (Legal notice) | „Téléphone : [Telephone]“ und „Numéro d’immatriculation / autorité d’immatriculation : [Registration Number / Registration Authority]. Immatriculation auprès de la Kamer van Koophandel (KVK)“ | DE: „Telefon: +49-2154-95365-30“, „Handelsregister: HRB 21652 Amtsgericht Krefeld“. Platzhalter statt Telefonnummer und Registernummer, niederländische Handelskammer statt Amtsgericht Krefeld. Text vom 18.11., 10:49 Uhr, nicht als veraltet markiert (siehe Übersetzungsweg). |
| Richtlinie AGB (Terms of service) | beginnt „Aperçu Bienvenue sur HeiPard ! Les termes « nous », « notre » et « nos » font référence à HeiPard.“, enthält „[nom de l’agent]“ | Keine Übersetzung der deutschen AGB („für den Online-Shop unter der URL heipard.com betrieben von C & L Handels GmbH …“), sondern ein anderer, allgemeiner Text: 33155 statt 10449 Zeichen (mit HTML). Nicht als veraltet markiert, Stand 16.10. |
| Metafeld `heipard.lieferumfang` an hp-ols-a60-16-eu, hp-ols-g40-16, hp-ols-s17-16, hp-scwl-10m2p-mc, hp-scwl-15m2p-mc, hp-solm-12m-ww | z. B. hp-ols-g40-16: „1 × Guirlande lumineuse solaire avec ampoules G40 / 1 × Télécommande / 1 × Panneau solaire / 1 × Mode d’emploi“ | DE seit 20.11., 02:11 Uhr mit „1 × Erdspieß“. Fehlt an allen sechs. |
| Metafeld `heipard.lieferumfang` an hp-ola-g40-15-eu, hp-ola-g40-27-eu, hp-ola-g40-42-eu | „1 × guirlande lumineuse LED avec ampoules G40 et application / 1 × télécommande“ | DE zusätzlich „1 × Netzteil“ und „1 × Ersatzbirne“ bzw. „2 × Ersatzbirnen“. Veraltet seit 22.11., 16:12 Uhr. |
| Metafeld `heipard.lieferumfang` an hp-rgb-200a, hp-rgb-300a, hp-rgb-500a | 200a, 300a: „1 × Guirlande lumineuse RGB intelligente avec application / 1 × Câble de charge USB / 1 × Manuel d'utilisation“; 500a: „1 × Guirlande lumineuse RGB intelligente avec application / 1 × Mode d’emploi“ | DE mit „1 × Fernbedienung / 1 × Netzteil“. Ladekabel statt Netzteil, Fernbedienung fehlt. |
| Metafeld `heipard.lieferumfang` an hp-ol-30, hp-ol-50 | „Guirlande lumineuse / Télécommande / Transformateur / 3 ampoules de rechange“ | DE zusätzlich „1 × Bedienungsanleitung“. |
| Metafeld `heipard.lieferumfang` an hp-uct-200-eu, hp-wbf-180, hp-fxf-001 | „1 × Rideau lumineux LED“; „1 × Sapin lumineux LED bouleau / 1 × Mode d’emploi“; „1 × Veilleuse LED motif renne“ | DE: Fernbedienung; Kreuzfuß und Stange; „Rentier mit Schlitten“ fehlen („Veilleuse“ heißt Nachtlicht). |

### Falsch übersetzt

| Stelle | Text heute | Problem |
|---|---|---|
| Theme, Startseite, Hero `heipard_hero`, Felder `heading` und `accent_word` | „Lâche ton monde“ und „éclairer.“ | DE „Lasse deine Welt“ und „erleuchten.“ „Lâche“ heißt „lass los, wirf hin“; der Satz ergibt keinen Sinn. 2 Felder. |
| Theme, Startseite, Trust-Leiste, Block s1, Feld `subline` | „J'arrive tout de suite“ | DE „Schnell bei dir“. Heißt „Ich komme sofort“, wie englisch „I'll be right with you“. |
| Metafeld `heipard.familie` an hp-rgb-200a, hp-rgb-300a, hp-rgb-500a; hp-rpm-200 | „RVB“; „Tr/min“ | DE „RGB“, „RPM“ (Familien-Codes; „Tr/min“ heißt Umdrehungen pro Minute). Die Serienleiter vergleicht den Wert. 4 Felder. |
| Metafeld `heipard.dramaturgie` an den 21 „hero“-Produkten (Liste unter Spanisch) | „héros“ | DE „hero“ (Steuerwert, siehe Spanisch). |
| Theme-Sprachtexte `heipard.blocks.zeitband.on.one`, `on.other`, `off.other` | „{{ count }} heure(s) d'“, „{{ count }} heures à“, „{{ count }} heures d’utilisation“ | DE „{{ count }} Stunde an“, „{{ count }} Stunden an“, „{{ count }} Stunden aus“. Zwei Texte brechen ab, der dritte heißt „Betriebsstunden“, also das Gegenteil von „aus“. |
| Navigation, Link „Icicle“ | „Glace“ | DE „Icicle“ (Eisregen). „Glace“ heißt Eis oder Speiseeis. |
| Filter „Material“ | „Matériel“ | DE „Material“. „Matériel“ heißt Ausrüstung; Werkstoff wäre „Matériau“. |
| Theme, Vorlage Produkt, Abschnitt `related`, Feld `kicker` | „Cela va avec“ | DE „Passt dazu“. Unvollständig. |

Zu prüfen: Metafeld `heipard.stromquelle` an 82 Produkten „Réseau“ (DE „Netz“). Mehrdeutig wie englisch „Network“.

### Veraltet (zusammengefasst)

| Stelle | Anzahl | Beispiele und Grund |
|---|---|---|
| Produkt, Feld `title` | 101 | Titelrunde 22.11. Beispiele: hp-u20-200 „Tuyau lumineux extérieur HeiPard 200+400 LED“; hp-ucp-200 „Rideau lumineux USB HeiPard 200 blanc chaud“ (DE siehe Spanisch). Auffällig: hp-olt-600 „Guirlande lumineuse HeiPard Intérieur Extérieur 60m 600LED, Guirlande lumineuse LED Outdoor Électrique avec télécommande …“ (englisches „Outdoor“), hp-bsm-002 „Vente de guirlande lumineuse de Noël HeiPard style cerf, lot de 2“ („Verkauf von …“). |
| Produkt, Feld `meta_title` | 14 | Titelrunde 22.11. Weitere 69 fehlen. |
| Produkt, Feld `meta_description` | 20 | wie Spanisch. |
| Metafeld `heipard.lieferumfang` | 17 | siehe Falsche Zusagen. |
| Theme, Startseite | 11 | Hero `badge_text` „Saison 2026 {Strich} fraîchement arrivée“ (DE „Weihnachten 2026“). Saison `kicker` „Saison“ (DE „Advent & Weihnachten“). Anlässe vertauscht: o1 „Noël“ (DE „Gartenparty“), o2 „Jardin & Balcon“ (DE „Weihnachten“), o4 „Mariage & Fête“ (DE „Camping & Unterwegs“); o3 „Soirée douillette“ stimmt. Story `link_label` „En savoir plus sur HeiPard“ (DE „Unsere Lichterketten entdecken“). Trust-Leiste s4 `subline` „Lun{Strich}Ven 9h{Strich}16h“. Dazu die vier Stellen aus den Falschen Zusagen. |
| Theme, Vorlage Produkt, Lieferzeiten | 3 | „1 à 3 jours ouvrables“, „3 à 10 jours ouvrables“, „5 à 15 jours ouvrables“. Inhaltlich gleich, nur als veraltet markiert. |
| Theme, Footer, `service_hours` | 1 | „Lun{Strich}Ven 9h{Strich}16h“ (DE „Mo. bis Fr., 9 bis 16 Uhr“). |

### Fehlend (Zählung)

Wie Spanisch (Metaobjekte 1612, Bild-Alt-Texte 1012, Kollektionsbilder 52, `meta_title` 69, Optionswerte 16, Optionen 5, Saison-Sektion 3, Kollektion „Weihnachten“ 1, Theme-Sprachtexte 6, dazu das Dezimalzeichen), mit zwei Unterschieden:
- Produkttitel: keiner fehlt.
- Richtlinien: 3 fehlen. Versand (in keiner Sprache übersetzt), **Datenschutzerklärung** und **Widerrufsbelehrung**: Französisch erscheint hier der deutsche Text.

Summe 2779.

## Italienisch (it)

### Falsche Zusagen

| Stelle | Text heute | Problem |
|---|---|---|
| Theme, Startseite (`index.json`), Trust-Leiste `heipard_trust_bar`, Block s3, Feld `title` | „30 giorni di diritto di reso“ | DE „Lichterketten & Solarleuchten“. 30 Tage Rückgaberecht, steht im deutschen Text nicht. Veraltet seit 11.09., 12:49 Uhr. |
| dieselbe Stelle, Feld `subline` | „Senza se e senza ma“ | DE „Für drinnen und draußen“. „Ohne Wenn und Aber“. Veraltet seit 11.09. |
| Theme, Startseite, Story `heipard_story`, Feld `heading` | „La nostra casa nel Basso Reno.“ | DE „Licht, das Abende länger macht.“ Veraltet seit 04.09. |
| Theme, Startseite, Story, Feld `body` | „HeiPard ha la sua casa nel Basso Reno. Ti portiamo luci che trasformano gli ambienti e prolungano le serate. Ogni catena luminosa viene controllata prima di arrivare da te {Strich} e la nostra assistenza parla la tua lingua.“ | DE siehe Spanisch. Zusagen „jede Kette wird geprüft“ und „der Service spricht deine Sprache“ stehen dort nicht. Veraltet seit 04.09. |
| Richtlinie AGB (Terms of service), Kopf | „per il negozio online all'URL [URL des Online-Shops] … E-mail: info@heipard.com [Telefonnummer]“ | DE: „heipard.com“ und „02154 953 65 30“. Deutsche Platzhalter. Veraltet seit 16.10., 14:25 Uhr. |
| Richtlinie Widerrufsbelehrung (Refund policy), Absatz zur Ausübung des Widerrufs | „(C & L Handels GmbH, HeiPard, Formerweg 12, 47877 Willich, e-mail: info@heipard.com)“ | DE nennt dort zusätzlich „Telefon: +49-(0)2154-95365-30“. Telefonnummer fehlt. Veraltet seit 10.09., 12:42 Uhr. |
| Metafeld `heipard.lieferumfang` an hp-ols-a60-16-eu, hp-ols-g40-16, hp-ols-s17-16, hp-scwl-10m2p-mc, hp-scwl-15m2p-mc, hp-solm-12m-ww | z. B. hp-ols-g40-16: „1 × Catena di luci solari con lampadine G40 / 1 × Telecomando / 1 × Pannello solare / 1 × Manuale di istruzioni“ | DE seit 20.11., 02:11 Uhr mit „1 × Erdspieß“. Fehlt an allen sechs. |
| Metafeld `heipard.lieferumfang` an hp-ola-g40-15-eu, hp-ola-g40-27-eu, hp-ola-g40-42-eu | z. B. hp-ola-g40-27-eu: „1 × Catena luminosa a LED con lampadine G40 e app / 1 × Telecomando“ | DE zusätzlich „1 × Netzteil“ und Ersatzbirnen. Veraltet seit 22.11., 16:12 Uhr. |
| Metafeld `heipard.lieferumfang` an hp-rgb-200a, hp-rgb-300a, hp-rgb-500a | 200a, 300a: „1 × Catena luminosa RGB smart con app / 1 × Cavo di ricarica USB / 1 × Manuale di istruzioni“; 500a: „1 × Catena luminosa RGB smart con app / 1 × Manuale di istruzioni“ | DE mit „1 × Fernbedienung / 1 × Netzteil“. Ladekabel statt Netzteil, Fernbedienung fehlt. |
| Metafeld `heipard.lieferumfang` an hp-ol-30, hp-ol-50 | „Catena di luci / Telecomando / Trasformatore / 3 lampadine di ricambio“ | DE zusätzlich „1 × Bedienungsanleitung“. |
| Metafeld `heipard.lieferumfang` an hp-uct-200-eu, hp-wbf-180, hp-fxf-001 | „1 × Tenda luminosa a LED“; „1 × Albero luminoso a LED Betulla / 1 × Istruzioni per l'uso“; „1 × Lampada LED decorativa con renna“ | DE: Fernbedienung; Kreuzfuß und Stange; Schlitten fehlen. |

### Falsch übersetzt

| Stelle | Text heute | Problem |
|---|---|---|
| Metafeld `heipard.dramaturgie` an den 21 „hero“-Produkten (Liste unter Spanisch) | „eroe“ | DE „hero“ (Steuerwert, siehe Spanisch). |
| Theme-Sprachtexte `heipard.blocks.zeitband.on.one`, `on.other`, `off.one`, `off.other` | „{{ count }} ore di“, „{{ count }} ore a“, „{{ count }} ore fuori“, „{{ count }} ore dalla fine“ | DE „{{ count }} Stunde an“, „{{ count }} Stunden an“, „{{ count }} Stunde aus“, „{{ count }} Stunden aus“. Zwei Texte brechen ab, „ore fuori“ heißt „Stunden draußen“, „ore dalla fine“ heißt „Stunden vor dem Ende“. |
| Theme, Vorlage Produkt, Abschnitt `related`, Feld `kicker` | „Si abbina a“ | DE „Passt dazu“. Unvollständig. |

Zu prüfen: Metafeld `heipard.stromquelle` an 82 Produkten „Rete“ (DE „Netz“). Als Kurzform von „alimentazione a rete“ geläufig, nur gegenlesen.

Familien-Codes und „Multicolore“ sind italienisch richtig.

### Veraltet (zusammengefasst)

| Stelle | Anzahl | Beispiele und Grund |
|---|---|---|
| Produkt, Feld `title` | 100 | Titelrunde 22.11. Beispiele: hp-u20-200 „Tubo luminoso LED HeiPard 200+400 per esterni“; hp-ucp-200 „Tenda luminosa USB HeiPard 200 luce bianca calda“. Auffällig: hp-wbf-180 „Albero luminoso HeiPard Baum bianco caldo nero betulla 180 cm“ und hp-wbf-210 „Albero luminoso HeiPard Baum bianco caldo betulla 210 cm“ (deutsches „Baum“), hp-bsm-002 „Vendita di una serie di luci natalizie HeiPard in stile cervo“ („Verkauf von …“). |
| Produkt, Feld `meta_title` | 14 | Titelrunde 22.11. Weitere 69 fehlen. |
| Produkt, Feld `meta_description` | 20 | wie Spanisch. |
| Metafeld `heipard.lieferumfang` | 17 | siehe Falsche Zusagen. |
| Theme, Startseite | 12 | Hero `badge_text` „Stagione 2026 {Strich} appena arrivato“ (DE „Weihnachten 2026“). Saison `kicker` „Stagione“. Anlässe vertauscht: o1 „Natale“ (DE „Gartenparty“), o2 „Giardino e balcone“ (DE „Weihnachten“), o3 „Campeggio“ (DE „Gemütlicher Abend“), o4 „Matrimonio e festa“ (DE „Camping & Unterwegs“). Story `link_label` „Scopri di più su HeiPard“. Trust-Leiste s4 `subline` „Lun{Strich}Ven 9{Strich}16“. Dazu die vier Stellen aus den Falschen Zusagen. |
| Theme, Vorlage Produkt, Lieferzeiten | 3 | „1{Strich}3 giorni lavorativi“ usw., gleiche Zahlen, nur Striche. |
| Theme, Footer | 2 | `service_heading` „Assistenza“ (DE „Kontakt“); `service_hours` „Lun{Strich}Ven 9{Strich}16“. |
| Richtlinien | 2 | AGB und Widerrufsbelehrung, siehe Falsche Zusagen. |

### Fehlend (Zählung)

Wie Spanisch, mit zwei Unterschieden:
- Produkttitel: 1 fehlt (hp-olt-100).
- Richtlinien: 1 fehlt (Versand).

Summe 2778.

## Übersetzungsweg

### Was die API zeigt

**Apps** (`appInstallations`): Translate & Adapt (Shopify), Flow, Search & Discovery, Messaging, Order Printer Pro, EU Widerruf Button und die Claude-Connector-App. Eine andere Übersetzungs-App steht nicht in der Liste.

**Theme-Sprachtexte** tragen in der API keinen Zeitstempel (`updatedAt` leer). Ihre Herkunft zeigt das Git-Protokoll: Die Dateien `locales/es.json`, `fr.json` und `it.json` ändert seit dem 27.10. nur noch `shopify[bot]` („Update from Shopify for theme heipard-theme/main“, Commit-Text „Committed from shop: HeiPard“), zuletzt am 19.11. Davor gab es auch Theme-Commits an diesen Dateien, zuletzt am 09.10.

**Läufe mit vielen Übersetzungen in kurzer Zeit** (nur `outdated: false`):

| Zeitpunkt | Sprachen | Umfang | Beleg |
|---|---|---|---|
| 09.07., 16:41 Uhr | en | 43 Texte der Startseite und Vorlagen | `updatedAt` |
| 24.07., 14:14 (fr), 14:42 (es), 15:03 Uhr (it) | es, fr, it | je 57 bis 62: Startseite, Vorlagen, Menüs, Links, Filter, Seiten, Datenschutz und Impressum (es, it) | `updatedAt`; Git: `shopify[bot]` an den es/fr/it-Sprachdateien um 14:48, 14:50, 15:05 und 15:06 Uhr |
| 27.10., 10:32 (en), 11:11 bis 11:12 (es), 11:17 bis 11:19 (fr), 11:30 Uhr (it) | alle vier | je Sprache rund 960 bis 980: Produkte, Metafelder, Optionen, Optionswerte, Kollektionen, Menüs, Startseite, 11 Pflege-Texte. Maschinell (es „Multicolor彩在线“, en „Higher Regional Court“) | `updatedAt`; Git: `shopify[bot]` an den es/fr/it-Sprachdateien um 11:12, 11:19 und 11:30 Uhr, ein weiterer Bot-Commit um 10:32 Uhr |
| 06.11., 00:35 Uhr | alle vier | es, fr, it je 298 (252 Metafelder `familie`, `dramaturgie`, `lieferumfang`, `ip_schutzart`, 46 Kollektionstitel „Serie …“), en 230 | `updatedAt`, alle in derselben Minute. Die Metafelder tragen als letzte deutsche Änderung den 03.11. |
| 07.11., 21:22 Uhr | es, it | 1 Metafeld: `lichtfarbe` an hp-ols-s17-16-eu, gesetzt am 07.11. um 03:22 Uhr | `updatedAt` |
| 12.11., 21:19 (en), 21:28 Uhr (es, fr, it) | alle vier | 2 Metafelder: `lichtfarbe` an hp-ols-s17-16-eu (fr, en) und `dramaturgie` an hp-dgm-002 (deutsch geändert am 08.11. um 02:53 Uhr; es jetzt „estándar“); dazu neue Theme-Sprachtexte vom 10.11. | `updatedAt`; Git: `shopify[bot]` um 21:28:39 und 21:28:49 Uhr an es/fr/it.json (z. B. `longtail_b2`, `light_color`) |
| 19.11., 21:27 (en), 21:33 Uhr (es, fr, it) | alle vier | 1 Metafeld: `lichtfarbe` an hp-wbf-210, gesetzt am 16.11. um 15:48 Uhr; dazu die Showroom-Texte vom 16.11. | `updatedAt`; Git: `shopify[bot]` um 21:34:00 und 21:34:10 Uhr („Próximamente disponible en la tienda“ usw.) |

**Keine Läufe, von Hand oder Herkunft unklar:**
- 17.11., 12:09 Uhr: Warenkorb-Titel „Das könnte dir auch gefallen“ in allen vier Sprachen, von der Theme-Instanz (Showroom-Bericht, Abschnitt 9).
- 08.11., 02:55 Uhr: `dramaturgie` „longtail“ an hp-rsp-180, hp-wbf-180, hp-wbf-210 in allen vier Sprachen, in derselben Sekunde wie die deutsche Änderung. Herkunft unklar.
- 18.11., 10:49 Uhr: Impressum fr und en mit neuem Text (siehe Falsche Zusagen fr), in derselben Sekunde, in der sich die deutsche Richtlinie änderte. Herkunft unklar.
- Englisch zahlreiche Schreibvorgänge vom 06.11. bis 22.11. aus den Teil- und Asset-Aufträgen, zuletzt die Titelrunde am 22.11., 21:12 bis 21:24 Uhr.
- Die es/fr/it-Zeitstempel vom 20.11. (6) und 22.11. (150) sind Veraltet-Markierungen, keine neuen Übersetzungen.

### Prüfung (a): Titelrunde 22.11., 21:09 bis 21:12 Uhr

| | Spanisch | Französisch | Italienisch |
|---|---|---|---|
| Titel veraltet, `updatedAt` 21:09 bis 21:13 Uhr, alter Wert | 98 | 101 | 100 |
| Titel fehlen | 3 (hp-ctl-180, hp-ctl-240, hp-ol-30) | 0 | 1 (hp-olt-100) |
| Titel nach 21:09 Uhr neu übersetzt | 0 | 0 | 0 |

Der jüngste es/fr/it-Zeitstempel überhaupt ist 22.11., 21:11:54 Uhr (Veraltet-Markierung an hp-wwf-180). Einschränkung: Bis zur Abfrage vergingen gut vier Stunden. Die bisherigen Läufe kamen 1 bis 3 Tage nach einer Änderung.

### Prüfung (b): Neue Inhalte seit 27.10.

Automatisch übersetzt, jeweils auch englisch:
- Produkt-Metafelder vom 03.11. am 06.11. um 00:35 Uhr.
- Neue `lichtfarbe`-Metafelder: gesetzt am 07.11., übersetzt am 07.11. (es, it) und 12.11. (fr, en); gesetzt am 16.11., übersetzt am 19.11.
- 46 Kollektionstitel am 06.11.
- Theme-Sprachtexte: deutsch geändert am 10.11. (Commits `621f3ad` und `d0ff77f`, 18:36 und 18:41 Uhr), es/fr/it am 12.11. um 21:28 Uhr; Showroom-Texte am 16.11. (`058c578`, 18:57 Uhr), es/fr/it am 19.11. um 21:34 Uhr.

Nicht übersetzt:
- Die Metaobjekte (191 Produktfragen seit 03.11., 334 Feature-Blöcke, 67 Sets): bis heute ohne es/fr/it. Übersetzt sind nur die 11 Pflege-Texte vom 27.10. Englisch gibt es nur, was die Aufträge von Hand geschrieben haben.
- 1012 Bild-Alt-Texte.
- Startseiten-Vorlage: Die Saison-Sektion vom 22.11. fehlt. Die seit 24.08., 04.09. und 11.09. veralteten Texte (Anlässe, Story, Trust-Leiste) blieben über alle Läufe veraltet. Der Lauf am 27.10. füllte dort nur fehlende Texte (z. B. die Unterzeilen der Anlässe).
- Rechtstexte (AGB, Widerruf veraltet; Versand, fr Datenschutz und Widerruf fehlen).
- Die neuen Varianten vom 22.11., 20:44 Uhr: 5 Optionen und 16 Optionswerte ohne jede Übersetzung, auch ohne Englisch.
- Kollektion „Weihnachten“ (22.11.): nur Englisch, von Hand.
- Theme-Sprachtexte vom 22.11. (Hero-Hinweis, Pausenknopf, Fragen-Liste): noch nicht. Der letzte Bot-Commit ist vom 19.11.
- Die 17 Lieferumfang-Felder, die seit 20.11. bzw. 22.11. veraltet sind: seitdem kein Lauf.

Überschreiben: Am 12.11. ersetzte der Lauf die veraltete Übersetzung von `dramaturgie` an hp-dgm-002 (deutsch geändert am 08.11.) durch „estándar“. Einen Fall, in dem eine aktuelle, nicht veraltete Übersetzung ersetzt wurde, zeigen die Daten nicht: Die Läufe am 12.11. und 19.11. änderten englisch nur je ein bis zwei neue oder geänderte Metafelder.

### Prüfung (c): Englisch nach 22.11., 21:24 Uhr

Keine Übersetzung in keiner Sprache hat einen späteren Zeitstempel. Der jüngste englische ist 22.11., 21:23:48 Uhr (Meta-Description hp-blm-100-eu, Teil J).

### Fazit (vorsichtig)

- **Es gibt einen wiederkehrenden Automatismus.** Vermutung: die automatische Übersetzung von Translate & Adapt, der einzigen Übersetzungs-App im Shop. Er lief zuletzt am Donnerstag, 19.11., 21:27 bis 21:34 Uhr. Davor am Donnerstag, 12.11., 21:19 bis 21:28 Uhr, in der Nacht zum Freitag, 06.11., um 00:35 Uhr und am Samstag, 07.11., um 21:22 Uhr.
- **Was er tut:** Er ergänzt fehlende Übersetzungen für Produkt-Metafelder, Kollektionen und Theme-Sprachtexte (`heipard.*`) nach 1 bis 3 Tagen, in allen vier Sprachen samt Englisch, zuerst Englisch, einige Minuten später es, fr, it. Mindestens einmal (12.11.) ersetzte er eine veraltete Metafeld-Übersetzung.
- **Was er seit 27.10. nicht angefasst hat:** Metaobjekte, Bild-Alt-Texte, Texte der Startseiten-Vorlage, Rechtstexte. Auch die seit August und September veralteten Startseiten-Texte nicht.
- **Seit 22.11., 21:24 Uhr:** keine Änderung.
- **Folge, falls er weiterläuft (Vermutung):** Beim nächsten Lauf, nach dem bisherigen Muster am Donnerstagabend, 26.11., könnten die 17 veralteten Lieferumfang-Felder, die neuen Optionen und Optionswerte und die neuen Theme-Texte maschinell übersetzt werden, auch englisch. Englische Werte von Hand sind gefährdet, sobald sich der deutsche Text ändert und die Übersetzung dadurch veraltet. Ob er die veralteten Produkttitel und SEO-Titel neu übersetzt, lässt sich aus den Daten nicht ablesen: Für Produkttitel gibt es seit 27.10. keinen Vergleichsfall.
- **Nicht sichtbar:** Die Einstellungen von Translate & Adapt (automatische Übersetzung an oder aus, für welche Sprachen und Bereiche) zeigt die Admin API nicht. Das muss Daniel in Translate & Adapt nachsehen.

## Nebenbefunde Englisch (nicht Teil des Auftrags)

- Impressum en (18.11., 10:49 Uhr): „Telephone: [Telephone]“ und „Registration Number / Registration Authority: [Registration Number / Registration Authority] registered with the Kamer van Koophandel (KVK)“.
- AGB en: allgemeiner Text („Overview Welcome to HeiPard!“) mit „[agent name]“, keine Übersetzung der deutschen AGB. Datenschutz, Widerruf und Versand fehlen englisch.
- Metafeld `familie`: neben „Higher Regional Court“ (OLG, 6) und „Digital Geological Map“ (DGM, 3) auch hp-blm-100-eu „Black Lives Matter“ (BLM) und pvc-150g „TREE-PVC“ (BAUM-PVC).
- Produkt `product_type` „Motivleuchte“: englisch „Picture light“.
- Theme: Passwortseite `heading` englisch „Demnächst geöffnet“ (deutscher Ausgangstext „Opening soon“), `share_label` englisch „Teilen“ (deutsch „Share“), Kicker `related` englisch „Does it fit?“ (deutsch „Passt dazu“).
- Pflege-Eintrag `kategorie`: englisch „LED string lights (kat-led)“, Schlüssel mitübersetzt.
- Die 16 Optionswerte und 5 Optionen vom 22.11. fehlen auch englisch.
