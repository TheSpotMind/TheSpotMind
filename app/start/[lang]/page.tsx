import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_URL } from "../../../lib/site";

// A single bilingual landing rendered at two crawlable URLs, /start/en and
// /start/es, linked to each other with hreflang. dynamicParams:false means any
// other locale 404s rather than rendering on demand.
export const dynamicParams = false;

type Lang = "en" | "es";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

const CONTENT = {
  en: {
    metaTitle: "Grow Your Creator Community — Systems & AI Automation | TheSpotMind",
    metaDescription:
      "TheSpotMind builds community growth, retention, and monetization systems for creators — powered by AI automation. Remote, in English or Spanish, across the US and Latin America.",
    eyebrow: "Community growth systems",
    h1a: "Turn your audience into a community that ",
    h1accent: "compounds",
    sub: "TheSpotMind builds community growth, retention, and monetization systems for creators — powered by AI automation. Delivered remotely, in English or Spanish, across the United States and Latin America.",
    ctaPrimary: "Book a free strategy call",
    pillarsTitle: "One system, three moving parts",
    pillars: [
      {
        title: "Community Growth",
        body: "Engagement loops and retention structure that turn passive followers into active members.",
      },
      {
        title: "Monetization",
        body: "Offers and funnels that turn attention into predictable, recurring revenue.",
      },
      {
        title: "AI Automation",
        body: "Onboarding, DMs, and backend workflows, so growth doesn't depend on you being online.",
      },
    ],
    positioningTitle: "Systems over hustle",
    positioningBody:
      "Most creators are told to post more and hope the algorithm rewards it. We build the machine underneath — clear pathways from follower to member to customer — so your results aren't hostage to your energy.",
    ctaTitle: "Ready to build your system?",
    ctaBody: "Tell us about your audience and goals — we'll map the next move.",
  },
  es: {
    metaTitle:
      "Haz crecer tu comunidad de creador — Sistemas y automatización con IA | TheSpotMind",
    metaDescription:
      "TheSpotMind construye sistemas de crecimiento, retención y monetización de comunidades para creadores, potenciados con automatización de IA. En remoto, en español o inglés, en EE. UU. y toda Latinoamérica.",
    eyebrow: "Sistemas de crecimiento de comunidad",
    h1a: "Convierte tu audiencia en una comunidad que ",
    h1accent: "crece sola",
    sub: "TheSpotMind construye sistemas de crecimiento, retención y monetización de comunidades para creadores, potenciados con automatización de IA. Trabajamos en remoto, en español o inglés, en Estados Unidos y toda Latinoamérica.",
    ctaPrimary: "Agenda una llamada gratis",
    pillarsTitle: "Un solo sistema, tres piezas",
    pillars: [
      {
        title: "Crecimiento de comunidad",
        body: "Bucles de interacción y estructura de retención que convierten seguidores pasivos en miembros activos.",
      },
      {
        title: "Monetización",
        body: "Ofertas y embudos que convierten la atención en ingresos predecibles y recurrentes.",
      },
      {
        title: "Automatización con IA",
        body: "Onboarding, mensajes y flujos internos, para que el crecimiento no dependa de que estés conectado.",
      },
    ],
    positioningTitle: "Sistemas, no desgaste",
    positioningBody:
      "A la mayoría de los creadores les dicen que publiquen más y esperen que el algoritmo los premie. Nosotros construimos la maquinaria de fondo — caminos claros de seguidor a miembro a cliente — para que tus resultados no dependan de tu energía.",
    ctaTitle: "¿Listo para construir tu sistema?",
    ctaBody: "Cuéntanos sobre tu audiencia y tus objetivos — trazamos el próximo paso.",
  },
} satisfies Record<Lang, unknown>;

function isLang(v: string): v is Lang {
  return v === "en" || v === "es";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = CONTENT[lang];
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/start/${lang}`,
      languages: {
        en: `${SITE_URL}/start/en`,
        es: `${SITE_URL}/start/es`,
        "x-default": `${SITE_URL}/start/en`,
      },
    },
  };
}

export default async function Landing({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = CONTENT[lang];

  return (
    // lang on the region marks the content's language even though the root
    // <html> stays "en" — a valid per-section signal without full-site i18n.
    <main lang={lang} className="min-h-screen bg-black text-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Hero — the EN/ES switch lives globally in the header. */}
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
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">{t.sub}</p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-black transition hover:scale-[1.02]"
        >
          {t.ctaPrimary}
        </Link>

        {/* Pillars */}
        <h2 className="mt-24 text-3xl font-semibold md:text-4xl">
          {t.pillarsTitle}
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {t.pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Positioning */}
        <section className="mt-24 grid gap-12 md:grid-cols-2">
          <h2 className="text-3xl font-semibold md:text-4xl">
            {t.positioningTitle}
          </h2>
          <p className="text-lg leading-8 text-zinc-400">{t.positioningBody}</p>
        </section>

        {/* CTA */}
        <div className="mt-24 rounded-3xl border border-white/10 p-12 text-center">
          <h2 className="text-3xl font-semibold">{t.ctaTitle}</h2>
          <p className="mt-4 text-zinc-400">{t.ctaBody}</p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-black transition hover:scale-[1.02]"
          >
            {t.ctaPrimary}
          </Link>
        </div>
      </div>
    </main>
  );
}
