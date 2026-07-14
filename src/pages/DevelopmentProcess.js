import {
  FaSearch,
  FaLightbulb,
  FaPencilRuler,
  FaCode,
  FaVial,
  FaRocket,
} from "react-icons/fa";
import { motion } from "framer-motion";

const process = [
  {
    id: "01",
    icon: <FaSearch />,
    title: "Discovery",
    description:
      "Understanding your business goals, challenges, and project requirements.",
  },
  {
    id: "02",
    icon: <FaLightbulb />,
    title: "Planning",
    description:
      "Creating a detailed roadmap, timeline, technology stack, and execution strategy.",
  },
  {
    id: "03",
    icon: <FaPencilRuler />,
    title: "UI/UX Design",
    description:
      "Designing modern, user-friendly interfaces focused on exceptional user experience.",
  },
  {
    id: "04",
    icon: <FaCode />,
    title: "Development",
    description:
      "Building secure, scalable, and high-performance software using modern technologies.",
  },
  {
    id: "05",
    icon: <FaVial />,
    title: "Testing",
    description:
      "Performing quality assurance, security testing, and performance optimization.",
  },
  {
    id: "06",
    icon: <FaRocket />,
    title: "Deployment",
    description:
      "Launching your product smoothly with continuous monitoring and long-term support.",
  },
];

const DevelopmentProcess = () => {
  return (
    <section
      className="relative py-24 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/images/development-process.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/90"></div>

      {/* Blue Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/80 to-blue-950/80"></div>

      {/* Decorative Blurs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-600/30 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[4px] text-blue-400 font-semibold">
            Development Process
          </span>

          <h2 className="text-5xl font-bold text-white mt-5">
            How We Transform Ideas Into Products
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mt-6 leading-8">
            Our agile development methodology ensures faster delivery,
            complete transparency, and high-quality software from idea
            validation to deployment.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {process.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                relative
                bg-white/10
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-8
                transition-all
                duration-300
                hover:border-blue-400
                hover:bg-white/15
              "
            >

              {/* Number */}

              <span className="absolute top-6 right-6 text-6xl font-bold text-white/10">
                {item.id}
              </span>

              {/* Icon */}

              <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-3xl text-white mb-8 shadow-lg">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-5">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-8">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default DevelopmentProcess;