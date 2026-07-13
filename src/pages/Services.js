import {
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaRobot,
  FaPalette,
  FaShieldAlt,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaCode />,
    title: "Custom Software Development",
    description:
      "Scalable and secure web applications tailored to your business needs.",
  },
  {
    id: 2,
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for Android and iOS.",
  },
  {
    id: 3,
    icon: <FaCloud />,
    title: "Cloud Solutions",
    description:
      "Cloud migration, DevOps, and infrastructure management services.",
  },
  {
    id: 4,
    icon: <FaRobot />,
    title: "AI & Machine Learning",
    description:
      "Build intelligent products with AI, automation, and analytics.",
  },
  {
    id: 5,
    icon: <FaPalette />,
    title: "UI / UX Design",
    description:
      "Modern, user-friendly interfaces focused on user experience.",
  },
  {
    id: 6,
    icon: <FaShieldAlt />,
    title: "Support & Maintenance",
    description:
      "Reliable maintenance, security updates, and technical support.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Our Services
          </span>

          <h2 className="text-4xl font-bold mt-4 text-gray-900">
            Innovative Digital Solutions
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            We provide end-to-end software development services that help
            businesses innovate, grow, and stay ahead of the competition.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>

              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-800">
                Learn More →
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;