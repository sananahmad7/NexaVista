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
      { threshold: 0.9 }
    );

    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);
  return (
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
          <div className="space-y-19 md:space-y-28">
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
  );
};

export default Timeline;
