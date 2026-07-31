import React, { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaGlobe,
  FaClipboardList,
} from "react-icons/fa";

const CheckoutForm = ({ plan, totalAmount, onBack, onContinue }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    requirement: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onContinue(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Heading */}

      <div>
        <h2 className="text-2xl font-bold text-white">Project Information</h2>

        <p className="text-white/60 mt-2">
          Tell us about your project before proceeding.
        </p>
      </div>

      {/* Name */}

      <div>
        <label className="text-white text-sm mb-2 block">Full Name *</label>

        <div className="relative">
          <FaUser className="absolute left-4 top-4 text-cyan-400" />

          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:border-cyan-400 outline-none"
          />
        </div>
      </div>

      {/* Email */}

      <div>
        <label className="text-white text-sm mb-2 block">Email *</label>

        <div className="relative">
          <FaEnvelope className="absolute left-4 top-4 text-cyan-400" />

          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:border-cyan-400 outline-none"
          />
        </div>
      </div>

      {/* Phone */}

      <div>
        <label className="text-white text-sm mb-2 block">Phone Number *</label>

        <div className="relative">
          <FaPhone className="absolute left-4 top-4 text-cyan-400" />

          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:border-cyan-400 outline-none"
          />
        </div>
      </div>

      {/* Company */}

      <div>
        <label className="text-white text-sm mb-2 block">Company Name</label>

        <div className="relative">
          <FaBuilding className="absolute left-4 top-4 text-cyan-400" />

          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company / Business"
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:border-cyan-400 outline-none"
          />
        </div>
      </div>

      {/* Existing Website */}

      <div>
        <label className="text-white text-sm mb-2 block">
          Existing Website
        </label>

        <div className="relative">
          <FaGlobe className="absolute left-4 top-4 text-cyan-400" />

          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://yourwebsite.com"
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:border-cyan-400 outline-none"
          />
        </div>
      </div>

      {/* Requirement */}

      <div>
        <label className="text-white text-sm mb-2 block">
          Project Requirement
        </label>

        <div className="relative">
          <FaClipboardList className="absolute left-4 top-5 text-cyan-400" />

          <textarea
            rows={5}
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
            placeholder="Describe your project..."
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white resize-none focus:border-cyan-400 outline-none"
          />
        </div>
      </div>

      {/* Summary */}

      <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-5">
        <div className="flex justify-between text-white/70">
          <span>Selected Package</span>
          <span>{plan.title}</span>
        </div>

        <div className="flex justify-between mt-3 text-white font-semibold">
          <span>Total Amount</span>
          <span className="text-cyan-400">₹{totalAmount.toLocaleString()}</span>
        </div>
      </div>

      {/* Buttons */}

      <div className="flex gap-4">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 border border-white/20 rounded-xl py-3 text-white hover:bg-white/10 transition flex items-center justify-center gap-2"
        >
          <FaArrowLeft />
          Back
        </button>

        <button
          type="submit"
          className="flex-1 bg-cyan-500 hover:bg-cyan-400 rounded-xl py-3 text-white font-semibold flex items-center justify-center gap-2 transition"
        >
          Continue
          <FaArrowRight />
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
