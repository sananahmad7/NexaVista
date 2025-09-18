const Hero = () => {
  return (
    <div className="relative w-full h-[80vh] lg:h-[88vh] bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-full h-full">
          <svg
            className="w-full h-full opacity-[0.08]"
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="lines"
                x="0"
                y="0"
                width="4"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <line
                  x1="2"
                  y1="0"
                  x2="2"
                  y2="40"
                  stroke="#60A5FA"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lines)" />
            <path
              d="M500 0 Q600 150 500 300 Q400 450 500 600"
              stroke="#60A5FA"
              strokeWidth="1"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M550 0 Q650 150 550 300 Q450 450 550 600"
              stroke="#60A5FA"
              strokeWidth="0.8"
              fill="none"
              opacity="0.4"
            />
            <path
              d="M600 0 Q700 150 600 300 Q500 450 600 600"
              stroke="#60A5FA"
              strokeWidth="0.6"
              fill="none"
              opacity="0.3"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col justify-start items-start p-10 md:p-15 text-white z-10">
        {/* Headline */}
        <h1 className="text-2xl md:text-3xl lg:text-5xl 3xl:text-6xl font-bold max-w-7xl leading-tight mt-7">
          We Build Websites, Apps, and Strategies That Boost Your Revenue
        </h1>

        {/* CTA Button */}
        <button className="mt-8 px-5 py-2 bg-white text-black font-medium lg:font-semibold rounded-md hover:bg-gray-200 transition-colors duration-300">
          Start Your Project
        </button>

        {/* Bottom Section */}
        <div className="absolute bottom-10 left-10 right-10 border-t border-gray-700 pt-6">
          <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-16 w-full max-w-6xl mx-auto">
            {/* Frameworks */}
            <div>
              <h3 className="text-gray-400 text-xs md:text-sm uppercase tracking-widest mb-3 font-semibold">
                Core Frameworks
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm md:text-base text-gray-100">
                <span className="font-medium">React</span>
                <span className="font-medium">Next.js</span>
                <span className="font-medium">Node.js</span>
                <span className="font-medium">TailwindCSS</span>
                <span className="font-medium">Express</span>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-gray-400 text-xs md:text-sm uppercase tracking-widest mb-3 font-semibold">
                Key Technologies
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm md:text-base text-gray-100">
                <span className="font-medium">AI Agents</span>
                <span className="font-medium">Full-Stack Apps</span>
                <span className="font-medium">API Development</span>
                <span className="font-medium">Cloud Platforms</span>
                <span className="font-medium">Databases</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
