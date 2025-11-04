"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import img from "../../../../public/images/backlineImg.png"

const keyframes = [
  "keyframe-entry",
  "keyframe-0",
  "keyframe-30",
  "keyframe-50",
  "keyframe-70",
  "keyframe-90",
];

interface Card {
  src: string;
  alt: string;
}

const cards: Card[] = [
  { src: "/images/cardImg1.png", alt: "Career Pathway" },
  { src: "/images/cardImg2.png", alt: "University Shortlisting" },
  { src: "/images/cardImg3.png", alt: "Visa Query Solver" },
  { src: "/images/cardImg4.png", alt: "Chat With Me" },
  { src: "/images/cardImg1.png", alt: "Career Pathway (dup)" },
  { src: "/images/cardImg2.png", alt: "University Shortlisting (dup)" },
  { src: "/images/cardImg3.png", alt: "Visa Query Solver (dup)" },
  { src: "/images/cardImg4.png", alt: "Chat With Me (dup)" },
];

const EduApp: React.FC = () => {
  const [cardPositions, setCardPositions] = useState<number[]>([]);

  useEffect(() => {
    const initialPositions = [1, 2, 3, 4, 0, 0, 0, 0]; // first 4 visible
    setCardPositions(initialPositions);

    const interval = setInterval(() => {
      setCardPositions((prev) => {
        let updated = [...prev];
        for (let i = 0; i < updated.length; i++) {
          let currentKeyframe = updated[i];
          let nextKeyframe = currentKeyframe + 1;

          if (nextKeyframe >= keyframes.length) {
            nextKeyframe = 0;
          } else if (nextKeyframe === 1 && currentKeyframe === 0) {
            const positionOccupied = updated.some(
              (pos, idx) => pos === 1 && idx !== i
            );
            if (positionOccupied) continue;
          }

          updated[i] = nextKeyframe;
        }

        const firstPositionFree = !updated.some((pos) => pos === 1);
        if (firstPositionFree) {
          const entryCardIndex = updated.findIndex((pos) => pos === 0);
          if (entryCardIndex !== -1) {
            updated[entryCardIndex] = 1;
          }
        }

        return updated;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        .carousel-container {
  position: relative;
  width: 100%;
  height: clamp(200px, 30vw, 450px);
 
  overflow: hidden;
}

        .carousel-image {
          position: absolute;
          width: clamp(150px, 25vw, 300px);
          height: clamp(80px, 12vw, 150px);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: left 1.5s ease-in-out,
            top 1.5s ease-in-out,
            opacity 1.5s ease-in-out;
        }

        .carousel-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        /* positions remain same */
        .keyframe-0 { left: 0%; top: 15%; opacity: 1; }
        .keyframe-30 { left: 25%; top: 30%; opacity: 1; }
        .keyframe-50 { left: 61%; top: 48%; opacity: 1; }
        .keyframe-70 { left: 85%; top: 10%; opacity: 1; }
        .keyframe-90 { left: 110%; top: 0%; opacity: 0; }
        .keyframe-entry { left: -15%; top: 40%; opacity: 0; }

        .overlay {
          position: absolute;
          width: clamp(1300px, 290vw, 1000px);
          height: auto;
          z-index: 10;
          pointer-events: none;
        }
        .overlay.bottom-center {
          top: -50%;
          left: 53%;
          transform: translateX(-50%);
        }

        .bottom-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100px;
          background: linear-gradient(to top, white, transparent);
          z-index: 30;
          pointer-events: none;
        }

        /* --- Extra small screens adjustments --- */
        @media (max-width: 640px) {
          .carousel-container {
            height: 250px;
          }
          .overlay.bottom-center {
            width: 70%;
            top: -20%;
          }
        }
      `}</style>

      {/* Heading Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-[90%] mx-auto mt-20 gap-6">
        <div className="space-y-4 text-center translate-x-15 md:text-left">
          <h2
            className="text-3xl md:text-5xl text-black font-semibold tracking-tight"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Meet the Edulinks App
          </h2>
          <p
            className="text-black tracking-wide font-semibold text-base md:text-lg"
            style={{ fontFamily: "DM Sans" }}
          >
            Your AI study abroad assistant, always in your pocket.
          </p>
        </div>

        <div className="flex gap-4 -translate-x-15">
          <Image
            src="/images/googleImg.png"
            alt="Google Play"
            width={140}
            height={40}
            className="w-[120px] md:w-[140px] h-auto"
          />
          <Image
            src="/images/appImg.png"
            alt="App Store"
            width={140}
            height={40}
            className="w-[120px] md:w-[140px] h-auto"
          />
        </div>
      </div>

      {/* Carousel */}
      <div   style={{
    backgroundImage: `url(${img.src})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
  }} className="carousel-container mb-40">
        {/* Overlay Image */}
        <Image
          src="/images/phoneImg.png"
          alt="Overlay"
          width={2000}
          height={1500}
          className="overlay bottom-center"
        />

        {/* Carousel Items */}
        {cards.map((card, index) => (
          <div
            key={index}
            className={`carousel-image ${
              keyframes[cardPositions[index]] || ""
            }`}
          >
            <Image src={card.src} alt={card.alt} fill style={{ objectFit: "contain" }} />
          </div>
        ))}

        {/* Bottom Gradient */}
        <div className="bottom-gradient"></div>
      </div>
    </>
  );
};

export default EduApp;
