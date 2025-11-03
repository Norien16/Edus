// components/Overview.tsx
"use client";

import Image from "next/image";

export default function TU1() {
  return (
    <section className="w-full py-12 px-6 md:py-20 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* === Left Side: Text === */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#545454] mb-12">
            Overview
          </h2>
          <p className="text-[#000000] mb-16 md:text-2xl"style={{ fontFamily: "DM Sans" }}>
            Macquarie University, based in Sydney, is ranked among the world’s
            top 1%. With more than 45,000 students, including 12,000
            international learners, the university is renowned for its
            research-driven approach, strong industry partnerships, and focus on
            graduate employability. Its modern campus and diverse community make
            it one of Australia’s most attractive destinations for international
            students.
          </p>

          {/* Button */}
          <button className="bg-[#37D7D9] text-xl text-white font-bold px-12 py-3 rounded-full shadow-lg shadow-gray-400 transition-all">
            See More
          </button>
        </div>
        {/* === Right Side: Image === */}
        <div className="absolute left-2 w-full flex justify-end md:justify-end">
          <Image
            src="/images/tu1Img.png"
            alt="Macquarie University"
            width={450} // adjust as ne eded
            height={300} // adjust as needed
            className="object-contain rounded-bl-[50px] w-auto h-auto max-w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
