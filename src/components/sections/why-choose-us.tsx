"use client";

import { Check, X } from "lucide-react";
import { SectionWrapper, SectionHeading } from "@/components/shared/section-wrapper";
import { COMPARISON_TABLE } from "@/lib/constants";
import { motion } from "@/components/shared/motion";

export function WhyChooseUsSection() {
  return (
    <SectionWrapper className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why TrX Web"
          title="We vs. Traditional Agencies"
          subtitle="See why hundreds of Nepali businesses choose TrX Web over traditional expensive agencies."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl"
        >
          {/* Header */}
          <div className="grid grid-cols-3 bg-slate-900 text-white">
            <div className="p-5 font-semibold text-slate-400 text-sm">Feature</div>
            <div className="p-5 font-bold text-center border-l border-slate-700 text-sm">
              Traditional Agency
            </div>
            <div className="p-5 font-bold text-center border-l border-slate-700 text-blue-400 text-sm">
              TrX Web ⚡
            </div>
          </div>

          {/* Rows */}
          {COMPARISON_TABLE.features.map((feature, i) => (
            <div
              key={feature}
              className={`grid grid-cols-3 border-t border-slate-100 ${
                i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
              }`}
            >
              <div className="p-4 text-sm font-semibold text-slate-700">{feature}</div>
              <div className="p-4 border-l border-slate-100 flex items-center justify-center gap-2">
                <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span className="text-sm text-slate-500 text-center">
                  {COMPARISON_TABLE.traditional[i]}
                </span>
              </div>
              <div className="p-4 border-l border-blue-100 bg-blue-50/30 flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm font-semibold text-slate-800 text-center">
                  {COMPARISON_TABLE.trxweb[i]}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
