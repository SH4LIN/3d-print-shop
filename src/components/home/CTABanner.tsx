import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles, MapPin } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { cn } from "cn";

export function CTABanner() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.number.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(
    "Hi NEEV team! I saw your exhibition stall at the Mega Diwali Event (Stall 16) and would like to ask about a custom 3D printing project."
  )}`;

  return (
    <section className="relative overflow-hidden w-full bg-aubergine-dark text-white py-20 sm:py-24 border-t-2 border-amber/40">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 sm:h-96 w-full max-w-2xl bg-amber/10 blur-3xl pointer-events-none" />

      <Container className="relative z-10 text-center max-w-3xl w-full">
        <AnimatedSection direction="up">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-amber mb-5 border border-amber/30">
            <Sparkles className="h-4 w-4" />
            <span>Visiting Stall 16 or Have an Idea?</span>
          </div>

          <div className="space-y-2 mb-5">
            <span className="font-brand text-xl sm:text-2xl text-amber block uppercase">
              NEEV ADDITIVE MANUFACTURING
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white break-words">
              Bring Your Custom Project To Life
            </h2>
          </div>

          <p className="text-base sm:text-lg text-mist/90 mb-9 max-w-xl mx-auto leading-relaxed font-normal">
            Whether it&apos;s a personalized business stand, sacred pooja décor, optical lamp, or rapid prototype, we turn your 3D ideas into tangible reality in 24 to 48 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-amber text-aubergine-dark hover:bg-amber-light font-bold text-sm sm:text-base h-12 sm:h-13 px-6 sm:px-7 rounded-xl shadow-lg shadow-amber/20 flex items-center justify-center gap-2.5 transition-all"
              )}
            >
              <MessageCircle className="h-5 w-5" />
              <span>Chat on WhatsApp</span>
            </a>

            <Link
              href="/catalogue"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "border-white/25 text-white hover:bg-white/10 hover:text-white h-12 sm:h-13 px-6 sm:px-7 text-sm sm:text-base font-semibold rounded-xl flex items-center justify-center gap-2.5 transition-all"
              )}
            >
              <span>Browse 14 Stall Prints</span>
              <ArrowRight className="h-5 w-5 text-amber" />
            </Link>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
