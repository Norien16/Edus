// components/LifeAtMacquarie.tsx
"use client";

import Image from "next/image";

export default function TU4() {
  return (
    <section className="w-full py-16 px-6 md:px-20 mt-10">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#545454] mb-10">
        Admission Requiremnts
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Card 1 */}
        <div className="flex justify-center">
          <Image
            src="/images/tu5Img1.png"
            alt="Multicultural Community"
            width={800}
            height={600}
            className="w-[90%] sm:w-[60%] md:w-[100%] lg:w-[85%] h-auto relative left-[10%]"
          />
        </div>

        {/* Card 2 */}
        <div className="flex justify-center">
          <Image
            src="/images/u5Img2.png"
            alt="Clubs & Societies"
            width={800}
            height={600}
            className="w-[90%] sm:w-[60%] md:w-[100%] lg:w-[85%] h-auto relative -left-[4%]"
          />
        </div>
      </div>
    </section>
  );
}
