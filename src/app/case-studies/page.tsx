import type { Metadata } from "next";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FinalCtaSection } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Case Studies — Real Results from Real Clients",
  description:
    "See how TrX Web has helped Nepali businesses grow online. Before and after transformations with measurable results.",
};

const CASE_STUDIES = [
  {
    id: "1",
    title: "Shrestha Traders",
    category: "Business Website",
    challenge:
      "No online presence, losing customers to competitors with websites.",
    solution:
      "Built a professional 7-page business website with product catalogue, inquiry form, and WhatsApp integration.",
    result: "30% increase in inquiries within the first month.",
    beforeImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=300&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
    metrics: [
      { label: "Inquiries +", value: "30%" },
      { label: "Delivery", value: "48h" },
      { label: "Cost", value: "₹4,999" },
    ],
  },
  {
    id: "2",
    title: "Himalayan Cafe",
    category: "Restaurant Website",
    challenge:
      "Relying only on social media with no way to take online orders.",
    solution:
      "Created a full restaurant website with digital menu, online ordering system, and table reservation form.",
    result: "Online orders now account for 25% of total revenue.",
    beforeImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=300&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=300&fit=crop",
    metrics: [
      { label: "Online Revenue", value: "25%" },
      { label: "Delivery", value: "48h" },
      { label: "Cost", value: "₹9,999" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative bg-slate-900 py-24 pt-32 text-center overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Real Results, Real Businesses
          </h1>
          <p className="text-xl text-slate-400">
            See how our websites have transformed businesses across Nepal.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {CASE_STUDIES.map((cs, index) => (
            <div
              key={cs.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <span className="inline-block text-xs font-bold bg-blue-100 text-blue-700 px-3 py-1 rounded-full mb-4">
                  {cs.category}
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">{cs.title}</h2>
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-bold text-red-600 text-sm mb-1">Challenge</h3>
                    <p className="text-slate-600 text-sm">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-600 text-sm mb-1">Solution</h3>
                    <p className="text-slate-600 text-sm">{cs.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-green-600 text-sm mb-1">Result</h3>
                    <p className="text-slate-600 text-sm font-medium">{cs.result}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {cs.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100"
                    >
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <TrendingUp className="w-3.5 h-3.5 text-green-500" />
                      </div>
                      <div className="text-xl font-extrabold text-slate-900">{m.value}</div>
                      <div className="text-xs text-slate-500">{m.label}</div>
                    </div>
                  ))}
                </div>
                <Button asChild variant="gradient" size="lg">
                  <Link href="/contact">
                    Get Similar Results
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <div
                className={`grid grid-cols-2 gap-3 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
              >
                <div className="space-y-2">
                  <p className="text-xs font-bold text-red-500 uppercase tracking-wider">Before</p>
                  <div
                    className="h-40 rounded-xl bg-cover bg-center border border-slate-200"
                    style={{ backgroundImage: `url(${cs.beforeImage})` }}
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-bold text-green-500 uppercase tracking-wider">After</p>
                  <div
                    className="h-40 rounded-xl bg-cover bg-center border border-blue-200 shadow-lg shadow-blue-500/10"
                    style={{ backgroundImage: `url(${cs.afterImage})` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCtaSection />
    </>
  );
}
