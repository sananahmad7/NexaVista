"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Heart,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className=" bg-[#252223] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/logo.png" // Replace with your logo path
                alt="Agency Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <div className="text-2xl font-bold">
                <span className="text-white">Nexa Vista </span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[#A68353] font-semibold text-lg">
                The Right Solution. Right Now.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Custom Software Development. Digital Marketing Solutions.
                Creative Design Services.
              </p>

              <p className="text-gray-400 text-sm flex items-center">
                Made with{" "}
                <Heart className="w-4 h-4 text-red-500 mx-1 fill-red-500" />{" "}
                from the CRAFT team.
              </p>
            </div>
          </div>

          {/* Get Started Section */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-lg mb-6 relative">
              Get Started
              <div className="absolute bottom-0 left-0 w-25 h-0.5 bg-[#A68353]"></div>
            </h3>

            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-[#A68353] transition-colors duration-200 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-apps"
                  className="text-gray-300 hover:text-[#A68353] transition-colors duration-200 text-sm"
                >
                  Web Applications
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile-apps"
                  className="text-gray-300 hover:text-[#A68353] transition-colors duration-200 text-sm"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="text-gray-300 hover:text-[#A68353] transition-colors duration-200 text-sm"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/graphic-designing"
                  className="text-gray-300 hover:text-[#A68353] transition-colors duration-200 text-sm"
                >
                  Graphic Designing
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-lg mb-6 relative">
              Our Services
              <div className="absolute bottom-0 left-0 w-28 h-0.5 bg-[#A68353]"></div>
            </h3>

            <ul className="space-y-4">
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#A68353] transition-colors duration-200 text-sm"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-development"
                  className="text-gray-300 hover:text-[#A68353] transition-colors duration-200 text-sm"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile-development"
                  className="text-gray-300 hover:text-[#A68353] transition-colors duration-200 text-sm"
                >
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/it-consulting"
                  className="text-gray-300 hover:text-[#A68353] transition-colors duration-200 text-sm"
                >
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-[#A68353] transition-colors duration-200 text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* More Resources Section */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-lg mb-6 relative">
              Additional Information
              <div className="absolute bottom-0 left-0 w-48 h-0.5 bg-[#A68353]"></div>
            </h3>

            <ul className="space-y-4">
              <li>
                <span className="text-gray-300 hover:text-[#A68353] transition-colors duration-200 text-sm">
                  Office No 1, Floor No 3, Plaza 74,
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-[#A68353] transition-colors duration-200 text-sm">
                  Spring North Commercial,
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-[#A68353] transition-colors duration-200 text-sm">
                  Bahria Town Phase 7,
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-[#A68353] transition-colors duration-200 text-sm">
                  +92 (336) 8323237
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-[#A68353] transition-colors duration-200 text-sm">
                  sales@nexavistatech.com{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-gray-400">
              <span>©2024 CRAFT. Privacy</span>
              <span className="hidden md:inline">|</span>
              <Link
                href="/Term"
                className="hover:text-[#A68353] transition-colors duration-200"
              >
                Term
              </Link>
              <span className="hidden md:inline">|</span>
              <Link
                href="/PrivacyPolicy"
                className="hover:text-[#A68353] transition-colors duration-200"
              >
                Privacy & Inclusion
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <Link
                href="https://facebook.com"
                className="text-gray-400 hover:text-[#A68353] transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-gray-400 hover:text-[#A68353] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://youtube.com"
                className="text-gray-400 hover:text-[#A68353] transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-gray-400 hover:text-[#A68353] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-400 hover:text-[#A68353] transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
