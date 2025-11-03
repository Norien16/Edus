// app/top-universities/page.tsx
import Image from "next/image";
import React from "react";

const UNIVERSITIES = [
  { img: "/images/tuusa3Img1.png", title: "Harvard University" },
  { img: "/images/tuusa3Img2.png", title: "Stanford University" },
  { img: "/images/tuusa3Img3.png", title: "Massachusetts Institute of Technology" },
  { img: "/images/tuusa3Img4.png", title: "California Institute of Technology" },
  { img: "/images/tuusa3Img5.png", title: "University of Chicago" },
  { img: "/images/tuusa3Img6.png", title: "Princeton University" },
  { img: "/images/tuusa3Img7.png", title: "Columbia University" },
  { img: "/images/tuusa3Img8.png", title: "Yale University" },
  { img: "/images/tuusa3Img9.png", title: "University of Pennsylvania" },
  { img: "/images/tuusa3Img10.png", title: "Cornell University" },
  { img: "/images/tuusa3Img11.png", title: "Johns Hopkins University" },
  { img: "/images/tuusa3Img12.png", title: "Northwestern University" },
  { img: "/images/tuusa3Img13.png", title: "University of California, Berkeley" },
  { img: "/images/tuusa3Img14.png", title: "University of California, Los Angeles" },
  { img: "/images/tuusa3Img15.png", title: "University of Michigan" },
  { img: "/images/tuusa3Img16.png", title: "Duke University" },
  { img: "/images/tuusa3Img17.png", title: "New York University" },
  { img: "/images/tuusa3Img18.png", title: "Carnegie Mellon University" },
  { img: "/images/tuusa3Img19.png", title: "Brown University" },
  { img: "/images/tuusa3Img20.png", title: "University of Washington" },
];

export default function TuUsa3() {
  return (
    <main className="bg-white min-h-screen -mt-60">
      <div className="max-w-[1100px] mx-auto px-6 py-20">
        {/* Heading */}
        <header className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#545454]">
            Top 20 Universities In USA
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
