// app/components/Aboutus.tsx
"use client";
import React from "react";
import Image from "next/image";

const Mabout1: React.FC = () => {
  return (
    <div
      className="flex min-h-screen items-center justify-center px-4"
      style={{ fontFamily: "DM Sans" }}
    >
      {/* Parent container */}
      <section className="flex flex-col w-full gap-12 items-center">

        {/* RIGHT SIDE: IMAGE */}
        <div className="w-full flex items-center justify-center">
          <div className="relative w-full max-w-[300px]">
            <Image
              src="/images/about1Img.png"
              alt="Globe"
              width={600}
              height={600}
              className="rounded-2xl w-full h-auto object-contain"
            />
          </div>
        </div>
        
        {/* LEFT SIDE: TEXT */}
        <div className="w-full text-center">
          <h2 className="text-[#545454] text-[30px] font-bold mb-4 leading-relaxed">
            Your Journney, Our Vision
          </h2>
          <p className="mb-6 text-base px-7 text-[#000000] leading-relaxed">
            EduLinks is more than a consultancy—it’s your AI-powered partner in
            building a successful future abroad. With smart career tests,
            university and course recommendations, visa guidance, scholarship
            insights, and English proficiency practice, we make studying overseas
            clear and achievable.
          </p>

          <p className="mb-3 text-base px-7 text-[#000000] leading-relaxed tracking-wide">
            Our mission goes beyond admissions. From your first career assessment
            to preparing with mock PTE/IELTS tests, to connecting you with student
            communities after you land, we walk with you at every step—turning
            aspirations into successful journeys.
          </p>

          {/* CTA Button */}
          <button className="mt-8 rounded-full bg-[#37D7D9] px-4 py-1.5 text-md font-bold text-white shadow-lg shadow-gray-300 mb-5">
            Start Your Journey Today
          </button>
        </div>

      </section>
    </div>
  );
};

export default Mabout1;
