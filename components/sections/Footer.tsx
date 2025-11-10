/* Footer: low-noise layout + minimal contact block */
export default function Footer({ id }: { id?: string }) {
  return (
    <footer
      id={id}
      className="relative bg-[#05070A] border-t border-white/10 py-10 overflow-hidden"
    >
      {/* Lighting layer (vignette only) */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute bottom-[-30%] left-1/2 -translate-x-1/2
            w-[1600px] h-[900px]
            bg-black/55 blur-[320px]
          "
        />
      </div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Top row: logo + links */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="Averon AI"
              className="h-10 w-auto opacity-100"
            />
          </div>

          {/* Legal nav */}
          <div className="flex flex-wrap gap-6 text-white/60 font-body text-base">
            <a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:text-white transition">Terms & Conditions</a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-12" />

        {/* Contact block */}
        <div className="flex flex-col gap-5 text-white/70 font-body text-sm mb-12">

          {/* Phone list */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 gap-3">
            <div className="flex items-center gap-2">
              <img src="/icons/phone.svg" className="h-4 w-4 opacity-80" />
              <span>+91-9987710419</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/icons/phone.svg" className="h-4 w-4 opacity-80" />
              <span>+91-9930991902</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/icons/phone.svg" className="h-4 w-4 opacity-80" />
              <span>+91-9768416446</span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <img src="/icons/email.svg" className="h-4 w-4 opacity-80" />
            <a
              href="mailto:hello@averonai.com"
              className="hover:text-white transition"
            >
              hello@averonai.com
            </a>
          </div>
        </div>

        {/* Bottom row: copyright */}
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