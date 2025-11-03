"use client";
import React, { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

const faqs = [
  {
    question: "Is the University of New South Wales ranked among the top universities globally?",
    answer:
      "Yes — it is ranked #20 in the QS World University Rankings 2025. Top Universities",
  },
  {
    question: "What is the tuition fee range for international students at UNSW?",
    answer:
      "International tuition fees vary by faculty; undergraduate programs typically start from around AUD $56,000/yr and postgraduate can exceed AUD $59,000/yr for some courses. Shiksha ",
  },
  {
    question: "Can international students work while studying at UNSW?",
    answer:
      "Yes — international students may work part-time under the student visa rules, as normal for Australian universities.",
  },
  {
    question: "Are scholarships available for international students at UNSW?",
    answer:
      "Yes — scholarships, grants and support programs are available for high-performing international students across undergraduate and postgraduate levels.",
  },
];

export default function TU48() {
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
