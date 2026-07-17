import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    image: "/images/project1.jpg",
    category: "Healthcare",
    title: "Hospital Management System",
    description:
      "A cloud-based hospital management platform with patient records, appointments, billing, and telemedicine.",
    technologies: ["React", "Node.js", "MongoDB"],
    path: "/portfolio/hospital-management-system", // Individual project page
  },
  {
    id: 2,
    image: "/images/project2.jpg",
    category: "FinTech",
    title: "Digital Banking Platform",
    description:
      "A secure banking application with payment gateway, KYC, loan management, and analytics dashboard.",
    technologies: ["Next.js", "NestJS", "PostgreSQL"],
    path: "/portfolio/digital-banking-platform",
  },
  {
    id: 3,
    image: "/images/project3.jpg",
    category: "E-Commerce",
    title: "Multi-Vendor Marketplace",
    description:
      "A scalable marketplace with vendor management, inventory, payments, and order tracking.",
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
    <section id="featured-projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-600 uppercase tracking-widest font-semibold">
            Case Studies
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            Featured Projects
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 leading-8">
            Explore some of the innovative software solutions we've delivered
            for businesses across multiple industries.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold mt-6">{project.title}</h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Functional Button */}
                <button
                  onClick={() => handleViewCaseStudy(project.path)}
                  className="mt-8 flex items-center gap-3 text-blue-600 font-semibold hover:gap-5 transition-all duration-300 group-hover:text-blue-700"
                >
                  View Case Study
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/portfolio")}
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
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
