import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FinalCtaSection } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Live Demos — Browse Website Templates & Examples",
  description:
    "Preview live demo websites built by TRx WEB. Filter by category to find your industry and see what your website could look like.",
};

const DEMO_SITES = [
  {
    id: "1",
    title: "Business Pro",
    category: "Business",
    description: "A clean, modern business website with services, about, and contact sections",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    demoUrl: "#",
    price: "NPR 4,999",
  },
  {
    id: "2",
    title: "Foodie Restaurant",
    category: "Restaurant",
    description: "Beautiful restaurant site with menu, online ordering, and reservations",
    thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    demoUrl: "#",
    price: "NPR 9,999",
  },
  {
    id: "3",
    title: "Creative Portfolio",
    category: "Portfolio",
    description: "Stunning portfolio for creatives with gallery, skills, and contact",
    thumbnail: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&h=400&fit=crop",
    demoUrl: "#",
    price: "NPR 4,999",
  },
  {
    id: "4",
    title: "EduLearn Platform",
    category: "Education",
    description: "Course platform with lessons, enrollment, and student dashboard",
    thumbnail: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    demoUrl: "#",
    price: "NPR 9,999",
  },
  {
    id: "5",
    title: "ShopNepal Store",
    category: "E-Commerce",
    description: "Full e-commerce store with cart, checkout, and order management",
    thumbnail: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=400&fit=crop",
    demoUrl: "#",
    price: "NPR 19,999",
  },
  {
    id: "6",
    title: "EventEase",
    category: "Events",
    description: "Event website with registration, schedule, speakers, and ticketing",
    thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop",
    demoUrl: "#",
    price: "NPR 9,999",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Business:    "bg-primary/10 text-primary border-primary/20",
  Restaurant:  "bg-orange-500/10 text-orange-600 border-orange-500/20",
  Portfolio:   "bg-violet-500/10 text-violet-600 border-violet-500/20",
  Education:   "bg-blue-500/10 text-blue-600 border-blue-500/20",
  "E-Commerce":"bg-brand-success/10 text-brand-success border-brand-success/20",
  Events:      "bg-amber-500/10 text-amber-600 border-amber-500/20",
};

export default function DemosPage() {
  return (
    <>
      {/* Hero — always dark */}
      <section className="relative bg-[#09090b] py-28 pt-36 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-75 rounded-full bg-primary/20 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>
        <div className="relative max-w-3xl mx-auto px-4">
          <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/30 text-primary rounded-full px-4 py-1.5 text-xs font-semibold mb-6">
            <span>✦</span>
            Live Examples
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
            See What We Can Build
          </h1>
          <p className="text-xl text-white/50 max-w-xl mx-auto">
            Browse live demo websites and find the style that matches your vision.
          </p>
        </div>
      </section>

      {/* Demo grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEMO_SITES.map((demo) => (
              <div
                key={demo.id}
                className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                {/* Browser chrome */}
                <div className="bg-secondary/50 px-3 py-2 flex items-center gap-1.5 border-b border-dashed border-border">
                  <span className="w-2 h-2 rounded-full bg-destructive/50" />
                  <span className="w-2 h-2 rounded-full bg-brand-hot/50" />
                  <span className="w-2 h-2 rounded-full bg-brand-success/50" />
                  <div className="flex-1 mx-2 h-4 rounded bg-border/60 flex items-center px-2">
                    <span className="text-[9px] text-muted-foreground/60 truncate">
                      {demo.title.toLowerCase().replace(/\s/g, "")}.com.np
                    </span>
                  </div>
                </div>

                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-secondary">
                  <Image
                    src={demo.thumbnail}
                    alt={demo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={demo.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white text-foreground rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live Demo
                    </a>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-foreground">{demo.title}</h3>
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap ${
                        CATEGORY_COLORS[demo.category] ?? "bg-secondary text-foreground border-border"
                      }`}
                    >
                      {demo.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {demo.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-dashed border-border">
                    <span className="font-bold text-primary text-sm">{demo.price}</span>
                    <Button asChild size="sm" variant="gradient">
                      <Link href={`/contact?demo=${demo.id}`}>
                        Order This
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </>
  );
}
