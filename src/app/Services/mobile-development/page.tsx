import MobileExpertise from "@/components/Services/MobileDevelopment/MobileExpertise";
import MobileHero from "@/components/Services/MobileDevelopment/MobileHero";
import MobileDevImpact from "@/components/Services/MobileDevelopment/MobileImpact";
import MobileSteps from "@/components/Services/MobileDevelopment/MobileSteps";
const MobileDevelopment = () => {
  return (
    <div>
      <MobileHero />
      <MobileSteps />
      <MobileExpertise />
      <MobileDevImpact />
      <div className="h-200" />
    </div>
  );
};

export default MobileDevelopment;
