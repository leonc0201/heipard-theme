# Texte für die Runde nach Tylers Antwort

**Stand:** 27.11.2026 (deutsche Zeit), Teil Q, Abschnitt 1, Punkt 2 und 4.

**Wozu:** Leon hat entschieden, dass diese Texte jetzt nicht geändert werden. Die neuen Werte stammen aus der Liste aus
Shenzhen und Tyler bestätigt sie in seiner Mail. Danach gibt es eine Runde für alle Texte, die genauer werden können.
Hier stehen die Kandidaten mit dem heutigen Wortlaut und einem Vorschlag. Geschrieben wird erst, wenn Tyler geantwortet
hat und Leon den Auftrag gibt.

## RPM und TPM: genauer möglich

| Stelle | Feld | Heute (DE) | Vorschlag (DE) | Neuer Wert, Quelle |
|---|---|---|---|---|
| rpm-b2 (`feature_block`) | Text | Wenn die Saison vorbei ist, rollst du die Kette auf. Die 20-m-Kette hat 200 LEDs. | Wenn die Saison vorbei ist, rollst du die Kette auf. Die 20-m-Kette hat 200 LEDs, die 40-m-Kette 400 LEDs. | HP-RPM-400 `led_anzahl` 400 (Auftrag 36, Liste aus Shenzhen) |
| rpm-frage-1 (`product_question`) | Antwort | Die 20-m-Kette hat 200 LEDs. | Die 20-m-Kette hat 200 LEDs, die 40-m-Kette 400 LEDs. | wie oben |
| tpm-b1 (`feature_block`) | Text | Nicht jeder Abend braucht volles Licht am Baum. In der Variante mit 400 LEDs dimmst du in vier Stufen und wählst zwischen 8 Leuchtmodi. | Nicht jeder Abend braucht volles Licht am Baum. Du dimmst in vier Stufen und wählst zwischen 8 Leuchtmodi. | HP-TPM-300: 8 Modi, 4 Dimmstufen (Auftrag 36, Liste aus Shenzhen) |
| tpm-frage-2 (`product_question`) | Antwort | In der Variante mit 400 LEDs sind es 8 Leuchtmodi. | Es sind 8 Leuchtmodi. | wie oben |

Hinweise:
- **RPM, 40-m-Kette:** Leuchtmodi und Schutzart fehlen weiter (Tyler G50, G51). rpm-b1, rpm-r1, rpm-frage-2 und
  rpm-frage-3 sprechen deshalb weiter nur von der 20-m-Kette. Sie kommen in diese Runde, sobald Tyler G50 und G51
  beantwortet.
- **TPM 300:** „Innen & Außen“ ist seit Auftrag 36 belegt. Ob ein Text den Einsatzbereich nur für die Variante mit
  400 LEDs nennt, prüfe ich in der Runde mit.
- EN kommt jeweils nach dem Glossar dazu (zum Beispiel „The 20 m string has 200 LEDs, and the 40 m string has 400 LEDs.“).

## vam-frage-1: bleibt deutsch bis Tylers Antwort

| Stelle | Frage DE | Antwort DE | EN heute | EN nach Tylers Antwort | Quelle |
|---|---|---|---|---|---|
| vam-frage-1 (`product_question`, hp-vam-400l-eu-1) | Wie lang ist die Lichterkette? | Sie ist 40 m lang. | keine Übersetzung, EN zeigt Deutsch | How long are the string lights? / They are 40 m long. | `gesamtlaenge_m` 40 hat keine Quelle aus Teil L oder M. Die 40 m stehen in Tylers Mail. |

Bestätigt Tyler die 40 m, bleibt DE unverändert und EN wird gesetzt. Nennt er einen anderen Wert, ändern sich DE und EN,
und die Asset-Instanz zieht `gesamtlaenge_m` nach.
