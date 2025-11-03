// app/overview/page.tsx
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overview",
  description: "Overview — career prospects and top career fields in Australia",
};

const CAREER_FIELDS = [
  {
    img: "/images/tcpage1Img1.png",
    title: "Engineering & Construction",
    text: "Help shape New Zealand’s infrastructure boom through civil, electrical, and mechanical engineering roles.",
  },
  {
    img: "/images/tcpage1Img2.png",
    title: "Healthcare & Nursing",
    text: "Work in one of the country’s highest-demand sectors with opportunities in nursing, medicine, and aged care.",
  },
  {
    img: "/images/tcpage1Img2.png",
    title: "Information Technology & AI",
    text: "Contribute to New Zealand’s fast-evolving digital economy in software development, cybersecurity, and data analytics.",
  },
  {
    img: "/images/tcpage1Img1.png",
    title: "Business & Management",
    text: "Lead, innovate, and drive growth in management, finance, and marketing across local and global firms.",
  },
  {
    img: "/images/tcpage1Img2.png",
    title: "Education & Teaching",
    text: "Join New Zealand’s respected education system — from early childhood teaching to university lecturing.",
  },
  {
    img: "/images/tcpage1Img2.png",
    title: "Agriculture & Environmental Sciences",
    text: "Support New Zealand’s world-class agribusiness and sustainability initiatives through research and innovation.",
  },
];

export default function TC4Page1 () {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      {/* ===== Overview Section ===== */}
      <section className="mx-auto max-w-screen-xl">
        <div className="flex flex-cols-1 lg:flex-cols-2 gap-40 items-center">
          {/* LEFT: Text column */}
          <div className="lg:col-span-7 order-2 lg:order-1 ml-25 mt-20">
            <h1 className="mb-6 text-3xl lg:text-4xl font-bold text-[#545454]">
              Overview
            </h1>

            <p className="text-lg lg:text-xl leading-relaxed text-[#000000] max-w-3xl mt-12">
              New Zealand offers strong career prospects across sectors like<br/> healthcare, engineering,
               IT, and education. With skill shortages<br/> nationwide and a growing demand for qualified 
               professionals,<br/> international graduates benefit from stable job markets, a safe <br/>living 
               environment, and up to three years of post-study work<br/> opportunities.
            </p>
          </div>

          {/* RIGHT: Illustration */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 -mr-20 mt-8">
            <div className="w-64 md:w-100 max-w-[600px]">
              <Image
                src="/images/tcpage1Img.png"
                alt="illustration of professional holding tools"
                width={400}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Career Fields Section ===== */}
      <section className="mx-auto text-center mt-40">
        <h1 className="text-3xl md:text-4xl font-bold text-[#545454] mb-12">
          Top Career Fields In New Zealand
        </h1>

        <section className="mx-auto max-w-screen-lg grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
          {CAREER_FIELDS.map((field, i) => (
            <div
              key={i}
              className="relative w-[320px] flex flex-col items-center overflow-hidden bg-white hover:bg-white hover:shadow-lg transition-all duration-300 pb-2 rounded-2xl"
            >
              {/* Image */}
              <div className="relative w-full h-[200px] overflow-hidden rounded-t-2xl">
                <Image
                  src={field.img}
                  alt={field.title}
                  fill
                  className="object-cover"
                  priority={i < 3}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col items-center justify-between py-6 space-y-4  w-full">
                <h3 className="text-lg font-bold text-[#545454] text-center">
                  {field.title}
                </h3>
                <p className="text-xs text-[#000000] text-center leading-tight" style={{ fontFamily: "DM Sans" }}>
                  {field.text}
                </p>
                <button
                  type="button"
                  className="bg-[#37D7D9] text-white text-xs px-8 py-1.5  font-black rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Explore
                </button>
              </div>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
