"use client";
import { useState } from "react";
import {
  FileText,
  Shield,
  Users,
  Clock,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

const TermsOfService: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  const sections = [
    { id: "acceptance", title: "Acceptance of Terms", icon: CheckCircle },
    { id: "services", title: "Services Provided", icon: FileText },
    { id: "responsibilities", title: "User Responsibilities", icon: Users },
    { id: "payment", title: "Payment Terms", icon: Clock },
    { id: "intellectual", title: "Intellectual Property", icon: Shield },
    { id: "liability", title: "Limitation of Liability", icon: AlertTriangle },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#252223] to-[#252223]/90 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Terms of <span className="text-[#A68353]">Service</span>
          </h1>
          <p className="text-sm lg:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using our services. By
            accessing and using NexaVista Technologies' services, you agree to
            comply with and be bound by the following terms and conditions.
          </p>
          <div className="mt-8 text-white/60">
            <p className="text-sm">Last updated: September 23, 2025</p>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Navigation Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h3 className="text-xl font-bold mb-6 text-[#A68353]">
                  Quick Navigation
                </h3>
                <nav className="space-y-2">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={() => setActiveSection(section.id)}
                        className={`flex items-center space-x-3 p-3 border border-gray-200 hover:border-[#A68353]/40 transition-colors ${
                          activeSection === section.id
                            ? "border-[#A68353] bg-[#A68353]/5"
                            : ""
                        }`}
                      >
                        <Icon className="w-4 h-4 text-[#A68353]" />
                        <span className="text-sm font-medium text-gray-700">
                          {section.title}
                        </span>
                      </a>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              {/* Section 1: Acceptance of Terms */}
              <section
                id="acceptance"
                className="bg-gray-50 border border-gray-300 p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <CheckCircle className="w-6 h-6 text-[#A68353]" />
                  <h2 className="text-3xl font-bold text-[#A68353]">
                    1. Acceptance of Terms
                  </h2>
                </div>
                <div className="prose max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    By accessing and using NexaVista Technologies' services, you
                    acknowledge that you have read, understood, and agree to be
                    bound by these Terms of Service. If you do not agree to
                    these terms, you should not use our services.
                  </p>
                  <p>
                    These terms constitute a legally binding agreement between
                    you and NexaVista Technologies. Your continued use of our
                    services following any modifications to these terms
                    constitutes acceptance of those changes.
                  </p>
                </div>
              </section>

              {/* Section 2: Services Provided */}
              <section
                id="services"
                className="bg-gray-50 border border-gray-300 p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <FileText className="w-6 h-6 text-[#A68353]" />
                  <h2 className="text-3xl font-bold text-[#A68353]">
                    2. Services Provided
                  </h2>
                </div>
                <div className="prose max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    NexaVista Technologies offers comprehensive digital services
                    including:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="border border-gray-200 p-4 hover:border-[#A68353]/40 transition-colors">
                      <h4 className="font-semibold text-[#A68353] mb-2">
                        Web Development
                      </h4>
                      <p className="text-sm">
                        Custom websites and web applications tailored to your
                        business needs.
                      </p>
                    </div>
                    <div className="border border-gray-200 p-4 hover:border-[#A68353]/40 transition-colors">
                      <h4 className="font-semibold text-[#A68353] mb-2">
                        Mobile App Development
                      </h4>
                      <p className="text-sm">
                        Native and cross-platform mobile applications for iOS
                        and Android.
                      </p>
                    </div>
                    <div className="border border-gray-200 p-4 hover:border-[#A68353]/40 transition-colors">
                      <h4 className="font-semibold text-[#A68353] mb-2">
                        Digital Marketing
                      </h4>
                      <p className="text-sm">
                        Strategic marketing campaigns to grow your online
                        presence.
                      </p>
                    </div>
                    <div className="border border-gray-200 p-4 hover:border-[#A68353]/40 transition-colors">
                      <h4 className="font-semibold text-[#A68353] mb-2">
                        Graphic Design
                      </h4>
                      <p className="text-sm">
                        Professional design solutions for branding and marketing
                        materials.
                      </p>
                    </div>
                  </div>
                  <p>
                    All services are subject to the terms outlined in individual
                    project agreements or contracts established between
                    NexaVista Technologies and the client.
                  </p>
                </div>
              </section>

              {/* Section 3: User Responsibilities */}
              <section
                id="responsibilities"
                className="bg-gray-50 border border-gray-300 p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="w-6 h-6 text-[#A68353]" />
                  <h2 className="text-3xl font-bold text-[#A68353]">
                    3. User Responsibilities
                  </h2>
                </div>
                <div className="prose max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">By using our services, you agree to:</p>
                  <div className="bg-white border border-gray-200 p-6 mb-4">
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#A68353] mt-0.5 flex-shrink-0" />
                        <span>
                          Provide accurate and complete information during
                          project engagements
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#A68353] mt-0.5 flex-shrink-0" />
                        <span>
                          Maintain the confidentiality of your account
                          credentials
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#A68353] mt-0.5 flex-shrink-0" />
                        <span>
                          Comply with all applicable laws and regulations when
                          using our services
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#A68353] mt-0.5 flex-shrink-0" />
                        <span>
                          Provide timely feedback and approvals to ensure
                          project progress
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 4: Payment Terms */}
              <section
                id="payment"
                className="bg-gray-50 border border-gray-300 p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="w-6 h-6 text-[#A68353]" />
                  <h2 className="text-3xl font-bold text-[#A68353]">
                    4. Payment Terms
                  </h2>
                </div>
                <div className="prose max-w-none text-gray-700 leading-relaxed">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white border border-gray-200 p-6">
                      <h4 className="font-semibold text-[#A68353] mb-3">
                        Payment Schedule
                      </h4>
                      <p className="text-sm mb-2">
                        Payment terms will be outlined in separate agreements or
                        invoices provided to clients.
                      </p>
                      <p className="text-sm">
                        Payments are expected to be made on time as delays may
                        result in service suspension.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6">
                      <h4 className="font-semibold text-[#A68353] mb-3">
                        Late Payment Policy
                      </h4>
                      <p className="text-sm mb-2">
                        Late payments may incur additional fees as specified in
                        your project agreement.
                      </p>
                      <p className="text-sm">
                        Services may be suspended until payment is received in
                        full.
                      </p>
                    </div>
                  </div>
                  <p>
                    Project timelines and delivery schedules are contingent upon
                    timely payments. Unforeseen circumstances, changes in
                    project scope, or delays from the client side may affect
                    delivery times.
                  </p>
                </div>
              </section>

              {/* Section 5: Intellectual Property */}
              <section
                id="intellectual"
                className="bg-gray-50 border border-gray-300 p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="w-6 h-6 text-[#A68353]" />
                  <h2 className="text-3xl font-bold text-[#A68353]">
                    5. Intellectual Property
                  </h2>
                </div>
                <div className="prose max-w-none text-gray-700 leading-relaxed">
                  <div className="bg-white border border-[#A68353] p-6 mb-6">
                    <h4 className="font-semibold text-[#A68353] mb-3">
                      Rights and Ownership
                    </h4>
                    <p className="mb-3">
                      All content, designs, and materials created by NexaVista
                      Technologies are protected by intellectual property
                      rights. Unless otherwise agreed in writing, NexaVista
                      Technologies retains all rights to any custom-built
                      software, websites, or creative assets produced during a
                      project.
                    </p>
                    <p className="font-medium text-[#A68353]">
                      Upon full payment, clients will be granted the right to
                      use or own all the copyrights of the delivered product.
                    </p>
                  </div>
                  <p>
                    Project revisions are limited to the number outlined in the
                    agreement with the client. Additional revisions may be
                    subject to additional fees. Any changes in project scope or
                    additional feature requests after the project has commenced
                    will require a new agreement or amendment to the existing
                    agreement.
                  </p>
                </div>
              </section>

              {/* Section 6: Limitation of Liability */}
              <section
                id="liability"
                className="bg-gray-50 border border-gray-300 p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <AlertTriangle className="w-6 h-6 text-[#A68353]" />
                  <h2 className="text-3xl font-bold text-[#A68353]">
                    6. Limitation of Liability
                  </h2>
                </div>
                <div className="prose max-w-none text-gray-700 leading-relaxed">
                  <div className="bg-yellow-50 border border-yellow-200 p-6 mb-6">
                    <p className="font-medium text-yellow-800">
                      NexaVista Technologies will not be liable for any direct,
                      indirect, incidental, or consequential damages resulting
                      from the use or inability to use our services.
                    </p>
                  </div>
                  <p className="mb-4">
                    We make no warranties, express or implied, about the
                    reliability, suitability, or availability of the services
                    for any purpose. Our liability is limited to the amount paid
                    for the specific service in question.
                  </p>
                  <p>
                    We reserve the right to suspend or terminate your access to
                    our services at any time, with or without cause, if we
                    believe you have violated these Terms. Upon termination, all
                    licenses and rights granted to you under these Terms will
                    immediately cease.
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <section className="bg-[#A68353] text-white p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Questions About Our Terms?
                </h3>
                <p className="mb-6 text-white/90">
                  If you have any questions or concerns regarding these Terms of
                  Service, we're here to help.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Email Us</h4>
                    <p className="text-white/90">sales@nexavistatech.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Call Us</h4>
                    <p className="text-white/90">+92(336)8323237</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm text-white/80">
                    These Terms are governed by and construed in accordance with
                    the laws of USA & Pakistan. Any disputes arising out of or
                    in connection with these Terms will be subject to the
                    exclusive jurisdiction of the courts in USA & Pakistan.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
