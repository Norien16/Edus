"use client";

import React from "react";
import Image from "next/image";

export default function Tu17M() {
  return (
    <main className="py-20 -mt-15 bg-white">
      <div className="space-y-8">
        {/* Header + Undergraduate Image in one line */}
        <div className="grid grid-cols-1 items-center">
          {/* Left side: Text */}
          <h1 className="flex justify-center mb-10 text-3xl font-bold text-[#545454] leading-tight">
            Admission Requirements
          </h1>

          {/* Right side: Undergraduate Image */}
          <div className="flex justify-end">
            <Image
              src="/images/tu17m1Img.png" // ← use direct public path
              alt="Undergraduate Programs Requirements"
              width={750}
              height={500}
              className="w-full max-w-[400px] h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Postgraduate Image */}
        <div className="flex justify-start">
          <Image
            src="/images/tu17m2Img.png" // ← direct path again
            alt="Postgraduate Programs Requirements"
            width={850}
            height={500}
            className="w-full max-w-[400px] h-auto object-contain"
          />
        </div>
      </div>
    </main>
  );
}
