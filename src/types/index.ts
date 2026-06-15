export type PortfolioCategory =
  | "Business"
  | "Ecommerce"
  | "Portfolio"
  | "Blog"
  | "Education"
  | "Restaurant"
  | "Personal Brand"
  | "Events";

export type WebsiteType =
  | "Business Website"
  | "E-Commerce Website"
  | "Portfolio Website"
  | "Blogging Platform"
  | "Online Course Website"
  | "Startup MVP"
  | "Restaurant Website"
  | "School/College Website"
  | "Event Website"
  | "Personal Brand Website"
  | "Gift Website";

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  thumbnail_url: string;
  live_url: string;
  is_featured: boolean;
  sort_order: number;
  created_at: string;
}

export interface Lead {
  id?: string;
  full_name: string;
  business_name?: string;
  phone: string;
  whatsapp?: string;
  email: string;
  website_type: WebsiteType;
  business_category?: string;
  preferred_color?: string;
  pages_needed?: string;
  features_required?: string;
  reference_websites?: string;
  deadline?: string;
  budget?: string;
  additional_notes?: string;
  status?: "new" | "contacted" | "in_progress" | "delivered" | "cancelled";
  created_at?: string;
}

export interface Testimonial {
  id: string;
  client_name: string;
  business_name: string;
  review: string;
  rating: number;
  photo_url?: string;
  website_type: string;
  is_published: boolean;
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image?: string;
  author: string;
  tags: string[];
  is_published: boolean;
  published_at?: string;
  created_at: string;
}

export interface DemoSite {
  id: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  thumbnail_url: string;
  demo_url: string;
  template_id?: string;
  is_active: boolean;
  created_at: string;
}

export interface ProjectTrack {
  id: string;
  project_id: string;
  client_name: string;
  status: "received" | "designing" | "developing" | "review" | "delivered";
  progress: number;
  started_at: string;
  estimated_delivery: string;
  updates: { message: string; timestamp: string }[];
}

export interface PricingPlan {
  name: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}
