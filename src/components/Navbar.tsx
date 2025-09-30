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
      {/* ✅ Navbar with dark text */}
      <nav className="max-w-6xl mx-auto bg-[#DDE6ED] shadow-md rounded-full relative z-10">
        <div className="flex items-center justify-between px-8 py-2">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/Main.png"
              alt="CRAFT Logo"
              width={69}
              height={52}
              className="object-contain"
            />
          </div>

          {/* Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-[#27374D] hover:text-black font-outfit text-base transition-colors duration-200"
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
                className="flex items-center space-x-1 text-[#27374D] hover:text-black font-outfit text-base transition-colors duration-200"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              {isServicesOpen && (
                <div className="absolute top-3 bg-gray-100 left-1/2 transform -translate-x-1/2 mt-2 w-[680px] rounded-2xl shadow-xl border border-gray-200 py-4 px-3 z-40">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Web Development */}
                    <Link
                      href="/Services/web-development"
                      className="group flex items-start space-x-3 p-3 rounded-xl shadow-md bg-[#DDE6ED] hover:bg-gray-300 transition-all duration-200"
                    >
                      <FileText className="w-5 h-5 text-[#27374D]" />
                      <div>
                        <h3 className="font-outfit text-[#27374D] text-md mb-1">
                          Web Development
                        </h3>
                        <p className="text-[#27374D] text-sm leading-relaxed font-outfit">
                          Modern, responsive websites built with cutting-edge
                          technologies
                        </p>
                      </div>
                    </Link>

                    {/* Mobile Development */}
                    <Link
                      href="/Services/mobile-development"
                      className="group flex items-start space-x-3 p-3 rounded-xl bg-[#DDE6ED] shadow-md hover:bg-gray-300 transition-all duration-200"
                    >
                      <Smartphone className="w-5 h-5 text-[#27374D]" />
                      <div>
                        <h3 className="font-outfit text-[#27374D] text-md mb-1">
                          Mobile Development
                        </h3>
                        <p className="text-[#27374D] text-sm leading-relaxed font-outfit">
                          Native and cross-platform apps for iOS and Android
                        </p>
                      </div>
                    </Link>

                    {/* Graphic Design */}
                    <Link
                      href="/Services/graphic-designing"
                      className="group flex items-start space-x-3 p-3 rounded-xl bg-[#DDE6ED] shadow-md hover:bg-gray-300 transition-all duration-200"
                    >
                      <Palette className="w-5 h-5 text-[#27374D]" />
                      <div>
                        <h3 className="font-outfit text-[#27374D] text-md mb-1">
                          Graphic Design
                        </h3>
                        <p className="text-[#27374D] text-sm leading-relaxed font-outfit">
                          Creative visuals that make your brand stand out
                        </p>
                      </div>
                    </Link>

                    {/* Digital Marketing */}
                    <Link
                      href="/Services/digital-marketing"
                      className="group flex items-start space-x-3 p-3 bg-[#DDE6ED] rounded-xl shadow-md hover:bg-gray-300 transition-all duration-200"
                    >
                      <TrendingUp className="w-5 h-5 text-[#27374D]" />
                      <div>
                        <h3 className="font-outfit text-[#27374D] text-md mb-1">
                          Digital Marketing
                        </h3>
                        <p className="text-[#27374D] text-sm leading-relaxed font-outfit">
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
              className="text-[#27374D] hover:text-black font-outfit text-base transition-colors duration-200"
            >
              About Us
            </Link>

            <Link
              href="/Contact"
              className="text-[#27374D] hover:text-black font-outfit text-base transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/book-appointment"
              className="bg-[#27374D] hover:bg-black text-white px-6 py-2.5 rounded-full font-outfit text-sm transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Book an Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#27374D] hover:text-black p-2 rounded-full"
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
          <div className="lg:hidden border-t border-gray-200 bg-[#DDE6ED] rounded-b-3xl mt-2">
            <div className="px-5 py-4 space-y-3">
              <Link
                href="/"
                className="block py-2 text-[#27374D] hover:text-black font-outfit text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services */}
              <div className="space-y-2">
                <Link
                  href="/Services"
                  className="block py-2 text-[#27374D] hover:text-black font-outfit text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/Services/web-development"
                  className="block py-2 pl-4 text-[#27374D] hover:text-black text-base font-outfit"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Web Development
                </Link>
                <Link
                  href="/Services/mobile-development"
                  className="block py-2 pl-4 text-[#27374D] hover:text-black text-base font-outfit"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Mobile Development
                </Link>
                <Link
                  href="/Services/graphic-designing"
                  className="block py-2 pl-4 text-[#27374D] hover:text-black text-base font-outfit"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Graphic Designing
                </Link>
                <Link
                  href="/Services/digital-marketing"
                  className="block py-2 pl-4 text-[#27374D] hover:text-black text-base font-outfit"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Digital Marketing
                </Link>
              </div>

              <Link
                href="/About"
                className="block py-2 text-[#27374D] hover:text-black font-outfit text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>

              <Link
                href="/Contact"
                className="block py-2 text-[#27374D] hover:text-black font-outfit text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>

              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="/book-appointment"
                  className="block w-full text-center bg-[#27374D] hover:bg-black text-[#DDE6ED] px-6 py-3 rounded-full font-outfit text-base"
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
