import { SectionWrapper, SectionHeading } from "@/components/shared/section-wrapper";
import { PricingCalculator } from "@/components/shared/pricing-calculator";

export function PricingCalculatorSection() {
  return (
    <SectionWrapper className="bg-secondary/20 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Build Your Package"
          title="Get an Instant Price Estimate"
          subtitle="Select your website type and add the features you need. No hidden fees."
        />
        <PricingCalculator />
      </div>
    </SectionWrapper>
  );
}
