"use client";

import Image from "next/image";
import React from "react";

export default function Tu13M() {
  const points = [
    "Ranked in the Top 1% worldwide (QS Rankings)",
    "Prime Sydney location, one of the world’s most livable cities",
    "12,000+ international students from 140+ countries",
    "200+ industry partners for internships & careers",
    "Employability-focused learning & world-class research",
  ];

  return (
    <section className="w-full px-6 py-12 -mt-13 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#545454]">
        Why Macquarie<br/> University?
      </h2>

      <div className="relative flex items-start">
        {/* Vertical Line Image */}
        <div className="relative w-8 flex-shrink-0 flex justify-center">
          <Image
            src="/images/tu13mImg.png" // ← Replace with your line+dot image
            alt="Timeline line"
            width={28}
            height={400}
            className="object-contain h-full"
          />
        </div>

        {/* Text List */}
        <ul className="ml-4 flex flex-col justify-between space-y-6">
          {points.map((point, index) => (
            <li
              key={index}
              className="text-gray-800 text-base leading-relaxed font-medium"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
