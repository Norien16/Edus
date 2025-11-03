"use client";
import React from "react";
import Mfooter from "@/components/HomePageMobile/Mfooter/page";
import Image from "next/image";
import Page1M from "../Page1M/page";
import Page2M from "../Page2M/page";
import Page15M from "../Page15M/page";
import Page4M from "../Page4M/page";
import Page5M from "../Page5M/page";
import Page6M from "../Page6M/page";
import Page7M from "../Page7M/page";

export default function Page0M () {
  return (
    <>
    <section
      id="below-header"
      className="fixed flex flex-col bg-[#DFFFFF] items-center justify-center px-8 py-55 overflow-hidden"
    >
      {/* ===== content ===== */}
      <div className="text-center -mt-30 relative z-20 max-w-6xl">
        <h1
          className="text-2xl font-bold text-[#545454] leading-snug"
          style={{ fontFamily: "Space Grotesk" }}
        >
          Study in Australia
        </h1>

        <p
          className="text-[#6F6F6F] pt-8 px-5 text-md leading-relaxed text-center"
          style={{ fontFamily: "DM Sans" }}
        >
          <span className="block text-base sm:text-lg">
            Unlock your future with globally recognized degrees, vibrant student life, and career pathways in one of the world’s most welcoming countries.
          </span>
        </p>
        <Image
              width={600}
              height={400}
              src="/images/kangarooImg.png"
              alt="kangaroo"
              className="w-[200px] absolute -bottom-[150px] -right-[60px]"
               />

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

     <div style={{ marginTop:640, position: "relative", zIndex: 50,  borderTopLeftRadius: "50px",
    borderTopRightRadius: "50px",
    boxShadow: "0 -4px 21px rgba(0, 0, 0, 0.1)", }}>
                <Page1M />
                <Page2M />
                <Page15M />
                <Page4M />
                <Page5M />
                <Page6M />
                <Page7M />
                <Mfooter />
              </div>
  </>
  );
}
