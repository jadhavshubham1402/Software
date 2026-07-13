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
  },
  {
    icon: <SiNextdotjs />,
    title: "Next.js",
    color: "text-black",
  },
  {
    icon: <FaNodeJs />,
    title: "Node.js",
    color: "text-green-600",
  },
  {
    icon: <SiNestjs />,
    title: "NestJS",
    color: "text-red-600",
  },
  {
    icon: <SiMongodb />,
    title: "MongoDB",
    color: "text-green-500",
  },
  {
    icon: <SiPostgresql />,
    title: "PostgreSQL",
    color: "text-blue-700",
  },
  {
    icon: <FaAws />,
    title: "AWS",
    color: "text-orange-500",
  },
  {
    icon: <FaDocker />,
    title: "Docker",
    color: "text-blue-500",
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind CSS",
    color: "text-cyan-500",
  },
  {
    icon: <SiTypescript />,
    title: "TypeScript",
    color: "text-blue-600",
  },
  {
    icon: <FaPython />,
    title: "Python",
    color: "text-yellow-500",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    color: "text-gray-800",
  },
];

const TechnologyStack = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-16">
          <span className="uppercase tracking-widest text-blue-600 font-semibold">
            Technologies
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-gray-900">
            Modern Technologies We Use
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 leading-8">
            Our engineers work with cutting-edge technologies to build secure,
            scalable, and high-performing digital products for businesses
            worldwide.
          </p>
        </div>

        {/* Grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`text-6xl mb-6 flex justify-center ${tech.color}`}
              >
                {tech.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {tech.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
