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
    image: "/images/stickImg1.png",
    title: "Personalized University Recommendations",
    description:
      "Our AI analyzes your academic profile, interests, and career goals to suggest the universities that best match you.",
    side: "right",
    titlePosition: "absolute top-37 left-1/2 ml-12 w-[40%]",
    descriptionPosition: "absolute top-49 left-1/2 ml-12 w-[40%]",
  },
  {
    image: "/images/stickImg2.png",
    title: "Course & Career Insights",
    description:
      "Get AI-driven guidance on the courses that align with your strengths and career ambitions.",
    side: "left",
    titlePosition: "absolute top-37 right-1/2 mr-12 w-[40%] text-right",
    descriptionPosition: "absolute top-49 right-1/2 mr-12 w-[40%] text-right",
  },
  {
    image: "/images/stickImg3.png",
    title: "University & Course Scoring",
    description:
      "Our platform ranks universities and courses based on fit, affordability, and outcomes.",
    side: "right",
    titlePosition: "absolute top-37 left-1/2 ml-12 w-[40%]",
    descriptionPosition: "absolute top-49 left-1/2 ml-12 w-[40%]",
  },
  {
    image: "/images/stickImg4.png",
    title: "Progress Tracking & Reports",
    description:
      "Monitor your test results, see insights evolve, and get actionable reports.",
    side: "left",
    titlePosition: "absolute top-37 right-1/2 mr-12 w-[40%] text-right",
    descriptionPosition: "absolute top-49 right-1/2 mr-12 w-[40%] text-right",
  },
];

const FLOAT_START_OFFSET = 150;
const FLOAT_END_OFFSET = 250;

export default function Slide1M() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [floatState, setFloatState] = useState<"top" | "float" | "bottom">("top");

  const updateLineHeight = () => {
    if (!sectionRef.current) return;
    const newHeight = Math.max(
      sectionRef.current.scrollHeight,
      sectionRef.current.clientHeight,
      300
    );
    setLineHeight(newHeight);
  };

  useEffect(() => {
    updateLineHeight();

    const onResize = () => updateLineHeight();
    window.addEventListener("resize", onResize);

    const imgs = sectionRef.current?.querySelectorAll("img") ?? [];
    const handleImgLoad = () => updateLineHeight();
    imgs.forEach((img) => {
      if ((img as HTMLImageElement).complete) return;
      img.addEventListener("load", handleImgLoad);
      img.addEventListener("error", handleImgLoad);
    });

    let ro: ResizeObserver | null = null;
    if (sectionRef.current && typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => updateLineHeight());
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
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionBottom = sectionTop + rect.height;
      const scrollY = window.scrollY;

      if (scrollY < sectionTop + FLOAT_START_OFFSET) setFloatState("top");
      else if (scrollY > sectionBottom - FLOAT_END_OFFSET) setFloatState("bottom");
      else setFloatState("float");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  
  const adjustedLineHeight = isMobile
    ? Math.min(lineHeight, 550)
    : lineHeight;

  // Teal line should stop 200px before the gray line ends (teal line height)
  const tealBottomTop = Math.max(0, adjustedLineHeight - 180);

  return (
    <section id="how-it-works" ref={sectionRef} className="relative py-20 bg-white">
      <h2
        className="text-3xl md:text-4xl font-bold text-center text-[#545454] mb-16"
        style={{ fontFamily: "DM Sans" }}
      >
        How it Works?
      </h2>

      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-0">
        {/* Gray Line - Left side on mobile, center on desktop */}
        <div
          className="absolute left-8 md:left-1/2 top-0 md:-translate-x-1/2 border-r-3 border-gray-400"
          style={{
            height: `${adjustedLineHeight}px`,
            transition: "height 220ms ease",
          }}
        />

        {/* Teal Line */}
        {floatState === "top" && (
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2" style={{ top: 0 }}>
            <TealLine />
          </div>
        )}
        {floatState === "float" && (
          <div className="fixed left-8 md:left-1/2 top-0 md:-translate-x-1/2 z-20">
            <TealLine />
          </div>
        )}
        {floatState === "bottom" && (
          <div
            className="absolute left-8 md:left-1/2 md:-translate-x-1/2"
            style={{ top: tealBottomTop }}
          >
            <TealLine />
          </div>
        )}

        {/* Steps - Reduced gap on mobile */}
        <div className="flex flex-col relative" style={{ gap: "2.5rem" }}>
          {steps.map((step, index) => (
            <div key={index} className="relative w-full min-h-[120px] md:min-h-[160px]">
              {/* Mobile Layout - All aligned horizontally */}
              <div className="flex items-start gap-4 md:hidden ml-8">
                {/* Image */}
                <div className="flex-shrink-0 mt-1">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                    onLoad={() =>
                      setTimeout(() => {
                        if (sectionRef.current) {
                          setLineHeight(
                            Math.max(
                              sectionRef.current.scrollHeight,
                              sectionRef.current.clientHeight,
                              300
                            )
                          );
                        }
                      }, 30)
                    }
                  />
                </div>
                
                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-base font-semibold text-gray-700 mb-2"
                    style={{ fontFamily: "Space Grotesk" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm text-[#6F6F6F] -translate-x-6 px-6 leading-relaxed"

                    style={{ fontFamily: "DM Sans" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Desktop Layout - Original alternating design */}
              <div className="hidden md:block">
                <div
                  className={`absolute z-20 top-15 ${
                    step.side === "left"
                      ? "left-[43%] -translate-x-1/2"
                      : "right-[43%] translate-x-1/2"
                  }`}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-20 h-20 object-contain"
                    onLoad={() =>
                      setTimeout(() => {
                        if (sectionRef.current) {
                          setLineHeight(
                            Math.max(
                              sectionRef.current.scrollHeight,
                              sectionRef.current.clientHeight,
                              300
                            )
                          );
                        }
                      }, 30)
                    }
                  />
                </div>

                <h3
                  className={`text-lg font-semibold text-gray-700 ${step.titlePosition}`}
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  {step.title}
                </h3>

                <p
                  className={`text-base text-[#6F6F6F] leading-relaxed ${step.descriptionPosition}`}
                  style={{ fontFamily: "DM Sans" }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TealLine() {
  return (
    <div className="w-[4px] h-[200px] bg-[#37D7D9] rounded-full relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[20px] h-36 bg-gradient-to-b from-white to-transparent" />
    </div>
  );
}