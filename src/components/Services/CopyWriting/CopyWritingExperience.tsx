"use client";
import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  ClipboardList,
  Mail,
  Megaphone,
  Globe,
} from "lucide-react";

const CopyWritingExpertise = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      icon: FileText,
      title: "Sales Copy",
      description:
        "When it comes to making a sale, the right words can make all the difference. We write persuasive sales copy that highlights the benefits of your products or services, addresses your audience's pain points, and drives them to take action. Whether you need a full sales page or just a section, we ensure every line is geared towards maximizing conversions.",
    },
    {
      icon: ClipboardList,
      title: "Landing Pages",
      description:
        "A well-designed landing page is crucial for any marketing campaign. We create landing pages that are not only visually appealing but also strategically written to capture leads and drive conversions. From attention-grabbing headlines to persuasive calls to action, we focus on guiding your visitors through a seamless journey that ends with them taking the desired action.",
    },
    {
      icon: Mail,
      title: "Email Copy/Sequence",
      description:
        "Email marketing remains one of the most effective ways to reach your audience. We write engaging email copy and design sequences that nurture leads, build relationships, and drive sales. Whether it’s a one-time campaign or a multi-step sequence, our emails are crafted to get opened, read, and acted upon.",
    },
    {
      icon: Megaphone,
      title: "Ad Copies",
      description:
        "In the fast-paced world of online advertising, every word counts. Our ad copy is designed to grab attention and compel clicks, driving traffic to your site or landing pages. We tailor our ad copies to fit the specific needs and formats of platforms like Google Ads, Facebook Ads, and more, ensuring they perform at their best.",
    },
    {
      icon: Globe,
      title: "Website Content",
      description:
        "Your website is often the first impression potential customers have of your business. We write clear, compelling, and SEO-optimized content that tells your story, showcases your offerings, and guides visitors towards taking action. From homepages to product descriptions, we ensure your website communicates your value effectively.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, services.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.max(1, services.length - 2)) %
        Math.max(1, services.length - 2)
    );
  };

  const visibleServices = services.slice(currentSlide, currentSlide + 3);

  return (
    <div
      className="p-8 sm:p-12 lg:p-16 mt-5 font-outfit"
      style={{ backgroundColor: "#1B232E" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header + Slider Controls */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <p className="text-gray-400 text-sm mb-3 tracking-wide font-outfit">
              Our Copywriting Services
            </p>
            <h2 className="text-white text-3xl sm:text-4xl font-bold max-w-2xl leading-tight font-outfit">
              Words That Inspire, Engage, and Convert
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-400 transition-all duration-300"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-400 transition-all duration-300"
              disabled={currentSlide >= services.length - 3}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 font-outfit">
          {visibleServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={currentSlide + index}
                className="group relative bg-[#032F35] rounded-xl py-4 px-4 h-72 sm:h-80 overflow-hidden cursor-pointer transition-all duration-500 hover:bg-gray-700/70 font-outfit"
              >
                {/* Icon + Title - same behavior as DigitalExpertise */}
                <div className="absolute bottom-6 left-6 right-6 transition-all duration-300 xs:group-hover:-translate-y-37 md:group-hover:-translate-y-43 lg:group-hover:-translate-y-49 font-outfit">
                  <div className="mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "#A68353" }}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-white text-2xl font-bold leading-tight font-outfit">
                    {service.title}
                  </h3>
                </div>

                {/* Description - slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <p className="text-white text-sm leading-relaxed font-outfit">
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

export default CopyWritingExpertise;
