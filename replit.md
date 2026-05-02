# Portfolio Website - nikhilvenkat.com

## Overview
A personal portfolio website for Nikhil Venkatraman, built as a TypeScript React monorepo using Yarn workspaces and Lerna.

## Architecture
- **Monorepo** with two packages under `packages/`:
  - `packages/app/` — Main React application (Create React App, React 16, TypeScript)
  - `packages/shared/` — Shared utilities (TypeScript, compiled with tsc)
- **Styling:** Tailwind CSS v1 + PostCSS
- **i18n:** i18next with English and Japanese support
- **State:** React Context API for light/dark theme

## Key Setup Notes
- Node 20 requires `NODE_OPTIONS=--openssl-legacy-provider` for the old webpack/CRA to work
- Dev server runs via `bash start.sh` which builds shared, links it, then starts CRA on port 5000
- `packages/app/.env` sets `HOST=0.0.0.0`, `PORT=5000`, `DANGEROUSLY_DISABLE_HOST_CHECK=true`
- The shared package must be built before the app starts

## Development
- **Start:** `bash start.sh` (configured as the workflow)
- **Build shared only:** `node node_modules/.bin/tsc -p packages/shared/tsconfig.json`
- **Build for production:** `bash build.sh` (builds both packages)

## Deployment
- Type: Static site
- Build command: `bash build.sh`
- Public directory: `packages/app/build`
