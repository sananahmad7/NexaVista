"use client";
import Image from "next/image";
import type React from "react";

const ExperienceSection: React.FC = () => {
  return (
    <section className="py-9 lg:py-13 bg-[#DDE6ED] px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Stats and Image */}
          <div className="space-y-8">
            {/* Years of Experience */}
            <div className="flex items-center gap-6 mb-5">
              <div className="text-4xl lg:text-8xl font-outfit text-[#27374D] leading-none">
                15
              </div>
              <div className="text-lg lg:text-xl text-[#526D82] font-outfit">
                Years of
                <br />
                experience
              </div>
            </div>

            {/* Image with Gradient Overlay */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/experience.jpg"
                  alt="Professional using tablet"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Progress Circles - Desktop */}
            <div className="hidden lg:flex justify-start gap-12 mb-8">
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-3">
                  <svg
                    className="w-24 h-24 transform -rotate-90"
                    viewBox="0 0 36 36"
                  >
                    <path
                      className="text-[#9DB2BF]"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-[#526D82]"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray="73, 100"
                      strokeLinecap="round"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-base font-outfit text-[#27374D]">
                      (73%)
                    </span>
                  </div>
                </div>
                <p className="text-base font-outfit text-[#27374D]">
                  Business Solution
                </p>
              </div>

              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-3">
                  <svg
                    className="w-24 h-24 transform -rotate-90"
                    viewBox="0 0 36 36"
                  >
                    <path
                      className="text-[#9DB2BF]"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-[#526D82]"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray="65, 100"
                      strokeLinecap="round"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-base font-outfit text-[#27374D]">
                      (65%)
                    </span>
                  </div>
                </div>
                <p className="text-base font-outfit text-[#27374D]">
                  24/7 Support
                </p>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-outfit text-[#27374D] leading-tight text-balance">
                We execute our ideas from the start to finish.
              </h2>

              <p className="text-[#526D82] text-base font-outfit lg:text-lg leading-relaxed">
                At our agency, we transform ideas into fully realized digital
                solutions. From initial strategy and design to development and
                launch, our team delivers software that is scalable, reliable,
                and tailored to your business needs. We combine creativity with
                technical expertise to ensure every product we build not only
                meets expectations but drives measurable impact.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Custom shortcodes",
                "Data security",
                "Data Analytics",
                "Our Technology Solution",
                "IT Consultancy",
                "Design and Development",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#526D82] flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-[#27374D] font-outfit">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
