"use client";
import React, { useState } from "react";
import Image from "next/image";

type Service = {
  id: number;
  title: string | string[];
  description: string;
  staticIcon: string;
  animatedIcon: string;
  color: string;
  animatedIconPosition: string; // 👈 NEW FIELD
};

const Page17: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: ["UI/UX", "Designing"],
      description:
        "We craft intuitive & visually engaging interfaces that put user experience at the center...",
      staticIcon: "/images/page17Img1.png",
      animatedIcon: "/images/page17gif1.gif",
      color: "bg-gray-100",
      animatedIconPosition: "-top-1 right-60", // 👈 custom position
    },
    {
      id: 2,
      title: ["Application", "Development"],
      description:
        "We design and develop high-performance applications...",
      staticIcon: "/images/page17Img2.png",
      animatedIcon: "/images/Gifs/page17gif.gif",
      color: "bg-gray-100",
      animatedIconPosition: "bottom-0 right-0", // 👈 custom position
    },
    {
      id: 3,
      title: ["Web", "Development"],
      description:
        "We build powerful, scalable, and user-friendly websites...",
      staticIcon: "/svgs/webdevlaptop.svg",
      animatedIcon: "/gifs/webdevlaptop.gif",
      color: "bg-gray-100",
      animatedIconPosition: "bottom-4 left-4", // 👈 custom position
    },
    {
      id: 4,
      title: ["Performance", "Marketing"],
      description:
        "We create data-driven marketing strategies...",
      staticIcon: "/gifs/performancemarketing.png",
      animatedIcon: "/gifs/performancegif.gif",
      color: "bg-gray-100",
      animatedIconPosition: "top-6 left-6", // 👈 custom position
    },
    {
      id: 5,
      title: "SEO",
      description:
        "We optimize your digital presence with smart SEO strategies...",
      staticIcon: "/gifs/seo.png",
      animatedIcon: "/gifs/seogif.gif",
      color: "bg-gray-100",
      animatedIconPosition: "bottom-6 right-8", // 👈 custom position
    },
    {
      id: 6,
      title: ["Social Media", "Management"],
      description:
        "From content creation to audience engagement...",
      staticIcon: "/svgs/socialmediamanagement.svg",
      animatedIcon: "/gifs/sattelite.gif",
      color: "bg-gray-100",
      animatedIconPosition: "top-0 left-0", // 👈 custom position
    },
    {
      id: 7,
      title: "Branding",
      description:
        "From strategy to execution, we create cohesive brand identities...",
      staticIcon: "/svgs/branding.svg",
      animatedIcon: "/gifs/brandinganimated.gif",
      color: "bg-gray-100",
      animatedIconPosition: "bottom-2 right-0", // 👈 custom position
    },
    {
      id: 8,
      title: "Artificial Intelligence Modernization",
      description:
        "We modernize your digital ecosystem with AI-powered solutions...",
      staticIcon: "/svgs/aimodernization.svg",
      animatedIcon: "/gifs/aianimated.gif",
      color: "bg-gray-100",
      animatedIconPosition: "top-8 right-4", // 👈 custom position
    },
  ];

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="w-full mt-[300px] relative z-20 hidden sm:block">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className={`${service.color} rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer group hover:shadow-xl h-[500px]`}
            style={{
              backgroundColor:
                hoveredCard === service.id ? "#ee8001" : "#f3f4f6",
            }}
            onMouseEnter={() => setHoveredCard(service.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* ===== Icon Section ===== */}
            <div className="relative mb-4">
              <Image
                src={service.staticIcon}
                alt={`${Array.isArray(service.title) ? service.title.join(" ") : service.title} static`}
                width={55}
                height={55}
                className={`object-contain transition-all duration-300 ${
                  hoveredCard === service.id
                    ? "opacity-0 scale-0"
                    : "opacity-100 scale-100"
                }`}
              />

              {/* Animated Icon with individual positioning */}
              <Image
                src={service.animatedIcon}
                alt={`${Array.isArray(service.title) ? service.title.join(" ") : service.title} animation`}
                width={50}
                height={50}
                className={`object-contain absolute ${service.animatedIconPosition} transition-all duration-300 ${
                  hoveredCard === service.id
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-0"
                }`}
              />
            </div>

            {/* ===== Content Section ===== */}
            <div className="flex-grow">
              <h3
                className={`text-[22px] mt-2 font-bold mb-3 ${
                  hoveredCard === service.id ? "text-white" : "text-black"
                }`}
              >
                {Array.isArray(service.title)
                  ? service.title.map((word, i) => (
                      <React.Fragment key={i}>
                        {word}
                        <br />
                      </React.Fragment>
                    ))
                  : service.title}
              </h3>
              <p
                className={`text-[17px] leading-relaxed ${
                  hoveredCard === service.id ? "text-white" : "text-black"
                }`}
              >
                {service.description}
              </p>
            </div>

            {/* ===== Button Section ===== */}
            <div className="mt-6 relative">
              <button
                className={`bg-orange-500 text-white font-semibold rounded-full flex items-center justify-center transition-all duration-500 ease-out relative shadow-[0px_3px_0_#000000] overflow-hidden ${
                  hoveredCard === service.id
                    ? "w-[90%] py-3 px-6 shadow-[2px_3px_0_#000000]"
                    : "w-12 h-12"
                }`}
              >
                <span
                  className={`transition-all duration-300 text-[20px] whitespace-nowrap ${
                    hoveredCard === service.id
                      ? "opacity-100 mr-2"
                      : "opacity-0 absolute"
                  }`}
                >
                  Know More
                </span>
                <svg
                  className={`w-[23px] h-[23px] transition-transform duration-300 ${
                    hoveredCard === service.id ? "translate-x-1" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M17 7H8M17 7V16"  
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page17;
