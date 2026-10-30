import type { NextConfig } from "next";

// Custom domain is active (neevadditivemanufacturing.com.au), so site is served from root '/'
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
