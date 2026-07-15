import React from 'react';
import { motion } from 'framer-motion';

const Mobile = () => {
  return (
    <div className="bg-[#0A0A0F] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Mobile Technologies<br />
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  That Power Great Apps
                </span>
              </h1>
              <p className="text-2xl text-white/80 max-w-xl">
                We master both native and cross-platform technologies to deliver exceptional mobile experiences.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img 
                src="/images/mobile-tech-hero.png" 
                alt="Mobile Technologies" 
                className="rounded-3xl shadow-2xl max-w-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Mobile Development Platforms</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* iOS */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-12"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="text-6xl"></div>
                <div>
                  <h3 className="text-3xl font-semibold">iOS Development</h3>
                  <p className="text-white/60">Native iOS Apps</p>
                </div>
              </div>
              <ul className="space-y-4 text-white/80">
                <li>→ Swift & SwiftUI</li>
                <li>→ UIKit</li>
                <li>→ Core Data & Combine</li>
                <li>→ ARKit & Vision</li>
              </ul>
            </motion.div>

            {/* Android */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-12"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="text-6xl">🤖</div>
                <div>
                  <h3 className="text-3xl font-semibold">Android Development</h3>
                  <p className="text-white/60">Native Android Apps</p>
                </div>
              </div>
              <ul className="space-y-4 text-white/80">
                <li>→ Kotlin</li>
                <li>→ Jetpack Compose</li>
                <li>→ Room Database</li>
                <li>→ Coroutines & Flow</li>
              </ul>
            </motion.div>
          </div>

          {/* Cross Platform */}
          <div className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-semibold mb-6">Cross-Platform Solutions</h3>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-2xl font-medium">Flutter</div>
              <div className="text-2xl font-medium">React Native</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gradient-to-r from-indigo-600 to-purple-500 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">Need a Powerful Mobile Solution?</h2>
          <p className="text-xl mb-10">Let’s choose the right technology for your app.</p>
          <button className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition">
            Discuss Mobile Project →
          </button>
        </div>
      </section>
    </div>
  );
};

export default Mobile;