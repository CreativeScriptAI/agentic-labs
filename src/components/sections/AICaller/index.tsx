import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { registerUser } from "src/libs/api";
import { detectUserCountry } from "src/libs/utils";

// Country data with flags and dial codes
const countries = [
  { name: "United States", code: "US", dialCode: "+1", flag: "🇺🇸" },
  { name: "Canada", code: "CA", dialCode: "+1", flag: "🇨🇦" },
  { name: "India", code: "IN", dialCode: "+91", flag: "🇮🇳" },
  { name: "Australia", code: "AU", dialCode: "+61", flag: "🇦🇺" },
  { name: "Germany", code: "DE", dialCode: "+49", flag: "🇩🇪" },
  { name: "Spain", code: "ES", dialCode: "+34", flag: "🇪🇸" },
  { name: "United Kingdom", code: "GB", dialCode: "+44", flag: "🇬🇧" },
  { name: "Mexico", code: "MX", dialCode: "+52", flag: "🇲🇽" },
  { name: "France", code: "FR", dialCode: "+33", flag: "🇫🇷" },
  { name: "Japan", code: "JP", dialCode: "+81", flag: "🇯🇵" },
  { name: "Italy", code: "IT", dialCode: "+39", flag: "🇮🇹" },
  { name: "Indonesia", code: "ID", dialCode: "+62", flag: "🇮🇩" },
  { name: "Philippines", code: "PH", dialCode: "+63", flag: "🇵🇭" },
  { name: "Malaysia", code: "MY", dialCode: "+60", flag: "🇲🇾" },
  { name: "Thailand", code: "TH", dialCode: "+66", flag: "🇹🇭" },
];

// Declare global gtag_report_conversion function
declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => boolean;
  }
}

interface AICallerProps {
  data?: {
    title?: string;
    subtitle?: string;
    description?: string;
    highlightedText?: string;
    buttonText?: string;
    countryCode?: string;
  };
  contactRoute?: boolean;
}

const AICaller = ({ data, contactRoute = false }: AICallerProps) => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    name: "",
    email: "",
    countryCode: "+91",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(
    countries.find((country) => country.dialCode === "+91") || countries[0]
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDetectingCountry, setIsDetectingCountry] = useState(true);

  const phone_number = "+16504147082";

  // Detect user's country on component mount
  useEffect(() => {
    const detectCountry = async () => {
      try {
        const countryCode = await detectUserCountry();
        console.log("countryCode", countryCode);
        if (countryCode) {
          const detectedCountry = countries.find(
            (country) => country.code === countryCode
          );
          if (detectedCountry) {
            setSelectedCountry(detectedCountry);
            setFormData((prev) => ({
              ...prev,
              countryCode: detectedCountry.dialCode,
            }));
          }
        }
      } catch (error) {
        console.error("Error detecting country:", error);
      } finally {
        setIsDetectingCountry(false);
      }
    };

    detectCountry();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCountrySelect = (country: (typeof countries)[0]) => {
    setSelectedCountry(country);
    setFormData((prev) => ({ ...prev, countryCode: country.dialCode }));
    setIsDropdownOpen(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Check if any field is empty
    if (
      !formData.phoneNumber.trim() ||
      !formData.name.trim() ||
      !formData.email.trim()
    ) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const fullPhoneNumber = `${formData.countryCode}${formData.phoneNumber}`;
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: fullPhoneNumber,
      };

      console.log("Submitting demo request:", submissionData);

      const result = await registerUser(submissionData);

      if (result.success) {
        // Track conversion for Google Ads
        if (typeof window !== "undefined" && window.gtag_report_conversion) {
          const currentUrl = window.location.href + "?success=true";
          window.gtag_report_conversion(currentUrl);
        }

        setFormData({
          phoneNumber: "",
          name: "",
          email: "",
          countryCode: "+91",
        });
        alert(
          "Demo request submitted successfully! Our AI agent will call you within 30 seconds."
        );
      } else {
        alert(
          "We noticed this number was used before. Please try a different number to try our Voice Agent Demo."
        );
        throw new Error(result.error || "Registration failed");
      }
    } catch (err) {
      console.log("error msg", err);
      alert(
        "We noticed this number was used before. Please try a different number to try our Voice Agent Demo."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className={`w-full ${
        contactRoute ? "py-16" : "sm:py-16 lg:py-20"
      } bg-[#F9F6F4] border border-[#e7e6e4] rounded-none`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
          {/* Left Section - Text and Form */}
          <div className="w-full lg:w-1/2">
            {/* Mobile Circle Image - Only visible on mobile */}
            <div className="flex justify-center mb-6 lg:hidden">
              <div className="relative  bg-[#FFD60A] rounded-full">
                <Image
                  src="/images/aicallermobile.png"
                  alt="AI Caller Mobile"
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              </div>
            </div>

            {/* Live Demo Label */}
            <div className="mb-4 flex justify-center lg:justify-start">
              <span className="inline-block text-red-500 font-geist uppercase tracking-[0.02em] text-[12px] font-normal">
                Live Demo
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-alte font-normal tracking-[-0.04em] text-slate-800 mb-4 leading-[1.2] text-left"
            >
              {data?.title || "Get a live demo from our AI calling agent"}
            </h2>

            {/* Description */}
            <p className="font-alte text-[15px] leading-[1.5] tracking-[-0.04em] text-slate-600 mb-8 font-normal text-left">
              {data?.subtitle ||
                "Drop your phone number and email our AI agent will "}
              <span className="text-blue-600 font-normal">
                {data?.highlightedText ||
                  "give you a real call in under 30 seconds"}
              </span>
            </p>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="relative space-y-4 bg-white border border-[#e7e6e4] p-4 rounded-none md:block hidden"
            >
              {/* Phone Number Row */}
              <div className="flex gap-3">
                <div className="flex relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    disabled={isDetectingCountry}
                    className="w-full px-4 py-1 font-alte text-[15px] tracking-[-0.04em] text-gray-700 bg-white rounded-none border border-[#e7e6e4] focus:border-blue-500 focus:outline-none transition-colors duration-200 cursor-pointer flex items-center justify-between disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="flex items-center gap-1">
                      {isDetectingCountry ? (
                        <>
                          <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                          <span className="font-normal text-gray-500">
                            Detecting...
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="text-base">
                            {selectedCountry.flag}
                          </span>
                          <span className="font-normal text-gray-700">
                            {selectedCountry.dialCode}
                          </span>
                        </>
                      )}
                    </div>
                    {!isDetectingCountry && (
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#e7e6e4] rounded-none z-50 max-h-60 overflow-y-auto overflow-x-hidden">
                      {countries.map((country) => (
                        <button
                          key={country.code}
                          type="button"
                          onClick={() => handleCountrySelect(country)}
                          className="w-full px-3 py-3 font-alte text-[15px] tracking-[-0.04em] text-left hover:bg-[#0A1128]/[0.04] flex items-center gap-2 transition-colors duration-150 border-b border-[#e7e6e4] last:border-b-0 min-w-0"
                        >
                          <span className="text-base flex-shrink-0">
                            {country.flag}
                          </span>
                          <span className="font-normal text-gray-700 truncate">
                            {country.dialCode}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Your Phone Number"
                    className="w-full px-4 py-3 font-alte text-[15px] tracking-[-0.04em] text-gray-700 bg-white rounded-none border border-[#e7e6e4] focus:border-blue-500 focus:outline-none transition-colors duration-200"
                    required
                  />
                </div>
              </div>

              {/* Name and Email Row */}
              <div className="flex gap-3">
                <div className="flex-1">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className="w-full px-4 py-3 font-alte text-[15px] tracking-[-0.04em] text-gray-700 bg-white rounded-none border border-[#e7e6e4] focus:border-blue-500 focus:outline-none transition-colors duration-200"
                    required
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full px-4 py-3 font-alte text-[15px] tracking-[-0.04em] text-gray-700 bg-white rounded-none border border-[#e7e6e4] focus:border-blue-500 focus:outline-none transition-colors duration-200"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center py-4 font-geist uppercase tracking-[0.02em] text-[15px] bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-normal rounded-none transition-colors duration-200 focus:outline-none"
              >
                {isSubmitting
                  ? "Submitting..."
                  : data?.buttonText || "Call Me Now"}
              </button>
            </form>
            {/* Call me button on mobile screen */}
            <div className="block lg:hidden">
              <button
                type="button"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center py-4 font-geist uppercase tracking-[0.02em] text-[15px] bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-normal rounded-none transition-colors duration-200 focus:outline-none"
                onClick={() => {
                  window.location.href = `tel:${phone_number}`;
                }}
              >
                {isSubmitting
                  ? "Submitting..."
                  : data?.buttonText || "Call Me Now"}
              </button>
            </div>
          </div>

          {/* Right Section - Illustration */}
          <div className="hidden lg:flex w-full lg:w-1/2 justify-center">
            <div className="relative">
              {/* Placeholder for pixel art illustration */}
              <div className="rounded-none flex items-center justify-center ">
                <Image
                  src="/images/aicaller.png"
                  alt="AI Caller"
                  width={245}
                  height={416}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICaller;
