import WebHero from "@/components/Services/WebDevelopment/WebHero";
import WebSteps from "@/components/Services/WebDevelopment/WebSteps";
import WebExpertise from "@/components/Services/WebDevelopment/WebExpertise";
import WebDevImpact from "@/components/Services/WebDevelopment/WebImpact";
const WebDevelopment: React.FC = () => {
  return (
    <div className="space-y-5">
      <WebHero />
      <WebSteps />
      <WebExpertise />
      <WebDevImpact />
    </div>
  );
};

export default WebDevelopment;
