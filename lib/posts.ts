// Blog posts live as markdown files in content/blog. This module is the single
// place that reads and parses them, so pages never touch the filesystem or the
// markdown parser directly. It runs only on the server (build time / RSC).
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  excerpt: string;
  author: string;
};

export type Post = PostMeta & {
  contentHtml: string;
};

// A file named my-post.md is served at /blog/my-post.
function slugFromFile(filename: string): string {
  return filename.replace(/\.md$/, "");
}

function readRaw(slug: string): matter.GrayMatterFile<string> | null {
  const full = path.join(POSTS_DIR, `${slug}.md`);
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
  };
}

function toISODate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? "");
}

/** All posts, newest first. Metadata only — no rendered body. */
export function getSortedPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = slugFromFile(f);
      return toMeta(slug, matter.read(path.join(POSTS_DIR, f)).data);
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Slugs for generateStaticParams. */
export function getAllSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(slugFromFile);
}

/** A single post with its markdown rendered to HTML, or null if missing. */
export async function getPost(slug: string): Promise<Post | null> {
  const raw = readRaw(slug);
  if (!raw) return null;
  const contentHtml = await marked.parse(raw.content);
  return { ...toMeta(slug, raw.data), contentHtml };
}

/** e.g. "2026-07-10" -> "July 10, 2026". Falls back to the raw string. */
export function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
