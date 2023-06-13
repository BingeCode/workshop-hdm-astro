# Workshop HDM Astro

## Übung 4

### Einführung

In dieser Übung lernst du, wie du eine React Komponente in Astro einbindest und deren Interaktivität aktivierst.
Du findest in Components-Folder eine bereits erstellte React-Komponente als typische JSX-File.
Bevor du mit der eigenlichen Übung startest kannst du in der Astro.config überprüfen, ob React bereits installiert
und eingebunden wurde.

### Aufgabe 1

Es fehlen noch einige Grundfunktionalitäten innerhalb der Komponente.
Das Fenster mit den Kontaktangaben soll sich mit Klick auf den Button mit der Beschriftung "Contact me"
öffnen, wozu das aus React bekannte Prinzip des Conditional-Renderings genutzt wird.
Mit Click auf den Button innerhalb der Komponente, soll sich das Fenster wieder schließen.

Tipp:

Alle gängigen Prinzien aus React, wie auch Hooks, können in den in Astro integrierten Komponenten auch genutzt werden.

### Aufgabe 2

Die React-Komponente soll nun auf der 'index.astro'-Seite im Pages Ordner unterhalb der Blog-Liste angezeigt werden. 

### Aufgabe 3

Willst du die Komponente testen, wirst du vielleicht bemerken, dass sich das Fenster auf Klick des Buttons
noch nicht öffnet und noch keine Interaktivität möglich ist.
Setzte eine Direktive ein, um das benötigte JavaScript zu laden. 
Aus Performancegründen soll dies erst geschehen, wenn die Komponente im sichtbaren Bereich des Users erscheint.
