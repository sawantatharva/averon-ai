"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling 600px
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-2000
        px-4 py-3 rounded-full
        bg-white/10 border border-white/15 backdrop-blur-xl 
        text-white font-heading
        hover:bg-white/20 transition-all
        shadow-lg shadow-black/20
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"}
      `}
    >
      ↑ Top
    </button>
  );
}