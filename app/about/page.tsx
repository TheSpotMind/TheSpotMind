import Faq from "../components/Faq";

export const metadata = {
  title: "About — TheSpotMind",
  description:
    "TheSpotMind helps creators turn their audience into an engaged, monetizable community with clear systems and AI-powered automation.",
};

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
          About us
        </p>

        <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
          We turn audiences into{" "}
          <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            communities
          </span>
          .
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          TheSpotMind is a growth studio for creators. We build the systems that
          turn attention into community, community into retention, and retention
          into revenue — and we automate the parts that shouldn&apos;t depend on
          you being online.
        </p>

        {/* MISSION */}
        <section className="mt-24 grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              Our mission
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Make growth something you can build, not something you chase.
            </h2>
          </div>
          <div className="text-lg leading-8 text-zinc-400">
            <p>
              Most creators are told to post more, engage more, and hope the
              algorithm rewards it. That doesn&apos;t scale, and it burns people
              out.
            </p>
            <p className="mt-6">
              We believe an audience becomes durable when there&apos;s a system
              underneath it — clear pathways from follower to member to
              customer, retention loops that keep people around, and automation
              that carries the load. That&apos;s the work we do.
            </p>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="mt-24">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
            How we work
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold md:text-5xl">
            Principles behind everything we build.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-xl font-semibold">Systems over hustle</h3>
              <p className="mt-4 leading-7 text-zinc-400">
                Growth should come from structure you can rely on, not from
                doing more every week. We design the machine, so the results
                aren&apos;t hostage to your energy.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-xl font-semibold">Clarity first</h3>
              <p className="mt-4 leading-7 text-zinc-400">
                Before we automate anything, we make the path obvious — how
                people find you, join you, and buy from you. Automation only
                amplifies a system that already makes sense.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-xl font-semibold">Built to compound</h3>
              <p className="mt-4 leading-7 text-zinc-400">
                We optimize for what keeps improving — retention, trust, and
                recurring revenue — rather than one-off spikes that fade the
                moment attention moves on.
              </p>
            </div>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="mt-24 grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              Who we are
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Part strategist, part builder, part automation team.
            </h2>
          </div>
          <div className="text-lg leading-8 text-zinc-400">
            <p>
              We sit at the intersection of community strategy, monetization
              design, and AI automation — the three things a modern creator
              business needs to be treated as one system rather than three
              disconnected efforts.
            </p>
            <p className="mt-6">
              We work with creators, coaches, educators, and digital brands who
              want more than engagement metrics. If you&apos;re ready to build
              something that lasts, that&apos;s exactly what we&apos;re here for.
            </p>
          </div>
        </section>

        {/* WHERE WE WORK */}
        <section className="mt-24 grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              Where we work
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Miami and New York, working across the Americas.
            </h2>
          </div>
          <div className="text-lg leading-8 text-zinc-400">
            <p>
              TheSpotMind operates from Miami, Florida, with presence in the New
              York metropolitan area. We work with creators and community
              operators across the United States and throughout Latin America,
              in English and Spanish.
            </p>
            <p className="mt-6">
              Engagements run remotely, so location is not a constraint on who
              we can work with. For clients in the Miami and New York areas,
              in-person working sessions are available.
            </p>
          </div>
        </section>

        {/* LOCATION FAQ — visible Q&A + FAQPage structured data */}
        <Faq
          items={[
            {
              question: "Where is TheSpotMind based?",
              answer:
                "TheSpotMind operates from Miami, Florida, with presence in the New York metropolitan area. We work with clients across the United States and Latin America. Engagements run remotely, so location is not a constraint on who we can work with.",
            },
            {
              question: "Do you work with clients outside the United States?",
              answer:
                "Yes. We work throughout Latin America as well as the US. Work is delivered remotely, and we operate in English and Spanish. Invoicing is in US dollars.",
            },
            {
              question: "Do you work in Spanish?",
              answer:
                "Yes. Engagements can run entirely in Spanish or English, including documentation and deliverables.",
            },
          ]}
        />

        {/* CTA */}
        <div className="mt-24 rounded-3xl border border-white/10 p-12 text-center">
          <h2 className="text-3xl font-semibold">
            Let&apos;s build your growth system.
          </h2>

          <p className="mt-4 text-zinc-400">
            Tell us about your audience and goals — we&apos;ll map the next move.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-black transition hover:scale-[1.02]"
          >
            Book a Call
          </a>
        </div>
      </div>
    </main>
  );
}
