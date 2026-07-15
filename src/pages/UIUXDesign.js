import React from "react";
import { motion } from "framer-motion";

const UIUXDesign = () => {
  return (
    <div className="bg-[#0A0A0F] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                UI/UX Design That
                <br />
                <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                  Converts & Delights
                </span>
              </h1>
              <p className="text-2xl text-white/80 max-w-xl">
                Beautiful, intuitive, and user-centered designs that drive
                engagement and business results.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/images/ui-ux-hero.png"
                alt="UI/UX Design"
                className="rounded-3xl shadow-2xl max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Design Philosophy
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "User-First Approach",
                desc: "Every pixel is designed with real user needs and behaviors in mind",
                icon: "👤",
              },
              {
                title: "Emotional Design",
                desc: "Creating delightful experiences that users remember and love",
                icon: "❤️",
              },
              {
                title: "Data-Driven Design",
                desc: "A/B testing and user research guide every decision",
                icon: "📊",
              },
              {
                title: "Consistent Systems",
                desc: "Scalable design systems for long-term maintainability",
                icon: "🔄",
              },
              {
                title: "Accessibility First",
                desc: "Inclusive design that works for everyone",
                icon: "♿",
              },
              {
                title: "Fast Iteration",
                desc: "Rapid prototyping and quick feedback loops",
                icon: "⚡",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pink-400/50 rounded-3xl p-10 transition-all duration-300"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-pink-400 transition">
                  {item.title}
                </h3>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Design Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Research",
                desc: "User interviews, competitor analysis, and data gathering",
              },
              {
                step: "02",
                title: "Wireframing",
                desc: "Low-fidelity layouts and information architecture",
              },
              {
                step: "03",
                title: "UI Design",
                desc: "High-fidelity visuals and interactive prototypes",
              },
              {
                step: "04",
                title: "Testing & Iteration",
                desc: "Usability testing and continuous refinement",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-6xl font-bold text-pink-400 mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Tools We Master</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Figma",
              "Adobe XD",
              "Framer",
              "Principle",
              "Webflow",
              "Maze",
              "Notion",
            ].map((tool, i) => (
              <span
                key={i}
                className="bg-white/10 hover:bg-white/20 px-10 py-4 rounded-2xl text-xl font-medium transition"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gradient-to-r from-pink-600 to-rose-500 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Create Exceptional User Experiences?
          </h2>
          <p className="text-xl mb-10">
            Let’s design interfaces that users fall in love with.
          </p>
          <button className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition">
            Start Your Design Project →
          </button>
        </div>
      </section>
    </div>
  );
};

export default UIUXDesign;
