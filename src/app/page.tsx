import React from "react";
import Hero from "@/components/HomePage/Hero";
import Services from "@/components/HomePage/Services";
import Stat from "@/components/HomePage/Stat";
const Home = () => {
  return (
    <div className="mt-5">
      <Hero />
      <Services />
      <Stat />
      <div className="h-200"></div>
    </div>
  );
};

export default Home;
