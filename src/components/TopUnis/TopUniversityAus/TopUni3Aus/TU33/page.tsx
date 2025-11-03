"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "One of the world’s top universities (QS Top 20) and Australia’s oldest institution.",
    style: "absolute left-[-15%] top-[25%] w-[25%] text-center",
  },
  {
    text: "Located in Sydney — a global city known for its cultural diversity, lifestyle and employment opportunities.",
    style: "absolute left-[15%] top-[-18%] w-[25%] text-center",
  },
  {
    text: "Research-intensive with 100+ research institutes, strong industry collaboration and high graduate employability.",
    style: "absolute left-[54%] top-[20%] w-[25%] text-center",
  },
  {
    text: "Large international community from 140+ countries, enhancing global networks and student collaboration.",
    style: "absolute left-[45%] top-[70%] w-[22%] text-center",
  },
  {
    text: "Broad program range (~450+ courses) across every major discipline, providing flexible pathways for global careers.",
    style: "absolute right-[-10%] top-[52%] w-[25%] text-center",
  },
];

export default function TU33() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-30">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-25 text-center">
        Why University of Melbourne?
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
