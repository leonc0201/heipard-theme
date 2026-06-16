# Briefing — Heipard Shopify-Setup (für Daniel)

Du unterstützt Daniel beim Einrichten der Shopify-Anbindung für ein neues
Theme-Projekt (heipard.com, D2C-Shop für Dekolicht, Marke der C&L Handels GmbH).
Das Theme selbst wird von einer anderen Claude-Code-Instanz im Repo gebaut —
deine Aufgabe hier ist NUR das Infrastruktur-Setup, KEIN Theme-Code.

## Ausgangslage

- Das fertige Theme-Repo existiert bereits: https://github.com/leonc0201/heipard-theme
  (privat, Branch `main`, Dawn-Basis + Briefing-Dateien in /docs)
- Es soll mit einem Shopify-(Development-)Store verbunden werden
- Der Build startet erst NACH dieser Verbindung, durch eine separate Session

## Aufgaben

1. **Shopify Development Store** (falls noch nicht vorhanden)
   Über den Shopify-Partner-Account einen Dev-Store für Heipard anlegen
   (kostenlos, unbegrenzt). Store-Handle notieren — die andere Claude-Code-
   Instanz braucht ihn später für `shopify theme dev --store <handle>`.

2. **GitHub-Integration einrichten**
   Im Shopify-Admin: Onlineshop → Themes → Theme hinzufügen → Über GitHub
   verbinden → Repo `heipard-theme`, Branch `main`.
   Das verbundene Theme bleibt **unveröffentlicht** bis zum Launch.
   Ab dann synct jeder Push auf `main` automatisch ins Theme.

3. **Store-Zugang für die Build-Instanz**
   Leon/die bauende Claude-Code-Instanz benötigt Collaborator-Zugang zum Store,
   damit die Shopify CLI eine Live-Preview ziehen kann.

## Kritische Regeln (Lehre aus dem LUMOnova-Projekt)

- **Live-Gang:** Beim späteren Launch den DEV-STORE SELBST auf einen bezahlten
  Plan hochstufen — NICHT einen neuen Store live schalten und das Theme
  rüberziehen. Sonst bleibt die GitHub-Verbindung am Dev-Theme hängen und der
  Live-Shop bekommt keine Updates mehr. Ein Store über den ganzen Lebenszyklus,
  GitHub-Verbindung folgt dem Live-Theme.
- **Two-Way-Sync:** Die GitHub-Integration synct in beide Richtungen. Während
  der Bauphase keine Änderungen im Shopify-Theme-Customizer vornehmen — diese
  werden als Commits zurückgeschrieben (v.a. `config/settings_data.json` und
  Template-JSONs) und kollidieren mit der Arbeit der Build-Instanz. Theme-
  Änderungen laufen ausschließlich über das Repo.

## Was du NICHT tust

- Keinen Theme-Code schreiben oder ändern
- Das Theme nicht veröffentlichen
- Nichts am Repo-Inhalt ändern

Wenn die Verbindung steht, gib Daniel den Store-Handle und eine kurze
Bestätigung zurück, dass Repo ↔ Store verbunden und der Store-Zugang
eingerichtet ist.
