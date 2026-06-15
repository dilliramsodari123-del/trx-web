import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PORTFOLIO_CATEGORIES } from "@/lib/constants";
import { FinalCtaSection } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Live Demos — Browse Website Templates & Examples",
  description:
    "Preview live demo websites built by TrX Web. Filter by category to find your industry and see what your website could look like.",
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
    category: "Ecommerce",
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

export default function DemosPage() {
  return (
    <>
      <section className="relative bg-slate-900 py-24 pt-32 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4">
          <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 rounded-full px-4 py-1.5 text-xs font-semibold mb-6">
            Live Examples
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            See What We Can Build
          </h1>
          <p className="text-xl text-slate-400">
            Browse live demo websites and find the style that matches your vision.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {DEMO_SITES.map((demo) => (
              <div
                key={demo.id}
                className="group rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="relative h-52 bg-cover bg-center overflow-hidden"
                  style={{ backgroundImage: `url(${demo.thumbnail})` }}
                >
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a
                      href={demo.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white text-slate-900 rounded-full px-5 py-2.5 text-sm font-bold hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live Demo
                    </a>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-slate-900">{demo.title}</h3>
                    <Badge variant="secondary">{demo.category}</Badge>
                  </div>
                  <p className="text-sm text-slate-500 mb-4">{demo.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-blue-600">{demo.price}</span>
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
