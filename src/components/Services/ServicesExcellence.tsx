import { Users, Award, Clock, Target } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Work with seasoned professionals who bring years of industry experience to your project.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "Every solution undergoes rigorous testing to ensure it meets the highest standards.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "We respect deadlines and deliver projects on time without compromising quality.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Our focus is on delivering measurable results that drive your business forward.",
  },
];

const ServicesExcellence = () => {
  return (
    <section className="py-20 lg:py-32 px-6 font-outfit">
      <div className="max-w-7xl mx-auto font-outfit">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center font-outfit">
          <div className="font-outfit">
            <p className="text-[#A68353] font-outfit font-semibold text-lg mb-4 tracking-wide">
              WHY CHOOSE US
            </p>
            <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-[#252223] mb-6">
              Excellence in Every Project
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-outfit">
              We combine technical expertise with creative innovation to deliver
              solutions that exceed expectations and drive meaningful business
              results.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-outfit">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 font-outfit"
                  >
                    <div className="bg-[#A68353]/10 p-3 rounded-lg">
                      <IconComponent className="w-6 h-6 text-[#A68353]" />
                    </div>
                    <div className="font-outfit">
                      <h4 className="font-outfit font-bold text-[#252223] mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed font-outfit">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative font-outfit">
            <div className="bg-[#252223] rounded-2xl p-8 text-white font-outfit">
              <h3 className="text-2xl font-outfit font-bold mb-6">
                Ready to Get Started?
              </h3>
              <p className="text-gray-300 mb-8 font-outfit">
                Let's discuss your project and how we can help transform your
                ideas into reality.
              </p>
              <button className="bg-[#A68353] hover:bg-[#8f6d42] text-white px-8 py-4 rounded-lg font-outfit font-semibold transition-all duration-300 w-full">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesExcellence;
