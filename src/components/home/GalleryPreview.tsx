import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ProductCard } from "@/components/catalogue/ProductCard";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { buttonVariants } from "@/components/ui/button";
import { Product } from "@/types";
import { cn } from "cn";

interface GalleryPreviewProps {
  products: Product[];
}

export function GalleryPreview({ products }: GalleryPreviewProps) {
  // Select top featured items
  const featured = products.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-20 sm:py-24 bg-mist-light">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <AnimatedSection direction="left">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber bg-amber/15 px-3.5 py-1.5 rounded-full">
              Trending At Booth
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-aubergine mt-4 tracking-tight">
              Featured Exhibition Pieces
            </h2>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Inspect our most popular models currently showcased at the exhibition.
              Scan, review specifications, and inquire for custom iterations.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <Link
              href="/catalogue"
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-aubergine text-white hover:bg-aubergine-light self-start md:self-auto font-bold text-sm h-11 px-5 rounded-xl shadow-sm flex items-center gap-2"
              )}
            >
              <span>View All 12 Items</span>
              <ArrowRight className="h-4 w-4 text-amber" />
            </Link>
          </AnimatedSection>
        </div>

        {/* 4 Featured Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {featured.map((product, idx) => (
            <AnimatedSection
              key={product.id}
              delay={idx * 0.1}
              direction="up"
            >
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
