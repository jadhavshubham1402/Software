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
  FaShieldAlt,
  FaTachometerAlt,
  FaArrowRight,
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
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/ecommerce1.jpg')",
            opacity: 0.65,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1428]/90 via-[#0A1428]/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm mb-6">
                <FaShoppingCart /> E-Commerce Solutions
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                E-Commerce Solutions That{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                  Drive Sales
                </span>
              </h1>

              <p className="text-2xl text-white/80 max-w-xl mb-10">
                High-converting, scalable, and beautifully designed online
                stores that deliver exceptional shopping experiences and
                business growth.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/images/ecommerce2.jpg"
                alt="E-Commerce Solutions"
                className="rounded-3xl shadow-2xl max-w-lg border border-white/10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="border-b border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "120+", label: "Stores Delivered" },
            { number: "3.2x", label: "Avg Revenue Growth" },
            { number: "98%", label: "Conversion Focus" },
            { number: "50+", label: "Countries Served" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border-r border-white/10 last:border-0"
            >
              <p className="text-4xl font-bold text-cyan-400">{stat.number}</p>
              <p className="text-white/70 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* OUR E-COMMERCE SOLUTIONS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our E-Commerce Solutions
            </h2>
            <p className="text-xl text-white/70">
              Tailored platforms for every type of online business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom E-Commerce Platforms",
                desc: "Fully tailored online stores built to match your unique brand identity and business model.",
                icon: <FaShoppingCart className="text-5xl" />,
              },
              {
                title: "Multi-Vendor Marketplaces",
                desc: "Powerful Amazon-like platforms enabling multiple sellers to list and manage products.",
                icon: <FaStore className="text-5xl" />,
              },
              {
                title: "Subscription & Membership",
                desc: "Recurring billing systems, membership portals, and loyalty programs.",
                icon: <FaUsers className="text-5xl" />,
              },
              {
                title: "Mobile Commerce (M-Commerce)",
                desc: "Mobile-first shopping experiences and high-performance Progressive Web Apps.",
                icon: <FaMobileAlt className="text-5xl" />,
              },
              {
                title: "Headless Commerce",
                desc: "Flexible, API-first architecture for omnichannel and modern brand experiences.",
                icon: <FaLink className="text-5xl" />,
              },
              {
                title: "B2B E-Commerce",
                desc: "Business portals with complex pricing, quotes, approvals, and bulk ordering.",
                icon: <FaChartLine className="text-5xl" />,
              },
            ].map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-white/5 hover:bg-gradient-to-br hover:from-white/10 hover:to-cyan-400/5 border border-white/10 hover:border-cyan-400/50 rounded-3xl p-10 transition-all duration-500"
              >
                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{solution.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="py-24 bg-black/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Powerful Features Built-In
            </h2>
            <p className="text-xl text-white/70">
              Everything you need to succeed online
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Secure Payment Gateways",
                desc: "Razorpay, Stripe, PayPal & 50+ integrated payment options",
                image: "/images/ecommerce3.jpg",
              },
              {
                title: "Advanced Order Management",
                desc: "Real-time inventory, order tracking, and smart fulfillment tools",
                image: "/images/ecommerce4.jpg",
              },
              {
                title: "Smart Analytics Dashboard",
                desc: "Deep customer insights, sales performance, and business intelligence",
                image: "/images/ecommerce5.jpg",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl overflow-hidden h-96 shadow-xl"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105 duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
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

      {/* WHY CHOOSE US */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Businesses Choose Our E-Commerce Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaShieldAlt className="text-5xl" />,
                title: "Secure & Compliant",
                desc: "PCI DSS compliant with advanced fraud protection and secure checkout.",
              },
              {
                icon: <FaTachometerAlt className="text-5xl" />,
                title: "Blazing Fast Performance",
                desc: "Optimized for speed, SEO, and excellent user experience on all devices.",
              },
              {
                icon: <FaChartLine className="text-5xl" />,
                title: "Conversion Focused",
                desc: "Designed specifically to increase sales, average order value, and retention.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-cyan-400/50 transition group text-center"
              >
                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 bg-gradient-to-br from-cyan-600 via-teal-600 to-emerald-700 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Scale Your Online Business?
          </h2>
          <p className="text-2xl text-white/90 mb-12">
            Let’s build a high-converting, beautiful, and powerful e-commerce
            platform that drives real results.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-7 rounded-3xl font-semibold text-2xl hover:bg-white/95 transition flex items-center gap-4 mx-auto"
          >
            Start Your E-Commerce Project
            <FaArrowRight />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Ecommerce;
