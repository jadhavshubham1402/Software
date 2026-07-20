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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold tracking-widest uppercase text-xs">
            OUR EXPERTISE
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Comprehensive Digital Solutions
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            We deliver end-to-end technology solutions that help businesses
            innovate and scale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group bg-white border border-gray-100 hover:border-blue-200 rounded-3xl p-7 h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Icon + ID */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-2xl text-3xl shadow-md group-hover:rotate-6 transition-transform">
                  {service.icon}
                </div>
                <span className="text-3xl font-bold text-gray-200 group-hover:text-gray-100 transition-colors">
                  {service.id}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed flex-1 text-[15.2px]">
                {service.description}
              </p>

              {/* Learn More */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <button
                  onClick={() => handleLearnMore(service.path)}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group-hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
