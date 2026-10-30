import type { Metadata } from "next";
import { Plus_Jakarta_Sans, MuseoModerno } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/site-config";
import "./globals.css";

// MuseoModerno for Headings & Tagline
const museoModerno = MuseoModerno({
	variable: "--font-heading",
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "500", "600", "700", "800", "900"],
});

// Plus Jakarta Sans for ultra-clean body copy
const jakarta = Plus_Jakarta_Sans({
	variable: "--font-sans",
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: `${siteConfig.name} | ${siteConfig.tagline}`,
	description: siteConfig.description,
	keywords: [
		"NEEV Additive Manufacturing",
		"3D Printing Australia",
		"Central Coast 3D Printing",
		"Shivling 3D print",
		"Smart NFC Business Stand",
		"Exhibition catalogue",
		"Bambu Lab 3D printing",
		"Custom 3D prints NSW",
	],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			className={`${jakarta.variable} ${museoModerno.variable} h-full antialiased overflow-x-hidden`}
		>
			<body className="min-h-full flex flex-col bg-mist-light text-foreground font-sans text-base leading-relaxed selection:bg-amber selection:text-aubergine-dark overflow-x-hidden w-full relative">
				<Navbar />
				<main className="flex-1 pt-20 w-full overflow-x-hidden">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
