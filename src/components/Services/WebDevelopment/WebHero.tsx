"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

// Type definition for blog slides
type BlogSlide = {
  category: string;
  title: string;
};

const WebHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const blogSlides: BlogSlide[] = [
    {
      category: "WEB DEV",
      title: "Responsive Front-End Development with React & Next.js",
    },
    {
      category: "WEB DEV",
      title: "Robust & Scalable Back-End APIs with Node.js and Express JS",
    },
    {
      category: "WEB DEV",
      title: "Secure & Scalable Full-Stack Solutions with TypeScript",
    },
  ];

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % blogSlides.length);
  };

  return (
    <div className="bg-gray-50">
      {/* Main Hero Section */}
      <div className="flex items-start gap-2 lg:gap-3">
        {/* Left Section - Main Content */}
        <div className="flex-1 relative overflow-hidden text-white p-8 sm:p-12 lg:p-16 bg-[#031C20]/90 backdrop-blur-md">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#031C20]/90 via-[#031C20]/70 to-[#0A2F35]/60 pointer-events-none"></div>

          {/* Decorative blurred circles */}
          <div className="absolute top-20 right-32 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-40 right-20 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-10 w-24 h-24 bg-emerald-400/20 rounded-full blur-xl"></div>
          {/* Content wrapper */}
          <div className="relative z-10">
            {/* Advisory Badge */}
            <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-sm font-medium mb-8 border border-white/20 shadow-sm">
              ADVISORY
            </div>

            {/* Main Heading */}
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold leading-tight mb-8 max-w-4xl">
              Full Stack Web Development Solutions
            </h1>

            {/* Description */}
            <div className="text-gray-300 leading-relaxed mb-8 max-w-3xl">
              <p className="mb-4 font-bold text-lg sm:text-xl">
                Innovative Web Development Solutions Tailored to Your Business
              </p>
              <p className="text-md">
                In today's digital landscape, your website is often the first
                point of contact with potential customers. At NexaVista
                Technologies, we specialize in building custom web solutions
                that not only look great but also deliver exceptional user
                experiences. Whether you need a simple business website or a
                complex web application, our team is equipped to bring your
                vision to life.
              </p>
            </div>

            {/* CTA Button */}
            <button className="bg-white text-[#031C20] border border-red-800 px-4 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center space-x-2 group">
              <span>Define Your Vision</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Section - Blog Carousel */}
        {/* Right Section - Blog Carousel */}
        <div className="hidden lg:flex w-96 flex-col">
          {/* Top Fixed Carousel Box */}
          <div className="h-[400px] bg-[#031C20]/90 backdrop-blur-md text-white relative border-3 border-red-800 flex flex-col">
            <div className="flex flex-col relative z-10">
              <div className="flex-1 p-8 flex flex-col">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8 w-fit border border-white/20">
                  {blogSlides[currentSlide].category}
                </div>

                <h2 className="text-2xl font-bold leading-tight mb-6">
                  {blogSlides[currentSlide].title}
                </h2>

                {/* Slide Indicators */}
                <div className="flex space-x-2 mb-8">
                  {blogSlides.map((_, index) => (
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

                {/* Navigation Button */}
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 self-end group"
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Text (separate box, outside fixed height) */}
          <div className="bg-white mt-4">
            <div className="border-l-4 border-[#031C20] pl-4">
              <h3 className="text-lg sm:text-xl font-bold text-[#031C20] leading-tight">
                17+ Years of Driving Growth in Digital Acceleration across the
                Globe.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebHero;
