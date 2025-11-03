"use client";
import Image from "next/image";
import React from "react";

const UNIVERSITIES = [
  { img: "/images/mcpage1Img6.png", title: "University Of Melbourne" },
  { img: "/images/mcpage1Img7.png", title: "The University Of Sydney" },
  { img: "/images/mcpage1Img8.png", title: "UNSW Sydney" },
  { img: "/images/mcpage1Img9.png", title: "Australian National University" },
  { img: "/images/mcpage1Img10.png", title: "Monash University" },
  { img: "/images/mcpage1Img11.png", title: "University Of Queensland" },
];

const REASONS = [
  {
    icon: (
      <Image
        src="/images/mcpage1Img1.svg"
        alt="icon-university"
        width={40}
        height={40}
        className="w-8 h-8"
      />
    ),
    text: (
      <>
        Many Australian Universities Are Ranked In Top <br />
        100 For Engineering & Technology Subjects.
      </>
    ),
  },
  {
    icon: (
      <Image
        src="/images/mcpage1Img2.svg"
        alt="icon-graduates"
        width={40}
        height={40}
        className="w-8 h-8"
      />
    ),
    text: (
      <>
        Graduates In Demand: Over 80% Of Engineering <br />
        Graduates Find Employment Within Six Months.
      </>
    ),
  },
  {
    icon: (
      <Image
        src="/images/mcpage1Img3.svg"
        alt="icon-industry"
        width={40}
        height={40}
        className="w-8 h-8"
      />
    ),
    text: (
      <>
        Strong Industry Tie-Ups And Internships <br />
        Embedded In Many Programs.
      </>
    ),
  },
  {
    icon: (
      <Image
        src="/images/mcpage1Img4.svg"
        alt="icon-briefcase"
        width={40}
        height={40}
        className="w-8 h-8"
      />
    ),
    text: (
      <>
        Opportunity To Join Australia’s Professional Year <br />
        Program In Engineering (If Eligible) With Work <br />
        Placement And Migration Incentives.
      </>
    ),
  },
  {
    icon: (
      <Image
        src="/images/mcpage1Img5.svg"
        alt="icon-users"
        width={40}
        height={40}
        className="w-8 h-8"
      />
    ),
    text: (
      <>
        Develop Both Technical Skills And Transferable <br />
        Skills (Teamwork, Problem Solving, Project <br /> Management).
      </>
    ),
  },
];

export default function McMpage1() {
  return (
    <main className="min-h-screen bg-white px-6">
      {/* Header */}
      <div className="mx-auto max-w-screen-xl text-center mb-16">
        <h1 className="text-3xl font-bold text-[#545454] leading-snug">
          Why Study Engineering In <br /> Australia
        </h1>
      </div>

      {/* Reasons Section */}
      <section className="mx-auto max-w-screen-lg flex flex-col space-y-10">
        {REASONS.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-5 text-left"
          >
            {/* Icon */}
            <div className="flex-shrink-0">{item.icon}</div>

            {/* Text */}
            <p className="text-base md:text-xl font-semibold text-[#545454] leading-snug">
              {item.text}
            </p>
          </div>
        ))}
      </section>

      {/* Top Universities Section */}
      <div className="max-w-[1100px] mx-auto px-6 mt-15">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#545454]">
            Top Universities In Australia
          </h1>
        </header>

        <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-6 justify-items-center">
  {UNIVERSITIES.map((uni, i) => (
    <div
      key={i}
      className="relative w-[190px] flex flex-col items-center overflow-hidden bg-white shadow-lg pb-6 rounded-2xl"
    >
      {/* Image */}
      <div className="relative w-full h-[130px] overflow-hidden rounded-t-2xl">
        <Image
          src={uni.img}
          alt={uni.title}
          fill
          className="object-cover"
          priority={i < 3}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-between py-4 space-y-2 w-full">
        <h3 className="text-sm sm:text-base font-bold text-[#545454] text-center">
          {uni.title}
        </h3>
        <button
          type="button"
          className="bg-[#37D7D9] text-white text-[10px] sm:text-xs px-4 py-1.5 font-bold rounded-full shadow-md hover:shadow-xl transition-all duration-300"
        >
          Know more
        </button>
      </div>
    </div>
  ))}
</section>

      </div>
    </main>
  );
}
