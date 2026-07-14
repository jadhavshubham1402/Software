import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaLaptopCode,
  FaUsers,
  FaRocket,
  FaCode,
  FaShieldAlt,
} from "react-icons/fa";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: <FaLaptopCode className="text-3xl" />,
    title: "Expert Engineering",
    description:
      "Senior developers crafting scalable, secure architectures with cutting-edge tech stacks.",
    metric: "98% Code Quality",
  },
  {
    icon: <FaUsers className="text-3xl" />,
    title: "True Partnership",
    description:
      "Embedded team approach — we become an extension of your engineering organization.",
    metric: "Zero Miscommunication",
  },
  {
    icon: <FaRocket className="text-3xl" />,
    title: "Lightning Delivery",
    description:
      "Agile + DevOps excellence. Ship production-grade features every 2 weeks.",
    metric: "40% Faster Time-to-Market",
  },
  {
    icon: <FaShieldAlt className="text-3xl" />,
    title: "Enterprise Grade",
    description:
      "Security-first mindset with SOC2, ISO27001 compliance and bulletproof infrastructure.",
    metric: "Zero Breaches",
  },
];

const WhyChooseUs = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  return (
    <section className="relative py-28 bg-[#0A0A0F] text-white overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E3A8A_0.8px,transparent_1px)] bg-[length:40px_40px] opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0F]/90 to-[#0A0A0F]" />

      {/* Tech Grid Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(#3B82F6 1px, transparent 1px),
            linear-gradient(90deg, #3B82F6 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-[1480px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT - Visual Showcase */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Visual Container */}
              <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/images/why-choose-us.png"
                  alt="Software Development Team"
                  className="w-full max-w-[620px] h-auto object-cover"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Floating Tech Cards */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 3.5 }}
                className="absolute -left-8 top-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl w-60"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center">
                    <FaCode className="text-blue-400 text-3xl" />
                  </div>
                  <div>
                    <div className="text-emerald-400 font-mono text-sm">
                      15+
                    </div>
                    <div className="text-white/90 font-semibold">
                      Years of Mastery
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 4.2, delay: 0.8 }}
                className="absolute -right-6 bottom-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl w-56"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400">500+</div>
                  <div className="text-sm text-white/70 mt-1">
                    Projects Delivered
                  </div>
                </div>
              </motion.div>

              {/* Client Trust Badge */}
              <motion.div
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute left-1/2 -bottom-6 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-center px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3"
              >
                <div className="text-3xl">⭐</div>
                <div>
                  <div className="font-bold">150+ Happy Clients</div>
                  <div className="text-xs opacity-90">
                    Trusted by startups &amp; scale-ups
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2 rounded-full text-sm font-medium tracking-widest">
              <span className="text-emerald-400">●</span>
              WHY CHOOSE US
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold leading-tight mt-8">
              Software that doesn't just work —<br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                it accelerates
              </span>
            </h2>

            <p className="mt-8 text-xl text-white/70 max-w-xl">
              We don't just write code. We engineer digital advantage for
              ambitious companies.
            </p>

            {/* Features */}
            <div className="mt-14 space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 p-8 rounded-3xl transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-3 text-white/70 text-[17px] leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="mt-4 text-emerald-400 text-sm font-medium font-mono">
                        {feature.metric}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Signals */}
            <div ref={statsRef} className="grid grid-cols-3 gap-8 mt-16">
              {[
                { number: "500", label: "Projects" },
                { number: "150", label: "Clients" },
                { number: "99", label: "Retention", suffix: "%" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-white font-mono">
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-16 group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 px-10 py-5 rounded-2xl font-semibold text-lg flex items-center gap-3 shadow-2xl shadow-blue-500/30 transition-all"
            >
              Start Your Project
              <span className="group-hover:translate-x-1 transition">→</span>
            </motion.button>

            <p className="text-white/50 text-sm mt-4">
              Average response time: 4 hours
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
