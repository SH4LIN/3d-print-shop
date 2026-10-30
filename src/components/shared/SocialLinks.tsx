import { siteConfig } from "@/data/site-config";
import { MessageCircle, Mail } from "lucide-react";
import { cn } from "cn";

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Instagram */}
      <a
        href={siteConfig.socials.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram @neev_au"
        title="Follow @neev_au on Instagram"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-mist-dark/30 bg-white/10 text-white transition-all hover:border-amber hover:bg-amber hover:text-aubergine-dark hover:scale-105"
      >
        <svg
          className={cn("h-4 w-4 fill-none stroke-current stroke-2", iconClassName)}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      </a>

      {/* WhatsApp */}
      <a
        href={siteConfig.socials.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        title="Chat on WhatsApp"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-mist-dark/30 bg-white/10 text-white transition-all hover:border-amber hover:bg-amber hover:text-aubergine-dark hover:scale-105"
      >
        <MessageCircle className={cn("h-4 w-4", iconClassName)} />
      </a>

      {/* Email */}
      <a
        href={siteConfig.socials.email}
        aria-label="Email"
        title="Send an Email"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-mist-dark/30 bg-white/10 text-white transition-all hover:border-amber hover:bg-amber hover:text-aubergine-dark hover:scale-105"
      >
        <Mail className={cn("h-4 w-4", iconClassName)} />
      </a>
    </div>
  );
}
