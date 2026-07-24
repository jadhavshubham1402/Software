import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaHeartbeat,
  FaUserMd,
  FaCalendarAlt,
  FaBrain,
  FaChartBar,
  FaIdCard,
  FaShieldAlt,
  FaUsers,
  FaLightbulb,
  FaArrowRight,
} from "react-icons/fa";

const HealthTech = () => {
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
            backgroundImage: "url('/images/healthcare2.jpg')",
            opacity: 0.65,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1428]/90 via-[#0A1428]/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm mb-6">
                <FaHeartbeat /> Health Tech
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                World's Most Advanced Medical and {" "}
                <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                   Digital Health Techologies...
                </span>
              </h1>

              <p className="text-2xl text-white/80 max-w-xl mb-10">
                World's Most Advanced Medical & Digital Health Techologies..  
                streamline operations, and empower medical professionals.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/images/healthcare1.jpg"
                alt="Healthcare Technology"
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
            { number: "100+", label: "Projects" },
            { number: "50+", label: "Clients" },
            { number: "10+", label: "Years Experience" },
            { number: "24/7", label: "Support" },
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

      {/* OUR HEALTHCARE SOLUTIONS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Health Tech Solutions
            </h2>
            <p className="text-xl text-white/70">
              Transforming healthTeck delivery through technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "HMS",
                desc: "Secure, intuitive, and interoperable digital patient record systems.",
                icon: <FaHeartbeat className="text-5xl" />,
              },
              {
                title: "Mobile Health care",
                desc: "High-quality virtual consultations, remote monitoring, and digital health services.",
                icon: <FaUserMd className="text-5xl" />,
              },
              {
                title: "Smart hospitals",
                desc: "Smart appointment scheduling, billing, and end-to-end workflow automation.",
                icon: <FaCalendarAlt className="text-5xl" />,
              },
              {
                title: "Patients Engagement",
                desc: "Intelligent clinical decision support and early disease detection tools.",
                icon: <FaBrain className="text-5xl" />,
              },
              {
                title: "Wearables",
                desc: "Real-time insights for hospitals, clinics, and population health management.",
                icon: <FaChartBar className="text-5xl" />,
              },
              {
                title: "Digital Health Cards",
                desc: "Portable, secure digital health IDs with emergency access and medical history.",
                icon: <FaIdCard className="text-5xl" />,
              },
            ].map((solution, i) => (
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
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{solution.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Healthcare Organizations Trust Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaShieldAlt className="text-5xl" />,
                title: "Healthcare",
                desc: "Full adherence to healthcare regulations with enterprise-grade security.",
              },
              {
                icon: <FaUsers className="text-5xl" />,
                title: "Patient-First Design",
                desc: "Solutions built with empathy, usability, and real clinical workflows in mind.",
              },
              {
                icon: <FaLightbulb className="text-5xl" />,
                title: "Seamless Integration",
                desc: "Works flawlessly with existing hospital systems and legacy infrastructure.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-cyan-400/50 transition group text-center"
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
            Transform Healthcare with Digital Innovation
          </h2>
          <p className="text-2xl text-white/90 mb-12">
            Let’s build compassionate, efficient, and life-saving digital
            healthcare solutions together.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-7 rounded-3xl font-semibold text-2xl hover:bg-white/95 transition flex items-center gap-4 mx-auto"
          >
            Start Your HealthTech Project
            <FaArrowRight />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default HealthTech;