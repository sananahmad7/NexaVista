import React from "react";

const MobileSteps: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Requirement Analysis",
      description:
        "Identify business goals, define mobile app requirements, and align with user expectations and platform standards.",
    },
    {
      number: 2,
      title: "UI/UX Design",
      description:
        "Design sleek, intuitive mobile interfaces and user experiences optimized for small screens and touch interactions.",
    },
    {
      number: 3,
      title: "Cross-Platform Development",
      description:
        "Build performant apps with React Native or Flutter for iOS and Android using a shared codebase.",
    },
    {
      number: 4,
      title: "Native Development",
      description:
        "Develop platform-specific features using Swift, Kotlin, or Java for enhanced performance and device integration.",
    },
    {
      number: 5,
      title: "Testing & Optimization",
      description:
        "Conduct thorough testing across devices, optimize for performance, and ensure compliance with app store guidelines.",
    },
    {
      number: 6,
      title: "Deployment & Support",
      description:
        "Deploy apps to the App Store and Google Play with ongoing monitoring, updates, and support.",
    },
  ];

  return (
    <div
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 mb-20"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="max-w-8xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Section - Title */}
          <div className="lg:sticky lg:top-16">
            <h1
              className="text-xl sm:text-2xl lg:text-5xl font-bold leading-tight mb-8"
              style={{ color: "#1A475A" }}
            >
              The Roadmap to
              <span style={{ color: "#A68353" }}> Mobile App Development</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              From idea to app store, we streamline your mobile development
              journey with cutting-edge tools and best practices.
            </p>
          </div>

          {/* Right Section - Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div
                    className="absolute left-6 top-12 w-0.5 h-16 opacity-30"
                    style={{ backgroundColor: "#A68353" }}
                  />
                )}

                <div className="flex items-start space-x-6">
                  {/* Number */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-lg"
                    style={{ backgroundColor: "#1A475A" }}
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-xl sm:text-2xl font-bold mb-3"
                      style={{ color: "#1A475A" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-base sm:text-lg leading-relaxed"
                      style={{ color: "#252223" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSteps;
