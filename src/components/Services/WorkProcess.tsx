import React from "react";

const WorkProcess = () => {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description:
        "We analyze your business needs and develop a comprehensive strategy tailored to your goals.",
    },
    {
      step: "02",
      title: "Design & Planning",
      description:
        "Our team creates detailed designs and project roadmaps to ensure successful execution.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "We build your solution using best practices and rigorous testing to ensure quality.",
    },
    {
      step: "04",
      title: "Launch & Support",
      description:
        "We deploy your project and provide ongoing support to ensure continued success.",
    },
  ];
  return (
    <section className="py-20 lg:py-32 px-6 bg-gray-50 font-outfit">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#A68353] font-semibold text-lg mb-4 tracking-wide font-outfit">
            OUR PROCESS
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#252223] mb-6 font-outfit">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-outfit">
            Our proven methodology ensures successful project delivery from
            start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative font-outfit">
              <div className="bg-white rounded-xl p-8 shadow-lg h-full font-outfit">
                <div className="text-6xl font-bold text-[#A68353]/20 mb-4 font-outfit">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-[#252223] mb-4 font-outfit">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-outfit">
                  {step.description}
                </p>
              </div>
              {index < processSteps.length - 1 && (
                <div className="hidden xl:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#A68353]/30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
