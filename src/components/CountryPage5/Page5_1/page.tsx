// components/WhyAustralia.tsx
"use client";

import Image from "next/image";

export default function Page5_1() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16 mt-5 overflow-hidden">
      {/* === Background Image Layer 2 (deepest) === */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/page1lineImg.png"
          alt="Deep Background"
          fill
          className="object-contain md:translate-x-150 translate-x-130 opacity-100"
          priority
        />
      </div>

      {/* === Background Image Layer 1 (middle) === */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <Image
          src="/images/page1blurImg.png"
          alt="Background Australia"
          fill
          className="object-contain opacity-100 md:translate-y-82 translate-y-10"
          priority
        />
      </div>

      {/* === Foreground Content (top) === */}
      <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        {/* === Left Image === */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/page5_1Img.png"
            alt="Study in Australia"
            width={1050}
            height={950}
            className="object-contain relative z-20 w-[280px] sm:w-[350px] md:w-[950px] -translate-x-16 h-auto"
            priority
          />
        </div>

        {/* === Right Content === */}
        <div className="text-center md:text-left">
          <h2
            className="relative z-20 text-2xl sm:text-3xl md:text-4xl font-bold text-[#545454] mb-6 md:mb-10"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Why Study in USA?
          </h2>

          <ul className="space-y-1 sm:space-y-3 text-lg sm:text-xl md:text-[22px] text-[#333] px-17 font-bold">
            {[
              "Home to the world’s top universities (Harvard, MIT, Stanford, etc.)",
              "Degrees with global recognition & high employability",
              "Optional Practical Training (OPT) & STEM extensions for international students",
              "Diverse, multicultural environment with students from 190+ countries",
              "Hub for innovation, technology & research",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-5 sm:gap-8 md:gap-11"
              >
                <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded-full bg-[#37D7D9] mt-1.5"></span>
                <span className="relative z-20">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
