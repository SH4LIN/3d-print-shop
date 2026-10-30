import { Pencil, Printer, Package, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { siteConfig } from "@/data/site-config";

const iconMap = {
  Pencil,
  Printer,
  Package,
};

export function ProcessSection() {
  return (
    <section className="py-20 sm:py-24 bg-white border-y border-mist-dark/40">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <AnimatedSection direction="up">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber bg-amber/15 px-3.5 py-1.5 rounded-full">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-aubergine mt-4 tracking-tight">
              From Digital File to Real Life
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Our 3-step additive manufacturing pipeline ensures every print meets
              high structural durability and clean visual tolerances.
            </p>
          </AnimatedSection>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 relative">
          {siteConfig.process.map((step, idx) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap] || Printer;
            return (
              <AnimatedSection
                key={step.step}
                delay={idx * 0.15}
                direction="up"
                className="relative"
              >
                <div className="h-full rounded-3xl border border-mist-dark/60 bg-mist-light/60 p-8 sm:p-9 transition-all hover:bg-white hover:shadow-xl hover:border-amber/70 flex flex-col justify-between">
                  <div>
                    {/* Step Number + Icon Badge */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-aubergine text-amber shadow-sm">
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="text-4xl font-black text-amber/30">
                        0{step.step}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-aubergine mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-mist/80 text-sm font-bold text-aubergine flex items-center gap-1.5">
                    <span>Phase 0{step.step}</span>
                    <ArrowRight className="h-4 w-4 text-amber" />
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
