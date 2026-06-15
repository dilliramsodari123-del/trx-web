import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { FinalCtaSection } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Blog — Web Development Tips for Nepal Businesses",
  description:
    "Learn about web development, digital marketing, and growing your business online in Nepal.",
};

const BLOG_POSTS = [
  {
    id: "1",
    title: "Why Your Nepal Business Needs a Website in 2024",
    slug: "why-nepal-business-needs-website-2024",
    excerpt:
      "Nepal's digital economy is booming. Here's why having a professional website is no longer optional for businesses in Kathmandu and beyond.",
    cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    author: "TrX Web Team",
    readTime: "5 min",
    publishedAt: "2024-01-15",
    tags: ["Business", "Nepal"],
  },
  {
    id: "2",
    title: "How to Choose the Right Website Package for Your Business",
    slug: "choose-right-website-package",
    excerpt:
      "Starter, Business, or E-Commerce? We break down which package is right for your specific business needs and budget.",
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    author: "TrX Web Team",
    readTime: "4 min",
    publishedAt: "2024-01-20",
    tags: ["Guide", "Pricing"],
  },
  {
    id: "3",
    title: "5 Reasons Your Restaurant Needs an Online Presence",
    slug: "restaurant-website-benefits-nepal",
    excerpt:
      "Restaurants with online ordering see up to 30% more revenue. Here's how a restaurant website can transform your business.",
    cover: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop",
    author: "TrX Web Team",
    readTime: "6 min",
    publishedAt: "2024-01-25",
    tags: ["Restaurant", "Tips"],
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="relative bg-slate-900 py-24 pt-32 text-center overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Blog & Resources
          </h1>
          <p className="text-xl text-slate-400">
            Tips, guides, and insights for growing your business online in Nepal.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="group rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="h-44 bg-cover bg-center group-hover:scale-105 transition-transform duration-500 overflow-hidden"
                  style={{ backgroundImage: `url(${post.cover})` }}
                />
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-bold text-slate-900 mb-2 leading-tight line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-500 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime} read
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
                    >
                      Read More
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </>
  );
}
