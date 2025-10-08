// "use client";

// import React, { useEffect, useState, useRef } from "react";

// const imagesData = [
//   {
//     id: "img-1",
//     src: "/images/ausImg.png",
//     alt: "Sydney Opera House",
//     stickyTop: 20,
//   },
//   {
//     id: "img-2",
//     src: "/images/lonImg.png",
//     alt: "London Bridge",
//     stickyTop: 70,
//   },
//   {
//     id: "img-3",
//     src: "/images/canImg.png",
//     alt: "Canada Flag",
//     stickyTop: 120,
//   },
//   {
//     id: "img-4",
//     src: "/images/gerImg.png",
//     alt: "Highway",
//     stickyTop: 170,
//   },
//   {
//     id: "img-5",
//     src: "/images/usaImg.png",
//     alt: "USA",
//     stickyTop: 220,
//   },
//   {
//     id: "img-6",
//     src: "/images/newzImg.png",
//     alt: "Auckland Skyline",
//     stickyTop: 270,
//   },
// ];

// const MmultipleImg2 = () => {
//   const [activeImage, setActiveImage] = useState("img-1");
//   const imagePositions = useRef<Record<string, any>>({});
//   const isNavigating = useRef(false);
//   const [isNavbarFixed, setIsNavbarFixed] = useState(false);
//   const bannerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const storePositions = () => {
//       const H = window.innerHeight;
//       const bannerHeight = 2 * H;

//       imagesData.forEach((image, index) => {
//         const naturalTop = bannerHeight + index * (0.66 * H + 64);
//         const threshold = bannerHeight + index * 300;

//         imagePositions.current[image.id] = {
//           ...image,
//           naturalTop,
//           currentTop: naturalTop,
//           isSticky: false,
//           threshold,
//           stickyTop: image.stickyTop ?? 20 + index * 50,
//         };
//       });

//       imagePositions.current.__computedBannerHeight = bannerHeight;
//     };

//     const updatePositions = () => {
//       const scrollY = window.scrollY;
//       const navbarSticky = scrollY >= 0;
//       setIsNavbarFixed(navbarSticky);

//       Object.entries(imagePositions.current).forEach(([id, pos]) => {
//         if (id === "__computedBannerHeight") return;

//         if (id === "img-1") {
//           const bannerHeightFromComputed =
//             imagePositions.current.__computedBannerHeight ??
//             bannerRef.current?.offsetHeight ??
//             0;
//           pos.currentTop = navbarSticky
//             ? bannerHeightFromComputed
//             : pos.naturalTop;
//           pos.isSticky = navbarSticky;
//         } else {
//           const shouldStick = scrollY >= pos.threshold;
//           pos.currentTop = shouldStick ? pos.stickyTop : pos.naturalTop;
//           pos.isSticky = shouldStick;
//         }

//         const el = document.getElementById(id);
//         if (el) {
//           el.style.top = `${pos.currentTop}px`;
//           el.style.transform = pos.isSticky ? "scale(1.02)" : "scale(1)";
//           el.style.zIndex = pos.isSticky
//             ? `${100 + pos.threshold}`
//             : `${pos.threshold}`;
//         }
//       });

//       if (!isNavigating.current) {
//         const bannerHeight = imagePositions.current.__computedBannerHeight || 0;
//         let newActive = "img-1";
//         if (scrollY >= bannerHeight + 1500) newActive = "img-6";
//         else if (scrollY >= bannerHeight + 1200) newActive = "img-5";
//         else if (scrollY >= bannerHeight + 900) newActive = "img-4";
//         else if (scrollY >= bannerHeight + 600) newActive = "img-3";
//         else if (scrollY >= bannerHeight + 300) newActive = "img-2";

//         setActiveImage(newActive);
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

//   const navigateToImage = (id: string) => {
//     const pos = imagePositions.current[id];
//     if (!pos) return;

//     isNavigating.current = true;
//     window.scrollTo({ top: pos.threshold, behavior: "smooth" });

//     setTimeout(() => {
//       isNavigating.current = false;
//       setActiveImage(id);
//     }, 1000);
//   };

//   return (
//     <>
//       {/* Banner - Empty space to maintain scroll positions */}
//       <div
//         ref={bannerRef}
//         style={{
//           width: "100%",
//           height: "350vh",
//         }}
//       ></div>

//       {/* Stacking Images */}
//       <div style={{ display: "flex", width: "100%" }}>
//         <div
//           style={{
//             marginLeft: "13%",
//             width: "60%",
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           <main style={{ width: "90%", padding: "3rem 2rem", minHeight: "700vh" }}>
//             {imagesData.map((img) => (
//               <div
//                 key={img.id}
//                 id={img.id}
//                 onClick={() => navigateToImage(img.id)}
//                 style={{
//                   borderRadius: "24px",
//                   marginBottom: "5rem",
//                   marginLeft: "-6rem",
//                   transition: "all 0.4s ease",
//                   position: "fixed",
//                   width: "95%",
//                   zIndex: 1,
//                   padding: "1.5rem",
//                   border: "1px solid rgba(255, 255, 255, 0.2)",
//                   overflow: "hidden",
//                   cursor: "pointer",
//                 }}
//               >
//                 <img
//                   src={img.src}
//                   alt={img.alt}
//                   style={{
//                     width: "100%",
//                     height: "auto",
//                     objectFit: "contain",
//                     borderRadius: "16px",
//                   }}
//                 />
//               </div>
//             ))}
//           </main>
//         </div>
//       </div>

//       {/* Footer Button */}
//       {/* <div
//         style={{
//           position: "relative",
//           zIndex: 9999,
//           display: "flex",
//           justifyContent: "center",
//           marginTop: "4rem",
//         }}
//       > */}
//         <button
//           style={{
//             background: "#37D7D9",
//             fontSize: "1.2rem",
//             fontWeight: "bold",
//             color: "white",
//             padding: "1rem 2rem",
//             borderRadius: "9999px",
//             border: "none",
//             cursor: "pointer",
//             boxShadow: "0 0 18px rgba(0, 0, 0, 0.25)",
//             transition:
//               "background 0.3s ease, transform 0.25s ease, box-shadow 0.25s ease",
//             fontFamily: "'DM Sans', sans-serif",
//           }}
//         >
//           Explore More Destinations
//         </button>
//     </>
//   );
// };

// export default MmultipleImg2;
