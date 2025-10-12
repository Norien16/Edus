"use client";
import React from "react";
import Image from "next/image";

export default function Page3_2() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 flex flex-col items-center overflow-hidden">
      {/* === Background Image Layer 2 (deepest) === */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/page2lineImg.png"
          alt="Deep Background"
          fill
          className="object-contain md:translate-x-150.5 translate-x-121 opacity-100"
          priority
        />
      </div>

      {/* Heading */}
      <h2 className="relative z-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#545454] mb-10 sm:mb-12 md:mb-16 text-center">
        Popular Courses In Canada
      </h2>

      {/* Courses Container */}
      <div className="relative z-20 w-full max-w-6xl h-[400px] sm:h-[420px] md:h-[300px] text-base sm:text-lg md:text-xl lg:text-[24px]">
        {/* Course Boxes */}
        <div className="absolute top-4 sm:top-6 md:top-0 left-4 sm:left-8 md:left-10 bg-[#DFFFFF] rounded-2xl sm:rounded-3xl shadow-lg px-3 sm:px-5 md:px-6 py-2 sm:py-3 font-bold text-center">
          Business &amp; Management
        </div>

        <div className="absolute top-12 sm:top-14 md:top-15 left-1/2 transform -translate-x-1/2 bg-[#DFFFFF] rounded-2xl sm:rounded-3xl shadow-lg px-3 sm:px-5 md:px-6 py-2 sm:py-3 font-bold text-center">
          Information Technology &amp; AI
        </div>

        <div className="absolute top-6 sm:top-8 md:top-5 right-8 sm:right-16 md:right-32 bg-[#DFFFFF] rounded-2xl sm:rounded-3xl shadow-lg px-3 sm:px-5 md:px-6 py-2 sm:py-3 font-bold text-center">
          Engineering
        </div>

        <div className="absolute bottom-4 sm:bottom-3 md:bottom-2 left-8 sm:left-12 md:left-20 bg-[#DFFFFF] rounded-2xl sm:rounded-3xl shadow-lg px-2 sm:px-3 md:px-4 py-2 font-bold max-w-[85%] sm:max-w-md text-center">
          Health Sciences (Nursing, Medicine, Public Health)
        </div>

        <div className="absolute top-20 sm:top-28 md:top-35 left-[50%] sm:left-[53%] md:left-[55%] bg-[#DFFFFF] rounded-2xl sm:rounded-3xl shadow-lg px-3 sm:px-5 md:px-6 py-2 sm:py-3 font-bold text-center">
          Education
        </div>

        <div className="absolute bottom-6 sm:bottom-3 md:bottom-0 right-8 sm:right-16 md:right-28 bg-[#DFFFFF] rounded-2xl sm:rounded-3xl shadow-lg px-3 sm:px-5 md:px-6 py-2 sm:py-3 font-bold text-center">
          Hospitality &amp; Tourism
        </div>
      </div>
    </section>
  );
}
