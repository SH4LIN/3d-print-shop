import {
	MessageSquare,
	Palette,
	PackageCheck,
	ArrowRight,
	Clock,
	ShieldCheck,
	Zap,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { siteConfig } from "@/data/site-config";

const steps = [
	{
		step: 1,
		title: "Bring Your 3D File or Idea",
		description:
			"Have your own STL or OBJ file? Found a model on Thingiverse or MakerWorld? Or need a custom company nameplate? Simply message us on WhatsApp with your file link, sketch, or photo.",
		icon: MessageSquare,
	},
	{
		step: 2,
		title: "Choose Finish & Precision",
		description:
			"Select your favorite finish: Silk Dual-Tone & Rainbow, genuine Wood or Copper composite, or sleek Matte Pastels printed with micro-stepping precision (0.08–0.28mm layers).",
		icon: Palette,
	},
	{
		step: 3,
		title: "24–48hr Turnaround & Delivery",
		description:
			"Printed on our high-speed Bambu Lab farm. Choose stall pickup at Stall 16 before the event concludes, Central Coast local pickup, or tracked Australia-wide courier to your door.",
		icon: PackageCheck,
	},
];

export function ProcessSection() {
	const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.number.replace(
		/[^0-9]/g,
		""
	)}?text=${encodeURIComponent(
		"Hi NEEV team! I have a custom 3D printing project and would like an instant turnaround quote."
	)}`;

	return (
		<section className="py-16 sm:py-24 bg-white border-y border-mist-dark/40">
			<Container>
				<div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
					<AnimatedSection direction="up">
						<span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber bg-amber/15 px-3.5 py-1.5 rounded-full">
							Custom Additive Solutions
						</span>
						<h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-aubergine mt-3 sm:mt-4 tracking-tight">
							Bring Your Ideas To Life
						</h2>
						<p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
							From personalized business stands and spiritual art to one-off
							prototypes — NEEV Additive Manufacturing makes high-precision custom 3D
							printing fast, dependable, and accessible.
						</p>
					</AnimatedSection>
				</div>

				{/* Process Steps */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
					{steps.map((item, idx) => {
						const Icon = item.icon;
						return (
							<AnimatedSection
								key={item.step}
								delay={idx * 0.12}
								direction="up"
								className="relative"
							>
								<div className="h-full rounded-2xl sm:rounded-3xl border border-mist-dark/60 bg-mist-light/50 p-7 sm:p-8 transition-all hover:bg-white hover:shadow-xl hover:border-amber/70 flex flex-col justify-between">
									<div>
										{/* Step Number + Icon Badge */}
										<div className="flex items-center justify-between mb-6">
											<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-aubergine text-amber shadow-sm">
												<Icon className="h-6 w-6" />
											</div>
											<span className="font-brand text-3xl sm:text-4xl font-black text-amber/30">
												0{item.step}
											</span>
										</div>

										<h3 className="font-heading text-xl sm:text-2xl font-bold text-aubergine mb-2.5 tracking-tight">
											{item.title}
										</h3>
										<p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
											{item.description}
										</p>
									</div>

									<div className="mt-6 pt-4 border-t border-mist/80 text-xs sm:text-sm font-bold text-aubergine flex items-center justify-between">
										<span>Phase 0{item.step}</span>
										<a
											href={whatsappUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="text-amber hover:underline flex items-center gap-1"
										>
											<span>Inquire</span>
											<ArrowRight className="h-3.5 w-3.5" />
										</a>
									</div>
								</div>
							</AnimatedSection>
						);
					})}
				</div>

				{/* Technical Highlights Badges */}
				<div className="mt-12 pt-8 border-t border-mist grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
					<div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-aubergine">
						<Zap className="h-4 w-4 text-amber" />
						<span>Bambu Lab High-Speed Farm</span>
					</div>
					<div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-aubergine">
						<Clock className="h-4 w-4 text-amber" />
						<span>24–48hr Standard Turnaround</span>
					</div>
					<div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-aubergine">
						<ShieldCheck className="h-4 w-4 text-amber" />
						<span>Plant-Based Biopolymers</span>
					</div>
				</div>
			</Container>
		</section>
	);
}
