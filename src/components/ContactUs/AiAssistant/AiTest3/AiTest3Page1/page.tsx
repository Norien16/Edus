import Image from "next/image";
import React from "react";

export default function AiTest3Page1() {
  return (
    <div className="flex items-center justify-center bg-[#DFFFFF] px-6 py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-center md:text-left pl-20 md:pl-28">
          <h1 className="text-4xl md:text-[40px] font-bold text-[#545454] mb-2">
            Career Pathway Test
          </h1>
          <div
            className="w-70 h-[2px] mb-2 mx-auto md:mx-0 md:ml-[120px]"
            style={{
              background:
                "linear-gradient(to right, #DFFFFF, #37D7D9, #37D7D9, #DFFFFF)",
            }}
          ></div>

          <p className="text-[#666666] text-lg leading-normal">
            Discover the top career paths on your interests and strengths
            through our comprehensive assessment.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <Image
            src="/images/aitest3page1Img.png"
            alt="Career Pathway Illustration"
            width={460}
            height={470}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
