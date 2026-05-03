import type { NextConfig } from "next";

// `BUILD_TARGET=static` produces a static export suitable for GitHub Pages.
// Default builds run as a normal Next.js server (Vercel, Node, etc.).
const isStatic = process.env.BUILD_TARGET === "static";

// When deploying to GitHub Pages under `https://<user>.github.io/<repo>/`,
// pages must be served from a sub-path. Pass GH_PAGES_BASE=/<repo> at build time.
const basePath = process.env.GH_PAGES_BASE ?? "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isStatic
    ? {
        output: "export",
        images: { unoptimized: true },
        basePath: basePath || undefined,
        assetPrefix: basePath || undefined,
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
