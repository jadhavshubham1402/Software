import React from "react";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaCreditCard,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
} from "react-icons/fa";

const OrderSummary = ({ plan, customer, priceData, onBack, onPay }) => {
  return (
    <div className="space-y-8">
      {/* Heading */}

      <div>
        <h2 className="text-2xl font-bold text-white">Order Summary</h2>

        <p className="text-white/60 mt-2">
          Review your package before payment.
        </p>
      </div>

      {/* Package */}

      <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">
          Selected Package
        </h3>

        <div className="flex justify-between">
          <div>
            <h4 className="text-white font-semibold">{plan.title}</h4>

            <p className="text-white/50 mt-1">{plan.tagline}</p>
          </div>

          <h3 className="text-cyan-400 text-2xl font-bold">
            ₹{plan.offerPrice.toLocaleString()}
          </h3>
        </div>
      </div>

      {/* Customer */}

      <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
        <h3 className="text-lg text-white font-semibold mb-5">
          Customer Details
        </h3>

        <div className="space-y-3">
          <Item icon={<FaUser />} title={customer.fullName} />

          <Item icon={<FaEnvelope />} title={customer.email} />

          <Item icon={<FaPhone />} title={customer.phone} />

          {customer.company && (
            <Item icon={<FaBuilding />} title={customer.company} />
          )}
        </div>
      </div>

      {/* Addons */}

      {priceData.addons.length > 0 && (
        <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
          <h3 className="text-lg text-white font-semibold mb-5">
            Selected Add-ons
          </h3>

          <div className="space-y-3">
            {priceData.addons.map((addon) => (
              <div
                key={addon.id}
                className="flex justify-between text-white/70"
              >
                <span>{addon.title}</span>

                <span>₹{addon.price.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bill */}

      <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-6">
        <h3 className="text-white font-semibold mb-5">Payment Summary</h3>

        <div className="space-y-3">
          <div className="flex justify-between text-white/70">
            <span>Subtotal</span>

            <span>₹{priceData.subtotal.toLocaleString()}</span>
          </div>

          <div className="flex justify-between text-white/70">
            <span>GST (18%)</span>

            <span>₹{priceData.gst.toLocaleString()}</span>
          </div>

          <hr className="border-white/10" />

          <div className="flex justify-between text-xl text-white font-bold">
            <span>Total</span>

            <span className="text-cyan-400">
              ₹{priceData.total.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Buttons */}

      <div className="flex gap-4">
        <button
          onClick={onBack}
          className="flex-1 border border-white/10 rounded-xl py-4 text-white flex justify-center items-center gap-2 hover:bg-white/5"
        >
          <FaArrowLeft />
          Back
        </button>

        <button
          onClick={onPay}
          className="flex-1 bg-cyan-500 hover:bg-cyan-400 rounded-xl py-4 text-white font-semibold flex justify-center items-center gap-2"
        >
          <FaCreditCard />
          Pay Now
        </button>
      </div>

      {/* Security */}

      <div className="flex items-center justify-center gap-2 text-green-400 text-sm">
        <FaCheckCircle />
        Secure Payment • SSL Protected
      </div>
    </div>
  );
};

const Item = ({ icon, title }) => (
  <div className="flex items-center gap-3 text-white/80">
    <div className="text-cyan-400">{icon}</div>

    {title}
  </div>
);

export default OrderSummary;
