import { DollarSign, Star, Shield } from "lucide-react";
import Image from "next/image";

export default function CreativeSolutions() {
  return (
    <div className="min-h-screen py-12 px-6 bg-[#1F2A38]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-outfit leading-tight text-[#DDE6ED]">
                Crafting Creative{" "}
                <span className="underline decoration-4 underline-offset-8 text-[#9DB2B9]">
                  Solutions For
                </span>
                <br />
                Modern Brands
              </h1>
            </div>

            {/* 24/7 Support Card */}
            <div className="bg-[#27374D] border border-[#9DB2B9]/40 text-[#DDE6ED] p-6 rounded-3xl relative max-w-sm shadow-sm hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-outfit mb-3 text-[#9DB2B9]">
                    24/7 Support
                  </h3>
                  <p className="text-[#DDE6ED]/80 text-base leading-relaxed">
                    We provide 24/7 service
                    <br />
                    to our customers
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Left Image */}
            <div className="relative rounded-3xl overflow-hidden max-w-sm h-80 mt-8">
              <Image
                src="/About2.jpg"
                alt="Team brainstorming"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-8">
            {/* Top Right Description */}
            <div className="text-right mb-12">
              <p className="text-[#DDE6ED]/80 text-lg leading-relaxed max-w-md ml-auto font-outfit">
                At the intersection of vision and execution, we bring creative
                ideas team transforms concepts into compelling narratives.
              </p>
            </div>

            {/* Large Right Image */}
            <div className="relative rounded-3xl overflow-hidden h-96 lg:h-[420px] mb-12">
              <Image
                src="/about1.jpg"
                alt="Team collaboration meeting"
                fill
                className="object-cover"
              />
            </div>

            {/* Service Features */}
            <div className="space-y-8">
              {/* Excellence */}
              <div className="flex items-start space-x-4">
                <div className="bg-[#9DB2B9] rounded-full p-3 flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-[#1F2A38]" />
                </div>
                <div>
                  <h3 className="text-xl font-outfit mb-2 text-[#9DB2B9]">
                    Excellence
                  </h3>
                  <p className="text-[#DDE6ED]/80 leading-relaxed font-outfit">
                    Our mission is to empower brands by crafting innovative and
                    impactful creative solutions. Needs strategic campaigns
                    success.
                  </p>
                </div>
              </div>

              {/* Innovation */}
              <div className="flex items-start space-x-4">
                <div className="bg-[#9DB2B9] rounded-full p-3 flex-shrink-0">
                  <Star className="w-6 h-6 text-[#1F2A38]" />
                </div>
                <div>
                  <h3 className="text-xl font-outfit mb-2 text-[#9DB2B9]">
                    Innovation
                  </h3>
                  <p className="text-[#DDE6ED]/80 leading-relaxed font-outfit">
                    Our mission is to empower brands by crafting innovative and
                    impactful creative solutions needs strategic campaigns
                    success.
                  </p>
                </div>
              </div>

              {/* What Sets Us Apart */}
              <div className="flex items-start space-x-4">
                <div className="bg-[#9DB2B9] rounded-full p-3 flex-shrink-0">
                  <Shield className="w-6 h-6 text-[#1F2A38]" />
                </div>
                <div>
                  <h3 className="text-xl font-outfit mb-2 text-[#9DB2B9]">
                    What Sets Us Apart
                  </h3>
                  <p className="text-[#DDE6ED]/80 leading-relaxed font-outfit">
                    Our mission is to empower brands by crafting innovative and
                    impactful creative solutions needs strategic campaigns
                    success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
