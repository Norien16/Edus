"use client";

import React, { useState } from "react";

type Item = { id: number; label: React.ReactNode };

const ITEMS: Item[] = [
  { id: 1, label: <>Faculty of Science</> },
  { id: 2, label: <>Faculty of Engineering</> },
  { id: 3, label: <>Faculty of Arts &<br/> Social Sciences</> },
  { id: 4, label: <>Faculty of Business &<br/> Economics</> },
  { id: 5, label: <>Faculty of Health &<br/> Medicine</> },
];

export default function TU54() {
  const [selected, setSelected] = useState<number[]>([]);

  const toggle = (id: number) =>
    setSelected((s) =>
      s.includes(id) ? s.filter((x) => x !== id) : [...s, id]
    );

  return (
    <main >
      {/* Header */}
      <div className="text-center mt-20 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#545454]">
          Popular Courses
        </h1>
      </div>

      <div>
        <div className="grid grid-cols-5 gap-6 items-start">
          {/* LEFT - checkboxes */}
          <aside
            className="col-span-1 mt-20 px-18 pt-16 pb-70 w-[430px] sticky top-0 overflow-hidden"
            style={{ backgroundColor: "#DFFFFF" }}
          >
            <div className="space-y-8">
              {ITEMS.map((it) => {
                const isChecked = selected.includes(it.id);
                return (
                  <div key={it.id} className="flex items-center gap-6">
                    {/* Checkbox */}
                    <label className="relative flex justify-center items-center cursor-pointer shrink-0 -ml-4 -mt-10">
                      <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={isChecked}
                        onChange={() => toggle(it.id)}
                      />
                      <span
                        className={`w-7 h-7 rounded-md border-2 transition-all flex items-center justify-center ${
                          isChecked
                            ? "border-transparent bg-[#37D7D9]"
                            : "bg-white border-white"
                        }`}
                        aria-hidden
                      >
                        <svg
                          className={`w-4 h-4 transform ${
                            isChecked
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-75"
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                    </label>

                    {/* Label + underline */}
                    <div className="flex-1">
                      <div className="text-lg leading-6 text-black font-medium">
                        {it.label}
                      </div>

                      <div className="h-2 mt-6 flex justify-center">
                        <div className="w-[250px] h-0.5 bg-[linear-gradient(to_right,#DFFFFF_0%,#37D7D9_20%,#37D7D9_50%,#37D7D9_80%,#DFFFFF_100%)]" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>

          {/* RIGHT - content area */}
          <section className="col-span-4 mt-28 ml-50">
            {/* Header Row */}
            <div className="grid grid-cols-5 gap-4 items-center mb-8">
              <div /> {/* empty for program title */}
              <div className="text-base font-bold text-[#545454]">Duration</div>
              <div className="text-base font-bold text-[#545454]">
                Tuition Fee
              </div>
              <div className="text-base font-bold text-[#545454]">
                Requirement
              </div>
              <div className="text-base font-bold text-[#545454]">Intake</div>
            </div>

            <div className="space-y-8">
              {[...selected].sort((a, b) => a - b).map((id) => (
                <div key={id} className="space-y-10">
                  {/* -------- ID 1 -------- */}
                  {id === 1 && (
                    <>
                      {/* Bachelor */}
                      <div className="grid grid-cols-5 gap-4 items-start">
                        <div className="col-span-1">
                          <h3 className="font-semibold">
                            Bachelor of Science (Honours)
                          </h3>
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          3 years (full-time)
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          AUD $42,000/Year (estimate)
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          Class 12 (Science subjects) + IELTS 6.5
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          Intake: February & July
                        </div>
                      </div>

                      {/* Master */}
                      <div className="grid grid-cols-5 gap-4 items-start mt-4">
                        <div className="col-span-1">
                          <h3 className="font-semibold">
                            Master of Biotechnology & Bioinformatics
                          </h3>
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          2 Years (Full-Time)
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          AUD $45,000/Year (estimate)
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          Bachelor’s in Science + IELTS 6.5
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                           Intake: February & July
                        </div>
                      </div>

                      <div className="h-2 mt-6 flex justify-center">
                        <div className="w-[250px] h-0.5 bg-[linear-gradient(to_right,#DFFFFF_0%,#37D7D9_20%,#37D7D9_50%,#37D7D9_80%,#DFFFFF_100%)]" />
                      </div>
                    </>
                  )}

                  {/* -------- ID 2 -------- */}
                  {id === 2 && (
                    <>
                      <div className="grid grid-cols-5 gap-4 items-start">
                        <div className="col-span-1">
                          <h3 className="font-semibold">
                            Bachelor of Engineering (Honours)
                          </h3>
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          4 years (full-time)
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          AUD $43,000/Year (estimate)
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          Class 12 (Maths/Physics) + IELTS 6.5
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          Intake: February & July
                        </div>
                      </div>

                      <div className="grid grid-cols-5 gap-4 items-start mt-4">
                        <div className="col-span-1">
                          <h3 className="font-semibold">Master of Engineering in Renewable Energy</h3>
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          2 Years (Full-Time)
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          AUD $46,000/Year (estimate)
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          Bachelor’s in Engineering + IELTS 6.5
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          Intake: February & July
                        </div>
                      </div>

                      <div className="h-2 mt-6 flex justify-center">
                        <div className="w-[250px] h-0.5 bg-[linear-gradient(to_right,#DFFFFF_0%,#37D7D9_20%,#37D7D9_50%,#37D7D9_80%,#DFFFFF_100%)]" />
                      </div>
                    </>
                  )}

                  {/* -------- ID 3 -------- */}
                  {id === 3 && (
                    <>
                      <div className="grid grid-cols-5 gap-4 items-start">
                        <div className="col-span-1">
                          <h3 className="font-semibold">
                            Bachelor of Arts (International Relations & Languages)
                          </h3>
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          3 Years (Full-Time)
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          AUD $40,000/Year (estimate)
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          Class 12 + IELTS 6.5
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          Intake: February & July
                        </div>
                      </div>

                      <div className="grid grid-cols-5 gap-4 items-start mt-4">
                        <div className="col-span-1">
                          <h3 className="font-semibold">
                            Master of Public Policy
                          </h3>
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          2 Years (Full-Time)
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          AUD $44,000/Year (estimate)
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          Bachelor’s degree (any field) + IELTS 6.5
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          Intake: February & July
                        </div>
                      </div>

                      <div className="h-2 mt-6 flex justify-center">
                        <div className="w-[250px] h-0.5 bg-[linear-gradient(to_right,#DFFFFF_0%,#37D7D9_20%,#37D7D9_50%,#37D7D9_80%,#DFFFFF_100%)]" />
                      </div>
                    </>
                  )}

                  {/* -------- ID 4 -------- */}
                  {id === 4 && (
                    <>
                      <div className="grid grid-cols-5 gap-4 items-start">
                        <div className="col-span-1">
                          <h3 className="font-semibold">
                            Bachelor of Commerce / Bachelor of Economics
                          </h3>
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          3 years (full-time)
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          AUD $41,000/Year (estimate)
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          Class 12 + IELTS 6.5
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          Intake: February & July
                        </div>
                      </div>

                      <div className="grid grid-cols-5 gap-4 items-start mt-4">
                        <div className="col-span-1">
                          <h3 className="font-semibold">Master of Business Analytics</h3>
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          1.5 years (full-time)
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          AUD $45,000/Year (estimate)
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          Bachelor’s degree + IELTS 6.5
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          Intake: February
                        </div>
                      </div>

                      <div className="h-2 mt-6 flex justify-center">
                        <div className="w-[250px] h-0.5 bg-[linear-gradient(to_right,#DFFFFF_0%,#37D7D9_20%,#37D7D9_50%,#37D7D9_80%,#DFFFFF_100%)]" />
                      </div>
                    </>
                  )}

                  {/* -------- ID 5 -------- */}
                  {id === 5 && (
                    <>
                      <div className="grid grid-cols-5 gap-4 items-start">
                        <div className="col-span-1">
                          <h3 className="font-semibold">
                            Bachelor of Health Science (Public Health)
                          </h3>
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          3 Years (Full-Time)
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          AUD $42,000/Year (estimate)
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          Class 12 (Biology preferred) + IELTS 6.5
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          Intake: February
                        </div>
                      </div>

                      <div className="grid grid-cols-5 gap-4 items-start">
                        <div className="col-span-1">
                          <h3 className="font-semibold">
                            Master of Global Health
                          </h3>
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          2 years (full-time)
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          AUD $46,000/Year (estimate)
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          Bachelor’s in Science/Health + IELTS 6.5
                        </div>
                        <div className="text-sm text-[#545454] flex items-center">
                          Intake: February & July
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}