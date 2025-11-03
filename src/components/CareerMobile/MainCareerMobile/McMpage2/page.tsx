"use client";
import Image from "next/image";
import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Ready To Start Your Engineering Career",
//   description: "Discover universities, scholarships, and programs tailored to your goals.",
// };

export default function McMpage2 () {
  return (
    <main className="min-h-screen py-20 bg-white">
      {/* Heading */}
       <div className="mx-auto text-center">
              <h1 className="text-3xl font-bold text-[#545454]">
                Course Formats & Duration
              </h1>
               <div className="flex justify-center mt-8">
                <Image
                  src="/images/mcmpage2Img1.png"
                  alt="Course Formats and Duration"
                  width={2000}
                  height={400}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
      <header className="flex justify-center w-full text-center mt-15">
        <h1 className="text-3xl font-bold text-[#545454] leading-relaxed">
          Ready To Start Your<br/> Engineering Career In<br/> Australia?
        </h1>
      </header>

      {/* Two-column hero */}
      <section className="w-full grid grid-cols-1 gap-8 items-center">
        {/* Illustration (left) */}
        {/* Copy + CTA (right) */}
        <div className="lg:col-span-6 flex flex-col text-center">
          <p className="text-xl text-[#666666] leading-normal px-10 mb-8">
            Discover the best universities, scholarships, and programs tailored to your goals.
          </p>
        <div className="flex justify-center ">
          <div className="w-[360px]">
            <Image
              src="/images/mcpage2Img2.png"
              alt="Person receiving career counselling"
              width={2000}
              height={1000}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
        </div>
      </section>
       <button
            className="bg-[#37D7D9] ml-35 mt-5 text-white text-md font-medium rounded-full py-2 px-4"
          >
            Get Free Counseling
          </button>
    </main>
  );
}
