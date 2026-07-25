import JsonLd from "./JsonLd";

export type FaqEntry = { question: string; answer: string };

// Renders a visible FAQ list together with matching FAQPage structured data.
// Keeping both in one component guarantees the schema never describes Q&As that
// aren't actually on the page — a requirement for valid FAQPage markup.
export default function Faq({
  items,
  heading = "Frequently asked questions",
}: {
  items: FaqEntry[];
  heading?: string;
}) {
  if (items.length === 0) return null;

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section className="mt-24">
      <JsonLd data={faqLd} />
      <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">FAQ</p>
      <h2 className="mt-4 max-w-3xl text-3xl font-semibold md:text-5xl">
        {heading}
      </h2>

      <dl className="mt-12 grid gap-6 md:grid-cols-2">
        {items.map((f) => (
          <div
            key={f.question}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
          >
            <dt className="text-xl font-semibold">{f.question}</dt>
            <dd className="mt-4 leading-7 text-zinc-400">{f.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
