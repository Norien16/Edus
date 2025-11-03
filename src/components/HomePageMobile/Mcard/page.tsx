"use client";
import React from "react";
import { FaUniversity, FaBriefcase, FaBook } from "react-icons/fa";

export default function Mcard() {
  return (
    <div className="flex justify-center bg-white items-center overflow-visible pb-20 -mt-25">
      <div className="bg-[#FFFFFF] border border-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] rounded-2xl px-10 pt-8 pb-8 h-20">
        <div className="flex relative gap-5 -translate-y-3">
          {/* Section 1 */}
          <div className=" flex -translate-x-7">
            <div className="flex items-center gap-3">
              <FaUniversity className="text-[#37D7D9] text-2xl" />
              <div>
                <h2 className="text-md font-bold text-black">
                  200 <span className="text-black">+</span>
                </h2>
                <p className="text-black text-xs">
                  Universities
                </p>
              </div>
            </div>
          </div>

          {/* Divider 1 */}
          <div className="block absolute left-25  top-1/2 -translate-y-1/2 w-px h-12 bg-gray-600" />

          {/* Section 2 */}
          <div className="flex justify-center">
            <div className="flex items-center gap-3">
              <FaBriefcase className="text-[#37D7D9] text-2xl" />
              <div>
                <h2 className="text-md font-bold text-black">
                  500 <span className="text-black">+</span>
                </h2>
                <p className="text-black text-xs">
                  Careers
                </p>
              </div>
            </div>
          </div>

          {/* Divider 2 */}
          <div className="block absolute left-56 top-1/2 -translate-y-1/2 w-px h-12 bg-gray-800" />

          {/* Section 3 */}
          <div className=" flex translate-x-5">
            <div className="flex items-center gap-3">
              <FaBook className="text-[#37D7D9] text-2xl" />
              <div>
                <h2 className="text-md font-bold text-black">
                  1000 <span className="text-black">+</span>
                </h2>
                <p className="text-black text-xs">
                  Courses
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
