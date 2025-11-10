"use client";

import BackButton from "@/components/BackButton";

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>

        <p className="font-body text-white/60 mb-12">
          Last updated: November 10, 2025
        </p>

        {/* CONTENT */}
        <div className="space-y-12 font-body text-white/80 leading-relaxed">

          {/* 1 — INTRO */}
          <section>
            <h2 className="text-2xl font-heading text-white mb-4">
              1. Introduction
            </h2>
            <p className="text-[16px] leading-[1.7]">
              At Averon AI, we value your privacy and are committed to
              protecting your personal data. This Privacy Policy explains how
              we collect, use, and safeguard your information.
            </p>
          </section>

          {/* 2 — DATA WE COLLECT */}
          <section>
            <h2 className="text-2xl font-heading text-white mb-4">
              2. Information We Collect
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-[16px] leading-[1.7]">
              <li>Contact details (name, email, phone)</li>
              <li>Business workflow information to improve automation</li>
              <li>Technical data such as browser type, device info, and cookies</li>
            </ul>
          </section>

          {/* 3 — HOW WE USE YOUR DATA */}
          <section>
            <h2 className="text-2xl font-heading text-white mb-4">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-[16px] leading-[1.7]">
              <li>To deliver AI automations and consulting services</li>
              <li>To improve workflow performance and overall user experience</li>
              <li>To communicate regarding updates, support, and insights</li>
            </ul>
          </section>

          {/* 4 — SECURITY */}
          <section>
            <h2 className="text-2xl font-heading text-white mb-4">
              4. Data Security
            </h2>
            <p className="text-[16px] leading-[1.7]">
              We implement industry-standard measures including encryption,
              access control, and secure data handling practices to protect
              your information from unauthorized access or misuse.
            </p>
          </section>

          {/* ✅ 5 — THIRD-PARTY SERVICES (Your added section) */}
          <section>
            <h2 className="text-2xl font-heading text-white mb-4">
              5. Third-Party Services
            </h2>
            <p className="text-[16px] leading-[1.7]">
              We may integrate with third-party tools and services (such as CRMs,
              automation platforms, analytics, or messaging APIs). These
              services operate under their own privacy policies, which we
              encourage you to review independently. Averon AI does not control
              or take responsibility for how these providers manage your data.
            </p>
          </section>

          {/* ✅ 6 — CONTACT US (Your added section) */}
          <section>
            <h2 className="text-2xl font-heading text-white mb-4">
              6. Contact Us
            </h2>
            <p className="text-[16px] leading-[1.7]">
              For privacy-related questions, data removal requests, or any other
              concerns, please email us at{" "}
              <span className="text-[#4DA3FF]">
                privacy@averonai.com
              </span>.
            </p>
          </section>

        </div>
      </div>
    </section>
  );
}