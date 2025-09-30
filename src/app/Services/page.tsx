import React from "react";
import { Code, Smartphone, TrendingUp, Palette } from "lucide-react";
import OfferedServices from "@/components/Services/OfferedServices";
import ServicesHero from "@/components/Services/ServicesHero";
import WorkProcess from "@/components/Services/WorkProcess";
const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white font-outfit">
      {/* Hero Section */}
      <ServicesHero />

      <OfferedServices />

      {/* Process Section */}
      <WorkProcess />
      {/* CTA Section */}
    </div>
  );
};

export default ServicesPage;
