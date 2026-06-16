"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, WHATSAPP_NUMBER } from "@/lib/constants";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "@/components/shared/motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsMobileOpen(false), [pathname]);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hello TRx WEB! I'd like to get a website.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    const base = href.split("#")[0];
    return base !== "/" && pathname.startsWith(base);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-(--header-z-index) transition-all duration-300",
        "bg-background/80 backdrop-blur-[12px]",
        isScrolled
          ? "border-b border-dashed border-border shadow-[0_1px_0_0_var(--border)]"
          : "border-b border-dashed border-transparent"
      )}
      style={{ minHeight: "var(--header-height)" }}
    >
      {/* Max-width container with dashed side borders */}
      <div className="mx-auto w-full max-w-[1400px] border-dashed min-[1400px]:border-x border-border h-full">
        <nav className="flex h-[var(--header-height)] w-full items-center px-4 sm:px-8 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/logo.png"
              alt="TRx WEB"
              width={38}
              height={38}
              className="rounded-full"
              priority
            />
            <span className="font-bold text-lg text-foreground hidden sm:inline tracking-tight">
              TRx <span className="text-primary">WEB</span>
            </span>
          </Link>

          {/* Desktop nav — centered */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3.5 py-1.5 text-sm font-medium rounded-md transition-colors",
                  isActive(item.href)
                    ? "text-primary bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-md bg-accent"
                    style={{ zIndex: -1 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-1.5 text-xs font-medium text-brand-success mr-1">
              <span className="w-1.5 h-1.5 bg-brand-success rounded-full animate-pulse" />
              Live
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleWhatsApp}
              className="text-brand-success hover:text-brand-success hover:bg-green-50 dark:hover:bg-green-950/30 gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
            <ThemeToggle />
            <Button asChild size="sm" className="gap-1.5">
              <Link href="/contact">
                Get Website
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile: right side */}
          <div className="flex md:hidden items-center gap-2 ml-auto">
            <ThemeToggle />
            <button
              className="w-9 h-9 rounded-lg border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18, ease: "easeInOut" }}
            className="md:hidden border-t border-dashed border-border bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="max-w-[1400px] mx-auto px-4 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    "flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors",
                    isActive(item.href)
                      ? "bg-accent text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 grid grid-cols-2 gap-2 border-t border-dashed border-border mt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full gap-1.5"
                  onClick={() => {
                    handleWhatsApp();
                    setIsMobileOpen(false);
                  }}
                >
                  <MessageCircle className="w-4 h-4 text-brand-success" />
                  WhatsApp
                </Button>
                <Button asChild size="sm" className="w-full gap-1.5">
                  <Link href="/contact" onClick={() => setIsMobileOpen(false)}>
                    Get Website
                    <ArrowRight className="w-3.5 h-3.5" />
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
