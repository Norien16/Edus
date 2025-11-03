"use client";

import React from "react";
import Image from "next/image";

export default function TU107() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="space-y-16">
        {/* Header + Undergraduate Image */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] items-center">
          {/* Left side: Text */}
          <h1 className="flex justify-center text-4xl md:text-6xl font-bold text-[#545454] leading-tight ml-16">
            Admission <br /> Requirements
          </h1>

          {/* Right side: Undergraduate Image */}
          <div className="flex justify-end">
            <Image
              src="/images/tu107Img1.png"
              alt="Undergraduate Programs Requirements"
              width={750}
              height={500}
              className="w-full max-w-[750px] h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Postgraduate Image */}
        <div className="flex justify-start">
          <Image
            src="/images/tu107Img2.png"
            alt="Postgraduate Programs Requirements"
            width={850}
            height={500}
            className="w-full max-w-[850px] h-auto object-contain"
          />
        </div>
      </div>
    </main>
  );
}
