import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaHeart,
  FaChartBar,
  FaSync,
  FaUniversalAccess,
  FaBolt,
  FaUsers,
  FaLightbulb,
  FaPalette,
  FaArrowRight,
} from "react-icons/fa";

const UIUXDesign = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#0A1428] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/UIUX1.jpg')",
            opacity: 0.65,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1428]/90 via-[#0A1428]/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm mb-6">
                🎨 UI/UX Design
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                Designs That{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                  Convert & Delight
                </span>
              </h1>

              <p className="text-2xl text-white/80 max-w-xl mb-10">
                Beautiful, intuitive, and user-centered digital experiences that
                drive engagement, loyalty, and business growth.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/images/UIUX2.jpg"
                alt="UI/UX Design"
                className="rounded-3xl shadow-2xl max-w-lg border border-white/10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="border-b border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "120+", label: "Projects Delivered" },
            { number: "35+", label: "Happy Clients" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "85%", label: "Conversion Uplift" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border-r border-white/10 last:border-0"
            >
              <p className="text-4xl font-bold text-cyan-400">{stat.number}</p>
              <p className="text-white/70 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* DESIGN PHILOSOPHY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Design Philosophy</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              We craft experiences that go beyond aesthetics — they solve
              problems and create emotional connections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "User-First Approach",
                desc: "Every pixel is designed with real user needs and behaviors in mind.",
                icon: <FaUser className="text-5xl" />,
              },
              {
                title: "Emotional Design",
                desc: "Creating delightful experiences that users remember and love.",
                icon: <FaHeart className="text-5xl" />,
              },
              {
                title: "Data-Driven Design",
                desc: "A/B testing and user research guide every design decision.",
                icon: <FaChartBar className="text-5xl" />,
              },
              {
                title: "Consistent Systems",
                desc: "Scalable design systems for long-term maintainability.",
                icon: <FaSync className="text-5xl" />,
              },
              {
                title: "Accessibility First",
                desc: "Inclusive design that works beautifully for everyone.",
                icon: <FaUniversalAccess className="text-5xl" />,
              },
              {
                title: "Fast Iteration",
                desc: "Rapid prototyping and quick feedback loops.",
                icon: <FaBolt className="text-5xl" />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-white/5 hover:bg-gradient-to-br hover:from-white/10 hover:to-cyan-400/5 border border-white/10 hover:border-cyan-400/50 rounded-3xl p-10 transition-all duration-500"
              >
                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section id="process" className="py-24 bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Proven Design Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Research",
                desc: "User interviews, competitor analysis, and deep data gathering",
              },
              {
                step: "02",
                title: "Wireframing",
                desc: "Low-fidelity layouts and thoughtful information architecture",
              },
              {
                step: "03",
                title: "UI Design",
                desc: "High-fidelity visuals, micro-interactions, and prototypes",
              },
              {
                step: "04",
                title: "Testing & Iteration",
                desc: "Usability testing, feedback, and continuous refinement",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="text-7xl font-bold text-cyan-400/80 group-hover:text-cyan-400 transition-colors mb-6">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS & TECHNOLOGIES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Tools We Master</h2>
          <p className="text-white/60 mb-12">
            Industry-standard design and prototyping tools
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Figma",
              "Adobe XD",
              "Framer",
              "Webflow",
              "Principle",
              "Maze",
              "Notion",
              "Sketch",
              "InVision",
              "Lottie",
            ].map((tool, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03 }}
                className="bg-white/5 hover:bg-cyan-400/10 border border-white/10 hover:border-cyan-400 px-8 py-4 rounded-2xl text-lg font-medium transition-all hover:-translate-y-1"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Businesses Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaLightbulb className="text-5xl" />,
                title: "Strategy-First Design",
                desc: "We design with business goals and user needs in perfect harmony.",
              },
              {
                icon: <FaPalette className="text-5xl" />,
                title: "Pixel-Perfect Execution",
                desc: "Beautiful interfaces that are both aesthetically stunning and highly functional.",
              },
              {
                icon: <FaUsers className="text-5xl" />,
                title: "End-to-End Ownership",
                desc: "From research to handover — we manage the full design lifecycle.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-cyan-400/50 transition group"
              >
                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 bg-gradient-to-br from-cyan-600 via-teal-600 to-emerald-700 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Elevate Your User Experience?
          </h2>
          <p className="text-2xl text-white/90 mb-12">
            Let’s create digital experiences your users will love and remember.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white/90 hover:bg-white text-black px-12 py-6 rounded-3xl font-semibold text-xl flex items-center gap-3 mx-auto transition"
          >
            Schedule a Free Consultation
            <FaArrowRight />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default UIUXDesign;
