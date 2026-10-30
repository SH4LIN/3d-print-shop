import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ProductGrid } from "@/components/catalogue/ProductGrid";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import productsData from "@/data/products.json";
import { Product } from "@/types";
import { siteConfig } from "@/data/site-config";
import { MapPin, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: `Exhibition Catalogue | ${siteConfig.name}`,
  description:
    "Explore our complete on-site exhibition catalogue of 3D-printed creations — Sacred Shivling, Ram Mandir prototype, Cute Stanley clickers, optical lamps, and Smart NFC business stands.",
};

export default function CataloguePage() {
  const products = productsData as Product[];

  return (
    <div className="py-14 sm:py-20">
      <Container>
        {/* Page Header Banner */}
        <div className="mb-12 sm:mb-16">
          <AnimatedSection direction="up">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber bg-amber/15 px-3.5 py-1 rounded-full">
                Live Exhibition Showcase
              </span>
              <span className="text-xs sm:text-sm font-semibold text-aubergine bg-mist px-3 py-1 rounded-full flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-amber" /> Stall 16 • Mega Diwali Event
              </span>
            </div>
            <div className="space-y-1">
              <span className="font-brand text-xl sm:text-2xl text-amber block">
                NEEV ADDITIVE MANUFACTURING
              </span>
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-aubergine tracking-tight">
                Product Catalogue
              </h1>
            </div>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Every item below is precision 3D-printed on our Bambu Lab setup. Tap any product to view material specifications and initiate a direct WhatsApp inquiry or stall reservation.
            </p>
          </AnimatedSection>
        </div>

        {/* Filterable Catalogue Grid */}
        <ProductGrid products={products} />
      </Container>
    </div>
  );
}
