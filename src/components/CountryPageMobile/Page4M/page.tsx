"use client";

import React, { useEffect, useRef, useState } from "react";

type Step = {
  id: number;
  icon: string;
};

const steps: Step[] = [
  { id: 1, icon: "/images/page4Img1.png" },
  { id: 2, icon: "/images/page4Img2.png" },
  { id: 3, icon: "/images/page4Img3.png" },
];

export default function Page4M() {
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

      const totalLength = sectionHeight - 300;
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
      className="relative -mt-5 w-full bg-white py-12 px-6 overflow-hidden"
    >
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-3xl relative z-20 text-center font-bold leading-tight text-[#545454]">
          Work & Stay Opportunities
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
          <div key={step.id} className="relative mb-10 last:mb-0">
            {/* Dot (fixed position) */}
            <div className="absolute left-5 top-8 z-20 -translate-x-1/2">
              <div className="w-5 h-5 bg-[#37D7D9] rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
            </div>

            {/* Card */}
            <div className="-translate-y-20 rounded-2xl p-15 relative">
              {/* ✅ Icon absolutely positioned — doesn’t affect layout */}
              <div className="absolute top-4 right-4">
                <div className="w-[280px] h-[280px] flex items-center justify-center">
                  <img
                    src={step.icon}
                    alt=""
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
