"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import HeroSlider from "@/components/Homepage/HeroSlider/page";
import MheroSlider from "../MheroSlider/page";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What is EduLinks?",
    answer:
      "EduLinks is an AI-powered career guidance and learning platform that helps students discover the right career path, prepare for exams, and apply to top universities all in one place.",
  },
  {
    question: "Who can use EduLinks?",
    answer:
      "EduLinks is designed for students, parents, and professionals seeking guidance in education, career, and skill development.",
  },
  {
    question: "What makes EduLinks different from other edtech apps?",
    answer:
      "EduLinks combines personalized AI guidance, expert mentorship, and community support, making it unique compared to traditional edtech platforms.",
  },
  {
    question: "Is the career test accurate?",
    answer:
      "Yes, the career test is backed by scientific methods and AI insights, ensuring reliable recommendations for students.",
  },
  {
    question: "Is my data safe on EduLinks?",
    answer:
      "Absolutely. EduLinks prioritizes user privacy with strict security measures and data protection standards.",
  },
];

const MphotoRoom: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) =>
    setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <main className="min-h-screen bg-white flex items-center justify-center py-6">
      {/* Mobile frame */}
      <div className="overflow-hidden w-[440px] max-w-full">
        <div className="px-6 pt-6 pb-10">
          {/* --- STARTING SECTION: Why Choose Us? --- */}
          <section className="w-full">
            <h2 className="text-center text-[22px] font-medium text-[#545454] mb-4">
              Why Choose Us?
            </h2>

            <p className="text-center text-[#666666] text-[16px] leading-tight mb-4">
              EduLinks has built a trusted legacy in guiding students toward
              their international education
              <br /> goals. From expert counseling to AI-driven tools
              <br /> and language test preparation, we make your
              <br /> journey abroad simple, smooth, and successful.
            </p>

            {/* Graduate illustration */}
            <div className="w-full flex justify-center mt-2 mb-8">
              <div className="w-[400px] h-[350px] relative">
                <Image
                  src="/images/gradImg1.png"
                  alt="Graduate illustration"
                  fill
                  sizes="(max-width: 440px) 300px, 300px"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
          </section>

          {/* Top Features Image */}
          <div className="w-full flex justify-center mb-4">
            <div className="w-[400px] h-[320px] relative">
              <Image
                src="/images/mcardgrpImg.png"
                alt="EduLinks Features Overview"
                fill
                sizes="(max-width: 440px) 400px, 400px"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>

          {/* Illustration */}
          <div className="w-full flex justify-center">
            <div className="w-[310px] h-[380px] sm:w-[330px] sm:h-[400px] relative -mr-10">
              <Image
                src="/images/commImg.png"
                alt="Students walking illustration"
                fill
                sizes="(max-width: 440px) 310px, 330px"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>

          {/* Caption */}
          <p className="text-xs text-[#37D7D9] text-center font-bold text-[12px]">
            Edulinks Global Student Community
          </p>

          {/* Heading */}
          <h1 className="mt-3 text-[22px] font-medium text-[#545454] text-center leading-[37.82px]">
            To Connect. To Support. To Grow
            <br />
            Together.
          </h1>

          {/* Body text */}
          <p className="mt-3 px-4 text-base text-[#666666] text-center text-[16px] leading-[21px]">
            A vibrant, inclusive space built for students across the world to ask
            questions, share real-life experiences, solve problems together, and
            uplift
            one another throughout their study abroad
            journey. Whether youre choosing a country,
            preparing for language tests, applying for visas, or
            simply adjusting to a new culture, this community
            is here to support you every step of the way. Gain
            insights from those who’ve been there, stay
            updated with essential information, and never feel
            alone in your journey because we grow stronger
            when we learn together.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-2 justify-center">
            <button
              className="px-4 py-1.5 rounded-full bg-[#37D7D9] text-white font-semibold text-[12px] shadow-sm"
              aria-label="Join Community"
            >
              Join Community
            </button>

            <button
              className="px-4 py-1.5 rounded-full border border-[#37D7D9] text-[#37D7D9] text-[12px] font-semibold"
              aria-label="Learn More"
            >
              Learn More
            </button>
          </div>

          {/* Divider */}
          <div className="my-10"></div>

          <div>
            <MheroSlider />
          </div>

          {/* Testimonials
          <section className="text-center">
            <h2 className="text-[22px] font-medium text-[#545454] mb-2">
              Real Students. Real Progress.
            </h2>
            <p className="text-[#666666] text-base leading-[20.1px]">
              These testimonials highlight how EduLinks bridges
              <br /> the gap between confusion and clarity, ambition
              <br /> and achievement. Tangible transformation you can
              <br /> trust.
            </p>
          </section> */}

          {/* Get in Touch Button */}
          {/* <button
            className="flex justify-center mx-auto px-4 py-1.5 mt-100 rounded-full bg-[#37D7D9] text-white font-semibold text-[14px] shadow-sm"
            aria-label="Get in Touch"
          >
            Get in Touch
          </button> */}

          {/* Divider before FAQ */}
          <div className="mt-10"></div>

          {/* FAQ Section */}
          <section className="w-full">
            <h2 className="text-[22px] font-semibold text-[#545454] mb-3 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-[#666666] text-[16px] text-center leading-relaxed mb-8">
              From AI tools to career guidance everything you need to know, simplified. Explore the most
              <br /> frequently asked questions about EduLinks, our
              <br /> platform, and how we help you grow..
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  onClick={() => toggleFAQ(index)}
                  className={`rounded-lg cursor-pointer transition-all duration-500 ${
                    openIndex === index ? "bg-cyan-100 shadow-md" : "bg-cyan-100 shadow-sm"
                  }`}
                  style={{
                    boxShadow:
                      openIndex === index
                        ? "0 6px 12px rgba(0, 0, 0, 0.1)"
                        : "0 3px 6px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div className="flex justify-between items-center py-4 px-4">
                    <h3 className="font-medium text-[16px] text-[#000000] flex-1 pr-2">
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <FaChevronCircleUp className="text-[#37D7D9] w-6 h-6 transition-transform duration-500" />
                    ) : (
                      <FaChevronCircleDown className="text-[#37D7D9] w-6 h-6 transition-transform duration-500" />
                    )}
                  </div>

                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      openIndex === index ? "max-h-40 mb-3" : "max-h-0"
                    }`}
                  >
                    <p className="text-[#666666] px-4 pb-2 text-sm leading-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default MphotoRoom;
