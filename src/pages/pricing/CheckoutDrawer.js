import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

import PackageDetails from "./PackageDetails";
import CheckoutForm from "./CheckoutForm";
import LoginSignup from "./Loginsignup";
import OrderSummary from "./OrderSummary";

const CheckoutDrawer = ({ open, onClose, plan }) => {
  const [step, setStep] = useState(1);

  // Shared Data
  const [priceData, setPriceData] = useState({
    subtotal: 0,
    total: 0,
    addons: [],
  });

  const [customerData, setCustomerData] = useState({});

  // Reset drawer when opened
  useEffect(() => {
    if (open) {
      setStep(1);

      setPriceData({
        subtotal: plan?.offerPrice || 0,
        total: plan?.offerPrice || 0,
        addons: [],
      });

      setCustomerData({});
    }
  }, [open, plan]);

  if (!open || !plan) return null;

  return (
    <>
      {/* Overlay */}

      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Drawer */}

      <div className="fixed top-0 right-0 h-screen w-full md:w-[550px] bg-[#081221] border-l border-white/10 z-50 flex flex-col">
        {/* Header */}

        <div className="sticky top-0 bg-[#081221] border-b border-white/10 p-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-white">{plan.title}</h2>

              <p className="text-cyan-400 text-sm mt-1">
                Website Development Package
              </p>
            </div>

            <button
              onClick={onClose}
              className="text-white hover:text-red-400 transition"
            >
              <FaTimes size={22} />
            </button>
          </div>

          {/* Step Progress */}

          <div className="flex gap-2 mt-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className={`flex-1 h-2 rounded-full transition-all ${
                  step >= item ? "bg-cyan-400" : "bg-white/10"
                }`}
              />
            ))}
          </div>

          <div className="flex justify-between text-xs text-white/60 mt-2">
            <span>Package</span>

            <span>Details</span>

            <span>Login</span>

            <span>Payment</span>
          </div>
        </div>

        {/* Body */}

        <div className="flex-1 overflow-y-auto p-6">
          {step === 1 && (
            <PackageDetails
              plan={plan}
              priceData={priceData}
              setPriceData={setPriceData}
              onContinue={() => setStep(2)}
            />
          )}

          {step === 2 && (
            <CheckoutForm
              plan={plan}
              totalAmount={priceData.total}
              onBack={() => setStep(1)}
              onContinue={(data) => {
                setCustomerData(data);
                setStep(3);
              }}
            />
          )}

          {step === 3 && (
            <LoginSignup
              onBack={() => setStep(2)}
              onContinue={() => setStep(4)}
            />
          )}

          {step === 4 && (
            <OrderSummary
              plan={plan}
              customer={customerData}
              priceData={priceData}
              onBack={() => setStep(3)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CheckoutDrawer;
