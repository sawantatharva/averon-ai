"use client";

/* About section container + section-level gradient system */
export default function About({ id }: { id?: string }) {
  return (
    <section
      id="about"
      className="relative w-full py-16 bg-[#05070A] overflow-hidden"
    >
      {/* Base layer */}
      <div className="absolute inset-0 bg-[#05070A]" />

      {/* Gradient stack (section lighting) */}
      {/* Left-wash primary */}
      <div
        className="
          pointer-events-none absolute left-[-25%] top-[-5%]
          w-[1000px] h-[1000px]
          bg-[#0F1A2E]/7 blur-[300px]
        "
      />

      {/* Right ambient tint */}
      <div
        className="
          pointer-events-none absolute right-[-20%] bottom-0
          w-[1200px] h-[1200px]
          bg-[#4DA3FF]/8 blur-[300px]
        "
      />

      {/* Bottom vignette */}
      <div
        className="
          pointer-events-none absolute bottom-[-30%] left-1/2 -translate-x-1/2
          w-[1500px] h-[900px]
          bg-black/35 blur-[300px]
        "
      />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="mb-14">
          <p className="font-body text-[#4DA3FF] text-sm tracking-[0.18em] uppercase mb-3">
            Who We Are
          </p>

          <h2 className="font-heading text-4xl md:text-5xl tracking-tight text-white">
            About Averon AI
          </h2>
        </div>

        {/* Description card */}
        <div
          className="
            bg-white/5 border border-white/10 backdrop-blur-xl
            rounded-3xl p-10 md:p-14
            shadow-[0_0_50px_-15px_rgba(0,0,0,0.75)]
            transition-all duration-300
            hover:bg-white/10 hover:border-white/20
          "
        >
          <p className="font-body text-white/70 text-lg md:text-xl leading-relaxed">
            Averon AI builds personalised AI systems designed around how
            <strong> your </strong> business actually works — not generic templates.
            We automate workflows, enable AI assistants, and streamline operations
            so your team can work smarter, faster, and with less manual effort.
          </p>

          {/* Values grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">

            {/* Item */}
            <div className="text-center group">
              <div
                className="
                  mx-auto w-16 h-16 flex items-center justify-center
                  rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl
                  shadow-[0_0_25px_rgba(77,163,255,0.12)]
                  transition-all duration-300
                  group-hover:bg-white/10 group-hover:border-white/20
                "
              >
                <img src="/icons/bolt-blue.svg" className="w-8" />
              </div>

              <h4 className="font-heading text-white text-lg mt-4">
                Fast Deployment
              </h4>
              <p className="font-body text-white/50 text-sm mt-1">
                Most workflows go live within days — not weeks.
              </p>
            </div>

            {/* Item */}
            <div className="text-center group">
              <div
                className="
                  mx-auto w-16 h-16 flex items-center justify-center
                  rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl
                  shadow-[0_0_25px_rgba(77,163,255,0.12)]
                  transition-all duration-300
                  group-hover:bg-white/10 group-hover:border-white/20
                "
              >
                <img src="/icons/consulting-blue.svg" className="w-8" />
              </div>

              <h4 className="font-heading text-white text-lg mt-4">
                Personalised AI
              </h4>
              <p className="font-body text-white/50 text-sm mt-1">
                Custom-built around your tools, rules, and processes.
              </p>
            </div>

            {/* Item */}
            <div className="text-center group">
              <div
                className="
                  mx-auto w-16 h-16 flex items-center justify-center
                  rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl
                  shadow-[0_0_25px_rgba(77,163,255,0.12)]
                  transition-all duration-300
                  group-hover:bg-white/10 group-hover:border-white/20
                "
              >
                <img src="/icons/automations-blue.svg" className="w-8" />
              </div>

              <h4 className="font-heading text-white text-lg mt-4">
                Ongoing Support
              </h4>
              <p className="font-body text-white/50 text-sm mt-1">
                We iterate and improve as your operations grow.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}