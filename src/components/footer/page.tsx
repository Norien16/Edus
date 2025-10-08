import React from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Top CTA Section */}
      <div className="max-w-6xl relative z-20 mx-auto px-6 py-10">
        <div
          className="rounded-2xl flex flex-col md:flex-row bg-contain bg-no-repeat justify-between px-8 py-10 md:py-44"
          style={{ backgroundImage: "url('/images/footerImg.png')" }}
        >
          {/* Left Text */}
          <div className="text-white max-w-lg">
            <h2
              className="text-4xl md:text-5xl font-semibold "
              style={{ fontFamily: "Space Grotesk" }}
            >
              Still Have Doubts?
            </h2>
            <p
              className="mb-6 text-base md:text-lg leading-relaxed mt-6"
              style={{ fontFamily: "DM Sans" }}
            >
              Book A 1:1 Counselling Session With Our Study Visa Experts <br />
              Get All Your Questions Answered — From Choosing The Right Career
              <br /> Path To Getting Your Visa Approved.
            </p>
            <button className="bg-white text-cyan-500 px-6 py-3 rounded-full font-medium hover:bg-teal-50">
              Book My Session
            </button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div
        className="relative z-20 max-w-6xl translate-x-8 mx-auto px-6 md:px-8 -mt-30 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16"
        style={{ fontFamily: "DM Sans" }}
      >
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-black">
            <li><a href="/home" className="hover:text-cyan-600">Home</a></li>
            <li><a href="/about" className="hover:text-cyan-600">About Us</a></li>
            <li><a href="/study-destinations" className="hover:text-cyan-600">Study Destinations</a></li>
            <li><a href="/services" className="hover:text-cyan-600">Services</a></li>
            <li><a href="/contact" className="hover:text-cyan-600">Contact Us</a></li>
          </ul>
        </div>

        {/* Study Destinations */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Study Destinations</h3>
          <ul className="space-y-2 text-black">
            <li><a href="/destinations/germany" className="hover:text-cyan-600">Germany</a></li>
            <li><a href="/destinations/canada" className="hover:text-cyan-600">Canada</a></li>
            <li><a href="/destinations/australia" className="hover:text-cyan-600">Australia</a></li>
            <li><a href="/destinations/usa" className="hover:text-cyan-600">United States</a></li>
            <li><a href="/destinations/uk" className="hover:text-cyan-600">United Kingdom</a></li>
            <li><a href="/destinations/nz" className="hover:text-cyan-600">New Zealand</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-black">
            <li><a href="/services/student-visa" className="hover:text-cyan-600">Student Visa</a></li>
            <li><a href="/services/career-guidance" className="hover:text-cyan-600">Personalised Career Guidance</a></li>
            <li><a href="/services/ai-jackpot" className="hover:text-cyan-600">Edulinks AI Jackpot</a></li>
            <li><a href="/services/scholarship" className="hover:text-cyan-600">Scholarship Assessment</a></li>
            <li><a href="/services/loan" className="hover:text-cyan-600">Loan Guidance</a></li>
            <li><a href="/services/post-landing" className="hover:text-cyan-600">Post Landing Services</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-600">
            <FiPhone size={25} className="text-black" />
            <span>+64 27 326 3612</span>
          </div>
          <div className="flex items-center gap-2 pt-4 text-gray-600">
            <MdOutlineEmail size={25} className="text-black" />
            <span>admin@edulinks.io</span>
          </div>
        </div>
      </div>

      {/* Logo & Social */}
      <div className=" relative z-20 max-w-6xl mx-auto px-6 py-6">
        <div className="border-t-2 mt-4 border-gray-200"></div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-6">
          {/* Logo (always first) */}
          <img
            src="/images/eduLogo.png"
            alt="EduLinks"
            className="w-40 md:w-48 mb-4 md:mb-0"
          />

          {/* Social (always second) */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <span className="text-sm font-extralight -translate-x-15">Follow us on</span>
            <div className="flex gap-4 text-gray-600">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaXTwitter /></a>
              <a href="#"><FaTiktok /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>
        </div>

        <div className="border-t-2 mt-8 border-gray-200"></div>

        {/* Bottom Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm mt-4">
          <div className="flex gap-6 mb-2 md:mb-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
          <p className="font-semibold">© 2025 EduLinks. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
