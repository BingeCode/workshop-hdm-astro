# Workshop HDM Astro

## Übung 6

### Einführung

In dieser Übung geht es um Markdown und Extended Markdown.

### Aufgabe 1

Erstelle eine Markdown Page `test.md` in `src/pages`, füge Text hinzu (zB den Text aus einem der Blog Posts) und teste den Aufruf im Browser.

### Aufgabe 2

Binde nun die `NewLayout.astro` Layout Komponente über Frontmatter in der `.md` page ein.

### Aufgabe 3

Modifiziere die `NewLayout.astro` Komponente so, dass im `Header` und `BaseHead` der Titel aus dem `.md` Frontmatter übergeben wird.
Der `BaseHead` braucht zusätzlich noch die `description`

Füge eine `h1` Überschrift zum `article` Element hinzu, die den Titel aus der `.md` Seite rendert.

Füge zusätzlich ein `blockquote` Element unter der `h1` Überschrift hinzu, die als Inhalt das automatisch generierte `file` prop von Frontmatter rendert.

### Aufgabe 4

Füge in `test.md` zwei Überschriften hinzu (mittels `#`).
Verlinke nun so von der einen Überschrift auf die andere, dass du das automatic heading ids feature von Astro verwendest und teste es im Browser.
