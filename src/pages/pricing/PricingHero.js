import React from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaCode,
  FaShoppingCart,
  FaCloud,
} from "react-icons/fa";

const PricingHero = () => {
  const scrollToPackages = () => {
    const section = document.getElementById("pricing-packages");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 py-24">
      {/* Background Blur */}

      <div className="absolute -top-32 -left-24 w-80 h-80 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}

          <div>
            <span className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full px-4 py-2 text-cyan-400 text-sm font-semibold">
              Transparent Pricing
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mt-6">
              Build Your Next
              <span className="block text-cyan-400">Digital Product</span>
              With Confidence
            </h1>

            <p className="mt-6 text-gray-400 text-lg leading-8">
              Whether you need a business website, e-commerce platform, SaaS
              product, CRM, ERP, or mobile app, we offer flexible pricing
              tailored to your business goals.
            </p>

            {/* Highlights */}

            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                "No Hidden Charges",
                "Source Code Included",
                "Free Deployment",
                "Dedicated Support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <FaCheckCircle className="text-green-400" />

                  {item}
                </div>
              ))}
            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-10">
              <button
                onClick={scrollToPackages}
                className="px-7 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold flex items-center gap-3 transition"
              >
                View Packages
                <FaArrowRight />
              </button>

              <button className="px-7 py-4 rounded-xl border border-white/20 hover:border-cyan-400 text-white transition">
                Book Free Consultation
              </button>
            </div>
          </div>

          {/* Right */}

          <div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur">
              <h3 className="text-white text-2xl font-bold mb-8">We Build</h3>

              <div className="space-y-5">
                <Item
                  icon={<FaCode />}
                  title="Business Websites"
                  desc="Corporate, Startup & Portfolio Websites"
                />

                <Item
                  icon={<FaShoppingCart />}
                  title="E-Commerce Solutions"
                  desc="Online Store with Payment & Orders"
                />

                <Item
                  icon={<FaCloud />}
                  title="SaaS Products"
                  desc="Custom CRM, ERP & Cloud Platforms"
                />
              </div>

              <div className="mt-8 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 p-5">
                <p className="text-cyan-300 text-sm uppercase font-semibold">
                  Starting From
                </p>

                <h2 className="text-white text-4xl font-bold mt-2">₹12,999</h2>

                <p className="text-gray-400 mt-2">
                  Professional Website Package
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Item = ({ icon, title, desc }) => (
  <div className="flex gap-4">
    <div className="w-14 h-14 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xl">
      {icon}
    </div>

    <div>
      <h4 className="text-white font-semibold">{title}</h4>

      <p className="text-gray-400 text-sm mt-1">{desc}</p>
    </div>
  </div>
);

export default PricingHero;
