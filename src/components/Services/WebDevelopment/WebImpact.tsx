import React from "react";
import { ArrowRight } from "lucide-react";

const WebDevImpact = () => {
  return (
    <div className="mb-15 font-outfit" style={{ backgroundColor: "#DDE6ED" }}>
      {/* Impact Section */}
      <div
        className="relative overflow-hidden text-gray-800 p-8 sm:p-12 lg:p-16 rounded-2xl font-outfit"
        style={{ backgroundColor: "#DDE6ED" }}
      >
        {/* Decorative solid circles */}
        <div className="absolute top-[-90px] right-[-90px] w-60 h-60 bg-[#9DB2BF] rounded-full opacity-60"></div>

        {/* Content wrapper */}
        <div className="relative z-10 font-outfit">
          {/* Badge */}
          <div
            className="inline-block px-4 py-2 text-xs font-bold mb-6 text-[#DDE6ED] uppercase tracking-wide rounded-full"
            style={{ backgroundColor: "#27374D" }}
          >
            OUR IMPACT
          </div>

          {/* Main Heading */}
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-8 max-w-3xl"
            style={{ color: "#1B3236" }}
          >
            Leading your Web Development Journey to Success
          </h2>

          {/* CTA Button */}
          <button
            className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center space-x-2 group mb-12"
            style={{ backgroundColor: "#27374D", color: "#DDE6ED" }}
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-4">
            {/* Years of Experience */}
            <div className="text-left">
              <div
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2"
                style={{ color: "#1B3236" }}
              >
                17+
              </div>
              <p
                className="text-base font-medium leading-relaxed"
                style={{ color: "#526D82" }}
              >
                years of driving growth in web development
              </p>
            </div>

            {/* Projects Delivered */}
            <div className="text-left">
              <div
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2"
                style={{ color: "#1B3236" }}
              >
                250+
              </div>
              <p
                className="text-base font-medium leading-relaxed"
                style={{ color: "#526D82" }}
              >
                web projects delivered successfully
              </p>
            </div>

            {/* Client Satisfaction */}
            <div className="text-left">
              <div
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2"
                style={{ color: "#1B3236" }}
              >
                98%
              </div>
              <p
                className="text-base font-medium leading-relaxed"
                style={{ color: "#526D82" }}
              >
                client satisfaction rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevImpact;
