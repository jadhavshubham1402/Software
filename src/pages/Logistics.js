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
      <section className="relative pt-32 pb-28 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/logistics1.jpg')",
            opacity: 0.75,
          }}
        />
        <div className="absolute inset-0 bg-[#0A1428]/80" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/30 text-cyan-400 text-sm mb-6">
                <FaTruck /> Logistics Technology
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Logistics Technology
                <br />
                <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
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
                src="/images/logistics2.jpg"
                alt="Logistics Technology"
                className="rounded-3xl shadow-2xl max-w-lg border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR LOGISTICS SOLUTIONS */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Logistics Solutions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fleet Management Systems",
                desc: "Real-time GPS tracking, route optimization, fuel management, and vehicle maintenance",
                icon: <FaTruck className="text-5xl" />,
              },
              {
                title: "Warehouse Management",
                desc: "Advanced inventory control, order fulfillment, and warehouse automation",
                icon: <FaWarehouse className="text-5xl" />,
              },
              {
                title: "Supply Chain Visibility",
                desc: "End-to-end tracking with predictive analytics and exception management",
                icon: <FaMapMarkerAlt className="text-5xl" />,
              },
              {
                title: "Last-Mile Delivery Apps",
                desc: "Efficient delivery management, driver apps, and customer communication",
                icon: <FaHome className="text-5xl" />,
              },
              {
                title: "Freight & Multimodal Management",
                desc: "Sea, air, road, and rail logistics coordination",
                icon: <FaShip className="text-5xl" />,
              },
              {
                title: "AI Route Optimization",
                desc: "Intelligent algorithms for cost reduction and faster delivery",
                icon: <FaRoute className="text-5xl" />,
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

      {/* BENEFITS */}
      <section className="py-24 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">
            Why Logistics Companies Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Real-Time Visibility",
                desc: "Track every shipment with live updates and proactive alerts",
              },
              {
                title: "Cost Optimization",
                desc: "Reduce fuel, operational, and logistics expenses significantly",
              },
              {
                title: "Scalable Infrastructure",
                desc: "Handles peak season demands and business growth effortlessly",
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center hover:border-cyan-400/50 transition"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-4xl">
                  {i === 0 ? "📍" : i === 1 ? "💰" : "📈"}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-white/70">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - WORKING BUTTON */}
      <section className="py-28 bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-700 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Let’s build smarter, faster, and more efficient logistics solutions.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition flex items-center gap-3 mx-auto"
          >
            Start Logistics Project
            <span className="text-2xl">→</span>
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Logistics;
