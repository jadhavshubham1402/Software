import React from 'react';
import { motion } from 'framer-motion';

const Healthcare = () => {
  return (
    <div className="bg-[#0A0A0F] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Healthcare Technology<br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  That Saves Lives
                </span>
              </h1>
              <p className="text-2xl text-white/80 max-w-xl">
                Digital solutions that improve patient outcomes, streamline operations, and enhance healthcare delivery.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img 
                src="/images/healthcare-hero.png" 
                alt="Healthcare Technology" 
                className="rounded-3xl shadow-2xl max-w-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Healthcare Solutions</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Electronic Health Records (EHR)", 
                desc: "Secure, compliant, and user-friendly patient record systems", 
                icon: "📋" 
              },
              { 
                title: "Telemedicine Platforms", 
                desc: "Virtual consultation and remote patient monitoring", 
                icon: "🩺" 
              },
              { 
                title: "Patient Management Systems", 
                desc: "Efficient appointment scheduling and workflow automation", 
                icon: "🗓️" 
              },
              { 
                title: "AI-Powered Diagnostics", 
                desc: "Intelligent tools for early disease detection", 
                icon: "🧠" 
              },
              { 
                title: "Health Analytics Dashboards", 
                desc: "Data-driven insights for hospitals and clinics", 
                icon: "📊" 
              },
              { 
                title: "Digital Health Cards", 
                desc: "Smart cards with emergency medical data access", 
                icon: "🆔" 
              },
            ].map((solution, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="group bg-white/5 border border-white/10 hover:border-emerald-400/50 rounded-3xl p-10 transition-all duration-300"
              >
                <div className="text-5xl mb-6">{solution.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-emerald-400 transition">{solution.title}</h3>
                <p className="text-white/70">{solution.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">Why Healthcare Organizations Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "HIPAA Compliant", desc: "Full regulatory compliance and data security" },
              { title: "Patient-Centric Design", desc: "Solutions focused on better patient experience" },
              { title: "Seamless Integration", desc: "Works with existing hospital management systems" },
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
      <section className="py-28 bg-gradient-to-r from-emerald-600 to-teal-500 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">Transforming Healthcare with Technology</h2>
          <p className="text-xl mb-10">Let’s build solutions that improve lives.</p>
          <button className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition">
            Start Healthcare Project →
          </button>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;