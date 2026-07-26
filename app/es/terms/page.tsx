import LegalView from "../../components/LegalView";
import { getLegalDoc } from "../../../lib/legal";
import { metadataAlternates } from "../../../lib/i18n";

export async function generateMetadata() {
  const doc = await getLegalDoc("es", "terms");
  if (!doc) return { title: "Términos del servicio — TheSpotMind" };
  return {
    title: doc.title,
    description: doc.description,
    alternates: metadataAlternates("es", "/terms"),
  };
}

export default function TermsPageEs() {
  return <LegalView locale="es" slug="terms" />;
}
