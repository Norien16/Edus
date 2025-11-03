// components/MobileSection.tsx
"use client";
import Image from "next/image";
import React from "react";

const ExtraComponent: React.FC = () => {
  return (
    <section className="w-full bg-white mt-10 py-20">
      <div className="max-w-7xl mx-auto px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* LEFT SIDE */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            Your Global Career, Now In Your <br /> Pocket — Edulinks AI On
            Mobile!
          </h2>

          {/* Store Buttons */}
          <div className="flex justify-center lg:justify-start gap-4 mt-6">
            <Image
              src="/images/googleImg.png"
              alt="Google Play"
              width={150}
              height={50}
              className="h-auto w-[120px] md:w-[150px]"
            />
            <Image
              src="/images/appImg.png"
              alt="App Store"
              width={150}
              height={40}
              className="h-auto w-[120px] md:w-[150px]"
            />
          </div>
        </div>

        {/* RIGHT SIDE (Single Phones Image) */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/phonesImg.png" // 👈 combine your two phones into one PNG
            alt="Mobile App Preview"
            width={500}
            height={500}
            className="w-[200px] sm:w-[270px] md:w-[340px] lg:w-[450px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ExtraComponent;
