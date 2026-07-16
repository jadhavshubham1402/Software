import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaStore,
  FaMobileAlt,
  FaLink,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

const Ecommerce = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#0A1428] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://picsum.photos/id/1060/1920/1080')",
            opacity: 0.25,
          }}
        />
        <div className="absolute inset-0 bg-[#0A1428]/80" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/30 text-cyan-400 text-sm mb-6">
                <FaShoppingCart /> E-Commerce Solutions
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                E-Commerce Solutions
                <br />
                <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
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
                src="https://picsum.photos/id/1060/600/500"
                alt="E-Commerce Solutions"
                className="rounded-3xl shadow-2xl max-w-lg border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR E-COMMERCE SOLUTIONS */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our E-Commerce Solutions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom E-Commerce Platforms",
                desc: "Fully tailored online stores built to match your brand identity and business model",
                icon: <FaShoppingCart className="text-5xl" />,
              },
              {
                title: "Multi-Vendor Marketplaces",
                desc: "Amazon-like platforms where multiple sellers can list and sell products",
                icon: <FaStore className="text-5xl" />,
              },
              {
                title: "Subscription & Membership",
                desc: "Recurring billing, membership sites, and loyalty programs",
                icon: <FaUsers className="text-5xl" />,
              },
              {
                title: "Mobile Commerce (M-Commerce)",
                desc: "Optimized mobile-first shopping experiences and progressive web apps",
                icon: <FaMobileAlt className="text-5xl" />,
              },
              {
                title: "Headless Commerce",
                desc: "Flexible, API-first architecture for modern brands and omnichannel experiences",
                icon: <FaLink className="text-5xl" />,
              },
              {
                title: "B2B E-Commerce",
                desc: "Business-to-business portals with complex pricing, quotes, and approvals",
                icon: <FaChartLine className="text-5xl" />,
              },
            ].map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 rounded-3xl p-10 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-6">{solution.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition">
                  {solution.title}
                </h3>
                <p className="text-white/70">{solution.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="py-24 bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Powerful Features Built-In
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Secure Payment Gateways",
                desc: "Razorpay, Stripe, PayPal and 50+ payment options",
                image: "https://picsum.photos/id/201/600/400",
              },
              {
                title: "Advanced Order Management",
                desc: "Real-time inventory, order tracking & fulfillment tools",
                image: "https://picsum.photos/id/251/600/400",
              },
              {
                title: "Smart Analytics Dashboard",
                desc: "Deep customer insights and sales performance tracking",
                image: "https://picsum.photos/id/1074/600/400",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl overflow-hidden h-96"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent" />
                <div className="absolute bottom-0 p-8">
                  <h3 className="text-3xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/80">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - WORKING BUTTON */}
      <section className="py-28 bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-700 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Grow Your Online Business?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Let’s build a high-converting e-commerce platform that drives real
            sales.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition flex items-center gap-3 mx-auto"
          >
            Start Your E-Commerce Project
            <span className="text-2xl">→</span>
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Ecommerce;
