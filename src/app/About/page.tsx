"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const timelineEvents = [
  {
    year: "2015",
    title: "Company Founded",
    description:
      "Started as a small software development team with a vision to revolutionize digital solutions for businesses.",
    side: "right",
  },
  {
    year: "2017",
    title: "First Major Client",
    description:
      "Secured our first enterprise client and expanded our team to 15 developers across multiple technologies.",
    side: "left",
  },
  {
    year: "2019",
    title: "International Expansion",
    description:
      "Opened offices in three countries and established partnerships with global technology leaders.",
    side: "right",
  },
  {
    year: "2021",
    title: "AI Integration",
    description:
      "Launched our AI-powered development tools and became early adopters of machine learning in software development.",
    side: "left",
  },
  {
    year: "2023",
    title: "Industry Recognition",
    description:
      "Received multiple awards for innovation and was recognized as one of the fastest-growing software agencies.",
    side: "right",
  },
];

export default function AboutPage() {
  const [visibleEvents, setVisibleEvents] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleEvents((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-white">
      {/* Full Screen Hero Section */}
      <section className="relative w-full h-[80vh] lg:h-[88vh] xl:h-[80vh] 2xl:h-[75vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/office.jpg"
            alt="Software development team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#3F3A34]/60"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About <span className="text-[#6C6259]">Our Journey</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              A decade of innovation, growth, and excellence in software
              development
            </p>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3F3A34] mb-4">
              Our <span className="text-[#6C6259]">Timeline</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A decade of growth, innovation, and excellence
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#6C6259] hidden md:block"></div>

            {/* Timeline Events */}
            <div className="space-y-12 md:space-y-20">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  data-index={index}
                  className={`timeline-item flex flex-col md:flex-row items-center gap-8 ${
                    event.side === "left" ? "md:flex-row-reverse" : ""
                  } ${
                    visibleEvents.includes(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  } transition-all duration-700 ease-out`}
                >
                  {/* Year */}
                  <div className="md:w-1/2 flex justify-center md:justify-end">
                    <div
                      className={`text-6xl md:text-7xl font-bold text-[#6C6259] ${
                        event.side === "left"
                          ? "md:text-left md:pl-12"
                          : "md:text-right md:pr-12"
                      }`}
                    >
                      {event.year}
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative z-10 hidden md:block">
                    <div className="w-4 h-4 bg-[#6C6259] rounded-full border-4 border-white"></div>
                  </div>

                  {/* Content Card */}
                  <div className="md:w-1/2 flex justify-center md:justify-start">
                    <div
                      className={`bg-white border-2 border-gray-100 text-[#3F3A34] p-8 rounded-lg max-w-md shadow-sm hover:shadow-md transition-shadow duration-300 ${
                        event.side === "left" ? "md:mr-12" : "md:ml-12"
                      }`}
                    >
                      <h3 className="text-2xl font-bold mb-4 text-[#3F3A34]">
                        {event.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-6 lg:px-12 bg-gradient-to-br from-[#3F3A34] to-[#4A453E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-32 left-32 w-64 h-64 bg-[#6C6259] rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-32 w-80 h-80 bg-[#6C6259] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
              Our{" "}
              <span className="text-transparent bg-gradient-to-r from-[#6C6259] to-[#a68353] bg-clip-text">
                Values
              </span>
            </h2>
            <div className="h-0.5 w-16 bg-gradient-to-r from-[#6C6259] to-[#a68353] mx-auto"></div>
            <p className="text-gray-400 text-base mt-4 max-w-xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Innovation */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6C6259] to-[#a68353] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-2xl hover:bg-white/8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#6C6259] to-[#a68353] rounded-2xl flex items-center justify-center shadow-lg">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#6C6259] transition-colors duration-300">
                      Innovation
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Innovation is at the heart of everything we do. We are
                      constantly exploring new technologies and methodologies to
                      provide our clients with cutting-edge solutions that give
                      them a competitive edge. Whether it&apos;s developing a
                      custom website, creating a mobile app, or crafting a
                      digital marketing strategy, we approach each project with
                      fresh ideas and a forward-thinking mindset.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Client-Centricity */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#a68353] to-[#6C6259] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-2xl hover:bg-white/8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#a68353] to-[#6C6259] rounded-2xl flex items-center justify-center shadow-lg">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#6C6259] transition-colors duration-300">
                      Client-Centricity
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Our clients are the cornerstone of our success. We believe
                      in building long-term relationships based on trust,
                      transparency, and mutual respect. We listen to our
                      clients, understand their goals, and work collaboratively
                      to deliver solutions that truly make a difference. Our
                      client-centric approach ensures that every project is a
                      partnership, with your success as our ultimate goal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Excellence */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6C6259] to-[#a68353] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-2xl hover:bg-white/8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#6C6259] to-[#a68353] rounded-2xl flex items-center justify-center shadow-lg">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#6C6259] transition-colors duration-300">
                      Excellence
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      We strive for excellence in every aspect of our work. From
                      the initial consultation to the final delivery, we
                      maintain the highest standards of quality. Our commitment
                      to excellence drives us to go the extra mile, ensuring
                      that every project is completed to the best of our ability
                      and that our clients are satisfied with the results.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Integrity */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#a68353] to-[#6C6259] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-2xl hover:bg-white/8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#a68353] to-[#6C6259] rounded-2xl flex items-center justify-center shadow-lg">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#6C6259] transition-colors duration-300">
                      Integrity
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Integrity is a core value that guides all our
                      interactions. We believe in doing business the right way,
                      with honesty, transparency, and a strong ethical
                      foundation. Our clients trust us to deliver on our
                      promises, and we take that responsibility seriously. We
                      are committed to being a company that our clients,
                      partners, and employees can rely on.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Story Section */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3F3A34] mb-4">
              Our <span className="text-[#6C6259]">Story</span>
            </h2>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed">
              NexaVista Technologies began with a simple idea: to create a
              digital agency that combines technical expertise with a genuine
              passion for helping businesses succeed. From our humble
              beginnings, we have grown into a full-service digital agency,
              serving clients across various industries. Our journey has been
              one of continuous learning, growth, and adaptation. We are proud
              of the work we have done and excited for the future as we continue
              to expand our services and reach.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 px-6 lg:px-12 bg-[#3F3A34]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-[#6C6259]">Mission</span>
              </h2>
              <p className="text-gray-200 text-lg leading-relaxed">
                At NexaVista Technologies, our mission is simple: to help our
                clients succeed in the digital world. We aim to deliver tailored
                solutions that not only meet but exceed our clients&apos;
                expectations. By combining our technical expertise with a deep
                understanding of our clients&apos; needs, we create digital
                experiences that are not only functional but also impactful.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/mission.jpg"
                alt="Business partnership and digital innovation"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-10 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-[#3F3A34] mb-6">
                Our <span className="text-[#6C6259]">Vision</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                In today&apos;s mobile-first world, having an app that connects
                with your audience is crucial. We specialize in developing
                mobile applications that are intuitive, responsive, and
                engaging, ensuring that your brand is always within reach.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/vision.jpg"
                alt="Digital targeting and strategy"
                width={800}
                height={600}
                className="w-full h-150 rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 lg:px-12 bg-[#3F3A34]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s build something amazing together. Our experienced team is
            ready to bring your vision to life.
          </p>
          <button className="bg-[#a68353] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#6C6259] transition-colors duration-300">
            Get Started Today
          </button>
        </div>
      </section>
    </main>
  );
}
