# Bild-Briefing für Gemini

Acht Bilder. Sieben ersetzen die Platzhalter in `public/images/v3/`, eines fehlt
komplett. Dateiname und Maße exakt einhalten, dann muss im Code nichts geändert
werden.

---

## Der Haus-Stil

**Dieser Block gehört an das Ende JEDES Prompts.** Er ist der einzige Grund,
warum die acht Bilder später wie ein Satz aussehen und nicht wie acht einzelne
KI-Bilder:

> Photographic, shot on a 35mm lens at f/2. Natural window light from one side,
> soft shadows, no flash, no studio lighting. Muted colour grade pulled toward
> deep navy blue (#0B1F3A) in the shadows, warm off-white (#F2F0EB) in the
> highlights. A single warm orange (#FF5A1F) accent somewhere in frame, small,
> never dominant. Slight film grain. Realistic imperfection: a scuffed surface,
> a crease, a cable. No text, no logos, no UI mockups, no charts, no stock-photo
> smiles, no handshakes, no people pointing at screens.

Die letzten drei Verbote sind wichtig. Handschlag, Lächeln in die Kamera und der
Finger auf dem Bildschirm sind genau die Signale, an denen man eine
Agentur-Website als beliebig erkennt.

**Seitenverhältnis** schreibst du zusätzlich dazu, Gemini hält sich sonst nicht
daran. Falls die Ausgabe nicht exakt passt, ist das kein Problem: alle Bilder
liegen in `object-cover`-Containern und werden mittig beschnitten.

---

## 1. `hero.jpg` — 1920 × 1280 (3:2 quer)

Das erste, was jeder sieht. Die Headline steht unten links darüber, also muss
die untere linke Bildhälfte ruhig sein.

> A quiet early-morning Dublin street scene viewed from inside a small first-floor
> office: a window, a desk edge in the foreground out of focus, Georgian brick
> buildings across the road, wet pavement. Nobody in frame. The lower left of the
> image is dark and uncluttered. Cool blue morning light with one warm orange
> reflection in the glass.

**Alternative, falls du selbst ins Bild willst:** dich am Schreibtisch von der
Seite, Blick auf den Monitor, nicht in die Kamera, Gesicht im Halbschatten. Das
wäre stärker als jedes Stadtbild, weil die ganze Seite von „du redest mit einer
Person" handelt. Überleg dir das.

## 2. `services.jpg` — 1600 × 1000 (16:10 quer)

Liegt zu 30% Deckkraft unter einem fast schwarzen Panel. Braucht nur Struktur,
keine Details.

> Extreme close-up of layered translucent paper or frosted glass panes
> overlapping at slight angles, lit from behind. Abstract, no recognisable
> objects. Deep navy with one warm orange glow bleeding through the layers.

## 3. `case-study.jpg` — 1600 × 1200 (4:3 quer)

Läuft an drei Stellen, überall mit Anthony Joyce & Co. daneben: Case-Study-Block
auf der Startseite, `/case-studies` und der Header der Detailseite.

> A modern Dublin solicitor's office at blue hour. A clean dark desk with a
> closed laptop, a phone face down and a single glass of water. Behind it a tall
> Georgian sash window looking onto a wet street, city lights just coming on.
> Nobody in frame. Absolutely no signage, no nameplates, no lettering and no
> readable text anywhere in the image. Cool navy tones dominate the room, with
> one warm orange reflection in the window glass.

**Der erste Versuch ging in die falsche Richtung** und das lag an meinem
ursprünglichen Prompt, der nach einer altmodischen Kanzlei mit Papierakten und
Messinglampe gefragt hat. Drei Probleme daran, für den Fall dass eine spätere
Runde wieder dorthin driftet:

- **Erfundene Schilder.** Das Modell hat ein Messingschild mit einem erfundenen
  Kanzleinamen an die Wand gesetzt. Auf einer Seite über einen echten Kunden
  liest sich das wie der Kunde. Deshalb steht das Textverbot jetzt zweimal im
  Prompt: Bildmodelle überlesen es gern.
- **Falsche Farben.** Eine grüne Bankerlampe ist das hellste Objekt im Bild und
  Grün kommt in der Palette nicht vor.
- **Falsche Aussage.** Gestapelte Papierakten sind das Gegenbild zu einer Seite,
  die von nachvollziehbarem Tracking handelt, und sie lassen den Kunden
  rückständig aussehen.

## 4–6. `work-1.jpg`, `work-2.jpg`, `work-3.jpg` — je 1400 × 1050 (4:3 quer)

**Hier gilt etwas anderes.** Diese drei sollten möglichst keine KI-Bilder sein,
sondern echte Screenshots der Landingpages, die du für Anthony Joyce, Byrock und
SolarGen gebaut hast. Der ganze Sinn der Sektion ist „Seiten, die ich gebaut
habe". Ein generiertes Bild macht den Beweis wieder kaputt.

So machst du es gut: Seite im Browser öffnen, Fenster auf 1400 Pixel Breite,
Screenshot vom oberen Seitenbereich, dann leicht gedreht auf eine ruhige Fläche
in der Markenfarbe legen. Falls eine der Seiten nicht mehr online ist, nimm
stattdessen:

> A laptop seen from a steep angle on a plain surface, screen showing an
> out-of-focus web page, warm orange highlight on the edge of the screen.

## 7. `cta.jpg` — 1920 × 900 (21:10, sehr breit)

Letzte Sektion vor dem Footer. Text steht links, rechte Hälfte darf offen sein.

> Dublin at blue hour from a rooftop, shot wide. City lights just coming on,
> scattered warm orange windows against deep blue sky. Left third of the frame
> darker and emptier than the right.

## 8. `og-default.jpg` — 1200 × 630 → nach `public/images/`

**Achtung, anderer Ordner:** `public/images/`, nicht `public/images/v3/`.

Dieses Bild fehlt komplett. Es wird in `src/app/layout.tsx` und `src/lib/seo.ts`
referenziert, existiert aber nicht, weshalb jeder geteilte Link auf LinkedIn und
WhatsApp gerade leer aussieht.

Das ist kein Foto, sondern eine Grafik. Am schnellsten baust du sie in Figma oder
Canva: navy Fläche `#0B1F3A`, links dein „stark."-Logo in Off-White, darunter
groß „Search & Growth, Dublin" in Bricolage Grotesque Bold, unten rechts ein
orangefarbener Punkt. Fertig. Ein KI-Bild kann hier keinen Text setzen, deshalb
lohnt sich das Generieren nicht.

---

## Einbauen

Alle sieben v3-Dateien überschreiben und dabei die Namen behalten:

```
public/images/v3/hero.jpg
public/images/v3/services.jpg
public/images/v3/case-study.jpg
public/images/v3/work-1.jpg
public/images/v3/work-2.jpg
public/images/v3/work-3.jpg
public/images/v3/cta.jpg
public/images/og-default.jpg
```

Next.js optimiert und konvertiert beim Build selbst nach WebP, also liefere
ruhig große JPGs. Ab ungefähr 2 MB pro Datei wird der Build langsam, darunter
ist alles unkritisch.

Ein Punkt bleibt offen: Die `alt`-Texte im Code sind aktuell leer oder generisch,
weil ich nicht weiß, was am Ende auf den Bildern zu sehen ist. Wenn die echten
Bilder da sind, schreibe ich sie nach.
