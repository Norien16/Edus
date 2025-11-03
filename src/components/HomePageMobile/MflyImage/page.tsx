"use client";
import React from "react";

const MflyImage = () => {
  const features = [
    "Uncover Top 3 Career Paths Based on Your Profile",
    "Get University & Course Recommendations Instantly",
    "Check Your Visa Chances Across Multiple Countries",
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-screen-xl mx-auto px-10 py-30 bg-white">
      {/* Image Section */}
      <div className="flex justify-center mb-6 w-full">
        <img
          src="/images/flyImg4.jpg"
          alt="Students"
          className="w-full max-w-sm h-auto object-contain rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="text-center mt-6 w-full tracking-wider">
        <h2
          className="text-2xl font-semibold text-[#666666] mb-2 tracking-wider"
          style={{ fontFamily: "Space Grotesk" }}
        >
          How Edulinks AI Assistant
        </h2>
        <h2
          className="text-2xl font-semibold text-[#666666] mb-4 tracking-wider"
          style={{ fontFamily: "Space Grotesk" }}
        >
          Can Help Students
        </h2>
        <p
          className="text-[#666666] mb-8 text-md leading-relaxed text-center justify-center"
          style={{ fontFamily: "DM Sans" }}
        >
          Discover the right career path, find your ideal university, and assess
          your visa chances — all guided by Edulinks’ smart AI assistant.
        </p>

        <ul
          className="text-[#666666] space-y-4 whitespace-nowrap mb-6 text-sm"
          style={{ fontFamily: "DM Sans" }}
        >
          {features.map((feature, index) => (
            <li key={index} className="flex items-center relative -left-6">
              <img
                src="/images/tickImg.png"
                alt="tick"
                className="w-4 h-4 mr-2"
              />
              {feature}
            </li>
          ))}
        </ul>

        {/* <button className="bg-[#37D7D9] text-white hover:shadow-md px-5 py-2.5 rounded-full hover:bg-[#00B7C1] hover:shadow-gray-400 transition-shadow duration-300 ease-in-out text-sm">
          Learn More About Us
        </button> */}
      </div>
    </div>
  );
};

export default MflyImage;
