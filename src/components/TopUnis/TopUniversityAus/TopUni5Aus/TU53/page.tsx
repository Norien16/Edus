"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Located in Australia’s national capital — Canberra — offering access to government, research organisations and global connections.",
    style: "absolute left-[-15%] top-[25%] w-[25%] text-center",
  },
  {
    text: "Ranked among the world’s leading universities in research and innovation.",
    style: "absolute left-[15%] top-[-12%] w-[25%] text-center",
  },
  {
    text: "Comprehensive global academic partnerships and alumni network across public policy, science and humanities.",
    style: "absolute left-[54%] top-[20%] w-[25%] text-center",
  },
  {
    text: "Strong focus on interdisciplinary research and global issues (climate, security, technology).",
    style: "absolute left-[45%] top-[70%] w-[22%] text-center",
  },
  {
    text: "High quality student experience and campus life in a purpose-built university environment.",
    style: "absolute right-[-10%] top-[57%] w-[25%] text-center",
  },
];

export default function TU53() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-30">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-25 text-center">
        Why Australian National University?
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
