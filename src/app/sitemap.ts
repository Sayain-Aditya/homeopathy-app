import type { MetadataRoute } from "next";
import { absoluteUrl, serviceSeo } from "@/lib/seo";
import { conditionPages } from "@/lib/conditionPages";

const staticRoutes = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/services", priority: 0.9 },
  { path: "/contact", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    ...serviceSeo.map((service) => ({
      url: absoluteUrl(service.path),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...conditionPages.map((page) => ({
      url: absoluteUrl(page.urlPath),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];
}
