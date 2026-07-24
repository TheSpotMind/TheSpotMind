export const metadata = {
  title: "Community Growth & Monetization Systems for Creators | TheSpotMind",
  description:
    "TheSpotMind builds community growth, retention, and monetization systems for creators — powered by AI automation. Turn your audience into recurring revenue.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden">
        <div className="absolute left-[-120px] top-24 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute right-[-80px] top-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative mx-auto flex max-w-5xl flex-col px-6 py-28 md:py-36">
          <div className="mb-6 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-300">
            Community Growth • Monetization • AI
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] md:text-7xl">
            Turn your audience into a{" "}
            <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              scalable revenue
            </span>{" "}
            community.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            We help creators grow, engage, and monetize their communities with
            clear systems, better retention, and AI-powered automation.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-black transition hover:scale-[1.02]"
            >
              Book a Call
            </a>

            <a
              href="/solutions"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white transition hover:border-white/20 hover:bg-white/10"
            >
              Explore Solutions
            </a>
          </div>

          <div className="mt-14 grid max-w-3xl gap-4 border-t border-white/10 pt-8 text-sm text-zinc-400 md:grid-cols-3">
            <div>
              <p className="font-medium text-white">Community Systems</p>
              <p className="mt-1">Retention loops and engagement structure.</p>
            </div>
            <div>
              <p className="font-medium text-white">Monetization Design</p>
              <p className="mt-1">Convert audience attention into revenue.</p>
            </div>
            <div>
              <p className="font-medium text-white">AI Automation</p>
              <p className="mt-1">Scale workflows without extra manual work.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              Who it’s for
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Built for creators who want more than just engagement.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              We work with creators, coaches, educators, and digital brands who
              want to turn audience attention into community, retention, and
              revenue.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <p className="text-lg font-medium text-white">Creators</p>
              <p className="mt-3 leading-7 text-zinc-400">
                Build a stronger ecosystem around your audience and create
                better pathways to monetization.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <p className="text-lg font-medium text-white">Coaches</p>
              <p className="mt-3 leading-7 text-zinc-400">
                Turn attention into trust, community, and recurring offers
                without adding more manual work.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <p className="text-lg font-medium text-white">Digital Brands</p>
              <p className="mt-3 leading-7 text-zinc-400">
                Design systems that increase engagement, improve retention, and
                support long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              How it works
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              A simple process built for scale.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              We focus on clarity, implementation, and systems that make growth
              easier to sustain over time.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-semibold text-white">
                01
              </div>
              <h3 className="text-2xl font-semibold">Audit</h3>
              <p className="mt-4 leading-7 text-zinc-400">
                We assess your audience, offer flow, community structure, and
                current growth bottlenecks.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-semibold text-white">
                02
              </div>
              <h3 className="text-2xl font-semibold">Build</h3>
              <p className="mt-4 leading-7 text-zinc-400">
                We create the right systems for community growth, monetization,
                and automation based on your stage.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-semibold text-white">
                03
              </div>
              <h3 className="text-2xl font-semibold">Optimize</h3>
              <p className="mt-4 leading-7 text-zinc-400">
                We refine the system over time so engagement, conversion, and
                efficiency keep improving.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-10 md:p-14">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                Ready to turn your audience into a growth system?
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Let’s look at your current setup and identify the fastest path
                to stronger engagement, better conversion, and smarter
                automation.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-white px-6 py-3 text-black transition hover:scale-[1.02]"
                >
                  Book a Call
                </a>

                <a
                  href="/solutions"
                  className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white transition hover:border-white/20 hover:bg-white/10"
                >
                  View Solutions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}