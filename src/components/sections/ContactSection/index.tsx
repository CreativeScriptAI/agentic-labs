import React, { useState } from "react";
import ContactSectionBackground from "../../../assets/images/ContactSectionBackground";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div
      className="py-20 -mx-4 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
      style={{ backgroundColor: "#F9F6F4" }}
    >
      <div className="max-w-2xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-red-500 font-medium text-sm tracking-wider uppercase mb-4">
            WE&apos;LL PLUG IT INTO YOUR WORKFLOW IN UNDER 48HRS.
          </p>
          <h2 className="text-center text-[32px] font-normal text-[#0A1128] tracking-[-0.64px] font-sfpro">
            Free your team.
          </h2>
          <div className="text-center text-[32px] font-mondwest font-normal text-[#0A1128] tracking-[-0.64px] font-sfpro">
            Build your first <span className="text-blue-600 ">AI agent</span>{" "}
            today!
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div className="w-full">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your email address"
              className="w-full px-6 py-4 text-gray-700 bg-white rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
              required
            />
          </div>

          {/* Message Textarea */}
          <div className="w-full flex">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Write a message here"
              rows={4}
              className="w-full px-6 py-4 text-gray-700 bg-white rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors duration-200 resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex w-full">
            <button
              type="submit"
              className="flex w-full justify-center bg-blue-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
            >
              Book a Free Consultation
            </button>
          </div>
        </form>
      </div>

      {/* Bottom SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
        <ContactSectionBackground />
      </div>
    </div>
  );
};

export default ContactSection;
