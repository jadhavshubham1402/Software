import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaCloud,
  FaServer,
  FaShieldAlt,
  FaRocket,
  FaChartBar,
  FaCubes,
} from "react-icons/fa";

const Cloud = () => {
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
            backgroundImage: "url('/images/cloud1.jpg')",
            opacity: 0.75,
          }}
        />
        <div className="absolute inset-0 bg-[#0A1428]/80" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/30 text-cyan-400 text-sm mb-6">
                <FaCloud /> Cloud Technologies
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Cloud Technologies
                <br />
                <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  Built for Scale
                </span>
              </h1>
              <p className="text-2xl text-white/80 max-w-xl">
                Secure, scalable, and cost-efficient cloud infrastructure and
                solutions for modern businesses.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/images/cloud1.jpg"
                alt="Cloud Technologies"
                className="rounded-3xl shadow-2xl max-w-lg border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CLOUD PLATFORMS */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Cloud Platforms We Master
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Amazon Web Services",
                desc: "EC2, S3, Lambda, RDS, ECS, and advanced AWS services",
                icon: <FaCloud className="text-6xl" />,
              },
              {
                name: "Microsoft Azure",
                desc: "App Service, Kubernetes Service, AI + Machine Learning tools",
                icon: <FaServer className="text-6xl" />,
              },
              {
                name: "Google Cloud Platform",
                desc: "Compute Engine, Cloud Run, BigQuery, and Vertex AI",
                icon: <FaCubes className="text-6xl" />,
              },
            ].map((platform, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-white/5 border border-white/10 hover:border-cyan-400/50 rounded-3xl p-10 transition-all"
              >
                <div className="text-cyan-400 mb-6">{platform.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition">
                  {platform.name}
                </h3>
                <p className="text-white/70">{platform.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR CLOUD SERVICES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Cloud Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud Migration",
                desc: "Seamless transition from on-premise to cloud with minimal downtime",
                icon: <FaRocket />,
              },
              {
                title: "Infrastructure as Code",
                desc: "Terraform, CloudFormation, Pulumi — automated & version-controlled infra",
                icon: <FaCubes />,
              },
              {
                title: "Serverless Architecture",
                desc: "Cost-efficient, auto-scaling serverless solutions",
                icon: <FaCloud />,
              },
              {
                title: "Kubernetes & Containers",
                desc: "Orchestration, deployment, and management of containerized apps",
                icon: <FaServer />,
              },
              {
                title: "Cloud Security & Compliance",
                desc: "Zero-trust security, encryption, and regulatory compliance",
                icon: <FaShieldAlt />,
              },
              {
                title: "Monitoring & Observability",
                desc: "Advanced logging, monitoring, and real-time alerting systems",
                icon: <FaChartBar />,
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group bg-white/5 border border-white/10 hover:border-cyan-400/50 rounded-3xl p-10 transition-all"
              >
                <div className="text-5xl text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition">
                  {service.title}
                </h3>
                <p className="text-white/70">{service.desc}</p>
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
            Let’s design a secure, scalable, and cost-optimized cloud strategy
            that grows with your business.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition flex items-center gap-3 mx-auto"
          >
            Start Cloud Consultation
            <span className="text-2xl">→</span>
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Cloud;
