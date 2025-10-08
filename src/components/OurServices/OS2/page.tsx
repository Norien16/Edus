// "use client";

// import React, { useEffect, useState, useRef } from "react";
// import { ClipboardCheck, BookOpen, Users, Headset } from "lucide-react";
// import Image from "next/image";
// import Footer from "@/components/footer/page";

// // 🔹 Define type for each section
// type Section = {
//   id: string;
//   title: string;
//   icon: React.ReactNode;
//   content: string;
//   image: string;
//   stickyTop?: number;
//   styles: {
//     h2: React.CSSProperties;
//     p: React.CSSProperties;
//     button: React.CSSProperties;
//   };
// };

// const sectionsData: Section[] = [
//   {
//     id: "section-1",
//     title: "AI-Powered Tests",
//     icon: <ClipboardCheck size={32} />,
//     content:
//       "Get personalized recommendations for the best universities and courses based on your profile. Our AI-driven tests analyze your academic background, career goals, and interests to guide your study abroad journey.",
//     image: "/images/os2Img1.png",
//     styles: {
//       h2: { marginTop: "7%", marginLeft: "-3%", lineHeight: "1.1" },
//       p: { marginTop: "6%", marginLeft: "-3%" },
//       button: { marginTop: "3.5rem", marginLeft: "-4%" },
//     },
//   },
//   {
//     id: "section-2",
//     title: "English Language Assessment",
//     icon: <BookOpen size={32} />,
//     content:
//       "Test your English proficiency through our AI-driven language evaluation. It measures your listening, reading, speaking, and writing skills to give you a true picture of your potential. Use these insights to prepare for global exams like IELTS or PTE with confidence.",
//     image: "/images/os2Img2.png",
//     stickyTop: 70,
//     styles: {
//       h2: { margin: "2.8%", marginLeft: "-5%", lineHeight: "1.1" },
//       p: { marginTop: "5%", marginLeft: "-5%" },
//       button: { marginTop: "2.5rem", marginLeft: "-6%" },
//     },
//   },
//   {
//     id: "section-3",
//     title: "Community Hub",
//     icon: <Users size={32} />,
//     content:
//       "Be part of a global student network designed to support and inspire you. From sharing real experiences to finding peers with similar goals, the hub is a place to connect, learn, and grow together. Get authentic insights that go beyond brochures and official guides.",
//     image: "/images/os2Img3.png",
//     stickyTop: 120,
//     styles: {
//       h2: { marginTop: "10%", marginLeft: "-5%", lineHeight: "1.1" },
//       p: { marginTop: "6%", marginLeft: "-5%" },
//       button: { marginTop: "2.5rem", marginLeft: "-6%" },
//     },
//   },
//   {
//     id: "section-4",
//     title: "AI Guidance & Counselor Support",
//     icon: <Headset size={32} />,
//     content:
//       "Access instant visa and career advice with our AI-powered chatbot—available 24/7 for fast, reliable answers. If needed, human counselors step in for personalized guidance, ensuring you’re supported at every stage.",
//     image: "/images/os2Img4.png",
//     stickyTop: 170,
//     styles: {
//       h2: { marginTop: "6%", marginLeft: "-6%", lineHeight: "1.1" },
//       p: { marginTop: "5%", marginLeft: "-6%" },
//       button: { marginTop: "2rem", marginLeft: "-6.5%" },
//     },
//   },
// ];

// // 🔹 Type for section position tracking
// type SectionPosition = Section & {
//   naturalTop: number;
//   currentTop: number;
//   isSticky: boolean;
//   threshold: number;
// };

// const OS2: React.FC = () => {
//   const [activeSection, setActiveSection] = useState<string>("section-1");
//   const sectionPositions = useRef<Record<string, SectionPosition>>({});
//   const isNavigating = useRef<boolean>(false);
//   const [isNavbarFixed, setIsNavbarFixed] = useState<boolean>(false);

//   useEffect(() => {
//     const storePositions = () => {
//       sectionsData.forEach((section, index) => {
//         const naturalTop = index * (window.innerHeight * 0.66 + 64);
//         sectionPositions.current[section.id] = {
//           ...section,
//           naturalTop,
//           currentTop: naturalTop,
//           isSticky: false,
//           threshold: index * 300,
//         };
//       });
//     };

//     const updatePositions = () => {
//       const scrollY = window.scrollY;
//       const navbarTop = 20;
//       const navbarSticky = scrollY >= 0;
//       setIsNavbarFixed(navbarSticky);

//       Object.entries(sectionPositions.current).forEach(([id, pos]) => {
//         if (id === "section-1") {
//           pos.currentTop = navbarSticky ? navbarTop : pos.naturalTop;
//           pos.isSticky = navbarSticky;
//         } else {
//           const shouldStick = scrollY >= pos.threshold;
//           pos.currentTop = shouldStick ? pos.stickyTop ?? pos.naturalTop : pos.naturalTop;
//           pos.isSticky = shouldStick;
//         }

//         const el = document.getElementById(id);
//         if (el) {
//           el.style.top = `${pos.currentTop}px`;
//           el.style.transform = pos.isSticky ? "scale(1.02)" : "scale(1)";
//           el.style.zIndex = pos.isSticky ? `${100 + pos.threshold}` : `${pos.threshold}`;
//         }
//       });

//       if (!isNavigating.current) {
//         let newActive = "section-1";
//         if (scrollY >= 900) newActive = "section-4";
//         else if (scrollY >= 600) newActive = "section-3";
//         else if (scrollY >= 300) newActive = "section-2";

//         setActiveSection(newActive);
//       }
//     };

//     const handleScroll = () => requestAnimationFrame(updatePositions);

//     storePositions();
//     updatePositions();

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", storePositions);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", storePositions);
//     };
//   }, []);

//   const navigateToSection = (id: string) => {
//     const pos = sectionPositions.current[id];
//     if (!pos) return;

//     isNavigating.current = true;
//     window.scrollTo({ top: pos.threshold, behavior: "smooth" });

//     setTimeout(() => {
//       isNavigating.current = false;
//       setActiveSection(id);
//     }, 1000);
//   };

//   return (
//     <>
//     <div className="mt-50">
//       <div style={{ display: "flex", width: "100%" }}>
//         {/* Sidebar Navigation */}
//         <nav
//           style={{
//             minWidth: "104px",
//             position: isNavbarFixed ? "fixed" : "relative",
//             top: isNavbarFixed ? "2%" : "unset",
//             left: "100px",
//             height: "80vh",
//             background: "white",
//             padding: "2rem 0.5rem",
//             borderRadius: "24px",
//             boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
//             display: "flex",
//             justifyContent: "center",
//             zIndex: 1000,
//           }}
//         >
//           <ul
//             style={{
//               listStyle: "none",
//               padding: 0,
//               margin: 0,
//               display: "flex",
//               flexDirection: "column",
//               gap: "6rem",
//               alignItems: "center",
//             }}
//           >
//             {sectionsData.map((sec) => (
//               <li key={sec.id}>
//                 <button
//                   onClick={() => navigateToSection(sec.id)}
//                   style={{
//                     width: "50px",
//                     height: "50px",
//                     borderRadius: "12px",
//                     background:
//                       activeSection === sec.id
//                         ? "linear-gradient(135deg, #38BDF8, #0EA5E9)"
//                         : "rgba(0, 0, 0, 0.05)",
//                     border: "none",
//                     cursor: "pointer",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     transition: "all 0.3s ease",
//                     boxShadow:
//                       activeSection === sec.id
//                         ? "0 4px 20px rgba(56, 189, 248, 0.4)"
//                         : "0 2px 8px rgba(0, 0, 0, 0.1)",
//                     color: activeSection === sec.id ? "white" : "#666",
//                     transform:
//                       activeSection === sec.id ? "scale(1.1)" : "scale(1)",
//                   }}
//                 >
//                   {sec.icon}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Main Sections */}
//         <div
//           style={{
//             marginLeft: "13%",
//             width: "80%",
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           <main style={{ width: "90%", padding: "3rem 2rem", minHeight: "500vh" }}>
//             {sectionsData.map((sec) => (
//               <section
//                 key={sec.id}
//                 id={sec.id}
//                 style={{
//                   background: "white",
//                   borderRadius: "20px",
//                   boxShadow:
//                     "0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)",
//                   height: "66vh",
//                   display: "grid",
//                   gridTemplateColumns: "40% 60%",
//                   alignItems: "center",
//                   gap: "2rem",
//                   marginBottom: "5rem",
//                   transition: "all 0.4s ease",
//                   position: "fixed",
//                   width: "73%",
//                   zIndex: 1,
//                   padding: "2rem",
//                   border: "1px solid rgba(255, 255, 255, 0.2)",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     borderRadius: "16px",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <Image
//                     src={sec.image}
//                     alt={sec.title}
//                     width={500}
//                     height={400}
//                     style={{
//                       width: "calc(100% - 7px)",
//                       height: "auto",
//                       objectFit: "contain",
//                       borderRadius: "12px",
//                     }}
//                   />
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "center",
//                     padding: "0 1rem",
//                   }}
//                 >
//                   <h2
//                     style={{
//                       fontFamily: "'Space Grotesk', sans-serif",
//                       fontWeight: "bold",
//                       fontSize: "2.2rem",
//                       marginBottom: "1rem",
//                       background: "linear-gradient(135deg, #1e293b, #475569)",
//                       WebkitBackgroundClip: "text",
//                       backgroundClip: "text",
//                       color: "transparent",
//                       ...sec.styles.h2,
//                     }}
//                   >
//                     {sec.title}
//                   </h2>
//                   <p
//                     style={{
//                       fontFamily: "'DM Sans', sans-serif",
//                       fontWeight: "400",
//                       whiteSpace: "normal",
//                       width: "545px",
//                       letterSpacing: "0.9px",
//                       fontSize: "1.3rem",
//                       color: "#64748b",
//                       lineHeight: "1.4",
//                       ...sec.styles.p,
//                     }}
//                   >
//                     {sec.content}
//                   </p>
//                   <button
//                     style={{
//                       alignSelf: "flex-start",
//                       width: "200px",
//                       fontSize: "1.2rem",
//                       fontWeight: "bold",
//                       padding: "1rem 0",
//                       borderRadius: "9999px",
//                       background: "#37D7D9",
//                       color: "white",
//                       textAlign: "center",
//                       border: "none",
//                       cursor: "pointer",
//                       boxShadow: "0 0 18px rgba(0, 0, 0, 0.25)",
//                       transition:
//                         "background 0.3s ease, transform 0.25s ease, box-shadow 0.25s ease",
//                       ...sec.styles.button,
//                     }}
//                   >
//                     See More
//                   </button>
//                 </div>
//               </section>
//             ))}
//           </main>
//         </div>
//       </div>

//       <div style={{ zIndex: 9999, position: "relative" }}>
//         <Footer />
//       </div>
//       </div>
//     </>
//   );
// };

// export default OS2;
