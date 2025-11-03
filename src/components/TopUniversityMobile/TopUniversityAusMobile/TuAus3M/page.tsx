"use client";
import Image from "next/image";
import React from "react";

const UNIVERSITIES = [
  { img: "/images/tuaus3Img1.png", title: "University Of Melbourne", link: "/topunis/topuniversityaus/aus1uni" },
  { img: "/images/tuaus3Img2.png", title: "The University Of Sydney", link: "/university-of-sydney" },
  { img: "/images/tuaus3Img3.png", title: "UNSW Sydney", link: "/unsw-sydney" },
  { img: "/images/tuaus3Img4.png", title: "Australian National University", link: "/australian-national-university" },
  { img: "/images/tuaus3Img5.png", title: "Monash University", link: "/monash-university" },
  { img: "/images/tuaus3Img6.png", title: "University Of Queensland", link: "/university-of-queensland" },
  { img: "/images/tuaus3Img7.png", title: "The University Of Western Australia", link: "/university-of-western-australia" },
  { img: "/images/tuaus3Img8.png", title: "The University Of Adelaide", link: "/university-of-adelaide" },
  { img: "/images/tuaus3Img9.png", title: "RMIT University", link: "/rmit-university" },
  { img: "/images/tuaus3Img10.png", title: "University Of Technology Sydney", link: "/university-of-technology-sydney" },
  { img: "/images/tuaus3Img11.png", title: "Macquarie University", link: "/macquarie-university" },
  { img: "/images/tuaus3Img12.png", title: "Curtin University", link: "/curtin-university" },
  { img: "/images/tuaus3Img13.png", title: "Deakin University", link: "/deakin-university" },
  { img: "/images/tuaus3Img14.png", title: "University Of Wollongong", link: "/university-of-wollongong" },
  { img: "/images/tuaus3Img15.png", title: "Queensland University Of Technology", link: "/queensland-university-of-technology" },
  { img: "/images/tuaus3Img16.png", title: "Griffith University", link: "/griffith-university" },
  { img: "/images/tuaus3Img17.png", title: "La Trobe University", link: "/la-trobe-university" },
  { img: "/images/tuaus3Img18.png", title: "University Of Newcastle", link: "/university-of-newcastle" },
  { img: "/images/tuaus3Img19.png", title: "University Of Tasmania", link: "/university-of-tasmania" },
  { img: "/images/tuaus3Img20.png", title: "Swinburne University Of Technology", link: "/swinburne-university-of-technology" },
];

export default function TuAus3M() {
  return (
    <main className="bg-white min-h-screen -mt-120">
      <div className="max-w-[1100px] mx-auto px-10 py-16">
        {/* Heading */}
        <header className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#545454]">
            Top 20 Universities In Australia
          </h1>
        </header>

        {/* Grid for mobile (2 columns) */}
        <section className="grid grid-cols-2 gap-x-4 gap-y-6 justify-items-center">
          {UNIVERSITIES.map((uni, i) => (
            <div
              key={i}
              className="w-full max-w-[240px] flex flex-col items-center overflow-hidden bg-white shadow-md rounded-2xl"
            >
              {/* Image */}
              <div className="relative w-full h-[120px] overflow-hidden">
                <Image
                  src={uni.img}
                  alt={uni.title}
                  fill
                  className="object-cover"
                  priority={i < 3}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col items-center justify-between py-4 space-y-4 w-full">
                <h3 className="text-xs text-gray-800 text-center leading-snug">
                  {uni.title}
                </h3>
                <button
                  onClick={() => (window.location.href = uni.link)}
                  className="bg-[#37D7D9] text-white text-xs px-3 py-1 rounded-full shadow-lg hover:bg-[#2fc4c6] transition-colors duration-300"
                >
                  Know more
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
