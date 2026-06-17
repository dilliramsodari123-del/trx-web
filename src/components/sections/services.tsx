"use client";

import Link from "next/link";
import {
  Building2, ShoppingCart, Briefcase, PenLine, GraduationCap,
  Rocket, UtensilsCrossed, School, CalendarDays, Star, ArrowRight, Shield,
} from "lucide-react";
import { SectionWrapper, SectionHeading } from "@/components/shared/section-wrapper";
import { SectionTopGlow } from "@/components/shared/section-top-glow";
import { SERVICES } from "@/lib/constants";
import { motion } from "@/components/shared/motion";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2, ShoppingCart, Briefcase, PenLine, GraduationCap,
  Rocket, UtensilsCrossed, School, CalendarDays, Star,
};

const PRODUCT_CARDS = [
  {
    name: "Himalayan Tea", price: "NPR 450",
    cardBg: "bg-rose-50 dark:bg-rose-950/40",
    imgBg:  "bg-rose-200 dark:bg-rose-900/40",
    border: "border-rose-200/80 dark:border-rose-800/30",
    price_color: "text-rose-600 dark:text-rose-400",
  },
  {
    name: "Pashmina Set", price: "NPR 1,299",
    cardBg: "bg-violet-50 dark:bg-violet-950/40",
    imgBg:  "bg-violet-200 dark:bg-violet-900/40",
    border: "border-violet-200/80 dark:border-violet-800/30",
    price_color: "text-violet-600 dark:text-violet-400",
  },
  {
    name: "Thangka Art", price: "NPR 2,999",
    cardBg: "bg-amber-50 dark:bg-amber-950/40",
    imgBg:  "bg-amber-200 dark:bg-amber-900/40",
    border: "border-amber-200/80 dark:border-amber-800/30",
    price_color: "text-amber-600 dark:text-amber-400",
  },
];

const DEMO_LINKS: Record<string, string> = {
  "Business Website":     "/demos/business-pro",
  "E-Commerce Website":   "/demos/ecommerce",
  "Portfolio Website":    "/demos/portfolio",
  "Online Course Website":"/demos/online-course",
  "Restaurant Website":   "/demos/hotel",
};

const CARD_BASE = "flex flex-col gap-4 p-6 rounded-2xl border border-border bg-card shadow-md transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 h-full relative overflow-hidden";
const SMALL_CARD_BASE = "flex flex-col gap-3 p-4 rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 h-full relative overflow-hidden";

export function ServicesSection() {
  const [bizService, ecomService, ...restServices] = SERVICES;

  return (
    <SectionWrapper id="services" className="border-t border-border relative">
      <SectionTopGlow />
      <div className="px-4 sm:px-8 py-16 md:py-24 max-w-7xl mx-auto">
        <SectionHeading
          badge="What We Build"
          title={
            <>
              Every Website Type,{" "}
              <span className="text-primary">in 48 Hours</span>
            </>
          }
          subtitle="From business sites to full e-commerce stores — we build exactly what your business needs, fast."
        />

        {/* Top two featured cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {/* Featured: Business Website */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group h-full"
          >
            <Link href={DEMO_LINKS[bizService.title] ?? "/contact"} className={cn(CARD_BASE, "min-h-[300px]")}>
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-blue-500 to-blue-600 rounded-t-2xl" />

              <div className="z-10 flex flex-col gap-3 pt-1">
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-lg bg-linear-to-br ${bizService.color} flex items-center justify-center shrink-0 shadow-md`}>
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[10px] font-bold bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded-full">⚡ Most Popular</span>
                </div>
                <h3 className="font-semibold text-foreground text-xl tracking-tight">{bizService.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{bizService.description}</p>
                <span className="text-primary text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  View Demo <ArrowRight className="w-3 h-3" />
                </span>
              </div>
              <div className="mt-auto pointer-events-none select-none">
                <div className="rounded-t-xl border border-border overflow-hidden bg-muted/30">
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-muted/60 border-b border-border">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    <div className="flex-1 ml-2 h-3 rounded bg-muted flex items-center px-1.5 gap-1">
                      <Shield className="w-2 h-2 text-brand-success" />
                      <span className="text-[8px] text-muted-foreground">yourshop.com.np</span>
                    </div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&auto=format&fit=crop&q=60"
                    alt="Business website preview"
                    className="w-full h-28 object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-primary/15 blur-3xl rounded-full translate-y-12 opacity-0 group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-700" />
            </Link>
          </motion.div>

          {/* Featured: E-Commerce Website */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.06, ease: "easeOut" }}
            className="group h-full"
          >
            <Link href={DEMO_LINKS[ecomService.title] ?? "/contact"} className={cn(CARD_BASE, "min-h-[300px]")}>
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-green-500 to-emerald-600 rounded-t-2xl" />

              <div className="z-10 flex flex-col gap-3 pt-1">
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-lg bg-linear-to-br ${ecomService.color} flex items-center justify-center shrink-0 shadow-md`}>
                    <ShoppingCart className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40 px-2 py-0.5 rounded-full">🛒 Full Store</span>
                </div>
                <h3 className="font-semibold text-foreground text-xl tracking-tight">{ecomService.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{ecomService.description}</p>
                <span className="text-primary text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  View Demo <ArrowRight className="w-3 h-3" />
                </span>
              </div>
              <div className="mt-auto grid grid-cols-3 gap-2 pointer-events-none select-none">
                {PRODUCT_CARDS.map((p) => (
                  <div
                    key={p.name}
                    className={`rounded-xl border ${p.border} ${p.cardBg} p-2.5`}
                  >
                    <div className={`h-10 rounded-lg ${p.imgBg} mb-2`} />
                    <p className="text-[9px] font-semibold text-foreground truncate">{p.name}</p>
                    <p className={`text-[9px] font-bold ${p.price_color}`}>{p.price}</p>
                  </div>
                ))}
              </div>
              <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-emerald-500/10 blur-3xl rounded-full translate-y-12 opacity-0 group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-700" />
            </Link>
          </motion.div>
        </div>

        {/* All remaining services in clean grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-4">
          {restServices.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: (i + 2) * 0.05, ease: "easeOut" }}
                className="group"
              >
                <Link
                  href={DEMO_LINKS[service.title] ?? "/contact"}
                  className={cn(SMALL_CARD_BASE, "min-h-[120px]")}
                >
                  <div className={`w-9 h-9 rounded-lg bg-linear-to-br ${service.color} flex items-center justify-center shrink-0 shadow-sm`}>
                    {Icon && <Icon className="w-[18px] h-[18px] text-white" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm leading-tight mb-1">{service.title}</h3>
                    <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">{service.description}</p>
                  </div>
                  <span className="text-primary text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
                    Get this <ArrowRight className="w-3 h-3" />
                  </span>
                  <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-primary/10 blur-2xl rounded-full translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-500" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Don&apos;t see your type? We build custom websites too
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
