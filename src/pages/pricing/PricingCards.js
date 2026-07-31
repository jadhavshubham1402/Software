import React from "react";
import PricingCard from "./PricingCard";
import { pricingPlans } from "./PricingData";

const PricingCards = ({ onBuyNow }) => {
  return (
    <section className="py-20 bg-[#081221]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}

        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-semibold">
            OUR PRICING
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-5">
            Website Development Packages
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-white/60 leading-7">
            Choose a website package that matches your business goals. Start
            small or build a complete enterprise solution with our flexible
            pricing plans.
          </p>
        </div>

        {/* Pricing Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} onBuyNow={onBuyNow} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
