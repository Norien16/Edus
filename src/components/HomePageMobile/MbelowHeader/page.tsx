"use client";
import React from "react";
import Mbar from "../Mbar/page";
import MedduApp from "../MedduApp/page";
import MflyImage from "../MflyImage/page";
import Mcard from "../Mcard/page";
import MmultipleImg1 from "../MmultipleImg1/page";



export default function MbelowHeader() {
  return (
    <>
    <div
      id="below-header"
      className="bg-[#DFFFFF] fixed items-center justify-center px-10 py-25 pt-10"
    >
      {/* Content */}
      <div className="text-center z-20">
        <h1
          className="text-2xl font-bold text-gray-700 leading-snug"
          style={{ fontFamily: "Space Grotesk" }}
        >
          AI-Powered{" "}
          <span className="underline decoration-[#37D7D9] underline-offset-4">
            career
          </span>{" "}
          Launchpad Built For
           Students Who Dream Big
        </h1>

        <p
          className="text-[#666666] pt-8 text-sm whitespace-normal text-center"
          style={{ fontFamily: "DM Sans" }}
        >
          Edulinks AI helps you discover your ideal career, shortlist
          universities & courses, and calculate visa success
          <br /> all in one smart, personalized journey.
        </p>

        {/* Buttons */}
        <div className="pt-12">
          <div className="flex gap-4">
            <button className="px-8 py-2 rounded-full bg-[#37D7D9] text-white text-sm shadow-md w-full whitespace-nowrap">
              Book Online Counselling
            </button>
            <button className=" py-2 rounded-full bg-white border border-[#37D7D9] text-[#37D7D9] text-sm shadow-md w-full">
              Try Now
            </button>
          </div>
        </div>
      </div>
    </div>

    <div style={{ marginTop:380, position: "relative", zIndex: 50,  borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    boxShadow: "0 -4px 21px rgba(0, 0, 0, 0.1)", }}>
                <Mbar />
                <MedduApp />
                <MflyImage />
                <Mcard />
                <MmultipleImg1 />
              
            </div>
    </>
  );
}
