"use client";

import { useState, useEffect } from "react";

/* Site header + mobile drawer */
export default function Header({ id }: { id?: string }) {
  const [open, setOpen] = useState(false);

  /* Global nav index */
  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Averon's Difference", href: "#difference" },
    { name: "How it Works", href: "#howitworks" },
    { name: "About Us", href: "#about" },
    { name: "FAQs", href: "#faqs" },
  ];

  /* Lock scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* HEADER BAR */}
      <header
        className="
          fixed top-0 inset-x-0 z-1000
          pt-[env(safe-area-inset-top)]
          bg-transparent animate-fade-down
        "
      >
        <div
          className="
            w-[92%] max-w-7xl mx-auto
            flex items-center justify-between
            py-3 sm:py-4 md:py-5 lg:py-6 xl:py-8
          "
        >
          {/* LOGO */}
          <img
            src="logo.svg"
            alt="Averon AI"
            className="
              h-8 sm:h-9 md:h-10 lg:h-11 xl:h-12
              w-auto transition-transform duration-300
              hover:scale-105 animate-scale-in
            "
          />

          {/* DESKTOP NAV */}
          <nav
            className="
              hidden xl:flex items-center gap-10
              bg-white/10 border border-white/20
              backdrop-blur-2xl rounded-full px-12 py-4
              shadow-[0_0_40px_rgba(255,255,255,0.10)]
              animate-fade-in
            "
          >
            {navItems.map((item, i) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  text-white/80 hover:text-white
                  text-[15px] transition-all hover:scale-[1.05]
                  opacity-0 animate-fade-up
                "
                style={{ animationDelay: `${0.15 + i * 0.08}s` }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <a
            href="https://tally.so/r/kdaXJj"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden xl:flex
              px-8 py-4 rounded-full
              bg-white/5 border border-white/10
              text-white font-heading
              hover:bg-white/10 hover:scale-[1.04]
              transition-all
              opacity-0 animate-fade-up
            "
            style={{ animationDelay: "0.5s" }}
          >
            Book a Call →
          </a>

          {/* MOBILE / TABLET MENU BTN */}
          <button
            onClick={() => setOpen(true)}
            className="
              xl:hidden 
              h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12
              rounded-lg bg-white/5 border border-white/10
              flex items-center justify-center
              text-white text-lg
              active:scale-90 transition animate-scale-in
            "
            style={{ animationDelay: "0.6s" }}
          >
            ☰
          </button>
        </div>
      </header>

      {/* BACKDROP (Drawer Layer 1) */}
      <div
        className={`
          fixed inset-0 z-2000
          bg-black/70 backdrop-blur-xl
          transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE DRAWER (Layer 2) */}
      <aside
        className={`
          fixed left-0 top-0 w-full z-3000
          bg-black/90 backdrop-blur-2xl border-b border-white/10
          transition-transform duration-300
          ${open ? "translate-y-0" : "-translate-y-full"}

          pt-20 px-5 pb-6
          sm:pt-24 sm:px-7 sm:pb-10
          md:pt-28 md:px-10 md:pb-12
          lg:pt-32 lg:px-14 lg:pb-16

          flex flex-col gap-6
        `}
      >
        {/* CLOSE BTN */}
        <button
          onClick={() => setOpen(false)}
          className="
            absolute top-5 right-5 
            h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12
            flex items-center justify-center 
            bg-white/5 border border-white/10 rounded-lg
            text-white text-xl active:scale-90 transition
          "
        >
          ✕
        </button>

        {/* MOBILE NAV ITEMS */}
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setOpen(false)}
            className="
              text-white/90 
              text-base sm:text-lg md:text-xl lg:text-[22px]
              border-b border-white/10 pb-3 sm:pb-4 md:pb-5
              hover:text-white hover:translate-x-1 transition
            "
          >
            {item.name}
          </a>
        ))}

        {/* DRAWER CTA */}
        <a
          href="https://tally.so/r/kdaXJj"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-6 px-6 py-4 rounded-full text-center
            bg-white/5 border border-white/10
            text-white font-heading
            hover:bg-white/10 hover:scale-[1.03] transition
            text-base sm:text-lg md:text-xl
          "
        >
          Book a Call →
        </a>
      </aside>
    </>
  );
}