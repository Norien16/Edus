// components/CampusFacilities.tsx
"use client";

import Image from "next/image";

export default function TU25() {
  return (
    <section className="w-full py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#545454] mb-26">
        Campus & Facilities
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Row 1 */}
        <div className="flex justify-center md:justify-end">
          <div className="relative -top-2 sm:-top-4 md:-top-6 lg:-top-8 left-0 sm:left-2 md:left-4">
            <Image
              src="/images/tu26Img1.png"
              alt="Library & Research Hubs"
              width={500}
              height={500}
              className="w-[280px] sm:w-[320px] md:w-[420px] lg:w-[500px] h-auto"
            />
          </div>
        </div>

        <div className="flex justify-center md:justify-start">
          <div className="relative top-6 sm:top-10 md:top-20 lg:top-24 -left-1 sm:-left-2 md:-left-4">
            <Image
              src="/images/tu26Img2.png"
              alt="Labs & Innovation Centers"
              width={500}
              height={500}
              className="w-[280px] sm:w-[320px] md:w-[420px] lg:w-[500px] h-auto"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex justify-center">
          <div className="relative top-8 sm:top-12 md:top-20 lg:top-24 left-4 sm:left-8 md:left-14">
            <Image
              src="/images/tu26Img3.png"
              alt="On-Campus Accommodation"
              width={500}
              height={500}
              className="w-[280px] sm:w-[320px] md:w-[420px] lg:w-[500px] h-auto"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative top-12 sm:top-20 md:top-32 lg:top-44 -left-2 sm:-left-6 md:-left-12 lg:-left-16">
            <Image
              src="/images/tu26Img4.png"
              alt="Student Support & Career Services"
              width={500}
              height={500}
              className="w-[280px] sm:w-[320px] md:w-[420px] lg:w-[500px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
