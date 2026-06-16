import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Globe, Share2, ArrowUpRight } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const footerLinks = {
  Services: [
    { label: "Business Website",   href: "/#services" },
    { label: "E-Commerce",         href: "/#services" },
    { label: "Portfolio",          href: "/#services" },
    { label: "Restaurant Website", href: "/#services" },
    { label: "Gift Website",       href: "/#gift" },
  ],
  Company: [
    { label: "Portfolio",          href: "/portfolio" },
    { label: "Pricing",            href: "/pricing" },
    { label: "How It Works",       href: "/how-it-works" },
    { label: "Live Demos",         href: "/demos" },
    { label: "Blog",               href: "/blog" },
  ],
  Support: [
    { label: "FAQs",               href: "/#faq" },
    { label: "Contact",            href: "/contact" },
    { label: "Track Project",      href: "/track" },
    { label: "Case Studies",       href: "/case-studies" },
  ],
};

const socialLinks = [
  { icon: MessageCircle, href: `https://wa.me/${WHATSAPP_NUMBER}`, label: "WhatsApp" },
  { icon: Globe,         href: "https://facebook.com/trxweb",       label: "Facebook" },
  { icon: Share2,        href: "https://instagram.com/trxweb",      label: "Instagram" },
  { icon: Share2,        href: "https://linkedin.com/company/trxweb", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-muted/30 relative overflow-hidden rounded-t-3xl md:rounded-t-[4rem] border-t border-border">
      {/* Top rose gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

      {/* Glow blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/4 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      {/* Main grid */}
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 px-4 sm:px-8 py-12 lg:py-16">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5 w-fit">
              <Image src="/logo.png" alt="TRx WEB" width={36} height={36} className="rounded-full object-cover" />
              <div>
                <span className="font-bold text-lg block leading-tight tracking-tight text-foreground">
                  TRx <span className="text-primary">WEB</span>
                </span>
                <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
                  Nepal&apos;s Fastest Web Studio
                </span>
              </div>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Professional websites delivered in 48 hours. Built with Next.js,
              deployed on Vercel — starting from NPR&nbsp;4,999.
            </p>

            <div className="flex items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent hover:border-primary/30 transition-colors"
                >
                  <s.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-1.5 h-1.5 bg-brand-success rounded-full animate-pulse" />
              Trusted by 100+ businesses across Nepal
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="flex flex-col gap-4">
                <p className="text-sm font-semibold text-foreground">{title}</p>
                <ul className="flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50" />

        {/* Tech badges strip */}
        <div className="px-4 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <p className="text-sm font-semibold text-foreground">Built with</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {["Next.js 14", "Tailwind v4", "Supabase", "Vercel", "TypeScript"].map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2.5 py-1 rounded-md border border-dashed border-border text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50" />

        {/* Bottom bar */}
        <div className="px-4 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="text-foreground font-medium hover:text-primary transition-colors">
              TRx WEB
            </Link>
            . Made with ❤️ in Nepal.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-0.5"
            >
              Privacy <ArrowUpRight className="w-3 h-3" />
            </Link>
            <Link
              href="/terms"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-0.5"
            >
              Terms <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
