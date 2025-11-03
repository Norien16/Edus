import React from "react";
import Image from "next/image";
import { FiAlertCircle } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";

export default function AiTest2() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-6">
        {/* Quick information card */}
        <div className="mx-auto max-w-3xl">
          <div
            className="border rounded-4xl py-4 text-center shadow-sm"
            style={{
              borderColor: "#37D7D9",
              borderWidth: 1,
              boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
            }}
          >
            <div className="flex items-center justify-center gap-3">
              <div>
                <FiAlertCircle size={40} color="#37D7D9" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#545454]">
                Quick information
              </h2>
            </div>

            <div className="mt-4 inline-flex items-center justify-center gap-3 rounded-full border-[1px] border-[#37D7D9] bg-[#DFFFFF] px-1 py-0.5">
              <FaRegClock className="text-[#66666666] w-5 h-5" />
              <span className="text-[#666666] text-sm">2–5 minutes</span>
            </div>

            <p className="mt-4 text-[#666666] text-3xl md:text-xl">
              Get personalized recommendation based on your preferences
            </p>
          </div>
        </div>

        {/* Section title */}
        <h3 className="mt-10 text-center text-2xl md:text-3xl font-bold text-[#545454]">
          What you’ll get
        </h3>

        {/* Grid of cards image */}
        <div className="mt-6 mr-2 flex justify-center">
          <Image
            src="/images/aitest2Img.png"
            alt="Career Info Cards"
            width={700}
            height={500}
            className="object-contain"
          />
        </div>

        {/* Are you ready section */}
        <div className="mt-8 text-center">
          <h2 className="text-3xl font-bold text-[#545454] mb-3">
            Are you ready?
          </h2>
          <p className="text-[#666666] text-[19px] mb-3">
            Let’s get started with your personalized experience.
          </p>

          <div className="flex justify-center items-center gap-3 mb-6">
            <input
              type="checkbox"
              id="terms"
              className="w-6 h-6 accent-[#37D7D9] border-2 border-[#37D7D9] rounded-4xl cursor-pointer"
            />
            <label htmlFor="terms" className="text-[#666666] text-base">
              I accept the{" "}
              <a
                href="#"
                className="text-[#37D7D9] underline hover:opacity-80"
              >
                Terms & Conditions
              </a>
            </label>
          </div>

          <button className="bg-[#37D7D9] text-white text-xl font-black rounded-full px-8 py-2 shadow-md hover:opacity-90 transition cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
}
