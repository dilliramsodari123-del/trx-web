"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionWrapper, SectionHeading } from "@/components/shared/section-wrapper";
import { PORTFOLIO_CATEGORIES } from "@/lib/constants";
import { motion, AnimatePresence } from "@/components/shared/motion";
import type { PortfolioItem } from "@/types";

const SAMPLE_PORTFOLIO: PortfolioItem[] = [
  {
    id: "1",
    title: "Shrestha Traders",
    category: "Business",
    description: "Modern business website for a trading company in Kathmandu",
    thumbnail_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    live_url: "#",
    is_featured: true,
    sort_order: 1,
    created_at: "",
  },
  {
    id: "2",
    title: "Himalayan Eats",
    category: "Restaurant",
    description: "Restaurant website with online ordering and menu management",
    thumbnail_url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    live_url: "#",
    is_featured: true,
    sort_order: 2,
    created_at: "",
  },
  {
    id: "3",
    title: "Gurung Photography",
    category: "Portfolio",
    description: "Stunning portfolio for a Kathmandu-based photographer",
    thumbnail_url: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&h=400&fit=crop",
    live_url: "#",
    is_featured: true,
    sort_order: 3,
    created_at: "",
  },
  {
    id: "4",
    title: "TechLearn Nepal",
    category: "Education",
    description: "Online course platform for Nepali students",
    thumbnail_url: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    live_url: "#",
    is_featured: false,
    sort_order: 4,
    created_at: "",
  },
  {
    id: "5",
    title: "Pashmina Boutique",
    category: "Ecommerce",
    description: "E-commerce store selling Nepali pashmina products worldwide",
    thumbnail_url: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=400&fit=crop",
    live_url: "#",
    is_featured: false,
    sort_order: 5,
    created_at: "",
  },
  {
    id: "6",
    title: "Mountain Events",
    category: "Events",
    description: "Event website for trekking and adventure events in Nepal",
    thumbnail_url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop",
    live_url: "#",
    is_featured: false,
    sort_order: 6,
    created_at: "",
  },
];

export function PortfolioPreviewSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? SAMPLE_PORTFOLIO
      : SAMPLE_PORTFOLIO.filter((p) => p.category === activeCategory);

  return (
    <SectionWrapper className="py-24 bg-white" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Work"
          title="Portfolio"
          subtitle="Real websites built for real businesses across Nepal. Filter by category to find your industry."
        />

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <Image
                    src={item.thumbnail_url}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <a
                      href={item.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white text-slate-900 rounded-full px-4 py-2 text-xs font-bold hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Preview
                    </a>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                  </div>
                  <p className="text-sm text-slate-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link href="/portfolio">
              View Full Portfolio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
