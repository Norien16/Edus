// components/WhyStudyAbroad.tsx
"use client";
import Image from "next/image";

interface Feature {
  icon: string;
  hoverIcon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "/images/globeImg.png",
    hoverIcon: "/images/globeHovImg.png",
    title: "Access the Right Universities & Courses",
    description:
      "Find programs that perfectly match your career goals and interests.",
  },
  {
    icon: "/images/starImg.png",
    hoverIcon: "/images/starHovImg.png",
    title: "AI-Guided Insights & Community Support",
    description:
      "Make smarter decisions with AI-driven guidance and connect with peers abroad.",
  },
  {
    icon: "/images/bookImg.png",
    hoverIcon: "/images/bookHovImg.png",
    title: "Simplified Visa & Application Process",
    description:
      "Get step-by-step support to make your journey smooth and stress-free.",
  },
];

export default function WhyStudyAbroad() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 py-16 bg-white px-4 sm:px-6 md:px-0">
      {/* Left Illustration */}
      <div className="w-full md:w-1/2 flex">
        <Image
          src="/images/SDImg.png"
          alt="Study Abroad Illustration"
          width={400}
          height={400}
          className="w-[500px] max-w-full h-auto"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 space-y-16 self-start mt-6 md:mt-25 pr-0 md:pr-70">
        <h2 className="text-2xl md:text-[40px] font-bold text-[#545454] whitespace-nowrap -translate-x-0 md:-translate-x-20 text-center md:text-left">
          Why Study Abroad with EduLinks?
        </h2>

        <div className="space-y-8">
          {features.map((feature, index) => (
            // Make the whole feature item a group
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-start items-center -translate-y-0 md:-translate-y-4 group"
            >
              {/* Icon with hover overlay */}
              <div className="relative flex-shrink-0 w-auto h-auto flex items-center justify-center rounded-full -translate-x-0 md:-translate-x-12 mb-4 sm:mb-0">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={500}
                  height={500}
                  className="w-15 h-auto"
                />
                <Image
                  src={feature.hoverIcon}
                  alt={`${feature.title} Hover`}
                  width={500}
                  height={500}
                  className="w-15 h-auto absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Text */}
              <div className="text-center sm:text-left cursor-pointer">
                {" "}
                {/* added cursor-pointer */}
                <h3 className="font-semibold text-[#545454] text-[22.5px] whitespace-nowrap -translate-x-0 md:-translate-x-6 -translate-y-0 md:-translate-y-1">
                  {feature.title}
                </h3>
                <p
                  className="text-[#6F6F6F] text-[21px] -translate-x-0 md:-translate-x-6 -translate-y-1 md:-translate-y-1"
                  style={{ fontFamily: "DM Sans" }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
