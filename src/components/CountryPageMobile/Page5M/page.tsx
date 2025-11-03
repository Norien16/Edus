"use client";

import React, { useEffect, useRef, useState } from "react";

type Step = {
  id: number;
  title: string;
};

const steps: Step[] = [
  { id: 1, title: "Academic transcripts (minimum GPA varies)" },
  { id: 2, title: "IELTS / PTE / TOEFL English test" },
  { id: 3, title: "Statement of Purpose (SOP)" },
  { id: 4, title: "Resume + Recommendation Letters (for postgrad)" },
  { id: 5, title: "Valid passport" },
];

export default function Page5M() {
  const [lineHeight, setLineHeight] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionHeight = rect.height;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const scrollStart = sectionTop - windowHeight * 0.2;
      const scrollEnd = sectionTop + sectionHeight - windowHeight * 0.5;
      const scrollRange = scrollEnd - scrollStart;

      const progress = Math.min(
        Math.max((scrollY - scrollStart) / scrollRange, 0),
        1
      );

      const totalLength = sectionHeight - 280;
      const newHeight = 40 + totalLength * progress;

      setLineHeight(newHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-12 px-6 overflow-hidden"
    >
      {/* Header */}
      <div className="mb-15">
        <h1 className="text-3xl relative z-20 text-center font-bold leading-tight text-[#545454]">
          Admission Requirement
        </h1>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* SVG Dashed Line */}
        <svg
          className="absolute left-[-4px] top-0 pointer-events-none z-10"
          style={{ width: "48px", height: "100%", overflow: "visible" }}
        >
          <line
            x1="24"
            y1="40"
            x2="24"
            y2={lineHeight}
            stroke="#37D7D9"
            strokeWidth="3"
            strokeDasharray="6,6"
            style={{ transition: "y2 0.6s ease-out" }}
          />
        </svg>

        {/* Steps */}
        {steps.map((step) => (
          <div key={step.id} className="relative mb-14 last:mb-0">
            {/* Dot (fixed position) */}
            <div className="absolute left-5 top-8 z-20 -translate-x-1/2">
              <div className="w-5 h-5 bg-[#37D7D9] rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
            </div>

            {/* Step Text */}
            <div className="ml-10 p-6">
              <h2 className="text-xl font-semibold text-[#000000] mb-2">
                {step.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
