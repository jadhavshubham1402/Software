import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaTruck,
  FaWarehouse,
  FaMapMarkerAlt,
  FaHome,
  FaShip,
  FaRoute,
  FaTachometerAlt,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

const Logistics = () => {
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
            backgroundImage: "url('/images/logistics1.jpg')",
            opacity: 0.65,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1428]/90 via-[#0A1428]/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm mb-6">
                <FaTruck /> Logistics Technology
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                Logistics Technology That{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                  Moves the World
                </span>
              </h1>

              <p className="text-2xl text-white/80 max-w-xl mb-10">
                Intelligent logistics solutions for efficient supply chain
                management, real-time visibility, and optimized operations.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/images/logistics2.jpg"
                alt="Logistics Technology"
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
            { number: "75+", label: "Logistics Projects" },
            { number: "35%", label: "Avg Cost Reduction" },
            { number: "99.8%", label: "Delivery Accuracy" },
            { number: "12M+", label: "Shipments Tracked" },
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

      {/* OUR LOGISTICS SOLUTIONS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Logistics Solutions</h2>
            <p className="text-xl text-white/70">
              Smart technology for modern supply chains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fleet Management Systems",
                desc: "Real-time GPS tracking, route optimization, fuel management, and predictive maintenance.",
                icon: <FaTruck className="text-5xl" />,
              },
              {
                title: "Warehouse Management",
                desc: "Advanced inventory control, automated order fulfillment, and warehouse optimization.",
                icon: <FaWarehouse className="text-5xl" />,
              },
              {
                title: "Supply Chain Visibility",
                desc: "End-to-end tracking with predictive analytics and proactive exception management.",
                icon: <FaMapMarkerAlt className="text-5xl" />,
              },
              {
                title: "Last-Mile Delivery Apps",
                desc: "Driver apps, real-time customer communication, and efficient delivery management.",
                icon: <FaHome className="text-5xl" />,
              },
              {
                title: "Freight & Multimodal Management",
                desc: "Coordinated sea, air, road, and rail logistics operations.",
                icon: <FaShip className="text-5xl" />,
              },
              {
                title: "AI Route Optimization",
                desc: "Intelligent algorithms that reduce costs and improve delivery speed.",
                icon: <FaRoute className="text-5xl" />,
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

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Logistics Companies Trust Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaTachometerAlt className="text-5xl" />,
                title: "Real-Time Visibility",
                desc: "Complete transparency with live tracking, alerts, and predictive insights.",
              },
              {
                icon: <FaShieldAlt className="text-5xl" />,
                title: "Operational Efficiency",
                desc: "Significant reduction in costs, fuel usage, and delivery times.",
              },
              {
                icon: <FaRoute className="text-5xl" />,
                title: "Scalable Solutions",
                desc: "Infrastructure that grows with your business and handles peak demands.",
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
            Ready to Optimize Your Logistics?
          </h2>
          <p className="text-2xl text-white/90 mb-12">
            Let’s build smarter, faster, and more efficient supply chain
            solutions.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-7 rounded-3xl font-semibold text-2xl hover:bg-white/95 transition flex items-center gap-4 mx-auto"
          >
            Start Your Logistics Project
            <FaArrowRight />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Logistics;
