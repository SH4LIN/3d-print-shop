import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { cn } from "cn";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden w-full bg-aubergine-dark text-white py-20 sm:py-24 border-t-2 border-amber/40">
      {/* Decorative gradient blur - constrained within section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 sm:h-96 w-full max-w-2xl bg-amber/10 blur-3xl pointer-events-none" />

      <Container className="relative z-10 text-center max-w-3xl w-full">
        <AnimatedSection direction="up">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-amber mb-5">
            <Sparkles className="h-4 w-4" />
            <span>Have a Specific Idea in Mind?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5 break-words">
            Bring Your Custom Project To Life
          </h2>

          <p className="text-base sm:text-lg text-mist/90 mb-9 max-w-xl mx-auto leading-relaxed font-normal">
            Whether it&apos;s a personalized gift, unique home fixture, or industrial
            prototype, we can model and print it to your exact specifications.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.number.replace(
                /[^0-9]/g,
                ""
              )}?text=${encodeURIComponent(
                "Hi! I'd like to inquire about a custom 3D printing project."
              )}`}
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
              <span>Browse Full Catalogue</span>
              <ArrowRight className="h-5 w-5 text-amber" />
            </Link>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
