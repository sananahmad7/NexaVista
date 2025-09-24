"use client";
import { useState } from "react";
import {
  Shield,
  Eye,
  Lock,
  Database,
  Users,
  FileText,
  Globe,
  Settings,
} from "lucide-react";

const PrivacyPolicy: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  const sections = [
    { id: "information", title: "Information We Collect", icon: Database },
    { id: "usage", title: "How We Use Information", icon: Settings },
    { id: "sharing", title: "Information Sharing", icon: Users },
    { id: "security", title: "Data Security", icon: Lock },
    { id: "cookies", title: "Cookies & Tracking", icon: Eye },
    { id: "rights", title: "Your Rights", icon: Shield },
    { id: "updates", title: "Policy Updates", icon: FileText },
    { id: "contact", title: "Contact Us", icon: Globe },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#252223] to-[#252223]/90 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Privacy <span className="text-[#A68353]">Policy</span>
          </h1>
          <p className="text-sm lg:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            At NexaVista Technologies, we take your privacy seriously. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website or use our services.
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

                {/* Trust Badge */}
                <div className="mt-8 bg-gray-50 border border-gray-300 p-6 text-center">
                  <Shield className="w-12 h-12 text-[#A68353] mx-auto mb-4" />
                  <h4 className="font-bold text-[#A68353] mb-2">
                    Your Privacy Matters
                  </h4>
                  <p className="text-sm text-gray-600">
                    We are committed to protecting your personal information and
                    respecting your privacy rights.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              {/* Introduction */}
              <section className="bg-[#A68353] text-white p-8">
                <h2 className="text-3xl font-bold mb-6">
                  Our Commitment to Your Privacy
                </h2>
                <p className="text-white/90 leading-relaxed mb-4">
                  This Privacy Policy describes how NexaVista Technologies
                  collects, uses, and protects your information when you use our
                  website and services. We respect your privacy and are
                  committed to protecting your personal data.
                </p>
              </section>

              {/* Section 1: Information We Collect */}
              <section
                id="information"
                className="bg-gray-50 border border-gray-300 p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Database className="w-6 h-6 text-[#A68353]" />
                  <h2 className="text-3xl font-bold text-[#A68353]">
                    1. Information We Collect
                  </h2>
                </div>
                <div className="prose max-w-none text-gray-700 leading-relaxed">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white border border-gray-200 p-6">
                      <h4 className="font-semibold text-[#A68353] mb-3">
                        Personal Information
                      </h4>
                      <p className="text-sm mb-2">
                        Information you provide directly to us:
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>• Name and contact information</li>
                        <li>• Email addresses</li>
                        <li>• Phone numbers</li>
                        <li>• Project details and requirements</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-gray-200 p-6">
                      <h4 className="font-semibold text-[#A68353] mb-3">
                        Automated Information
                      </h4>
                      <p className="text-sm mb-2">
                        Information collected automatically:
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>• IP addresses and location data</li>
                        <li>• Browser type and version</li>
                        <li>• Device information</li>
                        <li>• Usage patterns and analytics</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: How We Use Information */}
              <section
                id="usage"
                className="bg-gray-50 border border-gray-300 p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Settings className="w-6 h-6 text-[#A68353]" />
                  <h2 className="text-3xl font-bold text-[#A68353]">
                    2. How We Use Your Information
                  </h2>
                </div>
                <div className="prose max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-6">
                    We use the information we collect for various purposes,
                    including:
                  </p>
                  <div className="bg-white border border-gray-200 p-6 mb-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-[#A68353] mb-3">
                          Service Delivery
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-[#A68353] rounded-full mt-2 flex-shrink-0"></span>
                            <span>Provide and maintain our services</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-[#A68353] rounded-full mt-2 flex-shrink-0"></span>
                            <span>Process and complete transactions</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-[#A68353] rounded-full mt-2 flex-shrink-0"></span>
                            <span>Communicate about projects and services</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#A68353] mb-3">
                          Improvement & Analytics
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-[#A68353] rounded-full mt-2 flex-shrink-0"></span>
                            <span>Analyze usage patterns</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-[#A68353] rounded-full mt-2 flex-shrink-0"></span>
                            <span>Improve our website and services</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-[#A68353] rounded-full mt-2 flex-shrink-0"></span>
                            <span>Develop new features</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Information Sharing */}
              <section
                id="sharing"
                className="bg-gray-50 border border-gray-300 p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="w-6 h-6 text-[#A68353]" />
                  <h2 className="text-3xl font-bold text-[#A68353]">
                    3. Information Sharing
                  </h2>
                </div>
                <div className="prose max-w-none text-gray-700 leading-relaxed">
                  <div className="bg-green-50 border border-green-200 p-6 mb-6">
                    <h4 className="font-semibold text-green-800 mb-2">
                      Our Commitment
                    </h4>
                    <p className="text-green-700">
                      We do not sell, trade, or otherwise transfer your personal
                      information to third parties without your consent, except
                      as described in this policy.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 p-6">
                    <h4 className="font-semibold text-[#A68353] mb-4">
                      We may share information in these circumstances:
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-[#A68353]/10 border border-[#A68353]/30 rounded flex items-center justify-center mt-0.5 flex-shrink-0">
                          <span className="w-2 h-2 bg-[#A68353] rounded-full"></span>
                        </div>
                        <span>With your explicit consent</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-[#A68353]/10 border border-[#A68353]/30 rounded flex items-center justify-center mt-0.5 flex-shrink-0">
                          <span className="w-2 h-2 bg-[#A68353] rounded-full"></span>
                        </div>
                        <span>
                          With trusted service providers who assist in our
                          operations
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-[#A68353]/10 border border-[#A68353]/30 rounded flex items-center justify-center mt-0.5 flex-shrink-0">
                          <span className="w-2 h-2 bg-[#A68353] rounded-full"></span>
                        </div>
                        <span>
                          When required by law or to protect our rights
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 4: Data Security */}
              <section
                id="security"
                className="bg-gray-50 border border-gray-300 p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Lock className="w-6 h-6 text-[#A68353]" />
                  <h2 className="text-3xl font-bold text-[#A68353]">
                    4. Data Security
                  </h2>
                </div>
                <div className="prose max-w-none text-gray-700 leading-relaxed">
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white border border-gray-200 p-6 text-center">
                      <Lock className="w-8 h-8 text-[#A68353] mx-auto mb-3" />
                      <h4 className="font-semibold text-[#A68353] mb-2">
                        Encryption
                      </h4>
                      <p className="text-sm">
                        Data transmitted between your browser and our servers is
                        encrypted using SSL/TLS.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 text-center">
                      <Shield className="w-8 h-8 text-[#A68353] mx-auto mb-3" />
                      <h4 className="font-semibold text-[#A68353] mb-2">
                        Access Control
                      </h4>
                      <p className="text-sm">
                        We limit access to personal information to authorized
                        personnel only.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 text-center">
                      <Database className="w-8 h-8 text-[#A68353] mx-auto mb-3" />
                      <h4 className="font-semibold text-[#A68353] mb-2">
                        Secure Storage
                      </h4>
                      <p className="text-sm">
                        Your data is stored on secure servers with regular
                        backups and monitoring.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Cookies & Tracking */}
              <section
                id="cookies"
                className="bg-gray-50 border border-gray-300 p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Eye className="w-6 h-6 text-[#A68353]" />
                  <h2 className="text-3xl font-bold text-[#A68353]">
                    5. Cookies & Tracking Technologies
                  </h2>
                </div>
                <div className="prose max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-6">
                    We use cookies and similar tracking technologies to enhance
                    your browsing experience and analyze website traffic.
                  </p>
                </div>
              </section>

              {/* Section 6: Your Rights */}
              <section
                id="rights"
                className="bg-gray-50 border border-gray-300 p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="w-6 h-6 text-[#A68353]" />
                  <h2 className="text-3xl font-bold text-[#A68353]">
                    6. Your Privacy Rights
                  </h2>
                </div>
                <div className="prose max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-6">
                    You have certain rights regarding your personal information:
                  </p>
                  <div className="bg-white border border-gray-200 p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-[#A68353] mb-3">
                          Access & Control
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Access your personal data</li>
                          <li>• Correct inaccurate information</li>
                          <li>• Request data deletion</li>
                          <li>• Data portability</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#A68353] mb-3">
                          Communication
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Opt-out of marketing communications</li>
                          <li>• Update preferences</li>
                          <li>• Lodge complaints</li>
                          <li>• Request information</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Information */}
              <section className="bg-[#A68353] text-white p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Questions About Your Privacy?
                </h3>
                <p className="mb-6 text-white/90">
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us.
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
                    This Privacy Policy is governed by the laws of USA &
                    Pakistan. We reserve the right to update this policy at any
                    time. Changes will be posted on this page with an updated
                    date.
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

export default PrivacyPolicy;
