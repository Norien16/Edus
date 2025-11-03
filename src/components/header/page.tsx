"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";


function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowHeader(false); // scrolling down → hide
      } else {
        setShowHeader(true); // scrolling up → show
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
          className="h-10 ml-2"
        />
      </div>

      {/* Desktop Navigation */}
<nav
  className="hidden md:flex space-x-6 text-gray-700 text-sm relative"
  style={{ fontFamily: "Space Grotesk" }}
>
  <Link href="/" className="hover:text-[#37D7D9]">
    Home
  </Link>

  <Link href="/about" className="hover:text-[#37D7D9]">
    About us
  </Link>

  {/* Study Destination Dropdown */}
  <div className="relative flex flex-row group">
    <Link
      href="/StudyDestinations"
      className="hover:text-[#37D7D9] cursor-pointer"
    >
      Study Destination 
    </Link>
    <FaChevronDown className="text-[12px] mt-1 ml-1 transition-transform duration-300 group-hover:rotate-180" />
    <div
      className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-lg rounded-lg w-52 py-2 z-50"
    >
      <Link
        href="/StudyDestinations/countrypage1"
        className="px-4 py-2 hover:bg-gray-100 pl-5 group/item"
      >
  <span className="absolute left-0 top-1 h-10 w-1 bg-[#37D7D9] rounded-r transition-all duration-300 scale-y-0 group-hover/item:scale-y-100 origin-top"></span>
        Autralia
      </Link>
      <Link
        href="/StudyDestinations/countrypage2"
        className="px-4 py-2 hover:bg-gray-100 pl-5 group/item"
      >
        <span className="absolute left-0 top-11 h-9 w-1 bg-[#37D7D9] rounded-r transition-all duration-300 scale-y-0 group-hover/item:scale-y-100 origin-top"></span>
        New Zealand
      </Link>
      <Link
        href="/StudyDestinations/countrypage3"
        className="px-4 py-2 hover:bg-gray-100 pl-5 group/item"
      >
        <span className="absolute left-0 top-20 h-9 w-1 bg-[#37D7D9] rounded-r transition-all duration-300 scale-y-0 group-hover/item:scale-y-100 origin-top"></span>
        Canada
      </Link>
      <Link
        href="/StudyDestinations/countrypage4"
        className="px-4 py-2 hover:bg-gray-100 pl-5 group/item"
      >
        <span className="absolute left-0 top-29 h-9 w-1 bg-[#37D7D9] rounded-r transition-all duration-300 scale-y-0 group-hover/item:scale-y-100 origin-top"></span>
        UK
      </Link>
      <Link
        href="/StudyDestinations/countrypage5"
        className="px-4 py-2 hover:bg-gray-100 pl-5 group/item"
      >
        <span className="absolute left-0 top-38 h-9 w-1 bg-[#37D7D9]0 rounded-r transition-all duration-300 scale-y-0 group-hover/item:scale-y-100 origin-top"></span>
        USA
      </Link>
      <Link
        href="/StudyDestinations/countrypage6"
        className="px-4 py-2 hover:bg-gray-100 pl-5 group/item"
      >
        <span className="absolute left-0 top-47 h-10 w-1 bg-[#37D7D9] rounded-r transition-all duration-300 scale-y-0 group-hover/item:scale-y-100 origin-top"></span>
        Germany
      </Link>
    </div>
  </div>

  {/* Services Dropdown */}
  <div className="relative flex flex-row group">
    <Link href="/ourservices" className="hover:text-[#37D7D9] cursor-pointer">
      Services
    </Link>
    <FaChevronDown className="text-[12px] mt-1 ml-1 transition-transform duration-300 group-hover:rotate-180" />
    <div
      className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-lg rounded-lg w-52 py-2 z-50"
    >
      <Link
        href="/ourservices/services"
        className="px-4 py-2 hover:bg-gray-100 pl-5 group/item"
      >
        <span className="absolute left-0 top-1 h-10 w-1 bg-[#37D7D9] rounded-r transition-all duration-300 scale-y-0 group-hover/item:scale-y-100 origin-top"></span>
        AI-Powered Test
      </Link>
      <Link
        href="/ourservices/services1"
        className="px-4 py-2 hover:bg-gray-100 pl-5 group/item"
      >
        <span className="absolute left-0 top-10 h-10 w-1 bg-[#37D7D9] rounded-r transition-all duration-300 scale-y-0 group-hover/item:scale-y-100 origin-top"></span>
        English Language Assessment
      </Link>
      <Link
        href="/ourservices/services2"
        className="px-4 py-2 hover:bg-gray-100 pl-5 group/item"
      >
        <span className="absolute left-0 top-17 h-6 w-1 bg-[#37D7D9] rounded-r transition-all duration-300 scale-y-0 group-hover/item:scale-y-100 origin-top"></span>
        Community Hub
      </Link>
      <Link
        href="/ourservices/services3"
        className="px-4 py-2 hover:bg-gray-100 pl-5 group/item"
      >
        <span className="absolute left-0 top-21 h-10 w-1 bg-[#37D7D9] rounded-r transition-all duration-300 scale-y-0 group-hover/item:scale-y-100 origin-top"></span>
        AI Guidance & Counselor Support
      </Link>
    </div>
  </div>

  {/* Top Universities Dropdown */}
  <div className="relative flex flex-row group">
      Top Universities
    <FaChevronDown className="text-[12px] mt-1 ml-1 transition-transform duration-300 group-hover:rotate-180" />
    <div
      className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-lg rounded-lg w-60 py-2 z-50"
    >
      <Link
        href="/topunis/topuniversityaus"
        className="px-4 py-2 hover:bg-gray-100 pl-5 group/item"
      >
        <span className="absolute left-0 top-1 h-10 w-1 bg-[#37D7D9] rounded-r transition-all duration-300 scale-y-0 group-hover/item:scale-y-100 origin-top"></span>
        Austraila
      </Link>
      <Link
        href="/topunis/topuniversitycan"
        className="px-4 py-2 hover:bg-gray-100 pl-5 group/item"
      >
        <span className="absolute left-0 top-11 h-10 w-1 bg-[#37D7D9] rounded-r transition-all duration-300 scale-y-0 group-hover/item:scale-y-100 origin-top"></span>
        Canada
      </Link>
      <Link
        href="/topunis/topuniversityger"
        className="px-4 py-2 hover:bg-gray-100 pl-5 group/item"
      >
        <span className="absolute left-0 top-20 h-10 w-1 bg-[#37D7D9] rounded-r transition-all duration-300 scale-y-0 group-hover/item:scale-y-100 origin-top"></span>
        Germany
      </Link>
      <Link
        href="/topunis/topuniversitynz"
        className="px-4 py-2 hover:bg-gray-100 pl-5 group/item"
      >
        <span className="absolute left-0 top-29 h-14 w-1 bg-[#37D7D9] rounded-r transition-all duration-300 scale-y-0 group-hover/item:scale-y-100 origin-top"></span>
        New Zealand
      </Link>
      <Link
        href="/topunis/topuniversityuk"
        className="px-4 py-2 hover:bg-gray-100 pl-5 group/item"
      >
        <span className="absolute left-0 top-43 h-9 w-1 bg-[#37D7D9] rounded-r transition-all duration-300 scale-y-0 group-hover/item:scale-y-100 origin-top"></span>
        UK
      </Link>
      <Link
        href="/topunis/topuniversityusa"
        className="px-4 py-2 hover:bg-gray-100 pl-5 group/item"
      >
        <span className="absolute left-0 top-52 h-9 w-1 bg-[#37D7D9] rounded-r transition-all duration-300 scale-y-0 group-hover/item:scale-y-100 origin-top"></span>
        USA
      </Link>
    </div>
  </div>

  {/* Top Universities Dropdown */}
  <div className="relative flex flex-row group">
      Career
    <FaChevronDown className="text-[12px] mt-1 ml-1 transition-transform duration-300 group-hover:rotate-180" />
    <div
      className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-lg rounded-lg w-60 py-2 z-50"
    >
      <Link
        href="/maincareer/topcareer1"
        className="px-4 py-2 hover:bg-gray-100 pl-5 group/item"
      >
        <span className="absolute left-0 top-1 h-10 w-1 bg-[#37D7D9] rounded-r transition-all duration-300 scale-y-0 group-hover/item:scale-y-100 origin-top"></span>
        Austraila
      </Link>
      <Link
        href="/maincareer/topcareer2"
        className="px-4 py-2 hover:bg-gray-100 pl-5 group/item"
      >
        <span className="absolute left-0 top-11 h-9 w-1 bg-[#37D7D9] rounded-r transition-all duration-300 scale-y-0 group-hover/item:scale-y-100 origin-top"></span>
        Canada
      </Link>
      <Link
        href="/maincareer/topcareer3"
        className="px-4 py-2 hover:bg-gray-100 pl-5 group/item"
      >
        <span className="absolute left-0 top-20 h-9 w-1 bg-[#37D7D9] rounded-r transition-all duration-300 scale-y-0 group-hover/item:scale-y-100 origin-top"></span>
        Germany
      </Link>
      <Link
        href="/maincareer/topcareer4"
        className="px-4 py-2 hover:bg-gray-100 pl-5 group/item"
      >
        <span className="absolute left-0 top-29 h-9 w-1 bg-[#37D7D9] rounded-r transition-all duration-300 scale-y-0 group-hover/item:scale-y-100 origin-top"></span>
        New Zealand
      </Link>
      <Link
        href="/maincareer/topcareer5"
        className="px-4 py-2 hover:bg-gray-100 pl-5 group/item"
      >
        <span className="absolute left-0 top-38 h-9 w-1 bg-[#37D7D9] rounded-r transition-all duration-300 scale-y-0 group-hover/item:scale-y-100 origin-top"></span>
        UK
      </Link>
      <Link
        href="/maincareer/topcareer6"
        className="px-4 py-2 hover:bg-gray-100 pl-5 group/item"
      >
        <span className="absolute left-0 top-47 h-9 w-1 bg-[#37D7D9] rounded-r transition-all duration-300 scale-y-0 group-hover/item:scale-y-100 origin-top"></span>
        USA
      </Link>
    </div>
  </div>
</nav>


      {/* Desktop Buttons */}
<div className="hidden md:flex space-x-2">
  <Link href="/contactus/aiassistant">
    <button className="border border-[#37D7D9] text-[#37D7D9] text-md px-3 py-2 rounded-full hover:bg-teal-50 hover:shadow-md hover:shadow-gray-400 transition-shadow duration-300 ease-in-out">
      Edulink AI Assistant
    </button>
  </Link>

  <Link href="/contactus">
    <button className="bg-[#37D7D9] text-md text-white px-3 py-2 rounded-full hover:bg-[#00B7C1] hover:shadow-md hover:shadow-gray-400 transition-shadow duration-300 ease-in-out">
      Register/Sign In
    </button>
  </Link>
</div>


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
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About us
          </Link>
          <Link href="/StudyDestinations" onClick={() => setMenuOpen(false)}>
            Study Destination
          </Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link href="/topuniversity" onClick={() => setMenuOpen(false)}>
            Top Universities
          </Link>
          <Link href="/career" onClick={() => setMenuOpen(false)}>
            Careers
          </Link>

          {/* Mobile Buttons */}
          <button className="border border-[#37D7D9] text-[#37D7D9] text-md px-4 py-2 rounded-full w-4/5">
            Edulink AI Assistant
          </button>
          <button className="bg-[#37D7D9] text-md text-white px-4 py-2 rounded-full w-4/5">
            Register/Sign In
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
