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
  FaUsers,
  FaLightbulb,
  FaTachometerAlt,
  FaArrowRight,
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
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/cloud1.jpg')",
            opacity: 0.65,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1428]/90 via-[#0A1428]/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm mb-6">
                <FaCloud /> Cloud Technologies
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                Cloud Solutions That{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                  Scale With You
                </span>
              </h1>

              <p className="text-2xl text-white/80 max-w-xl mb-10">
                Secure, scalable, and cost-efficient cloud infrastructure and
                solutions designed for modern, high-growth businesses.
              </p>

              <div className="flex gap-6 text-sm text-white/70">
                <div>🚀 Rapid Deployment</div>
                <div>💰 Cost Optimization</div>
                <div>🔒 Enterprise Security</div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/images/cloud1.jpg"
                alt="Cloud Technologies"
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
            { number: "85+", label: "Cloud Projects" },
            { number: "60%", label: "Avg Cost Reduction" },
            { number: "99.99%", label: "Uptime Achieved" },
            { number: "40+", label: "Enterprise Clients" },
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

      {/* CLOUD PLATFORMS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Cloud Platforms We Master
            </h2>
            <p className="text-xl text-white/70">
              Expertise across all major cloud providers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Amazon Web Services",
                desc: "EC2, S3, Lambda, RDS, ECS, EKS, and full AWS ecosystem",
                icon: <FaCloud className="text-6xl" />,
              },
              {
                name: "Microsoft Azure",
                desc: "App Services, AKS, Azure SQL, Synapse, and AI tools",
                icon: <FaServer className="text-6xl" />,
              },
              {
                name: "Google Cloud Platform",
                desc: "GKE, Cloud Run, BigQuery, Vertex AI, and modern data solutions",
                icon: <FaCubes className="text-6xl" />,
              },
            ].map((platform, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-white/5 border border-white/10 hover:border-cyan-400/50 rounded-3xl p-10 transition-all duration-500"
              >
                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  {platform.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition-colors">
                  {platform.name}
                </h3>
                <p className="text-white/70">{platform.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR CLOUD SERVICES */}
      <section className="py-24 bg-black/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Cloud Services</h2>
            <p className="text-xl text-white/70">End-to-end cloud expertise</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud Migration",
                desc: "Seamless, low-risk migration from on-premise or legacy systems to the cloud.",
                icon: <FaRocket className="text-5xl" />,
              },
              {
                title: "Infrastructure as Code",
                desc: "Automated, version-controlled infrastructure using Terraform, CloudFormation & Pulumi.",
                icon: <FaCubes className="text-5xl" />,
              },
              {
                title: "Serverless Architecture",
                desc: "Highly scalable, cost-efficient serverless solutions with automatic scaling.",
                icon: <FaCloud className="text-5xl" />,
              },
              {
                title: "Kubernetes & Containers",
                desc: "Orchestration, deployment, and management of containerized applications.",
                icon: <FaServer className="text-5xl" />,
              },
              {
                title: "Cloud Security & Compliance",
                desc: "Zero-trust architecture, encryption, and full regulatory compliance.",
                icon: <FaShieldAlt className="text-5xl" />,
              },
              {
                title: "Monitoring & Observability",
                desc: "Advanced logging, real-time monitoring, and intelligent alerting systems.",
                icon: <FaChartBar className="text-5xl" />,
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-white/5 border border-white/10 hover:border-cyan-400/50 rounded-3xl p-10 transition-all duration-500"
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
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Businesses Choose Our Cloud Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaTachometerAlt className="text-5xl" />,
                title: "Performance & Reliability",
                desc: "High availability, auto-scaling, and industry-leading uptime guarantees.",
              },
              {
                icon: <FaShieldAlt className="text-5xl" />,
                title: "Security First Approach",
                desc: "Enterprise-grade security, compliance, and data protection by design.",
              },
              {
                icon: <FaLightbulb className="text-5xl" />,
                title: "Cost Optimization",
                desc: "Smart architecture that significantly reduces infrastructure costs.",
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
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-2xl text-white/90 mb-12">
            Let’s build a secure, scalable, and cost-efficient cloud strategy
            tailored to your business.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-7 rounded-3xl font-semibold text-2xl hover:bg-white/95 transition flex items-center gap-4 mx-auto"
          >
            Start Your Cloud Journey
            <FaArrowRight />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Cloud;