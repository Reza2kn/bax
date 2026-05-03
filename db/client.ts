// Picks the right Drizzle client at runtime based on env.
//
// - DATABASE_URL starts with `postgres://` or `postgresql://` → Postgres (prod).
// - Otherwise → libSQL/SQLite. Default file: `./var/dev.sqlite`.
//
// We use `@libsql/client` (prebuilt binaries, no node-gyp) instead of
// `better-sqlite3` so installs don't fail on bleeding-edge Node versions.

import path from "node:path";

type DrizzleDb = unknown;

let cached: DrizzleDb | undefined;

export async function getDb(): Promise<DrizzleDb> {
  if (cached) return cached;

  const url = process.env.DATABASE_URL;
  if (url && /^postgres(ql)?:\/\//.test(url)) {
    const [{ drizzle }, postgres] = await Promise.all([
      import("drizzle-orm/postgres-js"),
      import("postgres"),
    ]);
    const client = postgres.default(url, { prepare: false });
    cached = drizzle(client);
    return cached;
  }

  const sqliteUrl =
    url && (url.startsWith("file:") || url.startsWith("libsql:") || url.startsWith("http"))
      ? url
      : `file:${path.resolve(process.cwd(), "var", "dev.sqlite")}`;

  const [{ drizzle }, { createClient }] = await Promise.all([
    import("drizzle-orm/libsql"),
    import("@libsql/client"),
  ]);
  const client = createClient({ url: sqliteUrl });
  cached = drizzle(client);
  return cached;
}
