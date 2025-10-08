"use client";
import React from "react";

export default function CommunitySection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-6 py-16">
      {/* Left side - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/images/commImg.png" // 👉 replace with your image URL
          alt="Students"
          className="w-full max-w-md md:max-w-lg h-auto object-contain"
        />
      </div>

      {/* Right side - Text */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12 text-center md:text-left">
        <h4
          className="text-[#37D7D9] font-semibold mb-2"
          style={{ fontFamily: "Space Grotesk" }}
        >
          Edulinks Global Student Community
        </h4>
        <h2
          className="text-3xl md:text-4xl font-semibold text-[#545454] mb-6 leading-snug"
          style={{ fontFamily: "Space Grotesk" }}
        >
          To Connect. To Support. To <br /> Grow Together.
        </h2>
        <p
          className="text-gray-500 mb-8 leading-relaxed"
          style={{ fontFamily: "DM Sans" }}
        >
          A vibrant, inclusive space built for students across the world to ask
          questions, share real-life experiences, solve problems together, and
          uplift one another throughout their study abroad journey. Whether
          you're choosing a country, preparing for language tests, applying for
          visas, or simply adjusting to a new culture, this community is here to
          support you every step of the way. Gain insights from those who’ve
          been there, stay updated with essential information, and never feel
          alone in your journey because we grow stronger when we learn together.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <button className="bg-[#37D7D9] text-white px-8 py-2 rounded-full font-medium hover:bg-[#00B7C1] hover:shadow-md hover:shadow-gray-400 transition-shadow duration-300 ease-in-out">
            Join Community
          </button>
          <button className="border border-[#37D7D9] text-[#37D7D9] px-8 py-2 rounded-full font-medium hover:bg-teal-50 hover:shadow-md hover:shadow-gray-400 transition-shadow duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
