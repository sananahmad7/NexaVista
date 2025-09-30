import React from "react";
import { ArrowRight } from "lucide-react";

const ServicesHero = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden font-outfit">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[#27374D]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#27374D]/95 via-[#1F2A38]/85 to-[#1F2A38]/70"></div>

        {/* Decorative blobs */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#9DB2B9]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#526D84]/20 rounded-full blur-3xl"></div>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, #9DB2B9 1px, transparent 1px), linear-gradient(to bottom, #9DB2B9 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight text-[#DDE6ED]">
          Transforming Ideas Into
          <span className="block text-[#9DB2B9]">Digital Solutions</span>
        </h1>
        <p className="text-xl lg:text-2xl text-[#DDE6ED]/80 mb-12 leading-relaxed max-w-3xl mx-auto">
          We deliver cutting-edge technology solutions that drive growth,
          enhance user experiences, and position your business for success in
          the digital landscape.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="group flex items-center space-x-2 bg-[#9DB2B9] text-[#27374D] px-8 py-4 rounded-md font-medium transition-colors hover:bg-[#DDE6ED]">
            <span>Explore Our Services</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
