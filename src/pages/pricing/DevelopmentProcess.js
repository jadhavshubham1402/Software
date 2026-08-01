import React from "react";
import {
  FaClipboardList,
  FaPenNib,
  FaCode,
  FaBug,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";

const process = [
  {
    id: 1,
    title: "Requirement Analysis",
    icon: <FaClipboardList />,
    description:
      "We understand your business goals and gather project requirements.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    icon: <FaPenNib />,
    description:
      "Our designers create modern, responsive, and user-friendly interfaces.",
  },
  {
    id: 3,
    title: "Development",
    icon: <FaCode />,
    description:
      "Our developers build secure, scalable, and high-performance solutions.",
  },
  {
    id: 4,
    title: "Testing & QA",
    icon: <FaBug />,
    description:
      "Every feature is tested to ensure quality, security, and performance.",
  },
  {
    id: 5,
    title: "Deployment",
    icon: <FaRocket />,
    description:
      "We deploy your project to production with proper configuration.",
  },
  {
    id: 6,
    title: "Support & Maintenance",
    icon: <FaHeadset />,
    description:
      "We provide continuous support, updates, and maintenance after launch.",
  },
];

const DevelopmentProcess = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-semibold">
            Our Process
          </span>

          <h2 className="text-4xl font-bold text-white mt-5">
            How We Build Your Project
          </h2>

          <p className="text-gray-400 mt-4">
            From idea to deployment, our proven development process ensures
            transparency, quality, and timely delivery.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">
          {process.map((step) => (
            <div
              key={step.id}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-cyan-400 transition duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl">
                {step.icon}
              </div>

              <span className="absolute top-6 right-6 text-5xl font-bold text-white/5">
                {step.id}
              </span>

              <h3 className="text-xl font-semibold text-white mt-6">
                {step.title}
              </h3>

              <p className="text-gray-400 mt-3 leading-7">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
