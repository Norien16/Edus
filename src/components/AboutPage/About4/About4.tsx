// components/MobileShowcase.tsx
"use client";
import Image from "next/image";

export default function About4() {
  return (
    <section className="relative w-full mx-auto bg-white -mb-30 -z-10 overflow-hidden">
      {/* Background Wave */}
      <div className=" z-0">
        <Image
          src="/images/about4waveImg.png"
          alt="Background Wave"
          fill
          className="object-contain "
          priority
        />
      </div>

      {/* Extra Full-Width Image ABOVE background, BELOW content
      <div className="relative inset-x-0 top-208 z-10">
        <Image
          src="/images/about4backfadeImg.png"
          alt="Extra Section Image"
          width={3500}
          height={500}
          className="w-full max-w-full h-auto object-contain"
          priority
        />
      </div> */}

      {/* Foreground Content */}
      <div className="container relative z-20 mx-auto px-4 py-40 text-center">
        {/* Heading */}
        <h2 className=" md:text-3xl font-bold text-gray-900 -translate-x-80 pb-30">
          Your Global Career, Now In Your
          <br /> Pocket —Edulinks AI On Mobile!
        </h2>

        {/* Store Buttons */}
        <div className="flex justify-center gap-4 mt-6 -translate-x-99 -translate-y-30">
          <Image
            src="/images/googleImg.png"
            alt="Google Play"
            width={120}
            height={45}
            className="w-[140px] h-auto"
          />
          <Image
            src="/images/appImg.png"
            alt="App Store"
            width={120}
            height={45}
            className="w-[140px] h-auto"
          />
        </div>

        {/* Main Content */}
        <div className="relative mt-12 flex flex-col items-center">
          {/* Cards Left
          <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-6">
            <Image
              src="/images/aboutcard1Img.png"
              alt="Career Pathway Test"
              width={400}
              height={150}
              className="w-full md:max-w-[400px] h-auto drop-shadow-xl -translate-y-30 -translate-x-21"
            />
            <Image
              src="/images/aboutcard2Img.png"
              alt="University Course Shortlisting"
              width={400}
              height={150}
              className="w-full md:max-w-[400px] h-auto drop-shadow-xl -translate-y-47 translate-x-18"
            />
          </div> */}

          {/* Phone Image */}
          <Image
            src="/images/twophonesnew.png"
            alt="Mobile App Preview"
            width={3500}
            height={3500}
            className="w-full h-auto relative z-10 -translate-y-40"
          />

          {/* Cards Right
          <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-6">
            <Image
              src="/images/aboutcard3Img.png"
              alt="Visa Query Solver"
              width={400}
              height={150}
              className="w-full md:max-w-[400px] h-auto drop-shadow-xl -translate-y-20 -translate-x-16 relative z-20"
            />
            <Image
              src="/images/aboutcard4Img.png"
              alt="Chat With Me"
              width={400}
              height={150}
              className="w-full max-w-[400px] h-auto drop-shadow-xl -translate-y-36 translate-x-10 relative z-10"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
