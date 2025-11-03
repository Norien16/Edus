"use client";

import React from "react";
import Link from "next/link";
import Mfooter from "@/components/HomePageMobile/Mfooter/page";
import AiMpage2 from "../AiMpage2/page";

const AiMpage1: React.FC = () => {
  return (
    <>
    <div className="fixed">
    <section className="flex flex-col items-center justify-center -translate-y-30 bg-[#DFFFFF] text-center px-4 py-55">
      
      {/* Heading */}
      <h1 className="text-[25px] font-bold leading-relaxed text-[#545454] mb-5">
        Welcome to Edulinks
      </h1>

      {/* Subtitle */}
      <p className="text-[#666666] text-md max-w-3xl">
        Choose from our AI-powered tools to accelerate your educational journey
      </p>

      {/* Button */}
      <Link
  href="#"
  className="mt-40 px-6 py-2.5 text-sm text-white font-bold rounded-full shadow-xl shadow-gray-300 bg-[#37D7D9] flex items-center justify-center gap-4"
>
  <span className="w-2 h-2 bg-white rounded-full inline-block"></span>
  Get Started
</Link>

    </section>
    </div>
    <div style={{ marginTop:620, position: "relative", zIndex: 50,  borderTopLeftRadius: "50px",
    borderTopRightRadius: "50px",
    boxShadow: "0 -4px 21px rgba(0, 0, 0, 0.1)", }}>
                <AiMpage2 />
                <Mfooter />
            </div>
  </>
  );
};

export default AiMpage1;
