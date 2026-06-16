import type { Metadata } from "next";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { FaqSection } from "@/components/sections/faq";
import { FinalCtaSection } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "How It Works — Website in 48 Hours Process",
  description:
    "Learn how TRx WEB delivers professional websites in just 48 hours. Submit requirements, discuss on WhatsApp, build, and launch.",
};

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero — always dark */}
      <section className="relative bg-[#09090b] py-28 pt-36 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-75 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-brand-violet/15 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>
        <div className="relative max-w-3xl mx-auto px-4">
          <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary rounded-full px-4 py-1.5 text-xs font-semibold mb-6">
            <span>✦</span>
            The Process
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
            How We Deliver in 48 Hours
          </h1>
          <p className="text-xl text-white/50 max-w-xl mx-auto">
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
