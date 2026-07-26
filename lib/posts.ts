// Blog posts live as markdown files in content/blog. This module is the single
// place that reads and parses them, so pages never touch the filesystem or the
// markdown parser directly. It runs only on the server (build time / RSC).
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import type { Locale } from "./i18n";

// Posts are split by locale: content/blog/en and content/blog/es. A translated
// post keeps the same slug in both, so its two URLs (/blog/x and /es/blog/x)
// pair up cleanly for hreflang.
function postsDir(locale: Locale): string {
  return path.join(process.cwd(), "content", "blog", locale);
}

// Configure the shared marked instance once, at module load. Images get native
// lazy-loading, and an image given a markdown title — ![alt](src "caption") —
// renders as a <figure> with a <figcaption>.
marked.use({
  renderer: {
    image({ href, title, text }) {
      const img = `<img src="${escapeAttr(href ?? "")}" alt="${escapeAttr(
        text ?? "",
      )}" loading="lazy" decoding="async">`;
      return title
        ? `<figure>${img}<figcaption>${escapeHtml(title)}</figcaption></figure>`
        : img;
    },
  },
});

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  excerpt: string;
  author: string;
  cover?: string; // optional hero/thumbnail image path
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Post = PostMeta & {
  contentHtml: string;
  // Q&A pairs pulled from the post's "Frequently asked questions" section, used
  // to emit FAQPage structured data. Empty when the post has no FAQ.
  faq: FaqItem[];
};

// A file named my-post.md is served at /blog/my-post.
function slugFromFile(filename: string): string {
  return filename.replace(/\.md$/, "");
}

// Which files in content/blog are actual posts. README.md (the authoring guide)
// and dotfiles/underscore-prefixed drafts are not.
function isPostFile(filename: string): boolean {
  return (
    filename.endsWith(".md") &&
    filename.toLowerCase() !== "readme.md" &&
    !filename.startsWith("_") &&
    !filename.startsWith(".")
  );
}

function readRaw(
  locale: Locale,
  slug: string,
): matter.GrayMatterFile<string> | null {
  const full = path.join(postsDir(locale), `${slug}.md`);
  if (!fs.existsSync(full)) return null;
  return matter(fs.readFileSync(full, "utf8"));
}

function toMeta(slug: string, data: Record<string, unknown>): PostMeta {
  return {
    slug,
    title: String(data.title ?? slug),
    // gray-matter parses unquoted YAML dates into Date objects; normalize to a
    // plain yyyy-mm-dd string so nothing downstream depends on the timezone.
    date: toISODate(data.date),
    excerpt: String(data.excerpt ?? ""),
    author: String(data.author ?? "TheSpotMind"),
    ...(data.cover ? { cover: String(data.cover) } : {}),
  };
}

function toISODate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? "");
}

/** All posts for a locale, newest first. Metadata only — no rendered body. */
export function getSortedPosts(locale: Locale): PostMeta[] {
  const dir = postsDir(locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter(isPostFile)
    .map((f) => {
      const slug = slugFromFile(f);
      return toMeta(slug, matter.read(path.join(dir, f)).data);
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Slugs for a locale, for generateStaticParams. */
export function getAllSlugs(locale: Locale): string[] {
  const dir = postsDir(locale);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(isPostFile).map(slugFromFile);
}

/** A single post with its markdown rendered to HTML, or null if missing. */
export async function getPost(
  locale: Locale,
  slug: string,
): Promise<Post | null> {
  const raw = readRaw(locale, slug);
  if (!raw) return null;
  const rendered = await marked.parse(embedYouTube(raw.content));
  const contentHtml = unwrapBlockMedia(rendered);
  return { ...toMeta(slug, raw.data), contentHtml, faq: extractFaq(raw.content) };
}

// Pulls Q&A pairs out of a post's FAQ section so the page can emit FAQPage
// structured data without the author maintaining a second copy. The section is
// the "## Frequently asked questions" H2; inside it, each question is a bold
// line — **Question?** — immediately followed by its answer paragraph, pairs
// separated by a blank line. Anything that doesn't match this shape is ignored,
// so a post with no such section simply yields [].
function extractFaq(md: string): FaqItem[] {
  const heading = md.match(
    /^##\s+.*(frequently asked questions|preguntas frecuentes).*$/im,
  );
  if (!heading || heading.index === undefined) return [];

  const afterHeading = md.slice(heading.index + heading[0].length);
  // Stop at the next H2 so we don't wander into later sections.
  const nextH2 = afterHeading.search(/^##\s+/m);
  const section = nextH2 === -1 ? afterHeading : afterHeading.slice(0, nextH2);

  const items: FaqItem[] = [];
  const pair =
    /\*\*(.+?)\*\*[ \t]*\r?\n([\s\S]*?)(?=\r?\n[ \t]*\r?\n|\r?\n\*\*|$)/g;
  let m: RegExpExecArray | null;
  while ((m = pair.exec(section)) !== null) {
    const question = stripInlineMd(m[1]);
    const answer = stripInlineMd(m[2]);
    if (question && answer) items.push({ question, answer });
  }
  return items;
}

// Flattens a run of inline markdown to plain text for use inside JSON-LD:
// links become their label, emphasis/code markers are dropped, and whitespace
// is collapsed to single spaces.
function stripInlineMd(s: string): string {
  return s
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`]+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// A line that is *only* a YouTube URL becomes a responsive, privacy-friendly
// embed. We capture just the 11-char video id and rebuild a known-good
// youtube-nocookie URL, so author text never reaches the iframe verbatim —
// this can't be used to inject an arbitrary embed. Inline links (mid-sentence)
// don't match the anchored pattern and stay as ordinary links.
const YOUTUBE_LINE =
  /^[ \t]*(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})(?:[^\s]*)?[ \t]*$/gim;

function embedYouTube(md: string): string {
  return md.replace(
    YOUTUBE_LINE,
    (_m, id) =>
      `\n<div class="blog-video"><iframe src="https://www.youtube-nocookie.com/embed/${id}" title="YouTube video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>\n`,
  );
}

// marked wraps a standalone image/figure in a <p>, which is invalid around a
// block <figure>. Unwrap those so the media sits at block level.
function unwrapBlockMedia(html: string): string {
  return html
    .replace(/<p>(\s*<figure>[\s\S]*?<\/figure>\s*)<\/p>/g, "$1")
    .replace(/<p>(\s*<img[^>]*>\s*)<\/p>/g, "$1");
}

function escapeHtml(s: string): string {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttr(s: string): string {
  return escapeHtml(s).replace(/"/g, "&quot;");
}

/** e.g. "2026-07-10" -> "July 10, 2026" (en) / "10 de julio de 2026" (es). */
export function formatDate(iso: string, locale: Locale = "en"): string {
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(locale === "es" ? "es-ES" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
