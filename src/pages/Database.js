import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBolt,
  FaDatabase,
  FaExchangeAlt,
  FaLightbulb,
  FaLock,
  FaShieldAlt,
  FaStream,
  FaTachometerAlt
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Database = () => {
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
            backgroundImage: "url('/images/database1.jpg')",
            opacity: 0.65,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1428]/90 via-[#0A1428]/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm mb-6">
                <FaDatabase /> Database Solutions
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                Intelligent Database Solutions That{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                  Power Growth
                </span>
              </h1>

              <p className="text-2xl text-white/80 max-w-xl mb-10">
                Expert database design, optimization, migration, and management
                for high-performance, scalable, and secure applications.
              </p>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/images/database2.jpg"
                alt="Database Technologies"
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
            { number: "110+", label: "Database Projects" },
            { number: "10x", label: "Avg Query Speedup" },
            { number: "99.99%", label: "Data Availability" },
            { number: "45+", label: "Enterprise Clients" },
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

      {/* DATABASES WE MASTER */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Databases We Master</h2>
            <p className="text-xl text-white/70">
              From relational to NoSQL — expertise across the spectrum
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "PostgreSQL",
                desc: "Advanced relational database with powerful extensibility and reliability",
                image: "/images/database3.jpg",
              },
              {
                name: "MongoDB",
                desc: "Flexible document database ideal for modern, rapidly evolving applications",
                image: "/images/database4.jpg",
              },
              {
                name: "Redis",
                desc: "Ultra-fast in-memory data store for caching, sessions, and real-time use cases",
                image: "/images/database5.jpg",
              },
              {
                name: "MySQL",
                desc: "Robust, widely adopted open-source relational database solution",
                image: "/images/database6.jpg",
              },
              {
                name: "Elasticsearch",
                desc: "Distributed search and analytics engine for fast, relevant results",
                image: "/images/database7.jpg",
              },
              {
                name: "DynamoDB",
                desc: "Fully managed, serverless NoSQL database with seamless scalability",
                image: "/images/database8.jpg",
              },
            ].map((db, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-white/5 border border-white/10 hover:border-cyan-400/50 rounded-3xl overflow-hidden transition-all duration-500"
              >
                <img
                  src={db.image}
                  alt={db.name}
                  className="w-full h-52 object-cover transition-transform group-hover:scale-105"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                    {db.name}
                  </h3>
                  <p className="text-white/70 leading-relaxed">{db.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR DATABASE SERVICES */}
      <section className="py-24 bg-black/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Database Services</h2>
            <p className="text-xl text-white/70">
              Comprehensive solutions for your data needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Database Design & Architecture",
                desc: "Optimized schema design focused on performance, scalability, and long-term maintainability.",
                icon: <FaDatabase className="text-5xl" />,
              },
              {
                title: "Performance Tuning",
                desc: "Query optimization, indexing strategies, and resolution of slow-performing operations.",
                icon: <FaBolt className="text-5xl" />,
              },
              {
                title: "Data Migration",
                desc: "Zero-downtime, secure, and efficient migration between database systems.",
                icon: <FaExchangeAlt className="text-5xl" />,
              },
              {
                title: "Backup & Disaster Recovery",
                desc: "Robust backup strategies and reliable disaster recovery planning.",
                icon: <FaShieldAlt className="text-5xl" />,
              },
              {
                title: "Real-time Data Processing",
                desc: "Streaming pipelines and real-time analytics architecture.",
                icon: <FaStream className="text-5xl" />,
              },
              {
                title: "Data Security & Compliance",
                desc: "Encryption, access control, auditing, and full regulatory compliance.",
                icon: <FaLock className="text-5xl" />,
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-white/5 border border-white/10 hover:border-cyan-400/50 rounded-3xl p-10 transition-all duration-500"
              >
                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Businesses Trust Our Database Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaTachometerAlt className="text-5xl" />,
                title: "Lightning Performance",
                desc: "Optimized databases that deliver exceptional speed and responsiveness.",
              },
              {
                icon: <FaShieldAlt className="text-5xl" />,
                title: "Enterprise Security",
                desc: "Robust protection, encryption, and compliance with industry standards.",
              },
              {
                icon: <FaLightbulb className="text-5xl" />,
                title: "Scalable Architecture",
                desc: "Future-proof designs that grow seamlessly with your business.",
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
            Ready for a High-Performance Database Strategy?
          </h2>
          <p className="text-2xl text-white/90 mb-12">
            Let’s build a secure, scalable, and efficient data foundation for
            your applications.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-7 rounded-3xl font-semibold text-2xl hover:bg-white/95 transition flex items-center gap-4 mx-auto"
          >
            Discuss Your Database Needs
            <FaArrowRight />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Database;