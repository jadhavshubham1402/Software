import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaChartBar,
  FaUsers,
} from "react-icons/fa";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const projectsData = {
    "hospital-management-system": {
      title: "Hospital Management System",
      category: "Healthcare",
      image: "/images/project1.jpg",
      client: "City General Hospital",
      year: "2025",
      duration: "8 months",
      teamSize: "12 developers",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Socket.io",
        "AWS",
      ],
      longDescription:
        "A comprehensive cloud-based hospital management platform designed to streamline patient care, administrative operations, and clinical workflows.",
      challenge:
        "The hospital was struggling with fragmented legacy systems, manual paperwork, delayed reporting, and inefficient patient flow management.",
      solution:
        "We built a unified, real-time hospital management system with integrated modules for patient records, appointment scheduling, billing, pharmacy, lab integration, and telemedicine.",
      result:
        "60% reduction in administrative workload, 45% faster patient processing, and significantly improved patient satisfaction scores.",
      impact: [
        "Digitalized 98% of patient records",
        "Reduced appointment no-show rate by 35%",
        "Real-time bed availability tracking",
        "Integrated with insurance providers",
      ],
    },

    "digital-banking-platform": {
      title: "Digital Banking Platform",
      category: "FinTech",
      image: "/images/project2.jpg",
      client: "Nexus Finance",
      year: "2025",
      duration: "10 months",
      teamSize: "15 developers",
      technologies: [
        "Next.js",
        "NestJS",
        "PostgreSQL",
        "Stripe",
        "Redis",
        "Docker",
      ],
      longDescription:
        "A secure, scalable, and user-friendly digital banking platform that modernized the entire banking experience for Nexus Finance.",
      challenge:
        "Legacy infrastructure couldn't support modern digital banking expectations and strict regulatory compliance requirements.",
      solution:
        "Developed a full-featured neobanking platform with KYC automation, payments, loan management, investment tracking, and AI-powered fraud detection.",
      result:
        "Successfully onboarded 50,000+ users within 6 months with excellent security ratings and high user retention.",
      impact: [
        "99.99% transaction success rate",
        "Reduced customer acquisition cost by 42%",
        "Achieved PCI-DSS and RBI compliance",
        "Built-in credit scoring system",
      ],
    },

    "multi-vendor-marketplace": {
      title: "Multi-Vendor Marketplace",
      category: "E-Commerce",
      image: "/images/project3.jpg",
      client: "MarketHub",
      year: "2025",
      duration: "9 months",
      teamSize: "11 developers",
      technologies: ["React", "Express", "MongoDB", "Stripe", "AWS", "Redis"],
      longDescription:
        "A powerful multi-vendor e-commerce platform enabling seamless buying and selling experiences for hundreds of vendors and thousands of customers.",
      challenge:
        "Building a scalable marketplace that could efficiently manage multiple sellers, inventory, payments, and disputes.",
      solution:
        "Created a feature-rich marketplace with advanced vendor dashboard, real-time inventory sync, commission management, and comprehensive order tracking.",
      result:
        "Grew to over 300 active vendors and 15,000+ monthly orders within the first 6 months.",
      impact: [
        "Automated commission settlement",
        "Real-time seller analytics dashboard",
        "95% customer satisfaction rate",
        "Multi-language & multi-currency support",
      ],
    },

    "medcare-healthcare-platform": {
      title: "MedCare - Healthcare Platform",
      category: "Healthcare",
      image: "https://picsum.photos/id/107/1200/600",
      client: "MedLife Hospitals",
      year: "2025",
      duration: "7 months",
      teamSize: "9 developers",
      technologies: [
        "React Native",
        "Node.js",
        "MongoDB",
        "WebRTC",
        "Firebase",
      ],
      longDescription:
        "A revolutionary digital healthcare platform that connects patients, doctors, and hospitals seamlessly through telemedicine and smart health records.",
      challenge:
        "Limited access to quality healthcare in tier-2/3 cities with poor coordination between stakeholders.",
      solution:
        "Built a complete telemedicine ecosystem with video consultations, electronic health records, lab integration, and AI health insights.",
      result:
        "45% reduction in appointment wait times and 98% patient satisfaction score.",
      impact: [
        "45,000+ successful consultations",
        "Integrated with 50+ diagnostic labs",
        "AI-powered symptom checker",
        "Prescription & medicine delivery integration",
      ],
    },

    "payswift-fintech-app": {
      title: "PaySwift - Fintech App",
      category: "FinTech",
      image: "https://picsum.photos/id/201/1200/600",
      client: "PaySwift Financial",
      year: "2025",
      duration: "6 months",
      teamSize: "8 developers",
      technologies: ["Flutter", "Node.js", "PostgreSQL", "Stripe", "Razorpay"],
      longDescription:
        "A secure and feature-rich digital wallet and payment solution enabling instant transactions with advanced security features.",
      challenge:
        "Need for a fast, secure, and user-friendly payment platform in a highly competitive fintech market.",
      solution:
        "Developed a scalable fintech application with biometric authentication, real-time fraud detection, and multiple payment gateways.",
      result:
        "Processed millions of transactions with 99.99% uptime and excellent user ratings.",
      impact: [
        "2.3 Million+ downloads",
        "Instant money transfer feature",
        "Bill payment & recharges",
        "Investment & mutual fund module",
      ],
    },

    "edusphere-learning-platform": {
      title: "EduSphere - Learning Platform",
      category: "Education",
      image: "https://picsum.photos/id/1015/1200/600",
      client: "EduSphere Academy",
      year: "2026",
      duration: "11 months",
      teamSize: "14 developers",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Supabase",
        "OpenAI",
        "TensorFlow.js",
      ],
      longDescription:
        "An intelligent learning management system offering personalized learning paths powered by AI and modern interactive tools.",
      challenge:
        "Traditional education models failing to engage modern students and track individual progress effectively.",
      solution:
        "Created an interactive platform with AI recommendations, live classes, gamification, progress analytics, and certification management.",
      result:
        "65% improvement in student engagement and learning outcomes across partner institutions.",
      impact: [
        "Used by 180+ educational institutions",
        "AI-powered personalized learning paths",
        "Interactive quizzes and assessments",
        "Parent-teacher communication portal",
      ],
    },

    "logitrack-supply-chain": {
      title: "LogiTrack - Supply Chain Platform",
      category: "Logistics",
      image: "https://picsum.photos/id/180/1200/600",
      client: "SwiftLogistics",
      year: "2024",
      duration: "9 months",
      teamSize: "10 developers",
      technologies: ["React", "Django", "PostgreSQL", "Google Maps", "IoT"],
      longDescription:
        "A real-time fleet management and supply chain visibility platform with advanced route optimization and warehouse automation.",
      challenge:
        "Lack of visibility and inefficient route planning leading to high operational costs.",
      solution:
        "Built an end-to-end logistics platform with GPS tracking, predictive maintenance, and automated warehouse management.",
      result: "Reduced delivery time by 42% and fuel costs by 28%.",
      impact: [
        "Real-time shipment tracking",
        "Automated route optimization",
        "Warehouse inventory management",
        "Driver performance analytics",
      ],
    },

    "realestate-pro-platform": {
      title: "RealEstate Pro Platform",
      category: "Real Estate",
      image: "https://picsum.photos/id/251/1200/600",
      client: "Prime Homes Realty",
      year: "2025",
      duration: "8 months",
      teamSize: "13 developers",
      technologies: ["Next.js", "NestJS", "MongoDB", "Three.js", "Stripe"],
      longDescription:
        "A comprehensive real estate platform with virtual property tours, CRM, automated lead management, and advanced analytics.",
      challenge: "Inefficient property listing and lead management processes.",
      solution:
        "Developed a modern real estate ecosystem with 3D virtual tours, intelligent matching, and powerful CRM tools.",
      result: "Listed 12,000+ properties and increased lead conversion by 55%.",
      impact: [
        "Virtual 3D property tours",
        "AI-based property recommendation",
        "Automated document generation",
        "Integrated payment gateway",
      ],
    },
  };

  const project = projectsData[slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0A1428] text-white flex flex-col items-center justify-center px-6">
        <h1 className="text-5xl font-bold mb-4">Project Not Found</h1>
        <button
          onClick={() => navigate("/portfolio")}
          className="mt-8 bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-2xl font-semibold transition"
        >
          ← Back to Portfolio
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#0A1428] text-white min-h-screen pb-24">
      <div className="max-w-6xl mx-auto px-6 pt-28">
        <button
          onClick={() => navigate("/portfolio")}
          className="flex items-center gap-3 text-cyan-400 hover:text-white mb-10 transition-all group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition" />
          Back to All Projects
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          src={project.image}
          alt={project.title}
          className="w-full rounded-3xl shadow-2xl aspect-video object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-16">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-16">
            <div>
              <div className="flex items-center gap-4 text-cyan-400 text-sm tracking-widest mb-4">
                <span>{project.category}</span> • <span>{project.year}</span> •{" "}
                <span>{project.duration}</span>
              </div>
              <h1 className="text-5xl lg:text-5xl font-bold leading-tight">
                {project.title}
              </h1>
            </div>

            <p className="text-xl text-white/80 leading-relaxed">
              {project.longDescription}
            </p>

            <div className="space-y-12">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
                <h3 className="text-2xl font-semibold mb-5 flex items-center gap-3">
                  <FaCheckCircle className="text-orange-400" /> The Challenge
                </h3>
                <p className="text-white/80 text-lg">{project.challenge}</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
                <h3 className="text-2xl font-semibold mb-5 flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400" /> Our Solution
                </h3>
                <p className="text-white/80 text-lg">{project.solution}</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/30 to-transparent border border-cyan-400/30 rounded-3xl p-10">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <FaChartBar className="text-cyan-400" /> Key Results & Impact
                </h3>
                <p className="text-xl font-medium text-cyan-300 mb-8">
                  {project.result}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.impact.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-white/80"
                    >
                      <FaCheckCircle className="mt-1 text-green-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sticky top-8">
              <h3 className="text-2xl font-semibold mb-8">
                Project Information
              </h3>

              <div className="space-y-8">
                <div>
                  <p className="text-white/60 text-sm mb-1">Client</p>
                  <p className="text-xl font-medium">{project.client}</p>
                </div>

                <div>
                  <p className="text-white/60 text-sm mb-1">Team Size</p>
                  <p className="text-xl font-medium flex items-center gap-2">
                    <FaUsers /> {project.teamSize}
                  </p>
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
                className="mt-12 w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-5 rounded-2xl transition text-lg"
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
