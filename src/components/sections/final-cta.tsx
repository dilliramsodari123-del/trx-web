"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { HotBadge } from "@/components/shared/hot-badge";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { motion } from "@/components/shared/motion";

export function FinalCtaSection() {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello TRx WEB! 👋 I'm ready to start my website project. Can we discuss the details?"
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section className="mx-auto mb-24 w-full max-w-7xl px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-[#0a0a1a] via-[#0d1333] to-[#0a0a1a] shadow-2xl">
          {/* Animated glow orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-violet/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.03)_1px,_transparent_1px)] [background-size:24px_24px]" />

          {/* Top gradient line */}
          <div className="via-primary/50 absolute inset-x-0 top-0 mx-auto h-px w-3/5 bg-linear-to-r from-transparent to-transparent" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            {/* Urgency badge */}
            <div className="mb-5">
              <HotBadge label="🔥 3 spots available this week" variant="hot" size="md" animate />
            </div>

            <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary rounded-full px-4 py-1.5 text-xs font-semibold mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Ready When You Are
            </span>

            <h2 className="max-w-xl bg-linear-to-r from-zinc-200/60 via-zinc-50 to-zinc-200/60 bg-clip-text text-center text-4xl font-semibold tracking-tight text-transparent md:text-6xl md:leading-tight">
              Your Website Should Not Take Weeks
            </h2>

            <p className="mt-4 text-zinc-400 text-base max-w-md">
              Launch online in just 48 hours. Starting from{" "}
              <span className="text-white font-bold">NPR 4,999</span> · No Hidden Fees
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="flex h-10 w-fit items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-black shadow-md hover:bg-zinc-100 transition-colors"
              >
                Start My Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={handleWhatsApp}
                className="flex h-10 w-fit items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
                Chat on WhatsApp
              </button>
            </div>

            <p className="mt-5 text-zinc-500 text-sm">
              Built to keep you hooked. 48-Hour Delivery guaranteed.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
