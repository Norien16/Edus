// app/overview/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overview",
  description: "Overview — career prospects and top career fields in Australia",
};

const CAREER_FIELDS = [
  {
    img: "/images/tcpage1Img1.png",
    title: "Engineering & Technology",
    text: "Design, build, and innovate. High demand in infrastructure, energy, and automation industries.",
    link: "/maincareer/topcareer1/careeraus1",
  },
  {
    img: "/images/tcpage1Img2.png",
    title: "Health Sciences",
    text: "Join Australia’s fast-growing healthcare sector with roles in nursing, medicine, and public health.",
    link: "/overview/health-sciences",
  },
  {
    img: "/images/tcpage1Img2.png",
    title: "Business & Management",
    text: "Shape industries with leadership, marketing, and financial expertise.",
    link: "/overview/business-management",
  },
  {
    img: "/images/tcpage1Img1.png",
    title: "Information Technology & AI",
    text: "Be part of the digital future with data science, cybersecurity, and artificial intelligence.",
    link: "/overview/information-technology-ai",
  },
  {
    img: "/images/tcpage1Img2.png",
    title: "Education & Teaching",
    text: "Contribute to Australia’s education system — from early learning to higher education.",
    link: "/overview/education-teaching",
  },
  {
    img: "/images/tcpage1Img2.png",
    title: "Hospitality & Tourism",
    text: "Thrive in Australia’s dynamic tourism and hospitality industry with global exposure.",
    link: "/overview/hospitality-tourism",
  },
];

export default function OverviewPage() {
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
              Australia offers excellent career prospects across diverse<br />
              industries — from engineering and healthcare to technology,<br />
              business, and education. With skill shortages and strong post-<br />
              study work options, international graduates have access to<br />
              rewarding job opportunities and long-term growth potential.
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
          Top Career Fields In Australia
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
              <div className="flex flex-col items-center justify-between py-6 space-y-4 w-full">
                <h3 className="text-lg font-bold text-[#545454] text-center">
                  {field.title}
                </h3>
                <p
                  className="text-xs text-[#000000] text-center leading-tight"
                  style={{ fontFamily: "DM Sans" }}
                >
                  {field.text}
                </p>

                {/* ✅ Each Explore button now links individually */}
                <Link
                  href={field.link}
                  className="bg-[#37D7D9] text-white text-xs px-8 py-1.5 font-black rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
