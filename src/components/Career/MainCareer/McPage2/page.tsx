import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ready To Start Your Engineering Career",
  description: "Discover universities, scholarships, and programs tailored to your goals.",
};

export default function McPage2 () {
  return (
    <main className="min-h-screen mt-24">
      {/* Heading */}
       <div className="mx-auto text-center">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#545454]">
                Course Formats & Duration
              </h1>
               <div className="flex justify-center mt-16">
                <Image
                  src="/images/mcpage2Img1.png"
                  alt="Course Formats and Duration"
                  width={2000}
                  height={400}
                  className="w-full  h-auto"
                  priority
                />
              </div>
            </div>
      <header className="flex justify-center w-full text-center mt-30 mb-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#545454] leading-relaxed">
          Ready To Start Your Engineering Career<br />In Australia?
        </h1>
      </header>

      {/* Two-column hero */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Illustration (left) */}
        <div className="lg:col-span-6 flex justify-center ml-40 mt-6 ">
          <div className="w-[420px]">
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

        {/* Copy + CTA (right) */}
        <div className="lg:col-span-6 flex flex-col items-start text-left ml-4">
          <p className="text-2xl text-[#000000] leading-normal mb-8">
            Discover the best universities, scholarships,<br/> and programs tailored to your goals.
          </p>

           <button
            className="bg-[#37D7D9] text-white text-2xl font-medium rounded-full px-8 py-3 cursor-pointer"
          >
            Get Free Counseling
          </button>
        </div>
      </section>
    </main>
  );
}
