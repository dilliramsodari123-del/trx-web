import type { Metadata } from "next";
import { PortfolioPreviewSection } from "@/components/sections/portfolio-preview";
import { FinalCtaSection } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Portfolio — Real Websites Built for Nepali Businesses",
  description:
    "Browse our portfolio of professional websites built for businesses across Nepal. Filter by Business, Ecommerce, Portfolio, Restaurant, and more.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero — always dark */}
      <section className="relative bg-[#09090b] py-20 pt-28 sm:py-28 sm:pt-36 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-70 h-45 sm:w-125 sm:h-75 rounded-full bg-primary/20 blur-3xl" />
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
          <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/30 text-primary rounded-full px-4 py-1.5 text-xs font-semibold mb-6">
            <span>✦</span>
            Our Work
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 sm:mb-6 leading-tight">
            Websites We&apos;ve Built
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/50 max-w-xl mx-auto">
            Real websites. Real businesses. Real results. All delivered in 48 hours or less.
          </p>
        </div>
      </section>

      <PortfolioPreviewSection />
      <FinalCtaSection />
    </>
  );
}
