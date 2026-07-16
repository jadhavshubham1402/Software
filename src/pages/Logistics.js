import React from "react";
import { motion } from "framer-motion";

const Logistics = () => {
  return (
    <div className="bg-[#0A0A0F] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Logistics Technology
                <br />
                <span className="bg-gradient-to-r from-slate-400 to-zinc-400 bg-clip-text text-transparent">
                  That Moves the World
                </span>
              </h1>
              <p className="text-2xl text-white/80 max-w-xl">
                Smart logistics solutions for efficient supply chain management,
                real-time tracking, and optimized operations.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/images/logistics-hero.png"
                alt="Logistics Technology"
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
            Our Logistics Solutions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fleet Management Systems",
                desc: "Real-time GPS tracking, route optimization, and vehicle maintenance",
                icon: "🚛",
              },
              {
                title: "Warehouse Management",
                desc: "Inventory control, order fulfillment, and warehouse automation",
                icon: "📦",
              },
              {
                title: "Supply Chain Visibility",
                desc: "End-to-end tracking and predictive analytics",
                icon: "📍",
              },
              {
                title: "Last-Mile Delivery Apps",
                desc: "Efficient delivery management and customer communication",
                icon: "🏠",
              },
              {
                title: "Freight Management",
                desc: "Multi-modal transportation and logistics coordination",
                icon: "🚢",
              },
              {
                title: "AI Route Optimization",
                desc: "Intelligent algorithms for fuel efficiency and faster delivery",
                icon: "🧭",
              },
            ].map((solution, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="group bg-white/5 border border-white/10 hover:border-slate-400/50 rounded-3xl p-10 transition-all duration-300"
              >
                <div className="text-5xl mb-6">{solution.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-slate-400 transition">
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
            Why Logistics Companies Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Real-Time Visibility",
                desc: "Track every shipment with live updates",
              },
              {
                title: "Cost Optimization",
                desc: "Reduce fuel and operational expenses",
              },
              {
                title: "Scalable Infrastructure",
                desc: "Handles peak season demands effortlessly",
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
      <section className="py-28 bg-gradient-to-r from-slate-600 to-zinc-500 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="text-xl mb-10">
            Let’s build smarter logistics solutions together.
          </p>
          <button className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition">
            Start Logistics Project →
          </button>
        </div>
      </section>
    </div>
  );
};

export default Logistics;
