"use client";

/* Partner/logo drift marquee */
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
      className="relative w-full py-6 sm:py-20 bg-[#05070A] overflow-hidden"
    >
      {/* Gradient stack (section lighting) */}
      <div
        className="
          pointer-events-none absolute left-1/2 -translate-x-1/2 top-[5%]
          w-full max-w-[900px] h-[900px]
          lg:left-[20%] lg:translate-x-0 lg:w-[900px]
          bg-[#4DA3FF]/6 blur-[260px]
        "
      />

      <div
        className="
          pointer-events-none absolute bottom-[-30%] left-1/2 -translate-x-1/2
          w-[150%] max-w-[1500px] h-[800px]
          bg-black/40 blur-[300px]
        "
      />

      {/* Section label */}
      <div className="relative text-center mb-8 px-4">
        <p className="text-white text-sm sm:text-base font-heading tracking-wide max-w-lg mx-auto">
          Powered by the world’s leading AI Models & Automation Platforms
        </p>
      </div>

      {/* Drift marquee */}
      <div className="relative w-full overflow-hidden pt-6">
        <div
          className="flex items-center gap-12 sm:gap-16 md:gap-20 animate-drift"
          style={{ width: "200%" }} /* loop track */
        >
          {/* Duplicate logo list for seamless wrap-around */}
          {logos.concat(logos).map((src, i) => (
            <div
              key={i}
              className="shrink-0 flex items-center justify-center h-6 sm:h-7 md:h-8 lg:h-9"
            >
              <img
                src={src}
                alt=""
                className="
                  max-h-full w-auto opacity-60
                  transition-all duration-300 hover:opacity-100
                "
              />
            </div>
          ))}
        </div>
      </div>

      {/* Local drift animation */}
      <style>
        {`
          @keyframes drift {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-drift {
            animation: drift 30s linear infinite;
          }
        `}
      </style>
    </section>
  );
}