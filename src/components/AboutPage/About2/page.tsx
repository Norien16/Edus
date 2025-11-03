// app/components/About.tsx
"use client";
import React from "react";
import Image from "next/image";

const About2: React.FC = () => {
  return (
    <div
      className="flex justify-center items-center min-h-screen px-4 sm:px-6 md:px-10 -mt-22 md:-mt-30"
      style={{ fontFamily: "DM Sans" }}
    >
      {/* Parent section */}
      <section className="flex flex-col md:flex-row w-full md:max-w-[1200px] gap-10 md:gap-20 items-center md:ml-12">
        
        {/* LEFT SIDE: IMAGE */}
        <div className="w-full md:w-[35%]">
          <div className="overflow-hidden">
            <Image
              src="/images/about2Img.png"
              alt="Students walking"
              width={500}
              height={600}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>

        {/* RIGHT SIDE: TEXT */}
        <div className="w-full md:w-[60%] tracking-wider text-center md:text-left">
          <h2 className="text-[32px] sm:text-[38px] md:text-[44px] font-bold text-[#000000] mb-4">
            About Us
          </h2>

          <p className="text-base sm:text-lg md:text-[17px] text-[#000000] mb-6 leading-relaxed">
            The idea for Edulinks came to fruition in 2018. After seeing the
            amount of students who desperately wanted to study overseas but had no
            guidance, we wanted to provide them a platform where they could not
            only apply to universities and get help with visa processes, but
            also find out what career would suit them best, and what courses they
            should study.
          </p>

          <p className="text-base sm:text-lg md:text-[17px] text-[#000000] mb-6 leading-relaxed">
            We worked with multiple psychologists to formulate questions that
            engage with a user to find out what their strengths and weaknesses are,
            what things excite them and what they find boring. By bringing these
            elements together and combining them with AI, we were able to create a
            platform which provides users with end-to-end guidance which helps
            them progress their careers.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About2;
