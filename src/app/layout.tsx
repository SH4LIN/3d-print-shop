import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/site-config";
import "./globals.css";

// Display / Headings font - modern, geometric, industrial crafted feel
const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

// Primary Body font - exceptionally clean, legible, modern human sans
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
    "3D Printing",
    "Rapid Prototyping",
    "FDM Printing",
    "3D printed gifts",
    "Exhibition catalogue",
    "Custom 3D prints",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${outfit.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col bg-mist-light text-foreground font-sans text-base leading-relaxed selection:bg-amber selection:text-aubergine-dark overflow-x-hidden w-full relative">
        <Navbar />
        <main className="flex-1 pt-20 w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
