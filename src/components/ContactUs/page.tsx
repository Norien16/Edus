"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ContactUsPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});

  const handleNameChange = (v: string) => {
    const sanitized = v.replace(/[^A-Za-z\s]/g, "");
    setFullName(sanitized);
  };

  const handleEmailChange = (v: string) => {
    setEmail(v);
  };

  const handlePhoneChange = (v: string) => {
    const digitsOnly = v.replace(/\D/g, "").slice(0, 10);
    setPhone(digitsOnly);
  };

  const validate = () => {
    const next: typeof errors = {};
    if (!fullName.trim()) next.name = "Please enter your full name.";
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) next.email = "Please enter your email address.";
    else if (!emailRe.test(email)) next.email = "Please enter a valid email address.";
    if (!phone) next.phone = "Please enter your phone number.";
    else if (phone.length !== 10) next.phone = "Phone number must be exactly 10 digits.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    alert("Form is valid — submit to server here.");
  };

  return (
    <main
      className="py-11"
      style={{background: "#DFFFFF", paddingTop: "30px" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <section className="-ml-16 -mt-15">
            <h1
              className="text-3xl lg:text-5xl font-bold text-[#545454] leading-tight"
            >
              Edulinks
              <br />
              AI-Assistant
            </h1>
            <p className="mt-8 text-[#5A7A7C] text-md max-w-md">
              Start your educational journey with our AI-powered tools<br/> 100%
            </p>

            {/* Logo image */}
            <div className="mt-14">
              <Image
                src="/images/formImg.png"
                alt="Edulinks Logo"
                width={400}
                height={160}
                className="object-contain"
              />
            </div>
          </section>

          {/* Right card */}
          <aside className="flex justify-center">
            <form
              onSubmit={onSubmit}
              className="w-full max-w-[525px] max-h-[620px] -ml-16 mt-8 bg-white rounded-4xl px-8 py-10 shadow-[0_8px_40px_rgba(0,0,0,0.30)]"
            >
              <div className="space-y-5">
                {/* Full name */}
                <label className="block text-lg">
                  <input
                    value={fullName}
                    onChange={(e) => handleNameChange(e.target.value)}
                    placeholder="Full name"
                    className="w-full border border-[#37D7D9] rounded-2xl px-4 py-4 outline-none text-gray-700 placeholder-[#555555] focus:ring-0 focus:border-[#37D7D9]"
                  />
                  {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
                </label>

                {/* Email */}
                <label className="block text-lg">
                  <input
                    value={email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    placeholder="Email address"
                    inputMode="email"
                    className="w-full border border-[#37D7D9] rounded-2xl px-4 py-4 outline-none text-gray-700 placeholder-[#555555] focus:ring-0 focus:border-[#37D7D9]"
                  />
                  {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
                </label>

                {/* Phone */}
                <label className="block text-lg">
                  <input
                    value={phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    placeholder="Phone number"
                    inputMode="numeric"
                    maxLength={10}
                    className="w-full border border-[#37D7D9] rounded-2xl px-4 py-4 outline-none text-gray-700 placeholder-[#555555] focus:ring-0 focus:border-[#37D7D9]"
                  />
                  {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
                </label>

                <button
                  type="submit"
                  className="w-full bg-[#37D7D9] text-white font-bold rounded-[12px] py-3 mt-2 text-lg cursor-pointer"
                  style={{ boxShadow: "0 16px 30px rgba(55,215,217,0.15)" }}
                >
                  Create Account
                </button>

                <div className="mt-2 px-2 py-5 bg-[#DFFFFF] rounded-xl border border-[#37D7D9] text-center">
                  <p className="text-[#555555] text-xl mb-3">
                    Already Have An Account?
                  </p>
                  <button
                    type="button"
                    className="bg-[#E4FFFF] px-10 py-1 rounded-full font-black text-[#545454] text-sm shadow-[0_8px_16px_rgba(0,0,0,0.20)] border-[#37D7D9] border-[0.80px] cursor-pointer"
                  >
                    Sign In
                  </button>
                </div>

                <div className="text-center mt-7">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 border border-[#37D7D9] bg-white px-3 py-1 rounded-md text-[10px] cursor-pointer"
                  >
                    <span className="w-4 h-4 rounded-full flex items-center justify-center bg-[#37D7D9] text-white">
                      ?
                    </span>
                    Need help? Chat with our AI Assistant
                  </button>
                </div>
              </div>
            </form>
          </aside>
        </div>
      </div>
    </main>
  );
}
