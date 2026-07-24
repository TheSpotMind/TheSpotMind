export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              TheSpot<span className="text-accent">Mind</span>
            </h3>
            <p className="mt-3 max-w-sm text-sm text-zinc-400">
              We help creators turn their audience into scalable, monetizable
              communities using systems and AI automation.
            </p>
          </div>

          <div className="flex gap-16 text-sm">
            <div>
              <p className="mb-3 text-white">Navigation</p>
              <div className="flex flex-col gap-2 text-zinc-400">
                <a href="/" className="hover:text-white">Home</a>
                <a href="/solutions" className="hover:text-white">Solutions</a>
                <a href="/contact" className="hover:text-white">Contact</a>
              </div>
            </div>

            <div>
              <p className="mb-3 text-white">Company</p>
              <div className="flex flex-col gap-2 text-zinc-400">
                <a href="/about" className="hover:text-white">About</a>
                <a href="#" className="hover:text-white">Privacy</a>
                <a href="#" className="hover:text-white">Terms</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-zinc-500 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} TheSpotMind. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}