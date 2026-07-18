import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaUniversity,
  FaShoppingCart,
  FaGraduationCap,
  FaPlaneDeparture,
  FaBuilding,
  FaTruck,
  FaIndustry,
} from "react-icons/fa";

const industries = [
  {
    id: 1,
    icon: <FaHeartbeat />,
    title: "Healthcare",
    description:
      "HIPAA-compliant solutions, telemedicine, EMR/EHR, and patient management systems.",
  },
  {
    id: 2,
    icon: <FaUniversity />,
    title: "Banking & Finance",
    description:
      "Fintech platforms, digital banking, payment gateways, and investment solutions.",
  },
  {
    id: 3,
    icon: <FaShoppingCart />,
    title: "E-Commerce",
    description:
      "High-converting online stores, multi-vendor marketplaces, and B2B portals.",
  },
  {
    id: 4,
    icon: <FaGraduationCap />,
    title: "Education",
    description:
      "LMS platforms, eLearning apps, virtual classrooms, and student management systems.",
  },
  {
    id: 5,
    icon: <FaPlaneDeparture />,
    title: "Travel & Hospitality",
    description:
      "Booking engines, hotel management systems, and tourism platforms.",
  },
  {
    id: 6,
    icon: <FaBuilding />,
    title: "Real Estate",
    description:
      "Property portals, CRM systems, and real estate management software.",
  },
  {
    id: 7,
    icon: <FaTruck />,
    title: "Logistics & Supply Chain",
    description:
      "Fleet management, warehouse automation, and real-time tracking solutions.",
  },
  {
    id: 8,
    icon: <FaIndustry />,
    title: "Manufacturing",
    description:
      "ERP systems, inventory management, production monitoring, and Industry 4.0 solutions.",
  },
];

const Industries = () => {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="uppercase tracking-widest text-blue-600 font-semibold text-sm">
            SERVING EXCELLENCE ACROSS
          </span>
          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            Industries We Transform
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            From healthcare to logistics, we deliver industry-specific digital
            solutions that drive efficiency, innovation, and growth.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -10 }}
              className="group bg-white border border-gray-100 hover:border-blue-200 rounded-3xl p-10 transition-all duration-500 hover:shadow-xl flex flex-col h-full"
            >
              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center text-5xl text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {industry.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {industry.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed flex-1">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
