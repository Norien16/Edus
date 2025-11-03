"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked among Australia’s top universities and part of the Go8 group.",
    style: "absolute left-[-15%] top-[25%] w-[30%] text-center",
  },
  {
    text: "Located in Perth — a dynamic, livable city known for innovation, quality of life and strong industry links.",
    style: "absolute left-[15%] top-[-12%] w-[30%] text-center",
  },
  {
    text: "Strong research infrastructure including institutes in mining, agriculture, marine science and advanced technology.",
    style: "absolute left-[54%] top-[20%] w-[30%] text-center",
  },
  {
    text: "Beautiful riverside campus with modern facilities, green spaces and international student support.",
    style: "absolute left-[37%] top-[70%] w-[30%] text-center",
  },
  {
    text: "Growing international student community with programs across multiple faculties and global collaborations.",
    style: "absolute right-[-10%] top-[52%] w-[30%] text-center",
  },
];

export default function TU83() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-30">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-25 text-center">
        Why The University of Western Australia?
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
