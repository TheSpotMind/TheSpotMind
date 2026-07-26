import LegalView from "../../components/LegalView";
import { getLegalDoc } from "../../../lib/legal";
import { metadataAlternates } from "../../../lib/i18n";

export async function generateMetadata() {
  const doc = await getLegalDoc("es", "privacy");
  if (!doc) return { title: "Política de privacidad — TheSpotMind" };
  return {
    title: doc.title,
    description: doc.description,
    alternates: metadataAlternates("es", "/privacy"),
  };
}

export default function PrivacyPageEs() {
  return <LegalView locale="es" slug="privacy" />;
}
