"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeOf, toLogicalPath, localizedPath } from "../../lib/i18n";

// Global EN/ES switch. Keeps you on the same page: it maps the current path to
// its twin in the other language (e.g. /es/about <-> /about). The active locale
// is a plain label; the other is a link.
export default function LanguageToggle() {
  const pathname = usePathname() || "/";
  const locale = localeOf(pathname);
  const logical = toLogicalPath(pathname);

  const active = "bg-white px-3 py-1.5 font-medium text-black";
  const link = "px-3 py-1.5 text-zinc-300 transition hover:text-white";

  return (
    <div className="inline-flex overflow-hidden rounded-full border border-white/15 text-xs">
      {locale === "en" ? (
        <span className={active}>EN</span>
      ) : (
        <Link href={localizedPath("en", logical)} hrefLang="en" className={link}>
          EN
        </Link>
      )}

      {locale === "es" ? (
        <span className={active}>ES</span>
      ) : (
        <Link href={localizedPath("es", logical)} hrefLang="es" className={link}>
          ES
        </Link>
      )}
    </div>
  );
}
