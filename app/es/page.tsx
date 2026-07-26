import HomeView from "../components/HomeView";
import { getDict } from "../../lib/dictionaries";
import { metadataAlternates } from "../../lib/i18n";

export function generateMetadata() {
  const t = getDict("es").home;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: metadataAlternates("es", "/"),
  };
}

export default function HomeEs() {
  return <HomeView locale="es" />;
}
