import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency = "NPR") {
  return new Intl.NumberFormat("ne-NP", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function generateWhatsAppMessage(lead: {
  full_name: string;
  business_name?: string;
  website_type: string;
  pages_needed?: string;
  features_required?: string;
  budget?: string;
  additional_notes?: string;
  phone?: string;
  email?: string;
}): string {
  return encodeURIComponent(
    `Hello TrX Web! 👋

I would like to order a website.

*Name:* ${lead.full_name}
*Business:* ${lead.business_name || "N/A"}
*Website Type:* ${lead.website_type}
*Pages Needed:* ${lead.pages_needed || "N/A"}
*Features Required:* ${lead.features_required || "N/A"}
*Budget:* ${lead.budget || "N/A"}
*Email:* ${lead.email || "N/A"}
*Phone:* ${lead.phone || "N/A"}

${lead.additional_notes ? `*Additional Notes:* ${lead.additional_notes}` : ""}

Please contact me and let's start the project! 🚀`
  );
}

export function openWhatsApp(phone: string, message: string) {
  const url = `https://wa.me/${phone}?text=${message}`;
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "…";
}
