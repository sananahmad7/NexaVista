"use client";
import React from "react";
import { Mail, Share2, Search } from "lucide-react";

const DigitalExpertise = () => {
  const services = [
    {
      icon: Mail,
      title: "Email Marketing",
      description:
        "Email remains one of the most powerful tools in your marketing arsenal. We create targeted email campaigns that resonate with your audience, whether you're nurturing leads, promoting a new product, or driving repeat business. From compelling subject lines to persuasive copy, we ensure your emails get opened, read, and acted upon.",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description:
        "Social media is where your audience spends their time, and we help you meet them there. Our social media marketing services are designed to build your brand, foster engagement, and drive traffic. We create and manage content that aligns with your brand voice, from daily posts to full-fledged campaigns across platforms like Facebook, Instagram, LinkedIn, and more.",
    },
    {
      icon: Search,
      title: "SEO",
      description:
        "Visibility in search engines can make or break your online presence. Our SEO services are focused on getting your website to the top of search results, driving organic traffic and increasing conversions. We conduct thorough keyword research, optimize on-page content, and build high-quality backlinks to ensure your site ranks for the terms your audience is searching for.",
    },
  ];

  return (
    <div
      className="p-8 sm:p-12 lg:p-16 mt-5 font-outfit"
      style={{ backgroundColor: "#1B232E" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <p className="text-gray-400 text-sm mb-3 tracking-wide font-outfit">
              Our Benefits
            </p>
            <h2 className="text-white text-3xl sm:text-4xl font-bold max-w-2xl leading-tight font-outfit">
              Expertise and Commitment Combined!
            </h2>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-outfit">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#3A3256]/50 rounded-xl py-4 px-4 h-70 sm:h-100 md:h-85 lg:h-110 2xl:h-90 overflow-hidden cursor-pointer transition-all duration-500 hover:bg-gray-700/70 font-outfit"
              >
                {/* Icon and Title - Positioned at bottom, moves up on hover */}
                <div className="absolute bottom-6 left-6 right-6 transition-all duration-300 xs:group-hover:-translate-y-37 md:group-hover:-translate-y-43 lg:group-hover:-translate-y-49 font-outfit border border-red-900">
                  {/* Icon */}
                  <div className="mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "#A68353" }}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-3xl font-bold leading-tight font-outfit">
                    {service.title}
                  </h3>
                </div>

                {/* Description - Hidden by default, slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out font-outfit">
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

export default DigitalExpertise;
