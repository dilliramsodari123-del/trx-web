"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "@/components/shared/motion";
import { cn } from "@/lib/utils";

interface CyclingTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

export function CyclingText({ words, interval = 2500, className }: CyclingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className={cn("relative inline-block", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className="inline-block text-gradient-blue"
          initial={{ opacity: 0, y: -20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0.3 }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
