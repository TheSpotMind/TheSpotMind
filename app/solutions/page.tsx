import SolutionsView from "../components/SolutionsView";
import { getDict } from "../../lib/dictionaries";
import { metadataAlternates } from "../../lib/i18n";

export function generateMetadata() {
  const t = getDict("en").solutions;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: metadataAlternates("en", "/solutions"),
  };
}

export default function SolutionsPage() {
  return <SolutionsView locale="en" />;
}
