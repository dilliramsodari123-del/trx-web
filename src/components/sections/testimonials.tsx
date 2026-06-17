"use client";

import React, { memo, useRef } from "react";
import { motion, useInView } from "@/components/shared/motion";
import { SectionTopGlow } from "@/components/shared/section-top-glow";
import { TestimonialsBadge } from "@/components/shared/testimonials-badge";
import { cn } from "@/lib/utils";
import { Star, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const TESTIMONIALS = [
  {
    id: "1",
    client_name: "Ramesh Shrestha",
    business_name: "Shrestha Traders",
    review:
      "TRx WEB delivered our business website in exactly 48 hours. The quality is outstanding and our sales have already increased since launch. Best investment for our business!",
    rating: 5,
    website_type: "Business Website",
  },
  {
    id: "2",
    client_name: "Priya Tamang",
    business_name: "Himalayan Cafe",
    review:
      "I was skeptical at first but they delivered a beautiful restaurant website on time with online ordering. Our customers love it and we've seen a huge increase in orders.",
    rating: 5,
    website_type: "Restaurant Website",
  },
  {
    id: "3",
    client_name: "Bikash Gurung",
    business_name: "TechNepal Startup",
    review:
      "Got our MVP website ready in exactly 48 hours. The team was super responsive on WhatsApp and the result far exceeded our expectations. Will definitely use again!",
    rating: 5,
    website_type: "Startup MVP",
  },
  {
    id: "4",
    client_name: "Sita Rai",
    business_name: "Rai Photography",
    review:
      "My portfolio website looks absolutely stunning. The animations and design are world-class. I've already received 5 new client inquiries since launching. Worth every paisa!",
    rating: 5,
    website_type: "Portfolio Website",
  },
  {
    id: "5",
    client_name: "Arjun Karki",
    business_name: "Karki Electronics",
    review:
      "Switched from a freelancer who took 3 months to deliver nothing. TRx WEB had our e-commerce store live in 2 days. The results speak for themselves!",
    rating: 5,
    website_type: "E-Commerce Website",
  },
  {
    id: "6",
    client_name: "Maya Thapa",
    business_name: "Thapa Boutique",
    review:
      "Incredible value for money. Our boutique website has a stunning design that beats many expensive agencies. Highly recommend for any Nepal business!",
    rating: 5,
    website_type: "Business Website",
  },
];

const AVATAR_COLORS = [
  "from-blue-500 to-violet-500",
  "from-green-500 to-teal-500",
  "from-orange-500 to-amber-500",
  "from-pink-500 to-rose-500",
  "from-cyan-500 to-blue-500",
  "from-violet-500 to-purple-500",
];

const col1 = TESTIMONIALS.slice(0, 2);
const col2 = TESTIMONIALS.slice(2, 4);
const col3 = TESTIMONIALS.slice(4, 6);

function Avatar({ name, index }: { name: string; index: number }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div
      className={`w-10 h-10 rounded-full bg-linear-to-br ${
        AVATAR_COLORS[index % AVATAR_COLORS.length]
      } flex items-center justify-center text-white font-bold text-xs shrink-0`}
    >
      {initials}
    </div>
  );
}

const TestimonialsColumn = memo(function TestimonialsColumn({
  className,
  testimonials,
  duration = 20,
}: {
  className?: string;
  testimonials: typeof TESTIMONIALS;
  duration?: number;
}) {
  return (
    <div className={cn("testimonials-marquee-track group", className)}>
      <div
        className="testimonials-marquee flex flex-col gap-6 group-hover:[animation-play-state:paused]"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {[...new Array(2)].map((_, idx) => (
          <React.Fragment key={idx}>
            {testimonials.map((t, i) => (
              <div
                key={`${t.id}-${idx}`}
                className="relative w-full max-w-xs overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-card p-5 sm:p-7 md:p-8 shadow-lg hover:scale-[1.02] hover:shadow-2xl hover:border-primary/30 transition-all duration-300 group"
              >
                {/* Inset shimmer shadow */}
                <div className="absolute inset-0 rounded-3xl shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset] pointer-events-none" />
                <div className="from-primary/10 to-card absolute -top-5 -left-5 -z-10 h-40 w-40 rounded-full bg-linear-to-b blur-md" />

                <div className="relative z-10 flex gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, si) => (
                    <Star
                      key={si}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="relative z-10 text-foreground/90 text-sm leading-relaxed">
                  {t.review}
                </p>

                <div className="relative z-10 mt-5 flex items-center gap-2">
                  <Avatar name={t.client_name} index={i} />
                  <div className="flex flex-col">
                    <span className="text-foreground text-sm font-medium leading-5 tracking-tight">
                      {t.client_name}
                    </span>
                    <span className="text-muted-foreground text-xs leading-5 tracking-tight">
                      {t.business_name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
});

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleShareExperience = () => {
    const msg = encodeURIComponent(
      "Hello TRx WEB! I wanted to share my experience with your service."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section id="testimonials" className="bg-background overflow-hidden py-16 md:py-24 relative">
      <SectionTopGlow />
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-[540px] mb-16 text-center"
        >
          <div className="flex justify-center mb-4">
            <TestimonialsBadge />
          </div>

          <h2 className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-linear-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]">
            What Our Clients Say
          </h2>

          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-amber-400 text-amber-400"
              />
            ))}
            <span className="text-amber-500 font-bold ml-2">4.9 / 5</span>
          </div>

          <p className="mt-3 text-muted-foreground text-sm">
            Based on 50+ reviews from businesses across Nepal
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 sm:gap-6 max-h-[460px] sm:max-h-[600px] md:max-h-[740px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
          <TestimonialsColumn testimonials={col1} duration={15} />
          <TestimonialsColumn
            testimonials={col2}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={col3}
            className="hidden lg:block"
            duration={17}
          />
        </div>

        {/* Share CTA — mvpblocks pattern with hairline borders */}
        <div className="-mt-8 flex justify-center">
          <button
            onClick={handleShareExperience}
            className="group border-primary/30 bg-background text-foreground hover:border-primary/60 hover:bg-primary/10 relative inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-all active:scale-95"
          >
            <div className="via-primary/40 absolute inset-x-0 -top-px mx-auto h-px w-3/4 bg-linear-to-r from-transparent to-transparent" />
            <div className="via-primary/40 absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-linear-to-r from-transparent to-transparent" />
            <MessageCircle className="text-primary h-4 w-4" />
            Share your experience
          </button>
        </div>
      </div>
    </section>
  );
}
