import React, { useState } from "react";
import {
  FaCheckCircle,
  FaGift,
  FaChevronDown,
  FaChevronUp,
  FaArrowRight,
} from "react-icons/fa";
import PriceCalculator from "./PriceCalculator";

const PackageDetails = ({ plan, priceData, setPriceData, onContinue }) => {
  const [showCalculator, setShowCalculator] = useState(true);

  return (
    <div className="space-y-8">
      {/* Package Card */}

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-white">{plan.title}</h2>

            <p className="text-white/60 mt-2">{plan.tagline}</p>
          </div>

          <div className="text-right">
            {plan.originalPrice && (
              <p className="text-white/40 line-through">
                ₹{plan.originalPrice.toLocaleString()}
              </p>
            )}

            <h3 className="text-4xl font-bold text-cyan-400">
              {plan.offerPrice
                ? `₹${plan.offerPrice.toLocaleString()}`
                : "Custom"}
            </h3>
          </div>
        </div>
      </div>

      {/* Features */}

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">
          What's Included
        </h3>

        <div className="space-y-3">
          {plan.features.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <FaCheckCircle className="text-green-400" />

              <span className="text-white/80">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Free Bonus */}

      <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">
        <div className="flex items-center gap-2">
          <FaGift className="text-cyan-400" />

          <h3 className="text-lg font-semibold text-white">Free Bonus</h3>
        </div>

        <div className="mt-4 space-y-2">
          {plan.bonus.map((item, index) => (
            <div key={index} className="text-white/70">
              • {item}
            </div>
          ))}
        </div>
      </div>

      {/* Calculator */}

      <div className="rounded-2xl border border-white/10 overflow-hidden">
        <button
          onClick={() => setShowCalculator(!showCalculator)}
          className="w-full flex justify-between items-center p-5 text-white hover:bg-white/5"
        >
          <span className="font-semibold">Customize Package</span>

          {showCalculator ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        {showCalculator && (
          <div className="border-t border-white/10 p-5">
            <PriceCalculator
              plan={plan}
              priceData={priceData}
              setPriceData={setPriceData}
            />
          </div>
        )}
      </div>

      {/* Continue */}

      <button
        onClick={onContinue}
        className="w-full bg-cyan-500 hover:bg-cyan-400 rounded-xl py-4 text-white font-semibold flex justify-center items-center gap-3 transition"
      >
        Continue
        <FaArrowRight />
      </button>
    </div>
  );
};

export default PackageDetails;
