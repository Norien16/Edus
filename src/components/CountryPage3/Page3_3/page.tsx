"use client";
import Image from "next/image";
import React from "react";

export default function Page3_3() {
  return (
    <section className="w-full relative z-20 flex flex-col items-center py-16 px-6 group">

      {/* === Background Image Layer 2 (deepest) === */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/page3lineImg.png"
                alt="Deep Background"
                fill
                className="object-contain md:translate-x-151.5 translate-x-126 -translate-y-0 opacity-100"
                priority
              />
            </div>
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-15 text-center">
        Cost of Studying in Canada
      </h2>

      {/* Scholarships Card */}
      <div className="relative bg-white shadow-md rounded-xl px-50 py-6 mb-10">
        <span className="absolute left-4 top-1/2 transform -translate-y-8 text-[#37D7D9] text-2xl">★</span>
        <p className="text-center text-2xl font-semibold text-[#000000]">Scholarships</p>
        <p className="text-center text-[#000000] translate-y-4 text-lg">
          Offered by Canada Government & Universities  
        </p>
      </div>

      {/* Tuition Fees */}
      <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl mb-8">
        {/* Horizontal Fill effect */}
        <div className="absolute inset-0 bg-[#37D7D9]/40 scale-x-0 origin-left group-hover:scale-x-30 transition-transform duration-1200 ease-in-out rounded-br-2xl rounded-tr-2xl"></div>

        {/* Content */}
        <div className="relative border-4 border-[#37D7D9] rounded-3xl px-6 py-7 flex justify-between items-center">
          <p className="font-bold text-2xl text-[#000000]">Tuition Fees</p>
          <p className="text-[#000000] text-lg text-right">
            CAD $15,000 – $40,000/year (depending on course & level)
          </p>
        </div>
      </div>

      {/* Living Costs */}
      <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl mb-8">
        <div className="absolute inset-0 bg-[#37D7D9]/40 scale-x-0 origin-left group-hover:scale-x-70 transition-transform duration-1200 ease-in-out rounded-br-2xl rounded-tr-2xl"></div>
        <div className="relative border-4 border-[#37D7D9] rounded-3xl px-6 py-7 flex justify-between items-center">
          <p className="font-bold text-2xl text-[#000000]">Living Costs</p>
          <p className="text-[#000000] text-lg text-right">
            CAD $1,000 – $1,800/month
          </p>
        </div>
      </div>

      {/* Visa Fees */}
      <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl mb-10">
        <div className="absolute inset-0 bg-[#37D7D9]/40 scale-x-0 origin-left group-hover:scale-x-40 transition-transform duration-1200 ease-in-out rounded-br-2xl rounded-tr-2xl"></div>
        <div className="relative border-4 border-[#37D7D9] rounded-3xl px-6 py-7 flex justify-between items-center">
          <p className="font-bold text-2xl text-[#000000]">Visa Fees</p>
          <p className="text-[#000000] text-lg text-right"> CAD $150</p>
        </div>
      </div>

      {/* Total */}
      <div className="text-center">
        <p className="text-[#000000] font-semibold text-3xl">Total</p>
        <p className="text-lg md:text-3xl font-bold text-[#000000] bg-white shadow-md shadow-[#CFF5F6] rounded-2xl px-25 py-6">
          CAD $28,000 – $62,000
        </p>
      </div>
    </section>
  );
}
