"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Sparkles, MessageCircle, QrCode } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/data/site-config";
import { cn } from "cn";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden w-full bg-radial from-aubergine-dark via-aubergine to-[#1A0518] text-white py-14 sm:py-24 lg:py-28">
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#EAAA00_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:28px_28px] pointer-events-none" />

      {/* Decorative gradient glow spheres - bounded inside container viewport */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-[300px] sm:h-[420px] w-[300px] sm:w-[420px] rounded-full bg-amber/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 h-[300px] sm:h-[420px] w-[300px] sm:w-[420px] rounded-full bg-aubergine-light/50 blur-3xl pointer-events-none" />

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full">
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="bg-amber/15 text-amber border border-amber/30 hover:bg-amber/25 px-3 py-1 sm:px-3.5 sm:py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full">
                <Sparkles className="h-3.5 w-3.5 mr-1.5 inline" /> Exhibition Live Showcase
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.12] sm:leading-[1.08] break-words"
            >
              Precision Crafted.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber to-amber-light">
                3D Printed.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-lg lg:text-xl text-mist/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Discover high-detail articulated dragons, tactile fidget clickers, and
              custom home decor. Engineered with micro-layer tolerances and premium
              filaments — ready to explore and order.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <Link
                href="/catalogue"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-amber text-aubergine-dark hover:bg-amber-light font-bold text-sm sm:text-base px-6 sm:px-7 h-12 sm:h-13 rounded-xl shadow-lg shadow-amber/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
                )}
              >
                <span>Explore Full Catalogue</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.number.replace(
                  /[^0-9]/g,
                  ""
                )}?text=${encodeURIComponent(
                  siteConfig.contact.whatsapp.message
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "border-white/25 text-white hover:bg-white/10 hover:text-white h-12 sm:h-13 px-5 sm:px-6 text-sm sm:text-base font-semibold rounded-xl flex items-center justify-center gap-2.5 transition-all"
                )}
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-amber" />
                <span>Ask at Booth</span>
              </a>
            </motion.div>

            {/* Trust Stats Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 sm:pt-8 border-t border-white/15 grid grid-cols-3 gap-2 sm:gap-6 max-w-lg mx-auto lg:mx-0 text-center sm:text-left"
            >
              <div>
                <span className="block text-lg sm:text-3xl font-extrabold text-amber">0.12mm</span>
                <span className="text-[10px] sm:text-sm text-mist/75 font-medium">Layer Detail</span>
              </div>
              <div>
                <span className="block text-lg sm:text-3xl font-extrabold text-amber">100%</span>
                <span className="text-[10px] sm:text-sm text-mist/75 font-medium">Custom</span>
              </div>
              <div>
                <span className="block text-lg sm:text-3xl font-extrabold text-amber">Fast</span>
                <span className="text-[10px] sm:text-sm text-mist/75 font-medium">Turnaround</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Graphic / Interactive 3D Showcase Card */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-md rounded-2xl sm:rounded-3xl border border-white/20 bg-white/10 p-5 sm:p-8 backdrop-blur-xl shadow-2xl"
            >
              {/* Top Card Bar */}
              <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-white/15">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400/80" />
                  <div className="h-3 w-3 rounded-full bg-amber/80" />
                  <div className="h-3 w-3 rounded-full bg-green-400/80" />
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-mist/80 font-medium">
                  <QrCode className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber" />
                  <span>Scan to Explore</span>
                </div>
              </div>

              {/* Graphic Feature */}
              <div className="py-6 sm:py-9 text-center space-y-3 sm:space-y-4">
                <div className="mx-auto flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-2xl bg-radial from-amber/25 to-transparent border border-amber/35 text-amber shadow-inner">
                  <Layers className="h-10 w-10 sm:h-12 sm:w-12 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                    On-Site Exhibition Catalogue
                  </h3>
                  <p className="text-xs sm:text-sm text-mist/85 mt-1.5 sm:mt-2 max-w-xs mx-auto leading-relaxed">
                    Browse models in real time, check material specs,
                    and claim event discounts straight via WhatsApp.
                  </p>
                </div>
              </div>

              {/* Bottom Quick Feature Highlights */}
              <div className="rounded-xl bg-white/10 border border-white/15 p-3 sm:p-4 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-mist/95 font-medium">Custom colors or bulk?</span>
                <Link
                  href="/contact"
                  className="font-bold text-amber hover:text-amber-light hover:underline"
                >
                  Inquire Now →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
