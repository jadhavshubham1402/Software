import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaDatabase,
  FaBolt,
  FaShieldAlt,
  FaExchangeAlt,
  FaStream,
  FaLock,
} from "react-icons/fa";

const Database = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#0A1428] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://picsum.photos/id/1077/1920/1080')",
            opacity: 0.25,
          }}
        />
        <div className="absolute inset-0 bg-[#0A1428]/80" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/30 text-cyan-400 text-sm mb-6">
                <FaDatabase /> Database Solutions
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Database Solutions
                <br />
                <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  Fast, Reliable & Scalable
                </span>
              </h1>
              <p className="text-2xl text-white/80 max-w-xl">
                Expert database design, optimization, and management for
                high-performance applications.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="https://picsum.photos/id/1077/600/500"
                alt="Database Technologies"
                className="rounded-3xl shadow-2xl max-w-lg border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DATABASES WE MASTER */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Databases We Master
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "PostgreSQL",
                desc: "Advanced relational database with powerful features and extensibility",
                image: "https://picsum.photos/id/1015/400/300",
              },
              {
                name: "MongoDB",
                desc: "Flexible NoSQL document database perfect for modern applications",
                image: "https://picsum.photos/id/106/400/300",
              },
              {
                name: "Redis",
                desc: "Ultra-fast in-memory data store and caching solution",
                image: "https://picsum.photos/id/1074/400/300",
              },
              {
                name: "MySQL",
                desc: "Reliable and widely used open-source relational database",
                image: "https://picsum.photos/id/201/400/300",
              },
              {
                name: "Elasticsearch",
                desc: "Powerful search engine and real-time analytics platform",
                image: "https://picsum.photos/id/251/400/300",
              },
              {
                name: "DynamoDB",
                desc: "AWS managed NoSQL database with seamless scaling",
                image: "https://picsum.photos/id/1077/400/300",
              },
            ].map((db, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-white/5 border border-white/10 hover:border-cyan-400/50 rounded-3xl p-8 transition-all"
              >
                <img
                  src={db.image}
                  alt={db.name}
                  className="w-full h-40 object-cover rounded-2xl mb-6"
                />
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition">
                  {db.name}
                </h3>
                <p className="text-white/70">{db.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR DATABASE SERVICES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Database Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Database Design & Architecture",
                desc: "Optimized schema design for performance, scalability, and maintainability",
                icon: <FaDatabase />,
              },
              {
                title: "Performance Tuning",
                desc: "Query optimization, indexing strategies, and slow query resolution",
                icon: <FaBolt />,
              },
              {
                title: "Data Migration",
                desc: "Safe, efficient, and zero-downtime data migration between systems",
                icon: <FaExchangeAlt />,
              },
              {
                title: "Backup & Disaster Recovery",
                desc: "Robust backup strategies and reliable disaster recovery plans",
                icon: <FaShieldAlt />,
              },
              {
                title: "Real-time Data Processing",
                desc: "Streaming pipelines and real-time analytics architecture",
                icon: <FaStream />,
              },
              {
                title: "Data Security & Compliance",
                desc: "Encryption, access control, auditing, and regulatory compliance",
                icon: <FaLock />,
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group bg-white/5 border border-white/10 hover:border-cyan-400/50 rounded-3xl p-10 transition-all"
              >
                <div className="text-5xl text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition">
                  {service.title}
                </h3>
                <p className="text-white/70">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - WORKING BUTTON */}
      <section className="py-28 bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-700 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Need a Robust Database Solution?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Let’s design a high-performance, secure, and scalable data
            architecture that powers your success.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition flex items-center gap-3 mx-auto"
          >
            Discuss Database Strategy
            <span className="text-2xl">→</span>
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Database;