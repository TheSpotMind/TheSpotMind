import Link from "next/link";

// Neutral language chooser. Kept out of the index (the two localized landings
// at /start/en and /start/es are the pages meant to rank); this is just a
// shareable entry point that lets a visitor pick.
export const metadata = {
  title: "Choose your language · Elige tu idioma | TheSpotMind",
  robots: { index: false, follow: true },
};

export default function StartChooser() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="w-full max-w-md text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
          TheSpotMind
        </p>
        <h1 className="mt-4 text-3xl font-semibold md:text-4xl">
          Choose your language
          <span className="mt-1 block text-zinc-500">Elige tu idioma</span>
        </h1>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Link
            href="/start/en"
            hrefLang="en"
            className="rounded-2xl border border-white/15 px-6 py-5 text-lg font-medium transition hover:border-white/35 hover:bg-white/[0.04]"
          >
            English
          </Link>
          <Link
            href="/start/es"
            hrefLang="es"
            className="rounded-2xl border border-white/15 px-6 py-5 text-lg font-medium transition hover:border-white/35 hover:bg-white/[0.04]"
          >
            Español
          </Link>
        </div>
      </div>
    </main>
  );
}
