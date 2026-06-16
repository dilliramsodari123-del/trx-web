"use client";

import { motion } from "@/components/shared/motion";

export function TestimonialsBadge() {
  return (
    <button className="group relative inline-block cursor-pointer rounded-full bg-background/50 border border-zinc-500/80 px-6 py-1 hover:scale-105 hover:shadow-xl transition-all">
      {/* Top hairline */}
      <motion.div
        className="via-primary absolute inset-x-0 -top-px h-0.5 w-1/2 left-1/2 -translate-x-1/2 bg-linear-to-r from-transparent to-transparent"
        animate={{ width: ["50%", "75%", "50%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Bottom hairline */}
      <motion.div
        className="via-primary absolute inset-x-0 -bottom-px h-0.5 w-1/2 left-1/2 -translate-x-1/2 bg-linear-to-r from-transparent to-transparent"
        animate={{ width: ["50%", "75%", "50%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
      />
      <span className="text-xs font-semibold text-foreground">✶ Testimonials</span>
    </button>
  );
}
