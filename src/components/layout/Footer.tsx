import Link from "next/link";
import { MessageCircle, Sparkles, MapPin, Mail } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/layout/Container";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { getAssetPath } from "@/lib/utils";

export function Footer() {
	const currentYear = 2026;

	return (
		<footer className="bg-aubergine-dark text-white border-t-2 border-amber/30">
			<Container className="pt-12 sm:pt-16 pb-10 sm:pb-12">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
					{/* Brand Info */}
					<div className="sm:col-span-2 md:col-span-5 space-y-4">
						<Link
							href="/"
							className="inline-flex items-center gap-2.5 sm:gap-3 text-white text-decoration-none group"
						>
							<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-aubergine text-amber p-1.5 border border-amber/40 shadow-xs group-hover:scale-105 transition-transform">
								<img
									src={getAssetPath("/images/logo/N.svg")}
									alt="NEEV Logo"
									className="h-full w-full object-contain"
								/>
							</div>
							<div className="flex flex-col text-left">
								<span className="font-brand tracking-wider text-xl font-bold leading-none text-white">
									NEEV
								</span>
								<span className="font-heading text-[10px] sm:text-xs font-semibold tracking-wider text-amber uppercase mt-0.5">
									Additive Manufacturing
								</span>
							</div>
						</Link>
						<p className="text-mist/80 text-sm leading-relaxed max-w-sm font-normal">
							Ideas, Made Real. Australian additive manufacturing studio based on the
							Central Coast, NSW. Precision multi-material 3D printing, spiritual
							décor, and smart contactless business stations.
						</p>
						<div className="pt-2">
							<p className="text-xs font-bold uppercase tracking-wider text-amber mb-3">
								Connect on Instagram
							</p>
							<SocialLinks />
						</div>
					</div>

					{/* Quick Links */}
					<div className="md:col-span-3 space-y-3 sm:space-y-4">
						<h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber font-heading">
							Navigation
						</h3>
						<ul className="space-y-2 sm:space-y-2.5 text-sm">
							{siteConfig.navLinks.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-mist/80 hover:text-amber transition-colors flex items-center gap-1.5"
									>
										<span>{link.label}</span>
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact / Inquiries */}
					<div className="sm:col-span-2 md:col-span-4 space-y-3 sm:space-y-4">
						<h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber font-heading">
							Direct Contact
						</h3>
						<p className="text-xs sm:text-sm text-mist/80">
							Need a custom print, prototype quote, or visiting our exhibition booth?
						</p>
						<div className="space-y-3 text-sm">
							<a
								href={`https://wa.me/${siteConfig.contact.whatsapp.number.replace(
									/[^0-9]/g,
									""
								)}?text=${encodeURIComponent(siteConfig.contact.whatsapp.message)}`}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 text-mist/90 hover:text-amber transition-colors group"
							>
								<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-amber group-hover:bg-amber group-hover:text-aubergine-dark transition-colors shrink-0">
									<MessageCircle className="h-4 w-4" />
								</div>
								<span className="truncate">
									WhatsApp: {siteConfig.contact.phone}
								</span>
							</a>

							<a
								href={siteConfig.socials.instagram}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 text-mist/90 hover:text-amber transition-colors group"
							>
								<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-amber group-hover:bg-amber group-hover:text-aubergine-dark transition-colors shrink-0">
									<svg
										className="h-4 w-4 fill-none stroke-current stroke-2"
										viewBox="0 0 24 24"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
										<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
										<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
									</svg>
								</div>
								<span className="truncate">Instagram: @neev_au</span>
							</a>

							<a
								href={`mailto:${siteConfig.contact.email}`}
								className="flex items-center gap-3 text-mist/90 hover:text-amber transition-colors group"
							>
								<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-amber group-hover:bg-amber group-hover:text-aubergine-dark transition-colors shrink-0">
									<Mail className="h-4 w-4" />
								</div>
								<span className="truncate">{siteConfig.contact.email}</span>
							</a>

							<div className="flex items-center gap-3 text-mist/70 text-xs sm:text-sm">
								<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-amber shrink-0">
									<MapPin className="h-4 w-4" />
								</div>
								<span>Stall 16 • Mega Diwali Event, Newcastle</span>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-mist/60 text-center sm:text-left">
					<p>© {currentYear} NEEV Additive Manufacturing. All rights reserved.</p>
					<p className="flex items-center justify-center gap-1 font-heading">
						Ideas, Made Real. <span className="text-amber">•</span> Central Coast, NSW
					</p>
				</div>
			</Container>
		</footer>
	);
}
