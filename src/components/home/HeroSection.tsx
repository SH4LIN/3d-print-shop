"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
	ArrowDown,
	Sparkles,
	MessageCircle,
	Tag,
	Palette,
	CheckCircle2,
	Flame,
	MapPin,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/data/site-config";
import { getAssetPath } from "@/lib/utils";
import { cn } from "cn";

export function HeroSection() {
	const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.number.replace(
		/[^0-9]/g,
		""
	)}?text=${encodeURIComponent(
		"Hi NEEV team! I scanned your QR code at Stall 16 (Mega Diwali Event). I'm interested in the Sacred Shivling and your 3D printed collection!"
	)}`;

	return (
		<section className="relative overflow-hidden w-full bg-radial from-aubergine-dark via-aubergine to-[#1A0518] text-white py-12 sm:py-20 lg:py-24">
			{/* Geometric pattern overlay */}
			<div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#EAAA00_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

			{/* Decorative gradient glow spheres */}
			<div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 h-[320px] sm:h-[450px] w-[320px] sm:w-[450px] rounded-full bg-amber/15 blur-3xl pointer-events-none" />
			<div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 h-[320px] sm:h-[450px] w-[320px] sm:w-[450px] rounded-full bg-aubergine-light/50 blur-3xl pointer-events-none" />

			<Container className="relative z-10 w-full">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
					{/* Left Column: Real Headline, Pitch, and Stall Offer */}
					<div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
						<motion.div
							initial={{ opacity: 0, y: 14 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4 }}
							className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2"
						>
							<Badge className="bg-amber/20 text-amber border border-amber/40 hover:bg-amber/30 px-3.5 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-xs flex items-center gap-1.5">
								<MapPin className="h-3.5 w-3.5" />
								<span>Stall 16 • Mega Diwali Event, Newcastle</span>
							</Badge>
							<Badge className="bg-white/10 text-mist border border-white/20 text-xs py-1 px-3 rounded-full">
								Central Coast, NSW
							</Badge>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 14 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.1 }}
							className="space-y-2"
						>
							<span className="font-brand tracking-widest text-lg sm:text-2xl text-amber uppercase block">
								NEEV Additive Manufacturing
							</span>
							<h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] break-words">
								Ideas,{" "}
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber via-amber-light to-[#FFF0B3]">
									Made Real.
								</span>
							</h1>
						</motion.div>

						<motion.p
							initial={{ opacity: 0, y: 14 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.15 }}
							className="text-sm sm:text-lg text-mist/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
						>
							Welcome to our on-site exhibition showcase! Every piece on our table is
							precision 3D printed with micron-level detail using Bambu Lab
							technology. Browse our live collection, explore material finishes, or
							bring your own 3D ideas to life.
						</motion.p>

						{/* Exhibition Special Offer Banner */}
						<motion.div
							initial={{ opacity: 0, y: 14 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.2 }}
							className="rounded-2xl bg-white/10 border-2 border-amber/50 p-4 sm:p-5 backdrop-blur-md text-left flex items-start gap-3.5 shadow-lg shadow-amber/10"
						>
							<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber text-aubergine-dark shrink-0 mt-0.5 shadow-sm">
								<Tag className="h-5 w-5" />
							</div>
							<div className="space-y-1">
								<div className="flex items-center gap-2">
									<span className="text-xs font-black uppercase tracking-wider text-amber">
										Exhibition Special Offer
									</span>
									<span className="text-[10px] font-extrabold uppercase bg-amber text-aubergine-dark px-1.5 py-0.5 rounded">
										10% OFF
									</span>
								</div>
								<p className="text-xs sm:text-sm text-white font-medium leading-snug">
									Follow us on Instagram{" "}
									<a
										href={siteConfig.socials.instagram}
										target="_blank"
										rel="noopener noreferrer"
										className="text-amber font-bold underline hover:text-amber-light"
									>
										@neev_au
									</a>
									, leave a comment on any reel, and grab <strong>10% off</strong>{" "}
									your purchase at Stall 16 today!
								</p>
							</div>
						</motion.div>

						{/* CTAs */}
						<motion.div
							initial={{ opacity: 0, y: 14 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.25 }}
							className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4"
						>
							<a
								href="#catalogue"
								className={cn(
									buttonVariants({ variant: "default" }),
									"bg-amber text-aubergine-dark hover:bg-amber-light font-bold text-sm sm:text-base px-6 sm:px-7 h-12 sm:h-13 rounded-xl shadow-lg shadow-amber/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
								)}
							>
								<span>Explore Table Catalogue</span>
								<ArrowDown className="h-4 w-4" />
							</a>

							<a
								href={whatsappUrl}
								target="_blank"
								rel="noopener noreferrer"
								className={cn(
									buttonVariants({ variant: "outline" }),
									"border-white/30 text-white hover:bg-white/10 hover:text-white h-12 sm:h-13 px-5 sm:px-6 text-sm sm:text-base font-semibold rounded-xl flex items-center justify-center gap-2.5 transition-all"
								)}
							>
								<MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-amber" />
								<span>Chat via WhatsApp</span>
							</a>
						</motion.div>

						{/* Value Highlights */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className="pt-5 border-t border-white/15 grid grid-cols-3 gap-2 sm:gap-6 max-w-lg mx-auto lg:mx-0 text-center sm:text-left"
						>
							<div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2">
								<CheckCircle2 className="h-4 w-4 text-amber shrink-0 mt-0.5 hidden sm:block" />
								<div>
									<span className="block text-xs sm:text-sm font-bold text-white">
										Stall 16 Pickup
									</span>
									<span className="text-[10px] sm:text-xs text-mist/75">
										Ready to take home
									</span>
								</div>
							</div>
							<div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2">
								<Palette className="h-4 w-4 text-amber shrink-0 mt-0.5 hidden sm:block" />
								<div>
									<span className="block text-xs sm:text-sm font-bold text-white">
										Bambu Precision
									</span>
									<span className="text-[10px] sm:text-xs text-mist/75">
										0.08mm micro-stepping
									</span>
								</div>
							</div>
							<div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2">
								<Sparkles className="h-4 w-4 text-amber shrink-0 mt-0.5 hidden sm:block" />
								<div>
									<span className="block text-xs sm:text-sm font-bold text-white">
										Custom 3D Orders
									</span>
									<span className="text-[10px] sm:text-xs text-mist/75">
										24-48hr turnaround
									</span>
								</div>
							</div>
						</motion.div>
					</div>

					{/* Right Column: Spotlight Product Card (Shivling) */}
					<div className="lg:col-span-5 flex justify-center w-full">
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="relative w-full max-w-md rounded-2xl sm:rounded-3xl border border-white/20 bg-white/10 p-5 sm:p-7 backdrop-blur-xl shadow-2xl overflow-hidden"
						>
							{/* Card Header Badge */}
							<div className="flex items-center justify-between pb-3.5 border-b border-white/15">
								<div className="flex items-center gap-1.5 text-xs font-bold text-amber">
									<Flame className="h-4 w-4 fill-amber" />
									<span>Stall Spotlight Piece</span>
								</div>
								<span className="text-[11px] font-semibold text-mist/90 bg-amber/20 text-amber px-2.5 py-0.5 rounded-full border border-amber/30">
									On Display at Stall 16
								</span>
							</div>

							{/* Product Visual Container with Clean Cutout */}
							<div className="my-4 rounded-2xl bg-gradient-to-b from-white/15 to-white/5 p-4 flex items-center justify-center relative border border-white/10 aspect-4/3 overflow-hidden">
								<Image
									src={getAssetPath("/images/products/shivling-clean.webp")}
									alt="Sacred Shiva Lingam (Shivling) 3D Print"
									width={400}
									height={400}
									priority
									fetchPriority="high"
									className="h-full w-full object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
								/>
								<Badge className="absolute bottom-3 left-3 bg-aubergine-dark/90 text-amber border border-amber/40 text-[11px] font-bold">
									Multi-Hooded Naga Canopy
								</Badge>
							</div>

							{/* Product Info & Direct Action */}
							<div className="space-y-3">
								<div>
									<h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight">
										Sacred Shiva Lingam
									</h3>
									<p className="text-xs text-mist/85 mt-1.5 leading-relaxed">
										Intricately detailed Shiva Lingam with multi-hooded Naga
										serpent canopy, ornamental yoni base with spout, decorative
										lotus motifs, and central Om (ॐ) medallion. Designed as a
										sacred home, pooja room, and temple décor piece.
									</p>
								</div>

								{/* Key features bullets */}
								<div className="pt-1 grid grid-cols-2 gap-1.5 text-[11px] text-mist/90">
									<span className="flex items-center gap-1">
										<span className="h-1.5 w-1.5 rounded-full bg-amber" />{" "}
										Central ॐ Medallion
									</span>
									<span className="flex items-center gap-1">
										<span className="h-1.5 w-1.5 rounded-full bg-amber" /> Lotus
										Yoni Base
									</span>
									<span className="flex items-center gap-1">
										<span className="h-1.5 w-1.5 rounded-full bg-amber" /> Silk
										Dual-Tone Finish
									</span>
									<span className="flex items-center gap-1">
										<span className="h-1.5 w-1.5 rounded-full bg-amber" />{" "}
										Eco-friendly PLA
									</span>
								</div>

								<a
									href={whatsappUrl}
									target="_blank"
									rel="noopener noreferrer"
									className={cn(
										buttonVariants({ variant: "default" }),
										"w-full bg-amber text-aubergine-dark hover:bg-amber-light font-bold text-xs sm:text-sm h-11 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 mt-2"
									)}
								>
									<MessageCircle className="h-4 w-4" />
									<span>Inquire / Reserve at Stall 16</span>
								</a>
							</div>
						</motion.div>
					</div>
				</div>
			</Container>
		</section>
	);
}
