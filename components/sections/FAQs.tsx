"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQs({ id }: { id?: string }) {
  const faqs = [
    {
      q: "Will it work with my existing software?",
      a: "Yes — it integrates with most apps and systems you already use.",
    },
    {
      q: "Do I need technical knowledge?",
      a: "No — we handle everything for you end-to-end.",
    },
    {
      q: "How quickly can you deliver?",
      a: "Most AI workflows are ready within a few days. Larger setups typically take 1–3 weeks depending on complexity.",
    },
    {
      q: "Is it easy to use?",
      a: "Yes — our solutions are designed to be simple, intuitive, and non-technical.",
    },
  ];

  return (
    <section
      id={id}
      className="relative w-full py-28 md:py-32 bg-[#05070A] overflow-hidden"
    >
      {/* -------------------------------------------------------
         ULTRA CLEAN LIGHTING — UNIQUE TO FAQ
         (Calm, minimal, no drama)
      -------------------------------------------------------- */}

      {/* Vertical soft wash (unique to FAQ) */}
      <div
        className="
          pointer-events-none absolute left-1/2 -translate-x-1/2 top-[5%]
          w-[900px] h-[1400px]
          bg-[#0A1325]/6 blur-[260px]
        "
      />

      {/* Very subtle blue anchor at bottom right */}
      <div
        className="
          pointer-events-none absolute right-[-30%] bottom-[-20%]
          w-[1100px] h-[1100px]
          bg-[#4DA3FF]/6 blur-[300px]
        "
      />

      {/* Wide, low-contrast vignette */}
      <div
        className="
          pointer-events-none absolute bottom-[-40%] left-1/2 -translate-x-1/2
          w-[1800px] h-[1000px]
          bg-black/35 blur-[330px]
        "
      />

      {/* -------------------------------------------------------
         CONTENT
      -------------------------------------------------------- */}
      <div className="relative max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="font-body text-[#4DA3FF] text-sm tracking-[0.18em] uppercase mb-3">
            Need Answers?
          </p>

          <h2 className="text-4xl md:text-5xl font-heading text-white tracking-tight">
            FAQs
          </h2>
        </div>

        {/* FAQ List */}
        <Accordion
          type="single"
          collapsible
          className="flex flex-col gap-4"
        >
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="
                border border-white/10 rounded-2xl px-6
                backdrop-blur-xl bg-white/5
                transition-all duration-300
                hover:border-white/20 hover:bg-white/10
              "
            >
              <AccordionTrigger
                className="
                  text-left text-lg md:text-xl text-white font-heading py-4
                  hover:no-underline
                  transition-colors
                  focus-visible:outline-none
                  data-[state=open]:text-[#4DA3FF]
                "
              >
                {f.q}
              </AccordionTrigger>

              <AccordionContent
                className="
                  text-white/60 text-base md:text-lg font-body leading-relaxed
                  pb-5 pt-1
                "
              >
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}