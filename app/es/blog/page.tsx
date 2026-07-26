import BlogListView from "../../components/BlogListView";
import { getDict } from "../../../lib/dictionaries";
import { metadataAlternates } from "../../../lib/i18n";

export function generateMetadata() {
  const t = getDict("es").blog;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: metadataAlternates("es", "/blog"),
  };
}

export default function BlogEs() {
  return <BlogListView locale="es" />;
}
