"use client";
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

const Timeline = () => {
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
      { threshold: 0.1 }
    );

    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-outfit text-[#27374D] mb-4">
            Our <span className="text-[#27374D]">Timeline</span>
          </h2>
          <p className="text-[#526D82] text-lg max-w-2xl mx-auto font-outfit">
            A decade of growth, innovation, and excellence
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#27374D] hidden md:block"></div>

          {/* Timeline Events */}
          <div className="space-y-20 md:space-y-38">
            {timelineEvents.map((event, index) => {
              const isVisible = visibleEvents.includes(index);
              const baseAnimation =
                event.side === "left"
                  ? "translate-x-[-50px]"
                  : "translate-x-[50px]";
              const slideIn = "translate-x-0 opacity-100";

              return (
                <div
                  key={index}
                  data-index={index}
                  className={`timeline-item flex flex-col md:flex-row items-center gap-8 ${
                    event.side === "left" ? "md:flex-row-reverse" : ""
                  } transition-all duration-700 ease-out ${
                    isVisible ? slideIn : `${baseAnimation} opacity-0`
                  }`}
                >
                  {/* Year */}
                  <div className="md:w-1/2 flex justify-center md:justify-end">
                    <div
                      className={`text-6xl md:text-7xl font-outfit text-[#27374D] ${
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
                    <div className="w-4 h-4 bg-[#27374D] rounded-full border-4 border-[#DDE6ED]"></div>
                  </div>

                  {/* Content Card */}
                  <div className="md:w-1/2 flex justify-center md:justify-start">
                    <div
                      className={`bg-white border border-gray-200 text-[#3F3A34] p-8 rounded-lg max-w-md shadow-sm hover:shadow-md transition-shadow duration-300 ${
                        event.side === "left" ? "md:mr-12" : "md:ml-12"
                      }`}
                    >
                      <h3 className="text-2xl font-outfit font-bold mb-4 text-[#27374D]">
                        {event.title}
                      </h3>
                      <p className="text-[#526D82] leading-relaxed font-outfit">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
