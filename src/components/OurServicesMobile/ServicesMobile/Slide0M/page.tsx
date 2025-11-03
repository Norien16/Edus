"use client";
import React from "react";
import Mfooter from "@/components/HomePageMobile/Mfooter/page";
import Slide1M from "../Slide1M/page";
import Slide2M from "../Slide2M/page";
import Slide3M from "../SLide3M/page";

export default function Slide0M () {
  return (
    <>
    <section
      id="below-header"
      className="fixed flex flex-col bg-[#DFFFFF] items-center justify-center px-8 md:px-16 py-35 overflow-hidden"
    >
      {/* ===== content ===== */}
      <div className="text-center -mt-10 relative z-20 max-w-6xl">
        <h1
          className="text-2xl font-bold text-[#545454] leading-snug"
          style={{ fontFamily: "Space Grotesk" }}
        >
          AI-Powered Test
        </h1>

        <p
          className="text-[#6F6F6F] pt-8 px-8 text-md leading-relaxed text-center"
          style={{ fontFamily: "DM Sans" }}
        >
          <span className="block text-base sm:text-lg">
            Get personalized recommendations for the best universities and courses based on your profile. Our AI-driven tests analyze your academic background, career goals, and interests to guide your study abroad journey.
          </span>
        </p>

        {/* ===== static button ===== */}
        <div className="pt-30">
          <div className="flex gap-4 items-center justify-center">
            <button className="px-4 py-2 rounded-full font-bold bg-[#37D7D9] text-white text-md shadow-lg shadow-gray-300">
              Start Exploring
            </button>
          </div>
        </div>
      </div>
    </section>

     <div style={{ marginTop:570, position: "relative", zIndex: 50,  borderTopLeftRadius: "50px",
    borderTopRightRadius: "50px",
    boxShadow: "0 -4px 21px rgba(0, 0, 0, 0.1)", }}>
                <Slide1M />
                <Slide2M />
                <Slide3M />
                <Mfooter />
              </div>
  </>
  );
}
