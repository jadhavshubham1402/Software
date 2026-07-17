import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaReact,
  FaMobileAlt,
  FaBolt,
  FaPalette,
  FaChartBar,
  FaCode,
} from "react-icons/fa";

const Frontend = () => {
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
            backgroundImage: "url('https://picsum.photos/id/1015/1920/1080')",
            opacity: 0.25,
          }}
        />
        <div className="absolute inset-0 bg-[#0A1428]/80" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/30 text-cyan-400 text-sm mb-6">
                <FaReact /> Frontend Development
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Frontend Development
                <br />
                <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  That Feels Alive
                </span>
              </h1>
              <p className="text-2xl text-white/80 max-w-xl">
                We create fast, beautiful, and highly interactive user
                interfaces that users love and businesses trust.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="https://picsum.photos/id/1015/600/500"
                alt="Frontend Development"
                className="rounded-3xl shadow-2xl max-w-lg border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            What We Build
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Single Page Applications",
                desc: "Fast, dynamic SPAs using React, Next.js, and TypeScript",
                icon: <FaReact className="text-5xl" />,
              },
              {
                title: "Responsive Websites",
                desc: "Mobile-first, pixel-perfect designs that work on all devices",
                icon: <FaMobileAlt className="text-5xl" />,
              },
              {
                title: "Interactive Dashboards",
                desc: "Complex data visualization and powerful admin panels",
                icon: <FaChartBar className="text-5xl" />,
              },
              {
                title: "E-commerce Frontends",
                desc: "High-conversion shopping experiences with smooth UX",
                icon: <FaMobileAlt className="text-5xl" />,
              },
              {
                title: "Progressive Web Apps",
                desc: "App-like experience directly in the browser",
                icon: <FaBolt className="text-5xl" />,
              },
              {
                title: "Design Systems",
                desc: "Scalable component libraries with consistent branding",
                icon: <FaPalette className="text-5xl" />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 rounded-3xl p-10 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-6">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition">
                  {item.title}
                </h3>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Frontend Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Framer Motion",
              "Redux Toolkit",
              "Vue.js",
              "Svelte",
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

      {/* BENEFITS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">
            Why Choose Our Frontend Team?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Blazing Fast Performance",
                desc: "Optimized Core Web Vitals and excellent Lighthouse scores",
              },
              {
                title: "Pixel Perfect Design",
                desc: "Faithful implementation of your design system and brand identity",
              },
              {
                title: "Future-Proof Code",
                desc: "Clean, maintainable, and scalable architecture",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center hover:border-cyan-400/50 transition"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-4xl">
                  {i === 0 ? "⚡" : i === 1 ? "🎨" : "🚀"}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - WORKING BUTTON */}
      <section className="py-28 bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-700 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Build Stunning Interfaces?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Let’s create exceptional user experiences that drive results.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition flex items-center gap-3 mx-auto"
          >
            Start Your Frontend Project
            <span className="text-2xl">→</span>
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Frontend;
