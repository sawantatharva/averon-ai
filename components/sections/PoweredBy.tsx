"use client";

export default function PoweredBy({ id }: { id?: string }) {
  const logos = [
    "/images/openai.svg",
    "/images/gemini.svg",
    "/images/claude.svg",
    "/images/aws.svg",
    "/images/pplx.svg",
    "/images/zapier.svg",
    "/images/copilot.svg",
    "/images/make.svg",
  ];

  return (
    <section
      id={id}
      className="relative w-full py-20 bg-[#05070A] overflow-hidden"
    >
      {/* ─────────────────────────────────────────────
          PREMIUM SUBTLE LIGHTING FOR META SECTIONS
      ───────────────────────────────────────────── */}

      {/* Soft ambient blue wash */}
      <div
        className="
          pointer-events-none absolute left-[20%] top-[10%]
          w-[900px] h-[900px]
          bg-[#4DA3FF]/6 blur-[260px]
        "
      />

      {/* Very faint vignette for depth */}
      <div
        className="
          pointer-events-none absolute bottom-[-30%] left-1/2 -translate-x-1/2
          w-[1500px] h-[800px]
          bg-black/40 blur-[300px]
        "
      />

      {/* Center label */}
      <div className="relative text-center mb-8 px-4">
        <p className="text-white/80 text-sm sm:text-base font-heading tracking-wide">
          Powered by the world’s leading AI Models & Automation Platforms
        </p>
      </div>

      {/* Drift wrapper */}
      <div className="relative w-full overflow-hidden pt-6">
        <div
          className="flex items-center gap-20 animate-drift"
          style={{ width: "200%" }}
        >
          {logos.concat(logos).map((src, i) => (
            <div key={i} className="flex items-center justify-center h-8 md:h-10">
              <img
                src={src}
                alt=""
                className="
                  max-h-full w-auto opacity-60
                  transition-all duration-300
                  hover:opacity-100
                "
              />
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes drift {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-drift {
            animation: drift 38s linear infinite;
          }
        `}
      </style>
    </section>
  );
}