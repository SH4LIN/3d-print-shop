import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import { Layers, ShieldCheck, Sparkles, Cpu, Target, ArrowRight, MapPin, Zap } from "lucide-react";
import { cn } from "cn";

export const metadata: Metadata = {
	title: `About Us | ${siteConfig.name}`,
	description:
		"Learn about NEEV Additive Manufacturing's origin, Bambu Lab technology farm, and precision custom 3D printing on the Central Coast, NSW.",
};

export default function AboutPage() {
	const highlights = [
		{
			icon: Cpu,
			title: "Bambu Lab Additive Farm",
			description:
				"Utilising high-speed multi-material 3D printing systems tuned for tight micro-tolerances down to 0.08mm layer heights.",
		},
		{
			icon: ShieldCheck,
			title: "Renewable Biopolymers",
			description:
				"Primary reliance on plant-based PLA composites (derived from fermented plant starch) rather than non-renewable petroleum plastics.",
		},
		{
			icon: Target,
			title: "Rapid 24–48hr Prototyping",
			description:
				"Fast print cycles allowing clients, small businesses, and makers to transform digital 3D models into physical parts in 24 to 48 hours.",
		},
		{
			icon: Sparkles,
			title: "Handcrafted Art & Tech",
			description:
				"Bridging intricate cultural heritage (Shivling, Ram Mandir) with contemporary smart technology (Smart NFC multi-link tap stands).",
		},
	];

	return (
		<div className="py-14 sm:py-24">
			<Container>
				{/* About Header */}
				<div className="max-w-3xl mb-16 sm:mb-20">
					<AnimatedSection direction="up">
						<span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber bg-amber/15 px-3.5 py-1.5 rounded-full">
							Our Story &amp; Craft
						</span>
						<div className="mt-4 space-y-1">
							<span className="font-brand text-xl sm:text-2xl text-amber block">
								NEEV ADDITIVE MANUFACTURING
							</span>
							<h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-aubergine tracking-tight">
								Ideas, Made Real.
							</h1>
						</div>
						<p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
							Founded 3 years ago on the Central Coast, NSW, NEEV began by developing
							high-precision B2B functional prototypes. Today, we bring that same
							industrial engineering discipline to consumer home décor, spiritual art,
							optical lighting, and smart business displays.
						</p>
					</AnimatedSection>
				</div>

				{/* Story Section Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center mb-24">
					<div className="lg:col-span-7 space-y-6">
						<AnimatedSection direction="left">
							<h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-aubergine tracking-tight">
								Engineering Discipline Meets Heritage Art
							</h2>
							<div className="space-y-4 text-base sm:text-lg text-foreground/85 leading-relaxed font-normal">
								<p>
									Traditional manufacturing relies on expensive tooling, rigid
									molds, and prohibitive order minimums. Additive manufacturing
									revolutionizes this paradigm — enabling organic tree supports,
									complex internal lattice cores, and individual custom lettering
									to be produced on demand with minimal material waste.
								</p>
								<p>
									From sacred spiritual centerpieces like our intricate{" "}
									<strong>Shiva Lingam</strong> with its multi-hooded Naga canopy
									to multi-link <strong>Smart NFC Tap Stations</strong> for local
									businesses, every single layer is computed, sliced, and
									monitored on our Bambu Lab printer farm.
								</p>
								<p>
									We continuously benchmark filament melt flow, wall perimeter
									adhesion, and cooling profiles to ensure every print delivered
									isn&apos;t just visually stunning, but structurally resilient
									for years of enjoyment.
								</p>
							</div>
						</AnimatedSection>
					</div>

					<div className="lg:col-span-5">
						<AnimatedSection direction="right">
							<div className="rounded-3xl border border-mist-dark/60 bg-white p-8 sm:p-10 shadow-md space-y-6">
								<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-aubergine text-amber shadow-sm">
									<Layers className="h-8 w-8" />
								</div>
								<div className="space-y-2">
									<span className="text-xs font-bold uppercase tracking-wider text-amber block">
										Exhibition Presence
									</span>
									<h3 className="font-heading text-2xl font-bold text-aubergine tracking-tight">
										Mega Diwali Event 2026
									</h3>
									<p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
										Come visit our team at <strong>Stall 16</strong> in
										Newcastle, NSW. Experience physical prints in person, test
										fidget clicker mechanisms, and inspect 0.08mm micro-stepping
										up close.
									</p>
								</div>
								<div className="border-t border-mist pt-5 flex items-center justify-between text-sm">
									<span className="font-semibold text-aubergine flex items-center gap-1.5">
										<MapPin className="h-4 w-4 text-amber" /> Stall 16:
									</span>
									<span className="text-amber font-extrabold">Active Booth</span>
								</div>
							</div>
						</AnimatedSection>
					</div>
				</div>

				{/* Highlights / Values Bento */}
				<div className="mb-24">
					<AnimatedSection direction="up">
						<h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-aubergine text-center mb-14 tracking-tight">
							Our Technological Standards
						</h2>
					</AnimatedSection>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
						{highlights.map((item, idx) => {
							const Icon = item.icon;
							return (
								<AnimatedSection key={item.title} delay={idx * 0.1} direction="up">
									<div className="h-full rounded-3xl border border-mist-dark/60 bg-white p-7 sm:p-8 shadow-xs transition-all hover:border-amber/70 hover:shadow-lg flex flex-col justify-between">
										<div>
											<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mist/60 text-aubergine mb-5">
												<Icon className="h-6 w-6 text-aubergine" />
											</div>
											<h3 className="font-heading font-bold text-lg sm:text-xl text-aubergine mb-2.5 tracking-tight">
												{item.title}
											</h3>
											<p className="text-sm text-muted-foreground leading-relaxed font-normal">
												{item.description}
											</p>
										</div>
									</div>
								</AnimatedSection>
							);
						})}
					</div>
				</div>

				{/* CTA to Catalogue */}
				<AnimatedSection direction="up">
					<div className="rounded-3xl bg-radial from-aubergine to-aubergine-dark text-white p-10 sm:p-14 text-center flex flex-col items-center shadow-xl">
						<span className="font-brand text-amber tracking-widest text-sm uppercase mb-2">
							NEEV ADDITIVE MANUFACTURING
						</span>
						<h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
							Explore Our Live Exhibition Catalogue
						</h2>
						<p className="text-base sm:text-lg text-mist/90 max-w-lg mb-8 leading-relaxed font-normal">
							Check out all 14 handcrafted pieces on display — from the Sacred
							Shivling and Ram Mandir to smart tap stands and wavy lamps.
						</p>
						<Link
							href="/catalogue"
							className={cn(
								buttonVariants({ variant: "default" }),
								"bg-amber text-aubergine-dark hover:bg-amber-light font-bold text-base h-12 px-7 rounded-xl flex items-center gap-2 shadow-md hover:scale-[1.02] transition-all"
							)}
						>
							<span>Browse Full Collection</span>
							<ArrowRight className="h-5 w-5" />
						</Link>
					</div>
				</AnimatedSection>
			</Container>
		</div>
	);
}
