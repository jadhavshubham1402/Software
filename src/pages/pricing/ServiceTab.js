import React from "react";
import {
  FaGlobe,
  FaShoppingCart,
  FaCloud,
  FaUsers,
  FaBuilding,
  FaMobileAlt,
  FaRobot,
  FaPalette,
  FaPlug,
  FaSearch,
  FaBullhorn,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    id: "website",
    title: "Website",
    subtitle: "Business Websites",
    icon: FaGlobe,
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    subtitle: "Online Stores",
    icon: FaShoppingCart,
  },
  {
    id: "mobile",
    title: "Mobile App",
    subtitle: "Android & iOS",
    icon: FaMobileAlt,
  },
  {
    id: "saas",
    title: "SaaS",
    subtitle: "Cloud Software",
    icon: FaCloud,
  },
  {
    id: "crm",
    title: "CRM",
    subtitle: "Customer Management",
    icon: FaUsers,
  },
  {
    id: "erp",
    title: "ERP",
    subtitle: "Business Automation",
    icon: FaBuilding,
  },
  {
    id: "ai",
    title: "AI",
    subtitle: "Artificial Intelligence",
    icon: FaRobot,
  },
  {
    id: "uiux",
    title: "UI / UX",
    subtitle: "Modern Design",
    icon: FaPalette,
  },
  {
    id: "api",
    title: "API",
    subtitle: "Backend Services",
    icon: FaPlug,
  },
  {
    id: "seo",
    title: "SEO",
    subtitle: "Search Ranking",
    icon: FaSearch,
  },
  {
    id: "marketing",
    title: "Marketing",
    subtitle: "Digital Growth",
    icon: FaBullhorn,
  },
  {
    id: "maintenance",
    title: "Maintenance",
    subtitle: "Website Support",
    icon: FaTools,
  },
];

const ServiceTabs = ({ selectedService, setSelectedService }) => {
  return (
    <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
      {services.map((service) => {
        const Icon = service.icon;
        const active = selectedService === service.id;

        return (
          <button
            key={service.id}
            onClick={() => setSelectedService(service.id)}
            className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 p-5 text-left ${
              active
                ? "border-cyan-400 bg-cyan-500/10 shadow-[0_0_30px_rgba(6,182,212,0.25)]"
                : "border-white/10 bg-white/5 hover:border-cyan-400/40 hover:bg-white/10"
            }`}
          >
            {/* Glow */}
            {active && (
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 pointer-events-none" />
            )}

            <div className="relative z-10">
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition ${
                  active
                    ? "bg-cyan-500 text-white"
                    : "bg-slate-800 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white"
                }`}
              >
                <Icon />
              </div>

              {/* Title */}
              <h4 className="mt-5 text-white font-semibold text-lg">
                {service.title}
              </h4>

              {/* Subtitle */}
              <p className="text-sm text-gray-400 mt-1">
                {service.subtitle}
              </p>

              {/* Bottom Line */}
              <div
                className={`mt-5 h-1 rounded-full transition-all ${
                  active
                    ? "bg-cyan-400 w-full"
                    : "bg-white/10 w-10 group-hover:w-full group-hover:bg-cyan-400"
                }`}
              />
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default ServiceTabs;