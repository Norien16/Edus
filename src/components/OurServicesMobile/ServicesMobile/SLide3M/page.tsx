"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Slide3M () {
  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-full mx-auto items-center text-center grid grid-cols-1 gap-8">
        {/* Left Content */}
        <div className="px-2 ">
          <h2 className="text-3xl font-bold text-[#545454] mb-4">
            Find the Right Path with <br /> Confidence
          </h2>
          <p className="text-[#6F6F6F] text-base px-4 mb-6">
            Take our AI–powered test to instantly discover universities,
            courses, and career options that truly fit your profile. No
            guesswork, just smart recommendations
          </p>
        </div>

        {/* Right Content (Laptop Image + Overlay) */}
        <div
          className="
            relative
            w-full
            max-w-[420px]
            mx-auto
            left-[14%]
            bottom-[15%]
          "
        >
          {/* Laptop Image - responsive sizes via container max-width above */}
          <div className="relative w-full h-[260px]">
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
              top-[28%]
              left-[-2%]
              w-[75%] h-[35%]
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
