import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaCloud,
  FaServer,
  FaShieldAlt,
  FaRocket,
  FaChartBar,
  FaSync,
} from "react-icons/fa";

const CloudSolutions = () => {
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
            backgroundImage: "url('https://picsum.photos/id/1077/1920/1080')",
            opacity: 0.25,
          }}
        />
        <div className="absolute inset-0 bg-[#0A1428]/80" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/30 text-cyan-400 text-sm mb-6">
                <FaCloud /> Cloud Solutions
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Cloud Solutions That
                <br />
                <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  Scale With Your Business
                </span>
              </h1>
              <p className="text-2xl text-white/80 max-w-xl">
                Secure, scalable, and cost-efficient cloud infrastructure and
                migration services.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="https://picsum.photos/id/1077/600/500"
                alt="Cloud Solutions"
                className="rounded-3xl shadow-2xl max-w-lg border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR CLOUD SOLUTIONS */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Cloud Solutions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud Migration",
                desc: "Seamless transition from on-premise to cloud with zero downtime",
                icon: <FaRocket className="text-5xl" />,
              },
              {
                title: "AWS / Azure / GCP",
                desc: "Expert architecture and optimization across major cloud platforms",
                icon: <FaCloud className="text-5xl" />,
              },
              {
                title: "Serverless Solutions",
                desc: "Cost-efficient, scalable applications using Lambda & Cloud Functions",
                icon: <FaSync className="text-5xl" />,
              },
              {
                title: "Kubernetes & Containers",
                desc: "Orchestration and management of containerized workloads",
                icon: <FaServer className="text-5xl" />,
              },
              {
                title: "Cloud Security & Compliance",
                desc: "Enterprise-grade security, SOC2, ISO27001, and GDPR compliance",
                icon: <FaShieldAlt className="text-5xl" />,
              },
              {
                title: "Disaster Recovery & Backup",
                desc: "Robust backup strategies and business continuity planning",
                icon: <FaChartBar className="text-5xl" />,
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
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

      {/* CLOUD PLATFORMS */}
      <section className="py-20 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Cloud Platforms We Excel In
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              "AWS",
              "Microsoft Azure",
              "Google Cloud",
              "DigitalOcean",
              "Vercel",
            ].map((platform, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 hover:bg-cyan-400/10 border border-white/10 hover:border-cyan-400 px-12 py-6 rounded-2xl text-2xl font-semibold transition"
              >
                {platform}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose Our Cloud Solutions?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Cost Optimization",
                desc: "Reduce infrastructure costs by up to 40%",
              },
              {
                title: "High Availability",
                desc: "99.99% uptime with multi-region deployments",
              },
              {
                title: "Security First",
                desc: "Enterprise-grade security and compliance",
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
                  {i === 0 ? "💰" : i === 1 ? "🌍" : "🔒"}
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
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Let’s design a cloud strategy that scales with your business.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition flex items-center gap-3 mx-auto"
          >
            Start Cloud Migration Discussion
            <span className="text-2xl">→</span>
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default CloudSolutions;
