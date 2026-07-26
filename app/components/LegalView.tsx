import { notFound } from "next/navigation";
import { getLegalDoc, type LegalSlug } from "../../lib/legal";
import { type Locale } from "../../lib/i18n";

// Renders a finalized legal doc for a locale. If the doc is missing or still
// has unfilled placeholders, getLegalDoc returns null and we 404 rather than
// serve incomplete legal text.
export default async function LegalView({
  locale,
  slug,
}: {
  locale: Locale;
  slug: LegalSlug;
}) {
  const doc = await getLegalDoc(locale, slug);
  if (!doc) notFound();

  return (
    <main lang={locale} className="min-h-screen bg-black text-white px-6 py-24">
      <article
        className="blog-content mx-auto max-w-3xl"
        dangerouslySetInnerHTML={{ __html: doc.contentHtml }}
      />
    </main>
  );
}
