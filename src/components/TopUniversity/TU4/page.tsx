// components/LifeAtMacquarie.tsx
"use client";

import Image from "next/image";

export default function TU4() {
  return (
    <section className="w-full py-16 px-6 md:px-20 mt-40">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#545454] mb-10">
        Life At Macquarie
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Card 1 */}
        <div className="flex justify-center">
          <Image
            src="/images/tu4Img1.png"
            alt="Multicultural Community"
            width={800}
            height={600}
            className="w-[90%] sm:w-[80%] md:w-[100%] lg:w-[100%] h-auto"
          />
        </div>

        {/* Card 2 */}
        <div className="flex justify-center">
          <Image
            src="/images/tu4Img2.png"
            alt="Clubs & Societies"
            width={800}
            height={600}
            className="w-[90%] sm:w-[80%] md:w-[100%] lg:w-[100%] h-auto"
          />
        </div>

        {/* Card 3 */}
        <div className="flex justify-center">
          <Image
            src="/images/tu4Img3.png"
            alt="Sydney Lifestyle"
            width={800}
            height={600}
            className="w-[90%] sm:w-[80%] md:w-[100%] lg:w-[100%] relative left-[-5%] h-auto"
          />
        </div>

        {/* Card 4 */}
        <div className="flex justify-center">
          <Image
            src="/images/tu4Img4.png"
            alt="Events & Festivals"
            width={800}
            height={600}
            className="w-[90%] sm:w-[80%] md:w-[100%] lg:w-[100%] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
