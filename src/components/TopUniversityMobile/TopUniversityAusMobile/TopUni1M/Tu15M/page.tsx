// components/CampusFacilities.tsx
"use client";

import Image from "next/image";

export default function Tu15M() {
  return (
    <section className="w-full py-15 px-6 -mt-45 bg-white">
      <h2 className="text-3xl font-bold text-center text-[#545454] mb-15">
        Campus & Facilities
      </h2>

      <div className="grid grid-cols-1 gap-y-6">
        {/* Row 1 */}
        <div className="flex justify-center">
          <div className="relative -top-2 -left-4">
            <Image
              src="/images/tu3Img1.png"
              alt="Library & Research Hubs"
              width={500}
              height={500}
              className="w-[320px] h-auto"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative top-0 -left-4">
            <Image
              src="/images/tu3Img2.png"
              alt="Labs & Innovation Centers"
              width={500}
              height={500}
              className="w-[320px] h-auto"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex justify-center">
          <div className="relative top-3 -left-4">
            <Image
              src="/images/tu3Img3.png"
              alt="On-Campus Accommodation"
              width={500}
              height={500}
              className="w-[320px] h-auto"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative top-5 -left-4">
            <Image
              src="/images/tu3Img4.png"
              alt="Student Support & Career Services"
              width={500}
              height={500}
              className="w-[320px] h-auto"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex justify-center">
          <div className="relative top-5 -left-4">
            <Image
              src="/images/tu3Img5.png"
              alt="Sports & Recreation"
              width={500}
              height={500}
              className="w-[320px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
