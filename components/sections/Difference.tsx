"use client";

import React, { useState } from "react";

/* Difference section: tabbed feature blocks + gradient lighting */
export default function Difference({ id }: { id?: string }) {
  const items = [
    {
      key: "core",
      title: "AI at the Core",
      subtitle: "Adaptive intelligence as the foundation.",
      desc: "Averon embeds intelligence into your workflow — evolving as you grow.",
      icon: "/icons/core.svg",
      bullets: [
        "Learns from real usage patterns",
        "Improves accuracy over time",
        "Reduces manual correction dramatically",
      ],
      stat: "Up to 60% fewer repetitive decisions",
    },
    {
      key: "auto",
      title: "Effortless Automation",
      subtitle: "Automations that feel invisible.",
      desc: "Your tasks execute themselves — quietly, accurately, and without friction.",
      icon: "/icons/automate.svg",
      bullets: ["Removes repetitive tasks", "Works across all tools", "Runs 24/7 without errors"],
      stat: "Up to 10× faster operations",
    },
    {
      key: "scale",
      title: "Scalable Intelligence",
      subtitle: "Built to handle growth instantly.",
      desc: "Your system performs the same on day 1 and day 1000 — even under scale.",
      icon: "/icons/scale.svg",
      bullets: ["Handles high volume data", "Predictable performance", "Zero bottleneck architecture"],
      stat: "99.5% stability at scale",
    },
    {
      key: "integrate",
      title: "Seamless Integration",
      subtitle: "Fits your stack, not the other way around.",
      desc: "Averon connects deeply into your tools, platforms, and internal systems.",
      icon: "/icons/integrate.svg",
      bullets: ["CRM, sheets, messaging", "APIs, internal databases", "Two-way sync everywhere"],
      stat: "Integrates with 450+ tools",
    },
    {
      key: "data",
      title: "Data-Driven Clarity",
      subtitle: "Your decisions, enhanced by insight.",
      desc: "Messy data becomes actionable insight — instantly usable in workflows.",
      icon: "/icons/data.svg",
      bullets: ["Real-time understanding", "Highlight key actions", "Eliminate blind spots"],
      stat: "Decisions 40% faster",
    },
    {
      key: "intuition",
      title: "Intelligence + Intuition",
      subtitle: "Human creativity × AI precision.",
      desc: "Your vision + AI's intelligence = workflows that feel effortless and intuitive.",
      icon: "/icons/chart.svg",
      bullets: ["Human-based guardrails", "Adaptive behavior", "Personalised responses"],
      stat: "User satisfaction ↑ significantly",
    },
  ];

  /* Active tab */
  const [active, setActive] = useState(items[0].key);
  const selected = items.find((i) => i.key === active)!;

  return (
    <section
      id={id}
      className="relative w-full bg-[#05070A] text-white py-20 overflow-hidden"
    >
      {/* Gradient + lighting stack */}
      <div className="pointer-events-none absolute left-[5%] top-[5%] w-[1100px] h-[1100px] bg-[#0F1A2E]/7 blur-[300px]" />
      <div className="pointer-events-none absolute right-0 bottom-[-20%] w-[1300px] h-[1300px] bg-[#4DA3FF]/10 blur-[320px]" />
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[20%] w-[900px] h-[1600px] bg-white/5 blur-[260px]" />

      {/* Section header */}
      <div className="relative max-w-3xl mx-auto text-center px-6 mb-20">
        <p className="font-body text-[#4DA3FF] tracking-[0.18em] uppercase text-sm mb-3">
          Why Choose Averon
        </p>

        <h2 className="font-heading text-4xl md:text-5xl tracking-tight">
          Averon’s Difference
        </h2>

        <p className="font-body text-lg text-white/70 mt-4">
          Our systems aren’t plug-and-play scripts — they’re tailored intelligence built for your exact workflow.
        </p>
      </div>

      {/* Main layout: tabs + detail panel */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6">

        {/* Left: tab list */}
        <div className="flex flex-col gap-3">
          {items.map((item) => {
            const isActive = item.key === active;
            return (
              <button
                key={item.key}
                onClick={() => setActive(item.key)}
                className={[
                  "text-left px-6 py-4 rounded-2xl font-heading transition-all border backdrop-blur-xl",
                  isActive
                    ? "border-[#4DA3FF]/40 bg-[#4DA3FF]/10 text-[#4DA3FF] shadow-[0_0_25px_rgba(77,163,255,0.20)] ring-1 ring-[#4DA3FF]/30"
                    : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:border-white/20",
                ].join(" ")}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Right: detail panel */}
        <div
          key={selected.key}
          className="
            relative p-8 md:p-10 rounded-3xl
            bg-white/5 border border-white/10
            backdrop-blur-xl shadow-[0_0_40px_-20px_rgba(0,0,0,0.45)]
            flex flex-col
          "
        >
          {/* Icon */}
          <div className="mb-5 w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
            <img src={selected.icon} className="w-7" />
          </div>

          {/* Title */}
          <h3 className="font-heading text-[24px] md:text-[28px] text-white mb-1">
            {selected.title}
          </h3>

          {/* Subtitle */}
          <p className="font-body text-[#4DA3FF] text-[14px] mb-4">
            {selected.subtitle}
          </p>

          {/* Description */}
          <p className="font-body text-white/70 text-[14px] leading-[1.45] mb-5">
            {selected.desc}
          </p>

          {/* Bullet list */}
          <ul className="space-y-2">
            {selected.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-[#4DA3FF]" />
                <span className="font-body text-white/85 text-[14px] leading-[1.4]">
                  {b}
                </span>
              </li>
            ))}
          </ul>

          {/* KPI */}
          <div className="mt-6">
            <span
              className="
                inline-flex items-center gap-1.5 rounded-full border
                px-3.5 py-1.5 text-[13px] font-body
                bg-emerald-500/10 text-emerald-300 border-emerald-400/25
              "
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5">
                <path d="M12 4l6 6h-4v8h-4v-8H6l6-6z" fill="currentColor" />
              </svg>
              {selected.stat}
            </span>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="relative max-w-7xl mx-auto mt-8 px-6">
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
                rounded-full border border-white/10
                bg-white/4 px-6 py-3 text-center
                font-body text-sm text-white/80
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