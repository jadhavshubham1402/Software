import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const projectsData = {
    // From Featured Projects
    "hospital-management-system": {
      title: "Hospital Management System",
      category: "Healthcare",
      image: "/images/project1.jpg",
      client: "City General Hospital",
      year: "2025",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
      longDescription:
        "A comprehensive cloud-based hospital management platform designed to streamline patient care and hospital operations.",
      challenge:
        "Fragmented systems and manual paperwork leading to delays and errors in patient management.",
      solution:
        "Built a unified platform with real-time updates, appointment scheduling, billing, telemedicine, and patient records.",
      result:
        "Reduced administrative workload by 60% and significantly improved patient experience.",
    },
    "digital-banking-platform": {
      title: "Digital Banking Platform",
      category: "FinTech",
      image: "/images/project2.jpg",
      client: "Nexus Finance",
      year: "2025",
      technologies: ["Next.js", "NestJS", "PostgreSQL", "Stripe", "Redis"],
      longDescription:
        "A secure and modern digital banking solution with advanced security features and user-friendly interface.",
      challenge:
        "Need for a secure, compliant, and scalable digital banking platform.",
      solution:
        "Developed a full-featured banking system with KYC, payments, loans, and AI-powered fraud detection.",
      result:
        "Successfully onboarded 50,000+ users with excellent security ratings.",
    },
    "multi-vendor-marketplace": {
      title: "Multi-Vendor Marketplace",
      category: "E-Commerce",
      image: "/images/project3.jpg",
      client: "MarketHub",
      year: "2025",
      technologies: ["React", "Express", "MongoDB", "Stripe", "AWS"],
      longDescription:
        "A powerful multi-vendor e-commerce platform with robust vendor and inventory management.",
      challenge:
        "Building a scalable marketplace that supports multiple sellers efficiently.",
      solution:
        "Created a feature-rich marketplace with real-time inventory, payments, seller dashboard, and order tracking.",
      result:
        "Grew to 300+ active vendors within the first 6 months of launch.",
    },

    // Additional Projects
    "medcare-healthcare-platform": {
      title: "MedCare - Healthcare Platform",
      category: "Healthcare",
      image: "https://picsum.photos/id/107/1200/600",
      client: "MedLife Hospitals",
      year: "2025",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC", "Tailwind CSS"],
      longDescription:
        "A comprehensive digital health platform that revolutionized patient care with seamless telemedicine and intelligent appointment management.",
      challenge:
        "Legacy systems causing delays in patient care and fragmented data.",
      solution:
        "Built a unified cloud-based platform with real-time sync and video consultations.",
      result:
        "45% reduction in appointment wait times and 98% patient satisfaction.",
    },
    "payswift-fintech-app": {
      title: "PaySwift - Fintech App",
      category: "Fintech",
      image: "https://picsum.photos/id/201/1200/600",
      client: "PaySwift Financial",
      year: "2025",
      technologies: ["Next.js", "NestJS", "PostgreSQL", "Stripe"],
      longDescription:
        "A secure digital wallet and payment solution enabling instant transactions with advanced security.",
      challenge: "Need for a fast, secure, and user-friendly payment platform.",
      solution:
        "Developed a scalable fintech application with biometric authentication and real-time fraud detection.",
      result: "Processed millions of transactions with 99.99% uptime.",
    },
    "edusphere-learning-platform": {
      title: "EduSphere - Learning Platform",
      category: "Education",
      image: "https://picsum.photos/id/1015/1200/600",
      client: "EduSphere Academy",
      year: "2026",
      technologies: ["React", "Firebase", "TensorFlow.js", "Node.js"],
      longDescription:
        "An intelligent learning management system offering personalized learning paths powered by AI.",
      challenge:
        "Traditional education models failing to engage modern students.",
      solution:
        "Created an interactive platform with AI recommendations, live classes, and gamification.",
      result: "65% improvement in student engagement and learning outcomes.",
    },
  };

  const project = projectsData[slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0A1428] text-white flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-4">Project Not Found</h1>
        <p className="text-white/70 mb-8">
          The project you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate("/portfolio")}
          className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold transition"
        >
          ← Back to Portfolio
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#0A1428] text-white min-h-screen pb-20">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 pt-32">
        <button
          onClick={() => navigate("/portfolio")}
          className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 mb-10 transition-all group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition" />
          Back to All Projects
        </button>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto px-6"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-3xl shadow-2xl"
        />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 mt-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="uppercase tracking-widest text-cyan-400 mb-3 text-sm">
              {project.category} • {project.year}
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-8">
              {project.title}
            </h1>

            <p className="text-xl text-white/80 leading-relaxed mb-12">
              {project.longDescription}
            </p>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <FaCheckCircle className="text-green-400" /> The Challenge
                </h3>
                <p className="text-white/70 text-lg">{project.challenge}</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <FaCheckCircle className="text-green-400" /> Our Solution
                </h3>
                <p className="text-white/70 text-lg">{project.solution}</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <FaCheckCircle className="text-green-400" /> The Result
                </h3>
                <p className="text-white/70 text-lg font-medium">
                  {project.result}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sticky top-8">
              <h3 className="text-xl font-semibold mb-6">Project Details</h3>

              <div className="space-y-8">
                <div>
                  <p className="text-white/60 text-sm mb-1">Client</p>
                  <p className="font-medium text-lg">{project.client}</p>
                </div>

                <div>
                  <p className="text-white/60 text-sm mb-3">
                    Technologies Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-white/10 px-4 py-2 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate("/contact")}
                className="mt-10 w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-4 rounded-2xl transition"
              >
                Start a Similar Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
