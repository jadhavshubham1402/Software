import React from "react";
import { motion } from "framer-motion";

const WebDevelopment = () => {
  return (
    <div className="bg-[#0A0A0F] text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_0.8px,transparent_1px)] bg-[length:50px_50px] opacity-10" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Web Solutions That
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Scale & Convert
                </span>
              </h1>
              <p className="text-2xl text-white/80 max-w-xl">
                We build high-performance, modern web applications that drive
                real business growth.
              </p>
            </div>

            <div className="relative">
              <img
                src="/images/web-dev-hero.png"
                alt="Modern Web Development"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Web Development Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Web Applications",
                desc: "Bespoke solutions tailored to your unique business needs",
                icon: "💻",
              },
              {
                title: "E-Commerce Platforms",
                desc: "High-converting online stores with seamless user experience",
                icon: "🛍️",
              },
              {
                title: "SaaS Products",
                desc: "Scalable subscription platforms with powerful dashboards",
                icon: "☁️",
              },
              {
                title: "Progressive Web Apps",
                desc: "App-like experience accessible from any browser",
                icon: "📲",
              },
              {
                title: "Enterprise Solutions",
                desc: "Robust internal tools and complex business systems",
                icon: "🏢",
              },
              {
                title: "Website Redesign",
                desc: "Modern transformation of existing digital assets",
                icon: "🔄",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 rounded-3xl p-10 transition-all duration-300"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-white/70">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-black/60">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Modern Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind",
              "Node.js",
              "PostgreSQL",
              "AWS",
              "Docker",
              "GraphQL",
            ].map((tech) => (
              <span
                key={tech}
                className="px-8 py-4 bg-white/10 rounded-full text-lg font-medium hover:bg-white/20 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gradient-to-r from-blue-600 to-cyan-500 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <button className="mt-8 bg-white text-black px-14 py-6 rounded-2xl text-xl font-semibold hover:bg-white/90 transition">
            Start Your Web Project →
          </button>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
