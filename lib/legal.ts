// Legal documents (Terms, Privacy) live as markdown in content/legal and are
// rendered by their routes through this module. Server-only (build time / RSC).
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const LEGAL_DIR = path.join(process.cwd(), "content", "legal");

export type LegalSlug = "terms" | "privacy";

export type LegalDoc = {
  title: string;
  description: string;
  contentHtml: string;
};

// Publication guard. A legal doc is only publishable once every fill-in token
// has a real value. Tokens are written as ALL-CAPS bracketed placeholders —
// [LEGAL ENTITY NAME], [ADDRESS], [DATE] — so this matches an opening bracket
// followed by an uppercase run (letters, digits, spaces, slashes, parens). It
// deliberately does NOT match ordinary markdown link text like [Contact],
// which is mixed-case, so links never trip the guard.
const PLACEHOLDER = /\[[A-Z][A-Z0-9 /()]*\]/;

export function hasUnfilledPlaceholders(md: string): boolean {
  return PLACEHOLDER.test(md);
}

/**
 * A finalized legal doc rendered to HTML, or null if the file is missing or
 * still contains unfilled placeholders. Returning null lets the route 404
 * rather than ever serving incomplete legal text.
 */
export async function getLegalDoc(slug: LegalSlug): Promise<LegalDoc | null> {
  const full = path.join(LEGAL_DIR, `${slug}.md`);
  if (!fs.existsSync(full)) return null;

  const raw = matter(fs.readFileSync(full, "utf8"));
  if (hasUnfilledPlaceholders(raw.content)) return null;

  // breaks: true keeps single newlines as <br> so the stacked address and
  // effective-date blocks render on separate lines instead of collapsing into
  // one paragraph. Legal prose has no intentional soft-wraps within paragraphs,
  // so this only affects those deliberately-stacked blocks.
  const contentHtml = await marked.parse(raw.content, { breaks: true });
  return {
    title: String(raw.data.title ?? slug),
    description: String(raw.data.meta_description ?? ""),
    contentHtml,
  };
}
