import Image from "next/image";

const Stat = () => {
  return (
    <section className="bg-[#252223] text-white py-16 px-9 lg:px-12 ">
      <div className="max-w-8xl mx-auto">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Header Section */}
          <div className="space-y-8 mb-12">
            {/* Main Heading with team photos integrated */}
            <div className="space-y-4">
              {/* First line */}
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-4xl font-outfit">Creative</h1>
                <h1 className="text-4xl font-outfit">
                  <span className="text-[#a68353] relative">
                    Solutions
                    <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[#a68353]"></div>
                  </span>
                </h1>
                <h1 className="text-4xl font-outfit">For The</h1>
              </div>

              {/* Second line with team photos */}
              <div className="flex items-center gap-4">
                {/* Team Photos */}
                <div className="flex -space-x-3">
                  <div className="w-14 h-14 rounded-full border-3 border-[#252223] overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
                      alt="Team member"
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-14 h-14 rounded-full border-3 border-[#252223] overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
                      alt="Team member"
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-14 h-14 rounded-full border-3 border-[#252223] overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face"
                      alt="Team member"
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h1 className="text-4xl font-outfit">Modern World</h1>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-base font-outfit leading-relaxed">
              We specialize in delivering cutting-edge solutions tailored to
              your needs. Whether you&apos;re looking you succeed.
            </p>
          </div>

          {/* Office Image */}
          <div className="mb-0">
            <div className="rounded-t-2xl overflow-hidden">
              <Image
                src="/office.png"
                alt="Modern office meeting"
                width={800}
                height={300}
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>

          {/* Stats Section - Full width green */}
          <div className="bg-[#a68353] text-black p-8 rounded-b-2xl">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-outfit">12+</div>
                <div className="text-xs font-outfit uppercase tracking-wider mt-2">
                  YEAR EXPERIENCE
                </div>
              </div>
              <div>
                <div className="text-3xl font-outfit">25k</div>
                <div className="text-xs font-outfit uppercase tracking-wider mt-2">
                  HAPPY CUSTOMER
                </div>
              </div>
              <div>
                <div className="text-3xl font-outfit">8k</div>
                <div className="text-xs font-outfit uppercase tracking-wider mt-2">
                  PROJECTS COMPLETED
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Main Heading with team photos integrated */}
              <div className="space-y-4">
                {/* First line */}
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-5xl xl:text-6xl font-outfit">Creative</h1>
                  <h1 className="text-5xl xl:text-6xl font-outfit">
                    <span className="text-[#a68353] relative">
                      Solutions
                      <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[#a68353]"></div>
                    </span>
                  </h1>
                  <h1 className="text-5xl xl:text-6xl font-outfit">For The</h1>
                </div>

                {/* Second line with team photos */}
                <div className="flex items-center gap-4">
                  {/* Team Photos */}
                  <div className="flex -space-x-3">
                    <div className="w-16 h-16 rounded-full border-3 border-[#252223] overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
                        alt="Team member"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-16 h-16 rounded-full border-3 border-[#252223] overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
                        alt="Team member"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-16 h-16 rounded-full border-3 border-[#252223] overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face"
                        alt="Team member"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <h1 className="text-5xl xl:text-6xl font-outfit">
                    Modern World
                  </h1>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-lg max-w-xl leading-relaxed font-outfit">
                We specialize in delivering cutting-edge solutions tailored to
                your needs. Whether you&apos;re looking you succeed.
              </p>

              {/* Circular Explore Badge */}
              <div className="pt-8">
                <div className="relative w-32 h-32">
                  {/* Outer rotating dashed circle */}
                  <svg
                    className="absolute inset-0 w-full h-full animate-spin"
                    style={{ animationDuration: "20s" }}
                    viewBox="0 0 128 128"
                  >
                    <circle
                      cx="64"
                      cy="64"
                      r="62"
                      fill="none"
                      stroke="#6C6259"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                  </svg>

                  {/* Text around circle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 128 128" className="w-full h-full">
                      <path
                        id="circle-text"
                        d="M 64,64 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                        fill="none"
                      />
                      <text className="fill-gray-500 text-[10px] uppercase tracking-[0.3em] font-outfit">
                        <textPath href="#circle-text" startOffset="0%">
                          EXPLORE MORE • EXPLORE MORE •
                        </textPath>
                      </text>
                    </svg>
                  </div>

                  {/* Inner circle with arrow */}
                  <div className="absolute inset-[30%] rounded-full bg-[#a68353] flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#252223]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17l9.2-9.2M17 17V7H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Office Image with Stats Panel */}
            <div className="flex gap-0">
              {/* Office Image */}
              <div className="flex-1">
                <div className="rounded-l-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/office.png"
                    alt="Modern office meeting"
                    width={800}
                    height={500}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              </div>

              {/* Stats Panel */}
              <div className="bg-[#a68353] text-black p-8 rounded-r-2xl shadow-2xl w-[280px] flex flex-col justify-center">
                <div className="space-y-8">
                  <div>
                    <div className="text-4xl font-outfit">12+</div>
                    <div className="text-xs font-outfit uppercase tracking-wider mt-2">
                      YEAR EXPERIENCE
                    </div>
                    <div className="h-px bg-black/20 mt-4"></div>
                  </div>
                  <div>
                    <div className="text-4xl font-outfit">25k</div>
                    <div className="text-xs font-outfit uppercase tracking-wider mt-2">
                      HAPPY CUSTOMER
                    </div>
                    <div className="h-px bg-black/20 mt-4"></div>
                  </div>
                  <div>
                    <div className="text-4xl font-outfit">8k</div>
                    <div className="text-xs font-outfit uppercase tracking-wider mt-2">
                      PROJECTS COMPLETED
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stat;
