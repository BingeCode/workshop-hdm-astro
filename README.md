# Workshop HDM Astro

## Setup

Stelle sicher, dass du [NodeJS](https://nodejs.org/en) installiert hast.

Öffne den Terminal und gehen in den Ordner, in dem du das Repository ablegen willst.

Führe das folgende Skript aus (einfach alles copy pasten):

```
git clone "https://github.com/BingeCode/workshop-hdm-astro.git";
cd workshop-hdm-astro;
for branch in `git branch -r | grep -v HEAD | grep -v 'origin/main'`; do git checkout --track $branch; done; git checkout main;
npm install;
npm run auto;
```

## Präsentation

Du kannst die Präsentation live mitverfolgen (und nachschlagen, falls du etwas nicht verstanden hast)
[Klick hier](https://docs.google.com/presentation/d/1Jfhkrr4miYid448SGklj-X6R9COtJxdIkejl-SBqr4M/edit?usp=sharing)

## Wie funktionieren die Übungen

Die Übungen in diesem Workshop bauen aufeinander auf und sind immer in der `README.md` definiert.
Wenn du mit der nächsten Übung fortfahren willst, wechsel in den nächsten Branch.

Die Branches haben das Format `uebung-NUMMER`.
Der `main` branch enthält Übung 1 (siehe unten).
Wenn du mit Übung 1 fertig bist, kannst du zum Branch `uebung-2` wechseln und dort die Lösung von Übung 1 (und auch die zweite Übung) finden.

## Übung 1

### Einführung

In dieser ersten Übung lernst du, wie du eine Astro-Komponente erstellst, Props verwendest und eine Komponente in die Seite einbindest.

Wenn du einen Blick auf `src/layouts/BaseLayout.astro` (eine Astro-Komponente) wirfst, siehst du die beiden Teile, über die wir gerade gesprochen haben: Das Component Script am Anfang der Datei (innerhalb des code fences ```) und das Component Template nach den code fences.

`BaseLayout.astro` definiert das Layout für die gesamte Seite (wir werden uns Layouts später ansehen. Du musst für diese Übung nicht verstehen, wie sie funktionieren).

In Zeile 38 siehst du das Statement `includeSidebar && (...)`
Dieses Statement prüft, ob `includeSidebar` gesetzt ist, und wenn ja, wird die Sidebar gerendert.

### Aufgabe 1

Erstelle eine neue Sidebar Komponente (`Sidebar.astro`) in `src/components/` und extrahiere den relevanten Code aus `BaseLayout.astro`.

(TIPP: Stell sicher, dass du die benötigten Props an `Sidebar.astro` übergibst.)

### Aufgabe 2

Füge ein interface zu der BaseLayout Komponente hinzu, die die Prop-Typen definiert.
Achte auch darauf, welche Props optional sein können.

Prüfe dann, ob deine IDE automatisch (mittels intellisense) vorschlägt, welche Props du zum Beispiel in `index.astro` zu `BaseLayout` hinzufügen kannst. Du kannst zum Beispiel `includeSidebar={false}` setzen. Fange an zu tippen oder drücke `CTRL + SPACE`.
