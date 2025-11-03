"use client";
import Image from "next/image";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "/images/globeImg.png",
    title: "Access the Right Universities & Courses",
    description:
      "Find programs that perfectly match your career goals and interests.",
  },
  {
    icon: "/images/starImg.png",
    title: "AI-Guided Insights & Community Support",
    description:
      "Make smarter decisions with AI-driven guidance and connect with peers abroad.",
  },
  {
    icon: "/images/bookImg.png",
    title: "Simplified Visa & Application Process",
    description:
      "Get step-by-step support to make your journey smooth and stress-free.",
  },
];

export default function WhyStudyAbroadM() {
  return (
    <section className="flex flex-col items-center justify-center -mt-5 bg-white px-6">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-[#545454] text-center -mb-5">
        Why Study Abroad with<br/> EduLinks?
      </h2>

      {/* Feature List */}
      <div className="w-full max-w-md py-15 space-y-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-white p-2 rounded-lg"
          >
            {/* Left Icon */}
            <div className="flex-shrink-0">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={60}
                height={60}
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Right Text */}
            <div className="flex-1 text-left">
              <h3 className="font-semibold text-[#545454] text-[17px] leading-tight">
                {feature.title}
              </h3>
              <p
                className="text-[#6F6F6F] text-[15px] leading-snug"
                style={{ fontFamily: "DM Sans" }}
              >
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
