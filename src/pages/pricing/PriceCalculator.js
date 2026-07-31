import React, { useEffect, useState } from "react";
import {
  FaPlus,
  FaMinus,
  FaPalette,
  FaCreditCard,
  FaEnvelope,
  FaSearch,
  FaBlog,
} from "react-icons/fa";

const ADDONS = [
  {
    id: "logo",
    title: "Professional Logo Design",
    icon: <FaPalette />,
    price: 999,
  },
  {
    id: "payment",
    title: "Payment Gateway Integration",
    icon: <FaCreditCard />,
    price: 2999,
  },
  {
    id: "email",
    title: "Business Email Setup",
    icon: <FaEnvelope />,
    price: 499,
  },
  {
    id: "blog",
    title: "Blog Module",
    icon: <FaBlog />,
    price: 1999,
  },
  {
    id: "seo",
    title: "Premium SEO Setup",
    icon: <FaSearch />,
    price: 2999,
  },
];

const PriceCalculator = ({ plan, priceData, setPriceData }) => {
  const [pages, setPages] = useState(0);

  const [selectedAddons, setSelectedAddons] = useState([]);

  const toggleAddon = (addon) => {
    const exists = selectedAddons.find((item) => item.id === addon.id);

    if (exists) {
      setSelectedAddons(selectedAddons.filter((item) => item.id !== addon.id));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  useEffect(() => {
    const addonTotal = selectedAddons.reduce(
      (sum, item) => sum + item.price,
      0,
    );

    const pageTotal = pages * 500;

    const subtotal = (plan.offerPrice || 0) + addonTotal + pageTotal;

    const gst = Math.round(subtotal * 0.18);

    const total = subtotal + gst;

    setPriceData({
      pages,
      addons: selectedAddons,
      subtotal,
      gst,
      total,
    });
  }, [pages, selectedAddons, plan, setPriceData]);

  return (
    <div className="space-y-6">
      {/* Extra Pages */}

      <div className="bg-white/5 rounded-xl p-5 border border-white/10">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-white font-semibold">Extra Pages</h4>

            <p className="text-white/50 text-sm">₹500 / page</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setPages(Math.max(0, pages - 1))}
              className="w-9 h-9 rounded-lg bg-white/10 text-white"
            >
              <FaMinus size={12} />
            </button>

            <span className="text-white font-semibold text-lg w-6 text-center">
              {pages}
            </span>

            <button
              onClick={() => setPages(pages + 1)}
              className="w-9 h-9 rounded-lg bg-cyan-500 text-white"
            >
              <FaPlus size={12} />
            </button>
          </div>
        </div>
      </div>

      {/* Addons */}

      <div className="space-y-3">
        {ADDONS.map((addon) => {
          const active = selectedAddons.some((item) => item.id === addon.id);

          return (
            <div
              key={addon.id}
              onClick={() => toggleAddon(addon)}
              className={`cursor-pointer rounded-xl border p-4 transition ${
                active
                  ? "border-cyan-400 bg-cyan-500/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="text-cyan-400 text-lg">{addon.icon}</div>

                  <div>
                    <h4 className="text-white">{addon.title}</h4>

                    <p className="text-white/50 text-sm">
                      ₹{addon.price.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div
                  className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                    active ? "bg-cyan-500 border-cyan-500" : "border-white/20"
                  }`}
                >
                  {active && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary */}

      <div className="rounded-xl bg-cyan-500/10 border border-cyan-500/20 p-5">
        <div className="flex justify-between text-white/70">
          <span>Package</span>
          <span>₹{plan.offerPrice.toLocaleString()}</span>
        </div>

        <div className="flex justify-between text-white/70 mt-2">
          <span>Extra Pages</span>
          <span>₹{pages * 500}</span>
        </div>

        <div className="flex justify-between text-white/70 mt-2">
          <span>Add-ons</span>
          <span>
            ₹{selectedAddons.reduce((sum, item) => sum + item.price, 0)}
          </span>
        </div>

        <hr className="border-white/10 my-4" />

        <div className="flex justify-between text-white">
          <span>Subtotal</span>
          <span>₹{priceData.subtotal}</span>
        </div>

        <div className="flex justify-between text-white mt-2">
          <span>GST (18%)</span>
          <span>₹{priceData.gst}</span>
        </div>

        <div className="flex justify-between text-xl font-bold text-cyan-400 mt-4">
          <span>Total</span>
          <span>₹{priceData.total}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;
