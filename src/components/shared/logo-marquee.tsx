import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeItem {
  label: string;
  icon?: ReactNode;
}

interface LogoMarqueeProps {
  items: MarqueeItem[];
  rows?: 1 | 2;
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  className?: string;
  itemClassName?: string;
}

const speedDuration: Record<string, string> = {
  slow: "40s",
  normal: "30s",
  fast: "20s",
};

function MarqueeRow({
  items,
  reverse,
  speed,
  pauseOnHover,
  itemClassName,
}: {
  items: MarqueeItem[];
  reverse?: boolean;
  speed: string;
  pauseOnHover: boolean;
  itemClassName?: string;
}) {
  const doubled = [...items, ...items];
  const duration = speedDuration[speed] ?? "30s";

  return (
    <div
      className={cn(
        "flex gap-3 overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      )}
    >
      <div
        className={cn(
          "flex gap-3 min-w-full shrink-0",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{ animationDuration: duration }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium whitespace-nowrap shadow-sm text-foreground backdrop-blur-sm",
              itemClassName
            )}
          >
            {item.icon}
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export function LogoMarquee({
  items,
  rows = 1,
  speed = "normal",
  pauseOnHover = true,
  className,
  itemClassName,
}: LogoMarqueeProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <MarqueeRow
        items={items}
        reverse={false}
        speed={speed}
        pauseOnHover={pauseOnHover}
        itemClassName={itemClassName}
      />
      {rows === 2 && (
        <MarqueeRow
          items={items}
          reverse={true}
          speed={speed}
          pauseOnHover={pauseOnHover}
          itemClassName={itemClassName}
        />
      )}
    </div>
  );
}
