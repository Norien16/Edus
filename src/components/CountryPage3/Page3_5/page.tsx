"use client";

import Image from "next/image";

export default function Page3_5() {
  return (
    <section className="relative w-full py-20 md:py-30 -mt-20 md:-mt-28 bg-white">
      {/* === Background Image Layer 1 === */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/page5line2Img.png"
          alt="Deep Background"
          fill
          className="object-contain translate-x-22 md:translate-x-152 -translate-y-0 md:-translate-y-0 opacity-100"
          priority
        />
      </div>

      {/* === Background Image Layer 2 ===
      <div className="absolute w-[180px] h-[400px] md:w-[270px] md:h-[650px] top-[200px] md:top-[360px] inset-0 z-0">
        <Image
          src="/images/page5lineImg.png"
          alt="Deep Background"
          fill
          className="object-contain translate-x-28 md:translate-x-140 -translate-y-8 md:-translate-y-12 opacity-100"
          priority
        />
      </div> */}

      {/* === Title === */}
      <h2 className="relative z-20 text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#545454] mb-10 md:mb-30 px-4">
        Admission Requirements
      </h2>

      {/* === Wrapper === */}
      <div className="relative max-w-4xl mx-auto">
              {/* === Background Image Layer 1 === */}
                      <Image
                      width={1600}
                      height={1400}
                        src="/images/page5lineImg.png"
                        alt="Deep Background"
                        className="object-contain absolute w-[187px] left-[330px] top-[28px]"
                      />
      <div className="relative z-20 max-w-4xl mx-auto h-[400px] md:h-[500px] px-6">
        {/* === Academic Transcripts === */}
        <div className="absolute top-0 right-5 flex items-center gap-2 md:gap-3">
          <Image src="/images/page4dotImg.png" alt="Dot" width={36} height={36} className="md:w-[44px] md:h-[44px]" />
          <p className="text-lg md:text-xl text-[#000000] max-w-[220px] md:max-w-xs" style={{ fontFamily: "DM Sans" }}>
            Academic transcripts (minimum GPA varies by program)
          </p>
        </div>

        {/* === IELTS / TOEFL === */}
        <div className="absolute top-[120px] md:top-[160px] -left-5 flex items-center gap-2 md:gap-3">
          <p className="text-lg md:text-xl text-[#000000] max-w-[200px] md:max-w-xs text-right" style={{ fontFamily: "DM Sans" }}>
            English proficiency test: IELTS / TOEFL / PTE (French test for Quebec programs if applicable)
          </p>
          <Image src="/images/page4dotImg.png" alt="Dot" width={36} height={36} className="md:w-[44px] md:h-[44px]" />
        </div>

        {/* === SOP === */}
        <div className="absolute top-[240px] md:top-[350px] right-6 md:right-[85px] flex items-center gap-2 md:gap-3">
          <Image src="/images/page4dotImg.png" alt="Dot" width={36} height={36} className="md:w-[44px] md:h-[44px]" />
          <p className="text-lg md:text-xl text-[#000000] max-w-[220px] md:max-w-xs" style={{ fontFamily: "DM Sans" }}>
            Statement of Purpose (SOP)
          </p>
        </div>

        {/* === Resume + Recommendation === */}
        <div className="absolute -bottom-[40px] md:-bottom-[60px] left-0 md:-left-[20px] flex items-center gap-2 md:gap-3">
          <p className="text-lg md:text-xl text-[#000000] max-w-[220px] md:max-w-xs text-right" style={{ fontFamily: "DM Sans" }}>
            Resume + Recommendation Letters (for postgraduate applicants)
          </p>
          <Image src="/images/page4dotImg.png" alt="Dot" width={36} height={36} className="md:w-[44px] md:h-[44px]" />
        </div>

        {/* === Valid Passport === */}
        <div className="absolute -bottom-40 md:-bottom-52 right-[100px] md:right-[205px] flex items-center gap-2 md:gap-3">
          <Image src="/images/page4dotImg.png" alt="Dot" width={36} height={36} className="md:w-[44px] md:h-[44px]" />
          <p className="text-lg md:text-xl text-[#000000]" style={{ fontFamily: "DM Sans" }}>
            Valid Passport
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
