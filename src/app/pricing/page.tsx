import type { Metadata } from "next";
import Link from "next/link";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PRICING_PLANS } from "@/lib/constants";
import { FaqSection } from "@/components/sections/faq";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";

export const metadata: Metadata = {
  title: "Pricing — Affordable Websites Starting NPR 4,999",
  description:
    "Transparent pricing with no hidden fees. Choose from Starter, Business, E-Commerce, or Enterprise plans.",
};

export default function PricingPage() {
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
            <Zap className="w-3.5 h-3.5" />
            Transparent Pricing
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Simple, Honest Pricing
          </h1>
          <p className="text-xl text-slate-400">
            No hidden fees. No surprises. Pay once, get your website in 48 hours.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl border p-8 flex flex-col ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-blue-600 to-violet-700 text-white border-transparent shadow-2xl shadow-blue-500/30 scale-105"
                    : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-amber-400 text-amber-900 border-0 font-bold px-3">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <div className="mb-6">
                  <h3
                    className={`font-extrabold text-xl mb-1 ${
                      plan.highlighted ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mb-4 ${
                      plan.highlighted ? "text-blue-100" : "text-slate-500"
                    }`}
                  >
                    {plan.description}
                  </p>
                  {plan.price > 0 ? (
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`text-sm font-medium ${
                          plan.highlighted ? "text-blue-100" : "text-slate-500"
                        }`}
                      >
                        NPR
                      </span>
                      <span
                        className={`text-5xl font-extrabold ${
                          plan.highlighted ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {plan.price.toLocaleString()}
                      </span>
                    </div>
                  ) : (
                    <span
                      className={`text-4xl font-extrabold ${
                        plan.highlighted ? "text-white" : "text-slate-900"
                      }`}
                    >
                      Custom
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          plan.highlighted ? "text-blue-200" : "text-green-500"
                        }`}
                      />
                      <span
                        className={
                          plan.highlighted ? "text-blue-50" : "text-slate-600"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {plan.price > 0 ? (
                  <Button
                    asChild
                    size="lg"
                    className={
                      plan.highlighted
                        ? "bg-white text-blue-700 hover:bg-blue-50 font-bold"
                        : "w-full"
                    }
                    variant={plan.highlighted ? "outline" : "gradient"}
                  >
                    <Link href={`/contact?plan=${plan.name}`}>
                      {plan.cta}
                    </Link>
                  </Button>
                ) : (
                  <WhatsAppButton
                    message="Hello TrX Web! I'm interested in an Enterprise custom website. Can we discuss?"
                    label="Contact Us"
                    size="lg"
                    className="w-full bg-slate-900 hover:bg-slate-800"
                  />
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-slate-400 text-sm mt-8">
            All prices in NPR (Nepali Rupees). Hosting, domain, and SSL included in first year.
          </p>
        </div>
      </section>

      {/* Pricing calculator teaser */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
            Not Sure Which Plan Is Right?
          </h2>
          <p className="text-slate-500 mb-8">
            Chat with us on WhatsApp and we&apos;ll recommend the perfect plan for your business within minutes.
          </p>
          <WhatsAppButton
            message="Hello TrX Web! I need help choosing the right plan for my website. Can you help?"
            label="Get a Free Consultation"
            size="xl"
          />
        </div>
      </section>

      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
