import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPost, formatDate } from "../../../lib/posts";
import JsonLd from "../../components/JsonLd";
import { SITE_URL, SITE_NAME, ORG_ID } from "../../../lib/site";

// Prerender every post at build time. A slug not in this list 404s rather than
// being rendered on demand (dynamicParams defaults to true, but we have no
// posts outside the repo, so an unknown slug is genuinely not found).
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post not found — TheSpotMind" };
  return {
    title: `${post.title} — TheSpotMind`,
    description: post.excerpt,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;

  const blogPostingLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: post.author, url: SITE_URL },
    publisher: { "@id": ORG_ID, "@type": "Organization", name: SITE_NAME },
    mainEntityOfPage: url,
    ...(post.cover ? { image: `${SITE_URL}${post.cover}` } : {}),
  };

  const faqLd =
    post.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faq.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <JsonLd data={blogPostingLd} />
      {faqLd && <JsonLd data={faqLd} />}

      <article className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="text-sm text-zinc-400 transition hover:text-white"
        >
          ← Back to blog
        </Link>

        {post.cover && (
          // Likely the LCP element — load it eagerly. Plain <img> (not
          // next/image) keeps remote/covers config-free and matches the body.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.cover}
            alt=""
            loading="eager"
            fetchPriority="high"
            className="mt-8 w-full rounded-3xl border border-white/10"
          />
        )}

        <p className="mt-10 text-sm text-zinc-500">
          {formatDate(post.date)} · {post.author}
        </p>

        <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
          {post.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-400">{post.excerpt}</p>

        {/* Body is our own markdown, rendered to HTML at build time — trusted,
            so dangerouslySetInnerHTML is appropriate here. Styling lives in
            globals.css under .blog-content. */}
        <div
          className="blog-content mt-12 border-t border-white/10 pt-12"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <div className="mt-16 rounded-3xl border border-white/10 p-8 text-center">
          <h2 className="text-2xl font-semibold">Ready to build your system?</h2>
          <p className="mt-3 text-zinc-400">
            Let&apos;s turn your audience into a community that compounds.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-black transition hover:scale-[1.02]"
          >
            Book a Call
          </Link>
        </div>
      </article>
    </main>
  );
}
