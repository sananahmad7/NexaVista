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
    <div className="">
      {/* Header Section */}
      <section className="min-h-[40vh] flex items-center justify-center px-6 py-18 bg-[#DDE6ED] ">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#27374D] font-semibold text-sm mb-4 tracking-widest font-outfit uppercase">
            OUR EXPERTISE
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-outfit leading-tight text-[#27374D]">
            Services That Drive <span className="text-[#9DB2B9]">Success</span>
          </h1>
          <p className="text-xl text-[#27374D]/80 max-w-3xl mx-auto font-outfit">
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

        // Define colors per section type
        const bgColor = isEven
          ? "bg-[#27374D]" // dark
          : "bg-[#DDE6ED]"; // light

        const headingColor = isEven ? "text-[#DDE6ED]" : "text-[#27374D]";
        const taglineColor = isEven ? "text-[#9DB2B9]" : "text-[#1F2A38]";
        const descColor = isEven ? "text-[#DDE6ED]/80" : "text-[#27374D]/80";
        const featureTextColor = isEven ? "text-[#DDE6ED]" : "text-[#27374D]";
        const iconColor = isEven ? "text-[#9DB2B9]" : "text-[#27374D]";
        const borderColor = isEven ? "border-[#9DB2B9]" : "border-[#27374D]";
        const checkColor = isEven ? "text-[#9DB2B9]" : "text-[#27374D]";
        const ctaBg = isEven ? "bg-[#9DB2B9]" : "bg-[#27374D]";
        const ctaText = isEven ? "text-[#27374D]" : "text-[#DDE6ED]";
        const ctaBorder = isEven ? "border-[#9DB2B9]" : "border-[#27374D]";
        const ctaHover = isEven
          ? "hover:bg-[#DDE6ED] hover:border-[#DDE6ED]"
          : "hover:bg-[#9DB2B9] hover:border-[#9DB2B9] hover:text-[#27374D]";

        return (
          <section
            key={service.id}
            className={`service-section min-h-screen flex items-center px-6 py-12 lg:py-0 ${bgColor}`}
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
                  <div
                    className={`inline-flex items-center gap-3 border-l-4 ${borderColor} pl-4`}
                  >
                    <IconComponent className={`w-6 h-6 ${iconColor}`} />
                    <span
                      className={`font-semibold text-sm uppercase tracking-widest font-outfit ${headingColor}`}
                    >
                      {service.id.replace("-", " ")}
                    </span>
                  </div>

                  <h2
                    className={`text-4xl lg:text-5xl xl:text-6xl font-bold font-outfit leading-tight ${headingColor}`}
                  >
                    {service.title}
                  </h2>

                  <p
                    className={`text-2xl font-medium font-outfit ${taglineColor}`}
                  >
                    {service.tagline}
                  </p>

                  <p
                    className={`text-lg lg:text-xl leading-relaxed font-outfit ${descColor}`}
                  >
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div
                          className={`flex-shrink-0 w-5 h-5 border-2 flex items-center justify-center ${borderColor}`}
                        >
                          <Check className={`w-3 h-3 ${checkColor}`} />
                        </div>
                        <span
                          className={`text-base font-medium font-outfit ${featureTextColor}`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleLearnMoreClick(service.route)}
                    className={`group inline-flex items-center gap-3 px-8 py-4 font-semibold text-base font-outfit transition-all duration-300 mt-6 border-2 rounded-2xl ${ctaBg} ${ctaText} ${ctaBorder} ${ctaHover}`}
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
                    <div className={`aspect-[4/3]`}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={500}
                        className="object-cover rounded-2xl"
                      />
                    </div>
                  </div>
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
