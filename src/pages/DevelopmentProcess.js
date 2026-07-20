import { motion } from "framer-motion";
import {
  FaSearch,
  FaLightbulb,
  FaPencilRuler,
  FaCode,
  FaVial,
  FaRocket,
} from "react-icons/fa";

const process = [
  {
    id: "01",
    icon: <FaSearch />,
    title: "Discovery & Research",
    description:
      "Deep dive into your business goals, user needs, and technical requirements.",
  },
  {
    id: "02",
    icon: <FaLightbulb />,
    title: "Strategy & Planning",
    description:
      "Creating a comprehensive roadmap, architecture, and project execution plan.",
  },
  {
    id: "03",
    icon: <FaPencilRuler />,
    title: "UI/UX Design",
    description: "Crafting intuitive, beautiful, and user-centered interfaces.",
  },
  {
    id: "04",
    icon: <FaCode />,
    title: "Development",
    description:
      "Building robust, scalable, and high-performance applications.",
  },
  {
    id: "05",
    icon: <FaVial />,
    title: "Testing & QA",
    description:
      "Rigorous testing, security audits, and performance optimization.",
  },
  {
    id: "06",
    icon: <FaRocket />,
    title: "Deployment & Support",
    description:
      "Smooth launch with continuous monitoring and long-term maintenance.",
  },
];

const DevelopmentProcess = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-cover bg-center bg-no-repeat">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/development-process.png')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/95 to-slate-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="uppercase tracking-[4px] text-blue-400 font-semibold text-sm">
            OUR PROCESS
          </span>
          <h2 className="text-4xl font-bold text-white mt-5 leading-tight">
            From Idea to Launch —<br />
            <span className="text-blue-400">6 Proven Steps</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mt-5 text-lg leading-relaxed">
            Our structured yet flexible development process ensures
            transparency, quality, and faster time-to-market for every project.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {process.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white/10 backdrop-blur-xl border border-white/10 hover:border-blue-400 rounded-3xl p-8 transition-all duration-500 hover:bg-white/15 flex flex-col h-full"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-4xl mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>

              {/* Title + ID */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-blue-400 font-mono font-bold text-xl">
                  {step.id}
                </span>
                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed flex-1 text-[15.2px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
