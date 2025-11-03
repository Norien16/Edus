// components/LifeAtMacquarie.tsx
"use client";

import Image from "next/image";

export default function TU16M() {
  return (
    <section className="w-full py-10 px-6 -mt-6 bg-white">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-[#545454] mb-10">
        Life At Macquarie
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-y-4">
        {/* Card 1 */}
        <div className="flex relative right-6">
          <Image
            src="/images/tu4Img1.png"
            alt="Multicultural Community"
            width={800}
            height={600}
            className="w-[100%] h-auto"
          />
        </div>

        {/* Card 2 */}
        <div className="flex relative left-9">
          <Image
            src="/images/tu4Img2.png"
            alt="Clubs & Societies"
            width={800}
            height={600}
            className="w-[100%] h-auto"
          />
        </div>

        {/* Card 3 */}
        <div className="flex relative right-5">
          <Image
            src="/images/tu4Img3.png"
            alt="Sydney Lifestyle"
            width={800}
            height={600}
            className="w-[100%] relative left-[-5%] h-auto"
          />
        </div>

        {/* Card 4 */}
        <div className="flex relative left-8">
          <Image
            src="/images/tu4Img4.png"
            alt="Events & Festivals"
            width={800}
            height={600}
            className="w-[100%] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
