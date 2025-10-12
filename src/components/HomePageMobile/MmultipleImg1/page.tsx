"use client";
import React, { useState, useEffect, useRef } from "react";

const MmultipleImg1 = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [imagePositions, setImagePositions] = useState<any[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  const stickyConfig = [
    { trigger: 2358, top: 28 },
    { trigger: 2760, top: 37 },
    { trigger: 3195, top: 46 },
    { trigger: 3500, top: 55 },
    { trigger: 4000, top: 64 },
    { trigger: 4450, top: 73 },
  ];

  const stickyButtonTrigger = 4500;

  useEffect(() => {
    const basePinnedTop = 28;
    const overlayRange = 220;

    const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

    const handleScroll = () => {
      const currentScroll = window.scrollY || window.pageYOffset || 0;
      setScrollPosition(currentScroll);

      const positions = imageRefs.current
        .map((ref, index) => {
          if (ref) {
            const rect = ref.getBoundingClientRect();
            const config = stickyConfig[index];
            const isSticky = currentScroll >= config.trigger;
            const start = Math.max(0, config.trigger - overlayRange);
            const progress = clamp(
              (currentScroll - start) / (overlayRange || 1),
              0,
              1
            );

            return {
              index,
              top: rect.top,
              bottom: rect.bottom,
              offsetTop: ref.offsetTop,
              inView: rect.top < window.innerHeight && rect.bottom > 0,
              isSticky,
              pinnedTop: null,
              overlayProgress: progress,
            };
          }
          return null;
        })
        .filter(Boolean) as any[];

      const stuck = positions.filter((p) => p.isSticky).sort((a, b) => a.index - b.index);
      stuck.forEach((p, rank) => {
        p.pinnedTop = basePinnedTop * (rank + 1);
        p.overlayProgress = 1;
      });

      setImagePositions(positions);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const getImageStyle = (index: number) => {
    const config = stickyConfig[index];
    const pos = imagePositions.find((p) => p.index === index) || {};
    const overlayProgress = pos.overlayProgress ?? 0;
    const isSticky = pos.isSticky ?? (scrollPosition >= config.trigger);
    const pinnedTop =
      pos && typeof pos.pinnedTop === "number" ? pos.pinnedTop : null;

    const maxTranslateY = -8;
    const maxScaleDown = 0.03;
    const maxShadow = 20;
    const translateY = maxTranslateY * overlayProgress;
    const scale = 1 - maxScaleDown * overlayProgress;
    const shadowBlur = Math.round(maxShadow * overlayProgress);
    const shadowAlpha = 0.06 + 0.14 * overlayProgress;
    const overlayOpacity = 0.85 + 0.15 * overlayProgress;

    const baseZ = 100 + index * 10;
    const overlayBump = Math.round(overlayProgress * 8);
    const zIndex = baseZ + overlayBump;

    const transition =
      "transform 260ms cubic-bezier(.2,.9,.2,1), opacity 200ms linear, box-shadow 260ms linear";
    const transformOrigin = "center bottom";

    if (isSticky) {
      const top = pinnedTop !== null ? `${pinnedTop}px` : `${config.top}px`;
      return {
        position: "fixed" as const,
        top,
        left: 0,
        right: 0,
        margin: "0 auto",
        width: "calc(100% - 4rem)",
        maxWidth: "72rem",
        zIndex,
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity: overlayOpacity,
        boxShadow: `0 8px ${shadowBlur}px rgba(2,6,23,${shadowAlpha})`,
        transition,
        transformOrigin,
      };
    }

    return {
      position: "relative" as const,
      transform: `translateY(${translateY}px) scale(${scale})`,
      opacity: 1 - 0.06 * (1 - overlayProgress),
      boxShadow: `0 2px ${Math.round(
        shadowBlur * 0.25
      )}px rgba(2,6,23,${0.02 + 0.06 * overlayProgress})`,
      zIndex,
      transition,
      transformOrigin,
    };
  };

  const getButtonStyle = () => {
    const img5Pos = imagePositions.find((p) => p.index === 5);
    const img5Trigger = stickyConfig[5]?.trigger ?? Infinity;
    const shouldBeFixed =
      (img5Pos && img5Pos.isSticky) || scrollPosition >= img5Trigger;

    if (shouldBeFixed) {
      const img5Pinned =
        img5Pos && typeof img5Pos.pinnedTop === "number"
          ? img5Pos.pinnedTop
          : stickyConfig[5]?.top ?? 0;
      const buttonTop = img5Pinned + 400;

      return {
        position: "fixed" as const,
        top: `${buttonTop}px`,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 120000,
        boxShadow: "0 8px 24px rgba(2,6,23,0.12)",
      };
    }

    return {};
  };

  return (
    <div ref={containerRef} className="bg-white w-full text-center relative">
      <h2
        className="text-2xl mb-4"
        style={{ fontFamily: "Space Grotesk" }}
      >
        Unlock <span className="font-semibold">Global Opportunities</span> With
        Edulinks AI
      </h2>

      <p
        className="text-base px-4 text-black mb-4"
        style={{ fontFamily: "DM Sans" }}
      >
        Explore top universities across multiple countries powered by Edulinks
        AI Assistant!
      </p>

      <p
        className="max-w-3xl px-5 mx-auto text-md text-gray-500"
        style={{ fontFamily: "DM Sans" }}
      >
        Let our AI guide you to the best-fit countries, universities, and
        courses from 800+ global institutions across 33 countries. Whether it's
        the US, Canada, Australia, or beyond — your journey starts with
        data-backed decisions.
      </p>

      <div className="bg-white w-full flex items-center justify-center py-12">
        <div className="grid grid-cols-1 gap-14 max-w-6xl w-full px-8">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="relative" style={{ minHeight: "400px" }}>
              <img
                ref={(el) => (imageRefs.current[i] = el)}
                src={`/images/${
                  ["mausImg", "mukImg", "mcanImg", "mgerImg", "musaImg", "mnewzImg"][i]
                }.png`}
                alt={`Image ${i}`}
                className="w-full h-auto object-contain rounded-4xl transition-all duration-300 ease-out"
                style={getImageStyle(i)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pb-20">
        <button
          className="bg-cyan-400 text-md text-white px-4 py-2 rounded-full hover:shadow-md hover:bg-cyan-500 hover:shadow-gray-400 transition-shadow duration-300 ease-in-out"
          style={getButtonStyle()}
        >
          Explore More Destinations
        </button>
      </div>
    </div>
  );
};

export default MmultipleImg1;
