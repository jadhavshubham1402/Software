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
    icon: <FaSearch />,
    title: "Discovery & Research",
    description:
      "Understand business goals, user needs, and technical requirements before development begins.",
  },
  {
    icon: <FaLightbulb />,
    title: "Strategy & Planning",
    description:
      "Define the project roadmap, architecture, milestones, and execution strategy for success.",
  },
  {
    icon: <FaPencilRuler />,
    title: "UI/UX Design",
    description:
      "Create intuitive, responsive, and visually engaging user interfaces for every platform.",
  },
  {
    icon: <FaCode />,
    title: "Development",
    description:
      "Develop secure, scalable, and high-performance applications using modern technologies.",
  },
  {
    icon: <FaVial />,
    title: "Testing & QA",
    description:
      "Perform functional, security, and performance testing to ensure a reliable product.",
  },
  {
    icon: <FaRocket />,
    title: "Deployment & Support",
    description:
      "Launch the application smoothly and provide ongoing maintenance, updates, and support.",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5">
          {process.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white/10 backdrop-blur-xl border border-white/10 hover:border-blue-400 rounded-2xl p-4 transition-all duration-500 hover:bg-white/15 flex flex-col items-center text-center h-full"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-white min-h-[56px] flex items-center justify-center mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-xs leading-6 flex-1">
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
