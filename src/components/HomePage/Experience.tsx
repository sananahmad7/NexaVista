"use client";
import Image from "next/image";
import type React from "react";

const ExperienceSection: React.FC = () => {
  return (
    <section className="py-9 lg:py-13 bg-gray-50 ">
      <div className="container mx-auto  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ">
          {/* Left Column - Stats and Image */}
          <div className="space-y-8 ">
            {/* Years of Experience */}
            <div className="flex items-center gap-6 mb-5">
              <div className="text-4xl lg:text-8xl font-bold text-[#3F3A34] leading-none">
                15
              </div>
              <div className="text-lg lg:text-xl text-gray-800 font-medium">
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

            {/* Progress Circles - Mobile */}
            {/* <div className="flex justify-center gap-8 lg:hidden">
              <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-2">
                  <svg
                    className="w-20 h-20 transform -rotate-90"
                    viewBox="0 0 36 36"
                  >
                    <path
                      className="text-gray-300"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-[#775d3b]"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray="73, 100"
                      strokeLinecap="round"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-semibold text-[#775d3b]">
                      (73%)
                    </span>
                  </div>
                </div>
                <p className="text-sm font-medium text-[#3F3A34]">
                  Business Solution
                </p>
              </div>

              <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-2">
                  <svg
                    className="w-20 h-20 transform -rotate-90"
                    viewBox="0 0 36 36"
                  >
                    <path
                      className="text-gray-300"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-[#775d3b]"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray="65, 100"
                      strokeLinecap="round"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-semibold text-[#775d3b]">
                      (65%)
                    </span>
                  </div>
                </div>
                <p className="text-sm font-medium text-[#3F3A34]">
                  24/7 Support
                </p>
              </div>
            </div> */}
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
                      className="text-gray-300"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-[#a68353]"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray="73, 100"
                      strokeLinecap="round"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-base font-semibold text-[#a68353]">
                      (73%)
                    </span>
                  </div>
                </div>
                <p className="text-base font-medium text-black">
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
                      className="text-gray-300"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-[#a68353]"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray="65, 100"
                      strokeLinecap="round"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-base font-semibold text-[#a68353]">
                      (65%)
                    </span>
                  </div>
                </div>
                <p className="text-base font-medium text-black">24/7 Support</p>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight text-balance">
                We execute our ideas from the start to finish.
              </h2>

              <p className="text-gray-800 text-base lg:text-lg leading-relaxed">
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
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#a68353] flex items-center justify-center flex-shrink-0">
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
                <span className="text-gray-800 font-medium">
                  Custom shortcodes
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#a68353] flex items-center justify-center flex-shrink-0">
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
                <span className="text-gray-800 font-medium">Data security</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#a68353] flex items-center justify-center flex-shrink-0">
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
                <span className="text-gray-800 font-medium">
                  Data Analytics
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#a68353] flex items-center justify-center flex-shrink-0">
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
                <span className="text-gray-800 font-medium">
                  Our Technology Solution
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#a68353] flex items-center justify-center flex-shrink-0">
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
                <span className="text-gray-800 font-medium">
                  IT Consultancy
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#a68353] flex items-center justify-center flex-shrink-0">
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
                <span className="text-gray-800 font-medium">
                  Design and Development
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
