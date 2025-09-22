"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ChevronDown, X, Menu } from "lucide-react";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm ">
      <div className=" py-2 max-w-full mx-auto px-6 sm:px-8 lg:px-2">
        <div className="  flex justify-between items-center h-17">
          {/* Logo Section - Left */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.png" // replace with your logo path
              alt="Logo"
              className="object-contain"
              height={50}
              width={70}
            />
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden lg:flex items-center space-x-13">
            <Link
              href="/"
              className="text-[#3F3A34]  hover:text-[#775d3b] text-md lg:text-lg font-semibold transition-colors duration-200"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center space-x-1 text-[#3F3A34]  hover:text-[#3F3A34] text-md lg:text-lg font-semibold transition-colors duration-200"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  <Link
                    href="/services/web-development"
                    className="block px-4 py-2 text-[#3F3A34]  hover:text-[#3F3A34] text-md font-normal transition-colors duration-200"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/services/mobile-apps"
                    className="block px-4 py-2 text-[#3F3A34]  hover:text-[#3F3A34] text-md font-normal transition-colors duration-200"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Mobile Applications
                  </Link>
                  <Link
                    href="/services/consulting"
                    className="block px-4 py-2 text-[#3F3A34]  hover:text-[#3F3A34] text-md font-normal transition-colors duration-200"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    IT Consulting
                  </Link>
                  <Link
                    href="/services/digital-marketing"
                    className="block px-4 py-2 text-[#3F3A34]  hover:text-[#3F3A34] text-md font-normal transition-colors duration-200"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Digital Marketing
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/customers"
              className=" text-[#3F3A34]  hover:text-[#775d3b] text-md lg:text-lg font-semibold transition-colors duration-200"
            >
              Customers
            </Link>

            <Link
              href="/About"
              className="text-[#3F3A34]  hover:text-[#775d3b] text-md lg:text-lg font-semibold transition-colors duration-200"
            >
              About Us
            </Link>
          </div>

          {/* Book an appointment Button - Right */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="bg-[#3F3A34] hover:bg-[#775d3b] text-white px-8 py-3 rounded-lg font-medium text-sm transition-colors duration-200"
            >
              Book an appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black hover:text-[#775d3b] p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden relative z-50">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link
                href="/"
                className="block px-3 py-2 text-black hover:text-[#775d3b] font-medium text-sm transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/services"
                className="block px-3 py-2 text-black hover:text-[#775d3b] font-medium text-sm transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>

              <Link
                href="/customers"
                className="block px-3 py-2 text-black hover:text-[#775d3b] font-medium text-sm transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Customers
              </Link>

              <Link
                href="/About"
                className="block px-3 py-2 text-black hover:text-[#775d3b] font-medium text-sm transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>

              {/* Mobile CTA Button */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-[#5c5558] hover:bg-[#775d3b] text-white px-8 py-3 rounded-lg font-medium text-sm transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book an appointment
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay to close dropdown when clicking outside */}
      {isServicesOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsServicesOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
