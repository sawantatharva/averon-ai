"use client";

import React from "react";

const ICON_COLOR = "#4DA3FF";

export default function Difference({ id }: { id?: string }) {
  const edges = [
    { title: "AI at the Core", desc: "Intelligence that learns and evolves with your workflow." },
    { title: "Effortless Automation", desc: "Smart, invisible automations that eliminate manual work." },
    { title: "Scalable Intelligence", desc: "Precision and reliability even as complexity grows." },
    { title: "Seamless Integration", desc: "Connects directly into your stack without disruption." },
    { title: "Data-Driven Clarity", desc: "Turns messy data into confident, fast decisions." },
    { title: "Intelligence + Intuition", desc: "Human vision amplified by AI precision." },
  ];

  return (
    <section
      id={id}
      className="relative w-full bg-[#05070A] text-white py-28 overflow-hidden"
    >
      {/* -------------------------------------------------------
          UNIQUE LIGHTING FOR THIS SECTION
          (CENTER-BIASED, AUTHORITATIVE, NON-REPEATING)
      -------------------------------------------------------- */}

      {/* Cool wash — high left/center */}
      <div
        className="
          pointer-events-none absolute left-[5%] top-[-20%]
          w-[1200px] h-[1200px]
          bg-[#0F1A2E]/7 blur-[320px]
        "
      />

      {/* Blue ambient — low right/center (inverted vs other sections) */}
      <div
        className="
          pointer-events-none absolute right-[0%] bottom-[-25%]
          w-[1300px] h-[1300px]
          bg-[#4DA3FF]/9 blur-[320px]
        "
      />

      {/* Vertical lavender wash — only used here */}
      <div
        className="
          pointer-events-none absolute left-1/2 -translate-x-1/2 top-[10%]
          w-[900px] h-[1600px]
          bg-[#F4F0FF]/6 blur-[260px]
        "
      />

      {/* Top vignette — unique subtle fade */}
      <div
        className="
          pointer-events-none absolute top-[-40%] left-1/2 -translate-x-1/2
          w-[1600px] h-[1000px]
          bg-black/40 blur-[320px]
        "
      />

      {/* -------------------------------------------------------
          HEADING
      -------------------------------------------------------- */}
      <div className="relative max-w-3xl mx-auto text-center px-6 mb-16">
        <p className="font-body text-[#4DA3FF] tracking-[0.18em] uppercase text-sm mb-2">
          Why Choose Averon
        </p>

        <h2 className="font-heading text-4xl md:text-5xl tracking-tight">
          Averon’s Difference
        </h2>

        <p className="font-body text-white/70 mt-4">
          Our systems aren’t plug-and-play scripts — they’re tailored intelligence built for your exact workflow.
        </p>
      </div>

      {/* -------------------------------------------------------
          GRID
      -------------------------------------------------------- */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {edges.map(({ title, desc }) => (
          <article
            key={title}
            className="
              group relative rounded-3xl p-7 sm:p-8
              bg-white/5 border border-white/10 backdrop-blur-xl
              transition-all duration-300
              hover:-translate-y-1.5 hover:bg-white/10 hover:border-white/20
              shadow-[0_0_40px_-10px_rgba(0,0,0,0.45)]
            "
          >
            {/* Hover Glow */}
            <div
              className="
                absolute -top-10 -right-10 w-40 h-40 rounded-full
                bg-[#4DA3FF]/22 blur-[90px]
                opacity-0 group-hover:opacity-100 transition-opacity
              "
            />

            <div className="flex items-start gap-4">
              <div
                className="
                  shrink-0 grid place-items-center
                  h-12 w-12 rounded-2xl
                  bg-white/5 border border-white/10
                "
                style={{ color: ICON_COLOR }}
              >
                <div className="h-6 w-6 rounded-full bg-[#4DA3FF]/90" />
              </div>

              <div>
                <h3 className="font-heading text-xl md:text-[22px]">
                  {title}
                </h3>
                <p className="font-body text-white/65 mt-2 leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>

            <div className="mt-6 h-px bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </article>
        ))}
      </div>

      {/* -------------------------------------------------------
          STATS
      -------------------------------------------------------- */}
      <div className="relative max-w-7xl mx-auto mt-14 px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { k: "Delivery", v: "Days–Weeks" },
            { k: "Integrations", v: "Your Stack" },
            { k: "Focus", v: "Custom Systems" },
            { k: "Maintenance", v: "Continuous" },
          ].map((s) => (
            <div
              key={s.k}
              className="
                rounded-full border border-white/10 bg-white/4
                px-4 py-2 text-center font-body text-sm text-white/80
              "
            >
              <span className="text-white/60">{s.k}:</span>{" "}
              <span className="text-white">{s.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
