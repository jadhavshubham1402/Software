import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaServer,
  FaDatabase,
  FaLock,
  FaBolt,
  FaCloud,
  FaCogs,
} from "react-icons/fa";

const Backend = () => {
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
            backgroundImage: "url('/images/backend1.jpg')",
            opacity: 0.75,
          }}
        />
        <div className="absolute inset-0 bg-[#0A1428]/80" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/30 text-cyan-400 text-sm mb-6">
                <FaServer /> Backend Development
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Backend Development
                <br />
                <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  Powerful & Scalable
                </span>
              </h1>
              <p className="text-2xl text-white/80 max-w-xl">
                Robust, secure, and high-performance server-side solutions that
                power modern applications at any scale.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/images/backend2.jpg"
                alt="Backend Development"
                className="rounded-3xl shadow-2xl max-w-lg border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR BACKEND SERVICES */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Backend Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "REST & GraphQL APIs",
                desc: "Fast, well-documented, and scalable APIs with excellent developer experience.",
                icon: <FaBolt className="text-5xl" />,
              },
              {
                title: "Microservices Architecture",
                desc: "Modular, independently deployable, and maintainable service-based systems.",
                icon: <FaCogs className="text-5xl" />,
              },
              {
                title: "Database Design & Optimization",
                desc: "SQL & NoSQL database architecture, performance tuning, and data modeling.",
                icon: <FaDatabase className="text-5xl" />,
              },
              {
                title: "Authentication & Security",
                desc: "JWT, OAuth2, role-based access, encryption, and enterprise security standards.",
                icon: <FaLock className="text-5xl" />,
              },
              {
                title: "Real-time Systems",
                desc: "WebSockets, live updates, chat systems, and collaborative applications.",
                icon: <FaBolt className="text-5xl" />,
              },
              {
                title: "Cloud & Serverless",
                desc: "AWS, Azure, GCP, and serverless backend infrastructure.",
                icon: <FaCloud className="text-5xl" />,
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 rounded-3xl p-10 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition">
                  {service.title}
                </h3>
                <p className="text-white/70">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Backend Tech Stack</h2>
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
              "Docker",
              "Kubernetes",
              "AWS",
              "RabbitMQ",
            ].map((tech, i) => (
              <span
                key={i}
                className="bg-white/5 hover:bg-cyan-400/10 border border-white/10 hover:border-cyan-400 px-8 py-4 rounded-2xl text-lg font-medium transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES / USE CASES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Backend Solutions For Every Industry
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Fintech",
                image: "/images/backend3.jpg",
                desc: "Secure Payment Gateways & Banking Systems",
              },
              {
                name: "E-commerce",
                image: "/images/backend4.jpg",
                desc: "High-traffic Scalable Platforms",
              },
              {
                name: "Healthcare",
                image: "/images/backend5.jpg",
                desc: "HIPAA Compliant Systems",
              },
              {
                name: "SaaS Products",
                image: "/images/backend6.jpg",
                desc: "Multi-tenant Architecture",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl overflow-hidden h-80"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                <div className="absolute bottom-0 p-8">
                  <h3 className="text-3xl font-bold mb-2">{item.name}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Our Backend Solutions Stand Out
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "High Performance",
                desc: "Optimized for speed, concurrency, and scalability under heavy load.",
              },
              {
                title: "Secure by Design",
                desc: "Enterprise-grade security, encryption, and compliance built from the ground up.",
              },
              {
                title: "Future-Proof Architecture",
                desc: "Clean, maintainable, and easily scalable code with excellent documentation.",
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
                  {i === 0 ? "⚡" : i === 1 ? "🔒" : "🚀"}
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
            Need a Rock-Solid Backend?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Let’s build a scalable, secure, and high-performance foundation for
            your application.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition flex items-center gap-3 mx-auto"
          >
            Discuss Your Backend Project
            <span className="text-2xl">→</span>
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Backend;
