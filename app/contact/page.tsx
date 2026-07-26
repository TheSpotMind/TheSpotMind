import ContactView from "../components/ContactView";
import { getDict } from "../../lib/dictionaries";
import { metadataAlternates } from "../../lib/i18n";

export function generateMetadata() {
  const t = getDict("en").contact;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: metadataAlternates("en", "/contact"),
  };
}

export default function ContactPage() {
  return <ContactView locale="en" />;
}
