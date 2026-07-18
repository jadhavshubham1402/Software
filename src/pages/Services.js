import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaRobot,
  FaPalette,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    id: "01",
    icon: <FaCode />,
    title: "Web Development",
    description:
      "Modern, high-performance web applications using latest technologies.",
    path: "/services/web-development",
  },
  {
    id: "02",
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description: "Native & cross-platform mobile apps with exceptional UX.",
    path: "/services/mobile-development",
  },
  {
    id: "03",
    icon: <FaCloud />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure, migration & DevOps.",
    path: "/services/cloud-solutions",
  },
  {
    id: "04",
    icon: <FaRobot />,
    title: "AI & Machine Learning",
    description: "Intelligent automation and data-driven AI solutions.",
    path: "/services/ai-ml",
  },
  {
    id: "05",
    icon: <FaPalette />,
    title: "UI / UX Design",
    description: "Beautiful, intuitive and user-centered digital experiences.",
    path: "/services/ui-ux-design",
  },
  {
    id: "06",
    icon: <FaShieldAlt />,
    title: "Support & Maintenance",
    description: "Reliable ongoing support and continuous improvement.",
    path: "/services/support-maintenance",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleLearnMore = (path) => {
    navigate(path);
  };

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm">
            OUR EXPERTISE
          </span>
          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            Comprehensive Digital Solutions
          </h2>
          <p className="mt-5 text-xl text-gray-600 max-w-2xl mx-auto">
            We deliver end-to-end technology solutions that help businesses
            innovate and scale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group bg-white border border-gray-200 hover:border-gray-800 rounded-3xl p-10 transition-all duration-500 flex flex-col h-full hover:shadow-xl"
            >
              {/* Icon */}
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-2xl text-4xl mb-8 group-hover:rotate-6 transition-transform">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Learn More */}
              <button
                onClick={() => handleLearnMore(service.path)}
                className="mt-10 flex items-center gap-3 text-blue-600 font-medium group-hover:gap-4 transition-all duration-300 self-start"
              >
                Learn More
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;