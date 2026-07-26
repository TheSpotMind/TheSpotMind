import LegalView from "../components/LegalView";
import { getLegalDoc } from "../../lib/legal";
import { metadataAlternates } from "../../lib/i18n";

export async function generateMetadata() {
  const doc = await getLegalDoc("en", "terms");
  if (!doc) return { title: "Terms of Service — TheSpotMind" };
  return {
    title: doc.title,
    description: doc.description,
    alternates: metadataAlternates("en", "/terms"),
  };
}

export default function TermsPage() {
  return <LegalView locale="en" slug="terms" />;
}
