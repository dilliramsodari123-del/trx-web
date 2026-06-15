"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { motion } from "@/components/shared/motion";

export function FinalCtaSection() {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello TrX Web! 👋 I'm ready to start my website project. Can we discuss the details?"
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section className="relative py-32 bg-slate-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 rounded-full px-4 py-1.5 text-xs font-semibold mb-8">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            Ready When You Are
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6">
            Your Website Should{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Not Take Weeks
            </span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Launch online in just 48 hours. Join hundreds of Nepali businesses
            already growing with TrX Web.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl" variant="gradient">
              <Link href="/contact">
                Start My Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="xl"
              variant="whatsapp"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </Button>
          </div>
          <p className="mt-8 text-slate-500 text-sm">
            Starting from <span className="text-white font-bold">NPR 4,999</span> · 48-Hour Delivery · No Hidden Fees
          </p>
        </motion.div>
      </div>
    </section>
  );
}
