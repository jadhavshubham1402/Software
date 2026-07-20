import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  const handleStartProject = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const projects = [
    {
      id: 1,
      slug: "hospital-management-system",
      title: "Hospital Management System",
      category: "Healthcare",
      image: "/images/project1.jpg",
      description:
        "Cloud-based hospital management platform with patient records, appointments, billing, and telemedicine.",
      year: "2025",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
    },
    {
      id: 2,
      slug: "digital-banking-platform",
      title: "Digital Banking Platform",
      category: "FinTech",
      image: "/images/project2.jpg",
      description:
        "Secure neobanking solution with payments, KYC, loan management, and real-time analytics.",
      year: "2025",
      technologies: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
    },
    {
      id: 3,
      slug: "multi-vendor-marketplace",
      title: "Multi-Vendor Marketplace",
      category: "E-Commerce",
      image: "/images/project3.jpg",
      description:
        "Scalable marketplace with vendor dashboard, inventory, payments, and order tracking.",
      year: "2024",
      technologies: ["React", "Express", "MongoDB", "Stripe"],
    },
    {
      id: 4,
      slug: "medcare-healthcare-platform",
      title: "MedCare - Healthcare Platform",
      category: "Healthcare",
      image: "https://picsum.photos/id/107/800/500",
      description:
        "Comprehensive digital health platform with telemedicine and patient management.",
      year: "2025",
      technologies: ["React Native", "Firebase", "AI"],
    },
    {
      id: 5,
      slug: "payswift-fintech-app",
      title: "PaySwift - Fintech App",
      category: "FinTech",
      image: "https://picsum.photos/id/201/800/500",
      description:
        "Digital wallet and payment solution with real-time transactions and fraud detection.",
      year: "2024",
      technologies: ["Flutter", "Node.js", "PostgreSQL"],
    },
    {
      id: 6,
      slug: "edusphere-learning-platform",
      title: "EduSphere - Learning Platform",
      category: "Education",
      image: "https://picsum.photos/id/1015/800/500",
      description:
        "Interactive LMS with AI-powered personalized learning paths and progress tracking.",
      year: "2025",
      technologies: ["Next.js", "Tailwind", "Supabase"],
    },
  ];

  const handleProjectClick = (slug) => {
    navigate(`/portfolio/${slug}`);
  };

  return (
    <div className="bg-[#0A1428] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://picsum.photos/id/1015/1920/1080')",
          }}
        />
        <div className="absolute inset-0 bg-[#0A1428]/85" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
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
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                onClick={() => handleProjectClick(project.slug)}
                className="group bg-white/5 border border-white/10 hover:border-cyan-400/50 rounded-3xl overflow-hidden cursor-pointer flex flex-col h-full"
              >
                {/* Image */}
                <div className="aspect-[16/10] bg-zinc-900 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                    {project.year}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col">
                  <div className="uppercase text-xs tracking-widest text-cyan-400 mb-3">
                    {project.category}
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-white/70 text-[15px] leading-relaxed flex-1 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-white/10 px-3 py-1 rounded-full text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Button */}
                  <div className="mt-6 flex items-center gap-2 text-cyan-400 text-sm font-medium group-hover:gap-3 transition-all">
                    View Project Details
                    <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-700 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-5">Have a Project in Mind?</h2>
          <p className="text-lg text-white/90 mb-8">
            Let’s create something exceptional together.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleStartProject}
            className="bg-white text-black px-12 py-5 rounded-2xl font-semibold text-lg hover:bg-white/90 transition-all flex items-center gap-3 mx-auto"
          >
            Start Your Project <span className="text-2xl">→</span>
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
