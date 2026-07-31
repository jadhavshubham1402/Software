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
  FaTachometerAlt,
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1428]/90 via-[#0A1428]/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-sm text-cyan-400 text-sm">
                <FaDatabase className="text-xl" />
                <span className="uppercase tracking-widest font-medium">
                  {" "}
                  Database Solutions{" "}
                </span>
              </div>

              <h1 className="text-2xl lg:text-4xl font-bold leading-[1.1] mb-8">
                Intelligent Database Solutions That{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                  Power Growth
                </span>
              </h1>

              <p className="text-lg text-white/80 max-w-xl mb-10">
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

      {/* DATABASES WE MASTER */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Databases We Master</h2>
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
                  className="w-full h-56 object-contain transition-transform group-hover:scale-105"
                />
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                    {db.name}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {db.desc}
                  </p>
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
            <h2 className="text-3xl font-bold mb-4">Our Database Services</h2>
            <p className="text-xl text-white/70">
              Comprehensive solutions for your data needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Database Design & Architecture",
                desc: "Optimized schema design focused on performance, scalability, and long-term maintainability.",
                icon: <FaDatabase className="text-3xl" />,
              },
              {
                title: "Performance Tuning",
                desc: "Query optimization, indexing strategies, and resolution of slow-performing operations.",
                icon: <FaBolt className="text-3xl" />,
              },
              {
                title: "Data Migration",
                desc: "Zero-downtime, secure, and efficient migration between database systems.",
                icon: <FaExchangeAlt className="text-3xl" />,
              },
              {
                title: "Backup & Disaster Recovery",
                desc: "Robust backup strategies and reliable disaster recovery planning.",
                icon: <FaShieldAlt className="text-3xl" />,
              },
              {
                title: "Real-time Data Processing",
                desc: "Streaming pipelines and real-time analytics architecture.",
                icon: <FaStream className="text-3xl" />,
              },
              {
                title: "Data Security & Compliance",
                desc: "Encryption, access control, auditing, and full regulatory compliance.",
                icon: <FaLock className="text-3xl" />,
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-white/5 border border-white/10 hover:border-cyan-400/50 rounded-3xl p-8 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-cyan-400 flex-shrink-0 transition-transform group-hover:scale-110">
                    {service.icon}
                  </div>
                  <span className="text-xl font-semibold group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Why Businesses Trust Our Database Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaTachometerAlt className="text-3xl" />,
                title: "Lightning Performance",
                desc: "Optimized databases that deliver exceptional speed and responsiveness.",
              },
              {
                icon: <FaShieldAlt className="text-3xl" />,
                title: "Enterprise Security",
                desc: "Robust protection, encryption, and compliance with industry standards.",
              },
              {
                icon: <FaLightbulb className="text-3xl" />,
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
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-3xl text-cyan-400 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-14 bg-gradient-to-br from-cyan-600 via-teal-600 to-emerald-700 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">
            Ready for a High-Performance Database Strategy?
          </h2>
          <p className="text-lg text-white/90 mb-12">
            Let’s build a secure, scalable, and efficient data foundation for
            your applications.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-8 py-4 rounded-3xl font-semibold text-lg hover:bg-white/95 transition flex items-center gap-4 mx-auto"
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
