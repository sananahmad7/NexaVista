const Hero = () => {
  return (
    <div className="relative w-full h-[80vh] lg:h-[88vh] bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />

        {/* Subtle noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='17' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='17' cy='37' r='1'/%3E%3Ccircle cx='37' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Main SVG Pattern */}
        <div className="absolute inset-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Sophisticated grid pattern */}
              <pattern
                id="modernGrid"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <rect width="60" height="60" fill="transparent" />
                <line
                  x1="0"
                  y1="60"
                  x2="60"
                  y2="60"
                  stroke="#60A5FA"
                  strokeWidth="0.5"
                  opacity="0.1"
                />
                <line
                  x1="60"
                  y1="0"
                  x2="60"
                  y2="60"
                  stroke="#60A5FA"
                  strokeWidth="0.5"
                  opacity="0.1"
                />
                <circle cx="60" cy="60" r="1" fill="#60A5FA" opacity="0.15" />
              </pattern>

              {/* Neural network connection pattern */}
              <pattern
                id="neuralNet"
                x="0"
                y="0"
                width="120"
                height="120"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="20" cy="20" r="2" fill="#60A5FA" opacity="0.08" />
                <circle
                  cx="100"
                  cy="40"
                  r="1.5"
                  fill="#60A5FA"
                  opacity="0.06"
                />
                <circle cx="60" cy="80" r="1" fill="#60A5FA" opacity="0.1" />
                <line
                  x1="20"
                  y1="20"
                  x2="60"
                  y2="80"
                  stroke="#60A5FA"
                  strokeWidth="0.5"
                  opacity="0.05"
                />
                <line
                  x1="100"
                  y1="40"
                  x2="60"
                  y2="80"
                  stroke="#60A5FA"
                  strokeWidth="0.5"
                  opacity="0.05"
                />
              </pattern>

              {/* Radial gradient for center focus */}
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.08" />
                <stop offset="70%" stopColor="#60A5FA" stopOpacity="0.02" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>

            {/* Base grid */}
            <rect width="100%" height="100%" fill="url(#modernGrid)" />

            {/* Neural network overlay */}
            <rect width="100%" height="100%" fill="url(#neuralNet)" />

            {/* Center glow effect */}
            <rect width="100%" height="100%" fill="url(#centerGlow)" />

            {/* Symmetrical geometric lines */}
            <g opacity="0.15">
              {/* Central diamond structure */}
              <path
                d="M600 100 L800 300 L600 500 L400 300 Z"
                stroke="#60A5FA"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M600 150 L750 300 L600 450 L450 300 Z"
                stroke="#60A5FA"
                strokeWidth="0.8"
                fill="none"
                opacity="0.8"
              />
              <path
                d="M600 200 L700 300 L600 400 L500 300 Z"
                stroke="#60A5FA"
                strokeWidth="0.6"
                fill="none"
                opacity="0.6"
              />
            </g>

            {/* Flowing data streams */}
            <g opacity="0.12">
              <path
                d="M0 200 Q300 180 600 200 Q900 220 1200 200"
                stroke="#60A5FA"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M0 400 Q300 420 600 400 Q900 380 1200 400"
                stroke="#60A5FA"
                strokeWidth="0.8"
                fill="none"
              />
              <path
                d="M0 600 Q300 580 600 600 Q900 620 1200 600"
                stroke="#60A5FA"
                strokeWidth="0.6"
                fill="none"
              />
            </g>

            {/* Strategic code elements - positioned symmetrically */}
            <g className="font-mono" fontSize="18" fill="#60A5FA" opacity="0.2">
              {/* Top row */}
              <text x="200" y="120" textAnchor="middle">
                {"<>"}
              </text>
              <text x="1000" y="120" textAnchor="middle">
                {"</>"}
              </text>

              {/* Middle row */}
              <text x="100" y="300" textAnchor="middle" fontSize="16">
                {"{ }"}
              </text>
              <text x="1100" y="300" textAnchor="middle" fontSize="16">
                {"( )"}
              </text>

              {/* Center elements */}
              <text x="600" y="250" textAnchor="middle" fontSize="14">
                {"=>"}
              </text>
              <text x="600" y="350" textAnchor="middle" fontSize="14">
                {"&&"}
              </text>

              {/* Bottom row */}
              <text x="300" y="680" textAnchor="middle">
                {"[]"}
              </text>
              <text x="900" y="680" textAnchor="middle">
                {"|>"}
              </text>
            </g>

            {/* Subtle corner accents */}
            <g opacity="0.1">
              {/* Top left */}
              <path
                d="M0 0 L100 0 L100 2 L2 2 L2 100 L0 100 Z"
                fill="#60A5FA"
              />
              {/* Top right */}
              <path
                d="M1200 0 L1100 0 L1100 2 L1198 2 L1198 100 L1200 100 Z"
                fill="#60A5FA"
              />
              {/* Bottom left */}
              <path
                d="M0 800 L100 800 L100 798 L2 798 L2 700 L0 700 Z"
                fill="#60A5FA"
              />
              {/* Bottom right */}
              <path
                d="M1200 800 L1100 800 L1100 798 L1198 798 L1198 700 L1200 700 Z"
                fill="#60A5FA"
              />
            </g>

            {/* Central focal points */}
            <g opacity="0.25">
              <circle cx="600" cy="300" r="3" fill="#60A5FA" />
              <circle
                cx="600"
                cy="300"
                r="8"
                fill="none"
                stroke="#60A5FA"
                strokeWidth="0.5"
              />
              <circle
                cx="600"
                cy="300"
                r="16"
                fill="none"
                stroke="#60A5FA"
                strokeWidth="0.3"
              />
            </g>
          </svg>
        </div>

        {/* Floating particles for depth */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20 animate-pulse"
              style={{
                left: `${15 + i * 7}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + (i % 3)}s`,
              }}
            />
          ))}
        </div>

        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-30" />
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
