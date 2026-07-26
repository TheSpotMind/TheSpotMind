import Faq from "../components/Faq";

export const metadata = {
  title: "Creator Community Growth, Monetization & AI Automation Services",
  description:
    "Community growth loops, monetization funnels, and AI automation for creators, coaches, and digital brands. See how TheSpotMind turns audiences into revenue.",
};

export default function Solutions() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
          Solutions
        </p>

        <h1 className="mt-4 text-5xl font-semibold md:text-7xl">
          Growth systems for creators
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          We design systems that turn your audience into an engaged,
          monetizable community powered by strategy and automation.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {/* COMMUNITY */}
          <div className="rounded-3xl border border-white/10 p-8">
            <h3 className="text-xl font-semibold">Community Growth</h3>
            <p className="mt-4 text-zinc-400">
              Build engagement loops and retention systems that turn passive
              followers into active participants.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-zinc-500">
              <li>• Engagement loops</li>
              <li>• Community structure</li>
              <li>• Retention systems</li>
            </ul>
          </div>

          {/* MONETIZATION */}
          <div className="rounded-3xl border border-white/10 p-8">
            <h3 className="text-xl font-semibold">Monetization Systems</h3>
            <p className="mt-4 text-zinc-400">
              Convert audience attention into predictable revenue with structured
              offers and funnels.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-zinc-500">
              <li>• Funnels</li>
              <li>• Paid communities</li>
              <li>• Offer ecosystems</li>
            </ul>
          </div>

          {/* AI */}
          <div className="rounded-3xl border border-white/10 p-8">
            <h3 className="text-xl font-semibold">AI Automation</h3>
            <p className="mt-4 text-zinc-400">
              Scale your systems with automation so growth doesn’t depend on
              manual work.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-zinc-500">
              <li>• DM automation</li>
              <li>• Onboarding flows</li>
              <li>• Backend workflows</li>
            </ul>
          </div>
        </div>

        <Faq
          items={[
            {
              question: "What does TheSpotMind actually do?",
              answer:
                "We build three connected systems for creators and digital brands: community growth (engagement loops and retention structure), monetization (offers and funnels that turn attention into recurring revenue), and AI automation (onboarding flows, DM automation, and backend workflows). They're designed to work as one system, not three separate efforts.",
            },
            {
              question: "How long does it take to see results?",
              answer:
                "It depends on your starting point, your offer, and your audience, so we don't promise a specific timeline or outcome. Our systems are built to compound — we optimize for retention, trust, and recurring revenue, which strengthen the longer they run, rather than one-off spikes that fade when attention moves on.",
            },
            {
              question:
                "How is this different from a social media manager or a traditional agency?",
              answer:
                "A social media manager usually focuses on posting and staying active. We focus on the system underneath it — clear pathways from follower to member to customer, retention loops, and automation that carries the load — so your results aren't hostage to how much you post or how online you are.",
            },
          ]}
        />

        {/* CTA */}
        <div className="mt-24 rounded-3xl border border-white/10 p-12 text-center">
          <h2 className="text-3xl font-semibold">
            Ready to turn your audience into a system?
          </h2>

          <p className="mt-4 text-zinc-400">
            Let’s build a scalable growth engine around your audience.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-black"
          >
            Book a Call
          </a>
        </div>
      </div>
    </main>
  );
}