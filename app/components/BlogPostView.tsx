import Link from "next/link";
import { type Locale, localizedPath } from "../../lib/i18n";
import { getDict } from "../../lib/dictionaries";
import { formatDate, type Post } from "../../lib/posts";
import JsonLd from "./JsonLd";
import { SITE_URL, SITE_NAME, ORG_ID } from "../../lib/site";

export default function BlogPostView({
  locale,
  post,
}: {
  locale: Locale;
  post: Post;
}) {
  const t = getDict(locale).blog;
  const url = `${SITE_URL}${localizedPath(locale, `/blog/${post.slug}`)}`;

  const blogPostingLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    inLanguage: locale,
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
          inLanguage: locale,
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
          href={localizedPath(locale, "/blog")}
          className="text-sm text-zinc-400 transition hover:text-white"
        >
          {t.backToBlog}
        </Link>

        {post.cover && (
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
          {formatDate(post.date, locale)} · {post.author}
        </p>

        <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
          {post.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-400">{post.excerpt}</p>

        <div
          className="blog-content mt-12 border-t border-white/10 pt-12"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <div className="mt-16 rounded-3xl border border-white/10 p-8 text-center">
          <h2 className="text-2xl font-semibold">{t.postCtaTitle}</h2>
          <p className="mt-3 text-zinc-400">{t.postCtaBody}</p>
          <Link
            href={localizedPath(locale, "/contact")}
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-black transition hover:scale-[1.02]"
          >
            {t.bookCall}
          </Link>
        </div>
      </article>
    </main>
  );
}
