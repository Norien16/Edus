"use client";
import React from "react";

// type Card = {
//   image: string;
//   position: keyof typeof positionClasses;
// };

// const cards: Card[] = [
//   { image: "/images/cardImgnew3.jpg", position: "top-left" },
//   { image: "/images/cardImgnew2.jpg", position: "top-right" },
//   { image: "/images/cardImgnew4.jpg", position: "middle-left" },
//   { image: "/images/cardImgnew1.jpg", position: "middle-right" },
//   { image: "/images/cardImgnew5.jpg", position: "bottom-left" },
//   { image: "/images/cardImgnew.jpg", position: "bottom-right" },
// ];

// const positionClasses = {
//   "top-left": "absolute top-40 left-2 sm:top-60 sm:left-4 md:top-80 md:left-8 lg:top-103 lg:left-1 lg:-translate-x-1/3",
//   "top-right": "absolute top-50 right-2 sm:top-80 sm:right-6 md:top-100 md:right-10 lg:top-120 lg:right-25",
//   "middle-left":
//     "absolute top-30 left-2 sm:top-40 sm:left-4 md:top-50 md:left-8 lg:top-45 lg:left-1 lg:-translate-y-1/2 lg:-translate-x-[0.1%]",
//   "middle-right":
//     "absolute top-35 right-2 sm:top-45 sm:right-4 md:top-50 md:right-8 lg:top-55 lg:right-1 lg:-translate-y-1/2 lg:translate-x-1/4",
//   "bottom-left":
//     "absolute bottom-10 left-2 sm:bottom-15 sm:left-4 md:bottom-20 md:left-6 lg:bottom-5 lg:left-1 lg:translate-y-1/5 lg:-translate-x-1/4",
//   "bottom-right":
//     "absolute bottom-10 right-2 sm:bottom-15 sm:right-4 md:bottom-20 md:right-6 lg:bottom-5 lg:right-5 lg:translate-y-1/2",
// };

export default function WhyChooseUs() {
  return (
    <section className="relative w-full">
      {/* TEXT BLOCK */}
      <div className="mt-10 sm:mt-20 text-center px-4">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-[#545454]"
          style={{ fontFamily: "Space Grotesk" }}
        >
          Why Choose Us?
        </h2>
        <p
          className="text-sm sm:text-lg md:text-xl lg:text-2xl max-w-7xl mx-auto text-[#6F6F6F]"
          style={{ fontFamily: "DM Sans" }}
        >
          EduLinks has built a trusted legacy in guiding students toward their
          international education goals.
          <br className="hidden md:block" />
          From expert counseling to AI-driven tools and language test
          preparation, we make your journey
          <br className="hidden md:block" />
          abroad simple, smooth, and successful.
        </p>
      </div>

      <div className="relative mb-20 sm:mb-40 lg:mb-60 mt-5 w-full min-h-[1090px] flex flex-col items-center justify-center px-4 sm:px-10 md:px-20 lg:px-50">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10 flex justify-center">
          <img
            src="/images/gradImg.png"
            alt="Background"
            className="w-[1200px] sm:w-[1600px] md:w-[2000px] lg:w-[2500px] h-auto object-contain"
          />
          <div className="absolute inset-0 flex justify-center items-center -z-10">
            <img
              src="/images/circleLineImg.png"
              alt="background circular line"
              className="w-[200px] sm:w-[400px] md:w-[650px] lg:w-[852px] h-auto mt-10 sm:mt-20 md:mt-40 lg:mt-61 mr-0 sm:mr-10 md:mr-20 lg:mr-26 object-cover opacity-80 animate-spin-slow"
            />
          </div>
        </div>

        {/* Image Cards
        <div className="absolute w-full h-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${positionClasses[card.position]} w-32 sm:w-48 md:w-72 lg:w-90 h-auto`}
            >
              <img
                src={card.image}
                alt={`Card ${index + 1}`}
                className="w-full h-full rounded-2xl object-contain"
              />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
