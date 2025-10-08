"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Slide3() {
  return (
    <section className="w-full py-10 md:py-16 lg:py-20 mt-6 md:mt-10">
      <div className="max-w-6xl mx-auto px-6 md:px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10">
        {/* Left Content */}
        <div className="px-2 md:px-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#545454] mb-4 md:mb-6">
            Find the Right Path with <br /> Confidence
          </h2>
          <p className="text-[#6F6F6F] text-base md:text-lg mb-6 md:mb-10">
            Take our AI–powered test to instantly discover universities,
            courses, and career options that truly fit your profile. No
            guesswork, just smart recommendations
          </p>
          <button className="bg-[#37D7D9] text-white px-8 md:px-10 py-3 md:py-4 text-lg md:text-2xl rounded-full font-semibold shadow hover:opacity-95 transition">
            Take AI Test Now
          </button>
        </div>

        {/* Right Content (Laptop Image + Overlay) */}
        <div
          className="
            relative
            w-full
            max-w-[520px] sm:max-w-[640px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px]
            mx-auto
            md:mx-0
            left-[5%] sm:left-[10%] md:left-[12%] lg:left-[17%] xl:left-[30%]
          "
        >
          {/* Laptop Image - responsive sizes via container max-width above */}
          <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[500px]">
            <Image
              src="/images/slide4Img.png"
              alt="Laptop Illustration"
              fill
              className="object-contain relative z-10"
              priority
            />
          </div>

          {/* Overlay Image - Infinite Floating (amplitude small, preserved direction) */}
          <motion.div
            className="
              absolute
              z-20
              /* keep the overlay anchored roughly in the same spot — responsive top/left */
              top-[30%] sm:top-[32%] md:top-[34%] lg:top-[35%]
              left-[12%] sm:left-[12%] md:left-[12%] lg:left-[12%]
              w-[48%] sm:w-[46%] md:w-[45%] h-[22%]
            "
            animate={{
              y: [0, -8, 0], // small float (keeps same visual motion)
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/slide4pageImg.png"
                alt="Screen Content"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
