"use client";

import React from "react";
import Image from "next/image";

type Course = {
  id: number;
  title: string;
  duration: string;
  fee: string;
  req: string;
  intake: string;
};

const data: Course[] = [
  {
    id: 1,
    title: "Bachelor of Business Administration",
    duration: "3 Years (Full-Time)",
    fee: "AUD $35,000/Year",
    req: "Class 12 + IELTS 6.5",
    intake: "February & July",
  },
  {
    id: 2,
    title: "Master of Business Analytics",
    duration: "2 Years (Full-Time)",
    fee: "AUD $42,000/Year",
    req: "Bachelor’s degree + IELTS 6.5",
    intake: "March & September",
  },
  {
    id: 3,
    title: "Bachelor of Engineering (Honours)",
    duration: "4 Years (Full-Time)",
    fee: "AUD $40,500/Year",
    req: "Class 12 + IELTS 6.5",
    intake: "February & July",
  },
  {
    id: 4,
    title: "Master of Public Health",
    duration: "2 Years (Full-Time)",
    fee: "AUD $39,000/Year",
    req: "Bachelor’s in Health/Science + IELTS 6.5",
    intake: "February & July",
  },
  {
    id: 5,
    title: "Bachelor of Clinical Science",
    duration: "2 Years (Full-Time)",
    fee: "AUD $38,000/Year",
    req: "Class 12 (Biology/Chemistry) + IELTS 6.5",
    intake: "February Only",
  },
  {
    id: 6,
    title: "Master of Data Science",
    duration: "2 Years (Full-Time)",
    fee: "AUD $42,500/Year",
    req: "Bachelor’s degree (in IT/Maths/Science) + IELTS 6.5",
    intake: "February & July",
  },
  {
    id: 7,
    title: "Bachelor of Science (Biological Sciences)",
    duration: "3 Years (Full-Time)",
    fee: "AUD $27,500/Year",
    req: " Class 12 (Science subjects) + IELTS 6.5",
    intake: "February & July",
  },
  {
    id: 8,
    title: "Bachelor of Arts (Media & Communications)",
    duration: "3 Years (Full-Time)",
    fee: "AUD $33,000/Year",
    req: "Class 12 + IELTS 6.0",
    intake: "February & July",
  },
  {
    id: 9,
    title: "Master of International Relations",
    duration: "2 Years (Full-Time)",
    fee: "AUD $36,500/Year",
    req: "Bachelor’s degree (any field) + IELTS 6.5",
    intake: "February & July",
  },
  {
    id: 10,
    title: "Master of Environmental Science",
    duration: "2 Years (Full-Time)",
    fee: "AUD $40,000/Year",
    req: "Bachelor’s degree in Science/Environment + IELTS 6.5",
    intake: "February & July",
  },
];

const TU8: React.FC = () => {
  return (
    <>
      {/* Absolute images remain untouched */}
      <div className="absolute top-430 -left-15 z-1 hidden md:block">
        <Image
          src="/images/tu8BEImg.png"
          alt="Top connector line"
          width={418}
          height={100}
          className="ml-92 w-[418px] h-auto"
        />
      </div>

      <div className="absolute ml-260 top-520 z-1 hidden md:block">
        <Image
          src="/images/tu8EIImg.png"
          alt="Top connector line"
          width={300}
          height={523}
          className="h-[523px] w-auto"
        />
      </div>

      <div className="absolute top-575 z-1 hidden md:block">
        <Image
          src="/images/tu8MHImg.png"
          alt="Top connector line"
          width={400}
          height={100}
          className="ml-83 w-[400px] h-auto"
        />
      </div>

      <div className="absolute top-703 z-1 hidden md:block">
        <Image
          src="/images/tu8ASImg.png"
          alt="Top connector line"
          width={440}
          height={100}
          className="ml-183 w-[440px] h-auto"
        />
      </div>

      <div className="absolute top-775 -left-10 z-1 hidden md:block">
        <Image
          src="/images/tu8SEImg.png"
          alt="Top connector line"
          width={300}
          height={569}
          className="ml-45 h-[569px] w-auto"
        />
      </div>

      <div
        className="relative -mt-30 -mb-100 w-full min-h-[353vh] flex items-center bg-no-repeat justify-center bg-contain bg-center"
        style={{ backgroundImage: "url('/images/tu8backImg.png')" }}
      >
        {/* Responsive grid */}
        <div
          className="
            w-[90%] md:w-[80%] lg:w-[90%] 
            max-w-[1100px] 
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
            gap-y-50 gap-x-0 lg:gap-x-0 
            mt-[0%] md:mt-[0%] lg:mt-[0%] 
            z-3
          "
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="card-extend w-full max-w-[345px] mx-auto h-[320px] rounded-2xl px-6 backdrop-blur-md border border-white/20
                       transition-all duration-300 ease-out relative overflow-visible"
              style={{
                // @ts-ignore – CSS var custom property
                "--card-bg": "rgba(255,255,255,0.5)",
                background: "var(--card-bg)",
              }}
            >
              {/* Title */}
              <h1
                className="text-lg md:text-xl font-bold text-center text-[#000000] mt-7 mb-10 relative z-30 px-2 md:px-5"
                style={{
                  maxWidth: "270px",
                  lineHeight: "1.3",
                }}
              >
                {item.title}
              </h1>

              {/* Content */}
              <div className="space-y-4 text-sm md:text-base relative z-30" style={{ fontFamily: "DM Sans" }}>
                <div>
                  <span className="font-bold text-[#545454]">Duration:</span>
                  <span className="text-[#545454] ml-1.5">{item.duration}</span>
                </div>
                <div>
                  <span className="font-bold text-[#545454]">Tuition Fee:</span>
                  <span className="text-[#545454] ml-1.5">{item.fee}</span>
                </div>
                <div>
                  <span className="font-bold text-[#545454]">Requirement:</span>
                  <span className="text-[#545454] ml-1.5">{item.req}</span>
                </div>
                <div>
                  <span className="font-bold text-[#545454]">Intake:</span>
                  <span className="text-[#545454] ml-1.5">{item.intake}</span>
                </div>
              </div>

              {/* Button */}
              <button
                className="cta-btn rounded-full px-5 md:px-6 py-2 text-white font-semibold bg-[#37D7D9] hover:bg-[#37D7D9] text-sm md:text-base"
                style={{
                  boxShadow: "0 8px 20px rgba(16,24,40,0.12)",
                  fontFamily: "DM Sans",
                }}
              >
                Apply Now
              </button>

              {/* Inline hover styles */}
              <style>{`
                .card-extend::after {
                  content: "";
                  position: absolute;
                  left: 0;
                  top: 100%;
                  width: 100%;
                  height: 0;
                  background: var(--card-bg);
                  border: 1px solid rgba(255, 255, 255, 0.2);
                  border-top: none;
                  border-radius: 0 0 1rem 1rem;
                  transition: height 360ms cubic-bezier(0.2, 0.9, 0.3, 1);
                  z-index: 20;
                  pointer-events: none;
                }

                .card-extend:hover::after {
                  height: 63px;
                }

                .cta-btn {
                  position: absolute;
                  left: 50%;
                  transform: translate(-50%, 8px);
                  bottom: -50px;
                  opacity: 0;
                  transition: transform 320ms
                      cubic-bezier(0.2, 0.9, 0.3, 1),
                    opacity 280ms ease;
                  z-index: 40;
                }

                .card-extend:hover .cta-btn {
                  transform: translate(-50%, 0);
                  opacity: 1;
                }

                .card-extend {
                  border-bottom-left-radius: 1rem;
                  border-bottom-right-radius: 1rem;
                }

                .card-extend:hover {
                  border-bottom-left-radius: 0;
                  border-bottom-right-radius: 0;
                }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TU8;
