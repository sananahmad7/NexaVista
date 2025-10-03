import { ArrowRight } from "lucide-react";

const CopyWritingImpact = () => {
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
          <div className="inline-block px-4 py-2 text-xs font-bold font-outfit mb-6 text-gray-600 uppercase tracking-wide">
            COPY WRITING SERVICE
          </div>

          {/* Main Heading */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-outfit leading-tight mb-8 max-w-5xl text-[#2C3E50]">
            From engaging blogs to persuasive ad copies, our words are crafted
            to capture attention and convert readers into loyal customers.
          </h2>

          {/* CTA Button */}
          <button className="bg-[#2C3E50] text-white px-6 py-3 rounded-full font-semibold font-outfit text-sm hover:bg-[#1B232E] transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center space-x-2 group mb-12">
            <span className="font-outfit">Elevate Your Brand Voice</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-4 font-outfit">
            {/* Years of Experience */}
            <div className="text-left font-outfit">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-outfit mb-2 text-[#2C3E50]">
                5+
              </div>
              <p className="text-gray-700 text-base font-medium font-outfit leading-relaxed">
                years of delivering impactful copy across industries
              </p>
            </div>

            {/* Projects Completed */}
            <div className="text-left font-outfit">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-outfit mb-2 text-[#2C3E50]">
                120+
              </div>
              <p className="text-gray-700 text-base font-medium font-outfit leading-relaxed">
                copywriting projects completed successfully
              </p>
            </div>

            {/* Engagement Growth */}
            <div className="text-left font-outfit">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-outfit mb-2 text-[#2C3E50]">
                200%
              </div>
              <p className="text-gray-700 text-base font-medium font-outfit leading-relaxed">
                boost in audience engagement and conversions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyWritingImpact;
