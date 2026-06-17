import type { Metadata } from "next";
import { OrderFormSection } from "@/components/sections/order-form";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { MessageCircle, Clock, Shield, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Order Your Website — Get Started in 48 Hours",
  description:
    "Fill in your website requirements and our team will contact you on WhatsApp within 1 hour.",
};

const PROMISES = [
  { icon: Clock,         title: "1 Hour Response",    desc: "We reply on WhatsApp within 1 hour of submission"  },
  { icon: MessageCircle, title: "Direct WhatsApp",     desc: "Communicate directly with our team, no middlemen"  },
  { icon: Shield,        title: "No Upfront Payment", desc: "Discuss everything first, pay only when you're ready" },
  { icon: Star,          title: "48 Hour Delivery",   desc: "Your website goes live in just 48 hours after approval" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero — always dark */}
      <section className="relative bg-[#09090b] py-20 pt-28 sm:py-28 sm:pt-36 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-70 h-45 sm:w-125 sm:h-75 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-brand-violet/15 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>
        <div className="relative max-w-3xl mx-auto px-4">
          <span className="inline-flex items-center gap-2 bg-brand-success/10 border border-brand-success/30 text-brand-success rounded-full px-3 sm:px-4 py-1.5 text-xs font-semibold mb-5">
            <span className="w-2 h-2 bg-brand-success rounded-full animate-pulse" />
            We respond within 1 hour
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 sm:mb-6 leading-tight">
            Let&apos;s Build Your Website
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/50 max-w-xl mx-auto">
            Fill in your requirements below and we&apos;ll get back to you on WhatsApp within 1 hour.
          </p>
        </div>
      </section>

      {/* Trust promises */}
      <section className="py-8 sm:py-12 bg-secondary/20 border-b border-dashed border-border">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {PROMISES.map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-xs sm:text-sm mb-1">{item.title}</h3>
              <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <OrderFormSection />
      <FinalCtaSection />
    </>
  );
}
