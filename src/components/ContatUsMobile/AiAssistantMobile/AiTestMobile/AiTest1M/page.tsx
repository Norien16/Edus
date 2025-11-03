import Mfooter from "@/components/HomePageMobile/Mfooter/page";
import Image from "next/image";
import React from "react";
import AiTest2M from "../AiTest2M/page";

export default function AiTest1M () {
  return (
    <>
    <div className="fixed">
    <div
      className="flex items-center justify-center bg-[#DFFFFF] px-6 py-80"
    >
      <div className="container mx-auto flex flex-col items-center justify-between">
        {/* Left Text Section */}
        <div className=" text-center">
          <h1
            className="text-2xl -mt-70 font-bold text-[#545454] mb-2"
          >
            University/Course<br/> Shortlisting
          </h1>
          <div
            className="w-70 h-[2px] mb-2 mx-auto md:mx-0 md:ml-[300px]"
            style={{
              background:
                "linear-gradient(to right, #DFFFFF, #37D7D9, #37D7D9, #DFFFFF)",
            }}
          ></div>

          <p className="text-[#666666] text-md leading-normal mt-10 whitespace-nowrap">
            Find the best universities and courses suited to your<br/> goals with our intelligent
            guidance system
          </p>
        </div>
      </div>
    </div>
 </div>
 {/* Right Image Section */}
        <div className="mt-[240px] flex justify-center relative z-50">
          <Image
            src="/images/aitest1Img.png"
            alt="Career Pathway Illustration"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        <button type="button" className=" fixed ml-38 mt-5 bg-[#37D7D9] rounded-full shadow-lg shadow-gray-300 px-6 py-2 text-[15px] text-white font-bold" >
            Start Exploring
        </button>

        <div style={{ marginTop:380, position: "relative", zIndex: 50,  borderTopLeftRadius: "50px",
    borderTopRightRadius: "50px",
    boxShadow: "0 -4px 21px rgba(0, 0, 0, 0.1)", }}>
                <AiTest2M />
                <Mfooter />
              
            </div>
        </>
  );
}