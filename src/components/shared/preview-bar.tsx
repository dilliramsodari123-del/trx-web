import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

interface PreviewBarProps {
  category?: string;
  price?: string;
}

export function PreviewBar({ category = "Business", price = "NPR 4,999" }: PreviewBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] bg-[#0052ff] text-white text-xs py-2 px-4 flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <Zap className="w-3.5 h-3.5 shrink-0" />
        <span className="font-medium">
          Preview — <span className="opacity-80">{category} website built by TRx WEB</span>
        </span>
      </div>
      <Link
        href={`/contact?type=${encodeURIComponent(category)}`}
        className="flex items-center gap-1 bg-white text-[#0052ff] font-semibold rounded-full px-3 py-0.5 hover:bg-blue-50 transition-colors shrink-0"
      >
        Order from {price}
        <ArrowRight className="w-3 h-3" />
      </Link>
    </div>
  );
}
