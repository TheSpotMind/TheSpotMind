import Link from "next/link";
import { type Locale, localizedPath } from "../../lib/i18n";
import { getDict } from "../../lib/dictionaries";
import Faq from "./Faq";

export default function AboutView({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const t = dict.about;
  const contact = localizedPath(locale, "/contact");

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
          {t.eyebrow}
        </p>

        <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
          {t.h1a}
          <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            {t.h1accent}
          </span>
          .
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          {t.lead}
        </p>

        {/* MISSION */}
        <section className="mt-24 grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              {t.missionEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              {t.missionTitle}
            </h2>
          </div>
          <div className="text-lg leading-8 text-zinc-400">
            <p>{t.missionBody1}</p>
            <p className="mt-6">{t.missionBody2}</p>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="mt-24">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
            {t.principlesEyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold md:text-5xl">
            {t.principlesTitle}
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.principles.map((p) => (
              <div
                key={p.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              >
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-4 leading-7 text-zinc-400">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="mt-24 grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              {t.whoEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              {t.whoTitle}
            </h2>
          </div>
          <div className="text-lg leading-8 text-zinc-400">
            <p>{t.whoBody1}</p>
            <p className="mt-6">{t.whoBody2}</p>
          </div>
        </section>

        {/* WHERE WE WORK */}
        <section className="mt-24 grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              {t.whereEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              {t.whereTitle}
            </h2>
          </div>
          <div className="text-lg leading-8 text-zinc-400">
            <p>{t.whereBody1}</p>
            <p className="mt-6">{t.whereBody2}</p>
          </div>
        </section>

        {/* LOCATION FAQ — visible Q&A + FAQPage structured data */}
        <Faq items={t.faq} heading={dict.faqHeading} />

        {/* CTA */}
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
