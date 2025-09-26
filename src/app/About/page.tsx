import Image from "next/image";
import Timeline from "@/components/AboutUs/Timeline";
import BulletPoints from "@/components/AboutUs/BulletPoints";
export default function AboutPage() {
  return (
    <main className="bg-white ">
      {/* Full Screen Hero Section */}
      <section className="relative w-full h-[80vh] lg:h-[88vh] xl:h-[80vh] 2xl:h-[75vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/office.jpg"
            alt="Software development team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#3F3A34]/60"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-outfit font-bold text-white mb-6">
              About <span className="text-[#A68353]">Our Journey</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl font-outfit mx-auto leading-relaxed">
              A decade of innovation, growth, and excellence in software
              development
            </p>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <Timeline />
      <BulletPoints />

      {/* Our Story Section */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit text-[#3F3A34] mb-4">
              Our <span className="text-[#A68353]">Story</span>
            </h2>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed font-outfit">
              NexaVista Technologies began with a simple idea: to create a
              digital agency that combines technical expertise with a genuine
              passion for helping businesses succeed. From our humble
              beginnings, we have grown into a full-service digital agency,
              serving clients across various industries. Our journey has been
              one of continuous learning, growth, and adaptation. We are proud
              of the work we have done and excited for the future as we continue
              to expand our services and reach.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 px-6 lg:px-12 bg-[#252223]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-outfit text-white mb-6">
                Our <span className="text-[#A68353]">Mission</span>
              </h2>
              <p className="text-gray-200 font-outfit text-lg leading-relaxed">
                At NexaVista Technologies, our mission is simple: to help our
                clients succeed in the digital world. We aim to deliver tailored
                solutions that not only meet but exceed our clients&apos;
                expectations. By combining our technical expertise with a deep
                understanding of our clients&apos; needs, we create digital
                experiences that are not only functional but also impactful.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/mission.jpg"
                alt="Business partnership and digital innovation"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-10 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-outfit text-[#3F3A34] mb-6">
                Our <span className="text-[#A68353]">Vision</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed font-outfit">
                In today&apos;s mobile-first world, having an app that connects
                with your audience is crucial. We specialize in developing
                mobile applications that are intuitive, responsive, and
                engaging, ensuring that your brand is always within reach.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/vision.jpg"
                alt="Digital targeting and strategy"
                width={800}
                height={600}
                className="w-full h-150 rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 lg:px-12 bg-[#252223]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-outfit text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto font-outfit">
            Let&apos;s build something amazing together. Our experienced team is
            ready to bring your vision to life.
          </p>
          <button className="bg-[#a68353] text-white px-8 py-4 rounded-lg text-lg font-outfit hover:bg-[#6C6259] transition-colors duration-300">
            Get Started Today
          </button>
        </div>
      </section>
    </main>
  );
}
