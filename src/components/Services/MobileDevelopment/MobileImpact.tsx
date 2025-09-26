import { ArrowRight } from "lucide-react";

const MobileDevImpact = () => {
  return (
    <div className="mb-5 font-outfit" style={{ backgroundColor: "#E8ECF3" }}>
      {/* Impact Section */}
      <div
        className="relative overflow-hidden text-gray-800 p-8 sm:p-12 lg:p-16 rounded-2xl px-8 sm:px-12 lg:px-19 font-outfit"
        style={{ backgroundColor: "#E8ECF3" }}
      >
        {/* Decorative solid circles */}
        <div className="absolute top-[-90] right-[-90] w-120 h-120 bg-blue-200 rounded-full opacity-60"></div>

        {/* Content wrapper */}
        <div className="relative z-10 font-outfit">
          {/* Badge */}
          <div className="inline-block px-4 py-2 text-xs mb-6 text-gray-600 uppercase tracking-wide font-outfit">
            OUR IMPACT
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight mb-8 max-w-3xl text-gray-900 font-outfit">
            Empowering Your Mobile App Journey to Success
          </h2>

          {/* CTA Button */}
          <button className="bg-[#1F4B5D] text-white px-6 py-3 rounded-full text-sm hover:bg-[#1F4B5D] transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center space-x-2 group mb-12 font-outfit">
            <span className="font-outfit">Build Your App</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-4 font-outfit">
            {/* Years of Experience */}
            <div className="text-left font-outfit">
              <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 text-[#1F4B5D] font-outfit">
                2+
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-outfit">
                years of creating world-class mobile apps
              </p>
            </div>

            {/* Projects Delivered */}
            <div className="text-left font-outfit">
              <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 text-[#1F4B5D] font-outfit">
                18+
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-outfit">
                mobile apps launched on iOS & Android
              </p>
            </div>

            {/* Client Satisfaction */}
            <div className="text-left font-outfit">
              <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 text-[#1F4B5D] font-outfit">
                98%
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-outfit">
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
