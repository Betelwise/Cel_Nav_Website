This repository is a minimal Vite + React single-page app intended for a "Celestial Navigation" seminar: a notes-and-books one-page website.

Key facts (read before editing)

- Project type: Vite + React (React 19). Entry: `index.html` -> `src/main.jsx` -> `src/App.jsx`.
- Purpose: single-page site to present seminar notes and provide books; keep everything client-side and simple (no API/server code present).
- Build/dev: npm scripts in `package.json`: `dev` (vite), `build` (vite build), `preview` (vite preview), `lint` (eslint).
- Important files:
  - `package.json` — scripts + dependencies (see `gh-pages` in devDeps if you plan GitHub Pages deployment).
  - `vite.config.js` — Vite config and `base` (currently `/`) which affects asset paths and deployment base.
  - `src/main.jsx` — React mount point; uses `createRoot` to render `App` into `<div id="root">` from `index.html`.
  - `src/App.jsx` — current single-page component; use this as the primary place to add sections or import subcomponents.
  - `src/assets/` & `public/` — images and static files. Note: `vite.svg` is referenced from `/vite.svg` in code.
  - `eslint.config.js` — project lint rules; run `npm run lint` to check style issues.

Small contract for an AI agent working in this repo

- Inputs: edits to files under `src/`, static assets in `public/` or `src/assets/`, and package.json scripts when adding tooling.
- Outputs: small, self-contained React components (prefer `src/components/`), CSS in `src/*.css`, and updated build scripts when necessary.
- Error modes: missing imports, incorrect asset paths (Vite serves from `base`), or forgetting to update `index.html` mount id.

Project-specific conventions & patterns

- Single-page layout: keep the top-level layout in `src/App.jsx`. Break content into components under `src/components/` (create this folder if absent).
- Static assets: prefer importing images from `src/assets/` (ESModule imports) or placing truly static files in `public/` and referencing with absolute paths (e.g., `/vite.svg`). Remember `vite.config.js` `base` can change the effective root.
- Styling: global styles live in `src/index.css` and `src/App.css`. Small component styles can be added as local CSS files and imported in the component.
- No runtime backend: all content should be client-side. If you need to add data files, prefer JSON inside `src/data/` and import them (this stays compatible with the build).

Developer workflows (commands to run)

- Start dev server with live reload: `npm run dev` — opens Vite dev server with HMR.
- Create production build: `npm run build` — outputs to `dist/`.
- Preview production build locally: `npm run preview` (runs a local static server for `dist`).
- Lint code: `npm run lint`.

Integration notes

- `gh-pages` is present in devDependencies but there is no deploy script by default. If deploying to GitHub Pages, either add a `deploy` script using `gh-pages` or use GitHub Actions to publish the `dist/` folder. Remember to set `vite.config.js` `base` to the repo path if publishing to a subpath.

Examples (from this codebase)

- Where the app mounts: `index.html` contains `<div id="root"></div>` which `src/main.jsx` targets via `createRoot(document.getElementById('root'))`.
- A simple component to extend (edit `src/App.jsx`): the repo currently uses `useState` to manage a counter; follow that pattern when adding small interactive widgets.

What not to change without explicit reason

- The `base` value in `vite.config.js` — changing it will change all absolute asset paths. Only adjust when you understand the intended deployment path.
- `index.html` root id — changing it requires updating `src/main.jsx` accordingly.

If you're unsure or need to add new tooling

- Add minimal, incremental changes. If you add new npm scripts, update `package.json` only and keep edits small.
- Ask for guidance before adding a server, backend, or major build changes — the project is intentionally client-only today.

Please review and tell me which parts you'd like expanded (deployment, content data layout, or a suggested `src/components/` scaffold).
