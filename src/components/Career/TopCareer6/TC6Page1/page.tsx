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
    title: "Information Technology & AI",
    text: "Lead the global tech movement with opportunities in AI, data science, software engineering, and cybersecurity.",
  },
  {
    img: "/images/tcpage1Img2.png",
    title: "Healthcare & Life Sciences",
    text: "Join one of the fastest-growing industries — including nursing, biotechnology, and medical research roles.",
  },
  {
    img: "/images/tcpage1Img2.png",
    title: "Engineering & Manufacturing",
    text: "Drive innovation in aerospace, civil, mechanical, and electrical engineering across diverse industries.",
  },
  {
    img: "/images/tcpage1Img1.png",
    title: "Business & Management",
    text: "Shape the global corporate world with leadership roles in finance, marketing, and entrepreneurship.",
  },
  {
    img: "/images/tcpage1Img2.png",
    title: "Education & Research",
    text: "Contribute to academic excellence and innovation in the U.S. education and research sectors.",
  },
  {
    img: "/images/tcpage1Img2.png",
    title: "Hospitality & Tourism",
    text: "Work in the U.S.’s dynamic hospitality, travel, and event management industries.",
  },
];

export default function TC6Page1 () {
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
              The United States remains one of the most dynamic job markets<br/> in the world, offering
               opportunities across technology, healthcare,<br/> business, and engineering. With a strong
                economy, world-leading<br/> innovation, and flexible work options for international graduates,<br/>
                 the USA provides both high salaries and long-term career<br/> potential.
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
          Top Career Fields In the USA
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
