"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function Page9() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 40%"], // animate during section visibility
  });

  // Reverse mapping: 0 → 100, 1 → 0
  const fillHeight = useTransform(scrollYProgress, [0, 1], [100, 0]);

  const clipPath = useTransform(
    fillHeight,
    (h) => `inset(${100 - h}% 0 0 0)`
  );

  return (
    <div
      ref={containerRef}
      className="relative z-20 mx-auto max-w-3xl px-6 py-24 text-left"
    >
      {/* Heading stays always black */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Bold Thinking. Powerful Results.
      </h2>

      {/* Paragraph container */}
      <div className="relative overflow-hidden text-xl md:text-4xl font-medium leading-relaxed">
        {/* Base text (gray) */}
        <div className="text-orange-500 space-y-6">
          <p>
            At Brain Burners, We Transform Bold Ideas Into Powerful Digital
            Experiences.
          </p>
          <p>
            With Creativity, Strategy, And Precision, We Help Brands Ignite
            Their Vision—
          </p>
          <p>
            Whether Building From The Ground Up Or Elevating What Already Exists.
          </p>
        </div>

        {/* Overlay (orange fill draining as you scroll down) */}
        <motion.div
          className="absolute top-0 left-0 w-full text-gray-500 space-y-6"
          style={{ clipPath }}
        >
          <p>
            At Brain Burners, We Transform Bold Ideas Into Powerful Digital
            Experiences.
          </p>
          <p>
            With Creativity, Strategy, And Precision, We Help Brands Ignite
            Their Vision—
          </p>
          <p>
            Whether Building From The Ground Up Or Elevating What Already Exists.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
