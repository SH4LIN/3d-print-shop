import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import faqData from "@/data/faq.json";

export function FAQSection() {
  return (
    <section className="py-14 sm:py-24 bg-white border-t border-mist-dark/40">
      <Container className="max-w-4xl">
        <div className="text-center mb-10 sm:mb-16">
          <AnimatedSection direction="up">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber bg-amber/15 px-3.5 py-1.5 rounded-full">
              Exhibition &amp; Custom Orders
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-aubergine mt-3 sm:mt-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Everything you need to know about purchasing at Stall 16, claiming your 10% Instagram discount, filament finishes, and custom 3D printing.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection direction="up" delay={0.15}>
          <div className="rounded-2xl sm:rounded-3xl border border-mist-dark/60 bg-white p-4 sm:p-10 shadow-sm">
            <Accordion className="space-y-3 sm:space-y-4">
              {faqData.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-xl sm:rounded-2xl border border-mist-dark/50 px-4 sm:px-6 py-1 sm:py-2 transition-all hover:border-amber/60 hover:shadow-2xs"
                >
                  <AccordionTrigger className="font-heading text-left font-bold text-aubergine text-sm sm:text-lg hover:no-underline py-3.5 sm:py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-base text-foreground/80 leading-relaxed pb-4 sm:pb-5 pt-1 font-normal">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
