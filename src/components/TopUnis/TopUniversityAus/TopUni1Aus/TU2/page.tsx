"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked in the Top 1% worldwide (QS Rankings)",
    style: "absolute left-[-10%] top-[25%] w-[25%] text-right",
  },
  {
    text: "Prime Sydney location, one of the world’s most livable cities",
    style: "absolute left-[15%] top-[-7%] w-[25%] text-center",
  },
  {
    text: "12,000+ international students from 140+ countries",
    style: "absolute left-[54%] top-[28%] w-[25%] text-left",
  },
  {
    text: "200+ industry partners for internships & careers",
    style: "absolute left-[45%] top-[80%] w-[22%] text-center",
  },
  {
    text: "Employability-focused learning & world-class research",
    style: "absolute right-[-10%] top-[63%] w-[25%] text-left",
  },
];

export default function TU2() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-20">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-25 text-center">
        Why Macquarie University?
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
