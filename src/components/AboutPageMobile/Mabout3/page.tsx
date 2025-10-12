// app/components/Founder.tsx
"use client";
import React from "react";
import Image from "next/image";

const Mabout3: React.FC = () => {
  return (
    <>
      {/* Heading */}
      <h1
        className="text-3xl w-[90%] text-[#545454] mt-8 mx-auto p-4 text-center tracking-wide font-bold"
        style={{ fontWeight: 1000 }}
      >
        Meet Our Founders
      </h1>

      {/* Quote Section */}
      <div className="bg-white rounded-bl-[40px] mt-5 rounded-tr-[40px] shadow-[0_0_25px_rgba(0,0,0,0.15)] w-[85%] mx-auto p-6 text-center relative">
        <div className="px-4" style={{ fontFamily: "DM Sans" }}>
          {/* Opening quote */}
          <div className="absolute left-4 top-4">
            <Image
              src="/images/lowercoma.png"
              alt="Opening Quote"
              width={18}
              height={18}
            />
          </div>

          {/* Quote text */}
          <p className="text-lg font-bold text-gray-700 leading-relaxed mb-6 inline-block">
            For us, the main goal is that students are pursuing a career that
            fits them, and <br className="hidden" />
            more importantly, they actually want to do
          </p>

          {/* Closing quote */}
          <div className="absolute right-8 bottom-22">
            <Image
              src="/images/uppercoma.png"
              alt="Closing Quote"
              width={18}
              height={18}
            />
          </div>

          {/* Author */}
          <div className="text-right">
            <p className="text-gray-600 font-bold">- Anjan Singh, Founder.</p>
          </div>
        </div>
      </div>

      {/* Founders Grid */}
      <div className="w-[90%] mx-auto mt-8 p-4">
        <div className="space-y-8">
          {/* Anjan Singh */}
          <div className="bg-white rounded-br-[60px] rounded-tl-[70px] shadow-[0_0_25px_rgba(0,0,0,0.15)] overflow-hidden">
            <div className="flex flex-col">
              <div className="w-full flex justify-center items-start">
                <div className="overflow-hidden">
                  <Image
                    src="/images/about3Img2.png"
                    alt="Anjan Singh"
                    width={850}
                    height={850}
                    className="w-[600px] h-auto object-contain"
                  />
                </div>
              </div>
              <div className="w-full p-4">
                <h2 className="text-2xl font-bold text-[#545454] mb-4">
                  Anjan Singh
                </h2>
                <div className="space-y-4 text-[#000000] text-md tracking-wider font-dmsans leading-relaxed mb-4">
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
          <div className="bg-white rounded-br-[40px] rounded-tl-[70px] shadow-[0_0_25px_rgba(0,0,0,0.15)] overflow-hidden">
            <div className="flex flex-col md:flex-row-reverse">
              <div className="w-full flex justify-center items-start">
                <div className="overflow-hidden">
                  <Image
                    src="/images/about3Img1.png"
                    alt="Paramdip Singh"
                    width={850}
                    height={850}
                    className="w-[600px] h-auto object-contain"
                  />
                </div>
              </div>
              <div className="w-full p-4">
                <h2 className="text-2xl font-bold text-[#545454] mb-4">
                  Paramdip Singh
                </h2>
                <div className="space-y-4 text-[#000000] font-dmsans text-md tracking-wider leading-relaxed mb-4">
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

export default Mabout3;
