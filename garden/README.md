# Digital Garden (SvelteKit + Tailwind v4 + Sanity + WASM)

- SvelteKit + TypeScript (strict)
- Tailwind CSS v4 using @theme tokens; minimalist white with black olive text
- Embedded Sanity Studio at `/studio` with `projects`, `posts`, `pages` schemas
- Modular Sanity data fetching with safe fallbacks
- Hero Game of Life (Rust WASM-ready, JS fallback included)

## Setup

1. Install deps: `npm i`
2. (Optional) Build WASM: `npm run wasm:build` (requires `wasm-pack` and a crate in `wasm-life/`)
3. Dev: `npm run dev`
4. Build: `npm run build` then `npm run preview`

## Env

Create `.env` with:
- `PUBLIC_SANITY_PROJECT_ID=...`
- `PUBLIC_SANITY_DATASET=production`

Studio is available under `/studio` and uses the embedded config.