import React from "react";

interface StatItem {
  value: string;
  description: string;
}

const stats: StatItem[] = [
  {
    value: "5+",
    description: "years of driving growth",
  },
  {
    value: "150+",
    description: "digital projects delivered",
  },
  {
    value: "98%",
    description: "client satisfaction rate",
  },
];

const OurImpact: React.FC = () => {
  return (
    <section className=" mx-4  py-6 lg:py-18 bg-gradient-to-br from-gray-100 via-blue-50 to-gray-200 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        {/* Large circle on the right */}
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-200"></div>
        {/* Small circle bottom right */}
        <div className="absolute bottom-8 right-8 w-16 h-16 rounded-full bg-blue-300"></div>
        {/* Subtle patterns */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg
            className="w-full h-full opacity-20"
            viewBox="0 0 100 100"
            fill="none"
          >
            <defs>
              <pattern
                id="dots"
                x="0"
                y="0"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="5" cy="5" r="1" fill="#3B82F6" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#dots)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-16">
            <p className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-6">
              OUR IMPACT
            </p>
            <h2 className="text-xl lg:text-2xl xl:text-4xl font-bold text-gray-900 leading-tight mb-8">
              We Helped TechCorp to Achieve{" "}
              <span className="text-blue-600">100%</span>
              <br />
              system efficiency boost.
            </h2>
            <button className="bg-gray-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:transform hover:scale-101 shadow-lg hover:shadow-xl">
              Let&apos;s Work Together
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-baseline space-x-2">
                  {/* Blue accent bar */}
                  <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-gray-900">
                    {stat.value}
                  </h3>
                </div>
                <p className="text-gray-700 font-medium text-lg pl-3">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
