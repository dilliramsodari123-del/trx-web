import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinalCtaSection } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Case Studies — Real Results from Real Clients",
  description:
    "See how TRx WEB has helped Nepali businesses grow online. Before and after transformations with measurable results.",
};

const CASE_STUDIES = [
  {
    id: "1",
    title: "Shrestha Traders",
    category: "Business Website",
    challenge: "No online presence, losing customers to competitors with websites.",
    solution:
      "Built a professional 7-page business website with product catalogue, inquiry form, and WhatsApp integration.",
    result: "30% increase in inquiries within the first month.",
    beforeImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=300&fit=crop",
    afterImage:  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
    metrics: [
      { label: "Inquiries",  value: "+30%" },
      { label: "Delivery",   value: "48 h" },
      { label: "Cost",       value: "4,999" },
    ],
  },
  {
    id: "2",
    title: "Himalayan Cafe",
    category: "Restaurant Website",
    challenge: "Relying only on social media with no way to take online orders.",
    solution:
      "Created a full restaurant website with digital menu, online ordering system, and table reservation form.",
    result: "Online orders now account for 25% of total revenue.",
    beforeImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=300&fit=crop",
    afterImage:  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=300&fit=crop",
    metrics: [
      { label: "Revenue",  value: "+25%" },
      { label: "Delivery", value: "48 h" },
      { label: "Cost",     value: "9,999" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero — always dark */}
      <section className="relative bg-[#09090b] py-28 pt-36 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-75 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4">
          <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/30 text-primary rounded-full px-4 py-1.5 text-xs font-semibold mb-6">
            <span>✦</span>
            Case Studies
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
            Real Results, Real Businesses
          </h1>
          <p className="text-xl text-white/50 max-w-xl mx-auto">
            See how our websites have transformed businesses across Nepal.
          </p>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {CASE_STUDIES.map((cs, index) => (
            <div
              key={cs.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Text */}
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <span className="inline-block text-xs font-semibold bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full mb-5">
                  {cs.category}
                </span>
                <h2 className="text-3xl font-bold text-foreground mb-5 tracking-tight">
                  {cs.title}
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="rounded-xl border border-dashed border-border p-4 bg-secondary/20">
                    <h3 className="font-semibold text-destructive text-xs uppercase tracking-wide mb-1">
                      Challenge
                    </h3>
                    <p className="text-muted-foreground text-sm">{cs.challenge}</p>
                  </div>
                  <div className="rounded-xl border border-dashed border-border p-4 bg-secondary/20">
                    <h3 className="font-semibold text-primary text-xs uppercase tracking-wide mb-1">
                      Solution
                    </h3>
                    <p className="text-muted-foreground text-sm">{cs.solution}</p>
                  </div>
                  <div className="rounded-xl border border-dashed border-brand-success/30 p-4 bg-brand-success/5">
                    <h3 className="font-semibold text-brand-success text-xs uppercase tracking-wide mb-1">
                      Result
                    </h3>
                    <p className="text-foreground text-sm font-medium">{cs.result}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-7">
                  {cs.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-dashed border-border bg-secondary/30 p-3 text-center"
                    >
                      <TrendingUp className="w-3.5 h-3.5 text-brand-success mx-auto mb-1" />
                      <div className="text-xl font-bold text-foreground">{m.value}</div>
                      <div className="text-xs text-muted-foreground">{m.label}</div>
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

              {/* Images */}
              <div className={`grid grid-cols-2 gap-3 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-destructive uppercase tracking-wider">
                    Before
                  </p>
                  <div className="relative h-40 rounded-xl overflow-hidden border border-border">
                    <Image
                      src={cs.beforeImage}
                      alt={`${cs.title} before`}
                      fill
                      className="object-cover opacity-70 grayscale"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-brand-success uppercase tracking-wider">
                    After
                  </p>
                  <div className="relative h-40 rounded-xl overflow-hidden border border-primary/20 shadow-lg shadow-primary/10">
                    <Image
                      src={cs.afterImage}
                      alt={`${cs.title} after`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
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
