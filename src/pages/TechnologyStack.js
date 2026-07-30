import { motion } from "framer-motion";
import {
  FaAws,
  FaDocker,
  FaGithub,
  FaJava,
  FaMicrochip,
  FaMobileAlt,
  FaNodeJs,
  FaPlug,
  FaPython,
  FaReact,
  FaRobot,
} from "react-icons/fa";

import {
  SiDotnet,
  SiFlutter,
  SiGraphql,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiRedis,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";

const technologies = [
  // Frontend
  {
    icon: <FaReact />,
    title: "React.js",
    color: "text-sky-500",
    desc: "Interactive web applications",
  },
  {
    icon: <SiNextdotjs />,
    title: "Next.js",
    color: "text-black",
    desc: "Full-stack React framework",
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind CSS",
    color: "text-cyan-500",
    desc: "Utility-first CSS framework",
  },
  {
    icon: <SiTypescript />,
    title: "TypeScript",
    color: "text-blue-600",
    desc: "Strongly typed JavaScript",
  },

  // Mobile
  {
    icon: <FaMobileAlt />,
    title: "React Native",
    color: "text-sky-500",
    desc: "Cross-platform mobile apps",
  },
  {
    icon: <SiFlutter />,
    title: "Flutter",
    color: "text-blue-400",
    desc: "Beautiful native apps",
  },

  // Backend
  {
    icon: <FaNodeJs />,
    title: "Node.js",
    color: "text-green-600",
    desc: "Scalable backend runtime",
  },
  {
    icon: <SiNestjs />,
    title: "NestJS",
    color: "text-red-600",
    desc: "Enterprise backend framework",
  },
  {
    icon: <FaPython />,
    title: "Python",
    color: "text-yellow-500",
    desc: "AI & backend development",
  },
  {
    icon: <SiDotnet />,
    title: ".NET",
    color: "text-purple-600",
    desc: "Enterprise application development",
  },
  {
    icon: <FaJava />,
    title: "Java",
    color: "text-red-500",
    desc: "Robust enterprise solutions",
  },
  {
    icon: <SiPhp />,
    title: "PHP",
    color: "text-indigo-600",
    desc: "Dynamic web applications",
  },

  // Database
  {
    icon: <SiMongodb />,
    title: "MongoDB",
    color: "text-green-500",
    desc: "Flexible NoSQL database",
  },
  {
    icon: <SiPostgresql />,
    title: "PostgreSQL",
    color: "text-blue-700",
    desc: "Powerful relational database",
  },
  {
    icon: <SiMysql />,
    title: "MySQL",
    color: "text-blue-500",
    desc: "Reliable SQL database",
  },
  {
    icon: <SiRedis />,
    title: "Redis",
    color: "text-red-500",
    desc: "High-speed caching",
  },

  // Cloud & DevOps
  {
    icon: <FaAws />,
    title: "AWS",
    color: "text-orange-500",
    desc: "Scalable cloud platform",
  },
  {
    icon: <FaDocker />,
    title: "Docker",
    color: "text-blue-500",
    desc: "Containerized deployment",
  },
  {
    icon: <SiKubernetes />,
    title: "Kubernetes",
    color: "text-blue-600",
    desc: "Container orchestration",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    color: "text-gray-800",
    desc: "Version control",
  },

  // AI & IoT
  {
    icon: <FaRobot />,
    title: "Artificial Intelligence",
    color: "text-purple-500",
    desc: "AI & Machine Learning",
  },
  {
    icon: <FaMicrochip />,
    title: "IoT",
    color: "text-indigo-500",
    desc: "Connected smart devices",
  },

  // API
  {
    icon: <FaPlug />,
    title: "REST API",
    color: "text-green-500",
    desc: "Secure API integration",
  },
  {
    icon: <SiGraphql />,
    title: "GraphQL",
    color: "text-pink-600",
    desc: "Flexible API queries",
  },
];

const TechnologyStack = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="uppercase tracking-[4px] text-blue-600 font-semibold text-sm">
            POWERED BY
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4">
            Modern Technology Stack
          </h2>
          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
            We use cutting-edge, battle-tested technologies to deliver
            high-performance solutions.
          </p>
        </div>

        {/* Tech Grid - 6 per row on large screens */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ y: -6, scale: 1.04 }}
              className="group bg-white border border-gray-100 hover:border-blue-200 rounded-3xl p-6 transition-all duration-500 flex flex-col items-center text-center hover:shadow-xl"
            >
              <div
                className={`text-5xl mb-5 flex justify-center transition-transform group-hover:scale-110 ${tech.color}`}
              >
                {tech.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {tech.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed flex-1">
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
