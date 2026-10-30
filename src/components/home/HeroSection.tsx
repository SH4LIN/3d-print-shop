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
    "Hi! I scanned your QR code at the exhibition stall. I'd like to ask about the Articulated Dragon / custom prints!"
  )}`;

  return (
    <section className="relative overflow-hidden w-full bg-radial from-aubergine-dark via-aubergine to-[#1A0518] text-white py-12 sm:py-20 lg:py-24">
      {/* Subtle geometric pattern overlay */}
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
              className="inline-flex items-center gap-2"
            >
              <Badge className="bg-amber/20 text-amber border border-amber/40 hover:bg-amber/30 px-3.5 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-xs">
                <Sparkles className="h-3.5 w-3.5 mr-1.5 inline" /> Live Exhibition Stall
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] break-words"
            >
              3D Printed Toys, Fidgets &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber to-amber-light">
                Custom Creations.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-sm sm:text-lg text-mist/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Welcome to <strong>3D Print Factory</strong>! Every piece on our table is precision-crafted layer by layer. Pick up your favorite model directly from our stall today, or ask us to print your custom idea in your dream color.
            </motion.p>

            {/* Exhibition Special Offer Banner - Real reason to scan the QR code! */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="rounded-2xl bg-white/10 border border-amber/40 p-4 sm:p-4.5 backdrop-blur-md text-left flex items-start gap-3.5 shadow-md"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber text-aubergine-dark shrink-0 mt-0.5">
                <Tag className="h-5 w-5" />
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-bold uppercase tracking-wider text-amber block">
                  Exhibition Visitor Exclusive
                </span>
                <p className="text-xs sm:text-sm text-white font-medium leading-snug">
                  Show this screen at our stall to claim <strong>10% OFF</strong> custom prints, or ask for our bundle deals on fidgets and keychains!
                </p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <a
                href="#catalogue"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-amber text-aubergine-dark hover:bg-amber-light font-bold text-sm sm:text-base px-6 sm:px-7 h-12 sm:h-13 rounded-xl shadow-lg shadow-amber/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                )}
              >
                <span>Browse All 12 Stall Prints</span>
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
                <span>Chat with Maker</span>
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
                  <span className="block text-xs sm:text-sm font-bold text-white">Buy at Stall</span>
                  <span className="text-[10px] sm:text-xs text-mist/75">Ready to take home</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2">
                <Palette className="h-4 w-4 text-amber shrink-0 mt-0.5 hidden sm:block" />
                <div>
                  <span className="block text-xs sm:text-sm font-bold text-white">20+ Finishes</span>
                  <span className="text-[10px] sm:text-xs text-mist/75">Silk, Glow &amp; Matte</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2">
                <Sparkles className="h-4 w-4 text-amber shrink-0 mt-0.5 hidden sm:block" />
                <div>
                  <span className="block text-xs sm:text-sm font-bold text-white">Custom STLs</span>
                  <span className="text-[10px] sm:text-xs text-mist/75">Printed to order</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Real Star Product Spotlight Card */}
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
                  <span>Stall Top Pick</span>
                </div>
                <span className="text-[11px] font-semibold text-mist/80 bg-white/10 px-2.5 py-0.5 rounded-full">
                  On Display Today
                </span>
              </div>

              {/* Product Visual Container */}
              <div className="my-5 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 p-6 flex items-center justify-center relative border border-white/10 aspect-4/3">
                <Image
                  src={getAssetPath("/images/products/placeholder-1.svg")}
                  alt="Articulated Crystal Dragon"
                  width={320}
                  height={320}
                  priority
                  className="h-full w-full max-h-52 object-contain drop-shadow-lg"
                />
                <Badge className="absolute bottom-3 left-3 bg-aubergine text-white text-[11px] font-semibold">
                  Movable Joint Design
                </Badge>
              </div>

              {/* Product Info & Direct Action */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Articulated Crystal Dragon
                  </h3>
                  <p className="text-xs text-mist/85 mt-1 leading-relaxed">
                    Satisfying fluid movement with individually hinged segments. Printed in single-pass FDM with no assembly required.
                  </p>
                </div>

                {/* Color swatches hint */}
                <div className="pt-2 flex items-center justify-between text-xs">
                  <span className="text-mist/75 font-medium">Available Colors:</span>
                  <div className="flex items-center gap-1.5">
                    <span className="h-3.5 w-3.5 rounded-full bg-gradient-to-tr from-amber to-pink-500 ring-1 ring-white/50" title="Silk Rainbow" />
                    <span className="h-3.5 w-3.5 rounded-full bg-emerald-400 ring-1 ring-white/50" title="Glow in the dark" />
                    <span className="h-3.5 w-3.5 rounded-full bg-amber ring-1 ring-white/50" title="Silk Gold" />
                    <span className="h-3.5 w-3.5 rounded-full bg-slate-900 ring-1 ring-white/50" title="Matte Black" />
                    <span className="text-[10px] text-mist/70 pl-1">+16 more</span>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "w-full bg-amber text-aubergine-dark hover:bg-amber-light font-bold text-xs sm:text-sm h-11 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  )}
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Reserve / Ask at Booth</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
