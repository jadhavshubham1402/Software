import React from "react";
import { motion } from "framer-motion";

const Backend = () => {
  return (
    <div className="bg-[#0A0A0F] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Backend Development
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Powerful & Scalable
                </span>
              </h1>
              <p className="text-2xl text-white/80 max-w-xl">
                Robust, secure, and high-performance server-side solutions that
                power your applications.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/images/backend-hero.png"
                alt="Backend Development"
                className="rounded-3xl shadow-2xl max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Backend Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "REST & GraphQL APIs",
                desc: "Fast, well-documented, and scalable APIs",
                icon: "🔗",
              },
              {
                title: "Microservices Architecture",
                desc: "Modular, maintainable, and independently deployable services",
                icon: "🧩",
              },
              {
                title: "Database Design & Optimization",
                desc: "SQL & NoSQL database architecture and performance tuning",
                icon: "🗄️",
              },
              {
                title: "Authentication & Security",
                desc: "JWT, OAuth, role-based access control, and data protection",
                icon: "🔐",
              },
              {
                title: "Real-time Systems",
                desc: "WebSockets, chat systems, and live updates",
                icon: "⚡",
              },
              {
                title: "Cloud Backend Services",
                desc: "Serverless and managed backend infrastructure",
                icon: "☁️",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-400/50 rounded-3xl p-10 transition-all duration-300"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-emerald-400 transition">
                  {service.title}
                </h3>
                <p className="text-white/70">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Backend Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Node.js",
              "Express",
              "NestJS",
              "Python",
              "Django",
              "FastAPI",
              "Go",
              "PostgreSQL",
              "MongoDB",
              "Redis",
            ].map((tech, i) => (
              <span
                key={i}
                className="bg-white/10 hover:bg-white/20 px-8 py-4 rounded-full text-lg font-medium transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">
            Why Our Backend Solutions Stand Out
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "High Performance",
                desc: "Optimized for speed and scalability under heavy load",
              },
              {
                title: "Secure by Design",
                desc: "Enterprise-grade security and data protection",
              },
              {
                title: "Easy Maintenance",
                desc: "Clean, well-documented, and easily maintainable code",
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
      <section className="py-28 bg-gradient-to-r from-emerald-600 to-teal-500 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">Need a Powerful Backend?</h2>
          <p className="text-xl mb-10">
            Let’s build a robust foundation for your application.
          </p>
          <button className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition">
            Discuss Your Backend Project →
          </button>
        </div>
      </section>
    </div>
  );
};

export default Backend;
