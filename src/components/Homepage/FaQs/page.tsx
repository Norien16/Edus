"use client";
import React, { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is edulinks?",
    answer:
      "EduLinks is an AI-powered career guidance and learning platform that helps students discover the right career path, prepare for exams, and apply to top universities all in one place.",
  },
  {
    question: "Who can use edulinks?",
    answer:
      "EduLinks is designed for students, parents, and professionals seeking guidance in education, career, and skill development.",
  },
  {
    question: "What makes edulinks different from other edtech apps?",
    answer:
      "EduLinks combines personalized AI guidance, expert mentorship, and community support, making it unique compared to traditional edtech platforms.",
  },
  {
    question: "Is the career test accurate?",
    answer:
      "Yes, the career test is backed by scientific methods and AI insights, ensuring reliable recommendations for students.",
  },
  {
    question: "Is my data safe on edulinks?",
    answer:
      "Absolutely. EduLinks prioritizes user privacy with strict security measures and data protection standards.",
  },
];

export default function FaQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      {/* Left Section */}
      <div>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4 md:ml-12"
          style={{ fontFamily: "Space Grotesk" }}
        >
          Frequently asked <br /> questions
        </h2>
        <p
          className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed md:ml-12"
          style={{ fontFamily: "DM Sans" }}
        >
          From AI tools to career guidance everything you need to know,
          simplified.
          <br />
          Explore the most frequently asked questions about EduLinks, our
          platform, and how we help you grow.
        </p>
      </div>

      {/* Right Section */}
      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-cyan-100 rounded-xl py-6 sm:py-8 cursor-pointer transition shadow-sm"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3
                className="font-medium px-4 text-lg sm:text-xl md:text-2xl text-gray-900 flex-1 break-words"
                style={{ fontFamily: "Space Grotesk" }}
              >
                {faq.question}
              </h3>
              {openIndex === index ? (
                <FaChevronCircleUp className="text-[#37D7D9] w-6 sm:w-7 md:w-8 h-auto mr-4 transition-transform duration-500" />
              ) : (
                <FaChevronCircleDown className="text-[#37D7D9] w-6 sm:w-7 md:w-8 h-auto mr-4 transition-transform duration-500" />
              )}
            </div>

            {/* Smooth expand/collapse */}
            <div
              className={`transition-all duration-500 overflow-hidden ${
                openIndex === index ? "max-h-96 mt-2" : "max-h-0"
              }`}
            >
              <p
                className="text-gray-700 px-4 text-sm sm:text-base"
                style={{ fontFamily: "DM Sans" }}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
