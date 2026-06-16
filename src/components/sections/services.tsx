"use client";

import Link from "next/link";
import {
  Building2, ShoppingCart, Briefcase, PenLine, GraduationCap,
  Rocket, UtensilsCrossed, School, CalendarDays, Star, ArrowRight,
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

const POPULAR = new Set(["Business Website", "E-Commerce Website"]);

export function ServicesSection() {
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

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-4 mt-8">
          {/* Featured cards - Business Website */}
          {SERVICES.slice(0, 2).map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.06, ease: "easeOut" }}
                className="col-span-12 md:col-span-6 group relative"
              >
                <Link
                  href="/contact"
                  className={cn(
                    "flex flex-col gap-4 p-6 md:p-8 rounded-2xl border-2 border-secondary/40",
                    "bg-linear-to-br from-secondary/10 to-secondary/5",
                    "shadow-xl",
                    "hover:border-primary/40 hover:shadow-2xl",
                    "transition-all duration-300",
                    "min-h-[300px]",
                    "relative overflow-hidden"
                  )}
                >
                  {/* Bottom radial glow on hover */}
                  <div className="absolute inset-0 -z-10 bg-radial from-primary/50 to-primary/0 rounded-[50%] opacity-0 group-hover:opacity-20 dark:group-hover:opacity-100 group-hover:translate-y-8 transition-all duration-300 pointer-events-none" />
                  
                  <div className={`w-14 h-14 rounded-lg bg-linear-to-br ${service.color} flex items-center justify-center shrink-0`}>
                    {Icon && <Icon className="w-7 h-7 text-white" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="text-primary text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Get this <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}

          {/* Smaller cards - rest of services */}
          {SERVICES.slice(2).map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: (i + 2) * 0.06, ease: "easeOut" }}
                className="col-span-12 md:col-span-6 lg:col-span-4 group relative"
              >
                <Link
                  href="/contact"
                  className={cn(
                    "flex flex-col gap-3 p-4 md:p-6 rounded-xl border-2 border-secondary/40",
                    "bg-linear-to-br from-secondary/10 to-secondary/5",
                    "shadow-lg",
                    "hover:border-primary/40 hover:shadow-xl",
                    "transition-all duration-300",
                    "min-h-[200px]",
                    "relative overflow-hidden"
                  )}
                >
                  {/* Bottom radial glow on hover */}
                  <div className="absolute inset-0 -z-10 bg-radial from-primary/50 to-primary/0 rounded-[50%] opacity-0 group-hover:opacity-20 dark:group-hover:opacity-100 group-hover:translate-y-8 transition-all duration-300 pointer-events-none" />
                  
                  <div className={`w-10 h-10 rounded-lg bg-linear-to-br ${service.color} flex items-center justify-center shrink-0`}>
                    {Icon && <Icon className="w-5 h-5 text-white" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">
                      {service.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                  <span className="text-primary text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
                    Get this <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
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
