# Workshop HDM Astro

## Übung 9

### Einführung

In dieser Übung wirst du mit Hilfe der Nano Stores Library eine Lösung für globales State Management
zwischen zwei interaktiven Astro-Islands (React Komponenten) implementieren.

### Aufgabe 1

Zunächst müssen wir in Astro die Nano Stores Library installieren.
Mit `npm install nanostores @nanostores/react` wird diese installiert und in den Dependencies vermerkt.

Damit ist NanoStores schon eingerichtet 🎉

### Aufgabe 2

Der globale Store wurde für dich schon implementiert und lässt sich im Ordner `store/subscribers.js` finden.
In der Datei `components/SubscribeButton.jsx` befindet sich nun eine React-Componte, die auf der Seite 
`pages/blog/[...page].astro` eingbunden ist.

Importiere zunächst den Store und vervollständige nun die Funktion `countUp()`, sodass immer wenn auf den
Subscribe Button geklickt wird, die Anzahl der Subscriber im State erhöht wird.

Tipp: Nutze dafür die Helper-Funktionen .set() und .get() 

### Aufgabe 3

In der Datei `components/SubscriberCounter.jsx` befindet sich nun eine weitere React-Component. Diese ist
in der Astro-Component `components/SideBarFooter.jsx` als interaktive Island eingebettet und soll die
aktuelle Anzahl an Subscribern anzeigen. 

Dafür muss diese den globalen State abrufen und im <p>-Tag anzeigen. Importiere dafür den Store und eine weitere Funktion, die den Store lesen kann, sowie bei Änderungen ein re-rendering triggert.

### Aufgabe 4

Vielleicht wirst du beim ausprobieren feststellen, dass sich beim Klick auf den Subscribe-Button,
der State nicht ändert. Dies liegt daran, dass die Astro-Island noch nicht interaktiv ist.

Erinnere dich zurück an die letzte Stunde und nutze eine Direktive, die den Button erst bei erscheinen im
Viewport hydriert.