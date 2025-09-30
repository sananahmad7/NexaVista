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
      <div className="py-19 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl 2xl:text-7xlfont-outfit font-bold mb-6 text-[#27374D]">
            Get In <span className="text-[#526D84]">Touch</span>
          </h1>
          <p className="text-sm lg:text-lg text-[#526D84] max-w-2xl mx-auto leading-relaxed font-outfit">
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
              {[
                { icon: Mail, title: "Email Us", text: "hello@company.com" },
                { icon: Phone, title: "Call Us", text: "+1 (555) 123-4567" },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  text: "123 Business Street\nCity, State 12345",
                },
                {
                  icon: Clock,
                  title: "Office Hours",
                  text: "Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#3A4A5C] border border-[#526D84] p-6 rounded-md hover:border-[#9DB2B9] transition-colors shadow-sm"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#9DB2B9] p-3 rounded-md">
                      <item.icon className="w-6 h-6 text-[#27374D]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-outfit text-[#DDE6ED]">
                        {item.title}
                      </h3>
                      <p className="text-[#9DB2B9] whitespace-pre-line font-outfit">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#27374D] p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-outfit mb-6 text-[#DDE6ED]">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                {["firstName", "lastName"].map((field) => (
                  <div key={field} className="bg-[#27374d] p-4 rounded-md">
                    <label
                      htmlFor={field}
                      className="block text-sm font-outfit mb-2 text-[#DDE6ED]"
                    >
                      {field === "firstName" ? "First Name *" : "Last Name *"}
                    </label>
                    <input
                      type="text"
                      id={field}
                      name={field}
                      required
                      value={(formData as any)[field]}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#1F2A38] border border-[#526D84] text-[#DDE6ED] placeholder-[#9DB2B9] focus:border-[#DDE6ED] focus:ring-2 focus:ring-[#DDE6ED]/30 outline-none"
                      placeholder={field === "firstName" ? "John" : "Doe"}
                    />
                  </div>
                ))}
              </div>

              {[
                { id: "email", label: "Email Address *", type: "email" },
                { id: "phone", label: "Phone Number", type: "tel" },
                { id: "subject", label: "Subject *", type: "text" },
              ].map((input) => (
                <div key={input.id} className="bg-[#27374d] p-4 rounded-md">
                  <label
                    htmlFor={input.id}
                    className="block text-sm font-outfit mb-2 text-[#DDE6ED]"
                  >
                    {input.label}
                  </label>
                  <input
                    type={input.type}
                    id={input.id}
                    name={input.id}
                    required={input.id !== "phone"}
                    value={(formData as any)[input.id]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#1F2A38] border border-[#526D84] text-[#DDE6ED] placeholder-[#9DB2B9] focus:border-[#DDE6ED] focus:ring-2 focus:ring-[#DDE6ED]/30 outline-none"
                    placeholder={
                      input.id === "email"
                        ? "john@example.com"
                        : input.id === "phone"
                        ? "+1 (555) 123-4567"
                        : "How can we help you?"
                    }
                  />
                </div>
              ))}

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
