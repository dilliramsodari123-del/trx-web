"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight, MessageCircle, Star, Clock, Smartphone,
  Search, Shield, LayoutDashboard, ChevronLeft, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "@/components/shared/motion";
import { CyclingText } from "@/components/shared/cycling-text";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import HomeBadge from "@/components/ui/home-badge";
import { Beam } from "@/components/ui/beam";
import { cn } from "@/lib/utils";

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

const PREVIEW_SLIDES = [
  {
    url: "shresthatraders.com.np",
    label: "Business",
    badge: "BUSINESS",
    badgeColor: "bg-orange-500",
    gradient: "from-blue-900/90 via-blue-950/80 to-zinc-950",
    accentColor: "#3b82f6",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    desc: "Business Analytics Dashboard",
    deliveredIn: "38 hrs",
    deliveredName: "Shrestha Traders",
  },
  {
    url: "himalayaneats.com.np",
    label: "Restaurant",
    badge: "RESTAURANT",
    badgeColor: "bg-amber-500",
    gradient: "from-amber-900/90 via-amber-950/80 to-zinc-950",
    accentColor: "#f59e0b",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=80",
    desc: "Restaurant & Online Menu",
    deliveredIn: "42 hrs",
    deliveredName: "Himalaya Eats",
  },
  {
    url: "gurungphotography.com.np",
    label: "Portfolio",
    badge: "CREATIVE",
    badgeColor: "bg-emerald-500",
    gradient: "from-emerald-900/90 via-emerald-950/80 to-zinc-950",
    accentColor: "#10b981",
    img: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&auto=format&fit=crop&q=80",
    desc: "Photography Portfolio",
    deliveredIn: "31 hrs",
    deliveredName: "Gurung Photography",
  },
  {
    url: "pashmina-boutique.com.np",
    label: "E-Commerce",
    badge: "STORE",
    badgeColor: "bg-violet-500",
    gradient: "from-violet-900/90 via-violet-950/80 to-zinc-950",
    accentColor: "#8b5cf6",
    img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&auto=format&fit=crop&q=80",
    desc: "Online Store with Cart",
    deliveredIn: "45 hrs",
    deliveredName: "Pashmina Boutique",
  },
  {
    url: "techlearn-nepal.com.np",
    label: "Online Course",
    badge: "LEARNING",
    badgeColor: "bg-sky-500",
    gradient: "from-sky-900/90 via-sky-950/80 to-zinc-950",
    accentColor: "#0ea5e9",
    img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80",
    desc: "LMS & Course Platform",
    deliveredIn: "47 hrs",
    deliveredName: "TechLearn Nepal",
  },
];

export function HeroSection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello TRx WEB! 👋 I'm interested in getting a website. Can you help me?"
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setSlideIndex((i) => (i + 1) % PREVIEW_SLIDES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  function goTo(idx: number) {
    setDirection(idx > slideIndex ? 1 : -1);
    setSlideIndex(idx);
  }

  const slide = PREVIEW_SLIDES[slideIndex];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background dark:bg-[#09090b] pt-16">
      {/* Glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/10 dark:bg-primary/15 blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-violet-600/15 dark:bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-rose-700/10 dark:bg-rose-700/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #888888 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="flex flex-col items-start gap-6">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <HomeBadge />
            </motion.div>

            <Beam />

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.05]"
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
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.6"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed"
            >
              Launch online faster than you thought possible. Professional
              websites built with Next.js, starting from{" "}
              <span className="font-semibold text-foreground">NPR 4,999</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.28 }}
              className="flex items-center gap-3 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1.5 font-semibold text-foreground">4.9/5</span>
              </div>
              <span className="text-muted-foreground/40">·</span>
              <span>100+ sites delivered</span>
              <span className="text-muted-foreground/40">·</span>
              <span>&lt; 1 hr response</span>
            </motion.div>

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

            {/* Website type chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.42 }}
              className="flex flex-wrap gap-2"
            >
              {PREVIEW_SLIDES.map((s, i) => (
                <button
                  key={s.label}
                  onClick={() => goTo(i)}
                  className={cn(
                    "flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs transition-all duration-200",
                    i === slideIndex
                      ? "border-primary bg-primary/10 text-primary font-semibold"
                      : "border-border bg-secondary/50 text-muted-foreground hover:border-primary/40"
                  )}
                >
                  {s.label}
                </button>
              ))}
              {FEATURES.slice(0, 3).map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-secondary/50 text-xs text-muted-foreground"
                >
                  <Icon className="w-3 h-3 text-primary" />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Dynamic browser mockup */}
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
                <div className="bg-zinc-900 px-4 py-3 flex items-center gap-2 border-b border-white/10">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  <div className="flex-1 mx-3 h-5 rounded bg-white/10 flex items-center px-2 gap-1">
                    <Shield className="w-2.5 h-2.5 text-green-400" />
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={slide.url}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.25 }}
                        className="text-[10px] text-white/50"
                      >
                        {slide.url}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  {/* Slide nav arrows */}
                  <button
                    onClick={() => goTo((slideIndex - 1 + PREVIEW_SLIDES.length) % PREVIEW_SLIDES.length)}
                    className="w-5 h-5 rounded flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => goTo((slideIndex + 1) % PREVIEW_SLIDES.length)}
                    className="w-5 h-5 rounded flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Screenshot area */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-950">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={slideIndex}
                      initial={{ opacity: 0, x: direction * 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction * -40 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={slide.img}
                        alt={slide.desc}
                        className="w-full h-full object-cover object-top"
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                      />
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-linear-to-t ${slide.gradient} opacity-40`} />
                      {/* Badge */}
                      <div className="absolute top-3 left-3">
                        <span className={`${slide.badgeColor} text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full`}>
                          ⚡ {slide.badge}
                        </span>
                      </div>
                      {/* Site label */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                        <div>
                          <p className="text-white text-xs font-semibold drop-shadow">{slide.desc}</p>
                          <p className="text-white/60 text-[9px]">{slide.url}</p>
                        </div>
                        <span className="text-[9px] text-white/50 bg-black/40 rounded px-1.5 py-0.5">
                          Delivered in {slide.deliveredIn}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Slide indicator strip */}
                <div className="bg-zinc-900 px-4 py-2 flex items-center justify-center gap-1.5">
                  {PREVIEW_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className={cn(
                        "rounded-full transition-all duration-300",
                        i === slideIndex
                          ? "w-5 h-1.5 bg-primary"
                          : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"
                      )}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Floating "Just Delivered" notification */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.9 }}
              className="absolute -top-4 -right-6 rounded-xl border border-white/10 bg-zinc-900/90 backdrop-blur px-3 py-2.5 shadow-xl flex items-center gap-2.5"
            >
              <div className="w-7 h-7 rounded-full bg-brand-success/20 flex items-center justify-center shrink-0">
                <span className="text-sm">🎉</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={slideIndex}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-xs font-semibold text-white leading-tight">Just Delivered!</p>
                  <p className="text-[10px] text-white/50">{slide.deliveredName} · {slide.deliveredIn}</p>
                </motion.div>
              </AnimatePresence>
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

            {/* Queue preview strip below */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.2 }}
              className="mt-4 flex gap-2 overflow-hidden"
            >
              {PREVIEW_SLIDES.map((s, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={cn(
                    "relative flex-1 rounded-lg overflow-hidden border-2 transition-all duration-300 h-14",
                    i === slideIndex ? "border-primary shadow-md shadow-primary/30" : "border-white/10 opacity-60 hover:opacity-90"
                  )}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.label} className="w-full h-full object-cover object-top" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-zinc-950/60" />
                  <span className="absolute bottom-1 left-1 right-1 text-[8px] text-white font-semibold text-center truncate">{s.label}</span>
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 border border-border rounded-xl overflow-hidden"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center py-6 px-4 bg-secondary/30 ${
                i > 0 ? "border-l border-border" : ""
              }`}
            >
              <div className="flex items-baseline gap-0.5">
                <span className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</span>
                <span className="text-primary font-bold text-lg">{stat.unit}</span>
              </div>
              <span className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* WhatsApp urgency bar */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.1 }}
        className="hidden md:flex w-full items-center justify-center gap-3 border-t border-border bg-brand-success/5 py-3 px-4 text-sm"
      >
        <span className="text-muted-foreground">
          🚀 <strong className="text-foreground">12 websites</strong> delivered this week — yours could be next!
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
