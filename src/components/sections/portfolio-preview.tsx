"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HotBadge } from "@/components/shared/hot-badge";
import { motion } from "@/components/shared/motion";

const SAMPLE_PORTFOLIO = [
  {
    id: "1",
    title: "Shrestha Traders",
    category: "Business",
    description: "Modern business website for a trading company in Kathmandu",
    photo: "1460925895917-afdab827c52f",
    hrs: 38,
  },
  {
    id: "2",
    title: "Himalayan Eats",
    category: "Restaurant",
    description: "Restaurant website with online ordering and menu management",
    photo: "1517248135467-4c7edcad34c4",
    hrs: 44,
  },
  {
    id: "3",
    title: "Gurung Photography",
    category: "Portfolio",
    description: "Stunning portfolio for a Kathmandu-based photographer",
    photo: "1452587925148-ce544e77e70d",
    hrs: 41,
  },
  {
    id: "4",
    title: "TechLearn Nepal",
    category: "Education",
    description: "Online course platform for Nepali students",
    photo: "1501504905252-473c47e087f8",
    hrs: 47,
  },
  {
    id: "5",
    title: "Pashmina Boutique",
    category: "E-Commerce",
    description: "E-commerce store selling Nepali pashmina products worldwide",
    photo: "1607082348824-0a96f2a4b9da",
    hrs: 36,
  },
  {
    id: "6",
    title: "Mountain Events",
    category: "Events",
    description: "Event website for trekking and adventure events in Nepal",
    photo: "1464822759023-fed622ff2c3b",
    hrs: 48,
  },
];

const BADGE_VARIANTS: Record<string, { label: string; variant: "hot" | "fast" | "popular" | "new" }> = {
  Business:   { label: "🔥 Business",  variant: "hot"     },
  Restaurant: { label: "⭐ Popular",   variant: "popular" },
  Portfolio:  { label: "✨ Creative",  variant: "new"     },
  Education:  { label: "📚 Learning",  variant: "fast"    },
  "E-Commerce": { label: "🛒 Store",   variant: "popular" },
  Events:     { label: "🎉 Events",    variant: "fast"    },
};

export function PortfolioPreviewSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 bg-[#09090b] overflow-hidden" id="portfolio">
      {/* Glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 text-primary px-3 py-1 text-xs font-medium uppercase tracking-wide">
              <span>✦</span>
              Our Work
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
            Real Websites for{" "}
            <span className="text-primary">Real Businesses</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Real websites built for real businesses across Nepal
          </p>
        </div>
      </div>

      {/* Drag carousel */}
      <div
        ref={containerRef}
        className="overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)]"
      >
        <motion.div
          ref={dragRef}
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0.05}
          className="flex gap-5 px-8 cursor-grab active:cursor-grabbing pb-4"
          whileTap={{ cursor: "grabbing" }}
        >
          {SAMPLE_PORTFOLIO.map((item) => {
            const badge = BADGE_VARIANTS[item.category];
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-panel rounded-2xl overflow-hidden shrink-0 w-72 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 transition-all duration-300 border border-white/10"
              >
                {/* Browser chrome */}
                <div className="bg-zinc-900/80 px-3 py-2 flex items-center gap-1.5 border-b border-white/8">
                  <span className="w-2 h-2 rounded-full bg-red-500/60" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <span className="w-2 h-2 rounded-full bg-green-500/60" />
                  <div className="flex-1 mx-2 h-4 rounded bg-white/8 flex items-center px-1.5 gap-1">
                    <Shield className="w-2 h-2 text-green-400" />
                    <span className="text-[9px] text-white/40 truncate">{item.title.toLowerCase().replace(/\s/g, "")}.com.np</span>
                  </div>
                </div>

                <div className="relative h-44 overflow-hidden bg-zinc-800 group">
                  <Image
                    src={`https://images.unsplash.com/photo-${item.photo}?w=600&h=400&fit=crop`}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    draggable={false}
                    sizes="288px"
                  />
                  {badge && (
                    <div className="absolute top-3 left-3">
                      <HotBadge label={badge.label} variant={badge.variant} size="sm" />
                    </div>
                  )}
                  {/* Delivered badge */}
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-2 py-0.5 text-[10px] text-white/80 font-medium">
                    ✓ {item.hrs} hrs
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-4 py-2 text-xs font-bold">
                      <ExternalLink className="w-3.5 h-3.5" />
                      View Project
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white text-sm mb-1">{item.title}</h3>
                  <p className="text-white/50 text-xs leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 text-center">
        <Button asChild variant="outline" size="lg" className="border-white/15 text-white hover:bg-white/8 hover:border-primary/30">
          <Link href="/portfolio">
            View Full Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
