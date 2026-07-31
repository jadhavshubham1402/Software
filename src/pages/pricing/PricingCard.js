import React from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaFire,
  FaClock,
  FaFileAlt,
  FaHeadset,
  FaStar,
} from "react-icons/fa";

const PricingCard = ({ plan, onBuyNow }) => {
  return (
    <div
      className={`relative rounded-3xl border backdrop-blur-md overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ${
        plan.popular
          ? "border-cyan-400 bg-cyan-500/10"
          : "border-white/10 bg-white/5 hover:border-cyan-400/40"
      }`}
    >
      {/* Popular Badge */}

      {plan.popular && (
        <div className="absolute top-5 right-5 bg-cyan-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
          <FaStar size={10} />
          Most Popular
        </div>
      )}

      {/* Discount */}

      {plan.discount && (
        <div className="absolute top-5 left-5 bg-red-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
          <FaFire size={10} />
          {plan.discount}
        </div>
      )}

      <div className="p-8 flex flex-col h-full">
        {/* Package */}

        <div className="mt-8">
          <h3 className="text-2xl font-bold text-white">{plan.title}</h3>

          <p className="text-white/60 mt-2 text-sm">{plan.tagline}</p>
        </div>

        {/* Price */}

        <div className="mt-6">
          {plan.originalPrice && (
            <p className="text-white/40 line-through">
              ₹{plan.originalPrice.toLocaleString()}
            </p>
          )}

          <div className="flex items-end gap-2">
            <h2 className="text-5xl font-bold text-cyan-400">
              {plan.offerPrice
                ? `₹${plan.offerPrice.toLocaleString()}`
                : "Custom"}
            </h2>
          </div>
        </div>

        {/* Quick Info */}

        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-3 text-white/70">
            <FaFileAlt className="text-cyan-400" />

            {plan.pages}
          </div>

          <div className="flex items-center gap-3 text-white/70">
            <FaClock className="text-cyan-400" />

            {plan.delivery}
          </div>

          <div className="flex items-center gap-3 text-white/70">
            <FaHeadset className="text-cyan-400" />

            {plan.support}
          </div>
        </div>

        <div className="border-t border-white/10 my-8"></div>

        {/* Features */}

        <div className="space-y-3 flex-1">
          {plan.features.slice(0, 6).map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />

              <span className="text-white/80 text-sm">{item}</span>
            </div>
          ))}
        </div>

        {/* Free Bonus */}

        <div className="mt-8 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 p-4">
          <h4 className="text-cyan-300 font-semibold">🎁 Free Bonus</h4>

          <p className="text-white/60 text-sm mt-2">
            {plan.bonus.length} Complimentary Services Included
          </p>
        </div>

        {/* Button */}

        <button
          onClick={() => onBuyNow(plan)}
          className="mt-8 bg-cyan-500 hover:bg-cyan-400 rounded-xl py-4 text-white font-semibold flex justify-center items-center gap-3 transition-all duration-300"
        >
          {plan.offerPrice ? "Buy Now" : "Contact Sales"}

          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
