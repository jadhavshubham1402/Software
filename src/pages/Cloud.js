import React from "react";
import { motion } from "framer-motion";

const Cloud = () => {
  return (
    <div className="bg-[#0A0A0F] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Cloud Technologies
                <br />
                <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
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
                src="/images/cloud-tech-hero.png"
                alt="Cloud Technologies"
                className="rounded-3xl shadow-2xl max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Cloud Platforms We Master
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Amazon Web Services",
                desc: "EC2, S3, Lambda, RDS, and more",
                icon: "☁️",
              },
              {
                name: "Microsoft Azure",
                desc: "Azure App Service, Kubernetes, and AI services",
                icon: "🔷",
              },
              {
                name: "Google Cloud Platform",
                desc: "Compute Engine, Cloud Run, and BigQuery",
                icon: "🌥️",
              },
            ].map((platform, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="group bg-white/5 border border-white/10 hover:border-sky-400/50 rounded-3xl p-10 transition-all"
              >
                <div className="text-6xl mb-6">{platform.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{platform.name}</h3>
                <p className="text-white/70">{platform.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Cloud Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Cloud Migration",
                desc: "Seamless transition to the cloud with minimal downtime",
              },
              {
                title: "Infrastructure as Code",
                desc: "Terraform, CloudFormation, and Pulumi",
              },
              {
                title: "Serverless Architecture",
                desc: "Cost-efficient, scalable serverless solutions",
              },
              {
                title: "Kubernetes & Containers",
                desc: "Orchestration and management of containerized applications",
              },
              {
                title: "Cloud Security & Compliance",
                desc: "Enterprise-grade security and regulatory compliance",
              },
              {
                title: "Monitoring & Observability",
                desc: "Advanced monitoring, logging, and alerting systems",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white/5 border border-white/10 hover:border-cyan-400/50 rounded-3xl p-10 transition-all"
              >
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-white/70">{service.desc}</p>
              </motion.div>
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
            Let’s design a cloud strategy that grows with your business.
          </p>
          <button className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition">
            Start Cloud Consultation →
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cloud;
