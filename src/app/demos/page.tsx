import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinalCtaSection } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Live Demos — Browse Website Templates & Examples",
  description:
    "Preview live demo websites built by TRx WEB. Filter by category to find your industry and see what your website could look like.",
};

const DEMO_SITES = [
  {
    id: "miles-club",
    title: "Miles Club",
    category: "Travel & Loyalty",
    description: "Premium travel miles loyalty program with membership tiers, partner brands, and rewards dashboard.",
    thumbnail: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
    previewUrl: "/demos/miles-club",
    price: "NPR 14,999",
  },
  {
    id: "wristigy",
    title: "Wristigy",
    category: "Luxury Brand",
    description: "Premium watch brand with cinematic product showcase, collections, and heritage storytelling.",
    thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop",
    previewUrl: "/demos/wristigy",
    price: "NPR 12,999",
  },
  {
    id: "portfolio",
    title: "Creative Portfolio",
    category: "Portfolio",
    description: "Clean minimal developer/designer portfolio with project showcase, skills, and contact form.",
    thumbnail: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&h=400&fit=crop",
    previewUrl: "/demos/portfolio",
    price: "NPR 4,999",
  },
  {
    id: "romantic",
    title: "Romantic Website",
    category: "Personal",
    description: "Beautiful anniversary/love story website with timeline, photo gallery, and personal message.",
    thumbnail: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
    previewUrl: "/demos/romantic",
    price: "NPR 7,999",
  },
  {
    id: "news",
    title: "NepNews Portal",
    category: "News & Media",
    description: "Full news portal with editorial layout, categories, trending articles, and newsletter.",
    thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop",
    previewUrl: "/demos/news",
    price: "NPR 9,999",
  },
  {
    id: "hotel",
    title: "Himalaya Grand Hotel",
    category: "Hospitality",
    description: "5-star hotel website with room booking, dining, amenities showcase, and photo gallery.",
    thumbnail: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop",
    previewUrl: "/demos/hotel",
    price: "NPR 12,999",
  },
  {
    id: "romantic-game",
    title: "LoveQuest Game",
    category: "Entertainment",
    description: "Interactive couple quiz/game with levels, sample questions, and real-time multiplayer play.",
    thumbnail: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&h=400&fit=crop",
    previewUrl: "/demos/romantic-game",
    price: "NPR 8,999",
  },
  {
    id: "business-pro",
    title: "Apex Consulting",
    category: "Business",
    description: "Professional business consultancy with services, team, case studies, and contact form.",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    previewUrl: "/demos/business-pro",
    price: "NPR 9,999",
  },
  {
    id: "ecommerce",
    title: "KathShop Store",
    category: "E-Commerce",
    description: "Full online store for Nepali handicrafts with cart, categories, search, and newsletter.",
    thumbnail: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=400&fit=crop",
    previewUrl: "/demos/ecommerce",
    price: "NPR 19,999",
  },
  {
    id: "3d-website",
    title: "Vortex 3D Studio",
    category: "3D / Creative",
    description: "Immersive 3D web studio site with glowing animations, particle effects, and cinematic design.",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop",
    previewUrl: "/demos/3d-website",
    price: "NPR 24,999",
  },
  {
    id: "online-course",
    title: "LearnNepal Platform",
    category: "Education",
    description: "EdTech course platform with catalog, enrollment, instructor profiles, and certificates.",
    thumbnail: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    previewUrl: "/demos/online-course",
    price: "NPR 14,999",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Travel & Loyalty": "bg-sky-500/10 text-sky-600 border-sky-500/20",
  "Luxury Brand":     "bg-amber-500/10 text-amber-600 border-amber-500/20",
  Portfolio:          "bg-violet-500/10 text-violet-600 border-violet-500/20",
  Personal:           "bg-rose-500/10 text-rose-600 border-rose-500/20",
  "News & Media":     "bg-red-500/10 text-red-600 border-red-500/20",
  Hospitality:        "bg-orange-500/10 text-orange-600 border-orange-500/20",
  Entertainment:      "bg-pink-500/10 text-pink-600 border-pink-500/20",
  Business:           "bg-primary/10 text-primary border-primary/20",
  "E-Commerce":       "bg-green-500/10 text-green-600 border-green-500/20",
  "3D / Creative":    "bg-fuchsia-500/10 text-fuchsia-600 border-fuchsia-500/20",
  Education:          "bg-teal-500/10 text-teal-600 border-teal-500/20",
};

export default function DemosPage() {
  return (
    <>
      {/* Hero — always dark */}
      <section className="relative bg-[#09090b] py-20 pt-28 sm:py-28 sm:pt-36 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-70 h-45 sm:w-125 sm:h-75 rounded-full bg-primary/20 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>
        <div className="relative max-w-3xl mx-auto px-4">
          <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/30 text-primary rounded-full px-3 sm:px-4 py-1.5 text-xs font-semibold mb-5">
            <span>✦</span>
            11 Live Preview Websites
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 sm:mb-6 leading-tight">
            See What We Can Build
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/50 max-w-xl mx-auto">
            Click any card to open a fully interactive live preview — then order the same for your business.
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
                  <Link
                    href={demo.previewUrl}
                    className="flex items-center gap-1 text-[9px] text-muted-foreground/60 hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-2.5 h-2.5" />
                  </Link>
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
                    <Link
                      href={demo.previewUrl}
                      className="flex items-center gap-2 bg-white text-foreground rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Preview
                    </Link>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-foreground">{demo.title}</h3>
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap shrink-0 ${
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
                    <div className="flex items-center gap-2">
                      <Button asChild size="sm" variant="outline">
                        <Link href={demo.previewUrl}>
                          Preview
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                      </Button>
                      <Button asChild size="sm" variant="gradient">
                        <Link href={`/contact?demo=${demo.id}`}>
                          Order This
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </Button>
                    </div>
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
