// app/why-career/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Why Choose A Career In Australia",
  description: "Reasons and benefits of pursuing a career in Australia",
};

export default function TC4Page2() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-screen-xl text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#545454]">
          Why Choose A Career In New Zealand
        </h1>
         <div className="flex justify-center mt-16">
          <Image
            src="/images/tc4page2Img1.png"
            alt="Why Choose a Career in Australia"
            width={2000}
            height={400}
            className="w-full max-w-[1080px] h-auto"
            priority
          />
        </div>
      </div>
      <div className="text-center mt-20">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#545454]">
          Average Salary Range in the New Zealand (per year)
        </h1>
         <div className="mt-16">
          <Image
            src="/images/tc4page2Img2.png"
            alt="Why Choose a Career in Australia"
            width={2000}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
      <section className="mx-auto max-w-screen-xl mt-24 px-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#545454] text-center mb-12">
          How Edulinks Helps You
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Bullet points */}
          <ul className=" w-5xl space-y-6 text-2xl text-[#000000] list-disc list-inside md:ml-26 leading-relaxed">
            <li>Identify high-demand careers and matching study programs in<br/> New Zealand</li>
            <li>Shortlist universities & institutes aligned with your goals</li>
            <li>Assist with applications, scholarships, and visa processes</li>
            <li>Offer ongoing career and settlement guidance after<br/> graduation</li>
          </ul>

          {/* RIGHT: Illustration */}
          <div className="flex justify-center ml-24 -mt-4">
            <Image
              src="/images/tc1page2Img3.png"
              alt="How Edulinks Helps You"
              width={600}
              height={400}
              className="w-full max-w-[500px] h-auto"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}
