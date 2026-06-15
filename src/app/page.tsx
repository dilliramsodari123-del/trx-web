import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { PortfolioPreviewSection } from "@/components/sections/portfolio-preview";
import { GiftWebsiteSection } from "@/components/sections/gift-website";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FaqSection } from "@/components/sections/faq";
import { OrderFormSection } from "@/components/sections/order-form";
import { FinalCtaSection } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "TrX Web — Professional Websites Delivered in 48 Hours | Nepal",
  description:
    "Get your professional business website in just 48 hours starting from NPR 4,999. Nepal's fastest web development company. Mobile responsive, SEO ready, secure hosting.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <PortfolioPreviewSection />
      <WhyChooseUsSection />
      <GiftWebsiteSection />
      <TestimonialsSection />
      <FaqSection />
      <OrderFormSection />
      <FinalCtaSection />
    </>
  );
}
