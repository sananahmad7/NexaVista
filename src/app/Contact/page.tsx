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
    // Handle form submission logic here
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
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#252223] to-[#252223]/90 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Get In <span className="text-[#A68353]">Touch</span>
          </h1>
          <p className="text-sm lg:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            We’re here to help you turn your digital ideas into reality. Whether
            you’re looking for a new website, a mobile app, a digital marketing
            strategy, or just want to learn more about how we can support your
            business, we’d love to hear from you. At NexaVista Technologies, we
            value every inquiry and are committed to providing prompt and
            insightful responses.
          </p>
        </div>
      </div>

      <div className="bg-white ">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Information */}
            <div className="space-y-12 ">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#A68353]">
                  Let's Start a Conversation
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Whether you have a specific project in mind or just want to
                  explore possibilities, we're here to listen and provide expert
                  guidance every step of the way.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="border border-gray-200 p-6 hover:border-[#A68353]/40 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#A68353] p-3">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-gray-900">
                        Email Us
                      </h3>
                      <p className="text-gray-600">hello@company.com</p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 p-6 hover:border-[#A68353]/40 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#A68353] p-3">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-gray-900">
                        Call Us
                      </h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 p-6 hover:border-[#A68353]/40 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#A68353] p-3">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-gray-900">
                        Visit Us
                      </h3>
                      <p className="text-gray-600">
                        123 Business Street
                        <br />
                        City, State 12345
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 p-6 hover:border-[#A68353]/40 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#A68353] p-3">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-gray-900">
                        Office Hours
                      </h3>
                      <p className="text-gray-600">
                        Mon - Fri: 9:00 AM - 6:00 PM
                        <br />
                        Sat: 10:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 border border-gray-300 p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-[#A68353]">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium mb-2 text-gray-700"
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
                      className="w-full px-4 py-3 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#A68353] focus:outline-none focus:ring-2 focus:ring-[#A68353]/20 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium mb-2 text-gray-700"
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
                      className="w-full px-4 py-3 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#A68353] focus:outline-none focus:ring-2 focus:ring-[#A68353]/20 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-gray-700"
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
                    className="w-full px-4 py-3 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#A68353] focus:outline-none focus:ring-2 focus:ring-[#A68353]/20 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2 text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#A68353] focus:outline-none focus:ring-2 focus:ring-[#A68353]/20 transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2 text-gray-700"
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
                    className="w-full px-4 py-3 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#A68353] focus:outline-none focus:ring-2 focus:ring-[#A68353]/20 transition-colors"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-gray-700"
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
                    className="w-full px-4 py-3 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#A68353] focus:outline-none focus:ring-2 focus:ring-[#A68353]/20 transition-colors resize-vertical"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#A68353] text-white font-semibold py-4 px-6 hover:bg-[#A68353]/90 transition-colors duration-200 flex items-center justify-center space-x-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </form>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-24 text-center bg-gray-50 border border-gray-200 p-12">
            <h3 className="text-3xl font-bold mb-4 text-[#A68353]">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have trusted us with their
              digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#A68353] text-white font-semibold py-3 px-8 hover:bg-[#A68353]/90 transition-colors">
                Schedule a Call
              </button>
              <button className="border-2 border-[#A68353] text-[#A68353] font-semibold py-3 px-8 hover:bg-[#A68353] hover:text-white transition-colors">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
