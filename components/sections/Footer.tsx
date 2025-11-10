export default function Footer({ id }: { id?: string }) {
  return (
    <footer
      id={id}
      className="relative bg-[#05070A] border-t border-white/10 py-20 overflow-hidden"
    >
      {/* Subtle bottom vignette */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute bottom-[-30%] left-1/2 -translate-x-1/2
            w-[1600px] h-[900px]
            bg-black/55 blur-[320px]
          "
        />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6">

        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="Averon AI"
              className="h-10 w-auto opacity-100"
            />
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-6 text-white/60 font-body text-base">
            {/* Removed: About Us */}
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms & Conditions</a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-12" />

        {/* BOTTOM ROW */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-white/50 font-body text-sm">
            © {new Date().getFullYear()} Averon AI. All rights reserved.
          </p>

          <p className="text-white/50 font-body text-sm">
            Designed with ❤️ in Mumbai.
          </p>
        </div>
      </div>
    </footer>
  );
}