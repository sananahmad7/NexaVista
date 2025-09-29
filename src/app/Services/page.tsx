import React from "react";
import { Code, Smartphone, TrendingUp, Palette } from "lucide-react";
import OfferedServices from "@/components/Services/OfferedServices";
import ServicesHero from "@/components/Services/ServicesHero";
import WorkProcess from "@/components/Services/WorkProcess";
const ServicesPage = () => {
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

  return (
    <div className="min-h-screen bg-white font-outfit">
      {/* Hero Section */}
      <ServicesHero />

      <OfferedServices />

      {/* Process Section */}
      <WorkProcess />
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
