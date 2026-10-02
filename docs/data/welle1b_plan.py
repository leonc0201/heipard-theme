# -*- coding: utf-8 -*-
"""Erzeugt docs/heipard-import-welle1b-plan.md aus dem Ergebnis von welle1b_aufbereitung.main()."""
import collections
import re

FORM_FEATURE = {'OLA': 'App', 'OLH': 'Netz', 'OLS': 'Solar', 'OL': 'Netz'}

VORSCHLAG_KATEGORIE = {  # nur Vorschläge für die Zeilen mit todo-kategorie, nichts davon wird gesetzt
    'hp-rmp-180': 'Weihnachtsbaum (kat-weihnachtsbaum), wie der Kegelbaum HP-RSP-180',
    'hp-rpm-200': 'Smart-Lichterkette (kat-smart): HP-RPM-200 nennt App und Smart im Titel, HP-RPM-400 nicht',
    'hp-dgm-048': 'Motivleuchte (kat-motif): leuchtende Geschenkboxen',
    'hp-dgm-002': 'Motivleuchte (kat-motif): Spiralpfahl',
    'hp-bsm-002': 'Motivleuchte (kat-motif): Hirsch',
    'hp-fsf-120': 'Motivleuchte (kat-motif): Schneemann',
    'hp-fxf-001': 'Motivleuchte (kat-motif): Rentier',
}


def md_tabelle(kopf, zeilen):
    out = ['| ' + ' | '.join(kopf) + ' |', '|' + '|'.join(['---'] * len(kopf)) + '|']
    for z in zeilen:
        out.append('| ' + ' | '.join(str(c).replace('|', '/').replace('\n', ' ') for c in z) + ' |')
    return '\n'.join(out)


def euro(x):
    return ('%.2f' % x).replace('.', ',') + ' €' if x is not None else 'fehlt'


def kurz(t, n=70):
    return t if len(t) <= n else t[:n - 1].rstrip() + '…'


def ol_zeile(r):
    m = r['m']
    laenge = m['laenge']
    if laenge is None:
        t = re.search(r'(\d+(?:[.,]\d+)?)\s*m\b', r['titel'], flags=re.I)
        laenge = float(t.group(1).replace(',', '.')) if t else None
    n = re.search(r'-(\d+)(?:-[A-Z]+)?$', r['sku'])
    birnen = int(n.group(1)) if n else None
    form = r['familie'].split('-', 1)[1] if '-' in r['familie'] else ''
    if form == 'Standard':
        form = ''
    return {'sku': r['sku'], 'familie': r['familie'], 'form': form, 'laenge': laenge, 'birnen': birnen,
            'art': FORM_FEATURE.get(r['familie'].split('-')[0], ''), 'status': r['import_status'], 'grund': r['grund']}


def laenge_txt(x):
    return (('%.2f' % x).rstrip('0').rstrip('.').replace('.', ',') + ' m') if x is not None else '?'


def schreibe(erg, pfad):
    hp, neu, meta = erg['hp'], erg['neu'], erg['meta']
    np_, zf, gemeldet = erg['neue_produkte'], erg['zusammenfuehrungen'], erg['gemeldet']
    shop = erg['shop']
    kinder = [r for r in hp if r['abstammung'] != 'Eltern']
    zaehl = collections.Counter(r['import_status'] for r in hp)
    varianten_produkte = [p for p in np_ if p['art'] == 'varianten']
    einzel = [p for p in np_ if p['art'] == 'einzel']
    n_var = sum(len(p['varianten']) for p in varianten_produkte)
    n_zf = sum(len(z['neue_varianten']) for z in zf)
    todo_kat = [p for p in np_ if 'todo-kategorie' in p['tags']]
    gruende = collections.Counter()
    for r in kinder:
        if r['import_status'] == 'ausgeschlossen':
            g = r['grund']
            gruende[re.sub(r' \(.*$', '', g) if g.startswith(('Amazon', 'UK')) else g] += 1

    A = []
    A.append('# HeiPard Produkt-Import Welle 1b: Trockenlauf-Plan')
    A.append('')
    A.append('Stand: 02.10.2026. Erzeugt von `docs/data/welle1b_aufbereitung.py` aus `%s`, Tylers Liste, `sku_familie.csv` und dem Shop-Bestand vom selben Tag (`docs/data/welle1b-shop-stand.json`). Die aufbereiteten Daten je SKU stehen in `docs/data/welle1b-quelle.json`.' % meta['quelle'])
    A.append('')
    A.append('**Es wurde nichts im Shop angelegt oder geändert.** Angelegt wird erst nach Leons Freigabe dieses Plans.')
    A.append('')

    # ---------------------------------------------------------------- 1 Zahlen
    A.append('## 1. Zahlen')
    A.append('')
    A.append(md_tabelle(['Posten', 'Anzahl'], [
        ['HeiPard-Zeilen im Bericht', len(hp)],
        ['davon Elternteile (keine eigenen Produkte)', zaehl['elternteil']],
        ['importierbar nach Abschnitt 1 (Aktiv, Kind oder ohne Elternteil, Hauptbild)', erg['anzahl_importierbar']],
        ['… davon bereits im Shop', zaehl['im_shop']],
        ['… davon Doppel-Listing einer SKU (VINE)', zaehl['doppel']],
        ['… davon bewusst ausgeschlossen (Headset, UK-Variante)', erg['anzahl_importierbar'] - zaehl['im_shop'] - zaehl['doppel'] - zaehl['neu']],
        ['**… davon neue SKUs**', '**%d**' % zaehl['neu']],
        ['nicht importierbar (inaktiv, entfernt, ohne Status, ohne Hauptbild)', sum(v for k, v in gruende.items() if not k.startswith(('Amazon', 'UK')))],
    ]))
    A.append('')
    A.append('Aus den %d neuen SKUs werden:' % zaehl['neu'])
    A.append('')
    A.append(md_tabelle(['Was', 'Produkte', 'SKUs'], [
        ['neue Variantenprodukte (Abschnitt 3)', len(varianten_produkte), n_var],
        ['neue Einzelprodukte', len(einzel), len(einzel)],
        ['Zusammenführungen an bestehende Produkte (Abschnitt 5)', len(zf), n_zf],
        ['**Summe**', '**%d neue Produkte, %d geänderte**' % (len(np_), len(zf)), '**%d**' % (n_var + len(einzel) + n_zf)],
    ]))
    A.append('')
    A.append('Im Shop stehen heute %d Produkte (89 SKUs), nicht 83. Nach dem Import wären es %d Produkte. Kein Barcode wird gesetzt: Alle neuen Zeilen tragen als Produkt-ID eine ASIN oder eine GTIN-Freistellung. Jede neue SKU hat einen Preis.' % (shop['anzahl_produkte'], shop['anzahl_produkte'] + len(np_)))
    A.append('')

    # ---------------------------------------------------------------- 2 Entscheidungen
    mehrere = [g for g in gemeldet if g['art'] == 'mehrere_kinder_im_shop']
    A.append('## 2. Was ich von dir brauche')
    A.append('')
    A.append('Der Plan folgt der Spezifikation. An den folgenden Stellen lässt sie etwas offen oder passt nicht zu den Daten. Dort steht jeweils, wie der Plan es jetzt löst. Ohne Einwand setze ich es so um.')
    A.append('')
    A.append('**A. Mehrere Kinder eines Elternteils sind schon einzeln im Shop** (%d Elternteile, %d neue SKUs). Abschnitt 5 regelt nur den Fall mit genau einem bestehenden Kind. Plan: Die neuen Kinder werden Einzelprodukte mit dem Tag `pruefen-varianten`, bestehende Produkte bleiben unberührt. Alternative: alles je Elternteil zu einem Variantenprodukt zusammenführen, dafür müsste ich bestehende Produkte umbauen.' % (len(mehrere), sum(len(g['neue_skus']) for g in mehrere)))
    A.append('')
    A.append(md_tabelle(['Elternteil', 'schon im Shop', 'neu, als Einzelprodukt'], [[g['eltern_sku'], ', '.join(g['im_shop']), ', '.join(g['neue_skus'])] for g in mehrere]))
    A.append('')
    A.append('**B. Optionsnamen und Achsen.** Drei Abweichungen von der Tabelle in Abschnitt 3:')
    A.append('')
    A.append('- Sind die Werte der Amazon-Farbe in Wahrheit Lichtfarben (Warmweiß, Bunt, Kaltweiß), heißt die Option „Lichtfarbe" wie bei den vier Bündeln aus Welle 1, nicht „Farbe". Eine echte Produktfarbe als Achse kommt in dieser Welle nicht vor.')
    A.append('- Die Größenachse heißt nach dem, was sich unterscheidet: „Länge" (10 m), „Größe" bei Flächen (3 x 2 m), „Höhe" bei Bäumen, „LED-Anzahl" (HP-TPM), „Ausführung" (Kupferdraht oder Lichterkette bei HP-UCC und HP-UCT).')
    A.append('- Eine Achse entfällt, wenn alle Varianten denselben Wert haben oder wenn sie vollständig an einer anderen hängt (LED-Anzahl an der Länge). Sonst zeigt die Produktseite Auswahlfelder ohne Auswahl oder Kombinationen, die es nicht gibt.')
    A.append('')
    A.append('**C. HP-U20.** Die Spezifikation nennt HP-U20-200 als Beispiel für ein bestehendes Produkt. Es ist nicht im Shop (in Welle 1 ausgelassen). Plan: HP-U20-200 und HP-U20-400 werden ein neues Variantenprodukt, eingeordnet als sonstige Lichterkette (Lichterschlauch).')
    A.append('')
    aktiv = [z for z in zf if z['shop_status'] == 'ACTIVE']
    if aktiv:
        A.append('**D. `%s` ist ACTIVE.** Alle anderen 84 Produkte sind Draft. Ich habe es nicht aktiviert, die letzte Änderung war am 02.10.2026 um 10:41 UTC. Laut Plan bekommt es zwei neue Varianten, die dann an einem aktiven Produkt hängen. Soll es so bleiben oder zurück auf Draft?' % aktiv[0]['handle'])
        A.append('')
    A.append('**E. SKU-Schreibweise.** Neue SKUs werden nach Abschnitt 1 bereinigt, also ohne `-EU` und `-EU-1` (auch `-EU-2` und `-EU-3` habe ich so behandelt). Die Shop-SKUs aus Welle 1 tragen diese Suffixe teilweise noch. Bei Zusammenführungen stehen deshalb beide Schreibweisen in einem Produkt, zum Beispiel `HP-ISL-360-EU` neben `HP-ISL-360M`.')
    A.append('')
    A.append('**F. Smart.** Nach der Tabelle in Abschnitt 4 bekommt eine Smart-Kette nur `kat-smart`, nicht `kat-stringlights`. Sie erscheint dann nicht unter Lichterketten. Betroffen ist neu nur HP-RGB-500A. Soll Smart wie Solar einen Doppelweg bekommen?')
    A.append('')
    A.append('**G. Lichterbäume.** HP-WWF (Birke weiß) und HP-WBF (Birke schwarz) tragen den Amazon-Produkttyp ARTIFICIAL_TREE und landen nach der Regel bei `kat-weihnachtsbaum` mit Produkttyp „Weihnachtsbaum". Passt das für beleuchtete Birken?')
    A.append('')
    A.append('**H. OLA, OLH, OLS (Abschnitt 6).** Diese Familien sind seit Welle 1 schon im Shop. Neu sind nur HP-OLS-S11 und HP-OLS-ST38, sie bekommen `pruefen-mapping-ol`. Tag und Familiencode an den bestehenden 17 OLA-, OLH- und OLS-Produkten zu setzen, wäre eine Änderung an bestehenden Produkten: nur mit deinem OK.')
    A.append('')
    A.append('**I. UK-Variante.** `HP-OLS-ST38-35-UK` ist aktiv und hat ein Bild, ich habe sie wie `HP-UCP-300M-UK` nicht eingeplant. Die Familie HP-OLS-ST38 hat dadurch zwei statt drei Längen.')
    A.append('')
    A.append('**J. Dateiname des Abschlussberichts.** Schritt 5 nennt `docs/heipard-import-welle1b.md`, dort liegt jetzt die Spezifikation. Vorschlag: Abschlussbericht als `docs/heipard-import-welle1b-bericht.md`.')
    A.append('')

    # ---------------------------------------------------------------- 3 Variantenprodukte
    A.append('## 3. Neue Variantenprodukte (%d Produkte, %d Varianten)' % (len(varianten_produkte), n_var))
    A.append('')
    A.append('Titel sind vorläufig (Welle 2 ersetzt sie). Der Handle wird die erste SKU in Kleinbuchstaben.')
    A.append('')
    for p in varianten_produkte:
        A.append('**`%s`** · %s · Familie %s' % (p['schluessel'], p['product_type'] or 'Produkttyp offen', p['metafelder']['heipard.familie'] or 'gemischt'))
        A.append('')
        A.append('- Titel: %s' % p['titel'])
        A.append('- Elternteil: `%s`, Thema %s' % (p['eltern_sku'], p['thema']))
        A.append('- Tags: %s' % ', '.join('`%s`' % t for t in p['tags']))
        A.append('- Optionen: %s' % '; '.join('%s (%s)' % (o['name'], ', '.join(o['werte'])) for o in p['optionen']))
        A.append('- Varianten: %s' % '; '.join('`%s` %s, %s' % (v['sku'], ' / '.join(v['optionswerte'].values()), euro(v['preis_eur'])) for v in p['varianten']))
        A.append('- Bilder: %d' % len(p['bilder']))
        for h in p['hinweise']:
            A.append('- Hinweis: %s' % h)
        A.append('')

    # ---------------------------------------------------------------- 4 Einzelprodukte
    A.append('## 4. Neue Einzelprodukte (%d)' % len(einzel))
    A.append('')
    A.append(md_tabelle(['SKU', 'Titel (vorläufig)', 'Produkttyp', 'kat-Tags', 'Familie', 'Preis', 'Bilder', 'Hinweis'], [
        ['`%s`' % p['varianten'][0]['sku'], kurz(p['titel'], 60), p['product_type'] or 'offen',
         ', '.join(t for t in p['tags'] if t.startswith(('kat-', 'todo-kategorie'))),
         p['metafelder']['heipard.familie'], euro(p['varianten'][0]['preis_eur']), len(p['bilder']),
         'Eltern %s, siehe 2 A' % p['eltern_sku'] if 'pruefen-varianten' in p['tags'] else ('einziges aktives Kind von %s' % p['eltern_sku'] if p['eltern_sku'] else '')]
        for p in einzel]))
    A.append('')
    A.append('Alle neuen Produkte tragen zusätzlich `todo-text`, den Serien-Tag (`serie-…`) und die Lichtfarbe als Tag, wie in Welle 1.')
    A.append('')

    # ---------------------------------------------------------------- 5 Zusammenführungen
    A.append('## 5. Zusammenführungen an bestehende Produkte (%d Produkte, %d neue Varianten)' % (len(zf), n_zf))
    A.append('')
    A.append('Das bestehende Produkt bekommt die Optionen, sein bisheriger Artikel wird die erste Variante. SKU, Preis, Titel, Tags und Bilder des bestehenden Artikels bleiben. HP-OL-30 und HP-OL-50 sind nicht betroffen.')
    A.append('')
    for z in zf:
        A.append('**`%s`** (Elternteil `%s`, Thema %s)' % (z['handle'], z['eltern_sku'], z['thema']))
        A.append('')
        A.append('- Optionen: %s' % '; '.join('%s (%s)' % (o['name'], ', '.join(o['werte'])) for o in z['optionen']))
        A.append('- bleibt: `%s` als %s' % (z['bestehende_sku'], ' / '.join(z['bestehende_optionswerte'].values())))
        A.append('- neu: %s' % '; '.join('`%s` %s, %s' % (v['sku'], ' / '.join(v['optionswerte'].values()), euro(v['preis_eur'])) for v in z['neue_varianten']))
        A.append('- neue Bilder: %d' % len(z['neue_bilder']))
        for h in z['hinweise']:
            A.append('- Hinweis: %s' % h)
        A.append('')
    nicht = [g for g in gemeldet if g['art'] == 'bestehend_nicht_aenderbar']
    A.append('Die vier Bündel aus Welle 1 (CTL-210, CTL-400, SCWL-10M2P, SCWL-15M2P) sind nicht betroffen: Alle Kinder ihrer Elternteile sind schon im Shop.' if not nicht else 'Gemeldet, nicht geändert: ' + '; '.join('%s (%s): %s' % (g['handle'], g['grund'], ', '.join(g['neue_skus'])) for g in nicht))
    A.append('')

    # ---------------------------------------------------------------- 6 todo-kategorie
    A.append('## 6. Produkte mit `todo-kategorie` (%d)' % len(todo_kat))
    A.append('')
    A.append('Kein Hinweis aus Tylers Liste, Amazon-Produkttyp oder Titel greift, oder die Kinder widersprechen sich. Diese Produkte bekommen keinen kat-Tag und erscheinen in keiner Kollektion, bis du die Kategorie bestätigst. Die letzte Spalte ist nur mein Vorschlag.')
    A.append('')
    zeilen = []
    for p in todo_kat:
        skus = ', '.join(v['sku'] for v in p['varianten'])
        ex = '; '.join(sorted(set(r['excel_bezeichnung'] for r in neu if r['sku'] in [v['sku'] for v in p['varianten']] and r['excel_bezeichnung']))) or 'nicht in der Liste'
        zeilen.append(['`%s`' % skus, kurz(p['titel'], 55), ex, VORSCHLAG_KATEGORIE.get(p['schluessel'], '')])
    A.append(md_tabelle(['SKU', 'Titel', 'Tylers Bezeichnung', 'Vorschlag'], zeilen))
    A.append('')

    # ---------------------------------------------------------------- 7 OL-Gegenüberstellung
    A.append('## 7. Gegenüberstellung OL gegen OLA, OLH, OLS (Abschnitt 6)')
    A.append('')
    A.append('Für Tyler: Je OL-Produkt die OLA-, OLH- und OLS-Produkte mit gleicher Birnenform und einer Länge im Abstand von höchstens 5 m. Die Birnenzahl stammt aus der SKU, die Länge aus dem Amazon-Größenfeld oder dem Titel. Bei der Familie OL-Standard nennt der Bericht keine Birnenform, dort stehen alle Kandidaten gleicher Länge.')
    A.append('')
    beste = {}
    for r in kinder:
        if re.match(r'^(OL|OLA|OLH|OLS)-', r['familie']):
            alt = beste.get(r['sku'])
            rang = {'neu': 0, 'im_shop': 1}.get(r['import_status'], 2)
            if alt is None or rang < alt[0]:
                beste[r['sku']] = (rang, r)
    ol = sorted((ol_zeile(r) for _, r in beste.values()), key=lambda z: (z['familie'], z['birnen'] or 0))
    kandidaten = [z for z in ol if z['familie'].split('-')[0] in ('OLA', 'OLH', 'OLS')]

    def status_txt(z):
        if z['sku'] in erg['shop_sku']:
            return 'im Shop'
        if z['status'] == 'neu':
            return 'neu in 1b'
        if z['sku'].endswith('-UK'):
            return 'UK-Variante, nicht importiert'
        return 'nicht importierbar: ' + z['grund']

    zeilen = []
    for z in [z for z in ol if z['familie'].startswith('OL-')]:
        treffer = []
        for k in kandidaten:
            if z['laenge'] is None or k['laenge'] is None or abs(z['laenge'] - k['laenge']) > 5:
                continue
            if z['form'] and k['form'] != z['form']:
                continue
            if not z['form'] and abs(z['laenge'] - k['laenge']) > 0.01:
                continue
            treffer.append('%s (%s, %s Birnen, %s%s)' % (k['sku'], laenge_txt(k['laenge']), k['birnen'], k['art'], '' if k['sku'] in erg['shop_sku'] else ', ' + status_txt(k)))
        zeilen.append(['`%s`' % z['sku'], z['familie'], z['form'] or 'nicht angegeben', laenge_txt(z['laenge']), z['birnen'], status_txt(z), '; '.join(treffer) or 'kein Kandidat'])
    A.append(md_tabelle(['OL-Produkt', 'Familie', 'Form', 'Länge', 'Birnen', 'Status', 'Kandidaten OLA, OLH, OLS'], zeilen))
    A.append('')
    A.append('`HP-OL-15-G` ist im Shop, steht aber nicht im Bericht. `HP-STT-050` (30 m, 50 Birnen, Form im Bericht nicht genannt) und `HP-SII-050` (ohne Hauptbild, nicht importierbar) gehören vermutlich auch in diesen Vergleich.')
    A.append('')

    # ---------------------------------------------------------------- 8 Ausgeschlossen
    A.append('## 8. Ausgeschlossene Zeilen')
    A.append('')
    nach_grund = collections.defaultdict(list)
    for r in kinder:
        if r['import_status'] in ('ausgeschlossen', 'doppel'):
            g = r['grund'] if r['import_status'] == 'ausgeschlossen' else 'Doppel-Listing derselben SKU (meist VINE), die führende Zeile wird importiert'
            nach_grund[g].append(r['sku_amazon'])
    A.append(md_tabelle(['Grund', 'Anzahl', 'Amazon-SKUs'], [[g, len(s), ', '.join('`%s`' % x for x in sorted(s))] for g, s in sorted(nach_grund.items(), key=lambda kv: -len(kv[1]))]))
    A.append('')
    A.append('Dazu kommen %d Elternteile (davon %d inaktiv) und %d Zeilen, die schon im Shop sind. `HP-UCP-300M-UK` steht wie erwartet nicht im Bericht.' % (zaehl['elternteil'], sum(1 for r in hp if r['abstammung'] == 'Eltern' and r['status'] != 'Aktiv'), zaehl['im_shop']))
    A.append('')

    # ---------------------------------------------------------------- 9 Auffälligkeiten
    A.append('## 9. Weitere Auffälligkeiten')
    A.append('')
    bericht_skus = set(r['sku'] for r in kinder) | set(r['sku_amazon'] for r in kinder)
    import welle1b_aufbereitung as wa
    shop_fehlt = [v['sku'] for p in shop['produkte'] for v in p['varianten'] if wa.bereinige_sku(v['sku']) not in bericht_skus and v['sku'] not in bericht_skus]
    ohne_bild_im_shop = sorted(set(r['sku'] for r in kinder if r['grund'] == 'kein Hauptbild' and r['sku'] in erg['shop_sku']))
    ohne_bild_neu = sorted(set(r['sku'] for r in kinder if r['grund'] == 'kein Hauptbild' and r['sku'] not in erg['shop_sku']))
    usb = sorted(r['sku'] for r in neu if any('USB' in h for h in r['hinweise']))
    weiss = sorted(r['sku'] for r in neu if r['m']['licht'] == 'Weiß')
    fam_regel = sorted('%s → %s' % (r['sku'], r['familie']) for r in neu if r['familie_quelle'] != 'sku_familie.csv')
    eltern_fehlen = sorted(set(r['eltern_sku'] for r in kinder if r['eltern_sku'] and r['eltern_sku'] not in erg['eltern']))
    A.append('- **Fragen an Shenzhen (für das Sammelblatt):** `HP-GH-01` ist ein Gaming-Headset unter der Marke HeiPard mit Amazon-Produkttyp HEADPHONES, nicht importiert. In Tylers Liste steht bei der MSKU `HP-WBF-210-EU` die SKU `HP-DPM-300` mit der Bezeichnung „300皮线M暖", das ist offenbar eine verrutschte Zeile.')
    A.append('- **Lichtfarbe „Weiß":** Bei %s nennt Amazon nur „Weiß", der Titel sagt nicht Kaltweiß. Der Optionswert bleibt deshalb „Weiß". Tylers Liste führt diese SKUs als 白, was bei anderen SKUs Kaltweiß bedeutet.' % ', '.join('`%s`' % s for s in weiss) if weiss else '- Lichtfarbe „Weiß": kein Fall.')
    A.append('- **Stromquelle leer gelassen:** %s. Amazon sagt „Kabelgebunden", Titel oder Tylers Liste nennen USB. Betrifft nur Varianten, die an ein bestehendes Produkt gehen, dort setze ich ohnehin keine Produkt-Metafelder.' % ', '.join('`%s`' % s for s in usb) if usb else '- Stromquelle: kein Zweifelsfall.')
    A.append('- **Familiencode nach Regel statt aus `sku_familie.csv`** (%d SKUs): %s.' % (len(fam_regel), ', '.join(fam_regel)))
    A.append('- **Elternteile, die im Bericht fehlen:** %s. Die Kinder verweisen darauf, die Elternzeile gibt es nicht. Das Thema stammt dann aus den Kindern.' % ', '.join('`%s`' % e for e in eltern_fehlen))
    A.append('- **Ohne Hauptbild, deshalb nicht importiert, und noch nicht im Shop** (%d): %s.' % (len(ohne_bild_neu), ', '.join('`%s`' % s for s in ohne_bild_neu)))
    A.append('- **Schon im Shop, im Bericht ohne Hauptbild** (%d): %s. Für diese Produkte liefert der Bericht also auch keine Bilder nach.' % (len(ohne_bild_im_shop), ', '.join('`%s`' % s for s in ohne_bild_im_shop)))
    A.append('- **Im Shop, aber nicht im Bericht:** %s.' % (', '.join('`%s`' % s for s in shop_fehlt) or 'keine'))
    A.append('- **Produkttyp:** Neue allgemeine Ketten bekommen nach Abschnitt 4 den Typ „Lichterkette". Die Produkte aus Welle 1 heißen „Lichterkette (allgemein)".')
    A.append('- **Familie über mehrere Produkte:** Amazon verteilt manche Familien auf mehrere Elternteile. ISL steht nach dem Import in drei Produkten (`hp-isl-264`, `hp-isl-360-eu`, `hp-isl-486`), DFM in drei, BLT in zwei, OLG und OLT in mehreren. Die Serienleiter zeigt je Familie Produkte, nicht Varianten.')
    A.append('- **Variantenbilder:** Shopify erlaubt ein Bild je Variante. Das Hauptbild des Kinds wird das Variantenbild, weitere abweichende Bilder liegen in der Galerie des Produkts. Bilder, die mehrere Kinder teilen, liegen einmal am Produkt.')
    A.append('')

    # ---------------------------------------------------------------- 10 Ablauf
    A.append('## 10. Nach der Freigabe')
    A.append('')
    A.append('1. Kollektionen zählen (vorher).')
    A.append('2. Neue Produkte anlegen (Draft), Bilder re-hosten, Tags und Metafelder `heipard.familie`, `heipard.stromquelle`, `heipard.lichtfarbe` setzen.')
    A.append('3. Zusammenführungen: Optionen am bestehenden Produkt anlegen, neue Varianten und Bilder ergänzen.')
    A.append('4. Stichprobe von zehn Produkten, Kollektionen zählen (nachher), Abschlussbericht.')
    A.append('')
    A.append('Nichts wird aktiviert.')
    A.append('')

    pfad.write_text('\n'.join(A), encoding='utf-8', newline='\n')
