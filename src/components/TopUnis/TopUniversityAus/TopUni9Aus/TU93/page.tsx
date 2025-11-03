"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "A long-established institution (est. 1874) offering rich academic heritage and modern research.",
    style: "absolute left-[-15%] top-[25%] w-[30%] text-center",
  },
  {
    text: "Located in Adelaide — a safe, affordable and livable city with strong student support and lifestyle amenities.",
    style: "absolute left-[15%] top-[-18%] w-[30%] text-center",
  },
  {
    text: "Strong research infrastructure including institutes for space, energy, health sciences and advanced technology.",
    style: "absolute left-[54%] top-[20%] w-[30%] text-center",
  },
  {
    text: "Global outlook with international students and cross-border collaborations enhancing the learning experience.",
    style: "absolute left-[37%] top-[70%] w-[30%] text-center",
  },
  {
    text: "Competitive tuition fees relative to major Australian cities, making it an appealing choice for international students.",
    style: "absolute right-[-10%] top-[52%] w-[30%] text-center",
  },
];

export default function TU93() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-30">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-25 text-center">
        Why The University of Adelaide?
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
