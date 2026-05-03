import type { Config } from "drizzle-kit";

const url = process.env.DATABASE_URL ?? "file:./var/dev.sqlite";
const isPostgres = /^postgres(ql)?:\/\//.test(url);

export default {
  schema: "./db/schema.ts",
  out: "./db/migrations",
  dialect: isPostgres ? "postgresql" : "sqlite",
  dbCredentials: isPostgres ? { url } : { url },
  strict: true,
  verbose: true,
} satisfies Config;
