"use client";

import { Check, X, Zap, Clock, Smile, Trophy } from "lucide-react";
import { SectionWrapper, SectionHeading, DashedContainer } from "@/components/shared/section-wrapper";
import { SectionTopGlow } from "@/components/shared/section-top-glow";
import { COMPARISON_TABLE } from "@/lib/constants";
import { motion } from "@/components/shared/motion";

const STAT_CALLOUTS = [
  { icon: Clock, value: "10×",  label: "Faster than agencies",    color: "text-primary"      },
  { icon: Zap,   value: "80%",  label: "Cheaper on average",      color: "text-brand-violet" },
  { icon: Smile, value: "100%", label: "Satisfaction guaranteed", color: "text-brand-success"},
  { icon: Trophy,value: "48h",  label: "Guaranteed delivery",     color: "text-brand-hot"    },
];

export function WhyChooseUsSection() {
  return (
    <SectionWrapper id="why-us" className="py-24 bg-background relative">
      <SectionTopGlow />
      <DashedContainer>
        <div className="py-2 px-4 sm:px-8">
          <SectionHeading
            badge="Why TRx WEB"
            title="We vs. Traditional Agencies"
            subtitle="See why hundreds of Nepali businesses choose TRx WEB over traditional expensive agencies."
          />

          {/* Stat callouts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
            {STAT_CALLOUTS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 22, delay: i * 0.08 }}
                className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-card shadow-sm p-6 text-center"
              >
                <s.icon className={`w-5 h-5 ${s.color} mb-1 opacity-80`} />
                <p className={`text-3xl font-bold tracking-tight ${s.color}`}>{s.value}</p>
                <p className="text-xs text-muted-foreground leading-tight">{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Comparison table */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            className="overflow-hidden rounded-2xl border border-border"
          >
            {/* Table header */}
            <div className="grid grid-cols-3 bg-linear-to-r from-primary to-brand-violet text-white">
              <div className="p-4 font-medium text-white/60 text-sm">Feature</div>
              <div className="p-4 font-semibold text-center border-l border-white/15 text-sm">
                Traditional Agency
              </div>
              <div className="p-4 font-bold text-center border-l border-white/15 text-sm bg-white/10">
                ⚡ TRx WEB
              </div>
            </div>

            {/* Rows */}
            {COMPARISON_TABLE.features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={`grid grid-cols-3 border-t border-dashed border-border ${
                  i % 2 === 0 ? "bg-background" : "bg-secondary/20"
                }`}
              >
                <div className="p-4 text-sm font-semibold text-foreground border-r border-dashed border-border">
                  {feature}
                </div>
                <div className="p-4 border-r border-dashed border-border flex items-center justify-center gap-2">
                  <X className="w-4 h-4 text-destructive shrink-0" />
                  <span className="text-xs text-muted-foreground text-center">
                    {COMPARISON_TABLE.traditional[i]}
                  </span>
                </div>
                <div className="p-4 bg-primary/5 flex items-center justify-center gap-2">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 400, damping: 15, delay: i * 0.04 + 0.1 }}
                  >
                    <Check className="w-4 h-4 text-brand-success shrink-0" />
                  </motion.span>
                  <span className="text-xs font-semibold text-foreground text-center">
                    {COMPARISON_TABLE.trxweb[i]}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </DashedContainer>
    </SectionWrapper>
  );
}
