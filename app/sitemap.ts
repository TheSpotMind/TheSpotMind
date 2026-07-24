import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";

// Served at /sitemap.xml. Static top-level routes, most important first.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/solutions`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];

  // ── Blog (add when it has real posts) ────────────────────────────────────
  // The /blog route already exists but is intentionally left out until it has
  // content. To include it, uncomment — it reads the same posts the pages do:
  //
  //   import { getSortedPosts } from "../lib/posts";
  //   const posts: MetadataRoute.Sitemap = getSortedPosts().map((p) => ({
  //     url: `${SITE_URL}/blog/${p.slug}`,
  //     lastModified: new Date(p.date),
  //     changeFrequency: "monthly",
  //     priority: 0.7,
  //   }));
  //   routes.push(
  //     { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  //     ...posts,
  //   );

  return routes;
}
