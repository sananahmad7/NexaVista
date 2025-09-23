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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Move every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 2; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], displayIndex: i });
    }
    return visible;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-[#A68353] fill-[#A68353]" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="bg-[#252223] py-20 mt-5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-[#A68353] text-sm font-medium uppercase tracking-wider mb-2 block">
              Testimonial
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Client <span className="text-[#A68353]">Feedback</span>
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
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="w-full md:w-1/2 flex-shrink-0 px-4"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700/50 h-full relative">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-8">
                    <Quote className="w-8 h-8 text-[#A68353] opacity-30" />
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <p className="text-white text-lg leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-full bg-gray-600 overflow-hidden mr-4 ring-2 ring-[#A68353] ring-opacity-30">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-[#A68353] text-sm font-medium">
                        {testimonial.position}
                      </p>
                      <p className="text-gray-300 text-sm">
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
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#A68353] w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
