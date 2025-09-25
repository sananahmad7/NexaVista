import GraphicExpertise from "@/components/Services/GraphicDesigning/GraphicExpertise";
import GraphicDevImpact from "@/components/Services/GraphicDesigning/GraphicImpact";
// import GraphicSteps from "@/components/Services/GraphicDesigning/GraphicSteps";
import GraphicHero from "@/components/Services/GraphicDesigning/GraphicHero";
const GraphicDesigning = () => {
  return (
    <div className="space-y-9">
      <GraphicHero />
      <GraphicDevImpact />
      <GraphicExpertise />
      {/* <GraphicSteps />
      
       */}
      <div className="h-200" />
    </div>
  );
};

export default GraphicDesigning;
