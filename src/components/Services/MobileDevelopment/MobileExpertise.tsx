import { Smartphone, Palette, Link, Gauge, Layers } from "lucide-react";

function MobileExpertise() {
  const expertiseAreas = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Custom iOS Solutions",
      description:
        "Tailored apps that meet your business objectives while delivering a seamless and intuitive user experience across all iOS devices.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "Intuitive and beautiful designs crafted to align with Apple’s sleek aesthetic, ensuring apps feel natural and engaging for users.",
    },
    {
      icon: <Link className="w-8 h-8" />,
      title: "Ecosystem Integration",
      description:
        "Seamlessly integrate with Apple’s ecosystem, including features like Siri, Apple Pay, iCloud, and push notifications to extend functionality.",
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Performance Optimization",
      description:
        "We fine-tune apps to ensure smooth, efficient performance with minimal resource consumption across iPhone, iPad, and other iOS devices.",
    },
    {
      icon: <Layers className="w-8 h-8" />, // new icon for cross-platform
      title: "Cross-Platform Development",
      description:
        "Using React Native and Flutter, we deliver powerful apps that run seamlessly on both iOS and Android. This ensures faster development, reduced costs, and consistent user experiences across platforms.",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black mb-4 text-balance">
          Mobile Development with{" "}
          <span style={{ color: "#082024" }}>Excellence</span> and{" "}
          <span style={{ color: "#A68353" }}>Innovation</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto text-pretty">
          We specialize in building iOS applications that combine elegant
          design, seamless integration, and top-notch performance to elevate
          your mobile presence.
        </p>
      </div>

      {/* Expertise Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertiseAreas.map((area, index) => (
          <div
            key={index}
            className="rounded-lg border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-50"
          >
            <div className="p-8">
              <div
                className="mb-6 p-3 rounded-full bg-white w-fit"
                style={{ color: "#082024" }}
              >
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#204C5E] mb-4 text-balance">
                {area.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-pretty">
                {area.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MobileExpertise;
