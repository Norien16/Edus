"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Located in Melbourne, one of the world’s most livable and vibrant student cities.",
    style: "absolute left-[-15%] top-[25%] w-[30%] text-center",
  },
  {
    text: "Recognised for industry-connected education, practical learning and design & technology focus.",
    style: "absolute left-[15%] top-[-12%] w-[30%] text-center",
  },
  {
    text: "Global campuses and strong international linkages provide worldwide exposure.",
    style: "absolute left-[50%] top-[20%] w-[30%] text-center",
  },
  {
    text: "Diverse international student community and modern facilities in a central urban setting.",
    style: "absolute left-[37%] top-[70%] w-[30%] text-center",
  },
  {
    text: "Courses designed with employability and real-world project experience in mind.",
    style: "absolute right-[-10%] top-[58%] w-[30%] text-center",
  },
];

export default function TU103() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-30">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-25 text-center">
        Why RMIT University?
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
