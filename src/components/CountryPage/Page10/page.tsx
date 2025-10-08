"use client";
import React, { useState } from "react";

/**
 * FanOutContactButtons.tsx
 * - Hovering the main button OR any button opens the entire fan.
 * - No oscillation / swing.
 * - Hovering a fanned button gives a subtle grow (scale + lift).
 * - Clicking a collapsed item will open the fan (helpful on small screens).
 */

export default function FanOutContactButtons() {
  const [open, setOpen] = useState(false);
  // which individual button (by id) is being hovered/focused right now
  const [hoveredId, setHoveredId] = useState<number | "main" | null>(null);

  const items = [
    {
      id: 1,
      label: "Get Quote",
      rotate: -14,
      translateX: -15,
      translateY: 0,
      delay: 40,
      onClick: () => alert("Get Quote clicked"),
    },
    {
      id: 2,
      label: "Book A Call",
      rotate: -28,
      translateX: -15,
      translateY: 0,
      delay: 80,
      onClick: () => alert("Book A Call clicked"),
    },
    {
      id: 3,
      label: "WhatsApp",
      rotate: -42,
      translateX: -15,
      translateY: 0,
      delay: 120,
      onClick: () => window.open("https://wa.me/your-number", "_blank"),
    },
  ];

  return (
    <div
      className="relative flex items-start justify-end w-full h-56"
      // hovering container opens the fan
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => {
        setOpen(false);
        setHoveredId(null);
      }}
    >
      <div className="relative mr-12">
        {/* Fan items */}
        {items.map((it, idx) => {
          // base transform (position + rotate)
          const baseTransform = open
            ? `translate(${it.translateX}px, ${it.translateY}px) rotate(${it.rotate}deg)`
            : `translate(0px, ${idx * 6}px) rotate(-2deg)`;

          // if this item is hovered, add a slight scale and a tiny upward translate for the 'pop'
          const isHovered = hoveredId === it.id;
          const hoverTransform = isHovered ? " translateY(-6px) scale(1.06)" : "";

          return (
            <button
              key={it.id}
              onClick={(e) => {
                if (!open) {
                  // If collapsed, clicking should open (and not immediately run the action)
                  setOpen(true);
                  e.preventDefault();
                  return;
                }
                it.onClick();
              }}
              // Hover any button -> open the full fan
              onMouseEnter={() => {
                setOpen(true);
                setHoveredId(it.id);
              }}
              onMouseLeave={() => {
                setHoveredId(null);
              }}
              onFocus={() => {
                setOpen(true);
                setHoveredId(it.id);
              }}
              onBlur={() => {
                setHoveredId(null);
              }}
              className="absolute right-0 flex items-center justify-start text-white font-semibold rounded-full h-14 px-8 focus:outline-none"
              style={{
                background: "#f18700",
                boxShadow: `2px 5px 0 #000000`,
                transformOrigin: "100% 50%",
                transform: `${baseTransform}${hoverTransform}`,
                transition: `transform 260ms cubic-bezier(.2,.9,.25,1) ${it.delay}ms`,
                zIndex: 10 - idx,
                width: "100%",
                maxWidth: "60vw",
                cursor: "pointer",
                // pointer events enabled always so hovering a collapsed item will open fan
                pointerEvents: "auto",
              }}
              aria-hidden={!open}
              aria-label={it.label}
            >
              {/* inner label - rotated to match screenshot */}
              <span
                style={{
                  transform: "translateX(-6px) rotate(-6deg)",
                  display: "inline-block",
                  fontSize: 20,
                  color: "white",
                  lineHeight: "20px",
                }}
              >
                {it.label}
              </span>
            </button>
          );
        })}

        {/* Main button */}
        <button
          className="relative z-20 flex items-center justify-start text-white font-bold rounded-full h-16 px-8 focus:outline-none"
          style={{
            background: "#f18700",
            boxShadow: "2px 5px 0 #000000",
            transformOrigin: "100% 50%",
            // main button also slightly shifts left when open
            transform: open ? "translateX(-8px)" : "translateX(0px)",
            transition: "transform 220ms ease",
            width: "100%",
            maxWidth: "70vw",
            cursor: "pointer",
          }}
          aria-haspopup="true"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
          onMouseEnter={() => setHoveredId("main")}
          onMouseLeave={() => setHoveredId(null)}
          onFocus={() => setHoveredId("main")}
          onBlur={() => setHoveredId(null)}
        >
          <span style={{ fontSize: 20 }}>Let&apos;s Discuss Your Project</span>
        </button>
      </div>

      {/* small local styles (purely for focus outline / a11y visual) */}
      <style jsx>{`
        button:focus {
          outline: 3px solid rgba(255, 153, 0, 0.15);
          outline-offset: 3px;
        }
      `}</style>
    </div>
  );
}


