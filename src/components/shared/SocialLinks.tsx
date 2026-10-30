import { siteConfig } from "@/data/site-config";
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
        aria-label="Instagram"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-mist-dark/30 bg-white/10 text-white transition-all hover:border-amber hover:bg-amber hover:text-aubergine-dark"
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

      {/* Facebook */}
      <a
        href={siteConfig.socials.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-mist-dark/30 bg-white/10 text-white transition-all hover:border-amber hover:bg-amber hover:text-aubergine-dark"
      >
        <svg
          className={cn("h-4 w-4 fill-none stroke-current stroke-2", iconClassName)}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      </a>

      {/* YouTube */}
      <a
        href={siteConfig.socials.youtube}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-mist-dark/30 bg-white/10 text-white transition-all hover:border-amber hover:bg-amber hover:text-aubergine-dark"
      >
        <svg
          className={cn("h-4 w-4 fill-none stroke-current stroke-2", iconClassName)}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <polygon points="10 15 15 12 10 9 10 15" />
        </svg>
      </a>
    </div>
  );
}
