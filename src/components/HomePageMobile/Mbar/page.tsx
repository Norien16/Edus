"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

export default function Mbar() {
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
    if (window.innerWidth < 640) return 4; // mobile
    if (window.innerWidth < 1024) return 3; // tablet
    return 4; // desktop
  };

  const [visible, setVisible] = useState(getVisible);
  const step = Math.max(1, visible - 1);

  // slide index (which offset index in offsets[] we are at)
  const [index, setIndex] = useState(0);

  // measurements
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<number | null>(null);
  const [itemWidthPx, setItemWidthPx] = useState(0);

  // recompute visible on resize
  useEffect(() => {
    const handleResize = () => setVisible(getVisible());
    window.addEventListener("resize", handleResize);
    // initial
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // measure item width in px whenever visible or container size changes
  useEffect(() => {
    const updateSizes = () => {
      if (containerRef.current) {
        const w = containerRef.current.clientWidth;
        setItemWidthPx(Math.floor(w / visible));
      }
    };

    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, [visible]);

  // Build offsets array so the last slide is aligned to show the last item(s) (no blanks).
  const offsets = useMemo(() => {
    const n = images.length;
    const s = step;
    if (n <= visible) return [0];

    const out: number[] = [];
    let offset = 0;
    out.push(0);

    // keep adding full steps while there's room
    while (true) {
      // if current offset already reaches the end, break
      if (offset + visible >= n) break;
      const next = offset + s;

      // if the next step would pass the optimal last offset, push last offset and break
      const lastOffset = n - visible;
      if (next >= lastOffset) {
        if (lastOffset > offset) out.push(lastOffset);
        break;
      }

      // otherwise add the next step and continue
      out.push(next);
      offset = next;
    }

    return out;
  }, [images.length, visible, step]);

  const totalSlides = offsets.length;

  // reset or clamp index if number of slides changes (e.g. on resize)
  useEffect(() => {
    setIndex((prev) => {
      if (totalSlides === 0) return 0;
      if (prev >= totalSlides) return 0;
      return prev;
    });
  }, [totalSlides]);

  // autoplay controls
  const stop = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const start = () => {
    stop();
    // if only 1 slide, no need to auto-advance
    if (totalSlides <= 1) return;
    intervalRef.current = window.setInterval(() => {
      setIndex((prev) => {
        const next = prev + 1;
        return next >= totalSlides ? 0 : next;
      });
    }, 2500);
  };

  // restart autoplay whenever totalSlides changes
  useEffect(() => {
    start();
    return () => stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalSlides]);

  // compute translate in px (exact)
  const translateX = -((offsets[index] ?? 0) * itemWidthPx);

  return (
    <div className="flex bg-white py-10 rounded-t-4xl items-center justify-center w-full">
      <div
        className="w-full overflow-hidden"
        ref={containerRef}
        onMouseEnter={stop}
        onMouseLeave={start}
      >
        <div
          ref={trackRef}
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(${translateX}px)`,
            // keep track width flexible; children have fixed px widths
          }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-5"
              style={{ width: `${itemWidthPx}px` }}
            >
              <img
                src={src}
                alt={`slide-${i}`}
                className="w-full h-auto object-contain max-h-20"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
