import React from "react";
import Hero from "@/components/HomePage/Hero";
import Services from "@/components/HomePage/Services";
const Home = () => {
  return (
    <div className="mt-5">
      <Hero />
      <Services />
      <div className="h-200"></div>
    </div>
  );
};

export default Home;
