"use client";

import Link from "next/link";
import { ClipboardList, MessageCircle, Code2, Rocket, ArrowRight } from "lucide-react";
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

export function HowItWorksSection() {
  return (
    <SectionWrapper id="how-it-works" className="border-t border-border bg-secondary/30 relative">
      <SectionTopGlow />
      <div className="px-4 sm:px-8 py-16 md:py-24 max-w-7xl mx-auto">
        <SectionHeading
          badge="The Process"
          title="From Order to Live Website in 48 Hours"
          subtitle="Our streamlined 4-step process ensures on-time delivery, every time."
        />

        <div className="relative">
          {/* Vertical center line — desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {HOW_IT_WORKS_STEPS.map((step, i) => {
              const Icon = iconMap[step.icon];
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                  className={cn(
                    "lg:grid lg:grid-cols-2 lg:gap-16 items-center",
                    i > 0 && "lg:mt-8"
                  )}
                >
                  {/* Card */}
                  <div
                    className={cn(
                      "relative rounded-2xl p-6 border border-border",
                      "bg-linear-to-b from-secondary/40 to-secondary/10",
                      "shadow-[0px_2px_0px_0px_rgba(255,255,255,0.05)_inset]",
                      "hover:border-primary/30 transition-all duration-300",
                      !isLeft && "lg:order-2"
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                        {Icon && <Icon className="w-5 h-5 text-primary-foreground" />}
                      </div>
                      <div className="flex-1">
                        <span className="text-[10px] font-semibold text-primary uppercase tracking-widest mb-1 block">
                          {STEP_TIMING[i]}
                        </span>
                        <h3 className="font-semibold text-foreground text-base mb-2">{step.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center number — desktop */}
                  <div
                    className={cn(
                      "hidden lg:flex items-center justify-center",
                      isLeft ? "lg:order-2" : "lg:order-1"
                    )}
                  >
                    <div className="relative flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">{i + 1}</span>
                      </div>
                      {/* Connector dot on the line */}
                      <div className="absolute w-3 h-3 rounded-full bg-primary shadow-md shadow-primary/50" />
                    </div>
                  </div>

                  {/* Mobile number */}
                  <div className="lg:hidden flex items-center gap-2 mt-3 mb-1">
                    <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">{i + 1}</span>
                    </div>
                    {i < HOW_IT_WORKS_STEPS.length - 1 && (
                      <div className="flex-1 h-px bg-linear-to-r from-primary/30 to-transparent" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <Button asChild size="lg" className="gap-2 shadow-md shadow-primary/25">
            <Link href="/contact">
              Start My Project Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
