# storybook-jquery-base-extended

Base repository **jQuery + Storybook (HTML + Webpack5)** con componenti UI semplici, licenza MIT.
Pensato per essere riutilizzato come starter minimale.

## Requisiti
- Node 18+

## Avvio
```bash
npm install
npm run sb
```
Apri http://localhost:6006

## Build statica
```bash
npm run sb:build
npm run preview   # serve la cartella storybook-static su http://localhost:6007
```

## Struttura
- `.storybook/` config di Storybook
- `src/components/*` singoli componenti (JS, CSS, stories)
- `public/` asset pubblici

> Tutti i componenti sono volutamente semplici e senza dipendenze CSS esterne.
