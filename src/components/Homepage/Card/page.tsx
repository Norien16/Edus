"use client";
import React, { useState } from "react";
import { FaUniversity, FaBriefcase, FaBook } from "react-icons/fa";

export default function Card() {
  const [hovered, setHovered] = useState<number | null>(null);

  const getCardScale = (i: number) => (hovered === i ? "scale(1.15)" : "scale(1)");

  const getShift = (i: number) => {
    if (hovered === 0 && i === 1) return "translateX(30px)";
    if (hovered === 0 && i === 2) return "translateX(60px)";

    if (hovered === 1 && i === 0) return "translateX(-30px)";
    if (hovered === 1 && i === 2) return "translateX(30px)";

    if (hovered === 2 && i === 0) return "translateX(-60px)";
    if (hovered === 2 && i === 1) return "translateX(-30px)";

    return "translateX(0)";
  };

  const dividerShift = (i: number) => {
    if (hovered === 0) {
      return i === 0 ? "translateX(30px)" : "translateX(60px)";
    }
    if (hovered === 1) {
      return i === 0 ? "translateX(-15px)" : "translateX(15px)";
    }
    if (hovered === 2) {
      return i === 0 ? "translateX(-60px)" : "translateX(-30px)";
    }
    return "translateX(0)";
  };

  return (
    <div className="flex justify-center items-center overflow-visible relative z-50 pb-20 sm:pb-32 lg:pb-40">
      <div className="bg-[#FFFFFF] border border-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] rounded-3xl px-6 sm:px-8 pt-8 sm:pt-10 w-full max-w-5xl pb-8 h-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center relative gap-6 sm:gap-0">
          {/* Section 1 */}
          <div
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(null)}
            style={{ transform: getShift(0), transition: "all 0.3s ease" }}
            className="flex-1 flex justify-center"
          >
            <div
              style={{ transform: getCardScale(0), transition: "all 0.3s ease" }}
              className="flex items-center gap-3"
            >
              <FaUniversity className="text-[#37D7D9] text-4xl sm:text-5xl md:text-6xl" />
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-black">
                  200 <span className="text-black">+</span>
                </h2>
                <p className="text-black text-xs sm:text-sm md:text-base">
                  Universities
                </p>
              </div>
            </div>
          </div>

          {/* Divider 1 */}
          <div
            style={{ transform: dividerShift(0), transition: "all 0.3s ease" }}
            className="hidden sm:block absolute left-1/3 top-1/2 -translate-y-1/2 w-px h-12 sm:h-16 md:h-20 bg-gray-800"
          />

          {/* Section 2 */}
          <div
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
            style={{ transform: getShift(1), transition: "all 0.3s ease" }}
            className="flex-1 flex justify-center"
          >
            <div
              style={{ transform: getCardScale(1), transition: "all 0.3s ease" }}
              className="flex items-center gap-3"
            >
              <FaBriefcase className="text-[#37D7D9] text-4xl sm:text-5xl md:text-6xl" />
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-black">
                  500 <span className="text-black">+</span>
                </h2>
                <p className="text-black text-xs sm:text-sm md:text-base">
                  Careers
                </p>
              </div>
            </div>
          </div>

          {/* Divider 2 */}
          <div
            style={{ transform: dividerShift(1), transition: "all 0.3s ease" }}
            className="hidden sm:block absolute left-2/3 top-1/2 -translate-y-1/2 w-px h-12 sm:h-16 md:h-20 bg-gray-800"
          />

          {/* Section 3 */}
          <div
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(null)}
            style={{ transform: getShift(2), transition: "all 0.3s ease" }}
            className="flex-1 flex justify-center"
          >
            <div
              style={{ transform: getCardScale(2), transition: "all 0.3s ease" }}
              className="flex items-center gap-3"
            >
              <FaBook className="text-[#37D7D9] text-4xl sm:text-5xl md:text-6xl" />
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-black">
                  1000 <span className="text-black">+</span>
                </h2>
                <p className="text-black text-xs sm:text-sm md:text-base">
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
