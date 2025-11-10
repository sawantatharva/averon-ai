"use client";

import dynamic from "next/dynamic";
const HeroCanvas = dynamic(() => import("../3d/HeroCanvas"), { ssr: false });

export default function Hero({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="relative w-full min-h-screen bg-[#05070A] flex items-center px-6 md:px-20 pt-40 pb-32 overflow-hidden"
    >
      {/* -------------------------------------------------------
         PREMIUM HERO LIGHTING (FINAL VERSION)
      -------------------------------------------------------- */}

      {/* Dark base */}
      <div className="absolute inset-0 bg-[#05070A]" />

      {/* Strong blue ambient glow — behind 3D model */}
      <div
        className="
          pointer-events-none absolute right-[-20%] top-[10%]
          w-[1400px] h-[1400px]
          bg-[#4DA3FF]/14 blur-[360px]
        "
      />

      {/* White spotlight — behind hero text */}
      <div
        className="
          pointer-events-none absolute left-[5%] top-[28%]
          w-[1600px] h-[1600px]
          bg-white/10 blur-[380px]
        "
      />

      {/* Deep bottom vignette */}
      <div
        className="
          pointer-events-none absolute bottom-[-40%] left-1/2 -translate-x-1/2
          w-[2000px] h-[1200px]
          bg-black/50 blur-[380px]
        "
      />

      {/* -------------------------------------------------------
         MAIN CONTENT
      -------------------------------------------------------- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE — TEXT */}
        <div className="max-w-[620px]">

          {/* Pre-Headline */}
          <p className="font-body text-[#4DA3FF] text-sm tracking-[0.18em] uppercase mb-4">
            Built Around Your Workflow
          </p>

          {/* Main Headline */}
          <h1 className="font-heading text-[42px] md:text-[60px] leading-[1.05] tracking-tight text-white">
            AI That Works the Way <br />
            <span className="text-[#66B8FF]">
              Your Business Works
            </span>
          </h1>

          {/* Description */}
          <p className="font-body text-gray-300 mt-6 text-[17px] leading-relaxed">
            We build personalised AI workflows, assistants, and automation
            systems that integrate directly into your tools — reducing manual
            work and helping your business operate up to 10× faster.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#cta"
              className="
                font-body px-8 py-3.5 rounded-full
                bg-white text-black font-medium
                shadow-[0_0_30px_rgba(255,255,255,0.18)]
                hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]
                hover:scale-[1.04]
                transition-all
              "
            >
              Book a Call →
            </a>

            <a
              href='https://wa.me/XXXXXXXXXX'
              className="
                font-body px-8 py-3.5 rounded-full
                border border-white/20 text-white font-medium
                hover:bg-white/10 hover:scale-[1.04]
                transition-all
              "
            >
              Connect on WhatsApp →
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — 3D MODEL */}
        <div className="relative w-full h-[360px] sm:h-[420px] md:h-[500px] lg:h-[560px] max-w-[620px] mx-auto">
          <HeroCanvas />
        </div>
      </div>
    </section>
  );
}