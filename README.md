# Workshop HDM Astro

## Übung 4

### Einführung

In dieser Übung lernst du, wie du eine React Komponente in Astro einbindest.

### Aufgabe 1

Zunächst müssen wir Astro mitteilen, dass wir React Komponenten verwenden wollen.

Mit `npx astro add react` wird ein Helper aufgerufen, der dich durch die React Integration führt.

Bejahe alle folgenden Prompts mit `y`.

Es werden als erstes die dependencies installiert. Neben den üblichen React dependencies auch der `@astrojs/react` Adapter.

Im zweiten Schritt wird die `astro.config.mjs` geupdated. Es werden auch die Änderungen gezeigt, die der Helper vornimmt.

Damit ist React schon eingerichtet 🎉

### Aufgabe 2

in `src/components` findest du zwei Files:

- Counter.tsx
- Counter.css

Das ist unsere neue React Komponente, die wir schon für dich bereitgestellt haben.

Suche eine geeignete Seite im Projekt aus und binde die Counter Komponente ein.

Wird sie angezeigt? Wenn nicht, was könnte dir noch fehlen?

### Aufgabe 3

Öffne die Dev Tools (bei den meisten Browsern mit `F12`) und wechsel zum `Network` Tab.

Lade die Seite neu und beobachte den `Network` Tab, während du nach unten scrollst.

Die React Komponente sollte erst dann geladen werden, wenn sie auch im View Port sichtbar wird.

Wenn du mit der Aufgabe fertig bist, wechsel zum `final` branch. Dort findest du die Lösung und finale Code Base.
