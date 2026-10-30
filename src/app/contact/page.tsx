import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import {
	MessageCircle,
	Clock,
	MapPin,
	Sparkles,
	CheckCircle2,
	Mail,
	ExternalLink,
} from "lucide-react";
import { cn } from "cn";

export const metadata: Metadata = {
	title: `Contact Us | ${siteConfig.name}`,
	description:
		"Connect directly with NEEV Additive Manufacturing for custom 3D prints, exhibition queries, or bespoke orders via WhatsApp, Instagram (@neev_au), or Email.",
};

export default function ContactPage() {
	const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.number.replace(
		/[^0-9]/g,
		""
	)}?text=${encodeURIComponent(siteConfig.contact.whatsapp.message)}`;

	return (
		<div className="py-14 sm:py-24">
			<Container>
				{/* Header */}
				<div className="max-w-3xl mb-14 sm:mb-18">
					<AnimatedSection direction="up">
						<span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber bg-amber/15 px-3.5 py-1.5 rounded-full">
							Get in Touch
						</span>
						<div className="mt-4 space-y-1">
							<span className="font-brand text-xl sm:text-2xl text-amber block">
								NEEV ADDITIVE MANUFACTURING
							</span>
							<h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-aubergine tracking-tight">
								Connect With Our Team
							</h1>
						</div>
						<p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
							Have questions about items on our exhibition table, want custom color
							combinations, or need an STL file printed? Reach out directly via
							WhatsApp, Instagram, or Email.
						</p>
					</AnimatedSection>
				</div>

				{/* Contact Methods Cards Grid - 3 Columns (WhatsApp + Instagram + Email) */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14 sm:mb-18">
					{/* WhatsApp Card */}
					<AnimatedSection direction="up" delay={0.1}>
						<div className="h-full rounded-3xl border border-mist-dark/60 bg-white p-7 sm:p-8 shadow-xs flex flex-col justify-between transition-all hover:border-amber/70 hover:shadow-lg">
							<div>
								<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-green-600 mb-6">
									<MessageCircle className="h-7 w-7" />
								</div>
								<h3 className="font-heading font-bold text-xl sm:text-2xl text-aubergine mb-2 tracking-tight">
									WhatsApp Direct
								</h3>
								<p className="text-sm text-muted-foreground mb-6 leading-relaxed">
									Fastest response. Send STL links, photos of your ideas, or ask
									questions directly while visiting our stall.
								</p>
								<div className="p-3.5 rounded-xl bg-mist-light/70 border border-mist-dark/40 flex items-center justify-between text-xs sm:text-sm">
									<span className="text-muted-foreground font-medium">
										Number:
									</span>
									<span className="font-bold text-foreground">
										{siteConfig.contact.phone}
									</span>
								</div>
							</div>

							<div className="mt-8 pt-6 border-t border-mist">
								<a
									href={whatsappUrl}
									target="_blank"
									rel="noopener noreferrer"
									className={cn(
										buttonVariants({ variant: "default" }),
										"w-full bg-green-600 hover:bg-green-700 text-white font-bold text-sm h-12 rounded-xl flex items-center justify-center gap-2.5 shadow-sm active:scale-98 transition-all"
									)}
								>
									<MessageCircle className="h-4 w-4" />
									<span>Chat on WhatsApp</span>
								</a>
							</div>
						</div>
					</AnimatedSection>

					{/* Instagram Card */}
					<AnimatedSection direction="up" delay={0.2}>
						<div className="h-full rounded-3xl border border-mist-dark/60 bg-white p-7 sm:p-8 shadow-xs flex flex-col justify-between transition-all hover:border-amber/70 hover:shadow-lg">
							<div>
								<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-600 mb-6">
									<svg
										className="h-7 w-7 fill-none stroke-current stroke-2"
										viewBox="0 0 24 24"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
										<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
										<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
									</svg>
								</div>
								<h3 className="font-heading font-bold text-xl sm:text-2xl text-aubergine mb-2 tracking-tight">
									Instagram (@neev_au)
								</h3>
								<p className="text-sm text-muted-foreground mb-6 leading-relaxed">
									Follow print reels, new drops, and drop a comment on any reel to
									claim your <strong>10% exhibition discount</strong>.
								</p>
								<div className="p-3.5 rounded-xl bg-mist-light/70 border border-mist-dark/40 flex items-center justify-between text-xs sm:text-sm">
									<span className="text-muted-foreground font-medium">
										Handle:
									</span>
									<span className="font-bold text-foreground">@neev_au</span>
								</div>
							</div>

							<div className="mt-8 pt-6 border-t border-mist">
								<a
									href={siteConfig.socials.instagram}
									target="_blank"
									rel="noopener noreferrer"
									className={cn(
										buttonVariants({ variant: "outline" }),
										"w-full border-mist-dark hover:bg-mist-light text-aubergine font-bold text-sm h-12 rounded-xl flex items-center justify-center gap-2 active:scale-98 transition-all"
									)}
								>
									<ExternalLink className="h-4 w-4" />
									<span>Visit @neev_au</span>
								</a>
							</div>
						</div>
					</AnimatedSection>

					{/* Email Card */}
					<AnimatedSection direction="up" delay={0.3}>
						<div className="h-full rounded-3xl border border-mist-dark/60 bg-white p-7 sm:p-8 shadow-xs flex flex-col justify-between transition-all hover:border-amber/70 hover:shadow-lg">
							<div>
								<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-aubergine/10 text-aubergine mb-6">
									<Mail className="h-7 w-7 text-amber-dark" />
								</div>
								<h3 className="font-heading font-bold text-xl sm:text-2xl text-aubergine mb-2 tracking-tight">
									Email Inquiries
								</h3>
								<p className="text-sm text-muted-foreground mb-6 leading-relaxed">
									Ideal for corporate B2B requests, architectural prototypes, bulk
									event giveaways, and CAD specifications.
								</p>
								<div className="p-3.5 rounded-xl bg-mist-light/70 border border-mist-dark/40 flex items-center justify-between text-xs sm:text-sm overflow-hidden">
									<span className="text-muted-foreground font-medium shrink-0">
										Email:
									</span>
									<span className="font-bold text-foreground truncate ml-2">
										Neev.additive...
									</span>
								</div>
							</div>

							<div className="mt-8 pt-6 border-t border-mist">
								<a
									href={`mailto:${siteConfig.contact.email}`}
									className={cn(
										buttonVariants({ variant: "outline" }),
										"w-full border-mist-dark hover:bg-mist-light text-aubergine font-bold text-sm h-12 rounded-xl flex items-center justify-center gap-2 active:scale-98 transition-all"
									)}
								>
									<Mail className="h-4 w-4" />
									<span>Send an Email</span>
								</a>
							</div>
						</div>
					</AnimatedSection>
				</div>

				{/* Exhibition Presence & Stall Support Card */}
				<AnimatedSection direction="up" delay={0.25}>
					<div className="rounded-3xl border border-mist-dark/60 bg-gradient-to-br from-white via-white to-mist-light p-8 sm:p-12 shadow-sm">
						<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
							<div className="lg:col-span-7 space-y-4">
								<div className="flex items-center gap-2 text-amber font-bold text-xs uppercase tracking-wider">
									<Sparkles className="h-4 w-4" />
									<span>Exhibition Booth Details</span>
								</div>
								<h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-aubergine tracking-tight">
									Visiting our stall this weekend?
								</h3>
								<p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
									Join us at <strong>Stall 16</strong> at the{" "}
									<strong>Mega Diwali Event</strong> in Newcastle, NSW. Inspect
									our 0.08mm micro-stepping layer quality, test out tactile fidget
									clickers, and claim your exclusive 10% exhibition discount!
								</p>

								<div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
									<div className="flex items-center gap-2.5 text-foreground/85 font-medium">
										<CheckCircle2 className="h-4 w-4 text-amber shrink-0" />
										<span>Instant purchases on table</span>
									</div>
									<div className="flex items-center gap-2.5 text-foreground/85 font-medium">
										<CheckCircle2 className="h-4 w-4 text-amber shrink-0" />
										<span>Physical filament swatches</span>
									</div>
									<div className="flex items-center gap-2.5 text-foreground/85 font-medium">
										<Clock className="h-4 w-4 text-amber shrink-0" />
										<span>24–48h custom print turnaround</span>
									</div>
									<div className="flex items-center gap-2.5 text-foreground/85 font-medium">
										<MapPin className="h-4 w-4 text-amber shrink-0" />
										<span>Central Coast workshop &amp; shipping</span>
									</div>
								</div>
							</div>

							<div className="lg:col-span-5 flex flex-col items-center sm:items-end justify-center">
								<div className="rounded-2xl bg-aubergine text-white p-6 sm:p-7 w-full text-center space-y-4 shadow-md border border-amber/30">
									<span className="text-xs font-bold uppercase tracking-wider text-amber block">
										Fastest Way to Inquire
									</span>
									<p className="text-sm text-mist/90 leading-snug">
										Send a quick photo or description on WhatsApp for an
										immediate quote from our maker.
									</p>
									<a
										href={whatsappUrl}
										target="_blank"
										rel="noopener noreferrer"
										className={cn(
											buttonVariants({ variant: "default" }),
											"w-full bg-amber hover:bg-amber-light text-aubergine-dark font-bold text-sm h-11 rounded-xl flex items-center justify-center gap-2 shadow-sm"
										)}
									>
										<MessageCircle className="h-4 w-4" />
										<span>Open WhatsApp Chat</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</AnimatedSection>
			</Container>
		</div>
	);
}
