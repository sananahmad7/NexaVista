"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

// Type definition for slides
type GraphicSlide = {
  category: string;
  title: string;
};

const GraphicHero = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const graphicSlides: GraphicSlide[] = [
    {
      category: "DESIGN",
      title: "Creative Branding & Visual Identity Solutions",
    },
    {
      category: "DESIGN",
      title: "UI/UX Designs That Enhance User Experiences",
    },
    {
      category: "DESIGN",
      title: "Marketing Collaterals, Logos & Illustrations",
    },
  ];

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % graphicSlides.length);
  };

  return (
    <div className="bg-gray-50">
      <div className="flex items-start gap-2 lg:gap-3">
        {/* Left Section */}
        <div className="flex-1 relative overflow-hidden text-white p-8 sm:p-12 lg:p-16 bg-[#1B232E]">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B232E]/95 via-[#1B232E]/80 to-[#10151C]/70 pointer-events-none"></div>

          {/* Decorative blurred circles */}
          <div className="absolute bottom-[-80] right-[-80] w-98 h-98 bg-purple-400/20 rounded-full "></div>

          {/* Content */}
          <div className="relative z-0">
            <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-sm font-medium mb-8 border border-white/20 shadow-sm">
              DESIGN
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold leading-tight mb-8 max-w-4xl">
              Creative Design Solutions That Elevate Your Brand
            </h1>

            <div className="text-gray-300 leading-relaxed mb-8 max-w-3xl py-3">
              <p className="mb-4 font-bold text-lg sm:text-xl">
                Where Creativity Meets Strategy
              </p>
              <p className="text-md">
                Visual identity is a powerful tool in today’s market. At
                NexaVista Technologies, we understand that great design is more
                than just aesthetics—it’s about communicating your brand’s
                message in a way that resonates with your audience. Our graphic
                designing services are tailored to bring your vision to life,
                ensuring your brand stands out and leaves a lasting impression.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Carousel */}
        <div className="hidden lg:flex w-96 flex-col">
          {/* Top Fixed Carousel Box */}
          <div className="h-[400px] bg-[#3A3256]/90 backdrop-blur-md text-white relative flex flex-col">
            <div className="flex flex-col relative z-10">
              <div className="flex-1 p-8 flex flex-col">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8 w-fit border border-white/20">
                  {graphicSlides[currentSlide].category}
                </div>

                <h2 className="text-2xl font-bold leading-tight mb-6">
                  {graphicSlides[currentSlide].title}
                </h2>

                {/* Slide Indicators */}
                <div className="flex space-x-2 mb-8">
                  {graphicSlides.map((_, index) => (
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

          {/* Bottom Text */}
          <div className="bg-white mt-4">
            <div className="border-l-4 border-[#1B232E] pl-4">
              <h3 className="text-lg sm:text-xl font-bold text-[#1B232E] leading-tight">
                12+ Years of Designing Memorable Brand Experiences Worldwide.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicHero;
