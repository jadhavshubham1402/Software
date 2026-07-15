import React from "react";
import { motion } from "framer-motion";

const Frontend = () => {
  return (
    <div className="bg-[#0A0A0F] text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Frontend Development
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  That Feels Alive
                </span>
              </h1>
              <p className="text-2xl text-white/80 max-w-xl">
                We create fast, beautiful, and highly interactive user
                interfaces that users love and businesses trust.
              </p>
            </div>

            <div className="relative">
              <img
                src="/images/frontend-hero.jpg"
                alt="Frontend Development"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            What We Build
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Single Page Applications",
                desc: "Fast, dynamic SPAs with React & Next.js",
              },
              {
                title: "Responsive Websites",
                desc: "Mobile-first, pixel-perfect designs across all devices",
              },
              {
                title: "Interactive Dashboards",
                desc: "Complex data visualization and admin panels",
              },
              {
                title: "E-commerce Frontends",
                desc: "High-conversion shopping experiences",
              },
              {
                title: "Progressive Web Apps",
                desc: "App-like experience in the browser",
              },
              {
                title: "Design Systems",
                desc: "Scalable component libraries for consistent branding",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white/5 border border-white/10 hover:border-blue-400/50 rounded-3xl p-10 transition-all"
              >
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
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
            Why Choose Our Frontend Team?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Blazing Fast Performance",
                desc: "Optimized Core Web Vitals & 100 Lighthouse scores",
              },
              {
                title: "Pixel Perfect Design",
                desc: "Faithful implementation of your design system",
              },
              {
                title: "Future-Proof Code",
                desc: "Clean, maintainable, and scalable architecture",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gradient-to-r from-blue-600 to-cyan-500 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Build Stunning Interfaces?
          </h2>
          <button className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition">
            Start Your Frontend Project →
          </button>
        </div>
      </section>
    </div>
  );
};

export default Frontend;
