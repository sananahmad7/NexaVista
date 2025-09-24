"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

// Type definition for slides
type MobileSlide = {
  category: string;
  title: string;
};

const MobileHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const mobileSlides: MobileSlide[] = [
    {
      category: "MOBILE DEV",
      title: "Native iOS & Android Apps with Swift, Kotlin, and Java",
    },
    {
      category: "MOBILE DEV",
      title: "Cross-Platform Solutions with React Native & Flutter",
    },
    {
      category: "MOBILE DEV",
      title: "Secure & Scalable Mobile Backends with Cloud Integration",
    },
  ];

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % mobileSlides.length);
  };

  return (
    <div className="bg-gray-50">
      <div className="flex items-start gap-2 lg:gap-3">
        {/* Left Section */}
        <div className="flex-1 relative overflow-hidden text-white p-8 sm:p-12 lg:p-16 bg-[#1A475A]/90 backdrop-blur-md">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A475A]/90 via-[#1A475A]/70 to-[#12323F]/60 pointer-events-none"></div>

          {/* Decorative blurred circles */}
          <div className="absolute top-20 right-32 w-32 h-32 bg-blue-500/20 rounded-full "></div>
          <div className="absolute bottom-40 right-20 w-48 h-48 bg-cyan-400/20 rounded-full "></div>
          <div className="absolute top-1/2 right-10 w-24 h-24 bg-teal-400/20 rounded-full "></div>

          {/* Content */}
          <div className="relative z-10">
            <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-sm font-medium mb-8 border border-white/20 shadow-sm">
              ADVISORY
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold leading-tight mb-8 max-w-4xl">
              Mobile Application Development Solutions
            </h1>

            <div className="text-gray-300 leading-relaxed mb-8 max-w-3xl">
              <p className="mb-4 font-bold text-lg sm:text-xl">
                Cutting-Edge Mobile Solutions Tailored for Modern Businesses
              </p>
              <p className="text-md">
                In today’s fast-paced world, mobile applications are essential
                for engaging customers and driving growth. At NexaVista
                Technologies, we build custom mobile solutions that combine
                functionality, performance, and sleek design. From native apps
                to cross-platform frameworks, we help you launch mobile
                experiences that stand out.
              </p>
            </div>

            <button className="bg-white text-[#1A475A] border border-red-800 px-4 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center space-x-2 group">
              <span>Start Your Mobile Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Section - Blog Carousel */}
        <div className="hidden lg:flex w-96 flex-col">
          {/* Top Fixed Carousel Box */}
          <div className="h-[400px] bg-[#1A475A]/90 backdrop-blur-md text-white relative border-3 border-red-800 flex flex-col">
            <div className="flex flex-col relative z-10">
              <div className="flex-1 p-8 flex flex-col">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8 w-fit border border-white/20">
                  {mobileSlides[currentSlide].category}
                </div>

                <h2 className="text-2xl font-bold leading-tight mb-6">
                  {mobileSlides[currentSlide].title}
                </h2>

                {/* Slide Indicators */}
                <div className="flex space-x-2 mb-8">
                  {mobileSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-white w-8"
                          : "bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>

                {/* Navigation */}
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 self-end group"
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Text (separate box, won't overlap) */}
          <div className="bg-white mt-4">
            <div className="border-l-4 border-[#1A475A] pl-4">
              <h3 className="text-lg sm:text-xl font-bold text-[#1A475A] leading-tight">
                17+ Years of Building Impactful Mobile Experiences Worldwide.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHero;
