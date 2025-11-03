"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked #20 worldwide (QS 2025) and #1 in Australia for employment outcomes.",
    style: "absolute left-[-15%] top-[25%] w-[25%] text-center",
  },
  {
    text: "Located in Sydney — a global hub for business, innovation and lifestyle.",
    style: "absolute left-[15%] top-[-12%] w-[25%] text-center",
  },
  {
    text: "Strong industry partnerships and real-world learning opportunities across engineering, technology, business and science.",
    style: "absolute left-[54%] top-[20%] w-[25%] text-center",
  },
  {
    text: "Diverse international student body (approx 39% international) enhancing global networks and perspectives.",
    style: "absolute left-[45%] top-[70%] w-[22%] text-center",
  },
  {
    text: "Multiple campuses, state-of-the-art research facilities and a focus on innovation and entrepreneurship.",
    style: "absolute right-[-10%] top-[52%] w-[25%] text-center",
  },
];

export default function TU43() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-30">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-25 text-center">
        Why UNSW Sydney?
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
