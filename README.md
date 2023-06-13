# Workshop HDM Astro

## Übung 3

### Einführung

In dieser Übung lernst du, wie du Layouts verwendest.

Wenn du Übung 1 schon gemeistert hast, sollte diese Übung keine Herausforderung für dich sein.

Layouts sind auch nur Astro Komponenten, die einfach ein bestimmtest Layout vorgeben.
Öffne mal die Suche (`SHIFT + CMD + F`) und suche nach `BaseLayout`.
Du wirst sehen, dass dieses Layout in der App sehr häufig verwendet wird.
Die `BaseLayout` Komponente haben wir definiert. Sie ist das Standard-Layout für die gesamte Website.
Doch wir müssen explizit pro Seite angeben, dass wir dieses Layout verwenden wollen.

Auf einer Seite fehlt unser `BaseLayout` noch. Kommst du darauf, welche?

(Tipp: Du hast erst kürzlich mit dieser Seite gearbeitet)

Richtig, es ist die Fehlerseite. Diese hat noch nicht unser `BaseLayout`.

### Aufgabe 1

Ändere `404.astro` so, dass es das `BaseLayout` verwendet.

### Aufgabe 2

Sobald du soweit bist, nutze das Prop von `BaseLayout`, das die `Sidebar` versteckt. Denn wir wollen die `Sidebar` nicht auf unserer `404` Seite anzeigen.

### Aufgabe 3

Warum ändert sich der Style auf der `404` Seite, wenn wir das `BaseLayout` verwenden? Welche Zeile ist dafür verantwortlich?
