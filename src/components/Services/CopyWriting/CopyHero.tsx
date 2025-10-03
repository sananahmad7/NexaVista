"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

// Type definition for slides
type CopyWritingSlide = {
  category: string;
  title: string;
};

const CopyWritingHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const copyWritingSlides: CopyWritingSlide[] = [
    {
      category: "COPYWRITING",
      title: "High-Converting Sales Pages That Drive Action",
    },
    {
      category: "COPYWRITING",
      title: "Email Sequences That Nurture and Convert",
    },
    {
      category: "COPYWRITING",
      title: "Landing Pages Optimized for Maximum Conversions",
    },
  ];

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % copyWritingSlides.length);
  };

  return (
    <div className="bg-gray-50 font-outfit">
      <div className="flex items-start gap-2 lg:gap-3">
        {/* Left Section */}
        <div className="flex-1 relative overflow-hidden text-white p-8 sm:p-12 lg:p-16 bg-[#031C20] backdrop-blur-md font-outfit">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#031C20]/90 via-[#03363d]/80 to-[#012224]/70 pointer-events-none"></div>

          {/* Decorative blurred circles */}
          <div className="absolute bottom-[-80] right-[-80] w-98 h-98 bg-teal-400/20 rounded-full"></div>

          {/* Content */}
          <div className="relative z-10 font-outfit">
            <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-sm font-medium mb-8 border border-white/20 shadow-sm font-outfit">
              COPYWRITING
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold leading-tight mb-8 max-w-4xl font-outfit">
              Sales-Driven Copywriting That Converts Like Crazy
            </h1>
            <div className="text-gray-300 leading-relaxed mb-8 max-w-2xl font-outfit">
              <p className="text-md font-outfit">
                At NexaVista Technologies, we specialize in crafting copy that
                drives action. Whether you need a high-converting sales page, a
                compelling email sequence, or a targeted landing page, our
                copywriting services are designed to turn prospects into
                customers and visitors into loyal followers. Every word we write
                is strategically crafted to resonate with your audience and
                achieve your business goals.
              </p>
            </div>
          </div>
          <div className="h-12" />
        </div>

        {/* Right Section - Blog Carousel */}
        <div className="hidden lg:flex w-96 flex-col font-outfit">
          {/* Top Fixed Carousel Box */}
          <div className="h-[390px] bg-[#031C20]/90 backdrop-blur-md text-white relative flex flex-col font-outfit">
            <div className="flex flex-col relative z-10 font-outfit">
              <div className="flex-1 p-8 flex flex-col font-outfit">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8 w-fit border border-white/20 font-outfit">
                  {copyWritingSlides[currentSlide].category}
                </div>

                <h2 className="text-2xl font-bold leading-tight mb-6 font-outfit">
                  {copyWritingSlides[currentSlide].title}
                </h2>

                {/* Slide Indicators */}
                <div className="flex space-x-2 mb-8 font-outfit">
                  {copyWritingSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 font-outfit ${
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
            <div className="border-l-4 border-[#031C20] pl-4 font-outfit">
              <h3 className="text-lg sm:text-xl font-bold text-[#031C20] leading-tight font-outfit">
                Copy That Sells. Words That Build Loyal Customers.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyWritingHero;
