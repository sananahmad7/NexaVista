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
    id: "webapp",
    title: "Web Development",
    description:
      "Modern, scalable web applications built for performance and growth",
    features: [
      "Custom Web Development",
      "API & Backend Integration",
      "Responsive UI/UX",
      "E-Commerce Solutions",
      "Cloud Deployment",
    ],
    bgColor: "bg-[#27374D]",
    textColor: "text-white",
    icon: <Image src="/Web.png" alt="web app" height={600} width={600} />,
  },
  {
    id: "mobile",
    title: "Mobile Applications",
    description: "Seamless mobile experiences across iOS and Android",
    features: [
      "Cross-Platform Apps",
      "Native App Development",
      "App Store Deployment",
      "Mobile UI/UX Design",
      "Maintenance & Support",
    ],
    bgColor: "bg-[#27374D]",
    textColor: "text-white",
    icon: <Image src="/MAD.png" alt="mobile app" height={600} width={600} />,
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description: "Data-driven strategies to boost your brand visibility",
    features: [
      "SEO & SEM Campaigns",
      "Social Media Marketing",
      "Content Strategy",
      "Email Marketing",
      "Analytics & Reporting",
    ],
    bgColor: "bg-[#27374D]",
    textColor: "text-white",
    icon: (
      <Image src="/DMB.png" alt="digital marketing" height={600} width={600} />
    ),
  },
  {
    id: "design",
    title: "Graphic Design",
    description: "Creative visuals that connect with your audience",
    features: [
      "Brand Identity & Logos",
      "Marketing Collateral",
      "UI/UX Mockups",
      "Illustrations & Icons",
      "Print & Digital Assets",
    ],
    bgColor: "bg-[#27374D]",
    textColor: "text-white",
    icon: <Image src="/GD.png" alt="graphic design" height={400} width={400} />,
  },
];

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section className=" py-16 lg:py-22 bg-white ">
      <div className="container  mx-auto  px-2 ">
        {/* Section Header */}
        <div className="text-center mb-16 ">
          <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-[#27374D]    mb-4">
            Our Services
          </h2>
          <p className="text-xl text-[#526D82] max-w-3xl mx-auto font-outfit">
            Comprehensive digital solutions to transform your business and drive
            growth
          </p>
        </div>

        {/* Services Grid */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  mb-4">
          {services.map((service) => (
            <div
              key={service.id}
              className=" relative max-w-3xl  mx-1 h-[55vh] md:h-[59vh] lg:h-[60vh] xl:h-[62vh] 2xl:h-[62vh] 3xl:h-[63vh]  cursor-pointer  mb-15 transition-all duration-300 ease-in-out "
            >
              {/* Main Service Card */}
              <div
                className={`
                relative h-full  ${service.bgColor} ${service.textColor} p-8 
                flex flex-col justify-between overflow-hidden
                transition-transform duration-300 ease-in-out  rounded-3xl shadow shadow-gray-400
                  ${
                    hoveredService === service.id
                      ? "transform -translate-y-[-20]"
                      : ""
                  }
                `}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Icon */}
                <div className="flex-1 flex items-center justify-center">
                  <div className={service.textColor}>{service.icon}</div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl lg:text-2xl font-outfit">
                    {service.title}
                  </h3>
                  <p className="text-sm lg:text-base font-outfit opacity-90">
                    {service.description}
                  </p>
                </div>
                {/* Features Panel - Slides up from bottom */}
                <div
                  className={`
                    absolute  bottom-0 left-0 right-0 shadow-2xl shadow-gray-200  rounded-3xl 
                     ${service.textColor} ${service.bgColor}
                    transition-all duration-300 ease-in-out
                    ${
                      hoveredService === service.id
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0"
                    }
                  `}
                >
                  <div className="p-6">
                    <h4 className="text-lg font-semibold mb-4 opacity-90">
                      Services Include:
                    </h4>

                    {/* Flex row with wrapping */}
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, index) => (
                        <span
                          key={feature}
                          className="inline-block px-2 py-1 rounded-full border border-current text-xs opacity-80 hover:opacity-100 transition-opacity duration-200"
                          style={{
                            transitionDelay:
                              hoveredService === service.id
                                ? `${index * 70}ms`
                                : "0ms",
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
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
