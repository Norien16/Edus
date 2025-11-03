"use client";

import React, { useRef, useState, useEffect, CSSProperties } from "react";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

type Tool = {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  // 🔹 Optional style overrides
  imageStyle?: CSSProperties;
  titleStyle?: CSSProperties;
  descriptionStyle?: CSSProperties;
  buttonStyle?: CSSProperties;
};

const tools: Tool[] = [
  {
    id: 1,
    title: "Career Pathway Test",
    description:
      "Helps you discover the best career paths based on your interests and strengths.",
    image: "/images/aipage2Img1.png",
    duration: "5 mins",
    imageStyle: { transform: "translateY(-10px) scale(1.5)" },
    titleStyle: { color: "#545454", fontSize: "27px" },
    descriptionStyle: { textAlign: "center", color: "#000000", fontSize: "18px"},
    buttonStyle: { backgroundColor: "#37D7D9", borderRadius: "50px",transform: "translateY(0px)"  },
  },
  {
    id: 2,
    title: "University/Course Shortlisting",
    description:
      "Find universities and courses that align with your career goals.",
    image: "/images/aipage2Img2.png",
    duration: "5 mins",
    imageStyle: { transform: "translateY(-50px) scale(0.8)" },
    titleStyle: { color: "#545454", fontSize: "25px", transform: "translateY(-80px)" },
    descriptionStyle: { maxWidth: "300px", margin: "0 auto" , transform: "translateY(-85px)",fontSize: "18px", color: "#000000",},
    buttonStyle: { backgroundColor: "#37D7D9", borderRadius: "50px", transform: "translateY(-60px)" },
  },
  {
    id: 3,
    title: "Visa Query Solver",
    description: "Estimate your eligibility for a specific country's visa.",
    image: "/images/aipage2Img3.png",
    duration: "5 mins",
    imageStyle: { width: "260px", transform: "translateY(-30px) scale(1)" },
    titleStyle: { color: "#545454", fontSize: "29px", transform: "translateY(-30px)" },
    descriptionStyle: { maxWidth: "300px", margin: "0 auto" , transform: "translateY(-30px)",fontSize: "20px", color: "#000000",},
    buttonStyle: { backgroundColor: "#37D7D9", transform: "translateY(10px)" },
  },
  {
    id: 4,
    title: "Chat With Me!",
    description:
      "Get real-time support for any study, visa, or career-related questions.",
    image: "/images/aipage2Img4.png",
    duration: "5 mins",
    imageStyle: { width: "260px", transform: "translateY(-30px) scale(0.95)" },
    titleStyle: { color: "#545454", fontSize: "28px", transform: "translateY(-40px)" },
    descriptionStyle: { maxWidth: "350px", margin: "0 auto" , transform: "translateY(-50px)",fontSize: "19px", color: "#000000",},
    buttonStyle: { backgroundColor: "#37D7D9", transform: "translateY(-30px)" },
  },
  {
    id: 5,
    title: "English Proficiency Test",
    description:
      "Understand your English level before taking official exams.",
    image: "/images/aipage2Img5.png",
    duration: "10 mins",
    imageStyle: { width: "260px", transform: "translateY(-50px) scale(0.8)" },
    titleStyle: { color: "#545454", fontSize: "27px", transform: "translateY(-70px)" },
    descriptionStyle: { maxWidth: "350px", margin: "0 auto" , transform: "translateY(-70px)",fontSize: "19px", color: "#000000",},
    buttonStyle: { backgroundColor: "#37D7D9", transform: "translateY(-30px)" },
  },
];

const AiPage2: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (direction === "left") {
      setActiveIndex((prev) => (prev - 1 + tools.length) % tools.length);
    } else {
      setActiveIndex((prev) => (prev + 1) % tools.length);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      const cards = carouselRef.current.children;
      const activeCard = cards[activeIndex] as HTMLElement;
      const container = carouselRef.current;
      if (activeCard) {
        const offset =
          activeCard.offsetLeft -
          container.offsetWidth / 2 +
          activeCard.offsetWidth / 2;
        container.scrollTo({ left: offset, behavior: "smooth" });
      }
    }
  }, [activeIndex]);

  return (
    <section className="min-h-screen bg-white flex flex-col items-center py-12 px-4 overflow-hidden -mt-15">
      {/* Title */}
      <h2 className="relative text-[#37D7D9] text-3xl font-semibold pb-2 mb-12 inline-block">
  AI-Assistant
  <span className="absolute -left-23 bottom-0 h-[4px] w-[350px] bg-gradient-to-r from-transparent via-[#37D7D9] to-transparent"></span>
</h2>

      {/* Carousel */}
      <div
        className="relative w-full max-w-9xl flex items-center justify-center"
        style={{ minHeight: "600px" }}
      >
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 bg-white border-2 border-gray-300 rounded-full p-4 shadow-lg z-30 hover:bg-gray-50"
        >
          <ChevronLeft className="text-[#00BFBF] w-12 h-12" />
        </button>

        {/* Scroll Container */}
        <div
          ref={carouselRef}
          className="flex overflow-hidden items-center justify-center relative w-full"
          style={{ perspective: "1400px", height: "600px" }}
        >
          {tools.map((tool, index) => {
            const isActive = index === activeIndex;
            
            // Calculate circular difference for infinite effect
            let diff = index - activeIndex;
            const halfLength = Math.floor(tools.length / 2);
            
            // Wrap around logic for smooth infinite carousel
            if (diff > halfLength) {
              diff = diff - tools.length;
            } else if (diff < -halfLength) {
              diff = diff + tools.length;
            }

            // 3D positions
            let transform = "";
            let zIndex = 10;

            if (isActive) {
              transform = "translateX(0) translateZ(0) rotateY(0deg) scale(1)";
              zIndex = 30;
            } else if (diff === -1) {
              transform =
                "translateX(-80%) translateZ(-200px) rotateY(15deg) scale(1)";
              zIndex = 20;
            } else if (diff === 1) {
              transform =
                "translateX(80%) translateZ(-200px) rotateY(-15deg) scale(1)";
              zIndex = 20;
            } else if (diff === -2) {
              transform =
                "translateX(-150%) translateZ(-350px) rotateY(20deg) scale(1)";
            } else if (diff === 2) {
              transform =
                "translateX(150%) translateZ(-350px) rotateY(-20deg) scale(1)";
            } else {
              transform = `translateX(${diff * 100}%) translateZ(-500px) scale(1)`;
            }

            return (
              <div
                key={tool.id}
                onClick={() => setActiveIndex(index)}
                className={`absolute flex-shrink-0 w-[400px] h-[520px] bg-white rounded-2xl shadow-xl p-10 text-center border-[3px] border-[#37D7D9] transition-all duration-500 cursor-pointer`}
                style={{
                  transform,
                  zIndex,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Duration */}
                <div className="flex items-center justify-center gap-1 text-[#666666] bg-[#E4FFFF] text-sm mb-4 border border-[#00BFBF] rounded-full px-3 py-1 w-fit mx-auto -translate-y-8">
                  <Clock className="text-[#00BFBF] w-4 h-4" />
                  <span>{tool.duration}</span>
                </div>

                {/* Image */}
                <div className="flex justify-center mb-4">
                  <img
                    src={tool.image}
                    alt={tool.title}
                    width="230"
                    height="230"
                    className="object-contain transition-transform duration-300"
                    style={tool.imageStyle}
                  />
                </div>

                {/* Title */}
                <h3
                  className="font-bold text-gray-800 text-lg mb-3"
                  style={tool.titleStyle}
                >
                  {tool.title}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-600 text-sm mb-6 leading-relaxed"
                  style={tool.descriptionStyle}
                >
                  {tool.description}
                </p>

                {/* Button */}
<Link
  href={
    tool.id === 1
      ? "/contactus/aiassistant/aitest3"
      : tool.id === 2
      ? "/"
      : tool.id === 3
      ? "/contactus/aiassistant/aitest2"
      : tool.id === 4
      ? "/contactus/aiassistant/aitest"
      : "/aiassistant/englishtest"
  }
>
  <button
    className="bg-[#00BFBF] text-xl text-white px-12 py-2.5 rounded-full font-semibold hover:bg-[#00a3a3] transition shadow-lg shadow-gray-400"
    style={tool.buttonStyle}
  >
    Take Test
  </button>
</Link>
              </div>
            );
          })}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 bg-white border-2 border-gray-300 rounded-full p-4 shadow-lg z-30 hover:bg-gray-50"
        >
          <ChevronRight className="text-[#00BFBF] w-12 h-12" />
        </button>
      </div>
    </section>
  );
};

export default AiPage2;