import { Container } from "@/components/layout/Container";
import { ProductGrid } from "@/components/catalogue/ProductGrid";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Product } from "@/types";

interface GalleryPreviewProps {
	products: Product[];
}

export function GalleryPreview({ products }: GalleryPreviewProps) {
	return (
		<section id="catalogue" className="py-16 sm:py-24 bg-mist-light scroll-mt-20">
			<Container>
				<div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
					<AnimatedSection direction="up">
						<span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber bg-amber/15 px-3.5 py-1.5 rounded-full">
							Exhibition Collection
						</span>
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-aubergine mt-3 sm:mt-4 tracking-tight">
							Explore Our 3D Printed Creations
						</h2>
						<p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
							Available at our table today. Filter by category or tap any item to view
							dimensions, print times, and material specs.
						</p>
					</AnimatedSection>
				</div>

				{/* Full Interactive Product Grid with Category Filter & Search */}
				<ProductGrid products={products} />
			</Container>
		</section>
	);
}
