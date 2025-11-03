"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked among the world’s top universities (QS #37 in 2025) and consistently in the top 1% worldwide.",
    style: "absolute left-[-15%] top-[25%] w-[30%] text-center",
  },
  {
    text: "Large global footprint with campuses on three continents, offering international experience and cross-border opportunities.",
    style: "absolute left-[15%] top-[-18%] w-[30%] text-center",
  },
  {
    text: "Strong industry partnerships, research infrastructure and innovation focus across science, technology, design and business.",
    style: "absolute left-[54%] top-[20%] w-[30%] text-center",
  },
  {
    text: "Diverse student body spanning over 100 countries, fostering a multicultural and inclusive learning environment.",
    style: "absolute left-[37%] top-[70%] w-[30%] text-center",
  },
  {
    text: "Comprehensive course offerings — from undergraduate to doctoral — in a campus designed for both study and innovation.",
    style: "absolute right-[-10%] top-[52%] w-[30%] text-center",
  },
];

export default function TU63() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-30">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-25 text-center">
        Why Monash University?
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
