"use client";
import Image from "next/image";
import Link from "next/link"; // ✅ import Link
import React, { useState } from "react";
import img from "../../../../public/images/worldMapmimg.png"

type Marker = {
  left: string;
  top: string;
  country: string;
  description: string;
  images: string[];
  link: string; // ✅ added
  cardPosition?: string;
  overlayPosition?: string;
  overlayImages?: { src: string; width?: number; height?: number }[];
};

const markers: Marker[] = [
  {
    left: "153px",
    top: "217px",
    country: "CANADA",
    description:
      "“Canada offers globally recognized education, affordable study options, and a welcoming multicultural community.”",
    images: [
      "/images/canslideImg1.png",
      "/images/canslideImg2.png",
      "/images/canslideImg3.png",
      "/images/canslideImg4.png",
      "/images/canslideImg5.png",
      "/images/canslideImg6.png",
      "/images/canslideImg7.png",
    ],
    overlayImages: [{ src: "/images/updotImg.png", width: 345, height: 250 }],
    cardPosition: "-top-[257px] right-[-172px]",
    overlayPosition: "top-[-262px] left-[-167px]",
    link: "/StudyDestinations/countrypage3", // ✅ added individual link
  },
  {
    left: "267px",
    top: "302px",
    country: "USA",
    description:
      "“The USA is home to top-ranked institutions, cutting-edge research, and endless career opportunities.”",
    images: [
      "/images/usaslideImg1.png",
      "/images/usaslideImg2.png",
      "/images/usaslideImg3.png",
      "/images/usaslideImg4.png",
      "/images/usaslideImg5.png",
      "/images/usaslideImg6.png",
      "/images/usaslideImg7.png",
    ],
    overlayImages: [{ src: "/images/downdotImg.png", width: 345, height: 250 }],
    cardPosition: "top-[20px] right-[-172px]",
    overlayPosition: "top-[-19px] left-[-167px]",
    link: "/StudyDestinations/countrypage5", // ✅
  },
  {
    left: "538px",
    top: "240px",
    country: "UK",
    description:
      "“The UK provides prestigious universities, diverse courses, and a rich cultural and academic heritage.”",
    images: [
      "/images/ukslideImg1.png",
      "/images/ukslideImg2.png",
      "/images/ukslideImg3.png",
      "/images/ukslideImg4.png",
      "/images/ukslideImg5.png",
      "/images/ukslideImg6.png",
      "/images/ukslideImg7.png",
    ],
    overlayImages: [{ src: "/images/downdotImg.png", width: 345, height: 250 }],
    cardPosition: "right-[-172.5px] top-[22px]",
    overlayPosition: "top-[-19px] left-[-167px]",
    link: "/StudyDestinations/countrypage4", // ✅
  },
  {
    left: "590px",
    top: "245px",
    country: "GERMANY",
    description:
      "“Germany offers tuition-free or low-cost education, strong research facilities, and globally respected degrees.”",
    images: [
      "/images/gerslideImg1.png",
      "/images/gerslideImg2.png",
      "/images/gerslideImg3.png",
      "/images/gerslideImg4.png",
      "/images/gerslideImg5.png",
      "/images/gerslideImg6.png",
      "/images/gerslideImg7.png",
    ],
    overlayImages: [{ src: "/images/downdotImg.png", width: 345, height: 250 }],
    cardPosition: "right-[-172.5px] top-[22px]",
    overlayPosition: "top-[-19px] left-[-167px]",
    link: "/StudyDestinations/countrypage6", // ✅
  },
  {
    left: "94%",
    top: "531px",
    country: "NEW ZEALAND",
    description:
      "“New Zealand combines high-quality education with a safe, student-friendly environment and great work pathways.”",
    images: [
      "/images/nzslideImg1.png",
      "/images/nzslideImg2.png",
      "/images/nzslideImg3.png",
      "/images/nzslideImg4.png",
      "/images/nzslideImg5.png",
      "/images/nzslideImg6.png",
      "/images/nzslideImg7.png",
    ],
    overlayImages: [{ src: "/images/downsidedotImg.png", width: 370, height: 250 }],
    cardPosition: "right-[-8px] top-[-224px]",
    overlayPosition: "top-[-235px] left-[-330px]",
    link: "/StudyDestinations/countrypage7", // ✅
  },
  {
    left: "1016px",
    top: "471px",
    country: "AUSTRALIA",
    description:
      "“Australia is known for its world-class universities, practical learning, and excellent post-study work opportunities.”",
    images: [
      "/images/ausslideImg1.png",
      "/images/ausslideImg2.png",
      "/images/ausslideImg3.png",
      "/images/ausslideImg4.png",
      "/images/ausslideImg5.png",
      "/images/ausslideImg6.png",
      "/images/ausslideImg7.png",
    ],
    overlayImages: [{ src: "/images/fullsidedotImg.png", width: 370, height: 250 }],
    cardPosition: "right-[-5px] top-[-104px]",
    overlayPosition: "top-[-112px] left-[-330px]",
    link: "/StudyDestinations/countrypage1", // ✅
  },
];


const ExploreDestination: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="flex flex-col items-center text-center py-16 mt-16 bg-white">
      <h2 className="text-2xl md:text-[37px] font-bold text-[#545454] mb-4">
        Explore Your Dream Destination
      </h2>
      <p className="text-[#6F6F6F] text-base sm:text-lg md:text-[23px] font-stretch-extra-expanded max-w-4xl mb-14 leading-relaxed text-center" style={{ fontFamily: "DM Sans" }}>
        From Canada to Australia, discover the best countries to shape your education
        <br />
        <span className="text-lg md:text-xl block">and future career.</span>
      </p>

      {/* Responsive Map Container */}
      <div className="relative w-full max-w-[1220px] mt-8">
        <Image
          src={img}
          alt="World Map"
          width={1220}
          height={560}
          className="w-full h-auto"
        />

        {/* Markers */}
{markers.map((marker, index) => (
  <div
    key={index}
    className="absolute"
    style={{ left: marker.left, top: marker.top }}
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
  >
    {/* Marker Dot */}
    <span className="radiate w-7 h-7 z-10"></span>

    {/* Overlay Images - higher z-index so it hides marker dot */}
    <div
      className={`absolute ${marker.overlayPosition ?? "-top-28 left-1/2 -translate-x-1/2"} 
                  flex flex-wrap gap-2 p-2 rounded-xl z-50 w-[500px] 
                  transform transition-all duration-300 ease-out 
                  ${hovered === index ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
    >
      {marker.overlayImages?.map((img, i) => (
        <Image
          key={i}
          src={img.src}
          alt={`${marker.country} overlay ${i + 1}`}
          width={img.width ?? 500}
          height={img.height ?? 250}
          className="object-cover"
        />
      ))}
    </div>

    {/* Hover Card */}
    <div
      className={`absolute ${marker.cardPosition ?? "-top-[262px] left-1/2 -translate-x-1/2"} 
                  w-72 md:w-80 rounded-2xl p-4 z-50 transform transition-all duration-300 ease-out 
                  ${hovered === index ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
    >
      <h3 className="text-lg font-bold text-black">{marker.country}</h3>
      <p className="text-sm text-[#6F6F6F] mt-2" style={{ fontFamily: "DM Sans" }}>
        {marker.description}
      </p>

      <div className="relative w-full rounded-xl overflow-hidden mt-4">
        <div className="flex animate-slide">
          {[...marker.images, ...marker.images].map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={`${marker.country} image ${i + 1}`}
              width={100}
              height={60}
              className="object-cover w-24 h-20 flex-shrink-0"
            />
          ))}
        </div>
      </div>

      <Link href={marker.link}>
  <button className="mt-2 px-4 py-1 text-sm bg-[#37D7D9] text-white rounded-full hover:bg-[#2cc2c4] hover:shadow-md hover:shadow-gray-400 transition-shadow duration-300 ease-in-out">
    Learn More
  </button>
</Link>
    </div>
  </div>
))}

      </div>

      <style>{`
  /* Radiating Marker */
  .radiate {
    position: absolute;
    background-color: #37d7d9;
    border-radius: 50%;
    border: 4px solid white;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }

  .radiate::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-color: rgba(55, 215, 217, 0.4);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(1);
    animation: radiate 3s infinite ease-out;
  }

  @keyframes radiate {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.6;
    }
    60% {
      transform: translate(-50%, -50%) scale(2.5);
      opacity: 0.3;
    }
    80% {
      transform: translate(-50%, -50%) scale(3);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  .radiate::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120%;
    height: 120%;
    border: 2px solid #37d7d9;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
    animation: radarBlink 5.8s infinite ease-out;
  }

  @keyframes radarBlink {
    0%, 45% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(1);
    }
    55% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.2);
    }
    75% {
      opacity: 0.4;
      transform: translate(-50%, -50%) scale(1.6);
    }
    80%, 100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(2);
    }
  }

  /* Sliding Images */
  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-slide {
    display: flex;
    animation: slide 12s linear infinite;
    width: max-content;
  }
`}</style>

    </section>
  );
};

export default ExploreDestination;
