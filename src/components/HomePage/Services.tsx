"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  bgColor: string;
  textColor: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: "advisory",
    title: "Advisory",
    description: "Expert guidance to drive digital growth",
    features: [
      "Discovery Workshop",
      "Market Research",
      "Technical Feasibility Study",
      "UX Design",
      "Digital Transformation",
    ],
    bgColor: "bg-[#1b232e]",
    textColor: "text-white",
    icon: <Image src="/img.png" alt="advisory" height={400} width={400} />,
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    description: "AI solutions that automate and innovate",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "AI Integration",
    ],
    bgColor: "bg-gray-200",
    textColor: "text-gray-800",
    icon: <Image src="/ai.png" alt="advisory" height={400} width={400} />,
  },
  {
    id: "engineering",
    title: "Engineering",
    description: "Building robust, future-ready digital solutions",
    features: [
      "Application Modernization",
      "Application Development",
      "PoC Development",
      "Cloud Engineering",
      "Product Development",
    ],
    bgColor: "bg-blue-600",
    textColor: "text-white",
    icon: <Image src="/eng.png" alt="advisory" height={400} width={400} />,
  },
  {
    id: "business",
    title: "Business Enablement",
    description: "Tools to boost operational efficiency",
    features: [
      "Process Automation",
      "Business Intelligence",
      "Workflow Optimization",
      "Performance Analytics",
      "Integration Solutions",
    ],
    bgColor: "bg-[#04338c]",
    textColor: "text-white",
    icon: <Image src="/business.png" alt="advisory" height={400} width={400} />,
  },
];

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section className=" py-16 lg:py-24 bg-white">
      <div className="container  mx-auto  px-2">
        {/* Section Header */}
        <div className="text-center mb-16 ">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions to transform your business and drive
            growth
          </p>
        </div>

        {/* Services Grid */}
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <div
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              key={service.id}
              className="relative max-w-sm mx-auto h-[60vh] lg:h-[70vh] cursor-pointer  mb-15 transition-all duration-300 ease-in-out"
            >
              {/* Main Service Card */}
              <div
                className={`
                relative h-full ${service.bgColor} ${service.textColor} p-8 
                flex flex-col justify-between overflow-hidden
                transition-transform duration-300 ease-in-out
                  ${
                    hoveredService === service.id
                      ? "transform -translate-y-[-20]"
                      : ""
                  }
                `}
              >
                {/* Icon */}
                <div className="flex-1 flex items-center justify-center">
                  <div className={service.textColor}>{service.icon}</div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl lg:text-3xl font-bold">
                    {service.title}
                  </h3>
                  <p className="text-sm lg:text-base opacity-90">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Features Panel - Slides up from bottom */}
              <div
                className={`
                absolute bottom-0 left-0 right-0 ${service.bgColor} ${
                  service.textColor
                }
                transition-all duration-300 ease-in-out
                ${
                  hoveredService === service.id
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0"
                }
              `}
              >
                <div className="p-6 space-y-3">
                  <h4 className="text-lg font-semibold mb-4 opacity-90">
                    Services Include:
                  </h4>
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div
                        key={feature}
                        className="transform transition-all duration-300 ease-in-out"
                        style={{
                          transitionDelay:
                            hoveredService === service.id
                              ? `${index * 70}ms`
                              : "0ms",
                        }}
                      >
                        <span
                          className="
                          inline-block px-4 py-2 rounded-full border border-current 
                          text-sm opacity-80 hover:opacity-100 transition-opacity duration-200
                        "
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
