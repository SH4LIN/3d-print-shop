import Link from "next/link";
import { Layers, MessageCircle, Mail, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/layout/Container";
import { SocialLinks } from "@/components/shared/SocialLinks";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-aubergine-dark text-white border-t-2 border-amber/30">
      <Container className="pt-12 sm:pt-16 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand Info */}
          <div className="sm:col-span-2 md:col-span-5 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-xl font-bold tracking-tight text-white"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber text-aubergine-dark font-bold shadow-xs">
                <Layers className="h-5 w-5" />
              </div>
              <span className="flex items-center">
                3D<span className="text-amber mx-0.5">•</span>Print Factory
              </span>
            </Link>
            <p className="text-mist/80 text-sm leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-amber mb-3">
                Follow Our Creations
              </p>
              <SocialLinks />
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 sm:space-y-4">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber">
              Explore
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-mist/80 hover:text-amber transition-colors flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Inquiries */}
          <div className="sm:col-span-2 md:col-span-4 space-y-3 sm:space-y-4">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber">
              Direct Inquiries
            </h3>
            <p className="text-xs sm:text-sm text-mist/80">
              Want a custom color, size, or prototype? Reach out to us directly:
            </p>
            <div className="space-y-3 text-sm">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.number.replace(
                  /[^0-9]/g,
                  ""
                )}?text=${encodeURIComponent(
                  siteConfig.contact.whatsapp.message
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-mist/90 hover:text-amber transition-colors group"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-amber group-hover:bg-amber group-hover:text-aubergine-dark transition-colors shrink-0">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <span className="truncate">WhatsApp: {siteConfig.contact.whatsapp.number}</span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 text-mist/90 hover:text-amber transition-colors group"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-amber group-hover:bg-amber group-hover:text-aubergine-dark transition-colors shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="truncate">{siteConfig.contact.email}</span>
              </a>

              <div className="flex items-center gap-3 text-mist/70 text-xs sm:text-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-mist/50 shrink-0">
                  <Sparkles className="h-4 w-4" />
                </div>
                <span>Exhibition Special Display 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-mist/60 text-center sm:text-left">
          <p>© {currentYear} 3D Print Factory. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1">
            Engineered with precision <span className="text-amber">•</span> Built for creators
          </p>
        </div>
      </Container>
    </footer>
  );
}
