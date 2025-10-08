"use client";

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Mheader() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // scrolling down → hide
        setShowHeader(false);
      } else {
        // scrolling up → show
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white px-5 md:px-25 py-6 flex items-center justify-between z-50 transition-transform duration-500 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="/images/eduLogo.png"
          alt="EduLinks Logo"
          className="h-10 ml-30"
        />
      </div>

      {/* Desktop Navigation
      <nav
        className="hidden space-x-4 text-gray-700 text-sm"
        style={{ fontFamily: "Space Grotesk" }}
      >
        <a href="/" className="">
          Home
        </a>
        <a href="/about" className="hover:text-teal-600">
          About us
        </a>
        <a href="/StudyDestinations" className="hover:text-teal-600">
          Study Destination
        </a>

        {/* Dropdown - Services */}
        {/* <a href="/services" className="hover:text-teal-600">
  services
</a>

        <a href="/topuniversity" className="hover:text-teal-600">
          Top Universities
        </a>
        <a href="/careers" className="hover:text-teal-600">
          Careers
        </a>
      </nav> */}

      {/* Desktop Buttons
      <div className="hidden md:flex space-x-2">
        <button className="border border-[#37D7D9] text-[#37D7D9] text-md px-3 py-2 rounded-full hover:bg-teal-50 hover:shadow-md hover:shadow-gray-400 transition-shadow duration-300 ease-in-out">
          Edulink AI Assistant
        </button>
        <button className="bg-[#37D7D9] text-md text-white px-3 py-2 rounded-full hover:bg-[#00B7C1] hover:shadow-md hover:shadow-gray-400 transition-shadow duration-300 ease-in-out">
          Register/Sign In
        </button>
      </div> */}

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-2xl text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <a href="/" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="/about" onClick={() => setMenuOpen(false)}>
            About us
          </a>
          <a href="/StudyDestinations" onClick={() => setMenuOpen(false)}>
            Study Destination
          </a>
          <a href="/services/counseling" onClick={() => setMenuOpen(false)}>
            Counseling
          </a>
          <a href="/services/visa" onClick={() => setMenuOpen(false)}>
            Visa Guidance
          </a>
          <a href="/universities" onClick={() => setMenuOpen(false)}>
            Top Universities
          </a>
          <a href="/careers" onClick={() => setMenuOpen(false)}>
            Careers
          </a>

          {/* Mobile Buttons */}
          <button className="border border-[#37D7D9] text-[#37D7D9] text-md px-4 py-2 rounded-full w-4/10">
            Edulink AI Assistant
          </button>
          <button className="bg-[#37D7D9] text-md text-white px-4 py-2 rounded-full w-4/10">
            Register/Sign In
          </button>
        </div>
      )}
    </header>
  );
}

export default Mheader;
