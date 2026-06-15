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
  { icon: Clock, title: "1 Hour Response", desc: "We reply on WhatsApp within 1 hour of submission" },
  { icon: MessageCircle, title: "Direct WhatsApp", desc: "Communicate directly with our team, no middlemen" },
  { icon: Shield, title: "No Upfront Payment", desc: "Discuss everything first, pay only when you're ready" },
  { icon: Star, title: "48 Hour Delivery", desc: "Your website goes live in just 48 hours after approval" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-900 py-24 pt-32 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4">
          <span className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-300 rounded-full px-4 py-1.5 text-xs font-semibold mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            We respond within 1 hour
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Let&apos;s Build Your Website
          </h1>
          <p className="text-xl text-slate-400">
            Fill in your requirements below and we&apos;ll get back to you on WhatsApp within 1 hour.
          </p>
        </div>
      </section>

      {/* Trust promises */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {PROMISES.map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <OrderFormSection />
      <FinalCtaSection />
    </>
  );
}
