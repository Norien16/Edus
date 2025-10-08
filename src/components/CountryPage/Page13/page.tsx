"use client";

import Image from "next/image";
import React from "react";

export default function Page13() {
  return (
    <section className="py-16 px-6 md:px-16 bg-[#F8F8F8]">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Featured{" "}
        <span className="italic text-amber-600">Chemical Products</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ===================== FIRST CARD ===================== */}
        <div
          className="relative left-20 p-6 rounded-2xl flex flex-col md:flex-row items-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/page13Back1Img.png)",
            backgroundSize: "contain",
            width: "700px", // increase the container width
            height: "500px", // increase the container height
            backgroundPosition: "center",
          }}
        >
          {/* Overlay Image */}
          <div className="absolute top-12 left-4 w-16 h-16 md:w-20 md:h-20">
            <Image
              src="/images/badgeImg.png"
              alt="Overlay Badge"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="flex-1 mt-15">
            <p className="text-xs">Current Bid at:</p>
            <h3 className="text-xl font-bold mt-1">$3,952</h3>
            <h4 className="text-3xl font-bold mt-2">
              Textile Industrial Chemical{" "}
              <span className="italic">Collectors</span>
              <p className="text-xs underline mt-4">Auction Will End In: </p>
            </h4>

            {/* Countdown */}
            <div className="flex gap-4 mt-4">
              {["Days", "Hours", "Minutes", "Seconds"].map((time) => (
                <div key={time}>
                  <div className="bg-white px-3 py-2 rounded-md">00</div>
                  <p className="text-xs mt-1">{time}</p>
                </div>
              ))}
            </div>

            {/* Bid Button */}
            <button className="mt-6 px-20 py-3 rounded-lg bg-gradient-to-r from-[#D3AF37] to-[#7B3600] text-white font-semibold">
              Bid Now
            </button>
          </div>

          {/* Product Image */}
          <div className="flex-1 mt-6 md:mt-0 md:ml-6">
            <Image
              src="/images/page13Img1.png"
              alt="Textile Industrial Chemical Collectors"
              width={350} // change size individually
              height={220} // change size individually
              className="object-contain"
            />
          </div>
        </div>

        {/* ===================== SECOND CARD ===================== */}
        <div
          className="relative p-15 left-40 rounded-2xl flex flex-col items-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/page13Back2Img.png)",
            backgroundSize: "contain",
            width: "350px", // increase the container width
            height: "500px", // increase the container height
            backgroundPosition: "center",
          }}
        >
          {/* Product Info */}
          <div className="w-full text-center">
            <h4 className="text-2xl font-extrabold mt-2">
              Textile Industrial Chemical{" "}
              <span className="italic">Collectors</span>
            </h4>
            <p className="text-xs mt-4">Current Bid at:</p>
            <h3 className="text-xl font-bold mt-1">$3,952</h3>

            {/* Countdown */}
            <div className="flex gap-4 mt-4 justify-center">
              {["Days", "Hours", "Minutes", "Seconds"].map((time) => (
                <div key={time}>
                  <div className="bg-white px-3 py-2 rounded-md">00</div>
                  <p className="text-xs mt-1">{time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Product Image */}
          <div className="w-full mt-6 text-center">
            <Image
              src="/images/page13Img2.png"
              alt="Textile Industrial Chemical Collectors"
              width={300} // change size individually
              height={200} // change size individually
              className="object-contain mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        <span className="w-3 h-3 bg-amber-600 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
      </div>
    </section>
  );
}
