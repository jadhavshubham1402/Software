import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaApple, FaAndroid, FaMobileAlt, FaReact } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

const Mobile = () => {
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
                <FaMobileAlt /> Mobile Development
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Mobile Technologies
                <br />
                <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  That Power Great Apps
                </span>
              </h1>
              <p className="text-2xl text-white/80 max-w-xl">
                We master both native and cross-platform technologies to deliver
                exceptional mobile experiences that users love.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="https://picsum.photos/id/1060/600/500"
                alt="Mobile Technologies"
                className="rounded-3xl shadow-2xl max-w-lg border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE PLATFORMS */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Mobile Development Platforms
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* iOS */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-12 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="text-6xl text-cyan-400"></div>
                <div>
                  <h3 className="text-3xl font-semibold">iOS Development</h3>
                  <p className="text-white/60">Native iOS Apps</p>
                </div>
              </div>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-center gap-3">→ Swift & SwiftUI</li>
                <li className="flex items-center gap-3">→ UIKit</li>
                <li className="flex items-center gap-3">
                  → Core Data & Combine
                </li>
                <li className="flex items-center gap-3">
                  → ARKit & Vision Framework
                </li>
              </ul>
            </motion.div>

            {/* Android */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-12 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="text-6xl text-cyan-400">🤖</div>
                <div>
                  <h3 className="text-3xl font-semibold">
                    Android Development
                  </h3>
                  <p className="text-white/60">Native Android Apps</p>
                </div>
              </div>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-center gap-3">→ Kotlin</li>
                <li className="flex items-center gap-3">→ Jetpack Compose</li>
                <li className="flex items-center gap-3">→ Room Database</li>
                <li className="flex items-center gap-3">→ Coroutines & Flow</li>
              </ul>
            </motion.div>
          </div>

          {/* Cross Platform */}
          <div className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-semibold mb-8">
              Cross-Platform Solutions
            </h3>
            <div className="flex flex-wrap justify-center gap-12 text-3xl">
              <div className="flex items-center gap-4">
                <SiFlutter className="text-cyan-400" /> Flutter
              </div>
              <div className="flex items-center gap-4">
                <FaReact className="text-cyan-400" /> React Native
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA - WORKING BUTTON */}
      <section className="py-28 bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-700 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Need a Powerful Mobile Solution?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Let’s choose the right technology and build an outstanding mobile
            app.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition flex items-center gap-3 mx-auto"
          >
            Discuss Mobile Project
            <span className="text-2xl">→</span>
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Mobile;
