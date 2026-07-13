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
      "Designing modern, user-friendly interfaces focused on great user experiences.",
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
      "Launching your product smoothly with continuous monitoring and post-launch support.",
  },
];

const DevelopmentProcess = () => {
  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-20">
          <span className="uppercase tracking-widest text-blue-400 font-semibold">
            Development Process
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            How We Transform Ideas Into Products
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">
            Our agile software development process ensures transparency, faster
            delivery, and exceptional product quality from start to finish.
          </p>
        </div>

        {/* Timeline */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((step) => (
            <div
              key={step.id}
              className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 hover:-translate-y-2 transition duration-300"
            >
              {/* Number */}

              <span className="absolute top-6 right-6 text-6xl font-bold text-slate-800">
                {step.id}
              </span>

              {/* Icon */}

              <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-3xl mb-8">
                {step.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>

              <p className="text-gray-400 leading-8">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
