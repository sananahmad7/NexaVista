"use client";
import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Edit,
  Image,
  Palette,
  FileText,
  Share2,
} from "lucide-react";

const GraphicDesignServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      icon: Edit,
      title: "Image and Video Editing",
      description:
        "In a world where visuals speak louder than words, high-quality images and videos are essential. We offer professional image and video editing services that enhance your visual content, making it more engaging and impactful. Whether it's for social media, marketing campaigns, or your website, we ensure your visuals are polished and perfectly aligned with your brand.",
    },
    {
      icon: Palette,
      title: "Logo Designing",
      description:
        "Your logo is the face of your brand, and it needs to be memorable. Our logo design services focus on creating unique and versatile logos that capture the essence of your business. We work closely with you to ensure that your logo not only stands out but also embodies your brand's identity.",
    },
    {
      icon: Image,
      title: "Brand Guides",
      description:
        "Consistency is key to building a strong brand. We create comprehensive brand guides that outline your brand's visual identity, including color schemes, typography, and design elements. This ensures that all your marketing materials are consistent and cohesive, reinforcing your brand's message across all platforms.",
    },
    {
      icon: FileText,
      title: "Flyer & Brochure Design",
      description:
        "Print media is still a powerful marketing tool, and our flyer and brochure designs are crafted to capture attention and communicate your message effectively. Whether you need a sleek brochure for a corporate event or an eye-catching flyer for a promotional campaign, we design with your goals in mind.",
    },
    {
      icon: Share2,
      title: "Social Media Post Creation",
      description:
        "Stand out in the crowded world of social media with custom-designed posts that reflect your brand's personality. We create visually engaging social media content that drives engagement and boosts your online presence. From Instagram stories to Facebook posts, our designs are tailored to fit each platform and resonate with your audience.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, services.length - 3));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.max(1, services.length - 3)) %
        Math.max(1, services.length - 3)
    );
  };

  const visibleServices = services.slice(currentSlide, currentSlide + 4);

  return (
    <div
      className="p-8 sm:p-12 lg:p-16 mt-5 font-outfit"
      style={{ backgroundColor: "#1B232E" }} // Main theme color
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <p className="text-[#9DB2BF] text-sm mb-3 tracking-wide font-outfit">
              Our Benefits
            </p>
            <h2 className="text-[#DDE6ED] text-3xl sm:text-4xl font-bold font-outfit max-w-2xl leading-tight">
              Expertise and{" "}
              <span className="text-[#526D82]">Commitment Combined!</span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex space-x-2 ">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-[#526D82] flex items-center justify-center text-[#9DB2BF] hover:text-[#DDE6ED] hover:border-[#9DB2BF] transition-all duration-300 font-outfit"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-[#526D82] flex items-center justify-center text-[#9DB2BF] hover:text-[#DDE6ED] hover:border-[#9DB2BF] transition-all duration-300 font-outfit"
              disabled={currentSlide >= services.length - 4}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 font-outfit">
          {visibleServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={currentSlide + index}
                className="group relative bg-[#27374D]/50 rounded-xl py-4 px-4 h-70 sm:h-100 md:h-85 lg:h-110 2xl:h-90 overflow-hidden cursor-pointer transition-all duration-500 hover:bg-[#526D82]/70 font-outfit"
              >
                {/* Icon */}
                <div className="absolute bottom-6 left-6 right-6 transition-all duration-300 xs:group-hover:-translate-y-33 md:group-hover:-translate-y-37 lg:group-hover:-translate-y-55 font-outfit">
                  <div className="mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "#A68353" }}
                    >
                      <IconComponent className="w-6 h-6 text-[#DDE6ED]" />
                    </div>
                  </div>
                  {/* Title - Always visible */}
                  <h3 className="text-[#DDE6ED] text-xl font-bold font-outfit leading-tight mb-4">
                    {service.title}
                  </h3>
                </div>
                {/* Description - Hidden by default, slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out font-outfit">
                  <p className="text-[#DDE6ED]/90 text-sm leading-relaxed font-outfit">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GraphicDesignServices;
