import { ArrowRight } from "lucide-react";

const MobileDevImpact = () => {
  return (
    <div
      className="mb-20 mt-17 font-outfit"
      style={{ backgroundColor: "#DDE6ED" }} // very light gray section bg
    >
      {/* Impact Section */}
      <div
        className="relative overflow-hidden p-8 sm:p-12 lg:p-16 rounded-2xl font-outfit"
        style={{ backgroundColor: "#DDE6ED" }}
      >
        {/* Decorative circle */}
        <div
          className="absolute top-[-90px] right-[-90px] w-64 h-64 rounded-full opacity-40"
          style={{ backgroundColor: "#9DB2BF" }}
        ></div>

        {/* Content wrapper */}
        <div className="relative z-10 font-outfit">
          {/* Badge */}
          <div
            className="inline-block px-4 py-2 text-xs mb-6 uppercase tracking-wide font-outfit rounded-md"
            style={{ backgroundColor: "#27354d", color: "#DDE6ED" }}
          >
            OUR IMPACT
          </div>

          {/* Main Heading */}
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl leading-tight mb-8 max-w-3xl font-outfit"
            style={{ color: "#27354d" }}
          >
            Empowering Your Mobile App Journey to Success
          </h2>

          {/* CTA Button */}
          <button
            className="px-6 py-3 rounded-full text-sm transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center space-x-2 group mb-12 font-outfit"
            style={{ backgroundColor: "#27354d", color: "#ffffff" }}
          >
            <span>Build Your App</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-4 font-outfit">
            {/* Years of Experience */}
            <div className="text-left">
              <div
                className="text-2xl sm:text-3xl lg:text-4xl mb-2 font-bold"
                style={{ color: "#27374D" }}
              >
                2+
              </div>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#526D82" }}
              >
                years of creating world-class mobile apps
              </p>
            </div>

            {/* Projects Delivered */}
            <div className="text-left">
              <div
                className="text-2xl sm:text-3xl lg:text-4xl mb-2 font-bold"
                style={{ color: "#27374D" }}
              >
                18+
              </div>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#526D82" }}
              >
                mobile apps launched on iOS & Android
              </p>
            </div>

            {/* Client Satisfaction */}
            <div className="text-left">
              <div
                className="text-2xl sm:text-3xl lg:text-4xl mb-2 font-bold"
                style={{ color: "#27374D" }}
              >
                98%
              </div>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#526D82" }}
              >
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
