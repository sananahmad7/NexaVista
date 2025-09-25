"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

// Type definition for slides
type DigitalMarketingSlide = {
  category: string;
  title: string;
};

const DigitalMarketingHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const digitalMarketingSlides: DigitalMarketingSlide[] = [
    {
      category: "DIGITAL MARKETING",
      title: "SEO & Content Marketing Strategies That Convert",
    },
    {
      category: "DIGITAL MARKETING",
      title: "Social Media Management & Paid Advertising Campaigns",
    },
    {
      category: "DIGITAL MARKETING",
      title: "Analytics-Driven Marketing with Real-Time Performance Tracking",
    },
  ];

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % digitalMarketingSlides.length);
  };

  return (
    <div className="bg-gray-50">
      <div className="flex items-start gap-2 lg:gap-3">
        {/* Left Section */}
        <div className="flex-1 relative overflow-hidden text-white p-8 sm:p-12 lg:p-16 bg-[#030027]/90 backdrop-blur-md">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#030027]/90 via-[#030027]/70 to-[#020020]/60 pointer-events-none"></div>

          {/* Decorative blurred circles */}
          <div className="absolute bottom-[-80] right-[-80] w-98 h-98 bg-purple-400/20 rounded-full "></div>

          {/* Content */}
          <div className="relative z-10">
            <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-sm font-medium mb-8 border border-white/20 shadow-sm">
              ADVISORY
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold leading-tight mb-8 max-w-4xl">
              Strategic Digital Marketing That Drives Results
            </h1>
            <div className="text-gray-300 leading-relaxed mb-8 max-w-2xl">
              <p className="text-md">
                In today's digital world, visibility is everything. At NexaVista
                Technologies, we understand that reaching your target audience
                requires more than just a presence—it requires strategy,
                creativity, and a deep understanding of digital landscapes. Our
                digital marketing services are designed to help your business
                stand out, engage, and convert in a crowded online space.
              </p>
            </div>
          </div>
          <div className="h-12" />
        </div>

        {/* Right Section - Blog Carousel */}
        <div className="hidden lg:flex w-96 flex-col">
          {/* Top Fixed Carousel Box */}
          <div className="h-[390px] bg-[#030027]/90 backdrop-blur-md text-white relative border-3 border-red-800 flex flex-col">
            <div className="flex flex-col relative z-10">
              <div className="flex-1 p-8 flex flex-col">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8 w-fit border border-white/20">
                  {digitalMarketingSlides[currentSlide].category}
                </div>

                <h2 className="text-2xl font-bold leading-tight mb-6">
                  {digitalMarketingSlides[currentSlide].title}
                </h2>

                {/* Slide Indicators */}
                <div className="flex space-x-2 mb-8">
                  {digitalMarketingSlides.map((_, index) => (
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
            <div className="border-l-4 border-[#030027] pl-4">
              <h3 className="text-lg sm:text-xl font-bold text-[#030027] leading-tight">
                17+ Years of Driving Digital Growth and Brand Success Worldwide.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingHero;
