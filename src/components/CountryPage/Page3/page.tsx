"use client";
import Image from "next/image";
import React from "react";

export default function CostOfStudying() {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 flex flex-col items-center overflow-hidden">
      {/* Half Background Layer (bottom only) */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#DFFFFF] z-0" />

      {/* === Background Image Layer 2 (deepest) === */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/page3lineImg.png"
          alt="Deep Background"
          fill
          className="object-contain md:translate-x-150.5 translate-x-126 -translate-y-1 opacity-100"
          priority
        />
      </div>

      {/* Title */}
      <h2 className="relative z-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#545454] mb-8 sm:mb-10 md:mb-12 text-center">
        Cost Of Studying In Australia
      </h2>

      {/* Image Section */}
      <div className="flex justify-center w-full px-4 sm:px-6 md:px-0">
        <Image
          src="/images/page3Img.png"
          alt="Cost Chart"
          width={1000}
          height={400}
          className="relative z-20 object-contain w-full max-w-[1100px] h-auto"
          priority
        />
      </div>
    </section>
  );
}
