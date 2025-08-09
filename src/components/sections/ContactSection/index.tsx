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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          description: formData.message,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error((data as any).message || "Submission failed");
      }

      setFormData({ email: "", message: "" });
      alert("Thanks! We'll be in touch soon.");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="relative py-12 sm:py-16 lg:py-20"
      style={{
        backgroundColor: "#F9F6F4",
        width: "calc(100% + 2rem)",
        marginLeft: "-1rem",
        marginRight: "-1rem",
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <p className="text-red-500 font-medium text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 px-4">
            WE&apos;LL PLUG IT INTO YOUR WORKFLOW IN UNDER 48HRS.
          </p>
          <h2 className="text-center text-xl sm:text-2xl lg:text-[32px] font-normal text-[#0A1128] tracking-[-0.32px] lg:tracking-[-0.64px] font-sfpro px-4">
            Free your team.
          </h2>
          <div className="text-center text-xl sm:text-2xl lg:text-[32px] font-mondwest font-normal text-[#0A1128] tracking-[-0.32px] lg:tracking-[-0.64px] font-sfpro px-4">
            Build your first <span className="text-blue-600">AI agent</span>{" "}
            today!
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 sm:space-y-5 max-w-xl mx-auto z-1"
        >
          {/* Email Input */}
          <div className="w-full">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your email address"
              className="w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-700 bg-white rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
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
              className="w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-700 bg-white rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors duration-200 resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex w-full">
            <button
              type="submit"
              className="flex w-full justify-center bg-blue-600 text-white font-medium py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Book a Free Consultation"}
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
