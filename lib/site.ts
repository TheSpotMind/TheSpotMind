// Canonical production origin. Single source of truth for absolute URLs —
// imported by app/robots.ts and app/sitemap.ts so the domain lives in one
// place. No trailing slash.
export const SITE_URL = "https://www.thespotmind.com";

// Display name of the brand, reused in structured data.
export const SITE_NAME = "TheSpotMind";

// Public social profiles. Populate the Organization schema's `sameAs`, which
// helps search engines and AI connect these accounts to the same entity. Keep
// in sync with the links in app/components/Footer.tsx.
export const SOCIAL_PROFILES = [
  "https://x.com/thespotmind",
  "https://www.instagram.com/thespotmind/",
  "https://www.linkedin.com/company/thespotmind/",
];

// A stable @id for the Organization node. Other schema (e.g. a BlogPosting's
// publisher) references this id instead of repeating the whole org object, so
// consumers understand it's the same entity.
export const ORG_ID = `${SITE_URL}/#organization`;

/** JSON-LD Organization describing the brand. Emitted site-wide in the layout. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "We help creators grow, engage, and monetize their communities with systems and AI automation.",
    sameAs: SOCIAL_PROFILES,
    // City-level address only. We deliberately omit streetAddress/telephone
    // until they're real and publishable — partial address data fails
    // verification and weakens the entity signal rather than strengthening it.
    address: {
      "@type": "PostalAddress",
      addressLocality: "Miami",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Place", name: "Latin America" },
      { "@type": "City", name: "Miami" },
      { "@type": "City", name: "New York" },
    ],
    knowsLanguage: ["en", "es"],
  };
}
