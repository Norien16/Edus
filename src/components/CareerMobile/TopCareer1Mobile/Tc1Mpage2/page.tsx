// app/why-career/page.tsx
"use client";
import type { Metadata } from "next";
import Image from "next/image";

// export const metadata: Metadata = {
//   title: "Why Choose A Career In Australia",
//   description: "Reasons and benefits of pursuing a career in Australia",
// };

export default function Tc1Mpage2() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-screen-full text-center">
        <h1 className="text-2xl font-bold text-[#545454]">
          Why Choose A Career In<br/> Australia
        </h1>
         <div className="flex justify-center mt-10">
          <Image
            src="/images/tc1mpage2Img1.png"
            alt="Why Choose a Career in Australia"
            width={2000}
            height={1400}
            className="w-[420px] h-auto object-contain"
            priority
          />
        </div>
      </div>
      <div className="text-center mt-15">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#545454]">
          Average Salary Range in the<br/> australia (per year)
        </h1>
         <div className="mt-10">
          <Image
            src="/images/tc1mpage2Img2.png"
            alt="Why Choose a Career in Australia"
            width={2000}
            height={1400}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
      <section className="mx-auto mt-15 px-6">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#545454] text-center mb-12">
          How Edulinks Helps You
        </h1>

        {/* RIGHT: Illustration */}
          <div className="flex justify-center -mt-8">
            <Image
              src="/images/tc1page2Img3.png"
              alt="How Edulinks Helps You"
              width={600}
              height={400}
              className="w-full max-w-[360px] h-auto"
              priority
            />
          </div>

        <div className="grid grid-cols-1 gap-12 py-20 items-center -mt-10">
          {/* LEFT: Bullet points */}
          <ul className="w-5xl space-y-6 text-sm px-5 text-[#000000] list-disc list-inside md:ml-28 leading-relaxed">
            <li>Match your profile to the most relevant career fields</li>
            <li>Shortlist universities offering related programs</li>
            <li>Assist with applications, scholarships, and visas</li>
            <li>Provide ongoing support for your study and career journey</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
