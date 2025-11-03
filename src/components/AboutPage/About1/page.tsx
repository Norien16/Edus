// app/components/Aboutus.tsx
"use client";
import React from "react";
import Image from "next/image";

const About1: React.FC = () => {
  return (
    <div
      className="flex min-h-screen items-center justify-center px-4 sm:px-6 md:px-10"
      style={{ fontFamily: "DM Sans" }}
    >
      {/* Parent container */}
      <section className="flex flex-col md:flex-row w-full md:max-w-[1100px] gap-12 items-center md:ml-10">
        
        {/* LEFT SIDE: TEXT */}
        <div className="w-full md:w-[70%] text-center md:text-left">
          <h2 className="text-[#000000] text-[32px] sm:text-[38px] md:text-[44px] font-bold mb-4 leading-relaxed">
            Your Journney, Our Vision
          </h2>
          <p className="mb-6 text-base sm:text-lg text-gray-700 leading-relaxed tracking-wide">
            EduLinks is more than a consultancy—it’s your AI-powered partner in
            building a successful future abroad. With smart career tests,
            university and course recommendations, visa guidance, scholarship
            insights, and English proficiency practice, we make studying overseas
            clear and achievable.
          </p>

          <p className="mb-3 text-base sm:text-lg text-gray-700 leading-relaxed tracking-wide">
            Our mission goes beyond admissions. From your first career assessment
            to preparing with mock PTE/IELTS tests, to connecting you with student
            communities after you land, we walk with you at every step—turning
            aspirations into successful journeys.
          </p>

          {/* CTA Button */}
          <button className="mt-8 rounded-full bg-[#37D7D9] px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl font-bold text-white shadow-lg hover:bg-teal-500 transition">
            Start Your Journey Today
          </button>
        </div>

        {/* RIGHT SIDE: IMAGE */}
        <div className="w-full md:w-[55%] flex justify-center md:justify-end">
          <div className="relative w-full max-w-[600px]">
            <Image
              src="/images/about1Img.png"
              alt="Globe"
              width={600}
              height={600}
              className="rounded-2xl w-full h-auto object-contain"
            />
          </div>
        </div>

      </section>
    </div>
  );
};

export default About1;
