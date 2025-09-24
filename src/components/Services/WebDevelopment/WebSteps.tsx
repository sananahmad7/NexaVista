import React from "react";

const WebSteps: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Discovery & Planning",
      description:
        "Define project requirements, analyze user needs, and create comprehensive technical specifications and project timeline.",
    },
    {
      number: 2,
      title: "UI/UX Design",
      description:
        "Craft intuitive user interfaces and seamless user experiences with wireframes, prototypes, and design systems.",
    },
    {
      number: 3,
      title: "Frontend Development",
      description:
        "Build responsive, interactive user interfaces using modern frameworks like Next.js, React, and TypeScript.",
    },
    {
      number: 4,
      title: "Backend Development",
      description:
        "Develop robust APIs, databases, and server-side logic to power your application's core functionality.",
    },
    {
      number: 5,
      title: "Integration & Testing",
      description:
        "Connect frontend and backend systems, implement comprehensive testing, and ensure optimal performance.",
    },
    {
      number: 6,
      title: "Cloud Deployment",
      description:
        "Deploy your application to production using modern cloud platforms with scalable infrastructure and monitoring.",
    },
  ];

  return (
    <div
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8  mb-20"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="max-w-8xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Section - Title */}
          <div className="lg:sticky lg:top-16">
            <h1
              className="text-xl sm:text-2xl lg:text-5xl font-bold leading-tight mb-8"
              style={{ color: "#0B252A" }}
            >
              The Roadmap to
              <span style={{ color: "#A68353" }}> Full Stack Development</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              From concept to deployment, we guide your project through every
              stage of modern web development with precision and expertise.
            </p>
          </div>

          {/* Right Section - Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div
                    className="absolute left-6 top-12 w-0.5 h-16 opacity-30"
                    style={{ backgroundColor: "#A68353" }}
                  />
                )}

                {/* Step Content */}
                <div className="flex items-start space-x-6">
                  {/* Step Number Circle */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-lg"
                    style={{ backgroundColor: "#0C262A" }}
                  >
                    {step.number}
                  </div>

                  {/* Step Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3
                        className="text-xl sm:text-2xl font-bold"
                        style={{ color: "#0B252A" }}
                      >
                        {step.title}
                      </h3>
                    </div>

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

export default WebSteps;
