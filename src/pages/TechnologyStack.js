import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaPython,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const technologies = [
  {
    icon: <FaReact />,
    title: "React.js",
    color: "text-sky-500",
    desc: "Fast, interactive user interfaces with component-based architecture",
  },
  {
    icon: <SiNextdotjs />,
    title: "Next.js",
    color: "text-black",
    desc: "Full-stack React framework with server-side rendering and SEO optimization",
  },
  {
    icon: <FaNodeJs />,
    title: "Node.js",
    color: "text-green-600",
    desc: "Scalable backend runtime for high-performance server applications",
  },
  {
    icon: <SiNestjs />,
    title: "NestJS",
    color: "text-red-600",
    desc: "Progressive Node.js framework for building efficient enterprise apps",
  },
  {
    icon: <SiMongodb />,
    title: "MongoDB",
    color: "text-green-500",
    desc: "Flexible NoSQL database for modern, rapidly evolving applications",
  },
  {
    icon: <SiPostgresql />,
    title: "PostgreSQL",
    color: "text-blue-700",
    desc: "Advanced open-source relational database with powerful features",
  },
  {
    icon: <FaAws />,
    title: "AWS",
    color: "text-orange-500",
    desc: "Comprehensive cloud platform for scalable and secure infrastructure",
  },
  {
    icon: <FaDocker />,
    title: "Docker",
    color: "text-blue-500",
    desc: "Containerization platform for consistent development and deployment",
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind CSS",
    color: "text-cyan-500",
    desc: "Utility-first CSS framework for rapid and consistent UI development",
  },
  {
    icon: <SiTypescript />,
    title: "TypeScript",
    color: "text-blue-600",
    desc: "Strongly typed JavaScript for better developer experience and fewer bugs",
  },
  {
    icon: <FaPython />,
    title: "Python",
    color: "text-yellow-500",
    desc: "Versatile language perfect for AI, data processing, and backend services",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    color: "text-gray-800",
    desc: "Version control and collaboration platform for modern development teams",
  },
];

const TechnologyStack = () => {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="uppercase tracking-[4px] text-blue-600 font-semibold text-sm">
            POWERED BY
          </span>
          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            Modern Technology Stack
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            We leverage the latest and most reliable technologies to build
            scalable, secure, and high-performance digital solutions.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -8 }}
              className="group bg-white border border-gray-100 hover:border-blue-200 rounded-3xl p-8 transition-all duration-500"
            >
              <div
                className={`text-6xl mb-6 flex justify-center ${tech.color}`}
              >
                {tech.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 text-center mb-3">
                {tech.title}
              </h3>

              <p className="text-gray-600 text-center text-[15px] leading-relaxed">
                {tech.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
