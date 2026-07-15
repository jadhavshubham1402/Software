import React from "react";
import { motion } from "framer-motion";

const CloudSolutions = () => {
  return (
    <div className="bg-[#0A0A0F] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Cloud Solutions That
                <br />
                <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
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
                src="/images/cloud-solutions-hero.png"
                alt="Cloud Solutions"
                className="rounded-3xl shadow-2xl max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
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
                icon: "☁️",
              },
              {
                title: "AWS / Azure / GCP",
                desc: "Expert architecture and optimization across major cloud platforms",
                icon: "🏗️",
              },
              {
                title: "Serverless Solutions",
                desc: "Cost-efficient, scalable applications using Lambda & Cloud Functions",
                icon: "⚡",
              },
              {
                title: "Kubernetes & Containers",
                desc: "Orchestration and management of containerized workloads",
                icon: "📦",
              },
              {
                title: "Cloud Security & Compliance",
                desc: "Enterprise-grade security, SOC2, ISO27001, and GDPR compliance",
                icon: "🔒",
              },
              {
                title: "Disaster Recovery & Backup",
                desc: "Robust backup strategies and business continuity planning",
                icon: "🛡️",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 rounded-3xl p-10 transition-all duration-300"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition">
                  {service.title}
                </h3>
                <p className="text-white/70">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
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
              <div
                key={i}
                className="bg-white/10 px-12 py-6 rounded-2xl text-2xl font-semibold hover:bg-white/20 transition"
              >
                {platform}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              <div key={i} className="text-center">
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-white/70">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gradient-to-r from-sky-600 to-cyan-500 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl mb-10">
            Let’s design a cloud strategy that scales with your business.
          </p>
          <button className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition">
            Start Cloud Migration Discussion →
          </button>
        </div>
      </section>
    </div>
  );
};

export default CloudSolutions;
