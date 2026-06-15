"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, CheckCircle2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "@/components/shared/motion";
import { STATS, TRUST_BADGES, WHATSAPP_NUMBER } from "@/lib/constants";
import { useRef } from "react";
import { useInView } from "framer-motion";

function StatCard({
  stat,
  index,
}: {
  stat: (typeof STATS)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-extrabold text-white">
        {stat.value}
        {stat.unit && (
          <span className="text-blue-400 text-2xl">{stat.unit}</span>
        )}
      </div>
      <div className="text-sm text-slate-400 mt-1 leading-tight">{stat.label}</div>
    </motion.div>
  );
}

export function HeroSection() {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello TrX Web! 👋 I'm interested in getting a website. Can you help me?"
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900 pt-16">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 rounded-full px-5 py-2 text-sm font-semibold">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            Nepal&apos;s Fastest Website Delivery
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-6 leading-[1.05]"
        >
          Professional Websites
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-blue-300 bg-clip-text text-transparent">
            Delivered in 48 Hours
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Launch your business online with a fast, secure and professionally designed website starting from just{" "}
          <span className="text-white font-bold">NPR 4,999</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button asChild size="xl" variant="gradient" className="text-base">
            <Link href="/contact">
              Get My Website
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button
            size="xl"
            variant="outline"
            className="text-base bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30"
            onClick={() => window.open('/demos', '_self')}
          >
            <Play className="w-4 h-4" />
            View Live Demos
          </Button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-20"
        >
          {TRUST_BADGES.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 text-sm text-slate-300"
            >
              <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-white/10 pt-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* WhatsApp sticky banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-0 left-0 right-0 bg-green-600/90 backdrop-blur-sm py-3 px-4 text-center text-white text-sm hidden md:flex items-center justify-center gap-3"
      >
        <span className="font-medium">🚀 Start your project today — Response in under 1 hour!</span>
        <button
          onClick={handleWhatsApp}
          className="inline-flex items-center gap-1.5 bg-white text-green-700 rounded-full px-4 py-1 text-xs font-bold hover:bg-green-50 transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          Chat Now
        </button>
      </motion.div>
    </section>
  );
}
