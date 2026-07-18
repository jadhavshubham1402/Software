import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaShieldAlt,
  FaChartLine,
  FaTools,
  FaClock,
  FaSync,
  FaUserShield,
  FaArrowRight,
  FaRocket,
  FaUsers,
} from "react-icons/fa";

const SupportMaintenance = () => {
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
            backgroundImage: "url('/images/support1.png')",
            opacity: 0.75,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1428]/90 via-[#0A1428]/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm mb-6">
                <FaShieldAlt /> Support & Maintenance
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                Reliable Support That{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                  Keeps You Running
                </span>
              </h1>

              <p className="text-2xl text-white/80 max-w-xl mb-10">
                Ongoing technical support, proactive maintenance, and continuous
                optimization to ensure your software stays secure, fast, and
                reliable.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/images/support2.png"
                alt="Support & Maintenance"
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
            { number: "99.9%", label: "Uptime Guarantee" },
            { number: "24/7", label: "Monitoring & Support" },
            { number: "<2hrs", label: "Average Response Time" },
            { number: "150+", label: "Active Contracts" },
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

      {/* OUR SUPPORT SERVICES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Support Services</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Comprehensive maintenance and support designed to keep your
              systems performing at their best
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Proactive Monitoring",
                desc: "24/7 system monitoring with instant alerts and performance optimization.",
                icon: <FaChartLine className="text-5xl" />,
              },
              {
                title: "Security Updates",
                desc: "Regular security patches, vulnerability assessments, and compliance maintenance.",
                icon: <FaShieldAlt className="text-5xl" />,
              },
              {
                title: "Bug Fixes & Maintenance",
                desc: "Rapid bug resolution, code improvements, and system health maintenance.",
                icon: <FaTools className="text-5xl" />,
              },
              {
                title: "Performance Optimization",
                desc: "Continuous tuning for speed, scalability, and cost efficiency.",
                icon: <FaRocket className="text-5xl" />,
              },
              {
                title: "Backup & Disaster Recovery",
                desc: "Automated backups with reliable disaster recovery plans.",
                icon: <FaSync className="text-5xl" />,
              },
              {
                title: "Dedicated Support Team",
                desc: "Access to expert developers and technical support whenever you need.",
                icon: <FaUsers className="text-5xl" />,
              },
            ].map((service, i) => (
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
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose Our Support Plans
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaClock className="text-5xl" />,
                title: "Rapid Response",
                desc: "Average response time under 2 hours with guaranteed SLAs.",
              },
              {
                icon: <FaShieldAlt className="text-5xl" />,
                title: "Proactive Approach",
                desc: "We fix issues before they impact your business.",
              },
              {
                icon: <FaUserShield className="text-5xl" />,
                title: "Peace of Mind",
                desc: "Focus on your core business while we handle technical operations.",
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
            Keep Your Software Running at Peak Performance
          </h2>
          <p className="text-2xl text-white/90 mb-12">
            Let our expert team handle maintenance so you can focus on growing
            your business.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-7 rounded-3xl font-semibold text-2xl hover:bg-white/95 transition flex items-center gap-4 mx-auto"
          >
            Get Support Plan
            <FaArrowRight />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default SupportMaintenance;
