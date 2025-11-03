// app/top-universities/page.tsx
import Image from "next/image";
import React from "react";

const UNIVERSITIES = [
  { img: "/images/tunz3Img1.png", title: "University of Auckland" },
  { img: "/images/tunz3Img2.png", title: "University of Otago" },
  { img: "/images/tunz3Img3.png", title: "Victoria University of Wellington" },
  { img: "/images/tunz3Img4.png", title: "University of Canterbury " },
  { img: "/images/tunz3Img5.png", title: "Massey University" },
  { img: "/images/tunz3Img6.png", title: "University of Waikato" },
  { img: "/images/tunz3Img7.png", title: "Lincoln University" },
  { img: "/images/tunz3Img8.png", title: "Auckland University of Technology " },
  { img: "/images/tunz3Img9.png", title: "Unitec Institute of Technology" },
  { img: "/images/tunz3Img10.png", title: "Ara Institute of Canterbury" },
  { img: "/images/tunz3Img11.png", title: "Otago Polytechnic" },
  { img: "/images/tunz3Img12.png", title: "Waikato Institute of Technology" },
  { img: "/images/tunz3Img13.png", title: "Southern Institute of Technology" },
  { img: "/images/tunz3Img14.png", title: "Nelson Marlborough Institute of Technology" },
  { img: "/images/tunz3Img15.png", title: "Toi Ohomai Institute of Technology" },
  { img: "/images/tunz3Img16.png", title: "Manukau Institute of Technology" },
  { img: "/images/tunz3Img17.png", title: "Eastern Institute of Technology" },
  { img: "/images/tunz3Img18.png", title: "NorthTec" },
  { img: "/images/tunz3Img19.png", title: "Open Polytechnic of New Zealand" },
  { img: "/images/tunz3Img20.png", title: "Whitireia New Zealand"},
];

export default function TuNz3() {
  return (
    <main className="bg-white min-h-screen -mt-60">
      <div className="max-w-[1100px] mx-auto px-6 py-20">
        {/* Heading */}
        <header className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#545454]">
            Top 20 Universities In New Zealand
          </h1>
        </header>

        {/* Card Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {UNIVERSITIES.map((uni, i) => (
            <div
              key={i}
              className="relative w-[320px] flex flex-col items-center overflow-hidden bg-white hover:bg-white hover:shadow-lg transition-all duration-300 pb-16 rounded-2xl"
            >
              {/* Image */}
              <div className="relative w-full h-[200px] overflow-hidden rounded-t-2xl">
                <Image
                  src={uni.img}
                  fill
                  alt={uni.title}
                  className="object-cover"
                  priority={i < 3}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col items-center justify-between py-6 space-y-8 w-full">
                <h3 className="text-lg md:text-xl font-medium text-gray-800 text-center">
                  {uni.title}
                </h3>
                <button
                  type="button"
                  className="bg-[#37D7D9] text-white text-xs px-6 py-1.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
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
