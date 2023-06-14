# Workshop HDM Astro

## Übung 4

### Einführung

In dieser Übung lernst du, wie du eine React Komponente in Astro einbindest und deren Interaktivität aktivierst.
Du findest in Components-Folder eine bereits erstellte React-Komponente als typische JSX-File.

### Aufgabe 1

Zunächst müssen wir Astro mitteilen, dass wir React Komponenten verwenden wollen.

Mit `npx astro add react` wird ein Helper aufgerufen, der dich durch die React Integration führt.

Bejahe alle folgenden Prompts mit `y`.

Es werden als erstes die dependencies installiert. Neben den üblichen React dependencies auch der `@astrojs/react` Adapter.

Im zweiten Schritt wird die `astro.config.mjs` geupdated. Es werden auch die Änderungen gezeigt, die der Helper vornimmt.

Damit ist React schon eingerichtet 🎉

### Aufgabe 2

Es fehlen noch einige Grundfunktionalitäten innerhalb der React-Komponente im Ordner `src/components`.

Das Fenster mit den Kontaktangaben soll sich mit Klick auf den Button mit der Beschriftung "Contact me"
öffnen, wozu das aus React bekannte Prinzip des Conditional-Renderings genutzt wird.

Mit Click auf den Button innerhalb der Komponente, soll sich das Fenster wieder schließen.

Tipp:

Alle gängigen Prinzien aus React, wie auch Hooks, können in den in Astro integrierten Komponenten auch genutzt werden.

### Aufgabe 3

Die React-Komponente soll nun auf der 'index.astro'-Seite im Pages Ordner unterhalb der Blog-Liste angezeigt werden. 

### Aufgabe 4

Willst du die Komponente testen, wirst du vielleicht bemerken, dass sich das Fenster auf Klick des Buttons
noch nicht öffnet und noch keine Interaktivität möglich ist.

Setzte eine Direktive ein, um das benötigte JavaScript zu laden. 

Aus Performancegründen soll dies erst geschehen, wenn die Komponente im sichtbaren Bereich des Users erscheint.

### Aufgabe 5

Öffne die Dev Tools (bei den meisten Browsern mit `F12`) und wechsel zum `Network` Tab.

Lade die Seite neu und beobachte den `Network` Tab, während du nach unten scrollst.

Die React Komponente sollte erst dann geladen werden, wenn sie auch im View Port sichtbar wird.

Wenn du mit der Aufgabe fertig bist, wechsel zum `final` branch. Dort findest du die Lösung und finale Code Base.