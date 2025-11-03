"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function Slide2M () {
  // amplitude adapts based on viewport width so motion remains pleasant on small screens
  const [amplitude, setAmplitude] = useState<number>(80);

  useEffect(() => {
    function updateAmplitude() {
      const w = window.innerWidth;
      if (w < 640) {
        // mobile
        setAmplitude(30);
      } else if (w < 1024) {
        // tablet
        setAmplitude(50);
      } else {
        // desktop
        setAmplitude(80);
      }
    }

    updateAmplitude();
    window.addEventListener("resize", updateAmplitude);
    return () => window.removeEventListener("resize", updateAmplitude);
  }, []);

  // helpers to build motion arrays preserving original direction patterns
  const upDownUp = (a: number) => [0, -a, 0, a, 0];
  const downUpDown = (a: number) => [0, a, 0, -a, 0];

  return (
    <section className="w-full py-20 -mt-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-[#545454] mb-15">
          Why Choose AI-Powered Tests?
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-y-12 justify-items-center">
          {/* Card 1 (Up → Down → Up) */}
          <motion.div
            className="relative w-[220px] h-[180px]"
            animate={{ y: upDownUp(amplitude) }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Image
              src="/images/slide2Img1.png"
              alt="Smarter Decisions"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Card 2 (Down → Up → Down) */}
          <motion.div
            className="relative w-[220px] h-[180px]"
            animate={{ y: downUpDown(amplitude) }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Image
              src="/images/slide2Img2.png"
              alt="Save Time & Effort"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Card 3 (Up → Down → Up) */}
          <motion.div
            className="relative w-[220px] h-[180px]"
            animate={{ y: upDownUp(amplitude) }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Image
              src="/images/slide2Img3.png"
              alt="Personalized for You"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Card 4 (Down → Up → Down) */}
          <motion.div
            className="relative w-[220px] h-[180px]"
            animate={{ y: downUpDown(amplitude) }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Image
              src="/images/slide2Img4.png"
              alt="Future-Proof Choices"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
