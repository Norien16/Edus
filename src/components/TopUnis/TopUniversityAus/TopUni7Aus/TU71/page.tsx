"use client";
import React, { useEffect, useRef, useState } from "react";

export default function TU71() {
  const sectionRef = useRef(null);
  const placeholderRef = useRef(null);
  const [opacity, setOpacity] = useState(1);
  const [buttonTop, setButtonTop] = useState(0);

  const FADE_HEIGHT = 80;
  const FADE_COLOR = "#ffffff";
  const SCROLL_THRESHOLD = 6;

  const [showBottomFade, setShowBottomFade] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const placeholder = placeholderRef.current;
    if (!section || !placeholder) return;

    const updatePosition = () => {
      const rect = placeholder.getBoundingClientRect();
      setButtonTop(rect.top + window.scrollY);
    };
    updatePosition();
    window.addEventListener("resize", updatePosition);

    const fadeDistance = 100;
    let rafId: number | null = null;
    const onScrollForButtons = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        if (rect.top > 0) {
          setOpacity(1);
        } else {
          const scrolledPast = Math.min(-rect.top, fadeDistance);
          const newOpacity = Math.max(0, 1 - scrolledPast / fadeDistance);
          setOpacity(newOpacity);
        }
      });
    };

    onScrollForButtons();
    window.addEventListener("scroll", onScrollForButtons, { passive: true });

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", onScrollForButtons);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    let lastY = window.scrollY || 0;
    let raf = 0;

    const onScrollDir = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const delta = y - lastY;

        if (Math.abs(delta) > SCROLL_THRESHOLD) {
          if (delta > 0) {
            setShowBottomFade(true);
          } else {
            setShowBottomFade(false);
          }
          lastY = y;
        }
      });
    };

    window.addEventListener("scroll", onScrollDir, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScrollDir);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="below-header"
      ref={sectionRef}
      className="relative flex flex-col md:flex-row bg-[#DFFFFF] items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 py-30 overflow-hidden"
    >
      {/* ===== bottom gradient overlay ===== */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full pointer-events-none transition-opacity duration-300 ease-in-out"
        style={{
          height: `${FADE_HEIGHT}px`,
          background: `linear-gradient(to top, ${FADE_COLOR}, rgba(255,255,255,0))`,
          opacity: showBottomFade ? 1 : 0,
          zIndex: 10,
        }}
      />

      {/* ===== content ===== */}
      <div className="text-center relative z-20 max-w-6xl">
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#545454] leading-snug"
          style={{ fontFamily: "Space Grotesk" }}
        >
         The University of Queensland
        </h1>
        <p className="text-[#6F6F6F] text-md leading-relaxed text-center" style={{ fontFamily: "DM Sans" }}>
            Brisbane, Queensland, Australia
        </p>

        <p
          className="text-[#6F6F6F] pt-6 leading-relaxed  px-15 text-center"
          style={{ fontFamily: "DM Sans" }}
        >
          <span className="block text-lg">
            Established 1909, The University of Queensland is a world-class research institution located in Brisbane with over 55,000 students including 21,000+ international students from 141+ countries. Ranked among the global top 50 and known for innovation, impact and strong industries.
            </span>
        </p>

        {/* invisible placeholder */}
        <div
          id="floating-buttons"
          ref={placeholderRef}
          className="pt-12 opacity-0 pointer-events-none"
        >
          <div className="flex gap-4 items-center justify-center">
            <button className="px-6 py-3 rounded-full bg-[#37D7D9] text-white font-medium shadow-md">
              View Universities
            </button>
          </div>
        </div>
      </div>

      {/* Fixed floating buttons */}
      <div
        style={{
          position: "fixed",
          top: `${buttonTop + 70}px`,
          left: "50%",
          transform: "translateX(-50%)",
          opacity,
          transition: "opacity 0.01s linear",
          pointerEvents: opacity === 0 ? "none" : "auto",
          zIndex: 50,
        }}
        className="flex gap-4 pt-5 items-center justify-center"
      >
        <button className="px-10 py-2.5 translate-y-4 rounded-full text-white bg-[#37D7D9] font-medium hover:bg-[#00B7C1] hover:shadow-md hover:shadow-gray-400 transition-shadow duration-300 ease-in-out">
          Apply Now
        </button>
      </div>
    </section>
  );
}
