# Introduction

## styles Folder

In `/styles` kannst du die groben CSS Parameter verändern. Das meiste ist wahrscheinlich selbsterklärend.
In `global.js` kannst du die Typographie anpassen - `h1, h2, p, small` etc.
Breakpoints kannst du in `utils.js` ändern.

## gatsby config

Im gatsby config file kannst du Metadata ändern, welche für SEO verwendet wird.

    siteMetadata: {
    title: 'Florian Moser - Design',
    description: '',
    author: '',
    },

## Icons & OG Images

## Commands

This project comes with a few handy commands for linting and code fixing. The most important ones are the ones to develop and ship code. You can find the most important commands below.

### `gatsby develop`

Startet das Projekt lokal, so kannst du schnell Änderungen sehen ohne sie hochzuladen.
Die Änderungen kannst du auf `localhost:8000` sehen.

### `gatsby build`

Hiermit kannst du das Projekt, wenn du zufrieden mit deinen Änderungen bist, finalisieren.
Das Projekt wird dann optimiert und zusammengesetzt in dem Ordner `/public`.

# Seite hochladen / Deployment

`yarn run deploy`

Du kannst deine Seite hochladen, indem du dich bei netlify einloggst und den Ordner `public` auf das Drag&Drop Feld ziehst. Der Ordner wird dann hochgeladen und nach kurzer Zeit werden deine Änderungen online zu sehen sein. Achte darauf vorher `gatsby build` ausgeführt zu haben - mit `gatsby develop` kannst du nur lokal arbeiten.
