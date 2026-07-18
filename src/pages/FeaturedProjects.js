import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    id: 1,
    image: "/images/project1.jpg",
    category: "Healthcare",
    title: "Hospital Management System",
    description:
      "Comprehensive cloud-based platform with patient records, appointments, billing, and telemedicine.",
    technologies: ["React", "Node.js", "MongoDB"],
    path: "/portfolio/hospital-management-system",
  },
  {
    id: 2,
    image: "/images/project2.jpg",
    category: "FinTech",
    title: "Digital Banking Platform",
    description:
      "Secure neobanking solution with payments, KYC, loan management, and real-time analytics.",
    technologies: ["Next.js", "NestJS", "PostgreSQL"],
    path: "/portfolio/digital-banking-platform",
  },
  {
    id: 3,
    image: "/images/project3.jpg",
    category: "E-Commerce",
    title: "Multi-Vendor Marketplace",
    description:
      "Scalable marketplace with vendor dashboard, inventory, payments, and order tracking.",
    technologies: ["React", "Express", "MongoDB"],
    path: "/portfolio/multi-vendor-marketplace",
  },
];

const FeaturedProjects = () => {
  const navigate = useNavigate();

  const handleViewCaseStudy = (path) => {
    navigate(path);
  };

  return (
    <section id="featured-projects" className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="uppercase tracking-widest text-blue-600 font-semibold text-sm">
            RECENT WORK
          </span>
          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            Featured Projects
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real clients. Explore some of the impactful
            digital solutions we've delivered.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200"
            >
              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
                  {project.category}
                </span>

                <h3 className="text-2xl font-semibold text-gray-900 mt-5 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleViewCaseStudy(project.path)}
                  className="mt-8 flex items-center gap-3 text-blue-600 font-semibold hover:gap-4 transition-all duration-300 group-hover:text-blue-700"
                >
                  View Case Study
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate("/portfolio")}
            className="inline-flex items-center gap-3 bg-gray-900 hover:bg-black text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
          >
            View All Projects
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
