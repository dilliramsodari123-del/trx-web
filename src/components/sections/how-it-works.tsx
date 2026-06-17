"use client";

import Link from "next/link";
import { ClipboardList, MessageCircle, Code2, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionWrapper, SectionHeading } from "@/components/shared/section-wrapper";
import { SectionTopGlow } from "@/components/shared/section-top-glow";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { motion } from "@/components/shared/motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ClipboardList, MessageCircle, Code2, Rocket,
};

const STEP_TIMING = ["Minute 0", "Hour 1", "Hours 2–47", "Hour 48"];
const STEP_COLORS = [
  "from-blue-500 to-blue-600",
  "from-emerald-500 to-emerald-600",
  "from-violet-500 to-violet-600",
  "from-primary to-rose-600",
];

const STEP_HIGHLIGHTS = [
  ["No meetings required", "Simple form", "Instant confirmation"],
  ["Within 1 hour", "WhatsApp only", "Direct team access"],
  ["Next.js + Tailwind", "Mobile-first", "SEO optimized"],
  ["Live URL delivered", "Admin access", "1-month support"],
];

export function HowItWorksSection() {
  return (
    <SectionWrapper id="how-it-works" className="border-t border-border bg-secondary/20 relative">
      <SectionTopGlow />
      <div className="px-4 sm:px-8 py-16 md:py-24 max-w-7xl mx-auto">
        <SectionHeading
          badge="The Process"
          title="From Order to Live Website in 48 Hours"
          subtitle="Our streamlined 4-step process ensures on-time delivery, every time."
        />

        {/* Timeline grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {HOW_IT_WORKS_STEPS.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
                className="relative group"
              >
                {/* Connector line (desktop) */}
                {i < HOW_IT_WORKS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-4 h-px bg-linear-to-r from-border to-transparent z-10" />
                )}

                <div className={cn(
                  "flex flex-col gap-4 p-5 rounded-2xl border border-border h-full",
                  "bg-linear-to-b from-card to-card/80",
                  "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
                  "transition-all duration-300"
                )}>
                  {/* Step number + timing */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${STEP_COLORS[i]} flex items-center justify-center shrink-0 shadow-md`}>
                      {Icon && <Icon className="w-5 h-5 text-white" />}
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] font-bold text-primary/80 uppercase tracking-widest block">
                        {STEP_TIMING[i]}
                      </span>
                      <span className="text-2xl font-bold text-border/60 leading-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-base mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>

                  {/* Highlights */}
                  <ul className="flex flex-col gap-1.5">
                    {STEP_HIGHLIGHTS[i].map((h) => (
                      <li key={h} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Delivery guarantee banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-center sm:text-left">
            <p className="font-bold text-foreground text-lg">⚡ 48-Hour Delivery Guaranteed</p>
            <p className="text-sm text-muted-foreground mt-1">
              If we miss the deadline, you get a full refund. No questions asked.
            </p>
          </div>
          <Button asChild size="lg" className="gap-2 shadow-md shadow-primary/25 shrink-0">
            <Link href="/contact">
              Start My Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
