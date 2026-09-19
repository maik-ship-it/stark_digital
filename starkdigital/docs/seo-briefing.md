# SEO-Umbau starkdigital.ie — Implementierungsbriefing

Stand: 19. September 2026
Für: Claude Code, Repo `maik-ship-it/stark_digital`
Autor der Analyse: Vorgespräch mit Maik, Datenbasis siehe Abschnitt 2

---

## 0. Kontext in drei Sätzen

starkdigital.ie ist die Website einer Ein-Personen-Agentur in Dublin (Google Ads, SEO, AI Search, Landingpages für Professional Services). Die Seite ist inhaltlich gut geschrieben, aber auf ein Keyword optimiert, das in Irland 20 Suchanfragen im Monat hat, und sie kannibalisiert sich an fünf Stellen selbst. Dieses Dokument beschreibt den Umbau, nicht das Schreiben neuer Inhalte.

**Technischer Stand**
- Next.js App Router, deployed auf Vercel, Projekt `stark-digital`, Team `maik-ship-it`
- Live-Host: `https://www.starkdigital.ie` (non-www leitet auf www um)
- Google Search Console: Domain Property `sc-domain:starkdigital.ie`, verifiziert per DNS TXT, Sitemap eingereicht (21 URLs, processed successfully)
- GTM-Container `GTM-WP639HLD` ist eingebunden
- Aktueller Bestand: Startseite, 4 Service-Seiten, 5 Branchenseiten, 9 Blogposts, Case Studies, About, Contact

---

## 1. Ziel des Umbaus

1. Selbstkannibalisierung zwischen Blogposts und Branchenseiten beseitigen
2. Den Schwerpunkt der Seite von "Google Ads" (20 Suchen/Monat) auf "SEO" (über 1.100 Suchen/Monat im Cluster) verlagern, ohne die Google-Ads-Positionierung aufzugeben
3. Canonical- und Host-Inkonsistenzen beseitigen, die Google zwingen, sich zwischen www und non-www zu entscheiden
4. Case Study veröffentlichen und intern verlinken

Nicht Ziel: mehr Blogposts. Der gesamte adressierbare Keyword-Raum umfasst 34 relevante Keywords im Agentur-Cluster und 163 im erweiterten Marketing-Cluster. Der Bestand von 15 Inhaltsseiten deckt die Nachfrage bereits weitgehend ab.

---

## 2. Datenbasis

Google Ads Keyword-Planer, abgerufen am 19.09.2026 aus dem Konto "Anthony Joyce & Co." (ocid 1074781175). Einstellungen: Standort Irland, Sprache Englisch, Netzwerk Google, Zeitraum Sept. 2025 bis Aug. 2026. Exakte Werte, keine Spannen, weil das Konto aktiven Spend hat.

### 2.1 Agentur-Keywords (Seed: google ads agency dublin, ppc agency ireland, seo agency dublin → 34 Ideen)

| Keyword | Suchen/Monat | Wettbewerb | Top-of-Page Bid low | high |
|---|---|---|---|---|
| seo agency dublin | 720 | Mittel | 5,69 € | 11,83 € |
| seo company dublin | 720 | Mittel | 5,69 € | 11,83 € |
| seo agency in dublin | 720 | Mittel | 5,69 € | 11,83 € |
| dublin seo agency | 720 | Mittel | 5,69 € | 11,83 € |
| seo in dublin | 720 | Mittel | 3,26 € | 11,79 € |
| search engine optimization dublin | 720 | Mittel | 3,26 € | 11,79 € |
| seo services dublin | 210 | Gering | — | — |
| seo consultant dublin | 110 | Gering | — | — |
| ppc agency dublin | 90 | Mittel | 7,12 € | 17,62 € |
| local seo dublin | 70 | Gering | 5,08 € | 11,76 € |
| seo expert in dublin | 70 | Gering | — | — |
| ppc agency ireland | 50 | — | — | — |
| best seo company dublin | 50 | Gering | — | — |
| dublin seo services | 40 | Gering | — | — |
| local seo services dublin | 40 | Mittel | — | — |
| search engine optimisation in dublin | 40 | Mittel | — | — |
| ppc management ireland | 30 | Mittel | — | — |
| seo dublin services | 30 | — | — | — |
| **google ads agency dublin** | **20** | Mittel | 4,42 € | 11,93 € |
| ppc management dublin | 20 | — | — | — |
| best seo agency in dublin | 10 | Hoch | — | — |
| adwords agency dublin | 10 | Gering | — | — |
| adwords agency ireland | 10 | — | — | — |
| affordable seo agency dublin | 10 | — | — | — |
| google adwords agency dublin | 10 | — | — | — |
| local seo in dublin | 10 | — | — | — |
| ppc agency cork | 10 | — | — | — |
| ppc services dublin | 10 | — | — | — |
| ppc agency northern ireland / ni | 10 je | — | — | — |

Hinweis: "google ads agency dublin" wächst stark (+400 % über drei Monate, +150 % im Jahresvergleich), aber von einer sehr niedrigen Basis.

### 2.2 Erweiterter Markt (Seed: how much do google ads cost, google ads for solicitors, marketing for accountants, digital marketing agency dublin → 163 Ideen)

| Keyword | Suchen/Monat | Wettbewerb | Top-of-Page Bid low | high |
|---|---|---|---|---|
| digital marketing agency dublin | 320 | Hoch | 3,83 € | 10,80 € |
| marketing agency dublin | 320 | Hoch | 2,37 € | 14,42 € |
| digital marketing companies dublin | 320 | Hoch | 3,83 € | 10,80 € |
| advertising agency dublin | 140 | Mittel | 2,78 € | 13,89 € |
| ad agencies dublin | 140 | Mittel | 2,78 € | 13,89 € |
| digital agency dublin | 110 | Hoch | 3,02 € | 7,10 € |
| social media agency dublin | 110 | Hoch | 3,72 € | 20,10 € |
| marketing companies dublin | 90 | Hoch | 3,31 € | 20,34 € |
| digital marketing dublin | 90 | Hoch | 4,66 € | 8,64 € |
| marketing firms dublin | 30 | Hoch | 2,03 € | 7,53 € |
| **how much do google ads cost** | **20** | Mittel | 2,18 € | **56,36 €** |
| how much does it cost for google ads | 20 | Mittel | 2,18 € | 56,36 € |
| how much does google adwords cost | 20 | Mittel | 2,18 € | 56,36 € |
| web agency dublin | 20 | Mittel | 4,20 € | 8,21 € |
| content marketing agency dublin | 20 | Gering | — | — |
| **google ads for solicitors** | **10** | — | — | — |
| **marketing for accountants** | **10** | — | — | — |
| how much does it cost to advertise on google | 10 | Gering | — | — |

### 2.3 Die drei Schlussfolgerungen, auf denen alles Folgende beruht

1. Der SEO-Cluster in Dublin ist rund 36 mal so groß wie der Google-Ads-Agentur-Cluster (720+ gegen 20). `/seo-dublin` ist die wertvollste Seite der Website und aktuell die schwächste ausgebaute.
2. Die fünf Branchen-Blogposts zielen auf Keywords mit 10 oder weniger Suchen im Monat und existieren doppelt als Branchenseiten. Sie können kein Traffic-Asset werden. Sie werden zusammengelegt.
3. "how much do google ads cost" hat nur 20 Suchen, aber einen Top-of-Page Bid bis 56,36 €. Das ist der teuerste Klick im gesamten Set und ein Signal für hohe kommerzielle Absicht. Der Artikel bleibt und wird ausgebaut.

---

## 3. Arbeitspakete

Reihenfolge einhalten. Paket A zuerst, weil alles Weitere sonst auf einem inkonsistenten Host-Setup aufsetzt.

### Paket A — Technische Konsistenz (höchste Priorität)

**A1. Canonical-Host vereinheitlichen auf www**

Aktueller Fehler: Jede Seite setzt `canonical: https://starkdigital.ie/...` (ohne www), ausgeliefert wird aber `https://www.starkdigital.ie/...`. Verifiziert auf `/blog` und `/blog/how-much-do-google-ads-cost-ireland`.

Zu tun:
- Zentrale Base-URL-Konstante im Projekt finden (vermutlich `metadataBase` in `app/layout.tsx` oder eine `siteConfig`/`env`-Variable) und auf `https://www.starkdigital.ie` setzen
- Prüfen, dass alle `alternates.canonical` daraus abgeleitet werden und keine Seite eine hartkodierte non-www-URL enthält
- `grep -rn "https://starkdigital.ie" --include=*.ts --include=*.tsx --include=*.js --include=*.mjs --include=*.json .` und jeden Treffer bewerten

**A2. og:url reparieren**

Aktueller Fehler: `og:url` zeigt auf jeder Unterseite auf die Startseite. Auf `/blog` fehlt zusätzlich der Seitenbezug.

Zu tun: `openGraph.url` pro Route aus der eigenen Pathname ableiten, nicht aus der Root-Konfiguration erben. Gleiches gilt für `og:title` und `og:description`, die pro Route korrekt gesetzt sein müssen (sind sie bei den Blogposts bereits).

**A3. Sitemap auf www umstellen**

Aktueller Fehler: `sitemap.xml` listet alle 21 URLs als non-www.

Zu tun: Sitemap-Generator (`app/sitemap.ts` oder statische Datei) auf www umstellen. Nach dem Deploy Sitemap in der Search Console neu einreichen.

**A4. robots.txt aufräumen**

Aktueller Fehler: `Host:`-Direktive zeigt auf non-www. Das ist eine Yandex-Direktive, Google ignoriert sie, aber sie widerspricht dem Rest des Setups.

Zu tun: `Host:`-Zeile entfernen oder auf www setzen. Sitemap-Verweis in robots.txt ebenfalls auf www.

**A5. Nach Deploy**

- In der Search Console für die wichtigsten URLs Indexierung neu anfordern: `/`, `/seo-dublin`, `/google-ads-dublin`, `/case-studies`, `/blog/how-much-do-google-ads-cost-ireland`
- `site:starkdigital.ie` prüfen. Vor dem Umbau: 18 von 21 URLs im Index, gemischt www und non-www. Ziel: nur noch www.

---

### Paket B — Kannibalisierung auflösen (5 Zusammenlegungen)

Jedes Paar unten bedient dasselbe Keyword mit zwei URLs. Die Serviceseite überlebt, weil sie die kommerzielle Absicht bedient. Der Blogpost wird inhaltlich ausgeschlachtet und dann per 301 umgeleitet.

| Quelle (301 weg) | Ziel (bleibt) |
|---|---|
| `/blog/google-ads-for-solicitors-ireland` | `/google-ads-dublin/solicitors` |
| `/blog/google-ads-for-accountants-dublin` | `/google-ads-dublin/accountants` |
| `/blog/google-ads-for-financial-advisors-ireland` | `/google-ads-dublin/financial-advisors` |
| `/blog/google-ads-for-dental-clinics-dublin` | `/google-ads-dublin/dental-clinics` |
| `/blog/google-ads-for-tradespeople-dublin` | `/google-ads-dublin/tradespeople` |

Vorgehen je Paar:
1. Beide Inhalte nebeneinander legen. Der Blogpost enthält in der Regel mehr Substanz (FAQ-Blöcke, konkrete Taktiken, Budgetangaben), die Serviceseite mehr Verkaufsstruktur.
2. Alles aus dem Blogpost, das auf der Serviceseite fehlt, in die Serviceseite übernehmen. FAQ-Blöcke mitnehmen, sie sind für FAQPage-Schema und AI-Antworten nützlich.
3. Blogpost-Route entfernen und 301 in `next.config.js` unter `redirects()` eintragen, `permanent: true`.
4. Blogpost aus der Blog-Übersicht und aus allen "Continue reading"-Modulen entfernen.
5. Blogpost-URL aus der Sitemap entfernen, Ziel-URL drin lassen.

Wichtig: Kein 302, kein Client-Side-Redirect, keine Canonical-Lösung statt Redirect. Es muss ein serverseitiger 301 sein, damit die Signale wirklich übergehen.

**Zielkeyword pro überlebender Seite** (für Title, H1, Intro, interne Ankertexte):

| Seite | Primär | Sekundär |
|---|---|---|
| `/google-ads-dublin/solicitors` | google ads for solicitors ireland | ppc for law firms dublin |
| `/google-ads-dublin/accountants` | google ads for accountants dublin | marketing for accountants |
| `/google-ads-dublin/financial-advisors` | google ads for financial advisors ireland | cbi compliant advertising |
| `/google-ads-dublin/dental-clinics` | google ads for dentists dublin | dental marketing dublin |
| `/google-ads-dublin/tradespeople` | google ads for tradespeople dublin | local services ads ireland |

Die Volumina sind klein (unter 20). Diese Seiten sind Verkaufs- und Vertrauensmaterial, kein Traffic-Motor. Entsprechend kurz halten, keine weitere Arbeit investieren, sobald der Merge sitzt.

---

### Paket C — `/seo-dublin` ausbauen (größter Ertrag)

Das ist die wichtigste einzelne Änderung. Die Seite muss auf das Niveau von `/google-ads-dublin` gebracht werden, besser darüber.

**Zielkeywords**

| Primär | seo agency dublin (720) |
|---|---|
| Sekundär | seo services dublin (210), seo consultant dublin (110), local seo dublin (70), seo company dublin (720, gleicher Cluster) |
| Vermeiden | "best seo agency dublin" als Selbstbezeichnung, Wettbewerb hoch bei 10 Suchen |

**Struktur, die gebaut werden soll**

1. H1 mit "SEO Agency Dublin" oder "SEO in Dublin", nicht mit einem Claim ohne Keyword
2. Für wen: dieselben fünf Branchen wie bei Google Ads, jeweils ein Absatz mit Link auf die passende Branchenseite
3. Was wir tun: technisches SEO, lokales SEO (Google Business Profile), Content, interne Struktur. Lokales SEO explizit als eigener Abschnitt, "local seo dublin" hat 70 Suchen bei geringem Wettbewerb.
4. Wie wir messen: Search Console, Rankings, Anfragen. Mit einem konkreten Beispiel.
5. Preis: dieselbe Transparenz wie auf der Google-Ads-Seite (ab 1.500 €/Monat, zwei neue Kunden im Monat).
6. FAQ mit 5 bis 7 Fragen, die tatsächlich gesucht werden: how long does seo take, seo vs google ads, what does an seo agency do, how much does seo cost in ireland
7. Derselbe CTA-Block wie auf den anderen Seiten

**Titles und Meta**

- Title: `SEO Agency Dublin | Stark Digital` (Keyword vorn, kein Füllwort davor)
- Description: eine Zeile, die "SEO services in Dublin" enthält und die Zwei-Kunden-Begrenzung nennt

**Interne Verlinkung**

Von Startseite, `/blog/google-ads-vs-seo-ireland`, `/geo-ai-search` und jeder Branchenseite mit Ankertext "SEO in Dublin" oder "SEO agency Dublin" auf `/seo-dublin` verlinken. Nicht mit "hier" oder "mehr erfahren".

---

### Paket D — Case Study veröffentlichen

Die Anthony-Joyce-Case-Study ist fertig geschrieben und noch nicht live.

Zu tun:
- Unter `/case-studies/` veröffentlichen, aus der Navigation und vom Footer erreichbar
- Von `/`, `/google-ads-dublin`, `/google-ads-dublin/solicitors` und `/seo-dublin` verlinken
- In die Sitemap aufnehmen, Indexierung anfordern
- `Article`-Schema setzen, Autor Maik Stark

**Freigabe- und Vertraulichkeitsregeln, unbedingt einhalten:**
- Veröffentlichung erst nach schriftlicher Freigabe des Mandanten
- Niemals veröffentlichen: geschätzte Monatshonorare der Kanzlei, interne Sonderposten aus den Kanzlei-Reports, der Name der Vorgängeragentur oder ihrer Ansprechpartner, Mandantennamen, Aktenzeichen
- Google-Ads-Conversions niemals als "clients" oder "Mandanten" bezeichnen. Der korrekte Begriff ist "tracked enquiries". Conversions sind getrackte Anrufe und Formulare, keine eröffneten Akten.
- Die drei Startseiten-Kennzahlen (+112 % Anfragen, −38 % Kosten pro Anfrage, 3,4× ROAS) beziehen sich auf die ersten 90 Tage nach Launch. Wenn sie in der Case Study auftauchen, muss der Bezugszeitraum dabeistehen. Der ROAS-Wert ist modelliert, nicht gemessen, und muss als solcher gekennzeichnet sein.

---

### Paket E — Vier bestehende Blogposts überarbeiten

**E1. `/blog/how-much-do-google-ads-cost-ireland` — höchste Priorität in diesem Paket**

Grund: teuerster Klick im gesamten Keyword-Set (Top-of-Page Bid bis 56,36 €), also höchste kommerzielle Absicht.

Zu tun:
- Aktuelle Preisangabe im Text prüfen. Im Text steht 1.500 €/Monat, in Googles Suchsnippet kursiert noch die alte Version mit 1.000 € und "Max. 8 clients". Nach der Korrektur Indexierung neu anfordern.
- Den Abschnitt "Ad spend: what to expect by industry" mit echten Kontowerten unterfüttern statt mit Schätzspannen. Verfügbar sind reale Kosten pro Conversion je Rechtsgebiet aus einem irischen Kanzlei-Konto über zehn Monate.
- Publikationsdatum und `dateModified` aktualisieren, wenn substanziell überarbeitet
- FAQPage-Schema ergänzen

**E2. `/blog/google-ads-vs-seo-ireland`**

Läuft direkt in den 720er SEO-Cluster. Ausbauen, von `/seo-dublin` verlinken, `/seo-dublin` von hier verlinken.

**E3. `/blog/how-to-choose-google-ads-agency-dublin`**

Bleibt unverändert. Fängt Vergleichssucher ab, die kurz vor der Entscheidung stehen.

**E4. `/blog/google-ads-vs-facebook-ads-professional-services-dublin`**

Suchvolumen für Facebook-Ads-Vergleiche in Irland liegt bei praktisch null. Entweder in E2 aufgehen lassen (dann 301 auf `/blog/google-ads-vs-seo-ireland`) oder stehen lassen und nicht weiter investieren. Entscheidung durch Maik.

---

### Paket F — Strukturiertes Markup und interne Verlinkung

**F1. Schema**
- `Organization` + `LocalBusiness` auf der Startseite (Dublin, Ireland, E-Mail)
- `Article` auf allen Blogposts mit `author`, `datePublished`, `dateModified`
- `FAQPage` überall dort, wo bereits FAQ-Blöcke existieren (Branchenseiten haben welche)
- `BreadcrumbList` passend zu den bereits sichtbaren Breadcrumbs

**F2. Interne Verlinkung, Regeln**
- Blogposts verlinken auf Service- und Branchenseiten, nicht umgekehrt gleich stark
- Ankertexte enthalten das Zielkeyword, keine generischen Formulierungen
- Jede Branchenseite verlinkt auf `/google-ads-dublin` und auf `/seo-dublin`
- Die Case Study wird von mindestens vier Seiten verlinkt

---

## 4. Was ausdrücklich nicht gemacht wird

- Keine neuen Blogposts in den ersten zwei Monaten. Der Bestand deckt die Nachfrage bereits ab, der Ertrag liegt in der Konsolidierung.
- Keine Keyword-Dichte-Optimierung, keine Content-Optimierer-Tools. Die Texte leben von Eigenständigkeit.
- Keine neuen Branchenseiten. Die bestehenden fünf haben zusammen weniger Suchvolumen als "seo services dublin" allein.
- Keine Programmatic-SEO-Seiten ("google ads for X in Y"), der Markt gibt das nicht her und es erzeugt genau das Muster, das Google als scaled content abuse behandelt.
- Kein E-Commerce-Bezug auf der Seite, das ist eine bewusste Positionierungsentscheidung.

---

## 5. Abnahmekriterien

Nach Abschluss muss gelten:

- [ ] Jede ausgelieferte Seite hat einen Canonical auf `https://www.starkdigital.ie/...` (www, identisch mit dem ausgelieferten Host)
- [ ] `og:url` entspricht auf jeder Seite der eigenen URL
- [ ] `sitemap.xml` listet nur www-URLs und enthält keine der fünf zusammengelegten Blog-URLs mehr
- [ ] `robots.txt` enthält keine widersprüchliche Host-Direktive mehr
- [ ] Die fünf Blog-URLs aus Paket B antworten mit HTTP 301 auf die jeweilige Branchenseite
- [ ] Keine interne Verlinkung zeigt mehr auf eine der zusammengelegten URLs (Blog-Übersicht, "Continue reading", Footer geprüft)
- [ ] `/seo-dublin` hat Title, H1, Struktur und Umfang mindestens auf dem Niveau von `/google-ads-dublin`
- [ ] Case Study ist live, in der Sitemap und von mindestens vier Seiten verlinkt
- [ ] Preisangaben auf der gesamten Seite sind konsistent (1.500 €/Monat, zwei neue Kunden pro Monat)
- [ ] Schema-Markup validiert im Rich Results Test ohne Fehler

---

## 6. Wie die Keyword-Daten reproduzierbar sind

Falls neue Zahlen gebraucht werden:

1. Google Ads, Konto mit aktivem Spend (nur dann exakte Volumina statt Spannen)
2. Tools → Planung → Keyword-Planer → Neue Keywords entdecken
3. Standort Irland, Sprache Englisch, Netzwerk Google, Zeitraum letzte 12 Monate
4. 3 bis 4 Seed-Keywords eingeben, nicht mehr. Google erweitert selbst.
5. Spalte "Gebot für obere Positionen (oberer Bereich)" mitlesen. Sie ist bei kleinen Volumina der bessere Indikator für kommerzielle Absicht als das Suchvolumen selbst.

Ergänzend, sobald genug Daten da sind: Search Console Performance-Report, Filter Position 8 bis 20. Das sind die günstigsten Rankings, die zu holen sind, und sie kosten nichts.
