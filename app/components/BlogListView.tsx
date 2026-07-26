import Link from "next/link";
import { type Locale, localizedPath } from "../../lib/i18n";
import { getDict } from "../../lib/dictionaries";
import { getSortedPosts, formatDate } from "../../lib/posts";

export default function BlogListView({ locale }: { locale: Locale }) {
  const t = getDict(locale).blog;
  const posts = getSortedPosts(locale);

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
          {t.h1b}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          {t.lead}
        </p>

        {posts.length === 0 ? (
          <p className="mt-20 text-zinc-500">{t.empty}</p>
        ) : (
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={localizedPath(locale, `/blog/${post.slug}`)}
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                {post.cover && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.cover}
                    alt=""
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover"
                  />
                )}
                <div className="flex flex-1 flex-col p-8">
                  <p className="text-sm text-zinc-500">
                    {formatDate(post.date, locale)}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold transition group-hover:text-white">
                    {post.title}
                  </h2>
                  <p className="mt-4 leading-7 text-zinc-400">{post.excerpt}</p>
                  <span className="mt-6 text-sm font-medium text-accent">
                    {t.readMore}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
