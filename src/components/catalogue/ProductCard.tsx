"use client";

import * as React from "react";
import Image from "next/image";
import { MessageCircle, Eye, Sparkles, Layers, Box, Cpu } from "lucide-react";
import { Product } from "@/types";
import { siteConfig } from "@/data/site-config";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "cn";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const whatsappMessage = `Hi! I'm interested in the "${product.name}" (${product.category}) from your catalogue. Could you share pricing and color options?`;
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.number.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <div className="group relative flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-mist-dark/60 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-amber/70">
        {/* Image Container with Mist backdrop */}
        <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-b from-mist-light to-mist p-5 sm:p-6 flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-108"
          />

          {/* Featured or Category Tag */}
          <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 flex flex-wrap gap-1.5 sm:gap-2">
            <Badge className="bg-aubergine text-white border-none font-semibold text-[11px] sm:text-xs px-2.5 py-0.5 sm:py-1 shadow-sm rounded-lg">
              {product.category}
            </Badge>
            {product.featured && (
              <Badge className="bg-amber text-aubergine-dark font-bold text-[11px] sm:text-xs border-none flex items-center gap-1 shadow-sm rounded-lg px-2 sm:px-2.5 py-0.5 sm:py-1">
                <Sparkles className="h-3 w-3" />
                Featured
              </Badge>
            )}
          </div>

          {/* Quick View Floating Action */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label={`View details for ${product.name}`}
            className="absolute bottom-3 right-3 sm:bottom-3.5 sm:right-3.5 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/95 text-aubergine shadow-md backdrop-blur-xs transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 hover:bg-amber hover:text-aubergine-dark hover:scale-110 active:scale-95 cursor-pointer"
          >
            <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>

        {/* Content Info */}
        <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
          <div>
            <h3 className="font-bold text-lg sm:text-xl text-aubergine group-hover:text-aubergine-light transition-colors line-clamp-1 tracking-tight">
              {product.name}
            </h3>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {product.shortDescription}
            </p>
          </div>

          <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-mist flex items-center justify-between gap-2.5">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsOpen(true)}
              className="text-xs sm:text-sm font-semibold text-aubergine border-mist-dark hover:bg-mist-light h-9 px-3 sm:px-4 rounded-xl cursor-pointer"
            >
              Specs
            </Button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "bg-amber text-aubergine-dark hover:bg-amber-light font-bold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 h-9 px-3.5 sm:px-4 rounded-xl shadow-xs hover:shadow transition-all"
              )}
            >
              <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>Inquire</span>
            </a>
          </div>
        </div>
      </div>

      {/* Detail Dialog Modal - Fully Responsive on Mobile & Desktop */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-[92vw] sm:w-[90vw] md:max-w-3xl lg:max-w-4xl p-0 overflow-hidden bg-white rounded-2xl sm:rounded-3xl border border-mist-dark/40 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto md:overflow-hidden">
            {/* Modal Image Area */}
            <div className="md:col-span-5 bg-gradient-to-b from-mist-light to-mist p-6 sm:p-8 flex items-center justify-center relative min-h-[240px] md:min-h-[420px]">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                priority
                className="h-full w-full max-h-56 sm:max-h-72 md:max-h-80 object-contain drop-shadow-sm"
              />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <Badge className="bg-aubergine text-white text-xs font-semibold px-2.5 py-1 rounded-lg">
                  {product.category}
                </Badge>
                {product.featured && (
                  <Badge className="bg-amber text-aubergine-dark text-xs font-bold px-2.5 py-1 rounded-lg">
                    Featured
                  </Badge>
                )}
              </div>
            </div>

            {/* Modal Text & Specs */}
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-4 sm:space-y-5">
                <DialogHeader className="text-left p-0 space-y-1">
                  <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-aubergine tracking-tight pr-6">
                    {product.name}
                  </DialogTitle>
                  <DialogDescription className="text-xs sm:text-sm text-muted-foreground font-medium">
                    Category: <span className="font-semibold text-aubergine">{product.category}</span>
                  </DialogDescription>
                </DialogHeader>

                <p className="text-sm sm:text-base text-foreground/85 leading-relaxed font-normal">
                  {product.description}
                </p>

                {/* Technical Specs Bento Grid */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5">
                    Print Specifications
                  </h4>
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                    <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-mist-light/70 border border-mist-dark/40">
                      <span className="text-muted-foreground flex items-center gap-1.5 font-semibold text-[10px] sm:text-[11px] uppercase tracking-wider">
                        <Cpu className="h-3.5 w-3.5 text-amber" /> Material
                      </span>
                      <span className="font-bold text-aubergine text-sm sm:text-base mt-1 block">
                        {product.specs.material}
                      </span>
                    </div>
                    <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-mist-light/70 border border-mist-dark/40">
                      <span className="text-muted-foreground flex items-center gap-1.5 font-semibold text-[10px] sm:text-[11px] uppercase tracking-wider">
                        <Box className="h-3.5 w-3.5 text-amber" /> Size
                      </span>
                      <span className="font-bold text-aubergine text-sm sm:text-base mt-1 block truncate">
                        {product.specs.dimensions}
                      </span>
                    </div>
                    <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-mist-light/70 border border-mist-dark/40">
                      <span className="text-muted-foreground flex items-center gap-1.5 font-semibold text-[10px] sm:text-[11px] uppercase tracking-wider">
                        <Layers className="h-3.5 w-3.5 text-amber" /> Weight
                      </span>
                      <span className="font-bold text-aubergine text-sm sm:text-base mt-1 block">
                        {product.specs.weight}
                      </span>
                    </div>
                    <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-mist-light/70 border border-mist-dark/40">
                      <span className="text-muted-foreground flex items-center gap-1.5 font-semibold text-[10px] sm:text-[11px] uppercase tracking-wider">
                        <Sparkles className="h-3.5 w-3.5 text-amber" /> Print Time
                      </span>
                      <span className="font-bold text-aubergine text-sm sm:text-base mt-1 block">
                        {product.specs.printTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

                {/* Direct Action Button */}
              <div className="pt-6 mt-6 border-t border-mist/80">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "w-full bg-amber text-aubergine-dark hover:bg-amber-light font-bold text-sm sm:text-base h-12 rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5"
                  )}
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Order / Inquire via WhatsApp</span>
                </a>
                <p className="text-center text-[11px] sm:text-xs text-muted-foreground mt-2">
                  Pre-fills product name &amp; category in your WhatsApp chat
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
