import React from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaUsers,
  FaShieldAlt,
  FaLightbulb,
  FaHandshake,
  FaChartLine,
  FaLaptopCode,
} from "react-icons/fa";

const stats = [
  { number: "500", label: "Projects Delivered", suffix: "+" },
  { number: "150", label: "Happy Clients", suffix: "+" },
  { number: "98", label: "Client Retention", suffix: "%" },
  { number: "15", label: "Years Experience", suffix: "+" },
];

const values = [
  {
    icon: <FaRocket />,
    title: "Innovation",
    desc: "Pushing boundaries with cutting-edge solutions",
  },
  {
    icon: <FaUsers />,
    title: "Collaboration",
    desc: "True partnership, not just vendor-client",
  },
  {
    icon: <FaShieldAlt />,
    title: "Integrity",
    desc: "Transparent, ethical, and reliable",
  },
  {
    icon: <FaLightbulb />,
    title: "Excellence",
    desc: "Obsessed with quality and craftsmanship",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-[#0A0A0F] text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1E40AF_1px,transparent_1px)] bg-[length:50px_50px] opacity-20" />

        <div className="relative max-w-5xl mx-auto text-center px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
              Building the{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Future
              </span>{" "}
              Together
            </h1>
            <p className="text-2xl text-white/70 max-w-2xl mx-auto">
              We are a team of passionate engineers, designers, and strategists
              creating digital experiences that matter.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-8">Who We Are</h2>
          <p className="text-xl text-white/80 leading-relaxed">
            We are a full-stack digital engineering company that transforms
            ambitious ideas into powerful, scalable software solutions. With
            deep expertise in modern technologies and a human-first approach, we
            help businesses thrive in the digital age.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-blue-900/30 to-transparent border border-blue-500/30 rounded-3xl p-10"
          >
            <h3 className="text-3xl font-bold mb-6 text-blue-400">
              Our Mission
            </h3>
            <p className="text-lg text-white/80">
              To deliver exceptional digital solutions that drive business
              growth, create meaningful user experiences, and push the
              boundaries of what's possible with technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-cyan-900/30 to-transparent border border-cyan-500/30 rounded-3xl p-10"
          >
            <h3 className="text-3xl font-bold mb-6 text-cyan-400">
              Our Vision
            </h3>
            <p className="text-lg text-white/80">
              To become the most trusted technology partner for forward-thinking
              companies worldwide, known for innovation, reliability, and
              lasting impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Why Companies Love Working With Us
            </h2>
            <p className="text-white/70 text-xl">
              Proven results. Trusted partnership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaRocket />,
                title: "Lightning Fast Delivery",
                desc: "Agile processes with bi-weekly releases",
              },
              {
                icon: <FaUsers />,
                title: "True Partnership",
                desc: "We become an extension of your team",
              },
              {
                icon: <FaShieldAlt />,
                title: "Enterprise Security",
                desc: "SOC2, ISO27001 & industry best practices",
              },
              {
                icon: <FaLaptopCode />,
                title: "Modern Tech Stack",
                desc: "Latest frameworks & cloud-native solutions",
              },
              {
                icon: <FaChartLine />,
                title: "Measurable Results",
                desc: "Clear KPIs and transparent reporting",
              },
              {
                icon: <FaHandshake />,
                title: "Long-term Support",
                desc: "Ongoing maintenance & evolution",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 hover:border-white/30 rounded-3xl p-8 transition-all hover:-translate-y-2"
              >
                <div className="text-5xl mb-6 text-cyan-400">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-black/60">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-6xl font-bold text-cyan-400 mb-2">
                {stat.number}
                {stat.suffix}
              </div>
              <div className="text-white/60 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 text-center bg-gradient-to-b from-transparent via-cyan-950/30 to-transparent">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Let's discuss how we can help bring your vision to life.
          </p>
          <button className="bg-white text-black px-12 py-5 rounded-2xl font-semibold text-lg hover:bg-white/90 transition">
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
