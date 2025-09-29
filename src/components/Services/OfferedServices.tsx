"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Check,
  Code,
  Smartphone,
  TrendingUp,
  Palette,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

const ServicesOffered = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const services = [
    {
      id: "web-development",
      title: "Web Development",
      icon: Code,
      tagline: "Build powerful web experiences",
      description:
        "Custom web applications built with modern technologies for optimal performance and user experience.",
      features: [
        "Responsive Design",
        "Performance Optimization",
        "SEO-Ready",
        "Secure Architecture",
      ],
      image: "/Web.jpg",
      imagePosition: "right",
      route: "/Services/web-development",
    },
    {
      id: "mobile-development",
      title: "Mobile Development",
      icon: Smartphone,
      tagline: "Native apps that users love",
      description:
        "Native and cross-platform mobile applications that deliver seamless experiences across all devices.",
      features: [
        "iOS & Android",
        "Cross-Platform",
        "Cloud Integration",
        "App Store Optimization",
      ],
      image: "/Mobile.jpg",
      imagePosition: "left",
      route: "/Services/mobile-development",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      icon: TrendingUp,
      tagline: "Grow your digital presence",
      description:
        "Strategic digital marketing solutions that drive growth, engagement, and measurable results.",
      features: ["SEO & SEM", "Social Media", "Email Campaigns", "Analytics"],
      image: "/DM.jpg",
      imagePosition: "right",
      route: "/Services/digital-marketing",
    },
    {
      id: "graphic-design",
      title: "Graphic Design",
      icon: Palette,
      tagline: "Design that tells your story",
      description:
        "Creative visual solutions that elevate your brand and communicate your message effectively.",
      features: [
        "Brand Identity",
        "Print Design",
        "Digital Assets",
        "UI/UX Design",
      ],
      image: "/GD.jpg",
      imagePosition: "left",
      route: "/Services/graphic-design",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".service-section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLearnMoreClick = (route: string) => {
    router.push(route);
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="min-h-[30vh] flex items-center justify-center px-6 py-18 ">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#A68353] font-semibold text-sm mb-4 tracking-widest font-outfit uppercase">
            OUR EXPERTISE
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6 font-outfit leading-tight">
            Services That Drive Success
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-outfit">
            From concept to completion, we provide comprehensive digital
            solutions tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => {
        const IconComponent = service.icon;
        const isImageRight = service.imagePosition === "right";
        const isEven = index % 2 === 0;

        return (
          <section
            key={service.id}
            className={`service-section min-h-screen flex items-center px-6 py-12 lg:py-0 ${
              isEven ? "bg-white" : "bg-[#252223]"
            }`}
          >
            <div className="max-w-7xl mx-auto w-full">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  isImageRight ? "" : "lg:grid-flow-dense"
                }`}
              >
                {/* Content Side */}
                <div
                  className={`space-y-8 ${
                    isImageRight ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="inline-flex items-center gap-3 border-l-4 border-[#A68353] pl-4">
                    <IconComponent
                      className={`w-6 h-6 ${
                        isEven ? "text-[#252223]" : "text-white"
                      }`}
                    />
                    <span
                      className={`font-semibold text-sm uppercase tracking-widest font-outfit ${
                        isEven ? "text-[#252223]" : "text-white"
                      }`}
                    >
                      {service.id.replace("-", " ")}
                    </span>
                  </div>

                  <h2
                    className={`text-4xl lg:text-5xl xl:text-6xl font-bold font-outfit leading-tight ${
                      isEven ? "text-[#252223]" : "text-white"
                    }`}
                  >
                    {service.title}
                  </h2>

                  <p className="text-2xl text-[#A68353] font-medium font-outfit">
                    {service.tagline}
                  </p>

                  <p
                    className={`text-lg lg:text-xl leading-relaxed font-outfit ${
                      isEven ? "text-gray-700" : "text-gray-300"
                    }`}
                  >
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div
                          className={`flex-shrink-0 w-5 h-5 border-2 flex items-center justify-center ${
                            isEven ? "border-[#252223]" : "border-white"
                          }`}
                        >
                          <Check
                            className={`w-3 h-3 ${
                              isEven ? "text-[#252223]" : "text-white"
                            }`}
                          />
                        </div>
                        <span
                          className={`text-base font-medium font-outfit ${
                            isEven ? "text-[#252223]" : "text-white"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleLearnMoreClick(service.route)}
                    className={`group inline-flex items-center gap-3 px-8 py-4 font-semibold text-base font-outfit transition-all duration-300 mt-6 border-2 ${
                      isEven
                        ? "bg-[#252223] text-white border-[#252223] hover:bg-transparent hover:text-[#252223]"
                        : "bg-white text-[#252223] border-white hover:bg-transparent hover:text-white"
                    }`}
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Image Side */}
                <div
                  className={`relative ${
                    isImageRight ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative overflow-hidden">
                    <div
                      className={`aspect-[4/3] ${
                        isEven ? "bg-gray-100" : "bg-[#1a1819]"
                      }`}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={500}
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Minimal accent line */}
                  <div
                    className={`absolute w-20 h-1 bg-[#A68353] ${
                      isImageRight ? "bottom-0 right-0" : "bottom-0 left-0"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ServicesOffered;
