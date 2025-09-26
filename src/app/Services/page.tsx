"use client";
import React, { useState } from "react";
import {
  ArrowRight,
  Check,
  Code,
  Smartphone,
  TrendingUp,
  Palette,
  Users,
  Award,
  Clock,
  Target,
} from "lucide-react";
import Image from "next/image";
import Services from "@/components/HomePage/Services";
import ServicesHero from "@/components/Services/ServicesHero";

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: "web-development",
      title: "Web Development",
      icon: Code,
      description:
        "Custom web applications built with modern technologies for optimal performance and user experience.",
      features: [
        "Responsive Design",
        "Performance Optimization",
        "SEO-Ready",
        "Secure Architecture",
      ],
      image: "/api/placeholder/400/300",
    },
    {
      id: "mobile-development",
      title: "Mobile Development",
      icon: Smartphone,
      description:
        "Native and cross-platform mobile applications that deliver seamless experiences across all devices.",
      features: [
        "iOS & Android",
        "Cross-Platform",
        "Cloud Integration",
        "App Store Optimization",
      ],
      image: "/api/placeholder/400/300",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      icon: TrendingUp,
      description:
        "Strategic digital marketing solutions that drive growth, engagement, and measurable results.",
      features: ["SEO & SEM", "Social Media", "Email Campaigns", "Analytics"],
      image: "/api/placeholder/400/300",
    },
    {
      id: "graphic-design",
      title: "Graphic Design",
      icon: Palette,
      description:
        "Creative visual solutions that elevate your brand and communicate your message effectively.",
      features: [
        "Brand Identity",
        "Print Design",
        "Digital Assets",
        "UI/UX Design",
      ],
      image: "/api/placeholder/400/300",
    },
  ];

  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description:
        "We analyze your business needs and develop a comprehensive strategy tailored to your goals.",
    },
    {
      step: "02",
      title: "Design & Planning",
      description:
        "Our team creates detailed designs and project roadmaps to ensure successful execution.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "We build your solution using best practices and rigorous testing to ensure quality.",
    },
    {
      step: "04",
      title: "Launch & Support",
      description:
        "We deploy your project and provide ongoing support to ensure continued success.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-outfit">
      {/* Hero Section */}
      <ServicesHero />

      {/* Services Grid Section */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#A68353] font-semibold text-lg mb-4 tracking-wide font-outfit">
              OUR EXPERTISE
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#252223] mb-6 font-outfit">
              Services That Drive Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-outfit">
              From concept to completion, we provide comprehensive digital
              solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer font-outfit"
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-start gap-6">
                    <div className="bg-[#A68353] p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#252223] mb-4 group-hover:text-[#A68353] transition-colors font-outfit">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed font-outfit">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 font-outfit"
                          >
                            <Check className="w-4 h-4 text-[#A68353]" />
                            <span className="text-sm font-medium text-gray-700 font-outfit">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      <button className="text-[#A68353] font-semibold group-hover:text-[#252223] transition-colors font-outfit">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#252223] font-outfit">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center font-outfit">
                <div className="text-4xl lg:text-6xl font-bold text-[#A68353] mb-2 font-outfit">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium text-lg font-outfit">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32 px-6 bg-gray-50 font-outfit">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#A68353] font-semibold text-lg mb-4 tracking-wide font-outfit">
              OUR PROCESS
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#252223] mb-6 font-outfit">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-outfit">
              Our proven methodology ensures successful project delivery from
              start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative font-outfit">
                <div className="bg-white rounded-xl p-8 shadow-lg h-full font-outfit">
                  <div className="text-6xl font-bold text-[#A68353]/20 mb-4 font-outfit">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#252223] mb-4 font-outfit">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-outfit">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden xl:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#A68353]/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#A68353] font-outfit">
        <div className="max-w-4xl mx-auto text-center px-6 font-outfit">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-outfit">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-white/90 mb-8 font-outfit">
            Ready to take your business to the next level? Contact us today for
            a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center font-outfit">
            <button className="bg-white text-[#A68353] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 font-outfit">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#A68353] transition-all duration-300 font-outfit">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
