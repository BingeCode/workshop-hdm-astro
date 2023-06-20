# Workshop HDM Astro

## Übung 7

### Einführung

In dieser Übung geht es um Extended Markdown.

### Aufgabe 1

Führe in der Console `npx astro add mdx` auf root-Ebene aus und folge den Schritten, um die MDX-Integration hinzuzufügen.

### Aufgabe 2

Wandle die neue `test.md` Seite in eine `.mdx` Seit um und teste sie im Browser.
Baue die `Contact.jsx` Komponente in die neue `test.mdx` Seite ein und rufe die Seite auf.

> Tip: Der Import-Pfad ist relativ zum `test.md` File.

Vergiss nicht, eine Direktive auf die React-Komponente zu setzen.

### Aufgabe 3

In dieser Aufgabe installieren wir eines der remark-Plugins, um uns ein automatisches Inhaltsverzeichnis für `test.mdx` zu erstellen.
Führe `npm install remark-toc` aus, um das Plugin zu installieren.
Füge die folgende Konfiguration zur `astro.config.mjs` hinzu:

```
import remarkToc from "remark-toc";

markdown: {
    remarkPlugins: [remarkToc],
  },
```

Damit ist das Plugin konfiguriert.

Um die Tabelle zu erstellen, musst du nur `## Table of Contents` zu `test.mdx` hinzufügen.
Damit sollten alle Headings (h1-h6) automatisch im Inhaltsverzeichnis erscheinen.
