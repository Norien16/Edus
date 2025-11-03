"use client";
import React from "react";
import Mfooter from "@/components/HomePageMobile/Mfooter/page";
import Tu12M from "../Tu12M/page";
import Tu13M from "../Tu13M/page";
import Tu15M from "../Tu15M/page";
import TU16M from "../Tu16M/page";
import Tu17M from "../Tu17M/page";
import Tu18M from "../Tu18M/page";
import Tu14M from "../Tu14M/page";

export default function Tu1M() {
  return (
    <>
    <section
      id="below-header"
      className="fixed flex flex-col bg-[#DFFFFF] items-center justify-center -top-[20px] px-4 py-45 overflow-hidden"
    >
      {/* ===== content ===== */}
      <div className="text-center max-w-6xl">
        <h1
          className="text-3xl  font-bold text-[#545454] leading-snug"
          style={{ fontFamily: "Space Grotesk" }}
        >
          Macquarie University
        </h1>
        <p className="text-md text-[#545454] mt-1">
            Sydney, New South Wales,<span className="font-bold text-sm text-[#000000]">Australia</span>
        </p>

        <p
          className="text-[#6F6F6F] pt-6 sm:pt-8 text-base sm:text-lg leading-relaxed text-center"
          style={{ fontFamily: "DM Sans" }}
        >
          <span className="block text-base pt-14 px-10">
            Established in 1964, Macquarie University is located in Sydney, Australia, with 45,000+ students across 5 faculties. Ranked in the Top 1% worldwide, it is known for world-class teaching, research, and strong industry connections.
          </span>
        </p>

        {/* ===== static button ===== */}
        <div className="pt-25">
          <div className="flex gap-4 items-center justify-center">
            <button className="px-5 py-2 rounded-full bg-[#37D7D9] text-white text-md font-bold shadow-lg">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>

     <div style={{ marginTop:620, position: "relative", zIndex: 50,  borderTopLeftRadius: "50px",
    borderTopRightRadius: "50px",
    boxShadow: "0 -4px 21px rgba(0, 0, 0, 0.1)", }}>
                <Tu12M />
                <Tu13M />
                <Tu14M />
                <Tu15M />
                <TU16M />
                <Tu17M />
                <Tu18M />
                <Mfooter />
              </div>
  </>
  );
}
