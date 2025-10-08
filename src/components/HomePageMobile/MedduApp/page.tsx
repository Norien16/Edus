"use client";

import Image from "next/image";
import React from "react";

export default function MedduApp() {
  return (
    <section className="relative w-full flex justify-center items-center py-16 px-4 bg-white">
      {/* Background image (the full layout image you shared) */}
      <div className="relative w-screen flex justify-center items-center py-45 bg-white">
        <Image
          src="/images/MeduappImg.png" // 🔹 rename your uploaded image to this path in public/images
          alt="Meet the Edulinks App"
          fill
          className="scale-180 object-contain"
          priority
        />

        {/* Buttons overlay */}
        <div className="absolute top-[80px] left-[15px] flex gap-4 flex-wrap">
          {/* Google Play */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Image
              src="/images/MgoogleImg.png" // 🔹 separate small PNG of Play Store badge
              alt="Get it on Google Play"
              width={150}
              height={45}
              className="w-[80px] h-auto hover:scale-105 transition-transform"
            />
          </a>

          {/* App Store */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Image
              src="/images/MappstoreImg.png" // 🔹 separate small PNG of App Store badge
              alt="Download on the App Store"
              width={150}
              height={45}
              className="w-[80px] h-auto hover:scale-105 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
