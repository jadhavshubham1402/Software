import React from "react";
import { motion } from "framer-motion";

const Fintech = () => {
  return (
    <div className="bg-[#0A0A0F] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Fintech Solutions
                <br />
                <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                  That Redefine Finance
                </span>
              </h1>
              <p className="text-2xl text-white/80 max-w-xl">
                Secure, compliant, and innovative financial technology solutions
                for the modern world.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/images/fintech-hero.png"
                alt="Fintech Solutions"
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
            Our Fintech Solutions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Banking Platforms",
                desc: "Modern banking experiences with real-time transactions",
                icon: "🏦",
              },
              {
                title: "Payment Gateways",
                desc: "Secure, fast, and multi-currency payment processing",
                icon: "💳",
              },
              {
                title: "Lending & Credit Systems",
                desc: "AI-powered loan origination and risk assessment",
                icon: "📈",
              },
              {
                title: "Investment & Trading Apps",
                desc: "Robo-advisors and real-time trading platforms",
                icon: "📊",
              },
              {
                title: "Blockchain & Crypto Solutions",
                desc: "Secure decentralized applications and wallets",
                icon: "🔗",
              },
              {
                title: "RegTech & Compliance",
                desc: "Automated regulatory compliance and KYC solutions",
                icon: "📋",
              },
            ].map((solution, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="group bg-white/5 border border-white/10 hover:border-amber-400/50 rounded-3xl p-10 transition-all duration-300"
              >
                <div className="text-5xl mb-6">{solution.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-amber-400 transition">
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
            Why Fintech Companies Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "PCI DSS & Regulatory Compliance",
                desc: "Bank-grade security and compliance",
              },
              {
                title: "Real-time Processing",
                desc: "High-speed transaction handling",
              },
              {
                title: "Fraud Prevention",
                desc: "Advanced AI-powered fraud detection",
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
      <section className="py-28 bg-gradient-to-r from-amber-600 to-yellow-500 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Innovate in Finance?
          </h2>
          <p className="text-xl mb-10">
            Let’s build the next generation of financial technology.
          </p>
          <button className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition">
            Start Your Fintech Project →
          </button>
        </div>
      </section>
    </div>
  );
};

export default Fintech;