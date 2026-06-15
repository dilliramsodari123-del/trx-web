import type { PricingPlan, NavItem } from "@/types";

export const SITE_NAME = "TrX Web";
export const SITE_TAGLINE = "Professional Websites Delivered in 48 Hours";
export const SITE_DESCRIPTION =
  "Launch your business online with a fast, secure and professionally designed website starting from just NPR 4,999. Nepal's fastest website delivery company.";
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "9779800000000";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://trxweb.com.np";

export const NAV_ITEMS: NavItem[] = [
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Demos", href: "/demos" },
  { label: "Blog", href: "/blog" },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: 4999,
    currency: "NPR",
    description: "Perfect for individuals and small businesses",
    features: [
      "Up to 5 pages",
      "Mobile responsive",
      "Basic SEO setup",
      "Contact form",
      "48-hour delivery",
      "1 revision round",
      "SSL certificate",
      "1 month support",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Business",
    price: 9999,
    currency: "NPR",
    description: "For growing businesses that need more",
    features: [
      "Up to 10 pages",
      "Mobile responsive",
      "Advanced SEO",
      "Contact + booking form",
      "48-hour delivery",
      "3 revision rounds",
      "Admin dashboard",
      "WhatsApp integration",
      "Google Analytics",
      "3 months support",
    ],
    highlighted: true,
    cta: "Most Popular",
  },
  {
    name: "E-Commerce",
    price: 19999,
    currency: "NPR",
    description: "Full-featured online store ready to sell",
    features: [
      "Unlimited pages",
      "Product catalog",
      "Shopping cart & checkout",
      "Payment gateway",
      "Order management",
      "Inventory tracking",
      "Advanced SEO",
      "Analytics dashboard",
      "Mobile app ready",
      "6 months support",
    ],
    highlighted: false,
    cta: "Start Selling",
  },
  {
    name: "Enterprise",
    price: 0,
    currency: "NPR",
    description: "Custom solutions for large organisations",
    features: [
      "Custom features",
      "Multi-language",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Team training",
      "Source code",
      "Ongoing maintenance",
    ],
    highlighted: false,
    cta: "Contact Us",
  },
];

export const SERVICES = [
  {
    title: "Business Website",
    description:
      "Professional websites that convert visitors into customers for your business.",
    icon: "Building2",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "E-Commerce Website",
    description:
      "Full-featured online stores with payment gateways and inventory management.",
    icon: "ShoppingCart",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Portfolio Website",
    description:
      "Showcase your work beautifully with a stunning personal portfolio.",
    icon: "Briefcase",
    color: "from-purple-500 to-violet-600",
  },
  {
    title: "Blogging Platform",
    description:
      "Share your stories and ideas with a beautiful, fast blogging platform.",
    icon: "PenLine",
    color: "from-orange-500 to-amber-600",
  },
  {
    title: "Online Course Website",
    description:
      "Sell and deliver courses online with a full learning management system.",
    icon: "GraduationCap",
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Startup MVP Website",
    description:
      "Launch your startup idea fast with a professional MVP website.",
    icon: "Rocket",
    color: "from-cyan-500 to-sky-600",
  },
  {
    title: "Restaurant Website",
    description:
      "Menu, reservations, and online ordering for restaurants and cafes.",
    icon: "UtensilsCrossed",
    color: "from-red-500 to-rose-600",
  },
  {
    title: "School/College Website",
    description:
      "Academic websites with admissions, notices, and student portals.",
    icon: "School",
    color: "from-indigo-500 to-blue-600",
  },
  {
    title: "Event Website",
    description:
      "Event landing pages with registrations, schedules, and ticketing.",
    icon: "CalendarDays",
    color: "from-teal-500 to-cyan-600",
  },
  {
    title: "Personal Brand Website",
    description:
      "Build your personal brand online with a premium personal website.",
    icon: "Star",
    color: "from-yellow-500 to-amber-600",
  },
];

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Business",
  "Ecommerce",
  "Portfolio",
  "Blog",
  "Education",
  "Restaurant",
  "Personal Brand",
  "Events",
] as const;

export const FAQ_ITEMS = [
  {
    question: "How can you deliver a website within 48 hours?",
    answer:
      "We have a streamlined process with pre-built premium components, a dedicated team, and a proven 48-hour workflow. Once you submit your requirements and confirm the order, our team starts immediately. We work in parallel — design, development, and content — to deliver on time.",
  },
  {
    question: "What is included in the NPR 4,999 Starter package?",
    answer:
      "The Starter package includes up to 5 pages, mobile-responsive design, basic SEO setup, a contact form, SSL certificate, 1 revision round, and 1 month of support. Everything your business needs to get online fast.",
  },
  {
    question: "Do I get the source code of my website?",
    answer:
      "Yes! All Enterprise plans include full source code. For Starter and Business plans, source code can be purchased as an add-on. We believe in transparency and giving you full ownership of your website.",
  },
  {
    question: "Can I request changes after delivery?",
    answer:
      "Absolutely. Each plan includes revision rounds. Starter gets 1, Business gets 3, and E-Commerce gets unlimited revisions during the first month. After that, we offer affordable monthly maintenance plans.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "100% yes. Every website we build is mobile-first and tested on all screen sizes — phones, tablets, and desktops. We use modern responsive design standards to ensure your site looks perfect everywhere.",
  },
  {
    question: "Do you provide hosting for the website?",
    answer:
      "We deploy on Vercel by default (blazing fast, global CDN, 99.9% uptime). The first year of hosting is included. We can also deploy to your preferred hosting provider like Hostinger, Namecheap, or a custom server.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes! We offer website redesign services. Share your current website URL and we'll transform it into a modern, fast, and conversion-optimised website. Redesigns follow the same 48-hour delivery timeline.",
  },
];

export const TRUST_BADGES = [
  "48 Hour Delivery",
  "Mobile Responsive",
  "SEO Ready",
  "Secure Hosting",
  "Admin Dashboard",
];

export const STATS = [
  { value: "48", unit: "Hours", label: "Website Delivery" },
  { value: "100%", unit: "", label: "Mobile Responsive" },
  { value: "99.9%", unit: "", label: "Uptime Guarantee" },
  { value: "24/7", unit: "", label: "Support Available" },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Submit Requirements",
    description:
      "Fill out our detailed order form with your business details, design preferences, and feature requirements.",
    icon: "ClipboardList",
  },
  {
    step: "02",
    title: "Discuss on WhatsApp",
    description:
      "Our team contacts you on WhatsApp within 1 hour to clarify details and confirm the project scope.",
    icon: "MessageCircle",
  },
  {
    step: "03",
    title: "Build in 48 Hours",
    description:
      "Our dedicated team designs and develops your website using the latest technology stack.",
    icon: "Code2",
  },
  {
    step: "04",
    title: "Launch & Deliver",
    description:
      "We deploy your website live, hand over access credentials, and provide onboarding support.",
    icon: "Rocket",
  },
];

export const COMPARISON_TABLE = {
  features: [
    "Delivery Time",
    "Price Range",
    "Communication",
    "Technology",
    "SEO Optimisation",
    "Mobile Optimisation",
    "Support",
    "Revisions",
  ],
  traditional: [
    "2–8 weeks",
    "NPR 50,000+",
    "Emails & meetings",
    "Outdated stacks",
    "Extra cost",
    "Extra cost",
    "Limited",
    "Charged separately",
  ],
  trxweb: [
    "48 Hours",
    "From NPR 4,999",
    "Direct WhatsApp",
    "Next.js + Supabase",
    "Included",
    "Included",
    "24/7 chat",
    "Included",
  ],
};
