import { Code, Database, Zap, Globe, Cpu, Layers } from "lucide-react";

function WebExpertise() {
  const expertiseAreas = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Modern Web Development",
      description:
        "We build responsive, scalable applications using cutting-edge technologies like React.js, Next.js, and Three.js. Our expertise in HTML, CSS, and JavaScript ensures clean, maintainable code that delivers exceptional user experiences across all devices.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Robust Data Management",
      description:
        "Our team leverages MySQL and MongoDB to create efficient, scalable database solutions. We design data architectures that grow with your business, ensuring optimal performance and data integrity for your applications.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Seamless API Integrations",
      description:
        "We excel at connecting your applications with third-party services through robust API integrations. Our approach ensures smooth data flow and enhanced functionality, making your systems work together harmoniously.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Full-Stack Solutions",
      description:
        "From frontend interfaces to backend infrastructure, we provide comprehensive full-stack development using Node.js and PHP. Our holistic approach ensures all components of your application work seamlessly together.",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI-Enhanced Applications",
      description:
        "We incorporate artificial intelligence to enhance user experience and optimize business operations. Our AI applications provide intelligent insights, automation, and personalized experiences that drive business growth.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Scalable Architecture",
      description:
        "We design and implement secure, scalable architectures tailored to your business needs. Our solutions are built to handle growth, ensuring your applications remain performant and reliable as your business expands.",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto font-outfit">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-outfit text-black mb-4 text-balance">
          When Is the Time for{" "}
          <span style={{ color: "#082024" }}>Precision</span> and{" "}
          <span style={{ color: "#A68353" }}>Innovation</span>?
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto text-pretty font-outfit">
          Our expertise spans the full spectrum of modern web development,
          delivering solutions that are secure, scalable, and tailored to your
          business needs.
        </p>
      </div>

      {/* Expertise Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertiseAreas.map((area, index) => (
          <div
            key={index}
            className="rounded-lg border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-50 font-outfit"
          >
            <div className="p-8">
              <div
                className="mb-6 p-3 rounded-full bg-white w-fit"
                style={{ color: "#082024" }}
              >
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold font-outfit text-[#092125] mb-4 text-balance">
                {area.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-pretty font-outfit">
                {area.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WebExpertise;
