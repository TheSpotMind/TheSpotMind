// Renders a JSON-LD structured-data block as a native <script> tag — the
// approach Next.js recommends for structured data (it's data, not executable
// code, so next/script isn't needed). Escaping "<" as "<" stops any string
// in the payload from closing the <script> element early, which would otherwise
// be an XSS vector.
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
