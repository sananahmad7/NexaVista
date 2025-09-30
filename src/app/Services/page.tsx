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
      <section className="py-20 bg-[#A68353] font-outfit">
        <div className="max-w-4xl mx-auto text-center px-6 font-outfit">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-outfit">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-white/90 mb-8 font-outfit">
            Ready to take your business to the next level? Contact us today for
            a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center font-outfit">
            <button className="bg-white text-[#A68353] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 font-outfit">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#A68353] transition-all duration-300 font-outfit">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
