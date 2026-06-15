import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const now = new Date();

  const staticPages = [
    { url: baseUrl, priority: 1.0 },
    { url: `${baseUrl}/pricing`, priority: 0.9 },
    { url: `${baseUrl}/portfolio`, priority: 0.9 },
    { url: `${baseUrl}/how-it-works`, priority: 0.8 },
    { url: `${baseUrl}/demos`, priority: 0.8 },
    { url: `${baseUrl}/contact`, priority: 0.9 },
    { url: `${baseUrl}/blog`, priority: 0.7 },
    { url: `${baseUrl}/track`, priority: 0.6 },
    { url: `${baseUrl}/case-studies`, priority: 0.7 },
  ];

  return staticPages.map((page) => ({
    url: page.url,
    lastModified: now,
    changeFrequency: "weekly",
    priority: page.priority,
  }));
}
