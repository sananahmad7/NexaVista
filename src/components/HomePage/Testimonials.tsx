"use client";
import React, { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const TestimonialSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Guy Hawkins",
      position: "CEO",
      company: "Austin Tech",
      content:
        "Agenko transformed our ideas into a stunning reality. Their innovative approach and dedication to our project were exceptional. We couldn't be happier with the results.",
      rating: 5,
      avatar: "/api/placeholder/60/60",
    },
    {
      id: 2,
      name: "Albert Flores",
      position: "CTO",
      company: "Fairfield Solutions",
      content:
        "Agenko transformed our ideas into a stunning reality. Their innovative approach and dedication to our project were exceptional. We couldn't be happier with the results.",
      rating: 5,
      avatar: "/api/placeholder/60/60",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      position: "Product Manager",
      company: "InnovateCorp",
      content:
        "Working with Agenko was a game-changer for our business. Their attention to detail and technical expertise exceeded all our expectations.",
      rating: 5,
      avatar: "/api/placeholder/60/60",
    },
    {
      id: 4,
      name: "Michael Chen",
      position: "Founder",
      company: "StartupHub",
      content:
        "The team at Agenko delivered beyond our wildest dreams. Their professional approach and innovative solutions helped us scale rapidly.",
      rating: 5,
      avatar: "/api/placeholder/60/60",
    },
    {
      id: 5,
      name: "Emily Rodriguez",
      position: "Marketing Director",
      company: "GrowthLab",
      content:
        "Exceptional service and outstanding results. Agenko's expertise in digital transformation helped us achieve remarkable growth.",
      rating: 5,
      avatar: "/api/placeholder/60/60",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [resetTrigger, setResetTrigger] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [resetTrigger]);
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setResetTrigger((prev) => prev + 1); // force reset
  };

  console.log(resetTrigger);
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-[#DDE6ED] fill-[#DDE6ED]" : "text-gray-500"
        }`}
      />
    ));
  };

  return (
    <section className="relative bg-[#27374D] py-20 mt-10 mb-15 overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 pointer-events-none ">
        {/* Subtle gradient circles */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#526D84] opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#9DB2B9] opacity-10 rounded-full blur-3xl"></div>

        {/* Grid lines pattern */}
        <div className="absolute inset-0 opacity-90 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-[#9DB2B9] text-sm font-outfit uppercase tracking-wider mb-2 block">
              Testimonial
            </span>
            <h2 className="text-4xl md:text-5xl font-outfit text-white">
              Client <span className="text-[#DDE6ED]">Feedback</span>
            </h2>
          </div>
        </div>

        {/* Testimonials Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 50}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full md:w-1/2 flex-shrink-0 px-4"
              >
                <div className="bg-[#526D84]/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#9DB2B9]/30 h-full relative">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-8 lg:right-3">
                    <Quote className="w-8 h-8 text-[#DDE6ED] opacity-30" />
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <p className="text-white text-lg leading-relaxed font-outfit">
                      &quot;{testimonial.content}&quot;
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center">
                    <div>
                      <h4 className="font-outfit text-white text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-[#DDE6ED] text-sm font-outfit">
                        {testimonial.position}
                      </p>
                      <p className="text-[#9DB2B9] text-sm font-outfit">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#DDE6ED] w-8"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
