"use client";

import Image from "next/image";
import React from "react";

type Step = {
  id: number;
  stepImage: string; // the step image (icon + title + description as one image)
  dot: string;       // dot image
  stepImageClass?: string; // extra classes for positioning step image
  dotClass?: string;       // extra classes for positioning dot
};

const steps: Step[] = [
  {
    id: 1,
    stepImage: "/images/step1Img.png",
    dot: "/images/orangedotImg.png",
    stepImageClass: "top-0 left-170",
    dotClass: "top-27 left-163",
  },
  {
    id: 2,
    stepImage: "/images/step2Img.png",
    dot: "/images/orangedotImg.png",
    stepImageClass: "top-0 left-10",
    dotClass: "top-6 right-81",
  },
  {
    id: 3,
    stepImage: "/images/step3Img.png",
    dot: "/images/orangedotImg.png",
    stepImageClass: "-top-20 left-170",
    dotClass: "-top-25 left-154",
  },
  {
    id: 4,
    stepImage: "/images/step4Img.png",
    dot: "/images/orangedotImg.png",
    stepImageClass: "-top-30 mr-10",
    dotClass: "-top-27 left-115",
  },
  {
    id: 5,
    stepImage: "/images/step5Img.png",
    dot: "/images/orangedotImg.png",
    stepImageClass: "-top-50 left-170",
    dotClass: "-top-61 left-154",
  },
  {
    id: 6,
    stepImage: "/images/step6Img.png",
    dot: "/images/orangedotImg.png",
    stepImageClass: "-top-60",
    dotClass: "-top-61 left-98",
  },
  {
    id: 7,
    stepImage: "/images/step7Img.png",
    dot: "/images/orangedotImg.png",
    stepImageClass: "-top-90 left-190",
    dotClass: "-top-96 left-171",
  },
  {
    id: 8,
    stepImage: "/images/step8Img.png",
    dot: "/images/orangedotImg.png",
    stepImageClass: "-top-95",
    dotClass: "-top-101 left-89",
  },
  {
    id: 9,
    stepImage: "/images/step9Img.png",
    dot: "/images/orangedotImg.png",
    stepImageClass: "-top-100 left-155",
    dotClass: "-top-62 left-140",
  },
];

export default function Page8() {
  return (
    <section className="relative w-full bg-white py-20">
      {/* === Background Image Layer 2 (deepest) === */}
      <div className="absolute w-auto h-[2300px] inset-0 z-0">
        <Image
          src="/images/page8lineImg.png"
          alt="Deep Background"
          fill
          className="object-contain -translate-x-10 translate-y-100 opacity-100"
          priority
        />
      </div>

      {/* === Background Image Layer 1 (middle) === */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <Image
          src="/images/page1blurImg.png"
          alt="Background Australia"
          fill
          className="object-contain opacity-100 translate-y-82"
          priority
        />
      </div>

      {/* Section Title */}
      <div className="relative z-20 text-center w-full mx-auto mb-20 px-4">
        <h2 className="text-sm uppercase tracking-widest text-orange-500 mb-2 text-start ml-28">
          The Brain Burners Roadmap
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold leading-snug">
          “Designing intuitive, human-centered experiences<br/> that grow with innovation and user needs.”
        </h1>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`relative flex items-center mb-20`}
          >
            {/* Step Image */}
            <div
              className={`w-5/12 relative z-10 ${
                step.stepImageClass || ""
              }`}
            >
              <Image
                src={step.stepImage}
                alt={`Step ${step.id}`}
                width={400}
                height={200}
                className="object-contain"
              />
            </div>

            {/* Dot Image */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 z-20 ${
                step.dotClass || ""
              }`}
            >
              <Image
                src={step.dot}
                alt="dot"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
