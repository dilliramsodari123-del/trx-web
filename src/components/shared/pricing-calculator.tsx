"use client";

import { useState } from "react";
import { motion, useSpring, useTransform, AnimatePresence } from "@/components/shared/motion";
import { Check, MessageCircle, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRICING_PLANS, CALCULATOR_ADDONS, WHATSAPP_NUMBER } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface PricingCalculatorProps {
  className?: string;
}

const CALCULATOR_PLANS = PRICING_PLANS.filter((p) => p.price > 0);

export function PricingCalculator({ className }: PricingCalculatorProps) {
  const [selectedPlan, setSelectedPlan] = useState(CALCULATOR_PLANS[1]);
  const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set());

  const addonTotal = CALCULATOR_ADDONS.filter((a) => selectedAddons.has(a.id)).reduce(
    (sum, a) => sum + a.price,
    0
  );
  const total = selectedPlan.price + addonTotal;

  const spring = useSpring(total, { stiffness: 100, damping: 20 });
  const displayTotal = useTransform(spring, (v) => Math.round(v).toLocaleString());

  // Update spring target whenever total changes
  useState(() => { spring.set(total); });
  spring.set(total);

  function toggleAddon(id: string) {
    setSelectedAddons((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function handleOrder() {
    const addonList = CALCULATOR_ADDONS.filter((a) => selectedAddons.has(a.id))
      .map((a) => `• ${a.label}`)
      .join("\n");
    const msg = `Hello TRx WEB! I've used your price calculator and I'm interested in:\n\n*Plan:* ${selectedPlan.name} — NPR ${selectedPlan.price.toLocaleString()}\n${addonList ? `\n*Add-ons:*\n${addonList}\n` : ""}\n*Total estimate:* NPR ${total.toLocaleString()}\n\nCan we discuss further?`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-5 gap-8", className)}>
      {/* Left panel */}
      <div className="lg:col-span-3 space-y-6">
        {/* Plan selection */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3">
            1. Choose your website type
          </h3>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {CALCULATOR_PLANS.map((plan) => (
              <button
                key={plan.name}
                onClick={() => setSelectedPlan(plan)}
                className={cn(
                  "relative rounded-2xl border-2 p-4 text-left transition-all duration-200 hover:-translate-y-0.5",
                  selectedPlan.name === plan.name
                    ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                    : "border-border bg-card hover:border-primary/40"
                )}
              >
                {plan.highlighted && (
                  <span className="absolute -top-2 right-3 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full">
                    Popular
                  </span>
                )}
                <p className="font-bold text-foreground font-display">{plan.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{plan.description}</p>
                <p className="mt-2 text-lg font-bold text-primary font-display">
                  NPR {plan.price.toLocaleString()}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Addon selection */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3">
            2. Add optional features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {CALCULATOR_ADDONS.map((addon) => {
              const selected = selectedAddons.has(addon.id);
              return (
                <button
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={cn(
                    "flex items-center justify-between rounded-xl border p-3 text-sm transition-all duration-200",
                    selected
                      ? "border-primary bg-primary/5 text-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-primary/40"
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={cn(
                        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all",
                        selected ? "border-primary bg-primary" : "border-muted-foreground/40"
                      )}
                    >
                      {selected && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                    </span>
                    <span className="font-medium">{addon.label}</span>
                  </div>
                  <span className={cn("font-semibold", selected ? "text-primary" : "text-muted-foreground")}>
                    +{addon.price.toLocaleString()}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right summary panel */}
      <div className="lg:col-span-2">
        <div className="lg:sticky lg:top-24 rounded-3xl border border-border bg-card shadow-xl shadow-primary/5 overflow-hidden">
          {/* Top accent */}
          <div className="h-1 bg-linear-to-r from-primary to-brand-violet" />

          <div className="p-6 space-y-4">
            <h3 className="font-bold text-foreground font-display text-lg">Your Estimate</h3>

            {/* Base plan */}
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{selectedPlan.name} Website</span>
              <span className="font-semibold text-foreground">NPR {selectedPlan.price.toLocaleString()}</span>
            </div>

            {/* Selected addons */}
            <AnimatePresence>
              {CALCULATOR_ADDONS.filter((a) => selectedAddons.has(a.id)).map((addon) => (
                <motion.div
                  key={addon.id}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex justify-between text-sm overflow-hidden"
                >
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Plus className="w-3 h-3 text-primary" />
                    {addon.label}
                  </span>
                  <span className="text-foreground/80">+{addon.price.toLocaleString()}</span>
                </motion.div>
              ))}
            </AnimatePresence>

            <div className="border-t border-dashed border-border pt-4">
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-muted-foreground">Total estimate</span>
                <div className="text-right">
                  <span className="text-xs text-muted-foreground">NPR </span>
                  <motion.span className="text-3xl font-bold font-display text-primary">
                    {displayTotal}
                  </motion.span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Delivered in 48 hours · All prices in NPR</p>
            </div>

            <Button
              size="lg"
              className="w-full bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/25 hover:-translate-y-0.5"
              onClick={handleOrder}
            >
              <MessageCircle className="w-4 h-4" />
              Get This for NPR {total.toLocaleString()} →
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              Response within 1 hour on WhatsApp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
