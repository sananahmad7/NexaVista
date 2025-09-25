import { Lightbulb, Target, Eye, Users } from "lucide-react";
import type { LucideProps } from "lucide-react"; // TS type for props of any icon

interface Feature {
  icon: React.FC<LucideProps>;
  title: string;
  description: string;
}
const WhyChooseNexaVista = () => {
  const features: Feature[] = [
    {
      icon: Lightbulb,
      title: "Creative Expertise",
      description:
        "Our team of designers brings a wealth of creativity and technical skill to every project. We stay on top of design trends while ensuring that your visuals are timeless and aligned with your brand's unique identity.",
    },
    {
      icon: Target,
      title: "Tailored Designs",
      description:
        "We don't believe in one-size-fits-all. Every design we create is customized to meet your specific needs, ensuring that your brand stands out and makes an impact.",
    },
    {
      icon: Eye,
      title: "Attention to Detail",
      description:
        "From concept to final delivery, we pay meticulous attention to every detail, ensuring that your design is flawless and effective in achieving your goals.",
    },
    {
      icon: Users,
      title: "Collaborative Process",
      description:
        "We work closely with you throughout the design process, incorporating your feedback and ideas to ensure that the final product not only meets but exceeds your expectations.",
    },
  ];

  return (
    <div className="bg-[#E8ECF3] py-16 px-6 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-6 leading-tight">
            Why Choose NexaVista Technologies
            <span className="block" style={{ color: "#A68353" }}>
              for Graphic Designing?
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
                    style={{ backgroundColor: "#A68353" }}
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
                  style={{ backgroundColor: "#A68353" }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseNexaVista;
