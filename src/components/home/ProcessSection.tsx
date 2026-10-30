import { MessageSquare, Palette, PackageCheck, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { siteConfig } from "@/data/site-config";

const steps = [
  {
    step: 1,
    title: "Share Your Idea or File",
    description:
      "Found a 3D model on Printables/Thingiverse, or need a custom nameplate? Just send us the link, picture, or STL file on WhatsApp.",
    icon: MessageSquare,
  },
  {
    step: 2,
    title: "Pick Your Finish & Colors",
    description:
      "Choose your size and select from 20+ materials: Silk Rainbow, Neon Glow, Metallic Gold, or heavy-duty PETG.",
    icon: Palette,
  },
  {
    step: 3,
    title: "We Print & Deliver",
    description:
      "Precision-printed with fine 0.12mm layer lines and clean infill. Pick it up from our stall today or get fast home delivery.",
    icon: PackageCheck,
  },
];

export function ProcessSection() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.number.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(
    "Hi! I'd like to get an instant quote for a custom 3D print."
  )}`;

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-mist-dark/40">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <AnimatedSection direction="up">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber bg-amber/15 px-3.5 py-1.5 rounded-full">
              Custom Print Service
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-aubergine mt-3 sm:mt-4 tracking-tight">
              Have an Idea? We&apos;ll 3D Print It
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              From personalized gifts and lithophane photos to functional prototype parts — getting your custom project 3D printed is fast and simple.
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
                      <span className="text-3xl sm:text-4xl font-black text-amber/30">
                        0{item.step}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-aubergine mb-2.5 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-mist/80 text-xs sm:text-sm font-bold text-aubergine flex items-center justify-between">
                    <span>Step 0{item.step}</span>
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
      </Container>
    </section>
  );
}
