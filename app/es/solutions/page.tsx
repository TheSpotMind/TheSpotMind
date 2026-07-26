import SolutionsView from "../../components/SolutionsView";
import { getDict } from "../../../lib/dictionaries";
import { metadataAlternates } from "../../../lib/i18n";

export function generateMetadata() {
  const t = getDict("es").solutions;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: metadataAlternates("es", "/solutions"),
  };
}

export default function SolutionsPageEs() {
  return <SolutionsView locale="es" />;
}
