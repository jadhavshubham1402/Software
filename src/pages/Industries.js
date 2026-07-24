import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaUniversity,
  FaShoppingCart,
  FaGraduationCap,
  FaPlaneDeparture,
  FaBuilding,
} from "react-icons/fa";

const industries = [
  {
    id: 1,
    icon: <FaHeartbeat />,
    title: "Health Tech",
    description:
      "World's Most Advanced Medical & Digital Health Techologies...",
  },
  {
    id: 2,
    icon: <FaUniversity />,
    title: "Automotive",
    description:
      "Digital solutions for automotive businesses, connected vehicles, mobility platforms, and smart transportation systems.",
  },
  {
    id: 3,
    icon: <FaShoppingCart />,
    title: "Retail / e-Commerce",
    description:
      "Digital commerce solutions, online stores, e-commerce platforms, and customer-focused retail experiences.",
  },
  {
    id: 4,
    icon: <FaGraduationCap />,
    title: "Manufacturing",
    description:
      "Smart manufacturing solutions, automation, digital transformation, and Industry 4.0 technologies.",
  },
  {
    id: 5,
    icon: <FaPlaneDeparture />,
    title: "Media & Entertainment",
    description:
      "OTT services, CMS development, and software solutions for Digital Asset Management.",
  },
  {
    id: 6,
    icon: <FaBuilding />,
    title: "Traveling Hospitality",
    description:
      "GDS integration services,Smart Solutions for flight booking,",
  },
];

const Industries = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="uppercase tracking-widest text-blue-600 font-semibold text-sm">
            SERVING EXCELLENCE ACROSS
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4">
            Industries We Transform
          </h2>
          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            From healthcare to logistics, we deliver industry-specific digital
            solutions that drive efficiency, innovation, and growth.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group bg-white border border-gray-100 hover:border-blue-200 rounded-3xl p-8 transition-all duration-500 hover:shadow-xl flex flex-col h-full"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-4xl text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {industry.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {industry.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed flex-1 text-[15px]">
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