# Architecture (v0)

One page. Updated as decisions land.

## Stack chosen

| Layer        | Choice                                | Why                                                                                                        |
| ------------ | ------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Framework    | Next.js 15 (App Router)               | One framework for marketing site, signup forms, admin views, and API routes. No separate backend needed.   |
| Language     | TypeScript (strict)                   | Catch errors before runtime; first-engineer-friendly.                                                      |
| Styling      | Tailwind CSS v3                       | Boring, fast, easy to hand off to a designer or volunteer later.                                           |
| ORM          | Drizzle                               | Lightweight, dialect-agnostic schema, zero-runtime migrations, plays well with both SQLite and Postgres.   |
| DB (dev)     | SQLite via `better-sqlite3`           | Zero-setup local dev. New engineers can `pnpm dev` and have a working app.                                 |
| DB (prod)    | Postgres (Neon, planned)              | Cheap free tier; same SQL dialect we'll grow into.                                                         |
| Hosting v0   | GitHub Pages (static export)          | Free, no extra credentials needed beyond the GitHub auth we already have. Good enough for a Hello-world.   |
| Hosting prod | Vercel (planned)                      | Standard Next.js host; free hobby tier; CEO recommended.                                                   |
| Pkg manager  | pnpm 9                                | Fast installs, deterministic lockfile, works great with `corepack`.                                        |

We deliberately avoided: a monorepo (`turbo`/workspaces), a UI framework
(shadcn etc.), an auth provider, analytics, and ESLint. They will land when we
have a real reason to add them — not before.

### Why not Vercel for the first deploy?

Vercel is the prod target. The first deploy is on GitHub Pages because the
agent doing this scaffold has GitHub credentials but not a `VERCEL_TOKEN`. A
sibling issue tracks wiring up Vercel + Neon once a CEO-supplied token is
available; switching hosts is a one-PR change (delete the Pages workflow,
point Vercel at the repo).

## Where data lives

- **Local dev**: a single SQLite file at `./var/dev.sqlite` (gitignored).
  Drizzle migrations are committed in `db/migrations/`.
- **Production**: Postgres on Neon (planned). One DB, one schema. No
  read-replicas, no sharding, no Redis. We add caching when we measure that we
  need it.
- **Static assets**: `./public/` — committed in the repo, served as-is.
- **Curriculum / heavy assets** (PDFs, STL files): TBD. Likely a separate
  bucket (Cloudflare R2 or Backblaze B2) when curriculum lands. Not in scope
  for v0.

## How secrets are managed

- `.env.example` is committed and is the source of truth for **which** env
  vars exist. It contains no secret values.
- Real secrets live in:
  - **Local**: `.env.local` (gitignored).
  - **Production (Vercel)**: Vercel project env vars (Production + Preview),
    set via the Vercel UI or `vercel env add`.
  - **CI**: GitHub Actions secrets, scoped per workflow.
- **Never** commit a real `.env`. The `.gitignore` blocks `.env`, `.env.local`,
  and `.env.*.local`.
- **Participant data** (children's names, contact details) gets the same
  treatment as secrets: only stored in the production DB, never logged, never
  shipped to third-party analytics. This is repeated in `README.md` once we
  ship the signup form (BAX-4).

## What's deliberately not here yet

- **Auth** — adds when we ship the admin view (no admin view = no need).
- **Tests** — adds when we have logic worth testing. Hello-world doesn't.
- **CI checks** beyond the GH Pages deploy — adds when we have a typecheck
  worth gating PRs on.
- **Internationalization framework** — v1 is es-MX only (CEO call). Add `next-intl`
  if/when we add English.

## Decision log

- 2026-05-02 — Chose GitHub Pages for the first deploy because no Vercel
  credentials were available to the agent at scaffold time. (BAX-2)
- 2026-05-02 — Chose Drizzle over Prisma to keep the runtime small and avoid
  the Prisma engine binary on serverless. (BAX-2)
- 2026-05-02 — Chose pnpm 9 over npm because the host machine already had it
  configured and lockfile determinism matters once a second engineer joins.
  (BAX-2)
