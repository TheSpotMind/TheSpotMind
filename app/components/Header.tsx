"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { localeOf, localizedPath } from "../../lib/i18n";
import { getDict } from "../../lib/dictionaries";
import LanguageToggle from "./LanguageToggle";

// Header lives in the shared root layout, which can't know the locale (English
// is unprefixed), so it derives the locale from the path and localizes its own
// labels and links. It also keeps <html lang> in sync client-side, since the
// server-rendered root layout can't set it per-locale.
export default function Header() {
  const pathname = usePathname() || "/";
  const locale = localeOf(pathname);
  const t = getDict(locale).nav;

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const link = (path: string, label: string) => (
    <Link
      href={localizedPath(locale, path)}
      className="transition hover:text-white"
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href={localizedPath(locale, "/")} className="flex items-center">
          <Image
            src="/logo-wordmark.png"
            alt="TheSpotMind"
            width={698}
            height={88}
            className="h-7 w-auto"
            loading="eager"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          {link("/", t.home)}
          {link("/solutions", t.solutions)}
          {link("/about", t.about)}
          {link("/blog", t.blog)}
          {link("/contact", t.contact)}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle />

          <a
            href="https://dashboard.thespotmind.com/portal"
            className="hidden rounded-full border border-white/20 px-4 py-2.5 text-sm text-zinc-400 transition hover:border-white/35 hover:text-white sm:inline-block"
          >
            {t.creatorLogin}
          </a>

          <Link
            href={localizedPath(locale, "/contact")}
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:scale-[1.02]"
          >
            {t.bookCall}
          </Link>
        </div>
      </div>
    </header>
  );
}
