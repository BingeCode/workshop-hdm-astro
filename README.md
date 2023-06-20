# Workshop HDM Astro

## Übung 8

### Einführung

In dieser Übung wirst du mit dynamisches Routing in Astro implementieren, um die Blog-Einträge aus der
Content Collection abzurufen, um dafür nicht für jeden Artikel eine seperate Page erstellen zu müssen.

### Aufgabe 1

In der Date `pages/blog/[slug].astro` findest du bereits, die `getStaticPaths()`-Funktion, als Herzstück
des dynamischen Routings. Über die `getCollection`-Funktion werden hier alle Markdown-Artikel abgerufen
und in der Konstante `postEntries` als Array an Objekten gespeichert.

Dieser Array wird nun über `map()` durchlaufen. Für das erstellen der Routes muss nun ein bestimmtes Objekt 
zurückgegeben werden, dass den variablen Paramter der URL enthält.

Tipp: In Content Collections entspricht die Slug dem Dateinamen und lässt sich hier über `entry.slug` aufrufen

### Aufgabe 2

Neben dem Parameter für das Routing soll nun auch noch der komplette Blog-Eintrag zurückgegeben werden, damit
die dynamisch erstellte Seite die Daten verarbeiten und anzeigen kann.

Welches Objekt muss neben dem params Objekt im return-Wert stehen?

Tipp: Schaue in Zeile 18, dort findest du bereits das Objekt, welches benötigt wird.