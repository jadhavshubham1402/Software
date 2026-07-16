import React from "react";
import { motion } from "framer-motion";

const Ecommerce = () => {
  return (
    <div className="bg-[#0A0A0F] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                E-Commerce Solutions
                <br />
                <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                  That Drive Sales
                </span>
              </h1>
              <p className="text-2xl text-white/80 max-w-xl">
                High-converting online stores with seamless shopping experiences
                and powerful backend management.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/images/ecommerce-hero.png"
                alt="E-Commerce Solutions"
                className="rounded-3xl shadow-2xl max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our E-Commerce Solutions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom E-Commerce Platforms",
                desc: "Tailored online stores built for your brand and products",
                icon: "🛒",
              },
              {
                title: "Multi-Vendor Marketplaces",
                desc: "Platforms like Amazon with multiple sellers",
                icon: "🏬",
              },
              {
                title: "Subscription Commerce",
                desc: "Recurring billing and membership platforms",
                icon: "♻️",
              },
              {
                title: "Mobile Commerce (M-Commerce)",
                desc: "Optimized shopping experience on mobile devices",
                icon: "📱",
              },
              {
                title: "Headless Commerce",
                desc: "Flexible, API-first architecture for modern brands",
                icon: "🔗",
              },
              {
                title: "B2B E-Commerce",
                desc: "Business-to-business portals with complex pricing",
                icon: "💼",
              },
            ].map((solution, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="group bg-white/5 border border-white/10 hover:border-rose-400/50 rounded-3xl p-10 transition-all duration-300"
              >
                <div className="text-5xl mb-6">{solution.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-rose-400 transition">
                  {solution.title}
                </h3>
                <p className="text-white/70">{solution.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">
            Why E-Commerce Businesses Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "High Conversion Rates",
                desc: "Optimized checkout flows and user experience",
              },
              {
                title: "Scalable Architecture",
                desc: "Handles traffic spikes during sales events",
              },
              {
                title: "Advanced Analytics",
                desc: "Deep insights into customer behavior and sales",
              },
            ].map((benefit, i) => (
              <div key={i} className="text-center">
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-white/70">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gradient-to-r from-rose-600 to-pink-500 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Grow Your Online Business?
          </h2>
          <p className="text-xl mb-10">
            Let’s build an e-commerce platform that converts.
          </p>
          <button className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition">
            Start Your E-Commerce Project →
          </button>
        </div>
      </section>
    </div>
  );
};

export default Ecommerce;
