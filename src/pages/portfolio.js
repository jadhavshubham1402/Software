import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const projects = [
    {
      title: "MedCare - Healthcare Platform",
      category: "Healthcare",
      image: "/images/portfolio/medcare.jpg",
      description:
        "Comprehensive digital health platform with telemedicine and patient management",
      link: "#",
    },
    {
      title: "PaySwift - Fintech App",
      category: "Fintech",
      image: "/images/portfolio/payswift.jpg",
      description:
        "Digital wallet and payment solution with real-time transactions",
      link: "#",
    },
    {
      title: "EduSphere - Learning Platform",
      category: "Education",
      image: "/images/portfolio/edusphere.jpg",
      description:
        "Interactive LMS with AI-powered personalized learning paths",
      link: "#",
    },
    {
      title: "ShopFlow - E-Commerce Platform",
      category: "E-Commerce",
      image: "/images/portfolio/shopflow.jpg",
      description:
        "High-conversion multi-vendor marketplace with advanced analytics",
      link: "#",
    },
    {
      title: "LogiTrack - Logistics System",
      category: "Logistics",
      image: "/images/portfolio/logitrack.jpg",
      description:
        "Real-time fleet management and supply chain visibility platform",
      link: "#",
    },
    {
      title: "SmartBank - Digital Banking",
      category: "Fintech",
      image: "/images/portfolio/smartbank.jpg",
      description:
        "Full-featured mobile banking application with AI fraud detection",
      link: "#",
    },
  ];

  return (
    <div className="bg-[#0A0A0F] text-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-2xl text-white/70">
            Real results from real projects. Every solution tells a story of
            innovation and impact.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className="group relative bg-white/5 border border-white/10 hover:border-white/30 rounded-3xl overflow-hidden cursor-pointer"
              >
                <div className="aspect-video bg-zinc-900 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                <div className="p-8">
                  <div className="uppercase text-xs tracking-widest text-emerald-400 mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-white/70 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gradient-to-r from-emerald-600 to-teal-500 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-xl mb-10">
            Let’s create something exceptional together.
          </p>
          <button className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition">
            Start Your Project →
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
