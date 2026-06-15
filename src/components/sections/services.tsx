"use client";

import Link from "next/link";
import {
  Building2, ShoppingCart, Briefcase, PenLine, GraduationCap,
  Rocket, UtensilsCrossed, School, CalendarDays, Star, ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper, SectionHeading } from "@/components/shared/section-wrapper";
import { SERVICES } from "@/lib/constants";
import { motion } from "@/components/shared/motion";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2, ShoppingCart, Briefcase, PenLine, GraduationCap,
  Rocket, UtensilsCrossed, School, CalendarDays, Star,
};

export function ServicesSection() {
  return (
    <SectionWrapper id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="What We Build"
          title="Every Type of Website, Delivered in 48 Hours"
          subtitle="From business websites to full e-commerce stores — we specialise in building exactly what your business needs, fast."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <Card
                  hover
                  className="h-full group cursor-pointer border-slate-100"
                >
                  <CardContent className="p-5 flex flex-col h-full">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      {Icon && <Icon className="w-5 h-5 text-white" />}
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm mb-2 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed flex-1">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
          >
            Don&apos;t see your type? We build custom websites too
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
