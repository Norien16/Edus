"use client";
import Image from "next/image";
import React from "react";

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
    link: "/career-fields/health-sciences",
  },
  {
    img: "/images/tcpage1Img2.png",
    title: "Business & Management",
    text: "Shape industries with leadership, marketing, and financial expertise.",
    link: "/career-fields/business-and-management",
  },
  {
    img: "/images/tcpage1Img1.png",
    title: "Information Technology & AI",
    text: "Be part of the digital future with data science, cybersecurity, and artificial intelligence.",
    link: "/career-fields/information-technology-and-ai",
  },
  {
    img: "/images/tcpage1Img2.png",
    title: "Education & Teaching",
    text: "Contribute to Australia’s education system — from early learning to higher education.",
    link: "/career-fields/education-and-teaching",
  },
  {
    img: "/images/tcpage1Img2.png",
    title: "Hospitality & Tourism",
    text: "Thrive in Australia’s dynamic tourism and hospitality industry with global exposure.",
    link: "/career-fields/hospitality-and-tourism",
  },
];

export default function Tc1Mpage1() {
  return (
    <main className="min-h-screen bg-white pt-20 pb-16">
      {/* ===== Top Image Section ===== */}
      <div className="relative w-full h-[270px]">
        <Image
          src="/images/tcpage1Img.png"
          alt="Career Overview in Australia"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* ===== Overview Text Section ===== */}
      <section className="text-center px-6 pt-8 pb-10">
        <h1 className="text-3xl font-semibold text-[#545454] mb-8">
          Overview
        </h1>
        <p className="text-[#000000] text-base leading-relaxed">
          Australia offers excellent career prospects across diverse industries —
          from engineering and healthcare to technology, business, and education.
          With skill shortages and strong post-study work options, international
          graduates have access to rewarding job opportunities and long-term
          growth potential.
        </p>
      </section>

      {/* ===== Career Fields Section ===== */}
      <section className="text-center px-4">
        <h2 className="text-3xl font-semibold text-[#545454] mb-8">
          Top Career Fields In<br />Australia
        </h2>

        <div className="grid grid-cols-2 gap-y-5 gap-x-4 justify-items-center">
          {CAREER_FIELDS.map((field, i) => (
            <div
              key={i}
              className="w-full max-w-[200px] bg-white rounded-2xl overflow-hidden flex flex-col items-center shadow-xl"
            >
              {/* Image */}
              <div className="relative w-full h-[120px] overflow-hidden">
                <Image
                  src={field.img}
                  alt={field.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col items-center px-2 py-4 space-y-3">
                <h3 className="text-xs font-semibold text-[#545454] text-center leading-snug">
                  {field.title}
                </h3>
                <p className="text-[8px] text-[#000000] text-center leading-tight">
                  {field.text}
                </p>
                <button
                  onClick={() => (window.location.href = field.link)}
                  className="bg-[#37D7D9] text-white text-xs px-2.5 py-1 rounded-full shadow-lg hover:bg-[#2fc4c6] transition-colors duration-300"
                >
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
