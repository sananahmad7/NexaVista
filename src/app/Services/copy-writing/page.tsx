import CopyHero from "@/components/Services/CopyWriting/CopyHero";
import CopyWritingImpact from "@/components/Services/CopyWriting/CopyImpact";
import CopyWhyChooseUs from "@/components/Services/CopyWriting/CopyWhyChooseUs";
import CopyWritingExperience from "@/components/Services/CopyWriting/CopyWritingExperience";

const page = () => {
  return (
    <div className="space-y-9 mb-5">
      <CopyHero />
      <CopyWritingImpact />
      <CopyWritingExperience />
      <CopyWhyChooseUs />
    </div>
  );
};

export default page;
