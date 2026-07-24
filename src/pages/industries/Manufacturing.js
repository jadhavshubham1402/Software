import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaUsers,
  FaMobileAlt,
  FaBrain,
  FaSchool,
  FaShieldAlt,
  FaLightbulb,
  FaArrowRight,
} from "react-icons/fa";

const Manufacturing = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#0A1428] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/education1.jpg')",
            opacity: 0.65,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1428]/90 via-[#0A1428]/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm mb-6">
                <FaGraduationCap /> EdTech Solutions
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                Smart Manufacturing Solutions for the {" "}
                <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                  Future of Industry
                </span>
              </h1>

              <p className="text-2xl text-white/80 max-w-xl mb-10">
               Empowering manufacturers with digital technologies to improve productivity, efficiency, and operational excellence.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/images/education2.jpg"
                alt="Education Technology"
                className="rounded-3xl shadow-2xl max-w-lg border border-white/10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="border-b border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "100+", label: "Projects" },
            { number: "50+", label: "Clients" },
            { number: "10+", label: "Years Experience" },
            { number: "24/7", label: "Support" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border-r border-white/10 last:border-0"
            >
              <p className="text-4xl font-bold text-cyan-400">{stat.number}</p>
              <p className="text-white/70 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* OUR Manufacturing SOLUTIONS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Manufacturing Solutions</h2>
            <p className="text-xl text-white/70">
              Transforming learning experiences through technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Highly Effective Fleet Management System",
                desc: "Manage vehicles, optimize routes, and improve fleet operations through an efficient digital management platform.",
                icon: <FaGraduationCap className="text-5xl" />,
              },
              {
                title: "Efficient Warehouse Management System",
                desc: "Streamline warehouse operations with inventory tracking, automation, and real-time monitoring.",
                icon: <FaUsers className="text-5xl" />,
              },
              {
                title: "Hub Management",
                desc: "Manage transportation hubs efficiently with centralized operations, shipment tracking, and resource planning.",
                icon: <FaMobileAlt className="text-5xl" />,
              },
              {
                title: "Data Analytics",
                desc: "Turn operational data into valuable insights to support better business decisions and improve performance.",
                icon: <FaChalkboardTeacher className="text-5xl" />,
              },
              {
                title: "Billing and Ratings",
                desc: "Automate billing processes, manage pricing, and generate accurate reports for transportation services.",
                icon: <FaBrain className="text-5xl" />,
              },
              {
                title: "Parcel Shipping",
                desc: "Enable secure and timely parcel delivery with end-to-end shipment tracking and delivery management.",
                icon: <FaSchool className="text-5xl" />,
              },
            ].map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-white/5 hover:bg-gradient-to-br hover:from-white/10 hover:to-cyan-400/5 border border-white/10 hover:border-cyan-400/50 rounded-3xl p-10 transition-all duration-500"
              >
                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{solution.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Manufacturing Companies Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaShieldAlt className="text-5xl" />,
                title: "Smart Manufacturing",
                desc: "Improve production efficiency with modern digital technologies.",
              },
              {
                icon: <FaLightbulb className="text-5xl" />,
                title: "Scalable Solutions",
                desc: "Flexible platforms designed to support manufacturing growth.",
              },
              {
                icon: <FaSchool className="text-5xl" />,
                title: "Operational Excellence",
                desc: "Optimize processes, reduce downtime, and improve productivity.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-cyan-400/50 transition group text-center"
              >
                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 bg-gradient-to-br from-cyan-600 via-teal-600 to-emerald-700 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Empower Your Manufacturing Business
          </h2>
          <p className="text-2xl text-white/90 mb-12">
           Build intelligent manufacturing solutions that improve efficiency, productivity, and business growth.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-7 rounded-3xl font-semibold text-2xl hover:bg-white/95 transition flex items-center gap-4 mx-auto"
          >
            Start Your Manufacturing Project
            <FaArrowRight />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;