import { Target, Users, TrendingUp, Search } from "lucide-react";
import type { LucideProps } from "lucide-react"; // TS type for props of any icon

interface Feature {
  icon: React.FC<LucideProps>;
  title: string;
  description: string;
}

const CopywritingWhyChooseUs = () => {
  const features: Feature[] = [
    {
      icon: Target,
      title: "Conversion-Focused",
      description:
        "Our primary goal is to drive conversions. We understand the psychology behind purchasing decisions and use this knowledge to craft copy that persuades and convinces.",
    },
    {
      icon: Users,
      title: "Tailored to Your Audience",
      description:
        "We take the time to understand your audience, ensuring that every piece of copy we write speaks directly to their needs, desires, and pain points.",
    },
    {
      icon: TrendingUp,
      title: "Strategic and Results-Driven",
      description:
        "We don’t just write words; we create strategies. Our copy is designed to work as part of your overall marketing efforts, driving measurable results and helping you achieve your business objectives.",
    },
    {
      icon: Search,
      title: "SEO Expertise",
      description:
        "In addition to crafting compelling copy, we ensure that your content is optimized for search engines, helping you attract more organic traffic and increase visibility.",
    },
  ];

  return (
    <div className="bg-[#E8ECF3] py-16 px-6 sm:px-8 lg:px-16 font-outfit">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-outfit text-black mb-6 leading-tight">
            Why Choose NexaVista Technologies
            <span className="block font-outfit" style={{ color: "#032D33" }}>
              for Copywriting?
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
                className="group relative bg-gray-50 rounded-2xl p-8 hover:bg-white transition-all duration-500 hover:shadow-xl border border-gray-100 hover:border-gray-200 font-outfit"
              >
                {/* Icon + Title */}
                <div className="flex items-center mb-6">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: "#032D33" }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-outfit text-black group-hover:text-gray-800 transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-base font-outfit group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div
                  className="absolute bottom-0 left-8 w-12 h-1 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0"
                  style={{ backgroundColor: "#032D33" }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CopywritingWhyChooseUs;
