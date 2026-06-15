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
      {/* Hero */}
      <section className="relative bg-slate-900 py-24 pt-32 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4">
          <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 rounded-full px-4 py-1.5 text-xs font-semibold mb-6">
            Our Work
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Websites We&apos;ve Built
          </h1>
          <p className="text-xl text-slate-400">
            Real websites. Real businesses. Real results. All delivered in 48 hours or less.
          </p>
        </div>
      </section>

      <PortfolioPreviewSection />
      <FinalCtaSection />
    </>
  );
}
