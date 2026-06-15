"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Zap, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, WHATSAPP_NUMBER } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "@/components/shared/motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hello TrX Web! I'd like to get a website.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-extrabold text-xl text-slate-900">
              TrX<span className="text-blue-600">Web</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleWhatsApp}
              className="text-green-600 hover:text-green-700 hover:bg-green-50"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
            <Button asChild size="sm" variant="gradient">
              <Link href="/contact">Get My Website</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? (
              <X className="w-5 h-5 text-slate-700" />
            ) : (
              <Menu className="w-5 h-5 text-slate-700" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-slate-200 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 space-y-2 border-t border-slate-100 mt-3">
                <Button
                  variant="whatsapp"
                  className="w-full"
                  onClick={() => {
                    handleWhatsApp();
                    setIsMobileOpen(false);
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </Button>
                <Button asChild variant="gradient" className="w-full">
                  <Link href="/contact" onClick={() => setIsMobileOpen(false)}>
                    Get My Website
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
