"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, MessageCircle, Star, Clock, Smartphone,
  Search, Shield, LayoutDashboard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "@/components/shared/motion";
import { CyclingText } from "@/components/shared/cycling-text";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import HomeBadge from "@/components/ui/home-badge";
import { Beam } from "@/components/ui/beam";

const FEATURES = [
  { icon: Clock,           label: "48-Hour Delivery" },
  { icon: Smartphone,      label: "Mobile Responsive" },
  { icon: Search,          label: "SEO Ready" },
  { icon: Shield,          label: "Secure & Hosted" },
  { icon: LayoutDashboard, label: "Admin Dashboard" },
];

const STATS = [
  { value: "48",   unit: "Hrs",  label: "Delivery" },
  { value: "100",  unit: "%",    label: "Responsive" },
  { value: "99.9", unit: "%",    label: "Uptime" },
  { value: "24",   unit: "/7",   label: "Support" },
];

const CYCLING_WORDS = ["Business", "E-Commerce", "Restaurant", "Portfolio", "Startup"];

export function HeroSection() {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello TRx WEB! 👋 I'm interested in getting a website. Can you help me?"
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#09090b] pt-16">
      {/* Glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-rose-700/15 blur-3xl" />
        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="flex flex-col items-start gap-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <HomeBadge />
            </motion.div>

            {/* Beam - Circuit board lines */}
            <Beam />

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight bg-linear-to-r from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 bg-clip-text text-transparent leading-[1.05]"
            >
              Get Your{" "}
              <CyclingText words={CYCLING_WORDS} />
              <br />
              Website in{" "}
              <span className="relative inline-block text-primary">
                48 Hours
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 220 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8 Q55 2 110 8 Q165 14 218 8"
                    stroke="#f43f5e"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.6"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-white/60 max-w-md leading-relaxed"
            >
              Launch online faster than you thought possible. Professional
              websites built with Next.js, starting from{" "}
              <span className="font-semibold text-white">NPR 4,999</span>.
            </motion.p>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.28 }}
              className="flex items-center gap-3 text-sm text-white/50"
            >
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1.5 font-semibold text-white">4.9/5</span>
              </div>
              <span className="text-white/20">·</span>
              <span>100+ sites delivered</span>
              <span className="text-white/20">·</span>
              <span>&lt; 1 hr response</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.34 }}
              className="flex flex-wrap gap-3"
            >
              <Button asChild size="lg" className="gap-2 shadow-md shadow-primary/25">
                <Link href="/contact">
                  Start My Website
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                onClick={handleWhatsApp}
                className="gap-2 bg-brand-success/10 border border-brand-success/30 text-brand-success hover:bg-brand-success/20"
                variant="ghost"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </Button>
            </motion.div>

            {/* Feature chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.42 }}
              className="flex flex-wrap gap-2"
            >
              {FEATURES.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-xs text-white/60"
                >
                  <Icon className="w-3 h-3 text-primary" />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: 3D browser mockup */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div style={{ perspective: "1200px" }}>
              <motion.div
                initial={{ opacity: 0, rotateX: 25, rotateY: -15, scale: 0.85 }}
                animate={{ opacity: 1, rotateX: 8, rotateY: -5, scale: 1 }}
                transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.5 }}
                className="rounded-xl border border-white/15 overflow-hidden shadow-2xl shadow-black/50"
              >
                {/* Chrome bar */}
                <div className="bg-zinc-900/90 backdrop-blur-sm px-4 py-3 flex items-center gap-2 border-b border-white/8">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  <div className="flex-1 mx-3 h-5 rounded bg-white/10 flex items-center px-2 gap-1">
                    <Shield className="w-2.5 h-2.5 text-green-400" />
                    <span className="text-[10px] text-white/50">shresthatraders.com.np</span>
                  </div>
                </div>
                {/* Screenshot */}
                <div className="relative w-full aspect-[16/10]">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
                    fill
                    className="object-cover object-top"
                    alt="Sample website"
                    sizes="55vw"
                    priority
                  />
                </div>
              </motion.div>
            </div>

            {/* Floating "Just Delivered" notification */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.9 }}
              className="absolute -top-4 -right-6 rounded-xl border border-white/10 bg-zinc-900/80 backdrop-blur px-3 py-2.5 shadow-xl flex items-center gap-2.5"
            >
              <div className="w-7 h-7 rounded-full bg-brand-success/20 flex items-center justify-center shrink-0">
                <span className="text-sm">🎉</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-white leading-tight">Just Delivered!</p>
                <p className="text-[10px] text-white/50">Hotel Himalaya · 38 hrs</p>
              </div>
            </motion.div>

            {/* Giphy GIF badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 20, delay: 1.1 }}
              className="absolute -bottom-4 -right-4 rounded-2xl border border-white/10 bg-zinc-900/80 backdrop-blur p-2 shadow-xl"
            >
              <img
                src="https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif"
                alt="Growth animation"
                loading="lazy"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <p className="text-[10px] text-white/60 text-center mt-1">Site Traffic ↑</p>
            </motion.div>

            {/* ⚡ 48H badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1 }}
              className="absolute top-1/2 -left-6 bg-primary text-primary-foreground rounded-full w-14 h-14 flex flex-col items-center justify-center shadow-lg shadow-primary/30"
            >
              <span className="text-lg font-bold leading-none">⚡</span>
              <span className="text-[9px] font-bold leading-none mt-0.5">48H</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 border border-white/10 rounded-xl overflow-hidden"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center py-6 px-4 ${
                i > 0 ? "border-l border-white/10" : ""
              }`}
            >
              <div className="flex items-baseline gap-0.5">
                <span className="text-3xl md:text-4xl font-bold text-white">{stat.value}</span>
                <span className="text-primary font-bold text-lg">{stat.unit}</span>
              </div>
              <span className="text-xs text-white/40 mt-1 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* WhatsApp urgency bar */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.1 }}
        className="hidden md:flex w-full items-center justify-center gap-3 border-t border-white/8 bg-brand-success/5 py-3 px-4 text-sm"
      >
        <span className="text-white/60">
          🚀 <strong className="text-white">12 websites</strong> delivered this week — yours could be next!
        </span>
        <button
          onClick={handleWhatsApp}
          className="inline-flex items-center gap-1.5 bg-brand-success text-white rounded-full px-3.5 py-1 text-xs font-semibold hover:bg-brand-success/90 transition-colors"
        >
          <MessageCircle className="w-3 h-3" />
          Chat Now
        </button>
      </motion.div>
    </section>
  );
}
