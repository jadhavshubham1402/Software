import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const Portfolio = () => {
  const navigate = useNavigate();

  const handleStartProject = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const projects = [
    {
      title: "MedCare - Healthcare Platform",
      category: "Healthcare",
      image: "https://picsum.photos/id/107/800/500",
      description:
        "Comprehensive digital health platform with telemedicine and patient management",
    },
    {
      title: "PaySwift - Fintech App",
      category: "Fintech",
      image: "https://picsum.photos/id/201/800/500",
      description:
        "Digital wallet and payment solution with real-time transactions",
    },
    {
      title: "EduSphere - Learning Platform",
      category: "Education",
      image: "https://picsum.photos/id/1015/800/500",
      description:
        "Interactive LMS with AI-powered personalized learning paths",
    },
    {
      title: "ShopFlow - E-Commerce Platform",
      category: "E-Commerce",
      image: "https://picsum.photos/id/1060/800/500",
      description:
        "High-conversion multi-vendor marketplace with advanced analytics",
    },
    {
      title: "LogiTrack - Logistics System",
      category: "Logistics",
      image: "https://picsum.photos/id/1077/800/500",
      description:
        "Real-time fleet management and supply chain visibility platform",
    },
    {
      title: "SmartBank - Digital Banking",
      category: "Fintech",
      image: "https://picsum.photos/id/251/800/500",
      description:
        "Full-featured mobile banking application with AI fraud detection",
    },
  ];

  return (
    <div className="bg-[#0A1428] text-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://picsum.photos/id/1015/1920/1080')",
          }}
        />
        <div className="absolute inset-0 bg-[#0A1428]/80" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-2xl text-white/70 max-w-2xl mx-auto">
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
                className="group bg-white/5 border border-white/10 hover:border-cyan-400/50 rounded-3xl overflow-hidden cursor-pointer"
              >
                <div className="aspect-video bg-zinc-900 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                <div className="p-8">
                  <div className="uppercase text-xs tracking-widest text-cyan-400 mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - WORKING BUTTON */}
      <section className="py-28 bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-700 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-xl text-white/90 mb-10">
            Let’s create something exceptional together.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleStartProject}
            className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition flex items-center gap-3 mx-auto"
          >
            Start Your Project
            <span className="text-2xl">→</span>
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
