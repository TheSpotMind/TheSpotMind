import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
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

        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}