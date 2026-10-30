import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { buttonVariants } from "@/components/ui/button";
import { Layers, ShieldCheck, Sparkles, Cpu, Target, ArrowRight } from "lucide-react";
import { cn } from "cn";

export const metadata: Metadata = {
  title: "About Us | 3D Print Factory",
  description:
    "Learn about 3D Print Factory's mission, technology, and precision additive manufacturing process.",
};

export default function AboutPage() {
  const highlights = [
    {
      icon: Cpu,
      title: "Precision Additive Tech",
      description:
        "We utilize state-of-the-art FDM 3D printing equipment tuned for tight micro-tolerances down to 0.12mm layer resolutions.",
    },
    {
      icon: ShieldCheck,
      title: "Eco-Friendly Materials",
      description:
        "Primary reliance on high-grade PLA (biodegradable thermoplastic) and weather-resilient PETG for durable, non-toxic products.",
    },
    {
      icon: Target,
      title: "Rapid Turnaround",
      description:
        "Fast print cycles and prototyping allow our clients to go from conceptual 3D render to physical hand-held part in days.",
    },
    {
      icon: Sparkles,
      title: "Custom Tailored",
      description:
        "No print run is too small. We specialize in one-off custom models, exhibition pieces, desk novelties, and personalized gifts.",
    },
  ];

  return (
    <div className="py-14 sm:py-24">
      <Container>
        {/* About Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <AnimatedSection direction="up">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber bg-amber/15 px-3.5 py-1.5 rounded-full">
              Our Story & Craft
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-aubergine mt-4 tracking-tight">
              Transforming Digital Geometry Into Physical Reality
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              3D Print Factory was founded with a clear focus: making high-detail,
              artisan-quality additive manufacturing accessible to enthusiasts,
              homeowners, and makers looking for unique items.
            </p>
          </AnimatedSection>
        </div>

        {/* Story Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <AnimatedSection direction="left">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-aubergine tracking-tight">
                Why 3D Printing?
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-foreground/85 leading-relaxed">
                <p>
                  Traditional manufacturing requires costly molds and large order
                  minimums. Additive manufacturing completely changes this equation
                  — allowing complex articulated structures, interlocking gear cubes,
                  and intricate low-poly geometry to be manufactured on demand without
                  waste.
                </p>
                <p>
                  Every piece on our website is sliced, tuned, and monitored
                  layer-by-layer. We test infill densities, wall perimeters, and cooling
                  temperatures to ensure the final product isn&apos;t just a visual novelty,
                  but structurally dependable.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-5">
            <AnimatedSection direction="right">
              <div className="rounded-3xl border border-mist-dark/60 bg-white p-8 sm:p-10 shadow-md">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-aubergine text-amber mb-6 shadow-sm">
                  <Layers className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-aubergine mb-3 tracking-tight">
                  Exhibition Showcase
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                  Come visit our booth to interact with physical prints, test tactile
                  fidget clickers, and inspect layer lines up close.
                </p>
                <div className="border-t border-mist pt-5 flex items-center justify-between text-sm">
                  <span className="font-semibold text-aubergine">Booth Status:</span>
                  <span className="text-amber font-extrabold">Active Exhibition</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Highlights / Values Bento */}
        <div className="mb-24">
          <AnimatedSection direction="up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-aubergine text-center mb-14 tracking-tight">
              Our Core Pillars
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <AnimatedSection
                  key={item.title}
                  delay={idx * 0.1}
                  direction="up"
                >
                  <div className="h-full rounded-3xl border border-mist-dark/60 bg-white p-7 sm:p-8 shadow-xs transition-all hover:border-amber/70 hover:shadow-lg flex flex-col justify-between">
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mist/60 text-aubergine mb-5">
                        <Icon className="h-6 w-6 text-aubergine" />
                      </div>
                      <h3 className="font-bold text-lg sm:text-xl text-aubergine mb-2.5 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
              Explore Our Creations in Action
            </h2>
            <p className="text-base sm:text-lg text-mist/90 max-w-md mb-8 leading-relaxed font-normal">
              Check out all articulated models, home accessories, and novelty items
              currently on display.
            </p>
            <Link
              href="/catalogue"
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-amber text-aubergine-dark hover:bg-amber-light font-bold text-base h-12 px-7 rounded-xl flex items-center gap-2 shadow-md hover:scale-[1.02] transition-all"
              )}
            >
              <span>View Full Catalogue</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </AnimatedSection>
      </Container>
    </div>
  );
}
