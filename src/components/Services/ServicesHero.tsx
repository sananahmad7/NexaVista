import React from "react";
import { ArrowRight } from "lucide-react";

const ServicesHero = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden font-outfit">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[#252223]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#252223]/90 via-[#252223]/70 to-[#1a1819]/80"></div>
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#A68353]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#A68353]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-0 text-center text-white px-6 max-w-4xl mx-auto font-outfit">
        <h1 className="text-5xl lg:text-7xl font-outfit font-bold mb-6 leading-tight">
          Transforming Ideas Into
          <span className="block text-[#A68353] font-outfit">
            Digital Solutions
          </span>
        </h1>
        <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto font-outfit">
          We deliver cutting-edge technology solutions that drive growth,
          enhance user experiences, and position your business for success in
          the digital landscape.
        </p>
      </div>
    </section>
  );
};

export default ServicesHero;
