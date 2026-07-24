import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaMoneyBillWave,
  FaShieldAlt,
  FaChartLine,
  FaMobileAlt,
  FaLink,
  FaUsers,
  FaTachometerAlt,
  FaLightbulb,
  FaArrowRight,
} from "react-icons/fa";

const Automotive = () => {
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
            backgroundImage: "url('/images/fintech1.jpg')",
            opacity: 0.65,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1428]/90 via-[#0A1428]/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm mb-6">
                <FaMoneyBillWave /> Automotive Solutions
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                 Smart Automotive Solutions for the{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                  Future of Mobility
                </span>
              </h1>

              <p className="text-2xl text-white/80 max-w-xl mb-10">
                Connect & Internet Cars,EV Charging Software,Smart Bikes,Telematics,AI & Machine Learning...
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/images/fintech2.jpg"
                alt="Fintech Solutions"
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
            { number: "100+", label: " Projects Delivered" },
            { number: "50", label: "Industry Experts" },
            { number: "99%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support" },
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

      {/* OUR FINTECH SOLUTIONS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Automotive Solutions</h2>
            <p className="text-xl text-white/70">
              Innovative technology for the future of finance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Connected Internet Cars",
                desc: "We have a decade of experience in planning , consulting , implementation and operations management in auto domain",
                icon: <FaMoneyBillWave className="text-5xl" />,
              },
              {
                title: "EV Charging Software",
                desc: "We at paxykop offer EV charging software applications and charge point operators for automotive companies along with roaming infra.",
                icon: <FaMobileAlt className="text-5xl" />,
              },
              {
                title: "Smart Bikes",
                desc: "Simple, yet safe and reliable navigation system",
                icon: <FaChartLine className="text-5xl" />,
              },
              {
                title: "Telematics",
                desc: "The future of automotive is here",
                icon: <FaUsers className="text-5xl" />,
              },
              {
                title: "Autonomous & ADAS",
                desc: "Autonomous Driving & Advance Driver-Assistance Systems(ADAS)",
                icon: <FaLink className="text-5xl" />,
              },
              {
                title: "AI & Machine Learning",
                desc: "Artificial intelligence and machine learning have long been one of the most sought after technologies in the automotive industry ",
                icon: <FaShieldAlt className="text-5xl" />,
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
            Why Automotive Companies Trust Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaShieldAlt className="text-5xl" />,
                title: "Bank-Grade Security",
                desc: "PCI DSS compliant infrastructure with advanced fraud prevention and data protection.",
              },
              {
                icon: <FaTachometerAlt className="text-5xl" />,
                title: "High Performance",
                desc: "Real-time transaction processing with exceptional speed and reliability.",
              },
              {
                icon: <FaLightbulb className="text-5xl" />,
                title: "Regulatory Expertise",
                desc: "Deep knowledge of financial regulations and compliance requirements worldwide.",
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
          <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Automotive Business?</h2>
          <p className="text-2xl text-white/90 mb-12">
             Build innovative automotive solutions with our expert team to accelerate your digital transformation.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-7 rounded-3xl font-semibold text-2xl hover:bg-white/95 transition flex items-center gap-4 mx-auto"
          >
            Start Your Automotive Project
            <FaArrowRight />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Automotive;
