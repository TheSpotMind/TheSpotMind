import Link from "next/link";
import { type Locale, localizedPath } from "../../lib/i18n";
import { getDict } from "../../lib/dictionaries";

// Shared home page, rendered in both locales. The English route (/) and the
// Spanish route (/es) each render this with their locale; copy comes from the
// dictionary and links are localized, so the two stay in sync structurally.
export default function HomeView({ locale }: { locale: Locale }) {
  const t = getDict(locale).home;
  const contact = localizedPath(locale, "/contact");
  const solutions = localizedPath(locale, "/solutions");

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden">
        <div className="absolute left-[-120px] top-24 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute right-[-80px] top-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative mx-auto flex max-w-5xl flex-col px-6 py-28 md:py-36">
          <div className="mb-6 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-300">
            {t.badge}
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] md:text-7xl">
            {t.h1a}
            <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              {t.h1accent}
            </span>
            {t.h1b}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            {t.heroSub}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={contact}
              className="rounded-full bg-white px-6 py-3 text-black transition hover:scale-[1.02]"
            >
              {t.bookCall}
            </Link>

            <Link
              href={solutions}
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white transition hover:border-white/20 hover:bg-white/10"
            >
              {t.exploreSolutions}
            </Link>
          </div>

          <div className="mt-14 grid max-w-3xl gap-4 border-t border-white/10 pt-8 text-sm text-zinc-400 md:grid-cols-3">
            {t.heroStats.map((s) => (
              <div key={s.title}>
                <p className="font-medium text-white">{s.title}</p>
                <p className="mt-1">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              {t.whoEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              {t.whoTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">{t.whoSub}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.whoCards.map((c) => (
              <div
                key={c.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              >
                <p className="text-lg font-medium text-white">{c.title}</p>
                <p className="mt-3 leading-7 text-zinc-400">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              {t.howEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              {t.howTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">{t.howSub}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.howSteps.map((s) => (
              <div
                key={s.n}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-semibold text-white">
                  {s.n}
                </div>
                <h3 className="text-2xl font-semibold">{s.title}</h3>
                <p className="mt-4 leading-7 text-zinc-400">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-10 md:p-14">
            <div className="max-w-3xl">
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                {t.ctaTitle}
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-400">{t.ctaSub}</p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={contact}
                  className="rounded-full bg-white px-6 py-3 text-black transition hover:scale-[1.02]"
                >
                  {t.bookCall}
                </Link>

                <Link
                  href={solutions}
                  className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white transition hover:border-white/20 hover:bg-white/10"
                >
                  {t.viewSolutions}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
