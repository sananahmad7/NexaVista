import DigitalExpertise from "@/components/Services/DigitalMarketing/DigitalExpertise";
import DigitalImpact from "@/components/Services/DigitalMarketing/DigitalImpact";
// import GraphicSteps from "@/components/Services/GraphicDesigning/GraphicSteps";
import DigitalHero from "@/components/Services/DigitalMarketing/DigitalHero";
import DigitalWhyChooseUs from "@/components/Services/DigitalMarketing/DigitalWhyChooseUs";
const DigitalMarketing = () => {
  return (
    <div className="space-y-9 mb-5">
      <DigitalHero />
      <DigitalImpact />
      <DigitalExpertise />
      <DigitalWhyChooseUs />
      {/* 
     
   */}
      {/* <GraphicSteps />
      
       */}
    </div>
  );
};

export default DigitalMarketing;
