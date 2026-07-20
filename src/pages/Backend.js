import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBolt,
  FaCloud,
  FaCogs,
  FaDatabase,
  FaLightbulb,
  FaLock,
  FaServer,
  FaTachometerAlt
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Backend = () => {
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
            backgroundImage: "url('/images/backend1.jpg')",
            opacity: 0.65,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1428]/90 via-[#0A1428]/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm mb-6">
                <FaServer /> Backend Development
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                Powerful Backend Systems That{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                  Scale Effortlessly
                </span>
              </h1>

              <p className="text-2xl text-white/80 max-w-xl mb-10">
                Robust, secure, and high-performance server-side solutions that
                power modern applications — from startups to enterprise scale.
              </p>

              <div className="flex gap-8 text-sm text-white/70">
                <div>⚡ High Performance</div>
                <div>🔒 Enterprise Security</div>
                <div>📈 Infinite Scalability</div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/images/backend2.jpg"
                alt="Backend Development"
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
            { number: "140+", label: "Backend Projects" },
            { number: "99.9%", label: "Uptime Delivered" },
            { number: "50+", label: "Enterprise Clients" },
            { number: "10M+", label: "Daily Requests Handled" },
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

      {/* OUR BACKEND SERVICES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Backend Services</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              End-to-end backend solutions built for reliability, speed, and
              scalability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "REST & GraphQL APIs",
                desc: "Fast, well-documented, and developer-friendly APIs with excellent performance.",
                icon: <FaBolt className="text-5xl" />,
              },
              {
                title: "Microservices Architecture",
                desc: "Modular, independently deployable services for maximum scalability.",
                icon: <FaCogs className="text-5xl" />,
              },
              {
                title: "Database Design & Optimization",
                desc: "Efficient SQL & NoSQL architecture, indexing, and performance tuning.",
                icon: <FaDatabase className="text-5xl" />,
              },
              {
                title: "Authentication & Security",
                desc: "JWT, OAuth2, RBAC, encryption, and compliance-ready security systems.",
                icon: <FaLock className="text-5xl" />,
              },
              {
                title: "Real-time Systems",
                desc: "WebSockets, live updates, chat, and collaborative applications.",
                icon: <FaBolt className="text-5xl" />,
              },
              {
                title: "Cloud & Serverless",
                desc: "AWS, Azure, GCP, Docker, Kubernetes, and serverless infrastructure.",
                icon: <FaCloud className="text-5xl" />,
              },
            ].map((service, i) => (
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

      {/* TECH STACK */}
      <section className="py-20 bg-black/60">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Our Backend Technology Stack
          </h2>
          <p className="text-white/60 mb-12">
            Battle-tested tools for robust and scalable systems
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Node.js",
              "Express",
              "NestJS",
              "Python",
              "Django",
              "FastAPI",
              "Go",
              "PostgreSQL",
              "MongoDB",
              "Redis",
              "Docker",
              "Kubernetes",
              "AWS",
              "Azure",
              "RabbitMQ",
              "GraphQL",
            ].map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03 }}
                className="bg-white/5 hover:bg-cyan-400/10 border border-white/10 hover:border-cyan-400 px-8 py-4 rounded-2xl text-lg font-medium transition-all hover:-translate-y-1"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Trusted Across Industries
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Fintech",
                image: "/images/backend3.jpg",
                desc: "Secure Payment & Banking Systems",
              },
              {
                name: "E-commerce",
                image: "/images/backend4.jpg",
                desc: "High-Traffic Scalable Platforms",
              },
              {
                name: "Healthcare",
                image: "/images/backend5.jpg",
                desc: "HIPAA Compliant Solutions",
              },
              {
                name: "Logistics & Supply Chain",
                image: "/images/backend6.jpg",
                desc: "Real-time Tracking & Fleet Management",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl overflow-hidden h-96 shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 p-8">
                  <h3 className="text-3xl font-bold mb-3">{item.name}</h3>
                  <p className="text-white/80">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-black/40">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Our Backend Solutions Stand Out
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaTachometerAlt className="text-5xl" />,
                title: "High Performance & Scalability",
                desc: "Built to handle millions of requests with optimized performance and auto-scaling.",
              },
              {
                icon: <FaLock className="text-5xl" />,
                title: "Security First",
                desc: "Enterprise-grade security, encryption, and compliance from day one.",
              },
              {
                icon: <FaLightbulb className="text-5xl" />,
                title: "Clean & Maintainable Code",
                desc: "Well-architected, documented, and easy-to-extend systems.",
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
            Ready to Build a Rock-Solid Backend?
          </h2>
          <p className="text-2xl text-white/90 mb-12">
            Let’s create a secure, scalable, and high-performance foundation for
            your application.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-7 rounded-3xl font-semibold text-2xl hover:bg-white/95 transition flex items-center gap-4 mx-auto"
          >
            Discuss Your Project
            <FaArrowRight />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Backend;
