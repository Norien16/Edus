"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Melbourne’s urban campus in one of the world’s most liveable cities",
    style: "absolute left-[-10%] top-[25%] w-[25%] text-right",
  },
  {
    text: "Ranked #1 in Australia, and among the top 20 globally (QS World University Rankings #19)",
    style: "absolute left-[15%] top-[-11%] w-[25%] text-center",
  },
  {
    text: "Over 100 research institutes and strong research output at national lead level",
    style: "absolute left-[54%] top-[20%] w-[25%] text-left",
  },
  {
    text: "Extensive industry and global partnerships ensuring high employability and real-world experience",
    style: "absolute left-[45%] top-[70%] w-[22%] text-center",
  },
  {
    text: "A large international student community across 150+ countries (student body of 53,000+)",
    style: "absolute right-[-10%] top-[57%] w-[25%] text-left",
  },
];

export default function TU23() {
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
