import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import { MessageCircle, Mail, Clock, MapPin, Sparkles, Send } from "lucide-react";
import { cn } from "cn";

export const metadata: Metadata = {
  title: "Contact Us | 3D Print Factory",
  description:
    "Reach out to 3D Print Factory for custom prints, exhibition queries, or bulk novelty orders via WhatsApp, Email, or Instagram.",
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.number.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(siteConfig.contact.whatsapp.message)}`;

  return (
    <div className="py-14 sm:py-24">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <AnimatedSection direction="up">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber bg-amber/15 px-3.5 py-1.5 rounded-full">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-aubergine mt-4 tracking-tight">
              We&apos;re Here to Help You Print
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Have questions about items on our exhibition table, want custom color
              combinations, or need an STL file printed? Reach us through any channel below.
            </p>
          </AnimatedSection>
        </div>

        {/* Contact Methods Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {/* WhatsApp Card */}
          <AnimatedSection direction="up" delay={0.1}>
            <div className="h-full rounded-3xl border border-mist-dark/60 bg-white p-7 sm:p-8 shadow-xs flex flex-col justify-between transition-all hover:border-amber/70 hover:shadow-lg">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-green-600 mb-6">
                  <MessageCircle className="h-7 w-7" />
                </div>
                <h3 className="font-bold text-xl text-aubergine mb-2 tracking-tight">
                  WhatsApp (Fastest)
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Direct instant chat with our print specialist. Best for quick quotes,
                  sharing photos, or exhibition queries.
                </p>
                <p className="text-base font-bold text-foreground">
                  {siteConfig.contact.whatsapp.number}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-mist">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "w-full bg-green-600 hover:bg-green-700 text-white font-bold text-sm h-11 rounded-xl flex items-center justify-center gap-2 shadow-sm"
                  )}
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Open WhatsApp</span>
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Email Card */}
          <AnimatedSection direction="up" delay={0.2}>
            <div className="h-full rounded-3xl border border-mist-dark/60 bg-white p-7 sm:p-8 shadow-xs flex flex-col justify-between transition-all hover:border-amber/70 hover:shadow-lg">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-aubergine/10 text-aubergine mb-6">
                  <Mail className="h-7 w-7" />
                </div>
                <h3 className="font-bold text-xl text-aubergine mb-2 tracking-tight">
                  Email Support
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Ideal for sending detailed 3D CAD files, STL attachments, or formal
                  prototype manufacturing requests.
                </p>
                <p className="text-base font-bold text-foreground truncate">
                  {siteConfig.contact.email}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-mist">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "w-full border-mist-dark hover:bg-mist-light text-aubergine font-bold text-sm h-11 rounded-xl flex items-center justify-center gap-2"
                  )}
                >
                  <Mail className="h-4 w-4" />
                  <span>Send an Email</span>
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Instagram Card */}
          <AnimatedSection direction="up" delay={0.3}>
            <div className="h-full rounded-3xl border border-mist-dark/60 bg-white p-7 sm:p-8 shadow-xs flex flex-col justify-between transition-all hover:border-amber/70 hover:shadow-lg">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-600 mb-6">
                  <svg
                    className="h-7 w-7 fill-none stroke-current stroke-2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-aubergine mb-2 tracking-tight">
                  Instagram DMs
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Follow our print timelapse reels, behind-the-scenes printer runs,
                  and DM us directly on Instagram.
                </p>
                <p className="text-base font-bold text-foreground">
                  @3dprintfactory
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-mist">
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "w-full border-mist-dark hover:bg-mist-light text-aubergine font-bold text-sm h-11 rounded-xl flex items-center justify-center gap-2"
                  )}
                >
                  <svg
                    className="h-4 w-4 fill-none stroke-current stroke-2 mr-2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span>Visit Instagram</span>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Static Inquire Form / Exhibition Helper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 rounded-3xl border border-mist-dark/60 bg-white p-7 sm:p-11 shadow-xs">
            <AnimatedSection direction="left">
              <h2 className="text-2xl sm:text-3xl font-bold text-aubergine mb-2 tracking-tight">
                Quick Project Inquiry
              </h2>
              <p className="text-sm text-muted-foreground mb-7 leading-relaxed">
                Fill this out and it will automatically format an inquiry ready to
                send straight to our team.
              </p>

              <form
                action={`mailto:${siteConfig.contact.email}`}
                method="GET"
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm font-bold text-aubergine mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. John Doe"
                    className="w-full rounded-xl border border-mist-dark/60 bg-mist-light/50 px-4 py-3 text-sm text-foreground focus:border-amber focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-aubergine mb-2">
                    Item of Interest / Project Description
                  </label>
                  <textarea
                    rows={4}
                    name="body"
                    required
                    placeholder="Tell us what you'd like to print, color preferences, or dimensions..."
                    className="w-full rounded-xl border border-mist-dark/60 bg-mist-light/50 px-4 py-3 text-sm text-foreground focus:border-amber focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber/30 transition-all"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-amber text-aubergine-dark hover:bg-amber-light font-bold text-base h-12 rounded-xl shadow-sm transition-all"
                >
                  <Send className="h-4 w-4 mr-2" />
                  <span>Send Inquiry via Email Client</span>
                </Button>
              </form>
            </AnimatedSection>
          </div>

          {/* Exhibition Quick Info Card */}
          <div className="lg:col-span-5 rounded-3xl border border-mist-dark/60 bg-gradient-to-b from-white to-mist-light p-7 sm:p-10 shadow-xs space-y-6">
            <AnimatedSection direction="right">
              <div className="flex items-center gap-2 text-amber font-bold text-xs uppercase tracking-wider">
                <Sparkles className="h-4 w-4" />
                <span>Exhibition Presence</span>
              </div>

              <h3 className="text-2xl font-bold text-aubergine tracking-tight">
                Live Printing On Display
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                If you are visiting our booth this Saturday, ask about our show-exclusive
                samples, filament color swatches, and batch order discounts!
              </p>

              <div className="space-y-4 pt-3 text-sm">
                <div className="flex items-start gap-3.5 text-foreground/85 font-medium">
                  <Clock className="h-5 w-5 text-amber shrink-0 mt-0.5" />
                  <span>Turnaround: 1–3 business days for stock designs</span>
                </div>
                <div className="flex items-start gap-3.5 text-foreground/85 font-medium">
                  <MapPin className="h-5 w-5 text-amber shrink-0 mt-0.5" />
                  <span>Local pickup and fast dispatch available</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </div>
  );
}
