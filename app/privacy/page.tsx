import LegalView from "../components/LegalView";
import { getLegalDoc } from "../../lib/legal";
import { metadataAlternates } from "../../lib/i18n";

export async function generateMetadata() {
  const doc = await getLegalDoc("en", "privacy");
  if (!doc) return { title: "Privacy Policy — TheSpotMind" };
  return {
    title: doc.title,
    description: doc.description,
    alternates: metadataAlternates("en", "/privacy"),
  };
}

export default function PrivacyPage() {
  return <LegalView locale="en" slug="privacy" />;
}
