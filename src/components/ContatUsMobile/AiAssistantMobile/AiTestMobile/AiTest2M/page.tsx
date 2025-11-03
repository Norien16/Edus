import React from "react";
import Image from "next/image";
import { FiAlertCircle } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";

export default function AiTest2M () {
  return (
    <main className="min-h-screen -mt-65 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
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
                <FiAlertCircle size={25} color="#37D7D9" />
              </div>
              <h2 className="text-xl font-bold text-[#545454]">
                Quick information
              </h2>
            </div>

            <div className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border-[1px] border-[#37D7D9] bg-[#DFFFFF] px-1 py-0.5">
              <FaRegClock className="text-[#66666666] w-3 h-3" />
              <span className="text-[#666666] text-xs">2–5 minutes</span>
            </div>

            <p className="mt-1 text-[#666666] text-md">
              Get personalized recommendation based on your preferences
            </p>
          </div>
        </div>

        {/* Section title */}
        <h3 className="mt-6 text-center text-3xl font-bold text-[#545454]">
          What you’ll get
        </h3>

        {/* Grid of cards image */}
        <div className="mt-6 mr-2 flex justify-center">
          <Image
            src="/images/aitest2mImg.png"
            alt="Career Info Cards"
            width={700}
            height={500}
            className="object-contain"
          />
        </div>

        {/* Are you ready section */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-[#545454] mb-3">
            Are you ready?
          </h2>
          <p className="text-[#666666] text-[14px] mb-3">
            Let’s get started with your personalized experience.
          </p>

          <div className="flex justify-center items-center gap-3 mb-6">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 accent-[#37D7D9] border-2 border-[#37D7D9] rounded-4xl cursor-pointer"
            />
            <label htmlFor="terms" className="text-[#666666] text-sm">
              I accept the{" "}
              <a
                href="#"
                className="text-[#37D7D9] underline hover:opacity-80"
              >
                Terms & Conditions
              </a>
            </label>
          </div>

          <button className="bg-[#37D7D9] text-white text-md font-black rounded-full px-6 py-2 shadow-lg shadow-gray-300">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
}
