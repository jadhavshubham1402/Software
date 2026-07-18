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
  FaUsers,
  FaChartLine,
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
      <section className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/cloudSection1.jpg')",
            opacity: 0.75,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1428]/90 via-[#0A1428]/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-sm text-cyan-400 text-sm">
                <FaCloud className="text-xl" />
                <span className="uppercase tracking-widest font-medium">
                  Cloud Solutions
                </span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter">
                Cloud Solutions That
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-blue-300 bg-clip-text text-transparent">
                  Scale With Your Business
                </span>
              </h1>

              <p className="text-2xl text-white/80 max-w-lg">
                Secure, scalable, and cost-efficient cloud infrastructure,
                migration, and optimization services.
              </p>
            </div>

            <div className="relative hidden lg:flex justify-center">
              <div className="relative">
                <img
                  src="/images/cloudSection2.jpg"
                  alt="Cloud Solutions"
                  className="rounded-3xl shadow-2xl border border-white/10"
                />
                <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                  <div className="text-4xl font-bold text-cyan-400">40%</div>
                  <div className="text-sm text-white/70">
                    Avg. Cost Reduction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Our Cloud Solutions</h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              Comprehensive cloud services tailored for modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud Migration",
                desc: "Seamless and secure transition from on-premise to cloud with minimal downtime.",
                icon: <FaRocket className="text-5xl" />,
              },
              {
                title: "Multi-Cloud Architecture",
                desc: "Expert solutions across AWS, Azure, Google Cloud, and hybrid environments.",
                icon: <FaCloud className="text-5xl" />,
              },
              {
                title: "Serverless Solutions",
                desc: "Cost-efficient, scalable applications using Lambda, Cloud Functions, and more.",
                icon: <FaServer className="text-5xl" />,
              },
              {
                title: "Kubernetes & Containers",
                desc: "Orchestration and management of containerized workloads at scale.",
                icon: <FaSync className="text-5xl" />,
              },
              {
                title: "Cloud Security & Compliance",
                desc: "Enterprise-grade security, SOC2, ISO27001, and GDPR compliance.",
                icon: <FaShieldAlt className="text-5xl" />,
              },
              {
                title: "Disaster Recovery & Backup",
                desc: "Robust backup strategies and business continuity planning.",
                icon: <FaChartBar className="text-5xl" />,
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
                <div className="text-cyan-400 mb-8 transition-transform group-hover:scale-110">
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

      {/* CLOUD PLATFORMS */}
      <section className="py-20 bg-black/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-4">Cloud Platforms We Master</h2>
          <p className="text-white/70 mb-12">
            Expertise across all major cloud providers
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              "AWS",
              "Microsoft Azure",
              "Google Cloud Platform",
              "DigitalOcean",
              "Vercel",
              "Heroku",
            ].map((platform) => (
              <motion.div
                key={platform}
                whileHover={{ scale: 1.1 }}
                className="bg-white/5 hover:bg-cyan-400/10 border border-white/10 hover:border-cyan-400 px-10 py-5 rounded-2xl text-2xl font-semibold transition"
              >
                {platform}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Why Choose Our Cloud Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaRocket />,
                title: "Cost Optimization",
                desc: "Reduce infrastructure costs by 30-50% with smart architecture.",
              },
              {
                icon: <FaUsers />,
                title: "Scalability & Flexibility",
                desc: "Grow effortlessly with auto-scaling and on-demand resources.",
              },
              {
                icon: <FaShieldAlt />,
                title: "Enterprise Security",
                desc: "Advanced security, compliance, and data protection standards.",
              },
              {
                icon: <FaChartLine />,
                title: "Performance & Reliability",
                desc: "99.99% uptime with multi-region redundancy.",
              },
              {
                icon: <FaSync />,
                title: "Continuous Optimization",
                desc: "Ongoing monitoring and optimization for peak efficiency.",
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
                <div className="text-5xl mb-6 text-cyan-400">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - ONLY ONE */}
      <section className="py-28 bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-700 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Let’s design a secure, scalable cloud strategy tailored to your
            business.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition flex items-center gap-3 mx-auto shadow-2xl"
          >
            Start Your Cloud Journey
            <span className="text-2xl">→</span>
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default CloudSolutions;
