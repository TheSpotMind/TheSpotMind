// Site-wide internationalization helpers. English is the default locale and
// lives at the root (/about); Spanish is mirrored under /es (/es/about). These
// helpers are the single source of truth for translating a logical path to a
// localized URL and back, so routing, links, hreflang, and the language toggle
// all agree.
import { SITE_URL } from "./site";

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** The locale a pathname belongs to (defaults to English). */
export function localeOf(pathname: string): Locale {
  return pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
}

/** Strip the locale prefix to get the shared, locale-agnostic path. */
export function toLogicalPath(pathname: string): string {
  if (pathname === "/es") return "/";
  if (pathname.startsWith("/es/")) return pathname.slice(3);
  return pathname;
}

/** Turn a logical path (e.g. "/about") into the URL for a given locale. */
export function localizedPath(locale: Locale, logicalPath: string): string {
  const path = logicalPath.startsWith("/") ? logicalPath : `/${logicalPath}`;
  if (locale === "en") return path;
  return path === "/" ? "/es" : `/es${path}`;
}

/**
 * Metadata `alternates` for a page: a self-referential canonical plus hreflang
 * links to every locale (and x-default → English). Drop this into a page's
 * generateMetadata so search engines and AI treat the localized URLs as the
 * same page in different languages.
 */
export function metadataAlternates(locale: Locale, logicalPath: string) {
  return {
    canonical: `${SITE_URL}${localizedPath(locale, logicalPath)}`,
    languages: {
      en: `${SITE_URL}${localizedPath("en", logicalPath)}`,
      es: `${SITE_URL}${localizedPath("es", logicalPath)}`,
      "x-default": `${SITE_URL}${localizedPath("en", logicalPath)}`,
    },
  };
}
