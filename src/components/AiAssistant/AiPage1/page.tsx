"use client";

import React from "react";
import Link from "next/link";

const AiPage1: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center -translate-y-15 bg-[#DFFFFF] text-center px-4 py-55">
      
      {/* Heading */}
      <h1 className="text-[40px] font-bold leading-relaxed text-[#545454] mb-2">
        Welcome to Edulinks
      </h1>

      {/* Subtitle */}
      <p className="text-[#666666] text-xl max-w-3xl">
        Choose from our AI-powered tools to accelerate your educational journey
      </p>

      {/* Button */}
      <Link
        href="#"
        className="mt-5 px-6 py-1.5 text-xs text-[#545454] font-semibold rounded-full border-1 border-[#37D7D9] shadow-xl shadow-gray-300 bg-[#E4FFFF] transition"
      >
        Get Started
      </Link>

    </section>
  );
};

export default AiPage1;
