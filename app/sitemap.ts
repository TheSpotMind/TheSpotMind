import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";
import { locales, localizedPath } from "../lib/i18n";
import { getSortedPosts } from "../lib/posts";

// Served at /sitemap.xml. Each localized page is listed with hreflang
// alternates linking its other-language twin, so both locales are discoverable
// and understood as translations rather than duplicates.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Pages that exist in both locales (English at root, Spanish under /es).
  const bilingual: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/solutions", priority: 0.8, freq: "monthly" },
    { path: "/about", priority: 0.6, freq: "monthly" },
    { path: "/contact", priority: 0.5, freq: "yearly" },
    { path: "/blog", priority: 0.7, freq: "weekly" },
    { path: "/privacy", priority: 0.3, freq: "yearly" },
    { path: "/terms", priority: 0.3, freq: "yearly" },
  ];

  const languagesFor = (path: string) =>
    Object.fromEntries(locales.map((l) => [l, `${SITE_URL}${localizedPath(l, path)}`]));

  const routes: MetadataRoute.Sitemap = bilingual.flatMap(({ path, priority, freq }) =>
    locales.map((locale) => ({
      url: `${SITE_URL}${localizedPath(locale, path)}`,
      lastModified: now,
      changeFrequency: freq,
      priority,
      alternates: { languages: languagesFor(path) },
    })),
  );

  // Blog posts — one entry per locale a given post exists in.
  for (const locale of locales) {
    for (const post of getSortedPosts(locale)) {
      routes.push({
        url: `${SITE_URL}${localizedPath(locale, `/blog/${post.slug}`)}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: { languages: languagesFor(`/blog/${post.slug}`) },
      });
    }
  }

  return routes;
}
