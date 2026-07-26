import ContactView from "../../components/ContactView";
import { getDict } from "../../../lib/dictionaries";
import { metadataAlternates } from "../../../lib/i18n";

export function generateMetadata() {
  const t = getDict("es").contact;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: metadataAlternates("es", "/contact"),
  };
}

export default function ContactPageEs() {
  return <ContactView locale="es" />;
}
