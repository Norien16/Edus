"use client";

import Image from "next/image";
import React from "react";

export default function Tu12M() {
  return (
    <section className="relative mx-auto rounded-t-full w-[500px] right-[35px] h-[56vh] mb-12 bg-white">
      {/* Background Image */}
      <Image
        src="/images/tu12mImg.png" // your image path here
        alt="Study Abroad"
        fill
        className="object-contain"
        priority
      />

      {/* Overlay Text */}
      <div className="absolute top-[100px] inset-0 flex flex-col text-center px-20 text-white">
        <h1 className="text-3xl font-bold mb-3">
          Overview
        </h1>
        <p className="text-base max-w-md leading-relaxed">
          Macquarie University, based in Sydney, is ranked among the world’s top 1%. With more than 45,000 students, including 12,000 international learners, the university is renowned for its research-driven approach, strong industry partnerships, and focus on graduate employability. Its modern campus and diverse community make it one of Australia’s most attractive destinations for international students.
        </p>
      </div>
    </section>
  );
}
