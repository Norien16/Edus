"use client";
import React, { useEffect, useRef, useState } from "react";

type Step = {
  image: string;
  title: string;
  description: string;
  side: "left" | "right";
  titlePosition?: string;
  descriptionPosition?: string;
};

const steps: Step[] = [
  {
    image: "/images/stick2Img1.png",
    title: "Comprehensive Skill Evaluation",
    description:
      "Our AI evaluates your performance across four core areas — reading, writing, listening, and speaking — to give you an accurate overview of your English proficiency.",
    side: "right",
    titlePosition: "absolute top-37 left-1/2 ml-12 w-[40%]",
    descriptionPosition: "absolute top-49 left-1/2 ml-12 w-[40%]",
  },
  {
    image: "/images/stick2Img2.png",
    title: "Instant Performance Feedback",
    description:
      "Get real-time insights and detailed feedback on your strengths and areas for improvement so you can focus your preparation effectively..",
    side: "left",
    titlePosition: "absolute top-37 right-1/2 mr-12 w-[40%] text-right",
    descriptionPosition: "absolute top-49 right-1/2 mr-12 w-[40%] text-right",
  },
  {
    image: "/images/stick2Img3.png",
    title: "AI-Based Scoring System",
    description:
      "Our intelligent scoring model aligns with global testing standards like IELTS and TOEFL, giving you a realistic estimate of your expected band range.",
    side: "right",
    titlePosition: "absolute top-37 left-1/2 ml-12 w-[40%]",
    descriptionPosition: "absolute top-49 left-1/2 ml-12 w-[40%]",
  },
  {
    image: "/images/stick2Img4.png",
    title: "Progress Reports & Improvement Tips",
    description:
      "Track your progress over time with AI-generated reports and personalized suggestions to help you improve faster.",
    side: "left",
    titlePosition: "absolute top-37 right-1/2 mr-12 w-[40%] text-right",
    descriptionPosition: "absolute top-49 right-1/2 mr-12 w-[40%] text-right",
  },
];

// 👇 control floating here
const FLOAT_START_OFFSET = 150; // px from section top where floating begins
const FLOAT_END_OFFSET = 50; // px from section bottom where floating ends

export default function Slide2Page1() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [floatState, setFloatState] = useState<"top" | "float" | "bottom">("top");

  // update lineHeight based on current section content/size
  const updateLineHeight = () => {
    if (!sectionRef.current) return;
    // use scrollHeight so absolutely positioned inner content is accounted for
    const newHeight = Math.max(sectionRef.current.scrollHeight, sectionRef.current.clientHeight, 300);
    setLineHeight(newHeight);
  };

  useEffect(() => {
    updateLineHeight();

    // update on resize
    const onResize = () => {
      updateLineHeight();
    };
    window.addEventListener("resize", onResize);

    // update when fonts/images load (images inside the section)
    const imgs = sectionRef.current?.querySelectorAll("img") ?? [];
    const handleImgLoad = () => updateLineHeight();
    imgs.forEach((img) => {
      if ((img as HTMLImageElement).complete) return;
      img.addEventListener("load", handleImgLoad);
      img.addEventListener("error", handleImgLoad);
    });

    // ResizeObserver to react to changes in section size/content
    let ro: ResizeObserver | null = null;
    if (sectionRef.current && typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => {
        updateLineHeight();
      });
      ro.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener("resize", onResize);
      imgs.forEach((img) => {
        img.removeEventListener("load", handleImgLoad);
        img.removeEventListener("error", handleImgLoad);
      });
      if (ro && sectionRef.current) ro.unobserve(sectionRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // floatState is determined by the section position relative to scroll
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      // compute top/bottom relative to document
      const sectionTop = rect.top + window.scrollY;
      const sectionBottom = sectionTop + rect.height;
      const scrollY = window.scrollY;

      if (scrollY < sectionTop + FLOAT_START_OFFSET) {
        setFloatState("top"); // before float
      } else if (scrollY > sectionBottom - FLOAT_END_OFFSET) {
        setFloatState("bottom"); // after float
      } else {
        setFloatState("float"); // floating
      }
    };

    // initial and bind
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // small helper for teal bottom position: clamp to >= 0
  const tealBottomTop = Math.max(0, lineHeight - 300);

  return (
    <section id="how-it-works" ref={sectionRef} className="relative py-20">
      {/* Heading */}
      <h2
        className="text-3xl md:text-4xl font-bold text-center text-[#545454] mb-16"
        style={{ fontFamily: "DM Sans" }}
      >
        How it Works?
      </h2>

      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-0">
        {/* Gray Line */}
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 border-r-3 border-gray-400"
          // use a numeric px height so it's stable across breakpoints
          style={{ height: `${lineHeight}px`, transition: "height 220ms ease" }}
        />

        {/* Teal Line (position controlled by state) */}
        {floatState === "top" && (
          <div className="absolute left-1/2 -translate-x-1/2" style={{ top: 0 }}>
            <TealLine />
          </div>
        )}
        {floatState === "float" && (
          <div className="fixed left-1/2 top-0 -translate-x-1/2 z-20">
            <TealLine />
          </div>
        )}
        {floatState === "bottom" && (
          <div className="absolute left-1/2 -translate-x-1/2" style={{ top: tealBottomTop }}>
            <TealLine />
          </div>
        )}

        {/* Steps */}
        {/* NOTE: keep relative container and absolute children as in original so placements remain unchanged */}
        <div className="flex flex-col relative" style={{ gap: "5.5rem" }}>
          {steps.map((step, index) => (
            <div key={index} className="relative w-full min-h-[160px]">
              {/* Image (made responsive in size so it scales but placement unchanged) */}
              <div
                className={`absolute z-20 top-15 ${
                  step.side === "left"
                    ? "left-[43%] -translate-x-1/2"
                    : "right-[43%] translate-x-1/2"
                }`}
              >
                {/* responsive sizes: small -> smaller, md -> original */}
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
                  // ensure height recalculation after image load
                  onLoad={() => {
                    // small microtask to allow layout to settle
                    setTimeout(() => {
                      if (sectionRef.current) {
                        setLineHeight(Math.max(sectionRef.current.scrollHeight, sectionRef.current.clientHeight, 300));
                      }
                    }, 30);
                  }}
                />
              </div>

              {/* Title */}
              <h3
                className={`text-lg font-semibold text-gray-700 ${step.titlePosition}`}
                style={{ fontFamily: "Space Grotesk" }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm md:text-base text-[#6F6F6F] leading-relaxed ${step.descriptionPosition}`}
                style={{ fontFamily: "DM Sans" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ✅ reusable teal line component
function TealLine() {
  return (
    <div className="w-[6px] h-[300px] bg-[#37D7D9] rounded-full relative">
      {/* top fade */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[20px] h-36 bg-gradient-to-b from-white to-transparent" />
    </div>
  );
}
