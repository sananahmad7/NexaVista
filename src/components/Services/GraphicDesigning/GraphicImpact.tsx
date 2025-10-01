import { ArrowRight } from "lucide-react";

const GraphicImpact = () => {
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
          <div className="inline-block px-4 py-2 text-xs font-bold font-outfit mb-6 text-gray-600 uppercase tracking-wide">
            OUR IMPACT
          </div>

          {/* Main Heading */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-outfit leading-tight mb-8 max-w-5xl text-gray-900">
            Visual storytelling is at the heart of our design process. We craft
            visuals that are not just eye-catching but also strategically
            aligned with your brand identity.{" "}
          </h2>

          {/* CTA Button */}
          <button className="bg-[#3B3256] text-white px-6 py-3 rounded-full font-semibold font-outfit text-sm hover:bg-[#1B232E] transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center space-x-2 group mb-12">
            <span className="font-outfit">Start Your Design</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-4">
            {/* Years of Experience */}
            <div className="text-left">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-outfit mb-2 text-[#3B3256]">
                5+
              </div>
              <p className="text-gray-700 text-base font-medium font-outfit leading-relaxed">
                years of crafting impactful visual identities
              </p>
            </div>

            {/* Projects Delivered */}
            <div className="text-left">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-outfit mb-2 text-[#3B3256]">
                80+
              </div>
              <p className="text-gray-700 text-base font-medium font-outfit leading-relaxed">
                branding & design projects delivered successfully
              </p>
            </div>

            {/* Client Satisfaction */}
            <div className="text-left">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-outfit mb-2 text-[#3B3256]">
                96%
              </div>
              <p className="text-gray-700 text-base font-medium font-outfit leading-relaxed">
                client satisfaction with our creative solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicImpact;
