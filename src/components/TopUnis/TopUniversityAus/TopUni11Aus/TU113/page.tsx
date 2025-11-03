"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked #1 young university in Australia and among the top 100 globally for its industry-engaged learning and international outlook.",
    style: "absolute left-[-15%] top-[25%] w-[30%] text-center",
  },
  {
    text: "Located in Sydney’s technology and innovation precinct — in the heart of the city’s creative and business hub, offering strong industry linkages.",
    style: "absolute left-[15%] top-[-18%] w-[30%] text-center",
  },
  {
    text: "Practice-based learning built into courses, with focus on real-world problems and industry experience for international students.",
    style: "absolute left-[53%] top-[20%] w-[30%] text-center",
  },
  {
    text: "Large international student community from over 180 nationalities, supported by specialised international student services.",
    style: "absolute left-[37%] top-[70%] w-[30%] text-center",
  },
  {
    text: "State-of-the-art campus facilities including UTS Tower, UTS Central, modern libraries and research institutes in city‐campus setting.",
    style: "absolute right-[-10%] top-[54%] w-[30%] text-center",
  },
];

export default function TU113() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-30">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-25 text-center">
        Why University of Technology Sydney?
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
