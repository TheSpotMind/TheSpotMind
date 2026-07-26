"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeOf, localizedPath } from "../../lib/i18n";
import { getDict } from "../../lib/dictionaries";

export default function Footer() {
  const pathname = usePathname() || "/";
  const locale = localeOf(pathname);
  const t = getDict(locale).footer;
  const nav = getDict(locale).nav;
  const p = (path: string) => localizedPath(locale, path);

  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              TheSpot<span className="text-accent">Mind</span>
            </h3>
            <p className="mt-3 max-w-sm text-sm text-zinc-400">{t.tagline}</p>
            <p className="mt-4 max-w-sm text-sm text-zinc-500">{t.location}</p>
          </div>

          <div className="flex gap-16 text-sm">
            <div>
              <p className="mb-3 text-white">{t.navigation}</p>
              <div className="flex flex-col gap-2 text-zinc-400">
                <Link href={p("/")} className="hover:text-white">{nav.home}</Link>
                <Link href={p("/solutions")} className="hover:text-white">{nav.solutions}</Link>
                <Link href={p("/blog")} className="hover:text-white">{nav.blog}</Link>
                <Link href={p("/contact")} className="hover:text-white">{nav.contact}</Link>
              </div>
            </div>

            <div>
              <p className="mb-3 text-white">{t.company}</p>
              <div className="flex flex-col gap-2 text-zinc-400">
                <Link href={p("/about")} className="hover:text-white">{t.about}</Link>
                {/* Legal pages are English-only; link both locales to them. */}
                <Link href="/privacy" className="hover:text-white">{t.privacy}</Link>
                <Link href="/terms" className="hover:text-white">{t.terms}</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-zinc-500 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} TheSpotMind. {t.rights}</p>

          <div className="flex gap-4">
            <a href="https://x.com/thespotmind" target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter</a>
            <a href="https://www.instagram.com/thespotmind/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
            <a href="https://www.linkedin.com/company/thespotmind/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
