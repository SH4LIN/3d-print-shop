import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ProductGrid } from "@/components/catalogue/ProductGrid";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import productsData from "@/data/products.json";
import { Product } from "@/types";

export const metadata: Metadata = {
  title: "Product Catalogue | 3D Print Factory",
  description:
    "Explore our complete exhibition showcase of 3D-printed creations — figurines, gadgets, home decor, and bespoke prototypes.",
};

export default function CataloguePage() {
  const products = productsData as Product[];

  return (
    <div className="py-14 sm:py-20">
      <Container>
        {/* Page Header Banner */}
        <div className="mb-14 sm:mb-16">
          <AnimatedSection direction="up">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber bg-amber/15 px-3.5 py-1.5 rounded-full">
              Full Showcase
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-aubergine mt-4 tracking-tight">
              Product Catalogue
            </h1>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Explore our current range of precision-printed pieces. Filter by
              category or use the search bar. Tap any item to inspect material specs
              and launch a direct inquiry.
            </p>
          </AnimatedSection>
        </div>

        {/* Filterable Catalogue Grid */}
        <ProductGrid products={products} />
      </Container>
    </div>
  );
}
