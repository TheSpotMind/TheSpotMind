"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Global EN/ES language control shown in the header on every page. The site is
// English except for the Spanish landing (/start/es), so "Spanish" is active
// only there; everywhere else English is active and ES links to the Spanish
// landing. The active side is a non-link label; the other side links across.
export default function LanguageToggle() {
  const pathname = usePathname() || "/";
  const isSpanish = pathname.startsWith("/start/es");

  const active = "bg-white px-3 py-1.5 font-medium text-black";
  const link = "px-3 py-1.5 text-zinc-300 transition hover:text-white";

  return (
    <div className="inline-flex overflow-hidden rounded-full border border-white/15 text-xs">
      {isSpanish ? (
        <Link href="/start/en" hrefLang="en" className={link}>
          EN
        </Link>
      ) : (
        <span className={active}>EN</span>
      )}

      {isSpanish ? (
        <span className={active}>ES</span>
      ) : (
        <Link href="/start/es" hrefLang="es" className={link}>
          ES
        </Link>
      )}
    </div>
  );
}
