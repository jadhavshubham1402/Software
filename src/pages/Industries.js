import {
  FaHeartbeat,
  FaUniversity,
  FaShoppingCart,
  FaGraduationCap,
  FaPlaneDeparture,
  FaBuilding,
  FaTruck,
  FaIndustry,
} from "react-icons/fa";

const industries = [
  {
    id: 1,
    icon: <FaHeartbeat />,
    title: "Healthcare",
    description:
      "HIPAA-ready healthcare software, telemedicine, EMR, and patient management systems.",
  },
  {
    id: 2,
    icon: <FaUniversity />,
    title: "Banking & Finance",
    description:
      "Secure fintech solutions, payment gateways, digital banking, and investment platforms.",
  },
  {
    id: 3,
    icon: <FaShoppingCart />,
    title: "E-Commerce",
    description:
      "Scalable eCommerce platforms, B2B/B2C marketplaces, and omnichannel commerce.",
  },
  {
    id: 4,
    icon: <FaGraduationCap />,
    title: "Education",
    description:
      "LMS platforms, eLearning applications, virtual classrooms, and student portals.",
  },
  {
    id: 5,
    icon: <FaPlaneDeparture />,
    title: "Travel & Hospitality",
    description:
      "Booking systems, travel portals, hotel management, and tourism applications.",
  },
  {
    id: 6,
    icon: <FaBuilding />,
    title: "Real Estate",
    description:
      "Property listing platforms, CRM solutions, and real estate management software.",
  },
  {
    id: 7,
    icon: <FaTruck />,
    title: "Logistics",
    description:
      "Fleet management, warehouse automation, shipment tracking, and supply chain solutions.",
  },
  {
    id: 8,
    icon: <FaIndustry />,
    title: "Manufacturing",
    description:
      "ERP systems, inventory management, production monitoring, and automation software.",
  },
];

const Industries = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-600 uppercase tracking-widest font-semibold">
            Industries
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-gray-900">
            Industries We Empower
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 leading-8">
            We build tailored digital solutions for businesses across diverse
            industries, helping them innovate, automate, and scale with
            confidence.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="group bg-slate-50 border border-gray-200 rounded-2xl p-8 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-3xl group-hover:bg-white group-hover:text-blue-600 transition">
                {industry.icon}
              </div>

              <h3 className="text-2xl font-semibold mt-6 group-hover:text-white">
                {industry.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7 group-hover:text-blue-100">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
