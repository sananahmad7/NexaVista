"use client";

export default function Client() {
  const clients = [
    { name: "HOLDINGS", logo: "H" },
    { name: "MobileTech", logo: "MT" },
    { name: "WESTERN", logo: "W" },
    { name: "AudioWave", logo: "AW" },
    { name: "PANDORA", logo: "P" },
    { name: "TechFlow", logo: "TF" },
    { name: "DataSync", logo: "DS" },
    { name: "CloudBase", logo: "CB" },
  ];

  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-10  overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-6">
          <div className="inline-block">
            <h2
              className="text-sm font-outfit tracking-[0.2em] uppercase mb-3 relative"
              style={{ color: "#27374D" }}
            >
              CLIENTS WE HAVE WORKED WITH
            </h2>
            <div
              className="w-16 h-0.5 mx-auto"
              style={{ backgroundColor: "#526D82" }}
            ></div>
          </div>
        </div>

        {/* Continuous Horizontal Scroll (works on all screens) */}
        <div className="relative">
          <div className="flex animate-scroll">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex items-center justify-center min-w-[250px] sm:min-w-[300px] mx-6"
              >
                <div className="flex items-center space-x-5 p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-2 border-opacity-20 border-[#DDE6ED] transition-all duration-300 group-hover:shadow-xl group-hover:scale-110"
                    style={{ backgroundColor: "#27374D" }}
                  >
                    {client.logo}
                  </div>
                  <span
                    className="text-xl sm:text-2xl font-outfit tracking-wide transition-all duration-300 group-hover:tracking-wider"
                    style={{ color: "#27374D" }}
                  >
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
