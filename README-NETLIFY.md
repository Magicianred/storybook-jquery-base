# Deploy di Storybook su Netlify

## Opzione A — Git-based (consigliata)
1. Pusha il repo su GitHub/GitLab/Bitbucket.
2. Su Netlify: **Add new site → Import an existing project**.
3. Seleziona il repo e imposta:
   - **Base directory**: (vuota)
   - **Build command**: `npm ci && npm run sb:build`
   - **Publish directory**: `storybook-static`
   - **Node version**: 18 (in `netlify.toml` è già definita)
4. **Deploy**: Netlify costruirà automaticamente ad ogni push su `main`.

> Assicurati che `netlify.toml` sia nella root del repo.

## Opzione B — CLI (senza collegare il repo)
1. Installa Netlify CLI:
   ```bash
   npm i -g netlify-cli
   ```
2. Esegui build Storybook:
   ```bash
   npm ci
   npm run sb:build
   ```
3. Login e deploy:
   ```bash
   netlify login
   netlify init     # crea o collega un sito Netlify; seleziona "Deploy path" = storybook-static
   netlify deploy --prod --dir=storybook-static
   ```

## Opzione C — CI/CD via token (avanzata)
Imposta variabili nel tuo sistema CI (GitHub Actions, GitLab CI, ecc.):
- `NETLIFY_AUTH_TOKEN`
- `NETLIFY_SITE_ID`

E usa:
```bash
npx netlify-cli deploy --dir=storybook-static --prod --auth $NETLIFY_AUTH_TOKEN --site $NETLIFY_SITE_ID
```

## Note
- Non servono redirect SPA; Storybook è statico.
- Caching aggressivo è abilitato per `/assets/*` tramite `netlify.toml`.
- Se usi **pnpm** o **yarn**, sostituisci `npm ci` di conseguenza.
