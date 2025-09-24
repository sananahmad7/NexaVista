import WebHero from "@/components/Services/WebDevelopment/WebHero";
import WebSteps from "@/components/Services/WebDevelopment/WebSteps";
import WebExpertise from "@/components/Services/WebDevelopment/WebExpertise";
const WebDevelopment: React.FC = () => {
  return (
    <div className="space-y-8">
      <WebHero />
      <WebSteps />
      <WebExpertise />
    </div>
  );
};

export default WebDevelopment;
