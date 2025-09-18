const Hero = () => {
  return (
    <div className="relative w-full h-[80vh] lg:h-[88vh]">
      <img
        src="/black.jpg"
        alt="Hero Background"
        className="w-full h-full object-cover opacity-100"
      />

      {/* Content overlaying the image */}
      <div className="absolute inset-0 flex flex-col justify-start items-start p-10 md:p-15 text-white">
        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-7xl leading-tight mt-10">
          We Build Websites, Apps, and Strategies That Boost Your Revenue
        </h1>

        {/* Call to action button */}
        <button className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition-colors duration-300">
          Start Your Project
        </button>

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
