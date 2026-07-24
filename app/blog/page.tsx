import Link from "next/link";
import { getSortedPosts, formatDate } from "../../lib/posts";

export const metadata = {
  title: "Blog — TheSpotMind",
  description:
    "Ideas on community, retention, monetization, and automation for creators building something that lasts.",
};

export default function Blog() {
  const posts = getSortedPosts();

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Blog</p>

        <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
          Notes on building{" "}
          <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            durable
          </span>{" "}
          communities.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Practical thinking on community, retention, monetization, and the
          automation that ties them together.
        </p>

        {posts.length === 0 ? (
          <p className="mt-20 text-zinc-500">No posts yet. Check back soon.</p>
        ) : (
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                <p className="text-sm text-zinc-500">{formatDate(post.date)}</p>
                <h2 className="mt-3 text-2xl font-semibold transition group-hover:text-white">
                  {post.title}
                </h2>
                <p className="mt-4 leading-7 text-zinc-400">{post.excerpt}</p>
                <span className="mt-6 text-sm font-medium text-accent">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
