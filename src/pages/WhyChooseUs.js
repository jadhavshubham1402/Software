import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaLaptopCode,
  FaUsers,
  FaRocket,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: <FaLaptopCode className="text-5xl" />,
    title: "Expert Engineering",
    description:
      "Senior developers crafting scalable, secure, and maintainable architectures.",
    metric: "98% Code Quality",
  },
  {
    icon: <FaUsers className="text-5xl" />,
    title: "True Partnership",
    description:
      "We become an extension of your team — aligned goals, transparent communication.",
    metric: "Zero Miscommunication",
  },
  {
    icon: <FaRocket className="text-5xl" />,
    title: "Lightning Delivery",
    description:
      "Agile execution with DevOps excellence. Ship production-grade features fast.",
    metric: "40% Faster Time-to-Market",
  },
  {
    icon: <FaShieldAlt className="text-5xl" />,
    title: "Enterprise Grade",
    description:
      "Security-first mindset with SOC2, ISO27001 compliance and bulletproof systems.",
    metric: "Zero Security Breaches",
  },
];

const WhyChooseUs = () => {
  const navigate = useNavigate();
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  const handleStartProject = () => {
    navigate("/contact");
  };

  return (
    <section className="relative py-28 bg-[#0A0A0F] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Visual */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src="/images/why-choose-us.png"
                alt="Why Choose Us"
                className="rounded-3xl shadow-2xl border border-white/10 w-full max-w-[580px]"
              />

              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-6 -left-6 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl px-7 py-6 shadow-2xl"
              >
                <div className="text-emerald-400 text-5xl font-bold font-mono">
                  15+
                </div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, delay: 0.6 }}
                className="absolute bottom-8 -right-6 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl px-7 py-6 shadow-2xl text-center"
              >
                <div className="text-5xl font-bold text-white">500+</div>
                <div className="text-white/70 text-sm">Projects Delivered</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-medium">
              <span className="text-emerald-400">●</span> WHY COMPANIES TRUST US
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold leading-[1.1] mt-8">
              Software that doesn't just work —<br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                it accelerates growth
              </span>
            </h2>

            <p className="mt-8 text-xl text-white/70 max-w-xl">
              We partner with ambitious companies to build digital products that
              are fast, secure, and built to scale.
            </p>

            {/* Trust Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-8 mt-16">
              {[
                { number: "500", label: "Projects" },
                { number: "150", label: "Clients" },
                { number: "99", label: "Retention", suffix: "%" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.15 }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold font-mono text-white">
                    {isInView ? stat.number : "0"}
                    {stat.suffix}
                  </div>
                  <div className="text-white/60 mt-2 text-sm tracking-widest uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              onClick={handleStartProject}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-16 px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 rounded-2xl font-semibold text-lg flex items-center gap-4 shadow-xl shadow-blue-500/30 transition-all"
            >
              Start Your Project
              <FaArrowRight />
            </motion.button>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="mt-28">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold">What Sets Us Apart</h3>
            <p className="text-white/60 mt-4 text-lg">
              Excellence across every dimension
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 p-9 rounded-3xl transition-all duration-500 group"
              >
                <div className="mb-8 text-blue-400 group-hover:text-cyan-400 transition-colors">
                  {feature.icon}
                </div>

                <h4 className="text-2xl font-semibold mb-4 text-white">
                  {feature.title}
                </h4>

                <p className="text-white/70 leading-relaxed mb-8">
                  {feature.description}
                </p>

                <div className="text-emerald-400 font-mono font-medium text-sm tracking-wider">
                  {feature.metric}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;