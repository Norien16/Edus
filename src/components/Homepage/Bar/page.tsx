"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Bar() {
  const images = [
    "/images/barImg1.png",
    "/images/barImg2.png",
    "/images/barImg3.png",
    "/images/barImg4.png",
    "/images/barImg5.png",
    "/images/barImg6.png",
    "/images/barImg7.png",
    "/images/barImg8.png",
    "/images/barImg9.png",
    "/images/barImg10.png",
  ];

  // responsive visible count
  const getVisible = () => {
    if (typeof window === "undefined") return 4; // fallback (SSR)
    if (window.innerWidth < 640) return 2; // mobile
    if (window.innerWidth < 1024) return 3; // tablet
    return 4; // desktop
  };

  const [visible, setVisible] = useState(getVisible);
  const step = visible - 1;
  const totalSlides = Math.ceil((images.length - visible) / step) + 1;

  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // update visible on resize
    const handleResize = () => setVisible(getVisible());
    window.addEventListener("resize", handleResize);

    start();
    return () => {
      stop();
      window.removeEventListener("resize", handleResize);
    };
  }, [visible]);

  const stop = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const start = () => {
    stop();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => {
        const next = prev + 1;
        return next >= totalSlides ? 0 : next;
      });
    }, 2500);
  };

  const translatePercent = -(index * (step * (100 / visible)));

  return (
    <div className="flex flex-col mt-20 items-center justify-center mx-auto w-full">
      <h1
        className="text-xl sm:text-2xl font-semibold text-gray-800 mb-10 text-center"
        style={{ fontFamily: "Space Grotesk" }}
      >
        Edulink Study Partner
      </h1>

      <div
        className="w-full overflow-hidden px-6 sm:px-10 md:px-3"
        onMouseEnter={stop}
        onMouseLeave={start}
      >
        <div
          ref={trackRef}
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(${translatePercent}%)`,
          }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-2 sm:px-4"
              style={{ width: `${100 / visible}%` }}
            >
              <img
                src={src}
                alt={`slide-${i}`}
                className="w-45 h-auto object-contain max-h-16 sm:max-h-20 md:max-h-24 lg:max-h-28"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
