"use client";

import Link from "next/link";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className=" border max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section - Left placeholder */}
          <div className="flex-shrink-0">
            <div className="w-20 h-8 bg-gray-200 rounded flex items-center justify-center text-sm text-gray-500">
              Logo
            </div>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                <span>Services</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                  <Link
                    href="/services/web-development"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/services/mobile-apps"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Mobile Applications
                  </Link>
                  <Link
                    href="/services/consulting"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    IT Consulting
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/customers"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Customers
            </Link>

            <Link
              href="/company"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Company
            </Link>

            <Link
              href="/careers"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Careers
            </Link>

            {/* Resources Dropdown */}
            <div className="relative">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Get In Touch Button - Right */}
          <div className="flex items-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
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