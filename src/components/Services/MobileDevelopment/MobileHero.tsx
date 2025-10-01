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
    <div className="bg-gray-50 font-outfit">
      <div className="flex items-start gap-2 lg:gap-3">
        {/* Left Section */}
        <div className="flex-1 relative overflow-hidden text-white p-8 sm:p-12 lg:p-16 bg-[#1A475A]/90 backdrop-blur-md font-outfit">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A475A]/90 via-[#1A475A]/70 to-[#12323F]/60 pointer-events-none"></div>

          {/* Decorative blurred circles */}
          <div className="absolute bottom-[-80] right-[-80] w-98 h-98 bg-cyan-400/20 rounded-full "></div>

          {/* Content */}
          <div className="relative z-10 font-outfit">
            <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-sm mb-8 border border-white/20 shadow-sm font-outfit">
              ADVISORY
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-4xl leading-tight mb-8 max-w-4xl font-outfit">
              Mobile Application Development Solutions
            </h1>

            <div className="text-gray-300 leading-relaxed mb-8 max-w-3xl font-outfit">
              <p className="mb-4 text-lg sm:text-xl font-outfit">
                Cutting-Edge Mobile Solutions Tailored for Modern Businesses
              </p>
              <p className="text-md font-outfit">
                In today’s fast-paced world, mobile applications are essential
                for engaging customers and driving growth. At NexaVista
                Technologies, we build custom mobile solutions that combine
                functionality, performance, and sleek design. From native apps
                to cross-platform frameworks, we help you launch mobile
                experiences that stand out.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Blog Carousel */}
        <div className="hidden lg:flex w-96 flex-col font-outfit">
          {/* Top Fixed Carousel Box */}
          <div className="h-[388px] bg-[#1A475A]/90 backdrop-blur-md text-white relative flex flex-col font-outfit">
            <div className="flex flex-col relative z-10 font-outfit">
              <div className="flex-1 p-8 flex flex-col font-outfit">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-8 w-fit border border-white/20 font-outfit">
                  {mobileSlides[currentSlide].category}
                </div>

                <h2 className="text-2xl leading-tight mb-6 font-outfit">
                  {mobileSlides[currentSlide].title}
                </h2>

                {/* Slide Indicators */}
                <div className="flex space-x-2 mb-8 font-outfit">
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
                  className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 self-end group font-outfit"
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Text (separate box, won't overlap) */}
          <div className="bg-white mt-4 font-outfit">
            <div className="border-l-4 border-[#1A475A] pl-4 font-outfit">
              <h3 className="text-lg sm:text-xl text-[#1A475A] leading-tight font-outfit">
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
