import React from "react";
import Hero from "@/components/HomePage/Hero";
import Services from "@/components/HomePage/Services";
import Stat from "@/components/HomePage/Stat";
import Clients from "@/components/HomePage/Clients";
import Experience from "@/components/HomePage/Experience";
import TestimonialSection from "@/components/HomePage/Testimonials";
const Home = () => {
  return (
    <div className="">
      <Hero />
      <Services />
      <Stat />
      <Clients />
      <Experience />
      <TestimonialSection />
    </div>
  );
};

export default Home;
