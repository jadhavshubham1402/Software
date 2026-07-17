import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaGlobe,
  FaShoppingCart,
  FaCloud,
  FaMobileAlt,
  FaBuilding,
  FaSync,
} from "react-icons/fa";

const WebDevelopment = () => {
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
            backgroundImage: "url('/images/webDevelopment1.jpg')",
            opacity: 0.75,
          }}
        />
        <div className="absolute inset-0 bg-[#0A1428]/80" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/30 text-cyan-400 text-sm mb-6">
                <FaGlobe /> Web Development
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Web Solutions That
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-blue-300 bg-clip-text text-transparent">
                  Scale & Convert
                </span>
              </h1>
              <p className="text-2xl text-white/80 max-w-xl">
                We build high-performance, modern web applications that drive
                real business growth.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/images/webDevelopment2.jpg"
                alt="Modern Web Development"
                className="rounded-3xl shadow-2xl max-w-lg border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR WEB DEVELOPMENT SERVICES */}
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
                icon: <FaGlobe className="text-5xl" />,
              },
              {
                title: "E-Commerce Platforms",
                desc: "High-converting online stores with seamless user experience",
                icon: <FaShoppingCart className="text-5xl" />,
              },
              {
                title: "SaaS Products",
                desc: "Scalable subscription platforms with powerful dashboards",
                icon: <FaCloud className="text-5xl" />,
              },
              {
                title: "Progressive Web Apps",
                desc: "App-like experience accessible from any browser",
                icon: <FaMobileAlt className="text-5xl" />,
              },
              {
                title: "Enterprise Solutions",
                desc: "Robust internal tools and complex business systems",
                icon: <FaBuilding className="text-5xl" />,
              },
              {
                title: "Website Redesign",
                desc: "Modern transformation of existing digital assets",
                icon: <FaSync className="text-5xl" />,
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
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
          <h2 className="text-4xl font-bold mb-12">Modern Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "PostgreSQL",
              "AWS",
              "Docker",
              "GraphQL",
            ].map((tech) => (
              <span
                key={tech}
                className="px-8 py-4 bg-white/5 hover:bg-cyan-400/10 border border-white/10 hover:border-cyan-400 rounded-2xl text-lg font-medium transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - WORKING BUTTON */}
      <section className="py-28 bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-700 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Let’s build a high-performance website that drives real results.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition flex items-center gap-3 mx-auto"
          >
            Start Your Web Project
            <span className="text-2xl">→</span>
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
