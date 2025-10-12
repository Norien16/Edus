// components/SupportSection.tsx
"use client";
import Image from "next/image";
import React from "react";

const supportItems: string[] = [
  "Free Counseling & Career Guidance",
  "University Shortlisting & Applications",
  "Visa Assistance (F-1 visa guidance)",
  "Scholarship & Financial Aid Guidance",
  "Pre-Departure & Settlement Support",
];

export default function Page5_6() {
  return (
    <section className="relative w-full flex flex-col items-center mt-20 md:mt-40 py-12 md:py-16 px-4 sm:px-6 md:px-20">
      {/* === Background Image === */}
      <div className="absolute inset-0 z-0 w-auto h-[300px] sm:h-[400px] md:h-[500px]">
        <Image
          src="/images/page6lineImg.png"
          alt="Deep2 Background"
          fill
          className="object-contain translate-x-20 sm:translate-x-60 md:translate-x-151.5 translate-y-0 sm:-translate-y-10 md:-translate-y-40 opacity-100"
          priority
        />
      </div>

      {/* Title */}
      <h2 className="relative z-20 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#545454] text-center mb-12 md:mb-20 px-4">
        How Edulinks Supports You
      </h2>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center w-full max-w-6xl">
        {/* Left Side - Bullet Points */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10 px-2 sm:px-6 md:px-0">
          {supportItems.map((item, index) => (
            <div key={index} className="flex items-start gap-4 sm:gap-6 md:gap-11">
              <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#37D7D9] mt-2"></span>
              <p
                className="text-base sm:text-lg md:text-[22px] font-bold text-[#333] relative z-20"
                style={{ fontFamily: "DM Sans" }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <Image
            src="/images/page6Img.png"
            alt="Support Illustration"
            width={350}
            height={350}
            className="relative z-20 object-contain sm:w-[300px] sm:h-[220px] md:w-[350px] md:h-[350px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
