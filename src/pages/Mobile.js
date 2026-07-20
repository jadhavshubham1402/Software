import { motion } from "framer-motion";
import {
  FaApple,
  FaArrowRight,
  FaChartBar,
  FaMobileAlt,
  FaReact
} from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const Mobile = () => {
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
            backgroundImage: "url('/images/mobile1.jpg')",
            opacity: 0.65,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1428]/90 via-[#0A1428]/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm mb-6">
                <FaMobileAlt /> Mobile Development
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                Mobile Apps That{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                  Users Love
                </span>
              </h1>

              <p className="text-2xl text-white/80 max-w-xl mb-10">
                We build exceptional native and cross-platform mobile
                experiences that deliver outstanding performance, beautiful
                design, and real business value.
              </p>

              <div className="flex gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  App Store Ready
                </div>
                <div>High Performance</div>
                <div>Seamless UX</div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <img
                src="/images/mobile2.jpg"
                alt="Mobile Development"
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
            { number: "95+", label: "Apps Delivered" },
            { number: "4.8", label: "Average Rating" },
            { number: "25M+", label: "Combined Downloads" },
            { number: "92%", label: "User Retention" },
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

      {/* MOBILE PLATFORMS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Mobile Development Platforms
            </h2>
            <p className="text-xl text-white/70">
              We deliver excellence across all major technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* iOS */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-12 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="text-6xl text-cyan-400"></div>
                <div>
                  <h3 className="text-3xl font-semibold">iOS Development</h3>
                  <p className="text-white/60">Native iOS Applications</p>
                </div>
              </div>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-start gap-3">→ Swift & SwiftUI</li>
                <li className="flex items-start gap-3">→ UIKit & Combine</li>
                <li className="flex items-start gap-3">
                  → Core Data & CloudKit
                </li>
                <li className="flex items-start gap-3">→ ARKit & Vision</li>
                <li className="flex items-start gap-3">
                  → App Store Optimization
                </li>
              </ul>
            </motion.div>

            {/* Android */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-12 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="text-6xl text-cyan-400">🤖</div>
                <div>
                  <h3 className="text-3xl font-semibold">
                    Android Development
                  </h3>
                  <p className="text-white/60">Native Android Applications</p>
                </div>
              </div>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-start gap-3">→ Kotlin</li>
                <li className="flex items-start gap-3">→ Jetpack Compose</li>
                <li className="flex items-start gap-3">→ Room & WorkManager</li>
                <li className="flex items-start gap-3">→ Coroutines & Flow</li>
                <li className="flex items-start gap-3">
                  → Google Play Services
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Cross Platform */}
          <div className="mt-12 bg-gradient-to-br from-white/5 to-cyan-400/5 border border-white/10 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-semibold mb-8">
              Cross-Platform Development
            </h3>
            <div className="flex flex-wrap justify-center gap-16 text-4xl">
              <div className="flex flex-col items-center gap-3">
                <SiFlutter className="text-cyan-400" />
                <span className="text-xl">Flutter</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <FaReact className="text-cyan-400" />
                <span className="text-xl">React Native</span>
              </div>
            </div>
            <p className="mt-8 text-white/70 max-w-md mx-auto">
              Single codebase. Native performance. Beautiful UI across both
              platforms.
            </p>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 bg-black/60">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Our Mobile Tech Stack</h2>
          <p className="text-white/60 mb-12">
            Modern tools for exceptional mobile experiences
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Swift",
              "Kotlin",
              "Flutter",
              "React Native",
              "SwiftUI",
              "Jetpack Compose",
              "Firebase",
              "Realm",
              "GraphQL",
              "Redux",
              "TypeScript",
              "Fastlane",
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

      {/* WHY CHOOSE US */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Businesses Trust Our Mobile Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaMobileAlt className="text-5xl" />,
                title: "Native Performance",
                desc: "Blazing fast apps with smooth animations and optimal battery usage.",
              },
              {
                icon: <FaChartBar className="text-5xl" />,
                title: "Business Focused",
                desc: "Apps designed to drive engagement, conversions, and revenue.",
              },
              {
                icon: <FaApple className="text-5xl" />,
                title: "App Store Success",
                desc: "Proven track record of high ratings and successful launches.",
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
            Ready to Build Your Next Great App?
          </h2>
          <p className="text-2xl text-white/90 mb-12">
            Let’s choose the perfect technology stack and create a mobile
            experience your users will love.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-white text-black px-14 py-7 rounded-3xl font-semibold text-2xl hover:bg-white/95 transition flex items-center gap-4 mx-auto"
          >
            Start Your Mobile Project
            <FaArrowRight />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Mobile;
