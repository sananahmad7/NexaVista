"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen my-10 bg-white">
      {/* Header Section */}
      <div className="relative py-24 text-center bg-[#27374D] overflow-hidden">
        {/* Pattern Layer */}
        <div className="absolute inset-0 opacity-65">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern
                id="grid-pattern"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                {/* vertical lines */}
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#9DB2BF"
                  strokeWidth="0.5"
                />
                {/* horizontal lines */}
                <path
                  d="M 0 40 L 40 40 40 0"
                  fill="none"
                  stroke="#9DB2BF"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#grid-pattern)"
              opacity="0.15"
            />
          </svg>
        </div>

        {/* Content Layer */}
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl 2xl:text-7xl font-outfit font-bold mb-6 text-[#DDE6ED]">
            Get In <span className="text-[#9DB2B9]">Touch</span>
          </h1>
          <p className="text-sm lg:text-lg text-[#DDE6ED]/80 max-w-2xl mx-auto leading-relaxed font-outfit">
            We’re here to help you turn your digital ideas into reality. Whether
            you’re looking for a new website, a mobile app, or a marketing
            strategy, we’d love to hear from you.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <div className="bg-[#27374D] p-8 rounded-lg space-y-8 shadow-lg">
            <h2 className="text-3xl font-outfit text-[#DDE6ED]">
              Let’s Start a Conversation
            </h2>
            <p className="text-[#9DB2B9] text-lg font-outfit leading-relaxed">
              Whether you have a specific project in mind or just want to
              explore possibilities, we’re here to listen and guide you.
            </p>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="bg-[#3A4A5C] border border-[#526D84] p-6 rounded-md hover:border-[#9DB2B9] transition-colors shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#9DB2B9] p-3 rounded-md">
                    <Mail className="w-6 h-6 text-[#27374D]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-outfit text-[#DDE6ED]">
                      Email Us
                    </h3>
                    <p className="text-[#9DB2B9] whitespace-pre-line font-outfit">
                      hello@company.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#3A4A5C] border border-[#526D84] p-6 rounded-md hover:border-[#9DB2B9] transition-colors shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#9DB2B9] p-3 rounded-md">
                    <Phone className="w-6 h-6 text-[#27374D]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-outfit text-[#DDE6ED]">
                      Call Us
                    </h3>
                    <p className="text-[#9DB2B9] font-outfit">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#3A4A5C] border border-[#526D84] p-6 rounded-md hover:border-[#9DB2B9] transition-colors shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#9DB2B9] p-3 rounded-md">
                    <MapPin className="w-6 h-6 text-[#27374D]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-outfit text-[#DDE6ED]">
                      Visit Us
                    </h3>
                    <p className="text-[#9DB2B9] whitespace-pre-line font-outfit">
                      123 Business Street{"\n"}City, State 12345
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#3A4A5C] border border-[#526D84] p-6 rounded-md hover:border-[#9DB2B9] transition-colors shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#9DB2B9] p-3 rounded-md">
                    <Clock className="w-6 h-6 text-[#27374D]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-outfit text-[#DDE6ED]">
                      Office Hours
                    </h3>
                    <p className="text-[#9DB2B9] whitespace-pre-line font-outfit">
                      Mon - Fri: 9:00 AM - 6:00 PM{"\n"}Sat: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#27374D] p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-outfit mb-6 text-[#DDE6ED]">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name */}
              <div className="bg-[#27374d] p-4 rounded-md">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-outfit mb-2 text-[#DDE6ED]"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#1F2A38] border border-[#526D84] text-[#DDE6ED] placeholder-[#9DB2B9] focus:border-[#DDE6ED] focus:ring-2 focus:ring-[#DDE6ED]/30 outline-none"
                  placeholder="John"
                />
              </div>

              {/* Last Name */}
              <div className="bg-[#27374d] p-4 rounded-md">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-outfit mb-2 text-[#DDE6ED]"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#1F2A38] border border-[#526D84] text-[#DDE6ED] placeholder-[#9DB2B9] focus:border-[#DDE6ED] focus:ring-2 focus:ring-[#DDE6ED]/30 outline-none"
                  placeholder="Doe"
                />
              </div>

              {/* Email */}
              <div className="bg-[#27374d] p-4 rounded-md">
                <label
                  htmlFor="email"
                  className="block text-sm font-outfit mb-2 text-[#DDE6ED]"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#1F2A38] border border-[#526D84] text-[#DDE6ED] placeholder-[#9DB2B9] focus:border-[#DDE6ED] focus:ring-2 focus:ring-[#DDE6ED]/30 outline-none"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div className="bg-[#27374d] p-4 rounded-md">
                <label
                  htmlFor="phone"
                  className="block text-sm font-outfit mb-2 text-[#DDE6ED]"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#1F2A38] border border-[#526D84] text-[#DDE6ED] placeholder-[#9DB2B9] focus:border-[#DDE6ED] focus:ring-2 focus:ring-[#DDE6ED]/30 outline-none"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Subject */}
              <div className="bg-[#27374d] p-4 rounded-md">
                <label
                  htmlFor="subject"
                  className="block text-sm font-outfit mb-2 text-[#DDE6ED]"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#1F2A38] border border-[#526D84] text-[#DDE6ED] placeholder-[#9DB2B9] focus:border-[#DDE6ED] focus:ring-2 focus:ring-[#DDE6ED]/30 outline-none"
                  placeholder="How can we help you?"
                />
              </div>

              {/* Message */}
              <div className="bg-[#27374d] p-4 rounded-md">
                <label
                  htmlFor="message"
                  className="block text-sm font-outfit mb-2 text-[#DDE6ED]"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#1F2A38] border border-[#526D84] text-[#DDE6ED] placeholder-[#9DB2B9] focus:border-[#DDE6ED] focus:ring-2 focus:ring-[#DDE6ED]/30 outline-none resize-vertical"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#9DB2B9] text-[#27374D] font-outfit py-4 px-6 hover:bg-[#DDE6ED] transition-colors flex items-center justify-center space-x-2 group rounded-md"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
