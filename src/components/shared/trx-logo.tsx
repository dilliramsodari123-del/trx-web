import { cn } from "@/lib/utils";

/**
 * TRx WEB brand logo — SVG component, crisp at any size.
 * Icon variant: dark circle with TRx + blue X swoosh.
 * Full variant: icon + wordmark side by side.
 */

interface TrxLogoIconProps {
  size?: number;
  className?: string;
}

export function TrxLogoIcon({ size = 36, className }: TrxLogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-label="TRx WEB logo"
      role="img"
    >
      {/* Dark circular background */}
      <circle cx="50" cy="50" r="50" fill="#0d0d14" />

      {/* Outer ring glow */}
      <circle
        cx="50"
        cy="50"
        r="48"
        stroke="url(#ringGrad)"
        strokeWidth="1.2"
        fill="none"
        opacity="0.6"
      />

      {/* T — left vertical + crossbar */}
      <rect x="18" y="22" width="26" height="6"  rx="1.5" fill="white" opacity="0.95" />
      <rect x="27" y="22" width="8"  height="34" rx="1.5" fill="white" opacity="0.90" />

      {/* R — right side */}
      <rect x="46" y="22" width="7"  height="34" rx="1.5" fill="white" opacity="0.90" />
      <path
        d="M46 22 h12 a8 8 0 0 1 0 16 H46"
        stroke="white"
        strokeWidth="6.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />
      <line x1="53" y1="38" x2="65" y2="56" stroke="white" strokeWidth="6.5" strokeLinecap="round" opacity="0.85" />

      {/* Blue X swoosh — overlapping R bottom and extending right */}
      <line x1="58" y1="42" x2="82" y2="76" stroke="url(#blueGrad)" strokeWidth="7" strokeLinecap="round" />
      <line x1="82" y1="42" x2="58" y2="76" stroke="url(#blueGrad)" strokeWidth="7" strokeLinecap="round" />

      {/* Blue swoosh arc under TRx */}
      <path
        d="M20 62 Q50 74 80 62"
        stroke="url(#blueGrad)"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />

      {/* Gradient definitions */}
      <defs>
        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#0066ff" />
        </linearGradient>
        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#3b82f6" stopOpacity="0.8" />
          <stop offset="50%"  stopColor="#6366f1" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

interface TrxLogoFullProps {
  iconSize?: number;
  className?: string;
  showTagline?: boolean;
}

export function TrxLogoFull({
  iconSize = 36,
  className,
  showTagline = false,
}: TrxLogoFullProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <TrxLogoIcon size={iconSize} />
      <div className="flex flex-col leading-tight">
        <span className="font-bold text-lg text-foreground tracking-tight">
          TRx <span className="text-primary">WEB</span>
        </span>
        {showTagline && (
          <span className="text-[9px] text-muted-foreground tracking-widest uppercase">
            We Build Your Digital Future
          </span>
        )}
      </div>
    </div>
  );
}
