import type { Metadata } from "next";
import Link from "next/link";
import { Check, Zap, MessageCircle } from "lucide-react";
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
      {/* Hero — always dark */}
      <section className="relative bg-[#09090b] py-28 pt-36 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-brand-violet/15 blur-3xl" />
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
            <Zap className="w-3.5 h-3.5" />
            Transparent Pricing
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
            Simple, Honest Pricing
          </h1>
          <p className="text-xl text-white/50 max-w-xl mx-auto">
            No hidden fees. No surprises. Pay once, get your website in 48 hours.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-7 flex flex-col transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-linear-to-b from-primary to-brand-violet text-white border-transparent shadow-2xl shadow-primary/25 scale-[1.03]"
                    : "bg-card border-border hover:border-primary/30 hover:shadow-lg"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-amber-400 text-amber-900 border-0 font-bold px-3 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <div className="mb-6">
                  <h3
                    className={`font-bold text-xl mb-1 ${
                      plan.highlighted ? "text-white" : "text-foreground"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mb-4 ${
                      plan.highlighted ? "text-white/70" : "text-muted-foreground"
                    }`}
                  >
                    {plan.description}
                  </p>
                  {plan.price > 0 ? (
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`text-sm font-medium ${
                          plan.highlighted ? "text-white/70" : "text-muted-foreground"
                        }`}
                      >
                        NPR
                      </span>
                      <span
                        className={`text-4xl font-bold ${
                          plan.highlighted ? "text-white" : "text-foreground"
                        }`}
                      >
                        {plan.price.toLocaleString()}
                      </span>
                    </div>
                  ) : (
                    <span
                      className={`text-3xl font-bold ${
                        plan.highlighted ? "text-white" : "text-foreground"
                      }`}
                    >
                      Custom
                    </span>
                  )}
                </div>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          plan.highlighted ? "text-white/80" : "text-brand-success"
                        }`}
                      />
                      <span
                        className={
                          plan.highlighted ? "text-white/85" : "text-muted-foreground"
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
                    className={`w-full font-semibold ${
                      plan.highlighted
                        ? "bg-white text-primary hover:bg-white/90"
                        : ""
                    }`}
                    variant={plan.highlighted ? "outline" : "gradient"}
                  >
                    <Link href={`/contact?plan=${plan.name}`}>
                      {plan.cta}
                    </Link>
                  </Button>
                ) : (
                  <WhatsAppButton
                    message="Hello TRx WEB! I'm interested in an Enterprise custom website. Can we discuss?"
                    label="Contact Us"
                    size="lg"
                    className="w-full"
                  />
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-sm mt-10 border-t border-dashed border-border pt-6">
            All prices in NPR (Nepali Rupees). Hosting, domain, and SSL included in first year.
          </p>
        </div>
      </section>

      {/* Consultation banner */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-12 h-12 rounded-full bg-brand-success/10 flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-6 h-6 text-brand-success" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-3 tracking-tight">
            Not sure which plan is right?
          </h2>
          <p className="text-muted-foreground mb-8">
            Chat with us on WhatsApp — we&apos;ll recommend the perfect plan for your business in minutes.
          </p>
          <WhatsAppButton
            message="Hello TRx WEB! I need help choosing the right plan for my website. Can you help?"
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
