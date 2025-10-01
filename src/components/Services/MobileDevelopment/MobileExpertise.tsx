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
      icon: <Layers className="w-8 h-8" />,
      title: "Cross-Platform Development",
      description:
        "Using React Native and Flutter, we deliver powerful apps that run seamlessly on both iOS and Android. This ensures faster development, reduced costs, and consistent user experiences across platforms.",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto font-outfit">
      <div className="text-center mb-12">
        <h2
          className="text-4xl font-bold mb-4 text-balance font-outfit"
          style={{ color: "#214D5F" }}
        >
          Mobile Development with{" "}
          <span style={{ color: "#27374D" }}>Excellence</span> and{" "}
          <span style={{ color: "#9DB2BF" }}>Innovation</span>
        </h2>
        <p
          className="text-lg max-w-3xl mx-auto text-pretty font-outfit"
          style={{ color: "#526D82" }}
        >
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
            className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-[#9DB2BF] duration-300 font-outfit"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <div className="p-8">
              {/* Icon Wrapper */}
              <div
                className="mb-6 p-3 rounded-full w-fit"
                style={{ backgroundColor: "#DDE6ED", color: "#186377" }}
              >
                {area.icon}
              </div>

              {/* Card Title */}
              <h3
                className="text-xl font-semibold mb-4 text-balance font-outfit"
                style={{ color: "#27374D" }}
              >
                {area.title}
              </h3>

              {/* Card Description */}
              <p
                className="leading-relaxed text-pretty font-outfit"
                style={{ color: "#526D82" }}
              >
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
