"use client";

import { SectionWrapper, SectionHeading } from "@/components/shared/section-wrapper";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export function FaqSection() {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello TrX Web! I have a question about your services."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <SectionWrapper className="py-24 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FAQs"
          title="Common Questions Answered"
          subtitle="Everything you need to know before ordering your website."
        />
        <Accordion type="single" collapsible className="w-full">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-10 text-center">
          <p className="text-slate-500 mb-4">Still have questions?</p>
          <Button variant="whatsapp" size="lg" onClick={handleWhatsApp}>
            <MessageCircle className="w-4 h-4" />
            Ask on WhatsApp
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
