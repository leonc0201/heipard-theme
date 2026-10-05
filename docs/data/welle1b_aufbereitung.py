# -*- coding: utf-8 -*-
"""Welle 1b, Schritt 1 und 2: Quelle aufbereiten und Trockenlauf-Bericht erzeugen.

Liest   docs/data/Kategorie-Angebotsbericht_10-02-2026.xlsm  (nur lokal, nicht im Repo)
        docs/data/HeiPard_SKU_ASIN_2026.xlsx                 (Tylers Sortimentsliste)
        docs/data/sku_familie.csv
        docs/data/welle1b-shop-stand.json                    (Shop-Bestand am Stichtag)
Schreibt docs/data/welle1b-quelle.json
         docs/heipard-import-welle1b-plan.md

Aufruf: PYTHONUTF8=1 python docs/data/welle1b_aufbereitung.py
Spezifikation: docs/heipard-import-welle1b.md. Das Skript legt NICHTS im Shop an.
"""
import collections
import csv
import json
import pathlib
import re

import openpyxl

DATA = pathlib.Path(__file__).resolve().parent
DOCS = DATA.parent
REPORT = DATA / 'Kategorie-Angebotsbericht_10-02-2026.xlsm'
EXCEL = DATA / 'HeiPard_SKU_ASIN_2026.xlsx'
FAMILIE_CSV = DATA / 'sku_familie.csv'
SHOP_JSON = DATA / 'welle1b-shop-stand.json'
OUT_JSON = DATA / 'welle1b-quelle.json'
OUT_PLAN = DOCS / 'heipard-import-welle1b-plan.md'

GESCHUETZT = {'hp-ol-30', 'hp-ol-50'}  # fertiges OL-G40-Set, wird nie angefasst

# ----------------------------------------------------------------------------- Einlesen

FELDER = {  # Feldname -> Anfang des Attributschlüssels in Zeile 5
    'status': '::listing_status',
    'sku_amazon': 'contribution_sku#1.value',
    'amazon_typ': 'product_type#1.value',
    'abstammung': 'parentage_level[',
    'eltern_sku': 'child_parent_sku_relationship[',
    'thema': 'variation_theme#1.name',
    'titel': 'item_name[',
    'marke': 'brand[',
    'id_art': 'amzn1.volt.ca.product_id_type',
    'id_wert': 'amzn1.volt.ca.product_id_value',
    'hauptbild': 'main_product_image_locator[',
    'beschreibung': 'product_description[',
    'farbe': 'color[',
    'groesse': 'size[',
    'lichtfarbe': 'light_color[',
    'energiequelle': 'power_source_type[',
    'set_name': 'set_name[',
    'lichtquellen': 'number_of_light_sources[',
    'stecker': 'plug[',
    'stil': 'style[',
    'preis': 'purchasable_offer[marketplace_id=A1PA6795UKMFR9][audience=ALL]#1.our_price#1.schedule#1.value_with_tax',
}


def lade_bericht():
    wb = openpyxl.load_workbook(REPORT, read_only=True, data_only=True)
    zeilen = list(wb['Vorlage'].iter_rows(values_only=True))
    keys = [str(k or '') for k in zeilen[4]]
    idx = {}
    for feld, anfang in FELDER.items():
        treffer = [i for i, k in enumerate(keys) if k.startswith(anfang)]
        assert treffer, 'Spalte fehlt: ' + feld
        idx[feld] = treffer[0]
    bilder_idx = [i for i, k in enumerate(keys) if k.startswith('other_product_image_locator_')]
    bullet_idx = [i for i, k in enumerate(keys) if k.startswith('bullet_point[')]

    def zelle(z, i):
        v = z[i] if i < len(z) else None
        if v is None:
            return ''
        if isinstance(v, float) and v.is_integer():
            v = int(v)
        return str(v).replace('\xa0', ' ').strip()

    out = []
    for nr, z in enumerate(zeilen[6:], start=7):
        r = {f: zelle(z, i) for f, i in idx.items()}
        r['zeile'] = nr
        r['bilder'] = [b for b in [r['hauptbild']] + [zelle(z, i) for i in bilder_idx] if b]
        r['bullet_points'] = [b for b in (zelle(z, i) for i in bullet_idx) if b]
        out.append(r)
    return out


def bereinige_sku(sku):
    s = sku.strip().replace(' ', '')
    s = re.sub(r'^VINE-', '', s)
    s = re.sub(r'-EU-VINE$', '', s)
    s = re.sub(r'-(VINE|VIEN)$', '', s)
    s = re.sub(r'-EU(-\d)?$', '', s)  # -EU, -EU-1 (laut Spezifikation), ebenso -EU-2/-EU-3
    return s


def lade_excel():
    wb = openpyxl.load_workbook(EXCEL, data_only=True)
    nach_msku, nach_sku = {}, {}
    for z in list(wb.worksheets[0].iter_rows(values_only=True))[1:]:
        sku, msku, asin, name = (str(z[i] or '').strip() for i in (1, 2, 3, 5))
        eintrag = {'sku': sku, 'msku': msku, 'asin': asin, 'bezeichnung': name}
        nach_msku.setdefault(msku, eintrag)
        nach_sku.setdefault(sku, eintrag)
    return nach_msku, nach_sku


def lade_familien():
    with open(FAMILIE_CSV, encoding='utf-8') as f:
        return {r['sku'].strip(): r['familie'].strip() for r in csv.DictReader(f, delimiter=';')}


# ----------------------------------------------------------------------------- Normalisierung

def zahl_de(x):
    s = ('%.2f' % x).rstrip('0').rstrip('.')
    return s.replace('.', ',')


LICHT_WARM = {'warmweiß', 'warmes weiß', 'warm white', 'wärmeweiß', 'warmweißes licht', 'warmweiß-2', 'warm'}
LICHT_MULTI = {'bunt', 'mehrfarbig'}
LICHT_DUO = {'warmweiß & bunt', 'warmweiß + bunt'}


def lichtfarbe_norm(wert, titel=''):
    """Amazon-Wert -> einheitlicher deutscher Optionswert. None, wenn es keine Lichtfarbe ist."""
    v = re.sub(r'\s+', ' ', wert.strip().lower())
    if not v:
        return None
    if v in LICHT_WARM:
        return 'Warmweiß'
    if v in LICHT_MULTI:
        return 'Multicolor'
    if v == 'kaltweiß':
        return 'Kaltweiß'
    if v in ('weiß', 'weiss'):
        return 'Kaltweiß' if re.search(r'kaltwei(ß|ss)', titel.lower()) else 'Weiß'
    if v == 'rgb':
        return 'Multicolor'  # Leon, 05.10.2026: RGB wird auf den Auswahllistenwert Multicolor abgebildet
    if v in LICHT_DUO:
        return 'Warmweiß & Multicolor'
    if v == 'orange lila':
        return 'Orange & Lila'
    return None


FARBWOERTER = ('warmweiß', 'warmes', 'weiß', 'bunt', 'mehrfarbig', 'kaltweiß', 'farbe', 'rgb')


def groesse_parse(text):
    """Zerlegt Amazon-Größenangaben wie '3.38M/108LED', '3x2m/200LEDs', '1 Stück 10m100Led'."""
    t = text.lower().replace(',', '.').replace('×', 'x')
    d = {'flaeche': None, 'laenge': None, 'leds': None, 'stueck': None, 'zusatz': ''}
    if not t.strip():
        return d
    m = re.search(r'(\d+(?:\.\d+)?)\s*m?\s*x\s*(\d+(?:\.\d+)?)\s*m', t)
    if m:
        d['flaeche'] = '%s x %s m' % (zahl_de(float(m.group(1))), zahl_de(float(m.group(2))))
        t = t.replace(m.group(0), ' ')
    m = re.search(r'(\d+)\s*stück', t)
    if m:
        d['stueck'] = int(m.group(1))
        t = t.replace(m.group(0), ' ')
    m = re.search(r'(\d+)\s*(?:\+\s*\d+)?\s*leds?\b', t)
    if m:
        d['leds'] = int(m.group(1))
        t = t.replace(m.group(0), ' ')
    m = re.search(r'(\d+(?:\.\d+)?)\s*m\b', t)
    if m:
        d['laenge'] = float(m.group(1))
        t = t.replace(m.group(0), ' ')
    woerter = [w for w in re.findall(r'[a-zäöüß]{3,}', t) if w not in FARBWOERTER and w not in ('led', 'leds', 'packung', 'mit')]
    d['zusatz'] = ' '.join(w.capitalize() for w in woerter)
    return d


# ----------------------------------------------------------------------------- Kategorie

KAT = {  # Kategorie -> (kat-Tags, deutscher Produkttyp)
    'curtain': (['kat-stringlights', 'kat-curtain'], 'Lichtervorhang'),
    'icicle': (['kat-stringlights', 'kat-icicle'], 'Eisregen-Lichterkette'),
    'net': (['kat-stringlights', 'kat-net'], 'Lichternetz'),
    'cluster': (['kat-stringlights', 'kat-cluster'], 'Cluster-Lichterkette'),
    'ctl': (['kat-stringlights', 'kat-christmas-tree-lights'], 'Weihnachtsbaum-Lichterkette'),
    'solar': (['kat-stringlights', 'kat-solar'], 'Solar-Lichterkette'),
    'solarleuchte': (['kat-solar'], 'Solarleuchte'),
    'motif': (['kat-motif'], 'Motivleuchte'),
    'baum': (['kat-weihnachtsbaum'], 'Weihnachtsbaum'),
    'lichterbaum': (['kat-motif'], 'Lichterbaum'),  # beleuchtete Birken: Motivleuchte, kein Weihnachtsbaum (Leon, 02.10.2026)
    'smart': (['kat-stringlights', 'kat-smart'], 'Smart-Lichterkette'),  # Doppelweg wie Solar (Leon, 02.10.2026)
    'batterie': (['kat-stringlights', 'kat-led'], 'Batterie-Lichterkette'),
    'kette': (['kat-stringlights', 'kat-led'], 'Lichterkette'),
}
EXCEL_HINWEISE = [  # Reihenfolge wie in der Spezifikation, Abschnitt 4
    ('窗帘灯', 'curtain'), ('冰条', 'icicle'), ('网灯', 'net'), ('鞭炮', 'cluster'),
    ('圣诞树灯', 'ctl'), ('太阳能', 'solar'), ('造型灯', 'motif'), ('星星地插', 'motif'),
]
TITEL_HINWEISE = [
    (r'lichtervorhang|vorhang', 'curtain'),
    (r'eisregen|eiszapfen|icicle', 'icicle'),
    (r'lichternetz|\bnetz\b', 'net'),
    (r'cluster|büschel', 'cluster'),
    (r'weihnachtsbaum[- ]lichterkette|lichterkette weihnachtsbaum|christbaum', 'ctl'),
    (r'solar', 'solar'),
    (r'motiv|figur|erdspieß|stern', 'motif'),
    (r'\bapp\b|smart|wlan|bluetooth', 'smart'),
    (r'batterie', 'batterie'),
    (r'lichterkette|lichterschlauch', 'kette'),
]


def kategorie(r):
    """Quellen in dieser Reihenfolge: Tylers Excel, Amazon-Produkttyp, Titel. Rückgabe (kategorie|None, quelle, hinweis)."""
    name = r.get('excel_bezeichnung', '')
    titel = r['titel'].lower()
    excel_kat = next((k for wort, k in EXCEL_HINWEISE if wort in name), None)
    titel_kat = next((k for muster, k in TITEL_HINWEISE if re.search(muster, titel)), None)
    if excel_kat:
        # Widerspruch nur, wenn der Titel eine ANDERE spezifische Unterkategorie nennt
        spezifisch = {'curtain', 'icicle', 'net', 'cluster', 'ctl', 'motif'}
        if titel_kat in spezifisch and excel_kat in spezifisch and titel_kat != excel_kat:
            return None, 'Widerspruch', 'Excel „%s“ gegen Titel (%s)' % (name, KAT[titel_kat][1])
        if excel_kat == 'solar' and 'lichterkette' not in titel:
            return 'solarleuchte', 'Excel', ''
        return excel_kat, 'Excel', ''
    if re.match(r'^(PEC|PVC|TPE)-', r['sku']):
        return 'baum', 'SKU', ''
    if r['amazon_typ'] == 'ARTIFICIAL_TREE':
        if re.search(r'lichterbaum|birke', titel):
            return 'lichterbaum', 'Amazon-Produkttyp und Titel', ''
        return None, 'kein Hinweis', 'Amazon-Produkttyp ARTIFICIAL_TREE, aber weder Tannenbaum (PEC/PVC/TPE) noch Lichterbaum'
    if titel_kat:
        if titel_kat == 'solar' and 'lichterkette' not in titel:
            return 'solarleuchte', 'Titel', ''
        return titel_kat, 'Titel', ''
    return None, 'kein Hinweis', ''


def familie_code(sku, familien):
    if sku in familien:
        return familien[sku], 'sku_familie.csv'
    m = re.match(r'^HP-(OL[A-Z])-([A-Z]+\d+)-\d', sku)
    if m:
        return '%s-%s' % (m.group(1), m.group(2)), 'Regel OLx-FORM'
    m = re.match(r'^HP-OL-(S11|ST38|G40)-\d', sku)
    if m:
        return 'OL-' + m.group(1), 'analog zu sku_familie.csv'
    m = re.match(r'^(PEC|PVC|TPE)-', sku)
    if m:
        return 'BAUM-' + m.group(1), 'analog zu sku_familie.csv'
    m = re.match(r'^HP-([A-Z0-9]+)', sku)
    return (m.group(1) if m else ''), 'Kürzel nach HP-'


def serie_kuerzel(sku):
    m = re.match(r'^(?:HP-)?([A-Z0-9]+)', sku)
    return m.group(1) if m else ''


STROM = {'kabelgebunden': 'Netz', 'batteriebetrieben': 'Batterie', 'solarbetrieben': 'Solar'}


def stromquelle(r):
    wert = STROM.get(r['energiequelle'].lower())
    if wert == 'Netz' and ('usb' in r['titel'].lower() or 'USB' in r.get('excel_bezeichnung', '')):
        return None, 'Energiequelle „Kabelgebunden“, aber USB im Titel oder in Tylers Liste: Stromquelle leer gelassen'
    return wert, ''


LICHT_METAFELD = {'Warmweiß', 'Kaltweiß', 'Multicolor', 'RGB'}

# ----------------------------------------------------------------------------- Varianten

THEMA_ACHSEN = {
    'GRÖSSE': ['groesse'],
    'SIZE/LIGHT_COLOR': ['groesse', 'licht'],
    'FARBE/GRÖSSE': ['farbe', 'groesse'],
    'SIZE/SET_NAME': ['groesse', 'set'],
    'COLOR/SET_NAME': ['farbe', 'set'],
    'LIGHT_COLOR/SET_NAME': ['licht', 'set'],
    'SIZE/NUMBER_OF_LIGHT_SOURCES': ['groesse', 'leds'],
    'SIZE/PLUG_TYPE': ['groesse', 'stecker'],
    'STIL': ['stil'],
    'FARBE': ['farbe'],
    'COLOR/LIGHT_COLOR': ['farbe', 'licht'],
}


def ist_baumartig(produkttyp, titel):
    return produkttyp in ('Weihnachtsbaum', 'Lichterbaum') or bool(re.search(r'lichterbaum|birkenbaum|cone tree|weihnachtsbaum künstlich|künstlicher weihnachtsbaum', titel.lower()))


def merkmale(r):
    """Alle Merkmale eines Kinds, aus denen Optionswerte entstehen können."""
    g = groesse_parse(r['groesse'])
    s = groesse_parse(r['set_name'])
    for k in ('flaeche', 'laenge', 'leds', 'stueck'):
        if g[k] is None:
            g[k] = s[k]
    if not g['zusatz']:
        g['zusatz'] = s['zusatz']
    licht = lichtfarbe_norm(r['lichtfarbe'], r['titel'])
    farbe_als_licht = lichtfarbe_norm(r['farbe'], r['titel'])
    if g['leds'] is None and r['lichtquellen'].isdigit():
        g['leds_attr'] = int(r['lichtquellen'])
    return {
        'flaeche': g['flaeche'],
        'laenge': g['laenge'],
        'leds': g['leds'],
        'stueck': g['stueck'],
        'zusatz': g['zusatz'],
        'licht': licht or farbe_als_licht,
        'licht_quelle': 'Lichtfarbe' if licht else ('Farbe' if farbe_als_licht else ''),
        'farbe_roh': r['farbe'],
        'stecker': r['stecker'],
        'stil': r['stil'],
    }


def optionen_bilden(kinder, thema, produkttyp, titel):
    """kinder: Liste von Zeilen (mit ['m'] = merkmale). Rückgabe (optionen, werte_je_sku, hinweise, ohne_wert).

    Regeln über die Spezifikation hinaus (im Plan als Entscheidung ausgewiesen):
      - eine Achse mit nur einem Wert über alle Kinder entfällt
      - eine Achse, die vollständig von einer anderen abhängt (z. B. LED-Anzahl von der Länge), entfällt
      - Farbwerte, die Lichtfarben sind, heißen "Lichtfarbe" (wie die vier Bündel aus Welle 1)
    """
    hinweise = []
    achsen = THEMA_ACHSEN.get(thema, [])
    kandidaten = []  # (optionsname, funktion kind -> wert|None)
    hoehe = ist_baumartig(produkttyp, titel)

    def groessen_achsen():
        def wert_flaeche(k):
            return k['m']['flaeche']

        def wert_laenge(k):
            return (zahl_de(k['m']['laenge']) + ' m') if k['m']['laenge'] is not None else None

        def wert_leds(k):
            return ('%d LEDs' % k['m']['leds']) if k['m']['leds'] is not None else None

        def wert_stueck(k):
            return ('%d Stück' % k['m']['stueck']) if k['m']['stueck'] is not None else None

        def wert_zusatz(k):
            return k['m']['zusatz'] or None

        return [('Größe', wert_flaeche), ('Höhe' if hoehe else 'Länge', wert_laenge), ('LED-Anzahl', wert_leds),
                ('Set', wert_stueck), ('Ausführung', wert_zusatz)]

    for a in achsen:
        if a in ('groesse', 'set', 'leds'):
            for kand in groessen_achsen():
                if kand[0] not in [n for n, _ in kandidaten]:
                    kandidaten.append(kand)
        elif a in ('licht', 'farbe'):
            if 'Lichtfarbe' not in [n for n, _ in kandidaten]:
                kandidaten.append(('Lichtfarbe', lambda k: k['m']['licht']))
        elif a == 'stecker':
            kandidaten.append(('Stecker', lambda k: k['m']['stecker'] or None))
        elif a == 'stil':
            kandidaten.append(('Stil', lambda k: k['m']['stil'] or None))

    # nur Achsen behalten, die überhaupt unterscheiden
    aktiv = []
    for name, fn in kandidaten:
        werte = [fn(k) for k in kinder]
        if len(set(w for w in werte if w is not None)) >= 2:
            aktiv.append((name, fn))
    # abhängige Achsen entfernen: bestimmt eine frühere Achse den Wert eindeutig, ist die spätere überflüssig
    behalten = []
    for name, fn in aktiv:
        abhaengig = False
        for bname, bfn in behalten:
            zuordnung = collections.defaultdict(set)
            for k in kinder:
                zuordnung[bfn(k)].add(fn(k))
            rueck = collections.defaultdict(set)
            for k in kinder:
                rueck[fn(k)].add(bfn(k))
            if all(len(v) == 1 for v in zuordnung.values()) and all(len(v) == 1 for v in rueck.values()):
                abhaengig = True
                break
        if not abhaengig:
            behalten.append((name, fn))
    ohne_wert = [k for k in kinder if any(fn(k) is None for _, fn in behalten)]
    mit_wert = [k for k in kinder if k not in ohne_wert]
    werte_je_sku = {k['sku']: {name: fn(k) for name, fn in behalten} for k in mit_wert}
    kombis = [tuple(v.values()) for v in werte_je_sku.values()]
    if len(set(kombis)) != len(kombis):
        hinweise.append('Optionswerte nicht eindeutig: ' + '; '.join('%s=%s' % (s, '/'.join(map(str, v.values()))) for s, v in werte_je_sku.items()))
    optionen = []
    for name, fn in behalten:
        werte = []
        for k in mit_wert:
            w = fn(k)
            if w not in werte:
                werte.append(w)
        optionen.append({'name': name, 'werte': sorted(werte, key=sortier_schluessel)})
    return optionen, werte_je_sku, hinweise, ohne_wert


LICHT_REIHENFOLGE = ['Warmweiß', 'Kaltweiß', 'Weiß', 'Multicolor', 'RGB']


def sortier_schluessel(wert):
    """Maße aufsteigend, Lichtfarben in fester Reihenfolge, alles andere alphabetisch."""
    if wert in LICHT_REIHENFOLGE:
        return (0, LICHT_REIHENFOLGE.index(wert), '')
    m = re.match(r'^(\d+(?:,\d+)?)', wert)
    if m:
        return (1, float(m.group(1).replace(',', '.')), wert)
    return (2, 0, wert)


def titel_ohne_groesse_farbe(t):
    t = re.sub(r'\d+(?:[.,]\d+)?\s*(?:m|cm)\b(?:\s*x\s*\d+(?:[.,]\d+)?\s*m\b)?', ' ', t, flags=re.I)
    t = re.sub(r'\d+\s*(?:\+\s*\d+)?\s*(?:LEDs?|Glühbirnen|Birnen)\b', ' ', t, flags=re.I)
    t = re.sub(r'\b(?:Warmweiß|Warmes Weiß|Kaltweiß|Bunt|Mehrfarbig|Multicolor)\b', ' ', t, flags=re.I)
    t = re.sub(r'\s*-\s*(?=[,.]|$)', ' ', t)
    t = re.sub(r'\s+,', ',', re.sub(r'\s{2,}', ' ', t)).strip(' ,-–')
    t = re.sub(r',\s*,', ',', t)
    return t


KAT_WOERTER = {'curtain': r'vorhang', 'icicle': r'eisregen|eiszapfen', 'net': r'lichternetz|\bnetz\b', 'cluster': r'cluster'}


def eltern_titel_passt(titel, kat):
    """Der Eltern-Titel passt nicht, wenn er eine andere Unterkategorie nennt als die Kinder."""
    for k, muster in KAT_WOERTER.items():
        if k != kat and re.search(muster, titel.lower()):
            return False
    return True


# ----------------------------------------------------------------------------- Hauptlauf

def main():
    alle = lade_bericht()
    nach_msku, nach_sku = lade_excel()
    familien = lade_familien()
    shop = json.load(open(SHOP_JSON, encoding='utf-8'))

    shop_sku = {}  # bereinigte SKU -> (handle, Shop-SKU)
    shop_produkt = {p['handle']: p for p in shop['produkte']}
    for p in shop['produkte']:
        for v in p['varianten']:
            shop_sku[bereinige_sku(v['sku'])] = (p['handle'], v['sku'])

    hp = [r for r in alle if r['marke'].lower() == 'heipard']
    eltern = {r['sku_amazon']: r for r in hp if r['abstammung'] == 'Eltern'}

    for r in hp:
        r['sku'] = bereinige_sku(r['sku_amazon'])
        ex = nach_msku.get(r['sku_amazon']) or nach_sku.get(r['sku'])
        r['excel_bezeichnung'] = ex['bezeichnung'] if ex else ''
        r['asin'] = r['id_wert'] if r['id_art'] == 'ASIN' else (ex['asin'] if ex else '')
        r['ean'] = r['id_wert'] if r['id_art'].upper() in ('EAN', 'GTIN') else ''
        r['hinweise'] = []
        r['import_status'] = ''
        r['grund'] = ''

    # --- Abschnitt 1: Zeilen auswählen
    for r in hp:
        if r['abstammung'] == 'Eltern':
            r['import_status'], r['grund'] = 'elternteil', 'Elternteil (liefert nur die Variantenstruktur)'
        elif r['status'] != 'Aktiv':
            r['import_status'], r['grund'] = 'ausgeschlossen', 'Status „%s“' % (r['status'] or 'leer')
        elif not r['hauptbild']:
            r['import_status'], r['grund'] = 'ausgeschlossen', 'kein Hauptbild'
    importierbar = [r for r in hp if not r['import_status']]
    anzahl_importierbar = len(importierbar)

    for r in importierbar:
        if r['amazon_typ'] == 'HEADPHONES':
            r['import_status'], r['grund'] = 'ausgeschlossen', 'Amazon-Produkttyp HEADPHONES (Listing-Fehler, Frage an Shenzhen)'
        elif r['sku'].endswith('-UK'):
            r['import_status'], r['grund'] = 'ausgeschlossen', 'UK-Variante (bleibt draußen)'

    # Zeilen, deren Amazon-SKU buchstabengleich im Shop steht, sind bereits importiert
    shop_exakt = {v['sku']: p['handle'] for p in shop['produkte'] for v in p['varianten']}
    for r in importierbar:
        if not r['import_status'] and r['sku_amazon'] in shop_exakt:
            r['import_status'], r['grund'] = 'im_shop', 'bereits im Shop (%s)' % shop_exakt[r['sku_amazon']]
            r['shop_handle'] = shop_exakt[r['sku_amazon']]

    # Doppel-Listings derselben bereinigten SKU (meist VINE): eine Zeile ist führend
    gruppen = collections.defaultdict(list)
    for r in importierbar:
        if not r['import_status']:
            gruppen[r['sku']].append(r)
    for sku, rs in gruppen.items():
        if len(rs) > 1:
            rs.sort(key=lambda r: ('VINE' in r['sku_amazon'], not r['titel'], -len(r['bilder'])))
            for r in rs[1:]:
                r['import_status'], r['grund'] = 'doppel', 'Doppel-Listing von %s (führend: %s)' % (sku, rs[0]['sku_amazon'])
                rs[0]['hinweise'].append('weiteres Listing derselben SKU: ' + r['sku_amazon'])

    for r in importierbar:
        if not r['import_status'] and r['sku'] in shop_sku:
            r['import_status'], r['grund'] = 'im_shop', 'bereits im Shop (%s)' % shop_sku[r['sku']][0]
            r['shop_handle'] = shop_sku[r['sku']][0]
    neu = [r for r in importierbar if not r['import_status']]
    for r in neu:
        r['import_status'] = 'neu'

    # --- Felder je neuer SKU
    for r in hp:
        r['familie'], r['familie_quelle'] = familie_code(r['sku'], familien) if r['abstammung'] != 'Eltern' else ('', '')
        r['serie'] = serie_kuerzel(r['sku'])
        r['m'] = merkmale(r)
        kat, quelle, hinweis = kategorie(r)
        r['kategorie'], r['kategorie_quelle'] = kat, quelle
        if hinweis:
            r['hinweise'].append(hinweis)
        r['kat_tags'], r['produkttyp'] = (KAT[kat] if kat else (['todo-kategorie'], ''))
        r['stromquelle'], sh = stromquelle(r)
        if sh:
            r['hinweise'].append(sh)
        lf = r['m']['licht']
        r['lichtfarbe_metafeld'] = lf if lf in LICHT_METAFELD else None
        try:
            r['preis_eur'] = round(float(r['preis'].replace(',', '.')), 2) if r['preis'] else None
        except ValueError:
            r['preis_eur'] = None
        if r['import_status'] == 'neu' and r['preis_eur'] is None:
            r['hinweise'].append('kein Preis im Bericht')

    # --- Abschnitt 3 und 5: Gruppen bilden
    kinder_von = collections.defaultdict(list)
    for r in importierbar:
        if r['import_status'] in ('neu', 'im_shop') and r['abstammung'] == 'Kind':
            kinder_von[r['eltern_sku']].append(r)

    neue_produkte, zusammenfuehrungen, gemeldet = [], [], []

    def tags_fuer(rs, extra=()):
        tags = []
        for r in rs:
            for t in r['kat_tags']:
                if t not in tags:
                    tags.append(t)
        if 'todo-kategorie' in tags or len(set(r['kategorie'] for r in rs)) > 1:
            tags = ['todo-kategorie']  # kein Hinweis oder Kinder widersprechen sich: nicht raten
        tags.append('todo-text')
        for r in rs:
            t = 'serie-' + r['serie'].lower()
            if t not in tags:
                tags.append(t)
        for r in rs:
            if r['m']['licht'] and r['m']['licht'] not in tags:
                tags.append(r['m']['licht'])
        if any(re.match(r'^HP-OL[AHS]-', r['sku']) for r in rs):
            tags.append('pruefen-mapping-ol')
        tags.extend(extra)
        return tags

    def bilder_union(rs, ohne=()):
        gesehen, liste = set(ohne), []
        zaehler = collections.Counter(b for r in rs for b in set(r['bilder']))
        erste = [rs[0]['hauptbild']]
        geteilt = [b for r in rs for b in r['bilder'] if zaehler[b] > 1]
        rest = [b for r in rs for b in r['bilder']]
        for b in erste + geteilt + rest:
            if b and b not in gesehen:
                gesehen.add(b)
                liste.append(b)
        return liste

    def einzelprodukt(r, extra_tags=(), hinweis=''):
        r['ziel'] = {'art': 'neu_einzel', 'schluessel': r['sku'].lower()}
        if hinweis:
            r['hinweise'].append(hinweis)
        neue_produkte.append({
            'schluessel': r['sku'].lower(), 'art': 'einzel', 'eltern_sku': r['eltern_sku'], 'titel': r['titel'],
            'product_type': r['produkttyp'], 'vendor': 'HeiPard', 'status': 'draft',
            'tags': tags_fuer([r], extra_tags),
            'metafelder': {'heipard.familie': r['familie'], 'heipard.stromquelle': r['stromquelle'], 'heipard.lichtfarbe': r['lichtfarbe_metafeld']},
            'optionen': [], 'varianten': [{'sku': r['sku'], 'preis_eur': r['preis_eur'], 'barcode': r['ean'], 'optionswerte': {}, 'bild': r['hauptbild']}],
            'bilder': r['bilder'], 'hinweise': list(r['hinweise']),
        })

    for eltern_sku, kinder in sorted(kinder_von.items()):
        neue = [k for k in kinder if k['import_status'] == 'neu']
        if not neue:
            continue
        el = eltern.get(eltern_sku)
        thema = el['thema'] if el and el['thema'] else collections.Counter(k['thema'] for k in kinder).most_common(1)[0][0]
        handles = sorted(set(k['shop_handle'] for k in kinder if k['import_status'] == 'im_shop'))
        for k in neue:
            k['variationsthema'] = thema

        if len(handles) >= 2:
            for k in neue:
                einzelprodukt(k, ['pruefen-varianten'], 'Elternteil %s: mehrere Kinder sind schon einzeln im Shop (%s), deshalb vorerst Einzelprodukt' % (eltern_sku, ', '.join(handles)))
            gemeldet.append({'art': 'mehrere_kinder_im_shop', 'eltern_sku': eltern_sku, 'thema': thema, 'im_shop': handles, 'neue_skus': [k['sku'] for k in neue]})
            continue

        if len(handles) == 1:
            h = handles[0]
            sp = shop_produkt[h]
            if h in GESCHUETZT or sp['option']:
                grund = 'geschützt (OL-G40-Set)' if h in GESCHUETZT else 'bestehendes Produkt hat bereits Varianten'
                for k in neue:
                    einzelprodukt(k, ['pruefen-varianten'], 'Elternteil %s: %s, nichts zusammengeführt' % (eltern_sku, grund))
                gemeldet.append({'art': 'bestehend_nicht_aenderbar', 'eltern_sku': eltern_sku, 'handle': h, 'grund': grund, 'neue_skus': [k['sku'] for k in neue]})
                continue
            bestehend = [k for k in kinder if k['import_status'] == 'im_shop']
            alle_kinder = bestehend[:1] + neue
            optionen, werte, hinw, ohne = optionen_bilden(alle_kinder, thema, sp['product_type'], bestehend[0]['titel'])
            if bestehend[0] in ohne or hinw or not optionen:
                for k in neue:
                    einzelprodukt(k, ['pruefen-varianten'], 'Elternteil %s: Optionswerte nicht sauber bildbar (%s), deshalb Einzelprodukt' % (eltern_sku, '; '.join(hinw) or 'Wert fehlt'))
                gemeldet.append({'art': 'optionen_unklar', 'eltern_sku': eltern_sku, 'handle': h, 'neue_skus': [k['sku'] for k in neue], 'hinweise': hinw})
                continue
            for k in ohne:
                einzelprodukt(k, ['pruefen-varianten'], 'Elternteil %s: Optionswert fehlt, deshalb eigenes Produkt' % eltern_sku)
            dabei = [k for k in neue if k not in ohne]
            for k in dabei:
                k['ziel'] = {'art': 'variante_an_bestehendes', 'handle': h}
                k['optionswerte'] = werte[k['sku']]
            familien_mix = sorted(set(k['familie'] for k in alle_kinder if k not in ohne))
            zusammenfuehrungen.append({
                'handle': h, 'eltern_sku': eltern_sku, 'thema': thema, 'shop_status': sp['status'],
                'bestehende_sku': shop_sku[bestehend[0]['sku']][1], 'bestehende_optionswerte': werte[bestehend[0]['sku']],
                'optionen': optionen,
                'neue_varianten': [{'sku': k['sku'], 'sku_amazon': k['sku_amazon'], 'preis_eur': k['preis_eur'], 'barcode': k['ean'],
                                    'optionswerte': werte[k['sku']], 'bild': k['hauptbild']} for k in dabei],
                'neue_bilder': bilder_union(dabei, ohne=set(bestehend[0]['bilder'])),
                'hinweise': (['Elternteil mischt Familien: ' + ', '.join(familien_mix)] if len(familien_mix) > 1 else [])
                            + (['bestehendes Produkt ist ACTIVE'] if sp['status'] == 'ACTIVE' else []),
            })
            continue

        # alle Kinder neu
        if len(neue) == 1:
            einzelprodukt(neue[0], hinweis='einziges importierbares Kind von %s' % eltern_sku)
            continue
        kats = set(k['kategorie'] for k in neue)
        kat = list(kats)[0] if len(kats) == 1 else None
        ptyp = KAT[kat][1] if kat else ''
        optionen, werte, hinw, ohne = optionen_bilden(neue, thema, ptyp, neue[0]['titel'])
        for k in ohne:
            einzelprodukt(k, ['pruefen-varianten'], 'Elternteil %s: Optionswert fehlt, deshalb eigenes Produkt' % eltern_sku)
        dabei = [k for k in neue if k not in ohne]
        if hinw or not optionen or len(dabei) < 2:
            for k in dabei:
                einzelprodukt(k, ['pruefen-varianten'], 'Elternteil %s: Optionswerte nicht sauber bildbar, deshalb Einzelprodukt' % eltern_sku)
            gemeldet.append({'art': 'optionen_unklar', 'eltern_sku': eltern_sku, 'neue_skus': [k['sku'] for k in dabei], 'hinweise': hinw})
            continue
        hinweise = []
        titel = el['titel'] if el and el['titel'] else ''
        if titel and not eltern_titel_passt(titel, kat):
            hinweise.append('Eltern-Titel „%s“ nennt eine andere Kategorie, Titel deshalb aus dem ersten Kind abgeleitet' % titel)
            titel = ''
        if not titel:
            titel = titel_ohne_groesse_farbe(dabei[0]['titel'])
            if not el:
                hinweise.append('Elternteil %s steht nicht im Bericht, Titel aus dem ersten Kind abgeleitet' % eltern_sku)
        if len(kats) > 1:
            hinweise.append('Kinder fallen in verschiedene Kategorien (%s), deshalb todo-kategorie' % ', '.join(sorted(KAT[k][1] if k else 'kein Hinweis' for k in kats)))
        stroeme = set(k['stromquelle'] for k in dabei)
        lichter = set(k['lichtfarbe_metafeld'] for k in dabei)
        fam = sorted(set(k['familie'] for k in dabei))
        schluessel = dabei[0]['sku'].lower()
        for k in dabei:
            k['ziel'] = {'art': 'neu_variante', 'schluessel': schluessel}
            k['optionswerte'] = werte[k['sku']]
        neue_produkte.append({
            'schluessel': schluessel, 'art': 'varianten', 'eltern_sku': eltern_sku, 'thema': thema, 'titel': titel,
            'product_type': ptyp, 'vendor': 'HeiPard', 'status': 'draft', 'tags': tags_fuer(dabei),
            'metafelder': {'heipard.familie': fam[0] if len(fam) == 1 else None,
                           'heipard.stromquelle': stroeme.pop() if len(stroeme) == 1 else None,
                           'heipard.lichtfarbe': (lichter.pop() if len(lichter) == 1 and 'Lichtfarbe' not in [o['name'] for o in optionen] else None)},
            'optionen': optionen,
            'varianten': [{'sku': k['sku'], 'sku_amazon': k['sku_amazon'], 'preis_eur': k['preis_eur'], 'barcode': k['ean'],
                           'optionswerte': werte[k['sku']], 'bild': k['hauptbild']} for k in dabei],
            'bilder': bilder_union(dabei),
            'hinweise': hinweise + (['Familien gemischt: ' + ', '.join(fam)] if len(fam) > 1 else []),
        })

    for r in neu:
        if 'ziel' not in r:  # ohne Elternteil
            r['variationsthema'] = r['thema']
            einzelprodukt(r)

    # --- Ausgabe JSON (Format von Welle 1 plus Zusatzfelder)
    def datensatz(r):
        return {
            'sku': r['sku'], 'sku_amazon': r['sku_amazon'], 'asin': r['asin'], 'ean': r['ean'],
            'titel_amazon': r['titel'], 'titel_ohne_farbe': None,
            'beschreibung_amazon': r['beschreibung'], 'bullet_points': r['bullet_points'],
            'preis_eur': r.get('preis_eur'), 'bestand': None, 'marke': 'HeiPard', 'serie': r['serie'],
            'produkttyp': r.get('produkttyp', ''), 'farbe': r['m']['licht'] if 'm' in r else None,
            'tags_vorschlag': tags_fuer([r]) if r['import_status'] == 'neu' else [],
            'bilder': r['bilder'], 'anzahl_bilder': len(r['bilder']), 'bilder_vorhanden': bool(r['bilder']),
            'hinweise': r['hinweise'],
            'eltern_sku': r['eltern_sku'], 'variationsthema': r.get('variationsthema', r['thema']),
            'optionswerte': r.get('optionswerte', {}), 'kat_tags': r.get('kat_tags', []) if r['import_status'] == 'neu' else [],
            'familie': r['familie'],
            'familie_quelle': r.get('familie_quelle', ''), 'kategorie_quelle': r.get('kategorie_quelle', ''),
            'excel_bezeichnung': r['excel_bezeichnung'], 'amazon_produkttyp': r['amazon_typ'],
            'status_amazon': r['status'], 'abstammung': r['abstammung'] or 'ohne Elternteil',
            'stromquelle': r.get('stromquelle'), 'lichtfarbe_metafeld': r.get('lichtfarbe_metafeld'),
            'import_status': r['import_status'], 'grund': r['grund'], 'ziel': r.get('ziel'),
        }

    zaehler = collections.Counter(r['import_status'] for r in hp)
    meta = {
        'quelle': REPORT.name, 'stand': '2026-10-02', 'erzeugt_von': 'docs/data/welle1b_aufbereitung.py',
        'zeilen_heipard': len(hp), 'importierbar_laut_abschnitt_1': anzahl_importierbar,
        'zaehlung': dict(zaehler), 'shop_produkte_am_stichtag': shop['anzahl_produkte'],
        'neue_skus': len(neu), 'neue_produkte': len(neue_produkte), 'zusammenfuehrungen': len(zusammenfuehrungen),
        'hinweis': 'Trockenlauf. Es wurde nichts im Shop angelegt.',
    }
    json.dump({'meta': meta, 'produkte': [datensatz(r) for r in hp if r['abstammung'] != 'Eltern'],
               'elternteile': [{'sku': r['sku_amazon'], 'status': r['status'], 'thema': r['thema'], 'titel': r['titel']} for r in hp if r['abstammung'] == 'Eltern'],
               'plan': {'neue_produkte': neue_produkte, 'zusammenfuehrungen': zusammenfuehrungen, 'gemeldet': gemeldet}},
              open(OUT_JSON, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)

    return {'hp': hp, 'eltern': eltern, 'neu': neu, 'importierbar': importierbar, 'anzahl_importierbar': anzahl_importierbar,
            'neue_produkte': neue_produkte, 'zusammenfuehrungen': zusammenfuehrungen, 'gemeldet': gemeldet,
            'shop': shop, 'shop_sku': shop_sku, 'meta': meta, 'familien': familien}


if __name__ == '__main__':
    erg = main()
    print(json.dumps(erg['meta'], ensure_ascii=False, indent=1))
    try:
        import welle1b_plan
        welle1b_plan.schreibe(erg, OUT_PLAN)
        print('Plan geschrieben:', OUT_PLAN.name)
    except ImportError:
        print('welle1b_plan.py fehlt, Plan nicht geschrieben')
