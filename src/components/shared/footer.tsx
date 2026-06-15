import Link from "next/link";
import { Zap, MessageCircle, Share2 } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const footerLinks = {
  Services: [
    { label: "Business Website", href: "/#services" },
    { label: "E-Commerce", href: "/#services" },
    { label: "Portfolio", href: "/#services" },
    { label: "Restaurant Website", href: "/#services" },
    { label: "Gift Website", href: "/#gift" },
  ],
  Company: [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Live Demos", href: "/demos" },
    { label: "Blog", href: "/blog" },
  ],
  Support: [
    { label: "FAQs", href: "/#faq" },
    { label: "Contact", href: "/contact" },
    { label: "Track Project", href: "/track" },
    { label: "Case Studies", href: "/case-studies" },
  ],
};

const socialLinks = [
  {
    icon: MessageCircle,
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    label: "WhatsApp",
    color: "hover:text-green-500",
  },
  {
    icon: Share2,
    href: "https://facebook.com/trxweb",
    label: "Facebook",
    color: "hover:text-blue-500",
  },
  {
    icon: Share2,
    href: "https://instagram.com/trxweb",
    label: "Instagram",
    color: "hover:text-pink-500",
  },
  {
    icon: Share2,
    href: "https://linkedin.com/company/trxweb",
    label: "LinkedIn",
    color: "hover:text-blue-600",
  },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold text-xl text-white">
                TrX<span className="text-blue-400">Web</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Nepal&apos;s fastest website delivery company. Get your professional website live in just 48 hours, starting from NPR 4,999.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 transition-colors ${social.color}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white text-sm mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} TrX Web. All rights reserved. Made with ❤️ in Nepal.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
