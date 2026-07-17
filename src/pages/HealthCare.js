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
} from "react-icons/fa";

const Healthcare = () => {
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
            backgroundImage: "url('https://picsum.photos/id/107/1920/1080')",
            opacity: 0.25,
          }}
        />
        <div className="absolute inset-0 bg-[#0A1428]/80" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/30 text-cyan-400 text-sm mb-6">
                <FaHeartbeat /> Healthcare Technology
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Healthcare Technology
                <br />
                <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  That Saves Lives
                </span>
              </h1>
              <p className="text-2xl text-white/80 max-w-xl">
                Digital solutions that improve patient outcomes, streamline
                operations, and enhance healthcare delivery.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="https://picsum.photos/id/107/600/500"
                alt="Healthcare Technology"
                className="rounded-3xl shadow-2xl max-w-lg border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR HEALTHCARE SOLUTIONS */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Healthcare Solutions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Electronic Health Records (EHR)",
                desc: "Secure, compliant, and user-friendly digital patient record systems",
                icon: <FaHeartbeat className="text-5xl" />,
              },
              {
                title: "Telemedicine Platforms",
                desc: "Virtual consultations, remote monitoring, and digital health services",
                icon: <FaUserMd className="text-5xl" />,
              },
              {
                title: "Patient Management Systems",
                desc: "Efficient appointment scheduling, billing, and workflow automation",
                icon: <FaCalendarAlt className="text-5xl" />,
              },
              {
                title: "AI-Powered Diagnostics",
                desc: "Intelligent tools for early disease detection and clinical decision support",
                icon: <FaBrain className="text-5xl" />,
              },
              {
                title: "Health Analytics Dashboards",
                desc: "Data-driven insights for hospitals, clinics, and public health management",
                icon: <FaChartBar className="text-5xl" />,
              },
              {
                title: "Digital Health Cards & Records",
                desc: "Smart health IDs with emergency access and portable medical history",
                icon: <FaIdCard className="text-5xl" />,
              },
            ].map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 rounded-3xl p-10 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-6">{solution.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition">
                  {solution.title}
                </h3>
                <p className="text-white/70">{solution.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">
            Why Healthcare Organizations Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "HIPAA & Regulatory Compliance",
                desc: "Full data security, privacy protection, and regulatory adherence",
              },
              {
                title: "Patient-Centric Design",
                desc: "Solutions designed with empathy and focus on better patient experience",
              },
              {
                title: "Seamless Integration",
                desc: "Works smoothly with existing hospital management and legacy systems",
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
                  {i === 0 ? "🔒" : i === 1 ? "❤️" : "🔄"}
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
            Transforming Healthcare with Technology
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Let’s build solutions that improve patient care and save lives.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition flex items-center gap-3 mx-auto"
          >
            Start Healthcare Project
            <span className="text-2xl">→</span>
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;
