"use client";

import { useState, useEffect } from "react";

export default function Header({ id }: { id?: string }) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Averon's Difference", href: "#difference" },
    { name: "How it Works", href: "#howitworks" },
    { name: "About Us", href: "#about" },
    { name: "FAQs", href: "#faqs" },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className="
          fixed top-0 inset-x-0 z-1000
          mt-4 sm:mt-0
          pt-[env(safe-area-inset-top)]
          sm:pt-4 md:pt-6 lg:pt-8 xl:pt-10
          bg-transparent
          animate-fade-down
        "
      >
        <div className="w-[92%] max-w-7xl mx-auto flex items-center justify-between py-4">

          <img
            src="/logo.svg"
            alt="Averon AI"
            className="
              h-10 md:h-12 w-auto
              transition-transform duration-300
              hover:scale-105
              animate-scale-in
            "
          />

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
                className={`
                  text-white/80 hover:text-white
                  text-[15px] transition-all hover:scale-[1.05]
                  opacity-0 animate-fade-up
                `}
                style={{ animationDelay: `${0.15 + i * 0.08}s` }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <a
            href="#"
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

          <button
            onClick={() => setOpen(true)}
            className="
              xl:hidden h-10 w-10 rounded-lg
              bg-white/5 border border-white/10
              flex items-center justify-center
              text-white text-xl
              active:scale-90 transition
              animate-scale-in
            "
            style={{ animationDelay: "0.6s" }}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Backdrop */}
      <div
        className={`
          fixed inset-0 bg-black/70 backdrop-blur-xl
          transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto z-2000 animate-fade-in" : "opacity-0 pointer-events-none z-20"}
        `}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Slide-In Panel */}
      <aside
        className={`
          fixed right-0 top-0 h-full w-[80%] max-w-xs
          bg-black/90 backdrop-blur-2xl
          border-l border-white/10
          transition-transform duration-300
          ${open ? "translate-x-0 z-3000" : "translate-x-full z-3000"}
          pt-24 px-6 flex flex-col gap-6
        `}
      >
        <button
          onClick={() => setOpen(false)}
          className="
            absolute top-6 right-6 h-10 w-10 flex items-center justify-center 
            bg-white/5 border border-white/10 rounded-lg text-white text-2xl
            active:scale-90 transition
            opacity-0 animate-scale-in
          "
          style={{ animationDelay: open ? "0.15s" : "0s" }}
        >
          ✕
        </button>

        {navItems.map((item, i) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setOpen(false)}
            className="
              text-white/90 text-lg border-b border-white/10 pb-3
              hover:text-white hover:translate-x-1 transition
              opacity-0 animate-slide-in-up
            "
            style={{ animationDelay: open ? `${0.20 + i * 0.08}s` : "0s" }}
          >
            {item.name}
          </a>
        ))}

        <a
          href="#"
          className="
            mt-6 px-6 py-4 rounded-full text-center
            bg-white/5 border border-white/10 text-white font-heading
            hover:bg-white/10 hover:scale-[1.03] transition
            opacity-0 animate-scale-in
          "
          style={{ animationDelay: open ? "0.55s" : "0s" }}
        >
          Book a Call →
        </a>
      </aside>
    </>
  );
}
