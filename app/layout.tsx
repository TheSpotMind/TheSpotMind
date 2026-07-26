import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import LanguageToggle from "./components/LanguageToggle";
import { SITE_URL, organizationSchema } from "../lib/site";

export const metadata = {
  // Resolves relative URLs in metadata (Open Graph images, canonical, etc.)
  // and stops Next defaulting metadataBase to localhost at build time.
  metadataBase: new URL(SITE_URL),
  // './' makes each route self-canonical (resolved against the current path),
  // rather than pointing every page at the homepage as '/' would.
  alternates: { canonical: "./" },
  title: "TheSpotMind",
  description:
    "We help creators grow, engage, and monetize their communities with systems and AI automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {/* Site-wide Organization structured data (AEO / rich results). */}
        <JsonLd data={organizationSchema()} />

        <header className="sticky top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center">
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
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <Link href="/solutions" className="transition hover:text-white">
                Solutions
              </Link>
              <Link href="/about" className="transition hover:text-white">
                About
              </Link>
              <Link href="/blog" className="transition hover:text-white">
                Blog
              </Link>
              <Link href="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* Global language control — the site's single EN/ES switch. */}
              <LanguageToggle />

              {/* Creators sign in on the dashboard subdomain, not here. Ghost pill
                  matches the app header's own secondary buttons. */}
              <a
                href="https://dashboard.thespotmind.com/portal"
                className="rounded-full border border-white/20 px-4 py-2.5 text-sm text-zinc-400 transition hover:border-white/35 hover:text-white"
              >
                Creator Login
              </a>

              <Link
                href="/contact"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:scale-[1.02]"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </header>

        {children}

        <Footer />
      </body>
    </html>
  );
}