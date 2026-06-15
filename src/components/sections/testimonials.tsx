"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionWrapper, SectionHeading } from "@/components/shared/section-wrapper";
import { motion, AnimatePresence } from "@/components/shared/motion";

const STATIC_TESTIMONIALS = [
  {
    id: "1",
    client_name: "Ramesh Shrestha",
    business_name: "Shrestha Traders",
    review:
      "TrX Web delivered our business website in exactly 48 hours. The quality is outstanding and our sales have already increased since launch. Best investment for our business!",
    rating: 5,
    photo_url: null,
    website_type: "Business Website",
  },
  {
    id: "2",
    client_name: "Priya Tamang",
    business_name: "Himalayan Cafe",
    review:
      "I was skeptical at first but they delivered a beautiful restaurant website on time with online ordering. Our customers love it and we've seen a huge increase in orders.",
    rating: 5,
    photo_url: null,
    website_type: "Restaurant Website",
  },
  {
    id: "3",
    client_name: "Bikash Gurung",
    business_name: "TechNepal Startup",
    review:
      "Got our MVP website ready in exactly 48 hours. The team was super responsive on WhatsApp and the result far exceeded our expectations. Will definitely use again!",
    rating: 5,
    photo_url: null,
    website_type: "Startup MVP",
  },
  {
    id: "4",
    client_name: "Sita Rai",
    business_name: "Rai Photography",
    review:
      "My portfolio website looks absolutely stunning. The animations and design are world-class. I've already received 5 new client inquiries since launching. Worth every paisa!",
    rating: 5,
    photo_url: null,
    website_type: "Portfolio Website",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-slate-200"}`}
        />
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const colors = [
    "from-blue-500 to-violet-500",
    "from-green-500 to-teal-500",
    "from-orange-500 to-amber-500",
    "from-pink-500 to-rose-500",
  ];
  const color = colors[name.charCodeAt(0) % colors.length];
  return (
    <div
      className={`w-12 h-12 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
    >
      {initials}
    </div>
  );
}

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const total = STATIC_TESTIMONIALS.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <SectionWrapper className="py-24 bg-slate-50" id="testimonials">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Client Love"
          title="What Our Clients Say"
          subtitle="Real reviews from real clients across Nepal who trusted TrX Web with their online presence."
        />

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10"
            >
              <Quote className="w-10 h-10 text-blue-100 mb-4" />
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8">
                &ldquo;{STATIC_TESTIMONIALS[current].review}&rdquo;
              </p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <Avatar name={STATIC_TESTIMONIALS[current].client_name} />
                  <div>
                    <p className="font-bold text-slate-900">
                      {STATIC_TESTIMONIALS[current].client_name}
                    </p>
                    <p className="text-sm text-slate-500">
                      {STATIC_TESTIMONIALS[current].business_name}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <StarRating rating={STATIC_TESTIMONIALS[current].rating} />
                  <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                    {STATIC_TESTIMONIALS[current].website_type}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {STATIC_TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-blue-600" : "w-2 bg-slate-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4 text-slate-600" />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
