"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "@/components/shared/motion";
import { Plus, MessageCircle } from "lucide-react";
import { SectionTopGlow } from "@/components/shared/section-top-glow";
import { cn } from "@/lib/utils";
import { FAQ_ITEMS } from "@/lib/constants";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function FaqSection() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello TRx WEB! I have a question about your services."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section id="faq" className="relative overflow-hidden py-24">
      <SectionTopGlow />
      {/* Glow blobs */}
      <div className="bg-primary/15 absolute top-1/2 -right-20 z-[-1] h-64 w-64 rounded-full opacity-80 blur-3xl select-none" />
      <div className="bg-primary/15 absolute top-1/2 -left-20 z-[-1] h-64 w-64 rounded-full opacity-80 blur-3xl select-none" />

      <div className="container mx-auto max-w-2xl px-4">
        {/* Header */}
        <div className="flex justify-center mb-4">
          <div className="border-primary/40 text-primary inline-flex items-center gap-2 rounded-full border px-3 py-1">
            <span>✶</span>
            <span className="text-sm uppercase tracking-wide">FAQs</span>
          </div>
        </div>

        <h2 className="mx-auto mt-6 max-w-xl text-center text-4xl font-semibold tracking-tight md:text-[54px] md:leading-[60px] mb-12">
          Questions?{" "}
          <span className="from-foreground via-primary to-foreground bg-linear-to-r bg-clip-text text-transparent">
            We&apos;ve got answers
          </span>
        </h2>

        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {FAQ_ITEMS.map((faq, faqIndex) => (
            <div
              key={faq.question}
              onClick={() =>
                setSelectedIndex(selectedIndex === faqIndex ? -1 : faqIndex)
              }
              className="from-secondary/40 to-secondary/10 cursor-pointer rounded-2xl border border-white/10 bg-linear-to-b p-6 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.06)_inset] transition-all duration-200 hover:border-primary/20"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="m-0 font-medium text-foreground">
                  {faq.question}
                </h3>
                <Plus
                  size={26}
                  className={cn(
                    "text-primary flex-shrink-0 transition duration-300",
                    selectedIndex === faqIndex && "rotate-45"
                  )}
                />
              </div>

              <AnimatePresence>
                {selectedIndex === faqIndex && (
                  <motion.div
                    initial={{ height: 0, marginTop: 0 }}
                    animate={{ height: "auto", marginTop: 16 }}
                    exit={{ height: 0, marginTop: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* WhatsApp card */}
        <div className="mt-8 from-secondary/40 to-secondary/10 rounded-2xl border border-white/10 bg-linear-to-b p-6 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.06)_inset]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-green-500/15 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">
                Still have questions?
              </p>
              <p className="text-xs text-muted-foreground">
                We reply in under 1 hour
              </p>
            </div>
          </div>
          <Button
            variant="whatsapp"
            size="default"
            className="w-full"
            onClick={handleWhatsApp}
          >
            <MessageCircle className="w-4 h-4" />
            Ask on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
