import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";
import { tourCategories } from "@/lib/tours";
import { guides } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/tours`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/guides`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/reviews`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE_URL}/about`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = tourCategories.map((c) => ({
    url: `${SITE_URL}/tours/${c.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const guideRoutes: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${SITE_URL}/guides/${g.slug}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...categoryRoutes, ...guideRoutes];
}
