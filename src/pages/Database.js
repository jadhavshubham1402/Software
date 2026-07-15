import React from "react";
import { motion } from "framer-motion";

const Database = () => {
  return (
    <div className="bg-[#0A0A0F] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Database Solutions
                <br />
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
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
                src="/images/database-hero.png"
                alt="Database Technologies"
                className="rounded-3xl shadow-2xl max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Database Types */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Databases We Master
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "PostgreSQL",
                desc: "Advanced relational database with powerful features",
                icon: "🐘",
              },
              {
                name: "MongoDB",
                desc: "Flexible NoSQL document database for modern apps",
                icon: "🌿",
              },
              {
                name: "Redis",
                desc: "Ultra-fast in-memory data store and cache",
                icon: "⚡",
              },
              {
                name: "MySQL",
                desc: "Reliable and widely used relational database",
                icon: "🐬",
              },
              {
                name: "Elasticsearch",
                desc: "Powerful search and analytics engine",
                icon: "🔍",
              },
              {
                name: "DynamoDB",
                desc: "AWS managed NoSQL database with seamless scaling",
                icon: "☁️",
              },
            ].map((db, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="group bg-white/5 border border-white/10 hover:border-amber-400/50 rounded-3xl p-10 transition-all duration-300"
              >
                <div className="text-6xl mb-6">{db.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-amber-400 transition">
                  {db.name}
                </h3>
                <p className="text-white/70">{db.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Database Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Database Design & Architecture",
                desc: "Optimized schema design for performance and scalability",
              },
              {
                title: "Performance Tuning",
                desc: "Query optimization and indexing strategies",
              },
              {
                title: "Data Migration",
                desc: "Safe and efficient data migration between databases",
              },
              {
                title: "Backup & Disaster Recovery",
                desc: "Robust backup strategies and recovery plans",
              },
              {
                title: "Real-time Data Processing",
                desc: "Streaming and real-time analytics pipelines",
              },
              {
                title: "Data Security & Compliance",
                desc: "Encryption, access control, and regulatory compliance",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white/5 border border-white/10 hover:border-amber-400/50 rounded-3xl p-10 transition-all"
              >
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-white/70">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gradient-to-r from-amber-600 to-orange-500 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Need a Robust Database Solution?
          </h2>
          <p className="text-xl mb-10">
            Let’s design a data architecture that powers your success.
          </p>
          <button className="bg-white text-black px-14 py-6 rounded-2xl font-semibold text-xl hover:bg-white/90 transition">
            Discuss Database Strategy →
          </button>
        </div>
      </section>
    </div>
  );
};

export default Database;
