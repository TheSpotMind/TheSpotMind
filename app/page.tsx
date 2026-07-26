import HomeView from "./components/HomeView";
import { getDict } from "../lib/dictionaries";
import { metadataAlternates } from "../lib/i18n";

export function generateMetadata() {
  const t = getDict("en").home;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: metadataAlternates("en", "/"),
  };
}

export default function Home() {
  return <HomeView locale="en" />;
}
