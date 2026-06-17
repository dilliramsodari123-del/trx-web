import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/hero";
import { TrustMarqueeSection } from "@/components/sections/trust-marquee";
import { ServicesSection } from "@/components/sections/services";
import { HowItWorksSection } from "@/components/sections/how-it-works";

// Sections below the fold — split into separate JS chunks, still SSR'd for SEO
const PortfolioPreviewSection = dynamic(() =>
  import("@/components/sections/portfolio-preview").then((m) => ({ default: m.PortfolioPreviewSection }))
);
const WhyChooseUsSection = dynamic(() =>
  import("@/components/sections/why-choose-us").then((m) => ({ default: m.WhyChooseUsSection }))
);
const PricingCalculatorSection = dynamic(() =>
  import("@/components/sections/pricing-calculator-section").then((m) => ({ default: m.PricingCalculatorSection }))
);
const GiftWebsiteSection = dynamic(() =>
  import("@/components/sections/gift-website").then((m) => ({ default: m.GiftWebsiteSection }))
);
const TestimonialsSection = dynamic(() =>
  import("@/components/sections/testimonials").then((m) => ({ default: m.TestimonialsSection }))
);
const FaqSection = dynamic(() =>
  import("@/components/sections/faq").then((m) => ({ default: m.FaqSection }))
);
const OrderFormSection = dynamic(() =>
  import("@/components/sections/order-form").then((m) => ({ default: m.OrderFormSection }))
);
const FinalCtaSection = dynamic(() =>
  import("@/components/sections/final-cta").then((m) => ({ default: m.FinalCtaSection }))
);

export const metadata: Metadata = {
  title: "TRx WEB — Professional Websites Delivered in 48 Hours | Nepal",
  description:
    "Get your professional business website in just 48 hours starting from NPR 4,999. Nepal's fastest web development company. Mobile responsive, SEO ready, secure hosting.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustMarqueeSection />
      <ServicesSection />
      <HowItWorksSection />
      <PortfolioPreviewSection />
      <WhyChooseUsSection />
      <PricingCalculatorSection />
      <GiftWebsiteSection />
      <TestimonialsSection />
      <FaqSection />
      <OrderFormSection />
      <FinalCtaSection />
    </>
  );
}
