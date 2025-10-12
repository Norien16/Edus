// components/MobileShowcase.tsx
"use client";
import Image from "next/image";

export default function Mabout4() {
  return (
    <section className="w-[112%] -mb-50">
      {/* Background Wave */}
      <div className="w-full">
        <Image
          src="/images/about4backImg.png"
          alt="Background Wave"
          width={1000}
          height={1000}
          className="w-[8000px] h-auto object-contain"
          priority
        />
      </div>

        {/* Store Buttons */}
        <div className="flex gap-2 -translate-y-165 translate-x-10">
          <Image
            src="/images/googleImg.png"
            alt="Google Play"
            width={120}
            height={45}
            className="w-[80px] h-auto"
          />
          <Image
            src="/images/appImg.png"
            alt="App Store"
            width={120}
            height={45}
            className="w-[80px] h-auto"
          />
        </div>
    </section>
  );
}
