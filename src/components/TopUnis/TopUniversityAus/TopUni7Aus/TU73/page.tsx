"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked among the world’s top universities (QS #42 globally) and #1 in Queensland for graduate employability.",
    style: "absolute left-[-15%] top-[25%] w-[30%] text-center",
  },
  {
    text: "Located in Brisbane — a fast-growing, vibrant and student-friendly city with strong industry engagement.",
    style: "absolute left-[15%] top-[-12%] w-[30%] text-center",
  },
  {
    text: "Extensive research infrastructure and partnerships (e.g., AIBN, Sustainable Minerals Institute) supporting innovation and industry-ready graduates.",
    style: "absolute left-[54%] top-[20%] w-[30%] text-center",
  },
  {
    text: "Large global student community (21,000+ international students from 141 countries) offering diverse and multicultural campus life.",
    style: "absolute left-[37%] top-[70%] w-[30%] text-center",
  },
  {
    text: "Multi-campus setup with state-of-the-art facilities across Queensland (main campus plus regional/niche campuses).",
    style: "absolute right-[-10%] top-[52%] w-[30%] text-center",
  },
];

export default function TU73() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-30">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-25 text-center">
        Why The University of Queensland?
      </h2>

      {/* Line + Dots as One Image */}
      <div className="relative w-full max-w-[1000px] h-auto aspect-[1000/400]">
        <Image
          src="/images/tu2Img.png"
          alt="Timeline line"
          fill
          className="object-contain"
          priority
        />

        {/* Overlay Texts */}
        {points.map((point, index) => (
          <p
            key={index}
            className={`text-[#000000] text-xs sm:text-sm md:text-base ${point.style}`}
          >
            {point.text}
          </p>
        ))}
      </div>
    </section>
  );
}
