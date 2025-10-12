import React from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Mfooter() {
  return (
    <footer className="bg-white">
      {/* Top CTA Section */}
      <div className="bg-white max-w-6xl mx-auto px-6 py-10 mt-10">
        {/* <div
          className="rounded-4xl flex flex-col bg-contain bg-no-repeat bg-center justify-between px-8 py-20"
          style={{ backgroundImage: "url('/images/MfooterImg.png')", backgroundSize: "130%", }}
        > */}
          <div className="w-full mx-auto scale-121">
          <img
            src="/images/MfooterImg.png"
            alt="Overlay"
            width={1000}
            height={1000}
            className="w-[900px] h-auto object-contain -translate-y-20"
          />
          </div>

          {/* Left Text
          <div className="text-white -translate-y-5 max-w-lg">
            <h2
              className="text-xl font-semibold"
              style={{ fontFamily: "Space Grotesk" }}
            >
              Still Have Doubts?
            </h2>
            <p
              className="mb-6 mt-1 text-xs"
              style={{ fontFamily: "DM Sans" }}
            >
              Book A 1:1 Counselling Session With Our<br/> Study Visa Experts
              Get All Your Questions<br/> Answered — From Choosing The Right<br/> Career
               Path To Getting Your Visa<br/> Approved.
            </p>
            {/* <button className="bg-white text-cyan-500 px-6 py-3 rounded-full font-medium hover:bg-teal-50">
              Book My Session
            </button> */}
          {/* </div> */}
        </div>

      {/* Footer Links */}
      <div
        className="bg-white relative z-20 max-w-6xl mx-auto px-12 -mt-30 grid grid-cols-2 gap-10"
        style={{ fontFamily: "DM Sans" }}
      >
        {/* Quick Links */}
        <div className="bg-white">
          <h3 className="font-semibold text-lg mb-1">Quick Links</h3>
          <ul className="space-y-2 text-black">
            <li><a href="/home" className="hover:text-cyan-600">Home</a></li>
            <li><a href="/about" className="hover:text-cyan-600">About Us</a></li>
            <li><a href="/study-destinations" className="hover:text-cyan-600">Study Destinations</a></li>
            <li><a href="/services" className="hover:text-cyan-600">Services</a></li>
            <li><a href="/contact" className="hover:text-cyan-600">Contact Us</a></li>
          </ul>
        </div>

        {/* Study Destinations */}
        <div className="bg-white">
          <h3 className="font-semibold text-lg mb-1">Study Destinations</h3>
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
        <div className="bg-white -mt-5">
          <h3 className="font-semibold text-lg mb-1">Services</h3>
          <ul className="space-y-2 text-black">
            <li><a href="/services/student-visa" className="hover:text-cyan-600">Student Visa</a></li>
            <li><a href="/services/career-guidance" className="hover:text-cyan-600">Personalised Career Guidance</a></li>
            <li><a href="/services/ai-jackpot" className="hover:text-cyan-600">Edulinks AI Jackpot</a></li>
            <li><a href="/services/scholarship" className="hover:text-cyan-600">Scholarship Assessment</a></li>
            <li><a href="/services/loan" className="hover:text-cyan-600">Loan Guidance</a></li>
            <li><a href="/services/post-landing" className="hover:text-cyan-600">Post Landing Services</a></li>
          </ul>
        </div>

         {/* Social (always second) */}
          <div className=" bg-white flex flex-col items-center">
            <span className="text-lg font-semibold -translate-y-5 -translate-x-7">Follow us on</span>
            <div className="flex flex-col text-lg -translate-x-7 gap-y-7 text-gray-600">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaXTwitter /></a>
              <a href="#"><FaTiktok /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>
        </div>


      {/* Logo & Social */}
      <div className="bg-white relative z-20 max-w-6xl mx-auto px-6 py-6">
        <div className="border-t-2 border-gray-200"></div>

        <div className="flex flex-col items-center justify-between mt-2">
          {/* Logo (always first) */}
          <img
            src="/images/eduLogo.png"
            alt="EduLinks"
            className="w-40 mb-4"
          />
           {/* Contact */}
        <div className="bg-white flex flex-row gap-x-10">
          <div className="flex text-gray-600">
            <FiPhone size={20} className="text-black" />
            <span>+64 27 326 3612</span>
          </div>
          <div className="flex text-gray-600">
            <MdOutlineEmail size={20} className="text-black" />
            <span>admin@edulinks.io</span>
          </div>
        </div>
      </div>

        <div className="bg-white border-t-2 mt-2 border-gray-200"></div>

        {/* Bottom Links */}
        <div className="bg-white flex flex-col justify-between items-center text-gray-500 text-sm mt-4">
          <div className="flex gap-8 mb-2">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
          <p className="font-semibold">© 2025 EduLinks. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
