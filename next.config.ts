import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "3d-print-shop";

const nextConfig: NextConfig = {
  output: "export",
  // In GitHub Pages (unless using custom domain), assets are served under /<repo-name>/
  basePath: isGithubActions ? `/${repoName}` : (process.env.NEXT_PUBLIC_BASE_PATH || ""),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
