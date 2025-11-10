"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="
        inline-flex items-center gap-2
        px-5 py-2.5
        rounded-full
        bg-white/5
        border border-white/10
        backdrop-blur-xl
        
        text-white font-body text-sm

        hover:bg-white/10
        hover:border-white/20
        hover:text-[#4DA3FF]

        transition-all duration-300
      "
    >
      <svg
        className="h-4 w-4 text-[#4DA3FF]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>

      Back
    </button>
  );
}