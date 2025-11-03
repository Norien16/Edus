// app/why-engineering/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Why Study Engineering In Australia",
  description: "Reasons and benefits of pursuing Engineering studies in Australia",
};
const UNIVERSITIES = [
  { img: "/images/mcpage1Img6.png", title: "University Of Melbourne" },
  { img: "/images/mcpage1Img7.png", title: "The University Of Sydney" },
  { img: "/images/mcpage1Img8.png", title: "UNSW Sydney" },
  { img: "/images/mcpage1Img9.png", title: "Australian National University" },
  { img: "/images/mcpage1Img10.png", title: "Monash University" },
  { img: "/images/mcpage1Img11.png", title: "University Of Queensland" },
  ];
const REASONS = [
  {
    icon: (
      <Image
        src="/images/mcpage1Img1.svg"
        alt="icon-university"
        width={40}
        height={40}
        className="w-13 h-13"
      />
    ),
    text: (
      <>
        Many Australian Universities Are Ranked In Top <br />
        100 For Engineering & Technology Subjects.
      </>
    ),
  },
  {
    icon: (
      <Image
        src="/images/mcpage1Img2.svg"
        alt="icon-graduates"
        width={40}
        height={40}
        className="w-13 h-13"
      />
    ),
    text: (
      <>
        Graduates In Demand: Over 80% Of Engineering <br />
        Graduates Find Employment Within Six Months.
      </>
    ),
  },
  {
    icon: (
      <Image
        src="/images/mcpage1Img3.svg"
        alt="icon-industry"
        width={40}
        height={40}
        className="w-13 h-13"
      />
    ),
    text: (
      <>
        Strong Industry Tie-Ups And Internships <br />
        Embedded In Many Programs.
      </>
    ),
  },
  {
    icon: (
      <Image
        src="/images/mcpage1Img4.svg"
        alt="icon-briefcase"
        width={40}
        height={40}
        className="w-13 h-13"
      />
    ),
    text: (
      <>
        Opportunity To Join Australia’s Professional Year <br />
        Program In Engineering (If Eligible) With Work <br />
        Placement And Migration Incentives.
      </>
    ),
  },
  {
    icon: (
      <Image
        src="/images/mcpage1Img5.svg"
        alt="icon-users"
        width={40}
        height={40}
        className="w-13 h-13"
      />
    ),
    text: (
      <>
        Develop Both Technical Skills And Transferable <br />
        Skills (Teamwork, Problem Solving, Project <br /> Management).
      </>
    ),
  },
];

export default function McPage1 () {
  return (
    <main className="min-h-screen bg-white px-6">
      {/* Header */}
      <div className="mx-auto max-w-screen-xl text-center mb-20">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#545454]">
          Why Study Engineering In Australia
        </h1>
      </div>

      {/* Reasons Section */}
      <section className="mx-auto max-w-screen-xl space-y-14">
        {REASONS.map((item, i) => {
          const isEven = i % 2 === 0;

          return (
            <div
              key={i}
              className={`flex items-center w-full ${
                isEven ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Inner flex: icon + text */}
              <div
                className={`flex items-center w-full ${
                  isEven
                    ? "md:justify-start text-left ml-20"
                    : "md:justify-end text-left mr-20"
                }`}
              >
                {isEven ? (
                  // --- Left Side Icon + Text ---
                  <>
                    {/* Icon container */}
                    <div className="flex-shrink-0 flex justify-center items-center ml-10 ">
                      {item.icon}
                    </div>

                    {/* Text container */}
                    <div className="max-w-2xl text-[#545454] pl-8">
                      <p className="text-xl md:text-2xl font-bold leading-tight">
                        {item.text}
                      </p>
                    </div>
                  </>
                ) : (
                  // --- Right Side Icon + Text ---
                  <>
                  <div className="flex-shrink-0 flex justify-center items-center pr-4 ">
                      {item.icon}
                    </div> 

                    {/* Text container */}
                    <div className="max-w-2xl text-[#545454] mr-6">
                      <p className="text-xl md:text-2xl font-bold leading-tight">
                        {item.text}
                      </p>
                    </div>

                    {/* Icon container */}
                    
                  </>
                )}
              </div>
            </div>
          );
        })}
      </section>
      <div className="max-w-[1100px] mx-auto px-6 mt-30">
              {/* Heading */}
              <header className="text-center mb-16 mt-12">
                <h1 className="text-3xl md:text-4xl font-bold text-[#545454]">
                  Top Universities In Australia
                </h1>
              </header>
      
              {/* Card Grid */}
              <section className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                {UNIVERSITIES.map((uni, i) => (
                  <div
                    key={i}
                    className="relative w-[320px] flex flex-col items-center overflow-hidden bg-white hover:bg-white hover:shadow-lg transition-all duration-300 pb-12 rounded-2xl"
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
                    <div className="flex flex-col items-center justify-between py-6 space-y-4 w-full">
                      <h3 className="text-lg md:text-lg font-bold text-[#545454] text-center">
                        {uni.title}
                      </h3>
                      <button
                        type="button"
                        className="bg-[#37D7D9] text-white text-xs px-6 py-1.5  font-black rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
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
