"use client";
import React, { useEffect, useRef, useState } from "react";
import { ClipboardCheck, BookOpen, Users, Headset } from "lucide-react";
import Mfooter from "@/components/HomePageMobile/Mfooter/page";

type StickyEntry = { trigger: number; top: number };
type CardPos = {
  index: number;
  top: number;
  bottom: number;
  offsetTop: number;
  inView: boolean;
  isSticky: boolean;
  pinnedTop: number | null;
  overlayProgress: number;
};

const OS2: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [cardPositions, setCardPositions] = useState<CardPos[]>([]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navRef = useRef<HTMLDivElement | null>(null);

  const stickyConfig: StickyEntry[] = [
    { trigger: 410, top: 40 },
    { trigger: 700, top: 37 },
    { trigger: 800, top: 46 },
    { trigger: 900, top: 55 },
  ];

  const navStickyConfig: StickyEntry = { trigger: 430, top: -20 };

  // Card content with images above title
  const cards = [
    {
      id: 0,
      icon: ClipboardCheck,
      title: "AI-Powered Tests",
      image: "/images/os2Img1.png",
      desc:
        "Get personalized recommendations for the best universities and courses based on your profile. Our AI-driven tests analyze your academic background, career goals, and interests to guide your study abroad journey.",
    },
    {
      id: 1,
      icon: BookOpen,
      title: "English Language Assessment",
      image: "/images/os2Img2.png",
      desc:
        "Test your English proficiency through our AI-driven language evaluation. It measures your listening, reading, speaking, and writing skills to give you a true picture of your potential. Use these insights to prepare for global exams like IELTS or PTE with confidence.",
    },
    {
      id: 2,
      icon: Users,
      title: "Community Hub",
      image: "/images/os2Img3.png",
      desc:
        "Be part of a global student network designed to support and inspire you. From sharing real experiences to finding peers with similar goals, the hub is a place to connect, learn, and grow together. Get authentic insights that go beyond brochures and official guides.",
    },
    {
      id: 3,
      icon: Headset,
      title: "AI Guidance & Counselor Support",
      image: "/images/os2Img4.png",
      desc:
        "Access instant visa and career advice with our AI-powered chatbot—available 24/7 for fast, reliable answers. If needed, human counselors step in for personalized guidance, ensuring you’re supported at every stage.",
    },
  ];

  useEffect(() => {
    if (cardRefs.current.length < stickyConfig.length)
      cardRefs.current = Array(stickyConfig.length).fill(null);
    if (wrapperRefs.current.length < stickyConfig.length)
      wrapperRefs.current = Array(stickyConfig.length).fill(null);

    const basePinnedTop = 65;
    const overlayRange = 220;
    const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

    const handleScroll = () => {
      const currentScroll = window.scrollY || 0;
      setScrollPosition(currentScroll);

      const positions = cardRefs.current
        .map((ref, index) => {
          const config = stickyConfig[index];
          if (!ref || !config) return null;
          const rect = ref.getBoundingClientRect();
          const isSticky = currentScroll >= config.trigger;
          const start = Math.max(0, config.trigger - overlayRange);
          const progress = clamp((currentScroll - start) / overlayRange, 0, 1);

          return {
            index,
            top: rect.top,
            bottom: rect.bottom,
            offsetTop: ref.offsetTop,
            inView: rect.top < window.innerHeight && rect.bottom > 0,
            isSticky,
            pinnedTop: null,
            overlayProgress: progress,
          } as CardPos;
        })
        .filter(Boolean) as CardPos[];

      const stuck = positions.filter((p) => p.isSticky).sort((a, b) => a.index - b.index);
      stuck.forEach((p, rank) => {
        p.pinnedTop = basePinnedTop * (rank + 1);
        p.overlayProgress = 1;
      });

      setCardPositions(positions);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const getCardStyle = (index: number): React.CSSProperties => {
    const config = stickyConfig[index];
    const pos = cardPositions.find((p) => p.index === index);
    const overlayProgress = pos?.overlayProgress ?? 0;
    const isSticky = pos?.isSticky ?? (config ? scrollPosition >= config.trigger : false);
    const pinnedTop = pos && typeof pos.pinnedTop === "number" ? pos.pinnedTop : null;

    const maxTranslateY = -8;
    const maxScaleDown = 0.03;
    const maxShadow = 20;
    const translateY = maxTranslateY * overlayProgress;
    const scale = 1 - maxScaleDown * overlayProgress;
    const shadowBlur = Math.round(maxShadow * overlayProgress);
    const shadowAlpha = 0.06 + 0.14 * overlayProgress;
    const overlayOpacity = 0.985;

    const baseZ = 100 + index * 10;
    const overlayBump = Math.round(overlayProgress * 8);
    const zIndex = baseZ + overlayBump;

    const transition =
      "transform 260ms cubic-bezier(.2,.9,.2,1), opacity 200ms linear, box-shadow 260ms linear";
    const transformOrigin = "center bottom";

    if (isSticky && config) {
      const top = pinnedTop !== null ? `${pinnedTop}px` : `${config.top}px`;
      return {
        position: "fixed",
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
      position: "relative",
      transform: `translateY(${translateY}px) scale(${scale})`,
      opacity: 1,
      boxShadow: `0 2px ${Math.round(
        shadowBlur * 0.25
      )}px rgba(2,6,23,${0.02 + 0.06 * overlayProgress})`,
      zIndex,
      transition,
      transformOrigin,
    };
  };

  const getButtonStyle = () => {
    const lastIdx = stickyConfig.length - 1;
    const lastPos = cardPositions.find((p) => p.index === lastIdx);
    const lastTrigger = stickyConfig[lastIdx]?.trigger ?? Infinity;
    const shouldBeFixed = (lastPos && lastPos.isSticky) || scrollPosition >= lastTrigger;

    if (shouldBeFixed) {
      const lastPinned =
        lastPos && typeof lastPos.pinnedTop === "number"
          ? lastPos.pinnedTop
          : stickyConfig[lastIdx]?.top ?? 0;
      const buttonTop = lastPinned + 400;
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

  const navTargets = [465, 787, 898, 956];
  const navigateToCard = (index: number) => {
    const idx = Math.max(0, Math.min(index, navTargets.length - 1));
    const targetY = navTargets[idx];
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  const navIsSticky = scrollPosition >= navStickyConfig.trigger;
  const navStyle: React.CSSProperties = navIsSticky
    ? {
        position: "fixed",
        top: `${navStickyConfig.top}px`,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 11000,
        background: "white",
        padding: "0.6rem 3rem",
        borderRadius: "20px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
      }
    : {
        position: "sticky",
        top: "5px",
        left: "7%",
        zIndex: 10000,
        background: "white",
        padding: "0.6rem 3rem",
        borderRadius: "20px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
      };

  return (
    <>
      <div ref={containerRef} className="bg-white pt-10 w-full text-center relative">
        <div className="relative z-[9000]">
          {/* Navbar */}
          <nav ref={navRef} className="w-fit mx-auto my-6" style={navStyle}>
            <ul className="flex gap-10 list-none p-0 m-0">
              {[
                { id: 0, icon: ClipboardCheck, label: "Tests" },
                { id: 1, icon: BookOpen, label: "Counseling" },
                { id: 2, icon: Users, label: "Analytics" },
                { id: 3, icon: Headset, label: "Assistant" },
              ].map((item) => {
                const Icon = item.icon;
                const isActive = cardPositions.find((p) => p.index === item.id)?.isSticky;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => navigateToCard(item.id)}
                      className={`w-10 h-10 rounded-xl border-none cursor-pointer flex items-center justify-center transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-to-br from-cyan-400 to-cyan-600 text-white scale-105"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                      title={item.label}
                      style={{
                        boxShadow: isActive
                          ? "0 6px 18px rgba(56,189,248,0.25)"
                          : "0 2px 8px rgba(0,0,0,0.08)",
                      }}
                    >
                      <Icon size={25} strokeWidth={2} />
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Cards */}
          <div className="bg-white w-full flex items-center justify-center py-12">
            <div className="grid grid-cols-1 gap-40 max-w-6xl w-full px-8">
              {cards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.id}
                    ref={(el) => (wrapperRefs.current[i] = el)}
                    className="relative"
                    style={{ minHeight: "400px" }}
                  >
                    <div
                      ref={(el) => (cardRefs.current[i] = el)}
                      style={getCardStyle(i)}
                      className="rounded-3xl border border-gray-100 bg-white text-center overflow-hidden"
                    >
                      <div className="p-6 sm:p-8 lg:p-10">
                        {/* Image + Icon Row */}
                        {card.image && (
                          <div className="mb-6 flex justify-center items-center gap-6">
                            {/* Icon */}
                            <div className="w-[15%] flex justify-center items-center">
                              <div className="-mt-6 -ml-4 rounded-2xl flex">
                                <Icon className="text-[#767676]" size={30} strokeWidth={2} />
                              </div>
                            </div>

                            {/* Image */}
                            <div className="w-[60%] flex justify-center">
                              <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-32 sm:h-48 object-contain"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                          </div>
                        )}

                        {/* Title */}
                        <div className="flex items-center justify-center gap-3 mb-3">
                          <h3 className="text-2xl font-semibold text-slate-800">{card.title}</h3>
                        </div>

                        {/* Description */}
                        <p className="mx-auto max-w-[40ch] text-slate-600 leading-7">
                          {card.desc}
                        </p>

                        <div className="pt-4">
  <button
    onClick={() => {
      // 🔹 Individual static links for each card
      if (card.id === 0) window.location.href = "/ourservices/services";
      else if (card.id === 1) window.location.href = "/english-assessment";
      else if (card.id === 2) window.location.href = "/community-hub";
      else if (card.id === 3) window.location.href = "/ai-guidance";
    }}
    className="bg-[#37D7D9] text-md text-white px-4 py-2 rounded-full hover:shadow-md hover:bg-cyan-500 transition-shadow duration-300 ease-in-out"
  >
    See More
  </button>
</div>

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-[1000000]">
        <Mfooter />
      </div>
    </>
  );
};

export default OS2;
