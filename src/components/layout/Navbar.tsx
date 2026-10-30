"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	Menu,
	X,
	MessageCircle,
	Home,
	Grid3X3,
	Sparkles,
	Mail,
	ChevronRight,
	MapPin,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/layout/Container";
import { buttonVariants } from "@/components/ui/button";
import { getAssetPath } from "@/lib/utils";
import { cn } from "cn";

const navIcons = {
	"/": Home,
	"/catalogue": Grid3X3,
	"/about": Sparkles,
	"/contact": Mail,
};

export function Navbar() {
	const [scrolled, setScrolled] = React.useState(false);
	const [isOpen, setIsOpen] = React.useState(false);
	const pathname = usePathname();

	React.useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Lock body scroll when mobile menu is active
	React.useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.number.replace(
		/[^0-9]/g,
		""
	)}?text=${encodeURIComponent(siteConfig.contact.whatsapp.message)}`;

	// Robust active path detection handling trailing slashes, basePaths and sub-paths
	const isLinkActive = React.useCallback(
		(linkHref: string) => {
			if (!pathname) return linkHref === "/";

			const normalize = (path: string) => {
				const trimmed = path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
				return trimmed || "/";
			};

			const current = normalize(pathname);
			const target = normalize(linkHref);

			if (target === "/") {
				return current === "/";
			}
			return current === target || current.startsWith(`${target}/`);
		},
		[pathname]
	);

	return (
		<>
			<header
				className={cn(
					"fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full",
					scrolled
						? "bg-white/95 backdrop-blur-md shadow-xs py-2.5 sm:py-3 border-b border-mist-dark/50"
						: "bg-white/90 backdrop-blur-md py-3 sm:py-4 shadow-2xs border-b border-mist-dark/30"
				)}
			>
				<Container className="flex items-center justify-between w-full">
					{/* Brand Logo & Name */}
					<Link
						href="/"
						className="group flex items-center gap-2.5 sm:gap-3 z-50 text-decoration-none"
					>
						<img
							src={getAssetPath("/icon.png")}
							alt="NEEV Additive Manufacturing Logo"
							className="h-10 w-10 sm:h-11 sm:w-11 object-contain shrink-0 transition-transform group-hover:scale-105"
						/>
						<div className="flex flex-col text-left">
							<span className="font-brand tracking-wider text-xl sm:text-2xl font-bold leading-none text-aubergine group-hover:text-aubergine-light transition-colors">
								NEEV
							</span>
							<span className="font-heading text-[10px] sm:text-[11px] font-semibold tracking-wider text-aubergine/80 uppercase mt-0.5">
								Additive Manufacturing
							</span>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
						{siteConfig.navLinks.map((link) => {
							const isActive = isLinkActive(link.href);
							return (
								<Link
									key={link.href}
									href={link.href}
									className={cn(
										"relative px-4 py-2 rounded-xl text-sm lg:text-base font-bold transition-all duration-200 flex items-center",
										isActive
											? "bg-aubergine text-amber shadow-xs ring-1 ring-amber/30"
											: "text-foreground/80 hover:text-aubergine hover:bg-mist/70"
									)}
								>
									<span>{link.label}</span>
								</Link>
							);
						})}
					</nav>

					{/* Desktop Right CTAs: Stall Badge + WhatsApp */}
					<div className="hidden md:flex items-center gap-3">
						<div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber/15 text-aubergine-dark text-xs font-bold border border-amber/30">
							<MapPin className="h-3.5 w-3.5 text-amber-dark" />
							<span>Stall 16 • Mega Diwali Event</span>
						</div>

						<a
							href={whatsappUrl}
							target="_blank"
							rel="noopener noreferrer"
							className={cn(
								buttonVariants({ variant: "default" }),
								"bg-amber text-aubergine-dark hover:bg-amber-light font-bold text-sm h-10 px-4.5 rounded-xl shadow-xs transition-all hover:shadow hover:scale-102 flex items-center gap-2"
							)}
						>
							<MessageCircle className="h-4 w-4" />
							<span>WhatsApp</span>
						</a>
					</div>

					{/* Mobile Menu Toggle Button */}
					<button
						type="button"
						aria-label={isOpen ? "Close menu" : "Open menu"}
						aria-expanded={isOpen}
						onClick={() => setIsOpen(!isOpen)}
						className={cn(
							"md:hidden relative z-50 flex h-10 w-10 items-center justify-center rounded-xl transition-all cursor-pointer",
							isOpen
								? "bg-aubergine text-white shadow-md"
								: "bg-mist/80 text-aubergine hover:bg-mist border border-mist-dark/40"
						)}
					>
						{isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
					</button>
				</Container>
			</header>

			{/* Mobile Drawer Navigation Backdrop */}
			<div
				className={cn(
					"fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-300 md:hidden",
					isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
				)}
				onClick={() => setIsOpen(false)}
			/>

			{/* Mobile Drawer Navigation Pane */}
			<div
				style={{ backgroundColor: "#ffffff" }}
				className={cn(
					"fixed top-0 right-0 bottom-0 z-50 h-[100dvh] w-[85vw] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden flex flex-col justify-between p-6 border-l border-mist-dark/40 overflow-y-auto",
					isOpen ? "translate-x-0" : "translate-x-full"
				)}
			>
				{/* Top Section */}
				<div className="space-y-4">
					{/* Drawer Header with Logo & Close Button */}
					<div className="flex items-center justify-between pb-4 border-b border-mist">
						<div className="flex items-center gap-2.5">
							<img
								src={getAssetPath("/icon.png")}
								alt="NEEV Logo"
								className="h-9 w-9 object-contain shrink-0"
							/>
							<div className="flex flex-col text-left">
								<span className="font-brand tracking-wider text-lg font-bold leading-none text-aubergine">
									NEEV
								</span>
								<span className="font-heading text-[9px] font-semibold tracking-wider text-aubergine/80 uppercase mt-0.5">
									Additive Manufacturing
								</span>
							</div>
						</div>

						<button
							type="button"
							onClick={() => setIsOpen(false)}
							aria-label="Close menu"
							className="flex h-9 w-9 items-center justify-center rounded-xl bg-mist hover:bg-mist-dark text-aubergine transition-colors cursor-pointer"
						>
							<X className="h-5 w-5" />
						</button>
					</div>

					<div className="flex items-center justify-between py-1">
						<span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
							Stall 16 • Newcastle, NSW
						</span>
						<span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber/20 text-aubergine">
							Live Event
						</span>
					</div>

					<nav className="flex flex-col gap-2 pt-1">
						{siteConfig.navLinks.map((link) => {
							const isActive = isLinkActive(link.href);
							const Icon = navIcons[link.href as keyof typeof navIcons] || Grid3X3;

							return (
								<Link
									key={link.href}
									href={link.href}
									onClick={() => setIsOpen(false)}
									className={cn(
										"flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-bold transition-all",
										isActive
											? "bg-aubergine text-amber shadow-md ring-1 ring-amber/50"
											: "text-foreground hover:bg-mist-light active:bg-mist"
									)}
								>
									<div className="flex items-center gap-3">
										<div
											className={cn(
												"flex h-9 w-9 items-center justify-center rounded-xl",
												isActive
													? "bg-white/15 text-amber"
													: "bg-mist text-aubergine"
											)}
										>
											<Icon className="h-4 w-4" />
										</div>
										<span>{link.label}</span>
									</div>
									<ChevronRight
										className={cn(
											"h-4 w-4 transition-transform",
											isActive ? "text-amber" : "text-muted-foreground/60"
										)}
									/>
								</Link>
							);
						})}
					</nav>
				</div>

				{/* Bottom Card / Contact CTA */}
				<div className="pt-5 border-t border-mist space-y-3.5 mt-auto">
					{/* Instagram 10% Discount Reminder */}
					<div className="rounded-2xl bg-gradient-to-br from-amber/15 via-mist-light to-white p-4 border border-amber/40 space-y-1 text-left">
						<div className="flex items-center gap-1.5 text-xs font-bold text-aubergine">
							<Sparkles className="h-3.5 w-3.5 text-amber-dark" />
							<span>Grab 10% Off Today</span>
						</div>
						<p className="text-xs text-muted-foreground leading-relaxed">
							Follow <strong>@neev_au</strong> on Instagram &amp; comment on any reel
							to claim your discount at Stall 16!
						</p>
					</div>

					<a
						href={whatsappUrl}
						target="_blank"
						rel="noopener noreferrer"
						className={cn(
							buttonVariants({ variant: "default" }),
							"w-full bg-amber text-aubergine-dark hover:bg-amber-light font-bold text-sm h-12 rounded-xl flex items-center justify-center gap-2 shadow-sm active:scale-98 transition-all"
						)}
					>
						<MessageCircle className="h-4.5 w-4.5 shrink-0" />
						<span>Chat on WhatsApp</span>
					</a>
					<p className="text-center text-[11px] text-muted-foreground font-medium">
						Direct Stall Inquiries:{" "}
						<span className="font-bold text-aubergine">+61 491 600 869</span>
					</p>

					<div className="text-center space-y-0.5">
						<p className="font-brand text-xs font-bold tracking-wider text-aubergine">
							NEEV ADDITIVE MANUFACTURING
						</p>
						<p className="font-heading text-[10px] text-muted-foreground">
							Ideas, Made Real. • Central Coast, NSW
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
