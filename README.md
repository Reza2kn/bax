# BAX

Free Robotics & 3D-Printing Community Program — **Mérida, Yucatán**.

This repo holds the public site and the lightweight tooling that supports the
program (cohort/participant management, 3D-print job tracking, curriculum
hosting). Everything lives in a single Next.js app — no monorepo, no
microservices.

## Stack

- **Framework**: Next.js 15 (App Router) + React 19
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS v3
- **ORM**: Drizzle
- **Data**: SQLite locally (`file:./var/dev.sqlite`), Postgres in production
  (Neon, planned — see [`ARCHITECTURE.md`](./ARCHITECTURE.md))
- **Hosting**:
  - First deploy: GitHub Pages (static export, `BUILD_TARGET=static`)
  - Production target: Vercel + Neon Postgres (planned, blocked on credentials)
- **Package manager**: pnpm 9

## Prerequisites

- Node.js ≥ 20.10 (use [`nvm`](https://github.com/nvm-sh/nvm) and the bundled `.nvmrc`)
- pnpm 9 (`npm install -g pnpm@9`)

## Install

```bash
pnpm install
cp .env.example .env.local
```

## Run (local dev)

```bash
pnpm dev
# → http://localhost:3000
```

## Database

Local dev uses SQLite at `./var/dev.sqlite`. The directory is created on demand;
you don't need to run anything to get started until we ship the first table.

Once tables exist in `db/schema.ts`:

```bash
pnpm db:generate   # generate SQL migrations from the schema
pnpm db:migrate    # apply pending migrations against $DATABASE_URL
pnpm db:studio     # open Drizzle Studio
```

To target Postgres locally, set `DATABASE_URL` to a Postgres URL — Drizzle
auto-detects the dialect (`db/client.ts`).

## Environment variables

See [`.env.example`](./.env.example). The committed file is the source of
truth for what variables exist; never put real secrets in this repo.

| Variable               | Required        | Notes                                                       |
| ---------------------- | --------------- | ----------------------------------------------------------- |
| `DATABASE_URL`         | optional (dev)  | Empty → SQLite at `./var/dev.sqlite`. Postgres URL → Neon.  |
| `NEXT_PUBLIC_SITE_URL` | yes (prod)      | Public origin used for absolute links / OG tags.            |

## Deploy

### First live deploy — GitHub Pages

`main` is built as a static export and published to GitHub Pages by
`.github/workflows/pages.yml`. URL appears under the repo's
**Settings → Pages → Visit site** once the workflow completes.

The workflow runs:

```bash
GH_PAGES_BASE=/<repo-name> pnpm run build:static
```

Static export is fine for v0 (static landing page). Anything that needs SSR,
form submissions, or DB writes will live on the production target below.

### Production target — Vercel + Neon

Planned, not yet wired up (needs CEO-supplied `VERCEL_TOKEN` + a Neon project
DB URL — tracked as a child issue of BAX-2).

Once configured:

1. Push to `main` → Vercel preview/production deploy.
2. `DATABASE_URL` set to the Neon Postgres connection string in Vercel project
   env (Production + Preview).
3. Drizzle migrations applied via `pnpm db:migrate` in a Vercel build step (or
   one-shot from a maintainer's machine).

## Repo layout

```
.
├─ app/                # Next.js App Router pages, layouts, route handlers
├─ db/                 # Drizzle schema, client, migrations
├─ public/             # Static assets served as-is
├─ .github/workflows/  # CI + GH Pages deploy
├─ ARCHITECTURE.md     # Stack + data + secrets decisions (one page)
├─ README.md           # You are here
└─ .env.example        # Source of truth for env vars
```

## License

TBD — content and code are intended for the BAX community program.
