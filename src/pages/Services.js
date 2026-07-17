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
      "Modern, responsive and high-performance web applications built with cutting-edge technologies.",
    path: "/services/web-development",
  },
  {
    id: "02",
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for Android and iOS with exceptional user experience.",
    path: "/services/mobile-development",
  },
  {
    id: "03",
    icon: <FaCloud />,
    title: "Cloud Solutions",
    description:
      "Cloud migration, architecture, DevOps, and scalable infrastructure management.",
    path: "/services/cloud-solutions",
  },
  {
    id: "04",
    icon: <FaRobot />,
    title: "AI & Machine Learning",
    description:
      "Intelligent solutions using Artificial Intelligence, Machine Learning and automation.",
    path: "/services/ai-ml",
  },
  {
    id: "05",
    icon: <FaPalette />,
    title: "UI / UX Design",
    description:
      "User-centered design systems and interfaces that deliver exceptional digital experiences.",
    path: "/services/ui-ux-design",
  },
  {
    id: "06",
    icon: <FaShieldAlt />,
    title: "Support & Maintenance",
    description:
      "Ongoing technical support, monitoring, updates and continuous improvement of your software.",
    path: "/services/support-maintenance", // Extra service not in dropdown but kept as requested
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleLearnMore = (path) => {
    navigate(path);
  };

  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="uppercase tracking-[4px] text-blue-600 font-semibold">
            Our Services
          </span>
          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            Solutions Built Around Your Business
          </h2>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-8">
            We help startups and enterprises build modern digital products using
            the latest technologies with speed, quality and innovation.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Number */}
              <h1 className="absolute top-5 right-6 text-6xl font-bold text-gray-100">
                {service.id}
              </h1>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white text-3xl mb-8 group-hover:rotate-6 transition-transform">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-5">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-8">{service.description}</p>

              {/* Functional Learn More Button */}
              <button
                onClick={() => handleLearnMore(service.path)}
                className="mt-8 flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 group-hover:gap-4 transition-all duration-300"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>

              {/* Hover Border Effect */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
