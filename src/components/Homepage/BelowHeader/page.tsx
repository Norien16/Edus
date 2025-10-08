"use client";
import React, { useEffect, useRef, useState } from "react";

export default function BelowHeader() {
  const sectionRef = useRef(null);
  const placeholderRef = useRef(null);
  const [opacity, setOpacity] = useState(1);
  const [buttonTop, setButtonTop] = useState(0);

  // ---------- TWEAK THESE ----------
  const FADE_HEIGHT = 80; // px height of the bottom fade band
  const FADE_COLOR = "#ffffff"; // color to fade INTO (commonly page bg, change if not white)
  const SCROLL_THRESHOLD = 6; // px delta to ignore tiny scrolls
  // ---------------------------------

  // overlay visibility (true only while user is actively scrolling DOWN)
  const [showBottomFade, setShowBottomFade] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const placeholder = placeholderRef.current;
    if (!section || !placeholder) return;

    // measure the placeholder's absolute Y once and on resize
    const updatePosition = () => {
      const rect = placeholder.getBoundingClientRect();
      setButtonTop(rect.top + window.scrollY); // absolute page Y
    };
    updatePosition();
    window.addEventListener("resize", updatePosition);

    // Buttons fade threshold
    const fadeDistance = 80;

    // use rAF loop for smoothness of button fade
    let rafId = null;
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

    // initial run and listener
    onScrollForButtons();
    window.addEventListener("scroll", onScrollForButtons, { passive: true });

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", onScrollForButtons);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // separate effect just for scroll direction -> controls bottom fade overlay
  useEffect(() => {
    let lastY = window.scrollY || 0;
    let raf = 0;

    const onScrollDir = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const delta = y - lastY;

        if (Math.abs(delta) > SCROLL_THRESHOLD) {
          // delta < 0 => scrolling up; delta > 0 => scrolling down
          if (delta > 0) {
            // scrolling down → show fade
            setShowBottomFade(true);
          } else {
            // scrolling up → hide fade
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
  className="relative flex flex-col md:flex-row bg-[#DFFFFF] items-center justify-center px-6 md:px-20 lg:px-40 xl:px-60 2xl:px-80 py-20 pt-30 overflow-hidden"
>
  {/* Content */}
  <div className="text-center relative z-20">
    <h1
      className="text-3xl md:text-4xl font-bold text-gray-700 leading-snug"
      style={{ fontFamily: "Space Grotesk" }}
    >
      AI-Powered <span className="underline decoration-[#37D7D9] underline-offset-4">career</span>{" "}
      Launchpad Built For<br /> Students Who <span>Dream Big</span>
    </h1>

    <p
      className="text-[#666666] pt-8 text-base md:text-lg whitespace-normal text-center"
      style={{ fontFamily: "DM Sans" }}
    >
      Edulinks AI helps you discover your ideal career, shortlist
      universities & courses, and calculate visa success<br /> all in one smart,
      personalized journey.
    </p>

    {/* Placeholder */}
    <div
      id="floating-buttons"
      ref={placeholderRef}
      className="pt-12 md:pt-20 opacity-0 pointer-events-none"
    >
      <div className="flex gap-4 flex-col sm:flex-row items-center justify-center">
        <button className="px-6 py-3 rounded-full bg-[#37D7D9] text-white font-medium shadow-md w-full sm:w-auto">
          Book Online Counselling
        </button>
        <button className="px-6 md:px-16 py-3 rounded-full border border-[#37D7D9] text-[#37D7D9] font-medium shadow-md w-full sm:w-auto">
          Try Now
        </button>
      </div>
    </div>
  </div>

  {/* Floating Buttons */}
  <div
    style={{
      position: "fixed",
      top: `calc(${buttonTop}px + 4rem)`,
      left: "50%",
      transform: "translateX(-50%)",
      opacity,
      transition: "opacity 0.01s linear",
      pointerEvents: opacity === 0 ? "none" : "auto",
      zIndex: 50,
    }}
    className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto px-4"
  >
    <button className="px-6 md:px-3 py-2.5 rounded-full text-white bg-[#37D7D9] font-medium hover:bg-[#00B7C1] hover:shadow-md transition">
      Book Online Counselling
    </button>
    <button className="px-6 md:px-12 py-2.5 rounded-full bg-white border border-[#37D7D9] text-[#37D7D9] font-medium hover:bg-teal-50 hover:shadow-md transition">
      Try Now
    </button>
  </div>
</section>

  );
}




