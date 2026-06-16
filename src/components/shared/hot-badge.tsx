"use client";

import { motion } from "@/components/shared/motion";
import { cn } from "@/lib/utils";

type BadgeVariant = "hot" | "fast" | "popular" | "new" | "live";
type BadgeSize = "sm" | "md" | "lg";

interface HotBadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  animate?: boolean;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  hot:     "bg-orange-500 text-white shadow-orange-500/30",
  fast:    "bg-[#0066ff] text-white shadow-blue-500/30",
  popular: "bg-violet-600 text-white shadow-violet-500/30",
  new:     "bg-emerald-500 text-white shadow-emerald-500/30",
  live:    "bg-green-500 text-white shadow-green-500/30",
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: "text-[10px] px-2.5 py-1",
  md: "text-xs px-3 py-1.5",
  lg: "text-sm px-4 py-2",
};

export function HotBadge({
  label,
  variant = "hot",
  size = "md",
  animate = false,
  className,
}: HotBadgeProps) {
  const classes = cn(
    "inline-flex items-center gap-1 rounded-full font-semibold uppercase tracking-wide shadow-lg",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (animate) {
    return (
      <motion.span
        className={classes}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        {variant === "live" && (
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        )}
        {label}
      </motion.span>
    );
  }

  return (
    <span className={classes}>
      {variant === "live" && (
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
      )}
      {label}
    </span>
  );
}
