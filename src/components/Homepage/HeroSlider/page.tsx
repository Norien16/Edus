// app/components/Progress.tsx
"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

type Testimonial = {
  name: string;
  text: string;
};

const HeroSlider: React.FC = () => {
  const keyframes: string[] = [
    "progress-keyframe-entry",
    "progress-keyframe-0",
    "progress-keyframe-50",
    "progress-keyframe-70",
    "progress-keyframe-90",
  ];

  const [cardPositions, setCardPositions] = useState<number[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const initialPositions = [1, 2, 3, 4, 0, 0, 0, 0];
    setCardPositions(initialPositions);

    const startTimeout = setTimeout(() => {
      startAutoPlay();
    }, 4000);

    return () => {
      clearTimeout(startTimeout);
      stopAutoPlay();
    };
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      moveNext();
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetAutoPlayWithDelay = () => {
    stopAutoPlay();
    setTimeout(() => {
      startAutoPlay();
    }, 4000);
  };

  const moveNext = () => {
    setCardPositions((prev) => {
      const updated = [...prev];
      for (let i = 0; i < updated.length; i++) {
        let currentKeyframe = updated[i];
        let nextKeyframe = currentKeyframe + 1;
        if (nextKeyframe >= keyframes.length) nextKeyframe = 0;
        updated[i] = nextKeyframe;
      }

      const firstPositionFree = !updated.some((pos) => pos === 1);
      if (firstPositionFree) {
        const entryCardIndex = updated.findIndex((pos) => pos === 0);
        if (entryCardIndex !== -1) updated[entryCardIndex] = 1;
      }
      return updated;
    });
  };

  const movePrev = () => {
    setCardPositions((prev) => {
      const updated = [...prev];
      for (let i = 0; i < updated.length; i++) {
        let currentKeyframe = updated[i];
        let prevKeyframe = currentKeyframe - 1;
        if (prevKeyframe < 0) prevKeyframe = keyframes.length - 1;
        updated[i] = prevKeyframe;
      }
      return updated;
    });
  };

  const handleNext = () => {
    moveNext();
    resetAutoPlayWithDelay();
  };

  const handlePrev = () => {
    movePrev();
    resetAutoPlayWithDelay();
  };

  const testimonials: Testimonial[] = [
    {
      name: "Alana",
      text:
        "Thanks to EduLinks, I not only got admitted to my dream university, but I also received a scholarship I didn’t even know I was eligible for.",
    },
    {
      name: "Zaid Khan",
      text:
        "Before I found EduLinks, I had no idea what career path to choose. Everyone around me kept saying ‘engineering’ or ‘medical,’ but neither felt right. The psychometric test on EduLinks opened my eyes.",
    },
    {
      name: "Shefali Shirodkar",
      text:
        "Thanks to EduLinks, I got complete guidance on the college admission process, entrance exams, and even scholarship opportunities. I felt confident every step of the way!",
    },
    {
      name: "Preeti Singh",
      text:
        "The live sessions on EduLinks made complex topics feel simple. I used to hate Chemistry — now it’s my strongest subject.",
    },
    {
      name: "Kabir Malhotra",
      text:
        "EduLinks isn't just another study platform — it actually feels like a mentor. The career roadmap feature gave me clarity I’ve never had before.",
    },
  ];

  const spaceGrotesk = { fontFamily: "'Space Grotesk', sans-serif" };
  const dmSans = { fontFamily: "'DM Sans', sans-serif" };

  return (
    <>
      <section className="text-center py-12">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#545454] mb-4"
          style={dmSans}
        >
          Real Students. Real Progress.
        </h2>
        <p
          className="w-[95%] sm:w-[80%] mx-auto leading-relaxed text-[#666666] text-sm sm:text-base"
          style={dmSans}
        >
          These testimonials highlight how EduLinks bridges the gap between
          confusion and clarity, ambition and achievement. <br />
          Tangible transformation you can trust.
        </p>
      </section>

      <style>{`
        .progress-container {
          position: relative;
          height: 300px;
          overflow: hidden;
          margin: auto;
        }

        .progress-card {
          position: absolute;
          width: 23%;
          height: 220px;
          background: white;
          border-radius: 40px 0 40px 0;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          text-align: center;
          transition: left 2.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      top 2.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      opacity 2.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .progress-keyframe-entry { left: -13%; top: 20%; opacity: 0; }
        .progress-keyframe-0 { left: 12%; top: 20%; opacity: 1; }
        .progress-keyframe-50 { left: 37%; top: 20%; opacity: 1; }
        .progress-keyframe-70 { left: 62%; top: 20%; opacity: 1; }
        .progress-keyframe-90 { left: 87%; top: 20%; opacity: 0; }

        .nav-buttond {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          border: none;
          width: 60px;
          height: 60px;
          cursor: pointer;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nav-buttond.left { left: 4%; }
        .nav-buttond.right { right: 5%; }

        /* ✅ Responsiveness */
        @media (max-width: 1024px) {
          .progress-card {
            width: 28%;
            height: 200px;
          }
        }

        @media (max-width: 768px) {
          .progress-container {
            height: 250px;
          }
          .progress-card {
            width: 40%;
            height: 180px;
          }
          .progress-keyframe-0 { left: 8%; }
          .progress-keyframe-50 { left: 50%; }
          .progress-keyframe-70 { left: 92%; }
        }

        @media (max-width: 640px) {
          .progress-container {
            height: 220px;
          }
          .progress-card {
            width: 70%;
            height: 160px;
          }
          .progress-keyframe-0 { left: 15%; }
          .progress-keyframe-50 { left: 120%; opacity: 0; }
          .progress-keyframe-70 { left: 120%; opacity: 0; }
          .progress-keyframe-90 { left: 120%; opacity: 0; }
        }
      `}</style>

      <div className="progress-container">
        <button className="nav-buttond left" onClick={handlePrev}>
          <Image
            src="/images/sliderleftImg.png"
            alt="Previous"
            width={60}
            height={60}
          />
        </button>

        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`progress-card ${
              keyframes[cardPositions[index]] || "progress-keyframe-entry"
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full w-full px-4 text-center">
              <h2
                style={spaceGrotesk}
                className="text-lg font-bold text-[#505050] mb-3"
              >
                {t.name}
              </h2>
              <p
                style={dmSans}
                className="text-[#6F6F6F] text-sm sm:text-base leading-relaxed"
              >
                {t.text}
              </p>
            </div>
          </div>
        ))}

        <button className="nav-buttond right" onClick={handleNext}>
          <Image
            src="/images/sliderrightImg.png"
            alt="Next"
            width={60}
            height={60}
          />
        </button>
      </div>
    </>
  );
};

export default HeroSlider;
