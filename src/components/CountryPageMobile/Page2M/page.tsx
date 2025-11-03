"use client";
import React from "react";

export default function Page2M () {
  return (
    <section className="relative w-full bg-white py-12 -mt-6 flex flex-col items-center">

      {/* Heading */}
      <h2 className="relative z-20 text-3xl font-bold text-[#545454] mb-10 text-center">
        Popular Courses In<br/> Australia
      </h2>

      {/* Courses Container */}
      <div className="relative z-20 w-full max-w-6xl h-[300px] text-sm">
        {/* Course Boxes */}
        <div className="absolute top-4 left-8 bg-[#DFFFFF] rounded-2xl shadow-lg px-3 py-2 font-bold text-center">
          Business &amp; Management
        </div>

        <div className="absolute top-22 -right-20 transform -translate-x-1/2 bg-[#DFFFFF] rounded-2xl shadow-lg px-3 py-2 font-bold text-center">
          Information Technology &amp; AI
        </div>

        <div className="absolute top-46 left-6 bg-[#DFFFFF] rounded-2xl shadow-lg px-6 py-2 font-bold text-center">
          Engineering
        </div>

        <div className="absolute bottom-20 left-40 bg-[#DFFFFF] rounded-2xl shadow-lg px-2 py-2 font-bold max-w-[85%] text-center">
          Health Sciences (Nursing, Medicine,<br/> Public Health)
        </div>

        <div className="absolute top-25 left-[10%] bg-[#DFFFFF] rounded-2xl shadow-lg px-7 py-2 font-bold text-center">
          Education
        </div>

        <div className="absolute top-6 right-7 bg-[#DFFFFF] rounded-2xl shadow-lg px-3 py-2 font-bold text-center">
          Hospitality &amp; Tourism
        </div>
      </div>
    </section>
  );
}
