// app/components/Founder.tsx
"use client";
import React from "react";
import Image from "next/image";

const About3: React.FC = () => {
  return (
    <>
      {/* Heading */}
      <h1
        className="text-3xl sm:text-4xl md:text-5xl w-[90%] md:w-[80%] mx-auto p-4 -mt-6 md:-mt-10 text-center tracking-wide font-extrabold"
        style={{ fontWeight: 1000 }}
      >
        Meet Our Founders
      </h1>

      {/* Quote Section */}
      <div className="bg-white rounded-bl-[40px] mt-5 rounded-tr-[40px] shadow-[0_0_25px_rgba(0,0,0,0.15)] w-[90%] md:w-[76%] mx-auto p-6 text-center relative">
        <div className="px-4 sm:px-6 md:px-10" style={{ fontFamily: "DM Sans" }}>
          {/* Opening quote */}
          <div className="absolute left-4 top-2 md:left-5 md:-top-2">
            <Image
              src="/images/lowercoma.png"
              alt="Opening Quote"
              width={18}
              height={18}
            />
          </div>

          {/* Quote text */}
          <p className="text-lg sm:text-xl md:text-[25px] font-bold text-gray-700 leading-relaxed mb-6 inline-block">
            For us, the main goal is that students are pursuing a career that
            fits them, and <br className="hidden md:block" />
            more importantly, they actually want to do
          </p>

          {/* Closing quote */}
          <div className="absolute right-6 bottom-6 md:right-12 md:bottom-7">
            <Image
              src="/images/uppercoma.png"
              alt="Closing Quote"
              width={18}
              height={18}
            />
          </div>

          {/* Author */}
          <div className="mt-4 md:-mt-4 text-right">
            <p className="text-gray-600 font-bold">- Anjan Singh, Founder.</p>
          </div>
        </div>
      </div>

      {/* Founders Grid */}
      <div className="w-[90%] md:w-[80%] mx-auto p-6 sm:p-8">
        <div className="space-y-8">
          {/* Anjan Singh */}
          <div className="bg-white rounded-bl-[60px] rounded-tr-[70px] shadow-[0_0_25px_rgba(0,0,0,0.15)] overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-[33%] flex justify-center items-start">
                <div className="overflow-hidden p-4 md:p-0">
                  <Image
                    src="/images/about3Img2.png"
                    alt="Anjan Singh"
                    width={350}
                    height={350}
                    className="w-[160px] sm:w-[230px] md:w-[270px] lg:w-[330px] h-auto object-contain"
                  />
                </div>
              </div>
              <div className="w-full md:w-[76%] p-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#000000] mb-4">
                  Anjan Singh
                </h2>
                <div className="space-y-4 text-[#000000] text-sm sm:text-base md:text-md tracking-wider font-dmsans leading-relaxed">
                  <p>
                    Anjan Singh, our founder and CEO, started Edulinks with a
                    vision to revolutionise the education industry through the use
                    of Artificial Intelligence. His passion for technology and
                    helping people achieve his dreams has helped him propel
                    Edulinks into the EdTech industry.
                  </p>
                  <p>
                    Anjan graduated Victoria University of Wellington in 2023 with
                    a Bachelors of Commerce, majoring in Management and
                    International Business. He specialises in communication,
                    relationship management and marketing.
                  </p>
                  <p>
                    Outside of work, Anjan enjoys applying himself creatively
                    through music and sports. His passion for travel has led him
                    to many different countries and allowed him to gain a deeper
                    cultural understanding of the world.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Paramdip Singh */}
          <div className="bg-white rounded-bl-[40px] rounded-tr-[70px] shadow-[0_0_25px_rgba(0,0,0,0.15)] overflow-hidden">
            <div className="flex flex-col md:flex-row-reverse">
              <div className="w-full md:w-[33%] flex justify-center items-start">
                <div className="overflow-hidden p-4 md:p-0">
                  <Image
                    src="/images/about3Img1.png"
                    alt="Paramdip Singh"
                    width={350}
                    height={350}
                    className="w-[160px] sm:w-[230px] md:w-[270px] lg:w-[330px] h-auto object-contain"
                  />
                </div>
              </div>
              <div className="w-full md:w-[76%] p-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#000000] mb-4">
                  Paramdip Singh
                </h2>
                <div className="space-y-4 text-[#000000] font-normal text-sm sm:text-base md:text-md tracking-wider leading-relaxed">
                  <p>
                    Paramdip Singh has played a pivotal role in fulfilling the
                    study abroad dreams of over 15,000 students. With a vision to
                    expand global educational opportunities, he has successfully
                    partnered with more than 1,000 agents worldwide, significantly
                    enhancing their business growth by tenfold. His strategic
                    initiatives and collaborations have not only propelled his own
                    business to new heights but have also set a benchmark in the
                    international education industry.
                  </p>
                  <p>
                    In his long-spanning career, Paramdip has launched numerous
                    innovative projects in collaboration with the New Zealand,
                    Australia and Canada government and private institutes
                    government, specifically designed to benefit students. These
                    initiatives aim to provide comprehensive educational support,
                    ensuring that students are well-equipped to succeed in their
                    academic and career pursuits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About3;
