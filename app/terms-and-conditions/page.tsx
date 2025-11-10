"use client";

import BackButton from "@/components/BackButton";

export default function TermsAndConditions() {
  return (
    <section className="min-h-screen bg-[#05070A] text-white pt-12 pb-24 px-6">

      {/* Back Button */}
      <div className="max-w-7xl mx-auto">
        <BackButton />
      </div>

      <div className="h-8" />

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h1 className="font-heading text-4xl md:text-5xl text-white mb-3">
          Terms & Conditions
        </h1>

        <p className="font-body text-white/60 mb-12">
          Last updated: November 10, 2025
        </p>

        {/* CONTENT */}
        <div className="space-y-12 font-body text-white/80 leading-relaxed">

          {/* 1 — Agreement */}
          <section>
            <h2 className="text-2xl font-heading text-white mb-4">
              1. Agreement
            </h2>
            <p className="text-[16px] leading-[1.7]">
              By accessing or using Averon AI services, you agree to these
              Terms & Conditions. If you disagree with any part, please
              discontinue usage of our services.
            </p>
          </section>

          {/* 2 — Services */}
          <section>
            <h2 className="text-2xl font-heading text-white mb-4">
              2. Services
            </h2>
            <p className="text-[16px] leading-[1.7]">
              Averon AI provides workflow automation, AI assistant development,
              integrations, and consulting. Specific deliverables vary based
              on the agreed proposal or project scope.
            </p>
          </section>

          {/* 3 — Payment */}
          <section>
            <h2 className="text-2xl font-heading text-white mb-4">
              3. Payment & Billing
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-[16px] leading-[1.7]">
              <li>Payments are due as per the mutually agreed proposal</li>
              <li>Delays in payment may pause or delay service delivery</li>
              <li>Fees are non-refundable unless explicitly stated otherwise</li>
            </ul>
          </section>

          {/* 4 — Client Responsibilities */}
          <section>
            <h2 className="text-2xl font-heading text-white mb-4">
              4. Client Responsibilities
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-[16px] leading-[1.7]">
              <li>Provide accurate workflow and process information</li>
              <li>Grant required access to systems and tools for integration</li>
              <li>Maintain security of credentials shared with Averon AI</li>
            </ul>
          </section>

          {/* 5 — IP */}
          <section>
            <h2 className="text-2xl font-heading text-white mb-4">
              5. Intellectual Property
            </h2>
            <p className="text-[16px] leading-[1.7]">
              Averon AI retains ownership of underlying architectures,
              proprietary templates, and AI logic used to build your systems.
              However, custom workflow configurations and business logic built
              specifically for you belong to the client.
            </p>
          </section>

          {/* 6 — Liability */}
          <section>
            <h2 className="text-2xl font-heading text-white mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-[16px] leading-[1.7]">
              Averon AI is not liable for indirect, incidental, or
              consequential damages arising from system usage, integrations,
              downtime, or third-party services. Use of our services is at
              your own discretion and responsibility.
            </p>
          </section>

          {/* 7 — Legal Contact */}
          <section>
            <h2 className="text-2xl font-heading text-white mb-4">
              7. Contact
            </h2>
            <p className="text-[16px] leading-[1.7]">
              For legal or contractual questions, contact us at{" "}
              <span className="text-[#4DA3FF]">legal@averonai.com</span>.
            </p>
          </section>

        </div>
      </div>
    </section>
  );
}