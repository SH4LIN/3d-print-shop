"use client";

import * as React from "react";
import { Product } from "@/types";
import { ProductCard } from "@/components/catalogue/ProductCard";
import { CategoryFilter } from "@/components/catalogue/CategoryFilter";
import { siteConfig } from "@/data/site-config";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Search, Sparkles } from "lucide-react";

interface ProductGridProps {
  products: Product[];
  initialCategory?: string;
  showSearch?: boolean;
}

export function ProductGrid({
  products,
  initialCategory = "All",
  showSearch = true,
}: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = React.useState(initialCategory);
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredProducts = React.useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Search & Category Filter Toolbar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        <CategoryFilter
          categories={siteConfig.categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {showSearch && (
          <div className="relative min-w-[260px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search items by name or style..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-mist-dark/70 bg-white py-2.5 pl-10 pr-4 text-sm placeholder:text-muted-foreground focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/30 transition-all shadow-2xs"
            />
          </div>
        )}
      </div>

      {/* Product Cards Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {filteredProducts.map((product, index) => (
            <AnimatedSection
              key={product.id}
              delay={(index % 4) * 0.08}
              direction="up"
            >
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-mist-dark/80 bg-white p-12 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-mist text-muted-foreground mb-4">
            <Sparkles className="h-7 w-7 text-amber" />
          </div>
          <h3 className="text-xl font-bold text-aubergine">
            No products found
          </h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
            We couldn&apos;t find anything matching &quot;{searchQuery}&quot;. Try selecting another category or clear the search.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-5 inline-flex items-center text-sm font-bold text-amber hover:text-amber-dark hover:underline cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}
