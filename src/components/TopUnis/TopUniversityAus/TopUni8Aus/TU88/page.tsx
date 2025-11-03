"use client";
import React, { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

const faqs = [
  {
    question: "Is UWA part of Australia’s top research universities?",
    answer:
      "Yes — UWA is a member of the Group of Eight, Australia’s leading research-intensive universities. Wikipedia+1",
  },
  {
    question: "What is the typical annual tuition fee for an international student at UWA?",
    answer:
      "For many undergraduate programs, international tuition fees range from approximately AUD $30,000 to $45,000 per year, depending on discipline. University Living+1",
  },
  {
    question: "Can international students work while studying at UWA?",
    answer:
      "Yes — international students on a valid Australian student visa may work part-time during study periods under visa rules.",
  },
  {
    question: "Are scholarships available for international students at UWA?",
    answer:
      "Yes — UWA offers a variety of scholarships, grants and support programs for international students across undergraduate and postgraduate levels.",
  },
];

export default function TU88() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-40 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      {/* Left Section */}
      <div>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#000000] mb-4 md:ml-12"
          style={{ fontFamily: "Space Grotesk" }}
        >
          Frequently asked <br /> questions
        </h2>
        <p
          className="text-[#666666] text-base sm:text-lg md:text-xl leading-relaxed md:ml-12"
          style={{ fontFamily: "DM Sans" }}
        >
          From visas to scholarships, everything you need to know about studying in Australia.
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
