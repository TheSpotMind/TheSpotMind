"use client";

import { useState } from "react";
import { type Locale } from "../../lib/i18n";
import { getDict } from "../../lib/dictionaries";
import Faq from "./Faq";

export default function ContactView({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const t = dict.contact;
  const [status, setStatus] = useState<"IDLE" | "LOADING" | "SUCCESS" | "ERROR">(
    "IDLE",
  );

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
          {t.eyebrow}
        </p>

        <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
          {t.h1}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          {t.lead}
        </p>

        <p className="mt-4 max-w-2xl text-sm text-zinc-500">{t.location}</p>

        <form onSubmit={handleSubmit} className="mt-12 max-w-4xl space-y-6">
          <input
            type="text"
            name="name"
            placeholder={t.name}
            required
            className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white placeholder:text-zinc-500 focus:border-white focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder={t.email}
            required
            className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white placeholder:text-zinc-500 focus:border-white focus:outline-none"
          />

          <textarea
            name="message"
            placeholder={t.message}
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
              {status === "LOADING" ? t.sending : t.send}
            </button>

            <p className="text-sm text-zinc-500">{t.responseTime}</p>

            {status === "SUCCESS" && (
              <p className="text-sm text-green-400">{t.success}</p>
            )}

            {status === "ERROR" && (
              <p className="text-sm text-red-400">{t.error}</p>
            )}
          </div>
        </form>
      </section>

      <div className="mx-auto max-w-5xl px-6 pb-24">
        <Faq items={t.faq} heading={dict.faqHeading} />
      </div>
    </main>
  );
}
