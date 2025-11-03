// app/top-universities/page.tsx
import Image from "next/image";
import React from "react";

const UNIVERSITIES = [
  { img: "/images/tuuk3Img1.png", title: "Technical University of Munich" },
  { img: "/images/tuuk3Img2.png", title: "Ludwig Maximilian University of Munich" },
  { img: "/images/tuuk3Img3.png", title: "UHeidelberg University" },
  { img: "/images/tuuk3Img4.png", title: "Humboldt University of Berlin" },
  { img: "/images/tuuk3Img5.png", title: "RWTH Aachen University" },
  { img: "/images/tuuk3Img6.png", title: "Free University of Berlin" },
  { img: "/images/tuuk3Img7.png", title: "University of Tübingen" },
  { img: "/images/tuuk3Img8.png", title: "University of Freiburg" },
  { img: "/images/tuuk3Img9.png", title: "Technical University of Berlin" },
  { img: "/images/tuuk3Img10.png", title: "University of Bonn " },
  { img: "/images/tuuk3Img11.png", title: "University of Göttingen" },
  { img: "/images/tuuk3Img12.png", title: "University of Hamburg" },
  { img: "/images/tuuk3Img13.png", title: "University of Stuttgart" },
  { img: "/images/tuuk3Img14.png", title: "University of Cologne" },
  { img: "/images/tuuk3Img15.png", title: "Karlsruhe Institute of Technology" },
  { img: "/images/tuuk3Img16.png", title: "Dresden University of Technology" },
  { img: "/images/tuuk3Img17.png", title: "University of Münster" },
  { img: "/images/tuuk3Img18.png", title: "University of Erlangen" },
  { img: "/images/tuuk3Img19.png", title: "University of Würzburg" },
  { img: "/images/tuuk3Img20.png", title: "University of Leipzig" },
];

export default function TuUk3() {
  return (
    <main className="bg-white min-h-screen -mt-60">
      <div className="max-w-[1100px] mx-auto px-6 py-20">
        {/* Heading */}
        <header className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#545454]">
            Top 20 Universities In UK
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
