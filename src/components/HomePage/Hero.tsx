import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-[70vh] bg-[#252223]">
      {/* Background Image */}
      <Image
        src="/HERO2.jpg"
        alt="Hero background"
        fill
        priority
        className="object-cover opacity-70" // tweak opacity here if you want
      />

      {/* Content overlaying the image */}
      <div className="relative  flex flex-col justify-center h-full space-y-10 p-9 md:p-10 text-white">
        {/* Main headline */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl 3xl:text-6xl font-outfit max-w-7xl leading-tight">
          We Build Websites, Apps, and Strategies That Boost Your Revenue
        </h1>

        <p className="text-base md:text-lg lg:text-xl max-w-3xl text-gray-200 font-outfit font-normal">
          NexaVista Technologies is your partner in turning complex ideas into
          intuitive digital solutions that truly resonate with your audience.
        </p>

        {/* Call to action button */}
        <button className="px-5 py-2 w-fit bg-white text-black font-outfit rounded-md hover:bg-gray-200 transition-colors duration-300">
          Discover the Possibilites
        </button>

        <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-16 w-full max-w-6xl">
          {/* Frameworks */}
          <div>
            <h3 className="text-gray-400 text-xs md:text-sm uppercase tracking-widest mb-3 font-outfit">
              Core Frameworks
            </h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm md:text-base text-gray-100 font-outfit">
              <span className="font-medium">React</span>
              <span className="font-medium">Next.js</span>
              <span className="font-medium">Node.js</span>
              <span className="font-medium">TailwindCSS</span>
              <span className="font-medium">Express</span>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-gray-400 text-xs md:text-sm uppercase tracking-widest mb-3 font-outfit">
              Key Technologies
            </h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm md:text-base text-gray-100 font-outfit">
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
  );
};

export default Hero;
