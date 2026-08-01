import React, { useState } from "react";
import {
  FaGlobe,
  FaShoppingCart,
  FaCloud,
  FaUsers,
  FaBuilding,
  FaMobileAlt,
  FaArrowRight,
  FaFire,
} from "react-icons/fa";
import { pricingData } from "./PricingData";

const services = [
  {
    id: "website",
    title: "Website",
    icon: <FaGlobe />,
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    icon: <FaShoppingCart />,
  },
  {
    id: "saas",
    title: "SaaS",
    icon: <FaCloud />,
  },
  {
    id: "crm",
    title: "CRM",
    icon: <FaUsers />,
  },
  {
    id: "erp",
    title: "ERP",
    icon: <FaBuilding />,
  },
  {
    id: "mobile",
    title: "Mobile",
    icon: <FaMobileAlt />,
  },
];

const ServiceSection = ({ onBuyNow }) => {
  const [selectedService, setSelectedService] = useState("website");

  const currentService = pricingData[selectedService];

  return (
    <section id="pricing-packages" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">Choose Your Service</h2>

          <p className="text-gray-400 mt-3">
            Select your preferred solution and explore our pricing plans.
          </p>
        </div>

        {/* Tabs */}

        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl transition ${
                selectedService === service.id
                  ? "bg-cyan-500 text-white"
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              {service.icon}

              {service.title}
            </button>
          ))}
        </div>

        {/* Service Title */}

        <div className="text-center mt-14">
          <h3 className="text-3xl text-white font-bold">
            {currentService.title}
          </h3>

          <p className="text-gray-400 mt-3">{currentService.description}</p>
        </div>

        {/* Pricing Cards */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">
          {currentService.packages.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl border transition hover:-translate-y-2 duration-300 ${
                plan.popular
                  ? "border-cyan-400 bg-cyan-500/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {/* Popular */}

              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-cyan-500 text-white px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <FaFire />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-7">
                {/* Offer */}

                {plan.offer?.enabled && (
                  <span className="inline-block bg-red-500/10 text-red-400 text-xs px-3 py-1 rounded-full mb-5">
                    {plan.offer.badge}
                  </span>
                )}

                <h3 className="text-2xl font-bold text-white">{plan.title}</h3>

                <p className="text-gray-400 mt-2 text-sm">{plan.tagline}</p>

                <div className="mt-6">
                  {plan.originalPrice && (
                    <p className="text-gray-500 line-through">
                      ₹{plan.originalPrice.toLocaleString()}
                    </p>
                  )}

                  <h2 className="text-4xl font-bold text-cyan-400">
                    {plan.custom
                      ? "Custom"
                      : `₹${plan.offerPrice.toLocaleString()}`}
                  </h2>
                </div>

                {/* Features */}

                <div className="space-y-3 mt-8">
                  {plan.features?.slice(0, 6).map((feature, index) => (
                    <div key={index} className="text-gray-300 text-sm">
                      ✓ {feature}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onBuyNow(plan)}
                  className="w-full mt-8 bg-cyan-500 hover:bg-cyan-400 rounded-xl py-3 text-white font-semibold flex justify-center items-center gap-2 transition"
                >
                  {plan.buttonText || "Buy Now"}

                  <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
