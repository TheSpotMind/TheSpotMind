import AboutView from "../components/AboutView";
import { getDict } from "../../lib/dictionaries";
import { metadataAlternates } from "../../lib/i18n";

export function generateMetadata() {
  const t = getDict("en").about;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: metadataAlternates("en", "/about"),
  };
}

export default function AboutPage() {
  return <AboutView locale="en" />;
}
