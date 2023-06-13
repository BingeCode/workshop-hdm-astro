# Workshop HDM Astro

## Übung 2

### Einführung

In dieser Übung lernst du, wie du eine Astro-Seite erstellst und in die Webseite einbindest.

Wenn du einen Blick auf die Projektstruktur unter `src/pages` wirfst, siehst du dass wir bereits ein paar Pages (bzw. Pfade) haben:
`/blog/`, `/cv`, `/projects` und die Homepage (`index.astro`). Dabei ist `/blog/` ein Sonderfall, den wir erst später behandeln werden.

Was allerdings geschieht, wenn du im Browser [localhost:3000/hello-world](http://localhost:3000/hello-world) aufrufst?

Richtig, du bekommst eine Standard-404-Fehlerseite. Die liefert Astro von Haus aus mit.
Aber du kannst auch deine eigene 404-Seite bauen.
Das Prinzip ist hierbei gleich wie bei allen anderen Pages.
Die Seite muss in dem Ordner `src/pages` liegen.
Das besondere bei dieser Page ist, dass Astro automatisch auf `/404` umleitet, wenn irgend eine Seiten-URL nicht gefunden wird.

### Aufgabe

Erstelle zunächst eine `404.astro` (oder 404.md) in `src/pages`.

Du kannst das folgende Code Snippet für die Seite verwenden oder deine eigene 404 Seite gestalten:

```
<div class="text-center">
  <h1 class="text-9xl font-bold mb-2">404</h1>
  <h3 class="text-2xl">The page you're looking for couldn't be found.</h3>
  <a class="btn btn-accent mt-9" href="/">Home</a>
</div>
```

Überprüfe nun, ob die 404 Seite korrekt aufgerufen wird, wenn du eine fehlende Seite aufrufst.

### Bonus

Wenn du schneller als die anderen fertig bist und dir langweilig ist, erstelle eine normale Seite, z.B. `/shop` und gestalte sie ein wenig :)
