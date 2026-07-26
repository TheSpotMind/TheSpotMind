import AboutView from "../../components/AboutView";
import { getDict } from "../../../lib/dictionaries";
import { metadataAlternates } from "../../../lib/i18n";

export function generateMetadata() {
  const t = getDict("es").about;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: metadataAlternates("es", "/about"),
  };
}

export default function AboutPageEs() {
  return <AboutView locale="es" />;
}
