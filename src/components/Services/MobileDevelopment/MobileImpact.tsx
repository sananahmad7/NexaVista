import { ArrowRight } from "lucide-react";

const MobileDevImpact = () => {
  return (
    <div className="mb-5" style={{ backgroundColor: "#E8ECF3" }}>
      {/* Impact Section */}
      <div
        className="relative overflow-hidden text-gray-800 p-8 sm:p-12 lg:p-16 rounded-2xl px-8 sm:px-12 lg:px-19"
        style={{ backgroundColor: "#E8ECF3" }}
      >
        {/* Decorative solid circles */}
        <div className="absolute top-[-90] right-[-90] w-120 h-120 bg-blue-200 rounded-full opacity-60"></div>

        {/* Content wrapper */}
        <div className="relative z-10">
          {/* Badge */}
          <div className="inline-block px-4 py-2 text-xs font-bold mb-6 text-gray-600 uppercase tracking-wide">
            OUR IMPACT
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-8 max-w-3xl text-gray-900">
            Empowering Your Mobile App Journey to Success
          </h2>

          {/* CTA Button */}
          <button className="bg-[#1F4B5D] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#1F4B5D] transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center space-x-2 group mb-12">
            <span>Build Your App</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-4">
            {/* Years of Experience */}
            <div className="text-left">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-[#1F4B5D]">
                2+
              </div>
              <p className="text-gray-700 text-base font-medium leading-relaxed">
                years of creating world-class mobile apps
              </p>
            </div>

            {/* Projects Delivered */}
            <div className="text-left">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-[#1F4B5D]">
                18+
              </div>
              <p className="text-gray-700 text-base font-medium leading-relaxed">
                mobile apps launched on iOS & Android
              </p>
            </div>

            {/* Client Satisfaction */}
            <div className="text-left">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-[#1F4B5D]">
                98%
              </div>
              <p className="text-gray-700 text-base font-medium leading-relaxed">
                client satisfaction across industries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDevImpact;
