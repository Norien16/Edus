"use client";
import React, { useEffect, useRef, useState } from "react";
import { ClipboardCheck, BookOpen, Users, Headset } from "lucide-react";
import Footer from "@/components/footer/page";
import Link from "next/link";

// 🔹 Sections Data for OS2
const sectionsData = [
  {
    id: "section-1",
    title: "AI-Powered Tests",
    icon: <ClipboardCheck size={32} />,
    link: "/ourservices/services",
    content:
      "Get personalized recommendations for the best universities and courses based on your profile. Our AI-driven tests analyze your academic background, career goals, and interests to guide your study abroad journey.",
    image: "/images/os2Img1.png",
    styles: {
      h2: { marginTop: "7%", marginLeft: "-3%", lineHeight: "1.1" },
      p: { marginTop: "6%", marginLeft: "-3%" },
      button: { marginTop: "3.5rem", marginLeft: "-4%" },
    },
  },
  {
    id: "section-2",
    title: "English Language Assessment",
    icon: <BookOpen size={32} />,
    link: "/ourservices/services1",
    content:
      "Test your English proficiency through our AI-driven language evaluation. It measures your listening, reading, speaking, and writing skills to give you a true picture of your potential. Use these insights to prepare for global exams like IELTS or PTE with confidence.",
    image: "/images/os2Img2.png",
    stickyTop: 70,
    styles: {
      h2: { margin: "2.8%", marginLeft: "-5%", lineHeight: "1.1" },
      p: { marginTop: "5%", marginLeft: "-5%" },
      button: { marginTop: "2.5rem", marginLeft: "-6%" },
    },
  },
  {
    id: "section-3",
    title: "Community Hub",
    icon: <Users size={32} />,
    link: "/ourservices/services2",
    content:
      "Be part of a global student network designed to support and inspire you. From sharing real experiences to finding peers with similar goals, the hub is a place to connect, learn, and grow together. Get authentic insights that go beyond brochures and official guides.",
    image: "/images/os2Img3.png",
    stickyTop: 120,
    styles: {
      h2: { marginTop: "10%", marginLeft: "-5%", lineHeight: "1.1" },
      p: { marginTop: "6%", marginLeft: "-5%" },
      button: { marginTop: "2.5rem", marginLeft: "-6%" },
    },
  },
  {
    id: "section-4",
    title: "AI Guidance & Counselor Support",
    icon: <Headset size={32} />,
    link: "/ourservices/services3",
    content:
      "Access instant visa and career advice with our AI-powered chatbot—available 24/7 for fast, reliable answers. If needed, human counselors step in for personalized guidance, ensuring you're supported at every stage.",
    image: "/images/os2Img4.png",
    stickyTop: 170,
    styles: {
      h2: { marginTop: "6%", marginLeft: "-6%", lineHeight: "1.1" },
      p: { marginTop: "5%", marginLeft: "-6%" },
      button: { marginTop: "2rem", marginLeft: "-6.5%" },
    },
  },
];

export default function OurServices() {
  // ---------- OS1 States ----------
  const sectionRef = useRef(null);
  const placeholderRef = useRef(null);
  const [opacity, setOpacity] = useState(1);
  const [buttonTop, setButtonTop] = useState(0);
  const [showBottomFade, setShowBottomFade] = useState(false);

  // ---------- OS2 States ----------
  const [activeSection, setActiveSection] = useState("section-1");
  const sectionPositions = useRef({});
  const isNavigating = useRef(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  

  // ---------- NEW: OS1 height & OS2 fixed state ----------
  const [os1Height, setOs1Height] = useState(0);
  const [isOS2Fixed, setIsOS2Fixed] = useState(false);
  const os2ContainerRef = useRef(null);
  const os2FixThreshold = os1Height / 2;

  // ---------- OS1 Effects ----------
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

    const measure = () => {
      const el = sectionRef.current;
      setOs1Height(el ? el.offsetHeight : 0);
    };
    measure();
    window.addEventListener("resize", measure);

    const fadeDistance = 250;
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
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScrollForButtons);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // ---------- Fade overlay visibility (FIXED) ----------
  useEffect(() => {
    let lastY = window.scrollY || 0;
    let raf = 0;
    const SCROLL_THRESHOLD = 6;

    const onScrollDir = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const delta = y - lastY;
        if (Math.abs(delta) > SCROLL_THRESHOLD) {
          setShowBottomFade(delta > 0); // ✅ Show fade only when scrolling down
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

  // ---------- NEW: Check if OS2 should be fixed ----------
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fixThreshold = os2FixThreshold; // <-- use half the os1 height now
      // const fixThreshold = os1Height;
      setIsOS2Fixed(scrollY >= fixThreshold);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [os1Height]);

  // ---------- OS2 Effects ----------
  useEffect(() => {
    const storePositions = () => {
      sectionsData.forEach((section, index) => {
        const naturalTop = os1Height + index * (window.innerHeight * 0.66 + 64);
        sectionPositions.current[section.id] = {
          ...section,
          naturalTop,
          currentTop: naturalTop,
          isSticky: false,
          threshold: os1Height + index * 300,
        };
      });
    };

    const updatePositions = () => {
      const scrollY = window.scrollY;
      const navbarTop = 20;
      const navbarSticky = scrollY >= os2FixThreshold;
      setIsNavbarFixed(navbarSticky);

      Object.entries(sectionPositions.current).forEach(([id, pos]) => {
        if (id === "section-1") {
          if (isOS2Fixed) {
            pos.currentTop = navbarSticky ? navbarTop : pos.naturalTop - os1Height;
            pos.isSticky = navbarSticky;
          } else {
            pos.currentTop = pos.naturalTop;
            pos.isSticky = false;
          }
        } else {
          if (isOS2Fixed) {
            const scrollOffset = scrollY - os1Height;
            const shouldStick = scrollOffset >= (pos.threshold - os1Height);
            pos.currentTop = shouldStick
              ? (pos.stickyTop ?? 0)
              : pos.naturalTop - os1Height;
            pos.isSticky = shouldStick;
          } else {
            pos.currentTop = pos.naturalTop;
            pos.isSticky = false;
          }
        }

        const el = document.getElementById(id);
        if (el) {
          el.style.top = `${pos.currentTop}px`;
          el.style.transform = pos.isSticky ? "scale(1.02)" : "scale(1)";
          el.style.zIndex = pos.isSticky ? `${100 + pos.threshold}` : `${pos.threshold}`;
        }
      });

      if (!isNavigating.current && isOS2Fixed) {
        const scrollOffset = scrollY - os1Height;
        let newActive = "section-1";
        if (scrollOffset >= 900) newActive = "section-4";
        else if (scrollOffset >= 500) newActive = "section-3";
        else if (scrollOffset >= 300) newActive = "section-2";
        setActiveSection(newActive);
      }
    };

    const handleScroll = () => requestAnimationFrame(updatePositions);
    storePositions();
    updatePositions();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", storePositions);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", storePositions);
    };
  }, [os1Height, isOS2Fixed]);

  // ---------- NAVIGATION LOGIC ----------
  const navigateToSection = (id: string) => {
    const pos = sectionPositions.current[id];
    if (!pos) return;
    isNavigating.current = true;

    const clickedIndex = sectionsData.findIndex((s) => s.id === id);
    let targetScroll;
    if (clickedIndex === 0) targetScroll = os1Height;
    else if (clickedIndex === 1) targetScroll = pos.threshold + 150;
    else if (clickedIndex === 3) targetScroll = pos.threshold + 150;
    else targetScroll = pos.threshold;

    window.scrollTo({ top: targetScroll, behavior: "smooth" });

    setTimeout(() => {
      isNavigating.current = false;
      setActiveSection(id);
    }, 1000);
  };

  return (
    <>
      {/* ---------- OS1 Section ---------- */}
      <section
        id="below-header"
        ref={sectionRef}
        className="relative flex flex-col md:flex-row bg-[#DFFFFF] items-center justify-center px-6 md:px-20 lg:px-40 xl:px-60 2xl:px-80 py-25 pt-30 overflow-hidden"
      >
        {/* Background Fade (shows only while scrolling UP) */}
        {showBottomFade && (
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-[#DFFFFF] pointer-events-none z-10"></div>
        )}

        <div className="text-center relative z-20">
          <h1
            className="text-3xl md:text-4xl translate-y-10 font-bold text-[#545454] leading-snug"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Our Services
          </h1>

          <p
            className="text-[#666666] pt-8 translate-y-10 text-base md:text-lg whitespace-normal text-center"
            style={{ fontFamily: "DM Sans" }}
          >
            From AI-powered tests and English assessments to community support and instant guidance,
            our platform combines intelligent tools and minimal human interaction to help you make informed decisions.
            Explore your options, connect with peers, and get personalized advice — all in one place.
          </p>

          {/* Invisible placeholder for button positioning */}
          <div
            id="floating-buttons"
            ref={placeholderRef}
            className="pt-12 md:pt-20 opacity-0 pointer-events-none"
          >
            <div className="flex gap-4 flex-col sm:flex-row items-center justify-center">
              <button className="px-6 py-3 rounded-full bg-[#37D7D9] text-white font-medium shadow-md w-full sm:w-auto">
                Book Online Counselling
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
          <button className="px-10 md:px-6 py-3 translate-y-10 rounded-full text-white bg-[#37D7D9] font-medium hover:bg-[#00B7C1] hover:shadow-md transition">
            Start Exploring
          </button>
        </div>
      </section>
      
      {/* ---------- OS2 Section (now scrolls then fixes) ---------- */}
      <div
        ref={os2ContainerRef}
        className="mt-50"
        style={{
          position: isOS2Fixed ? "fixed" : "relative",
          top: isOS2Fixed ? 0 : "auto",
          left: 0,
          right: 0,
          zIndex: isOS2Fixed ? 10 : 1,
          marginTop: isOS2Fixed ? 0 : "120px",
        }}
      >
        <div style={{ display: "flex", width: "100%" }}>
          {/* Sidebar Navigation */}
          <nav
            style={{
              minWidth: "104px",
              position: "fixed",
              top: isOS2Fixed
                ? isNavbarFixed
                  ? "20px"
                  : `${os1Height}px`
                : `${os1Height}px`,
              left: "100px",
              height: "80vh",
              background: "white",
              padding: "2rem 0.5rem",
              borderRadius: "24px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
              display: "flex",
              justifyContent: "center",
              zIndex: isNavbarFixed ? 1001 : 1,
              transition: "all 0.4s ease",
              transform: isNavbarFixed ? "scale(1.02)" : "scale(1)",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "6rem",
                alignItems: "center",
              }}
            >
              {sectionsData.map((sec) => (
                <li key={sec.id}>
                  <button
                    onClick={() => navigateToSection(sec.id)}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      background:
                        activeSection === sec.id
                          ? "linear-gradient(135deg, #38BDF8, #0EA5E9)"
                          : "rgba(0, 0, 0, 0.05)",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      boxShadow:
                        activeSection === sec.id
                          ? "0 4px 20px rgba(56, 189, 248, 0.4)"
                          : "0 2px 8px rgba(0, 0, 0, 0.1)",
                      color: activeSection === sec.id ? "white" : "#666",
                      transform:
                        activeSection === sec.id ? "scale(1.1)" : "scale(1)",
                    }}
                  >
                    {sec.icon}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Main Sections */}
          <div
            style={{
              marginLeft: "13%",
              width: "80%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <main
              style={{ width: "90%", padding: "3rem 2rem", minHeight: "500vh" }}
            >
              {sectionsData.map((sec) => (
                <section
                  key={sec.id}
                  id={sec.id}
                  style={{
                    background: "white",
                    borderRadius: "20px",
                    boxShadow:
                      "0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)",
                    height: "66vh",
                    display: "grid",
                    gridTemplateColumns: "40% 60%",
                    alignItems: "center",
                    gap: "2rem",
                    marginBottom: "5rem",
                    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "fixed",
                    width: "73%",
                    zIndex: 1,
                    padding: "2rem",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "16px",
                      overflow: "hidden",
                      background: "white",
                      padding: "0rem",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "12px",
                        background: "",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={sec.image}
                        alt={sec.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div
                    style={{
                      padding: "1rem 2rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "2rem",
                        fontWeight: "700",
                        color: "#1E293B",
                        marginBottom: "1.2rem",
                        fontFamily: "Space Grotesk, sans-serif",
                        ...sec.styles.h2,
                      }}
                    >
                      {sec.title}
                    </h2>
                    <p
                      style={{
                        fontSize: "1.1rem",
                        color: "#475569",
                        lineHeight: "1.7",
                        fontFamily: "DM Sans, sans-serif",
                        ...sec.styles.p,
                      }}
                    >
                      {sec.content}
                    </p>
                    <Link href={sec.link}>
                    <button
                      style={{
                        alignSelf: "flex-start",
                        width: "200px",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        padding: "1rem 0",
                        paddingLeft: "2rem",
                        borderRadius: "9999px",
                        background: "#37D7D9",
                        color: "white",
                        textAlign: "center",
                        border: "none",
                        cursor: "pointer",
                        boxShadow: "0 0 18px rgba(0, 0, 0, 0.25)",
                        transition:
                          "background 0.3s ease, transform 0.25s ease, box-shadow 0.25s ease",
                        ...sec.styles.button,
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = "#00B7C1";
                        e.target.style.transform = "scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "#37D7D9";
                        e.target.style.transform = "scale(1)";
                      }}
                    >
                      See More
                    </button>
             </Link>
                  </div>
                </section>
              ))}
            </main>
          </div>
        </div>
      </div>

       {/* Spacer to maintain scroll height when OS2 becomes fixed */}
      {isOS2Fixed && <div style={{ height: "300vh" }} />}

      <div style={{ position: "relative", zIndex: 9999 }}>
        <Footer />
      </div>



    </>
  );
}
