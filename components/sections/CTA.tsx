import Link from "next/link";

export default function CTA({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="relative py-28 md:py-32 bg-[#05070A] overflow-hidden text-center"
    >
      {/* -------------------------------------------------------
         UNIQUE CTA LIGHTING — FOCUSED, HEROIC
      -------------------------------------------------------- */}

      {/* 1. Strong center spotlight (primary focal beam) */}
      <div
        className="
          pointer-events-none absolute top-[15%] left-1/2 -translate-x-1/2
          w-[1100px] h-[1400px]
          bg-white/7 blur-[220px]
        "
      />

      {/* 2. Blue anchor glow — very low & wide */}
      <div
        className="
          pointer-events-none absolute bottom-[-25%] left-1/2 -translate-x-1/2
          w-[1600px] h-[1100px]
          bg-[#4DA3FF]/7 blur-[300px]
        "
      />

      {/* 3. Top vignette — unique to CTA */}
      <div
        className="
          pointer-events-none absolute top-[-40%] left-1/2 -translate-x-1/2
          w-[1800px] h-[1000px]
          bg-black/55 blur-[320px]
        "
      />

      {/* -------------------------------------------------------
         CONTENT
      -------------------------------------------------------- */}
      <div className="relative max-w-3xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-6">
          Ready to scale with AI?
        </h2>

        {/* Description */}
        <p className="font-body text-white/65 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
          Automate workflows. Increase conversions. Grow autonomously — powered by AI systems built around your business.
        </p>

        {/* CTA Button */}
        <Link
          href="#call"
          className="
            inline-flex items-center justify-center
            px-10 py-4 rounded-full
            font-heading text-lg text-black
            bg-white shadow-[0_0_30px_rgba(255,255,255,0.2)]
            hover:shadow-[0_0_40px_rgba(255,255,255,0.28)]
            transition-all duration-300 hover:scale-[1.04]
          "
        >
          Book a Call →
        </Link>
      </div>
    </section>
  );
}