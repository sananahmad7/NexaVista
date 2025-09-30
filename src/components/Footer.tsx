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
    <footer className="bg-[#27374D] text-white font-outfit">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/Medium.png"
                alt="Agency Logo"
                width={60}
                height={60}
                className="object-contain"
              />
              <div className="text-2xl font-bold font-outfit">
                <span className="text-[#DDE6ED] font-outfit">Nexa Vista</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[#9DB2B9] font-semibold font-outfit text-lg">
                The Right Solution. Right Now.
              </p>

              <p className="text-gray-300 leading-relaxed font-outfit">
                Custom Software Development. Digital Marketing Solutions.
                Creative Design Services.
              </p>

              <p className="text-gray-400 text-sm flex items-center font-outfit">
                Made with{" "}
                <Heart className="w-4 h-4 text-red-500 mx-1 fill-red-500" />{" "}
                from the CRAFT team.
              </p>
            </div>
          </div>

          {/* Get Started Section */}
          <div className="lg:col-span-1">
            <h3 className="text-[#DDE6ED] font-bold font-outfit text-lg mb-6 relative">
              Get Started
              <div className="absolute bottom-0 left-0 w-20 h-0.5 bg-[#9DB2B9]"></div>
            </h3>

            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Web Applications", href: "/services/web-apps" },
                { name: "Mobile Apps", href: "/services/mobile-apps" },
                {
                  name: "Digital Marketing",
                  href: "/services/digital-marketing",
                },
                {
                  name: "Graphic Designing",
                  href: "/services/graphic-designing",
                },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-300 font-outfit hover:text-[#DDE6ED] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className="lg:col-span-1">
            <h3 className="text-[#DDE6ED] font-bold font-outfit text-lg mb-6 relative">
              Our Services
              <div className="absolute bottom-0 left-0 w-28 h-0.5 bg-[#9DB2B9]"></div>
            </h3>

            <ul className="space-y-4">
              {[
                { name: "All Services", href: "/services" },
                { name: "Web Development", href: "/services/web-development" },
                {
                  name: "Mobile Development",
                  href: "/services/mobile-development",
                },
                { name: "IT Consulting", href: "/services/it-consulting" },
                { name: "Contact Us", href: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-300 font-outfit hover:text-[#DDE6ED] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Info Section */}
          <div className="lg:col-span-1">
            <h3 className="text-[#DDE6ED] font-bold font-outfit text-lg mb-6 relative">
              Additional Information
              <div className="absolute bottom-0 left-0 w-40 h-0.5 bg-[#9DB2B9]"></div>
            </h3>

            <ul className="space-y-4 text-sm text-gray-300">
              <li>Office No 1, Floor No 3, Plaza 74</li>
              <li>Spring North Commercial</li>
              <li>Bahria Town Phase 7</li>
              <li>+92 (336) 8323237</li>
              <li>sales@nexavistatech.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#526D84]/40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-gray-400 font-outfit">
              <span>©2024 CRAFT. Privacy</span>
              <span className="hidden md:inline">|</span>
              <Link
                href="/Term"
                className="hover:text-[#DDE6ED] transition-colors duration-200"
              >
                Term
              </Link>
              <span className="hidden md:inline">|</span>
              <Link
                href="/PrivacyPolicy"
                className="hover:text-[#DDE6ED] transition-colors duration-200"
              >
                Privacy & Inclusion
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              {[Facebook, Linkedin, Youtube, Instagram, Twitter].map(
                (Icon, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="text-gray-400 hover:text-[#DDE6ED] transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
