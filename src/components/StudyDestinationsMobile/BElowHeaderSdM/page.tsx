"use client";
import React from "react";
import Mfooter from "@/components/HomePageMobile/Mfooter/page";
import ExploreDestinationsM from "../ExploreDestinationsM/page";
import WhyStudyAbroadM from "../WhyStudyAbroadM/page";

export default function BelowHeaderSdM () {
  return (
    <>
    <section
      id="below-header"
      className="fixed flex flex-col md:flex-row bg-[#DFFFFF] items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 py-25 overflow-hidden"
    >
      {/* ===== content ===== */}
      <div className="text-center relative z-20 max-w-6xl">
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#545454] leading-snug"
          style={{ fontFamily: "Space Grotesk" }}
        >
          Discover your Study Abroad<br/> Destination
        </h1>

        <p
          className="text-[#6F6F6F] pt-6 sm:pt-8 text-base sm:text-lg leading-relaxed text-center"
          style={{ fontFamily: "DM Sans" }}
        >
          <span className="block text-base sm:text-lg">
            From world-class universities and affordable education options to post-study career opportunities and vibrant student communities, EduLinks helps you choose the country that truly fits your academic goals and future ambitions. With personalized guidance and AI-powered insights, your study-abroad journey starts with the right destination.
          </span>
        </p>

        {/* ===== static button ===== */}
        <div className="pt-10">
          <div className="flex gap-4 items-center justify-center">
            <button className="px-5 py-2.5 rounded-full bg-[#37D7D9] text-white font-bold text-sm shadow-xl">
              Start Exploring
            </button>
          </div>
        </div>
      </div>
    </section>

     <div style={{ marginTop:530, position: "relative", zIndex: 50,  borderTopLeftRadius: "50px",
    borderTopRightRadius: "50px",
    boxShadow: "0 -4px 21px rgba(0, 0, 0, 0.1)", }}>
                <ExploreDestinationsM />
                <WhyStudyAbroadM />
                <Mfooter />
              </div>
  </>
  );
}
