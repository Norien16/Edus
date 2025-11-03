"use client";

import Image from "next/image";

export default function Page2_4() {
  return (
    <section className="relative w-full py-20 sm:py-24 md:py-30 bg-white">
      {/* === Background Image Layer 2 (deepest) === */}
      <div className="absolute inset-0 z-0 h-[500px] sm:h-[650px] md:h-[750px]">
        <Image
          src="/images/page4line2Img.png"
          alt="Deep Background"
          fill
          className="object-contain translate-x-466 md:translate-x-490 lg:translate-x-[610px] -translate-y-0 opacity-100"
          priority
        />
      </div>

      {/* === Background Image Layer 1 ===
      <div className="absolute inset-0 top-[110px] sm:top-[165px] md:top-[200px] z-0 w-full">
        <Image
          src="/images/page4lineImg.png"
          alt="Deep Background"
          fill
          className="object-contain max-w-210 h-auto translate-x-12 md:translate-x-40 lg:translate-x-60 opacity-100"
          priority
        />
      </div> */}

      {/* === Title === */}
      <h2 className="relative z-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#545454] mb-10 sm:mb-16 md:mb-20">
        Work & Stay Opportunities
      </h2>

      {/* === Wrapper for cards and dots === */}
      <div className="relative max-w-6xl mx-auto">
         {/* === Background Image Layer 1 === */}
                <Image
                width={1600}
                height={1400}
                  src="/images/page4lineImg.png"
                  alt="Deep Background"
                  className="object-contain absolute w-[850px] left-[100px] top-[140px]"
                />
      <div className="relative z-20 max-w-6xl mx-auto h-[420px] sm:h-[480px] md:h-[500px] scale-90 sm:scale-95 md:scale-100">
        {/* === Card 1 === */}
        <div className="absolute top-0 left-0">
          <Image
            src="/images/page4Img1.png"
            alt="Work 20 Hours/Week During Studies"
            width={320}
            height={120}
            className="object-contain max-w-full h-auto"
          />
        </div>

        {/* Dot under card 1 */}
        <div className="absolute top-[120px] sm:top-[140px] md:top-[150px] left-[60px] sm:left-[75px] md:left-[90px]">
          <Image
            src="/images/page4dotImg.png"
            alt="Dot"
            width={44}
            height={44}
            className="object-contain"
          />
        </div>

        {/* === Card 2 === */}
        <div className="absolute top-[60px] sm:top-[70px] md:top-[80px] left-[45%] md:left-[500px]">
          <Image
            src="/images/page4Img2.png"
            alt="Post-Study Work Visa"
            width={400}
            height={130}
            className="object-contain max-w-full h-auto"
          />
        </div>

        {/* Dot under card 2 */}
        <div className="absolute top-[160px] sm:top-[180px] md:top-[200px] left-[47%] md:left-[520px]">
          <Image
            src="/images/page4dotImg.png"
            alt="Dot"
            width={44}
            height={44}
            className="object-contain"
          />
        </div>

        {/* === Card 3 === */}
        <div className="absolute top-[220px] sm:top-[250px] md:top-[270px] left-[55%] md:left-[700px]">
          <Image
            src="/images/page4Img3.png"
            alt="Pathway To Permanent Residency"
            width={400}
            height={130}
            className="object-contain max-w-full h-auto"
          />
        </div>

        {/* Dot under card 3 */}
        <div className="absolute top-[310px] sm:top-[350px] md:top-[380px] left-[72%] md:left-[920px]">
          <Image
            src="/images/page4dotImg.png"
            alt="Dot"
            width={44}
            height={44}
            className="object-contain"
          />
        </div>
      </div>
      </div>
    </section>
  );
}
