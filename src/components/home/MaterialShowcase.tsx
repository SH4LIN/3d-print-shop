import { Sparkles, Palette, Shield, Eye, Flame } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { siteConfig } from "@/data/site-config";

const materials = [
	{
		name: "Silk Dual-Tone & Rainbow",
		tag: "Exhibition Highlight",
		color: "from-amber via-pink-500 to-purple-600",
		description:
			"Color-shifting filament with brilliant metallic luster. Shimmers dynamically from every angle. Featured on our Sacred Shivling and Ram Mandir models.",
		badge: "Color Shift",
		featuredIn: "Shivling & Ram Mandir",
		icon: Palette,
	},
	{
		name: "Wood-Filled PLA Composite",
		tag: "Artisan Organic",
		color: "from-[#8B5A2B] to-[#5C3A1E]",
		description:
			"Formulated with genuine recycled wood fibers. Offers an authentic timber tactile grain, matte texture, and natural wood scent. Ideal for Kumiko lamps and organic desk decor.",
		badge: "Real Wood Fiber",
		featuredIn: "Kumiko Lantern & Nameplates",
		icon: Sparkles,
	},
	{
		name: "Copper-Filled Metallic Composite",
		tag: "Heavy Density",
		color: "from-[#B87333] to-[#804A1E]",
		description:
			"Infused with real metallic copper powder. Delivers weighty hand feel, antique bronze luster, and post-processing polish capabilities for ceremonial artifacts.",
		badge: "Real Metallic Sheen",
		featuredIn: "Shivling & Sculptures",
		icon: Flame,
	},
	{
		name: "Matte Pastels & Tough PETG",
		tag: "Everyday Durable",
		color: "from-rose-300 via-sky-300 to-emerald-300",
		description:
			"Modern non-reflective velvety finish that conceals fingerprints. PETG offers superior thermal resistance up to 75°C and shatter-proof strength for functional keychains and lamp diffusers.",
		badge: "Clean & Tough",
		featuredIn: "Stanley Clickers & Optical Lamps",
		icon: Shield,
	},
];

export function MaterialShowcase() {
	const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.number.replace(
		/[^0-9]/g,
		""
	)}?text=${encodeURIComponent(
		"Hi NEEV! I'm at your exhibition stall and would like to see your physical filament swatches (Silk Rainbow, Wood, Copper, Matte Pastels)."
	)}`;

	return (
		<section className="py-16 sm:py-20 bg-white border-b border-mist-dark/40">
			<Container>
				<div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
					<AnimatedSection direction="up">
						<span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber bg-amber/15 px-3.5 py-1.5 rounded-full">
							Stocked Filaments &amp; Finishes
						</span>
						<h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-aubergine mt-3 sm:mt-4 tracking-tight">
							Premium Additive Materials
						</h2>
						<p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
							We select renewable plant-based biopolymers and engineering composites
							engineered for high durability and micro-detail resolution.
						</p>
					</AnimatedSection>
				</div>

				{/* Materials Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{materials.map((mat, idx) => {
						const Icon = mat.icon;
						return (
							<AnimatedSection key={mat.name} delay={idx * 0.1} direction="up">
								<div className="h-full rounded-2xl sm:rounded-3xl border border-mist-dark/60 bg-mist-light/50 p-6 flex flex-col justify-between transition-all hover:bg-white hover:shadow-lg hover:border-amber/70 group">
									<div>
										{/* Top Color Accent Swatch */}
										<div className="flex items-center justify-between mb-4">
											<div className="flex items-center gap-2">
												<div
													className={`h-4 w-4 rounded-full bg-gradient-to-tr ${mat.color} shadow-xs ring-2 ring-white`}
												/>
												<span className="text-[11px] font-bold uppercase tracking-wider text-aubergine">
													{mat.badge}
												</span>
											</div>
											<span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-amber/15 text-aubergine-dark">
												{mat.tag}
											</span>
										</div>

										<h3 className="font-heading font-bold text-lg text-aubergine mb-2 group-hover:text-aubergine-light transition-colors tracking-tight">
											{mat.name}
										</h3>
										<p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
											{mat.description}
										</p>
									</div>

									<div className="mt-5 pt-4 border-t border-mist/80 flex items-center justify-between text-xs font-semibold text-aubergine">
										<span className="flex items-center gap-1.5 text-muted-foreground">
											<Icon className="h-3.5 w-3.5 text-amber" />{" "}
											{mat.featuredIn}
										</span>
										<span className="text-amber group-hover:translate-x-0.5 transition-transform">
											Inspect →
										</span>
									</div>
								</div>
							</AnimatedSection>
						);
					})}
				</div>

				{/* Stall Touch Callout */}
				<AnimatedSection direction="up" delay={0.2} className="mt-10">
					<div className="rounded-2xl bg-radial from-aubergine-dark to-aubergine text-white p-5 sm:p-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 border border-amber/30">
						<div className="space-y-1">
							<div className="flex items-center justify-center sm:justify-start gap-2 text-amber text-xs font-bold uppercase tracking-wider">
								<Eye className="h-4 w-4" />
								<span>On Display at Stall 16 (Mega Diwali Event)</span>
							</div>
							<p className="text-sm sm:text-base font-semibold text-white">
								Want to touch sample prints or inspect color shifts under the light?
							</p>
							<p className="text-xs text-mist/80">
								Visit our booth to hold physical models and discuss custom color
								options with our specialist.
							</p>
						</div>

						<a
							href={whatsappUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="whitespace-nowrap rounded-xl bg-amber hover:bg-amber-light text-aubergine-dark font-bold text-xs sm:text-sm px-5 py-3 shadow-md transition-all active:scale-95"
						>
							Ask About Filament Swatches
						</a>
					</div>
				</AnimatedSection>
			</Container>
		</section>
	);
}
