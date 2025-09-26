import React from "react";
import { ArrowRight } from "lucide-react";
const ServicesHero = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[#252223]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#252223]/90 via-[#252223]/70 to-[#1a1819]/80"></div>
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#A68353]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#A68353]/10 rounded-full blur-3xl"></div>
      </div>
      {/* <div className="absolute inset-0">
          <Image
            src="/Services.jpg"
            width={1500}
            height={300}
            alt="Hi"
            className="mx-auto"
          />
        </div> */}

      {/* Hero Content */}
      <div className="relative z-0 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          Transforming Ideas Into
          <span className="block text-[#A68353]">Digital Solutions</span>
        </h1>
        <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          We deliver cutting-edge technology solutions that drive growth,
          enhance user experiences, and position your business for success in
          the digital landscape.
        </p>
        <button className="bg-[#A68353] hover:bg-[#8f6d42] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 group">
          Explore Our Services
          <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default ServicesHero;
