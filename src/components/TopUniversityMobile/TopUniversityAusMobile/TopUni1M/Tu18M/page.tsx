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

export default function Tu18M() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-25 -mt-30 bg-white">
      {/* FAQ Section */}
      <h2 className="text-[22px] font-semibold text-[#545454] mb-3 text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-[#666666] px-4 text-[16px] text-center leading-relaxed mb-8">
        From visas and scholarships, everything you need to know about studying in Australia.
      </p>

      <div className="space-y-4 px-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className={`rounded-lg cursor-pointer transition-all duration-500 ${
              openIndex === index
                ? "bg-cyan-100 shadow-md"
                : "bg-cyan-100 shadow-sm"
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
  );
}
