import { BarChart3, Sliders, Globe, RefreshCcw } from "lucide-react";
import type { LucideProps } from "lucide-react"; // TS type for props of any icon

interface Feature {
  icon: React.FC<LucideProps>;
  title: string;
  description: string;
}

const DigitalWhyChooseUs = () => {
  const features: Feature[] = [
    {
      icon: BarChart3,
      title: "Data-Driven Strategy",
      description:
        "We believe in the power of data. Our digital marketing strategies are grounded in analytics, ensuring that every decision we make is backed by real insights and aimed at achieving measurable results.",
    },
    {
      icon: Sliders,
      title: "Customized Campaigns",
      description:
        "No two businesses are the same, and neither are our strategies. We tailor our digital marketing efforts to meet the specific goals and challenges of your business, ensuring that every campaign is aligned with your objectives.",
    },
    {
      icon: Globe,
      title: "Comprehensive Approach",
      description:
        "From SEO to social media, we take a holistic approach to digital marketing, ensuring that all channels work together to amplify your message and drive success.",
    },
    {
      icon: RefreshCcw,
      title: "Continuous Optimization",
      description:
        "Digital marketing is not a set-it-and-forget-it process. We continuously monitor, test, and optimize our campaigns to ensure they are performing at their best, adapting to changes in the digital landscape as needed.",
    },
  ];

  return (
    <div className="bg-[#E8ECF3] py-16 px-6 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-6 leading-tight">
            Why Choose NexaVista Technologies
            <span className="block" style={{ color: "#2C3E50" }}>
              for Digital Marketing?
            </span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-50 rounded-2xl p-8 hover:bg-white transition-all duration-500 hover:shadow-xl border border-gray-100 hover:border-gray-200"
              >
                {/* Icon */}
                <div className="flex items-center mb-6">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: "#2C3E50" }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-black group-hover:text-gray-800 transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div
                  className="absolute bottom-0 left-8 w-12 h-1 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0"
                  style={{ backgroundColor: "#2C3E50" }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DigitalWhyChooseUs;
