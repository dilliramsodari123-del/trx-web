import { LogoMarquee } from "@/components/shared/logo-marquee";
import { MARQUEE_TRUST_ITEMS } from "@/lib/constants";

export function TrustMarqueeSection() {
  return (
    <div className="bg-background border-y border-border/50 py-6 overflow-hidden relative">
      <div className="via-primary/30 absolute inset-x-0 top-0 mx-auto h-px w-2/3 bg-linear-to-r from-transparent to-transparent" />
      <div className="via-primary/30 absolute inset-x-0 bottom-0 mx-auto h-px w-2/3 bg-linear-to-r from-transparent to-transparent" />
      <LogoMarquee items={MARQUEE_TRUST_ITEMS} rows={2} pauseOnHover />
    </div>
  );
}
