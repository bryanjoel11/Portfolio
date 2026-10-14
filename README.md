# Bryan's portfolio

Single-page portfolio built with Vite and TypeScript, hosted on Netlify.

- `npm install`, then `npm run dev` to work locally, `npm run build` to build into `dist/`.
- All copy and links live in `src/content.ts`. Anything shown as a dashed `[placeholder]` is still to be filled in.
- Live project links (`dusklineLive`, `supplyLive`, `tomorrowlandLive`) go in `LINKS` once each site is on Netlify; until then those buttons show "link after deploy".

Netlify: Add new site → Import from GitHub → this repo. Build command `npm run build`, publish directory `dist` (already set in `netlify.toml`).
