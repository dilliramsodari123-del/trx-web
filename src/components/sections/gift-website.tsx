"use client";

import Link from "next/link";
import { Heart, Gift, Star, Cake, Gem, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper, SectionHeading } from "@/components/shared/section-wrapper";
import { motion } from "@/components/shared/motion";

const giftTypes = [
  { icon: Cake, label: "Birthday Gift", desc: "Surprise them on their special day", color: "from-pink-500 to-rose-500" },
  { icon: Heart, label: "Love Story", desc: "A beautiful story of your journey together", color: "from-red-500 to-pink-500" },
  { icon: Gem, label: "Wedding Website", desc: "Celebrate your union with elegance", color: "from-violet-500 to-purple-500" },
  { icon: Star, label: "Anniversary", desc: "Cherish every year of togetherness", color: "from-amber-500 to-orange-500" },
  { icon: GraduationCap, label: "Graduation", desc: "Celebrate their academic achievement", color: "from-blue-500 to-cyan-500" },
  { icon: Gift, label: "Special Occasion", desc: "Any milestone worth celebrating", color: "from-teal-500 to-green-500" },
];

export function GiftWebsiteSection() {
  return (
    <SectionWrapper id="gift" className="py-24 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 bg-pink-100 border border-pink-200 text-pink-700 rounded-full px-4 py-1.5 text-xs font-semibold mb-6">
              <Heart className="w-3.5 h-3.5" />
              Special Gift Websites
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Gift a Website to{" "}
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                Someone Special
              </span>
            </h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              Surprise your loved ones with a personalized website for birthdays, anniversaries, weddings, celebrations, achievements, love stories, memorials, or any special occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-lg shadow-pink-500/25">
                <Link href="/contact?type=gift">
                  <Gift className="w-4 h-4" />
                  Order a Gift Website
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/demos?category=gift">See Examples</Link>
              </Button>
            </div>
          </div>

          {/* Right: Gift type cards */}
          <div className="grid grid-cols-2 gap-4">
            {giftTypes.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3`}
                >
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">{item.label}</h3>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
