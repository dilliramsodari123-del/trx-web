"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_NUMBER } from "@/lib/constants";

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  size?: "sm" | "default" | "lg" | "xl";
  className?: string;
}

export function WhatsAppButton({
  message = "Hello TrX Web! I'm interested in getting a website.",
  label = "Chat on WhatsApp",
  size = "lg",
  className,
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const msg = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <Button
      size={size}
      variant="whatsapp"
      onClick={handleClick}
      className={className}
    >
      <MessageCircle className="w-4 h-4" />
      {label}
    </Button>
  );
}
