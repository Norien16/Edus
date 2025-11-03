"use client";
import Image from "next/image";
import React from "react";

export default function Slide3Page3() {
  return (
    <section className="w-full py-10 md:py-16 lg:py-20 mt-6 md:mt-10">
      <div className="max-w-6xl mx-auto px-6 md:px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10">
        {/* Left Content */}
        <div className="px-2 md:px-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#545454] mb-4 md:mb-6">
            Start Connecting Today
          </h2>
          <p className="text-[#6F6F6F] text-base md:text-lg mb-6 md:mb-10">
            Join the Edulinks Community Hub and become part of a global network of students, alumni, and mentors helping each other achieve their study-abroad dreams.
          </p>
          <button className="bg-[#37D7D9] text-white px-8 md:px-10 py-3 md:py-4 text-lg md:text-2xl rounded-full font-semibold shadow hover:opacity-95 transition">
            Join Community
          </button>
        </div>

        {/* Right Content (Static Image Only) */}
        <div
          className="
            relative
            w-full
            max-w-[520px] sm:max-w-[640px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px]
            mx-auto
            md:mx-0
            left-[5%] sm:left-[10%] md:left-[12%] lg:left-[17%] xl:left-[30%]
          "
        >
          <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[500px]">
            <Image
              src="/images/slide3page3Img.png"
              alt="Laptop Illustration"
              fill
              className="object-contain relative z-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
