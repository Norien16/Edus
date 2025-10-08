"use client";
import React from "react";

const MmultipleImg1 = () => {
  return (
    <div className="bg-white w-full text-center">
      {/* Heading */}
      <h2 className="text-2xl mb-4" style={{ fontFamily: "Space Grotesk" }}>
        Unlock <span className="font-semibold">Global Opportunities</span> With
        Edulinks AI
      </h2>

      <p
        className="text-base px-4 text-black mb-4"
        style={{ fontFamily: "DM Sans" }}
      >
        Explore top universities across multiple countries powered by Edulinks
        AI Assistant!
      </p>

      <p
        className="max-w-3xl px-5 mx-auto text-md text-gray-500"
        style={{ fontFamily: "DM Sans" }}
      >
        Let our AI guide you to the best-fit countries, universities, and
        courses from 800+ global institutions across 33 countries. Whether it's
        the US, Canada, Australia, or beyond — your journey starts with
        data-backed decisions.
      </p>

      {/* Static Image Grid */}
      <div className="w-full flex items-center justify-center bg-[#DFFFFF] bg-gradient-to-b from-[#FFFFFF] via-[#DFFFFF] to-[#FFFFFF] py-12">
        <div className="grid grid-cols-1 gap-14 max-w-6xl w-full px-8">
          {/* Images */}
          <img
            src="/images/ausImg.png"
            alt="Sydney Opera House"
            className="w-full h-auto object-contain shadow-2xl rounded-3xl shadow-gray-300"
          />
          <img
            src="/images/lonImg.png"
            alt="London Bridge"
            className="w-full h-auto object-contain shadow-2xl rounded-3xl shadow-gray-300"
          />
          <img
            src="/images/canImg.png"
            alt="Canada Flag"
            className="w-full h-auto object-contain shadow-2xl rounded-3xl shadow-gray-300"
          />
          <img
            src="/images/gerImg.png"
            alt="Highway"
            className="w-full h-auto object-contain shadow-2xl rounded-3xl shadow-gray-300"
          />
          <img
            src="/images/usaImg.png"
            alt="USA"
            className="w-full h-auto object-contain shadow-2xl rounded-3xl shadow-gray-300"
          />
          <img
            src="/images/newzImg.png"
            alt="Auckland Skyline"
            className="w-full h-auto object-contain shadow-2xl rounded-3xl shadow-gray-300"
          />
        </div>
      </div>

      {/* Button */}
      <div className="mt-10">
        <button className="bg-[#37D7D9] text-md text-white px-2 py-2 rounded-full hover:shadow-md hover:bg-[#00B7C1] hover:shadow-gray-400 transition-shadow duration-300 ease-in-out">
          Explore More Destinations
        </button>
      </div>
    </div>
  );
};

export default MmultipleImg1;
