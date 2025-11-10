"use client";

/* Services section + diagonal lighting system */
export default function Services({ id }: { id?: string }) {
  const services = [
    {
      icon: "/icons/automations-blue.svg",
      title: "AI Workflow Automation",
      desc: "Replace repetitive manual tasks with smooth, fully connected AI-powered processes tailored to your operations.",
    },
    {
      icon: "/icons/assistants-blue.svg",
      title: "AI Assistants",
      desc: "Handle customer queries, leads, support, and sales processes — automatically and intelligently.",
    },
    {
      icon: "/icons/consulting-blue.svg",
      title: "AI Consulting",
      desc: "Identify where AI can save you time, improve workflows, and design the right automation strategy.",
    },
    {
      icon: "/icons/notifications-blue.svg",
      title: "Communication Automation",
      desc: "Automated reminders, tickets, emails, updates, and follow-ups that prevent missed opportunities.",
    },
  ];

  return (
    <section
      id={id}
      className="relative w-full py-14 bg-[#05070A] overflow-hidden"
    >
      {/* Lighting stack (section-unique diagonal composition) */}
      {/* Top-right blue wash */}
      <div
        className="
          pointer-events-none absolute right-[-30%] top-[-5%]
          w-[1200px] h-[1200px]
          bg-[#4DA3FF]/9 blur-[300px]
        "
      />

      {/* Bottom-left cool wash */}
      <div
        className="
          pointer-events-none absolute left-[-28%] bottom-[-5%]
          w-[1100px] h-[1100px]
          bg-[#0F1A2E]/6 blur-[300px]
        "
      />

      {/* Deep vignette for card contrast */}
      <div
        className="
          pointer-events-none absolute bottom-[-40%] left-1/2 -translate-x-1/2
          w-[1700px] h-[950px]
          bg-black/50 blur-[360px]
        "
      />

      {/* Header */}
      <div className="relative text-center mb-20 px-6">
        <p className="font-body text-[#4DA3FF] text-sm tracking-[0.18em] uppercase mb-3">
          What We Do
        </p>

        <h2 className="text-4xl md:text-5xl tracking-tight font-heading text-white">
          Services We Provide
        </h2>

        <p className="mt-4 text-white/60 text-lg max-w-2xl mx-auto font-body">
          AI systems custom-designed around the way your business actually works.
        </p>
      </div>

      {/* Services grid */}
      <div
        className="
          relative max-w-7xl mx-auto
          grid grid-cols-1 md:grid-cols-2 gap-10 px-6
        "
      >
        {services.map((srv, i) => (
          <div
            key={i}
            className="
              relative group p-10 rounded-3xl
              bg-white/5 border border-white/10 backdrop-blur-xl
              transition-all duration-300
              hover:bg-white/10 hover:border-white/20 hover:-translate-y-2
              shadow-[0_0_50px_-15px_rgba(0,0,0,0.5)]
            "
          >
            {/* Hover light accents */}
            <div
              className="
                absolute inset-0 opacity-0 group-hover:opacity-100
                transition-all duration-500 pointer-events-none
              "
            >
              <div
                className="
                  absolute right-[-20%] top-[10%]
                  w-[300px] h-[300px]
                  bg-[#4DA3FF]/22 blur-[140px]
                "
              />
              <div
                className="
                  absolute left-[-20%] bottom-[-10%]
                  w-[260px] h-[260px]
                  bg-[#4DA3FF]/12 blur-[140px]
                "
              />
            </div>

            {/* Icon */}
            <div
              className="
                relative z-2
                w-14 h-14 mb-6
                rounded-2xl flex items-center justify-center
                bg-white/10 border border-white/10 backdrop-blur-xl
                group-hover:scale-105 transition-transform
              "
            >
              <img src={srv.icon} className="w-7 opacity-90" />
            </div>

            {/* Title */}
            <h3 className="relative z-2 text-2xl mb-4 font-heading text-white">
              {srv.title}
            </h3>

            {/* Description */}
            <p className="relative z-2 text-white/60 leading-relaxed font-body">
              {srv.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}