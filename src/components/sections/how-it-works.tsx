"use client";

import {
  ClipboardList, MessageCircle, Code2, Rocket,
} from "lucide-react";
import { SectionWrapper, SectionHeading } from "@/components/shared/section-wrapper";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { motion } from "@/components/shared/motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ClipboardList, MessageCircle, Code2, Rocket,
};

export function HowItWorksSection() {
  return (
    <SectionWrapper className="py-24 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The Process"
          title="From Order to Live Website in 48 Hours"
          subtitle="Our streamlined 4-step process ensures your website is delivered on time, every time."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-600 to-violet-600 z-0" />

          {HOW_IT_WORKS_STEPS.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative z-10 text-center"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20 relative">
                    {Icon && <Icon className="w-7 h-7 text-white" />}
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="gradient">
            <Link href="/contact">Start My Project Now</Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
