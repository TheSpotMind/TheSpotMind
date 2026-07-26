import { notFound } from "next/navigation";
import BlogPostView from "../../../components/BlogPostView";
import { getAllSlugs, getPost } from "../../../../lib/posts";
import { metadataAlternates } from "../../../../lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs("es").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost("es", slug);
  if (!post) return { title: "Post not found — TheSpotMind" };
  return {
    title: `${post.title} — TheSpotMind`,
    description: post.excerpt,
    alternates: metadataAlternates("es", `/blog/${slug}`),
  };
}

export default async function BlogPostEs({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost("es", slug);
  if (!post) notFound();
  return <BlogPostView locale="es" post={post} />;
}
