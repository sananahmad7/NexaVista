"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  X,
  Menu,
  FileText,
  Palette,
  Smartphone,
  TrendingUp,
} from "lucide-react";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full mb-4 mt-2 relative">
      {/* Localized Background - only behind navbar */}
      <div className="absolute inset-0 -z-10  overflow-hidden max-w-6xl mx-auto ">
        <div
          className="absolute inset-0 rounded-full hidden lg:block"
          style={{
            background:
              "linear-gradient(135deg, #87CEEB 0%, #B0E0E6 50%, #E0F6FF 100%)",
          }}
        />
        {/* Floating background elements for depth - contained within navbar area */}
        <div className="absolute inset-0 overflow-hidden rounded-full">
          <div
            className="absolute top-1/4 left-1/3 w-32 h-30 bg-white-100/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "4s" }}
          />
          <div
            className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-sky-200/30 rounded-full blur-2xl animate-pulse"
            style={{ animationDuration: "6s", animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/5 w-28 h-28 bg-blue-100/25 rounded-full blur-2xl animate-pulse"
            style={{ animationDuration: "5s", animationDelay: "2s" }}
          />
        </div>
      </div>

      {/* ✅ Glassmorphism effect navbar */}
      <nav className="max-w-6xl mx-auto bg-white/30 backdrop-blur-md shadow-md rounded-full relative z-10">
        <div className="flex items-center justify-between px-8 py-2">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="CRAFT Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>

          {/* Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 font-outfit text-base transition-colors duration-200"
            >
              Home
            </Link>

            {/* Services dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                href="/Services"
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-outfit text-base transition-colors duration-200"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              {isServicesOpen && (
                <div className="absolute top-3 bg-gray-100 left-1/2 transform -translate-x-1/2 mt-2 w-[680px] rounded-2xl shadow-xl border border-white/20 py-4 px-3 z-40">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Web Development */}
                    <Link
                      style={{
                        background:
                          "linear-gradient(135deg, #87CEEB 0%, #B0E0E6 50%, #E0F6FF 100%)",
                      }}
                      href="/Services/web-development"
                      className="group flex items-start space-x-3 p-3 rounded-xl shadow-md hover:bg-white/20 transition-all duration-200"
                    >
                      <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-gray-700" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-outfit text-gray-900 text-md mb-1">
                          Web Development
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed font-outfit">
                          Modern, responsive websites built with cutting-edge
                          technologies
                        </p>
                      </div>
                    </Link>

                    {/* Mobile Development */}
                    <Link
                      style={{
                        background:
                          "linear-gradient(135deg, #87CEEB 0%, #B0E0E6 50%, #E0F6FF 100%)",
                      }}
                      href="/Services/mobile-development"
                      className="group flex items-start space-x-3 p-3 rounded-xl shadow-md hover:bg-white/20 transition-all duration-200"
                    >
                      <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-gray-700" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-outfit text-gray-900 text-md mb-1">
                          Mobile Development
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed font-outfit">
                          Native and cross-platform apps for iOS and Android
                        </p>
                      </div>
                    </Link>

                    {/* Graphic Design */}
                    <Link
                      style={{
                        background:
                          "linear-gradient(135deg, #87CEEB 0%, #B0E0E6 50%, #E0F6FF 100%)",
                      }}
                      href="/Services/graphic-designing"
                      className="group flex items-start space-x-3 p-3 rounded-xl shadow-md hover:bg-white/20 transition-all duration-200"
                    >
                      <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                        <Palette className="w-5 h-5 text-gray-700" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-outfit text-gray-900 text-md mb-1">
                          Graphic Design
                        </h3>
                        <p className="text-gray-600 font-outfit text-sm leading-relaxed">
                          Creative visuals that make your brand stand out
                        </p>
                      </div>
                    </Link>

                    {/* Digital Marketing */}
                    <Link
                      style={{
                        background:
                          "linear-gradient(135deg, #87CEEB 0%, #B0E0E6 50%, #E0F6FF 100%)",
                      }}
                      href="/Services/digital-marketing"
                      className="group flex items-start space-x-3 p-3 rounded-xl shadow-md hover:bg-white/20 transition-all duration-200"
                    >
                      <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-gray-700" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-outfit text-gray-900 text-md mb-1">
                          Digital Marketing
                        </h3>
                        <p className="text-gray-600 font-outfit text-sm leading-relaxed">
                          Strategic campaigns that grow your online presence
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/About"
              className="text-gray-700 hover:text-gray-900 font-outfit text-base transition-colors duration-200"
            >
              About Us
            </Link>

            <Link
              href="/Contact"
              className="text-gray-700 hover:text-gray-900 font-outfit text-base transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/book-appointment"
              className="bg-black hover:bg-gray-800 text-white px-6 py-2.5 rounded-full font-outfit text-sm transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Book an Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2 rounded-full"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/20 bg-white/90 backdrop-blur-lg rounded-b-3xl mt-2">
            <div className="px-5 py-4 space-y-3">
              <Link
                href="/"
                className="block py-2 text-gray-700 hover:text-gray-900 font-outfit text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services */}
              <div className="space-y-2">
                <Link
                  href="/Services"
                  className="block py-2 text-gray-700 hover:text-gray-900 font-outfit text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/Services/web-development"
                  className="block py-2 pl-4 text-gray-600 hover:text-gray-900 text-base font-outfit"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Web Development
                </Link>
                <Link
                  href="/services/mobile-development"
                  className="block py-2 pl-4 text-gray-600 hover:text-gray-900 text-base font-outfit"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Mobile Development
                </Link>
                <Link
                  href="/services/graphic-designing"
                  className="block py-2 pl-4 text-gray-600 hover:text-gray-900 text-base font-outfit"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Graphic Designing
                </Link>
                <Link
                  href="/services/digital-marketing"
                  className="block py-2 pl-4 text-gray-600 hover:text-gray-900 text-base font-outfit"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Digital Marketing
                </Link>
              </div>

              <Link
                href="/About"
                className="block py-2 text-gray-700 hover:text-gray-900 font-outfit text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>

              <Link
                href="/Contact"
                className="block py-2 text-gray-700 hover:text-gray-900 font-outfit text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>

              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="/book-appointment"
                  className="block w-full text-center bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full font-outfit text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book an Appointment
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
