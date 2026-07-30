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
  FaRocket,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
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
      <section className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/webDevelopment1.jpg')",
            opacity: 0.75,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1428]/90 via-[#0A1428]/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-sm text-cyan-400 text-sm">
                <FaGlobe className="text-xl" />
                <span className="uppercase tracking-widest font-medium">
                  Web Development
                </span>
              </div>

              <h1 className="text-2xl lg:text-4xl font-bold leading-[1.1] tracking-tighter">
                Web Experiences That
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-blue-300 bg-clip-text text-transparent">
                  Drive Growth
                </span>
              </h1>

              <p className="text-xl text-white/80 max-w-lg">
                We design and develop high-performance, conversion-focused
                digital experiences that help ambitious brands stand out and
                scale.
              </p>
            </div>

            <div className="relative hidden lg:flex justify-center">
              <div className="relative">
                <img
                  src="/images/webDevelopment2.jpg"
                  alt="Modern Web Development"
                  className="rounded-3xl shadow-2xl border border-white/10"
                />
                <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                  <div className="text-4xl font-bold text-cyan-400">4.9s</div>
                  <div className="text-sm text-white/70">Average Load Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Our Web Development Expertise
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              From stunning marketing websites to complex enterprise platforms —
              we build digital experiences that perform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Web Applications",
                desc: "Tailored solutions designed specifically for your business processes and growth objectives.",
                icon: <FaGlobe className="text-3xl" />,
              },
              {
                title: "E-Commerce Solutions",
                desc: "High-converting online stores with seamless checkout, inventory, and customer journey optimization.",
                icon: <FaShoppingCart className="text-3xl" />,
              },
              {
                title: "SaaS Platforms",
                desc: "Powerful subscription-based products with advanced dashboards, billing, and user management.",
                icon: <FaCloud className="text-3xl" />,
              },
              {
                title: "Progressive Web Apps",
                desc: "Fast, reliable applications that work offline and feel native on any device.",
                icon: <FaMobileAlt className="text-3xl" />,
              },
              {
                title: "Enterprise Web Systems",
                desc: "Robust internal tools, CRMs, and complex business applications at enterprise scale.",
                icon: <FaBuilding className="text-3xl" />,
              },
              {
                title: "Website Redesign",
                desc: "Complete transformation of outdated websites into modern, high-performing digital assets.",
                icon: <FaSync className="text-3xl" />,
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/60 rounded-3xl p-10 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-cyan-400 flex-shrink-0 transition-transform group-hover:scale-110">
                    {service.icon}
                  </div>
                  <span className="text-xl font-semibold group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </span>
                </div>

                <p className="text-white/70 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 bg-black/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Modern Tech Stack</h2>
          <p className="text-white/70 mb-12">
            We build with the best tools in the industry
          </p>

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
              "Vercel",
            ].map((tech) => (
              <div
                key={tech}
                className="w-48 h-16 flex items-center justify-center text-center bg-white/5 hover:bg-cyan-400/10 border border-white/10 hover:border-cyan-400 rounded-2xl text-lg font-medium transition-all duration-300 hover:scale-105"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Companies Choose Us</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaRocket />,
                title: "Blazing Fast Performance",
                desc: "Optimized code and architecture delivering exceptional speed.",
              },
              {
                icon: <FaUsers />,
                title: "User-First Design",
                desc: "Beautiful, intuitive interfaces crafted to maximize engagement.",
              },
              {
                icon: <FaChartLine />,
                title: "SEO & Growth Focused",
                desc: "Built with search visibility and business growth in mind.",
              },
              {
                icon: <FaShieldAlt />,
                title: "Secure & Reliable",
                desc: "Enterprise-grade security and robust infrastructure.",
              },
              {
                icon: <FaSync />,
                title: "Ongoing Partnership",
                desc: "Long-term support and continuous improvement.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 hover:border-cyan-400/50 rounded-3xl p-10 transition-all hover:-translate-y-2"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-3xl text-cyan-400 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>

                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - ONLY ONE */}
      <section className="py-14 bg-gradient-to-br from-cyan-600 via-teal-600 to-emerald-700 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">
            Ready to Elevate Your Digital Presence?
          </h2>
          <p className="text-lg text-white/90 mb-12">
            Let’s build a website that not only looks great — but performs
            exceptionally.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-8 py-4 rounded-3xl font-semibold text-lg hover:bg-white/95 transition flex items-center gap-4 mx-auto"
          >
            Start Your Web Project Now
            <span className="text-2xl">→</span>
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
