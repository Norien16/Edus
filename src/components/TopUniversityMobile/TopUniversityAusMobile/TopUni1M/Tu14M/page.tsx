"use client";

import React, { useState } from "react";

type Degree = {
  title: React.ReactNode;
  duration: string;
  fee: string;
  requirement: string;
  intake: string;
};

type Item = {
  id: number;
  label: string;
  degrees: Degree[];
};

const ITEMS: Item[] = [
  {
    id: 1,
    label: "Faculty Of Business & Economics",
    degrees: [
      {
        title: (
          <>
            Bachelor Of Business
            <br /> Administration
          </>
        ),
        duration: "3 Years (Full-Time)",
        fee: "AUD $35,000/Year",
        requirement: "Class 12 + IELTS 6.5",
        intake: "February & July",
      },
      {
        title: (
          <>
            Master Of Business
            <br /> Analytics
          </>
        ),
        duration: "2 Years (Full-Time)",
        fee: "AUD $42,000/Year",
        requirement: "Bachelor’s Degree + IELTS 6.5",
        intake: "February & July",
      },
    ],
  },
  {
    id: 2,
    label: "Faculty Of Medicine & Health Science",
    degrees: [
      {
        title: (
          <>
            Bachelor Of Clinical
            <br /> Science
          </>
        ),
        duration: "3 Years (Full-Time)",
        fee: "AUD $38,000/Year",
        requirement: "Class 12 (Bio/Chem) + IELTS 6.5",
        intake: "February Only",
      },
      {
        title: (
          <>
            Master Of Public
            <br /> Health
          </>
        ),
        duration: "2 Years (Full-Time)",
        fee: "AUD $39,000/Year",
        requirement: "Bachelor’s In Health/Science + IELTS 6.5",
        intake: "February & July",
      },
    ],
  },
  {
    id: 3,
    label: "Faculty Of Arts & Social Science",
    degrees: [
      {
        title: (
          <>
            Bachelor Of Arts
            <br /> (Media & Communication)
          </>
        ),
        duration: "3 Years (Full-Time)",
        fee: "AUD $33,000/Year",
        requirement: "Class 12 + IELTS 6.0",
        intake: "February & July",
      },
      {
        title: (
          <>
            Master Of International
            <br /> Relations
          </>
        ),
        duration: "2 Years (Full-Time)",
        fee: "AUD $36,000/Year",
        requirement: "Bachelor’s Degree (Any Field) + IELTS 6.5",
        intake: "February & July",
      },
    ],
  },
  {
    id: 4,
    label: "Faculty Of Engineering & IT",
    degrees: [
      {
        title: (
          <>
            Bachelor Of Engineering
            <br /> (Honours)
          </>
        ),
        duration: "4 Years (Full-Time)",
        fee: "AUD $40,000/Year",
        requirement: "Class 12 + IELTS 6.5",
        intake: "February & July",
      },
      {
        title: (
          <>
            Master Of Data
            <br /> Science
          </>
        ),
        duration: "2 Years (Full-Time)",
        fee: "AUD $42,000/Year",
        requirement: "Bachelor’s In IT/Maths/Science + IELTS 6.5",
        intake: "February & July",
      },
    ],
  },
  {
    id: 5,
    label: "Faculty Of Science & Environment",
    degrees: [
      {
        title: (
          <>
            Bachelor Of Science
            <br /> (Biological Sciences)
          </>
        ),
        duration: "3 Years (Full-Time)",
        fee: "AUD $27,000/Year",
        requirement: "Class 12 (Science) + IELTS 6.5",
        intake: "February & July",
      },
      {
        title: (
          <>
            Master Of Environmental
            <br /> Science
          </>
        ),
        duration: "2 Years (Full-Time)",
        fee: "AUD $40,000/Year",
        requirement:
          "Bachelor’s In Science/Environment + IELTS 6.5",
        intake: "February & July",
      },
    ],
  },
];

export default function Tu14M() {
  const [selected, setSelected] = useState<number[]>([]);
  const toggle = (id: number) =>
    setSelected((s) =>
      s.includes(id) ? s.filter((x) => x !== id) : [...s, id]
    );

  const LABELS = ["Duration", "Tuition Fee", "Requirement", "Intake"];
  const TITLE_ROW = "h-16";
  const VALUE_ROW = "h-16";

  return (
    <main className="min-h-screen bg-white py-8 px-4">
      <h1 className="text-center text-2xl font-bold text-[#545454] mb-6">
        Popular Courses
      </h1>

      {/* Checkbox list */}
      <div className="mb-10 ml-4 space-y-3">
        {ITEMS.map((it) => {
          const isChecked = selected.includes(it.id);
          return (
            <button
              key={it.id}
              onClick={() => toggle(it.id)}
              className="w-full flex items-center gap-3 px-1 py-2"
            >
              <div
                className={`w-6 h-6 rounded-md flex items-center justify-center transition-all ${
                  isChecked ? "bg-[#37D7D9]" : "bg-gray-200"
                }`}
              >
                {isChecked && (
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <div className="text-[#545454] text-base font-medium text-left">
                {it.label}
              </div>
            </button>
          );
        })}
      </div>

      {/* Layout: fixed left labels + horizontal slider */}
      <div className="flex items-start">
        {/* LEFT fixed labels */}
        <div className="flex-shrink-0 ml-4">
          <div
            className={`grid grid-rows-[${TITLE_ROW}_repeat(4,${VALUE_ROW})] gap-y-2`}
          >
            <div className={TITLE_ROW} />
            {LABELS.map((l) => (
              <div
                key={l}
                className={`${VALUE_ROW} flex items-center text-sm font-semibold text-[#545454]`}
              >
                {l}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT horizontal slider */}
        <div className="flex-1 overflow-x-auto snap-x snap-mandatory touch-pan-x">
          <div className="flex items-start pb-12">
            {[...selected].sort((a, b) => a - b).map((id, idx) => {
              const item = ITEMS.find((i) => i.id === id);
              if (!item) return null;

              const [leftDeg, rightDeg] = item.degrees;

              return (
                <div
                  key={id}
                  className="relative min-w-[150%] snap-center"
                >
                  <div className="grid grid-cols-2">
                    {/* Titles */}
                    <div
                      className={`flex items-center justify-center px-4 ${TITLE_ROW}`}
                    >
                      <h3 className="text-center text-black font-semibold">
                        {leftDeg.title}
                      </h3>
                    </div>
                    <div
                      className={`flex items-center justify-center ${TITLE_ROW}`}
                    >
                      <h3 className="text-center text-black font-semibold">
                        {rightDeg.title}
                      </h3>
                    </div>

                    {/* Duration */}
                    <div
                      className={`mt-2 px-4 text-center flex items-center justify-center ${VALUE_ROW} text-sm text-[#545454]`}
                    >
                      {leftDeg.duration}
                    </div>
                    <div
                      className={`mt-2 px-4 text-center flex items-center justify-center ${VALUE_ROW} text-sm text-[#545454]`}
                    >
                      {rightDeg.duration}
                    </div>

                    {/* Fee */}
                    <div
                      className={`mt-2 px-4 text-center flex items-center justify-center ${VALUE_ROW} text-sm text-[#545454]`}
                    >
                      {leftDeg.fee}
                    </div>
                    <div
                      className={`mt-2 px-4 text-center flex items-center justify-center ${VALUE_ROW} text-sm text-[#545454]`}
                    >
                      {rightDeg.fee}
                    </div>

                    {/* Requirement */}
                    <div
                      className={`mt-2 px-4 text-center flex items-center justify-center ${VALUE_ROW} text-sm text-[#545454]`}
                    >
                      {leftDeg.requirement}
                    </div>
                    <div
                      className={`mt-2 px-4 text-center flex items-center justify-center ${VALUE_ROW} text-sm text-[#545454]`}
                    >
                      {rightDeg.requirement}
                    </div>

                    {/* Intake */}
                    <div
                      className={`mt-2 px-4 text-center flex items-center justify-center ${VALUE_ROW} text-sm text-[#545454]`}
                    >
                      {leftDeg.intake}
                    </div>
                    <div
                      className={`mt-2 px-4 text-center flex items-center justify-center ${VALUE_ROW} text-sm text-[#545454]`}
                    >
                      {rightDeg.intake}
                    </div>
                  </div>

                  {/* Divider between Bachelor & Master */}
                  <div
                    aria-hidden
                    className="absolute top-0 bottom-0 left-1/2 w-[2px] transform -translate-x-1/2"
                    style={{
                      background:
                        "linear-gradient(180deg, #DFFFFF 0%, #37D7D9 20%, #37D7D9 50%, #37D7D9 80%, #DFFFFF 100%)",
                    }}
                  />

                  {/* Divider between faculties */}
                  {idx !== selected.length - 1 && (
                    <div
                      aria-hidden
                      className="absolute right-0 top-2 bottom-2 w-[2px]"
                      style={{
                        background:
                          "linear-gradient(180deg, #DFFFFF 0%, #37D7D9 20%, #37D7D9 50%, #37D7D9 80%, #DFFFFF 100%)",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
