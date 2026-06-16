import Image from "next/image";
import { cn } from "@/lib/utils";
import { HotBadge } from "@/components/shared/hot-badge";

type BadgeVariant = "hot" | "fast" | "popular" | "new" | "live";

interface WebsiteMockupProps {
  imageUrl: string;
  altText?: string;
  url?: string;
  floating?: boolean;
  shadow?: "sm" | "lg" | "xl";
  className?: string;
  badge?: {
    label: string;
    variant: BadgeVariant;
    position?: "top-right" | "bottom-left";
  };
}

const shadowClasses = {
  sm: "shadow-md",
  lg: "shadow-xl",
  xl: "shadow-2xl shadow-blue-500/20",
};

export function WebsiteMockup({
  imageUrl,
  altText = "Website preview",
  url = "yourwebsite.com.np",
  floating = false,
  shadow = "xl",
  className,
  badge,
}: WebsiteMockupProps) {
  const badgePositionClass =
    badge?.position === "bottom-left" ? "bottom-3 left-3" : "top-10 right-3";

  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden",
        shadowClasses[shadow],
        floating && "animate-float",
        className
      )}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#1a1f2e]">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        <div className="mx-auto flex-1 max-w-[60%]">
          <div className="bg-white/10 rounded px-3 py-0.5 text-[10px] text-white/50 text-center truncate">
            {url}
          </div>
        </div>
      </div>

      {/* Screenshot */}
      <div className="relative aspect-[16/10] bg-slate-100">
        <Image
          src={imageUrl}
          alt={altText}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Optional badge */}
      {badge && (
        <div className={cn("absolute z-10", badgePositionClass)}>
          <HotBadge label={badge.label} variant={badge.variant} size="sm" />
        </div>
      )}
    </div>
  );
}
