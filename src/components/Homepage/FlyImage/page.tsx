"use client";
import React from "react";

const FlyImage = () => {
  const features = [
    "Uncover Top 3 Career Paths Based on Your Profile",
    "Get University & Course Recommendations Instantly",
    "Check Your Visa Chances Across Multiple Countries",
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-screen-xl mx-auto px-6 sm:px-10 md:px-16 py-10 md:py-16 bg-white mt-10 md:mt-20">
      {/* Image Section */}
      <div className="flex justify-center md:justify-start mb-6 md:mb-0 w-full md:w-1/2">
        <img
          src="/images/flyImg4.jpg"
          alt="Students"
          className="w-full max-w-sm sm:max-w-md md:max-w-full h-auto object-contain rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="md:ml-12 text-center md:text-left mt-6 md:mt-8 w-full md:w-1/2 tracking-wider">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-2 tracking-wider"
          style={{ fontFamily: "Space Grotesk" }}
        >
          How Edulinks AI Assistant
        </h2>
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3 text-black mb-6 tracking-wider"
          style={{ fontFamily: "Space Grotesk" }}
        >
          Can Help Students
        </h2>
        <p
          className="text-[#666666] mb-6 text-sm sm:text-base md:text-lg leading-relaxed text-justify"
          style={{ fontFamily: "DM Sans" }}
        >
          Discover the right career path, find your ideal university, and assess
          your visa chances — all guided by Edulinks’ smart AI assistant.
        </p>

        <ul
          className="text-[#666666] space-y-4 mb-6 text-sm sm:text-base md:text-lg"
          style={{ fontFamily: "DM Sans" }}
        >
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <img
                src="/images/tickImg.png"
                alt="tick"
                className="w-4 h-4 sm:w-5 sm:h-5 mr-3"
              />
              {feature}
            </li>
          ))}
        </ul>

        <button className="bg-[#37D7D9] text-white hover:shadow-md px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full hover:bg-[#00B7C1] hover:shadow-gray-400 transition-shadow duration-300 ease-in-out text-sm sm:text-base md:text-lg">
          Learn More About Us
        </button>
      </div>
    </div>
  );
};

export default FlyImage;
