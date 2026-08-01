import React, { useState } from "react";
import {
  FaFire,
  FaArrowRight,
  FaClock,
  FaHeadset,
  FaCode,
  FaCheckCircle,
  FaGift,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const PricingCard = ({ plan, onBuyNow }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      className={`relative rounded-3xl overflow-hidden border transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(6,182,212,.15)]
      ${
        plan.popular
          ? "border-cyan-400 bg-gradient-to-b from-cyan-500/10 to-slate-900"
          : "border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 hover:border-cyan-500/40"
      }`}
    >
      {/* Popular Badge */}

      {plan.popular && (
        <div className="absolute top-5 right-5">
          <div className="flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-xs font-semibold text-white shadow-lg">
            <FaFire />
            Most Popular
          </div>
        </div>
      )}

      <div className="p-8">
        {/* Offer */}
        {plan.offer?.enabled && (
          <div className="inline-flex rounded-full bg-red-500/10 border border-red-500/20 px-4 py-2 text-xs font-semibold text-red-400">
            {plan.offer.badge}
          </div>
        )}
        {/* Package */}
        <h3 className="mt-5 text-3xl font-bold text-white">{plan.title}</h3>
        <p className="mt-2 text-gray-400 text-sm">{plan.tagline}</p>
        {/* Ideal For */}
        {plan.idealFor && (
          <div className="mt-4 inline-flex rounded-full bg-white/5 px-4 py-2 text-xs text-cyan-300">
            {plan.idealFor}
          </div>
        )}
        {/* Price */}
        <div className="mt-8">
          {plan.originalPrice && !plan.custom && (
            <div className="text-gray-500 line-through text-lg">
              ₹{plan.originalPrice.toLocaleString()}
            </div>
          )}

          <div className="flex items-end gap-3 mt-1">
            <h2 className="text-5xl font-extrabold text-white">
              {plan.custom ? "Custom" : `₹${plan.offerPrice.toLocaleString()}`}
            </h2>
          </div>

          {!plan.custom && (
            <p className="mt-2 text-sm text-green-400 font-medium">
              You Save ₹
              {(plan.originalPrice - plan.offerPrice).toLocaleString()}
            </p>
          )}
        </div>
        {/* Delivery & Support */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2 text-cyan-400 text-sm">
              <FaClock />
              Delivery
            </div>

            <p className="mt-2 text-white font-semibold">{plan.delivery}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2 text-cyan-400 text-sm">
              <FaHeadset />
              Support
            </div>

            <p className="mt-2 text-white font-semibold">{plan.support}</p>
          </div>
        </div>
        {/* Technologies */}
        {plan.technologies?.length > 0 && (
          <div className="mt-8">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold">
              <FaCode />
              Technologies
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {plan.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        {/* Remaining sections will come in Part 2 */}
        {/* Features */}
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h4 className="text-white font-semibold text-lg">
              What's Included
            </h4>

            {plan.features?.length > 6 && (
              <button
                onClick={() => setShowMore(!showMore)}
                className="flex items-center gap-2 text-cyan-400 text-sm hover:text-cyan-300 transition"
              >
                {showMore ? (
                  <>
                    Show Less <FaChevronUp size={12} />
                  </>
                ) : (
                  <>
                    View All ({plan.features.length}){" "}
                    <FaChevronDown size={12} />
                  </>
                )}
              </button>
            )}
          </div>

          <div className="mt-5 space-y-4">
            {(showMore ? plan.features : plan.features?.slice(0, 6)).map(
              (feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 text-emerald-400">
                    <FaCheckCircle size={15} />
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
        {/* Bonus */}
        {plan.bonus?.length > 0 && (
          <div className="mt-8 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
            <div className="flex items-center gap-2 text-amber-400 font-semibold">
              <FaGift />
              Free Bonus
            </div>

            <div className="mt-4 space-y-3">
              {plan.bonus.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-sm text-gray-300"
                >
                  <FaCheckCircle className="text-amber-400" size={14} />

                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Payment Plan */}
        {plan.paymentPlan?.length > 0 && (
          <div className="mt-8">
            <h4 className="text-white font-semibold mb-4">Payment Plan</h4>

            <div className="space-y-3">
              {plan.paymentPlan.map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>

                  <div className="flex-1 h-px bg-white/10" />

                  <span className="text-sm text-gray-300">{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Included With Every Project */}
        <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
          <h4 className="text-white font-semibold mb-4">
            Included with Every Project
          </h4>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <FaCheckCircle className="text-cyan-400" />
              Source Code
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-300">
              <FaCheckCircle className="text-cyan-400" />
              Deployment
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-300">
              <FaCheckCircle className="text-cyan-400" />
              Documentation
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-300">
              <FaCheckCircle className="text-cyan-400" />
              Training
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-300">
              <FaCheckCircle className="text-cyan-400" />
              Basic SEO
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-300">
              <FaCheckCircle className="text-cyan-400" />
              Technical Support
            </div>
          </div>
        </div>{" "}
        {/* CTA */}
        <div className="mt-10">
          <button
            onClick={() => onBuyNow(plan)}
            className={`group w-full rounded-2xl py-4 font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3 ${
              plan.custom
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-[0_0_35px_rgba(99,102,241,.35)] hover:-translate-y-1"
                : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-[0_0_35px_rgba(6,182,212,.35)] hover:-translate-y-1"
            }`}
          >
            {plan.buttonText || "Get Started"}

            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {plan.custom ? (
            <p className="mt-4 text-center text-xs text-gray-400">
              Schedule a free consultation and receive a customized quotation.
            </p>
          ) : (
            <p className="mt-4 text-center text-xs text-gray-400">
              No hidden charges • Transparent pricing • Secure payment
            </p>
          )}
        </div>
        {/* Divider */}
        <div className="my-8 border-t border-white/10" />
        {/* Trust Badges */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center">
            <div className="text-lg font-bold text-cyan-400">100%</div>
            <p className="text-xs text-gray-400 mt-1">Source Code Ownership</p>
          </div>

          <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center">
            <div className="text-lg font-bold text-cyan-400">24×7</div>
            <p className="text-xs text-gray-400 mt-1">Technical Assistance</p>
          </div>

          <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center">
            <div className="text-lg font-bold text-cyan-400">Free</div>
            <p className="text-xs text-gray-400 mt-1">Deployment Support</p>
          </div>

          <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center">
            <div className="text-lg font-bold text-cyan-400">30 Days</div>
            <p className="text-xs text-gray-400 mt-1">Bug Fix Warranty</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
