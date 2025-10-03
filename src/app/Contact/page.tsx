"use client";
import { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
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
    <div
      className="min-h-screen flex items-center justify-center p-4 md:p-8 relative overflow-hidden"
      style={{ backgroundColor: "#27354d" }}
    >
      {/* Advanced Tech Background Patterns */}
      <div className="absolute inset-0 opacity-5">
        {/* Circuit Board Pattern */}
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="circuit"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="2" fill="#9DB2BF" />
              <circle cx="90" cy="90" r="2" fill="#9DB2BF" />
              <circle cx="50" cy="50" r="3" fill="#DDE6ED" />
              <line
                x1="10"
                y1="10"
                x2="50"
                y2="50"
                stroke="#9DB2BF"
                strokeWidth="0.5"
              />
              <line
                x1="50"
                y1="50"
                x2="90"
                y2="90"
                stroke="#9DB2BF"
                strokeWidth="0.5"
              />
              <line
                x1="90"
                y1="10"
                x2="50"
                y2="50"
                stroke="#9DB2BF"
                strokeWidth="0.5"
              />
              <rect x="48" y="8" width="4" height="4" fill="#9DB2BF" />
              <rect x="88" y="48" width="4" height="4" fill="#9DB2BF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Data Stream Lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient
              id="dataGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#9DB2BF" stopOpacity="0" />
              <stop offset="50%" stopColor="#9DB2BF" stopOpacity="1" />
              <stop offset="100%" stopColor="#9DB2BF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 Q250,50 500,100 T1000,100"
            stroke="url(#dataGradient)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M0,300 Q300,250 600,300 T1200,300"
            stroke="url(#dataGradient)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M0,500 Q350,450 700,500 T1400,500"
            stroke="url(#dataGradient)"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      {/* Hexagonal Grid */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hexagons"
              width="60"
              height="52"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M30,0 L52,15 L52,37 L30,52 L8,37 L8,15 Z"
                fill="none"
                stroke="#DDE6ED"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Floating Code Brackets */}
      <div
        className="absolute top-20 left-20 text-6xl font-mono opacity-5"
        style={{ color: "#9DB2BF" }}
      >
        {"<>"}
      </div>
      <div
        className="absolute bottom-20 right-20 text-6xl font-mono opacity-5"
        style={{ color: "#9DB2BF" }}
      >
        {"</>"}
      </div>
      <div
        className="absolute top-1/3 right-40 text-4xl font-mono opacity-5"
        style={{ color: "#DDE6ED" }}
      >
        {"{}"}
      </div>

      {/* Animated Gradient Orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, #9DB2BF 0%, transparent 70%)",
        }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, #DDE6ED 0%, transparent 70%)",
        }}
      ></div>

      <div className="w-full max-w-7xl bg-[#27354d] relative">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            style={{ color: "#DDE6ED" }}
          >
            Get in <span style={{ color: "#9DB2BF" }}>touch</span>
          </h1>
          <p
            className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto"
            style={{ color: "#9DB2BF" }}
          >
            Reach out, and let's create a universe of possibilities together!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Form Section */}
          <div
            className="rounded-2xl p-6 md:p-8"
            style={{ backgroundColor: "#526D82" }}
          >
            <h2
              className="text-2xl md:text-3xl font-bold mb-2 md:mb-3"
              style={{ color: "#DDE6ED" }}
            >
              Let's connect
            </h2>
            <p
              className="mb-6 md:mb-8 text-sm md:text-base"
              style={{ color: "#9DB2BF" }}
            >
              Let's align our constellations! Reach out and let the magic of
              collaboration illuminate our skies.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{
                    backgroundColor: "#27354d",
                    color: "#DDE6ED",
                    border: "1px solid #526D82",
                    caretColor: "#9DB2BF",
                  }}
                />
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{
                    backgroundColor: "#27354d",
                    color: "#DDE6ED",
                    border: "1px solid #526D82",
                    caretColor: "#9DB2BF",
                  }}
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all"
                style={{
                  backgroundColor: "#27354d",
                  color: "#DDE6ED",
                  border: "1px solid #526D82",
                  caretColor: "#9DB2BF",
                }}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all"
                style={{
                  backgroundColor: "#27354d",
                  color: "#DDE6ED",
                  border: "1px solid #526D82",
                  caretColor: "#9DB2BF",
                }}
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all"
                style={{
                  backgroundColor: "#27354d",
                  color: "#DDE6ED",
                  border: "1px solid #526D82",
                  caretColor: "#9DB2BF",
                }}
              />

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all resize-none"
                style={{
                  backgroundColor: "#27354d",
                  color: "#DDE6ED",
                  border: "1px solid #526D82",
                  caretColor: "#9DB2BF",
                }}
              />

              <button
                type="submit"
                className="w-full py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg inline-flex items-center justify-center gap-2 transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  backgroundColor: "#9DB2BF",
                  color: "#27354d",
                }}
              >
                Connect
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div
            className="rounded-2xl p-6 md:p-8 relative overflow-hidden min-h-[500px] flex flex-col justify-between backdrop-blur-sm"
            style={{ backgroundColor: "#526D82" }}
          >
            {/* Enhanced Geometric Pattern Background */}
            <div className="absolute inset-0 opacity-8">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="#DDE6ED"
                      strokeWidth="0.5"
                    />
                  </pattern>
                  <pattern
                    id="dots"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="10" cy="10" r="1.5" fill="#DDE6ED" />
                  </pattern>
                  <pattern
                    id="binary"
                    width="80"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <text
                      x="5"
                      y="15"
                      fill="#DDE6ED"
                      fontSize="10"
                      fontFamily="monospace"
                      opacity="0.6"
                    >
                      1010
                    </text>
                    <text
                      x="45"
                      y="15"
                      fill="#DDE6ED"
                      fontSize="10"
                      fontFamily="monospace"
                      opacity="0.6"
                    >
                      0101
                    </text>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <rect width="100%" height="100%" fill="url(#dots)" />
                <rect
                  width="100%"
                  height="30%"
                  fill="url(#binary)"
                  opacity="0.3"
                />
              </svg>
            </div>

            {/* Digital Corner Accents */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100,0 L100,30 L70,30 M100,0 L70,0 L70,30"
                  stroke="#DDE6ED"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="85" cy="15" r="2" fill="#9DB2BF" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0,100 L0,70 L30,70 M0,100 L30,100 L30,70"
                  stroke="#DDE6ED"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="15" cy="85" r="2" fill="#9DB2BF" />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-8">
              <div>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4"
                  style={{ color: "#DDE6ED" }}
                >
                  Contact Us
                </h2>
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{ color: "#9DB2BF" }}
                >
                  We're here to help you turn your digital ideas into reality.
                  Whether you're looking for a new website, a mobile app, a
                  digital marketing strategy, or just want to learn more about
                  how we can support your business, we'd love to hear from you.
                  At NexaVista Technologies, we value every inquiry and are
                  committed to providing prompt and insightful responses.
                </p>
              </div>

              <button
                className="px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: "#DDE6ED",
                  color: "#27354d",
                }}
              >
                Book an Appointment
              </button>

              <div className="space-y-6 pt-4">
                <div className="space-y-1">
                  <p
                    className="text-sm md:text-base"
                    style={{ color: "#DDE6ED" }}
                  >
                    Office No 1, Floor No 3, Plaza 74,
                  </p>
                  <p
                    className="text-sm md:text-base"
                    style={{ color: "#DDE6ED" }}
                  >
                    Spring North Commercial,
                  </p>
                  <p
                    className="text-sm md:text-base"
                    style={{ color: "#DDE6ED" }}
                  >
                    Bahria Town Phase 7,
                  </p>
                  <p
                    className="text-sm md:text-base"
                    style={{ color: "#DDE6ED" }}
                  >
                    Islamabad, Pakistan.
                  </p>
                </div>

                <div className="space-y-2 pt-4">
                  <p
                    className="text-sm md:text-base font-semibold"
                    style={{ color: "#DDE6ED" }}
                  >
                    +92 (336) 8323237
                  </p>
                  <p
                    className="text-sm md:text-base font-semibold"
                    style={{ color: "#DDE6ED" }}
                  >
                    sales@nexavistatech.com
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div
              className="absolute top-4 right-4 w-24 h-24 rounded-full opacity-20"
              style={{ backgroundColor: "#9DB2BF", filter: "blur(40px)" }}
            ></div>
            <div
              className="absolute bottom-4 left-4 w-32 h-32 rounded-full opacity-20"
              style={{ backgroundColor: "#DDE6ED", filter: "blur(50px)" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
