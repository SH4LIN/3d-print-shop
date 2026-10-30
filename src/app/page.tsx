import { HeroSection } from "@/components/home/HeroSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { FAQSection } from "@/components/home/FAQSection";
import { CTABanner } from "@/components/home/CTABanner";
import productsData from "@/data/products.json";
import { Product } from "@/types";

export default function HomePage() {
  const products = productsData as Product[];

  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProcessSection />
      <GalleryPreview products={products} />
      <FAQSection />
      <CTABanner />
    </div>
  );
}
