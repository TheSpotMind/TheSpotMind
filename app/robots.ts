import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";

// Served at /robots.txt. Allows all crawlers everywhere and points them at the
// sitemap. (Previously /robots.txt 404'd — harmless, but this makes crawl
// intent explicit and advertises the sitemap.)
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
