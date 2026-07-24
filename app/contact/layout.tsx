// The contact page itself is a client component (it manages form state), and
// client components can't export `metadata`. This segment layout carries the
// page's SEO metadata instead.
export const metadata = {
  title: "Book a Growth Strategy Call | TheSpotMind",
  description:
    "Book a free growth strategy call with TheSpotMind. Tell us about your audience and goals, and we'll map the fastest path to community, retention, and revenue.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
