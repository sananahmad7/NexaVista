import GraphicExpertise from "@/components/Services/GraphicDesigning/GraphicExpertise";
import GraphicDevImpact from "@/components/Services/GraphicDesigning/GraphicImpact";
// import GraphicSteps from "@/components/Services/GraphicDesigning/GraphicSteps";
import GraphicHero from "@/components/Services/GraphicDesigning/GraphicHero";
import WhyChooseNexaVista from "@/components/Services/GraphicDesigning/WhyChooseNexaVista";
const GraphicDesigning = () => {
  return (
    <div className="space-y-9 mb-5">
      <GraphicHero />
      <GraphicDevImpact />
      <GraphicExpertise />
      <WhyChooseNexaVista />
      {/* <GraphicSteps />
      
       */}
    </div>
  );
};

export default GraphicDesigning;
