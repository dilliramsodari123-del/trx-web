import type { Metadata } from "next";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { FaqSection } from "@/components/sections/faq";
import { FinalCtaSection } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "How It Works — Website in 48 Hours Process",
  description:
    "Learn how TrX Web delivers professional websites in just 48 hours. Submit requirements, discuss on WhatsApp, build, and launch.",
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="relative bg-slate-900 py-24 pt-32 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4">
          <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 rounded-full px-4 py-1.5 text-xs font-semibold mb-6">
            The Process
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            How We Deliver in 48 Hours
          </h1>
          <p className="text-xl text-slate-400">
            Our battle-tested 4-step process ensures quality websites, every time, on time.
          </p>
        </div>
      </section>
      <HowItWorksSection />
      <WhyChooseUsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
