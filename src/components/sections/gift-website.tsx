"use client";

import Link from "next/link";
import { Heart, Gift, Star, Cake, Gem, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { motion } from "@/components/shared/motion";

const giftTypes = [
  { icon: Cake,          label: "Birthday Gift",   desc: "Surprise them on their special day",         color: "from-pink-500 to-rose-500"     },
  { icon: Heart,         label: "Love Story",       desc: "A beautiful story of your journey together", color: "from-red-500 to-pink-500"      },
  { icon: Gem,           label: "Wedding Website",  desc: "Celebrate your union with elegance",         color: "from-violet-500 to-purple-500" },
  { icon: Star,          label: "Anniversary",      desc: "Cherish every year of togetherness",         color: "from-amber-500 to-orange-500"  },
  { icon: GraduationCap, label: "Graduation",       desc: "Celebrate their academic achievement",       color: "from-blue-500 to-cyan-500"     },
  { icon: Gift,          label: "Special Occasion", desc: "Any milestone worth celebrating",            color: "from-teal-500 to-green-500"    },
];

export function GiftWebsiteSection() {
  return (
    <SectionWrapper id="gift" className="relative py-24 bg-background overflow-hidden">
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 text-primary rounded-full px-4 py-1.5 text-[11px] font-semibold mb-6 uppercase tracking-widest">
              ✦ Special Gift Websites
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
              Gift a Website to{" "}
              <em className="not-italic italic bg-linear-to-r from-primary to-brand-violet bg-clip-text text-transparent">
                Someone You Love
              </em>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Surprise your loved ones with a personalized website for birthdays, anniversaries, weddings, celebrations, achievements, love stories, memorials, or any special occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-linear-to-r from-primary to-brand-violet text-white shadow-lg shadow-primary/25 hover:opacity-90 hover:-translate-y-0.5 transition-all"
              >
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
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl p-5 border border-border bg-linear-to-b from-secondary/40 to-secondary/10 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.05)_inset] hover:border-primary/30 hover:shadow-primary/10 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center mb-3`}
                >
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-foreground text-sm mb-1">{item.label}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
