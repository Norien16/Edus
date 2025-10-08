"use client";
import React from "react";

export default function MwhyChoseUs() {
  return (
    <section>
      {/* TEXT BLOCK */}
      <div className="bg-white text-center px-4 py-15">
        <h2
          className="bg-white text-2xl font-semibold mb-4 text-[#545454]"
          style={{ fontFamily: "Space Grotesk" }}
        >
          Why Choose Us?
        </h2>
        <p
          className="bg-white text-md max-w-7xl  mx-auto text-[#6F6F6F]"
          style={{ fontFamily: "DM Sans" }}
        >
          EduLinks has built a trusted legacy in guiding students toward their
          international education goals.
          From expert counseling to AI-driven tools and language test
          preparation, we make your journey
          abroad simple, smooth, and successful.
        </p>
      </div>

      {/* BACKGROUND IMAGE SECTION */}
      <div className="bg-white relative w-full min-h-[100vh] -mt-10 items-center justify-center px-4">
        {/* Gradient Background Image */}
        <div className="flex justify-center">
          <img
            src="/images/gradImg.png"
            alt="Background"
            className="w-[1200px] h-auto object-contain opacity-100"
          />
        </div>
      </div>
    </section>
  );
}
