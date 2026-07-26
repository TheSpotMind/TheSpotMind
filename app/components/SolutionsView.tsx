import Link from "next/link";
import { type Locale, localizedPath } from "../../lib/i18n";
import { getDict } from "../../lib/dictionaries";
import Faq from "./Faq";

export default function SolutionsView({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const t = dict.solutions;
  const contact = localizedPath(locale, "/contact");

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
          {t.eyebrow}
        </p>

        <h1 className="mt-4 text-5xl font-semibold md:text-7xl">{t.h1}</h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">{t.lead}</p>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {t.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-white/10 p-8"
            >
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-4 text-zinc-400">{card.body}</p>
              <ul className="mt-6 space-y-2 text-sm text-zinc-500">
                {card.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Faq items={t.faq} heading={dict.faqHeading} />

        <div className="mt-24 rounded-3xl border border-white/10 p-12 text-center">
          <h2 className="text-3xl font-semibold">{t.ctaTitle}</h2>
          <p className="mt-4 text-zinc-400">{t.ctaBody}</p>
          <Link
            href={contact}
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-black transition hover:scale-[1.02]"
          >
            {t.bookCall}
          </Link>
        </div>
      </div>
    </main>
  );
}
