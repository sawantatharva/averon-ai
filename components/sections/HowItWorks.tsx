"use client";

export default function HowItWorks({ id }: { id?: string }) {
  const steps = [
    {
      num: "01",
      title: "Understand your workflow",
      desc: "We map how your business operates to identify bottlenecks, repetitive work, and automation opportunities.",
    },
    {
      num: "02",
      title: "Design AI-powered automations",
      desc: "We architect intelligent workflows tailored to your processes — not generic templates.",
    },
    {
      num: "03",
      title: "Build & connect with your tools",
      desc: "Your automations integrate directly into your stack — CRM, calendar, forms, messaging, and internal systems.",
    },
    {
      num: "04",
      title: "Improve & support continuously",
      desc: "We monitor performance, refine logic, adjust behaviors, and ensure everything runs smoothly.",
    },
  ];

  return (
    <section
      id={id}
      className="relative w-full py-28 md:py-32 bg-[#05070A] overflow-hidden"
    >
      {/* -------------------------------------------------------
         CINEMATIC LIGHTING — UNIQUE FOR THIS SECTION
         (Low blue + high cool wash)
      -------------------------------------------------------- */}

      {/* Blue wash — very low right (calm, grounded) */}
      <div
        className="
          pointer-events-none absolute right-[-28%] bottom-[-5%]
          w-[1150px] h-[1150px]
          bg-[#4DA3FF]/7 blur-[300px]
        "
      />

      {/* Cool wash — high top-left (soft instructional mood) */}
      <div
        className="
          pointer-events-none absolute left-[-25%] top-[-10%]
          w-[1050px] h-[1050px]
          bg-[#0F1A2E]/6 blur-[300px]
        "
      />

      {/* Wide, deep vignette */}
      <div
        className="
          pointer-events-none absolute bottom-[-40%] left-1/2 -translate-x-1/2
          w-[1800px] h-[1000px]
          bg-black/50 blur-[360px]
        "
      />

      {/* -------------------------------------------------------
         CONTENT
      -------------------------------------------------------- */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="font-body text-[#4DA3FF] text-sm tracking-[0.18em] uppercase mb-4">
            Step-by-Step
          </p>

          <h2 className="font-heading text-4xl md:text-5xl text-white tracking-tight">
            How It Works
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="
                group relative p-8 rounded-3xl 
                bg-white/5 border border-white/10 backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-2 hover:bg-white/10 hover:border-white/20
                shadow-[0_0_40px_-15px_rgba(0,0,0,0.5)]
              "
            >
              {/* Hover glow — clean blue only */}
              <div
                className="
                  absolute -top-10 -right-10 w-40 h-40 rounded-full
                  bg-[#4DA3FF]/20 blur-[90px]
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                "
              />

              <span className="font-heading text-[26px] text-[#4DA3FF] block mb-4">
                {step.num}
              </span>

              <h3 className="text-xl md:text-[22px] font-heading text-white mb-3">
                {step.title}
              </h3>

              <p className="font-body text-white/65 leading-relaxed text-[15px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}