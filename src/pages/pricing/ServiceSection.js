import React, { useState } from "react";
import { pricingData } from "./PricingData";
import ServiceTabs from "./ServiceTab";
import PricingCard from "./PricingCard";
import { FaArrowRight } from "react-icons/fa";

const ServiceSection = ({ onBuyNow }) => {
  const [selectedService, setSelectedService] = useState("website");

  const currentService = pricingData[selectedService];

  return (
    <section id="pricing-packages" className="relative py-24">
      {/* Background Blur */}
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold">
            Pricing Plans
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white leading-tight">
            Choose the Perfect Solution
            <span className="text-cyan-400"> for Your Business</span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg">
            Transparent pricing with no hidden costs. Choose the package that
            best fits your business goals.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <ServiceTabs
            selectedService={selectedService}
            setSelectedService={setSelectedService}
          />
        </div>

        {/* Current Service */}
        <div className="text-center mt-20">
          <h3 className="text-4xl font-bold text-white">
            {currentService.title}
          </h3>

          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            {currentService.description}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid xl:grid-cols-4 lg:grid-cols-2 gap-8 mt-16">
          {currentService.packages.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              onBuyNow={onBuyNow}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24">
          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-10 text-center">
            <h3 className="text-3xl font-bold text-white">
              Need a Custom Software Solution?
            </h3>

            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Every business is unique. Our experts can build a completely
              customized solution tailored to your workflow and business goals.
            </p>

            <button className="mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition text-white font-semibold inline-flex items-center gap-3">
              Schedule Free Consultation
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
