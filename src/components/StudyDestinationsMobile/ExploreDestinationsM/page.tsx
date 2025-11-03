"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Marker = {
  country: string;
  description: string;
  images: string[];
  link: string;
};

const markers: Marker[] = [
  {
    country: "CANADA",
    description:
      "Canada offers globally recognized education, affordable study options, and a welcoming multicultural community.",
    images: ["/images/canslideImg1.png", "/images/canslideImg2.png", "/images/canslideImg3.png"],
    link: "/StudyDestinations/countrypage3",
  },
  {
    country: "USA",
    description:
      "The USA is home to top-ranked institutions, cutting-edge research, and endless career opportunities.",
    images: ["/images/usaslideImg1.png", "/images/usaslideImg2.png", "/images/usaslideImg3.png"],
    link: "/StudyDestinations/countrypage5",
  },
  {
    country: "UK",
    description:
      "The UK provides prestigious universities, diverse courses, and a rich cultural and academic heritage.",
    images: ["/images/ukslideImg1.png", "/images/ukslideImg2.png", "/images/ukslideImg3.png"],
    link: "/StudyDestinations/countrypage4",
  },
  {
    country: "GERMANY",
    description:
      "Germany offers tuition-free or low-cost education, strong research facilities, and globally respected degrees.",
    images: ["/images/gerslideImg1.png", "/images/gerslideImg2.png", "/images/gerslideImg3.png"],
    link: "/StudyDestinations/countrypage6",
  },
  {
    country: "NEW ZEALAND",
    description:
      "New Zealand combines high-quality education with a safe, student-friendly environment and great work pathways.",
    images: ["/images/nzslideImg1.png", "/images/nzslideImg2.png", "/images/nzslideImg3.png"],
    link: "/StudyDestinations/countrypage7",
  },
  {
    country: "AUSTRALIA",
    description:
      "Australia is known for its world-class universities, practical learning, and excellent post-study work opportunities.",
    images: ["/images/ausslideImg1.png", "/images/ausslideImg2.png", "/images/ausslideImg3.png"],
    link: "/StudyDestinations/countrypage1",
  },
];

const ExploreDestinationsMobile = () => {
  const [currentIndex, setCurrentIndex] = useState(markers.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Triple the cards for seamless loop
  const tripleMarkers = [...markers, ...markers, ...markers];

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Check if we need to reset position after transition
    if (currentIndex >= markers.length * 2) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(markers.length);
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      }, 500);
    } else if (currentIndex <= 0) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(markers.length);
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      }, 500);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex]);

  return (
    <section className="flex flex-col items-center text-center py-20 bg-white">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-[#545454] mb-2">
        Explore Your Dream Destination
      </h2>
      <p className="text-[#6F6F6F] text-base max-w-md px-4 mb-6 leading-relaxed">
        From Canada to Australia, discover the best countries to shape your education and
        future career.
      </p>

      {/* World Map Image */}
      <div className="w-full flex justify-center mb-8">
        <Image
          src="/images/worldMapmimg.png"
          alt="World Map"
          width={400}
          height={220}
          className="w-[90%] h-auto object-contain"
        />
      </div>

      {/* Card Slider */}
      <div className="relative w-full flex justify-center items-center">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 bg-[#37D7D9] text-white p-2 rounded-full shadow-md z-10 hover:bg-[#2fc5c7] transition-colors"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Cards Container */}
        <div className="overflow-hidden w-[100%] py-10">
          <div
            className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
            style={{
              transform: `translateX(calc(-${currentIndex * 306}px + 50% - 140px))`,
            }}
          >
            {tripleMarkers.map((marker, index) => (
              <div
                key={index}
                className={`mx-3 w-[280px] flex-shrink-0 bg-white rounded-2xl p-4 transition-all duration-300 ${
                  index === currentIndex ? "scale-100 shadow-[0_0_20px_rgba(0,0,0,0.15)]" : "scale-90 shadow-[0_0_15px_rgba(0,0,0,0.1)]"
                }`}
              >
                <h3 className="text-lg font-bold text-[#545454] text-center">
                  {marker.country}
                </h3>
                <p className="text-sm text-[#6F6F6F] mt-2 text-center">
                  {marker.description}
                </p>

                {/* Inner auto-sliding image carousel */}
                <div className="relative w-full overflow-hidden rounded-xl mt-4">
                  <div className="flex animate-imageSlide">
                    {[...marker.images, ...marker.images].map((img, i) => (
                      <Image
                        key={i}
                        src={img}
                        alt={`${marker.country} ${i}`}
                        width={120}
                        height={80}
                        className="object-cover w-24 h-18 flex-shrink-0"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <Link href={marker.link}>
                    <button className="mt-4 px-5 py-1.5 text-sm bg-[#37D7D9] text-white rounded-full shadow-md hover:bg-[#2fc5c7] transition-colors">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 bg-[#37D7D9] text-white p-2 rounded-full shadow-md z-10 hover:bg-[#2fc5c7] transition-colors"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Animation for inner images */}
      <style>{`
        @keyframes imageSlide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-imageSlide {
          display: flex;
          animation: imageSlide 10s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default ExploreDestinationsMobile;