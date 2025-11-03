// app/top-universities/page.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UNIVERSITIES = [
  { img: "/images/tuaus3Img1.png", title: "University Of Melbourne", link: "/topunis/topuniversityaus/aus1uni" },
  { img: "/images/tuaus3Img2.png", title: "The University Of Sydney", link: "/universities/sydney" },
  { img: "/images/tuaus3Img3.png", title: "UNSW Sydney", link: "/universities/unsw" },
  { img: "/images/tuaus3Img4.png", title: "Australian National University", link: "/universities/anu" },
  { img: "/images/tuaus3Img5.png", title: "Monash University", link: "/universities/monash" },
  { img: "/images/tuaus3Img6.png", title: "University Of Queensland", link: "/universities/uq" },
  { img: "/images/tuaus3Img7.png", title: "The University Of Western Australia", link: "/universities/uwa" },
  { img: "/images/tuaus3Img8.png", title: "The University Of Adelaide", link: "/universities/adelaide" },
  { img: "/images/tuaus3Img9.png", title: "RMIT University", link: "/universities/rmit" },
  { img: "/images/tuaus3Img10.png", title: "University Of Technology Sydney", link: "/universities/uts" },
  { img: "/images/tuaus3Img11.png", title: "Macquarie University", link: "/universities/macquarie" },
  { img: "/images/tuaus3Img12.png", title: "Curtin University", link: "/universities/curtin" },
  { img: "/images/tuaus3Img13.png", title: "Deakin University", link: "/universities/deakin" },
  { img: "/images/tuaus3Img14.png", title: "University Of Wollongong", link: "/universities/wollongong" },
  { img: "/images/tuaus3Img15.png", title: "Queensland University Of Technology", link: "/universities/qut" },
  { img: "/images/tuaus3Img16.png", title: "Griffith University", link: "/universities/griffith" },
  { img: "/images/tuaus3Img17.png", title: "La Trobe University", link: "/universities/latrobe" },
  { img: "/images/tuaus3Img18.png", title: "University Of Newcastle", link: "/universities/newcastle" },
  { img: "/images/tuaus3Img19.png", title: "University Of Tasmania", link: "/universities/tasmania" },
  { img: "/images/tuaus3Img20.png", title: "Swinburne University Of Technology", link: "/universities/swinburne" },
];

export default function TuAus3() {
  return (
    <main className="bg-white min-h-screen -mt-60">
      <div className="max-w-[1100px] mx-auto px-6 py-20">
        {/* Heading */}
        <header className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#545454]">
            Top 20 Universities In Australia
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
                  alt={uni.title}
                  fill
                  className="object-cover"
                  priority={i < 3}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col items-center justify-between py-6 space-y-8 w-full">
                <h3 className="text-lg md:text-xl font-medium text-gray-800 text-center">
                  {uni.title}
                </h3>
                <Link href={uni.link}>
                  <button
                    type="button"
                    className="bg-[#37D7D9] text-white text-xs px-6 py-1.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Know more
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
