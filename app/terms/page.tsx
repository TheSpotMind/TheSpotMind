import { notFound } from "next/navigation";
import { getLegalDoc } from "../../lib/legal";

// Static until the doc is finalized. While placeholders remain, getLegalDoc
// returns null and the route 404s, so incomplete legal text is never served.
export async function generateMetadata() {
  const doc = await getLegalDoc("terms");
  if (!doc) return { title: "Terms of Service — TheSpotMind" };
  return { title: doc.title, description: doc.description };
}

export default async function TermsPage() {
  const doc = await getLegalDoc("terms");
  if (!doc) notFound();

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <article
        className="blog-content mx-auto max-w-3xl"
        dangerouslySetInnerHTML={{ __html: doc.contentHtml }}
      />
    </main>
  );
}
