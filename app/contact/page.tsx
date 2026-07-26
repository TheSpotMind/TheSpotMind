"use client";

import { useState } from "react";
import Faq from "../components/Faq";

export default function ContactPage() {
  const [status, setStatus] = useState<"IDLE" | "LOADING" | "SUCCESS" | "ERROR">("IDLE");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("LOADING");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch {
      // A dropped connection should read the same as a rejected send, not hang
      // on "Sending..." forever.
      setStatus("ERROR");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
          Contact
        </p>

        <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
          Let’s build your growth system
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Tell us about your audience, community, and goals. We’ll help you map the next move.
        </p>

        <p className="mt-4 max-w-2xl text-sm text-zinc-500">
          Based in Miami, Florida, with presence in the New York metropolitan
          area. Working with clients across the United States and Latin America.
        </p>

        <form onSubmit={handleSubmit} className="mt-12 max-w-4xl space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white placeholder:text-zinc-500 focus:border-white focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white placeholder:text-zinc-500 focus:border-white focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Tell us about your project..."
            rows={6}
            required
            className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white placeholder:text-zinc-500 focus:border-white focus:outline-none"
          />

          <div className="flex flex-col items-start gap-4">
            <button
              type="submit"
              disabled={status === "LOADING"}
              className="rounded-full bg-white px-6 py-3 text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "LOADING" ? "Sending..." : "Send Request"}
            </button>

            <p className="text-sm text-zinc-500">We typically respond within 24 hours.</p>

            {status === "SUCCESS" && (
              <p className="text-sm text-green-400">
                Message sent. We&apos;ll get back to you soon.
              </p>
            )}

            {status === "ERROR" && (
              <p className="text-sm text-red-400">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </form>
      </section>

      <div className="mx-auto max-w-5xl px-6 pb-24">
        <Faq
          items={[
            {
              question: "Is the strategy call free?",
              answer:
                "Yes. The first growth strategy call is free. You tell us about your audience, community, and goals, and we help you map the next move — no obligation.",
            },
            {
              question: "What happens after I get in touch?",
              answer:
                "Send the form with a bit about your audience and goals, and we'll get back to you within 24 hours. The first conversation is about understanding where you are and mapping the fastest next move.",
            },
          ]}
        />
      </div>
    </main>
  );
}