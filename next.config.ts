import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "3d-print-shop";
const basePath = isGithubActions ? `/${repoName}` : process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
	output: "export",
	basePath: basePath,
	assetPrefix: basePath ? `${basePath}/` : undefined,
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	env: {
		NEXT_PUBLIC_BASE_PATH: basePath,
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
